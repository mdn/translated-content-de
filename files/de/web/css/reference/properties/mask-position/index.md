---
title: "`mask-position` CSS property"
short-title: mask-position
slug: Web/CSS/Reference/Properties/mask-position
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`mask-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die anfängliche Position fest, relativ zur durch {{cssxref("mask-origin")}} festgelegten Maskenpositionsebene, für jedes definierte Maskenbild.

## Syntax

```css
/* Single <position> keyword value */
/* Sets second value to 'center' */
mask-position: left;
mask-position: center;
mask-position: right;
mask-position: top;
mask-position: bottom;

/* Two <position> keyword values */
mask-position: left center;
mask-position: right top;

/* One length or percentage <position> value */
/* Horizontal position. Vertical position set to 'center' */
mask-position: 25%;
mask-position: 0px;
mask-position: 8em;

/* Two length or percentage <position> values */
/* First value: horizontal position. Second value: vertical position */
mask-position: 25% 75%;
mask-position: 0px 0px;
mask-position: 10% 8em;

/* Edge offsets: Four <position> values */
mask-position: bottom 10px right 20px;
mask-position: right 3em bottom 10px;
mask-position: bottom 10px right 0;

/* Multiple <position> values */
mask-position:
  top left,
  bottom 10px right 10px;
mask-position:
  1rem 1rem,
  center;

/* Global values */
mask-position: inherit;
mask-position: initial;
mask-position: revert;
mask-position: revert-layer;
mask-position: unset;
```

### Werte

Ein oder mehrere `<position>`-Werte, getrennt durch Kommata.

- {{cssxref("&lt;position&gt;")}}
  - : Ein, zwei oder vier Werte, die eine 2D-Position darstellen und die Kanten des Box-Elements spezifizieren. Relative oder absolute Offsets können angegeben werden.

## Beschreibung

Die Eigenschaft `mask-position` definiert die Position jeder Maskenschicht. Ein Element kann mehrere Maskenschichten angewendet haben. Die Anzahl der Schichten wird durch die Anzahl der durch Kommas getrennten Werte im Wert der Eigenschaft {{cssxref("mask-image")}} bestimmt (selbst `none`-Werte erzeugen eine Schicht).

Jeder `mask-position`-Wert in der durch Kommas getrennten Liste von Werten wird mit einer zugehörigen Maskenschicht abgeglichen, wie sie durch die Liste der `mask-image`-Werte definiert ist, in dieser Reihenfolge. Wenn die Anzahl der Werte in den zwei Eigenschaften unterschiedlich ist:

- Wenn `mask-position` mehr Werte als mask-image hat, werden die überschüssigen Werte von `mask-position` nicht verwendet.
- Wenn `mask-position` weniger Werte als mask-image hat, werden die `mask-position`-Werte wiederholt.

Jedes `mask-position` definiert die Position der zugehörigen Maskenschicht relativ zum zugehörigen {{cssxref("mask-origin")}}-Wert. Die `mask-origin`-Eigenschaftswerte werden ähnlich wie die `mask-image`-Werte abgeglichen, in der Reihenfolge, wobei überschüssige `mask-position`-Werte nicht verwendet werden oder `mask-position`-Werte wiederholt werden, wenn sie weniger sind als die `mask-origin`-Werte. Jede Maskenschicht hat daher einen zugehörigen `mask-origin`- und `mask-position`-Wert.

Wenn kein `mask-origin` gesetzt ist, ist der Standardwert `padding-box`, was bedeutet, dass der Ursprung jeder `mask-position` die [padding-box](/de/docs/Web/CSS/Reference/Values/box-edge#padding-box) des Elements ist.

### Ein-Wert-Syntax

Wenn nur ein `mask-position`-Wert angegeben ist, wird der zweite Wert als `center` angenommen. Wenn der Wert ein `<length>` oder `<percentage>` ist, definiert er die Position der Maske entlang der horizontalen Achse, wobei die Maske vertikal innerhalb der Ursprungsbox zentriert wird. Zum Beispiel ist `mask-position: 0%;` gleich `mask-position: 0% center`.

Wenn Sie ein einzelnes Schlüsselwort für die Positionierung verwenden, wird der andere Wert auf `center` aufgelöst. Der Standardwert von `mask-position` ist `0% 0%`, was `mask-position: top left` entspricht. Allerdings:

- `mask-position: top;` ist äquivalent zu `mask-position: top center;`.
- `mask-position: left;` ist äquivalent zu `mask-position: center left`.
- `mask-position: center;` ist gleich `mask-position: center center`.

Wenn der Wert ein {{cssxref("&lt;length&gt;")}} Wert ist, stellt er die horizontale Position als Offset von der linken Kante der Maskenposition dar. Ein positiver Wert stellt einen nach innen gerichteten Offset von der linken Kante des Box-Containers dar. Die Position kann außerhalb der Box des Elements mit einem negativen Wert festgelegt werden — dies erzeugt einen auswärts gerichteten Offset, der das Element außerhalb der linken Containerskante platziert.

#### Prozentwerte

Ein {{cssxref("&lt;percentage&gt;")}}-Wert repräsentiert den horizontalen Positionswert der Maske relativ zur Breite des Containers, positioniert relativ zur linken Kante. Der Offset ist jedoch nicht von der Maskenkante bis zur Boxkante. Stattdessen wird die Maskenbilddimension [von der Containerdimension abgezogen](/de/docs/Web/CSS/Reference/Properties/background-position#regarding_percentages), und dann wird ein Prozentsatz des resultierenden Werts als direkter Offset von der linken Kante der Box verwendet, was dasselbe ist wie bei [Prozentwerten für `background-position`](/de/docs/Web/CSS/Reference/Properties/background-position#regarding_percentages).

Die Gleichung lautet:

`(Containerdimension - Maskendimension) * Positionsprozentsatz = Dimensionsoffsetwert`

Bei einer `100px` breiten Maske und einer `1000px` breiten Ursprungsbox führt das Setzen von `mask-position: 10%;` (entspricht `10% 50%`) dazu, dass die Maske vertikal zentriert um `90px` von der linken Kante aus platziert wird. Die Gleichung lautet `(1000 - 100) * 10% = 90`. Wenn der linke Offset `0%` gewesen wäre, wäre die linke Kante der Maske bündig mit der linken Kante des Containers (`(1000 - 100) * 0% = 0`).

Wenn der linke Offset `100%` gewesen wäre, wäre die rechte Kante der Maske bündig mit der rechten Kante des Containers, da die linke Kante der `100px` breiten Maske `900px` (`(1000 - 100) * 100% = 900`) von der linken Kante des Containers entfernt wäre (die `100px` Maskenbreite plus `900px` Abstand von der linken Kante bedeutet, dass die rechte Kante `1000px` von der linken Kante entfernt wäre, was die rechte Kante des Containers ist).

### Zwei-Wert-Syntax

Eine Zwei-Wert-`<position>` gibt die Position des Maskenbildes innerhalb seines Maskenpositionierungsbereichs an, wobei Längen- und Prozentwerte Offsets von `left` und `top` des Bereichs angeben.

Wenn die beiden Werte {{cssxref("&lt;length&gt;")}}-Werte, {{cssxref("&lt;percentage&gt;")}}-Werte oder das Schlüsselwort `center` sind, stellt der erste Wert die horizontale Position als Offset von der linken Kante des Maskenpositionierungsbereichs dar, und der zweite Wert repräsentiert die vertikale Position als Offset von der oberen Kante, wobei [Prozente offset](#prozentwerte) durch die Größe der Maske in dieser Dimension sind.

Darüber hinaus, wenn {{cssxref("&lt;percentage&gt;")}}-Werte angegeben sind, ist der erste Wert auch der horizontale Positionswert relativ zur linken Kante, und der zweite Wert ist auch der vertikale Positionswert relativ zur oberen Kante.

Ein Paar von achsenspezifischen Schlüsselwörtern kann umgeordnet werden, ebenso ein achsenspezifisches Schlüsselwort und eine Länge oder ein Prozentsatz, aber zwei Längen- oder Prozentwerte sind nicht austauschbar. Wenn einer der beiden Werte `top`, `right`, `bottom` oder `left` ist, spielt die Reihenfolge der beiden Werte keine Rolle. Ein in dem Wertepaar vorhandener `center` oder `<length-percentage>`-Wert wird auf die andere Dimension angewendet.

### Vier-Wert-Syntax

Die Vier-Wert-Syntax besteht aus zwei Wertepaaren, wobei jedes Paar ein Schlüsselwort enthält, das die zu versetzende Kante angibt, und einen `<length>` und `<percentage>`-Wert, der die Offset-Distanz angibt. Zum Beispiel spezifiziert `mask-position: left 1em top 2em` einen horizontalen Offset von `1em` von der linken Boxkante und einen vertikalen Offset von `2em` von der oberen Kante. Das Zwei-Wert-Äquivalent wäre `mask-position: 1em 2em`.

Da wir beim Verwenden der Vier-Wert-Syntax die Offsets-Ränder definieren, ist die Reihenfolge nicht wichtig: `mask-position: top 2em left 1em` und `mask-position: left 1em top 2em` ergeben dasselbe Ergebnis.

Die eigentliche Stärke der Vier-Wert-Syntax liegt darin, dass sie es uns erlaubt, andere als `left` und `top` Offsets-Ränder anzugeben. Zum Beispiel erzeugt `mask-position:  bottom 10px right 20px` einen vertikalen `10px`-Offset von unten und einen horizontalen `20px`-Offset von rechts. Normalerweise wird die Vier-Wert-Syntax verwendet, um vom `bottom` und/oder `right` zu versetzen. Aber diese Syntax ist auch nützlich, wenn man sich die Offset-Kantenreihenfolge für die Zwei-Wert-Syntax nicht merken kann.

Eine Sache zu beachten ist, dass im Gegensatz zu den `<bg-position>`-Datentypwerten für {{cssxref("background-position")}}, die `<position>`-Werte für `mask-position` keine Drei-Wert-Syntax erlauben und kein Versetzen von `center` zulassen. Beim Versetzen der Maske von `bottom` oder `right` erfordert die `mask-position`, dass alle vier Werte deklariert werden.

Damit die Vier-Wert-Syntax gültig ist, muss sie entweder `top` oder `bottom` als vertikale Offset-Kante spezifizieren, zusammen mit dem vertikalen Längen- oder Prozentoffsetwert, und entweder `left` oder `right` als horizontale Offset-Kante, zusammen mit dem horizontalen Längen- oder Prozentoffsetwert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

```html
<section>
  <div></div>
</section>
```

```css
section {
  border: 1px solid black;
  width: 250px;
  height: 250px;
}

div {
  width: 250px;
  height: 250px;
  margin-bottom: 10px;
  background: blue linear-gradient(red, blue);

  mask-image: url("/shared-assets/images/examples/mask-star.svg");
  mask-repeat: no-repeat;
  mask-position: top right;
}
```

{{EmbedLiveSample("basic usage", "", "300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-position")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask")}} Kurzschreibweise
- {{cssxref("mask-border")}}
- {{cssxref("mask-border-outset")}}
- [Einführung in das Maskieren mit CSS](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS `mask`-Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- [CSS-Maskierungsmodul](/de/docs/Web/CSS/Guides/Masking)
- {{cssxref("background-position")}}
- {{cssxref("&lt;position&gt;")}}
