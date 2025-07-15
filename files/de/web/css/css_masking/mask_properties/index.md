---
title: CSS-Maskeneigenschaften
slug: Web/CSS/CSS_masking/Mask_properties
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

CSS-Masking ist eine Technik, die es Ihnen ermöglicht, sichtbare Teile eines Elements zu definieren, indem Sie eine Maske anwenden, die selektiv Teile des Elements basierend auf den Alphakanälen und optional den Farben der angewendeten Maskenbilder freigibt oder ausblendet.

Der [Einführungsleitfaden zum Maskieren](/de/docs/Web/CSS/CSS_masking) stellt die verschiedenen Arten von Maskenbildern und ihre Modi vor. Der Leitfaden zum [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks) behandelt die [Maskenschichten](/de/docs/Web/CSS/CSS_masking/Multiple_masks#understanding_mask_layers) und die {{cssxref("mask")}}-Kurzschreibweise und bietet eine kurze Einführung in die Komponenten-Eigenschaften der Kurzschreibweise. In diesem Leitfaden gehen wir auf diese Komponenten-Eigenschaften im Detail ein und untersuchen, wie sie interagieren. Wir erklären auch, wie die [Maskenschichten kombiniert](#the_mask-composite_property) werden, wenn mehrere Maskenbilder deklariert sind.

CSS-Masken bestehen aus einer oder mehreren Maskenschichten, wobei für jeden Wert in der durch Kommas getrennten Liste der `mask`- oder `mask-image`-Werte eine Maskenschicht erstellt wird, unabhängig davon, ob die Werte Bilder, Maskenquellen oder das Schlüsselwort `none` sind. Jedes {{cssxref("mask-image")}} wird relativ zu einer [Ursprungs](#the_mask-origin_property)-Box [positioniert](#the_mask-position_property). Die Maskenbilder können [skaliert](#the_mask-size_property), [wiederholt](#the_mask-repeat_property) und [geschnitten](#the_mask-clip_property) und dann mit vorherigen Schichten zusammengesetzt werden, um die endgültige visuelle Maske auf dem Element zu erstellen.

## Die `mask-image`-Eigenschaft

Die Mindestanforderung, um eine Maske zu erstellen, ist eine {{cssxref("mask-image")}}-Eigenschaft, die auf einen anderen Wert als `none` gesetzt ist. Das Schlüsselwort `none` innerhalb einer Liste von Maskenquellen erstellt eine Maskenschicht. Wenn `none` jedoch der einzige Wert der `mask-image`-Eigenschaft ist, findet keine Maskierung statt.

Das Maskenbild kann ein [CSS-Gradient](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients), ein [importiertes Bild](/de/docs/Web/CSS/CSS_masking/Masking#with_imported_images) (wie zum Beispiel eine PNG, SVG usw.) oder ein SVG-Element {{svgelement("mask")}} sein.

In diesem Beispiel erstellen wir fünf Maskenschichten, einschließlich eines importierten Bildes, zwei Gradienten, einer Schicht ohne Bild und einer SVG-`<mask>`-Quelle als Maskenbild.

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
}
```

Da eines der Maskenbilder als `none` angegeben ist, werden nur vier Maskenbilder auf das `.masked-element`-Element angewendet, während fünf Maskenschichten erstellt werden.

### Die Bedeutung von `none`

Die `none`-Schicht hat im Allgemeinen keinen visuellen Effekt (siehe die [`mask-composite`-Eigenschaft](#the_mask-composite_property), um zu erfahren, wie sie die angewendete Maske beeinflusst), aber da jeder Wert in einer durch Komma getrennten Liste von `mask-*`-Werten auf eine separate Maskenschicht angewendet wird, erfüllt der `none`-Wert einen wichtigen Zweck, auch wenn er die zusammengesetzte Maske nicht ändert.

Diese vierte Schicht in unserer fünfstufigen Struktur wird dem vierten Wert aller anderen durch Komma getrennten `mask-*`-Eigenschaftswerte entsprechen. Wie bereits erwähnt, wird die Anzahl der Schichten durch die Anzahl der durch Komma getrennten Werte im `mask-image`-Eigenschaftswert bestimmt, selbst wenn ein Wert `none` ist. Jeder `mask-*`-Wert wird in der Reihenfolge mit den `mask-image`-Werten abgeglichen. Wenn die Anzahl der Werte in einer `mask-*`-Eigenschaft von der Anzahl der Maskenschichten abweicht, werden alle überzähligen Werte ignoriert oder, wenn die Eigenschaft weniger Werte als die Anzahl der Maskenschichten hat, werden die Werte wiederholt.

Wenn eine `mask-*`-Eigenschaft nur einen Wert hat, wird dieser Wert auf alle Schichten angewendet. Wenn wir fünf Werte haben, wird der vierte Wert auf die `none`-Schicht angewendet, wobei der letzte Wert auf die `<mask>`-Quellschicht angewendet wird. Wenn es zwei durch Komma getrennte Werte gibt, wird der erste Wert nur auf alle ungeraden Schichten angewendet, einschließlich dieser `<mask>`-Quellschicht. Zum Beispiel kann jede `mask-*`-Eigenschaft eine unterschiedliche Anzahl von Werten haben:

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
  mask-repeat: repeat-x, repeat-y;
  mask-position:
    center,
    top left,
    bottom right;
}
```

In diesem Fall wird jede ungerade Schicht entlang der x-Achse wiederholt, während jede gerade Schicht entlang der y-Achse wiederholt wird. Die erste und vierte Schichtbilder werden zentriert, während die zweite und fünfte in der oberen linken Ecke positioniert werden. `none` bedeutet, dass das Bild der fünften Schicht `#svg-mask` entlang der x-Achse ab der oberen linken Ecke wiederholt wird.

Erfahren Sie mehr über [Maskenschichten und das `none`-Schlüsselwort](/de/docs/Web/CSS/CSS_masking/Multiple_masks#mask_layers_and_the_none_keyword).

## Die `mask-mode`-Eigenschaft

Die {{cssxref("mask-mode")}}-Eigenschaft kann verwendet werden, um den Modus jeder Maskenschicht auf entweder `alpha` oder `luminance` zu setzen oder ihn durch Setzen des Werts auf `match-source` auf den Modus der Quelle zu setzen, was der Standardwert ist. Während die meisten `mask-*`-Eigenschaften eine analoge `background-*`-Eigenschaft haben (zum Beispiel ist `mask-image` analog zur {{cssxref("background-image")}}-Eigenschaft), haben `mask-mode` und [`mask-composite`](#the_mask-composite_property) keine analoge {{cssxref("background")}}-Eigenschaft.

### Maskentypen: `alpha` und `luminance`

Jede Maske ist entweder eine `alpha`- oder eine `luminance`-Maske.

Bei `alpha`-Masken ist die Alpha-Transparenz jedes Maskenpixels von Bedeutung. Wo immer die Maske undurchsichtig ist, sind die entsprechenden Teile des Elements sichtbar. Wenn die Maske transparent ist, sind die entsprechenden Teile des Elements verborgen. Wo immer die Maske halbtransparent ist, ist das Element gleichermaßen halbtransparent. Die Farbe der Maske spielt keine Rolle, nur die Alpha-Transparenz der Farben.

Bei `luminance`-Masken bestimmen sowohl die [Helligkeit der Maskenfarben](/de/docs/Web/CSS/CSS_masking/Masking#alpha_transparency_versus_luminance) als auch der Alphakanal die Undurchsichtigkeit der maskierten Bereiche.

> [!NOTE]
> Alle nachfolgenden Beispiele verwenden das folgende Bild als `background-image` auf einem Element, auf das Masken angewendet werden:
>
> <img src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg" alt="Pride-Flagge" />

Dieses Beispiel zeigt den Unterschied zwischen `alpha`- und `luminance`-Masken. Die Masken sind gleich, aber in der `alpha`-Maske zählt nur die Alpha-Transparenz der Farbverläufe. Im `luminance`-Beispiel sind R, G, B und A alle von Bedeutung.

Zwei Container enthalten Bilder, während der letzte leer ist, aber aufgenommen wird, um den Farbverlauf anzuzeigen, den wir als `mask-image` verwenden werden.

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
    rgb(0 0 0 / 0) 90deg,
    rgb(0 0 0 / 0.05) 90deg 180deg,
    rgb(0 0 0 / 0) 180deg 270deg,
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
    #f00 0 20px,
    #f005 20px 40px,
    transparent 40px 60px
  );
}
.gradient {
  background: repeating-linear-gradient(
    to bottom right,
    #f00 0 20px,
    #f005 20px 40px,
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

Im `alpha`-Fall zählt nur die Transparenz der Farben des Farbverlaufs. Wo der Farbverlauf deckend rot ist, ist das Bild deckend. Wo der Farbverlauf transparent ist, wird das Bild ausgeblendet. Wo der Farbverlauf zu 50 % deckend ist, ist das Bild zu 50 % deckend. Im `luminance`-Fall zählt die Helligkeit der Farbe! Lesen Sie [Alpha-Transparenz versus Luminanz](/de/docs/Web/CSS/CSS_masking/Masking#alpha_transparency_versus_luminance), um mehr über die Gleichung zu erfahren, die die R-, G-, B- und A-Kanäle der Farbe verwendet, um die Opazität der Maske zu bestimmen.

### Der Standardwert der `mask-mode`: `match-source`

Der Standardwert der `mask-mode`-Eigenschaft ist `match-source`. Dieser Wert setzt den `mask-mode` so, dass er dem Modustyp der Maske entspricht. Der `match-source`-Wert löst sich zu `alpha` für jede Maske auf, außer für Masken, bei denen die Maskenquelle ein SVG-{{svgelement("mask")}}-Element ist.

Wenn ein SVG-`<mask>`-Element als Maskenquelle verwendet wird, löst der `match-source`-Wert sich zum Wert der `<mask>`-Element-{{cssxref("mask-type")}}-Eigenschaft auf. Wenn das `<mask>`-Element (nicht das "maskierte Element") die CSS-`mask-type`-Eigenschaft nicht definiert hat, wird dieser Wert auf den Wert des SVG-{{svgAttr("mask-type")}}-Attributs gesetzt, falls vorhanden. Wenn dies auch weggelassen wird, löst sich der `match-source`-Wert zu `luminance` auf.

Im `masked-element`-Beispiel, wenn wir die `mask-mode`-Eigenschaft nicht explizit setzen, wird sie standardmäßig für jede Schicht auf `match-source` gesetzt, als hätten wir Folgendes eingestellt:

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
  mask-mode: match-source;
}
```

oder unter Verwendung der `mask`-Kurzschreibweise:

```css
.masked-element {
  mask:
    url(alphaImage.png) match-source,
    linear-gradient(to right, black, transparent) match-source,
    radial-gradient(circle, white 50%, transparent 75%) match-source,
    none match-source,
    url(#svg-mask) match-source;
}
```

Die erste Maskenschicht, `url(alphaImage.png)`, bezieht sich auf ein Bild. Da dies kein `<mask>`-Element innerhalb eines `<svg>` ist, löst sich der `mask-mode` zu `alpha` auf, wobei die undurchsichtigen Teile dieses Bildes die entsprechenden Teile des Elements sichtbar machen, während die transparenten oder halbtransparenten Teile unsichtbar oder teilweise sichtbar sind.

Der `linear-gradient(to right, black, transparent)` ist die zweite Maskenschicht und `radial-gradient(circle, white 50%, transparent 75%)` die dritte. Auch hier sind dies keine `<mask>`-Elemente, sodass sich der `match-source`-Wert zu `alpha` auflöst. Der Maskierungseffekt dieser Schichten wird standardmäßig durch die [Undurchsichtigkeit des Farbverlaufs der Maske](/de/docs/Web/CSS/CSS_masking/Masking#opaqueness_versus_transparency) bestimmt.

Die vierte Maskenschicht hat `none` deklariert, was bedeutet, dass die Maske für diese Schicht transparentes Schwarz ist. Die `.masked-element`-Klasse setzt `mask-mode: match-source;`. Hätte `mask-mode` stattdessen eine durch Komma getrennte Liste von fünf verschiedenen Werten gewesen, hätte der vierte Wert auf diese `none`-Schicht angewendet werden können, sodass der fünfte Wert auf die fünfte Schicht angewendet wird.

Die fünfte Maskenschicht besteht aus einem SVG-{{svgelement("mask")}}-Element, das `svg-mask` als [id](/de/docs/Web/HTML/Reference/Global_attributes/id) hat. Während der Standardmaskenmodus der anderen Schichten `alpha` ist, ist der Standardmaskentyp von SVG-`<mask>`-Elementen der `mask-type`-Wert oder, falls nicht gesetzt, das `mask-type`-Attribut. Wenn das auch nicht definiert ist, ist der Wert standardmäßig `luminance`. Mit anderen Worten, der Maskierungseffekt des `<mask>` wird sowohl durch die Helligkeit als auch durch die Transparenz der Farben des `<mask>`-Elements bestimmt.

Wenn wir die `mask-mode`-Eigenschaft überhaupt nicht deklarieren und es für jede Maskenschicht auf den Standardwert `match-source` belassen, würde das Ergebnis in diesem `.masked-element`-Fall folgendermaßen gelöst werden:

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
  mask-mode: alpha, alpha, alpha, match-source, luminance;
}
```

oder unter Verwendung der `mask`-Kurzschreibweise:

```css
.masked-element {
  mask:
    url(alphaImage.png) alpha,
    linear-gradient(to right, black, transparent) alpha,
    radial-gradient(circle, white 50%, transparent 75%) alpha,
    none match-source,
    url(#svg-mask) luminance;
}
```

## Die `mask-position`-Eigenschaft

Analog zur {{cssxref("background-position")}}-Eigenschaft legt die {{cssxref("mask-position")}}-Eigenschaft die Anfangsposition des Maskenbildes relativ zur Ursprungsbox der Maskenschicht fest, die durch [die `mask-origin`-Eigenschaft](#the_mask-origin_property) definiert ist. Die Syntax folgt der [`background-position`-`<position>`-Syntax](/de/docs/Web/CSS/background-position#position), wobei der Wert ein, zwei oder vier {{cssxref("&lt;position&gt;")}}-Werte ist, die ein bis zwei relative oder absolute Positionsverschiebungen definieren.

### Ein-Wert-Syntax

Wenn nur ein Schlüsselwortwert angegeben ist, gibt dieser Wert die Maskenurpsrungskante an, an der die Maske platziert wird, wobei die andere Dimension `center` ist.

Wenn nur ein {{cssxref("&lt;length-percentage&gt;")}}-Wert angegeben ist, gibt dies die X-Koordinate relativ zur linken Maskenurpsprung an, wobei die Y-Koordinate auf `50%` festgelegt wird.

Wenn zwei Schlüsselwortwerte angegeben sind, spielt die Reihenfolge der Werte keine Rolle, aber der Wert darf nicht zwei vertikale oder zwei horizontale Achsenwerte enthalten; `left right` und `top bottom` sind beide ungültig.

### Zwei-Wert-Syntax

Wenn zwei Werte vorhanden sind und davon einer ein Schlüsselwort und einer ein `<length-percentage>`-Wert ist, spielt die Reihenfolge nur dann eine Rolle, wenn das Schlüsselwort `center` ist:

- Wenn das Schlüsselwort `left` oder `right` ist, definiert es die X-Koordinate relativ zur linken Kante, und der Wert definiert die Y-Koordinate relativ zur oberen Kante.
- Ebenso definiert ein `top`- oder `bottom`-Schlüsselwort die Y-Koordinate und positioniert das Element an der oberen oder unteren Kante, während der andere Wert die X-Koordinate relativ zur linken Kante der Maskenurpsrungbox definiert.
- Wenn ein Wert das Schlüsselwort `center` ist und der andere ein `<length-percentage>`, definiert der erste Wert die horizontale Position und der zweite Wert die vertikale Position.

Wenn zwei Werte vorhanden sind und beide `<length-percentage>`-Werte sind, spielt die Reihenfolge wieder eine Rolle; der erste Wert definiert die horizontale Positionierung als Versatz von der linken Kante des Masken-Positionierungsbereichs, während der zweite Wert die vertikale Position als Versatz von der oberen Kante des Masken-Positionierungsbereichs definiert.

### Vier-Wert-Syntax

Maskenpositionen können auch relativ zu anderen Ecken als der oberen linken sein. Die Vier-Wert-Syntax ermöglicht den Versatz der Maske von jeder Ecke. Der Wert umfasst zwei {{cssxref("length-percentage")}}-Offsets, die jeweils von der Ursprungsseite für diesen Offset angeführt werden. Es spielt keine Rolle, ob Sie das horizontale oder vertikale Paar zuerst deklarieren, aber Sie müssen das Ursprungsseiten-Schlüsselwort (`left`, `right`, `top`, `bottom`, `x-start`, `x-end`, `y-start`, `y-end`, `block-start`, `block-end`, `inline-start` oder `inline-end`) vor dem <length-percentage>-Offset in jedem Paar erklärend platzieren, und die beiden Ursprungsseiten dürfen nicht von derselben Achse sein.

In der zwei `<length-percentage>`-Syntax sind die Ursprungsseiten `top` und `left`, in dieser Reihenfolge. Zum Beispiel ist `mask-position: 10px 20px` das Äquivalent zu `mask-position: left 10px top 20px`. Wenn der Versatz von `top` und `left` erfolgt, sind die Versatzseiten nicht erforderlich, aber die Reihenfolge ist wichtig. Mit der Vier-Wert-Syntax können Sie `mask-position` verwenden, um das Maskenbild von jeder Kantenkombination zu versetzen, wie `left 10px bottom 20px`, und die Reihenfolge der Seiten spielt keine Rolle, da die Versatzkante durch das vorhergehende Schlüsselwort und nicht durch die Deklarationsreihenfolge definiert wird.

### Prozentwerte

Wenn Sie Prozentwerte verwenden, um Offsets zu setzen, wird die Dimension der Maske von der Dimension des Elements subtrahiert, wie bei [Prozentsätzen mit `background-position`](/de/docs/Web/CSS/background-position#regarding_percentages).

### Positionierung wiederholter Maskenbilder

Die `mask-position`-Eigenschaft definiert die Anfangsposition des Maskenbildes. Mit "Anfangsposition" ist, falls die [Maske wiederholt wird](#the_mask-repeat_property), die Position des ersten Maskenbildes im durch die `mask-position`-Eigenschaft definierten Platz gemeint, was somit die Platzierung der Maskenwiederholungen definiert.

In diesem Beispiel setzen wir die Position des ersten Bildes auf `bottom right`, was bedeutet, dass die erste Maske an der unteren rechten Kante der Maskenvorposingsbox platziert wird. Da Maskenbilder standardmäßig wiederholt werden, werden die wiederholten Masken gegen die Ober- und linken Seiten des ersten platzierten Maskenbildes positioniert.

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
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
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

Die `mask-position`-Eigenschaft definiert die Position des ersten Maskenbildplatzes. Diese Demo zeigt, wo das erste Bild platziert wird:

```css hidden live-sample___position_no-repeat
img {
  mask-repeat: no-repeat;
}
```

{{EmbedLiveSample("position_no-repeat", "", "260px")}}

Da der Standardwert für die [`mask-repeat`-Eigenschaft](#the_mask-repeat_property) `repeat` ist, werden die Bilder entlang der X- und Y-Achsen wiederholt, basierend auf der Position dieser ersten Maske:

{{EmbedLiveSample("position", "", "260px")}}

Das Beispiel mit den zwei Werten definiert die oberen und linken Offsets der ursprünglichen Maske. Das Beispiel mit den vier Werten kombiniert die vorherigen beiden Beispiele, positioniert die erste Maske mit denselben Offsets wie das zweite Bild, jedoch von denselben Kanten wie im ersten Bild demonstriert.

Im ersten Bild ist der erste Stern, der platziert wird, der unten rechts, mit den wiederholten Sternen oben und links. Aufgrund dieser Positionierung wird der ursprüngliche Stern nicht abgeschnitten, aber der oberste und der linke Stern werden abgeschnitten.

Wenn wir die `mask-position`-Eigenschaft nicht explizit setzen, wird sie standardmäßig für jede Schicht auf `0% 0%` gesetzt, wobei die obere linke Ecke der Maske an der oberen linken Ecke der Maskenvorposingsbox liegt. Fortfahrend mit dem `masked-element`-Beispiel, wäre es, als hätten wir Folgendes gesetzt:

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
  mask-mode: match-source;
  mask-position: 0% 0%;
}
```

oder, erweitert über das Beispiel mit der `mask`-Kurzschreibweise:

```css
.masked-element {
  mask:
    url(alphaImage.png) 0% 0% match-source,
    linear-gradient(to right, black, transparent) 0% 0% match-source,
    radial-gradient(circle, white 50%, transparent 75%) 0% 0% match-source,
    none 0% 0% match-source,
    url(#svg-mask) 0% 0% match-source;
}
```

## Die `mask-origin`-Eigenschaft

Wenn ein Element einen Rand oder ein Padding oder beides hat, definiert die {{cssxref("mask-origin")}}-Eigenschaft, welcher dieser Boxenwert als Maskenurpsrungsbox oder der Maskenpositionierungsbereich fungiert, innerhalb dessen ein Maskenbild positioniert wird, für diese Schicht. Die `mask-origin`-Eigenschaft ist analog zur {{cssxref("background-origin")}}-Eigenschaft, jedoch mit einem anderen Initialwert und SVG-spezifischen Werten.

HTML-Elemente können Masken im Inneren ihrer Inhaltsumrandungsbox, Padding-Box oder Inhaltsbox enthalten. Zum Beispiel, wenn die `mask-position` `top left` ist, bezieht sich dies auf den Rand der äußeren Randkante, den äußeren Kantenpolster oder die äußere Inhaltkanten?

In dem Beispiel zur [`mask-position`](#the_mask-position_property) war die definierte Position relativ zur Randbox (das Standardverhalten), obwohl es erwähnenswert ist, dass das `<img>` keinen Rand oder Padding hatte, daher wären die Content-Box, die Padding-Box und die Randbox-Ursprünge in diesem Fall alle gleich.

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

In diesem Beispiel platziert die `mask-position` die initiale Maske in der oberen linken Ecke des `<img>`-Elements, das einen großen Rand und Padding hat, mit einer grünen Hintergrundfarbe, um das Sternmaskieren auf dem Polsterungsbereich sichtbar zu machen.

```css live-sample___origin live-sample___clip
img {
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
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

Ändern Sie den Wert der `mask-origin`-Eigenschaft, indem Sie das ausgewählte Optionsfeld ändern und dabei die Position des oberen linken Sterns beobachten, während Sie dies tun.

{{EmbedLiveSample("origin", "", "350px")}}

Der Standardwert ist `border-box`. Mit diesem Wert wird die Initialmaske am oberen Rand der Grenze platziert und nicht abgeschnitten. Wenn die Initialmaske an der äußeren oder inneren Kante der Polsterung platziert wird, gibt es Platz über und links davon; diese sich wiederholenden Masken werden abgeschnitten.

Fortfahrend mit dem `masked-element`-Beispiel, wenn wir die `mask-origin`-Eigenschaft nicht explizit setzen, wird sie standardmäßig für jede Schicht auf `border-box` gesetzt, als hätten wir Folgendes gesetzt:

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
  mask-mode: match-source;
  mask-position: 0% 0%;
  mask-origin: border-box;
}
```

oder, erweitert über das Beispiel mit der `mask`-Kurzschreibweise:

```css
.masked-element {
  mask:
    url(alphaImage.png) 0% 0% border-box match-source,
    linear-gradient(to right, black, transparent) 0% 0% border-box match-source,
    radial-gradient(circle, white 50%, transparent 75%) 0% 0% border-box
      match-source,
    none 0% 0% border-box match-source,
    url(#svg-mask) 0% 0% border-box match-source;
}
```

Für SVG-Elemente, die nicht die zugehörigen CSS-Layoutboxen haben, kann eine Maske im Inneren der SVG-Elementfüllung, des Strichs oder des Ansichtsfensters enthalten sein.

## Die `mask-clip`-Eigenschaft

Die {{cssxref("mask-clip")}}-Eigenschaft bestimmt den Bereich des Elements, der von einer Maske betroffen sein wird, indem das Element effektiv an der definierten Boxkante abgeschnitten wird. Sie ist analog zur {{cssxref("background-clip")}}-Eigenschaft, jedoch mit einigen unterschiedlichen Werten.

Da die `mask-clip`-Eigenschaft alle `mask-origin`-Werte akzeptiert und beide den gleichen Standardwert `border-box` haben, scheinen die beiden Eigenschaften ähnlich zu sein, aber sie dienen sehr unterschiedlichen Zwecken. Während `mask-origin` bestimmt, wo ein Maskenbild platziert wird, bewirkt die `mask-clip`-Eigenschaft, dass das ursprüngliche Element seinen Inhalt auf die angegebene Box beschränkt. Es ist wichtig, beide zu verstehen: Wenn `mask-origin` bewirkt, dass die `mask-position` das Maskenbild außerhalb des Ausschnittsbereichs platziert, wird die Maske abgeschnitten.

Die `mask-clip`-Eigenschaft akzeptiert alle `mask-origin`-Werte sowie den eigenen Wert `no-clip`. Der `no-clip`-Wert legt fest, dass der gemalte Inhalt nicht abgeschnitten wird. Sie können das Maskenbild dennoch durch Positionierung außerhalb des Randinhaltsbereichs mit `mask-position`-Werten, die kleiner als Null sind oder zu größer als 100% auflösen, abschneiden.

Das Setzen der `mask-clip` und `mask-origin` auf verschiedene Werte kann dazu führen, dass das Maskenebenenbild abgeschnitten wird. Zum Beispiel, wenn ein Element mit einer Umrandung und Polsterung `mask-clip` auf `content-box` und `mask-origin` auf `border-box` gesetzt hat, und die `mask-position` auf die Kante `top left` gesetzt ist, wird das Maskenebenenbild an der oberen linken Kante abgeschnitten.

Das nächste Beispiel fügt die Clipping-Optionen zum vorherigen Beispiel hinzu, um die verschiedenen nicht-SVG-`mask-clip`-Werte zu demonstrieren und zu zeigen, wie sie die verschiedenen `mask-origin`-Werte beeinflussen.

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

Die erste Maske wird am oberen linken Rand des Maskenurpsrungscontainer positioniert und dann wiederholt. Wenn die Ursprungsbox die `border-box` ist und die Clip-Region die `content-box`, werden die oberen und linken Bereiche des Maskenurpsrungscontainers abgeschnitten. Im Allgemeinen möchten Sie, dass `mask-clip` dasselbe wie das `mask-origin` ist.

Fortfahrend mit dem `masked-element`-Beispiel, wenn wir die `mask-clip`-Eigenschaft nicht explizit setzen, wird sie standardmäßig für jede Schicht auf `border-box` gesetzt, als hätten wir Folgendes gesetzt:

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
  mask-mode: match-source;
  mask-position: 0% 0%;
  mask-origin: border-box;
  mask-clip: border-box;
}
```

oder, erweitert über das Beispiel mit der `mask`-Kurzschreibweise:

```css
.masked-element {
  mask:
    url(alphaImage.png) 0% 0% border-box border-box match-source,
    linear-gradient(to right, black, transparent) 0% 0% border-box border-box
      match-source,
    radial-gradient(circle, white 50%, transparent 75%) 0% 0% border-box
      border-box match-source,
    none 0% 0% border-box border-box match-source,
    url(#svg-mask) 0% 0% border-box border-box match-source;
}
```

In der `mask`-Kurzschreibweise wird bei Angabe von nur einem [`<geometry-box>`](/de/docs/Web/CSS/clip-path#geometry-box)-Wert sowohl der `mask-origin`- als auch der `mask-clip`-Eigenschaftswert eingestellt. Wenn zwei `<geometry-box>`-Werte vorhanden sind, definiert der erste das `mask-origin` und der zweite das `mask-clip`.

Für Maskenebenenbilder, die kein SVG-{{svgelement("mask")}}-Element referenzieren, definiert die `mask-clip`-Eigenschaft, ob der Maskenmalbereich oder der vom Masken betroffene Bereich der Rand-, Polster- oder Inhaltsbox ist. Der gemalte Inhalt des Elements wird auf diesen Bereich beschränkt.

Wenn die {{cssxref("mask-image")}}-Quelle der Maskenebene eine `<mask>` ist, hat die `mask-clip`-Eigenschaft keine Wirkung. Stattdessen bestimmen die {{svgAttr("x")}}, {{svgAttr("y")}}, {{svgAttr("width")}}, {{svgAttr("height")}} und {{svgAttr("maskUnits")}} Attribute des `<mask>`-Elements den Maskenbereich.

## Die `mask-size`-Eigenschaft

Die {{cssxref("mask-size")}}-Eigenschaft wird verwendet, um Maskenschichten zu skalieren. Diese Eigenschaft ist analog zur {{cssxref("background-size")}}-Eigenschaft und nimmt die gleichen Werte an. Beim Skalieren Ihrer Masken sollten Sie beachten, dass Bereiche des Elements, die nicht von den Maskenbildern abgedeckt sind, verborgen sind.

Es gibt drei Möglichkeiten, eine `mask-size` zu deklarieren:

- das Schlüsselwort `cover` oder `contain`,
- eine Länge, ein Prozentsatz oder das Schlüsselwort `auto`, oder
- zwei Werte, die eine Kombination aus Längen, Prozentsätzen und dem Schlüsselwort `auto` sind.

Das Maskenbild kann seiner natürlichen Größe überlassen, gestreckt oder eingeschränkt werden, um in den verfügbaren Raum zu passen. Das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Maskenbildes wird standardmäßig beibehalten, aber das Deklarieren von zwei `<length-percentage>`-Werten kann das Maskenbild verformen, wenn das Verhältnis der beiden Werte nicht mit dem Originalbild übereinstimmt (`mask-repeat: round` ist das andere Eigenschaften-/Wertepaar, das das Maskenbild verzerren kann).

Ist die `mask-size` auf `contain` gesetzt, wird das Maskenbild die größte Größe haben, die es haben kann, während es vollständig innerhalb des Masken-Positionierungsbereichs enthalten ist. In diesem Fall wird das Maskenbild nicht abgeschnitten, sondern vollständig enthalten.

Wenn auf `cover` gesetzt, wird das Maskenbild die kleinste Größe haben, die es haben kann, um den gesamten Masken-Positionierungsbereich vollständig abzudecken, wobei die Maske abgeschnitten wird, wenn das Maskenverhältnis von dem Verhältnis des Masken-Positionierungsbereichs abweicht.

Mit anderen Worten, mit `cover` und `contain` wird mindestens eine Dimension der Maske so groß wie die gleiche Dimension des Masken-Positionierungsbereichs sein; das Maskenbild wächst oder schrumpft, sodass entweder die Breite die gleiche Breite wie der Masken-Positionierungsbereich oder die Höhe des Maskenbildes der Höhe des Masken-Positionierungsbereichs entspricht.

Bei `cover`, `contain` und `<percentage>`-Werten ist die Größe relativ zur Ursprungsbox. In unserem Beispiel mit Stern-Maske und Flaggenbild ist das Seitenverhältnis sowohl des Maskenbildes als auch des `<img>`-Dokuments `1:1`, was bedeutet, dass in diesem Fall `cover`, `contain` und `100%` alle die gleiche Größe für die Maske liefern. Dieses Beispiel zeigt, wie bei `mask-size` auf `cover`, `contain` oder einem `<percentage>`-Wert eingestellt, die tatsächliche Größe der Maske je nach Wert der [`mask-origin`-Eigenschaft](#the_mask-origin_property) unterschiedlich sein kann:

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
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
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

Ändern Sie den Wert der `mask-origin`-Eigenschaft, um zu sehen, wie die verschiedenen Werte die Maskengröße beeinflussen:

{{EmbedLiveSample("size", "", "350px")}}

Dieses Beispiel enthielt einen `<percentage>`-Wert. Wenn ein `<length-percentage>`-Wert angegeben ist, definiert er nur die Breite der Maske, wobei die Höhe standardmäßig auf `auto` gesetzt wird, was das Seitenverhältnis beibehält. Wenn zwei Werte spezifiziert sind, definiert der erste die Breite der Maske und der zweite ihre Höhe.

Der Standardwert von `mask-size` ist `auto`, was die Maske in ihrer {{Glossary("intrinsic_size", "intrinsischen Größe")}} rendert, der Größe, in der die Maske ohne CSS angezeigt würde. Das zugrunde liegende {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Maskenbildes wird beibehalten, wenn Sie einen einzigen `<length-percentage>`-Wert oder zwei Werte im gleichen Verhältnis wie das Seitenverhältnis einstellen. Wenn Sie zwei Werte deklarieren, die nicht im gleichen Verhältnis zum Seitenverhältnis stehen, wird das Maskenbild verzerrt.

Wie bei allen Langhandkomponenten der Kurzschreibweise, wenn die {{cssxref("mask")}}-Kurzschreibweise gesetzt ist und der Wert der `mask-size`-Eigenschaft in keiner Maskenschicht definiert ist, wird der `mask-size`-Wert für diese Maskenschichten auf seinen Standardwert `auto` zurückgesetzt.

Wenn das Bild keine intrinsische Proportion hat, zum Beispiel im Fall eines [CSS-Farbverlaufs](/de/docs/Web/CSS/gradient), ist das Standard-`auto` die Gesamtheit des Masken-Positionierungsbereichs, wie er durch [die `mask-origin`-Eigenschaft](#the_mask-origin_property) festgelegt ist.

Fortfahrend mit dem `masked-element`-Beispiel, wenn wir die `mask-size`-Eigenschaft nicht explizit setzen, wird sie standardmäßig für jede Schicht auf `auto` gesetzt, als hätten wir Folgendes gesetzt:

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
  mask-mode: match-source;
  mask-position: 0% 0%;
  mask-origin: border-box;
  mask-clip: border-box;
  mask-size: auto;
}
```

oder, erweitert über das Beispiel mit der `mask`-Kurzschreibweise, wobei die `mask-size`-Komponente nach dem `mask-position`-Wert gesetzt wird, getrennt durch einen Schrägstrich (/):

```css
.masked-element {
  mask:
    url(alphaImage.png) 0% 0% / auto border-box border-box match-source,
    linear-gradient(to right, black, transparent) 0% 0% / auto border-box
      border-box match-source,
    radial-gradient(circle, white 50%, transparent 75%) 0% 0% / auto border-box
      border-box match-source,
    none 0% 0% / auto border-box border-box match-source,
    url(#svg-mask) 0% 0% / auto border-box border-box match-source;
}
```

## Die `mask-repeat`-Eigenschaft

Die {{cssxref("mask-repeat")}}-Eigenschaft definiert, wie Maskenbilder wiederholt oder gekachelt werden, nachdem das ursprüngliche Maskenbild skaliert und positioniert wurde. Die `mask-repeat`-Eigenschaft definiert, ob und wie dieses Maskenbild entlang der horizontalen und vertikalen Achsen wiederholt wird. In den meisten der vorherigen Beispiele haben Sie möglicherweise bemerkt, dass die Sternmaske entlang der X- und Y-Achsen wiederholt wurde. Dies liegt daran, dass `repeat` der Standardwert ist.

Die `mask-repeat`-Eigenschaft ist analog zur {{cssxref("background-repeat")}}-Eigenschaft und akzeptiert die gleichen [`<repeat-style>`](/de/docs/Web/CSS/mask-repeat#values)-Werte. Wie bei `background-repeat` wird die erste (und möglicherweise einzige) Maskenbild-Wiederholung durch [die `*-Position`-Eigenschaft](#the_mask-position_property) positioniert und durch [die `*-size`-Eigenschaft](#the_mask-size_property) skaliert. Die Positionen der wiederholten Hintergrund- oder Maskenbilder basieren auf dieser ursprünglichen Bildinstanz.

Fortfahrend mit dem `masked-element`-Beispiel, wenn wir die `mask-repeat`-Eigenschaft nicht explizit setzen, wird sie standardmäßig für jede Schicht auf `repeat` gesetzt, als hätten wir Folgendes gesetzt:

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
  mask-mode: match-source;
  mask-position: 0% 0%;
  mask-origin: border-box;
  mask-clip: border-box;
  mask-size: auto;
  mask-repeat: repeat;
}
```

oder, erweitert über das Beispiel mit der `mask`-Kurzschreibweise:

```css
.masked-element {
  mask:
    url(alphaImage.png) 0% 0% / auto repeat border-box border-box match-source,
    linear-gradient(to right, black, transparent) 0% 0% / auto repeat border-box
      border-box match-source,
    radial-gradient(circle, white 50%, transparent 75%) 0% 0% / auto repeat
      border-box border-box match-source,
    none 0% 0% / auto repeat border-box border-box match-source,
    url(#svg-mask) 0% 0% / auto repeat border-box border-box match-source;
}
```

## Die `mask-composite`-Eigenschaft

Die {{cssxref("mask")}}-Kurzschreibweise umfasst die {{cssxref("mask-composite")}}-Eigenschaft, die definiert, wie mehrere Masken kombiniert werden, um den endgültigen Maskeneffekt zu erzeugen. Jeder Wert in der durch Komma getrennten Liste von Werten legt fest, ob der Browser die zugehörige Maskenschicht von oder zu den darunter liegenden Maskenschichten `add`, `subtract`, `intersect` oder `exclude` soll. Ähnlich wie bei `mask-mode` und den anderen `mask-*`-Eigenschaften gibt es keine Eigenschaft in der {{cssxref("background")}}-Kurzschreibweise, die analog ist.

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

In diesem Beispiel enthalten wir zwei `mask-image`-Werte, einschließlich des Sterns und des Farbverlaufs aus den vorherigen Beispielen als Maskenbilder:

```css live-sample___composite
img {
  mask-image:
    repeating-linear-gradient(
      to bottom right,
      #f00 0 20px,
      #f005 20px 40px,
      transparent 40px 60px
    ),
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
}
```

Wir setzen einen anderen `mask-composite`-Wert für jedes Bild:

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

Die halbtransparente Sternmaske wird je nach `mask-composite`-Wert zu der Streifenmaske hinzugefügt, von dieser abgezogen, mit dieser geschnitten oder von dieser ausgeschlossen.

Die `mask-composite`-Eigenschaft ist nur relevant in Fällen mit zwei oder mehr Maskenschichten. Es heißt "Maskenschichten", nicht "Maskenbilder", da, wenn `none` inkludiert ist, die transparente schwarze Maske zusammengesetzt wird. Ein `none`-Wert kann einen tiefgreifenden Einfluss auf das Maskieren im Fall von `subtract` und `intersect` haben. Zum Beispiel, wenn der `mask-mode` sich zu `luminance` auflöst, wird durch das Abziehen einer schwarzen Maske die gesamte Maske entfernt (das Element wird verborgen). Ebenso, wenn `none` die letzte Schicht ist, mit `mask-composite: intersect` für diese Schicht, wird das gesamte Element verborgen. Hier fügen wir der vorherigen Beispiel eine dritte Schicht, mit `none`, hinzu:

```css live-sample___composite3
img {
  mask-image:
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg),
    repeating-linear-gradient(
      to bottom right,
      #f00 0 20px,
      #f005 20px 40px,
      transparent 40px 60px
    ),
    none;
}
```

{{EmbedLiveSample("composite3", "", "600px")}}

Beachten Sie, wie das `intersect`-Beispiel alles ausschließt, da die transparente schwarze Maske nichts überschneidet.

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
      #f00 0 20px,
      #f005 20px 40px,
      transparent 40px 60px
    ),
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
}
.starFirst {
  mask-image:
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg),
    repeating-linear-gradient(
      to bottom right,
      #f00 0 20px,
      #f005 20px 40px,
      transparent 40px 60px
    );
}
```

{{EmbedLiveSample("composite2", "", "350px")}}

Im ersten Beispiel werden die Sterne von den Streifen abgezogen. Im zweiten werden die Streifen von den Sternen abgezogen.

Wie bei allen anderen `mask`-Komponenteneigenschaften nimmt `mask-composite` eine durch Kommas getrennte Liste von Werten an. Da die Eigenschaft den Effekt hat, wie Masken kombiniert werden, ist diese Eigenschaft nur relevant für mehrere Maskenschichten und die Anzahl der verwendeten Werte ist um eins geringer als die Anzahl der Maskenschichten.

Die letzten Paar Masken werden zuerst zusammengesetzt. Das vorherige Maskenbild wird dann mit der vorherigen Zusammensetzung zusammengesetzt.

Fortfahrend mit dem `masked-element`-Beispiel, wenn wir die `mask-composite`-Eigenschaft nicht explizit setzen, wird sie standardmäßig für jede Schicht auf `add` gesetzt, als hätten wir Folgendes gesetzt:

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
  mask-mode: match-source;
  mask-position: 0% 0%;
  mask-origin: border-box;
  mask-clip: border-box;
  mask-size: auto;
  mask-repeat: repeat;
  mask-composite: add;
}
```

In diesem Fall wird das `<mask>`-Element mit der `none`-Schicht kombiniert. Dann wird der radiale Verlauf mit dem Ergebnis der vorherigen Zusammensetzung kombiniert und so weiter.

Wie wir bei allen anderen Komponenteneigenschaften gesehen haben, hätten wir auch die `mask`-Kurzschreibweise verwenden können:

```css
.masked-element {
  mask:
    url(alphaImage.png) 0% 0% / auto repeat border-box border-box add
      match-source,
    linear-gradient(to right, black, transparent) 0% 0% / auto repeat border-box
      border-box add match-source,
    radial-gradient(circle, white 50%, transparent 75%) 0% 0% / auto repeat
      border-box border-box add match-source,
    none 0% 0% / auto repeat border-box border-box add match-source,
    url(#svg-mask) 0% 0% / auto repeat border-box border-box add match-source;
}
```

## Siehe auch

- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [Einführung in CSS-Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
