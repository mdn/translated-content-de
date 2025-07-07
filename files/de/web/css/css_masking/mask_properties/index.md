---
title: CSS-Maskeneigenschaften
slug: Web/CSS/CSS_masking/Mask_properties
l10n:
  sourceCommit: 2d19a88d0cc560f031a07585bf57f005fec02670
---

{{CSSRef}}

Das CSS-Masking ist eine Technik, die es ermöglicht, sichtbare Teile eines Elements durch die Anwendung einer Maske zu definieren, die partsweise Teile des Elements basierend auf den Alpha-Kanälen und optional Farben der angewendeten Maskenbilder enthüllt oder verbirgt.

Der [einführende Leitfaden zu Maskierungen](/de/docs/Web/CSS/CSS_masking) stellt die verschiedenen Typen von Maskenbildern und deren Modi vor. Der Leitfaden zum [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks) behandelt die [Maskenschichten](/de/docs/Web/CSS/CSS_masking/Multiple_masks#understanding_mask_layers) und die {{cssxref("mask")}} Kurzform-Eigenschaft und bietet eine kurze Einführung in die Komponenten-Eigenschaften der Kurzform. In diesem Leitfaden erkunden wir diese Komponenten-Eigenschaften ausführlicher und betrachten, wie sie interagieren. Wir erläutern auch, wie, in Fällen, in denen mehrere Maskenbilder deklariert werden, die [Maskenschichten zusammengefügt](#the_mask-composite_property) oder kombiniert werden.

CSS-Masken bestehen aus einer oder mehreren Maskenschichten, wobei eine Maskenschicht für jeden Wert in der durch Kommas getrennten Liste von `mask` oder `mask-image` Werten erstellt wird, unabhängig davon, ob die Werte Bilder, Maskenquellen oder das Schlüsselwort `none` sind. Jedes {{cssxref("mask-image")}} wird relativ zu einem [Ursprung](#the_mask-origin_property) positioniert. Die Maskenbilder können [skaliert](#the_mask-size_property), [wiederholt](#the_mask-repeat_property) und [beschnitten](#the_mask-clip_property) werden und dann mit den vorherigen Schichten zusammengefügt werden, um die endgültige visuelle Maske auf dem Element zu erstellen.

## Die `mask-image`-Eigenschaft

Die Mindestanforderung, um eine Maske zu erstellen, ist eine {{cssxref("mask-image")}} Eigenschaft, die auf einen anderen Wert als `none` gesetzt ist.
Das Schlüsselwort `none` innerhalb einer Liste von Maskenquellen erstellt eine Maskenschicht. Wenn jedoch `none` der einzige Wert der `mask-image`-Eigenschaft ist, tritt keine Maskierung auf.

Das Maskenbild kann ein [CSS-Gradient](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients), ein [importiertes Bild](/de/docs/Web/CSS/CSS_masking/Masking#with_imported_images) (wie PNG, SVG usw.) oder ein SVG {{svgelement("mask")}} Element sein.

In diesem Beispiel erstellen wir fünf Maskenschichten, einschließlich eines importierten Bildes, zweier Gradienten, einer Schicht ohne Bild und einer SVG `<mask>` Quelle als Maskenbild.

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
}
```

Da eines der Maskenbilder als `none` angegeben ist, werden nur vier Maskenbilder auf das `.masked-element` Element angewendet, während fünf Maskenschichten erzeugt werden.

### Die Bedeutung von `none`

Die `none` Schicht hat im Allgemeinen keinen visuellen Effekt (siehe die [`mask-composite` Eigenschaft](#the_mask-composite_property) für deren Auswirkungen auf die angewendete Maske), aber da jeder Wert in einer durch Kommas getrennten Liste von `mask-*` Werten auf eine separate Maskenschicht angewendet wird, erfüllt der `none` Wert einen wichtigen Zweck, selbst wenn er die zusammengesetzte Maske nicht ändert.

Diese vierte Schicht in unserer fünf-Schicht-Struktur wird dem vierten Wert eines anderen durch Kommas getrennten `mask-*` Eigenschaftswerts entsprechen. Wie bereits erwähnt, wird die Anzahl der Schichten durch die Anzahl der durch Kommas getrennten Werte im {{cssxref("mask-image")}} Eigenschaftswert bestimmt, selbst wenn ein Wert `none` ist. Jeder `mask-*` Wert wird in der Reihenfolge den `mask-image` Werten zugeordnet. Wenn die Anzahl der Werte in einer `mask-*` Eigenschaft von der Anzahl der Maskenschichten abweicht, werden übermäßige Werte ignoriert oder, wenn die Eigenschaft weniger Werte als die Anzahl der Maskenschichten hat, werden die Werte wiederholt.

Wenn eine `mask-*` Eigenschaft nur einen Wert hat, gilt dieser Wert für alle Schichten. Wenn wir fünf Werte haben, gilt der vierte Wert für die `none` Schicht, wobei der letzte Wert auf die `<mask>` Quellen-Schicht angewendet wird. Wenn es zwei durch Kommas getrennte Werte gibt, gilt der erste Wert nur für die ungeraden Schichten, einschließlich dieser `<mask>` Quellen-Schicht. Zum Beispiel kann jede `mask-*` Eigenschaft eine unterschiedliche Anzahl an Werten haben:

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

In diesem Fall wird jede ungerade Schicht entlang der x-Achse wiederholt, während jede gerade Schicht entlang der y-Achse wiederholt wird. Die erste und vierte Schichtbilder werden zentriert, während die zweite und fünfte in der oberen linken Ecke positioniert werden. Das `none` bedeutet, dass das fünfte Schicht `#svg-mask` Bild entlang der x-Achse ab der oberen linken Ecke wiederholt wird.

Erfahren Sie mehr über [Maskenschichten und das `none` Schlüsselwort](/de/docs/Web/CSS/CSS_masking/Multiple_masks#mask_layers_and_the_none_keyword).

## Die `mask-mode`-Eigenschaft

Die {{cssxref("mask-mode")}} Eigenschaft kann verwendet werden, um den Modus jeder Maskenschicht auf entweder `alpha` oder `luminance` einszustellen oder es auf den Modus der Quelle durch Einstellen des Werts auf `match-source`, was der Standard ist, einzustellen. Während die meisten `mask-*` Eigenschaften eine analoge `background-*` Eigenschaft haben (`mask-image` ist analog zu der {{cssxref("background-image")}} Eigenschaft, zum Beispiel), haben `mask-mode` und [`mask-composite`](#the_mask-composite_property) keine analoge {{cssxref("background")}}-Eigenschaft.

### Maskenarten: `alpha` und `luminance`

Jede Maske ist entweder eine `alpha` oder eine `luminance` Maske.

Bei `alpha` Masken ist die Alpha-Transparenz jedes Maskenpixels wichtig. Wo immer die Maske undurchsichtig ist, werden die entsprechenden Teile des Elements sichtbar. Wo immer die Maske transparent ist, werden die entsprechenden Teile des Elements verborgen. Wo immer die Maske halbtransparent ist, wird das Element gleichermaßen halbtransparent sein. Die Farbe der Maske spielt keine Rolle, nur die Alpha-Transparenz der Farben.

Bei `luminance` Masken bestimmen sowohl die [Helligkeit der Maskenfarben](/de/docs/Web/CSS/CSS_masking/Masking#alpha_transparency_versus_luminance) als auch der Alphakanal die Undurchsichtigkeit der maskierten Bereiche.

> [!NOTE]
> Alle nachfolgenden Beispiele verwenden das folgende Bild als `background-image` auf ein Element, auf das Masken angewendet werden:
>
> <img src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg" alt="Pride Flagge" />

Dieses Beispiel zeigt den Unterschied zwischen `alpha` und `luminance` Masken. Die Masken sind gleich, aber in der `alpha` Maske zählt nur die Alpha-Transparenz der Farbverläufe der Masken. Im `luminance` Beispiel sind R, G, B und A alle relevant.

Zwei Container enthalten Bilder, während der letzte leer ist, aber enthalten ist, um den Farbverlauf anzuzeigen, den wir als unsere `mask-image`-Quelle verwenden werden.

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

Wir deklarieren einen [`repeating-linear-gradient`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) mit roten, transparenten und halbtransparenten roten diagonalen Streifen. Dieser Verlauf wird als unsere Maske und, für den letzten Container, als Hintergrundbild verwendet:

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

Im `alpha` Fall zählt nur die Transparenz der Farbverläufe. Wo der Verlauf undurchsichtig rot ist, ist das Bild undurchsichtig. Wo der Verlauf transparent ist, ist das Bild verborgen. Wo der Verlauf zu 50% undurchsichtig ist, ist das Bild zu 50% undurchsichtig. Im `luminance` Fall zählt die Helligkeit der Farbe! Sehen Sie sich [Alpha-Transparenz gegenüber Luminanz](/de/docs/Web/CSS/CSS_masking/Masking#alpha_transparency_versus_luminance) an, um die Gleichung zu lernen, die die Farbkanäle R, G, B und A verwendet, um die Undurchsichtigkeit der Maske zu bestimmen.

### Der Standardwert von `mask-mode`: `match-source`

Der Standardwert der `mask-mode`-Eigenschaft ist `match-source`. Dieser Wert setzt den `mask-mode`, um mit dem Maskentyp übereinzustimmen. Der `match-source` Wert löst sich zu `alpha` für jede Maske auf, außer Masken, bei denen die Maskenquelle ein SVG {{svgelement("mask")}} Element ist.

Wenn ein SVG `<mask>` Element als Maskenquelle verwendet wird, löst sich der `match-source` Wert in den Wert der `<mask>` Element's {{cssxref("mask-type")}} Eigenschaft auf. Wenn das `<mask>` Element (nicht das "maskierte Element") keine CSS `mask-type` Eigenschaft definiert hat, wird diese Eigenschaft auf den Wert des SVG {{svgAttr("mask-type")}} Attributs eingestellt, falls vorhanden. Wenn dies ebenfalls weggelassen wird, wird der `match-source` Wert auf `luminance` aufgelöst.

Weiter mit dem `masked-element` Beispiel, wenn wir die `mask-mode`-Eigenschaft nicht explizit festlegen, wird sie standardmäßig für jede Schicht `match-source` verwenden, als ob wir folgendes festgelegt hätten:

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
  mask-mode: match-source;
}
```

oder, unter Verwendung der `mask` Kurzform:

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

Die erste Maskenschicht, `url(alphaImage.png)`, verweist auf ein Bild. Da dies kein `<mask>` Element innerhalb eines `<svg>` ist, löst sich der `mask-mode` auf `alpha` auf, wobei die undurchsichtigen Teile dieses Bildes die entsprechenden Teile des Elements sichtbar machen, während die transparenten oder halbtransparenten Teile unsichtbar oder teilweise sichtbar sind.

Der `linear-gradient(to right, black, transparent)` ist die zweite Maskenschicht und `radial-gradient(circle, white 50%, transparent 75%)` ist die dritte. Da dies ebenfalls keine `<mask>` Elemente sind, löst sich der `match-source` Wert auf `alpha` auf. Der maskierende Effekt dieser Schichten wird standardmäßig durch die [Undurchsichtigkeit des Verlaufsmaskenbildes](/de/docs/Web/CSS/CSS_masking/Masking#opaqueness_versus_transparency) bestimmt.

Die vierte Maskenschicht hat `none` deklariert, was bedeutet, dass die Maske für diese Schicht transparentes Schwarz ist. Die `.masked-element` Klasse setzt `mask-mode: match-source;`. Wenn `mask-mode` stattdessen eine durch Kommas getrennte Liste von fünf verschiedenen Werten gewesen wäre, hätte der vierte Wert auf diese `none` Schicht angewendet, sodass der fünfte Wert auf die fünfte Schicht angewendet wird.

Die fünfte Maskenschicht besteht aus einem SVG {{svgelement("mask")}} Element, das `svg-mask` als seine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) hat. Während der Standardmaskenmodus der anderen Schichten `alpha` ist, ist der Standard [Maskentyp von SVG `<mask>` Elementen](/de/docs/Web/CSS/CSS_masking/Masking#svg_mask_as_mask_source) der `mask-type` Wert oder, wenn nicht gesetzt, das `mask-type` Attribut. Wenn das auch nicht definiert ist, wird der Wert auf `luminance` eingestellt. Mit anderen Worten, der maskierende Effekt des `<mask>` wird durch sowohl die Helligkeit als auch die Transparenz der Farben des `<mask>` Elements bestimmt.

Wenn wir die `mask-mode`-Eigenschaft überhaupt nicht deklarieren und sie für jede Maskenschicht auf `match-source` zurückfallen lassen, würde das Ergebnis in diesem `.masked-element` Fall auf folgendes gelöst werden:

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
  mask-mode: alpha, alpha, alpha, match-source, luminance;
}
```

oder, unter Verwendung der `mask` Kurzform:

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

Analog zur {{cssxref("background-position")}} Eigenschaft, setzt die {{cssxref("mask-position")}} Eigenschaft die anfängliche Position des Maskenbildes relativ zur Ursprungsbox der Maskenschicht, die durch [die `mask-origin` Eigenschaft](#the_mask-origin_property) definiert ist. Die Syntax folgt der [`background-position`'s `<position>` Syntax](/de/docs/Web/CSS/background-position#position), wobei der Wert ein, zwei oder vier {{cssxref("&lt;position&gt;")}} Werte sein kann, die ein oder zwei relative oder absolute Positionsversätze definieren.

### Einwertige Syntax

Wenn nur ein Schlüsselwortwert angegeben wird, gibt dieser Wert die Ursprungsrandkante der Maske an, gegen die die Maske platziert wird, wobei die andere Dimension `center` ist.

Wenn nur ein {{cssxref("&lt;length-percentage&gt;")}} Wert angegeben wird, spezifiziert dies die X-Koordinate relativ zur linken Kante des Maskenursprungs, wobei die Y-Koordinate auf `50%` eingestellt wird.

Wenn zwei Schlüsselwortwerte angegeben werden, spielt die Reihenfolge der Werte keine Rolle, aber der Wert darf nicht zwei vertikale oder zwei horizontale Achsenwerte enthalten; `left right` und `top bottom` sind beide ungültig.

### Zweiwertige Syntax

Wenn zwei Werte vorhanden sind, darunter ein Schlüsselwort und ein `<length-percentage>` Wert, spielt die Reihenfolge nur eine Rolle, wenn das Schlüsselwort `center` ist:

- Wenn das Schlüsselwort `left` oder `right` ist, definiert es die X-Koordinate relativ zur linken Kante, und der Wert definiert die Y-Koordinate relativ zur oberen Kante.
- Ebenso definiert ein `top` oder `bottom` Schlüsselwort die Y-Koordinate, um das Element gegen die obere oder untere Kante zu positionieren, wobei der andere Wert die X-Wert relativ zur linken Kante der Maskenursprungsbox definiert.
- Wenn ein Wert das Schlüsselwort `center` ist und der andere ein `<length-percentage>`, definiert der erste Wert die horizontale Position und der zweite Wert die vertikale Position.

Wenn zwei Werte vorhanden sind und beide `<length-percentage>` Werte sind, spielt die Reihenfolge wieder eine Rolle; der erste Wert definiert die horizontale Positionierung als einen Versatz von der linken Kante des Maskenpositionierungsbereichs, während der zweite Wert die vertikale Position als Versatz von der oberen Kante des Maskenpositionierungsbereichs definiert.

### Vierwertige Syntax

Maskenpositionen können auch relativ zu Ecken andere als der oberen linken sein. Die vier-Wert-Syntax ermöglicht das Verschieben der Maske von einer beliebigen Ecke. Der Wert beinhaltet zwei {{cssxref("length-percentage")}} Versätze, jeweils vorangestellt von der Ursprungs-Seite für diesen Versatz. Ob Sie das horizontale oder vertikale Paar zuerst deklarieren, spielt keine Rolle, aber Sie müssen das Ursprungs-Seiten-Schlüsselwort (`left`, `right`, `top`, `bottom`, `x-start`, `x-end`, `y-start`, `y-end`, `block-start`, `block-end`, `inline-start`, oder `inline-end`) vor dem Versatz `<length-percentage>` in jedem Paar deklarieren, und die zwei Ursprungs-Seiten dürfen nicht von der gleichen Achse stammen.

In der zwei `<length-percentage>` Syntax sind die Ursprung-Seiten `top` und `left`, in dieser Reihenfolge. Zum Beispiel ist `mask-position: 10px 20px` dasselbe wie `mask-position: left 10px top 20px`. Wenn Sie vom oberen und linken Rand verschieben, sind die Versatz-Seiten nicht erforderlich, aber die Reihenfolge ist wichtig. Mit der vier-Wert-Syntax können Sie `mask-position` verwenden, um das Maskenbild von jedem Rand-Kombination, wie `left 10px bottom 20px`, zu verschieben, und die Reihenfolge der Seiten spielt keine Rolle, da die Versatz-Kante durch das voranstehende Schlüsselwort, anstatt durch die Deklarationsreihenfolge definiert ist.

### Prozentualwerte

Beim Verschieben mit Prozentualwerten wird die Dimension der Maske von der Dimension des Elements subtrahiert, genauso wie es bei [prozentualen Versätzen mit `background-position`](/de/docs/Web/CSS/background-position#regarding_percentages) gemacht wird.

### Positionierung wiederholter Maskenbilder

Die `mask-position` Eigenschaft definiert die anfängliche Position des Maskenbildes. Durch "anfängliche Position" wird, wenn die [Maske wiederholt wird](#the_mask-repeat_property), das erste Maskenbild an der durch die `mask-position`-Eigenschaft definierten Position platziert, wodurch die Platzierung der Maskenwiederholungen definiert wird.

In diesem Beispiel setzen wir die Position des ersten Bildes auf `bottom right`, was bedeutet, dass die erste Maske an der unteren rechten Kante der Ursprungsbox der Maske platziert wird. Da Maskenbilder standardmäßig wiederholt werden, werden die wiederholten Masken gegen die Oberseite und linke Seite der ersten platzierten Maske positioniert.

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

Die `mask-position` definiert die Position des ersten Maskenbildes. Diese Demo zeigt, wo das erste Bild platziert wird:

```css hidden live-sample___position_no-repeat
img {
  mask-repeat: no-repeat;
}
```

{{EmbedLiveSample("position_no-repeat", "", "260px")}}

Da der Standardwert für die [`mask-repeat` Eigenschaft](#the_mask-repeat_property) `repeat` ist, werden die Bilder entlang der X- und Y-Achse basierend auf der Position des ersten Masken wiederholt:

{{EmbedLiveSample("position", "", "260px")}}

Das Zwei-Wert-Beispiel definiert die oberen und linken Versätze des ursprünglichen Masks. Das Vier-Wert-Beispiel kombiniert die vorherigen zwei Beispiele, wobei die erste Maske mit den gleichen Versätzen wie das zweite Bild positioniert wird, jedoch von den gleichen Rändern wie im ersten Bild gezeigt.

Im ersten Bild ist der erste Stern, der platziert wird, der am unteren rechten, mit den wiederholten Sternen darüber und links. Aufgrund dieser Positionierung wird der anfängliche Stern nicht beschnitten, aber die am weitesten oben und links stehenden Sterne werden beschnitten.

Wenn wir die `mask-position`-Eigenschaft nicht explizit festlegen, wird sie standardmäßig für jede Schicht `0% 0%` verwenden, wobei die obere linke Ecke der Maske gegen die obere linke Ecke der Ursprungsbox der Maske stößt. Fortführend mit dem `masked-element` Beispiel, wäre es so, als hätten wir folgendes festgelegt:

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
  mask-mode: match-source;
  mask-position: 0% 0%;
}
```

oder, erweiternd auf das Beispiel mit der `mask` Kurzform:

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

Wenn ein Element Padding, einen Rahmen oder beides hat, definiert die {{cssxref("mask-origin")}} Eigenschaft, welche dieser Box-Kantenwerte als Ursprungsbox der Maske fungiert, oder den _Masken-Positionierungsbereich_, innerhalb dessen ein Maskenbild für diese Schicht positioniert wird. Die `mask-origin` Eigenschaft ist analog zur {{cssxref("background-origin")}} Eigenschaft, jedoch mit einem anderen Ausgangswert und SVG-spezifischen Werten.

HTML-Elemente können Masken enthalten, die innerhalb ihrer Inhaltsrahmenbox, Pufferbox oder Inhaltsbox enthalten sind. Zum Beispiel, wenn die `mask-position` auf `top left` steht, ist dies relativ zur äußeren Kante des Rahmens, zur äußeren Kante des Paddings oder zur äußeren Kante des Inhalts?

Im [`mask-position`](#the_mask-position_property) Maskierungsbeispiel war die definierte Position relativ zur border-box (dem Standardverhalten), obwohl es sich anmerken lässt, dass das `<img>` weder einen Rahmen noch ein Padding gesetzt hatte, weshalb die content-box, padding-box und border-box Ursprünge in diesem Fall identisch wären.

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

In diesem Beispiel platziert die `mask-position` die Startmaske in der oberen linken Ecke des `<img>` Elements, das einen großen Rahmen und Puffer hat, mit einer grünen Hintergrundfarbe, um das Star-Masking im Pufferbereich zu ermöglichen.

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

Ändern Sie den Wert der `mask-origin` Eigenschaft durch Ändern der ausgewählten Radio-Schaltfläche und beobachten Sie die Position der oberen linken Sternenmaske währenddessen.

{{EmbedLiveSample("origin", "", "350px")}}

Der Standardwert ist `border-box`. Mit diesem Wert wird die Startmaske an der oberen linken Kante des Rahmens platziert und nicht beschnitten. Wenn die Startmaske an der äußeren oder inneren Kante des Paddings platziert wird, gibt es Platz darüber und links; diese wiederholten Masken werden beschnitten.

Fortfahrend mit dem `masked-element` Beispiel, wenn wir die `mask-origin`-Eigenschaft nicht explizit festlegen, wird sie standardmäßig für jede Schicht `border-box` verwenden, als ob wir folgendes festgelegt hätten:

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

oder, erweiternd auf das Beispiel mit der `mask` Kurzform:

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

Für SVG-Elemente, die nicht die zugehörigen CSS-Layout-Boxen haben, kann eine Maske innerhalb des SVG-Elements Füllung, Umrandung oder Ansichtsbox enthalten sein.

## Die `mask-clip`-Eigenschaft

Die {{cssxref("mask-clip")}} Eigenschaft bestimmt den Bereich des Elements, welcher durch eine Maske beeinflusst wird, indem das Element effektiv an der definierten Boxkante beschnitten wird. Sie ist analog zur {{cssxref("background-clip")}} Eigenschaft, jedoch mit einigen unterschiedlichen Werten.

Da die `mask-clip` Eigenschaft alle `mask-origin` Werte akzeptiert und beide denselben `border-box` Standardwert haben, können die beiden Eigenschaften ähnlich erscheinen, dienen aber sehr unterschiedlichen Zwecken. Während `mask-origin` bestimmt, wo ein Maskenbild positioniert wird, sorgt die `mask-clip` Eigenschaft dafür, dass das ursprüngliche Element in den angegebenen Box-Bereich beschnitten wird. Es ist wichtig, beide zu verstehen: Wenn die `mask-origin` dazu führt, dass die `mask-position` das Maskenbild außerhalb des Clip-Bereichs platziert, wird die Maske beschnitten.

Die `mask-clip` Eigenschaft akzeptiert alle `mask-origin` Werte, sowie ihren eigenen `no-clip` Wert. Der `no-clip` Wert sorgt dafür, dass der bemalte Inhalt nicht beschnitten wird. Sie können das Maskenbild immer noch durch Positionierung außerhalb des Border-Inhalt-Bereichs mit `mask-position` Werten, die kleiner als null sind oder auf mehr als 100% aufgelöst werden, beschneiden lassen.

Das Setzen von `mask-clip` und `mask-origin` auf unterschiedliche Werte kann dazu führen, dass das Maskenschicht-Bild beschnitten wird. Zum Beispiel, wenn ein Element mit einem Rahmen und Padding `mask-clip` auf `content-box` gesetzt hat und `mask-origin` auf `border-box`, und die `mask-position` auf die `top left` Kante gesetzt ist, wird das Maskenschicht-Bild an der oberen linken Kante beschnitten.

Das folgende Beispiel fügt den vorherigen Beispielen Clip-Optionen hinzu, um die verschiedenen nicht-SVG `mask-clip` Werte zu demonstrieren und zu zeigen, wie sie die verschiedenen `mask-origin` Werte beeinflussen.

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

Die erste Maske wird an der oberen linken Kante des Maskenursprungs-Containers platziert und dann wiederholt. Wenn die Ursprungsbox die `border-box` ist und die Clip-Region die `content-box` ist, werden die oberen und linken Bereiche des Maskenursprungs-Containers beschnitten. Im Allgemeinen wird man wollen, dass der `mask-clip` der gleiche ist wie der `mask-origin`.

Fortfahrend mit dem `masked-element` Beispiel, wenn wir die `mask-clip`-Eigenschaft nicht explizit festlegen, wird sie standardmäßig für jede Schicht `border-box` verwenden, als ob wir folgendes festgelegt hätten:

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

oder, erweiternd auf das Beispiel mit der `mask` Kurzform:

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

In der `mask` Kurzform, wenn nur ein [`<geometry-box>`](/de/docs/Web/CSS/clip-path#geometry-box) Wert gegeben ist, stellt er sowohl die `mask-origin` als auch die `mask-clip` Eigenschaftswerte ein. Wenn zwei `<geometry-box>` Werte vorhanden sind, definiert der erste `mask-origin` und der zweite `mask-clip`.

Für Maskenschichtenbilder, die sich nicht auf ein SVG {{svgelement("mask")}} Element beziehen, definiert die `mask-clip` Eigenschaft, ob das Maskenmalbereich, oder der durch die Maske beeinflusste Bereich, die Rahmen, Puffer oder Inhalt-Box ist. Der bemalte Inhalt des Elements wird auf diesen Bereich beschränkt.

Wenn die Maskenschicht's {{cssxref("mask-image")}} Quelle ein `<mask>` ist, hat die `mask-clip` Eigenschaft keine Wirkung. Stattdessen bestimmen die {{svgAttr("x")}}, {{svgAttr("y")}}, {{svgAttr("width")}}, {{svgAttr("height")}}, und {{svgAttr("maskUnits")}} Attribute des `<mask>` Elements den Maskenmalbereich.

## Die `mask-size`-Eigenschaft

Die {{cssxref("mask-size")}} Eigenschaft wird verwendet, um Maskenschichten zu skalieren. Diese Eigenschaft ist analog zur {{cssxref("background-size")}} Eigenschaft und akzeptiert die gleichen Werte. Wenn Sie Ihre Masken skalieren, denken Sie daran, dass Bereiche des Elements, die nicht von den Maskenbildern abgedeckt sind, verborgen werden.

Es gibt drei Möglichkeiten, eine `mask-size` zu deklarieren:

- das `cover` oder `contain` Schlüsselwort,
- eine Länge, Prozentsatz oder das Schlüsselwort `auto`, oder
- zwei Werte, die eine Kombination aus Längen, Prozentsätzen und das Schlüsselwort `auto` sind.

Das Maskenbild kann in seiner natürlichen Größe belassen, gestreckt oder so eingeschränkt werden, dass es in den verfügbaren Platz passt. Das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Maskenbildes wird standardmäßig beibehalten, aber das Deklarieren zweier `<length-percentage>` Werte kann das Maskenbild verzerren, wenn das Verhältnis der beiden Werte nicht dasselbe wie das ursprüngliche Bild ist (`mask-repeat: round` ist das andere Eigenschaft/Wert-Paar, das das Maskenbild verzerren kann).

Wenn die `mask-size` auf `contain` gesetzt ist, wird das Maskenbild die größte Größe haben, die es haben kann, während es vollständig im Maskenpositionierungsbereich enthalten ist. In diesem Fall wird das Maskenbild nicht abgeschnitten, sondern vollständig enthalten.

Wenn auf `cover` gesetzt, wird das Maskenbild die kleinste Größe haben, die es sein kann, um den gesamten Maskenpositionierungsbereich vollständig abzudecken, wobei die Maske abgeschnitten wird, wenn das Seitenverhältnis der Maske von dem des Masken-Positionierungsbereichs abweicht.

Mit anderen Worten, mit `cover` und `contain`, wird mindestens eine Dimension der Maske die gleiche Größe haben wie die Dimension des Maskenpositionierungsbereichs; das Maskenbild wächst oder schrumpft so, dass entweder die Breite die gleiche Breite wie der Maskenpositionierungsbereich ist oder die Maske-Bildhöhe gleich der Höhe des Maskenpositionierungsbereichs ist.

Mit `cover`, `contain` und `<percentage>` Werten, ist die Größe relativ zur Ursprungsbox. In unserem Stern-Masken- und Flaggenbeispiel haben sowohl das Maskenbild als auch das `<img>` dasselbe Seitenverhältnis von `1:1`, was in diesem Fall `cover`, `contain` und `100%` dieselbe Größe für die Maske erzielen lassen wird. Dieses Beispiel zeigt, wie, wenn `mask-size` auf `cover`, `contain` oder einen `<percentage>` Wert eingestellt ist, die tatsächliche Größe der Maske abhängig von dem Wert der [`mask-origin` Eigenschaft](#the_mask-origin_property) unterschiedlich sein kann:

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

Ändern Sie den Wert der `mask-origin` Eigenschaft, um zu sehen, wie die verschiedenen Werte die Maskengröße beeinflussen:

{{EmbedLiveSample("size", "", "350px")}}

Dieses Beispiel beinhaltete einen `<percentage>` Wert. Wenn ein `<length-percentage>` Wert angegeben wird, definiert er nur die Breite der Maske, wobei die Höhe auf `auto` voreingestellt ist, was das Seitenverhältnis beibehält. Wenn zwei Werte angegeben werden, definiert der erste die Breite der Maske und der zweite seine Höhe.

Der Standardwert der `mask-size` ist `auto`, was die Maske in ihrer {{Glossary("intrinsic_size", "intrinsischen Größe")}}, der Größe, in der die Maske angezeigt würde, wenn keine CSS angewendet wurde, rendert. Das zugrunde liegende {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Maskenbildes wird beibehalten, wenn Sie einen einzelnen `<length-percentage>` Wert oder zwei Werte im gleichen Verhältnis wie das Seitenverhältnis einstellen. Wenn Sie zwei Werte deklarieren, die nicht im gleichen Verhältnis wie das Seitenverhältnis sind, wird das Maskenbild verzerrt.

Wie bei allen Langformkomponenten der Kurzform-Eigenschaft, wenn die {{cssxref("mask")}} Kurzform-Eigenschaft festgelegt ist und der Wert der `mask-size` Eigenschaft nicht innerhalb einer Maskenschicht definiert ist, wird der `mask-size` Wert für diese Maskenschichten auf seinen Standardwert `auto` zurückgesetzt.

Wenn das Bild keine intrinsische Proportion hat, wie im Fall eines [CSS Farbverlaufs](/de/docs/Web/CSS/gradient), ist das Standard-`auto` die Gesamtheit des Maskenpositionierungsbereichs, wie durch [die `mask-origin` Eigenschaft](#the_mask-origin_property) festgelegt.

Fortfahrend mit dem `masked-element` Beispiel, wenn wir die `mask-size`-Eigenschaft nicht explizit festlegen, wird sie standardmäßig für jede Schicht `auto` verwenden, als ob wir folgendes festgelegt hätten:

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

oder, erweiternd auf das Beispiel mit der `mask` Kurzform, wobei die `mask-size` Komponente nach dem `mask-position` Wert kommt, getrennt durch einen Schrägstrich (/):

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

Die {{cssxref("mask-repeat")}} Eigenschaft definiert, wie Maskenbilder wiederholt oder gekachelt werden, nachdem das anfängliche Maskenbild skaliert und positioniert wurde. Die `mask-repeat` Eigenschaft definiert, ob und wie dieses Maskenbild entlang der horizontalen und vertikalen Achsen wiederholt wird. In den meisten der vorherigen Beispiele haben Sie vielleicht bemerkt, dass die Sternmaske entlang der X- und Y-Achsen wiederholt wird. Dies liegt daran, dass `repeat` der Standardwert ist.

Die `mask-repeat` Eigenschaft ist analog zur {{cssxref("background-repeat")}} Eigenschaft und akzeptiert die gleichen [`<repeat-style>`](/de/docs/Web/CSS/mask-repeat#values) Werte. Wie es bei `background-repeat` der Fall ist, wird das erste (und möglicherweise einzige) Maskenbild-Wiederholung durch [die `*-position`-Eigenschaft](#the_mask-position_property) positioniert und durch [die `*-size`-Eigenschaft](#the_mask-size_property) skaliert. Die Positionen der wiederholten Hintergrund- oder Maskenbilder basieren auf diesem ursprünglichen Bildinstanz.

Fortfahrend mit dem `masked-element` Beispiel, wenn wir die `mask-repeat`-Eigenschaft nicht explizit festlegen, wird sie standardmäßig für jede Schicht `repeat` verwenden, als ob wir folgendes festgelegt hätten:

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

oder, erweiternd auf das Beispiel mit der `mask` Kurzform:

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

Die {{cssxref("mask")}}-Kurzform enthält die {{cssxref("mask-composite")}} Eigenschaft, die definiert, wie mehrere Masken kombiniert werden, um den endgültigen Maskeneffekt zu erzeugen. Jeder Wert in der durch Kommas getrennten Liste von Werten bestimmt, ob der Browser die zugehörige Maskenschicht von oder zu den unteren Maskenschichten `add`, `subtract`, `intersect` oder `exclude` sollte. Ähnlich wie `mask-mode` und die anderen `mask-*` Eigenschaften gibt es in der {{cssxref("background")}} Kurzform keine analoge Eigenschaft.

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

In diesem Beispiel fügen wir zwei `mask-image` Werte ein, darunter den Stern und den Farbverlauf aus den vorherigen Beispielen als Maskenbilder:

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

Die halbtransparente Sternmaske wird abhängig vom `mask-composite` Wert zum gestreiften Maskenbild hinzugefügt, davon subtrahiert, damit geschnitten oder ausgeschlossen.

Die `mask-composite` Eigenschaft ist nur in Fällen mit zwei oder mehr Maskenschichten relevant. Dies liest sich als "Maskenschichten", nicht "Maskenbilder", da, wenn `none` enthalten ist, die transparente schwarze Maske kombiniert wird. Ein `none` Wert kann bei Maskierungen im Falle von `subtract` und `intersect` tiefgreifende Auswirkungen haben. Zum Beispiel, wenn der `mask-mode` sich auf `luminance` auflöst, wird der gesamte Maskierungsbereich entfernt (das Element wird verborgen). Ebenso, wenn `none` die letzte Schicht mit `mask-composite: intersect` für diese Schicht gesetzt ist, wird das gesamte Element verborgen. Hier fügen wir die vorherigen Beispielen eine dritte Schicht, mit `none`, hinzu:

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

Beachten Sie, dass das `intersect` Beispiel alles ausschließt, weil die transparente schwarze Maske nichts schneidet.

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

Wie alle anderen `mask` Komponenteneigenschaften, nimmt `mask-composite` eine durch Kommas getrennte Liste von Werten an. Da die Eigenschaft bestimmt, wie Masken kombiniert werden, ist diese Eigenschaft nur für mehrere Maskenschichten relevant, und die Anzahl der verwendeten Werte ist eins weniger als die Anzahl der Maskenschichten.

Das letzte Paar der Masken wird zuerst zusammengemischt. Dann wird das vorherige Maskenbild mit der vorherigen Komposition zusammengemischt.

Fortfahrend mit dem `masked-element` Beispiel, wenn wir die `mask-composite`-Eigenschaft nicht explizit festlegen, wird sie standardmäßig für jede Schicht `add` verwenden, als ob wir folgendes festgelegt hätten:

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

In diesem Fall wird das `<mask>` Element mit der `none` Schicht vermischt. Dann wird der radiale Gradient mit dem Ergebnis der vorherigen Mischung vermischt, und so weiter.

Wie wir es mit allen anderen Komponenteneigenschaften gesehen haben, könnten wir die `mask`-Kurzform verwendet haben:

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
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking) Modul
