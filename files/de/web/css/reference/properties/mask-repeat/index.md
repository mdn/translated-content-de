---
title: "`mask-repeat` CSS property"
short-title: mask-repeat
slug: Web/CSS/Reference/Properties/mask-repeat
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`mask-repeat`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Maskenbilder wiederholt werden. Ein Maskenbild kann entlang der horizontalen Achse, der vertikalen Achse, in beiden Achsen oder gar nicht wiederholt werden.

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

Die Eigenschaft `mask-repeat` ist eine durch Kommas getrennte Liste von zwei `<repeat-style>`-Werten, wobei der erste `<repeat-style>`-Wert den horizontalen Wiederholungswert darstellt und der zweite den vertikalen, oder ein Schlüsselwortwert, der eine Abkürzung für zwei `<repeat-style>`-Werte darstellt.

#### `<repeat-style>` Werte

Die `<repeat-style>`-Werte beinhalten:

- `repeat`
  - : Das Bild wird so oft wie nötig wiederholt, um den gesamten Bereich des Maskenmalens zu bedecken. Maskenbilder an den Rändern werden abgeschnitten, wenn die Größe der [mask origin box](/de/docs/Web/CSS/Reference/Properties/mask-origin) kein genaues Vielfaches der Maskenbildgröße ist.

- `space`
  - : Das Maskenbild wird so oft wie möglich ohne Abschneiden wiederholt. Wenn die Ursprungsgöße des Elements mindestens doppelt so groß wie die Größe des Maskenbildes in der zugehörigen Dimension ist, wird die {{cssxref("mask-position")}} Eigenschaft ignoriert und die ersten und letzten Bilder an den Rändern des Maskenursprungsbehälters positioniert. Wenn die Maskenursprungsbox kein genaues Vielfaches der Maskenbildgröße ist, wird Leerraum gleichmäßig zwischen den wiederholten Maskenbildern verteilt.

    Wenn die Ursprungsbox kleiner als das Doppelte der Maskenbildgröße in der gegebenen Dimension ist, kann nur ein Maskenbild angezeigt werden. In diesem Fall wird das Bild wie durch die `mask-position`-Eigenschaft festgelegt positioniert, was standardmäßig `0% 0%` ist. Das Maskenbild wird nur abgeschnitten, wenn das Maskenbild größer als die Maskenursprungsbox ist.

- `round`
  - : Das Maskenbild wird so oft wie möglich in seinen ursprünglichen Abmessungen wiederholt. Wenn die Größe der Maskenursprungsbox kein genaues Vielfaches der Maskenbildgröße ist, werden alle Maskenbilder reskaliert, [verkleinert oder gestreckt](#abgerundete_wiederholungen), um sicherzustellen, dass keine Wiederholungen abgeschnitten werden.

- `no-repeat`
  - : Das Maskenbild wird nicht wiederholt (und daher wird der Malbereich der Maske möglicherweise nicht vollständig abgedeckt). Die Position des nicht wiederholten Maskenbildes wird durch die {{cssxref("mask-position")}} CSS-Eigenschaft definiert.

#### Kurznotation

Die Einwert-Syntax ist eine Abkürzung für die vollständige Zweiwert-Syntax:

<table class="standard-table">
  <thead>
    <tr>
      <th>Einzelwert</th>
      <th>Äquivalent mit zwei Werten</th>
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
  - : Entspricht `repeat no-repeat`. Das Bild wird in horizontaler Richtung so oft wie nötig wiederholt, um die Breite des Maskenmalbereichs abzudecken. Maskenbilder an den rechten oder linken Rändern oder beiden, abhängig vom Wert von {{cssxref("mask-position")}}, werden abgeschnitten, wenn die Breite der Maskenursprungsbox kein exaktes Vielfaches der Maskenbildbreite ist.

- `repeat-y`
  - : Entspricht `no-repeat repeat`. Das Bild wird in vertikaler Richtung so oft wie nötig wiederholt, um die Höhe des Maskenmalbereichs abzudecken. Maskenbilder an den oberen oder unteren Rändern oder beiden, abhängig vom Wert von {{cssxref("mask-position")}}, werden abgeschnitten, wenn die Höhe der Maskenursprungsbox kein exaktes Vielfaches der Maskenbildhöhe ist.

## Beschreibung

Die `mask-repeat`-Eigenschaft akzeptiert ein durch Kommas getrenntes Wertepaar oder einen [Kurzschreibwert](#kurznotation). In der Zweiwert-Syntax repräsentiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten.

### Mehrere Werte

Jeder `mask-repeat`-Wert in dieser durch Kommas getrennten Liste gilt für eine separate Maskenschicht. Ein Element kann mehrere Maskenschichten angewendet haben. Die Anzahl der Schichten wird durch die Anzahl der durch Kommas getrennten Werte in der {{cssxref("mask-image")}} Eigenschaftsangabe bestimmt (auch wenn ein Wert `none` ist). Jeder `mask-repeat`-Wert wird den `mask-image`-Werten in Reihenfolge zugeordnet. Wenn sich die Anzahl der Werte in den beiden Eigenschaften unterscheidet, werden überschüssige `mask-repeat`-Werte ignoriert oder, wenn `mask-repeat` weniger Werte als `mask-image` hat, werden die `mask-repeat`-Werte wiederholt.

### Größen- und Positionsbestimmung

Der `mask-repeat`-Eigenschaftswert definiert, wie Maskenbilder gekachelt werden, nachdem sie [dimensioniert](/de/docs/Web/CSS/Reference/Properties/mask-size) und [positioniert](/de/docs/Web/CSS/Reference/Properties/mask-position) wurden. Die erste (und möglicherweise einzige) Wiederholung des mask-images wird durch die {{cssxref("mask-position")}} Eigenschaft positioniert, die standardmäßig auf `0% 0%`, die obere linke Ecke der Ursprungsbox, eingestellt ist. Die Größe wird durch die {{cssxref("mask-size")}} Eigenschaft definiert, die standardmäßig auf `auto` eingestellt ist. Die Positionen der wiederholten Masken basieren auf dieser ersten Instanz des mask-images.

### Abschneiden

Maskenbilder werden nicht wiederholt, sondern abgeschnitten, wenn die Maskenbildgröße größer als die Ursprungsbox ist, außer im Fall von `round`, wo eine einzelne Maske auf die Ursprungsbox verkleinert wird.

Mit `repeat`-Werten können Maskenbilder an der Kante der Ursprungsbox abgeschnitten werden, wenn die Dimension (Breite oder Höhe) der Box kein genaues Vielfaches der Maskenbildgröße ist.

### Seitenverhältnis

Standardmäßig behalten Maskenbilder das Seitenverhältnis bei, das durch die {{cssxref("mask-size")}} Eigenschaft oder ihr Standard-Seitenverhältnis festgelegt ist, wenn `mask-size` auf oder explizit auf `auto` eingestellt ist. Nur im Fall des `round`-Wertes in beiden Richtungen kann das Masken-Seitenverhältnis verzerrt werden.

Wenn `round` in beide Richtungen eingestellt ist, werden die resultierenden wiederholten Maskenbilder dem Seitenverhältnis der Ursprungsbox entsprechen. Da die Maskenbilder angepasst werden, können sie verzerrt werden, um sicherzustellen, dass die Maskenbilder nicht abgeschnitten werden. Wenn `round` nur in einer Dimension eingestellt ist, wird das Seitenverhältnis der Maskengröße respektiert.

### Abgerundete Wiederholungen

Im Fall von `round` werden Maskenbilder vergrößert oder verkleinert, um das Maskenbild in den Positionierungsbereich eine ganze Zahl von Malen einzupassen. Die Maskengröße wird angepasst, um die nächstgelegene natürliche Anzahl an Masken zu passen, mit einem Minimum von einer Maske.

Die gerenderten Abmessungen der Maske sind die Größe der Ursprungsbox geteilt durch die Anzahl der Iterationen der Masken in dieser Dimension, wobei die Iterationen eine ganze Zahl größer null sind. Die Anzahl der Iterationen ist: `X' = D / round(D / X)`, wobei `D` die Breite oder Höhe ist und `round()` eine Funktion ist, die die nächstgelegene ganze Zahl größer null zurückgibt.

Beispielsweise, wenn `mask-repeat` auf `round` eingestellt ist und `mask-size` die Maske auf `40px` Breite einstellt, gibt es bei einer vorhandenen Ursprungsbox (größer als `0px` breit) aber weniger als `60px` breit, eine einzige Iteration, die 100% der Breite dieser Box ist. Wenn die Box mindestens `60px` breit, aber weniger als `100px` breit ist, gibt es zwei Iterationen, die jeweils `50%` der Box sind. Von `100px` bis `140px` passen drei Masken entlang der horizontalen Achse. Diese "`40px`-breiten" Masken sind nur `40px` breit, wenn die Ursprungsbox ein exaktes Vielfaches von `40px` ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt das Einstellen der `mask-repeat`-Eigenschaft für eine einzelne Maske.

#### HTML

Unser HTML beinhaltet ein einfaches {{htmlelement("div")}} Element:

```html
<div></div>
```

#### CSS

Wir definieren ein `250px` großes Quadrat mit einem von Rot zu Blau verlaufenden Farbverlauf mit einem `100px` mal `100px` Stern als Maskenbild. Wir verwenden die `mask-repeat`-Eigenschaft, indem wir `round` für die horizontale Richtung und `space` für den vertikalen Wert einstellen.

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

Mit `space` und `round` auf einem Maskenbild, das kleiner als die Ursprungsbox ist, wird die Maske nicht abgeschnitten. Vielmehr verzerrt der `round`-Wert den Stern, um das Abschneiden zu verhindern und weißen Raum zu vermeiden, während `space` das Seitenverhältnis des Sterns beibehält, aber nach Bedarf Leerraum zwischen den Masken hinzufügt.

### Runde Iterationen

Mit dem gleichen HTML und CSS zeigt diese Demonstration einen Schieberegler, der die Breite des Containers ändert, um zu zeigen, wie Masken mit `round` wachsen, wenn Platz vorhanden ist, bis eine weitere Iteration der Maske passt, oder schrumpfen, bis die Anzahl der Iterationen nicht mehr passt.

```html hidden
<div></div>
<label
  >width: <span></span><br />
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
const output = document.querySelector("span");

range.addEventListener("change", () => {
  const value = `${range.value}px`;
  output.innerText = value;
  div.style.width = value;
});
```

{{EmbedLiveSample("round iterations", "", "300px")}}

Die Maske ist auf eine Breite von `100px` definiert. Es gibt einen einzigen Stern, wenn die Ursprungsbox von `1px` bis `149px` breit ist, zwei Sterne von `150px` bis `249px`, drei Sterne von `250px` bis `349px` und so weiter.

### Die Kurzschriftwerte

Dieses Beispiel zeigt alle `mask-repeat` Kurzschriftwerte (Ein-Wort-Schlüsselwort).

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

Wir geben jedem `<div>` die gleichen CSS, mit Ausnahme des `mask-repeat`-Wertes, den wir ihrem übergeordneten Klassennamen zuordnen. Wir definieren eine Maskengröße und positionieren das anfängliche `mask-image` unten rechts, was bedeutet, dass ein Abschneiden an den oberen und linken Masken auftreten wird, an ihren oberen und linken Seiten.

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

Der erste (und im Fall von `no-repeat`, einzige) Maskenstern wird [dimensioniert](/de/docs/Web/CSS/Reference/Properties/mask-size) auf `50px` mal `50px` und [positioniert](/de/docs/Web/CSS/Reference/Properties/mask-position) am unteren rechten Ende des Malbereichs, mit wiederholten Sternen, die über und/oder links davon platziert sind, wobei ein Abschneiden an den oberen und linken Seiten der obersten und linken Sterne auftritt. Beachten Sie, dass alle Sterne dieselbe Größe und Form haben, außer bei `round`, wo alle Masken auf `45px` mal `45px` geschrumpft sind, um vier vollständige Masken in jeder Richtung anzupassen. Wäre der Container `174px`, hätten es drei Sterne in jeder Richtung gegeben, anstelle von vier, und jeder Stern wäre gestreckt gewesen.

### Mehrere Maskenbilder und Wiederholungen

Sie können einen anderen `<repeat-style>` für jedes Maskenbild angeben, getrennt durch Kommata:

```css
.extra-repeats {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-repeat: repeat-x, repeat-y, space;
}
```

Jedes Bild wird mit dem entsprechenden Wiederholungsstil abgeglichen. Da es mehr `mask-repeat`-Werte als `mask-image`-Werte gibt, werden die überschüssigen `mask-repeat`-Werte ignoriert.

```css
.missing-repeats {
  mask-image:
    url("mask1.png"), url("mask2.png"), url("mask3.png"), url("mask4.png");
  mask-repeat: repeat-x, repeat-y;
}
```

Jedes Bild wird mit einem entsprechenden Wiederholungsstil abgeglichen. Da es mehr `mask-image`-Werte als `mask-repeat`-Werte gibt, wird der `mask-repeat` wiederholt, bis jedes `mask-image` einen verbundenen `mask-repeat`-Wert hat. Hier wiederholen sich ungeradzahlige Masken entlang der x-Achse, während sich gerade Masken entlang der y-Achse wiederholen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-repeat")}}
- {{cssxref("mask-border-repeat")}}
- [Einführung in das CSS-Maskieren](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- [CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking) Modul
