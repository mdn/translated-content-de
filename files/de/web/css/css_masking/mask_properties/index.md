---
title: CSS Masken-Eigenschaften
slug: Web/CSS/CSS_masking/Mask_properties
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

CSS-Masking ist eine Technik, die es ermöglicht, sichtbare Teile eines Elements zu definieren, indem Sie eine Maske anwenden, die selektiv Teile des Elements basierend auf den Alpha-Kanälen und optional Farben der angewendeten Maskenbilder zeigt oder verbirgt.

Der [einführende Leitfaden zur Maskierung](/de/docs/Web/CSS/CSS_masking) stellt die verschiedenen Arten von Maskenbildern und deren Modi vor. Der Leitfaden zur [Deklaration mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks) behandelt die [Maskenschichten](/de/docs/Web/CSS/CSS_masking/Multiple_masks#understanding_mask_layers) und die {{cssxref("mask")}} Kurzschreibweise und bietet eine kurze Einführung in die Komponenten-Eigenschaften der Kurzschreibweise. In diesem Leitfaden erkunden wir diese Komponenten-Eigenschaften im Detail und betrachten, wie sie interagieren. Wir erklären auch, wie in Fällen, in denen mehrere Maskenbilder deklariert sind, die [Maskenschichten komponiert](#the_mask-composite_property) oder kombiniert werden.

CSS-Masken bestehen aus einer oder mehreren Maskenschichten, wobei eine Maskenschicht für jeden Wert in der durch Kommas getrennten Liste von `mask` oder `mask-image` Werten erstellt wird, unabhängig davon, ob die Werte Bilder, Maskenquellen oder das Schlüsselwort `none` sind. Jedes {{cssxref("mask-image")}} wird relativ zu einer [Ursprungs-Box](#the_mask-origin_property) [positioniert](#the_mask-position_property). Die Maskenbilder können [skalierte](#the_mask-size_property), [wiederholte](#the_mask-repeat_property) und [geschnittene](#the_mask-clip_property) werden und dann mit den vorherigen Schichten zusammengefügt werden, um die endgültige visuelle Maske auf dem Element zu erstellen.

## Die `mask-image` Eigenschaft

Die Mindestanforderung zur Erstellung einer Maske ist eine {{cssxref("mask-image")}} Eigenschaft, die auf einen Wert ungleich `none` gesetzt ist. Das Schlüsselwort `none` innerhalb einer Liste von Maskenquellen erstellt eine Maskenschicht. Wenn `none` jedoch der einzige Wert der `mask-image` Eigenschaft ist, findet keine Maskierung statt.

Das Maskenbild kann ein [CSS-Gradient](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients), ein [importiertes Bild](/de/docs/Web/CSS/CSS_masking/Masking#with_imported_images) (wie ein PNG, SVG usw.) oder ein SVG {{svgelement("mask")}} Element sein.

In diesem Beispiel erstellen wir fünf Maskenschichten, darunter ein importiertes Bild, zwei Gradienten, eine Schicht ohne Bild und eine SVG `<mask>` Quelle als Maskenbild.

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
}
```

Da eines der Maskenbilder als `none` festgelegt ist, werden nur vier Maskenbilder auf das `.masked-element` Element angewendet, während fünf Maskenschichten erstellt werden.

### Die Bedeutung von `none`

Die `none` Schicht hat in der Regel keinen visuellen Effekt (siehe die [`mask-composite` Eigenschaft](#the_mask-composite_property) für deren Einfluss auf die angewendete Maske), aber da jeder Wert in einer durch Kommas getrennten Liste von `mask-*` Werten auf eine separate Maskenschicht angewendet wird, hat der `none` Wert auch dann eine wichtige Funktion, wenn er die komponierte Maske nicht ändert.

Diese vierte Schicht in unserer Fünf-Schicht-Struktur entspricht dem vierten Wert jeder anderen durch Kommas getrennten `mask-*` Eigenschaftswerte. Wie bereits erwähnt, wird die Anzahl der Schichten durch die Anzahl der durch Kommas getrennten Werte im {{cssxref("mask-image")}} Eigenschaftswert bestimmt, selbst wenn ein Wert `none` ist. Jeder `mask-*` Wert wird in der Reihenfolge mit den `mask-image` Werten abgeglichen. Wenn die Anzahl der Werte in einer `mask-*` Eigenschaft von der Anzahl der Maskenschichten abweicht, werden überschüssige Werte ignoriert oder, wenn die Eigenschaft weniger Werte als die Anzahl der Maskenschichten hat, werden die Werte wiederholt.

Hat eine `mask-*` Eigenschaft einen einzelnen Wert, so gilt dieser Wert für alle Schichten. Haben wir fünf Werte, wird der vierte Wert auf die `none` Schicht angewendet, der letzte Wert auf die `<mask>` Quellschicht. Wenn es zwei durch Kommas getrennte Werte gibt, wird der erste Wert nur auf alle ungeraden Schichten angewendet, einschließlich dieser `<mask>` Quellschicht. Zum Beispiel kann jede `mask-*` Eigenschaft eine unterschiedliche Anzahl von Werten haben:

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

In diesem Fall wird jede ungerade Schicht entlang der x-Achse wiederholt, während jede gerade Schicht entlang der y-Achse wiederholt wird. Die Bilder der ersten und der vierten Schicht werden zentriert, während die der zweiten und der fünften in der oberen linken Ecke positioniert werden. Das `none` bedeutet, dass das Bild `#svg-mask` der fünften Schicht entlang der x-Achse beginnend in der oberen linken Ecke wiederholt wird.

Mehr über [Maskenschichten und das `none` Schlüsselwort](/de/docs/Web/CSS/CSS_masking/Multiple_masks#mask_layers_and_the_none_keyword) erfahren.

## Die `mask-mode` Eigenschaft

Die {{cssxref("mask-mode")}} Eigenschaft kann verwendet werden, um den Modus jeder Maskenschicht auf entweder `alpha` oder `luminance` einzustellen oder es den Modus der Quelle verwenden zu lassen, indem der Wert auf `match-source` gesetzt wird, was der Standardwert ist. Während die meisten `mask-*` Eigenschaften eine analoge `background-*` Eigenschaft haben (`mask-image` ist beispielsweise analog zur {{cssxref("background-image")}} Eigenschaft), haben `mask-mode` und [`mask-composite`](#the_mask-composite_property) keine analoge {{cssxref("background")}} Eigenschaft.

### Maskentypen: `alpha` und `luminance`

Jede Maske ist entweder eine `alpha` oder eine `luminance` Maske.

Bei `alpha` Masken ist die Alpha-Transparenz jedes Maskenpixels von Bedeutung. Wo immer die Maske undurchsichtig ist, werden die entsprechenden Teile des Elements sichtbar sein. Wo immer die Maske transparent ist, werden die entsprechenden Teile des Elements verborgen. Wo die Maske halb undurchsichtig ist, wird das Element gleichermaßen halb undurchsichtig sein. Die Farbe der Maske ist irrelevant, nur die Alpha-Transparenz der Farben.

Bei `luminance` Masken bestimmen sowohl die [Helligkeit der Maskenfarben](/de/docs/Web/CSS/CSS_masking/Masking#alpha_transparency_versus_luminance) als auch der Alpha-Kanal die Undurchsichtigkeit der maskierten Bereiche.

> [!NOTE]
> Alle nachfolgenden Beispiele verwenden das folgende Bild als `background-image` auf einem Element, auf das Masken angewendet werden:
>
> <img src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg" alt="Regenbogenfahne" />

Dieses Beispiel demonstriert den Unterschied zwischen `alpha` und `luminance` Masken. Die Masken sind die gleichen, aber in der `alpha` Maske spielt nur die Alpha-Transparenz der Gradientenmaskenfarben eine Rolle. Im `luminance` Beispiel zählen R, G, B und A.

Zwei Container enthalten Bilder, während der letzte leer ist, aber eingefügt wurde, um den Gradienten anzuzeigen, den wir als `mask-image` verwenden werden.

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

Wir deklarieren einen [`repeating-linear-gradient`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) mit roten, transparenten und halbtransparenten roten diagonalen Streifen. Dieser Gradient wird als unsere Maske verwendet und für den letzten Behälter als Hintergrundbild:

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

Im `alpha` Fall spielt nur die Transparenz der Gradientenfarben eine Rolle. Wo der Gradient undurchsichtig rot ist, ist das Bild undurchsichtig. Wo der Gradient transparent ist, ist das Bild verborgen. Wo der Gradient 50% undurchsichtig ist, ist das Bild 50% undurchsichtig. Im `luminance` Fall spielt die Helligkeit der Farben eine Rolle! Weitere Informationen zur Gleichung, die die R, G, B und A Kanäle der Farben verwendet, um die Undurchsichtigkeit der Maske zu bestimmen, finden Sie unter [Alpha-Transparenz versus Luminanz](/de/docs/Web/CSS/CSS_masking/Masking#alpha_transparency_versus_luminance).

### Der Standardwert der `mask-mode` Eigenschaft: `match-source`

Der Standardwert der `mask-mode` Eigenschaft ist `match-source`. Dieser Wert setzt den `mask-mode`, um dem Modustyp der Maske zu entsprechen. Der `match-source` Wert löst sich in `alpha` auf für jede Maske außer Masken, bei denen die Maskenquelle ein SVG {{svgelement("mask")}} Element ist.

Wenn ein SVG `<mask>` Element als Maskenquelle verwendet wird, löst sich der `match-source` Wert in den Wert der `<mask>` Elements {{cssxref("mask-type")}} Eigenschaft auf. Wenn das `<mask>` Element (nicht das "maskierte Element") die CSS `mask-type` Eigenschaft nicht definiert hat, wird diese Eigenschaft auf den Wert des SVG {{svgAttr("mask-type")}} Attributs standardmäßig gesetzt, falls vorhanden. Wenn auch das weggelassen wird, löst sich der `match-source` Wert in `luminance` auf.

Fortführend mit dem Beispiel des `masked-element`, wenn wir nicht explizit die `mask-mode` Eigenschaft setzen, wird sie auf `match-source` für jede Schicht standardmäßig gesetzt, als ob wir folgendes gesetzt hätten:

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

Die erste Maskenschicht, `url("alphaImage.png")`, referenziert ein Bild. Da dies kein `<mask>` Element innerhalb eines `<svg>` ist, löst sich der `mask-mode` in `alpha` auf, wobei die undurchsichtigen Teile dieses Bildes die entsprechenden Teile des Elements sichtbar machen, während die transparenten oder halbtransparenten Teile unsichtbar oder teilweise sichtbar sind.

Der `linear-gradient(to right, black, transparent)` ist die zweite Maskenschicht und `radial-gradient(circle, white 50%, transparent 75%)` ist die dritte. Auch diese sind keine `<mask>` Elemente, sodass sich der `match-source` Wert in `alpha` auflöst. Der Maskierungseffekt dieser Schichten wird standardmäßig durch die [Undurchsichtigkeit des Gradientenmask](/de/docs/Web/CSS/CSS_masking/Masking#opaqueness_versus_transparency) bestimmt.

Die vierte Maskenschicht hat `none` deklariert, was bedeutet, dass die Maske für diese Schicht transparent schwarz ist. Die `.masked-element` Klasse setzt `mask-mode: match-source;`. Wäre `mask-mode` stattdessen eine durch Kommas getrennte Liste von fünf verschiedenen Werten gewesen, würde der vierte Wert auf diese `none` Schicht angewendet, sodass der fünfte Wert auf die fünfte Schicht angewendet würde.

Die fünfte Maskenschicht besteht aus einem SVG {{svgelement("mask")}} Element, das `svg-mask` als sein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) hat. Während der Standardmaskenmodus der anderen Schichten `alpha` ist, ist der Standardmaskentyp von SVG `<mask>` Elementen der `mask-type` Wert oder, wenn nicht gesetzt, das `mask-type` Attribut. Wenn das auch nicht definiert ist, wird der Wert auf `luminance` standardmäßig gesetzt. Mit anderen Worten, der Maskierungseffekt des `<mask>` wird sowohl durch die Helligkeit als auch durch die Transparenz der Farben des `<mask>` Elements bestimmt.

Wenn wir überhaupt nicht die `mask-mode` Eigenschaft deklarieren und es für jede Maskenschicht standardmäßig auf `match-source` lassen, würde das Ergebnis in diesem `.masked-element` Fall so aussehen:

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

Analog zur {{cssxref("background-position")}} Eigenschaft legt die {{cssxref("mask-position")}} Eigenschaft die Anfangsposition des Maskenbildes relativ zur Ursprungs-Box der Maskenschicht fest, die durch [die `mask-origin` Eigenschaft](#the_mask-origin_property) definiert ist. Die Syntax folgt der [`background-position`'s `<position>` Syntax](/de/docs/Web/CSS/Reference/Properties/background-position#position), wobei der Wert ein, zwei oder vier {{cssxref("&lt;position&gt;")}} Werte ist, die ein bis zwei relative oder absolute Positionsverschiebungen definieren.

### Ein-Wert-Syntax

Wenn nur ein Schlüsselwortwert angegeben ist, gibt dieser Wert die Kante der Ursprungsmaske an, an der die Maske platziert wird, wobei die andere Dimension `center` ist.

Wenn nur ein {{cssxref("&lt;length-percentage&gt;")}} Wert angegeben ist, wird diese als X-Koordinate relativ zur linken Kante des Ursprungs maskiert, wobei die Y-Koordinate auf `50%` gesetzt wird.

Wenn zwei Schlüsselwortwerte angegeben sind, ist die Reihenfolge des Wertes nicht wichtig, der Wert darf jedoch nicht zwei vertikale oder zwei horizontale Achsenwerte enthalten; `left right` und `top bottom` sind beide ungültig.

### Zwei-Wert-Syntax

Wenn zwei Werte vorhanden sind, darunter ein Schlüsselwort und ein `<length-percentage>` Wert, spielt die Reihenfolge nur eine Rolle, wenn das Schlüsselwort `center` ist:

- Wenn das Schlüsselwort `left` oder `right` ist, definiert es die X-Koordinate relativ zur linken Kante, und der Wert definiert die Y-Koordinate relativ zur oberen Kante.
- Ebenso definiert ein `top` oder `bottom` Schlüsselwort die Y-Koordinate und positioniert das Element an der oberen oder unteren Kante, wobei der andere Wert die X-Koordinate relativ zur linken Kante der Ursprungsbox der Maske definiert.
- Wenn ein Wert das Schlüsselwort `center` ist und der andere ein `<length-percentage>`, definiert der erste Wert die horizontale Position und der zweite die vertikale Position.

Wenn zwei Werte vorhanden sind und beide `<length-percentage>` Werte sind, spielt die Reihenfolge wieder eine Rolle; der erste Wert definiert die horizontale Positionierung als ein Versatz von der linken Kante des Maskenpositionierungsbereiches, während der zweite Wert die vertikale Position als ein Versatz von der oberen Kante des Maskenpositionierungsbereiches definiert.

### Vier-Wert-Syntax

Maskenpositionen können auch relativ zu Ecken, die nicht oben links sind, sein. Die Vier-Wert-Syntax ermöglicht das Versetzen der Maske von jeder Ecke. Der Wert enthält zwei {{cssxref("length-percentage")}} Versatzwerte, die jeweils der Ursprungsseite für diesen Versatz vorangehen müssen. Ob Sie das horizontale oder vertikale Paar zuerst deklarieren, spielt keine Rolle, aber Sie müssen das Ursprungsseiten-Schlüsselwort (`left`, `right`, `top`, `bottom`, `x-start`, `x-end`, `y-start`, `y-end`, `block-start`, `block-end`, `inline-start`, oder `inline-end`) vor dem Versatz `<length-percentage>` in jedem Paar deklarieren, und die beiden Ursprungsseiten dürfen nicht von derselben Achse sein.

In der Zwei-Wert-Syntax sind die Ursprungsseiten `top` und `left`, in dieser Reihenfolge. Zum Beispiel ist `mask-position: 10px 20px` das Äquivalent zu `mask-position: left 10px top 20px`. Wenn das Versetzen von oben und links erfolgt, sind die Versatzseiten nicht erforderlich, aber die Reihenfolge spielt eine Rolle. Mit der Vier-Wert-Syntax können Sie `mask-position` verwenden, um das Maskenbild von beliebigen Kantenkombinationen zu versetzen, wie `left 10px bottom 20px`, und die Reihenfolge der Seiten spielt keine Rolle, da die Versatzkante durch das dem Versatz erwartende Schlüsselwort und nicht durch die Deklarationsreihenfolge definiert ist.

### Prozentsatzwerte

Beim Versetzen mit Prozentsatzwerten wird die Maskendimension von der Elementdimension subtrahiert, genau wie bei [Prozentsatzversatz mit `background-position`](/de/docs/Web/CSS/Reference/Properties/background-position#regarding_percentages).

### Positionierung wiederholter Maskenbilder

Die `mask-position` Eigenschaft definiert die Anfangsposition des Maskenbildes. Mit "Anfangsposition" ist gemeint, wenn die [Maske wiederholt wird](#the_mask-repeat_property), platziert der Browser das erste Maskenbild in der durch die `mask-position` Eigenschaft definierten Position und definiert so die Platzierung der Wiederholungen der Maske.

In diesem Beispiel setzen wir die Position des ersten Bildes auf `bottom right`, was bedeutet, dass die erste Maske am unteren rechten Rand der Ursprungs-Box der Maske platziert wird. Da Maskenbilder standardmäßig wiederholt werden, werden die wiederholten Masken entlang der oberen und linken Seite der zuerst platzierten Maske positioniert.

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

Die `mask-position` definiert die Position der Platzierung des ersten Maskenbildes. Diese Demo zeigt, wo das erste Bild platziert ist:

```css hidden live-sample___position_no-repeat
img {
  mask-repeat: no-repeat;
}
```

{{EmbedLiveSample("position_no-repeat", "", "260px")}}

Da der Standardwert der [`mask-repeat` Eigenschaft](#the_mask-repeat_property) `repeat` ist, werden die Bilder entlang der X- und Y-Achsen wiederholt, basierend auf der Position dieser ersten Maske:

{{EmbedLiveSample("position", "", "260px")}}

Das Zwei-Wert-Beispiel definiert die oberen und linken Versätze der ursprünglichen Maske. Das Vier-Wert-Beispiel kombiniert die beiden vorherigen Beispiele und positioniert die erste Maske mit denselben Versätzen wie das zweite Bild, aber von denselben Kanten wie im ersten Bild demonstriert.

Im ersten Bild wird der erste zu platzierende Stern am unteren rechten Rand platziert, mit den wiederholten Sternen oben und links. Aufgrund dieser Positionierung wird der anfängliche Stern nicht abgeschnitten, aber die am höchsten und am linken Rand stehenden Sterne schon.

Wenn wir nicht explizit die `mask-position` Eigenschaft setzen, wird sie standardmäßig auf `0% 0%` für jede Schicht gesetzt, wobei die obere linke Ecke der Maske an der oberen linken Ecke der Ursprungs-Box der Maske anliegt. Fortführend mit dem `masked-element` Beispiel ist es, als hätten wir folgendes festgelegt:

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: match-source;
  mask-position: 0% 0%;
}
```

oder unter Erweiterung des Beispiels unter Verwendung der `mask` Kurzschreibweise:

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

Wenn ein Element eine Auffüllung, einen Rand oder beides hat, definiert die {{cssxref("mask-origin")}} Eigenschaft, welcher dieser Rahmenkanten-Werte als Ursprungs-Box der Maske oder als _Maskenpositionierungsbereich_ fungiert, innerhalb dessen ein Maskenbild für diese Schicht positioniert wird. Die `mask-origin` Eigenschaft ist analog zur {{cssxref("background-origin")}} Eigenschaft, jedoch mit einem anderen Ausgangswert und nur für SVG gültige Werte.

HTML-Elemente können Masken enthalten, die in ihrem Inhaltsrahmenkasten, Auffüllungskasten oder Inhaltskasten sind. Zum Beispiel, wenn die `mask-position` `top left` ist, ist das relativ zur äußeren Kante des Rahmens, der äußeren Kante der Auffüllung oder der äußeren Kante des Inhalts?

Im [`mask-position`](#the_mask-position_property) Maskierungsbeispiel wurde die definierte Position relativ zum border-box gesetzt (das Standardverhalten), obwohl es erwähnenswert ist, dass das `<img>` keinen Rahmen oder Auffüllung gesetzt hatte, daher würden die content-box, padding-box und border-box Ursprünge in diesem Fall alle gleich sein.

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

In diesem Beispiel platziert die `mask-position` die anfängliche Maske in der oberen linken Ecke des `<img>` Elements, das einen großen Rahmen und eine Auffüllung hat, mit einer grünen Hintergrundfarbe, um das Ster-Masking auf dem Auffüllungsbereich sichtbar zu machen.

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

Ändern Sie den Wert der `mask-origin` Eigenschaft, indem Sie den ausgewählten Radio-Button wechseln und die Position des oberen linken Sternmaskierung im Prozess beobachten.

{{EmbedLiveSample("origin", "", "350px")}}

Der Standardwert ist `border-box`. Mit diesem Wert wird die anfängliche Maske an der oberen linken Kante des Rahmens platziert und nicht abgeschnitten. Wenn die anfängliche Maske an der äußeren oder inneren Kante der Auffüllung platziert wird, bleibt oberhalb und links Platz; diese wiederholten Masken werden abgeschnitten.

Fortführend mit dem `masked-element` Beispiel, wenn wir nicht explizit die `mask-origin` Eigenschaft setzen, wird sie für jede Schicht standardmäßig auf `border-box` gesetzt, als hätten wir folgendes festgelegt:

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

oder unter Erweiterung des Beispiels unter Verwendung der `mask` Kurzschreibweise:

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

Für SVG-Elemente, die keine zugehörigen CSS-Layout-Boxen haben, kann eine Maske innerhalb des Füll-, Strich- oder Ansichtsrahmenkastens des SVG-Elements enthalten sein.

## Die `mask-clip` Eigenschaft

Die {{cssxref("mask-clip")}} Eigenschaft bestimmt den Bereich des Elements, der von einer Maske betroffen sein wird, indem sie das Element effektiv an der definierten Rahmenkante clippt. Es ist analog zur {{cssxref("background-clip")}} Eigenschaft, jedoch mit einigen unterschiedlichen Werten.

Da die `mask-clip` Eigenschaft alle `mask-origin` Werte akzeptiert und beide den gleichen Standardwert `border-box` haben, scheinen die beiden Eigenschaften ähnlich zu sein, aber sie dienen sehr unterschiedlichen Zwecken. Während `mask-origin` bestimmt, wo ein Maskenbild positioniert wird, bewirkt die `mask-clip` Eigenschaft, dass das ursprüngliche Element auf den angegebenen Kasteninhalt zugeschnitten wird. Es ist wichtig, beide zu verstehen: Wenn `mask-origin` dazu führt, dass `mask-position` das Maskenbild außerhalb der Beschneidungsbereich platziert, wird die Maske zugeschnitten.

Die `mask-clip` Eigenschaft akzeptiert alle `mask-origin` Werte sowie ihren eigenen `no-clip` Wert. Der `no-clip` Wert bewirkt, dass der bemalte Inhalt nicht abgeschnitten wird. Sie können dennoch verursachen, dass das Maskenbild abgeschnitten wird, indem Sie es außerhalb des Rahmeninhaltsbereiches positionieren, indem Sie `mask-position` Werte verwenden, die weniger als null sind oder auf mehr als 100% auflösen.

Wenn `mask-clip` und `mask-origin` auf unterschiedliche Werte gesetzt sind, kann das Bild der Maskenschicht abgeschnitten werden. Wenn ein Element mit einem Rand und einer Auffüllung `mask-clip` auf `content-box` und `mask-origin` auf `border-box` gesetzt hat, und die `mask-position` auf die `top left` Kante gesetzt ist, wird das Bild der Maskenschicht an der oberen linken Kante zugeschnitten.

Das nächste Beispiel fügt die Beschneidungsoptionen zum vorherigen Beispiel hinzu, um die verschiedenen non-SVG `mask-clip` Werte zu demonstrieren und zu zeigen, wie sie die verschiedenen `mask-origin` Werte beeinflussen.

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

Die erste Maske wird an der oberen linken Kante des Maskenursprungcontainers platziert und dann wiederholt. Wenn der Ursprungsbox `border-box` ist und sich der Beschneidungsbereich auf `content-box` befindet, werden die oberen und linken Bereiche des Maskenursprungcontainers abgeschnitten. Generell möchten Sie, dass `mask-clip` gleich zu `mask-origin` ist.

Fortführend mit dem `masked-element` Beispiel, wenn wir nicht explizit die `mask-clip` Eigenschaft setzen, wird sie für jede Schicht standardmäßig auf `border-box` gesetzt, als hätten wir folgendes gesetzt:

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

oder unter Erweiterung des Beispiels unter Verwendung der `mask` Kurzschreibweise:

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

In der `mask` Kurzschreibung, wenn nur ein [`<geometry-box>`](/de/docs/Web/CSS/Reference/Properties/clip-path#geometry-box) Wert angegeben wird, setzt es sowohl die `mask-origin` als auch `mask-clip` Eigenschaftswerte. Wenn zwei `<geometry-box>` Werte vorhanden sind, definiert der erste `mask-origin` und der zweite `mask-clip`.

Für Maskenschichtbilder, die kein SVG {{svgelement("mask")}} Element referenzieren, definiert die `mask-clip` Eigenschaft, ob der Malbereich der Maske oder der Bereich, der von der Maske betroffen ist, der Rahmen-, Auffüllungs- oder Inhaltskasten ist. Der bemalte Inhalt des Elements wird auf diesen Bereich beschränkt.

Wenn die {{cssxref("mask-image")}} Quelle der Maskenschicht ein `<mask>` ist, hat die `mask-clip` Eigenschaft keine Wirkung. Stattdessen bestimmen die {{svgAttr("x")}}, {{svgAttr("y")}}, {{svgAttr("width")}}, {{svgAttr("height")}}, und {{svgAttr("maskUnits")}} Attribute des `<mask>` Elements den Malbereich der Maske.

## Die `mask-size` Eigenschaft

Die {{cssxref("mask-size")}} Eigenschaft wird verwendet, um Maskenschichten zu skalieren. Diese Eigenschaft entspricht der {{cssxref("background-size")}} Eigenschaft und nimmt dieselben Werte an. Beim Skalieren Ihrer Masken sollten Sie daran denken, dass Bereiche des Elements, die nicht von den Maskenbildern abgedeckt werden, verborgen sind.

Es gibt drei Möglichkeiten, eine `mask-size` zu deklarieren:

- das Schlüsselwort `cover` oder `contain`,
- eine Länge, einen Prozentsatz oder das Schlüsselwort `auto`, oder
- zwei Werte, die eine Kombination aus Längen, Prozentsätzen und dem Schlüsselwort `auto` sind.

Das Maskenbild kann in seiner natürlichen Größe belassen, gestreckt oder an den verfügbaren Platz angepasst werden. Das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Maskenbildes wird standardmäßig beibehalten, aber die Deklaration von zwei `<length-percentage>` Werten kann das Maskenbild verzerren, wenn das Verhältnis der beiden Werte nicht das gleiche wie beim Originalbild ist (`mask-repeat: round` ist das andere Eigenschafts-/Wertepaar, das das Maskenbild verzerren kann).

Wenn die `mask-size` auf `contain` gesetzt wird, wird das Maskenbild die größte Größe sein, die es sein kann, während es vollständig im Maskenpositionierungsbereich enthalten bleibt. In diesem Fall wird das Maskenbild nicht abgeschnitten, sondern vollständig enthalten.

Wenn auf `cover` gesetzt, wird das Maskenbild die kleinste Größe sein, die es sein kann, um den gesamten Maskenpositionierungsbereich vollständig abzudecken, wobei die Maske abgeschnitten wird, wenn das Masken-Seitenverhältnis vom Seitenverhältnis des Maskenpositionierungsbereichs abweicht.

Mit anderen Worten, mit `cover` und `contain`, wird mindestens eine Dimension der Maske die gleiche Größe wie die gleiche Dimension des Maskenpositionierungsbereichs haben; das Maskenbild wird entweder größer oder kleiner, sodass entweder die Breite gleich der Breite des Maskenpositionierungsbereichs ist, oder die Höhe des Maskenbildes gleich der Höhe des Maskenpositionierungsbereichs ist.

Mit `cover`, `contain` und `<percentage>` Werten bezieht sich die Größe relativ zur Ursprungsbox. In unserem Sternmaskierungs- und Flaggenbeispiel haben das Maskenbild und das `<img>` dasselbe Seitenverhältnis von `1:1`, was bedeutet, dass in diesem Fall `cover`, `contain` und `100%` dieselbe Maskengröße erzeugen. Dieses Beispiel zeigt, wie, wenn `mask-size` auf `cover`, `contain` oder einen `<percentage>` Wert gesetzt ist, die tatsächliche Größe der Maske je nach Wert der [`mask-origin` Eigenschaft](#the_mask-origin_property) unterschiedlich sein kann:

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

Ändern Sie den Wert der `mask-origin` Eigenschaft, um zu sehen, wie die unterschiedlichen Werte die Maskengröße beeinflussen:

{{EmbedLiveSample("size", "", "350px")}}

Dieses Beispiel enthielt einen `<percentage>` Wert. Wenn ein `<length-percentage>` Wert angegeben ist, definiert er nur die Maskenbreite, wobei die Höhe standardmäßig `auto` ist, was das Seitenverhältnis beibehält. Wenn zwei Werte angegeben sind, definiert der erste die Maskenbreite und der zweite deren Höhe.

Der Standardwert von `mask-size` ist `auto`, was die Maske in ihrer {{Glossary("intrinsic_size", "inhärenten Größe")}} rendert, der Größe, in der die Maske ohne angewandtes CSS angezeigt würde. Das zugrunde liegende {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Maskenbildes wird beibehalten, wenn Sie einen einzigen `<length-percentage>` Wert festlegen, oder zwei Werte im selben Verhältnis wie das Seitenverhältnis. Wenn Sie zwei Werte nicht im selben Verhältnis wie das Seitenverhältnis deklarieren, wird das Maskenbild verzerrt.

Wie bei allen Langhandkomponenten der Kurzeigenschaft, wenn die {{cssxref("mask")}} Kurzschreibweise gesetzt ist und der Wert der `mask-size` Eigenschaft in keiner Maskenschicht definiert ist, wird der `mask-size` Wert für diese Maskenschichten auf seinen ursprünglichen Wert `auto` zurückgesetzt.

Wenn das Bild keine inhärente Proportion hat, zum Beispiel im Fall eines [CSS-Gradienten](/de/docs/Web/CSS/gradient), ist das Standard-`auto` die Gesamtheit des Maskenpositionierungsbereichs, wie durch [die `mask-origin` Eigenschaft](#the_mask-origin_property) festgelegt.

Fortführend mit dem `masked-element` Beispiel, wenn wir nicht explizit die `mask-size` Eigenschaft setzen, wird sie für jede Schicht standardmäßig auf `auto` gesetzt, als ob wir folgendes festgelegt hätten:

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

oder unter Erweiterung des Beispiels unter Verwendung der `mask` Kurzschreibweise, wobei die `mask-size` Komponente nach dem `mask-position` Wert kommt, getrennt durch einen Schrägstrich (/):

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

Die {{cssxref("mask-repeat")}} Eigenschaft definiert, wie Maskenbilder wiederholt oder gekachelt werden, nachdem das erste Maskenbild skaliert und positioniert wurde. Die `mask-repeat` Eigenschaft definiert, ob und wie dieses Maskenbild entlang der horizontalen und vertikalen Achsen wiederholt wird. In den meisten der vorhergehenden Beispiele haben Sie vielleicht bemerkt, dass die Sternmaske entlang der X- und Y-Achsen wiederholt wurde. Dies liegt daran, dass `repeat` der Standardwert ist.

Die `mask-repeat` Eigenschaft ist analog zur {{cssxref("background-repeat")}} Eigenschaft und nimmt die gleichen [`<repeat-style>`](/de/docs/Web/CSS/Reference/Properties/mask-repeat#values) Werte an. Wie bei `background-repeat` wird die erste (und möglicherweise einzige) Maske-Bildwiederholung durch [die `*-position` Eigenschaft](#the_mask-position_property) positioniert und durch [die `*-size` Eigenschaft](#the_mask-size_property) dimensioniert. Die Positionen der wiederholten Hintergrund- oder Maskenbilder basieren auf diesem ersten Bild Instanz.

Fortführend mit dem `masked-element` Beispiel, wenn wir nicht explizit die `mask-repeat` Eigenschaft setzen, wird sie für jede Schicht standardmäßig auf `repeat` gesetzt, als hätten wir folgendes festgelegt:

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

oder unter Erweiterung des Beispiels unter Verwendung der `mask` Kurzschreibweise:

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

Die {{cssxref("mask")}} Kurzschreibweise enthält die {{cssxref("mask-composite")}} Eigenschaft, die definiert, wie mehrere Masken kombiniert werden, um den endgültigen Maskeneffekt zu erzeugen. Jeder Wert in der durch Kommas getrennten Werteliste bestimmt, ob der Browser die zugehörige Maskenschicht zu den darunter liegenden Maskenschichten `add`, `subtract`, `intersect` oder `exclude` soll. Ähnlich wie bei `mask-mode` und den anderen `mask-*` Eigenschaften gibt es keine Eigenschaft im {{cssxref("background")}} Kurzschreiben, die analog ist.

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

In diesem Beispiel fügen wir zwei `mask-image` Werte hinzu, einschließlich des Sterns und des Gradienten aus den vorherigen Beispielen als Maskenbilder:

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

Wir setzen einen anderen `mask-composite` Wert für jedes Bild:

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

Die halbtransparente Sternmaske wird dem gestreiften Maskenbild hinzugefügt, von ihm subtrahiert, mit ihm geschnitten oder von ihm ausgeschlossen, abhängig vom `mask-composite` Wert.

Die `mask-composite` Eigenschaft ist nur in Fällen mit zwei oder mehr Maskenschichten relevant. Dies liest "Maskenschichten", nicht "Maskenbilder", da, wenn `none` enthalten ist, die transparente schwarze Maske komponiert wird. Ein Wert `none` kann einen erheblichen Einfluss auf die Maskierung haben, im Fall von `subtract` und `intersect`. Zum Beispiel, wenn der `mask-mode` sich in `luminance` auflöst, wird das Abziehen einer schwarzen Maske die gesamte Maske entfernen (das Element wird verborgen). Ebenso, wenn `none` die letzte Schicht ist mit `mask-composite: intersect` für diese Schicht gesetzt, wird das gesamte Element verborgen. Hier fügen wir der letzten Beispiel ein drittes `none` Layer hinzu:

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

Wenn wir die Reihenfolge der Maskenschichten umkehren, können wir sehr unterschiedliche Ergebnisse erzielen:

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

Im ersten Beispiel werden die Sterne von den Streifen abgezogen. Im zweiten Beispiel werden die Streifen von den Sternen abgezogen.

Wie alle anderen `mask` Komponenten-Eigenschaften nimmt `mask-composite` eine durch Kommas getrennte Liste von Werten. Da die Eigenschaft beschreibt, wie Masken kombiniert werden, ist diese Eigenschaft nur für mehrere Maskenschichten relevant, und die Anzahl der verwendeten Werte ist eins weniger als die Anzahl der Maskenschichten.

Das letzte Paar an Masken wird zuerst kombiniert. Das vorherige Maskenbild wird dann mit der vorherigen Komposition kombiniert.

Fortführend mit dem `masked-element` Beispiel, wenn wir nicht explizit die `mask-composite` Eigenschaft setzen, wird sie standardmäßig auf `add` für jede Schicht gesetzt, als hätten wir folgendes gesetzt:

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

In diesem Fall wird das `<mask>` Element mit der `none` Schicht komponiert. Dann wird der radial Gradient mit dem Ergebnis der vorherigen Kombination zusammengefügt und so weiter.

Wie wir bei allen anderen Komponenteneigenschaften gesehen haben, könnten wir auch die `mask` Kurzschreibweise benutzen:

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

- [Einführung in die CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [Einführung in die CSS-Beschneidung](/de/docs/Web/CSS/CSS_masking/Clipping)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
