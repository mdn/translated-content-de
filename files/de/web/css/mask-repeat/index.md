---
title: mask-repeat
slug: Web/CSS/mask-repeat
l10n:
  sourceCommit: ff31fa134873d7fc271ea37a020a5cf12f6f1dd8
---

{{CSSRef}}

Die **`mask-repeat`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie Maskenbilder wiederholt werden. Ein Maskenbild kann entlang der horizontalen Achse, der vertikalen Achse, beiden Achsen oder gar nicht wiederholt werden.

## Syntax

```css
/* One-value syntax */
mask-repeat: repeat-x;
mask-repeat: repeat-y;
mask-repeat: repeat;
mask-repeat: space;
mask-repeat: round;
mask-repeat: no-repeat;

/* Two-value syntax: horizontal | vertical */
mask-repeat: repeat space;
mask-repeat: repeat repeat;
mask-repeat: round space;
mask-repeat: no-repeat round;

/* Multiple values */
mask-repeat:
  space round,
  no-repeat;
mask-repeat:
  round repeat,
  space,
  repeat-x;

/* Global values */
mask-repeat: inherit;
mask-repeat: initial;
mask-repeat: revert;
mask-repeat: revert-layer;
mask-repeat: unset;
```

### Werte

Die `mask-repeat`-Eigenschaft ist eine kommagetrennte Liste von zwei `<repeat-style>` Werten,
bei denen der erste `<repeat-style>` Wert den horizontalen Wiederholungswert und der zweite Wert den vertikalen Wiederholungswert darstellt, oder ein Schlüsselwortwert, der eine Kurzform für zwei `<repeat-style>` Werte ist.

#### `<repeat-style>` Werte

Die `<repeat-style>` Werte umfassen:

- `repeat`

  - : Das Bild wird so oft wiederholt, wie nötig, um den gesamten Masken-Malbereich zu bedecken. Maskenbilder entlang der Ränder werden abgeschnitten, wenn die Größe der [Masken-Origin-Box](/de/docs/Web/CSS/mask-origin) kein exaktes Vielfaches der Größe des Maskenbildes ist.

- `space`

  - : Das Maskenbild wird so oft wie möglich ohne Abschneiden wiederholt. Wenn die Größe der Element-Origin mindestens doppelt so groß ist wie die Größe des Maskenbildes in der entsprechenden Dimension, wird die {{cssxref("mask-position")}}-Eigenschaft ignoriert und die ersten und letzten Bilder an den Rändern des Masken-Origin-Containers positioniert. Ist die Masken-Origin-Box kein exaktes Vielfaches der Größe des Maskenbildes, wird der Leerraum gleichmäßig zwischen den wiederholten Maskenbildern verteilt.

    Wenn die Origin-Box kleiner als doppelt so groß wie das Maskenbild in der angegebenen Dimension ist, kann nur ein Maskenbild angezeigt werden. In diesem Fall wird das Bild gemäß der `mask-position`-Eigenschaft positioniert, die standardmäßig auf `0% 0%` gesetzt ist. Das Maskenbild wird nur abgeschnitten, wenn das Maskenbild größer als die Masken-Origin-Box ist.

- `round`

  - : Das Maskenbild wird so oft wie möglich in seinen Originalmaßen wiederholt. Wenn die Größe der Masken-Origin-Box kein exaktes Vielfaches der Größe des Maskenbildes ist, werden alle Maskenbilder [verkleinert oder gestreckt](#runde_wiederholungen), um sicherzustellen, dass keine Wiederholungen abgeschnitten werden.

- `no-repeat`

  - : Das Maskenbild wird nicht wiederholt (und daher wird der Masken-Malbereich möglicherweise nicht vollständig bedeckt). Die Position des nicht wiederholten Maskenbildes wird durch die {{cssxref("mask-position")}} CSS-Eigenschaft definiert.

#### Kurzformwerte

Die Ein-Wert-Syntax ist eine Kurzform für die vollständige Zwei-Wert-Syntax:

<table class="standard-table">
  <thead>
    <tr>
      <th>Einzelwert</th>
      <th>Zwei-Wert-Äquivalent</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>repeat-x</code></td>
      <td><code>repeat no-repeat</code></td>
    </tr>
    <tr>
      <td><code>repeat-y</code></td>
      <td><code>no-repeat repeat</code></td>
    </tr>
    <tr>
      <td><code>repeat</code></td>
      <td><code>repeat repeat</code></td>
    </tr>
    <tr>
      <td><code>space</code></td>
      <td><code>space space</code></td>
    </tr>
    <tr>
      <td><code>round</code></td>
      <td><code>round round</code></td>
    </tr>
    <tr>
      <td><code>no-repeat</code></td>
      <td><code>no-repeat no-repeat</code></td>
    </tr>
  </tbody>
</table>

- `repeat-x`

  - : Entspricht `repeat no-repeat`. Das Bild wird in horizontaler Richtung so oft wie nötig wiederholt, um die Breite des Masken-Malbereichs zu bedecken. Maskenbilder entlang der rechten oder linken Ränder oder beider, abhängig vom {{cssxref("mask-position")}}-Wert, werden abgeschnitten, wenn die Breite der Masken-Origin-Box kein exaktes Vielfaches der Breite des Maskenbildes ist.

- `repeat-y`

  - : Entspricht `no-repeat repeat`. Das Bild wird in vertikaler Richtung so oft wie nötig wiederholt, um die Höhe des Masken-Malbereichs zu bedecken. Maskenbilder entlang der oberen oder unteren Ränder oder beider, abhängig vom {{cssxref("mask-position")}}-Wert, werden abgeschnitten, wenn die Höhe der Masken-Origin-Box kein exaktes Vielfaches der Höhe des Maskenbildes ist.

## Beschreibung

Die `mask-repeat`-Eigenschaft akzeptiert ein kommagetrenntes Paar von Werten oder einen [Ein-Wert](#kurzformwerte). In der Zwei-Wert-Syntax repräsentiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten.

### Mehrere Werte

Jeder `mask-repeat`-Wert in dieser kommagetrennten Liste gilt für eine separate Maskenschicht. Ein Element kann mehrere Maskenschichten aufweisen. Die Anzahl der Schichten wird durch die Anzahl der kommagetrennten Werte im Wert der {{cssxref("mask-image")}}-Eigenschaft bestimmt (auch wenn ein Wert `none` ist). Jeder `mask-repeat`-Wert wird den `mask-image`-Werten in der Reihenfolge zugeordnet. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist, werden überzählige Werte von `mask-repeat` ignoriert, oder, wenn `mask-repeat` weniger Werte hat als `mask-image`, werden die `mask-repeat`-Werte wiederholt.

### Größenanpassung und Positionierung

Der `mask-repeat`-Eigenschaftswert definiert, wie Maskenbilder gekachelt werden, nachdem sie [dimensioniert](/de/docs/Web/CSS/mask-size) und [positioniert](/de/docs/Web/CSS/mask-position) wurden. Die erste (und möglicherweise einzige) Wiederholung des Maskenbildes wird von der {{cssxref("mask-position")}}-Eigenschaft positioniert, die standardmäßig auf `0% 0%` gesetzt ist, die obere linke Ecke der Origin-Box. Die Größe wird durch die {{cssxref("mask-size")}}-Eigenschaft definiert, die standardmäßig auf `auto` gesetzt ist. Die Positionen der wiederholten Masken basieren auf dieser ersten Maskeninstanz.

### Abschneiden

Maskenbilder werden nicht wiederholt, sondern werden abgeschnitten, wenn die Größe des Maskenbildes größer als die Origin-Box ist, außer im Fall von `round`, bei dem eine einzelne Maske verkleinert wird, um in die Origin-Box zu passen.

Bei `repeat`-Werten können Maskenbilder am Rand der Origin-Box abgeschnitten werden, wenn die Dimension (Breite oder Höhe) der Box kein exaktes Vielfaches der Maske ist.

### Seitenverhältnis

Standardmäßig behalten Maskenbilder das Seitenverhältnis bei, das durch die {{cssxref("mask-size")}}-Eigenschaft gesetzt ist oder ihr Standardseitenverhältnis, wenn `mask-size` standardmäßig verwendet wird oder ausdrücklich auf `auto` gesetzt ist. Nur im Fall von `round`-Werten in beiden Richtungen könnte das Seitenverhältnis der Maske verzerrt werden.

Wenn `round` in beiden Richtungen gesetzt ist, passen die resultierenden wiederholten Maskenbilder zum Seitenverhältnis der Origin-Box. Da die Maskenbilder skaliert werden, um zu passen, könnten sie verzerrt werden, um sicherzustellen, dass die Maskenbilder nicht abgeschnitten werden. Wenn `round` nur in einer Dimension gesetzt ist, wird das Seitenverhältnis der Maskengröße respektiert.

### Runde Wiederholungen

Im Fall von `round` werden Maskenbilder verkleinert oder vergrößert, um so oft in den Positionierungsbereich zu passen, wie dies ganzzahlig möglich ist. Die Maskengröße wird erhöht oder verringert, um die nächste natürliche Zahl zu erreichen, mit einem Minimum von einer Maske.

Die gerenderten Dimensionen der Maske entsprechen der Größe der Origin-Box, geteilt durch die Anzahl der Maskenwiederholungen in dieser Dimension, wobei die Wiederholungen eine ganze Zahl größer als null sind. Die Anzahl der Wiederholungen ist: `X' = D / round(D / X)`, wobei `D` die Breite oder Höhe ist und `round()` eine Funktion ist, die die nächstgelegene ganze Zahl größer als null zurückgibt.

Zum Beispiel, wenn `mask-repeat` auf `round` gesetzt ist und die `mask-size` die Maske auf `40px` Breite setzt, wird, wenn die Origin-Box vorhanden (größer als `0px` breit), aber weniger als `60px` breit ist, eine einzelne Wiederholung 100% der Breite dieser Box ausmachen. Wenn die Box mindestens `60px` breit, aber weniger als `100px` breit ist, wird es zwei Wiederholungen geben, die jeweils `50%` der Box einnehmen. Von `100px` bis `140px` passen drei Masken entlang der horizontalen Achse. Diese "`40px` breite" Masken sind nur dann `40px` breit, wenn die Origin-Box ein exaktes Vielfaches von `40px` ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt das Setzen der `mask-repeat`-Eigenschaft für eine einzelne Maske.

#### HTML

Unser HTML beinhaltet ein einfaches {{htmlelement("div")}}-Element:

```html
<div></div>
```

#### CSS

Wir definieren ein Quadrat mit `250px` mit einem Farbverlauf von Rot zu Blau mit einem `100px` mal `100px` Stern als Maskenbild. Wir verwenden die `mask-repeat`-Eigenschaft und setzen `round` für die horizontale Richtung und `space` für den vertikalen Wert.

```css
div {
  width: 250px;
  height: 250px;
  background-image: linear-gradient(red, blue);

  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
  mask-size: 100px 100px;

  mask-repeat: round space;
}
```

#### Ergebnisse

{{EmbedLiveSample("basic usage", "", "300px")}}

Mit `space` und `round` auf einem Maskenbild, das kleiner als die Origin-Box ist, wird die Maske nicht abgeschnitten. Vielmehr verzerrt der `round`-Wert den Stern, um Abschneiden und Leerraum zu verhindern, während `space` das Seitenverhältnis des Sterns beibehält, aber Platz nach Bedarf zwischen Masken hinzufügt.

### Runde Iterationen

Mit dem gleichen HTML und CSS zeigt diese Demonstration einen Schieberegler, der die Breite des Containers ändert, um zu zeigen, wie bei `round` Masken wachsen, sobald Platz vorhanden ist, bis eine weitere Iteration der Maske passt, oder sie schrumpfen, bis die Anzahl der Iterationen nicht mehr passt.

```html hidden
<div></div>
<label
  >width: <output></output><br />
  <input type="range" min="0" max="400" value="250" id="width" />
</label>
```

```css hidden
div {
  width: 250px;
  height: 250px;
  background-image: linear-gradient(red, blue);

  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
  mask-size: 100px 100px;

  mask-repeat: round space;
}
input {
  clear: both;
  width: 90%;
}
```

```js hidden
const div = document.querySelector("div");
const range = document.getElementById("width");
const output = document.querySelector("output");

range.addEventListener("change", () => {
  const value = `${range.value}px`;
  output.innerText = value;
  div.style.width = value;
});
```

{{EmbedLiveSample("round iterations", "", "300px")}}

Die Maske ist als `100px` breite definiert. Es gibt einen einzelnen Stern, wenn die Origin-Box von `1px` bis `149px` breit ist, zwei Sterne von `150px` bis `249px`, drei Sterne von `250px` bis `349px` und so weiter.

### Die Kurzformwerte

Dieses Beispiel demonstriert alle `mask-repeat`-Kurzform (Einzel-Schlüsselwort)-Werte.

#### HTML

Wir fügen mehrere {{htmlelement("section")}}-Elemente hinzu, die jeweils ein `<div>` enthalten, jedes mit einem anderen Klassennamen.

```html
<section class="repeat">
  <div></div>
</section>
<section class="space">
  <div></div>
</section>
<section class="round">
  <div></div>
</section>
<section class="no-repeat">
  <div></div>
</section>
<section class="repeat-x">
  <div></div>
</section>
<section class="repeat-y">
  <div></div>
</section>
```

#### CSS

Wir geben jedem `<div>` das gleiche CSS, außer für den `mask-repeat`-Wert, den wir an ihren Eltern-Klassennamen anpassen. Wir definieren eine Maskengröße, wobei das initiale `mask-image` unten rechts gesetzt wird, sodass ein Abschneiden auf den obersten und am weitesten linken Masken an ihren oberen und linken Seiten erfolgt.

```css
div {
  width: 180px;
  height: 180px;
  background-image: linear-gradient(red, blue);

  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);

  mask-size: 50px 50px;
  mask-position: bottom right;
}

.repeat div {
  mask-repeat: repeat;
}
.space div {
  mask-repeat: space;
}
.round div {
  mask-repeat: round;
}
.no-repeat div {
  mask-repeat: no-repeat;
}
.repeat-x div {
  mask-repeat: repeat-x;
}
.repeat-y div {
  mask-repeat: repeat-y;
}
```

Wir zeigen den Klassennamen mittels generierten Inhalts.

```css
section::before {
  content: attr(class);
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

{{EmbedLiveSample("The shorthand values", "", "450px")}}

Der erste (und im Fall von `no-repeat` einzige) Maskenstern wird [dimensioniert](/de/docs/Web/CSS/mask-size), um 50px mal 50px zu sein und [positioniert](/de/docs/Web/CSS/mask-position) am unteren rechten Rand des Malbereichs, mit wiederholten Sternen, die darüber und/oder links davon platziert werden, wobei ein Abschneiden an der Oberseite und links der obersten und am weitesten linken Sterne erfolgt. Beachten Sie, dass alle Sterne die gleiche Größe und Form haben, außer bei `round`, bei der alle Masken auf 45px x 45px geschrumpft wurden, um vier vollständige Masken in jede Richtung zu passen. Wäre der Container 174px gewesen, hätte es drei Sterne in jede Richtung anstelle von vier gegeben, und jeder Stern wäre gestreckt worden.

### Mehrere Maskenbilder und Wiederholungen

Sie können einen unterschiedlichen `<repeat-style>` für jedes Maskenbild angeben, getrennt durch Kommas:

```css
.extra-repeats {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-repeat: repeat-x, repeat-y, space;
}
```

Jedes Bild wird mit dem entsprechenden Wiederholungsstil abgeglichen. Da mehr `mask-repeat`-Werte als `mask-image`-Werte vorhanden sind, werden die überschüssigen `mask-repeat`-Werte ignoriert.

```css
.missing-repeats {
  mask-image:
    url("mask1.png"), url("mask2.png"), url("mask3.png"), url("mask4.png");
  mask-repeat: repeat-x, repeat-y;
}
```

Jedes Bild wird mit einem entsprechenden Wiederholungsstil abgeglichen. Da mehr `mask-image`-Werte als `mask-repeat`-Werte vorhanden sind, wird das `mask-repeat` wiederholt, bis jedes `mask-image` einen zugeordneten `mask-repeat`-Wert hat. Hier wiederholen sich die ungeraden Masken entlang der x-Achse, während sich die geraden Masken entlang der y-Achse wiederholen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)
