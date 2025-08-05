---
title: CSS-Masken-Eigenschaften
slug: Web/CSS/CSS_masking/Mask_properties
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Das CSS-Masking ist eine Technik, mit der Sie sichtbare Teile eines Elements definieren können, indem Sie eine Maske anwenden, die Teile des Elements selektiv basierend auf den Alphakanälen und optional den Farben der angewendeten Maskenbilder aufdeckt oder verbirgt.

Der [Einführungsleitfaden zum Masking](/de/docs/Web/CSS/CSS_masking) stellt die verschiedenen Arten von Maskenbildern und ihre Modi vor. Der Leitfaden zu [mehreren Masken deklarieren](/de/docs/Web/CSS/CSS_masking/Multiple_masks) behandelt die [Maskenschichten](/de/docs/Web/CSS/CSS_masking/Multiple_masks#understanding_mask_layers) und die {{cssxref("mask")}} Kurzschreibweise, die eine kurze Einführung in die Komponenteneigenschaften der Kurzschreibweise bietet. In diesem Leitfaden untersuchen wir diese Komponenteneigenschaften im Detail und betrachten ihre Interaktion. Wir erklären auch, wie, im Falle einer Deklaration mehrerer Maskenbilder, die [Maskenschichten zusammengesetzt](#the_mask-composite_property) oder kombiniert werden.

CSS-Masken bestehen aus einer oder mehreren Maskenschichten, wobei eine Maskenschicht für jeden Wert in der kommagetrennten Liste der `mask`- oder `mask-image`-Werte erstellt wird, unabhängig davon, ob die Werte Bilder, Maskenquellen oder das Schlüsselwort `none` sind. Jedes {{cssxref("mask-image")}} wird relativ zu einem [Ursprung](#the_mask-origin_property) Box [positioniert](#the_mask-position_property). Die Maskenbilder können [skaliert](#the_mask-size_property), [wiederholt](#the_mask-repeat_property) und [abgeschnitten](#the_mask-clip_property) werden, dann zusammen mit vorherigen Schichten zusammengesetzt werden, um die finale visuelle Maske auf dem Element zu erstellen.

## Die `mask-image`-Eigenschaft

Das Mindestanforderung, um eine Maske zu erstellen, ist eine {{cssxref("mask-image")}} Eigenschaft, die auf einen anderen Wert als `none` gesetzt ist. Das Schlüsselwort `none` innerhalb einer Liste von Maskenquellen erstellt eine Maskenschicht. Wenn jedoch `none` der einzige Wert der `mask-image`-Eigenschaft ist, tritt kein Masking auf.

Das Maskenbild kann ein [CSS-Gradient](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients), ein [importiertes Bild](/de/docs/Web/CSS/CSS_masking/Masking#with_imported_images) (wie ein PNG, SVG usw.) oder ein SVG-{{svgelement("mask")}}-Element sein.

In diesem Beispiel erstellen wir fünf Maskenschichten, einschließlich eines importierten Bildes, zweier Gradienten, einer Schicht ohne Bild und einer SVG `<mask>`-Quelle als Maskenbild.

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
}
```

Da eines der Maskenbilder als `none` angegeben ist, werden nur vier Maskenbilder auf das `.masked-element`-Element angewendet, während fünf Maskenschichten erstellt werden.

### Die Bedeutung von `none`

Die `none`-Schicht hat im Allgemeinen keinen visuellen Effekt (siehe die [`mask-composite`-Eigenschaft](#the_mask-composite_property) dafür, wie sie die angewendete Maske beeinflusst), aber da jeder Wert in einer kommagetrennten Liste von `mask-*` Werten auf eine separate Maskenschicht angewendet wird, dient der `none`-Wert einem wichtigen Zweck, auch wenn er die zusammengesetzte Maske nicht ändert.

Diese vierte Schicht in unserer Fünf-Schichten-Struktur wird mit dem vierten Wert anderer kommagetrennter `mask-*`-Eigenschaftswerte übereinstimmen. Wie bereits erwähnt, wird die Anzahl der Schichten durch die Anzahl der kommagetrennten Werte im Wert der {{cssxref("mask-image")}} Eigenschaft bestimmt, auch wenn ein Wert `none` ist. Jeder `mask-*`-Wert wird in der Reihenfolge mit den `mask-image`-Werten abgeglichen. Wenn die Anzahl der Werte in einer `mask-*`-Eigenschaft von der Anzahl der Maskenschichten abweicht, werden alle übermäßigen Werte ignoriert, oder wenn die Eigenschaft weniger Werte hat, werden die Werte wiederholt.

Wenn eine `mask-*`-Eigenschaft einen einzelnen Wert hat, gilt dieser Wert für alle Schichten. Wenn wir fünf Werte haben, wird der vierte Wert auf die `none`-Schicht angewendet, der letzte Wert wird auf die `<mask>`-Quellschicht angewendet. Wenn es zwei kommagetrennte Werte gibt, wird der erste Wert nur auf alle ungeraden Schichten angewendet, einschließlich dieser `<mask>`-Quellschicht. Zum Beispiel kann jede `mask-*`-Eigenschaft eine unterschiedliche Anzahl von Werten haben:

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

In diesem Fall wird jede ungerade Schicht entlang der x-Achse wiederholt, während jede gerade Schicht entlang der y-Achse wiederholt wird. Die ersten und vierten Schichtbilder werden zentriert, während die zweiten und fünften in der oberen linken Ecke positioniert werden. Das `none` bedeutet, dass das fünfte Schichtbild `#svg-mask` entlang der x-Achse wiederholt wird, beginnend in der oberen linken Ecke.

Erfahren Sie mehr über [Maskenschichten und das Schlüsselwort `none`](/de/docs/Web/CSS/CSS_masking/Multiple_masks#mask_layers_and_the_none_keyword).

## Die `mask-mode`-Eigenschaft

Die {{cssxref("mask-mode")}}-Eigenschaft kann verwendet werden, um den Modus jeder Maskenschicht auf `alpha` oder `luminance` festzulegen oder es standardmäßig auf `match-source` zu setzen, was der Standardwert ist. Während die meisten `mask-*`-Eigenschaften eine analoge `background-*`-Eigenschaft haben (`mask-image` ist analog zur {{cssxref("background-image")}}-Eigenschaft, zum Beispiel), haben `mask-mode` und [`mask-composite`](#the_mask-composite_property) keine analoge {{cssxref("background")}}-Eigenschaft.

### Maskenarten: `alpha` und `luminance`

Jede Maske ist entweder eine `alpha`- oder eine `luminance`-Maske.

Bei `alpha`-Masken ist die Alpha-Transparenz jedes Masken-Pixels wichtig. Wo immer die Maske undurchsichtig ist, werden die entsprechenden Teile des Elements sichtbar sein. Wo die Maske transparent ist, werden die entsprechenden Teile des Elements verborgen sein. Wo die Maske halb-undurchsichtig ist, wird das Element ebenso halb-undurchsichtig sein. Die Farbe der Maske spielt keine Rolle, nur die Alpha-Transparenz der Farben.

Bei `luminance`-Masken bestimmen sowohl die [Helligkeit der Farben der Maske](/de/docs/Web/CSS/CSS_masking/Masking#alpha_transparency_versus_luminance) als auch der Alphakanal die Undurchsichtigkeit der maskierten Bereiche.

> [!NOTE]
> Alle folgenden Beispiele verwenden das folgende Bild als `background-image` auf einem Element, auf das Masken angewendet werden:
>
> <img src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg" alt="Pride flag" />

Dieses Beispiel zeigt den Unterschied zwischen `alpha`- und `luminance`-Masken. Die Masken sind gleich, aber in der `alpha`-Maske zählt nur die Alpha-Transparenz der Gradientfarben der Maske. In dem `luminance`-Beispiel zählen R, G, B und A alle.

Zwei Container enthalten Bilder, während der letzte leer ist, aber verwendet wird, um den Gradienten anzuzeigen, den wir als unser `mask-image` verwenden werden.

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

Wir deklarieren einen [`repeating-linear-gradient`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) mit roten, transparenten und halbtransparenten diagonalen roten Streifen. Dieser Gradient wird als unsere Maske und für den letzten Container als Hintergrundbild verwendet:

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

Wir setzen für jedes Bild unterschiedliche Werte für die `mask-mode`-Eigenschaft:

```css live-sample___mode
.alpha img {
  mask-mode: alpha;
}

.luminance img {
  mask-mode: luminance;
}
```

{{EmbedLiveSample("mode", "", "270px")}}

Im `alpha`-Fall zählen nur die Transparenz der Farben des Gradienten. Wo der Gradient undurchsichtig rot ist, ist das Bild undurchsichtig. Wo der Gradient transparent ist, ist das Bild verborgen. Wo der Gradient 50% undurchsichtig ist, ist das Bild 50% undurchsichtig. Im `luminance`-Fall zählt die Helligkeit der Farben! Sehen Sie sich [Alpha-Transparenz versus Luminance](/de/docs/Web/CSS/CSS_masking/Masking#alpha_transparency_versus_luminance) an, um mehr über die Gleichung zu erfahren, die die R, G, B und A Kanäle der Farbe verwendet, um die Opazität der Maske zu bestimmen.

### Der Standardwert `mask-mode`: `match-source`

Der Standardwert der `mask-mode`-Eigenschaft ist `match-source`. Dieser Wert setzt den `mask-mode`, um den Modustyp der Maske zu entsprechen. Der `match-source`-Wert wird für jede Maske auf `alpha` aufgelöst, mit Ausnahme von Masken, bei denen die Maskenquelle ein SVG-{{svgelement("mask")}}-Element ist.

Wenn ein SVG-`<mask>`-Element als Maskenquelle verwendet wird, wird der `match-source`-Wert auf den Wert der {{cssxref("mask-type")}}-Eigenschaft des `<mask>`-Elements aufgelöst. Wenn das `<mask>`-Element (nicht das "maskierte Element") die CSS-`mask-type`-Eigenschaft nicht definiert hat, standardmäßig dieser Wert auf den Wert des SVG-{{svgAttr("mask-type")}}-Attributs, falls vorhanden. Wenn dieses auch weggelassen wird, wird der `match-source`-Wert auf `luminance` aufgelöst.

Im Beispiel `masked-element`, wenn wir die `mask-mode`-Eigenschaft nicht explizit setzen, wird sie standardmäßig auf `match-source` für jede Schicht gesetzt, als ob wir folgendes gesetzt hätten:

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

Die erste Maskenschicht, `url("alphaImage.png")`, verweist auf ein Bild. Da dies kein `<mask>`-Element innerhalb eines `<svg>` ist, wird `mask-mode` auf `alpha` aufgelöst, wobei die undurchsichtigen Teile dieses Bilds die entsprechenden Teile des Elements sichtbar machen, während die transparenten oder halbdurchsichtigen Teile unsichtbar oder teilweise sichtbar sind.

Der `linear-gradient(to right, black, transparent)` ist die zweite Maskenschicht und `radial-gradient(circle, white 50%, transparent 75%)` ist die dritte. Auch hier sind dies keine `<mask>`-Elemente, daher wird der `match-source`-Wert auf `alpha` aufgelöst. Der Maskierungseffekt dieser Schichten wird standardmäßig durch die [Undurchsichtigkeit des Gradientenmasken](/de/docs/Web/CSS/CSS_masking/Masking#opaqueness_versus_transparency) bestimmt.

Die vierte Maskenschicht hat `none` deklariert, was bedeutet, dass die Maske für diese Schicht transparent schwarz ist. Die `.masked-element`-Klasse setzt `mask-mode: match-source;`. Hätte `mask-mode` stattdessen eine kommagetrennte Liste von fünf unterschiedlichen Werten, würde der vierte Wert auf diese `none`-Schicht angewendet, sodass der fünfte Wert auf die fünfte Schicht angewendet werden kann.

Die fünfte Maskenschicht besteht aus einem SVG-{{svgelement("mask")}}-Element, das `svg-mask` als sein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) hat. Während der Standard-Maskenmodus der anderen Schichten `alpha` ist, ist der Standard-Maskentyp der SVG-`<mask>`-Elemente der `mask-type`-Wert oder, wenn nicht gesetzt, das `mask-type`-Attribut. Wenn dies auch nicht definiert ist, wird der Wert standardmäßig auf `luminance` gesetzt. Mit anderen Worten, der Maskierungseffekt des `<mask>` wird sowohl durch die Helligkeit als auch die Transparenz der Farben des `<mask>`-Elements bestimmt.

Wenn wir die `mask-mode`-Eigenschaft überhaupt nicht deklarieren und sie standardmäßig `match-source` für jede Maskenschicht lassen, würde das Ergebnis in diesem `.masked-element`-Fall aufgelöst werden, als ob:

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

Analog zur {{cssxref("background-position")}}-Eigenschaft legt die {{cssxref("mask-position")}}-Eigenschaft die anfängliche Position des Maskenbildes relativ zur Ursprungsbox der Maskenschicht fest, definiert durch [die `mask-origin`-Eigenschaft](#the_mask-origin_property). Die Syntax folgt der [`background-position`-`<position>`-Syntax](/de/docs/Web/CSS/background-position#position), wobei der Wert ein, zwei oder vier {{cssxref("&lt;position&gt;")}} Werte sind, die einen bis zwei relative oder absolute Positionsversätze definieren.

### Ein-Wert-Syntax

Wenn nur ein Schlüsselwortwert angegeben ist, gibt dieser Wert den Maskenursprungsrand an, gegen den die Maske platziert wird, wobei die andere Dimension `center` ist.

Wenn nur ein {{cssxref("&lt;length-percentage&gt;")}} Wert angegeben ist, spezifiziert dies die X-Koordinate relativ zum linken Rand des Maskenursprungs, wobei die Y-Koordinate auf `50%` gesetzt wird.

Wenn zwei Schlüsselwortwerte angegeben werden, spielt die Reihenfolge der Werte keine Rolle, aber der Wert kann keine zwei vertikalen oder horizontalen Achsenwerte enthalten; `left right` und `top bottom` sind beide ungültig.

### Zwei-Wert-Syntax

Wenn zwei Werte vorhanden sind, einschließlich eines Schlüsselwortes und eines `<length-percentage>`-Werts, spielt die Reihenfolge nur eine Rolle, wenn das Schlüsselwort `center` ist:

- Wenn das Schlüsselwort `left` oder `right` ist, definiert es die X-Koordinate relativ zum linken Rand, und der Wert definiert die Y-Koordinate relativ zum oberen Rand.
- Ähnlich definiert ein `top`- oder `bottom`-Schlüsselwort die Y-Koordinate, indem das Element am oberen oder unteren Rand positioniert wird, wobei der andere Wert die X-Koordinate relativ zum linken Rand der Maskenursprungsbox definiert.
- Wenn ein Wert das Schlüsselwort `center` ist und der andere ein `<length-percentage>`, definiert der erste Wert die horizontale Position und der zweite Wert die vertikale Position.

Wenn zwei Werte vorhanden sind und beide `<length-percentage>`-Werte sind, spielt die Reihenfolge erneut eine Rolle; der erste Wert definiert die horizontale Positionierung als Versatz von der linken Kante des Maskenpositionierungsbereichs, während der zweite Wert die vertikale Position als Versatz von der oberen Kante des Maskenpositionierungsbereichs definiert.

### Vier-Wert-Syntax

Maskenpositionen können auch relativ zu anderen Ecken als der oberen linken sein. Die Vier-Wert-Syntax ermöglicht das Versetzen der Maske von jeder Ecke. Der Wert umfasst zwei {{cssxref("length-percentage")}} Versätze, jeder gefolgt von der Ursprungsseite für diesen Versatz. Ob Sie das horizontale oder vertikale Paar zuerst erklären, spielt keine Rolle, aber Sie müssen das Ursprungsseiten-Schlüsselwort (`left`, `right`, `top`, `bottom`, `x-start`, `x-end`, `y-start`, `y-end`, `block-start`, `block-end`, `inline-start`, oder `inline-end`) vor dem Versatz `<length-percentage>` in jedem Paar angeben, und die zwei Ursprungseiten können nicht von derselben Achse sein.

In der Zwei-Versatz-Syntax sind die Ursprungseiten `top` und `left`, in dieser Reihenfolge. Zum Beispiel ist `mask-position: 10px 20px` das Äquivalent zu `mask-position: left 10px top 20px`. Beim Offset von oben und links sind die Offset-Seiten nicht erforderlich, aber die Reihenfolge spielt eine Rolle. Mit der Vier-Wert-Syntax können Sie `mask-position` verwenden, um das Maskenbild von jeder Kantenkombination zu versetzen, wie `left 10px bottom 20px`, und die Reihenfolge der Seiten spielt keine Rolle, da die Offset-Kante von dem Schlüsselwort vorher festgelegt wird, anstatt durch die Deklarationsreihenfolge.

### Prozentwerte

Beim Versetzen mit Prozentwerten wird die Dimension der Maske von der Dimension des Elements abgezogen, genau wie bei [Prozentoffests mit `background-position`](/de/docs/Web/CSS/background-position#regarding_percentages).

### Positionierung wiederholender Maskenbilder

Die `mask-position`-Eigenschaft definiert die anfängliche Position des Maskenbildes. Durch "anfängliche Position", falls die [Maske wiederholt wird](#the_mask-repeat_property), platziert der Browser das erste Maskenbild an der durch die `mask-position`-Eigenschaft definierten Position und definiert damit die Platzierung der Maskwiederholungen.

In diesem Beispiel setzen wir die Position des ersten Bildes auf `bottom right`, was bedeutet, dass die erste Maske am unteren rechten Rand der Maskenursprungsbox platziert wird. Da Maskenbilder standardmäßig wiederholt werden, werden die wiederholten Masken gegen die oberen und linken Seiten der zuerst platzierten Maske positioniert.

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

Die `mask-position` definiert die Platzierung des ersten Maskenbildes. Dieses Demo zeigt, wo das erste Bild platziert wird:

```css hidden live-sample___position_no-repeat
img {
  mask-repeat: no-repeat;
}
```

{{EmbedLiveSample("position_no-repeat", "", "260px")}}

Da der Standardwert für die [`mask-repeat`-Eigenschaft](#the_mask-repeat_property) `repeat` ist, werden die Bilder entlang der X- und Y-Achsen wiederholt, basierend auf der Position dieser ersten Maske:

{{EmbedLiveSample("position", "", "260px")}}

Das Zwei-Wert-Beispiel definiert die oberen und linken Offsets der Originalmaske. Das Vier-Wert-Beispiel kombiniert die beiden vorherigen Beispiele, wobei die erste Maske mit denselben Offsets wie das zweite Bild, aber von denselben Kanten wie im ersten Bild gezeigt, positioniert wird.

In dem ersten Bild wird der erste zu platzierende Stern der am unteren rechten, mit den wiederholten Sternen oben und links. Aufgrund dieser Positionierung wird der ursprüngliche Stern nicht abgeschnitten, aber die obersten und linken Sterne werden abgeschnitten.

Wenn wir die `mask-position`-Eigenschaft nicht explizit setzen, wird sie für jede Schicht standardmäßig auf `0% 0%` gesetzt, wobei die obere linke Ecke der Maske an die obere linke Ecke der Maskenursprungsbox grenzt. Im Beispiel `masked-element` wäre es, als ob:

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: match-source;
  mask-position: 0% 0%;
}
```

oder, erweitert auf das Beispiel unter Verwendung der `mask`-Kurzschreibweise:

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

Wenn ein Element eine Polsterung, eine Umrandung oder beides hat, definiert die {{cssxref("mask-origin")}}-Eigenschaft, welcher dieser Boxkantenwerte als Maskenursprungsbox, oder das _Maskenpositionierungsbereich_, fungiert, innerhalb dessen ein Maskenbild für diese Schicht positioniert wird. Die `mask-origin`-Eigenschaft ist analog zur {{cssxref("background-origin")}}-Eigenschaft, jedoch mit einem anderen Anfangswert und SVG-spezifischen Werten.

HTML-Elemente können Masken innerhalb ihrer Inhaltsrahmenbox, Polsterungsbox oder Inhaltsbox enthalten. Zum Beispiel, wenn die `mask-position` `top left` ist, ist das relativ zur äußeren Grenze der Umrandung, der äußeren Grenze der Polsterung oder der äußeren Grenze des Inhalts?

Im [`mask-position`](#the_mask-position_property) Maskierung Beispiel wurde die definierte Position relativ zur Rahmenbox (das Standardverhalten) gesetzt, obwohl es erwähnenswert ist, dass das `<img>` weder eine Umrandung noch eine Polsterung hatte, daher wären die Ursprünge der Inhaltsbox, Polsterungsbox und Rahmenbox in diesem Fall gleich.

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

In diesem Beispiel platziert die `mask-position` die ursprüngliche Maske in der oberen linken Ecke des `<img>`-Elements, das eine große Umrandung und Polsterung hat, mit einer grünen Hintergrundfarbe, um das Sternmasking im Polsterungsbereich sichtbar zu machen.

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

Ändern Sie den Wert der `mask-origin`-Eigenschaft, indem Sie die ausgewählte Optionsschaltfläche ändern und die Position der oberen linken Sternmaske beobachten, wenn Sie dies tun.

{{EmbedLiveSample("origin", "", "350px")}}

Der Standardwert ist `border-box`. Mit diesem Wert wird die anfängliche Maske an der oberen linken Kante der Umrandung platziert und nicht abgeschnitten. Wenn die anfängliche Maske an den äußeren oder inneren Rand der Polsterung platziert wird, gibt es Platz darüber und links; diese wiederholten Masken werden abgeschnitten.

Im Beispiel `masked-element`, wenn wir die `mask-origin`-Eigenschaft nicht explizit setzen, wird sie für jede Schicht standardmäßig auf `border-box` gesetzt, als ob:

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

oder, erweitert auf das Beispiel unter Verwendung der `mask`-Kurzschreibweise:

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

Für SVG-Elemente, die nicht die zugehörigen CSS-Layout-Boxen haben, kann eine Maske innerhalb des Füllbereichs, Pinselstrichbereichs oder Ansichtsbereichs des SVG-Elements enthalten sein.

## Die `mask-clip`-Eigenschaft

Die {{cssxref("mask-clip")}}-Eigenschaft bestimmt den Bereich des Elements, der von einer Maske beeinflusst wird, indem sie das Element effektiv an der definierten Boxkante abschneidet. Sie ist analog zur {{cssxref("background-clip")}}-Eigenschaft, jedoch mit einigen unterschiedlichen Werten.

Da die `mask-clip`-Eigenschaft alle `mask-origin`-Werte akzeptiert und beide den gleichen Standardwert `border-box` haben, scheinen die beiden Eigenschaften ähnlich, aber sie dienen sehr unterschiedlichen Zwecken. Während `mask-origin` bestimmt, wo ein Maskenbild positioniert wird, sorgt die `mask-clip`-Eigenschaft dafür, dass das Originalelement seinen Inhalt an der angegebenen Box abschneidet. Es ist wichtig, beide zu verstehen: Wenn das `mask-origin` dazu führt, dass die `mask-position` das Maskenbild außerhalb des Clipbereichs platziert, wird die Maske abgeschnitten.

Die `mask-clip`-Eigenschaft akzeptiert alle `mask-origin`-Werte sowie ihren eigenen `no-clip`-Wert. Der `no-clip`-Wert setzt den gemalten Inhalt so, dass er nicht abgeschnitten wird. Sie können das Maskenbild trotzdem abschneiden, indem Sie es mit `mask-position`-Werten, die kleiner als Null sind oder sich zu mehr als 100% auflösen, außerhalb des Randinhaltsbereichs positionieren.

Das Setzen von `mask-clip` und `mask-origin` auf unterschiedliche Werte kann dazu führen, dass das Maskenschichtbild abgeschnitten wird. Zum Beispiel, wenn ein Element mit einer Umrandung und Polsterung `mask-clip` auf `content-box` und `mask-origin` auf `border-box` gesetzt hat und die `mask-position` auf den `top left`-Rand gesetzt ist, wird das Maskenschichtbild am oberen linken Rand abgeschnitten.

Das nächste Beispiel fügt die Optionen zum Abscneiden zu den vorherigen hinzu, um die verschiedenen nicht-SVG `mask-clip`-Werte zu demonstrieren und zu zeigen, wie sie die unterschiedlichen `mask-origin`-Werte beeinflussen.

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

Die erste Maske wird am oberen linken Rand des Maskenursprungscontainers platziert und dann wiederholt. Wenn die Ursprungsbox die `border-box` ist und die Abschneidregion die `content-box`, werden die oberen und linken Bereiche des Maskenursprungscontainers abgeschnitten. Im Allgemeinen möchten Sie, dass `mask-clip` dasselbe ist wie `mask-origin`.

Im Beispiel `masked-element`, wenn wir die `mask-clip`-Eigenschaft nicht explizit setzen, wird sie für jede Schicht standardmäßig auf `border-box` gesetzt, als ob:

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

oder, erweitert auf das Beispiel unter Verwendung der `mask`-Kurzschreibweise:

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

In der `mask`-Kurzschreibweise, wenn nur ein [`<geometry-box>`](/de/docs/Web/CSS/clip-path#geometry-box) Wert angegeben ist, setzt es sowohl die `mask-origin` als auch die `mask-clip` Eigenschaftswerte. Wenn zwei `<geometry-box>` Werte vorhanden sind, definiert der erste die `mask-origin` und der zweite die `mask-clip`.

Für Maskenschichtbilder, die nicht auf ein SVG-{{svgelement("mask")}}-Element verweisen, definiert die `mask-clip`-Eigenschaft, ob das Maskenmalbereich, oder der Bereich, der von der Maske betroffen ist, die Umrandung, Polsterung oder Inhaltsbox ist. Der gemalte Inhalt des Elements wird auf diesen Bereich beschränkt.

Wenn die Maskenschicht-{{cssxref("mask-image")}}-Quelle eine `<mask>` ist, hat die `mask-clip`-Eigenschaft keinen Effekt. Stattdessen bestimmen die `<mask>`-Element-{{svgAttr("x")}}, {{svgAttr("y")}}, {{svgAttr("width")}}, {{svgAttr("height")}}, und {{svgAttr("maskUnits")}} Attribute den Maskenmalbereich.

## Die `mask-size`-Eigenschaft

Die {{cssxref("mask-size")}}-Eigenschaft wird verwendet, um Maskenschichten zu skaliert. Diese Eigenschaft ist analog zur {{cssxref("background-size")}}-Eigenschaft und nimmt die gleichen Werte an. Beim Skalieren Ihrer Masken denken Sie daran, dass Bereiche des Elements, die nicht von den Maskenbildern abgedeckt sind, verborgen sind.

Es gibt drei Möglichkeiten, `mask-size` zu deklarieren:

- das `cover` oder `contain` Schlüsselwort,
- eine Länge, Prozent oder das Schlüsselwort `auto`, oder
- zwei Werte, die eine Kombination aus Längen, Prozenten und dem Schlüsselwort `auto` sind.

Das Maskenbild kann auf seine natürliche Größe belassen, gestreckt oder eingeschränkt werden, um in den verfügbaren Raum zu passen. Das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Maskenbildes wird standardmäßig beibehalten, aber wenn Sie zwei `<length-percentage>` Werte deklarieren, kann das Maskenbild verzerrt werden, wenn das Verhältnis der beiden Werte nicht das gleiche wie das Originalbild ist (`mask-repeat: round` ist das andere Eigenschaft/Wert-Paar, das das Maskenbild verzerren kann).

Wenn die `mask-size` auf `contain` gesetzt ist, wird das Maskenbild die größte Größe haben, die es haben kann, während es vollständig innerhalb des Maskenpositionierungsbereichs enthalten bleibt. In diesem Fall wird das Maskenbild nicht abgeschnitten, sondern vollständig enthalten.

Wenn auf `cover` gesetzt, wird das Maskenbild die kleinste Größe haben, die es haben kann, um den gesamten Maskenpositionierungsbereich vollständig zu bedecken, wobei die Maske abgeschnitten wird, wenn das Seitenverhältnis der Maske von dem Verhältnis des Maskenpositionierungsbereichs abweicht.

Mit anderen Worten, Bei `cover` und `contain`, wird mindestens eine Dimension der Maske dieselbe Größe wie die jeweilige Dimension des Maskenpositionierungsbereich haben; das Maskenbild wächst oder schrumpft so, dass entweder die Breite derselben Breite wie der Maskenpositionierungsbereich ist oder die Höhe des Maskenbildes der Höhe des Maskenpositionierungsbereichs entspricht.

Mit `cover`, `contain` und `<percentage>` Werten ist die Größe relativ zur Ursprungsbox. In unserem Stern-Maske-und Flaggenbild-Beispiel ist das Seitenverhältnis sowohl des Maskenbildes als auch des `<img>` 1:1, was bedeutet, dass in diesem Fall `cover`, `contain` und `100%` alle dieselbe Maske erzeugen. Dieses Beispiel zeigt, wie, wenn `mask-size` auf `cover` oder `contain` gesetzt wird oder ein `<percentage>`-Wert, die tatsächliche Größe der Maske sich je nach Wert der [`mask-origin` Eigenschaft](#the_mask-origin_property) unterscheiden kann:

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

Dieses Beispiel enthielt einen `<percentage>`-Wert. Wenn ein `<length-percentage>`-Wert angegeben ist, definiert er nur die Maskenbreite, während die Höhe auf `auto` gesetzt wird, was das Seitenverhältnis beibehält. Wenn zwei Werte angegeben sind, definiert der erste die Maskenbreite und der zweite ihre Höhe.

Der Standardwert von `mask-size` ist `auto`, was die Maske in ihrer {{Glossary("intrinsic_size", "intrinsischen Größe")}} rendert, der Größe, in der die Maske angezeigt würde, wenn keine CSS angewendet wäre. Das zugrunde liegende {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Maskenbildes wird beibehalten, wenn Sie einen einzelnen `<length-percentage>` Wert oder zwei Werte im gleichen Verhältnis wie das Seitenverhältnis festlegen. Wenn Sie zwei Werte angeben, die nicht im gleichen Verhältnis wie das Seitenverhältnis stehen, wird das Maskenbild verzerrt.

Wie bei allen Komponenten des Kurznotationseigenschaften, wenn die {{cssxref("mask")}} Kurznotateigenschaft gesetzt ist und der Wert der `mask-size`-Eigenschaft innerhalb einer Maskenschicht nicht definiert ist, wird der `mask-size`-Wert auf seinen Anfangswert von `auto` für diese Maskenschichten zurückgesetzt.

Wenn das Bild keine intrinsische Proportion hat, zum Beispiel im Fall eines [CSS-Gradienten](/de/docs/Web/CSS/gradient), ist das Standard-`auto` die Gesamtheit des Maskenpositionierungsbereichs, wie durch [die `mask-origin`-Eigenschaft](#the_mask-origin_property) festgelegt.

Im `masked-element` Beispiel, wenn wir die `mask-size`-Eigenschaft nicht explizit setzen, wird sie für jede Schicht standardmäßig auf `auto` gesetzt, als ob wir das folgende gesetzt hätten:

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

oder, erweitert auf das Beispiel unter Verwendung der `mask` Kurznotateigenschaft, wobei die `mask-size` Komponente nach dem `mask-position` Wert kommt, getrennt durch ein Vorwärtsschrägstrich (/):

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

Die {{cssxref("mask-repeat")}}-Eigenschaft definiert, wie Maskenbilder wiederholt oder gekachelt werden, nachdem das anfängliche Maskenbild skaliert und positioniert wurde. Die `mask-repeat`-Eigenschaft definiert, ob und wie dieses Maskenbild entlang der horizontalen und vertikalen Achsen wiederholt wird. In den meisten der vorherigen Beispiele haben Sie wahrscheinlich bemerkt, dass die Sternmaske entlang der X- und Y-Achsen wiederholt wurde. Dies liegt daran, dass `repeat` der Standardwert ist.

Die `mask-repeat`-Eigenschaft ist analog zur {{cssxref("background-repeat")}}-Eigenschaft, die gleichen [`<repeat-style>`](/de/docs/Web/CSS/mask-repeat#values) Werte akzeptiert. Wie im Fall von `background-repeat`, wird die erste (und möglicherweise einzige) Maskenbildwiederholung durch [die `*-position`-Eigenschaft](#the_mask-position_property) positioniert und durch [die `*-size`-Eigenschaft](#the_mask-size_property) skaliert. Die Positionen der wiederholten Hintergrund- oder Maskenbilder basieren auf diesem ursprünglichen Bildinstanz.

Im `masked-element` Beispiel, wenn wir die `mask-repeat`-Eigenschaft nicht explizit setzen, wird sie für jede Schicht standardmäßig auf `repeat` gesetzt, als ob wir das folgende gesetzt hätten:

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

oder, erweitert auf das Beispiel unter Verwendung der `mask` Kurznotateigenschaft:

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

Die {{cssxref("mask")}} Kurznotateigenschaft beinhaltet die {{cssxref("mask-composite")}} Eigenschaft, die definiert, wie mehrere Masken kombiniert werden, um den finalen Maskeneffekt zu erzeugen. Jeder Wert in der kommagetrennten Liste der Werte bestimmt, ob der Browser die zugeordnete Maskenschicht aus den darüber liegenden Maskenschichten `add`, `subtract`, `intersect`, oder `exclude` soll. Ähnlich wie `mask-mode`, und die anderen `mask-*` Eigenschaften, gibt es keine Eigenschaft in der {{cssxref("background")}} Kurznotateigenschaft, die analog ist.

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

In diesem Beispiel verwenden wir zwei `mask-image`-Werte, einschließlich des Sterns und des Gradienten aus den vorherigen Beispielen als Maskenbilder:

```css live-sample___composite
img {
  mask-image:
    repeating-linear-gradient(
      to bottom right,
      #f00 0 20px,
      #f005 20px 40px,
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

Die halbtransparente Sternmaske wird je nach `mask-composite`-Wert zum gestreiften Maskenbild hinzugefügt, von diesem abgezogen, damit geschnitten oder ausgeschlossen.

Die `mask-composite`-Eigenschaft ist nur in Fällen mit zwei oder mehr Maskenschichten relevant. Dies liest sich "Maskenschichten", nicht "Maskenbilder", weil, wenn `none` enthalten ist, die transparente schwarze Maske zusammengesetzt wird. Ein `none`-Wert kann einen enormen Einfluss auf das Masking im Falle von `subtract` und `intersect` haben. Wenn der `mask-mode` zum Beispiel auf `luminance` aufgelöst wird, entfernt das Subtrahieren einer schwarzen Maske die gesamte Maske (das Element wird verborgen). Wenn `none` die letzte Schicht mit `mask-composite: intersect` für diese Schicht ist, wird das gesamte Element verborgen. Hier fügen wir eine dritte Schicht hinzu, mit `none`, zu dem vorherigen Beispiel:

```css live-sample___composite3
img {
  mask-image:
    url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg"),
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
      #f00 0 20px,
      #f005 20px 40px,
      transparent 40px 60px
    ),
    url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg");
}
.starFirst {
  mask-image:
    url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg"),
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

Wie alle anderen `mask`-Komponenteneigenschaften, nimmt `mask-composite` eine kommagetrennte Liste von Werten an. Da die Eigenschaft bestimmt, wie Masken kombiniert werden, ist diese Eigenschaft nur bei mehreren Maskenschichten relevant und die Anzahl der verwendeten Werte ist eins weniger als die Anzahl der Maskenschichten.

Das letzte Maskenpaar wird zuerst zusammengesetzt. Dann wird das vorhergehende Maskenbild mit der vorherigen Komposition zusammengesetzt.

Im `masked-element` Beispiel, wenn wir die `mask-composite`-Eigenschaft nicht explizit setzen, wird sie für jede Schicht standardmäßig auf `add` gesetzt, als ob wir das folgende gesetzt hätten:

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

In diesem Fall wird das `<mask>`-Element mit der `none`-Schicht zusammengesetzt. Dann wird der radiale Gradient mit dem Ergebnis der vorherigen Komposition zusammengesetzt und so weiter.

Wie wir bei allen anderen Komponenteneigenschaften gesehen haben, könnten wir die `mask` Kurznotateigenschaft verwenden:

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
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking) Modul
