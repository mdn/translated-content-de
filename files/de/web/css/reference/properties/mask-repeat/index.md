---
title: mask-repeat
slug: Web/CSS/Reference/Properties/mask-repeat
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`mask-repeat`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, wie Maskenbilder wiederholt werden. Ein Maskenbild kann entlang der horizontalen Achse, der vertikalen Achse, beiden Achsen oder gar nicht wiederholt werden.

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

Die `mask-repeat`-Eigenschaft ist eine durch Kommas getrennte Liste von zwei `<repeat-style>`-Werten, wobei der erste `<repeat-style>`-Wert den horizontalen Wiederholungswert darstellt und der zweite Wert den vertikalen Wiederholungswert, oder ein Schlüsselwortwert, der eine Kurzform für zwei `<repeat-style>`-Werte ist.

#### `<repeat-style>`-Werte

Die `<repeat-style>`-Werte umfassen:

- `repeat`

  - : Das Bild wird so oft wie nötig wiederholt, um den gesamten maskenmalenden Bereich zu bedecken. Maskenbilder entlang der Kanten werden abgeschnitten, wenn die Größe des [maskenursprungsbereichs](/de/docs/Web/CSS/Reference/Properties/mask-origin) kein genaues Vielfaches der Größe des Maskenbildes ist.

- `space`

  - : Das Maskenbild wird so oft wie möglich ohne Abschneiden wiederholt. Wenn die Ursprunggröße des Elements mindestens doppelt so groß ist wie die Größe des Maskenbildes in der zugehörigen Dimension, wird die {{cssxref("mask-position")}}-Eigenschaft ignoriert und die ersten und letzten Bilder an den Kanten des maskenursprungscontainers positioniert. Wenn der maskenursprungsbereich kein genaues Vielfaches der Größe des Maskenbildes ist, wird der Leerraum gleichmäßig zwischen den wiederholten Maskenbildern verteilt.

    Wenn die Ursprungsboxgröße weniger als doppelt so groß ist wie die Größe des Maskenbildes in der gegebenen Dimension, kann nur ein Maskenbild angezeigt werden. In diesem Fall wird das Bild so positioniert, wie es durch die `mask-position`-Eigenschaft definiert ist, die standardmäßig auf `0% 0%` eingestellt ist. Das Maskenbild wird nur abgeschnitten, wenn es größer ist als der maskenursprungsbereich.

- `round`

  - : Das Maskenbild wird so oft wie möglich in seinen ursprünglichen Abmessungen wiederholt. Wenn die Größe des maskenursprungsbereichs kein genaues Vielfaches der Größe des Maskenbildes ist, werden alle Maskenbilder [verkleinert oder gestreckt](#gerundete_wiederholungen), um sicherzustellen, dass keine Wiederholungen abgeschnitten werden.

- `no-repeat`
  - : Das Maskenbild wird nicht wiederholt, und daher wird der maskenmalende Bereich nicht unbedingt vollständig bedeckt. Die Position des nicht wiederholten Maskenbildes wird durch die {{cssxref("mask-position")}}-CSS-Eigenschaft definiert.

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

  - : Entspricht `repeat no-repeat`. Das Bild wird horizontal so oft wiederholt, wie nötig, um die Breite des maskenmalenden Bereichs abzudecken. Maskenbilder entlang der rechten oder linken Kanten, oder beides je nach {{cssxref("mask-position")}}-Wert, werden abgeschnitten, wenn die Breite des maskenursprungsbereichs kein genaues Vielfaches der Breite des Maskenbildes ist.

- `repeat-y`
  - : Entspricht `no-repeat repeat`. Das Bild wird vertikal so oft wiederholt, wie nötig, um die Höhe des maskenmalenden Bereichs abzudecken. Maskenbilder entlang der oberen oder unteren Kanten, oder beides je nach {{cssxref("mask-position")}}-Wert, werden abgeschnitten, wenn die Höhe des maskenursprungsbereichs kein genaues Vielfaches der Höhe des Maskenbildes ist.

## Beschreibung

Die `mask-repeat`-Eigenschaft akzeptiert ein durch Kommas getrenntes Paar von Werten oder einen [Kurzformwert](#kurzformwerte). Bei der Zwei-Wert-Syntax repräsentiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten.

### Mehrfache Werte

Jeder `mask-repeat`-Wert in dieser durch Kommas getrennten Liste gilt für eine separate Maskenebene. Ein Element kann mehrere Maskenebenen aufweisen. Die Anzahl der Ebenen wird durch die Anzahl der durch Kommas getrennten Werte in der {{cssxref("mask-image")}}-Eigenschaft bestimmt (auch wenn ein Wert `none` ist). Jeder `mask-repeat`-Wert wird den `mask-image`-Werten der Reihe nach zugeordnet. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist, werden überzählige `mask-repeat`-Werte ignoriert oder, falls `mask-repeat` weniger Werte als `mask-image` aufweist, werden die `mask-repeat`-Werte wiederholt.

### Größen- und Positionierungsanpassung

Der `mask-repeat`-Eigenschaftswert definiert, wie Maskenbilder gekachelt werden, nachdem sie [skaliert](/de/docs/Web/CSS/Reference/Properties/mask-size) und [positioniert](/de/docs/Web/CSS/Reference/Properties/mask-position) wurden. Die erste (und möglicherweise einzige) Wiederholung des Maskenbildes wird durch die {{cssxref("mask-position")}}-Eigenschaft positioniert, die standardmäßig auf `0% 0%`, die obere linke Ecke des Ausgangsbereichs, eingestellt ist. Die Größe wird durch die {{cssxref("mask-size")}}-Eigenschaft definiert, die standardmäßig auf `auto` steht. Die Positionen der wiederholten Masken basieren auf diesem ersten Maskeninstanz.

### Abschneiden

Maskenbilder werden nicht wiederholt, sondern werden abgeschnitten, wenn die Größe des Maskenbildes größer ist als der Ursprungsbereich, außer im Fall von `round`, wo eine einzelne Maske verkleinert wird, um in den Ursprungsbereich zu passen.

Bei `repeat`-Werten können Maskenbilder am Rand des Ursprungsbereichs abgeschnitten werden, wenn die Dimension (Breite oder Höhe) des Bereichs kein genaues Vielfaches der Maske ist.

### Seitenverhältnis

Standardmäßig behalten Maskenbilder das Seitenverhältnis bei, das durch die {{cssxref("mask-size")}}-Eigenschaft gesetzt wurde oder ihr Standard-Seitenverhältnis, wenn `mask-size` standardmäßig oder explizit auf `auto` gesetzt ist. Nur im Fall von `round`-Werten in beiden Richtungen könnte das Seitenverhältnis der Maske verzerrt werden.

Wenn `round` in beiden Richtungen gesetzt ist, entsprechen die resultierenden wiederholten Maskenbilder dem Seitenverhältnis des Ursprungsbereichs. Da die Maskenbilder skaliert werden, können sie verzerrt werden, um sicherzustellen, dass die Maskenbilder nicht abgeschnitten werden. Wenn `round` nur in einer Dimension gesetzt ist, wird das Seitenverhältnis der Maskengröße respektiert.

### Gerundete Wiederholungen

Im Falle von `round` werden Maskenbilder vergrößert oder verkleinert, um die Maske in der Positionierungsfläche eine ganze Zahl von Malen anzupassen. Die Maskengröße erhöht oder verringert sich, um der nächstgelegenen natürlichen Zahl an Masken zu entsprechen, mit einem Minimum von einer Maske.

Die gerenderten Dimensionen der Maske sind die Größe des Ursprungsbereichs geteilt durch die Anzahl der Wiederholungen der Masken in dieser Dimension, wobei die Wiederholungen eine ganzzahlige Zahl größer null sind. Die Anzahl der Wiederholungen ist: `X' = D / round(D / X)`, wobei `D` die Breite oder Höhe ist, und `round()` ist eine Funktion, die die nächstgelegene ganze Zahl größer null zurückgibt.

Zum Beispiel, wenn `mask-repeat` auf `round` gesetzt ist und `mask-size` die Maske auf `40px` Breite einstellt, wird, wenn der Ursprungsbereich vorhanden ist (größer als `0px` breit), jedoch weniger als `60px` breit, eine einzige Iteration bei 100% der Breite dieses Bereichs vorhanden sein. Wenn der Bereich mindestens `60px` breit, jedoch weniger als `100px` breit ist, gibt es zwei Iterationen, die jeweils `50%` des Bereichs einnehmen. Von 100px bis 140px passen drei Masken entlang der horizontalen Achse. Diese "`40px`-breiten" Masken werden nur `40px` breit sein, wenn der Ursprungsbereich ein genaues Vielfaches von `40px` ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die Einstellung der `mask-repeat`-Eigenschaft für eine einzelne Maske.

#### HTML

Unser HTML enthält ein einfaches {{htmlelement("div")}}-Element:

```html
<div></div>
```

#### CSS

Wir definieren ein `250px` Quadrat mit einem roten zu blauen Farbverlauf mit einem `100px` mal `100px` Stern als Maskenbild. Wir verwenden die `mask-repeat`-Eigenschaft und setzen `round` für die horizontale Richtung und `space` für den vertikalen Wert.

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

Mit `space` und `round` auf einem Maskenbild, das kleiner als der Ursprungsbereich ist, wird die Maske nicht abgeschnitten. Vielmehr verzerrt der `round`-Wert den Stern, um Abschneiden zu verhindern und weißen Raum zu vermeiden, während `space` das Seitenverhältnis des Sterns beibehält, aber bei Bedarf Platz zwischen den Masken hinzufügt.

### Gerundete Iterationen

Mit dem gleichen HTML und CSS zeigt diese Demonstration einen Schieberegler, der die Breite des Containers ändert, um zu zeigen, wie sich bei `round` die Masken vergrößern, solange Platz vorhanden ist, bis eine weitere Iteration der Maske passt, oder verkleinern, bis die Anzahl der Iterationen nicht mehr passt.

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

Die Maske ist definiert als `100px` breit. Es gibt einen einzigen Stern, wenn der Ursprungsbereich von `1px` bis `149px` breit ist, zwei Sterne von `150px` bis `249px`, drei Sterne von `250px` bis `349px` und so weiter.

### Die Kurzformwerte

Dieses Beispiel demonstriert alle `mask-repeat`-Kurzform (Einzelschlüsselwort) Werte.

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

Wir geben jedem `<div>` das gleiche CSS, außer für den `mask-repeat`-Wert, den wir an den Klassennamen ihrer Eltern anpassen. Wir definieren eine Maskengröße und setzen das anfängliche `mask-image` unten rechts, was bedeutet, dass jedes Abschneiden auf den oberen und linken Seiten der obersten und linken Masken erfolgt.

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

Der erste (und im Fall von `no-repeat`, einzige) Maskenstern wird auf [50px x 50px skaliert](/de/docs/Web/CSS/Reference/Properties/mask-size) und wird [unten rechts im Malbereich positioniert](/de/docs/Web/CSS/Reference/Properties/mask-position), wobei wiederholte Sterne darüber und/oder links davon mit jedem Abschneiden auftreten, das oben und links von den obersten und links liegenden Sternen geschieht. Beachten Sie, dass alle Sterne dieselbe Größe und Form haben, außer bei `round`, bei dem alle Masken auf 45px x 45px schrumpften, um vier vollständige Masken in jede Richtung zu passen. Wäre der Container 174px gewesen, hätte es drei Sterne in jede Richtung gegeben, statt vier, und jeder Stern wäre gestreckt worden.

### Mehrere Maskenbilder und Wiederholungen

Sie können einen anderen `<repeat-style>` für jedes Maskenbild angeben, getrennt durch Kommas:

```css
.extra-repeats {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-repeat: repeat-x, repeat-y, space;
}
```

Jedes Bild wird mit dem entsprechenden Wiederholungsstil abgeglichen. Da es mehr `mask-repeat`-Werte als `mask-image`-Werte gibt, werden die überzähligen `mask-repeat`-Werte ignoriert.

```css
.missing-repeats {
  mask-image:
    url("mask1.png"), url("mask2.png"), url("mask3.png"), url("mask4.png");
  mask-repeat: repeat-x, repeat-y;
}
```

Jedes Bild wird mit einem entsprechenden Wiederholungsstil abgeglichen. Da es mehr `mask-image`-Werte als `mask-repeat`-Werte gibt, wird `mask-repeat` so lange wiederholt, bis jedes `mask-image` einen zugehörigen `mask-repeat`-Wert hat. Hier wiederholen sich ungerade nummerierte Masken entlang der x-Achse, während die gerade nummerierten Masken sich entlang der y-Achse wiederholen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-repeat")}}
- {{cssxref("mask-border-repeat")}}
- [Einführung in CSS-Masking](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS `mask`-Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Deklaration mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- [CSS Masking](/de/docs/Web/CSS/Guides/Masking) Modul
