---
title: mask-repeat
slug: Web/CSS/mask-repeat
l10n:
  sourceCommit: b97dae0887fb02713db610eed4855545a9c81bcd
---

{{CSSRef}}

Die **`mask-repeat`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Maskenbilder wiederholt werden. Ein Maskenbild kann entlang der horizontalen Achse, der vertikalen Achse, in beiden Richtungen oder gar nicht wiederholt werden.

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

Die Eigenschaft `mask-repeat` ist eine durch Kommas getrennte Liste von zwei `<repeat-style>` Werten, wobei der erste `<repeat-style>` Wert den horizontalen Wiederholungswert und der zweite Wert den vertikalen Wiederholungswert darstellt, oder ein Schlüsselwortwert, der eine Kurzform für zwei `<repeat-style>` Werte ist.

#### `<repeat-style>` Werte

Die `<repeat-style>` Werte umfassen:

- `repeat`

  - : Das Bild wird so oft wiederholt, wie nötig, um den gesamten Bereich des Maskenbildes zu bedecken. Maskenbilder entlang der Ränder werden abgeschnitten, wenn die Größe des [mask origin box](/de/docs/Web/CSS/mask-origin) kein exakt Vielfaches der Größe des Maskenbildes ist.

- `space`

  - : Das Maskenbild wird so oft wie möglich wiederholt, ohne abgeschnitten zu werden. Wenn die Ursprungsgöße des Elements mindestens doppelt so groß ist wie die Größe des Maskenbildes in der zugehörigen Dimension, wird die Eigenschaft {{cssxref("mask-position")}} ignoriert und die ersten und letzten Bilder werden an den Rändern des Ursprungscontainers positioniert. Wenn die mask origin box kein exakt Vielfaches der Größe des Maskenbildes ist, wird der Leerraum gleichmäßig zwischen den wiederholten Maskenbildern verteilt.

    Wenn die origin box Größe in der gegebenen Dimension weniger als doppelt so groß ist wie die des Maskenbildes, kann nur ein Maskenbild angezeigt werden. In diesem Fall wird das Bild wie definiert durch die `mask-position` Eigenschaft positioniert, die standardmäßig auf `0% 0%` gesetzt ist. Das Maskenbild wird nur abgeschnitten, wenn es größer ist als die mask origin box.

- `round`

  - : Das Maskenbild wird so oft wie möglich in seinen ursprünglichen Dimensionen wiederholt. Wenn die Größe der mask origin box kein exakt Vielfaches der Größe des Maskenbildes ist, werden alle Maskenbilder [verkleinert oder gestreckt](#runde_wiederholungen), um sicherzustellen, dass keine Wiederholungen abgeschnitten werden.

- `no-repeat`

  - : Das Maskenbild wird nicht wiederholt (und daher wird der Maskenbereich nicht unbedingt vollständig abgedeckt). Die Position des nicht wiederholten Maskenbildes wird durch die {{cssxref("mask-position")}} CSS-Eigenschaft definiert.

#### Kurzformwerte

Die einwertige Syntax ist eine Kurzform für die vollständige Zweiwert-Syntax:

<table class="standard-table">
  <thead>
    <tr>
      <th>Einzelwert</th>
      <th>Zweiwert-Äquivalent</th>
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

  - : Entspricht `repeat no-repeat`. Das Bild wird in horizontaler Richtung so oft wie nötig wiederholt, um die Breite des Maskenbereiches zu bedecken. Maskenbilder entlang der rechten oder linken Ränder, oder beides, je nach {{cssxref("mask-position")}} Wert, werden abgeschnitten, wenn die Breite der mask origin box kein exakt Vielfaches der Breite des Maskenbildes ist.

- `repeat-y`

  - : Entspricht `no-repeat repeat`. Das Bild wird in vertikaler Richtung so oft wie nötig wiederholt, um die Höhe des Maskenbereiches zu bedecken. Maskenbilder entlang der oberen oder unteren Ränder, oder beides, je nach {{cssxref("mask-position")}} Wert, werden abgeschnitten, wenn die Höhe der mask origin box kein exakt Vielfaches der Höhe des Maskenbildes ist.

## Beschreibung

Die `mask-repeat` Eigenschaft akzeptiert ein durch Kommas getrenntes Paar von Werten oder einen [Kurzformwert](#kurzformwerte). In der Zweiwert-Syntax repräsentiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten.

### Mehrfachwerte

Jeder `mask-repeat` Wert in dieser durch Kommas getrennten Liste gilt für eine separate Maskenschicht. Ein Element kann mehrere Maskenschichten angewendet haben. Die Anzahl der Schichten wird durch die Anzahl der durch Kommas getrennten Werte im Wert der {{cssxref("mask-image")}} Eigenschaft bestimmt (auch wenn ein Wert `none` ist). Jeder `mask-repeat` Wert wird nacheinander den `mask-image` Werten zugeordnet. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist, werden überzählige `mask-repeat` Werte ignoriert oder, wenn `mask-repeat` weniger Werte als `mask-image` hat, werden die `mask-repeat` Werte wiederholt.

### Größe und Position

Der `mask-repeat` Eigenschaftswert definiert, wie Maskenbilder gekachelt werden, nachdem sie [größert](/de/docs/Web/CSS/mask-size) und [positioniert](/de/docs/Web/CSS/mask-position) wurden. Die erste (und möglicherweise einzige) Maskenbild-Wiederholung wird durch die {{cssxref("mask-position")}} Eigenschaft positioniert, die standardmäßig auf `0% 0%` gesetzt ist, die obere linke Ecke der origin box. Die Größe wird durch die {{cssxref("mask-size")}} Eigenschaft definiert, die standardmäßig auf `auto` gesetzt ist. Die Positionen der wiederholten Masken basieren auf dieser ersten Maskeninstanz.

### Clipping

Maskenbilder werden nicht wiederholt, sondern beschnitten, wenn die Größe des Maskenbildes größer ist als die origin box, außer im Fall von `round`, wo eine einzelne Maske verkleinert wird, um in die origin box zu passen.

Mit `repeat` Werten können Maskenbilder an den Rändern der origin box beschnitten werden, wenn die Dimension (Breite oder Höhe) der Box kein exakt Vielfaches des Maskenbildes ist.

### Seitenverhältnis

Standardmäßig behalten Maskenbilder das durch die {{cssxref("mask-size")}} Eigenschaft festgelegte Seitenverhältnis oder ihr Standardseitenverhältnis bei, wenn `mask-size` auf oder explizit auf `auto` gesetzt ist. Nur im Fall eines `round` Wertes in beiden Richtungen könnte das Seitenverhältnis des Maskenbildes verzerrt werden.

Wenn `round` in beiden Richtungen gesetzt ist, werden die resultierenden wiederholten Maskenbilder das Seitenverhältnis der origin box annehmen. Während die Maskenbilder zur Anpassung skaliert werden, können sie verzerrt werden, um zu gewährleisten, dass die Maskenbilder nicht abgeschnitten werden. Wenn `round` nur in einer Dimension gesetzt ist, wird das Seitenverhältnis der Maskengröße respektiert.

### Runde Wiederholungen

Im Fall von `round` werden Maskenbilder verkleinert oder vergrößert, um ein ganzzahliges Maß an Wiederholungen im Positionierungsbereich zu erreichen. Die Maskengröße nimmt zu oder ab, um die nächstgelegene natürliche Zahl oder die Anzahl von Masken zu erreichen, mit mindestens einer Maske.

Die gerenderten Abmessungen der Maske sind die Größe der origin box, geteilt durch die Anzahl der Iterationen der Masken in dieser Dimension, wobei die Iterationen eine ganzzahlige Zahl größer als null sind. Die Anzahl der Iterationen ist: `X' = D / round(D / X)` wobei `D` die Breite oder Höhe ist und `round()` eine Funktion ist, die die nächste ganzzahlige Zahl größer als null zurückgibt.

Zum Beispiel, wenn `mask-repeat` auf `round` gesetzt wird und die `mask-size` die Maske auf `40px` Breite setzt, wird es, wenn die origin box vorhanden ist (größer als `0px` breit) aber weniger als `60px` breit, eine einzelne Iteration geben, die 100% der Breite dieser Box entspricht. Wenn die Box mindestens `60px` breit aber weniger als `100px` breit ist, wird es zwei Iterationen geben, die jeweils `50%` der Box sind. Von 100px bis 140px passen drei Masken entlang der horizontalen Achse. Diese "`40px`-breiten" Masken werden nur dann `40px` breit sein, wenn die origin box ein exakt Vielfaches von `40px` ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die Einstellung der `mask-repeat` Eigenschaft für eine einzelne Maske.

#### HTML

Unser HTML enthält ein einfaches {{htmlelement("div")}} Element:

```html
<div></div>
```

#### CSS

Wir definieren ein `250px` Quadrat mit einem roten zu blauen Verlauf und einem `100px` mal `100px` großen Stern als Maskenbild. Wir verwenden die `mask-repeat` Eigenschaft, indem wir `round` für die horizontale Richtung und `space` für den vertikalen Wert einstellen.

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

Mit `space` und `round` auf einem Maskenbild, das kleiner ist als die origin box, wird die Maske nicht abgeschnitten. Vielmehr verzerrt der `round` Wert den Stern, um ein Abschneiden zu verhindern und Leerraum zu vermeiden, während `space` das Seitenverhältnis des Sterns beibehält, jedoch bei Bedarf Raum zwischen den Masken hinzufügt.

### Runde Iterationen

Mit demselben HTML und CSS enthält diese Demonstration einen Slider, der die Breite des Containers ändert, um zu zeigen, wie sich Masken mit `round` vergrößern, wenn Platz verfügbar ist, bis eine weitere Iteration der Maske passt, oder verkleinern, bis die Anzahl der Iterationen nicht mehr passt.

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

Die Maske ist als `100px` breit definiert. Es gibt einen einzelnen Stern, wenn die origin box von `1px` bis `149px` breit ist, zwei Sterne von `150px` bis `249px`, drei Sterne von `250px` bis `349px`, und so weiter.

### Die Kurzformwerte

Dieses Beispiel zeigt alle `mask-repeat` Kurzform (Einzel-Schlüsselwort) Werte.

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

Wir geben jedem `<div>` die gleichen CSS, außer für den `mask-repeat` Wert, den wir auf den Klassennamen ihres Elternteils abstimmen. Wir definieren eine Maskengröße und legen das anfängliche `mask-image` unten rechts fest, was bedeutet, dass ein Abschneiden auf den oberen und linken Maskenbildern oben und links erfolgt.

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

Wir zeigen den Klassennamen mit generierten Inhalten an.

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

Der erste (und im Fall von `no-repeat`, einzige) Maskenstern wird [größert](/de/docs/Web/CSS/mask-size), um 50px mal 50px groß zu sein und [positioniert](/de/docs/Web/CSS/mask-position) an der unteren rechten Seite des Malbereiches, wobei die wiederholten Sterne oberhalb und/oder links davon platziert werden und ein Abschneiden oben und links der obersten und linkesten Sterne erfolgt. Beachten Sie, dass alle Sterne die gleiche Größe und Form haben, außer bei `round`, wo alle Masken auf 45px x 45px geschrumpft sind, um vier vollständige Masken in jede Richtung zu passen. Wäre der Container 174px gewesen, hätten in jeder Richtung drei Sterne statt vier vorhanden sein können, und jeder Stern wäre gestreckt worden.

### Mehrere Maskenbilder und Wiederholungen

Sie können für jedes Maskenbild einen anderen `<repeat-style>` angeben, getrennt durch Kommas:

```css
.extra-repeats {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-repeat: repeat-x, repeat-y, space;
}
```

Jedes Bild wird mit dem entsprechenden Wiederholungsstil abgeglichen. Da es mehr `mask-repeat` Werte als `mask-image` Werte gibt, werden die überzähligen `mask-repeat` Werte ignoriert.

```css
.missing-repeats {
  mask-image:
    url("mask1.png"), url("mask2.png"), url("mask3.png"), url("mask4.png");
  mask-repeat: repeat-x, repeat-y;
}
```

Jedes Bild wird mit einem entsprechenden Wiederholungsstil abgeglichen. Da es mehr `mask-image` Werte als `mask-repeat` Werte gibt, wird `mask-repeat` wiederholt, bis jedes `mask-image` einen zugewiesenen `mask-repeat` Wert hat. Hier wiederholen sich ungerade nummerierte Masken entlang der x-Achse, während sich gerade nummerierte Masken entlang der y-Achse wiederholen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)
