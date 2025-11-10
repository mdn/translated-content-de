---
title: mask-position
slug: Web/CSS/Reference/Properties/mask-position
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`mask-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die anfängliche Position, relativ zur durch {{cssxref("mask-origin")}} festgelegten Maskenpositionsebene, für jedes definierte Maskenbild fest.

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

Ein oder mehrere `<position>` Werte, getrennt durch Kommata.

- {{cssxref("&lt;position&gt;")}}
  - : Ein, zwei oder vier Werte, die eine 2D-Position darstellen und die Kanten des Elements angeben. Relative oder absolute Offsets können angegeben werden.

## Beschreibung

Die `mask-position` Eigenschaft definiert die Position jeder Maskenebene. Ein Element kann mehrere Maskenebenen haben. Die Anzahl der Ebenen wird durch die Anzahl der durch Kommata getrennten Werte im Wert der {{cssxref("mask-image")}} Eigenschaft bestimmt (selbst `none`-Werte erzeugen eine Ebene).

Jeder `mask-position` Wert in der durch Kommata getrennten Liste von Werten wird mit einer zugeordneten Maskenebene abgeglichen, wie durch die Liste der `mask-image` Werte definiert, in der Reihenfolge. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist:

- Wenn `mask-position` mehr Werte als `mask-image` hat, werden die überzähligen Werte von `mask-position` nicht verwendet.
- Wenn `mask-position` weniger Werte als `mask-image` hat, werden die `mask-position` Werte wiederholt.

Jede `mask-position` definiert die Position der zugehörigen Maskenebene relativ zum entsprechenden {{cssxref("mask-origin")}} Wert. Die `mask-origin` Eigenschaftswerte werden in der Reihenfolge ähnlich mit den `mask-image` Werten abgeglichen, wobei überzählige `mask-position` Werte nicht verwendet oder `mask-position` Werte wiederholt werden, wenn sie in geringerer Anzahl als die `mask-origin` Werte vorhanden sind. Jede Maskenebene hat daher einen zugeordneten `mask-origin` und `mask-position` Wert.

Wenn kein `mask-origin` gesetzt ist, wird der Standardwert `padding-box` verwendet, was bedeutet, dass der Ursprung jeder `mask-position` die [padding-box](/de/docs/Web/CSS/Reference/Values/box-edge#padding-box) des Elements ist.

### Ein-Wert-Syntax

Wenn nur ein `mask-position` Wert angegeben ist, wird der zweite Wert als `center` angenommen. Wenn der Wert ein `<length>` oder `<percentage>` ist, definiert er die Position der Maske entlang der horizontalen Achse, wobei die Maske vertikal innerhalb der Ursprungsbox zentriert ist. Zum Beispiel ist `mask-position: 0%;` gleichbedeutend mit `mask-position: 0% center`.

Wenn Sie ein einzelnes Keyword für die Positionierung verwenden, wird der andere Wert auf `center` aufgelöst. Der Standardwert von `mask-position` ist `0% 0%`, was `mask-position: top left` entspricht. Allerdings:

- `mask-position: top;` entspricht `mask-position: top center;`.
- `mask-position: left;` entspricht `mask-position: center left`.
- `mask-position: center;` ist gleichbedeutend mit `mask-position: center center`.

Wenn der Wert ein {{cssxref("&lt;length&gt;")}} ist, repräsentiert er die horizontale Position als Offset vom linken Rand der Maskenpositionierung. Ein positiver Wert stellt einen Offset von der linken Kante des Box-Containers dar. Die Position kann außerhalb der Box des Elements mit einem negativen Wert festgelegt werden — dies erzeugt einen äußeren Offset, der das Element außerhalb der linken Kante des Containers platziert.

#### Prozentwerte

Ein {{cssxref("&lt;percentage&gt;")}} Wert repräsentiert den horizontalen Positionswert der Maske relativ zur Breite des Containers, positioniert relativ zur linken Kante. Der Offset ist jedoch nicht von der Maskenrand zur Box-Rand. Stattdessen wird die Maskenbilddimension [von der Dimension des Containers subtrahiert](/de/docs/Web/CSS/Reference/Properties/background-position#regarding_percentages), und dann wird ein Prozentsatz des resultierenden Wertes als direkter Offset von der linken Kante der Box verwendet, was den gleichen Prinzipien wie [Prozentwerte für `background-position`](/de/docs/Web/CSS/Reference/Properties/background-position#regarding_percentages) entspricht.

Die Gleichung lautet:

`(Container-Dimension - Masken-Dimension) * Positionsprozentsatz = Dimensions-Offsetwert`

Angesichts einer `100px` breiten Maske und einer `1000px` breiten Ursprungsbox führt die Einstellung von `mask-position: 10%;` (das Äquivalent von `10% 50%`) dazu, dass die Maske vertikal zentriert in `90px` von der linken Kante ist. Die Gleichung ist `(1000 - 100) * 10% = 90`. Wenn der linke Offset `0%` gewesen wäre, wäre die linke Kante der Maske bündig zur linken Seite des Containers (`(1000 - 100) * 0% = 0`).

Wenn der linke Offset `100%` gewesen wäre, wäre die rechte Kante der Maske bündig zur rechten Seite des Containers, da die linke Kante der `100px` breiten Maske `900px` (`(1000 - 100) * 100% = 900`) von der linken Kante des Containers wäre (die `100px` Maskenbreite plus `900px` Abstand von der linken Kante bedeutet, dass die rechte Kante `1000px` von der linken Kante entfernt wäre, was die rechte Kante des Containers ist).

### Zwei-Wert-Syntax

Eine Zwei-Wert-`<position>` gibt die Position des Maskenbildes innerhalb seines Maskenpositionierungsbereichs an, wobei Längen- und Prozentwerte Offsets von `left` und `top` des Bereichs angeben.

Wenn die beiden Werte {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}} Werte oder das Schlüsselwort `center` sind, repräsentiert der erste Wert die horizontale Position als Offset von der linken Kante des Maskenpositionierungsbereichs, und der zweite Wert repräsentiert die vertikale Position als Offset von der oberen Kante, wobei [Prozentsätze als Offset](#prozentwerte) über die Maskengröße in dieser Dimension verwendet werden.

Darüber hinaus, wenn {{cssxref("&lt;percentage&gt;")}} Werte angegeben sind, ist der erste Wert auch der horizontale Positionswert relativ zur linken Kante, und der zweite Wert ist auch der vertikale Positionswert relativ zur oberen Kante.

Ein Paar achsenspezifische Schlüsselwörter kann umgeordnet werden, ebenso wie ein achsenspezifisches Schlüsselwort und eine Länge oder ein Prozentsatz, aber zwei Längen- oder Prozentwerte sind nicht austauschbar.
Wenn einer der beiden Werte `top`, `right`, `bottom` oder `left` ist, spielt die Reihenfolge der beiden Werte keine Rolle. Jeder `center` oder `<length-percentage>` Wert in dem Wertepaar wird in der anderen Dimension angewendet.

### Vier-Wert-Syntax

Die Vier-Wert-Syntax besteht aus zwei Wertepaaren, wobei jedes Paar ein Schlüsselwort enthält, das die Kante bestimmt, von der der Offset erfolgen soll, und ein `<length>` und `<percentage>` Wert, der die Offset-Distanz angibt. Zum Beispiel spezifiziert `mask-position: left 1em top 2em` einen `1em` horizontalen Offset von der linken Box-Kante und einen `2em` vertikalen Offset von der oberen Kante. Das Zwei-Wert-Äquivalent wäre `mask-position: 1em 2em`.

Da wir die Offset-Kanten bei der Verwendung der Vier-Wert-Syntax definieren, ist die Reihenfolge nicht wichtig: `mask-position: top 2em left 1em` und `mask-position: left 1em top 2em` erzeugen beide das gleiche Ergebnis.

Die wirkliche Stärke der Vier-Wert-Syntax liegt darin, dass sie es uns erlaubt, andere Offset-Kanten als `left` und `top` zu spezifizieren. Zum Beispiel erzeugt `mask-position: bottom 10px right 20px` einen `10px` vertikalen Offset nach oben von der unteren Kante und einen `20px` horizontalen Offset nach links von der rechten Kante. Meistens wird die Vier-Wert-Syntax verwendet, um von unten und/oder rechts zu offseten. Aber diese Syntax ist auch hilfreich, wenn Sie sich nicht an die Reihenfolge der Offset-Kanten für die Zwei-Wert-Syntax erinnern können.

Ein zu beachtender Punkt ist, dass die `<position>` Werte für `mask-position` im Gegensatz zu den `<bg-position>` Datentypwerten für {{cssxref("background-position")}} keine Drei-Wert-Syntax erlauben und keine Offsets von `center` zulassen. Wenn die Maske vom `bottom` oder `right` offsetiert wird, erfordert die `mask-position`, dass alle vier Werte deklariert werden.

Damit die Vier-Wert-Syntax gültig ist, muss sie entweder `top` oder `bottom` als vertikale Offset-Kante angeben, zusammen mit dem vertikalen Längen- oder Prozentwert, und entweder `left` oder `right` als horizontale Offset-Kante, zusammen mit dem horizontalen Längen- oder Prozentwert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

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
- {{cssxref("mask")}} Kurzform
- {{cssxref("mask-border")}}
- {{cssxref("mask-border-outset")}}
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Deklaration mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- [CSS-Maskierungsmodul](/de/docs/Web/CSS/Guides/Masking)
- {{cssxref("background-position")}}
- {{cssxref("&lt;position&gt;")}}
