---
title: mask-repeat
slug: Web/CSS/Reference/Properties/mask-repeat
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

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

Die Eigenschaft `mask-repeat` ist eine durch Komma getrennte Liste von zwei `<repeat-style>` Werten, wobei der erste `<repeat-style>` Wert der horizontale Wiederholungswert ist und der zweite Wert der vertikale Wiederholungswert ist, oder ein Schlüsselwortwert, der eine Kurzschreibweise für zwei `<repeat-style>` Werte ist.

#### `<repeat-style>` Werte

Die `<repeat-style>` Werte umfassen:

- `repeat`
  - : Das Bild wird so oft wiederholt, wie es notwendig ist, um den gesamten Maskenmalbereich abzudecken. Maskenbilder entlang der Ränder werden abgeschnitten, wenn die Größe der [mask origin box](/de/docs/Web/CSS/Reference/Properties/mask-origin) kein exaktes Vielfaches der Maskenbildgröße ist.

- `space`
  - : Das Maskenbild wird so oft wie möglich ohne Zuschneiden wiederholt. Ist die Ursprungsgöße des Elements mindestens doppelt so groß wie die Größe des Maskenbildes in der zugehörigen Dimension, wird die Eigenschaft {{cssxref("mask-position")}} ignoriert und die ersten und letzten Bilder werden an den Rändern des Maskenursprungscontainers positioniert. Ist die Maskenursprungsbox kein exaktes Vielfaches der Maskenbildgröße, wird der Leerraum gleichmäßig zwischen den wiederholten Maskenbildern verteilt.

    Ist die Ursprungsboxgröße kleiner als das Doppelte der Maskenbildgröße in der gegebenen Dimension, kann nur ein Maskenbild angezeigt werden. In diesem Fall wird das Bild gemäß der Eigenschaft `mask-position` positioniert, die standardmäßig auf `0% 0%` gesetzt ist. Das Maskenbild wird nur abgeschnitten, wenn das Maskenbild größer als die Maskenursprungsbox ist.

- `round`
  - : Das Maskenbild wird so oft wie möglich in seinen ursprünglichen Dimensionen wiederholt. Wenn die Größe der Maskenursprungsbox kein exaktes Vielfaches der Maskenbildgröße ist, werden alle Maskenbilder neu skaliert, [verkleinert oder gestreckt](#abgerundete_wiederholungen), um sicherzustellen, dass keine Wiederholungen abgeschnitten werden.

- `no-repeat`
  - : Das Maskenbild wird nicht wiederholt (und somit wird der Maskenmalbereich nicht unbedingt vollständig abgedeckt). Die Position des nicht wiederholten Maskenbildes wird durch die {{cssxref("mask-position")}} CSS-Eigenschaft definiert.

#### Kurzschreibweise

Die Ein-Wert-Syntax ist eine Kurzschreibweise für die vollständige Zwei-Wert-Syntax:

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
  - : Entspricht `repeat no-repeat`. Das Bild wird in horizontaler Richtung so oft wie nötig wiederholt, um die Breite des Maskenmalbereichs abzudecken. Maskenbilder entlang der rechten oder linken Ränder, oder beides abhängig vom {{cssxref("mask-position")}} Wert, werden abgeschnitten, falls die Breite der Maskenursprungsbox kein exaktes Vielfaches der Breite des Maskenbildes ist.

- `repeat-y`
  - : Entspricht `no-repeat repeat`. Das Bild wird in vertikaler Richtung so oft wie nötig wiederholt, um die Höhe des Maskenmalbereichs abzudecken. Maskenbilder entlang der oberen oder unteren Ränder, oder beides abhängig vom {{cssxref("mask-position")}} Wert, werden abgeschnitten, falls die Höhe der Maskenursprungsbox kein exaktes Vielfaches der Höhe des Maskenbildes ist.

## Beschreibung

Die `mask-repeat` Eigenschaft akzeptiert ein durch Komma getrenntes Paar von Werten oder einen [Kurzschreibwert](#kurzschreibweise). In der Zwei-Wert-Syntax repräsentiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten.

### Mehrere Werte

Jeder `mask-repeat` Wert in dieser durch Komma getrennten Liste gilt für eine separate Maskenebene. Ein Element kann mehrere Maskenebenen haben. Die Anzahl der Ebenen wird durch die Anzahl der durch Kommata getrennten Werte in der {{cssxref("mask-image")}} Eigenschaft bestimmt (selbst wenn ein Wert `none` ist). Jeder `mask-repeat` Wert wird den `mask-image` Werten in der Reihenfolge zugeordnet. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist, werden überschüssige `mask-repeat` Werte ignoriert, oder falls `mask-repeat` weniger Werte als `mask-image` hat, werden die `mask-repeat` Werte wiederholt.

### Größe und Positionierung

Der Wert der `mask-repeat` Eigenschaft definiert, wie Maskenbilder gekachelt werden, nachdem sie [skaliert](/de/docs/Web/CSS/Reference/Properties/mask-size) und [positioniert](/de/docs/Web/CSS/Reference/Properties/mask-position) wurden. Die erste (und möglicherweise einzige) Maskenbild-Wiederholung wird durch die {{cssxref("mask-position")}} Eigenschaft positioniert, die standardmäßig auf `0% 0%` gesetzt ist, die obere linke Ecke der Ursprungsbox. Die Größe wird durch die {{cssxref("mask-size")}} Eigenschaft definiert, die standardmäßig auf `auto` gesetzt ist. Die Positionen der wiederholten Masken basieren auf dieser ersten Maskeninstanz.

### Zuschnitt

Maskenbilder werden nicht wiederholt, sondern beschnitten, wenn die Größe des Maskenbildes größer ist als die Ursprungsbox, es sei denn beim Wert `round`, bei dem eine einzelne Maske verkleinert wird, um in die Ursprungsbox zu passen.

Bei `repeat`-Werten können Maskenbilder am Rand der Ursprungsbox beschnitten werden, wenn die Dimension (Breite oder Höhe) der Box kein exaktes Vielfaches der Maske ist.

### Seitenverhältnis

Standardmäßig behalten Maskenbilder das durch die {{cssxref("mask-size")}} Eigenschaft festgelegte Seitenverhältnis oder ihr Standard-Seitenverhältnis bei, wenn `mask-size` auf `auto` belassen wird oder explizit auf `auto` gesetzt ist. Nur im Fall des `round` Wertes in beide Richtungen kann das Seitenverhältnis der Maske verzerrt sein.

Wenn `round` in beiden Richtungen eingestellt ist, passen die resultierenden wiederholten Maskenbilder das Seitenverhältnis der Ursprungsbox an. Da die Maskenbilder skaliert werden, um zu passen, können sie verzerrt werden, was sicherstellt, dass die Maskenbilder nicht beschnitten werden. Wenn `round` nur in einer Richtung eingestellt ist, wird das Seitenverhältnis der Maskengröße respektiert.

### Abgerundete Wiederholungen

Im Fall von `round` werden Maskenbilder verkleinert oder vergrößert, um das Maskenbild eine ganze Zahl mal in den Positionierungsbereich einzupassen. Die Maskengröße erhöht oder verringert sich, um auf die nächste natürliche Zahl von Masken zu passen, mit einem Minimum von einer Maske.

Die dargestellten Abmessungen der Maske sind die Größe der Ursprungsbox geteilt durch die Anzahl der Iterationen von Masken in dieser Dimension, wobei die Iterationen eine ganze Zahl größer als null sind. Die Anzahl der Iterationen ist: `X' = D / round(D / X)` wobei `D` die Breite oder Höhe ist, und `round()` eine Funktion ist, die die nächste ganze Zahl größer als null zurückgibt.

Zum Beispiel, wenn `mask-repeat` auf `round` gesetzt ist und die `mask-size` die Maske auf `40px` Breite einstellt, wenn die Ursprungsbox vorhanden ist (größer als `0px` breit) aber weniger als `60px` breit ist, wird es eine einzelne Iteration geben, die 100% der Breite dieser Box einnimmt. Wenn die Box mindestens `60px` breit ist, aber weniger als `100px` breit, wird es zwei Iterationen geben, die jeweils `50%` der Box einnehmen. Von 100px bis 140px passen drei Masken entlang der horizontalen Achse. Diese "`40px`-breiten" Masken sind nur dann `40px` breit, wenn die Ursprungsbox ein exaktes Vielfaches von `40px` ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel demonstriert die Einstellung der `mask-repeat` Eigenschaft für eine einzelne Maske.

#### HTML

Unser HTML enthält ein einfaches {{htmlelement("div")}} Element:

```html
<div></div>
```

#### CSS

Wir definieren ein `250px` Quadrat mit einem von Rot zu Blau verlaufenden Farbverlauf mit einem `100px` mal `100px` großen Stern als Maskenbild. Wir verwenden die `mask-repeat` Eigenschaft und setzen `round` für die horizontale Richtung und `space` für den vertikalen Wert.

```css
div {
  width: 250px;
  height: 250px;
  background-image: linear-gradient(red, blue);

  mask-image: url("/shared-assets/images/examples/mask-star.svg");
  mask-size: 100px 100px;

  mask-repeat: round space;
}
```

#### Ergebnisse

{{EmbedLiveSample("basic usage", "", "300px")}}

Mit `space` und `round` auf einem Maskenbild, das kleiner als die Ursprungsbox ist, wird die Maske nicht abgeschnitten. Vielmehr verzerrt der `round` Wert den Stern, um das Zuschneiden zu verhindern und Leerraum zu vermeiden, während `space` das Seitenverhältnis des Sterns beibehält, jedoch bei Bedarf Leerraum zwischen Masken hinzufügt.

### Runde Iterationen

Unter Verwendung desselben HTML und CSS enthält diese Demonstration einen Slider, der die Breite des Containers ändert, um zu zeigen, wie sich mit `round` Masken vergrößern, wenn Platz vorhanden ist, bis weitere Iterationen der Maske passen oder verkleinern, bis die Anzahl der Iterationen nicht mehr passt.

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

  mask-image: url("/shared-assets/images/examples/mask-star.svg");
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

Die Maske ist auf `100px` Breite definiert. Es gibt einen einzelnen Stern, wenn die Ursprungsbox von `1px` bis `149px` breit ist, zwei Sterne von `150px` bis `249px`, drei Sterne von `250px` bis `349px`, und so weiter.

### Die Kurzschreibwerte

Dieses Beispiel demonstriert alle `mask-repeat` Kurzschreibwerte (Einzel-Schlüsselwort).

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

Wir geben jedem `<div>` dasselbe CSS, bis auf den `mask-repeat` Wert, den wir mit den Klassennamen der Eltern abgleichen. Wir definieren eine Maskengröße, setzen das anfängliche `mask-image` unten rechts, was bedeutet, dass jegliches Zuschneiden bei den obersten und linkesten Masken auf deren oberen und linken Seiten erfolgen wird.

```css
div {
  width: 180px;
  height: 180px;
  background-image: linear-gradient(red, blue);

  mask-image: url("/shared-assets/images/examples/mask-star.svg");

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

Der erste (und im Fall von `no-repeat`, einzige) Maskenstern ist [skaliert](/de/docs/Web/CSS/Reference/Properties/mask-size) auf 50px mal 50px und [positioniert](/de/docs/Web/CSS/Reference/Properties/mask-position) unten rechts im Malbereich, mit wiederholten Sternen darüber und/oder links davon, wobei jegliches Zuschneiden am oberen und linken Rand der obersten und linken Sterne erfolgt. Beachten Sie, dass alle Sterne die gleiche Größe und Form haben, außer bei `round`, bei dem alle Masken auf 45px x 45px geschrumpft sind, um vier vollständige Masken in jeder Richtung zu passen. Wäre der Container 174px groß gewesen, hätten es drei Sterne in jeder Richtung gegeben, anstatt vier, und jeder Stern wäre gestreckt worden.

### Mehrere Maskenbilder und Wiederholungen

Sie können einen unterschiedlichen `<repeat-style>` für jedes Maskenbild angeben, durch Kommata getrennt:

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

Jedes Bild wird mit einem entsprechenden Wiederholungsstil abgeglichen. Da es mehr `mask-image` Werte als `mask-repeat` Werte gibt, wird `mask-repeat` wiederholt, bis jedes `mask-image` einen zugehörigen `mask-repeat` Wert hat. Hier wiederholen sich ungerade nummerierte Masken entlang der x-Achse, während sich die gerade nummerierten Masken entlang der y-Achse wiederholen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-repeat")}}
- {{cssxref("mask-border-repeat")}}
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklaration mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
