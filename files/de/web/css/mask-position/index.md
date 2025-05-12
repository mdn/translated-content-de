---
title: mask-position
slug: Web/CSS/mask-position
l10n:
  sourceCommit: e3cad6741f1c4366cc523130a7a33d0f7ff6c768
---

{{CSSRef}}

Die **`mask-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Anfangsposition relativ zur durch {{cssxref("mask-origin")}} definierten Maskenpositionsebene für jedes definierte Maskenbild fest.

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

Ein oder mehrere `<position>` Werte, durch Kommas getrennt.

- {{cssxref("&lt;position&gt;")}}
  - : Einer, zwei oder vier Werte repräsentieren eine 2D-Position und geben die Kanten des Box-Elements an. Relative oder absolute Offsets können angegeben werden.

## Beschreibung

Die `mask-position` Eigenschaft definiert die Position jeder Maskenschicht. Ein Element kann mehrere Maskenschichten haben. Die Anzahl der Schichten wird durch die Anzahl der kommagetrennten Werte in der {{cssxref("mask-image")}} Eigenschaft bestimmt (auch `none` Werte erzeugen eine Schicht).

Jeder `mask-position` Wert in der Liste der kommagetrennten Werte wird der entsprechenden Maskierungsschicht zugeordnet, wie durch die Liste der `mask-image` Werte definiert. Wenn die Anzahl der Werte in den beiden Eigenschaften abweicht:

- Wenn `mask-position` mehr Werte als mask-image enthält, werden die überzähligen `mask-position` Werte nicht verwendet.
- Wenn `mask-position` weniger Werte als mask-image enthält, werden die `mask-position` Werte wiederholt.

Jede `mask-position` definiert die Position der zugehörigen Maskenschicht relativ zum zugehörigen {{cssxref("mask-origin")}} Wert. Die `mask-origin` Eigenschaftswerte werden ähnlich mit den `mask-image` Werten in der angegebenen Reihenfolge abgeglichen, wobei überzählige `mask-position` Werte nicht verwendet werden oder `mask-position` Werte wiederholt werden, wenn sie in geringerer Anzahl vorhanden sind als die `mask-origin` Werte. Jede Maskenschicht hat daher einen zugeordneten `mask-origin` und `mask-position` Wert.

Wenn kein `mask-origin` eingestellt ist, ist der Standardwert `padding-box`, was bedeutet, dass der Ursprung jeder `mask-position` der [padding-box](/de/docs/Web/CSS/box-edge#padding-box) des Elements ist.

### Einwertsyntax

Wenn nur ein `mask-position` Wert angegeben ist, wird der zweite Wert als `center` angenommen. Wenn der Wert ein `<length>` oder `<percentage>` ist, definiert er die Position der Maske entlang der horizontalen Achse, wobei die Maske vertikal innerhalb des Ursprungsrahmens zentriert ist. Zum Beispiel entspricht `mask-position: 0%;` `mask-position: 0% center`.

Wenn Sie ein einzelnes Schlüsselwort für die Positionierung verwenden, wird der andere Wert zu `center`. Der Standard von `mask-position` ist `0% 0%`, was `mask-position: top left` entspricht. Allerdings:

- `mask-position: top;` ist gleichbedeutend mit `mask-position: top center;`.
- `mask-position: left;` ist gleichbedeutend mit `mask-position: center left`.
- `mask-position: center;` ist gleichbedeutend mit `mask-position: center center`.

Wenn der Wert ein {{cssxref("&lt;length&gt;")}} ist, stellt dieser die horizontale Position als Offset von der linken Kante der Maskenpositionierung dar. Ein positiver Wert stellt ein inneres Offset von der linken Kante des Box-Containers dar. Die Position kann außerhalb der Box des Elements mit einem negativen Wert festgelegt werden — dies erzeugt ein äußeres Offset, das das Element außerhalb der linken Kante des Containers platziert.

#### Prozentwerte

Ein {{cssxref("&lt;percentage&gt;")}} Wert repräsentiert den horizontalen Positionswert der Maske relativ zur Breite des Containers, positioniert relativ zur linken Kante. Das Offset erfolgt jedoch nicht von der Maskenkante bis zur Boxkannte. Stattdessen wird das Maß der Maskenbilddimension von der Containerabmessung [subtrahiert](/de/docs/Web/CSS/background-position#regarding_percentages), und dann wird ein Prozentsatz des resultierenden Wertes als das direkte Offset von der linken Kante des Boxs verwendet, was den gleichen Prozess wie bei [Prozentwerten für `background-position`](/de/docs/Web/CSS/background-position#regarding_percentages) darstellt.

Die Gleichung ist:

`(Containerdimension - Maskendimension) * Positionsprozentsatz = Dimensionsoffsetwert`

Bei einer `100px` breiten Maske und einer `1000px` breiten Ursprungsbox führt das Einstellen von `mask-position: 10%;` (entspricht `10% 50%`) dazu, dass die Maske vertikal zentriert in `90px` von der linken Kante positioniert wird. Die Gleichung ist `(1000 - 100) * 10% = 90`. Wenn das linke Offset `0%` gewesen wäre, würde die linke Kante der Maske bündig mit der linken Seite des Containers liegen (`(1000 - 100) * 0% = 0`).

Wenn das linke Offset `100%` gewesen wäre, würde die rechte Kante der Maske bündig mit der rechten Seite des Containers liegen, da die linke Kante der `100px` breiten Maske `900px` (`(1000 - 100) * 100% = 900`) von der linken Kante des Containers entfernt wäre (die `100px` Maskenbreite plus `900px` Abstand von der linken Kante meint, die rechte Kante wäre `1000px` von der linken Seite entfernt, was die rechte Kante des Containers ist).

### Zweiwertsyntax

Ein Zweiwert-`<position>` gibt die Position des Maskenbilds innerhalb seines Maskenpositionierungsbereichs an, wobei Längen- und Prozentwerte Offsets von `left` und `top` des Bereichs angeben.

Wenn die zwei Werte {{cssxref("&lt;length&gt;")}} Werte, {{cssxref("&lt;percentage&gt;")}} Werte oder das Schlüsselwort `center` sind, repräsentiert der erste Wert die horizontale Position als Offset von der linken Kante des Maskenpositionierungsbereichs, und der zweite Wert repräsentiert die vertikale Position als Offset von seiner oberen Kante, wobei [Prozentsätze durch die Größe der Maske in dieser Dimension angepasst werden](#percentage-values).

Zusätzlich, wenn {{cssxref("&lt;percentage&gt;")}} Werte angegeben sind, ist der erste Wert auch der horizontale Positionswert relativ zur linken Kante, und der zweite Wert ist auch der vertikale Positionswert relativ zur oberen Kante.

Ein Paar achsspezifischer Schlüsselwörter kann umgestellt werden, ebenso wie ein achsspezifisches Schlüsselwort mit einer Länge oder einem Prozentsatz, aber zwei Längen- oder Prozentsatzwerte sind nicht austauschbar.
Wenn einer der beiden Werte `top`, `right`, `bottom` oder `left` ist, spielt die Reihenfolge der beiden Werte keine Rolle. Jeder `center` oder `<length-percentage>` Wert im Paar wird auf die andere Dimension angewendet.

### Vierwertsyntax

Die Vierwertsyntax besteht aus zwei Wertepaaren, wobei jedes Paar ein Schlüsselwort zur Spezifizierung der Kante, von der aus offsetiert wird, und einen `<length>` und `<percentage>` Wert enthält, die die Offset-Distanz angeben. Zum Beispiel, `mask-position: left 1em top 2em` gibt ein horizontales Offset von `1em` an der linken Boxkante und ein vertikales Offset von `2em` an der oberen Kante an. Das Äquivalent mit zwei Werten wäre `mask-position: 1em 2em`.

Da wir die Offset-Kanten beim Verwenden der Vierwertsyntax definieren, ist die Reihenfolge nicht wichtig: `mask-position: top 2em left 1em` und `mask-position: left 1em top 2em` erzeugen dasselbe Ergebnis.

Die wirkliche Stärke der Vierwertsyntax besteht darin, dass sie es uns ermöglicht, andere Offset-Kanten als `left` und `top` zu spezifizieren. Zum Beispiel, `mask-position: bottom 10px right 20px` erzeugt ein vertikales Offset von `10px` nach oben von der unteren Kante und ein horizontales Offset von `20px` nach links von der rechten Kante. Normalerweise wird die Vierwertsyntax verwendet, um von unten und/oder rechts abzuoffseten. Aber diese Syntax ist auch hilfreich, wenn Sie sich nicht die Reihenfolge der Offset-Kanten für die Zweiwertsyntax merken können.

Ein Punkt, den es zu beachten gilt, ist, dass im Gegensatz zu den `<bg-position>` Datentypwerten für {{cssxref("background-position")}}, die `<position>` Werte für `mask-position` keine 3-Wert-Syntax erlauben und kein Offset von `center` erlauben. Beim Offset der Maske von `bottom` oder `right` erfordert die `mask-position`, dass alle vier Werte deklariert sind.

Damit die Vierwertsyntax gültig ist, muss sie entweder `top` oder `bottom` als die vertikale Offset-Kante spezifizieren, zusammen mit dem vertikalen Länge- oder Prozentsatz-Offsetwert, und entweder `left` oder `right` als die horizontale Offset-Kante, zusammen mit dem horizontalen Länge- oder Prozentsatz-Offsetwert.

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
- [CSS Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
- {{cssxref("background-position")}}
- {{cssxref("&lt;position&gt;")}}
