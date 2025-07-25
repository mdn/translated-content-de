---
title: mask-repeat
slug: Web/CSS/mask-repeat
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`mask-repeat`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie Maskenbilder wiederholt werden. Ein Maskenbild kann entlang der horizontalen Achse, der vertikalen Achse, beider Achsen oder gar nicht wiederholt werden.

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

Die `mask-repeat`-Eigenschaft ist eine kommagetrennte Liste von zwei `<repeat-style>`-Werten, wobei der erste `<repeat-style>`-Wert den horizontalen Wiederholungswert und der zweite Wert den vertikalen Wiederholungswert darstellt, oder ein Schlüsselwortwert, der als Abkürzung für zwei `<repeat-style>`-Werte dient.

#### `<repeat-style>`-Werte

Die `<repeat-style>`-Werte umfassen:

- `repeat`
  - : Das Bild wird so oft wie nötig wiederholt, um das gesamte Maskenmalbereich abzudecken. Maskenbilder entlang der Ränder werden abgeschnitten, wenn die Größe der [Maskenursprungsbox](/de/docs/Web/CSS/mask-origin) kein genaues Vielfaches der Maskenbildgröße ist.

- `space`
  - : Das Maskenbild wird so oft wie möglich wiederholt, ohne abgeschnitten zu werden. Wenn die Ursprungsgröße des Elements mindestens doppelt so groß ist wie die Größe des Maskenbildes in der zugehörigen Dimension, wird die {{cssxref("mask-position")}}-Eigenschaft ignoriert und die ersten und letzten Bilder werden an den Rändern des Maskenursprungscontainers positioniert. Wenn die Maskenursprungsbox kein genaues Vielfaches der Maskenbildgröße ist, wird der Weißraum gleichmäßig zwischen den wiederholten Maskenbildern verteilt.

    Wenn die Größe der Ursprungsbox kleiner als das Doppelte der Maskenbildgröße in der gegebenen Dimension ist, kann nur ein Maskenbild angezeigt werden. In diesem Fall wird das Bild gemäß der `mask-position`-Eigenschaft positioniert, die standardmäßig auf `0% 0%` gesetzt ist. Das Maskenbild wird nur abgeschnitten, wenn es größer als die Maskenursprungsbox ist.

- `round`
  - : Das Maskenbild wird in seinen ursprünglichen Dimensionen so oft wie möglich wiederholt. Wenn die Größe der Maskenursprungsbox kein genaues Vielfaches der Maskenbildgröße ist, werden alle Maskenbilder reskaliert, [verkleinert oder gestreckt](#gerundete_wiederholungen), um sicherzustellen, dass keine Wiederholungen abgeschnitten werden.

- `no-repeat`
  - : Das Maskenbild wird nicht wiederholt (und daher wird der Maskenmalbereich möglicherweise nicht vollständig abgedeckt). Die Position des nicht wiederholten Maskenbildes wird durch die {{cssxref("mask-position")}} CSS-Eigenschaft definiert.

#### Abkürzungswerte

Die Ein-Wert-Syntax ist eine Abkürzung für die vollständige Zwei-Wert-Syntax:

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
  - : Entspricht `repeat no-repeat`. Das Bild wird in horizontaler Richtung so oft wie nötig wiederholt, um die Breite des Maskenmalbereichs abzudecken. Maskenbilder entlang der rechten oder linken Ränder, oder beides, abhängig vom {{cssxref("mask-position")}}-Wert, werden abgeschnitten, wenn die Breite der Maskenursprungsbox kein genaues Vielfaches der Maskenbildbreite ist.

- `repeat-y`
  - : Entspricht `no-repeat repeat`. Das Bild wird in vertikaler Richtung so oft wie nötig wiederholt, um die Höhe des Maskenmalbereichs abzudecken. Maskenbilder entlang der oberen oder unteren Ränder, oder beides, abhängig vom {{cssxref("mask-position")}}-Wert, werden abgeschnitten, wenn die Höhe der Maskenursprungsbox kein genaues Vielfaches der Maskenbildhöhe ist.

## Beschreibung

Die `mask-repeat`-Eigenschaft akzeptiert ein kommagetrenntes Wertepaar oder einen [Abkürzungswert](#abkürzungswerte). In der Zwei-Wert-Syntax repräsentiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten.

### Mehrere Werte

Jeder `mask-repeat`-Wert in dieser kommagetrennten Liste gilt für eine separate Maskenschicht. Ein Element kann mehrere Maskenschichten haben. Die Anzahl der Schichten wird durch die Anzahl der kommagetrennten Werte im Wert der {{cssxref("mask-image")}}-Eigenschaft bestimmt (selbst wenn ein Wert `none` ist). Jeder `mask-repeat`-Wert wird in der Reihenfolge mit den `mask-image`-Werten abgeglichen. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist, werden überschüssige `mask-repeat`-Werte ignoriert, oder, wenn `mask-repeat` weniger Werte als `mask-image` hat, werden die `mask-repeat`-Werte wiederholt.

### Größenanpassung und Positionierung

Der Wert der `mask-repeat`-Eigenschaft definiert, wie Maskenbilder gekachelt werden, nachdem sie [skaliert](/de/docs/Web/CSS/mask-size) und [positioniert](/de/docs/Web/CSS/mask-position) wurden. Die erste (und möglicherweise einzige) Maskenbildwiederholung wird durch die {{cssxref("mask-position")}}-Eigenschaft positioniert, die standardmäßig auf `0% 0%` gesetzt ist, die obere linke Ecke der Ursprungsbox. Die Größe wird durch die {{cssxref("mask-size")}}-Eigenschaft definiert, die standardmäßig auf `auto` gesetzt ist. Die Positionen der wiederholten Masken basieren auf dieser ersten Maskeninstanz.

### Beschneidung

Maskenbilder werden nicht wiederholt, sondern beschnitten, wenn die Größe des Maskenbildes größer als die Ursprungsbox ist, außer im Fall von `round`, bei dem eine einzelne Maske auf die Ursprungsbox skaliert wird.

Bei `repeat`-Werten können Maskenbilder am Rand der Ursprungsbox beschnitten werden, wenn die Dimension (Breite oder Höhe) der Box kein genaues Vielfaches der Maske ist.

### Seitenverhältnis

Standardmäßig behalten Maskenbilder das Seitenverhältnis bei, das durch die {{cssxref("mask-size")}}-Eigenschaft festgelegt wird, oder ihr Standardseitenverhältnis, wenn `mask-size` standardmäßig oder explizit auf `auto` gesetzt ist. Nur im Fall eines `round`-Wertes in beiden Richtungen könnte das Seitenverhältnis der Maske verzerrt werden.

Wenn `round` in beide Richtungen gesetzt ist, entsprechen die resultierenden wiederholten Maskenbilder dem Seitenverhältnis der Ursprungsbox. Da die Maskenbilder skaliert werden, um zu passen, können sie verzerrt werden, um sicherzustellen, dass die Maskenbilder nicht abgeschnitten werden. Wenn `round` nur in einer Dimension gesetzt ist, wird das Seitenverhältnis der Maskengröße eingehalten.

### Gerundete Wiederholungen

Im Fall von `round` werden Maskenbilder vergrößert oder verkleinert, um das Maskenbild in der Positionierungsfläche eine ganze Anzahl von Malen anzupassen. Die Maskengröße wird erhöht oder verringert, um der nächsten natürlichen Zahl oder Masken zu entsprechen, mit einem Minimum von einer Maske.

Die gerenderten Dimensionen der Maske sind die Größe der Ursprungsbox, geteilt durch die Anzahl der Maskenwiederholungen in dieser Dimension, wobei die Wiederholungen eine ganze Zahl größer als Null sind. Die Anzahl der Wiederholungen ist: `X' = D / round(D / X)`, wobei `D` die Breite oder Höhe und `round()` eine Funktion ist, die die nächstliegende Ganzzahl größer als Null zurückgibt.

Zum Beispiel, wenn `mask-repeat` auf `round` gesetzt ist und `mask-size` die Maske auf `40px` Breite setzt, wenn die Ursprungsbox präsent ist (größer als `0px` Breite) aber weniger als `60px` Breite hat, gibt es eine einzige Wiederholung, die 100% der Breite dieser Box beträgt. Wenn die Box mindestens `60px` Breite, aber weniger als `100px` Breite hat, gibt es zwei Wiederholungen, die jeweils `50%` der Box betragen. Von 100px bis 140px passen drei Masken entlang der horizontalen Achse. Diese "`40px`-breiten" Masken sind nur dann `40px` breit, wenn die Ursprungsbox ein genaues Vielfaches von `40px` ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die Einstellung der `mask-repeat`-Eigenschaft für eine einzelne Maske.

#### HTML

Unser HTML enthält ein grundlegendes {{htmlelement("div")}}-Element:

```html
<div></div>
```

#### CSS

Wir definieren ein `250px` großes Quadrat mit einem roten zu blauem Farbverlauf mit einem `100px` mal `100px` Stern als Maskenbild. Wir verwenden die `mask-repeat`-Eigenschaft und setzen `round` für die horizontale Richtung und `space` für den vertikalen Wert.

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

Mit `space` und `round` auf einem Maskenbild, das kleiner als die Ursprungsbox ist, wird die Maske nicht beschnitten. Vielmehr verzerrt der `round`-Wert den Stern, um das Beschnitt und den Weißraum zu verhindern, während `space` das Seitenverhältnis des Sterns beibehält, aber nach Bedarf Platz zwischen den Masken hinzufügt.

### Runde Wiederholungen

Mit dem gleichen HTML und CSS enthält diese Demonstration einen Schieberegler, der die Breite des Containers ändert, um zu zeigen, wie sich bei `round` Masken vergrößern, wenn der Platz es zulässt, bis eine weitere Wiederholung der Maske passt, oder verkleinern, bis die Anzahl der Wiederholungen nicht mehr passt.

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

Die Maske ist als `100px` breit definiert. Es gibt einen einzelnen Stern, wenn die Ursprungsbox von `1px` bis `149px` breit ist, zwei Sterne von `150px` bis `249px`, drei Sterne von `250px` bis `349px` und so weiter.

### Die Abkürzungswerte

Dieses Beispiel demonstriert alle `mask-repeat`-Abkürzungswerte (einzelne Schlüsselwörter).

#### HTML

Wir fügen mehrere {{htmlelement("section")}}-Elemente ein, die jeweils ein `<div>` enthalten, jedes mit einem anderen Klassennamen.

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

Wir geben jedem `<div>` das gleiche CSS, außer für den `mask-repeat`-Wert, den wir mit ihrem übergeordneten Klassennamen übereinstimmen. Wir definieren eine Maskengröße und setzen das initiale `mask-image` in die untere rechte Ecke, was bedeutet, dass jedes Beschnitt an den Masken auf der oberen und linken Seite der oberen und linken Masken erfolgt.

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

Wir zeigen den Klassennamen unter Verwendung generierter Inhalte an.

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

Der erste (und im Fall von `no-repeat` der einzige) Maskenstern wird [auf 50px mal 50px skaliert](/de/docs/Web/CSS/mask-size) und [in der unteren rechten Ecke des Malbereichs positioniert](/de/docs/Web/CSS/mask-position), wobei die wiederholten Sterne darüber und/oder links davon platziert werden, wobei jegliches Beschnitt an den oberen und linken Seiten der oberen und linken Sterne erfolgt. Beachten Sie, dass alle Sterne die gleiche Größe und Form haben, außer bei `round`, bei dem alle Masken auf 45px x 45px geschrumpft sind, um vier vollständige Masken in jede Richtung zu passen. Wäre der Container 174px groß gewesen, hätte es drei Sterne in jeder Richtung statt vier gegeben, und jeder Stern wäre gestreckt worden.

### Mehrere Maskenbilder und Wiederholungen

Sie können für jedes Maskenbild einen anderen `<repeat-style>` angeben, getrennt durch Kommata:

```css
.extra-repeats {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-repeat: repeat-x, repeat-y, space;
}
```

Jedes Bild wird dem entsprechenden Wiederholungsstil zugeordnet. Da es mehr `mask-repeat`-Werte als `mask-image`-Werte gibt, werden die überschüssigen `mask-repeat`-Werte ignoriert.

```css
.missing-repeats {
  mask-image:
    url("mask1.png"), url("mask2.png"), url("mask3.png"), url("mask4.png");
  mask-repeat: repeat-x, repeat-y;
}
```

Jedes Bild wird mit einem entsprechenden Wiederholungsstil abgeglichen. Da es mehr `mask-image`-Werte als `mask-repeat`-Werte gibt, wird `mask-repeat` wiederholt, bis jedes `mask-image` einen zugehörigen `mask-repeat`-Wert hat. Hier wiederholen sich ungerade nummerierte Masken entlang der x-Achse, während gerade nummerierte Masken sich entlang der y-Achse wiederholen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-repeat")}}
- {{cssxref("mask-border-repeat")}}
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS-`mask`-Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Maskierungsmodul](/de/docs/Web/CSS/CSS_masking)
