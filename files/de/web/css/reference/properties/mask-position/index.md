---
title: "`mask-position` CSS property"
short-title: mask-position
slug: Web/CSS/Reference/Properties/mask-position
l10n:
  sourceCommit: 6354422058e438a2599e4eab71eaec8eb40850fa
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`mask-position`** legt für jedes definierte Maskenbild die Anfangsposition relativ zur durch {{cssxref("mask-origin")}} festgelegten Maskenpositionierungsebene fest.

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

Diese Eigenschaft wird als durch Kommas getrennte Liste von Werten angegeben. Jeder Wert hat den folgenden Typ:

- {{cssxref("&lt;position&gt;")}}
  - : Ein, zwei oder vier Werte, die eine 2D-Position darstellen und die Kanten der Box des Elements angeben. Relative oder absolute Versätze können angegeben werden.

## Beschreibung

Die Eigenschaft `mask-position` definiert die Position jeder Maskenebene. Auf ein Element können mehrere Maskenebenen angewendet werden. Die Anzahl der Ebenen wird durch die Anzahl der durch Kommas getrennten Werte im Eigenschaftswert von {{cssxref("mask-image")}} bestimmt (auch `none`-Werte erzeugen eine Ebene).

Jeder `mask-position`-Wert in der durch Kommas getrennten Werteliste wird der Reihe nach einer zugehörigen Maskenebene zugeordnet, wie durch die Liste der `mask-image`-Werte definiert. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist:

- Wenn `mask-position` mehr Werte als `mask-image` hat, werden die überschüssigen Werte von `mask-position` nicht verwendet.
- Wenn `mask-position` weniger Werte als `mask-image` hat, werden die `mask-position`-Werte wiederholt.

Jeder `mask-position` definiert die Position der zugehörigen Maskenebene relativ zum zugehörigen {{cssxref("mask-origin")}}-Wert. Die Eigenschaftswerte von `mask-origin` werden ebenfalls der Reihe nach den `mask-image`-Werten zugeordnet; überschüssige `mask-position`-Werte werden nicht verwendet oder `mask-position`-Werte werden wiederholt, wenn ihre Anzahl kleiner ist als die der `mask-origin`-Werte. Jede Maskenebene hat daher einen zugehörigen `mask-origin`- und `mask-position`-Wert.

Wenn kein `mask-origin` festgelegt ist, lautet der Standardwert `padding-box`. Das bedeutet, dass der Ursprung jedes `mask-position` die [padding-box](/de/docs/Web/CSS/Reference/Values/box-edge#padding-box) des Elements ist.

### Syntax mit einem Wert

Wenn nur ein `mask-position`-Wert angegeben ist, wird für den zweiten Wert `center` angenommen. Wenn der Wert ein `<length>` oder `<percentage>` ist, definiert er die Position der Maske entlang der horizontalen Achse, während die Maske innerhalb der Ursprungsbox vertikal zentriert wird. Beispielsweise entspricht `mask-position: 0%;` dem Wert `mask-position: 0% center`.

Wenn Sie ein einzelnes Schlüsselwort für die Positionierung verwenden, wird der andere Wert zu `center` aufgelöst. Der Standardwert von `mask-position` ist `0% 0%`, was `mask-position: top left` entspricht. Allerdings gilt:

- `mask-position: top;` entspricht `mask-position: top center;`.
- `mask-position: left;` entspricht `mask-position: center left`.
- `mask-position: center;` entspricht `mask-position: center center`.

Wenn der Wert ein {{cssxref("&lt;length&gt;")}}-Wert ist, stellt er die horizontale Position als Versatz von der linken Kante der Maskenpositionierung dar. Ein positiver Wert stellt einen nach innen gerichteten Versatz von der linken Kante des Box-Containers dar. Die Position kann mithilfe eines negativen Werts außerhalb der Box des Elements festgelegt werden — dadurch wird ein nach außen gerichteter Versatz erzeugt, der das Element außerhalb der linken Kante des Containers platziert.

#### Prozentwerte

Ein {{cssxref("&lt;percentage&gt;")}}-Wert stellt den horizontalen Positionswert der Maske relativ zur Breite des Containers dar, positioniert relativ zur linken Kante. Der Versatz erfolgt jedoch nicht von der Maskenkante zur Boxkante. Stattdessen wird die Dimension des Maskenbilds [von der Dimension des Containers abgezogen](/de/docs/Web/CSS/Reference/Properties/background-position#regarding_percentages), und anschließend wird ein Prozentsatz des resultierenden Werts als direkter Versatz von der linken Kante der Box verwendet. Dies entspricht den [Prozentwerten für `background-position`](/de/docs/Web/CSS/Reference/Properties/background-position#regarding_percentages).

Die Gleichung lautet:

`(container dimension - mask dimension) * position percentage = dimension offset value`

Bei einer `100px` breiten Maske und einer `1000px` breiten Ursprungsbox führt die Einstellung `mask-position: 10%;` (entspricht `10% 50%`) dazu, dass die Maske vertikal zentriert bei `90px` von der linken Kante positioniert wird. Die Gleichung lautet `(1000 - 100) * 10% = 90`. Wenn der linke Versatz `0%` gewesen wäre, läge die linke Kante der Maske bündig an der linken Seite des Containers (`(1000 - 100) * 0% = 0`).

Wenn der linke Versatz `100%` gewesen wäre, läge die rechte Kante der Maske bündig an der rechten Seite des Containers, da sich die linke Kante der `100px` breiten Maske `900px` (`(1000 - 100) * 100% = 900`) von der linken Kante des Containers befinden würde. Die `100px` Maskenbreite plus der Abstand von `900px` von der linken Kante bedeuten, dass sich die rechte Kante `1000px` von der linken Kante entfernt befände, also an der rechten Kante des Containers.

### Syntax mit zwei Werten

Eine `<position>` mit zwei Werten gibt die Position des Maskenbilds innerhalb seines Maskenpositionierungsbereichs an, wobei Längen- und Prozentwerte Versätze von `left` und `top` des Bereichs festlegen.

Wenn die beiden Werte {{cssxref("&lt;length&gt;")}}-Werte, {{cssxref("&lt;percentage&gt;")}}-Werte oder das Schlüsselwort `center` sind, stellt der erste Wert die horizontale Position als Versatz von der linken Kante des Maskenpositionierungsbereichs dar, und der zweite Wert stellt die vertikale Position als Versatz von dessen oberer Kante dar. Dabei werden [Prozentwerte](#prozentwerte) um die Größe der Maske in dieser Dimension versetzt.

Wenn außerdem {{cssxref("&lt;percentage&gt;")}}-Werte angegeben sind, ist der erste Wert auch der horizontale Positionswert relativ zur linken Kante und der zweite Wert auch der vertikale Positionswert relativ zur oberen Kante.

Ein Paar achsenspezifischer Schlüsselwörter kann umgeordnet werden, ebenso wie ein achsenspezifisches Schlüsselwort und ein Längen- oder Prozentwert. Zwei Längen- oder Prozentwerte sind jedoch nicht austauschbar.
Wenn einer der beiden Werte `top`, `right`, `bottom` oder `left` ist, spielt die Reihenfolge der beiden Werte keine Rolle. Jeder `center`- oder `<length-percentage>`-Wert im Wertepaar wird auf die andere Dimension angewendet.

### Syntax mit vier Werten

Die Syntax mit vier Werten besteht aus zwei Wertepaaren. Jedes Paar enthält ein Schlüsselwort, das die Kante angibt, von der der Versatz erfolgt, sowie einen `<length>`- und `<percentage>`-Wert, der die Versatzdistanz angibt. Beispielsweise gibt `mask-position: left 1em top 2em` einen horizontalen Versatz von `1em` von der linken Boxkante und einen vertikalen Versatz von `2em` von der oberen Kante an. Das Äquivalent mit zwei Werten wäre `mask-position: 1em 2em`.

Da bei der Syntax mit vier Werten die Versatzkanten definiert werden, ist die Reihenfolge nicht wichtig: `mask-position: top 2em left 1em` und `mask-position: left 1em top 2em` erzeugen beide dasselbe Ergebnis.

Die eigentliche Stärke der Syntax mit vier Werten besteht darin, dass Sie andere Versatzkanten als `left` und `top` angeben können. Beispielsweise erzeugt `mask-position:  bottom 10px right 20px` einen vertikalen Versatz von `10px` nach oben von der unteren Kante und einen horizontalen Versatz von `20px` nach links von der rechten Kante. Üblicherweise wird die Syntax mit vier Werten verwendet, um einen Versatz von unten und/oder rechts festzulegen. Diese Syntax ist aber auch hilfreich, wenn Sie sich nicht an die Reihenfolge der Versatzkanten für die Syntax mit zwei Werten erinnern können.

Zu beachten ist, dass die `<position>`-Werte für `mask-position` im Gegensatz zu den Werten des Datentyps `<bg-position>` für {{cssxref("background-position")}} keine Syntax mit drei Werten erlauben und keinen Versatz von `center` erlauben. Beim Versetzen der Maske von `bottom` oder `right` erfordert `mask-position`, dass alle vier Werte angegeben werden.

Damit die Syntax mit vier Werten gültig ist, muss entweder `top` oder `bottom` als vertikale Versatzkante zusammen mit dem vertikalen Längen- oder Prozentversatzwert angegeben werden sowie entweder `left` oder `right` als horizontale Versatzkante zusammen mit dem horizontalen Längen- oder Prozentversatzwert.

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
- {{cssxref("mask")}}-Kurzform
- {{cssxref("mask-border")}}
- {{cssxref("mask-border-outset")}}
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS-`mask`-Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Mehrere Masken deklarieren](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- [CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking)-Modul
- {{cssxref("background-position")}}
- {{cssxref("&lt;position&gt;")}}
