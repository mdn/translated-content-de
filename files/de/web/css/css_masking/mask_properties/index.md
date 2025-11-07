---
title: CSS mask-Eigenschaften
slug: Web/CSS/CSS_masking/Mask_properties
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

CSS-Maskierung ist eine Technik, die es Ihnen ermöglicht, sichtbare Teile eines Elements durch Anwenden einer Maske zu definieren. Dies ermöglicht selektives Offenlegen oder Verbergen von Teilen des Elements basierend auf den Alphakanälen und optional den Farben der angewendeten Maskenbilder.

Der [Einführungsleitfaden zur Maskierung](/de/docs/Web/CSS/CSS_masking) stellt die verschiedenen Arten von Maskenbildern und ihre Modi vor. Der Leitfaden zum [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks) erörtert die [Maskenschichten](/de/docs/Web/CSS/CSS_masking/Multiple_masks#understanding_mask_layers) und die {{cssxref("mask")}} Kurzschreibweise und bietet eine kurze Einführung in die Komponenten dieser Kurzschreibweise. In diesem Leitfaden erkunden wir diese Komponenteneigenschaften im Detail und schauen, wie sie zusammenwirken. Wir erklären auch, wie bei der Deklaration mehrerer Maskenbilder die [Maskenschichten kombiniert werden](#the_mask-composite_property), oder kombiniert.

CSS-Masken bestehen aus einer oder mehreren Maskenschichten, wobei für jeden Wert in der kommagetrennten Liste von `mask` oder `mask-image` Werten eine Maskenschicht erstellt wird, ganz gleich, ob die Werte Bilder, Maskenquellen oder das Schlüsselwort `none` sind. Jedes {{cssxref("mask-image")}} wird relativ zu einer [Ursprungsbox](#the_mask-origin_property) [positioniert](#the_mask-position_property). Die Maskenbilder können [skaliert](#the_mask-size_property), [wiederholt](#the_mask-repeat_property) und [beschnitten](#the_mask-clip_property) werden, und dann zusammen mit vorherigen Schichten kombiniert werden, um die endgültige visuelle Maske auf dem Element zu erstellen.

## Die `mask-image` Eigenschaft

Die Mindestanforderung, um eine Maske zu erstellen, ist eine {{cssxref("mask-image")}} Eigenschaft, die auf einen Wert ungleich `none` eingestellt ist. Das Schlüsselwort `none` innerhalb einer Liste von Maskenquellen erstellt eine Maskenschicht. Wenn `none` jedoch der einzige Wert der `mask-image` Eigenschaft ist, erfolgt keine Maskierung.

Das Maskenbild kann ein [CSS-Verlauf](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients), ein [importiertes Bild](/de/docs/Web/CSS/CSS_masking/Masking#with_imported_images) (wie ein PNG, SVG usw.) oder ein SVG {{svgelement("mask")}} Element sein.

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

Die `none` Schicht hat im Allgemeinen keinen visuellen Effekt (siehe die [`mask-composite` Eigenschaft](#the_mask-composite_property), um zu erfahren, wie sie die angewendete Maske beeinflusst), aber da jeder Wert in einer kommagetrennten Liste von `mask-*` Werten auf eine separate Maskenschicht angewendet wird, erfüllt der Wert `none` einen wichtigen Zweck, selbst wenn er die zusammengesetzte Maske nicht verändert.

Diese vierte Schicht in unserer Struktur mit fünf Schichten wird dem vierten Wert jeder anderen kommagetrennten `mask-*` Eigenschaftswerte entsprechen. Wie bereits erwähnt, wird die Anzahl der Schichten durch die Anzahl der kommagetrennten Werte im Wert der {{cssxref("mask-image")}} Eigenschaft bestimmt, selbst wenn ein Wert `none` ist. Jeder `mask-*` Wert wird in der Reihenfolge den `mask-image` Werten zugeordnet. Wenn die Anzahl der Werte in einer `mask-*` Eigenschaft von der Anzahl der Maskenschichten abweicht, werden alle überzähligen Werte ignoriert, oder wenn die Eigenschaft weniger Werte als die Anzahl der Maskenschichten hat, werden die Werte wiederholt.

Wenn eine `mask-*` Eigenschaft einen einzelnen Wert hat, wird dieser Wert auf alle Schichten angewendet. Wenn wir fünf Werte haben, wird der vierte Wert auf die `none` Schicht angewendet, während der letzte Wert auf die `<mask>` Quellschicht angewendet wird. Wenn es zwei kommagetrennte Werte gibt, wird der erste Wert nur auf alle ungeraden Schichten angewendet, einschließlich dieser `<mask>` Quellschicht. Zum Beispiel kann jede `mask-*` Eigenschaft eine unterschiedliche Anzahl von Werten haben:

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

In diesem Fall wird jede ungerade Schicht entlang der x-Achse wiederholt, während jede gerade Schicht entlang der y-Achse wiederholt wird. Die Bilder der ersten und vierten Schicht werden zentriert, während die der zweiten und fünften in der oberen linken Ecke positioniert werden. Das `none` bedeutet, dass das Bild der fünften Schicht `#svg-mask` entlang der x-Achse ab der oberen linken Ecke wiederholt wird.

Erfahren Sie mehr über [Maskenschichten und das `none` Schlüsselwort](/de/docs/Web/CSS/CSS_masking/Multiple_masks#mask_layers_and_the_none_keyword).

## Die `mask-mode` Eigenschaft

Die {{cssxref("mask-mode")}} Eigenschaft kann verwendet werden, um den Modus jeder Maskenschicht auf entweder `alpha` oder `luminance` einzustellen, oder es zu erlauben, auf den Modus der Quelle zurückzugreifen, indem der Wert auf `match-source` gesetzt wird, was der Standardwert ist. Während die meisten `mask-*` Eigenschaften eine analoge `background-*` Eigenschaft haben (`mask-image` ist analog zur {{cssxref("background-image")}} Eigenschaft, zum Beispiel), haben `mask-mode` und [`mask-composite`](#the_mask-composite_property) keine analoge {{cssxref("background")}} Eigenschaft.

### Maskentypen: `alpha` und `luminance`

Jede Maske ist entweder eine `alpha`- oder `luminance`-Maske.

Bei `alpha`-Masken ist die Alphatransparenz jedes Maskenpixels wichtig. Wo immer die Maske undurchsichtig ist, sind die entsprechenden Teile des Elements sichtbar. Wo die Maske transparent ist, werden die entsprechenden Teile des Elements verborgen. Wo die Maske halbtransparent ist, ist das Element genauso halbtransparent. Die Farbe der Maske spielt keine Rolle, nur die Alphatransparenz der Farben.

Bei `luminance`-Masken bestimmen sowohl die [Helligkeit der Maskenfarben](/de/docs/Web/CSS/CSS_masking/Masking#alpha_transparency_versus_luminance) als auch der Alphakanal die Deckkraft der maskierten Bereiche.

> [!NOTE]
> Alle folgenden Beispiele verwenden das folgende Bild als `background-image` auf einem Element, auf das Masken angewendet werden:
>
> <img src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg" alt="Pride flag" />

Dieses Beispiel demonstriert den Unterschied zwischen `alpha`- und `luminance`-Masken. Die Masken sind die gleichen, aber bei der `alpha`-Maske ist nur die Alphatransparenz der Farben der Verlaufsmasken wichtig. In dem `luminance`-Beispiel sind die R, G, B und A alle wichtig.

Zwei Container enthalten Bilder, während der letzte leer ist, aber eingeschlossen wird, um den Gradienten anzuzeigen, den wir als `mask-image` verwenden werden.

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

Wir setzen für jedes Bild unterschiedliche Werte für die `mask-mode` Eigenschaft:

```css live-sample___mode
.alpha img {
  mask-mode: alpha;
}

.luminance img {
  mask-mode: luminance;
}
```

{{EmbedLiveSample("mode", "", "270px")}}

Im `alpha`-Fall ist nur die Transparenz der Farben des Verlaufs wichtig. Wo der Verlauf undurchsichtig rot ist, ist das Bild undurchsichtig. Wo der Verlauf transparent ist, ist das Bild verborgen. Wo der Verlauf 50% undurchsichtig ist, ist das Bild 50% undurchsichtig. Im `luminance`-Fall spielt die Helligkeit der Farben eine Rolle! Sehen Sie unter [Alpha-Transparenz versus Luminanz](/de/docs/Web/CSS/CSS_masking/Masking#alpha_transparency_versus_luminance) mehr über die Gleichung, die die R, G, B und A Kanäle der Farbe verwendet, um die Opazität der Maske zu bestimmen.

### Der Standardwert von `mask-mode`: `match-source`

Der Standardwert der `mask-mode` Eigenschaft ist `match-source`. Dieser Wert setzt den `mask-mode` so, dass er dem Modustyp der Maske entspricht. Der `match-source` Wert wird zu `alpha` für jede Maske, außer Masken, bei denen die Maskenquelle ein SVG {{svgelement("mask")}} Element ist.

Wenn ein SVG `<mask>` Element als Maskenquelle verwendet wird, wird der `match-source` Wert auf den Wert der CSS {{cssxref("mask-type")}} Eigenschaft des `<mask>` Elements aufgelöst. Wenn das `<mask>` Element (nicht das "maskierte Element") die CSS `mask-type` Eigenschaft nicht definiert hat, wird diese Eigenschaft auf den Wert des SVG {{svgAttr("mask-type")}} Attributs zurückgesetzt, falls vorhanden. Wenn auch dies weggelassen wird, wird der `match-source` Wert auf `luminance` aufgelöst.

Weiterführend mit dem `masked-element` Beispiel, wenn wir die `mask-mode` Eigenschaft nicht explizit setzen, wird sie für jede Schicht auf `match-source` zurückgesetzt, als ob wir das Folgende gesetzt hätten:

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: match-source;
}
```

Oder, mit der `mask` Kurzschreibweise:

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

Die erste Maskenschicht, `url("alphaImage.png")`, referenziert ein Bild. Da dies kein `<mask>` Element innerhalb eines `<svg>` ist, wird der `mask-mode` zu `alpha` aufgelöst, wobei die undurchsichtigen Teile dieses Bildes die entsprechenden Teile des Elements sichtbar machen, während die transparenten oder halbtransparenten Teile unsichtbar oder teilweise sichtbar sind.

Der `linear-gradient(to right, black, transparent)` ist die zweite Maskenschicht und `radial-gradient(circle, white 50%, transparent 75%)` ist die dritte. Auch hier sind dies keine `<mask>` Elemente, also wird der `match-source` Wert auf `alpha` aufgelöst. Der Maskierungseffekt dieser Schichten wird standardmäßig durch die [Opazität des Verlaufsmaskenbildes](/de/docs/Web/CSS/CSS_masking/Masking#opaqueness_versus_transparency) bestimmt.

Die vierte Maskenschicht hat `none` deklariert, was bedeutet, dass die Maske für diese Schicht transparentes Schwarz ist. Die `.masked-element` Klasse setzt `mask-mode: match-source;`. Wäre `mask-mode` stattdessen eine kommagetrennte Liste von fünf verschiedenen Werten gewesen, wäre der vierte Wert auf diese `none` Schicht angewendet worden, was den fünften Wert erlaubt hätte, auf die fünfte Schicht angewendet zu werden.

Die fünfte Maskenschicht besteht aus einem SVG {{svgelement("mask")}} Element, das `svg-mask` als [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) hat. Während der Standardmaskenmodus der anderen Schichten `alpha` ist, ist der Standardmaskentyp von SVG `<mask>` Elementen der `mask-type` Wert oder, wenn nicht gesetzt, das `mask-type` Attribut. Wenn das auch nicht definiert ist, wird der Wert auf `luminance` zurückgesetzt. Mit anderen Worten, der Maskierungseffekt des `<mask>` wird durch sowohl die Helligkeit als auch die Transparenz der Farben des `<mask>` Elements bestimmt.

Wenn wir die `mask-mode` Eigenschaft überhaupt nicht deklarieren und sie für jede Maskenschicht auf `match-source` zurücksetzen, würde das Ergebnis in diesem `.masked-element` Fall wie folgt aufgelöst werden:

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: alpha, alpha, alpha, match-source, luminance;
}
```

Oder, mit der `mask` Kurzschreibweise:

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

Analog zur {{cssxref("background-position")}} Eigenschaft setzt die {{cssxref("mask-position")}} Eigenschaft die initiale Position des Maskenbildes relativ zur Ursprungsbox der Maskenschicht, die durch [die `mask-origin` Eigenschaft](#the_mask-origin_property) definiert ist. Die Syntax folgt der [`background-position`'s `<position>` Syntax](/de/docs/Web/CSS/Reference/Properties/background-position#position), wobei der Wert ein, zwei oder vier {{cssxref("&lt;position&gt;")}} Werte ist, die ein bis zwei relative oder absolute Positionsverschiebungen definieren.

### Ein-Wert-Syntax

Wenn nur ein Schlüsselwortwert angegeben ist, spezifiziert dieser Wert die Kante des Maskenursprungs, gegen die die Maske platziert wird, wobei die andere Dimension `center` ist.

Wenn nur ein {{cssxref("&lt;length-percentage&gt;")}} Wert angegeben ist, gibt dies die X-Koordinate relativ zur linken Kante des Maskenursprungs an, wobei die Y-Koordinate auf `50%` gesetzt wird.

Wenn zwei Schlüsselwortwerte angegeben sind, spielt die Reihenfolge der Werte keine Rolle, aber der Wert kann nicht zwei vertikale oder zwei horizontale Achsenwerte enthalten; `left right` und `top bottom` sind beide ungültig.

### Zwei-Wert-Syntax

Wenn zwei Werte vorhanden sind, einschließlich eines Schlüsselwortes und eines `<length-percentage>` Werts, dann ist die Reihenfolge nur dann von Bedeutung, wenn das Schlüsselwort `center` ist:

- Wenn das Schlüsselwort `left` oder `right` ist, definiert es die X-Koordinate relativ zur linken Kante und der Wert definiert die Y-Koordinate relativ zur oberen Kante.
- Ebenso definiert ein `top` oder `bottom` Schlüsselwort die Y-Koordinate, die das Element gegen die obere bzw. untere Kante positioniert, wobei der andere Wert die X-Koordinate relativ zur linken Kante der Maskenursprungsbox definiert.
- Wenn ein Wert das Schlüsselwort `center` ist und der andere ein `<length-percentage>`, definiert der erste Wert die horizontale Position und der zweite Wert die vertikale Position.

Wenn zwei Werte vorhanden sind und beide `<length-percentage>` Werte sind, spielt die Reihenfolge wieder eine Rolle; der erste Wert definiert die horizontale Positionierung als Versatz von der linken Kante des Masken-Positionierungsbereichs, während der zweite Wert die vertikale Position als Versatz von der oberen Kante des Masken-Positionierungsbereichs definiert.

### Vier-Wert-Syntax

Maskenpositionen können auch relativ zu anderen Ecken als der oberen linken sein. Die Vier-Wert-Syntax ermöglicht das Versetzen der Maske von jeder Ecke. Der Wert enthält zwei {{cssxref("length-percentage")}} Offsets, die jeweils von der Ursprungsseite für diesen Versatz vorhergegangen werden. Dabei spielt es keine Rolle, ob Sie zuerst das horizontale oder vertikale Paar deklarieren, aber Sie müssen das Ursprungsseiten-Schlüsselwort (`left`, `right`, `top`, `bottom`, `x-start`, `x-end`, `y-start`, `y-end`, `block-start`, `block-end`, `inline-start` oder `inline-end`) vor dem Offset `<length-percentage>` in jedem Paar deklarieren, und die zwei Ursprungsseiten dürfen nicht von der gleichen Achse sein.

In der `<length-percentage>` Zwei-Wert-Syntax sind die Ursprungsseiten `top` und `left`, in dieser Reihenfolge. Zum Beispiel ist `mask-position: 10px 20px` gleichbedeutend mit `mask-position: left 10px top 20px`. Beim Versatz von oben und links sind die Offset-Seiten nicht erforderlich, aber die Reihenfolge ist wichtig. Mit der Vier-Wert-Syntax können Sie `mask-position` verwenden, um das Maskenbild von jeder Kantenkombination wie `left 10px bottom 20px` zu versetzen, und die Reihenfolge der Seiten spielt keine Rolle, da die Offset-Kante durch das Schlüsselwort vorgegeben wird, anstelle der Deklarationsreihenfolge.

### Prozentwerte

Bei der Versetzung mit Prozentwerten wird die Dimension der Maske von der Dimension des Elements abgezogen, genau wie bei [Prozentversetzungen mit `background-position`](/de/docs/Web/CSS/Reference/Properties/background-position#regarding_percentages).

### Positionierung wiederholender Maskenbilder

Die `mask-position` Eigenschaft definiert die Anfangsposition des Maskenbildes. Mit „Anfangsposition“ meint man, dass der Browser bei [einer Wiederholung der Maske](#the_mask-repeat_property) das erste Maskenbild an der durch die `mask-position` Eigenschaft definierten Position platziert und somit die Platzierung der Maskenwiederholungen definiert.

In diesem Beispiel setzen wir die Position des ersten Bildes auf `bottom right`, was bedeutet, dass die erste Maske an der unteren rechten Kante der Maskenursprungsbox platziert wird. Da Maskenbilder standardmäßig wiederholt werden, werden die wiederholten Masken an den oberen und linken Seiten der ersten platzierten Maske positioniert.

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

Die `mask-position` definiert die Platzierung der ersten Maskenschicht. Dieses Demo zeigt, wo das erste Bild platziert wird:

```css hidden live-sample___position_no-repeat
img {
  mask-repeat: no-repeat;
}
```

{{EmbedLiveSample("position_no-repeat", "", "260px")}}

Da der Standardwert für die [Eigenschaft `mask-repeat`](#the_mask-repeat_property) `repeat` ist, werden die Bilder entlang der X- und Y-Achsen basierend auf der Position dieser ersten Maske wiederholt:

{{EmbedLiveSample("position", "", "260px")}}

Das Zweiwertbeispiel definiert die oberen und linken Versätze der ursprünglichen Maske. Das Vierwertbeispiel kombiniert die beiden vorhergehenden Beispiele, indem die erste Maske mit den gleichen Versätzen wie das zweite Bild, aber von den gleichen Kanten wie im ersten Bild angeordnet wird.

Im ersten Bild wird der erste zu platzierende Stern der unterste rechte sein, mit den wiederholten Sternen darüber und links. Aufgrund dieser Platzierung wird der ursprüngliche Stern nicht beschnitten, aber die am weitesten oben und links befindlichen Sterne sind es.

Wenn wir die `mask-position` Eigenschaft nicht explizit setzen, wird sie standardmäßig auf `0% 0%` für jede Schicht gesetzt, wobei die obere linke Ecke der Maske an der oberen linken Ecke der Masken-Ursprungsbox anliegt. Fortgeführt mit dem `masked-element` Beispiel ist es so, als ob wir das Folgende gesetzt hätten:

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: match-source;
  mask-position: 0% 0%;
}
```

Oder, erweitert in dem Beispiel mit der `mask` Kurzschreibweise:

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

Wenn ein Element eine Polsterung, einen Rahmen oder beides hat, definiert die {{cssxref("mask-origin")}} Eigenschaft, welche dieser Box-Kantenwerte als Masken-Ursprungsbox dient, oder das _Masken-Positionierungsgebiet_, innerhalb dessen ein Maskenbild für diese Schicht positioniert wird. Die Eigenschaft `mask-origin` ist analog zur {{cssxref("background-origin")}} Eigenschaft, jedoch mit einem anderen Anfangswert und SVG-nur-Werten.

HTML-Elemente können Masken enthalten, die in ihrer Inhaltsrahmenbox, Polsterbox oder Inhaltsbox enthalten sind. Beispielsweise, wenn die `mask-position` `top left` ist, bezieht sich das auf die äußere Kante des Rahmens, die äußere Kante der Polsterung oder die äußere Kante des Inhalts?

In dem [mask-position](#the_mask-position_property) Maskierungsbeispiel wurde die definierte Position relativ zur Rahmenbox (Standardverhalten) bezogen, obwohl es sich lohnt zu beachten, dass das `<img>` keinen Rand oder Polsterung gesetzt hatte, daher würden die Inhaltsbox, die Polsterbox und die Rahmenboxursprünge in diesem Fall alle gleich sein.

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

In diesem Beispiel platziert die `mask-position` die anfängliche Maske in der oberen linken Ecke des `<img>` Elements, das einen großen Rahmen und Polsterung hat, mit einer grünen Hintergrundfarbe, um zu ermöglichen, das Sternmaskieren im Polsterungsbereich zu sehen.

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

Ändern Sie den Wert der `mask-origin` Eigenschaft, indem Sie die ausgewählte Radio-Schaltfläche ändern und die Position der oberen linken Sternmaske beobachten, während Sie dies tun.

{{EmbedLiveSample("origin", "", "350px")}}

Der Standardwert ist `border-box`. Mit diesem Wert wird die anfängliche Maske an der oberen linken Kante des Rahmens platziert und nicht beschnitten. Wenn die anfängliche Maske an der äußeren oder inneren Kante der Polsterung platziert wird, gibt es oben und links Platz; diese wiederholten Masken werden beschnitten.

Fortgeführt mit dem `masked-element` Beispiel, wenn wir die `mask-origin` Eigenschaft nicht explizit setzen, wird sie standardmäßig auf `border-box` für jede Schicht gesetzt, als ob wir das Folgende gesetzt hätten:

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

Oder, erweitert in dem Beispiel mit der `mask` Kurzschreibweise:

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

Für SVG-Elemente, die nicht die zugehörigen CSS-Layout-Boxen haben, kann eine Maske innerhalb des SVG-Elements im Füll-, Strich- oder Sichtfeld enthalten sein.

## Die `mask-clip` Eigenschaft

Die {{cssxref("mask-clip")}} Eigenschaft bestimmt den Bereich des Elements, der von einer Maske betroffen sein wird, indem sie das Element an der definierten Boxkante effektiv abschneidet. Sie ist analog zur {{cssxref("background-clip")}} Eigenschaft, jedoch mit einigen unterschiedlichen Werten.

Da die `mask-clip` Eigenschaft alle `mask-origin` Werte akzeptiert und beide den gleichen Standardwert `border-box` haben, könnten die beiden Eigenschaften ähnlich erscheinen, aber sie dienen sehr unterschiedlichen Zwecken. Während `mask-origin` bestimmt, wo ein Maskenbild positioniert wird, bewirkt die `mask-clip` Eigenschaft, dass das ursprüngliche Element seinen Inhalt auf die angegebene Box beschränkt. Es ist wichtig, beide zu verstehen: Wenn die `mask-origin` Eigenschaft bewirkt, dass die `mask-position` das Maskenbild außerhalb des Clipbereichs platziert, wird die Maske abgeschnitten.

Die `mask-clip` Eigenschaft akzeptiert alle `mask-origin` Werte sowie ihren eigenen `no-clip` Wert. Der `no-clip` Wert setzt den bemalten Inhalt so, dass er nicht abgeschnitten wird. Sie können trotzdem bewirken, dass das Maskenbild abgeschnitten wird, indem Sie es außerhalb des Randinhaltsbereichs durch `mask-position` Werte positionieren, die weniger als null oder größer als 100% sind.

Das Setzen von `mask-clip` und `mask-origin` auf unterschiedliche Werte kann bewirken, dass das Maskenschichtbild abgeschnitten wird. Zum Beispiel, wenn ein Element mit einem Rand und einer Polsterung `mask-clip` auf `content-box` und `mask-origin` auf `border-box` gesetzt hat und die `mask-position` auf die `top left` Kante gesetzt ist, wird das Maskenschichtbild an der oberen linken Kante beschnitten.

Das nächste Beispiel fügt dem vorherigen Beispiel Clip-Optionen hinzu, um die unterschiedlichen nicht-SVG `mask-clip` Werte zu demonstrieren und zu zeigen, wie sie die unterschiedlichen `mask-origin` Werte beeinflussen.

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

Die erste Maske wird an der oberen linken Ecke des Maskenursprungcontainers platziert und dann wiederholt. Wenn der Ursprungsbereich die `border-box` ist und die Clipregion die `content-box`, werden die oberen und linken Bereiche des Maskenursprungcontainers abgeschnitten. Im Allgemeinen möchten Sie, dass der `mask-clip` Wert der gleiche wie der `mask-origin` Wert ist.

Fortgesetzt mit dem `masked-element` Beispiel, wenn wir die `mask-clip` Eigenschaft nicht explizit setzen, wird sie standardmäßig auf `border-box` für jede Schicht gesetzt, als ob wir das Folgende gesetzt hätten:

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

Oder, erweitert in dem Beispiel mit der `mask` Kurzschreibweise:

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

In der `mask` Kurzschreibweise, wenn nur ein [`<geometry-box>`](/de/docs/Web/CSS/Reference/Properties/clip-path#geometry-box) Wert angegeben wird, setzt er sowohl die `mask-origin` als auch die `mask-clip` Eigenschaftswerte. Wenn zwei `<geometry-box>` Werte vorhanden sind, definiert der erste die `mask-origin` und der zweite die `mask-clip`.

Für Maskenschichtbilder, die kein SVG {{svgelement("mask")}} Element referenzieren, definiert die `mask-clip` Eigenschaft, ob der Zeichenbereich der Maske oder der von der Maske betroffene Bereich die Rand-, Polster- oder Inhaltsbox ist. Der bemalte Inhalt des Elements wird auf diesen Bereich beschränkt sein.

Wenn die {{cssxref("mask-image")}} Quelle der Maskenschicht ein `<mask>` ist, hat die `mask-clip` Eigenschaft keine Wirkung. Vielmehr bestimmen die {{svgAttr("x")}}, {{svgAttr("y")}}, {{svgAttr("width")}}, {{svgAttr("height")}}, und {{svgAttr("maskUnits")}} Attribute des `<mask>` Elements den Maskenmalbereich.

## Die `mask-size` Eigenschaft

Die {{cssxref("mask-size")}} Eigenschaft wird zum Dimensionieren von Maskenschichten verwendet. Diese Eigenschaft ist analog zur {{cssxref("background-size")}} Eigenschaft, die gleiche Werte annimmt. Wenn Sie Ihre Masken dimensionieren, denken Sie daran, dass Bereiche des Elements, die nicht von den Maskenbildern abgedeckt werden, verborgen sind.

Es gibt drei Möglichkeiten, eine `mask-size` zu deklarieren:

- das Schlüsselwort `cover` oder `contain`,
- eine Länge, ein Prozentsatz oder das Schlüsselwort `auto`, oder
- zwei Werte, die eine Kombination aus Längen, Prozentsätzen und dem Schlüsselwort `auto` sind.

Das Maskenbild kann in seiner natürlichen Größe belassen, gestreckt oder beschränkt werden, um in den verfügbaren Raum zu passen. Das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Maskenbildes wird standardmäßig beibehalten, aber das Deklarieren von zwei `<length-percentage>` Werten kann das Maskenbild verzerren, wenn das Verhältnis der beiden Werte nicht dasselbe wie das Originalbild ist (`mask-repeat: round` ist das andere Eigenschaft/Wert-Paar, das das Maskenbild verzerren kann).

Wenn die `mask-size` auf `contain` gesetzt wird, wird das Maskenbild die größte Größe haben, die es innerhalb des Masken-Positionierungsbereichs vollständig enthalten kann. In diesem Fall wird das Maskenbild nicht geschnitten, sondern es ist vollständig enthalten.

Wenn sie auf `cover` gesetzt ist, wird das Maskenbild die kleinste Größe haben, die es benötigt, um den gesamten Masken-Positionierungsbereich vollständig abzudecken, wobei die Maske geschnitten wird, wenn das Seitenverhältnis der Maske sich vom Seitenverhältnis des Masken-Positionierungsbereichs unterscheidet.

Mit anderen Worten, bei `cover` und `contain` wird mindestens eine Dimension der Maske in derselben Größe wie die gleiche Dimension des Masken-Positionierungsbereichs sein; das Maskenbild wächst oder schrumpft so, dass entweder die Breite genau die Breite des Masken-Positionierungsbereichs ist oder die Höhe des Maskenbildes gleich der Höhe des Masken-Positionierungsbereichs ist.

Mit `cover`, `contain` und `<percentage>` Werten sind die Größenangaben relativ zur Ursprungsbox. In unserem sternförmigen Masken- und Flaggenbildbeispiel ist das Seitenverhältnis sowohl des Maskenbilds als auch des `<img>` `1:1`, was bedeutet, dass in diesem Fall `cover`, `contain` und `100%` die gleiche Maske mit der gleichen Größe erzeugen werden. Dieses Beispiel demonstriert, wie, wenn `mask-size` auf `cover`, `contain` oder einen `<percentage>` Wert gesetzt ist, die tatsächliche Größe der Maske je nach dem Wert der [`mask-origin` Eigenschaft](#the_mask-origin_property) variieren kann:

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

Dieses Beispiel enthält einen `<percentage>` Wert. Wenn ein `<length-percentage>` Wert angegeben ist, definiert er nur die Maskenbreite, mit der Höhe, die standardmäßig auf `auto` gesetzt wird, was das Seitenverhältnis beibehält. Wenn zwei Werte angegeben sind, definiert der erste die Breite der Maske und der zweite ihre Höhe.

Der Standardwert von `mask-size` ist `auto`, was die Maske in ihrer {{Glossary("intrinsic_size", "intrinsischen Größe")}} darstellt, der Größe, in der die Maske angezeigt würde, wenn kein CSS angewendet würde. Das zugrunde liegende {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Maskenbildes wird beibehalten, wenn Sie einen einzelnen `<length-percentage>` Wert oder zwei Werte im gleichen Verhältnis wie das Seitenverhältnis angeben. Wenn Sie zwei Werte deklarieren, die nicht im gleichen Verhältnis wie das Seitenverhältnis stehen, wird das Maskenbild verzerrt.

Wie bei allen Langformkomponenten von Kurzschreibweiseigenschaften, wenn die {{cssxref("mask")}} Kurzschreibweise gesetzt ist und der Wert der `mask-size` Eigenschaft in keiner Maskenschicht definiert ist, wird der `mask-size` Wert für diese Maskenschichten auf seinen initialen Wert `auto` zurückgesetzt.

Wenn das Bild keine intrinsische Proportion hat, zum Beispiel im Fall eines [CSS-Verlaufs](/de/docs/Web/CSS/Reference/Values/gradient), ist das Standard-`auto` die Gesamtheit des Masken-Positionierungsgebietes, wie es durch [die `mask-origin` Eigenschaft](#the_mask-origin_property) festgelegt wurde.

Fortgesetzt mit dem `masked-element` Beispiel, wenn wir die `mask-size` Eigenschaft nicht explizit setzen, wird sie standardmäßig auf `auto` für jede Schicht gesetzt, als ob wir das Folgende gesetzt hätten:

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

Oder, erweitert in dem Beispiel mit der `mask` Kurzschreibweise, wobei die Komponente `mask-size` nach dem Wert `mask-position`, getrennt durch einen Schrägstrich (/), kommt:

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

Die `mask-repeat` Eigenschaft ist analog zur {{cssxref("background-repeat")}} Eigenschaft und akzeptiert die gleichen [`<repeat-style>`](/de/docs/Web/CSS/Reference/Properties/mask-repeat#values) Werte. Wie bei `background-repeat` wird die erste (und möglicherweise einzige) Wiederholung des Maskenbildes durch [die `*-position` Eigenschaft](#the_mask-position_property) positioniert und durch die [die `*-size` Eigenschaft](#the_mask-size_property) dimensioniert. Die Positionen der wiederholten Hintergrund- oder Maskenbilder basieren auf dieser anfänglichen Bildinstanz.

Fortgeführt mit dem `masked-element` Beispiel, wenn wir die `mask-repeat` Eigenschaft nicht explizit setzen, wird sie standardmäßig auf `repeat` für jede Schicht gesetzt, als ob wir das Folgende gesetzt hätten:

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

Oder, erweitert in dem Beispiel mit der `mask` Kurzschreibweise:

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

Die {{cssxref("mask")}} Kurzschreibweise umfasst die {{cssxref("mask-composite")}} Eigenschaft, die definiert, wie mehrere Masken kombiniert werden, um den endgültigen Maskeneffekt zu erzeugen. Jeder Wert in der kommagetrennten Liste von Werten bestimmt, ob der Browser die zugeordnete Maskenschicht zu den darunterliegenden Maskenschichten `add`, `subtract`, `intersect` oder `exclude` hinzugefügt. Ähnlich wie `mask-mode` und die anderen `mask-*` Eigenschaften gibt es in der {{cssxref("background")}} Kurzschreibweise keine analoge Eigenschaft.

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

In diesem Beispiel fügen wir zwei `mask-image` Werte ein, einschließlich des Sterns und des Verlaufs aus den vorherigen Beispielen als Maskenbilder:

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

Die halbtransparente Sternmaske wird dem gestreiften Maskenbild hinzugefügt, davon abgezogen, damit geschnitten oder davon ausgeschlossen, je nach `mask-composite` Wert.

Die `mask-composite` Eigenschaft ist nur in Fällen mit zwei oder mehr Maskenschichten relevant. Dies heißt "Maskenschichten", nicht "Maskenbilder", da, wenn `none` enthalten ist, die transparente schwarze Maske zusammensetzt wird. Ein `none` Wert kann in Fällen von `subtract` und `intersect` einen tiefgreifenden Effekt auf die Maskierung haben. Zum Beispiel, wenn der `mask-mode` zu `luminance` aufgelöst wird, entfernt das Abziehen einer schwarzen Maske die gesamte Maske (das Element wird verborgen). Ähnlich, wenn `none` die letzte Schicht mit `mask-composite: intersect` aufgesetzt wird, wird das gesamte Element verborgen. Hier fügen wir dem vorherigen Beispiel eine dritte Schicht mit `none` hinzu:

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

Im ersten Beispiel werden die Sterne von den Streifen abgezogen. Im zweiten Beispiel werden die Streifen von den Sternen abgezogen.

Wie alle anderen `mask` Komponenteneigenschaften nimmt `mask-composite` eine kommagetrennte Liste von Werten an. Da die Eigenschaft die Art und Weise beeinflusst, wie Masken kombiniert werden, ist diese Eigenschaft nur für mehrere Maskenschichten relevant und die Anzahl der verwendeten Werte ist um eins weniger als die Anzahl der Maskenschichten.

Das letzte Paar von Masken wird zuerst zusammengesetzt. Das vorherige Maskenbild wird dann mit der vorherigen Zusammensetzung zusammengesetzt.

Fortgeführt mit dem `masked-element` Beispiel, wenn wir die `mask-composite` Eigenschaft nicht explizit setzen, wird sie standardmäßig auf `add` für jede Schicht gesetzt, als ob wir das Folgende gesetzt hätten:

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

- [Einführung in CSS Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [Einführung in CSS Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)
- [CSS Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
