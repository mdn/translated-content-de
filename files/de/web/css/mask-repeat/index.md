---
title: mask-repeat
slug: Web/CSS/mask-repeat
l10n:
  sourceCommit: be28a11d9b2f6ab4ad0e5947e72a13ce16d4a6f2
---

{{CSSRef}}

Die **`mask-repeat`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Maskenbilder wiederholt werden. Ein Maskenbild kann entlang der horizontalen Achse, der vertikalen Achse, beiden Achsen wiederholt oder gar nicht wiederholt werden.

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

Die `mask-repeat` Eigenschaft ist eine kommagetrennte Liste aus zwei `<repeat-style>` Werten, wobei der erste `<repeat-style>` Wert den horizontalen Wiederholungswert und der zweite den vertikalen Wiederholungswert darstellt, oder ein Schlüsselwortwert, das eine Abkürzung für zwei `<repeat-style>` Werte ist.

#### `<repeat-style>` Werte

Die `<repeat-style>` Werte umfassen:

- `repeat`
  - : Das Bild wird so oft wie nötig wiederholt, um den gesamten Maskenbemalungsbereich abzudecken. Maskenbilder entlang der Kanten werden abgeschnitten, wenn die Größe der [mask origin box](/de/docs/Web/CSS/mask-origin) kein genaues Vielfaches der Größe des Maskenbildes ist.

- `space`
  - : Das Maskenbild wird so oft wie möglich wiederholt, ohne abgeschnitten zu werden. Wenn die Größe der Ursprungselemente mindestens doppelt so groß ist wie die des Maskenbildes in der zugehörigen Dimension, wird die {{cssxref("mask-position")}} Eigenschaft ignoriert und die ersten und letzten Bilder werden an den Rändern des Maskenursprungscontainer positioniert. Wenn die mask origin box kein genaues Vielfaches der Größe des Maskenbildes ist, wird der Leerraum gleichmäßig zwischen den wiederholten Maskenbildern verteilt.

    Wenn die Größe der Ursprungselemente weniger als das Doppelte der Größe des Maskenbildes in der gegebenen Dimension ist, kann nur ein Maskenbild angezeigt werden. In diesem Fall wird das Bild gemäß der `mask-position` Eigenschaft positioniert, die standardmäßig auf `0% 0%` gesetzt ist. Das Maskenbild wird nur abgeschnitten, wenn das Maskenbild größer als die mask origin box ist.

- `round`
  - : Das Maskenbild wird in seinen ursprünglichen Dimensionen so oft wie möglich wiederholt. Wenn die Größe der mask origin box kein genaues Vielfaches der Größe des Maskenbildes ist, werden alle Maskenbilder geschrumpft oder gestreckt, um sicherzustellen, dass keine Wiederholungen abgeschnitten werden.

- `no-repeat`
  - : Das Maskenbild wird nicht wiederholt (und daher wird der Maskenbemalungsbereich nicht unbedingt vollständig abgedeckt). Die Position des nicht wiederholten Maskenbildes wird durch die {{cssxref("mask-position")}} CSS Eigenschaft definiert.

#### Abkürzungswerte

Die Ein-Wert-Syntax ist eine Abkürzung für die vollständige Zwei-Wert-Syntax:

<table class="standard-table">
  <thead>
    <tr>
      <th>Einzelwert</th>
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
  - : Entspricht `repeat no-repeat`. Das Bild wird in horizontaler Richtung so oft wie nötig wiederholt, um die Breite des Maskenbemalungsbereichs zu bedecken. Maskenbilder entlang der rechten oder linken Kanten, oder beide, abhängig vom {{cssxref("mask-position")}} Wert, werden abgeschnitten, wenn die Breite der mask origin box kein genaues Vielfaches der Breite des Maskenbildes ist.

- `repeat-y`
  - : Entspricht `no-repeat repeat`. Das Bild wird in vertikaler Richtung so oft wie nötig wiederholt, um die Höhe des Maskenbemalungsbereichs zu bedecken. Maskenbilder entlang der oberen oder unteren Kanten, oder beide, abhängig vom {{cssxref("mask-position")}} Wert, werden abgeschnitten, wenn die Höhe der mask origin box kein genaues Vielfaches der Höhe des Maskenbildes ist.

## Beschreibung

Die `mask-repeat` Eigenschaft akzeptiert ein kommagetrenntes Paar von Werten oder einen [Abkürzungswert](#abkürzungswerte). In der Zwei-Wert-Syntax repräsentiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten.

### Mehrere Werte

Jeder `mask-repeat` Wert in dieser kommagetrennten Liste gilt für eine separate Maskenschicht. Ein Element kann mehrere aufgebrachte Maskenschichten haben. Die Anzahl der Schichten wird durch die Anzahl der kommagetrennten Werte im {{cssxref("mask-image")}} Eigenschaftswert bestimmt (auch wenn ein Wert `none` ist). Jeder `mask-repeat` Wert wird mit den `mask-image` Werten in der Reihenfolge abgeglichen. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist, werden alle überschüssigen `mask-repeat` Werte ignoriert oder, wenn `mask-repeat` weniger Werte hat als `mask-image`, werden die `mask-repeat` Werte wiederholt.

### Skalierung und Positionierung

Der Wert der `mask-repeat` Eigenschaft definiert, wie Maskenbilder gekachelt werden, nachdem sie [skaliert](/de/docs/Web/CSS/mask-size) und [positioniert](/de/docs/Web/CSS/mask-position) wurden. Die erste (und möglicherweise einzige) Wiederholung des Maskenbildes wird durch die {{cssxref("mask-position")}} Eigenschaft positioniert, die standardmäßig auf `0% 0%` gesetzt ist, die obere linke Ecke der Ursprungselement-box. Die Größe wird durch die {{cssxref("mask-size")}} Eigenschaft definiert, die standardmäßig auf `auto` gesetzt ist. Die Positionen der wiederholten Masken basieren auf dieser anfänglichen Maskeninstanz.

### Clipping

Maskenbilder werden nicht wiederholt, sondern abgeschnitten, wenn die Größe des Maskenbildes größer als die Ursprungselement-box ist, außer im Falle von `round`, wo eine einzelne Maske herunterskaliert wird, um in die Ursprungselement-box zu passen.

Bei `repeat` Werten können Maskenbilder an der Kante der Ursprungselement-box abgeschnitten werden, wenn die Dimension (Breite oder Höhe) der Box kein genaues Vielfaches der Maskengröße ist.

### Seitenverhältnis

Standardmäßig behalten Maskenbilder das Seitenverhältnis bei, das durch die {{cssxref("mask-size")}} Eigenschaft festgelegt ist, oder ihr Standard-Seitenverhältnis, wenn `mask-size` standardmäßig auf oder explizit auf `auto` gesetzt ist. Nur im Fall des `round` Wertes in beiden Richtungen kann das Maskenseitenverhältnis verzerrt werden.

Wenn `round` in beiden Richtungen eingestellt ist, passen die resultierenden wiederholten Maskenbilder das Seitenverhältnis der Ursprungselement-box an. Da die Maskenbilder so skaliert werden, dass sie passen, können sie verzerrt werden, um sicherzustellen, dass die Maskenbilder nicht abgeschnitten werden. Wenn `round` nur in einer Dimension festgelegt ist, wird das Seitenverhältnis der Maskengröße respektiert.

### Runde Wiederholungen

Im Fall von `round` werden Maskenbilder vergrößert oder verkleinert, um das Maskenbild in der Positionierfläche eine ganze Zahl von Malen zu platzieren. Die Maskengröße nimmt zu oder ab, um der nächsten ganzen Zahl oder der Maskenanzahl zu entsprechen, mit einem Mindestmaß an einer Maske.

Die gerenderten Abmessungen der Maske sind die Größe der Ursprungselement-box, geteilt durch die Anzahl der Wiederholungen der Masken in dieser Dimension, wobei die Wiederholungen eine ganze Zahl größer als Null sind. Die Anzahl der Wiederholungen ist: `X' = D / round(D / X)`, wobei `D` die Breite oder Höhe ist und `round()` eine Funktion ist, die die nächstgelegene ganze Zahl größer als Null zurückgibt.

Zum Beispiel, wenn `mask-repeat` auf `round` gesetzt ist und `mask-size` die Maske auf `40px` Breite einstellt, gibt es eine einzelne Iteration, die 100% der Breite dieser Box ist, wenn die Ursprungselement-box vorhanden ist (größer als `0px` in der Breite), aber weniger als `60px` in der Breite. Wenn die Box mindestens `60px` in der Breite, aber weniger als `100px` in der Breite ist, gibt es zwei Iterationen, die jeweils `50%` der Box ausmachen. Von 100px bis 140px passen drei Masken entlang der horizontalen Achse. Diese "`40px` breite" Masken sind nur `40px` breit, wenn die Ursprungselement-box ein genaues Vielfaches von `40px` ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel demonstriert die Einstellung der `mask-repeat` Eigenschaft für eine einzelne Maske.

#### HTML

Unser HTML enthält ein grundlegendes {{htmlelement("div")}} Element:

```html
<div></div>
```

#### CSS

Wir definieren ein `250px` Quadrat mit einem Rot-zu-Blau-Verlauf mit einem `100px` mal `100px` Stern als Maskenbild. Wir verwenden die `mask-repeat` Eigenschaft, indem wir `round` für die horizontale Richtung und `space` für den vertikalen Wert einstellen.

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

Mit `space` und `round` auf einem Maskenbild, das kleiner als die Ursprungselement-box ist, wird die Maske nicht abgeschnitten. Vielmehr verzerrt der `round` Wert den Stern, um das Abschneiden zu verhindern und Leerraum zu vermeiden, während `space` das Seitenverhältnis des Sterns beibehält, aber bei Bedarf Platz zwischen den Masken hinzufügt.

### Runde Iterationen

Unter Verwendung des gleichen HTML und CSS zeigt diese Demonstration einen Schieberegler, der die Breite des Containers ändert, um zu zeigen, wie bei `round` die Masken vergrößert werden, wenn Platz es zulässt, bis eine weitere Wiederholung der Maske passt, oder verkleinert werden, bis die Anzahl der Iterationen nicht mehr passt.

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

Die Maske ist als `100px` breit definiert. Es gibt einen einzelnen Stern, wenn die Ursprungselement-box von `1px` bis `149px` breit ist, zwei Sterne von `150px` bis `249px`, drei Sterne von `250px` bis `349px` und so weiter.

### Die Abkürzungswerte

Dieses Beispiel demonstriert alle `mask-repeat` Abkürzungs (Ein-Schlüsselwort) Werte.

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

Wir geben jedem `<div>` dasselbe CSS, außer für den `mask-repeat` Wert, den wir an den Klassennamen ihrer Eltern anpassen. Wir definieren eine Maskengröße, indem wir das anfängliche `mask-image` unten rechts festsetzen, was bedeutet, dass jedes Clipping bei der obersten und der linken Maske auftreten wird, auf ihren oberen und linken Seiten.

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

Der erste (und im Fall von `no-repeat`, einzige) Maskenstern wird [skaliert](/de/docs/Web/CSS/mask-size) auf 50px mal 50px und [positioniert](/de/docs/Web/CSS/mask-position) unten rechts im Bemalungsbereich, mit wiederholten Sternen darüber und/oder links von ihm, wobei jedes Clipping oben und links von den obersten und linken Sternen auftritt. Beachten Sie, dass alle Sterne dieselbe Größe und Form haben, außer bei `round`, wo alle Masken auf 45px x 45px geschrumpft wurden, um vier vollständige Masken in jede Richtung zu passen. Hätte der Container 174px gehabt, wären es drei Sterne in jede Richtung anstelle von vier, und jeder Stern wäre gestreckt gewesen.

### Mehrere Maskenbilder und Wiederholungen

Sie können für jedes Maskenbild einen anderen `<repeat-style>` angeben, getrennt durch Kommas:

```css
.extra-repeats {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-repeat: repeat-x, repeat-y, space;
}
```

Jedes Bild wird mit dem entsprechenden Wiederholungsstil abgeglichen. Da es mehr `mask-repeat` Werte als `mask-image` Werte gibt, werden die überflüssigen `mask-repeat` Werte ignoriert.

```css
.missing-repeats {
  mask-image:
    url("mask1.png"), url("mask2.png"), url("mask3.png"), url("mask4.png");
  mask-repeat: repeat-x, repeat-y;
}
```

Jedes Bild wird mit einem entsprechenden Wiederholungsstil abgeglichen. Da es mehr `mask-image` Werte als `mask-repeat` Werte gibt, wird das `mask-repeat` wiederholt, bis jedes `mask-image` einen verbundenen `mask-repeat` Wert hat. Hier wiederholen sich ungerade nummerierte Masken entlang der x-Achse, während sich gerade nummerierte Masken entlang der y-Achse wiederholen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-repeat")}}
- {{cssxref("mask-border-repeat")}}
- [Einführung in CSS-Masking](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking) Modul
