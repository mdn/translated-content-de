---
title: CSS mask Eigenschaften
short-title: Masken Eigenschaften
slug: Web/CSS/Guides/Masking/Mask_properties
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

CSS-Maskierung ist eine Technik, die es ermöglicht, sichtbare Teile eines Elements zu definieren, indem eine Maske angewendet wird, die selektiv Teile des Elements basierend auf den Alphakanälen und optional Farben der angewendeten Maskenbilder aufdeckt oder verbirgt.

Der [einführende Leitfaden zur Maskierung](/de/docs/Web/CSS/Guides/Masking) stellt die verschiedenen Arten von Maskenbildern und deren Modi vor. Der Leitfaden zum [Deklarieren mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks) behandelt die [Masken-Schichten](/de/docs/Web/CSS/Guides/Masking/Multiple_masks#understanding_mask_layers) und die {{cssxref("mask")}} Kurzschreibweise, die eine kurze Einführung in die Komponenten-Eigenschaften der Kurzschreibweise bietet. In diesem Leitfaden erkunden wir diese Komponenteneigenschaften detaillierter und betrachten, wie sie interagieren. Wir erklären auch, wie, in Fällen, in denen mehrere Maskenbilder deklariert sind, die [Maskenschichten kombiniert werden](#the_mask-composite_property).

CSS-Masken bestehen aus einer oder mehreren Maskenschichten, wobei eine Maskenschicht für jeden Wert in der durch Kommas getrennten Liste von `mask` oder `mask-image` Werten erstellt wird, unabhängig davon, ob die Werte Bilder, Maskenquellen oder das Schlüsselwort `none` sind. Jedes {{cssxref("mask-image")}} wird relativ zu einer [Ursprung](#the_mask-origin_property) Kiste [positioniert](#the_mask-position_property). Die Maskenbilder können [skaliert](#the_mask-size_property), [wiederholt](#the_mask-repeat_property) und [beschnitten](#the_mask-clip_property) werden, dann mit den vorherigen Schichten kombiniert, um die endgültige visuelle Maske auf dem Element zu schaffen.

## Die `mask-image` Eigenschaft

Die Mindestanforderung zur Erstellung einer Maske ist eine {{cssxref("mask-image")}} Eigenschaft, die auf einen anderen Wert als `none` gesetzt ist. Das Schlüsselwort `none` innerhalb einer Liste von Maskenquellen erstellt eine Maskenschicht. Wenn `none` jedoch der einzige Wert der `mask-image` Eigenschaft ist, findet keine Maskierung statt.

Das Maskenbild kann ein [CSS-Gradient](/de/docs/Web/CSS/Guides/Images/Using_gradients), ein [importiertes Bild](/de/docs/Web/CSS/Guides/Masking/Introduction#with_imported_images) (wie ein PNG, SVG, etc.) oder ein SVG {{svgelement("mask")}} Element sein.

In diesem Beispiel erstellen wir fünf Maskenschichten, einschließlich eines importierten Bildes, zwei Gradienten, einer Schicht ohne Bild und einer SVG `<mask>` Quelle als Maskenbild.

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
}
```

Da eines der Maskenbilder als `none` spezifiziert ist, werden nur vier Maskenbilder auf das `.masked-element` Element angewendet, während fünf Maskenschichten erstellt werden.

### Die Bedeutung von `none`

Die `none` Schicht hat im Allgemeinen keinen visuellen Effekt (siehe die [`mask-composite` Eigenschaft](#the_mask-composite_property), um zu sehen, wie sie die angewendete Maske beeinflusst), aber da jeder Wert in einer durch Kommas getrennten Liste von `mask-*` Werten auf eine separate Maskenschicht angewendet wird, erfüllt der `none` Wert einen wichtigen Zweck, selbst wenn er die zusammengesetzte Maske nicht ändert.

Diese vierte Schicht in unserer aus fünf Schichten bestehenden Struktur wird dem vierten Wert anderer durch Kommas getrennter `mask-*` Eigenschaftswerte entsprechen. Wie bereits erwähnt, wird die Anzahl der Schichten durch die Anzahl der durch Kommas getrennten Werte im Wert der {{cssxref("mask-image")}} Eigenschaft bestimmt, selbst wenn ein Wert `none` ist. Jeder `mask-*` Wert wird in der Reihenfolge mit den `mask-image` Werten abgeglichen. Wenn die Anzahl der Werte in einer `mask-*` Eigenschaft von der Anzahl der Maskenschichten abweicht, werden überschüssige Werte ignoriert, oder wenn die Eigenschaft weniger Werte als die Anzahl der Maskenschichten hat, werden die Werte wiederholt.

Wenn eine `mask-*` Eigenschaft einen einzelnen Wert hat, gilt dieser Wert für alle Schichten. Wenn wir fünf Werte haben, gilt der vierte Wert für die `none` Schicht, und der letzte Wert wird auf die `<mask>` Quellschicht angewendet. Wenn es zwei durch Kommas getrennte Werte gibt, wird der erste Wert nur auf alle ungeraden Schichten angewendet, einschließlich dieser `<mask>` Quellschicht. Zum Beispiel kann jede `mask-*` Eigenschaft eine unterschiedliche Anzahl von Werten haben:

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

In diesem Fall wird jede ungerade Schicht entlang der x-Achse wiederholt, während jede gerade Schicht entlang der y-Achse wiederholt wird. Die Bilder der ersten und vierten Schicht werden zentriert, während die der zweiten und fünften in der oberen linken Ecke positioniert werden. Das `none` bedeutet, dass das fünfte Schichtenbild `#svg-mask` entlang der x-Achse beginnend in der oberen linken Ecke wiederholt wird.

Erfahren Sie mehr über [Maskenschichten und das `none` Schlüsselwort](/de/docs/Web/CSS/Guides/Masking/Multiple_masks#mask_layers_and_the_none_keyword).

## Die `mask-mode` Eigenschaft

Die {{cssxref("mask-mode")}} Eigenschaft kann verwendet werden, um den Modus jeder Maskenschicht auf entweder `alpha` oder `luminance` zu setzen, oder sie kann auf den Modus der Quelle eingestellt werden, indem der Wert auf `match-source` gesetzt wird, was dem Standardwert entspricht. Während die meisten `mask-*` Eigenschaften eine analoge `background-*` Eigenschaft haben (`mask-image` ist analog zur {{cssxref("background-image")}} Eigenschaft, zum Beispiel), haben `mask-mode` und [`mask-composite`](#the_mask-composite_property) keine analoge {{cssxref("background")}} Eigenschaft.

### Maskentypen: `alpha` und `luminance`

Jede Maske ist entweder eine `alpha` oder eine `luminance` Maske.

Bei `alpha` Masken ist die Alpha-Transparenz jedes Maskenpixels wichtig. Wo immer die Maske opak ist, werden die entsprechenden Teile des Elements sichtbar sein. Wo immer die Maske transparent ist, werden die entsprechenden Teile des Elements verborgen. Wo immer die Maske halbtransparent ist, wird das Element gleichermaßen halbtransparent sein. Die Farbe der Maske spielt keine Rolle, nur die Alpha-Transparenz der Farben.

Bei `luminance` Masken bestimmen sowohl die [Helligkeit der Maskenfarben](/de/docs/Web/CSS/Guides/Masking/Introduction#alpha_transparency_versus_luminance) als auch der Alphakanal die Opazität der maskierten Bereiche.

> [!NOTE]
> Alle nachfolgenden Beispiele verwenden das folgende Bild als `background-image` auf einem Element, auf das Masken angewendet werden:
>
> <img src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg" alt="Pride flag" />

Dieses Beispiel zeigt den Unterschied zwischen `alpha` und `luminance` Masken. Die Masken sind die gleichen, aber in der `alpha` Maske zählt nur die Alpha-Transparenz der Gradientenmaskenfarben. Beim `luminance` Beispiel spielen R, G, B und A alle eine Rolle.

Zwei Container enthalten Bilder, während der letzte leer ist, aber enthalten ist, um den Gradienten anzuzeigen, den wir als `mask-image` verwenden werden.

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

Wir deklarieren einen [`repeating-linear-gradient`](/de/docs/Web/CSS/Reference/Values/gradient/repeating-linear-gradient) mit roten, transparenten und halbtransparenten roten diagonalen Streifen. Dieser Verlauf wird als unsere Maske und, für den letzten Container, als Hintergrundbild verwendet:

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

Im `alpha` Fall zählt nur die Transparenz der Farben des Gradienten. Wo der Gradiente undurchsichtig rot ist, ist das Bild undurchsichtig. Wo der Gradient transparent ist, ist das Bild verborgen. Wo der Gradienten zu 50 % undurchsichtig ist, ist das Bild zu 50 % undurchsichtig. Im `luminance` Fall zählt die Helligkeit der Farben! Siehe [Alpha-Transparenz versus Luminanz](/de/docs/Web/CSS/Guides/Masking/Introduction#alpha_transparency_versus_luminance), um mehr über die Gleichung zu erfahren, die die R-, G-, B- und A-Kanäle der Farbe verwendet, um die Deckkraft der Maske zu bestimmen.

### Der Standardwert von `mask-mode`: `match-source`

Der Standardwert der `mask-mode` Eigenschaft ist `match-source`. Dieser Wert setzt den `mask-mode` so, dass er dem Maskenmodustyp entspricht. Der `match-source` Wert löst sich zu `alpha` für jede Maske auf, außer bei Masken, bei denen die Maskenquelle ein SVG {{svgelement("mask")}} Element ist.

Wenn ein SVG `<mask>` Element als Maskenquelle verwendet wird, löst sich der `match-source` Wert auf den Wert der `<mask>` Element {{cssxref("mask-type")}} Eigenschaft auf. Wenn das `<mask>` Element (nicht das "maskierte Element") die CSS `mask-type` Eigenschaft nicht definiert hat, wird diese Eigenschaft auf den Wert des SVG {{svgAttr("mask-type")}} Attributs, falls vorhanden, standardmäßig gesetzt. Wenn dies ebenfalls weggelassen wird, wird der `match-source` Wert zu `luminance` aufgelöst.

Beim fortsetzen mit dem `masked-element` Beispiel, wenn wir die `mask-mode` Eigenschaft nicht explizit setzen, wird es standardmäßig `match-source` für jede Schicht verwendet, als hätten wir das folgende eingestellt:

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: match-source;
}
```

oder, unter Verwendung der `mask` Kurzschreibweise:

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

Die erste Maskenschicht, `url("alphaImage.png")`, verweist auf ein Bild. Da dies kein `<mask>` Element innerhalb eines `<svg>` ist, löst sich der `mask-mode` auf `alpha` auf, wobei die undurchsichtigen Teile dieses Bildes die entsprechenden Teile des Elements sichtbar machen, während die transparenten oder halbtransparenten Teile unsichtbar oder teilweise sichtbar sind.

Der `linear-gradient(to right, black, transparent)` ist die zweite Maskenschicht und `radial-gradient(circle, white 50%, transparent 75%)` die dritte. Auch hier sind dies keine `<mask>` Elemente, sodass sich der `match-source` Wert auf `alpha` auflöst. Der Maskierungseffekt dieser Schichten wird standardmäßig durch die [Opazität des Gradienten](/de/docs/Web/CSS/Guides/Masking/Introduction#opaqueness_versus_transparency) bestimmt.

Die vierte Maskenschicht hat `none` deklariert, was bedeutet, dass die Maske für diese Schicht transparent schwarz ist. Die `.masked-element` Klasse setzt `mask-mode: match-source;`. Hätte der `mask-mode` stattdessen eine durch Kommas getrennte Liste von fünf verschiedenen Werten gehabt, hätte sich der vierte Wert auf diese `none` Schicht angewendet und der fünfte Wert auf die fünfte Schicht.

Die fünfte Maskenschicht besteht aus einem SVG {{svgelement("mask")}} Element, das `svg-mask` als seinen [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) hat. Während der Standard-Maskenmodus der anderen Schichten `alpha` ist, ist der Standard-Maskentyp von SVG `<mask>` Elementen der `mask-type` Wert, oder, wenn nicht gesetzt, das `mask-type` Attribut. Wenn das auch nicht definiert ist, wird der Wert auf `luminance` standardmäßig gesetzt. In anderen Worten, der Maskierungseffekt der `<mask>` wird sowohl durch die Helligkeit als auch die Transparenz der Farben des `<mask>` Elements bestimmt.

Wenn wir die `mask-mode` Eigenschaft überhaupt nicht deklarieren und sie für jede Maskenschicht `match-source` als Voreinstellung belassen, würde das Ergebnis in diesem `.masked-element` Fall sich lösen zu:

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: alpha, alpha, alpha, match-source, luminance;
}
```

oder, indem die `mask` Kurzschreibweise verwendet wird:

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

Analog zur {{cssxref("background-position")}} Eigenschaft setzt die {{cssxref("mask-position")}} Eigenschaft die Anfangsposition des Maskenbildes relativ zur Ursprungsbox der Maskenschicht, definiert durch [die `mask-origin` Eigenschaft](#the_mask-origin_property). Die Syntax folgt der [`background-position`'s `<position>` Syntax](/de/docs/Web/CSS/Reference/Properties/background-position#position), wobei der Wert ein, zwei oder vier {{cssxref("&lt;position&gt;")}} Werte ist, die ein bis zwei relative oder absolute Positionsversätze definieren.

### Ein-Wert-Syntax

Wenn nur ein Schlüsselwortwert angegeben wird, gibt dieser Wert die Ursprungsseite der Maske an, gegen die die Maske platziert wird, wobei die andere Dimension `center` ist.

Wenn nur ein {{cssxref("&lt;length-percentage&gt;")}} Wert angegeben ist, gibt dieser den X-Wert relativ zum linken Rand des Maskenursprungs an, wobei der Y-Wert auf `50%` gesetzt wird.

Wenn zwei Schlüsselwortwerte angegeben sind, spielt die Reihenfolge des Wertes keine Rolle, aber der Wert kann nicht zwei vertikale oder zwei horizontale Achsenwerte enthalten; `left right` und `top bottom` sind beide ungültig.

### Zwei-Wert-Syntax

Wenn zwei Werte vorhanden sind, einschließlich eines Schlüsselwortes und eines `<length-percentage>` Wertes, spielt die Reihenfolge nur dann eine Rolle, wenn das Schlüsselwort `center` ist:

- Wenn das Schlüsselwort `left` oder `right` ist, definiert es den X-Wert relativ zum linken Rand, und der Wert definiert den Y-Wert relativ zum oberen Rand.
- Ähnlich, ein `top` oder `bottom` Schlüsselwort definiert die Y-Positionierung des Elements gegen den oberen oder unteren Rand, mit dem anderen Wert, der den X-Wert relativ zum linken Rand der Ursprungsbox der Maske definiert.
- Wenn eines der Werte das `center` Schlüsselwort und das andere ein `<length-percentage>` ist, definiert der erste Wert die horizontale Position und der zweite Wert die vertikale Position.

Wenn zwei Werte vorhanden sind und beide `<length-percentage>` Werte sind, spielt die Reihenfolge wieder eine Rolle; der erste Wert definiert die horizontale Positionierung als einen Versatz vom linken Rand des Maskenpositionierungsbereichs, während der zweite Wert die vertikale Position als Versatz vom oberen Rand des Maskenpositionierungsbereichs definiert.

### Vier-Wert-Syntax

Maskenpositionen können auch relativ zu anderen Ecken als der oberen linken sein. Die Vier-Wert-Syntax ermöglicht es, die Maske von jeder Ecke aus zu versetzen. Der Wert enthält zwei {{cssxref("length-percentage")}} Versätze, die jeweils von der Ursprungsseite für diesen Versatz gefolgt werden. Ob Sie das horizontale oder vertikale Paar zuerst deklarieren, spielt keine Rolle, aber Sie müssen das Ursprungsseiten-Schlüsselwort (`left`, `right`, `top`, `bottom`, `x-start`, `x-end`, `y-start`, `y-end`, `block-start`, `block-end`, `inline-start` oder `inline-end`) vor dem Versatz `<length-percentage>` in jedem Paar deklarieren, und die zwei Ursprungsseiten können nicht von derselben Achse sein.

In der Zwei-`<length-percentage>`-Syntax sind die Ursprungsseiten `oben` und `links`, in dieser Reihenfolge. Zum Beispiel ist `mask-position: 10px 20px` gleichbedeutend mit `mask-position: left 10px top 20px`. Bei der Verschiebung von oben und links sind die Versatzseiten nicht erforderlich, aber die Reihenfolge spielt eine Rolle. Mit der Vier-Wert-Syntax können Sie `mask-position` verwenden, um das Maskenbild von beliebigen Kantenkombinationen wie `left 10px bottom 20px` zu verschieben, und die Reihenfolge der Seiten spielt keine Rolle, da die Versatzkante durch das Schlüsselwort davor statt durch die Deklarationsreihenfolge definiert wird.

### Prozentwerte

Beim Verschieben mit Prozentwerten wird die Dimension der Maske von der Dimension des Elements abgezogen, genauso wie es bei [Prozentversätzen mit `background-position`](/de/docs/Web/CSS/Reference/Properties/background-position#regarding_percentages) der Fall ist.

### Positionierende wiederholte Maskenbilder

Die `mask-position` Eigenschaft definiert die Anfangsposition des Maskenbildes. Mit "Anfangsposition" wird, wenn die [Maske wiederholt wird](#the_mask-repeat_property), das erste Maskenbild in der durch die `mask-position` Eigenschaft definierten Position platziert, wodurch die Platzierung der Wiederholung der Maske definiert wird.

In diesem Beispiel setzen wir die Position des ersten Bildes auf `bottom right`, was bedeutet, dass die erste Maske am unteren rechten Rand der Ursprungsbox der Maske platziert wird. Da Maskenbilder standardmäßig wiederholt werden, werden die wiederholten Masken relativ zur oberen und linken Seite der zuerst platzierten Maske positioniert.

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

Die `mask-position` definiert die Position der ersten Platzierung des Maskenbildes. Diese Demo zeigt, wo das erste Bild platziert wird:

```css hidden live-sample___position_no-repeat
img {
  mask-repeat: no-repeat;
}
```

{{EmbedLiveSample("position_no-repeat", "", "260px")}}

Da der Standardwert für die [`mask-repeat` Eigenschaft](#the_mask-repeat_property) `repeat` ist, werden die Bilder entlang der X- und Y-Achsen wiederholt, basierend auf der Position dieser ersten Maske:

{{EmbedLiveSample("position", "", "260px")}}

Das Zwei-Wert-Beispiel definiert die oberen und linken Versätze des ursprünglichen Maskenbildes. Das Vier-Wert-Beispiel kombiniert die vorherigen zwei vorherigen Beispiele und positioniert die erste Maske mit denselben Versätzen wie das zweite Bild, jedoch von denselben Kanten wie im ersten Bild gezeigt.

Im ersten Bild ist der erste zu platzierende Stern der am unteren rechten Rand, mit den wiederholten Sternen darüber und links. Aufgrund dieser Platzierung wird der ursprüngliche Stern nicht beschnitten, aber die äußersten und linken Sterne sind es.

Wenn wir die `mask-position` Eigenschaft nicht explizit einstellen, wird sie standardmäßig `0% 0%` für jede Schicht haben, wobei die obere linke Ecke der Maske an die obere linke Ecke der Ursprungsbox der Maske angrenzt. Beim Fortfahren mit dem `masked-element` Beispiel ist es, als hätten wir das folgende eingestellt:

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: match-source;
  mask-position: 0% 0%;
}
```

oder, erweitern des Beispiels unter Verwendung der `mask` Kurzschreibweise:

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

Wenn ein Element Polsterung, einen Rand oder beides hat, definiert die {{cssxref("mask-origin")}} Eigenschaft, welche dieser Kastenränder als Ursprungsbox der Maske oder als _Maskenpositionierbereich_ fungiert, innerhalb dessen ein Maskenbild für diese Schicht positioniert wird. Die `mask-origin` Eigenschaft ist analog zur {{cssxref("background-origin")}} Eigenschaft, aber mit einem anderen Standardwert und nur SVG-Werten.

HTML-Elemente können Masken innerhalb ihres Inhaltskantens, Polsterungskasten oder Inhaltskastens haben. Zum Beispiel, wenn die `mask-position` `top left` ist, ist das relativ zur Außenkante des Randes, zur Außenkante der Polsterung oder zur Außenkante des Inhalts?

Im [`mask-position`](#the_mask-position_property) Maskierungsbeispiel war die definierte Position relativ zur Rahmenbox (das Standardverhalten), obwohl es anzumerken ist, dass das `<img>` keinen Rahmen oder Polsterung gesetzt hatte, daher wären die Origin-Boxen des Inhalts, der Polsterung und des Rahmens in diesem Fall alle gleich.

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

In diesem Beispiel platziert die `mask-position` die erste Maske in der oberen linken Ecke des `<img>` Elements, das einen großen Rand und Polsterung hat, mit einer grünen Hintergrundfarbe, um das Sehen der Sternmaskierung auf dem Polsterbereich zu ermöglichen.

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

Ändern Sie den Wert der `mask-origin` Eigenschaft durch Ändern der ausgewählten Radiotaste beim Betrachten der Position der oberen linken Sternmaske, während Sie dies tun.

{{EmbedLiveSample("origin", "", "350px")}}

Der Standardwert ist `border-box`. Mit diesem Wert wird die erste Maske am oberen linken Rand des Rahmens platziert und nicht zugeschnitten. Wenn die erste Maske am äußeren oder inneren Rand der Polsterung platziert wird, bleibt über ihr und links Raum; diese wiederholten Masken werden zugeschnitten.

Beim Fortfahren mit dem `masked-element` Beispiel, wenn wir nicht explizit die `mask-origin` Eigenschaft setzen, wird sie standardmäßig `border-box` für jede Schicht eingestellt, wie wenn wir das folgende gesetzt hätten:

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

oder, erweitern des Beispiels unter Verwendung der `mask` Kurzschreibweise:

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

Für SVG-Elemente, die nicht die zugehörigen CSS-Layoutkästen haben, kann eine Maske innerhalb der Füllung, des Strichs oder des Ansichtsrahmens des SVG-Elements enthalten sein.

## Die `mask-clip` Eigenschaft

Die {{cssxref("mask-clip")}} Eigenschaft bestimmt den Bereich des Elements, der von einer Maske betroffen ist und schneidet das Element effektiv an der definierten Kantenbox. Sie ist analog zur {{cssxref("background-clip")}} Eigenschaft, aber mit einigen unterschiedlichen Werten.

Da die `mask-clip` Eigenschaft alle `mask-origin` Werte akzeptiert und beide denselben Standardwert `border-box` haben, mögen die beiden Eigenschaften ähnlich erscheinen, aber sie dienen sehr unterschiedlichen Zwecken. Während `mask-origin` bestimmt, wo ein Maskenbild positioniert wird, lässt die `mask-clip` Eigenschaft das Originalelement seinen Inhalt auf die angegebene Box schneiden. Es ist wichtig, beide zu verstehen: Wenn der `mask-origin` dazu führt, dass die `mask-position` das Maskenbild außerhalb des Clipbereichs platziert, wird die Maske geclippt.

Die `mask-clip` Eigenschaft akzeptiert alle `mask-origin` Werte sowie ihren eigenen `no-clip` Wert. Der `no-clip` Wert setzt den lackierten Inhalt, damit er nicht geclippt wird. Sie können das Maskenbild jedoch weiterhin abschneiden, indem Sie es außerhalb des Rahmen-Inhaltsbereichs mit `mask-position` Werten positionieren, die kleiner als null sind oder auf mehr als 100 % aufgelöst werden.

Das Setzen von `mask-clip` und `mask-origin` auf unterschiedliche Werte kann dazu führen, dass das Maskenschichtenbild geclippt wird. Zum Beispiel, wenn ein Element mit einem Rahmen und Polsterung `mask-clip` auf `content-box` und `mask-origin` auf `border-box` gesetzt hat und die `mask-position` auf die `top left` Kante eingestellt ist, wird das Maskenschichtenbild an der oberen linken Kante geclippt.

Das nächste Beispiel fügt den vorherigen Clipoptionen hinzu, um die verschiedenen nicht-SVG `mask-clip` Werte zu demonstrieren sowie zu zeigen, wie sie die verschiedenen `mask-origin` Werte beeinflussen.

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

Die erste Maske wird am oberen linken Rand des Containerursprungs der Maske platziert und dann wiederholt. Wenn die Ursprungsbox der `border-box` ist und der Clipping-Bereich die `content-box` ist, werden die oberen und linken Bereiche des Containerursprungs der Maske geclippt. Im Allgemeinen möchten Sie, dass die `mask-clip` die gleiche wie die `mask-origin` ist.

Beim Fortfahren mit dem `masked-element` Beispiel, wenn wir die `mask-clip` Eigenschaft nicht explizit setzen, wird sie standardmäßig `border-box` für jede Schicht eingestellt, als hätten wir das folgende gesetzt:

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

oder, erweitern des Beispiels unter Verwendung der `mask` Kurzschreibweise:

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

In der `mask` Kurzschreibweise, wenn nur ein [`<geometry-box>`](/de/docs/Web/CSS/Reference/Properties/clip-path#geometry-box) Wert gegeben wird, setzt er sowohl die `mask-origin` als auch die `mask-clip` Eigenschaftswerte. Wenn zwei `<geometry-box>` Werte vorhanden sind, definiert der erste die `mask-origin` und der zweite die `mask-clip`.

Bei Maskenschichtenbildern, die nicht auf ein SVG {{svgelement("mask")}} Element verweisen, definiert die `mask-clip` Eigenschaft, ob der Bereich der Maskenlackierung oder der von der Maske beeinflusste Bereich der Rahmen, die Polsterung oder der Inhaltskasten ist. Der bemalte Inhalt des Elements wird auf diesen Bereich beschränkt.

Wenn die {{cssxref("mask-image")}} Quelle der Maskenschicht ein `<mask>` ist, hat die `mask-clip` Eigenschaft keinen Effekt. Vielmehr bestimmen die {{svgAttr("x")}}, {{svgAttr("y")}}, {{svgAttr("width")}}, {{svgAttr("height")}}, und {{svgAttr("maskUnits")}} Attribute des `<mask>` Elements den Maskenlackierbereich.

## Die `mask-size` Eigenschaft

Die {{cssxref("mask-size")}} Eigenschaft wird verwendet, um Maskenschichten zu dimensionieren. Diese Eigenschaft ist analog zur {{cssxref("background-size")}} Eigenschaft und nimmt dieselben Werte an. Beim Dimensionieren Ihrer Masken denken Sie daran, dass Bereiche des Elements, die nicht von den Maskenbildern abgedeckt sind, verborgen sind.

Es gibt drei Möglichkeiten, eine `mask-size` zu deklarieren:

- das `cover` oder `contain` Schlüsselwort,
- ein Länge, Prozentsatz oder das Schlüsselwort `auto`, oder
- zwei Werte, die eine Kombination aus Längen, Prozentsätzen und dem Schlüsselwort `auto` sind.

Das Maskenbild kann in seiner natürlichen Größe belassen, gestreckt oder eingeschränkt an den verfügbaren Raum angepasst werden. Das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Maskenbildes wird standardmäßig beibehalten, aber das Deklarieren von zwei `<length-percentage>` Werten kann das Maskenbild verzerren, wenn das Verhältnis der beiden Werte nicht dasselbe wie das ursprüngliche Bild ist (`mask-repeat: round` ist das andere Eigenschaft/Wert-Paar, das das Maskenbild verzerren kann).

Wenn die `mask-size` auf `contain` gesetzt ist, wird das Maskenbild die größte Größe haben, die es haben kann, während es vollständig innerhalb des Maskenpositionierungsbereichs enthalten ist. In diesem Fall wird das Maskenbild nicht geclippt, sondern es ist vollständig enthalten.

Wenn es auf `cover` gesetzt ist, wird das Maskenbild die kleinste Größe haben, um den gesamten Maskenpositionierungsbereich vollständig abzudecken, wobei die Maske geclippt wird, wenn das Maskenverhältnis vom Verhältnis des Maskenpositionierungsbereichs abweicht.

Mit anderen Worten, bei `cover` und `contain` wird zumindest eine Dimension der Maske dieselbe Größe wie die gleiche Dimension des Maskenpositionierungsbereichs haben; das Maskenbild wächst oder schrumpft so, dass entweder die Breite dieselbe Breite wie der Maskenpositionierungsbereich hat oder die Höhe des Maskenbildes gleich der Höhe des Maskenpositionierungsbereichs ist.

Mit `cover`, `contain` und `<percentage>` Werten ist die Größe relativ zur Ursprungsbox. In unserem Sternmaske-und-Flagge-Bild-Beispiel, das Seitenverhältnis sowohl des Maskenbildes als auch des `<img>` beträgt `1:1`, was bedeutet, dass in diesem Fall `cover`, `contain` und `100%` alle dasselbe Maskenbild erzeugen. Dieses Beispiel zeigt, wie die tatsächliche Größe der Maske abhängig vom Wert der [`mask-origin` Eigenschaft](#the_mask-origin_property) unterschiedlich sein kann, wenn `mask-size` auf `cover`, `contain` oder einen `<percentage>` Wert eingestellt ist:

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

Ändern Sie den Wert der `mask-origin` Eigenschaft, um zu sehen, wie die unterschiedlichen Werte die Größe der Maske beeinflussen:

{{EmbedLiveSample("size", "", "350px")}}

Dieses Beispiel enthielt einen `<percentage>` Wert. Wenn ein `<length-percentage>` Wert angegeben ist, definiert er nur die Maskenbreite, wobei die Höhe standardmäßig `auto` ist, was das Seitenverhältnis beibehält. Wenn zwei Werte angegeben sind, definiert der erste die Maskenbreite und der zweite die Höhe.

Der Standardwert von `mask-size` ist `auto`, was die Maske in ihrer {{Glossary("intrinsic_size", "intrinsischen Größe")}} rendert, der Größe, in der die Maske ohne angewendetes CSS angezeigt würde. Das zugrundeliegende {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Maskenbildes wird beibehalten, wenn Sie einen einzelnen `<length-percentage>` Wert oder zwei Werte im gleichen Verhältnis wie das Seitenverhältnis einstellen. Wenn Sie zwei Werte in einem anderen Verhältnis als das Seitenverhältnis deklarieren, wird das Maskenbild verzerrt.

Wie bei allen Langhandkomponenten der Kurzschreibweiseigenschaft, wenn die {{cssxref("mask")}} Kurzschreibweiseigenschaft gesetzt ist und der Wert der `mask-size` Eigenschaft nicht innerhalb einer Maske-Schicht definiert ist, wird der `mask-size` Wert auf seinen ursprünglichen Wert von `auto` für diese Masken-Schichten zurückgesetzt.

Wenn das Bild kein intrinsisches Verhältnis hat, zum Beispiel im Fall eines [CSS Gradienten](/de/docs/Web/CSS/Reference/Values/gradient), ist das Standard `auto` die Gesamtheit des Maskenpositionierungsbereichs, der von [der `mask-origin` Eigenschaft](#the_mask-origin_property) gesetzt wird.

Beim Fortfahren mit dem `masked-element` Beispiel, wenn wir die `mask-size` Eigenschaft nicht explizit setzen, wird sie standardmäßig `auto` für jede Schicht eingestellt, als hätten wir das folgende gesetzt:

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

oder, erweitern des Beispiels unter Verwendung der `mask` Kurzschreibweise, wobei die `mask-size` Komponente nach dem `mask-position` Wert kommt, getrennt durch einen Schrägstrich (/):

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

Die {{cssxref("mask-repeat")}} Eigenschaft definiert, wie Maskenbilder wiederholt oder gekachelt werden, nachdem das ursprüngliche Maskenbild skaliert und positioniert wurde. Die `mask-repeat` Eigenschaft definiert, ob und wie dieses Maskenbild entlang der horizontalen und vertikalen Achsen wiederholt wird. In den meisten der vorherigen Beispiele haben Sie vielleicht bemerkt, dass die Sternmaske entlang der X und Y Achsen wiederholt wurde. Dies liegt daran, dass `repeat` der Standardwert ist.

Die `mask-repeat` Eigenschaft ist analog zur {{cssxref("background-repeat")}} Eigenschaft und akzeptiert dieselben [`<repeat-style>`](/de/docs/Web/CSS/Reference/Properties/mask-repeat#values) Werte. Wie es bei `background-repeat` der Fall ist, wird die erste (und möglicherweise einzige) Wiederholung des Maskenbildes durch [die `*-position` Eigenschaft](#the_mask-position_property) positioniert und durch [die `*-size` Eigenschaft](#the_mask-size_property) skaliert. Die Positionen der wiederholten Hintergrund- oder Maskenbilder basieren auf diesem ersten Bild.

Beim Fortfahren mit dem `masked-element` Beispiel, wenn wir die `mask-repeat` Eigenschaft nicht explizit setzen, wird sie standardmäßig `repeat` für jede Schicht eingestellt, als hätten wir das folgende gesetzt:

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

oder, erweitern des Beispiels unter Verwendung der `mask` Kurzschreibweise:

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

Die {{cssxref("mask")}} Kurzschreibung umfasst die {{cssxref("mask-composite")}} Eigenschaft, die definiert, wie mehrere Masken kombiniert werden, um den finalen Maskeneffekt zu erzeugen. Jeder Wert in der durch Kommas getrennten Liste von Werten bestimmt, ob der Browser die zugehörige Maskenschicht von den darunter liegenden Maskenschichten `add`, `subtract`, `intersect` oder `exclude` soll. Ähnlich wie `mask-mode` und die anderen `mask-*` Eigenschaften gibt es keine Eigenschaft in der {{cssxref("background")}} Kurzschreibung, die analog dazu ist.

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

Wir setzen für jedes Bild einen anderen `mask-composite` Wert:

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

Die halbtransparente Sternmaske wird je nach `mask-composite`-Wert addiert, subtrahiert, mit der gestreiften Maske geschnitten oder ausgeschlossen.

Die `mask-composite` Eigenschaft ist nur relevant in Fällen mit zwei oder mehr Maskenschichten. Das liest "Maskenschichten", nicht "Maskenbilder", weil, wenn `none` enthalten ist, die transparente schwarze Maske kombiniert wird. Ein `none` Wert kann eine tiefgreifende Wirkung auf die Maskierung im Fall von `subtract` und `intersect` haben. Zum Beispiel, wenn der `mask-mode` auf `luminance` auflöst, wird das Subtrahieren einer schwarzen Maske das gesamte Maskieren entfernen (das Element wird verborgen). Ebenso, wenn `none` die letzte Schicht mit `mask-composite: intersect` für diese Schicht ist, wird das gesamte Element verborgen. Hier fügen wir der vorherigen Beispiel eine dritte Schicht zu, mit `none`:

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

Beachte, wie das `intersect` Beispiel alles ausschließt, da die transparente schwarze Maske nichts schneidet.

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

Im ersten Beispiel werden die Sterne von den Streifen subtrahiert. Im zweiten werden die Streifen von den Sternen subtrahiert.

Wie alle anderen `mask` Komponenten-Eigenschaften nimmt `mask-composite` eine durch Kommas getrennte Liste von Werten. Da die Eigenschaft die Kombination der Masken beeinflusst, ist diese Eigenschaft nur für mehrere Maskenschichten relevant und die Anzahl der verwendeten Werte ist um eins geringer als die der Maskenschichten.

Das letzte Maskenpaar wird zuerst kombiniert. Das vorherige Maskenbild wird dann mit der vorherigen Kombination kombiniert.

Beim Fortsetzen des `masked-element` Beispiels, wenn wir die `mask-composite` Eigenschaft nicht explizit setzen, wird sie standardmäßig `add` für jede Schicht, als hätten wir das folgende gesetzt:

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

In diesem Fall wird das `<mask>` Element mit der `none` Schicht kombiniert. Dann wird der radiale Gradiente mit dem Ergebnis der vorherigen Kombination kombiniert, und so weiter.

Wie wir bei allen anderen Komponenteneigenschaften gesehen haben, könnten wir die `mask` Kurzschreibweise verwenden:

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

- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [Einführung in CSS-Clipping](/de/docs/Web/CSS/Guides/Masking/Clipping)
- [CSS Maskierung](/de/docs/Web/CSS/Guides/Masking) Modul
