---
title: mask-size
slug: Web/CSS/mask-size
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`mask-size`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größen der angegebenen Maskenbilder fest. Die Maskenbildgrößen können vollständig oder teilweise eingeschränkt werden, um ihre {{Glossary("aspect_ratio", "intrinsischen Seitenverhältnisse")}} zu bewahren.

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

Die `mask-size` Eigenschaft akzeptiert eine durch Kommas getrennte Liste von `<bg-size>` Werten. Ein `<bg-size>` Wert ist entweder `cover`, `contain`, ein Paar von Werten, die die Breite und Höhe angeben (in dieser Reihenfolge), oder ein einzelner Wert, der die Breite angibt (wobei in diesem Fall die Höhe auf `auto` gesetzt wird). Mögliche Werte sind:

- `contain`

  - : Skalieren des Maskenbildes nach oben oder unten, während das Seitenverhältnis beibehalten wird, sodass die Maske so groß wie möglich innerhalb ihres Containers ist, ohne dass sie zugeschnitten oder gestreckt wird.
    Wenn das Maskenbild kleiner als der Container ist, wird die Maske gekachelt, oder sie wiederholt sich, es sei denn, die {{cssxref("mask-repeat")}} Eigenschaft ist auf `no-repeat` gesetzt.

- `cover`

  - : Skalieren des Maskenbildes auf die kleinstmögliche Größe, um den Container zu füllen, während das Seitenverhältnis beibehalten wird. Wenn das Seitenverhältnis des Maskenbildes sich von dem des Elements unterscheidet, wird es vertikal oder horizontal zugeschnitten.

- `auto`

  - : Beibehaltung des ursprünglichen Seitenverhältnisses der Maskenquelle. Wenn sowohl Breite als auch Höhe auf `auto` gesetzt sind, wird die ursprüngliche Größe der Maskenressource verwendet. Andernfalls skaliert `auto` das Maskenbild in der entsprechenden Richtung, sodass das ursprüngliche Seitenverhältnis beibehalten wird.

- {{cssxref("&lt;length&gt;")}}

  - : Darstellung des Maskenbildes mit der angegebenen Länge in der entsprechenden Dimension (Breite, wenn als erster oder einziger Wert gesetzt, Höhe, wenn als zweiter Wert gesetzt). Negative Werte sind nicht erlaubt.

- {{cssxref("&lt;percentage&gt;")}}
  - : Darstellung des Maskenbildes in der entsprechenden Dimension als den angegebenen Prozentsatz des Ursprungsflächenbereichs, wie von der {{cssxref("mask-origin")}} Eigenschaft definiert, die standardmäßig `padding-box` ist. Negative Werte sind nicht erlaubt.

## Beschreibung

Die `mask-size` Eigenschaft wird verwendet, um Maskenebenen zu dimensionieren.

Ein Element kann mehrere Maskenschichten haben. Die Anzahl der Maskenschichten wird durch die Anzahl der durch Kommas getrennten Werte im Wert der {{cssxref("mask-image")}} Eigenschaft bestimmt (ein Wert erstellt eine Maskenschicht, auch wenn er `none` ist).

Jeder `mask-size` Wert in der durch Kommas getrennten Liste von Werten wird mit einer zugehörigen Maskenschicht abgeglichen, wie von der Liste von `mask-image` Werten in Reihenfolge definiert. Falls die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist:

- Wenn `mask-size` mehr Werte hat als `mask-image`, werden die überschüssigen Werte von `mask-size` nicht verwendet.
- Wenn `mask-size` weniger Werte hat als `mask-image`, werden die `mask-size` Werte wiederholt.

Jeder `mask-size` Wert ist ein `<bg-size>` Wert. Es gibt drei Möglichkeiten, jedes `<bg-size>` zu deklarieren: ein Schlüsselwort, zwei Längen, Prozentsätze oder das Schlüsselwort `auto`, oder eine Länge, ein Prozentsatz oder `auto`:

- Die verfügbaren Schlüsselwörter sind `cover` und `contain`.
- Wenn zwei Werte angegeben sind, definiert der erste die Maskenbreite und der zweite ihre Höhe.
- Wenn ein Wert angegeben ist, definiert dieser nur die Maskenbreite, wobei die Höhe auf `auto` gesetzt wird.

Die Breiten- und Höhenwerte sind ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}}, oder das `auto` Schlüsselwort, welches der Standard ist. Wenn einer oder beide Werte auf `auto` gesetzt sind, wird das ursprüngliche Seitenverhältnis des Maskenbildes beibehalten.

Die gerenderte Größe des Maskenbildes wird wie folgt berechnet:

- Wenn beide Komponenten von `mask-size` spezifiziert und nicht `auto` sind, wird das Maskenbild in der angegebenen Größe dargestellt.
- Wenn `mask-size` `contain` oder `cover` ist, wird das Bild gerendert, indem sein Seitenverhältnis bei der größten Größe, die innerhalb oder über den Maskenpositionierungsbereich enthalten ist, beibehalten wird. Wenn das Bild keine intrinsische Proportion hat, wie bei Verläufen, wird es in der Größe des Maskenpositionierungsbereichs gerendert.
- Wenn `mask-size` `auto` ist (was auf `auto auto` auflöst), wird es in der Größe gerendert, in der das Maskenbild angezeigt würde, wenn kein CSS angewendet worden wäre, um die Darstellung zu ändern; dies ist seine {{Glossary("intrinsic_size", "intrinsische Größe")}}. Wenn es keine intrinsischen Dimensionen und keine intrinsische Proportion hat, wie es bei [CSS-Verläufen](/de/docs/Web/CSS/gradient) der Fall ist, wird es in der Größe des Maskenpositionierungsbereichs gerendert, der durch die {{cssxref("mask-origin")}} definiert ist (was standardmäßig `border-box` ist).
  Wenn die Maskenquelle keine Dimensionen aber eine Proportion hat (Seitenverhältnis), wird ein Wert von `auto` es so rendern, als ob `contain` angegeben worden wäre. Wenn das Bild eine intrinsische Dimension und eine Proportion hat, wird es in der durch diese Dimension und die Proportion bestimmten Größe gerendert. Wenn das Bild eine intrinsische Dimension aber keine Proportion hat, wird es mit der intrinsischen Dimension und der entsprechenden Dimension des Maskenpositionierungsbereichs gerendert.
- Wenn `mask-size` eine `auto` Komponente und eine nicht-`auto` Komponente hat, was für alle einwertigen Werte zutrifft, wird das Seitenverhältnis beibehalten, wenn die Maskenquelle eine intrinsische Proportion hat. Wenn es keine intrinsischen Proportionen gibt, wird davon ausgegangen, dass der `auto` Wert die Dimension des Maskenpositionierungsbereichs ist.

Wie bei allen Langhandkomponenten der Kurzform-Eigenschaft, wenn die {{cssxref("mask")}} Kurzform-Eigenschaft gesetzt ist und der Wert der `mask-size` Eigenschaft innerhalb einer Maskenebene nicht definiert ist, wird der `mask-size` Wert für diese Maskenebenen auf seinen Ausgangswert von `auto` zurückgesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen der Maskengröße als Prozentsatz

Dieses Beispiel zeigt die grundlegende Verwendung und demonstriert auch Prozentwerte für `mask-size`.

#### HTML

Wir fügen zwei {{htmlelement("div")}} Elemente ein:

```html
<div class="width"></div>
<div class="height"></div>
```

#### CSS

Die `<div>` Elemente sind so definiert, dass sie doppelt so hoch wie breit sind, mit einem Verlaufs-Hintergrund und einer Maske:

```css
div {
  width: 200px;
  height: 400px;
  background: blue linear-gradient(red, blue);
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mdn.svg);
}
```

Die Breite eines `<div>` Elements Maske ist auf `50%` gesetzt, wobei die Höhe auf `auto` standardmäßig bleibt. Die Höhe der Maske für das zweite `<div>` Element ist auf `50%` gesetzt, mit der Breite auf `auto` gesetzt:

```css
.width {
  mask-size: 50%;
}

.height {
  mask-size: auto 50%;
}
```

Im Fall der `width` wird die Maske `100px` breit dargestellt (`50%` des `200px` breiten Elements). Die Höhe bleibt standardmäßig auf `auto`, wobei das Seitenverhältnis der Maske beibehalten wird.
Im Fall der `height` wird die Maske `200px` hoch dargestellt (`50%` des `400px` hohen Containers). Die Breite ist explizit auf `auto` gesetzt, was das Seitenverhältnis der Maske beibehält.

```css hidden
body {
  display: flex;
  gap: 20px;
}
```

#### Ergebnisse

{{EmbedLiveSample("Setting mask size as a percentage", "", "430px")}}

### Cover und contain

Dieses Beispiel zeigt die Schlüsselwortwerte für `mask-size`.

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

Die `<div>` Elemente sind so definiert, dass sie doppelt so hoch wie breit sind, mit einem Verlaufs-Hintergrund und einer Maske:

```css
div {
  width: 200px;
  height: 400px;
  background: blue linear-gradient(red, blue);
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
}
```

Die `mask-size` von zwei der `<div>` Elemente ist auf einen der Schlüsselwortwerte der Eigenschaft gesetzt. Das dritte `<div>` hat eine `mask-size` von `auto` gesetzt, wodurch die ursprünglichen intrinsischen Dimensionen der Maske demonstriert werden:

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

{{EmbedLiveSample("Cover and contain", "", "430px")}}

Mit `auto` wird der Stern in seiner intrinsischen Größe von `100px` mal `100px` angezeigt. Mit `cover` wächst der Stern auf `400px` Höhe, um den gesamten Ursprungsbox zu bedecken. Mit `contain` wächst der Stern, bis eine Dimension derselben Dimension der [Ursprungsbox](/de/docs/Web/CSS/mask-origin) entspricht, was bedeutet, dass der Stern so groß wie möglich ist (`200px` breit), aber immer noch von ihr eingeschlossen wird.

### Wenn die Maske größer als der Container ist

Verwenden Sie den gleichen HTML- und CSS-Code wie oben, mit nur einer anderen Ursprungsbox-Größe. Dieses Beispiel untersucht, was passiert, wenn die Ursprungsbox kleiner als die intrinsischen Dimensionen der Maske ist.

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
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
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

Der einzige Unterschied ist die Größe der Box, die sie enthält (und der generierte Inhalt):

```css
div {
  width: 70px;
  height: 70px;
}
```

{{EmbedLiveSample("When the mask is larger than the container", "", "120px")}}

Der Wert `contain` enthält die Maske innerhalb der Ursprungsbox. Der Wert `cover` bedeckt sie. In beiden Fällen schrumpft die Maske, während das ursprüngliche Seitenverhältnis beibehalten wird. Mit `auto` wird die Maske abgeschnitten, da die intrinsischen Dimensionen größer als die Boxdimensionen sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask")}} Kurzform
- {{cssxref("mask-image")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask-border")}}
- {{cssxref("background-size")}}
- [CSS Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
