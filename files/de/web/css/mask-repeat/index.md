---
title: mask-repeat
slug: Web/CSS/mask-repeat
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Die **`mask-repeat`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Maskenbilder wiederholt werden. Ein Maskenbild kann entlang der horizontalen Achse, der vertikalen Achse, beiden Achsen oder überhaupt nicht wiederholt werden.

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

Die `mask-repeat` Eigenschaft ist eine durch Kommas getrennte Liste von zwei `<repeat-style>` Werten,
wobei der erste `<repeat-style>` Wert den horizontalen Wiederholungswert und der zweite Wert den vertikalen Wiederholungswert angibt, oder ein Schlüsselwortwert, der eine Kurzform für zwei `<repeat-style>` Werte ist.

#### `<repeat-style>` Werte

Die `<repeat-style>` Werte umfassen:

- `repeat`
  - : Das Bild wird so oft wie nötig wiederholt, um den gesamten Maskenmalbereich abzudecken. Maskenbilder an den Rändern werden abgeschnitten, wenn die Größe der [mask origin box](/de/docs/Web/CSS/mask-origin) kein genaues Vielfaches der Größe des Maskenbilds ist.

- `space`
  - : Das Maskenbild wird so oft wie möglich ohne Abschneiden wiederholt. Wenn die Ursprungsgöße des Elements mindestens doppelt so groß wie die Größe des Maskenbilds in der zugehörigen Dimension ist, wird die {{cssxref("mask-position")}} Eigenschaft ignoriert und die ersten und letzten Bilder werden an den Rändern des Masken-Ursprungsbehälters positioniert. Wenn die Masken-Ursprungsbox kein genaues Vielfaches der Größe des Maskenbilds ist, wird der Leerraum gleichmäßig zwischen den wiederholten Maskenbildern verteilt.

    Ist die Ursprungsgöße weniger als doppelt so groß wie die Größe des Maskenbilds in der gegebenen Dimension, kann nur ein Maskenbild angezeigt werden. In diesem Fall wird das Bild wie durch die `mask-position` Eigenschaft definiert positioniert, die standardmäßig auf `0% 0%` gesetzt ist. Das Maskenbild wird nur abgeschnitten, wenn das Maskenbild größer als die Masken-Ursprungsbox ist.

- `round`
  - : Das Maskenbild wird so oft wie möglich in seinen ursprünglichen Abmessungen wiederholt. Wenn die Größe der Masken-Ursprungsbox kein genaues Vielfaches der Größe des Maskenbilds ist, werden alle Maskenbilder neu skaliert, [geschrumpft oder gestreckt](#abgerundete_wiederholungen), um sicherzustellen, dass keine Wiederholungen abgeschnitten werden.

- `no-repeat`
  - : Das Maskenbild wird nicht wiederholt (und daher wird der Maskenmalbereich nicht unbedingt vollständig abgedeckt). Die Position des nicht wiederholten Maskenbilds wird durch die {{cssxref("mask-position")}} CSS Eigenschaft definiert.

#### Kurzformwerte

Der Ein-Wert-Syntax ist eine Kurzform für die vollständige Zwei-Wert-Syntax:

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
  - : Entspricht `repeat no-repeat`. Das Bild wird in horizontaler Richtung so oft wie nötig wiederholt, um die Breite des Maskenmalbereichs abzudecken. Maskenbilder an den rechten oder linken Rändern, oder beiden, je nach dem {{cssxref("mask-position")}} Wert, werden abgeschnitten, wenn die Breite der Masken-Ursprungsbox kein genaues Vielfaches der Breite des Maskenbilds ist.

- `repeat-y`
  - : Entspricht `no-repeat repeat`. Das Bild wird in vertikaler Richtung so oft wie nötig wiederholt, um die Höhe des Maskenmalbereichs abzudecken. Maskenbilder an den oberen oder unteren Rändern, oder beiden, je nach dem {{cssxref("mask-position")}} Wert, werden abgeschnitten, wenn die Höhe der Masken-Ursprungsbox kein genaues Vielfaches der Höhe des Maskenbilds ist.

## Beschreibung

Die `mask-repeat` Eigenschaft akzeptiert ein durch Kommas getrenntes Wertepaar oder einen [Kurzformwert](#kurzformwerte). Bei der Zwei-Wert-Syntax steht der erste Wert für das horizontale Wiederholungsverhalten und der zweite Wert für das vertikale Verhalten.

### Mehrere Werte

Jeder `mask-repeat` Wert in dieser durch Kommas getrennten Liste gilt für eine separate Maskenschicht. Ein Element kann mehrere Maskenschichten haben. Die Anzahl der Schichten wird durch die Anzahl der durch Kommas getrennten Werte im Wert der {{cssxref("mask-image")}} Eigenschaft bestimmt (auch wenn der Wert `none` ist). Jeder `mask-repeat` Wert wird mit den `mask-image` Werten in der richtigen Reihenfolge abgeglichen. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist, werden alle überschüssigen `mask-repeat` Werte ignoriert oder die `mask-repeat` Werte werden wiederholt, wenn es weniger `mask-repeat` als `mask-image` Werte gibt.

### Größenanpassung und Positionierung

Der `mask-repeat` Eigenschaftswert definiert, wie Maskenbilder gekachelt werden, nachdem sie [größen](/de/docs/Web/CSS/mask-size) und [positioniert](/de/docs/Web/CSS/mask-position) wurden. Die erste (und möglicherweise einzige) Wiederholung des Maskenbilds wird durch die {{cssxref("mask-position")}} Eigenschaft positioniert, die standardmäßig auf `0% 0%`, die obere linke Ecke der Ursprungsbox, gesetzt ist. Die Größe wird durch die {{cssxref("mask-size")}} Eigenschaft definiert, die standardmäßig auf `auto` gesetzt ist. Die Positionen der wiederholten Masken basieren auf dieser initialen Maskeninstanz.

### Zuschneiden

Maskenbilder werden nicht wiederholt, sondern abgeschnitten, wenn die Größe des Maskenbilds größer als die Ursprungsbox ist, außer im Fall von `round`, wo eine einzelne Maske skaliert wird, um in die Ursprungsbox zu passen.

Bei `repeat` Werten können Maskenbilder an den Rändern der Ursprungsbox abgeschnitten werden, wenn die Dimension (Breite oder Höhe) der Box kein genaues Vielfaches der Maske ist.

### Seitenverhältnis

Standardmäßig behalten Maskenbilder das Seitenverhältnis bei, das durch die {{cssxref("mask-size")}} Eigenschaft festgelegt ist, oder ihr Standard-Seitenverhältnis, wenn `mask-size` standardmäßig oder explizit auf `auto` gesetzt ist. Nur im Fall des `round` Werts in beiden Richtungen könnte das Seitenverhältnis der Maske verzerrt werden.

Wenn `round` in beiden Richtungen festgelegt ist, werden die resultierenden wiederholten Maskenbilder das Seitenverhältnis der Ursprungsbox anpassen. Da die Maskenbilder skaliert werden, um zu passen, können sie verzerrt sein, um sicherzustellen, dass die Maskenbilder nicht abgeschnitten werden. Wenn `round` nur in einer Dimension gesetzt ist, wird das Seitenverhältnis der Maskengröße beachtet.

### Abgerundete Wiederholungen

Im Fall von `round` werden Maskenbilder skaliert, um das Maskenbild in der Positionierungsfläche eine ganze Anzahl von Malen zu passen. Die Maskengröße wird vergrößert oder verkleinert, um die nächste natürliche Zahl von Masken zu passen, mit einem Minimum von einer Maske.

Die gerenderten Abmessungen der Maske sind die Größe der Ursprungsbox geteilt durch die Anzahl der Iterationen der Masken in dieser Dimension, wobei die Iterationen eine ganze Zahl größer als null sind. Die Anzahl der Iterationen ist: `X' = D / round(D / X)` wobei `D` die Breite oder Höhe ist, und `round()` eine Funktion ist, die die nächstgelegene ganze Zahl größer als null zurückgibt.

Zum Beispiel, wenn `mask-repeat` auf `round` gesetzt ist und `mask-size` die Maske auf `40px` Breite setzt, wenn die Ursprungsbox vorhanden ist (größer als `0px` breit) aber weniger als `60px` breit, wird es nur eine Iteration geben, die 100% der Breite dieser Box ausfüllt. Wenn die Box mindestens `60px` breit, aber weniger als `100px` breit ist, wird es zwei Iterationen geben, die jeweils `50%` der Box ausfüllen. Von `100px` bis `140px` passen drei Masken entlang der horizontalen Achse. Diese "`40px`-breiten" Masken werden nur `40px` breit sein, wenn die Ursprungsbox ein genaues Vielfaches von `40px` ist.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel demonstriert das Setzen der `mask-repeat` Eigenschaft für eine einzelne Maske.

#### HTML

Unser HTML beinhaltet ein grundlegendes {{htmlelement("div")}} Element:

```html
<div></div>
```

#### CSS

Wir definieren ein `250px` Quadrat mit einem Farbverlauf von Rot zu Blau mit einem `100px` mal `100px` Stern als Maskenbild. Wir verwenden die `mask-repeat` Eigenschaft und setzen `round` für die horizontale Richtung und `space` für den vertikalen Wert.

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

Bei `space` und `round` auf einem Maskenbild, das kleiner als die Ursprungsbox ist, wird die Maske nicht abgeschnitten. Vielmehr verzerrt der `round` Wert den Stern, um das Abschneiden zu verhindern und weißen Raum zu vermeiden, während `space` das Seitenverhältnis des Sterns beibehält, aber bei Bedarf Platz zwischen den Masken hinzufügt.

### Runde Wiederholungen

Unter Verwendung des gleichen HTML und CSS zeigt diese Demonstration einen Schieberegler, der die Breite des Containers verändert, um zu zeigen, wie bei `round` Masken wachsen, wenn der Platz es erlaubt, bis eine weitere Iteration der Maske passt, oder schrumpfen, bis die Anzahl der Iterationen nicht mehr passt.

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

Die Maske ist als `100px` breit definiert. Es gibt einen einzelnen Stern, wenn die Ursprungsbox von `1px` bis `149px` breit ist, zwei Sterne von `150px` bis `249px`, drei Sterne von `250px` bis `349px` und so weiter.

### Die Kurzformwerte

Dieses Beispiel demonstriert alle `mask-repeat` Kurzform (Einzel-Schlüsselwort) Werte.

#### HTML

Wir fügen mehrere {{htmlelement("section")}} Elemente, die jeweils ein `<div>` enthalten, hinzu, jedes mit einem anderen Klassennamen.

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

Wir geben jedem `<div>` das gleiche CSS, außer dem `mask-repeat` Wert, den wir mit dem Klassennamen ihres übergeordneten Elements abgleichen. Wir definieren eine Maskengröße und setzen das anfängliche `mask-image` unten rechts, was bedeutet, dass jede Abschneidung auf den oberen und linken Seiten der oberen und linken Masken erfolgt.

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

Der erste (und im Fall von `no-repeat` einzige) Maskenstern wird [größenangepasst](/de/docs/Web/CSS/mask-size) auf 50px mal 50px und [positioniert](/de/docs/Web/CSS/mask-position) an der unteren rechten Ecke des Malbereichs, mit wiederholten Sternen, die darüber und / oder links daneben platziert sind, wobei jede Abschneidung auf der oberen oder linken Seite der oberen und linken Sterne erfolgt. Beachten Sie, dass alle Sterne gleich groß und gleich geformt sind, außer bei `round`, bei dem alle Masken auf 45px x 45px schrumpften, um vier vollständige Masken in jeder Richtung zu passen. Wäre der Container 174px gewesen, wären stattdessen drei Sterne in jeder Richtung vorhanden gewesen, und jeder Stern wäre gestreckt worden.

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

Jedes Bild wird mit einem entsprechenden Wiederholungsstil abgeglichen. Da es mehr `mask-image` Werte als `mask-repeat` Werte gibt, werden die `mask-repeat` Werte wiederholt, bis jedes `mask-image` einen zugehörigen `mask-repeat` Wert hat. Hier wiederholen sich ungerade nummerierte Masken entlang der x-Achse, während sich gerade nummerierte Masken entlang der y-Achse wiederholen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-repeat")}}
- {{cssxref("mask-border-repeat")}}
- [Einführung in das CSS-Maskieren](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
