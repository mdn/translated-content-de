---
title: mask-size
slug: Web/CSS/Reference/Properties/mask-size
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`mask-size`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die Größen der angegebenen Maskenbilder. Maskenbildgrößen können vollständig oder teilweise eingeschränkt werden, um ihre {{Glossary("aspect_ratio", "intrinsischen Seitenverhältnisse")}} zu erhalten.

## Syntax

```css
/* Keyword syntax */
mask-size: cover;
mask-size: contain;
mask-size: auto;

/* One-value syntax */
/* Mask width. Sets height to 'auto'. */
mask-size: 50%;
mask-size: 3em;
mask-size: 12px;

/* Two-value syntax */
/* First value: mask width. Second value: mask height */
mask-size: 3em 25%;
mask-size: auto 6px;
mask-size: auto 50%;

/* Multiple values */
mask-size: auto, contain;
mask-size:
  50%,
  50% 25%,
  auto 25%;
mask-size: 6px, auto, contain;

/* Global values */
mask-size: inherit;
mask-size: initial;
mask-size: revert;
mask-size: revert-layer;
mask-size: unset;
```

### Werte

Die `mask-size` Eigenschaft akzeptiert eine durch Kommata getrennte Liste von `<bg-size>` Werten. Ein `<bg-size>` Wert ist entweder `cover`, `contain`, ein Paar von Werten, die die Breite und Höhe (in dieser Reihenfolge) angeben, oder ein einzelner Wert, der die Breite angibt (in diesem Fall wird die Höhe auf `auto` gesetzt). Werte beinhalten:

- `contain`
  - : Skaliert das Maskenbild nach oben oder unten und behält dabei das Seitenverhältnis bei, sodass die Maske so groß wie möglich innerhalb ihres Containers ist, ohne dass sie zugeschnitten oder gestreckt wird.
    Wenn das Maskenbild kleiner als der Container ist, wird die Maske gekachelt oder wiederholt, es sei denn, die {{cssxref("mask-repeat")}} Eigenschaft ist auf `no-repeat` gesetzt.

- `cover`
  - : Skaliert das Maskenbild auf die kleinste mögliche Größe, um den Container auszufüllen, während das Seitenverhältnis beibehalten wird. Wenn das Seitenverhältnis des Maskenbildes vom Element abweicht, wird es vertikal oder horizontal beschnitten.

- `auto`
  - : Behält das originale Seitenverhältnis der Maskenquelle bei. Wenn sowohl für die Breite als auch für die Höhe gesetzt, wird die Originalgröße der Maskenressource verwendet. Andernfalls skaliert `auto` das Maskenbild in der entsprechenden Richtung, sodass das ursprüngliche Seitenverhältnis beibehalten wird.

- {{cssxref("&lt;length&gt;")}}
  - : Rendert das Maskenbild in der angegebenen Länge in der entsprechenden Dimension (Breite, wenn als erster oder einziger Wert gesetzt; Höhe, wenn als zweiter Wert gesetzt). Negative Werte sind nicht erlaubt.

- {{cssxref("&lt;percentage&gt;")}}
  - : Rendert das Maskenbild in der entsprechenden Dimension zu dem angegebenen Prozentsatz der Ursprungsbox-Fläche, definiert durch die {{cssxref("mask-origin")}} Eigenschaft, die standardmäßig `padding-box` ist. Negative Werte sind nicht erlaubt.

## Beschreibung

Die `mask-size` Eigenschaft wird verwendet, um Maskenlayer zu dimensionieren.

Ein Element kann mehrere Maskenlayer haben. Die Anzahl der Maskenlayer wird durch die Anzahl der durch Komma getrennten Werte in der {{cssxref("mask-image")}} Eigenschaft bestimmt (ein Wert erzeugt einen Maskenlayer, selbst wenn es `none` ist).

Jeder `mask-size` Wert in der kommagetrennten Liste von Werten wird mit einem zugehörigen Maskenlayer abgeglichen, wie durch die Liste der `mask-image` Werte definiert, in der Reihenfolge. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist:

- Wenn `mask-size` mehr Werte hat als `mask-image`, werden die überschüssigen Werte von `mask-size` nicht verwendet.
- Wenn `mask-size` weniger Werte hat als `mask-image`, werden die `mask-size` Werte wiederholt.

Jeder `mask-size` Wert ist ein `<bg-size>` Wert. Es gibt drei Möglichkeiten, jedes `<bg-size>` zu deklarieren: ein Schlüsselwort, zwei Längen, Prozentsätze oder das Schlüsselwort `auto`, oder eine Länge, Prozentsatz oder `auto`:

- Die verfügbaren Schlüsselwörter sind `cover` und `contain`.
- Wenn zwei Werte angegeben sind, definiert der erste die Maskenbreite und der zweite deren Höhe.
- Wenn ein Wert angegeben ist, definiert er nur die Maskenbreite, wobei die Höhe auf `auto` gesetzt ist.

Die Werte für Breite und Höhe sind entweder ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}}, oder das Schlüsselwort `auto`, welches der Standard ist. Das Setzen eines oder beider Werte auf `auto` erhält das ursprüngliche Seitenverhältnis des Maskenbildes.

Die gerenderte Größe des Maskenbildes wird wie folgt berechnet:

- Wenn beide Komponenten von `mask-size` angegeben sind und nicht `auto`, wird das Maskenbild in der angegebenen Größe gerendert.
- Wenn `mask-size` `contain` oder `cover` ist, wird das Bild gerendert, indem das Seitenverhältnis in der größten Größe beibehalten wird, die innerhalb der oder über die Maskenpositionierungsfläche enthalten ist. Wenn das Bild keine intrinsische Proportion hat, wie bei Verläufen, wird es in der Größe der Maskenpositionierungsfläche gerendert.
- Wenn `mask-size` `auto` ist (was sich zu `auto auto` auflöst), wird es in der Größe gerendert, in der die Maske angezeigt würde, wenn kein CSS angewendet würde, um das Rendering zu ändern; dies ist die {{Glossary("intrinsic_size", "intrinsische Größe")}}. Wenn es keine intrinsischen Dimensionen und keine intrinsische Proportion hat, wie es bei [CSS Verlaufs](/de/docs/Web/CSS/gradient) der Fall ist, wird es in der Größe der Maskenpositionierungsfläche gerendert, definiert durch die {{cssxref("mask-origin")}} (welche standardmäßig `border-box` ist).
  Wenn die Maskenquelle keine Dimensionen, aber eine Proportion (Seitenverhältnis) hat, rendert ein Wert von `auto` es so, als wäre `contain` angegeben worden. Wenn das Bild eine intrinsische Dimension und eine Proportion hat, wird es in der Größe aufgrund dieser einen Dimension und der Proportion gerendert. Wenn das Bild eine intrinsische Dimension, aber keine Proportion hat, wird es mit der intrinsischen Dimension und der entsprechenden Dimension der Maskenpositionierungsfläche gerendert.
- Wenn `mask-size` eine `auto` Komponente und eine nicht-`auto` Komponente hat, was auf alle Einzelwert-Werte zutrifft, wird das Seitenverhältnis beibehalten, wenn die Maskenquelle eine intrinsische Proportion hat. Wenn keine intrinsischen Proportionen vorhanden sind, wird der `auto` Wert als Dimension der Maskenpositionierungsfläche angenommen.

Wie bei allen Langform-Komponenten der Kurzformeigenschaft, wenn die {{cssxref("mask")}} Kurzformeigenschaft gesetzt ist und der Wert der `mask-size` Eigenschaft innerhalb eines Maskenlayers nicht definiert ist, wird der `mask-size` Wert auf seinen Initialwert `auto` für diese Maskenlayer zurückgesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maskengröße als Prozentsatz festlegen

Dieses Beispiel demonstriert die grundlegende Nutzung, während es auch Prozentwerte für `mask-size` zeigt.

#### HTML

Wir fügen zwei {{htmlelement("div")}} Elemente hinzu:

```html
<div class="width"></div>
<div class="height"></div>
```

#### CSS

Die `<div>` Elemente sind definiert, um doppelt so hoch wie breit zu sein, mit einem verlaufenden Hintergrund und einer Maske:

```css
div {
  width: 200px;
  height: 400px;
  background: blue linear-gradient(red, blue);
  mask-image: url("/shared-assets/images/examples/mdn.svg");
}
```

Die Breite eines `<div>` Elements Maske ist auf `50%` gesetzt, wobei die Höhe standardmäßig auf `auto` ist. Die Höhe der zweiten `<div>` Elements Maske ist auf `50%` gesetzt, wobei die Breite auf `auto` gesetzt ist:

```css
.width {
  mask-size: 50%;
}

.height {
  mask-size: auto 50%;
}
```

Im `width` Fall wird die Maske `100px` breit gerendert (`50%` des `200px` breiten Elements). Die Höhe ist standardmäßig `auto`, wobei das Seitenverhältnis der Maske beibehalten wird.
Im `height` Fall wird die Maske `200px` hoch gerendert (`50%` des `400px` hohen Containers). Die Breite ist explizit auf `auto` gesetzt und das Seitenverhältnis der Maske wird beibehalten.

```css hidden
body {
  display: flex;
  gap: 20px;
}
```

#### Ergebnisse

{{EmbedLiveSample("Maskengröße als Prozentsatz festlegen", "", "430px")}}

### Cover und contain

Dieses Beispiel demonstriert die Schlüsselwortwerte für `mask-size`.

#### HTML

Drei {{htmlelement("section")}} Elemente sind definiert, jedes mit einem anderen Klassennamen und jedes enthält ein `<div>`.

```html
<section class="auto">
  <div></div>
</section>
<section class="cover">
  <div></div>
</section>
<section class="contain">
  <div></div>
</section>
```

#### CSS

Die `<div>` Elemente sind definiert, um doppelt so hoch wie breit zu sein, mit einem verlaufenden Hintergrund und einer Maske:

```css
div {
  width: 200px;
  height: 400px;
  background: blue linear-gradient(red, blue);
  mask-image: url("/shared-assets/images/examples/mask-star.svg");
}
```

Die `mask-size` von zwei der `<div>` Elemente ist auf einen der Schlüsselwerte der Eigenschaft gesetzt. Das dritte `<div>` hat eine `mask-size` von `auto`, um die ursprünglichen intrinsischen Dimensionen der Maske zu demonstrieren:

```css
.auto div {
  mask-size: auto;
}

.cover div {
  mask-size: cover;
}

.contain div {
  mask-size: contain;
}
```

Die Eigenschaftswerte werden mit [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) angezeigt.

```css
section::before {
  content: "mask-size: " attr(class) ";";
  display: block;
  text-align: center;
  border-bottom: 1px solid;
}
```

```css hidden
body {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
}
section {
  border: 1px solid;
}
```

#### Ergebnisse

{{EmbedLiveSample("Cover und contain", "", "430px")}}

Mit `auto` wird der Stern in seiner intrinsischen Größe von `100px` mal `100px` angezeigt. Mit `cover` wächst der Stern auf eine Höhe von `400px`, um die gesamte Ursprungsbox einzunehmen. Mit `contain` wächst der Stern, bis eine Dimension dieselbe Dimension der [Ursprungsbox](/de/docs/Web/CSS/Reference/Properties/mask-origin) erreicht, was bedeutet, dass der Stern so groß ist, wie er sein kann (`200px` breit), aber trotzdem darin enthalten ist.

### Wenn die Maske größer als der Container ist

Unter Verwendung des gleichen HTML und CSS wie oben, nur mit einer anderen Ursprungsbox-Größe, untersucht dieses Beispiel, was passiert, wenn die Ursprungsbox kleiner ist als die intrinsischen Dimensionen der Maske.

```html hidden
<section class="auto">
  <div></div>
</section>
<section class="cover">
  <div></div>
</section>
<section class="contain">
  <div></div>
</section>
```

```css hidden
div {
  background: blue linear-gradient(red, blue);
  mask-image: url("/shared-assets/images/examples/mask-star.svg");
}

.auto div {
  mask-size: auto;
}

.cover div {
  mask-size: cover;
}

.contain div {
  mask-size: contain;
}

section::before {
  content: attr(class);
  display: block;
  text-align: center;
  border-bottom: 1px solid;
}

body {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
}
section {
  border: 1px solid;
}
```

Der einzige Unterschied ist die Größe der umgebenden Box (und der generierte Inhalt):

```css
div {
  width: 70px;
  height: 70px;
}
```

{{EmbedLiveSample("Wenn die Maske größer ist als der Container", "", "120px")}}

Der `contain` Wert hält die Maske innerhalb der Ursprungsbox. Der `cover` Wert deckt sie ab. In beiden Fällen schrumpft die Maske, während das ursprüngliche Seitenverhältnis beibehalten wird. Mit `auto` wird die Maske abgeschnitten, da die intrinsischen Dimensionen größer als die Boxdimensionen sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-size")}}
- {{cssxref("mask")}} Kurzform
- {{cssxref("mask-image")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask-border")}}
- {{cssxref("background-size")}}
- {{cssxref("mask-border-width")}}
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
