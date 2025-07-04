---
title: CSS-Masken-Eigenschaften
slug: Web/CSS/CSS_masking/Mask_properties
l10n:
  sourceCommit: 288f873b40bdf6cdcd366dd09e1824da2bc83ebf
---

{{CSSRef}}

CSS-Maskierung ist eine Technik, die es Ihnen ermöglicht, sichtbare Bereiche eines Elements zu definieren, indem Sie eine Maske anwenden, die Teile des Elements basierend auf den Alphakanälen und optional den Farben der angewendeten Maskenbilder selektiv sichtbar oder unsichtbar macht.

Der [einführende Leitfaden zur Maskierung](/de/docs/Web/CSS/CSS_masking) stellt die verschiedenen Arten von Maskenbildern und ihre Modi vor. Der Leitfaden zur [Deklaration mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks) behandelt die [Maskenschichten](/de/docs/Web/CSS/CSS_masking/Multiple_masks#understanding_mask_layers) und die Kurzformeigenschaft {{cssxref("mask")}}, die eine kurze Einführung in die Komponenten-Eigenschaften der Kurzform gibt. In diesem Leitfaden untersuchen wir diese Komponenten-Eigenschaften ausführlicher und betrachten, wie sie interagieren. Außerdem erklären wir, wie die [Maskenschichten zusammengesetzt](#the_mask-composite_property) oder kombiniert werden müssen, wenn mehrere Maskenbilder deklariert sind.

CSS-Masken bestehen aus einer oder mehreren Maskenschichten, wobei für jeden Wert in der durch Kommas getrennten Liste der `mask`- oder `mask-image`-Werte eine Maskenschicht erstellt wird, unabhängig davon, ob die Werte Bilder, Maskenquellen oder das Schlüsselwort `none` sind. Jedes {{cssxref("mask-image")}} wird relativ zu einem [Ursprung](#the_mask-origin_property) positioniert. Die Maskenbilder können [dimensioniert](#the_mask-size_property), [wiederholt](#the_mask-repeat_property) und [beschnitten](#the_mask-clip_property) werden und dann mit vorherigen Schichten zusammengefügt werden, um die endgültige visuelle Maske auf dem Element zu erstellen.

## Die Eigenschaft `mask-image`

Die minimale Anforderung, um eine Maske zu erstellen, ist eine {{cssxref("mask-image")}}-Eigenschaft, die auf einen anderen Wert als `none` gesetzt ist.
Das Schlüsselwort `none` innerhalb einer Liste von Maskenquellen erstellt eine Maskenschicht. Ist jedoch `none` der einzige Wert der `mask-image`-Eigenschaft, erfolgt keine Maskierung.

Das Maskenbild kann ein [CSS-Verlauf](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients), ein [importiertes Bild](/de/docs/Web/CSS/CSS_masking/Masking#with_impoorted_images) (wie ein PNG, SVG, etc.) oder ein SVG-{{svgelement("mask")}}-Element sein.

In diesem Beispiel erstellen wir fünf Maskenschichten, einschließlich eines importierten Bildes, zweier Verläufe, einer Schicht ohne Bild und einer SVG-`<mask>`-Quelle als Maskenbild.

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
}
```

Da eines der Maskenbilder als `none` angegeben ist, werden nur vier Maskenbilder auf das `.masked-element`-Element angewendet, während fünf Maskenschichten erstellt werden.

### Die Bedeutung von `none`

Die `none`-Schicht hat allgemein keinen visuellen Effekt (siehe die [`mask-composite`-Eigenschaft](#the-mask-composite-property), um zu erfahren, wie sie sich auf die angewendete Maske auswirkt), aber da jeder Wert in einer durch Kommas getrennten Liste der `mask-*`-Werte auf eine separate Maskenschicht angewendet wird, erfüllt der `none`-Wert einen wichtigen Zweck, selbst wenn er die zusammengesetzte Maske nicht verändert.

Diese vierte Schicht in unserer fünf-Schicht-Struktur wird mit dem vierten Wert anderer, durch Kommas getrennter `mask-*`-Eigenschaftswerte übereinstimmen. Wie bereits erwähnt, wird die Anzahl der Schichten durch die Anzahl der durch Kommas getrennten Werte im Wert der {{cssxref("mask-image")}}-Eigenschaft bestimmt, selbst wenn ein Wert `none` ist. Jeder `mask-*`-Wert wird in der Reihenfolge mit den `mask-image`-Werten abgeglichen. Wenn die Anzahl der Werte in einer `mask-*`-Eigenschaft von der Anzahl der Maskenschichten abweicht, werden überschüssige Werte ignoriert oder, wenn die Eigenschaft weniger Werte als Maskenschichten hat, werden die Werte wiederholt.

Wenn eine `mask-*`-Eigenschaft einen einzigen Wert hat, wird dieser Wert auf alle Schichten angewendet. Wenn wir fünf Werte haben, wird der vierte Wert auf die `none`-Schicht angewendet, wobei der letzte Wert auf die `<mask>`-Quellenschicht angewendet wird. Wenn es zwei durch Kommas getrennte Werte gibt, wird der erste Wert nur auf alle ungeraden Schichten angewendet, einschließlich dieser `<mask>` Quellenschicht. Zum Beispiel kann jede `mask-*`-Eigenschaft eine unterschiedliche Anzahl von Werten haben:

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

In diesem Fall wird jede ungerade Schicht entlang der x-Achse wiederholt, während jede gerade Schicht entlang der y-Achse wiederholt wird. Die Bilder der ersten und vierten Schicht werden zentriert, während die der zweiten und fünften in der oberen linken Ecke platziert werden. Das `none` bedeutet, dass das Bild `#svg-mask` der fünften Schicht entlang der x-Achse von der oberen linken Ecke aus wiederholt wird.

Erfahren Sie mehr über [Maskenschichten und das `none`-Schlüsselwort](/de/docs/Web/CSS/CSS_masking/Multiple_masks#mask_layers_and_the_none_keyword).

## Die Eigenschaft `mask-mode`

Die {{cssxref("mask-mode")}}-Eigenschaft kann verwendet werden, um den Modus jeder Maskenschicht auf `alpha` oder `luminance` zu setzen oder ihn auf den Modus der Quelle standardmäßig durch den Wert `match-source` einstellen zu lassen, der die Standardeinstellung ist. Während die meisten `mask-*`-Eigenschaften eine analoge `background-*`-Eigenschaft haben (`mask-image` ist analog zur {{cssxref("background-image")}}-Eigenschaft, zum Beispiel), gibt es keine analoge {{cssxref("background")}}-Eigenschaft zu `mask-mode` und [`mask-composite`](#the_mask-composite_property).

### Maskentypen: `alpha` und `luminance`

Jede Maske ist entweder eine `alpha`- oder eine `luminance`-Maske.

Bei `alpha`-Masken ist die Alpha-Transparenz jedes Maskenpixels wichtig. Überall dort, wo die Maske undurchsichtig ist, werden die entsprechenden Teile des Elements sichtbar sein. Überall dort, wo die Maske transparent ist, werden die entsprechenden Teile des Elements verborgen. Überall dort, wo die Maske halb undurchsichtig ist, wird das Element gleichermaßen halb undurchsichtig sein. Die Farbe der Maske spielt keine Rolle, nur die Alpha-Transparenz der Farben.

Bei `luminance`-Masken bestimmen sowohl die [Helligkeit der Maskenfarben](/de/docs/Web/CSS/CSS_masking/Masking#alpha_transparency_versus_luminance) als auch der Alphakanal die Undurchsichtigkeit der maskierten Bereiche.

> [!NOTE]
> Alle nachfolgenden Beispiele verwenden das folgende Bild als `background-image` auf einem Element, auf das Masken angewendet werden:
>
> <img src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg" alt="Pride flag" />

Dieses Beispiel zeigt den Unterschied zwischen `alpha`- und `luminance`-Masken. Die Masken sind gleich, aber bei der `alpha`-Maske zählt nur die Alpha-Transparenz der Farbverläufe der Maske. Im `luminance`-Beispiel zählen R, G, B und A alle.

Zwei Container enthalten Bilder, während der letzte leer ist, aber eingebunden wird, um den Verlauf anzuzeigen, den wir als unser `mask-image` verwenden werden.

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

Wir deklarieren einen [`repeating-linear-gradient`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) mit roten, transparenten und halbtransparenten roten diagonalen Streifen. Dieser Verlauf wird als unsere Maske verwendet und im letzten Container als Hintergrundbild:

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

Im Fall von `alpha` zählen nur die Transparenzen der Verlauffarben. Wo der Verlauf undurchsichtig rot ist, ist das Bild undurchsichtig. Wo der Verlauf transparent ist, ist das Bild verborgen. Wo der Verlauf 50% undurchsichtig ist, ist das Bild 50% undurchsichtig. Im Fall von `luminance` zählt die Helligkeit der Farbe! Siehe [Alpha-Transparenz versus Luminanz](/de/docs/Web/CSS/CSS_masking/Masking#alpha_transparency_versus_luminance), um die Gleichung zu lernen, die die R-, G-, B- und A-Kanäle der Farbe verwendet, um die Opazität der Maske zu bestimmen.

### Der Standardwert von `mask-mode`: `match-source`

Der Standardwert der `mask-mode`-Eigenschaft ist `match-source`. Dieser Wert stellt den `mask-mode` so ein, dass er dem Modustyp der Maske entspricht. Der `match-source`-Wert löst sich zu `alpha` für jede Maske auf, außer Masken, bei denen die Maskenquelle ein SVG-{{svgelement("mask")}}-Element ist.

Wenn ein SVG-`<mask>`-Element als Maskenquelle verwendet wird, löst sich der `match-source`-Wert auf den Wert der {{cssxref("mask-type")}}-Eigenschaft des `<mask>`-Elements auf. Wenn das `<mask>`-Element (nicht das "maskierte Element") die CSS-`mask-type`-Eigenschaft nicht definiert hat, wird dieser Eigenschaftswert auf den Wert des SVG-{{svgAttr("mask-type")}}-Attributs gesetzt, falls vorhanden. Wenn auch das weggelassen wird, löst sich der `match-source`-Wert zu `luminance` auf.

Im Fortgang des `masked-element`-Beispiels, wenn wir die `mask-mode`-Eigenschaft nicht explizit setzen, wird sie für jede Schicht standardmäßig auf `match-source` gesetzt, als ob wir Folgendes gesetzt hätten:

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
  mask-mode: match-source;
}
```

oder mit der Kurzform `mask`:

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

Die erste Maskenschicht, `url(alphaImage.png)`, verweist auf ein Bild. Da dies kein `<mask>`-Element innerhalb eines `<svg>` ist, löst sich der `mask-mode` zu `alpha` auf, wobei die undurchsichtigen Teile dieses Bildes die entsprechenden Teile des Elements sichtbar machen, während die transparenten oder halbtransparenten Teile unsichtbar oder teilweise sichtbar sind.

Der `linear-gradient(to right, black, transparent)` ist die zweite Maskenschicht und `radial-gradient(circle, white 50%, transparent 75%)` ist die dritte. Auch hier handelt es sich nicht um `<mask>`-Elemente, daher löst sich der `match-source`-Wert zu `alpha` auf. Der Maskierungseffekt dieser Schichten wird standardmäßig durch die [Opazität des Verlaufsmasken](/de/docs/Web/CSS/CSS_masking/Masking#opaqueness_versus_transparency) bestimmt.

Die vierte Maskenschicht hat `none` deklariert, was bedeutet, dass die Maske für diese Schicht transparent schwarz ist. Die Klasse `.masked-element` setzt `mask-mode: match-source;`. Hätte `mask-mode` stattdessen eine durch Kommas getrennte Liste von fünf verschiedenen Werten, würde der vierte Wert auf diese `none`-Schicht angewendet werden, so dass der fünfte Wert auf die fünfte Schicht angewendet wird.

Die fünfte Maskenschicht besteht aus einem SVG-{{svgelement("mask")}}-Element, das `svg-mask` als seinen [ID](/de/docs/Web/HTML/Reference/Global_attributes/id) hat. Während der Standardmaskenmodus der anderen Schichten `alpha` ist, ist der Standardmaskentyp von SVG-`<mask>`-Elementen der `mask-type`-Wert oder, wenn nicht festgelegt, das `mask-type`-Attribut. Wenn auch das nicht definiert ist, ist der Wert standardmäßig `luminance`. Mit anderen Worten, der Maskierungseffekt des `<mask>` wird durch sowohl die Helligkeit als auch die Transparenz der Farben des `<mask>`-Elements bestimmt.

Wenn wir die `mask-mode`-Eigenschaft überhaupt nicht deklarieren und sie für jede Maskenschicht standardmäßig auf `match-source` wirken lassen, würde das Ergebnis in diesem `.masked-element`-Fall wie folgt aussehen:

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
  mask-mode: alpha, alpha, alpha, match-source, luminance;
}
```

oder mit der Kurzform `mask`:

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

## Die Eigenschaft `mask-position`

Analog zur {{cssxref("background-position")}}-Eigenschaft legt die {{cssxref("mask-position")}}-Eigenschaft die Anfangsposition des Maskenbildes relativ zur Ursprungsbox der Maskenschicht fest, die durch [die `mask-origin`-Eigenschaft](#the_mask-origin_property) definiert ist. Die Syntax entspricht der [`background-position`-Syntax mit `<position>`](/de/docs/Web/CSS/background-position#position), wobei der Wert ein, zwei oder vier {{cssxref("&lt;position&gt;")}}-Werte sind, die ein bis zwei relative oder absolute Positionsversätze definieren.

### Ein-Wert-Syntax

Wenn nur ein Schlüsselwortwert angegeben ist, legt dieser Wert die Kante des Maskenursprungs an, an der die Maske platziert wird, wobei die andere Dimension `center` ist.

Wenn nur ein {{cssxref("&lt;length-percentage&gt;")}}-Wert angegeben wird, bestimmt dieser den X-Koordinate relativ zur linken Kante des Maskenursprungs, wobei die Y-Koordinate auf `50%` gesetzt wird.

Wenn zwei Schlüsselwortwerte angegeben werden, spielt die Reihenfolge der Werte keine Rolle, aber der Wert darf nicht zwei vertikale oder zwei horizontale Achsenwerte enthalten; `left right` und `top bottom` sind beide ungültig.

### Zwei-Werte-Syntax

Wenn zwei Werte vorhanden sind, einschließlich eines Schlüsselworts und eines `<length-percentage>`-Werts, spielt die Reihenfolge nur dann eine Rolle, wenn das Schlüsselwort `center` ist:

- Wenn das Schlüsselwort `left` oder `right` ist, definiert es die X-Koordinate relativ zur linken Kante, und der Wert definiert die Y-Koordinate relativ zur oberen Kante.
- Ebenso definiert ein Schlüsselwort `top` oder `bottom` die Y-Koordinate und setzt das Element gegen die obere oder untere Kante, mit dem anderen Wert, der die X-Koordinate relativ zur linken Kante der Maskenursprungsbox definiert.
- Wenn ein Wert das Schlüsselwort `center` ist und der andere ein `<length-percentage>`, definiert der erste Wert die horizontale Position und der zweite Wert die vertikale Position.

Wenn zwei Werte vorhanden sind und beide `<length-percentage>`-Werte sind, spielt die Reihenfolge wieder eine Rolle; der erste Wert definiert die horizontale Positionierung als Versatz von der linken Kante des Maskenpositionierungsbereichs, während der zweite Wert die vertikale Position als Versatz von der oberen Kante des Maskenpositionierungsbereichs definiert.

### Vier-Werte-Syntax

Maskenpositionen können auch relativ zu anderen Ecken als der oberen linken sein. Die Vier-Werte-Syntax ermöglicht das Versetzen der Maske von jeder Ecke. Der Wert umfasst zwei {{cssxref("length-percentage")}}-Versätze, die jeweils dem Ursprung der Seite für diesen Versatz vorangestellt sind. Ob Sie das horizontale oder vertikale Paar zuerst deklarieren, spielt keine Rolle, aber Sie müssen das Ursprungs-Schlüsselwort (`left`, `right`, `top`, `bottom`, `x-start`, `x-end`, `y-start`, `y-end`, `block-start`, `block-end`, `inline-start` oder `inline-end`) vor dem jeweiligen Offset in jedem Paar deklarieren, und die beiden Ursprungsseiten dürfen nicht von derselben Achse sein.

In der Zwei-`<length-percentage>`-Syntax sind die Ursprungsseiten `top` und `left`, in dieser Reihenfolge. Zum Beispiel ist `mask-position: 10px 20px` das Äquivalent zu `mask-position: left 10px top 20px`. Beim Versetzen von der oberen und linken Seite sind die Offset-Seiten nicht erforderlich, aber die Reihenfolge spielt eine Rolle. Mit der vierwertigen Syntax können Sie `mask-position` verwenden, um das Maskenbild von jeder Kombination von Kanten zu versetzen, wie z.B. `left 10px bottom 20px`, und die Reihenfolge der Seiten spielt keine Rolle, da die Offset-Seite durch das vorangestellte Schlüsselwort und nicht durch die Deklarationsreihenfolge definiert ist.

### Prozentwerte

Beim Versetzen mit Prozentwerten wird die Dimension der Maske von der Dimension des Elements subtrahiert, genau wie bei [Prozentabweichungen mit `background-position`](/de/docs/Web/CSS/background-position#regarding_percentages).

### Positionierung wiederholender Maskenbilder

Die `mask-position`-Eigenschaft definiert die Anfangsposition des Maskenbildes. Bei "Anfangsposition", wenn die [Maske sich wiederholt](#the_mask-repeat_property), platziert der Browser das erste Maskenbild an der durch die `mask-position`-Eigenschaft definierten Position und bestimmt so die Platzierung der Maskenwiederholungen.

In diesem Beispiel legen wir die Position des ersten Bildes auf `bottom right` fest, was bedeutet, dass die erste Maske am unteren rechten Rand der Maskenursprungsbox positioniert wird. Da Maskenbilder standardmäßig wiederholt werden, werden die wiederholten Masken relativ zur oberen und linken Seite der ersten platzierten Maske positioniert.

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

Die `mask-position` definiert die Position der Platzierung des ersten Maskenbildes. Dieses Demo zeigt, wo das erste Bild platziert wird:

```css hidden live-sample___position_no-repeat
img {
  mask-repeat: no-repeat;
}
```

{{EmbedLiveSample("position_no-repeat", "", "260px")}}

Da der Standardwert für die [`mask-repeat`-Eigenschaft](#the_mask-repeat_property) `repeat` ist, werden die Bilder basierend auf dieser ersten Maske entlang der X- und Y-Achse wiederholt:

{{EmbedLiveSample("position", "", "260px")}}

Das Zwei-Werte-Beispiel definiert die oberen und linken Versätze des ursprünglichen Maskenbildes. Das Vier-Werte-Beispiel kombiniert die vorherigen beiden Beispiele, indem es die erste Maske mit den gleichen Versätzen wie das zweite Bild positioniert, jedoch von den gleichen Kanten wie im ersten Bild demonstriert.

Im ersten Bild wird der erste zu platzierende Stern auf der unteren rechten Seite sein, wobei die über und links gelegenen wiederholten Sterne platziert werden. Aufgrund dieser Positionierung wird der ursprüngliche Stern nicht abgeschnitten, aber die obersten und linken Sterne werden abgeschnitten.

Wenn wir die `mask-position`-Eigenschaft nicht explizit setzen, wird sie für jede Schicht standardmäßig `0% 0%` sein, wobei die obere linke Ecke der Maske an die obere linke Ecke der Maskenursprungsbox grenzt. Im Verlauf des `masked-element`-Beispiels wäre es, als hätten wir das Folgende gesetzt:

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
  mask-mode: match-source;
  mask-position: 0% 0%;
}
```

oder, indem wir das Beispiel unter Verwendung der Kurzform `mask` erweitern:

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

## Die Eigenschaft `mask-origin`

Wenn ein Element einen Abstand, einen Rand oder beides hat, definiert die {{cssxref("mask-origin")}}-Eigenschaft, welche dieser Kantenwerte als Maskenursprungsbox fungiert, oder der _Maskenpositionierungsbereich_, innerhalb dessen ein Maskenbild für diese Schicht positioniert wird. Die `mask-origin`-Eigenschaft ist analog zur {{cssxref("background-origin")}}-Eigenschaft, jedoch mit einem anderen Anfangswert und nur SVG-Werten.

HTML-Elemente können Masken enthalten, die innerhalb ihrer Inhaltsrandbox, Abstandsbox oder Inhaltsbox sind. Beispielsweise, wenn die `mask-position` `top left` ist, bezieht sich das auf die Außenkante des Rands, die Außenkante des Abstands oder die Außenkante des Inhalts?

Im Maskierungsbeispiel [`mask-position`](#the_mask-position_property) war die definierte Position relativ zur Randbox (dem Standardverhalten), obwohl es erwähnenswert ist, dass der `<img>` weder Rand noch Abstand hatte, daher wären in diesem Fall der Inhaltsbox-, Abstandsbox- und Randbox-Ursprung alle gleich.

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

In diesem Beispiel platziert die `mask-position` die ursprüngliche Maske in der oberen linken Ecke des `<img>`-Elements, das einen großen Rand und Abstand hat, mit einer grünen Hintergrundfarbe, um die Sternenmaskierung auf dem Abstand zu sehen.

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

Ändern Sie den Wert der `mask-origin`-Eigenschaft, indem Sie die ausgewählte Optionsschaltfläche ändern und beobachten Sie die Position der oberen linken Sternenmaske, während Sie dies tun.

{{EmbedLiveSample("origin", "", "350px")}}

Der Standardwert ist `border-box`. Mit diesem Wert wird die ursprüngliche Maske an der oberen linken Kante des Rands platziert und nicht abgeschnitten. Wenn die ursprünglich platzierte Maske an der äußeren oder inneren Kante des Abstands liegt, gibt es darüber und links Raum; diese sich wiederholenden Masken werden abgeschnitten.

Im Fortgang des `masked-element`-Beispiels, wenn wir die `mask-origin`-Eigenschaft nicht explizit setzen, wird sie für jede Schicht standardmäßig `border-box` sein, als hätten wir das Folgende gesetzt:

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

oder, indem wir das Beispiel unter Verwendung der Kurzform `mask` erweitern:

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

Für SVG-Elemente, die nicht die zugehörigen CSS-Layout-Boxen haben, kann eine Maske innerhalb der Füll-, Linien- oder Ansichtsbox des SVG-Elementes enthalten sein.

## Die Eigenschaft `mask-clip`

Die {{cssxref("mask-clip")}}-Eigenschaft bestimmt den Bereich des Elements, der von einer Maske betroffen sein wird, und schneidet das Element effektiv an der definierten Boxkante ab. Sie ist analog zur {{cssxref("background-clip")}}-Eigenschaft, jedoch mit einigen unterschiedlichen Werten.

Da die `mask-clip`-Eigenschaft alle `mask-origin`-Werte akzeptiert und beide den gleichen Standardwert `border-box` haben, mögen die beiden Eigenschaften ähnlich erscheinen, aber sie dienen sehr unterschiedlichen Zwecken. Während `mask-origin` bestimmt, wo ein Maskenbild positioniert wird, bewirkt die `mask-clip`-Eigenschaft, dass das ursprüngliche Element seinen Inhalt auf die angegebene Box beschränkt. Es ist wichtig, beide zu verstehen: wenn `mask-origin` dazu führt, dass die `mask-position` das Maskenbild außerhalb des Zuschnittsbereichs platziert, wird die Maske abgeschnitten.

Die `mask-clip`-Eigenschaft akzeptiert alle `mask-origin`-Werte sowie ihren eigenen `no-clip`-Wert. Der `no-clip`-Wert setzt den lackierten Inhalt so, dass er nicht abgeschnitten wird. Sie können das Maskenbild dennoch abschneiden, indem Sie es mit `mask-position`-Werten platzieren, die weniger als null oder mehr als 100% sind.

Wenn `mask-clip` und `mask-origin` auf unterschiedliche Werte gesetzt werden, kann das Bild der Maskenschicht abgeschnitten werden. Wenn beispielsweise ein Element mit einem Rand und Abstand `mask-clip` auf `content-box` und `mask-origin` auf `border-box` gesetzt hat und die `mask-position` auf die `top left`-Kante gesetzt ist, wird das Maskenschichtbild an der oberen linken Kante abgeschnitten.

Das nächste Beispiel fügt Zuschnittsoptionen zum vorherigen Beispiel hinzu, um die unterschiedlichen nicht-SVG-`mask-clip`-Werte zu demonstrieren und zu zeigen, wie sie die verschiedenen `mask-origin`-Werte beeinflussen.

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

Die erste Maske wird an der oberen linken Kante des Maskenursprungscontainers platziert und dann wiederholt. Wenn die Ursprungsbox die `border-box` ist und die Schnittregion die `content-box` ist, wird der obere und linke Bereich des Maskenursprungscontainers abgeschnitten. Generell werden Sie wollen, dass `mask-clip` gleich `mask-origin` ist.

Im Fortgang des `masked-element`-Beispiels, wenn wir die `mask-clip`-Eigenschaft nicht explizit setzen, wird sie für jede Schicht standardmäßig `border-box` sein, als hätten wir das Folgende gesetzt:

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

oder, indem wir das Beispiel unter Verwendung der Kurzform `mask` erweitern:

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

In der Kurzform `mask`, wenn nur ein [`<geometry-box>`](/de/docs/Web/CSS/clip-path#geometry-box)-Wert angegeben ist, wird dieser Wert sowohl für die `mask-origin`- als auch für die `mask-clip`-Eigenschaften festgelegt. Sind zwei `<geometry-box>`-Werte vorhanden, definiert der erste die `mask-origin` und der zweite die `mask-clip`.

Für Maskenschichtbilder, die kein SVG-{{svgelement("mask")}}-Element referenzieren, definiert die `mask-clip`-Eigenschaft, ob der Bereich, auf dem die Maske angewendet wird, der Rand-, Abstands- oder Inhaltsbox ist. Der lackierte Inhalt des Elements wird auf diesen Bereich beschränkt.

Wenn die Maskenschicht-{{cssxref("mask-image")}}-Quelle ein `<mask>` ist, hat die `mask-clip`-Eigenschaft keine Wirkung. Stattdessen bestimmen die {{svgAttr("x")}}, {{svgAttr("y")}}, {{svgAttr("width")}}, {{svgAttr("height")}} und {{svgAttr("maskUnits")}}-Attribute des `<mask>`-Elements den Maskenlackierungsbereich.

## Die Eigenschaft `mask-size`

Die {{cssxref("mask-size")}}-Eigenschaft wird verwendet, um Maskenschichten zu dimensionieren. Diese Eigenschaft ist analog zur {{cssxref("background-size")}}-Eigenschaft und nimmt die gleichen Werte an. Beim Dimensionieren Ihrer Masken denken Sie daran, dass Bereiche des Elements, die nicht von den Maskenbildern abgedeckt sind, verborgen sind.

Es gibt drei Möglichkeiten, eine `mask-size` zu deklarieren:

- das Schlüsselwort `cover` oder `contain`,
- eine Länge, ein Prozentsatz oder das Schlüsselwort `auto`, oder
- zwei Werte, die eine Kombination aus Längen, Prozentsätzen und dem Schlüsselwort `auto` sind.

Das Maskenbild kann in seiner natürlichen Größe belassen, gestreckt oder eingeschränkt werden, um in den verfügbaren Raum zu passen. Das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Maskenbildes wird standardmäßig beibehalten, aber die Deklaration von zwei `<length-percentage>`-Werten kann das Maskenbild verzerren, wenn das Verhältnis der beiden Werte nicht das gleiche ist wie das ursprüngliche Bild (`mask-repeat: round` ist das andere Eigenschaft/Wert-Paar, das das Maskenbild verzerren kann).

Wenn `mask-size` auf `contain` gesetzt ist, wird das Maskenbild die größte Größe haben, die es sein kann, während es vollständig innerhalb des Maskenpositionierungsbereichs enthalten ist. In diesem Fall wird das Maskenbild nicht abgeschnitten, sondern vollständig enthalten.

Wenn auf `cover` gesetzt, wird das Maskenbild die kleinste Größe haben, die es sein kann, um den gesamten Maskenpositionierungsbereich vollständig abzudecken, wobei die Maske abgeschnitten wird, wenn das Seitenverhältnis der Maske von dem des Maskenpositionierungsbereichs abweicht.

Mit anderen Worten, mit `cover` und `contain` wird mindestens eine Dimension der Maske die gleiche Größe haben wie die gleiche Dimension des Maskenpositionierungsbereichs; das Maskenbild wächst oder schrumpft so, dass entweder die Breite die gleiche Breite wie der Maskenpositionierungsbereich hat oder die Höhe des Maskenbildes gleich der Höhe des Maskenpositionierungsbereichs ist.

Mit `cover`, `contain` und `<percentage>`-Werten ist die Größe relativ zur Ursprungsbox. In unserem Stern-Masken- und Flaggenbildbeispiel ist das Seitenverhältnis sowohl des Maskenbildes als auch des `<img>` `1:1`, was bedeutet, dass in diesem Fall sowohl `cover`, `contain` als auch `100%` die gleiche Größe der Maske ergeben werden. Dieses Beispiel zeigt, wie, wenn `mask-size` auf `cover`, `contain` oder einem `<percentage>`-Wert gesetzt ist, die tatsächliche Größe der Maske je nach Wert der [`mask-origin`-Eigenschaft](#the_mask-origin_property) unterschiedlich sein kann:

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

Dieses Beispiel enthielt einen `<percentage>`-Wert. Wenn ein `<length-percentage>`-Wert angegeben wird, wird nur die Breite der Maske definiert, wobei die Höhe standardmäßig `auto` ist, was das Seitenverhältnis beibehält. Wenn zwei Werte angegeben werden, definiert der erste die Breite der Maske und der zweite die Höhe.

Der Standardwert von `mask-size` ist `auto`, wodurch die Maske in ihrer {{Glossary("intrinsic_size", "intrinsischen Größe")}} gerendert wird, also der Größe, in der die Maske angezeigt würde, wenn kein CSS angewendet würde. Das zugrunde liegende {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Maskenbildes wird beibehalten, wenn Sie einen einzelnen `<length-percentage>`-Wert festlegen oder zwei Werte im selben Verhältnis wie das Seitenverhältnis. Wenn Sie zwei Werte erklären, die nicht im selben Verhältnis wie das Seitenverhältnis sind, wird das Maskenbild verzerrt.

Wie bei allen Langhandkomponenten der Kurzform-Eigenschaft, wenn die {{cssxref("mask")}}-Kurzform-Eigenschaft gesetzt ist und der Wert der `mask-size`-Eigenschaft nicht innerhalb einer Maskenschicht definiert ist, wird der `mask-size`-Wert für diese Maskenschichten auf den ursprünglichen Wert von `auto` zurückgesetzt.

Wenn das Bild keine intrinsische Proportion hat, z.B. im Fall eines [CSS-Verlaufs](/de/docs/Web/CSS/gradient), ist der Standardwert von `auto` die Gesamtheit des Maskenpositionierungsbereichs, wie er durch [die `mask-origin`-Eigenschaft](#the_mask-origin_property) gesetzt wird.

Im Fortgang des `masked-element`-Beispiels, wenn wir die `mask-size`-Eigenschaft nicht explizit setzen, wird sie für jede Schicht standardmäßig `auto` sein, als hätten wir das Folgende gesetzt:

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

oder, indem wir das Beispiel unter Verwendung der Kurzform `mask` erweitern, wobei die `mask-size`-Komponente nach dem `mask-position`-Wert, getrennt durch einen Schrägstrich (/), folgt:

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

## Die Eigenschaft `mask-repeat`

Die {{cssxref("mask-repeat")}}-Eigenschaft definiert, wie Maskenbilder wiederholt oder gekachelt werden, nachdem das ursprüngliche Maskenbild dimensioniert und positioniert wurde. Die `mask-repeat`-Eigenschaft definiert, ob und wie dieses Maskenbild entlang der horizontalen und vertikalen Achsen wiederholt wird. In den meisten der vorherigen Beispiele haben Sie möglicherweise bemerkt, dass die Sternenmaske entlang der X- und Y-Achsen wiederholt wurde. Dies liegt daran, dass `repeat` der Standardwert ist.

Die `mask-repeat`-Eigenschaft ist analog zur {{cssxref("background-repeat")}}-Eigenschaft und akzeptiert die gleichen [`<repeat-style>`](/de/docs/Web/CSS/mask-repeat#values) Werte. Wie im Fall von `background-repeat`, wird die erste (und möglicherweise einzige) Maskenbildwiederholung durch [die `*-position`-Eigenschaft](#the_mask-position_property) positioniert und durch [die `*-size`-Eigenschaft](#the_mask-size_property) dimensioniert. Die Positionen der wiederholten Hintergrund- oder Maskenbilder basieren auf diesem ursprünglichen Bildexemplar.

Im Fortgang des `masked-element`-Beispiels, wenn wir die `mask-repeat`-Eigenschaft nicht explizit setzen, wird sie für jede Schicht standardmäßig `repeat` sein, als hätten wir das Folgende gesetzt:

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

oder, indem wir das Beispiel unter Verwendung der Kurzform `mask` erweitern:

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

## Die Eigenschaft `mask-composite`

Die {{cssxref("mask")}}-Kurzform umfasst die {{cssxref("mask-composite")}}-Eigenschaft, die definiert, wie mehrere Masken kombiniert werden, um den endgültigen Maskeneffekt zu erzeugen. Jeder Wert in der durch Kommas getrennten Liste der Werte bestimmt, ob der Browser die zugehörige Maskenschicht von den darunter liegenden Maskenschichten `add`, `subtract`, `intersect` oder `exclude` soll. Ähnlich wie `mask-mode` und die anderen `mask-*`-Eigenschaften gibt es keine analoge Eigenschaft in der {{cssxref("background")}}-Kurzform.

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

In diesem Beispiel fügen wir zwei `mask-image`-Werte hinzu, einschließlich des Sterns und des Verlaufs aus den vorherigen Beispielen als Maskenbilder:

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

Die halbtransparente Sternenmaske wird je nach `mask-composite`-Wert zu der gestreiften Maske hinzugefügt, von ihr subtrahiert, mit ihr geschnitten oder von ihr ausgeschlossen.

Die `mask-composite`-Eigenschaft ist nur in Fällen mit zwei oder mehr Maskenschichten relevant. Dies liest sich "Maskenschichten", nicht "Maskenbilder", weil, wenn `none` enthalten ist, die transparente schwarze Maske zusammengesetzt wird. Ein `none`-Wert kann im Fall von `subtract` und `intersect` einen tiefgreifenden Effekt auf das Maskieren haben. Zum Beispiel, wenn der `mask-mode` zu `luminance` auflöst, wird das Subtrahieren einer schwarzen Maske die gesamte Maske entfernen (das Element wird verborgen). Ebenso, wenn `none` die letzte Schicht mit `mask-composite: intersect` ist, wird das gesamte Element verborgen sein. Hier fügen wir dem vorherigen Beispiel eine dritte Schicht, mit `none`, hinzu:

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

Beachten Sie, wie das Beispiel `intersect` alles ausschließt, weil die transparente schwarze Maske nichts schneidet.

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

Im ersten Beispiel werden die Sterne von den Streifen subtrahiert. Im zweiten Beispiel werden die Streifen von den Sternen subtrahiert.

Wie alle anderen `mask`-Komponenteneigenschaften verwendet `mask-composite` eine durch Kommas getrennte Liste von Werten. Da die Eigenschaft Auswirkungen auf die Kombination von Masken hat, ist diese Eigenschaft nur für mehrere Maskenschichten relevant und die Anzahl der verwendeten Werte ist eins weniger als die Anzahl der Maskenschichten.

Das letzte Paar von Masken wird zuerst zusammengesetzt. Das vorherige Maskenbild wird dann mit der vorherigen Komposition zusammengesetzt.

Im Fortgang des `masked-element`-Beispiels, wenn wir die `mask-composite`-Eigenschaft nicht explizit setzen, wird sie für jede Schicht standardmäßig `add` sein, als hätten wir das Folgende gesetzt:

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

In diesem Fall wird das `<mask>`-Element mit der `none`-Schicht zusammengesetzt. Dann wird der Radialverlauf mit dem Ergebnis der vorherigen Komposition zusammengesetzt und so weiter.

Wie wir bei allen anderen Komponenteneigenschaften gesehen haben, hätten wir die `mask`-Kurzform verwenden können:

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

- [Einführung in die CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [Einführung in das CSS-Zuschneiden](/de/docs/Web/CSS/CSS_masking/Clipping)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
