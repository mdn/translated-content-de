---
title: CSS-Maskeneigenschaften
slug: Web/CSS/CSS_masking/Mask_properties
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

CSS-Maskierung ist eine Technik, die es Ihnen ermöglicht, sichtbare Teile eines Elements zu definieren, indem eine Maske angewendet wird, die Teile des Elements basierend auf den Alphakanälen und optionalen Farben der angewendeten Maskenbilder selektiv sichtbar oder unsichtbar macht.

Der [einführende Leitfaden zur Maskierung](/de/docs/Web/CSS/CSS_masking) stellt die verschiedenen Arten von Maskenbildern und deren Modi vor. Der Leitfaden zum [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks) behandelt die [Maskenschichten](/de/docs/Web/CSS/CSS_masking/Multiple_masks#understanding_mask_layers) und die {{cssxref("mask")}}-Kurzformeigenschaft und bietet eine kurze Einführung in die Komponenten-Eigenschaften der Kurzform. In diesem Leitfaden erkunden wir diese Komponenten-Eigenschaften im Detail und betrachten, wie sie interagieren. Wir erklären auch, wie, in Fällen, in denen mehrere Maskenbilder deklariert sind, die [Maskenschichten zusammengesetzt](#the_mask-composite_property) oder kombiniert werden.

CSS-Masken bestehen aus einer oder mehreren Maskenschichten, wobei für jeden Wert in der durch Kommas getrennten Liste von `mask`- oder `mask-image`-Werten eine Maskenschicht erstellt wird, unabhängig davon, ob die Werte Bilder, Maskenquellen oder das Schlüsselwort `none` sind. Jedes {{cssxref("mask-image")}} wird relativ zu einem [Ursprung](#the_mask-origin_property) positioniert. Die Maskenbilder können [größenangepasst](#the_mask-size_property), [wiederholt](#the_mask-repeat_property) und [geschnitten](#the_mask-clip_property) werden, dann mit vorherigen Schichten zusammengesetzt, um die endgültige visuelle Maske auf dem Element zu erstellen.

## Die `mask-image`-Eigenschaft

Die Mindestanforderung zum Erstellen einer Maske ist eine {{cssxref("mask-image")}}-Eigenschaft, die auf einen anderen Wert als `none` gesetzt ist. Das Schlüsselwort `none` innerhalb einer Liste von Maskenquellen erstellt eine Maskenschicht. Wenn jedoch `none` der einzige Wert der `mask-image`-Eigenschaft ist, erfolgt keine Maskierung.

Das Maskenbild kann ein [CSS-Verlauf](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients), ein [importiertes Bild](/de/docs/Web/CSS/CSS_masking/Masking#with_imported_images) (wie ein PNG, SVG, etc.) oder ein SVG-{{svgelement("mask")}}-Element sein.

In diesem Beispiel erstellen wir fünf Maskenschichten, darunter ein importiertes Bild, zwei Verläufe, eine Schicht ohne Bild und eine SVG-`<mask>`-Quelle als Maskenbild.

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
}
```

Da eines der Maskenbilder als `none` angegeben ist, werden nur vier Maskenbilder auf das `.masked-element`-Element angewendet, während fünf Maskenschichten erstellt werden.

### Die Bedeutung von `none`

Die `none`-Schicht hat im Allgemeinen keinen visuellen Effekt (siehe die [`mask-composite`-Eigenschaft](#the_mask-composite_property), um zu sehen, wie sie die angewandte Maske beeinflusst), aber da jeder Wert in einer durch Kommas getrennten Liste von `mask-*`-Werten auf eine separate Maskenschicht angewendet wird, erfüllt der `none`-Wert auch dann einen wichtigen Zweck, wenn er die zusammengesetzte Maske nicht ändert.

Diese vierte Schicht in unserer fünf-Lagen-Struktur wird mit dem vierten Wert jeder anderen durch Komma getrennten `mask-*`-Eigenschaftswerte übereinstimmen. Wie bereits erwähnt, wird die Anzahl der Schichten durch die Anzahl der durch Kommas getrennten Werte im {{cssxref("mask-image")}}-Eigenschaftswert bestimmt, auch wenn ein Wert `none` ist. Jeder `mask-*`-Wert wird in der Reihenfolge mit den `mask-image`-Werten abgeglichen. Wenn die Anzahl der Werte in einer `mask-*`-Eigenschaft von der Anzahl der Maskenschichten abweicht, werden alle überschüssigen Werte ignoriert oder, wenn die Eigenschaft weniger Werte als die Anzahl der Maskenschichten hat, werden die Werte wiederholt.

Hat eine `mask-*`-Eigenschaft einen einzelnen Wert, gilt dieser Wert für alle Schichten. Haben wir fünf Werte, gilt der vierte Wert für die `none`-Schicht, wobei der letzte Wert auf die `<mask>`-Quellschicht angewendet wird. Gibt es zwei durch Kommas getrennte Werte, wird der erste Wert nur auf alle ungeraden Schichten angewendet, einschließlich dieser `<mask>`-Quellschicht. Beispielsweise kann jede `mask-*`-Eigenschaft eine unterschiedliche Anzahl von Werten haben:

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

In diesem Fall wird jede ungerade Schicht entlang der x-Achse wiederholt, während jede gerade Schicht entlang der y-Achse wiederholt wird. Die erste und vierte Schichtbilder werden zentriert, während die zweite und fünfte in der oberen linken Ecke positioniert werden. Das `none` bedeutet, dass das fünfte Schichtbild `#svg-mask` entlang der x-Achse beginnend an der oberen linken Ecke wiederholt wird.

Erfahren Sie mehr über [Maskenschichten und das `none`-Schlüsselwort](/de/docs/Web/CSS/CSS_masking/Multiple_masks#mask_layers_and_the_none_keyword).

## Die `mask-mode`-Eigenschaft

Die {{cssxref("mask-mode")}}-Eigenschaft kann verwendet werden, um den Modus jeder Maskenschicht entweder auf `alpha` oder `luminance` zu setzen oder sie auf den Modus der Quelle standardmäßig einzustellen, indem der Wert auf `match-source` gesetzt wird, welcher der Standardwert ist. Während die meisten `mask-*`-Eigenschaften eine analoge `background-*`-Eigenschaft haben (`mask-image` ist beispielsweise analog zur {{cssxref("background-image")}}-Eigenschaft), haben `mask-mode` und [`mask-composite`](#the_mask-composite_property) keine analoge {{cssxref("background")}}-Eigenschaft.

### Maskentypen: `alpha` und `luminance`

Jede Maske ist entweder eine `alpha`- oder eine `luminance`-Maske.

Bei `alpha`-Masken ist die Alpha-Transparenz jedes Maskenpixels wichtig. Wo immer die Maske deckend ist, werden die entsprechenden Teile des Elements sichtbar sein. Wo immer die Maske transparent ist, werden die entsprechenden Teile des Elements ausgeblendet. Wo immer die Maske halbdurchsichtig ist, wird das Element ebenso halbdurchsichtig sein. Die Farbe der Maske ist nicht von Bedeutung, sondern nur die Alpha-Transparenz der Farben.

Bei `luminance`-Masken bestimmen sowohl die [Helligkeit der Farben der Maske](/de/docs/Web/CSS/CSS_masking/Masking#alpha_transparency_versus_luminance) als auch der Alphakanal die Undurchsichtigkeit der maskierten Bereiche.

> [!NOTE]
> Alle nachfolgenden Beispiele verwenden das folgende Bild als `background-image` auf einem Element, auf das Masken angewendet werden:
>
> <img src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg" alt="Pride-Flagge" />

Dieses Beispiel demonstriert den Unterschied zwischen `alpha`- und `luminance`-Masken. Die Masken sind gleich, aber in der `alpha`-Maske ist nur die Alpha-Transparenz der Verlaufsfarben wichtig. Im `luminance`-Beispiel sind R, G, B und A alle wichtig.

Zwei Container enthalten Bilder, während der letzte leer ist, aber enthalten ist, um den Verlauf anzuzeigen, den wir als unser `mask-image` verwenden werden.

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

Wir deklarieren einen [`repeating-linear-gradient`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) mit roten, transparenten und halbtransparent roten diagonalen Streifen. Dieser Verlauf wird als unsere Maske und für den letzten Container als Hintergrundbild verwendet:

```css live-sample___mode
img {
  mask-image: repeating-linear-gradient(
    to bottom right,
    red 0 20px,
    #f005 20px 40px,
    transparent 40px 60px
  );
}
.gradient {
  background: repeating-linear-gradient(
    to bottom right,
    red 0 20px,
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

Im `alpha`-Fall ist nur die Transparenz der Verlausfarben von Bedeutung. Wo immer der Verlauf deckend rot ist, ist das Bild deckend. Wo immer der Verlauf transparent ist, wird das Bild ausgeblendet. Wo immer der Verlauf 50% deckend ist, ist das Bild zu 50% deckend. Im `luminance`-Fall ist die Helligkeit der Farbe wichtig! Siehe [Alpha-Transparenz versus Luminanz](/de/docs/Web/CSS/CSS_masking/Masking#alpha_transparency_versus_luminance), um zu erfahren, welche Gleichung die R-, G-, B- und A-Kanäle der Farbe verwendet, um die Transparenz der Maske zu bestimmen.

### Der Standardwert von `mask-mode`: `match-source`

Der Standardwert der `mask-mode`-Eigenschaft ist `match-source`. Dieser Wert setzt den `mask-mode`, um dem Maskenmodus-Typ zu entsprechen. Der `match-source`-Wert löst sich auf `alpha` für jede Maske auf, außer für Masken, bei denen die Maskenquelle ein SVG-{{svgelement("mask")}}-Element ist.

Wenn ein SVG-`<mask>`-Element als Maskenquelle verwendet wird, löst sich der `match-source`-Wert auf den Wert der `mask-type`-Eigenschaft des `<mask>`-Elements auf. Hat das `<mask>`-Element (nicht das "gemaskte Element") die CSS-`mask-type`-Eigenschaft nicht definiert, wird diese Eigenschaft standardmäßig auf den Wert des SVG-{{svgAttr("mask-type")}}-Attributs gesetzt, falls vorhanden. Wenn das ebenfalls weggelassen wird, löst sich der `match-source`-Wert auf `luminance` auf.

Weiter mit dem `masked-element`-Beispiel wird, wenn wir die `mask-mode`-Eigenschaft nicht explizit setzen, sie für jede Schicht standardmäßig auf `match-source` gesetzt, als ob wir das Folgende gesetzt hätten:

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: match-source;
}
```

oder, unter Verwendung der `mask`-Kurzform:

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

Die erste Maskenschicht, `url("alphaImage.png")`, referenziert ein Bild. Da dies kein `<mask>`-Element innerhalb eines `<svg>` ist, löst sich der `mask-mode` auf `alpha` auf, wobei die deckenden Teile dieses Bildes die entsprechenden Teile des Elements sichtbar machen, während die transparenten oder halbtransparenten Teile unsichtbar oder teilweise sichtbar sind.

Der `linear-gradient(to right, black, transparent)` ist die zweite Maskenschicht und `radial-gradient(circle, white 50%, transparent 75%)` die dritte. Auch diese sind keine `<mask>`-Elemente, sodass sich der `match-source`-Wert auf `alpha` löst. Der Maskierungseffekt dieser Schichten wird standardmäßig durch die [Undurchsichtigkeit des Verlaufsmasken](/de/docs/Web/CSS/CSS_masking/Masking#opaqueness_versus_transparency) bestimmt.

Die vierte Maskenschicht hat `none` deklariert, was bedeutet, dass die Maske für diese Schicht transparentes Schwarz ist. Die `.masked-element`-Klasse setzt `mask-mode: match-source;`. Wenn `mask-mode` stattdessen eine durch Kommas getrennte Liste von fünf verschiedenen Werten gewesen wäre, hätte der vierte Wert auf diese `none`-Schicht angewendet, sodass der fünfte Wert auf die fünfte Schicht angewendet werden könnte.

Die fünfte Maskenschicht besteht aus einem SVG-{{svgelement("mask")}}-Element, das `svg-mask` als sein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) hat. Während der Standardmaskenmodus der anderen Schichten `alpha` ist, ist der Standardmaskentyp der SVG-`<mask>`-Elemente der `mask-type`-Wert oder, wenn nicht gesetzt, das `mask-type`-Attribut. Wenn auch das nicht definiert ist, ist der Wert standardmäßig `luminance`. Mit anderen Worten, der Maskierungseffekt der `<mask>` wird sowohl durch die Helligkeit als auch die Transparenz der Farben des `<mask>`-Elements bestimmt.

Wenn wir die `mask-mode`-Eigenschaft überhaupt nicht deklarieren und es für jede Maskenschicht auf `match-source` standardmäßig belassen, würde das Ergebnis in diesem `.masked-element`-Fall sich wie folgt auflösen:

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: alpha, alpha, alpha, match-source, luminance;
}
```

oder, unter Verwendung der `mask`-Kurzform:

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

Analog zur {{cssxref("background-position")}}-Eigenschaft legt die {{cssxref("mask-position")}}-Eigenschaft die Anfangsposition des Maskenbildes relativ zum Ursprungskasten der Maskenschicht fest, definiert durch [die `mask-origin`-Eigenschaft](#the_mask-origin_property). Die Syntax folgt dem [`background-position`-Syntaxis der `<position>`-Syntax](/de/docs/Web/CSS/background-position#position), wobei der Wert ein bis vier {{cssxref("&lt;position&gt;")}}-Werte umfasst, die einen bis zwei relative oder absolute Positionsverschiebungen definieren.

### Ein-Wert-Syntax

Wenn nur ein Schlüsselwortwert angegeben ist, gibt dieser Wert die Masken-Ursprungsrand an, an dem die Maske platziert wird, wobei die andere Dimension `center` ist.

Wenn nur ein {{cssxref("&lt;length-percentage&gt;")}}-Wert angegeben ist, gibt dies die X-Koordinate relativ zum linken Rand des Maskenursprungs an, wobei die Y-Koordinate auf `50%` gesetzt wird.

Wenn zwei Schlüsselwortwerte angegeben sind, spielt die Reihenfolge der Werte keine Rolle, aber der Wert darf keine zwei vertikalen oder zwei horizontalen Achsenwerte enthalten; `left right` und `top bottom` sind beide ungültig.

### Zwei-Wert-Syntax

Wenn zwei Werte vorhanden sind, einschließlich eines Schlüsselworts und eines `<length-percentage>`-Werts, spielt die Reihenfolge nur dann eine Rolle, wenn das Schlüsselwort `center` ist:

- Wenn das Schlüsselwort `left` oder `right` ist, definiert es die X-Koordinate relativ zum linken Rand, und der Wert definiert die Y-Koordinate relativ zum oberen Rand.
- Ebenso definiert ein `top` oder `bottom`-Schlüsselwort die Y-Koordinate indem es das Element am oberen oder unteren Rand positioniert, mit dem anderen Wert, der die X-Position relativ zum linken Rand des Maskenursprungskastens definiert.
- Wenn ein Wert das `center`-Schlüsselwort ist und der andere ein `<length-percentage>`, definiert der erste Wert die horizontale Position und der zweite Wert definiert die vertikale Position.

Wenn zwei Werte vorhanden sind und beide `<length-percentage>`-Werte sind, spielt die Reihenfolge erneut eine Rolle; der erste Wert definiert die horizontale Positionierung als Verschiebung vom linken Rand des Maskenpositionierungsbereichs, während der zweite Wert die vertikale Position als Verschiebung vom oberen Rand des Maskenpositionierungsbereichs definiert.

### Vier-Wert-Syntax

Maskenpositionen können auch relativ zu anderen Ecken als der oberen linken sein. Die Vier-Wert-Syntax ermöglicht das Verschieben der Maske von jeder Ecke. Der Wert enthält zwei {{cssxref("length-percentage")}}-Verschiebungen, jede vorangestellt vom Ursprung der Verschiebung. Es spielt keine Rolle, ob Sie das horizontale oder vertikale Paar zuerst deklarieren, aber Sie müssen das Ursprung-Seiten-Schlüsselwort (`left`, `right`, `top`, `bottom`, `x-start`, `x-end`, `y-start`, `y-end`, `block-start`, `block-end`, `inline-start` oder `inline-end`) vor der Verschiebung `<length-percentage>` in jedem Paar angeben, und die zwei Ursprungsseiten können nicht von derselben Achse sein.

In der Zwei-`<length-percentage>`-Syntax sind die Ursprungseiten `top` und `left`, in dieser Reihenfolge. Zum Beispiel ist `mask-position: 10px 20px` das Äquivalent von `mask-position: left 10px top 20px`. Beim Verschieben von oben und links sind die Versatzseiten nicht erforderlich, aber die Reihenfolge spielt eine Rolle. Mit der Vierwert-Syntax können Sie `mask-position` verwenden, um das Maskenbild aus jeder Randkombination zu verschieben, wie `left 10px bottom 20px`, und die Reihenfolge der Seiten spielt keine Rolle, da die Versatzkante durch das vorhergehende Schlüsselwort und nicht durch die Deklarationsreihenfolge definiert wird.

### Prozentwerte

Beim Versetzen mit Prozentwerten wird die Dimension der Maske von der Dimension des Elements subtrahiert, genau wie bei [Prozent-Versatz mit `background-position`](/de/docs/Web/CSS/background-position#regarding_percentages).

### Positionierung von wiederholten Maskenbildern

Die `mask-position`-Eigenschaft definiert die Ausgangsposition des Maskenbildes. Mit "Ausgangsposition" ist gemeint, wenn die [Maske wiederholt wird](#the_mask-repeat_property), platziert der Browser das erste Maskenbild an der durch die `mask-position`-Eigenschaft definierten Position und definiert damit die Position der Maskenwiederholungen.

In diesem Beispiel setzen wir die Position des ersten Bildes auf `bottom right`, was bedeutet, dass die erste Maske am unteren rechten Rand des Maskenursprungskastens platziert wird. Da Maskenbilder standardmäßig wiederholt werden, werden die wiederholten Masken gegen die oberen und linken Seiten der ersten platzierten Maske positioniert.

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

Die `mask-position` definiert die Position der ersten Maskenbildplatzierung. Diese Demo zeigt, wo das erste Bild platziert wird:

```css hidden live-sample___position_no-repeat
img {
  mask-repeat: no-repeat;
}
```

{{EmbedLiveSample("position_no-repeat", "", "260px")}}

Da der Standardwert für die [`mask-repeat`-Eigenschaft](#the_mask-repeat_property) `repeat` ist, werden die Bilder entlang der X- und Y-Achsen basierend auf der Position dieser ersten Maske wiederholt:

{{EmbedLiveSample("position", "", "260px")}}

Das Zwei-Wert-Beispiel definiert die oberen und linken Versätze der ursprünglichen Maske. Das Vier-Wert-Beispiel kombiniert die beiden vorhergehenden Beispiele, positioniert die erste Maske mit den gleichen Versätzen wie das zweite Bild, jedoch von den gleichen Kanten wie im ersten Bild gezeigt.

Im ersten Bild ist der erste zu platzierende Stern der am unteren rechten Rand, mit den wiederholten Sternen darüber und links. Aufgrund dieser Positionierung wird der ursprüngliche Stern nicht abgeschnitten, aber die am höchsten und links gelegensten Sterne werden abgeschnitten.

Wenn wir die `mask-position`-Eigenschaft nicht explizit setzen, wird sie für jede Schicht standardmäßig auf `0% 0%` gesetzt, wobei die obere linke Ecke der Maske an der oberen linken Ecke des Maskenursprungskastens anliegt. Weiter mit dem `masked-element`-Beispiel, es wäre, als ob wir das Folgende gesetzt hätten:

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: match-source;
  mask-position: 0% 0%;
}
```

oder, um das Beispiel mit der `mask`-Kurzform zu erweitern:

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

Wenn ein Element einen Innenabstand (padding), einen Rand oder beides hat, definiert die {{cssxref("mask-origin")}}-Eigenschaft, welcher dieser Kantenwerte als Maskenursprungskasten oder der _Maskenpositionierungsbereich_ fungiert, innerhalb dessen ein Maskenbild für diese Schicht positioniert ist. Die `mask-origin`-Eigenschaft ist analog zur {{cssxref("background-origin")}}-Eigenschaft, jedoch mit einem anderen Anfangswert und SVG-spezifischen Werten.

HTML-Elemente können Masken innerhalb ihres Inhaltsrahmenkastens, Randrahmenkastens oder Inhaltskastens enthalten. Zum Beispiel, wenn die `mask-position` `top left` ist, bezieht sich das auf den äußeren Rand des Rahmens, den äußeren Rand der Innenabstandes oder den äußeren Rand des Inhalts?

Im [`mask-position`](#the_mask-position_property)-Maskierungsbeispiel wurde die definierte Position relativ zum Randkasten (dem Standardverhalten) definiert, obwohl es bemerkenswert ist, dass das `<img>` weder einen Rahmen noch einen Abstand festgelegt hatte, und daher in diesem Fall der Inhaltskasten, der Innenabstandskasten und der Rahmenkasten gleich wären.

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

In diesem Beispiel bringt die `mask-position` die ursprüngliche Maske in die obere linke Ecke des `<img>`-Elements, das einen großen Rahmen und Innenabstand hat, mit einer grünen Hintergrundfarbe, um das Sehen der Ster-Maskierung im Innenabstandsbereich zu ermöglichen.

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

Ändern Sie den Wert der `mask-origin`-Eigenschaft, indem Sie die ausgewählte Optionsschaltfläche ändern, und beachten Sie die Position der oberen linken Ster-Maske, während Sie dies tun.

{{EmbedLiveSample("origin", "", "350px")}}

Der Standardwert ist `border-box`. Mit diesem Wert wird die Ausgangsmaske an der oberen linken Kante des Rahmens platziert und nicht abgeschnitten. Wird die Ausgangsmaske am äußeren oder inneren Rand des Innenabstandes platziert, besteht Platz über und links davon; diese wiederholten Masken werden abgeschnitten.

Weiter mit dem `masked-element`-Beispiel, wenn wir die `mask-origin`-Eigenschaft nicht explizit setzen, wird sie für jede Schicht standardmäßig auf `border-box` gesetzt, als ob wir das Folgende gesetzt hätten:

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

oder, um das Beispiel mit der `mask`-Kurzform zu erweitern:

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

Für SVG-Elemente, die keine zugehörigen CSS-Layout-Kästen haben, kann eine Maske innerhalb der Füllung, des Strichs oder der Sichtbox des SVG-Elements enthalten sein.

## Die `mask-clip`-Eigenschaft

Die {{cssxref("mask-clip")}}-Eigenschaft bestimmt den Bereich des Elements, der von einer Maske betroffen ist, indem das Element effektiv an der definierten Boxkante abgeschnitten wird. Sie ist analog zur {{cssxref("background-clip")}}-Eigenschaft, jedoch mit einigen unterschiedlichen Werten.

Da die `mask-clip`-Eigenschaft alle `mask-origin`-Werte akzeptiert und beide den gleichen `border-box`-Standardwert haben, scheinen die beiden Eigenschaften ähnlich, aber sie dienen sehr unterschiedlichen Zwecken. Während `mask-origin` bestimmt, wo ein Maskenbild positioniert wird, führt die `mask-clip`-Eigenschaft dazu, dass das ursprüngliche Element seinen Inhalt auf das festgelegte Kästchen klippt. Es ist wichtig, beide zu verstehen: Wenn die `mask-origin` dazu führt, dass die `mask-position` das Maskenbild außerhalb des Clippingbereichs platziert, wird die Maske abgeschnitten.

Die `mask-clip`-Eigenschaft akzeptiert alle `mask-origin`-Werte sowie ihren eigenen `no-clip`-Wert. Der `no-clip`-Wert setzt den gemalten Inhalt, nicht abgeschnitten zu werden. Sie können das Maskenbild jedoch weiterhin klippen, indem Sie es außerhalb des Randinhaltsbereichs mit `mask-position`-Werten positionieren, die kleiner als Null sind oder sich auf mehr als 100% auflösen.

Die `mask-clip`- und `mask-origin`-Eigenschaften auf unterschiedliche Werte zu setzen, kann dazu führen, dass das Maskenschichtbild abgeschnitten wird. Wenn ein Element mit einem Rahmen und einem Innenabstand `mask-clip` auf `content-box` setzt und `mask-origin` auf `border-box` setzt und die `mask-position` auf den `top left`-Rand setzt, wird das Maskenschichtbild an der oberen linken Randkante abgeschnitten.

Das nächste Beispiel fügt dem vorherigen Beispiel Clipping-Optionen hinzu, um die verschiedenen nicht-SVG `mask-clip`-Werte zu demonstrieren und zu zeigen, wie sie die verschiedenen `mask-origin`-Werte beeinflussen.

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

Die erste Maske wird am oberen linken Rand des Maskenursprungscontainers platziert und dann wiederholt. Wenn der Ursprungsbox der `border-box` ist und die Clippingregion der `content-box`, werden die oberen und linken Bereiche des Maskenursprungscontainers abgeschnitten. In der Regel möchten Sie, dass `mask-clip` dasselbe ist wie `mask-origin`.

Weiter mit dem `masked-element`-Beispiel, wenn wir die `mask-clip`-Eigenschaft nicht explizit setzen, wird sie für jede Schicht standardmäßig auf `border-box` gesetzt, als ob wir das Folgende gesetzt hätten:

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

oder, um das Beispiel mit der `mask`-Kurzform zu erweitern:

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

In der `mask`-Kurzform, wenn nur ein [`<geometry-box>`](/de/docs/Web/CSS/clip-path#geometry-box) Wert gegeben ist, setzt er sowohl die `mask-origin` als auch die `mask-clip`-Eigenschaftswerte. Wenn zwei `<geometry-box>`-Werte vorhanden sind, definiert der erste die `mask-origin` und der zweite die `mask-clip`.

Für Maskenschichtbilder, die kein SVG-{{svgelement("mask")}}-Element referenzieren, definiert die `mask-clip`-Eigenschaft, ob der Maskenmalbereich oder der vom Masken betroffene Bereich der Rand, der Innenabstand oder der Inhaltskasten ist. Der bemalte Inhalt des Elements wird auf diesen Bereich beschränkt sein.

Wenn die {{cssxref("mask-image")}} Leistung der Maskenschicht eine `<mask>` ist, hat die `mask-clip`-Eigenschaft keine Wirkung. Stattdessen bestimmen die {{svgAttr("x")}}, {{svgAttr("y")}}, {{svgAttr("width")}}, {{svgAttr("height")}} und {{svgAttr("maskUnits")}} Attribute des `<mask>`-Elements den Maskenmalbereich.

## Die `mask-size`-Eigenschaft

Die {{cssxref("mask-size")}}-Eigenschaft wird verwendet, um Maskenschichten zu skalieren. Diese Eigenschaft ist analog zur {{cssxref("background-size")}}-Eigenschaft und nimmt die gleichen Werte. Beim Skalieren Ihrer Masken sollten Sie bedenken, dass Bereiche des Elements, die nicht von den Maskenbildern abgedeckt sind, ausgeblendet werden.

Es gibt drei Möglichkeiten, eine `mask-size` zu deklarieren:

- das Schlüsselwort `cover` oder `contain`,
- eine Längeneinheit, ein Prozentwert oder das Schlüsselwort `auto`, oder
- zwei Werte, die eine Kombination aus Längenwerten, Prozentwerten und dem Schlüsselwort `auto` sind.

Das Maskenbild kann auf seiner natürlichen Größe belassen, gestreckt oder eingeschränkt werden, um in den verfügbaren Raum zu passen. Das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Maskenbildes wird standardmäßig beibehalten, aber die Deklaration von zwei `<length-percentage>`-Werten kann das Maskenbild verzerren, wenn das Verhältnis der beiden Werte nicht dem des ursprünglichen Bildes entspricht (`mask-repeat: round` ist das andere Eigenschaft/Wert-Paar, das das Maskenbild verzerren kann).

Wenn die `mask-size` auf `contain` gesetzt ist, wird das Maskenbild die größte Größe sein, die es sein kann, während es vollständig innerhalb des Maskenpositionierungsbereichs enthalten ist. In diesem Fall wird das Maskenbild nicht abgeschnitten, sondern vollständig enthalten.

Wenn auf `cover` gesetzt, wird das Maskenbild die kleinste Größe sein, die es sein kann, um den gesamten Maskenpositionierungsbereich vollständig abzudecken, wobei die Maske abgeschnitten wird, wenn das Seitenverhältnis der Maske vom Seitenverhältnis des Maskenpositionierungsbereichs abweicht.

Mit anderen Worten, bei `cover` und `contain`, wird mindestens eine Dimension der Maske dieselbe Größe haben wie die gleiche Dimension des Maskenpositionierungsbereichs; das Maskenbild wächst oder schrumpft so, dass entweder die Breite dieselbe Breite wie der Maskenpositionierungsbereich ist oder die Höhe des Maskenbildes gleich der Höhe des Maskenpositionierungsbereichs ist.

Mit `cover`, `contain` und `<percentage>`-Werten ist die Größe relativ zum Ursprungsbox. In unserem Sternmasken- und Flaggenbildbeispiel haben sowohl das Maskenbild als auch das `<img>`-Bild das Seitenverhältnis `1:1`, was bedeutet, dass in diesem Fall `cover`, `contain` und `100%` alle die gleiche Maskengröße ergeben. Dieses Beispiel zeigt, wie, wenn `mask-size` auf `cover`, `contain` oder einen `<percentage>`-Wert gesetzt wird, die tatsächliche Größe der Maske je nach Wert der [`mask-origin`-Eigenschaft](#the_mask-origin_property) unterschiedlich sein kann:

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

Dieses Beispiel enthielt einen `<percentage>`-Wert. Wenn ein `<length-percentage>`-Wert angegeben ist, definiert er nur die Maskenbreite, wobei die Höhe auf `auto` bleibt, was das Seitenverhältnis beibehält. Wenn zwei Werte spezifiziert sind, definiert der erste die Maskenbreite und der zweite definiert ihre Höhe.

Der Standardwert von `mask-size` ist `auto`, der die Maske in ihrer {{Glossary("intrinsic_size", "intrinsischen Größe")}} rendert, der Größe, in der die Maske angezeigt werden würde, wenn kein CSS angewendet würde. Das zugrunde liegende {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Maskenbildes wird beibehalten, wenn Sie einen einzelnen `<length-percentage>`-Wert oder zwei Werte im gleichen Verhältnis wie das Seitenverhältnis festlegen. Wenn Sie zwei Werte festlegen, die nicht im selben Verhältnis wie das Seitenverhältnis sind, wird das Maskenbild verzerrt.

Wie bei allen langen Bestandteilen der Kurzform-Eigenschaft, wenn die {{cssxref("mask")}}-Kurzform-Eigenschaft gesetzt ist und der Wert der `mask-size`-Eigenschaft in keiner Maskenschicht definiert ist, wird der `mask-size`-Wert für diese Maskenschichten auf den ursprünglichen Wert `auto` zurückgesetzt.

Wenn das Bild keine intrinsische Proportion hat, zum Beispiel im Fall eines [CSS-Verlaufs](/de/docs/Web/CSS/gradient), ist die Standardeinstellung `auto` die Gesamtheit des Maskenpositionierungsbereichs, wie durch [die `mask-origin`-Eigenschaft](#the_mask-origin_property) festgelegt.

Weiter mit dem `masked-element`-Beispiel, wenn wir die `mask-size`-Eigenschaft nicht explizit setzen, wird sie für jede Schicht standardmäßig auf `auto` gesetzt, als ob wir das Folgende gesetzt hätten:

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

oder, um das Beispiel mit der `mask`-Kurzform zu erweitern, mit dem `mask-size`-Bestandteil hinter dem `mask-position`-Wert, getrennt durch einen Schrägstrich (/):

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

Die {{cssxref("mask-repeat")}}-Eigenschaft definiert, wie Maskenbilder wiederholt oder gekachelt werden, nachdem das ursprüngliche Maskenbild skaliert und positioniert wurde. Die `mask-repeat`-Eigenschaft bestimmt, ob und wie das Maskenbild entlang der horizontalen und vertikalen Achsen wiederholt wird. In den meisten der vorherigen Beispiele haben Sie vielleicht bemerkt, dass die Sternmaske entlang der X- und Y-Achsen wiederholt wurde. Dies liegt daran, dass `repeat` der Standardwert ist.

Die `mask-repeat`-Eigenschaft ist analog zur {{cssxref("background-repeat")}}-Eigenschaft und akzeptiert die gleichen [`<repeat-style>`](/de/docs/Web/CSS/mask-repeat#values) Werte. Genau wie bei `background-repeat` wird die erste (und möglicherweise einzige) Wiederholung des Maskenbildes durch [die `*-position`-Eigenschaft](#the_mask-position_property) positioniert und durch [die `*-size`-Eigenschaft](#the_mask-size_property) skalieren. Die Positionen der wiederholten Hintergrund- oder Maskenbilder basieren auf diesem anfänglichen Bildbeispiel.

Weiter mit dem `masked-element`-Beispiel, wenn wir die `mask-repeat`-Eigenschaft nicht explizit setzen, wird sie für jede Schicht standardmäßig auf `repeat` gesetzt, als ob wir das Folgende gesetzt hätten:

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

oder, um das Beispiel mit der `mask`-Kurzform zu erweitern:

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

Die {{cssxref("mask")}}-Kurzform umfasst die {{cssxref("mask-composite")}}-Eigenschaft, die definiert, wie mehrere Masken kombiniert werden, um den endgültigen Maskeneffekt zu erzeugen. Jeder Wert in der durch Kommas getrennten Liste von Werten bestimmt, ob der Browser die zugehörige Maskenschicht zu oder von den darunter liegenden Maskenschichten `hinzufügen`, `subtrahieren`, `schneiden` oder `ausschließen` soll. Ähnlich wie `mask-mode`, und den anderen `mask-*`-Eigenschaften, gibt es in der {{cssxref("background")}}-Kurzform keine analoge Eigenschaft.

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

In diesem Beispiel fügen wir zwei `mask-image`-Werte hinzu, darunter die Stern- und den Verlauf aus den vorhergehenden Beispielen als Maskenbilder:

```css live-sample___composite
img {
  mask-image:
    repeating-linear-gradient(
      to bottom right,
      red 0 20px,
      #f005 20px 40px,
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

Die halbtransparente Sternmaske wird je nach `mask-composite`-Wert zur Streifenmaske hinzugefügt, von ihr subtrahiert, mit ihr geschnitten oder von ihr ausgeschlossen.

Die `mask-composite`-Eigenschaft ist nur in Fällen mit zwei oder mehr Maskenschichten relevant. Dies liest "Maskenschichten", nicht "Maskenbilder", weil, wenn `none` enthalten ist, die transparente schwarze Maske zusammengesetzt wird. Ein `none`-Wert kann einen tiefgreifenden Effekt auf die Maskierung im Falle von `subtract` und `intersect` haben. Wenn der `mask-mode` sich auf `luminance` löst, entfernt das Subtrahieren einer schwarzen Maske die gesamte Maske (das Element wird ausgeblendet). Wenn `none` die letzte Schicht mit `mask-composite: intersect` für diese Schicht gesetzt ist, wird das gesamte Element ausgeblendet. Hier fügen wir dem vorherigen Beispiel eine dritte Schicht mit `none` hinzu:

```css live-sample___composite3
img {
  mask-image:
    url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg"),
    repeating-linear-gradient(
      to bottom right,
      red 0 20px,
      #f005 20px 40px,
      transparent 40px 60px
    ),
    none;
}
```

{{EmbedLiveSample("composite3", "", "600px")}}

Achten Sie darauf, wie das `intersect`-Beispiel alles ausschließt, weil die transparente schwarze Maske nichts schneidet.

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
      red 0 20px,
      #f005 20px 40px,
      transparent 40px 60px
    );
}
```

{{EmbedLiveSample("composite2", "", "350px")}}

Im ersten Beispiel werden die Sterne von den Streifen subtrahiert. Im zweiten werden die Streifen von den Sternen subtrahiert.

Wie alle anderen `mask`-Komponenteneigenschaften nimmt `mask-composite` eine durch Kommas getrennte Liste von Werten an. Da die Eigenschaft beeinflusst, wie Masken kombiniert werden, ist diese Eigenschaft nur für mehrere Maskenschichten relevant, und die Anzahl der verwendeten Werte ist um eins weniger als die Anzahl der Maskenschichten.

Das letzte Paar von Masken wird zuerst zusammengesetzt. Das vorherige Maskenbild wird dann mit der vorherigen Zusammensetzung zusammengesetzt.

Weiter mit dem `masked-element`-Beispiel, wenn wir die `mask-composite`-Eigenschaft nicht explizit setzen, wird sie für jede Schicht standardmäßig auf `add` gesetzt, als ob wir das Folgende gesetzt hätten:

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

In diesem Fall wird das `<mask>`-Element mit der `none`-Schicht zusammengesetzt. Dann wird der radiale Verlauf mit dem Ergebnis der vorhergehenden Zusammensetzung zusammengesetzt und so weiter.

Wie wir mit allen anderen Komponenteneigenschaften gesehen haben, könnten wir die `mask`-Kurzform verwendet haben:

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
- [Einführung in das CSS-Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking)-Modul
