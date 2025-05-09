---
title: mask-repeat
slug: Web/CSS/mask-repeat
l10n:
  sourceCommit: cb7e7fde9b942001d6acef7d9868fbf622d71636
---

{{CSSRef}}

Die **`mask-repeat`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Maskenbilder wiederholt werden. Ein Maskenbild kann entlang der horizontalen Achse, der vertikalen Achse, beider Achsen oder gar nicht wiederholt werden.

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

Die Eigenschaft `mask-repeat` ist eine kommagetrennte Liste von zwei `<repeat-style>` Werten, wobei der erste `<repeat-style>` Wert den horizontalen Wiederholungswert und der zweite den vertikalen Wiederholungswert darstellt, oder ein einzelner Schlüsselwortwert, der eine Kurzform für zwei `<repeat-style>` Werte ist.

#### `<repeat-style>` Werte

Die `<repeat-style>` Werte beinhalten:

- `repeat`

  - : Das Bild wird so oft wie nötig wiederholt, um den gesamten Maskenmalbereich abzudecken. Maskenbilder entlang der Ränder werden abgeschnitten, wenn die Größe des [Maskenursprungsbereichs](/de/docs/Web/CSS/mask-origin) kein exaktes Vielfaches der Maskenbildgröße ist.

- `space`

  - : Das Maskenbild wird so oft wie möglich ohne Abschneiden wiederholt. Wenn die Ursprungsgöße des Elements mindestens zweimal so groß ist wie die Maskenbildgröße in der entsprechenden Dimension, wird die {{cssxref("mask-position")}} Eigenschaft ignoriert und die ersten und letzten Bilder werden an den Rändern des Maskenursprung-Containers positioniert. Wenn der Ursprungskasten kein exaktes Vielfaches der Maskenbildgröße ist, wird der Leerraum gleichmäßig zwischen den wiederholten Maskenbildern verteilt.

    Wenn die Ursprungsgröße kleiner als das Doppelte der Maskenbildgröße in der angegebenen Dimension ist, kann nur ein Maskenbild angezeigt werden. In diesem Fall wird das Bild wie durch die `mask-position` Eigenschaft definiert positioniert, die standardmäßig `0% 0%` ist. Das Maskenbild wird nur abgeschnitten, wenn das Maskenbild größer als der Maskenursprungskasten ist.

- `round`

  - : Das Maskenbild wird so oft wie möglich in seinen ursprünglichen Dimensionen wiederholt. Wenn die Größe des Maskenursprungskastens kein exaktes Vielfaches der Maskenbildgröße ist, werden alle Maskenbilder skaliert, [verkleinert oder gestreckt](#rounded-repetitions), um sicherzustellen, dass keine Wiederholungen abgeschnitten werden.

- `no-repeat`

  - : Das Maskenbild wird nicht wiederholt (und daher wird der Maskenmalbereich nicht unbedingt vollständig abgedeckt). Die Position des nicht wiederholten Maskenbildes wird durch die {{cssxref("mask-position")}} CSS-Eigenschaft definiert.

#### Kurzformwerte

Die Ein-Wert-Syntax ist eine Abkürzung für die vollständige Zwei-Wert-Syntax:

<table class="standard-table">
  <thead>
    <tr>
      <th>Einzelner Wert</th>
      <th>Entsprechender Zwei-Wert</th>
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

  - : Entspricht `repeat no-repeat`. Das Bild wird in horizontaler Richtung so oft wie nötig wiederholt, um die Breite des Maskenmalbereichs abzudecken. Maskenbilder entlang der rechten oder linken Ränder, oder beides abhängig vom Wert von {{cssxref("mask-position")}}, werden abgeschnitten, wenn die Breite des Maskenursprungskastens kein exaktes Vielfaches der Breite des Maskenbilds ist.

- `repeat-y`

  - : Entspricht `no-repeat repeat`. Das Bild wird in vertikaler Richtung so oft wie nötig wiederholt, um die Höhe des Maskenmalbereichs abzudecken. Maskenbilder entlang der oberen oder unteren Ränder, oder beides abhängig vom Wert von {{cssxref("mask-position")}}, werden abgeschnitten, wenn die Höhe des Maskenursprungskastens kein exaktes Vielfaches der Höhe des Maskenbilds ist.

## Beschreibung

Die `mask-repeat` Eigenschaft akzeptiert ein kommagetrenntes Paar von Werten oder einen [Kurzformwert](#shorthand-values). In der Zwei-Wert-Syntax repräsentiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten.

### Mehrere Werte

Jeder `mask-repeat` Wert in dieser kommagetrennten Liste gilt für eine separate Maskenebene. Ein Element kann mehrere Maskenebenen haben. Die Anzahl der Ebenen wird durch die Anzahl der kommagetrennten Werte im Wert der {{cssxref("mask-image")}} Eigenschaft bestimmt (auch wenn ein Wert `none` ist). Jeder `mask-repeat` Wert wird den `mask-image` Werten in Reihenfolge zugeordnet. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist, werden überschüssige `mask-repeat` Werte ignoriert, oder wenn `mask-repeat` weniger Werte als `mask-image` hat, werden die `mask-repeat` Werte wiederholt.

### Größenanpassung und Positionierung

Der Wert der `mask-repeat` Eigenschaft definiert, wie Maskenbilder gekachelt werden, nachdem sie [größenangepasst](/de/docs/Web/CSS/mask-size) und [positioniert](/de/docs/Web/CSS/mask-position) wurden. Die erste (und möglicherweise einzige) Wiederholung des Maskenbildes wird durch die {{cssxref("mask-position")}} Eigenschaft positioniert, die standardmäßig `0% 0%` ist, die obere linke Ecke des Ursprungskastens. Die Größe wird durch die {{cssxref("mask-size")}} Eigenschaft definiert, die standardmäßig `auto` ist. Die Positionen der wiederholten Masken basieren auf dieser anfänglichen Maskeninstanz.

### Clipping

Maskenbilder werden nicht wiederholt, sondern abgeschnitten, wenn die Größe des Maskenbildes größer als der Ursprungskasten ist, außer im Fall von `round`, wo eine einzelne Maske verkleinert wird, um in den Ursprungskasten zu passen.

Mit `repeat` Werten können Maskenbilder am Rand des Ursprungskastens abgeschnitten werden, wenn die Dimension (Breite oder Höhe) des Kastens kein exaktes Vielfaches der Maske ist.

### Seitenverhältnis

Standardmäßig behalten Maskenbilder das Seitenverhältnis bei, das durch die {{cssxref("mask-size")}} Eigenschaft festgelegt wird, oder ihr Standard-Seitenverhältnis, wenn `mask-size` auf `auto` voreingestellt oder explizit auf `auto` gesetzt ist. Nur im Fall von `round` Wert in beiden Richtungen kann das Seitenverhältnis der Masken verzerrt werden.

Wenn `round` in beide Richtungen gesetzt ist, werden die resultierenden wiederholten Maskenbilder das Seitenverhältnis des Ursprungskastens einhalten. Da die Maskenbilder skaliert werden, um zu passen, können sie verzerrt werden, um sicherzustellen, dass die Maskenbilder nicht abgeschnitten werden. Wenn `round` nur in einer Dimension gesetzt ist, wird das Seitenverhältnis der Masken-Größe respektiert.

### Abgerundete Wiederholungen

Im Fall von `round` werden Maskenbilder vergrößert oder verkleinert, um die Maske in den Positionierungsbereich eine ganze Anzahl von Malen zu passen. Die Maskengröße wird vergrößert oder verkleinert, um die nächstmögliche natürliche Anzahl von Masken zu passen, mit einem Minimum von einer Maske.

Die gerenderten Dimensionen der Maske sind die Größe des Ursprungskastens dividiert durch die Anzahl der Wiederholungen der Masken in dieser Dimension, wobei die Wiederholungen eine Ganzzahl größer als null sind. Die Anzahl der Wiederholungen ist: `X' = D / round(D / X)` wobei `D` die Breite oder Höhe ist und `round()` eine Funktion ist, die die nächste Ganzzahl größer als null zurückgibt.

Zum Beispiel, wenn `mask-repeat` auf `round` gesetzt ist und `mask-size` die Maske auf `40px` Breite setzt, wenn der Ursprungskasten vorhanden ist (größer als `0px` breit) aber weniger als `60px` breit, wird es eine einzelne Wiederholung geben, die 100% der Breite dieses Kastens beträgt. Wenn der Kasten mindestens `60px` breit ist, aber weniger als `100px` breit, wird es zwei Wiederholungen geben, die jeweils `50%` des Kastens betragen. Von 100px bis 140px passen drei Masken entlang der horizontalen Achse. Diese "`40px`-breiten" Masken werden nur `40px` breit sein, wenn der Ursprungskasten ein exaktes Vielfaches von `40px` ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel zeigt das Setzen der `mask-repeat` Eigenschaft für eine einzelne Maske.

#### HTML

Unser HTML enthält ein einfaches {{htmlelement("div")}} Element:

```html
<div></div>
```

#### CSS

Wir definieren ein `250px` Quadrat mit einem rot zu blau Verlauf und einem `100px` mal `100px` Stern als Maskenbild. Wir verwenden die `mask-repeat` Eigenschaft, indem wir `round` für die horizontale Richtung und `space` für den vertikalen Wert setzen.

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

Mit `space` und `round` auf einem Maskenbild, das kleiner als der Ursprungskasten ist, wird die Maske nicht abgeschnitten. Vielmehr verzerrt der `round` Wert den Stern, um Abschneiden und Weißraum zu verhindern, während `space` das Seitenverhältnis des Sterns beibehält, aber bei Bedarf Platz zwischen den Masken hinzufügt.

### Abgerundete Wiederholungen

Anhand desselben HTML und CSS zeigt diese Demonstration einen Schieberegler, der die Breite des Containers ändert, um zu zeigen, wie sich bei `round` die Masken vergrößern, wenn der Platz es zulässt, bis eine weitere Wiederholung der Maske passt, oder schrumpfen, bis die Anzahl der Wiederholungen nicht mehr passt.

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

Die Maske ist als `100px` breit definiert. Es gibt einen einzelnen Stern, wenn der Ursprungskasten von `1px` bis `149px` breit ist, zwei Sterne von `150px` bis `249px`, drei Sterne von `250px` bis `349px` usw.

### Die Kurzformwerte

Dieses Beispiel zeigt alle `mask-repeat` Kurzform (Ein-Schlüsselwort) Werte.

#### HTML

Wir fügen mehrere {{htmlelement("section")}} Elemente ein, die jeweils ein `<div>` enthalten, wobei jedes eine andere Klassenname hat.

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

Wir geben jedem `<div>` das gleiche CSS, außer für den `mask-repeat` Wert, den wir mit dem Klassennamen seines Elternteils abgleichen. Wir definieren eine Maskengröße, setzen das anfängliche `mask-image` unten rechts, wobei jegliches Abschneiden an den oberen und linken Seiten der obersten und linken Masken erfolgt.

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

Wir zeigen den Klassennamen mithilfe generierter Inhalte an.

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

Der erste (und, im Fall von `no-repeat`, einzige) Maskenstern wird [auf die Größe](/de/docs/Web/CSS/mask-size) 50px mal 50px [gesetzt](/de/docs/Web/CSS/mask-position) am unteren rechten Rand des Malbereichs positioniert, wobei die wiederholten Sterne über und/oder links von ihm mit jeglichem Abschneiden an den oberen und linken Seiten der oberen und linken Sterne platziert werden. Beachten Sie, dass alle Sterne die gleiche Größe und Form haben, außer bei `round`, bei dem alle Masken auf 45px x 45px schrumpften, um vier vollständige Masken in jede Richtung zu passen. Wäre der Container 174px groß, hätte es drei Sterne in jeder Richtung gegeben, anstatt vier, und jeder Stern wäre gestreckt worden.

### Mehrere Maskenbilder und Wiederholungen

Sie können für jedes Maskenbild einen anderen `<repeat-style>` angeben, getrennt durch Kommas:

```css
.extra-repeats {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-repeat: repeat-x, repeat-y, space;
}
```

Jedes Bild wird mit dem entsprechenden Wiederholstil abgeglichen. Da es mehr `mask-repeat` Werte als `mask-image` Werte gibt, werden die überschüssigen `mask-repeat` Werte ignoriert.

```css
.missing-repeats {
  mask-image:
    url("mask1.png"), url("mask2.png"), url("mask3.png"), url("mask4.png");
  mask-repeat: repeat-x, repeat-y;
}
```

Jedes Bild wird mit einem entsprechenden Wiederholstil abgeglichen. Da es mehr `mask-image` Werte als `mask-repeat` Werte gibt, wird der `mask-repeat` wiederholt, bis jedes `mask-image` einen zugehörigen `mask-repeat` Wert hat. Hier wiederholen sich ungerade nummerierte Masken entlang der x-Achse, während gerade nummerierte Masken entlang der y-Achse wiederholen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipping und Maskierung in CSS](https://css-tricks.com/clipping-masking-css/)
