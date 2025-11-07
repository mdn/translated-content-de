---
title: CSS-Maskeneigenschaften
short-title: Mask properties
slug: Web/CSS/Guides/Masking/Mask_properties
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

CSS-Masking ist eine Technik, die es Ihnen ermöglicht, sichtbare Bereiche eines Elements zu definieren, indem Sie eine Maske anwenden, die selektiv Teile des Elements basierend auf den Alphakanälen und optional den Farben der angewendeten Maskenbilder sichtbar macht oder verbirgt.

Der [einführende Leitfaden zum Masking](/de/docs/Web/CSS/Guides/Masking) stellt die verschiedenen Arten von Maskenbildern und deren Modi vor. Der Leitfaden zum [Deklarieren mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks) behandelt die [Maskenschichten](/de/docs/Web/CSS/Guides/Masking/Multiple_masks#understanding_mask_layers) und die {{cssxref("mask")}}-Kurzschreibweise und bietet eine kurze Einführung in die Komponenten-Eigenschaften der Kurzschreibweise. In diesem Leitfaden erkunden wir diese Komponenten-Eigenschaften detaillierter und betrachten, wie sie interagieren. Wir erklären auch, wie in Fällen, in denen mehrere Maskenbilder deklariert sind, die [Maskenschichten zusammengesetzt werden](#the_mask-composite_property) oder kombiniert werden.

CSS-Masken bestehen aus einer oder mehreren Maskenschichten, wobei für jeden Wert in der durch Kommas getrennten Liste von `mask`- oder `mask-image`-Werten eine Maskenschicht erstellt wird, unabhängig davon, ob die Werte Bilder, Maskenquellen oder das Schlüsselwort `none` sind. Jedes {{cssxref("mask-image")}} wird relativ zu einer [Ursprungsbox](#the_mask-origin_property) positioniert. Die Maskenbilder können [skaliert](#the_mask-size_property), [wiederholt](#the_mask-repeat_property) und [beschnitten](#the_mask-clip_property) werden, dann mit den vorhergehenden Schichten zusammengesetzt, um die endgültige visuelle Maske auf dem Element zu erstellen.

## Die `mask-image`-Eigenschaft

Die Mindestanforderung, um eine Maske zu erstellen, ist eine {{cssxref("mask-image")}}-Eigenschaft, die auf einen anderen Wert als `none` gesetzt ist. Das Schlüsselwort `none` innerhalb einer Liste von Maskenquellen erstellt eine Maskenschicht. Wenn jedoch `none` der einzige Wert der `mask-image`-Eigenschaft ist, tritt kein Masking auf.

Das Maskenbild kann ein [CSS-Verlauf](/de/docs/Web/CSS/Guides/Images/Using_gradients), ein [importiertes Bild](/de/docs/Web/CSS/Guides/Masking/Introduction#with_imported_images) (wie PNG, SVG usw.) oder ein SVG-{{svgelement("mask")}}-Element sein.

In diesem Beispiel erstellen wir fünf Maskenschichten, einschließlich eines importierten Bildes, zweier Verläufe, einer Schicht ohne Bild und einer SVG-`<mask>`-Quelle als Maskenbild.

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
}
```

Da eines der Maskenbilder als `none` angegeben ist, werden nur vier Maskenbilder auf das `.masked-element` angewendet, während fünf Maskenschichten erstellt werden.

### Die Bedeutung von `none`

Die `none`-Schicht hat im Allgemeinen keinen visuellen Effekt (siehe die [`mask-composite`-Eigenschaft](#the_mask-composite_property) für die Auswirkungen auf die angewendete Maske), aber da jeder Wert in einer durch Kommas getrennten Liste von `mask-*`-Werten auf eine separate Maskenschicht angewendet wird, erfüllt der `none`-Wert auch dann einen wichtigen Zweck, wenn er die zusammengesetzte Maske nicht ändert.

Diese vierte Schicht in unserer fünf-Schichten-Struktur wird dem vierten Wert aller anderen durch Kommas getrennten `mask-*`-Eigenschaften entsprechen. Wie bereits erwähnt, wird die Anzahl der Schichten durch die Anzahl der durch Kommas getrennten Werte im {{cssxref("mask-image")}}-Eigenschaftswert bestimmt, auch wenn ein Wert `none` ist. Jeder `mask-*`-Wert wird der `mask-image`-Werte in der Reihenfolge zugeordnet. Wenn die Anzahl der Werte in einer `mask-*`-Eigenschaft von der Anzahl der Maskenschichten abweicht, werden überflüssige Werte ignoriert oder, wenn die Eigenschaft weniger Werte als die Anzahl der Maskenschichten hat, werden die Werte wiederholt.

Wenn eine `mask-*`-Eigenschaft einen einzelnen Wert hat, wird dieser Wert auf alle Schichten angewendet. Wenn wir fünf Werte haben, wird der vierte Wert auf die `none`-Schicht angewendet, während der letzte Wert auf die `<mask>`-Schicht angewendet wird. Wenn es zwei durch Kommas getrennte Werte gibt, wird der erste Wert nur auf alle ungeraden Schichten angewendet, einschließlich dieser `<mask>`-Schicht. Zum Beispiel kann jede `mask-*`-Eigenschaft eine unterschiedliche Anzahl von Werten haben:

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

In diesem Fall wird jede ungerade Schicht entlang der x-Achse wiederholt, während jede gerade Schicht entlang der y-Achse wiederholt wird. Die erste und vierte Schichtbilder werden zentriert, während die zweite und fünfte Schichtbilder in der oberen linken Ecke positioniert werden. Das `none` bedeutet, dass das fünfte Schichtbild `#svg-mask` entlang der x-Achse ab der oberen linken Ecke wiederholt wird.

Erfahren Sie mehr über [Maskenschichten und das `none`-Schlüsselwort](/de/docs/Web/CSS/Guides/Masking/Multiple_masks#mask_layers_and_the_none_keyword).

## Die `mask-mode`-Eigenschaft

Die {{cssxref("mask-mode")}}-Eigenschaft kann verwendet werden, um den Modus jeder Maskenschicht entweder auf `alpha` oder `luminance` zu setzen oder es zu ermöglichen, dass er auf den Modus der Quelle standardmäßig gesetzt wird, indem der Wert auf `match-source` gesetzt wird, was der Standardwert ist. Während die meisten `mask-*`-Eigenschaften eine analoge `background-*`-Eigenschaft haben (`mask-image` ist analog zur {{cssxref("background-image")}}-Eigenschaft, zum Beispiel), haben `mask-mode` und [`mask-composite`](#the_mask-composite_property) keine analoge {{cssxref("background")}}-Eigenschaft.

### Maskentypen: `alpha` und `luminance`

Jede Maske ist entweder eine `alpha`- oder eine `luminance`-Maske.

Bei `alpha`-Masken ist die Alphatransparenz jedes Maskenpixels wichtig. Wo die Maske opak ist, sind die entsprechenden Teile des Elements sichtbar. Wo die Maske transparent ist, sind die entsprechenden Teile des Elements verborgen. Wo die Maske halbopakt ist, ist das Element gleichermaßen halbopakt. Die Farbe der Maske spielt keine Rolle, nur die Alphatransparenz der Farben.

Bei `luminance`-Masken bestimmen sowohl die [Helligkeit der Maskenfarben](/de/docs/Web/CSS/Guides/Masking/Introduction#alpha_transparency_versus_luminance) als auch der Alphakanal die Undurchsichtigkeit der maskierten Bereiche.

> [!NOTE]
> Alle nachfolgenden Beispiele verwenden das folgende Bild als `background-image` für ein Element, auf das Masken angewendet werden:
>
> <img src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg" alt="Pride flag" />

Dieses Beispiel veranschaulicht den Unterschied zwischen `alpha`- und `luminance`-Masken. Die Masken sind gleich, aber bei der `alpha`-Maske zählt nur die Alphatransparenz der Verlaufsmaskenfarben. Im `luminance`-Beispiel spielen R, G, B und A eine Rolle.

Zwei Container enthalten Bilder, während der letzte leer ist, aber enthalten ist, um den Verlauf anzuzeigen, den wir als `mask-image` verwenden werden.

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

Wir deklarieren einen [`repeating-linear-gradient`](/de/docs/Web/CSS/Reference/Values/gradient/repeating-linear-gradient) mit roten, transparenten und halbtransparenten roten Diagonalstreifen. Dieser Verlauf wird als unsere Maske verwendet und, für den letzten Container, als Hintergrundbild:

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

Im `alpha`-Fall zählt nur die Transparenz der Verlaufsmaskenfarben. Wo der Verlauf opak rot ist, ist das Bild opak. Wo der Verlauf transparent ist, ist das Bild verborgen. Wo der Verlauf zu 50 % opak ist, ist das Bild zu 50 % opak. Im `luminance`-Fall spielt die Helligkeit der Farbe eine Rolle! Siehe [Alphatransparenz versus Luminanz](/de/docs/Web/CSS/Guides/Masking/Introduction#alpha_transparency_versus_luminance), um mehr über die Gleichung zu erfahren, die die R, G, B und A-Kanäle der Farbe nutzt, um die Opazität der Maske zu bestimmen.

### Der Standardwert `mask-mode`: `match-source`

Der Standardwert der `mask-mode`-Eigenschaft ist `match-source`. Dieser Wert setzt den `mask-mode` so, dass er dem Modustyp der Maske entspricht. Der `match-source`-Wert wird für jede Maske außer Masken, bei denen die Maskenquelle ein SVG-{{svgelement("mask")}}-Element ist, in `alpha` aufgelöst.

Wenn ein SVG-`<mask>`-Element als Maskenquelle verwendet wird, wird der `match-source`-Wert in den Wert der `<mask>`-Element-{{cssxref("mask-type")}}-Eigenschaft aufgelöst. Wenn das `<mask>`-Element (nicht das "maskierte Element") die CSS-`mask-type`-Eigenschaft nicht definiert hat, wird dieser Eigenschaftswert standardmäßig dem Wert des SVG-{{svgAttr("mask-type")}}-Attributs zugewiesen, falls vorhanden. Wenn dieses ebenfalls weggelassen wird, wird der `match-source`-Wert in `luminance` aufgelöst.

Fortsetzend mit dem `masked-element`-Beispiel, wenn wir die `mask-mode`-Eigenschaft nicht explizit setzen, wird sie für jede Schicht standardmäßig auf `match-source` gesetzt, als ob wir Folgendes gesetzt hätten:

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: match-source;
}
```

oder unter Verwendung der `mask`-Kurzschreibweise:

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

Die erste Maskenschicht, `url("alphaImage.png")`, referenziert ein Bild. Da dies kein `<mask>`-Element innerhalb eines `<svg>` ist, wird der `mask-mode` zu `alpha` aufgelöst, wobei die opaken Teile dieses Bildes die entsprechenden Teile des Elements sichtbar machen, während die transparenten oder halbtransparenten Teile unsichtbar oder teilweise sichtbar sind.

Der `linear-gradient(to right, black, transparent)` ist die zweite Maskenschicht und `radial-gradient(circle, white 50%, transparent 75%)` ist die dritte. Auch hier handelt es sich nicht um `<mask>`-Elemente, sodass der `match-source`-Wert in `alpha` aufgelöst wird. Der Maskierungseffekt dieser Schichten wird standardmäßig durch die [Opazität der Verlaufsmasken](/de/docs/Web/CSS/Guides/Masking/Introduction#opaqueness_versus_transparency) bestimmt.

Die vierte Maskenschicht hat `none` deklariert, was bedeutet, dass die Maske für diese Schicht transparentes Schwarz ist. Die `.masked-element`-Klasse setzt `mask-mode: match-source;`. Wenn `mask-mode` stattdessen eine durch Kommas getrennte Liste mit fünf verschiedenen Werten gewesen wäre, hätte der vierte Wert auf diese `none`-Schicht zugetroffen, sodass der fünfte Wert auf die fünfte Schicht zugetroffen hätte.

Die fünfte Maskenschicht besteht aus einem SVG-{{svgelement("mask")}}-Element, das `svg-mask` als [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) hat. Während der Standardmaskenmodus der anderen Schichten `alpha` ist, ist der Standardmaskentyp der SVG-`<mask>`-Elemente der `mask-type`-Wert oder, falls nicht festgelegt, das `mask-type`-Attribut. Wenn dieses auch nicht definiert ist, wird der Wert standardmäßig auf `luminance` gesetzt. Mit anderen Worten: Der Maskierungseffekt des `<mask>` wird sowohl durch die Helligkeit als auch durch die Transparenz der Farben des `<mask>`-Elements bestimmt.

Wenn wir die `mask-mode`-Eigenschaft überhaupt nicht deklarieren und sie standardmäßig auf `match-source` für jede Maskenschicht setzen, würde das Ergebnis in diesem `.masked-element`-Fall zu Folgendem führen:

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: alpha, alpha, alpha, match-source, luminance;
}
```

oder, unter Verwendung der `mask`-Kurzschreibweise:

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

## Die `mask-position`-Eigenschaft

Analog zur {{cssxref("background-position")}}-Eigenschaft setzt die {{cssxref("mask-position")}}-Eigenschaft die anfängliche Position des Maskenbildes relativ zur Ursprungsbox der Maskenschicht, die durch [die `mask-origin`-Eigenschaft](#the_mask-origin_property) definiert ist. Die Syntax folgt der [`background-position`-`<position>`-Syntax](/de/docs/Web/CSS/Reference/Properties/background-position#position), wobei der Wert ein, zwei oder vier {{cssxref("&lt;position&gt;")}}-Werte sind, die ein bis zwei relative oder absolute Positionsversätze definieren.

### Ein-Wert-Syntax

Wenn nur ein Schlüsselwortwert angegeben ist, gibt dieser Wert die Kante des Maskenursprungs an, an der die Maske platziert wird, wobei die andere Dimension `center` ist.

Wenn nur ein {{cssxref("&lt;length-percentage&gt;")}}-Wert angegeben ist, spezifiziert dies die X-Koordinate relativ zur linken Kante des Maskenursprungs, wobei die Y-Koordinate auf `50%` gesetzt ist.

Wenn zwei Schlüsselwortwerte angegeben sind, spielt die Reihenfolge der Werte keine Rolle, jedoch kann der Wert keine zwei vertikalen oder zwei horizontalen Achsenwerte enthalten; `left right` und `top bottom` sind beide ungültig.

### Zwei-Wert-Syntax

Wenn zwei Werte vorhanden sind, einschließlich eines Schlüsselwortes und eines `<length-percentage>`-Wertes, spielt die Reihenfolge nur dann eine Rolle, wenn das Schlüsselwort `center` ist:

- Wenn das Schlüsselwort `left` oder `right` ist, definiert es die X-Koordinate relativ zur linken Kante, und der Wert definiert die Y-Koordinate relativ zur oberen Kante.
- Ebenso definiert ein `top`- oder `bottom`-Schlüsselwort die Y-Koordinate, wobei das Element gegen die obere oder untere Kante positioniert wird, und der andere Wert definiert den X-Wert relativ zur linken Kante der Maskenursprungsbox.
- Wenn ein Wert das `center`-Schlüsselwort ist und der andere ein `<length-percentage>` ist, definiert der erste Wert die horizontale Position und der zweite Wert die vertikale Position.

Wenn zwei Werte vorhanden und beide `<length-percentage>`-Werte sind, spielt die Reihenfolge erneut eine Rolle; der erste Wert definiert die horizontale Positionierung als Versatz von der linken Kante des Maskenpositionierungsbereichs, während der zweite Wert die vertikale Positionierung als Versatz von der oberen Kante des Maskenpositionierungsbereichs definiert.

### Vier-Wert-Syntax

Maskenpositionen können auch relativ zu Ecken außer der oberen linken gesetzt werden. Die Vier-Wert-Syntax ermöglicht das Versetzen der Maske von jeder Ecke. Der Wert beinhaltet zwei {{cssxref("length-percentage")}}-Versätze, jeweils vorangestellt durch die Ursprungsseite für diesen Versatz. Ob Sie zuerst das horizontale oder vertikale Paar deklarieren, spielt keine Rolle, aber Sie müssen das Ursprungsseitenschlüsselwort (`left`, `right`, `top`, `bottom`, `x-start`, `x-end`, `y-start`, `y-end`, `block-start`, `block-end`, `inline-start` oder `inline-end`) vor dem Versatz `<length-percentage>` in jedem Paar deklarieren, und die beiden Ursprungsseiten dürfen nicht von derselben Achse stammen.

In der Zwei-`<length-percentage>`-Syntax sind die Ursprungseiten `top` und `left`, in dieser Reihenfolge. Zum Beispiel ist `mask-position: 10px 20px` gleichbedeutend mit `mask-position: left 10px top 20px`. Beim Versetzen von oben und links sind nicht alle Versatzseiten erforderlich, aber die Reihenfolge spielt eine Rolle. Mit der Vier-Wert-Syntax können Sie `mask-position` verwenden, um das Maskenbild von jeder Kantenkombination abzusetzen, wie `left 10px bottom 20px`, und die Reihenfolge der Seiten spielt keine Rolle, da die Versatzkante durch das ihr vorangestellte Schlüsselwort und nicht durch die Deklarationsreihenfolge definiert wird.

### Prozentwerte

Beim Versetzen mittels Prozentwerten wird die Dimension der Maske von der Dimension des Elements abgezogen, genau wie bei [Prozentversätzen mit `background-position`](/de/docs/Web/CSS/Reference/Properties/background-position#regarding_percentages).

### Positionierung wiederholter Maskenbilder

Die `mask-position`-Eigenschaft definiert die Anfangsposition des Maskenbildes. Mit "Anfangsposition" meint man, dass, wenn die [Maske wiederholt wird](#the_mask-repeat_property), der Browser das erste Maskenbild an der durch die `mask-position`-Eigenschaft definierten Position platziert, was die Platzierung der Maskenwiederholungen definiert.

In diesem Beispiel setzen wir die Position des ersten Bildes auf `bottom right`, was bedeutet, dass die erste Maske an der unteren rechten Kante der Maskenursprungsbox platziert wird. Da Maskenbilder standardmäßig wiederholt werden, werden die wiederholten Masken gegen die oben und links platzierte Maske positioniert.

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

Die `mask-position` definiert die Position der Platzierung des ersten Maskenbildes. Dieses Demo zeigt, wo das erste Bild platziert wird:

```css hidden live-sample___position_no-repeat
img {
  mask-repeat: no-repeat;
}
```

{{EmbedLiveSample("position_no-repeat", "", "260px")}}

Da der Standardwert für die [`mask-repeat`-Eigenschaft](#the_mask-repeat_property) `repeat` ist, werden die Bilder basierend auf der Position dieser ersten Maske entlang der X- und Y-Achsen wiederholt:

{{EmbedLiveSample("position", "", "260px")}}

Das Beispiel mit den zwei Werten definiert die oberen und linken Versätze des ursprünglichen Maskenbildes. Das Beispiel mit den vier Werten kombiniert die beiden vorherigen Beispiele, positioniert die erste Maske mit denselben Versätzen wie das zweite Bild, aber von denselben Kanten aus wie im ersten Bild dargestellt.

Im ersten Bild wird der erste Stern, der platziert wird, der am unteren rechten Rand sein, mit den wiederholten Sternen darüber und links. Aufgrund dieser Positionierung wird der ursprüngliche Stern nicht abgeschnitten, aber die am weitesten oben und links gelegenen Sterne werden es sein.

Wenn wir die `mask-position`-Eigenschaft nicht explizit setzen, wird sie für jede Schicht standardmäßig auf `0% 0%` gesetzt, wobei die obere linke Ecke der Maske an der oberen linken Ecke der Maskenursprungsbox anliegt. Fortsetzend mit dem `masked-element`-Beispiel, ist es so, als ob wir Folgendes gesetzt hätten:

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: match-source;
  mask-position: 0% 0%;
}
```

oder, erweitert mit dem Beispiel unter Verwendung der `mask`-Kurzschreibweise:

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

## Die `mask-origin`-Eigenschaft

Wenn ein Element Polsterung, eine Begrenzung oder beides hat, definiert die {{cssxref("mask-origin")}}-Eigenschaft, welche dieser Boxkantenwerte als Maskenursprungsbox, oder der _Maskenpositionierungsbereich_, dient, innerhalb dessen ein Maskenbild für diese Schicht positioniert wird. Die `mask-origin`-Eigenschaft ist analog zur {{cssxref("background-origin")}}-Eigenschaft, jedoch mit einem anderen Anfangswert und SVG-spezifischen Werten.

HTML-Elemente können Masken enthalten, die sich innerhalb ihrer Inhaltsrahmenbox, Polsterungsbox oder Inhaltsbox befinden. Wenn zum Beispiel die `mask-position` `top left` ist, bezieht sich das auf die äußere Kante des Rahmens, die äußere Kante der Polsterung oder die äußere Kante des Inhalts?

Im [`mask-position`](#the_mask-position_property)-Maskierungsbeispiel wurde die definierte Position relativ zur Rahmenbox (dem Standardverhalten) gesetzt, obwohl es erwähnenswert ist, dass das `<img>` keine eingestellten Ränder oder Polsterungen hatte, daher wären in diesem Fall die Ursprünge der Inhaltsrahmenbox, der Polsterungsbox und der Rahmenbox die gleichen.

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

In diesem Beispiel platziert die `mask-position` die ursprüngliche Maske in die obere linke Ecke des `<img>`-Elements, das einen großen Rahmen und Polsterung hat, mit einer grünen Hintergrundfarbe, die es ermöglicht, die Sternmaskierung im Polsterungsbereich zu sehen.

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

Ändern Sie den Wert der `mask-origin`-Eigenschaft, indem Sie die ausgewählte Optionsschaltfläche ändern und auf die Position der oberen linken Sternmaske achten, während Sie dies tun.

{{EmbedLiveSample("origin", "", "350px")}}

Der Standardwert ist `border-box`. Mit diesem Wert wird die ursprüngliche Maske an der oberen linken Kante des Rahmens platziert und wird nicht abgeschnitten. Wenn die ursprüngliche Maske an der äußeren oder inneren Kante der Polsterung platziert wird, ist Platz darüber und links; diese sich wiederholenden Masken werden abgeschnitten.

Fortsetzend mit dem `masked-element`-Beispiel, wenn wir die `mask-origin`-Eigenschaft nicht explizit setzen, wird sie für jede Schicht standardmäßig auf `border-box` gesetzt, als ob wir Folgendes gesetzt hätten:

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

oder, erweitert mit dem Beispiel unter Verwendung der `mask`-Kurzschreibweise:

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

Für SVG-Elemente, die nicht mit den zugehörigen CSS-Layoutboxen ausgestattet sind, kann eine Maske innerhalb der Füllung, des Strichs oder der Ansichtsbox des SVG-Elements enthalten sein.

## Die `mask-clip`-Eigenschaft

Die {{cssxref("mask-clip")}}-Eigenschaft bestimmt den Bereich des Elements, der von einer Maske betroffen sein wird und schneidet das Element effektiv an der definierten Boxkante. Sie ist analog zur {{cssxref("background-clip")}}-Eigenschaft, jedoch mit einigen unterschiedlichen Werten.

Da die `mask-clip`-Eigenschaft alle `mask-origin`-Werte akzeptiert und beide den gleichen Standardwert `border-box` haben, scheinen die beiden Eigenschaften ähnlich zu sein, aber sie dienen sehr unterschiedlichen Zwecken. Während `mask-origin` bestimmt, wo ein Maskenbild positioniert wird, bewirkt die `mask-clip`-Eigenschaft, dass das ursprüngliche Element auf die angegebene Box zugeschnitten wird. Es ist wichtig, beide zu verstehen: wenn ein `mask-origin` die `mask-position` dazu bringt, das Maskenbild außerhalb des Clipping-Bereichs zu platzieren, wird die Maske beschnitten.

Die `mask-clip`-Eigenschaft akzeptiert alle `mask-origin`-Werte sowie ihren eigenen `no-clip`-Wert. Der `no-clip`-Wert legt fest, dass der gemalte Inhalt nicht beschnitten wird. Sie können das Maskenbild trotzdem abgeschnitten machen, indem Sie es mittels `mask-position`-Werten außerhalb des Rahmeninhaltsbereichs positionieren, die entweder weniger als null oder größer als 100% sind.

Das Setzen von `mask-clip` und `mask-origin` auf verschiedene Werte kann bewirken, dass das Maskenschichtbild beschnitten wird. Zum Beispiel, wenn ein Element mit einem Rahmen und Polsterung `mask-clip` auf `content-box` und `mask-origin` auf `border-box` gesetzt hat und die `mask-position` auf die obere linke Kante gesetzt ist, wird das Maskenschichtbild an der oberen linken Kante abgeschnitten.

Das nächste Beispiel fügt den vorherigen Beispielen Clipping-Optionen hinzu, um die verschiedenen Nicht-SVG-`mask-clip`-Werte zu demonstrieren und zu zeigen, wie sie die verschiedenen `mask-origin`-Werte beeinflussen.

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

Die erste Maske wird am oberen linken Rand des Maskenursprungcontainers platziert und dann wiederholt. Wenn der Ursprungsbereich die `border-box` ist und die Beschnittregion die `content-box`, werden die oberen und linken Bereiche des Maskenursprungcontainers beschnitten. Im Allgemeinen möchten Sie, dass `mask-clip` mit `mask-origin` identisch ist.

Fortsetzend mit dem `masked-element`-Beispiel, wenn wir die `mask-clip`-Eigenschaft nicht explizit setzen, wird sie für jede Schicht standardmäßig auf `border-box` gesetzt, als ob wir Folgendes gesetzt hätten:

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

oder, erweitert mit dem Beispiel unter Verwendung der `mask`-Kurzschreibweise:

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

In der `mask`-Kurzschreibweise, wenn nur ein [`<geometry-box>`](/de/docs/Web/CSS/Reference/Properties/clip-path#geometry-box)-Wert angegeben ist, setzt er sowohl die Werte der `mask-origin`- als auch der `mask-clip`-Eigenschaften. Wenn zwei `<geometry-box>`-Werte angegeben sind, definiert der erste das `mask-origin` und der zweite das `mask-clip`.

Für Maskenschichtbilder, die kein SVG-{{svgelement("mask")}}-Element referenzieren, definiert die `mask-clip`-Eigenschaft, ob der Maskenmalbereich, oder der vom Maskenbefehl betroffene Bereich, der Rahmen, die Polsterung oder die Inhaltsbox ist. Der bemalte Inhalt des Elements wird auf diesen Bereich beschränkt.

Wenn die Maskenquelle der {{cssxref("mask-image")}}-Schicht ein `<mask>` ist, hat die `mask-clip`-Eigenschaft keine Auswirkung. Vielmehr bestimmen die Attribute {{svgAttr("x")}}, {{svgAttr("y")}}, {{svgAttr("width")}}, {{svgAttr("height")}} und {{svgAttr("maskUnits")}} des `<mask>`-Elements den Maskenmalbereich.

## Die `mask-size`-Eigenschaft

Die {{cssxref("mask-size")}}-Eigenschaft wird verwendet, um Maskenschichten zu skalieren. Diese Eigenschaft ist analog zur {{cssxref("background-size")}}-Eigenschaft und akzeptiert die gleichen Werte. Beim Skalieren Ihrer Masken ist zu bedenken, dass Bereiche des Elements, die nicht von den Maskenbildern bedeckt sind, verborgen sind.

Es gibt drei Möglichkeiten, eine `mask-size` zu deklarieren:

- das Schlüsselwort `cover` oder `contain`,
- eine Länge, ein Prozentsatz oder das Schlüsselwort `auto`, oder
- zwei Werte, die eine Kombination aus Längen, Prozentsätzen und dem Schlüsselwort `auto` sind.

Das Maskenbild kann in seiner natürlichen Größe belassen, gestreckt oder so eingeschränkt werden, dass es in den verfügbaren Raum passt. Das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Maskenbildes wird standardmäßig beibehalten, aber die Angabe von zwei `<length-percentage>`-Werten kann das Maskenbild verzerren, wenn das Verhältnis der beiden Werte nicht dasselbe wie das ursprüngliche Bild ist (`mask-repeat: round` ist das andere Eigenschaftswertpaar, das das Maskenbild verzerren kann).

Wenn die `mask-size` auf `contain` gesetzt ist, wird das Maskenbild die größte Größe sein, die noch vollständig im Maskenpositionierungsbereich enthalten ist. In diesem Fall wird das Maskenbild nicht abgeschnitten, sondern vollständig enthalten.

Wenn auf `cover` gesetzt, ist das Maskenbild die kleinste Größe, um den gesamten Maskenpositionierungsbereich vollständig abzudecken, wobei die Maske abgeschnitten wird, wenn das Seitenverhältnis der Maske von dem des Maskenpositionierungsbereichs abweicht.

Mit anderen Worten: Bei `cover` und `contain` wird mindestens eine Dimension der Maske dieselbe Größe wie dieselbe Dimension des Maskenpositionierungsbereichs haben; das Maskenbild wird entweder vergrößert oder verkleinert, damit entweder die Breite gleich der Breite des Maskenpositionierungsbereichs ist oder die Höhe des Maskenbildes gleich der Höhe des Maskenpositionierungsbereichs.

Mit `cover`, `contain` und `<percentage>`-Werten ist die Größe relativ zur Ursprungsbox. In unserem Sternmasken- und Flaggensymbol-Beispiel haben das Maskenbild und das `<img>` beide ein Seitenverhältnis von `1:1`, was bedeutet, dass in diesem Fall `cover`, `contain` und `100%` alle die gleiche Maskengröße erzeugen. Dieses Beispiel zeigt, wie, wenn `mask-size` auf `cover`, `contain` oder ein `<percentage>`-Wert gesetzt wird, die tatsächliche Größe der Maske je nach Wert der [`mask-origin`-Eigenschaft](#the_mask-origin_property) variieren kann:

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

Ändern Sie den Wert der `mask-origin`-Eigenschaft, um zu sehen, wie die verschiedenen Werte die Maskengröße beeinflussen:

{{EmbedLiveSample("size", "", "350px")}}

Dieses Beispiel enthielt einen `<percentage>`-Wert. Wenn ein `<length-percentage>`-Wert angegeben ist, definiert er nur die Maskenbreite, wobei die Höhe standardmäßig auf `auto` gesetzt ist, was das Seitenverhältnis beibehält. Wenn zwei Werte angegeben sind, definiert der erste die Maskenbreite und der zweite die Höhe.

Der Standardwert von `mask-size` ist `auto`, wodurch die Maskengröße auf ihre {{Glossary("intrinsic_size", "intrinsische Größe")}} gesetzt wird, also die Größe, in der die Maske angezeigt würde, wenn kein CSS angewendet würde. Das zugrunde liegende {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Maskenbildes wird beibehalten, wenn Sie einen einzelnen `<length-percentage>`-Wert oder zwei Werte im gleichen Verhältnis wie das Seitenverhältnis festlegen. Wenn Sie zwei Werte angeben, die nicht im gleichen Verhältnis wie das Seitenverhältnis stehen, wird das Maskenbild verzerrt.

Wie bei allen Langhand-Komponenten der Kurzschreibweise wird, wenn die {{cssxref("mask")}}-Kurzschreibweise gesetzt ist und der Wert der `mask-size`-Eigenschaft in keiner Maskenschicht definiert ist, der `mask-size`-Wert für diese Maskenschichten auf seinen Ausgangswert `auto` zurückgesetzt.

Wenn das Bild kein intrinsisches Verhältnis hat, zum Beispiel im Fall eines [CSS-Verlaufs](/de/docs/Web/CSS/Reference/Values/gradient), ist das Standard-`auto` die Gesamtheit des Maskenpositionierungsbereichs, wie durch [die `mask-origin`-Eigenschaft](#the_mask-origin_property) festgelegt.

Fortsetzend mit dem `masked-element`-Beispiel, wenn wir die `mask-size`-Eigenschaft nicht explizit setzen, wird sie für jede Schicht standardmäßig auf `auto` gesetzt, als ob wir Folgendes gesetzt hätten:

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

oder, erweitert mit dem Beispiel unter Verwendung der `mask`-Kurzschreibweise, wobei die `mask-size`-Komponente nach dem `mask-position`-Wert folgt, getrennt durch einen Schrägstrich (/):

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

## Die `mask-repeat`-Eigenschaft

Die {{cssxref("mask-repeat")}}-Eigenschaft definiert, wie Maskenbilder nach der Größenänderung und Positionierung des ursprünglichen Maskenbildes wiederholt oder gekachelt werden. Die `mask-repeat`-Eigenschaft definiert, ob und wie das Maskenbild entlang der horizontalen und vertikalen Achsen wiederholt wird. In den meisten vorhergehenden Beispielen haben Sie möglicherweise bemerkt, dass die Sternmaske entlang der X- und Y-Achsen wiederholt wurde. Dies liegt daran, dass `repeat` der Standardwert ist.

Die `mask-repeat`-Eigenschaft ist analog zur {{cssxref("background-repeat")}}-Eigenschaft und akzeptiert die gleichen [`<repeat-style>`](/de/docs/Web/CSS/Reference/Properties/mask-repeat#values)-Werte. Wie bei `background-repeat` wird die erste (und möglicherweise einzige) Wiederholung des Maskenbildes durch [die `*-position`-Eigenschaft](#the_mask-position_property) positioniert und durch [die `*-size`-Eigenschaft](#the_mask-size_property) skaliert. Die Positionen der wiederholten Hintergrund- oder Maskenbilder basieren auf dieser ersten Bildinstanz.

Fortsetzend mit dem `masked-element`-Beispiel, wenn wir die `mask-repeat`-Eigenschaft nicht explizit setzen, wird sie für jede Schicht standardmäßig auf `repeat` gesetzt, als ob wir Folgendes gesetzt hätten:

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

oder, erweitert mit dem Beispiel unter Verwendung der `mask`-Kurzschreibweise:

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

## Die `mask-composite`-Eigenschaft

Die {{cssxref("mask")}}-Kurzschreibweise umfasst die {{cssxref("mask-composite")}}-Eigenschaft, die definiert, wie mehrere Masken kombiniert werden, um den endgültigen Maskierungseffekt zu erzeugen. Jeder Wert in der durch Kommas getrennten Liste von Werten bestimmt, ob der Browser die zugehörige Maskenschicht aus den darunter liegenden Maskenschichten `add`, `subtract`, `intersect` oder `exclude` soll. Ähnlich wie bei `mask-mode` und den anderen `mask-*`-Eigenschaften gibt es in der {{cssxref("background")}}-Kurzschreibweise keine analoge Eigenschaft.

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

In diesem Beispiel fügen wir zwei `mask-image`-Werte ein, darunter die Sterne und den Verlauf aus den vorhergehenden Beispielen als Maskenbilder:

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

Wir setzen einen unterschiedlichen `mask-composite`-Wert für jedes Bild:

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

Die halbtransparente Sternmaske wird zu, von, mit oder aus der gestreiften Maske hinzugefügt, abgezogen, geschnitten oder ausgeschlossen, je nach dem `mask-composite`-Wert.

Die `mask-composite`-Eigenschaft ist nur in Fällen mit zwei oder mehr Maskenschichten relevant. Dies bezieht sich auf "Maskenschichten" und nicht auf "Maskenbilder", da, wenn `none` enthalten ist, die transparente schwarze Maske zusammengesetzt wird. Ein `none`-Wert kann im Fall von `subtract` und `intersect` erhebliche Auswirkungen auf das Maskieren haben. Wenn zum Beispiel der `mask-mode` zu `luminance` aufgelöst wird, wird durch das Subtrahieren einer schwarzen Maske die gesamte Maske entfernt (das Element wird verborgen). Ebenso, wenn `none` die letzte Schicht mit `mask-composite: intersect` für diese Schicht ist, wird das gesamte Element verborgen. Hier fügen wir dem vorherigen Beispiel eine dritte Schicht, mit `none`, hinzu:

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

Beachten Sie, wie das `intersect`-Beispiel alles ausschließt, da die transparente schwarze Maske nichts schneidet.

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

Im ersten Beispiel werden die Sterne von den Streifen abgezogen. Im zweiten werden die Streifen von den Sternen abgezogen.

Wie alle anderen `mask`-Komponenteneigenschaften nimmt `mask-composite` eine durch Kommas getrennte Liste von Werten an. Da die Eigenschaft definiert, wie Masken zusammengesetzt werden, ist diese Eigenschaft nur für mehrere Maskenschichten relevant und die Anzahl der verwendeten Werte ist um eins geringer als die Anzahl der Maskenschichten.

Das letzte Paar von Masken wird zuerst zusammengesetzt. Das vorherige Maskenbild wird dann mit der vorherigen Zusammensetzung zusammengesetzt.

Fortsetzend mit dem `masked-element`-Beispiel, wenn wir die `mask-composite`-Eigenschaft nicht explizit setzen, wird sie für jede Schicht standardmäßig auf `add` gesetzt, als ob wir Folgendes gesetzt hätten:

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

In diesem Fall wird das `<mask>`-Element mit der `none`-Schicht zusammengesetzt. Dann wird der Radialverlauf mit dem Ergebnis der vorherigen Komposition zusammengesetzt, und so weiter.

Wie wir bei allen anderen Komponenteneigenschaften gesehen haben, hätten wir die `mask`-Kurzschreibweise verwenden können:

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

- [Einführung in CSS-Masking](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [Einführung in CSS-Clipping](/de/docs/Web/CSS/Guides/Masking/Clipping)
- [CSS-Masking](/de/docs/Web/CSS/Guides/Masking)-Modul
