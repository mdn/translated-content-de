---
title: mask-repeat
slug: Web/CSS/mask-repeat
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`mask-repeat`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Maskenbilder wiederholt werden. Ein Maskenbild kann entlang der horizontalen Achse, der vertikalen Achse, beiden Achsen oder gar nicht wiederholt werden.

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

Die `mask-repeat` Eigenschaft ist eine kommagetrennte Liste von zwei `<repeat-style>` Werten, wobei der erste `<repeat-style>` Wert den horizontalen Wiederholungswert und der zweite Wert den vertikalen Wiederholungswert angibt. Alternativ kann ein Schlüsselwortwert verwendet werden, der eine Kurzform für zwei `<repeat-style>` Werte ist.

#### `<repeat-style>` Werte

Die `<repeat-style>` Werte beinhalten:

- `repeat`

  - : Das Bild wird so oft wie nötig wiederholt, um den gesamten Masken-Malbereich zu bedecken. Maskenbilder entlang der Kanten werden abgeschnitten, wenn die Größe des [mask origin box](/de/docs/Web/CSS/mask-origin) kein genaues Vielfaches der Größe des Maskenbilds ist.

- `space`

  - : Das Maskenbild wird so oft wie möglich ohne Zuschneiden wiederholt. Wenn die Ursprungsgröße des Elements mindestens doppelt so groß ist wie die Größe des Maskenbilds in der zugehörigen Dimension, wird die {{cssxref("mask-position")}} Eigenschaft ignoriert und die ersten und letzten Bilder werden an den Kanten des Maskenursprungscontainers positioniert. Wenn das Ursprungsfeld kein genaues Vielfaches der Größe des Maskenbilds ist, wird der Leerraum gleichmäßig zwischen den wiederholten Maskenbildern verteilt.

  Wenn die Ursprungsfeldgröße in der angegebenen Dimension weniger als das Doppelte der Größe des Maskenbilds beträgt, kann nur ein Maskenbild angezeigt werden. In diesem Fall wird das Bild gemäß der `mask-position` Eigenschaft positioniert, die standardmäßig auf `0% 0%` eingestellt ist. Das Maskenbild wird nur abgeschnitten, wenn das Maskenbild größer als das Maskenursprungsfeld ist.

- `round`

  - : Das Maskenbild wird so oft wie möglich in seinen ursprünglichen Dimensionen wiederholt. Wenn die Größe des Maskenursprungsfelds kein genaues Vielfaches der Größe des Maskenbilds ist, werden alle Maskenbilder reskaliert, um sicherzustellen, dass keine Wiederholungen abgeschnitten werden.

- `no-repeat`
  - : Das Maskenbild wird nicht wiederholt (und daher wird der Masken-Malbereich möglicherweise nicht vollständig abgedeckt). Die Position des nicht wiederholten Maskenbilds wird durch die {{cssxref("mask-position")}} CSS Eigenschaft definiert.

#### Kurzformwerte

Die Ein-Wert-Syntax ist eine Kurzform für die vollständige Zwei-Werte-Syntax:

<table class="standard-table">
  <thead>
    <tr>
      <th>Einzelwert</th>
      <th>Äquivalent zu zwei Werten</th>
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

  - : Gleichwertig mit `repeat no-repeat`. Das Bild wird in horizontaler Richtung so oft wie nötig wiederholt, um die Breite des Masken-Malbereichs zu bedecken. Maskenbilder entlang der rechten oder linken Kante, oder beide, abhängig vom {{cssxref("mask-position")}} Wert, werden abgeschnitten, wenn die Breite des Maskenursprungsfelds kein genaues Vielfaches der Breite des Maskenbilds ist.

- `repeat-y`
  - : Gleichwertig mit `no-repeat repeat`. Das Bild wird in vertikaler Richtung so oft wie nötig wiederholt, um die Höhe des Masken-Malbereichs zu bedecken. Maskenbilder entlang der oberen oder unteren Kante, oder beide, abhängig vom {{cssxref("mask-position")}} Wert, werden abgeschnitten, wenn die Höhe des Maskenursprungsfelds kein genaues Vielfaches der Höhe des Maskenbilds ist.

## Beschreibung

Die `mask-repeat` Eigenschaft akzeptiert ein kommagetrenntes Paar von Werten oder einen [Kurzformwert](#kurzformwerte). In der Zwei-Werte-Syntax repräsentiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten.

### Mehrere Werte

Jeder `mask-repeat` Wert in dieser kommagetrennten Liste gilt für eine separate Maskenschicht. Ein Element kann mehrere angewendete Maskenschichten haben. Die Anzahl der Schichten wird durch die Anzahl der kommagetrennten Werte im Wert der {{cssxref("mask-image")}} Eigenschaft bestimmt (selbst wenn ein Wert `none` ist). Jeder `mask-repeat` Wert wird passend zu den `mask-image` Werten, in der Reihenfolge. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist, werden die überzähligen `mask-repeat` Werte ignoriert oder, wenn `mask-repeat` weniger Werte hat als `mask-image`, werden die `mask-repeat` Werte wiederholt.

### Größen- und Positionierungsbestimmung

Der Wert der `mask-repeat` Eigenschaft definiert, wie Maskenbilder gekachelt werden, nachdem sie [größenbestimmt](/de/docs/Web/CSS/mask-size) und [positioniert](/de/docs/Web/CSS/mask-position) wurden. Die erste (und möglicherweise einzige) Maskenbild-Wiederholung wird durch die {{cssxref("mask-position")}} Eigenschaft positioniert, die standardmäßig auf `0% 0%` steht, der oberen linken Ecke des Urspungsfeldes. Die Größe wird durch die {{cssxref("mask-size")}} Eigenschaft definiert, die standardmäßig auf `auto` steht. Die Positionen der wiederholten Masken basieren auf dieser anfänglichen Maskeninstanz.

### Clipping

Maskenbilder werden nicht wiederholt, sondern abgeschnitten, wenn die Größe des Maskenbilds größer als das Urspungsfeld ist, außer im Fall von `round`, bei dem ein einzelnes Maskenbild verkleinert wird, um in das Ursprungfeld zu passen.

Mit `repeat` Werten können Maskenbilder an der Kante des Ursprungsfeldes abgeschnitten werden, wenn die Dimension (Breite oder Höhe) des Feldes kein genaues Vielfaches des Maskenbildes ist.

### Seitenverhältnis

Standardmäßig behalten Maskenbilder das durch die {{cssxref("mask-size")}} Eigenschaft festgelegte Seitenverhältnis bei oder ihr Standardseitenverhältnis, wenn die `mask-size` Eigenschaft auf oder ausdrücklich auf `auto` eingestellt ist. Nur im Fall des `round` Werts in beide Richtungen kann das Seitenverhältnis der Maske verzerrt werden.

Wenn `round` in beide Richtungen eingestellt ist, passen die resultierenden wiederholten Maskenbilder das Seitenverhältnis des Urspungsfeldes an. Da die Maskenbilder skaliert werden, um zu passen, können sie verzerrt werden, um sicherzustellen, dass die Maskenbilder nicht abgeschnitten werden. Wenn `round` nur in einer Dimension eingestellt ist, wird das Seitenverhältnis der Maskengröße respektiert.

### Runde Wiederholungen

Im Fall von `round` werden Maskenbilder vergrößert oder verkleinert, um das Maskenbild in den Positionierungsbereich eine ganze Anzahl von Malen zu passen. Die Maskengröße wird so erhöht oder verringert, dass die nächste natürliche Zahl oder Masken passt, mit einem Minimum von einer Maske.

Die gerenderten Dimensionen der Maske sind die Größe des Ursprungsfeldes geteilt durch die Anzahl der Iterationen der Maske in dieser Dimension, wobei die Iterationen eine Ganzzahl größer als Null sind. Die Anzahl der Iterationen ist: `X' = D / round(D / X)` wobei `D` die Breite oder Höhe ist und `round()` eine Funktion ist, die die nächste Ganzzahl größer als Null zurückgibt.

Zum Beispiel, wenn `mask-repeat` auf `round` gesetzt ist und die `mask-size` die Maske auf `40px` Breite setzt, wenn das Ursprungsfeld vorhanden (größer als `0px` breit) aber weniger als `60px` breit ist, wird es eine einzelne Iteration geben, die 100% der Breite dieses Feldes ist. Wenn das Feld mindestens `60px` aber weniger als `100px` breit ist, wird es zwei Iterationen geben, die jeweils `50%` des Feldes sind. Von 100px bis 140px passen drei Masken entlang der horizontalen Achse. Diese "`40px`-breiten" Masken werden nur dann `40px` breit sein, wenn das Ursprungfeld ein genaues Vielfaches von `40px` ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die Einstellung der `mask-repeat` Eigenschaft für eine einzelne Maske.

#### HTML

Unser HTML beinhaltet ein grundlegendes {{htmlelement("div")}} Element:

```html
<div></div>
```

#### CSS

Wir definieren ein `250px` Quadrat mit einem Rot-zu-Blau Verlauf mit einem `100px` mal `100px` Stern als Maskenbild. Wir verwenden die `mask-repeat` Eigenschaft und setzen `round` für die horizontale Richtung und `space` für den vertikalen Wert.

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

Mit `space` und `round` auf ein Maskenbild, das kleiner als das Ursprungfeld ist, wird die Maske nicht abgeschnitten. Vielmehr verzerrt der `round` Wert den Stern, um das Abschneiden und die Entstehung von Leerraum zu verhindern, während `space` das Seitenverhältnis des Sterns beibehält, jedoch bei Bedarf Platz zwischen den Masken hinzufügt.

### Runde Iterationen

Verwenden Sie das gleiche HTML und CSS, dieses Demonstrations beinhaltet einen Slider, der die Breite des Containers ändert, um zu zeigen, wie bei `round` Masken wachsen, wenn der Platz es erlaubt, bis eine weitere Iteration der Maske passt, oder schrumpfen, bis die Anzahl der Iterationen nicht mehr passt.

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

Die Maske ist auf `100px` Breite definiert. Es gibt einen einzelnen Stern, wenn das Ursprungfeld von `1px` bis `149px` breit ist, zwei Sterne von `150px` bis `249px`, drei Sterne von `250px` bis `349px` und so weiter.

### Die Kurzformwerte

Dieses Beispiel zeigt alle `mask-repeat` Kurzform (Schlüsselwort) Werte.

#### HTML

Wir fügen mehrere {{htmlelement("section")}} Elemente ein, die jeweils ein `<div>` enthalten, jedes mit einem anderen Klassennamen.

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

Wir geben jedem `<div>` das gleiche CSS, mit Ausnahme des `mask-repeat` Wertes, den wir an den Klassennamen ihrer Eltern anpassen. Wir definieren eine Maskengröße und setzen das anfängliche `mask-image` unten rechts, was bedeutet, dass jedes Abschneiden an den obersten und linken Masken auf ihren oberen und linken Seiten erfolgen wird.

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

Wir zeigen den Klassennamen mit generiertem Inhalt an.

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

Der erste (und im Fall von `no-repeat` einzige) Maskenstern wird [größenbestimmt](/de/docs/Web/CSS/mask-size) sein, um 50px mal 50px groß zu sein, und [positioniert](/de/docs/Web/CSS/mask-position) am unteren rechten Rand des Malbereichs, wobei wiederholte Sterne darüber und/oder links davon mit jedem Abschneiden auf der Oberseite und links der obersten und linken Sterne positioniert werden. Beachten Sie, dass alle Sterne die gleiche Größe und Form haben, außer bei `round`, wo alle Masken auf 45px x 45px geschrumpft sind, um vier vollständige Masken in jede Richtung unterzubringen. Wäre der Container 174px groß gewesen, hätte es drei Sterne in jede Richtung, statt vier, gegeben und jeder Stern wäre gedehnt worden.

### Mehrere Maskenbilder und Wiederholungen

Sie können für jedes Maskenbild einen anderen `<repeat-style>` angeben, getrennt durch Kommas:

```css
.extra-repeats {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-repeat: repeat-x, repeat-y, space;
}
```

Jedes Bild wird mit dem entsprechenden Wiederholungsstil abgeglichen. Da es mehr `mask-repeat` Werte als `mask-image` Werte gibt, werden die überschüssigen `mask-repeat` Werte ignoriert.

```css
.missing-repeats {
  mask-image:
    url("mask1.png"), url("mask2.png"), url("mask3.png"), url("mask4.png");
  mask-repeat: repeat-x, repeat-y;
}
```

Jedes Bild wird mit einem entsprechenden Wiederholungsstil abgeglichen. Da es mehr `mask-image` Werte als `mask-repeat` Werte gibt, wird das `mask-repeat` wiederholt, bis jedes `mask-image` einen zugeordneten `mask-repeat` Wert hat. Hier wiederholen sich ungeradzahlige Masken entlang der x-Achse, während sich die geradzahligen Masken entlang der y-Achse wiederholen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipping und Masking in CSS](https://css-tricks.com/clipping-masking-css/)
