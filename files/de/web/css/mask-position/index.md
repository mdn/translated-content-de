---
title: mask-position
slug: Web/CSS/mask-position
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{CSSRef}}

Die **`mask-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Anfangsposition in Bezug auf die Maskenpositionsebene fest, die durch {{cssxref("mask-origin")}} für jedes definierte Maskenbild festgelegt wird.

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

Ein oder mehrere `<position>` Werte, getrennt durch Kommas.

- {{cssxref("&lt;position&gt;")}}
  - : Ein, zwei oder vier Werte, die eine 2D-Position repräsentieren und die Kanten des Box-Elements festlegen. Relative oder absolute Offsets können angegeben werden.

## Beschreibung

Die `mask-position` Eigenschaft definiert die Position jeder Maskenebene. Ein Element kann mehrere Maskenebenen haben. Die Anzahl der Ebenen wird durch die Anzahl der kommagetrennten Werte in der {{cssxref("mask-image")}} Eigenschaft bestimmt (sogar `none` Werte erstellen eine Ebene).

Jeder `mask-position` Wert in der kommagetrennten Liste der Werte wird mit einer zugehörigen Maskenebene abgeglichen, wie sie von der Liste der `mask-image` Werte definiert wird. Wenn sich die Anzahl der Werte in den beiden Eigenschaften unterscheidet:

- Wenn `mask-position` mehr Werte hat als `mask-image`, werden die überschüssigen Werte von `mask-position` nicht verwendet.
- Wenn `mask-position` weniger Werte hat als `mask-image`, werden die `mask-position` Werte wiederholt.

Jede `mask-position` definiert die zugehörige Position der Maskenebene relativ zum zugehörigen {{cssxref("mask-origin")}} Wert. Die `mask-origin` Eigenschaftswerte werden ähnlich wie die `mask-image` Werte in der Reihenfolge abgeglichen, wobei überschüssige `mask-position` Werte nicht verwendet oder `mask-position` Werte wiederholt werden, wenn sie in der Anzahl geringer sind als die `mask-origin` Werte. Somit hat jede Maskenebene einen zugehörigen `mask-origin` und `mask-position` Wert.

Wenn kein `mask-origin` gesetzt ist, ist der Standardwert `padding-box`, das bedeutet, der Ursprung jeder `mask-position` ist die [padding-box](/de/docs/Web/CSS/box-edge#padding-box) des Elements.

### Ein-Wert-Syntax

Wenn nur ein `mask-position` Wert angegeben ist, wird der zweite Wert als `center` angenommen. Wenn der Wert ein `<length>` oder `<percentage>` ist, definiert er die Position der Maske entlang der horizontalen Achse, wobei die Maske vertikal innerhalb des Ursprungsrechtecks zentriert wird. Zum Beispiel entspricht `mask-position: 0%;` `mask-position: 0% center`.

Wenn Sie ein einzelnes Schlüsselwort für die Positionierung verwenden, wird der andere Wert auf `center` aufgelöst. Der Standardwert von `mask-position` ist `0% 0%`, was `mask-position: top left` entspricht. Allerdings:

- `mask-position: top;` ist gleichbedeutend mit `mask-position: top center;`.
- `mask-position: left;` ist gleichbedeutend mit `mask-position: center left`.
- `mask-position: center;` ist gleich `mask-position: center center`.

Wenn der Wert ein {{cssxref("&lt;length&gt;")}} Wert ist, stellt er die horizontale Position als Offset von der linken Kante der Maskenposition dar. Ein positiver Wert stellt einen inneren Offset von der linken Kante der Box dar. Die Position kann außerhalb des Box-Elements mit einem negativen Wert festgelegt werden – dies erzeugt einen äußeren Offset, der das Element außerhalb der linken Boxkante platziert.

#### Prozentwerte

Ein {{cssxref("&lt;percentage&gt;")}} Wert stellt die horizontale Position der Maske relativ zur Breite des Containers dar, relativ zur linken Kante. Der Offset ist jedoch nicht von der Maskenkante zur Boxkante. Stattdessen wird die Maskenbilddimension [von der Containerdimension subtrahiert](/de/docs/Web/CSS/background-position#regarding_percentages), und dann wird ein Prozentsatz des resultierenden Wertes als direkter Offset von der linken Boxkante verwendet, was dasselbe ist wie [Prozentwerte für `background-position`](/de/docs/Web/CSS/background-position#regarding_percentages).

Die Gleichung lautet:

`(Containerdimension - Maskendimension) * Positionsprozentsatz = Dimensionsoffsetwert`

Bei einer `100px` breiten Maske und einer `1000px` breiten Ursprungsbox führt die Einstellung von `mask-postion: 10%;` (das Äquivalent zu `10% 50%`) dazu, dass die Maske vertikal zentriert bei `90px` von der linken Kante liegt. Die Gleichung lautet `(1000 - 100) * 10% = 90`. Wenn der linke Offset `0%` gewesen wäre, wäre die linke Kante der Maske bündig an der linken Seite des Containers (`(1000 - 100) * 0% = 0`).

Wenn der linke Offset `100%` gewesen wäre, wäre die rechte Kante der Maske bündig an der rechten Seite des Containers, da die linke Kante der `100px` breiten Maske `900px` (`(1000 - 100) * 100% = 900`) von der linken Kante des Containers entfernt wäre (die `100px` Maskenbreite plus `900px` Abstand von der linken Kante bedeutet, dass die rechte Kante `1000px` von der linken Kante entfernt wäre, was die rechte Kante des Containers ist).

### Zwei-Wert-Syntax

Eine Zwei-Wert-`<position>` gibt die Position des Maskenbildes innerhalb seines Maskenpositionierungsbereichs an, wobei Längen- und Prozentwerte Offsets von `left` und `top` des Bereichs spezifizieren.

Wenn die beiden Werte {{cssxref("&lt;length&gt;")}} Werte, {{cssxref("&lt;percentage&gt;")}} Werte oder das Schlüsselwort `center` sind, stellt der erste Wert die horizontale Position als Offset von der linken Kante des Maskenpositionierungsbereichs dar, und der zweite Wert stellt die vertikale Position als Offset von der oberen Kante dar, wobei [Prozentsätze versetzt werden](#prozentwerte) durch die Größe der Maske in dieser Dimension.

Außerdem repräsentiert, wenn {{cssxref("&lt;percentage&gt;")}} Werte angegeben sind, der erste Wert auch die horizontale Position relativ zur linken Kante und der zweite Wert auch die vertikale Position relativ zur oberen Kante.

Ein Paar von achsenspezifischen Schlüsselwörtern kann umsortiert werden, ebenso wie ein achsenspezifisches Schlüsselwort und eine Länge oder ein Prozentsatz, aber zwei Längen- oder Prozentwerte sind nicht austauschbar.
Wenn einer der beiden Werte `top`, `right`, `bottom` oder `left` ist, ist die Reihenfolge der beiden Werte egal. Jeder `center` oder `<length-percentage>` Wert im Wertepaar wird auf die andere Dimension angewandt.

### Vier-Wert-Syntax

Die Vier-Wert-Syntax besteht aus zwei Wertpaaren, wobei jedes Paar ein Schlüsselwort enthält, das die Kante angibt, von der aus der Offset zu bestimmen ist, und ein `<length>` und `<percentage>` Werte, die die Offset-Distanz angeben. Zum Beispiel kann `mask-position: left 1em top 2em` einen `1em` horizontalen Offset von der linken Boxkante und einen `2em` vertikalen Offset von der oberen Kante erstellen. Das Zweiwert-Äquivalent wäre `mask-position: 1em 2em`.

Da wir die Offset-Kanten bei Verwendung der Vier-Wert-Syntax definieren, ist die Reihenfolge nicht wichtig: `mask-position: top 2em left 1em` und `mask-position: left 1em top 2em` führen beide zum selben Ergebnis.

Die echte Kraft der Vier-Wert-Syntax besteht darin, dass sie es uns ermöglicht, Offset-Kanten außer `left` und `top` anzugeben. Zum Beispiel, `mask-position:  bottom 10px right 20px` erzeugt einen `10px` vertikalen Offset von der unteren Kante nach oben und einen `20px` horizontalen Offset von der rechten Kante nach links. Normalerweise wird die Vier-Wert-Syntax verwendet, um von unten und/oder rechts zu versetzen. Aber diese Syntax ist auch hilfreich, wenn Sie sich die Reihenfolge der Offset-Kanten der Zwei-Wert-Syntax nicht merken können.

Eine Sache zu beachten ist, dass im Gegensatz zu den `<bg-position>` Datentypwerten für {{cssxref("background-position")}}, die `<position>` Werte für `mask-position` keine Drei-Werte-Syntax zulassen und nicht von `center` aus offsettieren lassen. Beim Versetzen der Maske von `bottom` oder `right`, erfordert `mask-position`, dass alle vier Werte deklariert werden.

Damit die Vier-Wert-Syntax gültig ist, muss sie entweder `top` oder `bottom` als vertikale Offset-Kante, zusammen mit dem vertikalen Längen- oder Prozentwert, und entweder `left` oder `right` als horizontale Offset-Kante, zusammen mit dem horizontalen Längen- oder Prozentwert angeben.

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

  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
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

- {{cssxref("mask-image")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask")}} Kurzform
- [CSS Maskierungsmodul](/de/docs/Web/CSS/CSS_masking)
- {{cssxref("background-position")}}
- {{cssxref("&lt;position&gt;")}}
