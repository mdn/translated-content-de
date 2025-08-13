---
title: CSS-Maskeneigenschaften
slug: Web/CSS/CSS_masking/Mask_properties
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

CSS-Masking ist eine Technik, die es ermöglicht, sichtbare Bereiche eines Elements zu definieren, indem eine Maske angewendet wird, die Teile des Elements basierend auf den Alphakanälen (und optional den Farben) der angewendeten Maskenbilder selektiv zeigt oder versteckt.

Der [einführende Leitfaden zum Masking](/de/docs/Web/CSS/CSS_masking) stellt die verschiedenen Typen von Maskenbildern und deren Modi vor. Der Leitfaden zur [Deklaration mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks) diskutiert die [Maskenschichten](/de/docs/Web/CSS/CSS_masking/Multiple_masks#understanding_mask_layers) und die {{cssxref("mask")}}-Kurzschreibweise und gibt eine kurze Einführung in die Komponenten der Kurzschreibweise. In diesem Leitfaden erkunden wir diese Komponenten genauer und betrachten ihre Interaktion. Wir erklären auch, wie, in Fällen, in denen mehrere Maskenbilder deklariert werden, die [Maskenschichten zusammengesetzt](#the_mask-composite_property) oder kombiniert werden.

CSS-Masken bestehen aus einer oder mehreren Maskenschichten, wobei eine Maskenschicht für jeden Wert in der kommagetrennten Liste der `mask`- oder `mask-image`-Werte erstellt wird, unabhängig davon, ob die Werte Bilder, Maskenquellen oder das Schlüsselwort `none` sind. Jedes {{cssxref("mask-image")}} ist relativ zu einem [Ursprung](#the_mask-origin_property) positioniert. Die Maskenbilder können [skaliert](#the_mask-size_property), [wiederholt](#the_mask-repeat_property) und [beschnitten](#the_mask-clip_property) werden und dann mit vorherigen Schichten zusammengefügt werden, um die endgültige visuelle Maske auf dem Element zu erzeugen.

## Die `mask-image` Eigenschaft

Die Mindestanforderung, um eine Maske zu erzeugen, ist eine {{cssxref("mask-image")}}-Eigenschaft, die auf einen anderen Wert als `none` gesetzt ist. Das Schlüsselwort `none` innerhalb einer Liste von Maskenquellen erzeugt eine Maskenschicht. Wenn `none` jedoch der einzige Wert der `mask-image`-Eigenschaft ist, tritt kein Maskieren auf.

Das Maskenbild kann ein [CSS-Gradient](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients), ein [importiertes Bild](/de/docs/Web/CSS/CSS_masking/Masking#with_imported_images) (wie ein PNG, SVG usw.) oder ein SVG-{{svgelement("mask")}}-Element sein.

In diesem Beispiel erstellen wir fünf Maskenschichten, einschließlich eines importierten Bildes, zweier Gradienten, einer Schicht ohne Bild und einer SVG-`<mask>`-Quelle als Maskenbild.

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
}
```

Da eines der Maskenbilder als `none` angegeben ist, werden nur vier Maskenbilder auf das `.masked-element`-Element angewendet, wobei jedoch fünf Maskenschichten erstellt werden.

### Die Wichtigkeit von `none`

Die `none`-Schicht hat im Allgemeinen keinen visuellen Effekt (siehe die [`mask-composite`-Eigenschaft](#the_mask-composite_property) für ihre Auswirkungen auf die angewendete Maske), aber da jeder Wert in einer kommagetrennten Liste von `mask-*`-Werten auf eine separate Maskenschicht angewendet wird, erfüllt der `none`-Wert eine wichtige Funktion, auch wenn er die zusammengesetzte Maske nicht verändert.

Diese vierte Schicht in unserer fünfstufigen Struktur wird mit dem vierten Wert aller anderen kommagetrennten `mask-*`-Eigenschaftswerte übereinstimmen. Wie bereits erwähnt, wird die Anzahl der Schichten durch die Anzahl der kommagetrennten Werte im Wert der {{cssxref("mask-image")}}-Eigenschaft bestimmt, auch wenn ein Wert `none` ist. Jeder `mask-*`-Wert wird in Reihenfolge mit den `mask-image`-Werten abgeglichen. Wenn die Anzahl der Werte in einer `mask-*`-Eigenschaft von der Anzahl der Maskenschichten abweicht, werden überschüssige Werte ignoriert oder, wenn die Eigenschaft weniger Werte als die Anzahl der Maskenschichten aufweist, werden die Werte wiederholt.

Hat eine `mask-*`-Eigenschaft nur einen Wert, so wird dieser Wert auf alle Schichten angewendet. Wenn wir fünf Werte haben, wird der vierte Wert auf die `none`-Schicht angewendet, und der letzte Wert wird auf die `<mask>`-Quellschicht angewendet. Wenn es zwei kommagetrennte Werte gibt, wird der erste Wert nur auf alle ungeraden Schichten angewendet, einschließlich dieser `<mask>`-Quellschicht. Beispielsweise kann jede `mask-*`-Eigenschaft eine unterschiedliche Anzahl von Werten haben:

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

In diesem Fall wird jede ungerade Schicht entlang der x-Achse und jede gerade Schicht entlang der y-Achse wiederholt. Die Bilder der ersten und vierten Schicht werden zentriert, während die zweite und fünfte in der oberen linken Ecke positioniert werden. Das `none` bedeutet, dass das Bild der fünften Schicht `#svg-mask` entlang der x-Achse ab der oberen linken Ecke wiederholt wird.

Erfahren Sie mehr über [Maskenschichten und das `none`-Keyword](/de/docs/Web/CSS/CSS_masking/Multiple_masks#mask_layers_and_the_none_keyword).

## Die `mask-mode` Eigenschaft

Die {{cssxref("mask-mode")}}-Eigenschaft kann verwendet werden, um den Modus jeder Maskenschicht entweder auf `alpha` oder `luminance` festzulegen oder den Modus der Quelle anzunehmen, indem der Wert auf `match-source` gesetzt wird, was der Standard ist. Während die meisten `mask-*`-Eigenschaften eine analoge `background-*`-Eigenschaft haben (`mask-image` ist analog zur {{cssxref("background-image")}}-Eigenschaft, zum Beispiel), haben `mask-mode` und [`mask-composite`](#the_mask-composite_property) keine analoge {{cssxref("background")}}-Eigenschaft.

### Maskentypen: `alpha` und `luminance`

Jede Maske ist entweder eine `alpha`- oder eine `luminance`-Maske.

Bei `alpha`-Masken ist die Alpha-Transparenz jedes Maskenpixels wichtig. Wo immer die Maske undurchsichtig ist, werden die entsprechenden Teile des Elements sichtbar. Wo immer die Maske transparent ist, werden die entsprechenden Teile des Elements versteckt. Wo immer die Maske halbtransparent ist, ist das Element entsprechend halbtransparent. Die Farbe der Maske spielt keine Rolle, nur die Alpha-Transparenz der Farben.

Bei `luminance`-Masken bestimmen sowohl die [Helligkeit der Maskenfarben](/de/docs/Web/CSS/CSS_masking/Masking#alpha_transparency_versus_luminance) als auch der Alphakanal die Undurchsichtigkeit der maskierten Bereiche.

> [!NOTE]
> Alle nachfolgenden Beispiele verwenden das folgende Bild als `background-image` auf einem Element, auf das Masken angewendet werden:
>
> <img src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg" alt="Pride-Flagge" />

Dieses Beispiel demonstriert den Unterschied zwischen `alpha`- und `luminance`-Masken. Die Masken sind gleich, aber in der `alpha`-Maske zählt nur die Alpha-Transparenz der Farbverläufe der Maske. Im `luminance`-Beispiel zählen alle R, G, B und A.

Zwei Container enthalten Bilder, während der letzte leer ist, aber enthalten ist, um den Verlauf zu zeigen, den wir als `mask-image` verwenden werden.

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

Wir deklarieren einen [`repeating-linear-gradient`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) mit roten, transparenten und halbtransparenten roten diagonalen Streifen. Dieser Verlauf wird als unsere Maske und für den letzten Container als Hintergrundbild verwendet:

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

Wir setzen unterschiedliche Werte für die `mask-mode`-Eigenschaft für jedes Bild:

```css live-sample___mode
.alpha img {
  mask-mode: alpha;
}

.luminance img {
  mask-mode: luminance;
}
```

{{EmbedLiveSample("mode", "", "270px")}}

Im `alpha`-Fall zählt nur die Transparenz der Farbverläufe des Gradienten. Wo der Verlauf undurchsichtig rot ist, ist das Bild undurchsichtig. Wo der Verlauf transparent ist, ist das Bild verborgen. Wo der Verlauf 50 % undurchsichtig ist, ist das Bild 50 % undurchsichtig. Im `luminance`-Fall zählt die Helligkeit der Farben! Sehen Sie sich [Alpha-Transparenz versus Luminanz](/de/docs/Web/CSS/CSS_masking/Masking#alpha_transparency_versus_luminance) an, um mehr über die Gleichung zu erfahren, die die R, G, B und A-Kanäle der Farbe verwendet, um die Opazität der Maske zu bestimmen.

### Der Standardwert von `mask-mode`: `match-source`

Der Standardwert der `mask-mode`-Eigenschaft ist `match-source`. Dieser Wert setzt den `mask-mode`, um dem Modustyp der Maske zu entsprechen. Der `match-source`-Wert wird für jede Maske auf `alpha` aufgelöst, außer für Masken, bei denen die Maskenquelle ein SVG-{{svgelement("mask")}}-Element ist.

Wenn ein SVG-`<mask>`-Element als Maskenquelle verwendet wird, wird der `match-source`-Wert auf den Wert der `<mask>`-Element-{{cssxref("mask-type")}}-Eigenschaft aufgelöst. Wenn das `<mask>`-Element (nicht das „maskierte Element“) die CSS-`mask-type`-Eigenschaft nicht definiert hat, wird diese Eigenschaft standardmäßig auf den Wert des SVG-{{svgAttr("mask-type")}}-Attributs gesetzt, falls vorhanden. Wenn dies auch weggelassen wird, löst der `match-source`-Wert auf `luminance` auf.

Im Weiteren mit dem `masked-element`-Beispiel wird, wenn wir nicht explizit die `mask-mode`-Eigenschaft festlegen, diese standardmäßig auf `match-source` für jede Schicht gesetzt, als hätten wir Folgendes festgelegt:

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: match-source;
}
```

oder, unter Verwendung des `mask`-Shorthand:

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

Die erste Maskenschicht, `url("alphaImage.png")`, verweist auf ein Bild. Da dies kein `<mask>`-Element innerhalb eines `<svg>` ist, löst sich `mask-mode` auf `alpha` auf, wobei die undurchsichtigen Teile dieses Bildes dazu führen, dass die entsprechenden Teile des Elements sichtbar werden, während die transparenten oder halbtransparenten Teile unsichtbar oder teilweise sichtbar sind.

Der `linear-gradient(to right, black, transparent)` ist die zweite Maskenschicht und `radial-gradient(circle, white 50%, transparent 75%)` ist die dritte. Auch hier sind diese keine `<mask>`-Elemente, sodass der `match-source`-Wert auf `alpha` aufgelöst wird. Der Maskierungseffekt dieser Schichten wird standardmäßig von der [Undurchsichtigkeit des Gradientenmusters](/de/docs/Web/CSS/CSS_masking/Masking#opaqueness_versus_transparency) bestimmt.

Die vierte Maskenschicht hat `none` deklariert, was bedeutet, dass die Maske für diese Schicht transparentes Schwarz ist. Die `.masked-element`-Klasse setzt `mask-mode: match-source;`. Wäre `mask-mode` stattdessen eine kommagetrennte Liste von fünf verschiedenen Werten gewesen, hätte der vierte Wert auf diese `none`-Schicht gepasst und der fünfte Wert auf die fünfte Schicht.

Die fünfte Maskenschicht besteht aus einem SVG-{{svgelement("mask")}}-Element, das `svg-mask` als sein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) hat. Während der Standard-Maskenmodus der anderen Schichten `alpha` ist, ist der Standard-Maskentyp von SVG-`<mask>`-Elementen der `mask-type`-Wert oder, falls nicht gesetzt, das `mask-type`-Attribut. Wenn auch dies nicht definiert ist, ist der Wert standardmäßig `luminance`. Mit anderen Worten, der Maskierungseffekt der `<mask>` wird durch sowohl die Helligkeit als auch die Transparenz der Farben des `<mask>`-Elements bestimmt.

Wenn wir die `mask-mode`-Eigenschaft überhaupt nicht deklarieren und es den Standardwert `match-source` für jede Maskenschicht annehmen lassen, würde das Ergebnis in diesem Fall `.masked-element` folgendermaßen aufgelöst:

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: alpha, alpha, alpha, match-source, luminance;
}
```

oder, unter Verwendung des `mask`-Shorthand:

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

Analog zur {{cssxref("background-position")}}-Eigenschaft legt die {{cssxref("mask-position")}}-Eigenschaft die Anfangsposition des Maskenbildes relativ zum Ursprungskasten der Maskenschicht fest, definiert durch [die `mask-origin`-Eigenschaft](#the_mask-origin_property). Die Syntax folgt der [`background-position`-Syntax `<position>`](/de/docs/Web/CSS/background-position#position), wobei der Wert ein, zwei oder vier {{cssxref("&lt;position&gt;")}}-Werte ist, die ein bis zwei relative oder absolute Positionsversätze definieren.

### Ein-Wert-Syntax

Wenn nur ein Schlüsselwortwert angegeben ist, gibt dieser Wert die Ursprungkante an, an der die Maske platziert wird, während die andere Dimension auf `center` gesetzt wird.

Wenn nur ein {{cssxref("&lt;length-percentage&gt;")}}-Wert angegeben ist, gibt dieser den X-Koordinatenwert relativ zur linken Kante des Maskenursprungs an, während die Y-Koordinate auf `50%` gesetzt wird.

Wenn zwei Schlüsselwortwerte angegeben sind, spielt die Reihenfolge der Werte keine Rolle, aber der Wert kann nicht zwei vertikale oder zwei horizontale Achsenwerte enthalten; `left right` und `top bottom` sind beide ungültig.

### Zwei-Wert-Syntax

Wenn zwei Werte vorhanden sind, darunter ein Schlüsselwort und ein `<length-percentage>`-Wert, spielt die Reihenfolge nur dann eine Rolle, wenn das Schlüsselwort `center` ist:

- Wenn das Schlüsselwort `left` oder `right` ist, definiert es die X-Koordinate relativ zur linken Kante, und der Wert definiert die Y-Koordinate relativ zur oberen Kante.
- Ebenso definiert ein `top`- oder `bottom`-Schlüsselwort das Positionieren des Elements gegenüber der oberen oder unteren Kante in der Y-Koordinate, wobei der andere Wert die X-Position relativ zur linken Kante des Maskenursprungskastens definiert.
- Wenn ein Wert das Schlüsselwort `center` und der andere ein `<length-percentage>` ist, definiert der erste Wert die horizontale Position und der zweite die vertikale Position.

Wenn zwei Werte vorhanden sind und beide `<length-percentage>`-Werte sind, spielt die Reihenfolge wieder eine Rolle; der erste Wert definiert die horizontale Positionierung als Versatz von der linken Kante des Maskenpositionierungsbereichs, während der zweite Wert die vertikale Position als Versatz von der oberen Kante des Maskenpositionierungsbereichs definiert.

### Vier-Wert-Syntax

Maskenpositionen können auch relativ zu anderen Ecken als oben links sein. Die Vier-Wert-Syntax ermöglicht das Versetzen der Maske von jeder Ecke. Der Wert enthält zwei {{cssxref("length-percentage")}} Offsets und jeweils ein Ursprungsschlüsselwort für dieses Offset. Ob Sie als erstes das horizontale oder vertikale Paar deklarieren, spielt keine Rolle, aber Sie müssen das Ursprungsschlüsselwort (`left`, `right`, `top`, `bottom`, `x-start`, `x-end`, `y-start`, `y-end`, `block-start`, `block-end`, `inline-start` oder `inline-end`) vor dem Offset `<length-percentage>` in jedem Paar deklarieren, und die zwei Ursprungsseiten können nicht von der gleichen Achse stammen.

In der Zwei-`<length-percentage>`-Syntax sind die Ursprungseiten `top` und `left`, in dieser Reihenfolge. Zum Beispiel entspricht `mask-position: 10px 20px` `mask-position: left 10px top 20px`. Beim Versetzen von oben und links sind die Versatzseiten nicht erforderlich, aber die Reihenfolge spielt eine Rolle. Mit der Vier-Wert-Syntax können Sie `mask-position` verwenden, um das Maskenbild von beliebigen Randkombinationen zu versetzen, wie `left 10px bottom 20px`, wobei die Reihenfolge der Seiten keine Rolle spielt, da der Offsetrand durch das voranstehende Schlüsselwort und nicht durch die Deklarationsreihenfolge definiert wird.

### Prozentwerte

Beim Versetzen mit Prozentsätzen wird die Dimension der Maske von der Dimension des Elements abgezogen, genauso wie bei [Prozentversätzen mit `background-position`](/de/docs/Web/CSS/background-position#regarding_percentages).

### Positionieren von wiederholten Maskenbildern

Die `mask-position`-Eigenschaft definiert die anfängliche Position des Maskenbildes. Bei "anfänglicher Position" wird, wenn die [Maske wiederholt wird](#the_mask-repeat_property), das erste Maskenbild an der durch die `mask-position`-Eigenschaft definierten Position platziert, was die Platzierung der Maskenwiederholungen bestimmt.

In diesem Beispiel setzen wir die Position des ersten Bildes auf `bottom right`, was bedeutet, dass die erste Maske am unteren rechten Rand des Maskenursprungkastens platziert wird. Da Maskenbilder standardmäßig wiederholt werden, werden die wiederholten Masken gegen die Ober- und linken Seiten der ersten platzierten Maske positioniert.

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

Die `mask-position` definiert die Position des ersten Maskenbilds. Diese Demo zeigt, wo das erste Bild platziert wird:

```css hidden live-sample___position_no-repeat
img {
  mask-repeat: no-repeat;
}
```

{{EmbedLiveSample("position_no-repeat", "", "260px")}}

Da der Standardwert für die [`mask-repeat`-Eigenschaft](#the_mask-repeat_property) `repeat` ist, werden die Bilder entlang der X- und Y-Achsen basierend auf der Position dieser ersten Maske wiederholt:

{{EmbedLiveSample("position", "", "260px")}}

Das Zwei-Wert-Beispiel definiert die Ober- und Linksversionen der ursprünglichen Maske. Das Vier-Wert-Beispiel kombiniert die vorherigen beiden Beispiele, um die erste Maske mit den gleichen Offsets wie das zweite Bild, aber von den gleichen Kanten wie im ersten Bild demonstriert, zu positionieren.

Im ersten Bild ist die erste platzierte Maske der Stern unten rechts, mit den wiederholten Sternen oben und links davon. Aufgrund dieser Positionierung ist der ursprüngliche Stern nicht ausgeschnitten, aber die obersten und linkesten Sterne sind es.

Wenn wir die `mask-position`-Eigenschaft nicht explizit setzen, wird sie standardmäßig auf `0% 0%` für jede Schicht gesetzt, wobei die obere linke Ecke der Maske an die obere linke Ecke des Maskenursprungkastens grenzt. Weiter mit dem `masked-element`-Beispiel ist es, als hätten wir Folgendes gesetzt:

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: match-source;
  mask-position: 0% 0%;
}
```

oder, unter Erweiterung des Beispiels unter Verwendung des `mask`-Shorthand:

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

Wenn ein Element Polsterung, einen Rand oder beides hat, definiert die {{cssxref("mask-origin")}}-Eigenschaft, welches dieser Kästcheneckenwerte als Maskenursprungskasten oder Maskenpositionierungsbereich dient, in oder in der Nähe dessen ein Maskenbild für diese Schicht positioniert wird. Die `mask-origin`-Eigenschaft ist analog zur {{cssxref("background-origin")}}-Eigenschaft, aber mit einem anderen Anfangswert und SVG-spezifischen Werten.

HTML-Elemente können Masken enthalten, die innerhalb ihres Inhaltsrahmens, Polsterrasters oder Inhaltsfelds sind. Wenn zum Beispiel die `mask-position` `top left` ist, bezieht sich dies dann auf den äußeren Rand des Rahmens, den äußeren Rand der Polsterung oder den äußeren Rand des Inhaltsfelds?

Im Maskierungsbeispiel [`mask-position`](#the_mask-position_property) wurde die definierte Position relativ zum Rahmenkasten (die Standardverhalten) festgelegt, obwohl es erwähnenswert ist, dass das `<img>` keinen Rahmen oder Polsterung eingestellt hatte, sodass die Ursprünge der Inhaltskästen, Polsterraster und Rahmenkästen in diesem Fall gleich wären.

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

In diesem Beispiel platziert die `mask-position` die ursprüngliche Maske in die obere linke Ecke des `<img>`-Elements, das einen großen Rand und eine Polsterung hat, mit einer grünen Hintergrundfarbe, um das Stern-Masking oberhalb der Polsterfläche zu ermöglichen.

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

Ändern Sie den Wert der `mask-origin`-Eigenschaft, indem Sie den ausgewählten Radio-Button ändern und die Position des obersten Stern-Maskings beobachten.

{{EmbedLiveSample("origin", "", "350px")}}

Der Standardwert ist `border-box`. Mit diesem Wert wird die ursprüngliche Maske an der oberen linken Kante des Rahmens platziert und nicht abgeschnitten. Wenn die ursprüngliche Maske an den äußeren oder inneren Rand der Polsterung gelegt wird, bleibt Platz über und links davon; diese wiederholten Masken werden abgeschnitten.

Weiter mit dem `masked-element`-Beispiel, wenn wir die `mask-origin`-Eigenschaft nicht explizit setzen, wird sie standardmäßig auf 'border-box' für jede Schicht gesetzt, als hätten wir Folgendes gesetzt:

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

oder, unter Erweiterung des Beispiels unter Verwendung des `mask`-Shorthand:

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

Für SVG-Elemente, die keine zugehörigen CSS-Layoutkästen haben, kann eine Maske im Füll, Strich oder Ansichtsbox des SVG-Elements enthalten sein.

## Die `mask-clip` Eigenschaft

Die {{cssxref("mask-clip")}}-Eigenschaft bestimmt den Bereich des Elements, der von einer Maske betroffen sein wird und schneidet das Element effektiv an der definierten Kantenbox ab. Es ist analog zur {{cssxref("background-clip")}}-Eigenschaft, jedoch mit einigen unterschiedlichen Werten.

Weil die `mask-clip`-Eigenschaft alle `mask-origin`-Werte akzeptiert und beide den gleichen Standardwert `border-box` haben, können die beiden Eigenschaften ähnlich erscheinen, aber sie dienen sehr unterschiedlichen Zwecken. Während `mask-origin` bestimmt, wo ein Maskenbild positioniert wird, hat die `mask-clip`-Eigenschaft das ursprüngliche Element dazu veranlasst, seinen Inhalt auf die angegebene Box zu beschneiden. Es ist wichtig, beide zu verstehen: Wenn die `mask-origin` die `mask-position` dazu bringt, das Maskenbild außerhalb des Beschnittbereichs zu platzieren, wird die Maske beschnitten.

Die `mask-clip`-Eigenschaft akzeptiert alle `mask-origin`-Werte sowie ihren eigenen `no-clip`-Wert. Der `no-clip`-Wert legt fest, dass der bemalte Inhalt nicht beschnitten wird. Sie können das Maskenbild jedoch immer noch abschneiden, indem Sie es außerhalb des Rahmeninhaltsbereichs mit `mask-position`-Werten positionieren, die kleiner als null oder größer als 100% sind.

Wenn `mask-clip` und `mask-origin` auf unterschiedliche Werte gesetzt werden, kann das Maskenschichtbild beschnitten werden. Zum Beispiel kann, wenn ein Element mit einem Rahmen und einer Polsterung `mask-clip` auf `content-box` und `mask-origin` auf `border-box` setzt, und `mask-position` auf die `top left` Kante eingestellt ist, das Maskenschichtbild an der oberen linken Kante abgeschnitten werden.

Das nächste Beispiel fügt Clip-Optionen zu den vorherigen Beispielen hinzu, um die verschiedenen nicht-SVG `mask-clip`-Werte zu demonstrieren und zu zeigen, wie sie die verschiedenen `mask-origin`-Werte beeinflussen.

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

Die erste Maske wird an der oberen linken Ecke des Maskenursprungskastens platziert und dann wiederholt. Wenn der Ursprungsbox `border-box` und die Ausschnittregion `content-box` ist, werden die oberen und linken Bereiche des Maskenursprungskastens abgeschnitten. Im Allgemeinen wird die `mask-clip` die gleiche wie die `mask-origin` sein.

Fortsetzung mit dem `masked-element`-Beispiel, wenn wir die `mask-clip`-Eigenschaft nicht explizit setzen, wird sie standardmäßig auf 'border-box' für jede Schicht gesetzt, als hätten wir Folgendes gesetzt:

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

oder, unter Erweiterung des Beispiels unter Verwendung des `mask`-Shorthand:

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

In der `mask`-Kurzschrift, wenn nur ein [`<geometry-box>`](/de/docs/Web/CSS/clip-path#geometry-box) Wert angegeben ist, setzt es sowohl die `mask-origin` als auch die `mask-clip`-Eigenschaftswerte. Wenn zwei `<geometry-box>`-Werte vorhanden sind, definiert der erste die `mask-origin` und der zweite die `mask-clip`.

Für Maskenschichtbilder, die nicht auf ein SVG-{{svgelement("mask")}}-Element verweisen, definiert die `mask-clip`-Eigenschaft, ob der Maskenmalbereich oder der von der Maske betroffene Bereich der Rahmen-, Polster- oder Inhaltsbox ist. Der bemalte Inhalt des Elements wird auf diesen Bereich beschränkt.

Wenn die `mask-image`-Quelle der Maske ein `<mask>` ist, hat die `mask-clip`-Eigenschaft keinen Einfluss. Vielmehr bestimmen die `<mask>`-Element-{{svgAttr("x")}}, {{svgAttr("y")}}, {{svgAttr("width")}}, {{svgAttr("height")}} und {{svgAttr("maskUnits")}}-Attribute den Maskenmalbereich.

## Die `mask-size` Eigenschaft

Die {{cssxref("mask-size")}}-Eigenschaft wird verwendet, um Maskenschichten zu skalieren. Diese Eigenschaft ist analog zur {{cssxref("background-size")}}-Eigenschaft und nimmt die gleichen Werte an. Bei der Größenwahl Ihrer Masken bedenken Sie, dass Bereiche des Elements, die nicht von den Maskenbildern abgedeckt sind, versteckt werden.

Es gibt drei Möglichkeiten, eine `mask-size` zu deklarieren:

- das `cover`- oder `contain`-Schlüsselwort,
- eine Länge, ein Prozentsatz oder das Schlüsselwort `auto`, oder
- zwei Werte, die eine Kombination aus Längen, Prozentsätzen und das Schlüsselwort `auto` sind.

Das Maskenbild kann auf seine natürliche Größe belassen, gestreckt oder gezwungen werden, um den verfügbaren Raum zu passen. Das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Maskenbildes wird standardmäßig beibehalten, aber das Deklarieren zweier `<length-percentage>`-Werte kann das Maskenbild verzerren, wenn das Verhältnis der beiden Werte nicht das gleiche wie das ursprüngliche Bild ist (`mask-repeat: round` ist das andere Eigenschaft/Wert-Paar, das das Maskenbild verzerren kann).

Ist die `mask-size` auf `contain` festgelegt, wird das Maskenbild auf die größtmögliche Größe skaliert, um vollständig innerhalb des Maskenpositionierungsbereichs enthalten zu sein. In diesem Fall wird das Maskenbild nicht abgeschnitten, sondern vollständig enthalten.

Wenn auf `cover` gesetzt, wird das Maskenbild auf die kleinste Größe skaliert, um den gesamten Maskenpositionierungsbereich vollständig abzudecken, wobei die Maske abgeschnitten wird, wenn das Seitenverhältnis der Maske von dem des Maskenpositionierungsbereichs abweicht.

Mit anderen Worten, bei `cover` und `contain` wird mindestens eine Dimension der Maske die gleiche Größe haben wie die entsprechende Dimension des Maskenpositionierungsbereichs; das Maskenbild wächst oder schrumpft so, dass entweder die Breite die gleiche Breite wie der Maskenpositionierungsbereich ist, oder die Höhe des Maskenbildes gleich der Höhe des Maskenpositionierungsbereichs ist.

Mit `cover`, `contain` und `<percentage>`-Werten ist die Größe relativ zum Ursprungskasten. In unserem Beispiel mit dem Stern-Masken- und Flaggenbild haben sowohl das Maskenbild als auch das `<img>` das Seitenverhältnis `1:1`, was bedeutet, dass in diesem Fall `cover`, `contain` und `100%` die gleiche Maskengröße erzeugen werden. Dieses Beispiel zeigt, wie, wenn die `mask-size` auf `cover`, `contain` oder einen `<percentage>`-Wert eingestellt ist, die tatsächliche Größe der Maske je nach Wert der [`mask-origin`-Eigenschaft](#the_mask-origin_property) variieren kann:

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

Ändern Sie den Wert der `mask-origin`-Eigenschaft, um zu sehen, wie sich die verschiedenen Werte auf die Maskengröße auswirken:

{{EmbedLiveSample("size", "", "350px")}}

Dieses Beispiel enthielt einen `<percentage>`-Wert. Wenn ein `<length-percentage>`-Wert angegeben ist, definiert er nur die Maskenbreite, wobei die Höhe standardmäßig auf `auto` gesetzt wird, was das Seitenverhältnis beibehält. Wenn zwei Werte angegeben sind, definiert der erste die Maskenbreite und der zweite ihre Höhe.

Der Standardwert von `mask-size` ist `auto`, was die Maske in ihrer {{Glossary("intrinsic_size", "intrinsischen Größe")}} rendert, der Größe, bei der die Maske angezeigt würde, wenn keine CSS angewendet wird. Das zugrunde liegende {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Maskenbildes wird beibehalten, wenn Sie einen einzigen `<length-percentage>`-Wert oder zwei Werte im gleichen Verhältnis zum Seitenverhältnis setzen. Wenn Sie zwei Werte erklären, die nicht im gleichen Verhältnis zum Seitenverhältnis sind, wird das Maskenbild verzerrt.

Wie bei allen Langhand-Komponenten der Kurzschreibeigenschaft wird, wenn die {{cssxref("mask")}}-Kurzschreibeigenschaft gesetzt ist und der Wert der `mask-size`-Eigenschaft innerhalb einer Maskenschicht nicht definiert ist, der `mask-size` Wert für diese Maskenschichten auf seinen Anfangswert `auto` zurückgesetzt.

Hat das Bild keine intrinsische Proportion, zum Beispiel im Fall eines [CSS-Gradienten](/de/docs/Web/CSS/gradient), ist das Standard-`auto` die Gesamtheit des Maskenpositionierungsbereichs, wie durch [die `mask-origin`-Eigenschaft](#the_mask-origin_property) festgelegt.

Fortsetzung mit dem `masked-element`-Beispiel, wenn wir die `mask-size`-Eigenschaft nicht explizit setzen, wird sie standardmäßig auf 'auto' für jede Schicht gesetzt, als hätten wir Folgendes gesetzt:

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

oder, unter Erweiterung des Beispiels unter Verwendung des `mask`-Shorthand, wobei die `mask-size`-Komponente nach dem `mask-position`-Wert gesetzt wird, getrennt durch einen Schrägstrich (/):

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

Die {{cssxref("mask-repeat")}}-Eigenschaft definiert, wie Maskenbilder wiederholt oder gekachelt werden, nachdem das erste Maskenbild in Größe und Position festgelegt wurde. Die `mask-repeat`-Eigenschaft definiert, ob und wie dieses Maskenbild entlang der horizontalen und vertikalen Achsen wiederholt wird. In den meisten vorherigen Beispielen haben Sie möglicherweise festgestellt, dass die Sternmaske entlang der X- und Y-Achsen wiederholt wurde. Dies liegt daran, dass `repeat` der Standardwert ist.

Die `mask-repeat`-Eigenschaft ist analog zur {{cssxref("background-repeat")}}-Eigenschaft und akzeptiert die gleichen [`<repeat-style>`](/de/docs/Web/CSS/mask-repeat#values) Werte. Wie bei `background-repeat` wird die erste (und möglicherweise einzige) Maskenbildwiederholung durch [die `*-position`-Eigenschaft](#the_mask-position_property) positioniert und durch [die `*-size`-Eigenschaft](#the_mask-size_property) skaliert. Die Positionen der wiederholten Hintergrund- oder Maskenbilder basieren auf dieser anfänglichen Bildinstanz.

Fortsetzung mit dem `masked-element`-Beispiel, wenn wir die `mask-repeat`-Eigenschaft nicht explizit setzen, wird sie standardmäßig auf 'repeat' für jede Schicht gesetzt, als hätten wir Folgendes gesetzt:

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

oder, unter Erweiterung des Beispiels unter Verwendung des `mask`-Shorthand:

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

Die {{cssxref("mask")}}-Kurzschreibweise enthält die {{cssxref("mask-composite")}}-Eigenschaft, die definiert, wie mehrere Masken kombiniert werden, um den endgültigen Maskeneffekt zu erzeugen. Jeder Wert in der kommagetrennten Liste von Werten bestimmt, ob der Browser die zugeordnete Maskenschicht zu den darunter liegenden Maskenschichten `add`, `subtract`, `intersect` oder `exclude` sollte. Ähnlich wie bei `mask-mode` und den anderen `mask-*`-Eigenschaften gibt es keine analoge Eigenschaft in der {{cssxref("background")}}-Kurzschreibweise.

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

In diesem Beispiel fügen wir zwei `mask-image`-Werte hinzu, darunter den Stern und den Verlauf aus den vorherigen Beispielen als Maskenbilder:

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

Wir setzen für jedes Bild einen anderen `mask-composite`-Wert:

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

Die halbtransparente Sternmaske wird entweder zum gestreiften Maskenbild addiert, davon subtrahiert, damit überlappt oder daraus ausgeschlossen, abhängig vom `mask-composite`-Wert.

Die `mask-composite`-Eigenschaft ist nur relevant, wenn es zwei oder mehr Maskenschichten gibt. Hier steht „Maskenschichten“, nicht „Maskenbilder“, denn wenn `none` inkludiert ist, wird die transparente schwarze Maske zusammengesetzt. Ein `none`-Wert kann einen tiefgreifenden Effekt auf das Maskieren im Fall von `subtract` und `intersect` haben. Wenn sich zum Beispiel der `mask-mode` auf `luminance` auflöst, wird das Abziehen einer schwarzen Maske die gesamte Maske entfernen (das Element wird verborgen). Ebenso, wenn `none` die letzte Schicht mit `mask-composite: intersect` für diese Schicht ist, wird das gesamte Element verborgen. Hier fügen wir der vorherigen Beispiel eine dritte Schicht mit `none` hinzu:

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

Beachten Sie, wie das `intersect`-Beispiel alles ausschließt, weil die transparente schwarze Maske nichts überschneidet.

Wenn wir die Reihenfolge der Maskenschichten umkehren, können wir auch sehr unterschiedliche Ergebnisse erzielen:

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

Im ersten Beispiel werden die Sterne von den Streifen subtrahiert. Im zweiten werden die Streifen aus den Sternen subtrahiert.

Wie alle anderen `mask`-Komponenteneigenschaften nimmt `mask-composite` eine kommagetrennte Liste von Werten an. Da die Eigenschaft Auswirkungen darauf hat, wie Masken kombiniert werden, ist diese Eigenschaft nur für mehrere Maskenschichten relevant, sodass die Anzahl der verwendeten Werte um eins weniger ist als die Anzahl der Maskenschichten.

Das letzte Paar von Masken wird zuerst zusammengesetzt. Das vorherige Maskenbild wird dann mit der vorherigen Zusammensetzung zusammengesetzt.

Fortsetzung mit dem `masked-element`-Beispiel, wenn wir die `mask-composite`-Eigenschaft nicht explizit setzen, wird sie standardmäßig auf 'add' für jede Schicht gesetzt, als hätten wir Folgendes gesetzt:

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

In diesem Fall wird das `<mask>`-Element mit der `none`-Schicht zusammengesetzt. Dann wird der radiale Verlauf mit dem Ergebnis der vorherigen Zusammensetzung zusammengesetzt und so weiter.

Wie wir bei allen anderen Komponenteneigenschaften gesehen haben, könnten wir die `mask`-Kurzschreibweise verwendet haben:

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

- [Einführung in das CSS-Masking](/de/docs/Web/CSS/CSS_masking/Masking)
- [Einführung in das CSS-Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)
- [CSS-Masking-Modul](/de/docs/Web/CSS/CSS_masking)
