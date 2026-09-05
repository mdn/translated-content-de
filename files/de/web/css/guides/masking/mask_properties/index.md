---
title: CSS-Maskeneigenschaften
short-title: Mask properties
slug: Web/CSS/Guides/Masking/Mask_properties
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

CSS-Maskierung ist eine Technik, die es Ihnen ermöglicht, sichtbare Teile eines Elements zu definieren, indem Sie eine Maske anwenden, die Teile des Elements selektiv basierend auf den Alphakanälen (und optional Farben) der angewendeten Maskenbilder sichtbar macht oder verbirgt.

Der [einführende Leitfaden zur Maskierung](/de/docs/Web/CSS/Guides/Masking) stellt die verschiedenen Arten von Maskenbildern und deren Modi vor. Der Leitfaden zum [Deklarieren mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks) diskutiert die [Maskenebenen](/de/docs/Web/CSS/Guides/Masking/Multiple_masks#understanding_mask_layers) und die {{cssxref("mask")}} Kurzschreibweise, wobei eine kurze Einführung in die Komponenten der Kurzschreibweise gegeben wird. In diesem Leitfaden erkunden wir diese Komponenten im Detail und betrachten, wie sie interagieren. Wir erklären auch, wie in Fällen, in denen mehrere Maskenbilder deklariert werden, die [Maskenschichten zusammengesetzt werden](#the_mask-composite_property) oder kombiniert werden.

CSS-Masken bestehen aus einer oder mehreren Maskenschichten, wobei für jeden Wert in der kommagetrennten Liste von `mask` oder `mask-image` Werten eine Maskenschicht erstellt wird, unabhängig davon, ob die Werte Bilder, Maskenquellen oder das Schlüsselwort `none` sind. Jedes {{cssxref("mask-image")}} wird relativ zu einem [Ursprung](#the_mask-origin_property) positioniert. Die Maskenbilder können [gesteuert](#the_mask-size_property), [wiederholt](#the_mask-repeat_property) und [geschnitten](#the_mask-clip_property) und anschließend mit den vorherigen Schichten zusammengesetzt werden, um die endgültige visuelle Maske auf dem Element zu erstellen.

## Die `mask-image` Eigenschaft

Die Mindestanforderung, um eine Maske zu erstellen, ist eine {{cssxref("mask-image")}} Eigenschaft, die auf einen anderen Wert als `none` gesetzt ist. Das Schlüsselwort `none` innerhalb einer Liste von Maskenquellen erzeugt eine Maskenschicht. Wenn jedoch `none` der einzige Wert der `mask-image` Eigenschaft ist, erfolgt keine Maskierung.

Das Maskenbild kann ein [CSS-Gradient](/de/docs/Web/CSS/Guides/Images/Using_gradients), ein [importiertes Bild](/de/docs/Web/CSS/Guides/Masking/Introduction#with_imported_images) (wie ein PNG, SVG etc.) oder ein SVG {{svgelement("mask")}} Element sein.

In diesem Beispiel erstellen wir fünf Maskenschichten, darunter ein importiertes Bild, zwei Verläufe, eine Schicht ohne Bild und eine SVG `<mask>` Quelle als Maskenbild.

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
}
```

Da eines der Maskenbilder als `none` angegeben ist, werden nur vier Maskenbilder auf das `.masked-element` Element angewendet, während fünf Maskenschichten erstellt werden.

### Die Bedeutung von `none`

Die `none` Schicht hat im Allgemeinen keinen visuellen Effekt (siehe die [`mask-composite` Eigenschaft](#the_mask-composite_property) für die Auswirkungen auf die angewendete Maske), aber da jeder Wert in einer kommagetrennten Liste von `mask-*` Werten auf eine separate Maskenschicht angewendet wird, hat der `none` Wert auch dann eine wichtige Funktion, wenn er die zusammengesetzte Maske nicht ändert.

Diese vierte Schicht in unserer fünf Schicht-Struktur wird mit dem vierten Wert von irgendwelchen anderen kommagetrennten `mask-*` Eigenschaftswerten übereinstimmen. Wie bereits erwähnt, wird die Anzahl der Schichten durch die Anzahl der kommagetrennten Werte im Wert der {{cssxref("mask-image")}} Eigenschaft bestimmt, selbst wenn ein Wert `none` ist. Jeder `mask-*` Wert wird mit den `mask-image` Werten in Reihenfolge abgeglichen. Wenn die Anzahl der Werte in einer `mask-*` Eigenschaft sich von der Anzahl der Maskenschichten unterscheidet, werden überschüssige Werte ignoriert oder, wenn die Eigenschaft weniger Werte als die Anzahl der Maskenschichten hat, werden die Werte wiederholt.

Hat eine `mask-*` Eigenschaft einen einzigen Wert, gilt dieser Wert für alle Schichten. Haben wir fünf Werte, gilt der vierte Wert für die `none` Schicht, während der letzte Wert auf die `<mask>` Quellschicht angewendet wird. Wenn es zwei kommagetrennte Werte gibt, gilt der erste Wert für alle ungeraden Schichten, einschließlich dieser `<mask>` Quellschicht. Zum Beispiel kann jede `mask-*` Eigenschaft eine unterschiedliche Anzahl von Werten haben:

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-repeat: repeat-x, repeat-y;
  mask-position:
    center,
    top left,
    bottom right;
}
```

In diesem Fall wird jede ungerade Schicht entlang der x-Achse wiederholt, während jede gerade Schicht entlang der y-Achse wiederholt wird. Die ersten und vierten Schichtbilder werden zentriert, während die zweiten und fünften an der oberen linken Ecke positioniert werden. Das `none` bedeutet, dass das fünfte Schicht `#svg-mask` Bild entlang der x-Achse an der oberen linken Ecke beginnend wiederholt wird.

Erfahren Sie mehr über [Maskenschichten und das `none` Schlüsselwort](/de/docs/Web/CSS/Guides/Masking/Multiple_masks#mask_layers_and_the_none_keyword).

## Die `mask-mode` Eigenschaft

Die {{cssxref("mask-mode")}} Eigenschaft kann verwendet werden, um den Modus jeder Maskenschicht auf entweder `alpha` oder `luminance` zu setzen oder ihn durch die Quelle standardmäßig auf den Modus der Quelle zu setzen, indem der Wert auf `match-source` gesetzt wird, was der Standard ist. Während die meisten `mask-*` Eigenschaften eine analoge `background-*` Eigenschaft haben (`mask-image` ist analog zur {{cssxref("background-image")}} Eigenschaft, z.B.), haben `mask-mode` und [`mask-composite`](#the_mask-composite_property) keine analoge {{cssxref("background")}} Eigenschaft.

### Maskentypen: `alpha` und `luminance`

Jede Maske ist entweder eine `alpha` oder eine `luminance` Maske.

Bei `alpha` Masken ist die Alphatransparenz jedes Maskenpixels wichtig. Wo immer die Maske undurchsichtig ist, werden die entsprechenden Teile des Elements sichtbar. Wo immer die Maske transparent ist, werden die entsprechenden Teile des Elements verborgen. Wo immer die Maske halbtransparent ist, wird das Element gleichermaßen halbtransparent. Die Farbe der Maske ist egal, nur die Alphatransparenz der Farben.

Bei `luminance` Masken bestimmen sowohl die [Helligkeit der Maskenfarben](/de/docs/Web/CSS/Guides/Masking/Introduction#alpha_transparency_versus_luminance) als auch der Alphakanal die Opazität der maskierten Bereiche.

> [!NOTE]
> Alle folgenden Beispiele verwenden das folgende Bild als `background-image` auf einem Element, auf das Masken angewendet werden:
>
> <img src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg" alt="Pride flag" />

Dieses Beispiel zeigt den Unterschied zwischen `alpha` und `luminance` Masken. Die Masken sind gleich, aber bei der `alpha` Maske zählt nur die Alphatransparenz der Gradientmaskenfarben. Im `luminance` Beispiel zählen R, G, B und A alle.

Zwei Container enthalten Bilder, während der letzte leer ist, aber hinzugefügt wurde, um den Gradienten anzuzeigen, den wir als unsere `mask-image` verwenden werden.

```html live-sample___mode
<div class="alpha">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<div class="luminance">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<div class="gradient"></div>
```

```css hidden live-sample___mode live-sample___position live-sample___position_no-repeat live-sample___clip live-sample___origin live-sample___size live-sample___composite live-sample___composite2 live-sample___composite3
body {
  display: flex;
  gap: 20px;
  padding: 15px;
  background-image: conic-gradient(
    transparent 90deg,
    rgb(0 0 0 / 0.05) 90deg 180deg,
    transparent 180deg 270deg,
    rgb(0 0 0 / 0.05) 270deg
  );
  background-size: 30px 30px;
}
div,
svg,
img {
  width: 220px;
  aspect-ratio: 1;
}
div {
  border: 1px solid black;
}
```

Wir deklarieren einen [`repeating-linear-gradient`](/de/docs/Web/CSS/Reference/Values/gradient/repeating-linear-gradient) mit roten, transparenten und halbdurchsichtigen roten diagonalen Streifen. Dieser Verlauf wird als unsere Maske und, für den letzten Container, als Hintergrundbild verwendet:

```css live-sample___mode
img {
  mask-image: repeating-linear-gradient(
    to bottom right,
    red 0 20px,
    #ff000055 20px 40px,
    transparent 40px 60px
  );
}
.gradient {
  background: repeating-linear-gradient(
    to bottom right,
    red 0 20px,
    #ff000055 20px 40px,
    transparent 40px 60px
  );
}
```

Wir setzen unterschiedliche Werte für die `mask-mode` Eigenschaft für jedes Bild:

```css live-sample___mode
.alpha img {
  mask-mode: alpha;
}

.luminance img {
  mask-mode: luminance;
}
```

{{EmbedLiveSample("mode", "", "270px")}}

Im `alpha` Fall zählt nur die Transparenz der Verlaufsfarben. Wo der Verlauf undurchsichtig rot ist, ist das Bild undurchsichtig. Wo der Verlauf transparent ist, wird das Bild verborgen. Wo der Verlauf zu 50% undurchsichtig ist, ist das Bild zu 50% undurchsichtig. Im `luminance` Fall zählt die Helligkeit der Farben! Siehe [Alphatansparenz versus Lumineszenz](/de/docs/Web/CSS/Guides/Masking/Introduction#alpha_transparency_versus_luminance), um mehr über die Gleichung zu erfahren, die die R, G, B und A Kanäle der Farbe verwendet, um die Opazität der Maske zu bestimmen.

### Der Standardwert von `mask-mode`: `match-source`

Der Standardwert der `mask-mode` Eigenschaft ist `match-source`. Dieser Wert setzt den `mask-mode`, um dem Maskentyp zu entsprechen. Der `match-source` Wert löst sich zu `alpha` für jede Maske auf, außer für Masken, bei denen die Maskenquelle ein SVG {{svgelement("mask")}} Element ist.

Wenn ein SVG `<mask>` Element als Maskenquelle verwendet wird, löst sich der `match-source` Wert auf den Wert der `<mask>` Element {{cssxref("mask-type")}} Eigenschaft auf. Wenn das `<mask>` Element (nicht das "maskierte Element") nicht die CSS `mask-type` Eigenschaft definiert hat, wird diese Eigenschaft auf den Wert des SVG {{svgAttr("mask-type")}} Attributs gesetzt, wenn vorhanden. Wenn das auch weggelassen wird, löst sich der `match-source` Wert zu `luminance` auf.

Fortsetzend mit dem `masked-element` Beispiel, wenn wir die `mask-mode` Eigenschaft nicht explizit setzen, wird es für jede Schicht auf `match-source` zurückfallen, als ob wir das folgende gesetzt hätten:

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: match-source;
}
```

oder unter Verwendung der `mask` Kurzschreibweise:

```css
.masked-element {
  mask:
    url("alphaImage.png") match-source,
    linear-gradient(to right, black, transparent) match-source,
    radial-gradient(circle, white 50%, transparent 75%) match-source,
    none match-source,
    url("#svg-mask") match-source;
}
```

Die erste Maskenschicht, `url("alphaImage.png")`, referenziert ein Bild. Da dies kein `<mask>` Element innerhalb eines `<svg>` ist, löst sich der `mask-mode` zu `alpha` auf, wobei die undurchsichtigen Teile dieses Bildes die entsprechenden Teile des Elements sichtbar machen, während die transparenten oder halbdurchsichtigen Teile unsichtbar oder teilweise sichtbar sind.

Der `linear-gradient(to right, black, transparent)` ist die zweite Maskenschicht und `radial-gradient(circle, white 50%, transparent 75%)` ist die dritte. Auch hier sind dies keine `<mask>` Elemente, daher löst sich der `match-source` Wert zu `alpha` auf. Der Maskierungseffekt dieser Schichten wird standardmäßig durch die [Opazität des Verlaufs](/de/docs/Web/CSS/Guides/Masking/Introduction#opaqueness_versus_transparency) bestimmt.

Die vierte Maskenschicht hat `none` deklariert, was bedeutet, dass die Maske für diese Schicht transparentes Schwarz ist. Die `.masked-element` Klasse setzt `mask-mode: match-source;`. Hätte `mask-mode` stattdessen eine kommagetrennte Liste von fünf verschiedenen Werten, hätte der vierte Wert sich auf diese `none` Schicht bezogen, wodurch der fünfte Wert auf die fünfte Schicht angewendet werden könnte.

Die fünfte Maskenschicht besteht aus einem SVG {{svgelement("mask")}} Element, das `svg-mask` als seine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) hat. Während der Standardmaskenmodus der anderen Schichten `alpha` ist, ist der Standard [Maskentyp von SVG `<mask>` Elementen](/de/docs/Web/CSS/Guides/Masking/Introduction#svg_mask_as_mask_source) der `mask-type` Wert oder, wenn nicht gesetzt, das `mask-type` Attribut. Wenn das auch nicht definiert ist, wird der Wert auf `luminance` zurückfallen. Mit anderen Worten, der Maskierungseffekt der `<mask>` wird sowohl durch die Helligkeit als auch die Transparenz der Farben des `<mask>` Elements bestimmt.

Wenn wir die `mask-mode` Eigenschaft überhaupt nicht deklarieren, und sie für jede Maskenschicht auf `match-source` zurückfallen lassen, würde das Ergebnis in diesem `.masked-element` Fall sich folgendermaßen lösen:

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: alpha, alpha, alpha, match-source, luminance;
}
```

oder unter Verwendung der `mask` Kurzschreibweise:

```css
.masked-element {
  mask:
    url("alphaImage.png") alpha,
    linear-gradient(to right, black, transparent) alpha,
    radial-gradient(circle, white 50%, transparent 75%) alpha,
    none match-source,
    url("#svg-mask") luminance;
}
```

## Die `mask-position` Eigenschaft

Analog zur {{cssxref("background-position")}} Eigenschaft setzt die {{cssxref("mask-position")}} Eigenschaft die Anfangsposition des Maskenbildes relativ zur Ursprungskiste der Maskenschicht, die durch [die `mask-origin` Eigenschaft](#the_mask-origin_property) definiert ist. Die Syntax folgt der [`background-position`'s `<position>` Syntax](/de/docs/Web/CSS/Reference/Properties/background-position#position), wobei der Wert ein, zwei oder vier {{cssxref("&lt;position&gt;")}} Werte sind, die eine oder zwei relative oder absolute Positionsversätze definieren.

### Ein-Wert-Syntax

Wenn nur ein Schlüsselwortwert angegeben ist, gibt dieser Wert die Ursprungsrandkante an, gegen die die Maske platziert wird, wobei die andere Dimension `center` ist.

Wenn nur ein {{cssxref("&lt;length-percentage&gt;")}} Wert angegeben ist, spezifiziert dies die X-Koordinate relativ zur linken Kante des Maskenursprungs, wobei die Y-Koordinate auf `50%` gesetzt ist.

Wenn zwei Schlüsselwortwerte angegeben sind, ist die Reihenfolge des Wertes egal, aber der Wert darf nicht zwei vertikale oder zwei horizontale Achsenwerte enthalten; `left right` und `top bottom` sind beide ungültig.

### Zwei-Wert-Syntax

Wenn zwei Werte vorhanden sind, einschließlich eines Schlüsselworts und eines `<length-percentage>` Wertes, spielt die Reihenfolge nur dann eine Rolle, wenn das Schlüsselwort `center` ist:

- Wenn das Schlüsselwort `left` oder `right` ist, definiert es die X-Koordinate relativ zur linken Kante, und der Wert definiert die Y-Koordinate relativ zur oberen Kante.
- Ebenso definiert ein `top` oder `bottom` Schlüsselwort die Y-Koordinate, wobei das Element gegen die obere oder untere Kante positioniert wird, wobei der andere Wert die X-Werte relativ zur linken Kante der Ursprungsbox der Maske definiert.
- Wenn ein Wert das `center` Schlüsselwort und der andere ein `<length-percentage>` ist, definiert der erste Wert die horizontale Position und der zweite Wert die vertikale Position.

Wenn zwei Werte vorhanden sind und beide `<length-percentage>` Werte sind, spielt die Reihenfolge erneut eine Rolle; der erste Wert definiert die horizontale Positionierung als Versatz von der linken Kante des Maskenpositionierungsbereichs, während der zweite Wert die vertikale Position als Versatz von der oberen Kante des Maskenpositionierungsbereichs definiert.

### Vier-Wert-Syntax

Maskenpositionen können auch relativ zu anderen Ecken als der oberen linken Ecke sein. Die Vier-Wert-Syntax ermöglicht die Versetzung der Maske von jeder Ecke. Der Wert umfasst zwei {{cssxref("length-percentage")}} Versätze, die jeweils von der Ursprungsseite für diesen Versatz vorangestellt werden. Es spielt keine Rolle, ob Sie zuerst das horizontale oder das vertikale Paar angeben, aber Sie müssen das Ursprungsseiten-Schlüsselwort (`left`, `right`, `top`, `bottom`, `x-start`, `x-end`, `y-start`, `y-end`, `block-start`, `block-end`, `inline-start` oder `inline-end`) vor dem Versatz `<length-percentage>` in jedem Paar angeben, und die beiden Ursprungsseiten können nicht von derselben Achse sein.

In der zwei `<length-percentage>` Syntax sind die Ursprungsseiten `top` und `left` in der Reihenfolge. Zum Beispiel ist `mask-position: 10px 20px` gleichbedeutend mit `mask-position: left 10px top 20px`. Wenn die Maske von oben und links versetzt wird, sind die Versatzseiten nicht erforderlich, aber die Reihenfolge spielt eine Rolle. Mit der Vier-Wert-Syntax können Sie `mask-position` verwenden, um das Maskenbild von jeder Kantenkombination zu versetzen, wie `left 10px bottom 20px`, und die Reihenfolge der Seiten spielt keine Rolle, da die Versatzkante durch das vorangestellte Schlüsselwort und nicht durch die Deklarationsreihenfolge definiert wird.

### Prozentwerte

Beim Versetzen mit Prozentwerten wird die Dimension der Maske von der Dimension des Elements subtrahiert, ebenso wie bei [Prozentverschiebungen mit `background-position`](/de/docs/Web/CSS/Reference/Properties/background-position#regarding_percentages).

### Positionierung wiederholender Maskenbilder

Die `mask-position` Eigenschaft definiert die Anfangsposition des Maskenbildes. Bei "Anfangsposition", wenn die [Maske wiederholt wird](#the_mask-repeat_property), platziert der Browser das erste Maskenbild an der durch die `mask-position` Eigenschaft definierten Position und definiert dadurch die Platzierung der Maskenwiederholungen.

In diesem Beispiel setzen wir die Position des ersten Bildes auf `bottom right`, was bedeutet, dass die erste Maske an der unteren rechten Kante der Maskenursprungsbox platziert wird. Da Maskenbilder standardmäßig wiederholt werden, werden die sich wiederholenden Masken an den oberen und linken Seiten der ersten platzierten Maske positioniert.

```html hidden live-sample___position live-sample___position_no-repeat
<div class="keywords">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<div class="twoValue">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<div class="fourValue">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
```

```css hidden live-sample___position live-sample___position_no-repeat
div,
img {
  width: calc(30vw - 20px);
}
```

```css live-sample___position live-sample___position_no-repeat
img {
  mask-image: url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg");
}
.keywords img {
  mask-position: bottom right;
}
.twoValue img {
  mask-position: -20px -10px;
}
.fourValue img {
  mask-position: right -20px bottom -10px;
}
```

```css hidden live-sample___position live-sample___position_no-repeat
div::before {
  content: 'class="' attr(class) '"';
  display: block;
  text-align: center;
  font-family: monospace;
}
body {
  flex-flow: row wrap;
}
```

Die `mask-position` definiert die Position der ersten Maskenbildplatzierung. Diese Demo zeigt, wo das erste Bild platziert ist:

```css hidden live-sample___position_no-repeat
img {
  mask-repeat: no-repeat;
}
```

{{EmbedLiveSample("position_no-repeat", "", "260px")}}

Da der Standardwert für die [`mask-repeat` Eigenschaft](#the_mask-repeat_property) `repeat` ist, werden die Bilder entlang der X- und Y-Achsen basierend auf der Position dieser ersten Maske wiederholt:

{{EmbedLiveSample("position", "", "260px")}}

Das Zwei-Wert-Beispiel definiert die oberen und linken Versätze der ursprünglichen Maske. Das Vier-Wert-Beispiel kombiniert die vorherigen beiden vorherigen Beispiele und positioniert die erste Maske mit denselben Versätzen wie das zweite Bild, jedoch von denselben Kanten wie im ersten Bild gezeigt.

Im ersten Bild ist der erste Stern, der platziert wurde, derjenige unten rechts, mit den wiederholten Sternen darüber und links. Aufgrund dieser Positionierung wird der ursprüngliche Stern nicht abgeschnitten, aber die am höchsten und am weitesten links stehenden Sterne werden abgeschnitten.

Setzen wir die `mask-position` Eigenschaft nicht explizit, fällt sie auf `0% 0%` für jede Schicht zurück, wobei die obere linke Ecke der Maske an der oberen linken Ecke der Maskenursprungsbox anliegt. Fortsetzend mit dem `masked-element` Beispiel ist es, als ob wir das folgende gesetzt hätten:

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: match-source;
  mask-position: 0% 0%;
}
```

oder, um das Beispiel mit der `mask` Kurzschreibweise zu erweitern:

```css
.masked-element {
  mask:
    url("alphaImage.png") 0% 0% match-source,
    linear-gradient(to right, black, transparent) 0% 0% match-source,
    radial-gradient(circle, white 50%, transparent 75%) 0% 0% match-source,
    none 0% 0% match-source,
    url("#svg-mask") 0% 0% match-source;
}
```

## Die `mask-origin` Eigenschaft

Wenn ein Element Padding, einen Rahmen oder beides hat, definiert die {{cssxref("mask-origin")}} Eigenschaft, welche dieser Box-Kantenwerte als Ursprungskiste der Maske oder der _Maskenpositionierungsbereich_, innerhalb dessen ein Maskenbild für diese Schicht positioniert wird. Die `mask-origin` Eigenschaft ist analog zur {{cssxref("background-origin")}} Eigenschaft, jedoch mit einem anderen Anfangswert und SVG-spezifischen Werten.

HTML-Elemente können Masken enthalten, die innerhalb ihrer Inhaltsrahmenbox, ihrer Polsterbox oder ihrer Inhaltsbox enthalten sind. Zum Beispiel, wenn die `mask-position` `top left` ist, ist das relativ zur äußeren Kante des Rahmens, der äußeren Kante des Paddings oder der äußeren Kante des Inhalts?

Im [`mask-position`](#the_mask-position_property) Maskierungsbeispiel war die definierte Position relativ zur Border-Box (dem Standardverhalten), obwohl zu beachten ist, dass das `<img>` keine Rahmen oder Padding hatte. Daher wären in diesem Fall die Inhaltsbox, die Polsterbox und die Border-Box Ursprünge alle gleich.

```html hidden live-sample___origin
<div class="border-box">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<fieldset>
  <legend>Set the <code>mask-origin</code> value</legend>
  <label
    ><input type="radio" name="origin" id="origin_border-box" checked />
    border-box</label
  >
  <label
    ><input type="radio" name="origin" id="origin_padding-box" />
    padding-box</label
  >
  <label
    ><input type="radio" name="origin" id="origin_content-box" />
    content-box</label
  >
</fieldset>
```

```css hidden live-sample___origin live-sample___clip live-sample___size
div {
  all: unset;
}
legend {
  align-self: baseline;
}
label {
  display: block;
}
```

In diesem Beispiel platziert die `mask-position` die ursprüngliche Maske in der oberen linken Ecke des `<img>` Elements, das einen großen Rahmen und ein großes Padding hat, mit einer grünen Hintergrundfarbe, um die Sternmaskierung auf dem Paddingbereich sichtbar zu machen.

```css live-sample___origin live-sample___clip
img {
  mask-image: url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg");
  mask-position: top left;
  padding: 15px;
  border: 15px solid;
  background-color: green;
}
:has(#origin_border-box:checked) img {
  mask-origin: border-box;
}
:has(#origin_padding-box:checked) img {
  mask-origin: padding-box;
}
:has(#origin_content-box:checked) img {
  mask-origin: content-box;
}
```

Ändern Sie den Wert der `mask-origin` Eigenschaft durch Ändern des ausgewählten Optionsfelds und beachten Sie dabei die Position der oberen linken Sternmaske.

{{EmbedLiveSample("origin", "", "350px")}}

Der Standardwert ist `border-box`. Mit diesem Wert wird die ursprüngliche Maske an der oberen linken Kante des Rahmens platziert und nicht abgeschnitten. Wenn die ursprüngliche Maske an der äußeren oder inneren Kante des Paddings platziert wird, gibt es darüber und links Platz; diese wiederholten Masken werden abgeschnitten.

Fortsetzend mit dem `masked-element` Beispiel, wenn wir die `mask-origin` Eigenschaft nicht explizit setzen, fällt sie für jede Schicht auf `border-box` zurück, als ob wir das folgende gesetzt hätten:

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: match-source;
  mask-position: 0% 0%;
  mask-origin: border-box;
}
```

oder, um das Beispiel mit der `mask` Kurzschreibweise zu erweitern:

```css
.masked-element {
  mask:
    url("alphaImage.png") 0% 0% border-box match-source,
    linear-gradient(to right, black, transparent) 0% 0% border-box match-source,
    radial-gradient(circle, white 50%, transparent 75%) 0% 0% border-box
      match-source,
    none 0% 0% border-box match-source,
    url("#svg-mask") 0% 0% border-box match-source;
}
```

Für SVG-Elemente, die nicht die zugehörigen CSS-Layout-Boxen haben, kann eine Maske innerhalb der Füllung, des Strichs oder des Anzeigefelds des SVG-Elements enthalten sein.

## Die `mask-clip` Eigenschaft

Die {{cssxref("mask-clip")}} Eigenschaft bestimmt den Bereich des Elements, der durch eine Maske beeinflusst wird, und schneidet das Element effektiv an der definierten Boxkante ab. Sie ist analog zur {{cssxref("background-clip")}} Eigenschaft, jedoch mit einigen unterschiedlichen Werten.

Da die `mask-clip` Eigenschaft alle `mask-origin` Werte akzeptiert und beide den gleichen Standardwert `border-box` haben, können die beiden Eigenschaften ähnlich erscheinen, aber sie erfüllen sehr unterschiedliche Zwecke. Während `mask-origin` bestimmt, wo ein Maskenbild positioniert wird, sorgt die `mask-clip` Eigenschaft dafür, dass das ursprüngliche Element seinen Inhalt an der angegebenen Box abschneidet. Es ist wichtig, beide zu verstehen: Wenn die `mask-origin` Einstellung verursacht, dass die `mask-position` das Maskenbild außerhalb des Beschneidungsbereichs platziert, wird die Maske abgeschnitten.

Die `mask-clip` Eigenschaft akzeptiert alle `mask-origin` Werte sowie ihren eigenen `no-clip` Wert. Der `no-clip` Wert setzt den gemalten Inhalt wird nicht abgeschnitten. Sie können immer noch das Maskenbild abschneiden, indem Sie es mit `mask-position` Werten, die kleiner als Null sind oder sich auf mehr als 100% lösen, außerhalb des Rahmeninhaltsbereichs positionieren.

Indem Sie `mask-clip` und `mask-origin` auf unterschiedliche Werte setzen, kann das Maskenschichtbild abgeschnitten werden. Zum Beispiel, wenn ein Element mit einem Rahmen und einem Polster `mask-clip` auf `content-box` und `mask-origin` auf `border-box` gesetzt hat, und die `mask-position` auf den oberen linken Rand gesetzt ist, wird das Maskenschichtbild an der oberen linken Ecke abgeschnitten.

Das nächste Beispiel fügt die Beschneidungsoptionen zum vorherigen Beispiel hinzu, um die verschiedenen nicht-SVG `mask-clip` Werte zu demonstrieren und zu zeigen, wie sie die verschiedenen `mask-origin` Werte beeinflussen.

```html hidden live-sample___clip
<div class="border-box">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<fieldset>
  <legend>Set the <code>mask-clip</code> value</legend>
  <label
    ><input type="radio" name="clip" id="clip_border-box" checked />
    border-box</label
  >
  <label
    ><input type="radio" name="clip" id="clip_padding-box" /> padding-box</label
  >
  <label
    ><input type="radio" name="clip" id="clip_content-box" /> content-box</label
  >

  <label><input type="radio" name="clip" id="clip_no-clip" /> no-clip</label>
</fieldset>
<fieldset>
  <legend>Set the <code>mask-origin</code> value</legend>
  <label
    ><input type="radio" name="origin" id="origin_border-box" checked />
    border-box</label
  >
  <label
    ><input type="radio" name="origin" id="origin_padding-box" />
    padding-box</label
  >
  <label
    ><input type="radio" name="origin" id="origin_content-box" />
    content-box</label
  >
</fieldset>
```

```css live-sample___clip
:has(#clip_border-box:checked) img {
  mask-clip: border-box;
}
:has(#clip_padding-box:checked) img {
  mask-clip: padding-box;
}
:has(#clip_content-box:checked) img {
  mask-clip: content-box;
}
```

{{EmbedLiveSample("clip", "", "350px")}}

Die erste Maske wird an der oberen linken Ecke des Maskenursprungscontainers platziert und dann wiederholt. Wenn die Ursprungsbox die `border-box` und die Beschneidungsregion die `content-box` ist, werden die oberen und linken Bereiche des Maskenursprungscontainers abgeschnitten. Im Allgemeinen möchten Sie, dass die `mask-clip` gleich wie die `mask-origin` ist.

Fortsetzend mit dem `masked-element` Beispiel, wenn wir die `mask-clip` Eigenschaft nicht explizit setzen, fällt sie für jede Schicht auf `border-box` zurück, als ob wir das folgende gesetzt hätten:

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: match-source;
  mask-position: 0% 0%;
  mask-origin: border-box;
  mask-clip: border-box;
}
```

oder, um das Beispiel mit der `mask` Kurzschreibweise zu erweitern:

```css
.masked-element {
  mask:
    url("alphaImage.png") 0% 0% border-box border-box match-source,
    linear-gradient(to right, black, transparent) 0% 0% border-box border-box
      match-source,
    radial-gradient(circle, white 50%, transparent 75%) 0% 0% border-box
      border-box match-source,
    none 0% 0% border-box border-box match-source,
    url("#svg-mask") 0% 0% border-box border-box match-source;
}
```

In der `mask` Kurzschreibweise, wenn nur ein [`<geometry-box>`](/de/docs/Web/CSS/Reference/Properties/clip-path#geometry-box) Wert angegeben ist, setzt er sowohl die `mask-origin` als auch die `mask-clip` Eigenschaftswerte. Wenn zwei `<geometry-box>` Werte vorhanden sind, definiert der erste die `mask-origin` und der zweite die `mask-clip`.

Für Maskenschichtbilder, die kein SVG {{svgelement("mask")}} Element referenzieren, definiert die `mask-clip` Eigenschaft, ob der Maskenmalbereich oder der von der Maske betroffene Bereich die Rahmen-, Polster- oder Inhaltsbox ist. Der gemalte Inhalt des Elements wird auf diesen Bereich beschränkt.

Wenn die {{cssxref("mask-image")}} Quelle der Maskenschicht eine `<mask>` ist, hat die `mask-clip` Eigenschaft keinen Effekt. Stattdessen bestimmen die {{svgAttr("x")}}, {{svgAttr("y")}}, {{svgAttr("width")}}, {{svgAttr("height")}}, und {{svgAttr("maskUnits")}} Attribute des `<mask>` Elements den Maskenmalbereich.

## Die `mask-size` Eigenschaft

Die {{cssxref("mask-size")}} Eigenschaft wird verwendet, um Maskenschichten zu dimensionieren. Diese Eigenschaft ist analog zur {{cssxref("background-size")}} Eigenschaft und akzeptiert dieselben Werte. Wenn Sie Ihre Masken dimensionieren, denken Sie daran, dass Bereiche des Elements, die nicht von den Maskenbildern bedeckt sind, verborgen werden.

Es gibt drei Möglichkeiten, eine `mask-size` zu deklarieren:

- das `cover` oder `contain` Schlüsselwort,
- eine Länge, ein Prozentsatz oder das Schlüsselwort `auto`, oder
- zwei Werte, die eine Kombination aus Längen, Prozentsätzen und dem Schlüsselwort `auto` sind.

Das Maskenbild kann auf seine natürliche Größe belassen, gedehnt oder gezwungen werden, sich an den verfügbaren Raum anzupassen. Das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Maskenbilds bleibt standardmäßig erhalten, aber die Deklaration von zwei `<length-percentage>` Werten kann das Maskenbild verzerren, wenn das Verhältnis der beiden Werte nicht dasselbe wie das ursprüngliche Bild ist (`mask-repeat: round` ist das andere Paar von Eigenschaft/Wert, das das Maskenbild verzerren kann).

Wenn die `mask-size` auf `contain` gesetzt ist, wird das Maskenbild die größte Größe haben, die es sein kann, während es vollständig innerhalb des Maskenpositionierungsbereichs enthalten ist. In diesem Fall wird das Maskenbild nicht abgeschnitten, sondern vollständig enthalten.

Wenn auf `cover` gesetzt, wird das Maskenbild die kleinste Größe haben, die es sein kann, um den gesamten Masken-Positionierungsbereich vollständig zu bedecken, wobei die Maske abgeschnitten wird, wenn das Seitenverhältnis der Maske von dem Seitenverhältnis des Maskenpositionierungsbereichs abweicht.

Mit anderen Worten, bei `cover` und `contain`, wird mindestens eine Dimension der Maske die gleiche Größe haben wie die gleiche Dimension des Maskenpositionierungsbereichs; das Maskenbild wächst oder schrumpft so, dass entweder die Breite die gleiche Breite wie der Maskenpositionierungsbereich ist oder die Höhe des Maskenbildes der Höhe des Maskenpositionierungsbereichs entspricht.

Bei `cover`, `contain`, und `<percentage>` Werten ist die Größe relativ zur Ursprungsbox. In unserem Stern-Masken- und Flaggenbild-Beispiel ist das Seitenverhältnis sowohl des Maskenbildes als auch des `<img>` `1:1`, was bedeutet, dass in diesem Fall `cover`, `contain` und `100%` alle die gleiche Maskengröße erzeugen werden. Dieses Beispiel zeigt, wie bei `mask-size` auf `cover`, `contain` oder einen `<percentage>` Wert gesetzt, die tatsächliche Größe der Maske je nach Wert der [`mask-origin` Eigenschaft](#the_mask-origin_property) variieren kann:

```html hidden live-sample___size
<div class="border-box">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<fieldset>
  <legend>Set the <code>mask-origin</code> value</legend>
  <label
    ><input type="radio" name="origin" id="border-box" checked />
    border-box</label
  >
  <label
    ><input type="radio" name="origin" id="padding-box" /> padding-box</label
  >
  <label
    ><input type="radio" name="origin" id="content-box" /> content-box</label
  >
</fieldset>
```

```css hidden live-sample___size
img {
  mask-image: url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg");
  mask-position: top left;
  padding: 15px;
  border: 15px solid;
  background-color: green;
}
```

```css live-sample___size
img {
  mask-size: 100%;
}
:has(#border-box:checked) img {
  mask-origin: border-box;
}
:has(#padding-box:checked) img {
  mask-origin: padding-box;
}
:has(#content-box:checked) img {
  mask-origin: content-box;
}
```

Ändern Sie den Wert der `mask-origin` Eigenschaft, um zu sehen, wie die verschiedenen Werte die Maskengröße beeinflussen:

{{EmbedLiveSample("size", "", "350px")}}

Dieses Beispiel enthält einen `<percentage>` Wert. Wenn ein `<length-percentage>` Wert angegeben ist, definiert er nur die Maskenbreite, wobei die Höhe standardmäßig `auto` ist, was das Seitenverhältnis beibehält. Wenn zwei Werte angegeben sind, definiert der erste die Maskenbreite und der zweite deren Höhe.

Der Standardwert von `mask-size` ist `auto`, rendert die Maske in ihrer {{Glossary("intrinsic_size", "intrinsischen Größe")}}, der Größe, in der die Maske angezeigt wird, wenn kein CSS angewendet wird. Das zugrunde liegende {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Maskenbildes bleibt erhalten, wenn Sie einen einzelnen `<length-percentage>` Wert oder zwei Werte im selben Verhältnis wie das Seitenverhältnis angeben. Wenn Sie zwei Werte angeben, die nicht im selben Verhältnis wie das Seitenverhältnis stehen, wird das Maskenbild verzerrt.

Wie bei allen Langhandkomponenten der Kurzschreibweise, wenn die {{cssxref("mask")}} Kurzschreibweise gesetzt wird und der Wert der `mask-size` Eigenschaft nicht innerhalb einer Maskenschicht definiert ist, wird der `mask-size` Wert auf seinen Anfangswert `auto` für diese Maskenschichten zurückgesetzt.

Wenn das Bild keine intrinsische Proportion hat, zum Beispiel im Fall eines [CSS-Verlaufs](/de/docs/Web/CSS/Reference/Values/gradient), ist das Standard-`auto` der gesamte Maskenpositionierungsbereich, wie er durch [die `mask-origin` Eigenschaft](#the_mask-origin_property) festgelegt ist.

Fortsetzend mit dem `masked-element` Beispiel, wenn wir die `mask-size` Eigenschaft nicht explizit setzen, fällt sie für jede Schicht auf `auto` zurück, als ob wir das folgende gesetzt hätten:

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: match-source;
  mask-position: 0% 0%;
  mask-origin: border-box;
  mask-clip: border-box;
  mask-size: auto;
}
```

oder, um das Beispiel mit der `mask` Kurzschreibweise zu erweitern, wobei die `mask-size` Komponente nach dem `mask-position` Wert folgt, getrennt durch einen Schrägstrich (/):

```css
.masked-element {
  mask:
    url("alphaImage.png") 0% 0% / auto border-box border-box match-source,
    linear-gradient(to right, black, transparent) 0% 0% / auto border-box
      border-box match-source,
    radial-gradient(circle, white 50%, transparent 75%) 0% 0% / auto border-box
      border-box match-source,
    none 0% 0% / auto border-box border-box match-source,
    url("#svg-mask") 0% 0% / auto border-box border-box match-source;
}
```

## Die `mask-repeat` Eigenschaft

Die {{cssxref("mask-repeat")}} Eigenschaft definiert, wie Maskenbilder wiederholt oder gekachelt werden, nachdem das anfängliche Maskenbild dimensioniert und positioniert wurde. Die `mask-repeat` Eigenschaft definiert, ob und wie dieses Maskenbild entlang der horizontalen und vertikalen Achsen wiederholt wird. In den meisten der vorherigen Beispiele haben Sie möglicherweise bemerkt, dass die Sternmaske entlang der X- und Y-Achsen wiederholt wurde. Dies liegt daran, dass `repeat` der Standardwert ist.

Die `mask-repeat` Eigenschaft ist analog zur {{cssxref("background-repeat")}} Eigenschaft und akzeptiert die gleichen [`<repeat-style>`](/de/docs/Web/CSS/Reference/Properties/mask-repeat#values) Werte. Wie im Fall von `background-repeat`, wird die erste (und möglicherweise einzige) Maskenbildwiederholung durch [die `*-position` Eigenschaft](#the_mask-position_property) positioniert und durch [die `*-size` Eigenschaft](#the_mask-size_property) dimensioniert. Die Positionen der wiederholten Hintergrund- oder Maskenbilder basieren auf dieser ersten Bildinstanz.

Fortsetzend mit dem `masked-element` Beispiel, wenn wir die `mask-repeat` Eigenschaft nicht explizit setzen, fällt sie für jede Schicht auf `repeat` zurück, als ob wir das folgende gesetzt hätten:

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: match-source;
  mask-position: 0% 0%;
  mask-origin: border-box;
  mask-clip: border-box;
  mask-size: auto;
  mask-repeat: repeat;
}
```

oder, um das Beispiel mit der `mask` Kurzschreibweise zu erweitern:

```css
.masked-element {
  mask:
    url("alphaImage.png") 0% 0% / auto repeat border-box border-box match-source,
    linear-gradient(to right, black, transparent) 0% 0% / auto repeat border-box
      border-box match-source,
    radial-gradient(circle, white 50%, transparent 75%) 0% 0% / auto repeat
      border-box border-box match-source,
    none 0% 0% / auto repeat border-box border-box match-source,
    url("#svg-mask") 0% 0% / auto repeat border-box border-box match-source;
}
```

## Die `mask-composite` Eigenschaft

Die {{cssxref("mask")}} Kurzschreibweise enthält die {{cssxref("mask-composite")}} Eigenschaft, die definiert, wie mehrere Masken kombiniert werden, um den endgültigen Maskeneffekt zu erzeugen. Jeder Wert in der kommagetrennten Werteliste bestimmt, ob der Browser die zugehörige Maskenschicht zu den darunter liegenden Maskenschichten `hinzufügt`, `subtrahiert`, `schneidet` oder `ausschließt`. Ähnlich wie `mask-mode` und den anderen `mask-*` Eigenschaften, gibt es keine Eigenschaft in der {{cssxref("background")}} Kurzschreibweise, die analog dazu ist.

```html hidden live-sample___composite live-sample___composite3
<div class="add">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<div class="subtract">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<div class="intersect">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<div class="exclude">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
```

In diesem Beispiel fügen wir zwei `mask-image` Werte, einschließlich des Sterns und des Gradienten aus den vorherigen Beispielen als Maskenbilder hinzu:

```css live-sample___composite
img {
  mask-image:
    repeating-linear-gradient(
      to bottom right,
      red 0 20px,
      #ff000055 20px 40px,
      transparent 40px 60px
    ),
    url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg");
}
```

Wir setzen unterschiedliche `mask-composite` Werte für jedes Bild:

```css live-sample___composite live-sample___composite2 live-sample___composite3
.add img {
  mask-composite: add;
}
.subtract img {
  mask-composite: subtract;
}
.intersect img {
  mask-composite: intersect;
}
.exclude img {
  mask-composite: exclude;
}
```

```css hidden live-sample___composite live-sample___composite2 live-sample___composite3
div::before {
  content: "mask-composite: " attr(class);
  display: block;
  text-align: center;
  font-family: monospace;
}
body {
  flex-flow: row wrap;
}
```

{{EmbedLiveSample("composite", "", "600px")}}

Die halbtransparente Sternmaske wird hinzugefügt, subtrahiert, mit der gestreiften Maske geschnitten oder ausgeschlossen, abhängig vom `mask-composite` Wert.

Die `mask-composite` Eigenschaft ist nur in Fällen mit zwei oder mehr Maskenschichten von Bedeutung. Dies liest sich "Maskenschichten", nicht "Maskenbilder", denn wenn `none` enthalten ist, wird die transparente schwarze Maske zusammengesetzt. Ein `none` Wert kann beim Maskieren im Fall von `subtrahieren` und `schneiden` eine tiefgreifende Wirkung haben. Zum Beispiel, wenn der `mask-mode` sich zu `luminance` auflöst, wird das Subtrahieren einer schwarzen Maske die gesamte Maske entfernen (das Element wird verborgen). Ebenso, wenn `none` die letzte Schicht ist mit `mask-composite: intersect`, die gesamte Element wird versteckt. Hier fügen wir eine dritte Schicht, mit `none`, zum vorherigen Beispiel hinzu:

```css live-sample___composite3
img {
  mask-image:
    url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg"),
    repeating-linear-gradient(
      to bottom right,
      red 0 20px,
      #ff000055 20px 40px,
      transparent 40px 60px
    ),
    none;
}
```

{{EmbedLiveSample("composite3", "", "600px")}}

Beachten Sie, wie das `intersect` Beispiel alles ausschließt, weil die transparente schwarze Maske nichts schneidet.

Wenn wir die Reihenfolge der Maskenschichten umkehren, können wir auch sehr unterschiedliche Ergebnisse erhalten:

```html hidden live-sample___composite2
<div class="subtract">
  <img
    class="gradientFirst"
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<div class="subtract">
  <img
    class="starFirst"
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
```

```css live-sample___composite2
.gradientFirst {
  mask-image:
    repeating-linear-gradient(
      to bottom right,
      red 0 20px,
      #ff000055 20px 40px,
      transparent 40px 60px
    ),
    url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg");
}
.starFirst {
  mask-image:
    url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg"),
    repeating-linear-gradient(
      to bottom right,
      red 0 20px,
      #ff000055 20px 40px,
      transparent 40px 60px
    );
}
```

{{EmbedLiveSample("composite2", "", "350px")}}

Im ersten Beispiel werden die Sterne von den Streifen subtrahiert. Im zweiten werden die Streifen von den Sternen subtrahiert.

Wie alle anderen `mask` Komponenten-Eigenschaften, nimmt `mask-composite` eine kommagetrennte Liste von Werten. Da die Eigenschaft beeinflusst, wie Masken kombiniert werden, ist diese Eigenschaft nur relevant für mehrere Maskenschichten und die Anzahl der verwendeten Werte ist eins weniger als die Anzahl der Maskenschichten.

Das letzte Paar von Masken wird zuerst zusammengesetzt. Das vorherige Maskenbild wird dann mit der vorherigen Zusammensetzung zusammengesetzt.

Fortsetzend mit dem `masked-element` Beispiel, wenn wir die `mask-composite` Eigenschaft nicht explizit setzen, fällt sie für jede Schicht auf `add` zurück, als ob wir das folgende gesetzt hätten:

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: match-source;
  mask-position: 0% 0%;
  mask-origin: border-box;
  mask-clip: border-box;
  mask-size: auto;
  mask-repeat: repeat;
  mask-composite: add;
}
```

In diesem Fall wird das `<mask>` Element mit der `none` Schicht zusammengesetzt. Dann wird der radiale Verlauf mit dem Ergebnis der vorherigen Zusammensetzung zusammengesetzt und so weiter.

Wie wir bei allen anderen Komponenteneigenschaften gesehen haben, könnten wir die `mask` Kurzschreibweise verwendet haben:

```css
.masked-element {
  mask:
    url("alphaImage.png") 0% 0% / auto repeat border-box border-box add
      match-source,
    linear-gradient(to right, black, transparent) 0% 0% / auto repeat border-box
      border-box add match-source,
    radial-gradient(circle, white 50%, transparent 75%) 0% 0% / auto repeat
      border-box border-box add match-source,
    none 0% 0% / auto repeat border-box border-box add match-source,
    url("#svg-mask") 0% 0% / auto repeat border-box border-box add match-source;
}
```

## Siehe auch

- [Einführung in die CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [Einführung in die CSS-Beschneidung](/de/docs/Web/CSS/Guides/Masking/Clipping)
- [CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking) Moduls
