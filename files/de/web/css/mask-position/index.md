---
title: mask-position
slug: Web/CSS/mask-position
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Die **`mask-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die anfängliche Position, relativ zur durch {{cssxref("mask-origin")}} festgelegten Maskenpositionsschicht, für jedes definierte Maskenbild fest.

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

Ein oder mehrere `<position>`-Werte, getrennt durch Kommas.

- {{cssxref("&lt;position&gt;")}}
  - : Ein, zwei oder vier Werte, die eine 2D-Position darstellen und die Ränder des Box-Elements angeben. Relative oder absolute Versätze können angegeben werden.

## Beschreibung

Die Eigenschaft `mask-position` definiert die Position jeder Maskenschicht. Ein Element kann mehrere Maskenschichten haben. Die Anzahl der Schichten wird durch die Anzahl der durch Kommas getrennten Werte im Wert der Eigenschaft {{cssxref("mask-image")}} bestimmt (sogar `none`-Werte erzeugen eine Schicht).

Jeder `mask-position`-Wert in der durch Kommas getrennten Liste von Werten wird mit einer zugehörigen Maskenschicht verknüpft, wie sie durch die Liste der `mask-image`-Werte definiert ist, in der Reihenfolge. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist:

- Hat `mask-position` mehr Werte als `mask-image`, werden die überzähligen Werte von `mask-position` nicht verwendet.
- Hat `mask-position` weniger Werte als `mask-image`, werden die `mask-position`-Werte wiederholt.

Jede `mask-position` definiert die Position der zugehörigen Maskenschicht relativ zum zugehörigen Wert von {{cssxref("mask-origin")}}. Die `mask-origin`-Eigenschaftswerte werden ähnlich mit den `mask-image`-Werten verknüpft, in der Reihenfolge, wobei überzählige `mask-position`-Werte ungenutzt bleiben oder `mask-position`-Werte wiederholt werden, wenn sie weniger sind als die `mask-origin`-Werte. Jede Maskenschicht hat daher einen zugehörigen `mask-origin`- und `mask-position`-Wert.

Wenn kein `mask-origin` festgelegt ist, ist der Standardwert `padding-box`, was bedeutet, dass der Ursprung jeder `mask-position` die [padding-box](/de/docs/Web/CSS/box-edge#padding-box) des Elements ist.

### Ein-Wert-Syntax

Wenn nur ein `mask-position`-Wert angegeben ist, wird der zweite Wert als `center` angenommen. Wenn der Wert eine `<length>` oder `<percentage>` ist, definiert er die Position der Maske entlang der horizontalen Achse, wobei die Maske vertikal innerhalb der Ursprung-Box zentriert ist. Zum Beispiel ist `mask-position: 0%;` gleichbedeutend mit `mask-position: 0% center`.

Wenn Sie ein einzelnes Schlüsselwort zur Positionierung verwenden, wird der andere Wert zu `center` aufgelöst. Der Standardwert von `mask-position` ist `0% 0%`, was `mask-position: top left` entspricht. Jedoch:

- `mask-position: top;` ist äquivalent zu `mask-position: top center;`.
- `mask-position: left;` ist äquivalent zu `mask-position: center left`.
- `mask-position: center;` entspricht `mask-position: center center`.

Wenn der Wert ein {{cssxref("&lt;length&gt;")}}-Wert ist, stellt er die horizontale Position als Versatz vom linken Rand der Maskenpositionierung dar. Ein positiver Wert stellt einen inneren Versatz vom linken Rand des Box-Containers dar. Die Position kann außerhalb der Box des Elements mit einem negativen Wert gesetzt werden — dies erzeugt einen äußeren Versatz, der das Element außerhalb des linken Randes des Containers platziert.

#### Prozentwerte

Ein {{cssxref("&lt;percentage&gt;")}}-Wert stellt den horizontalen Positionswert der Maske relativ zur Breite des Containers dar, positioniert relativ zum linken Rand. Der Versatz erfolgt jedoch nicht vom maskierten Rand zum Box-Rand. Stattdessen wird die Maskenbilddimension [von der Containerdimension subtrahiert](/de/docs/Web/CSS/background-position#regarding_percentages), und dann wird ein Prozentsatz des resultierenden Wertes als direkter Versatz vom linken Rand der Box verwendet, was dem gleichen wie [Prozentwerte für `background-position`](/de/docs/Web/CSS/background-position#regarding_percentages) entspricht.

Die Gleichung lautet:

`(Containerdimension - Maskendimension) * Positionsprozentsatz = Dimensionsversatzwert`

Bei einer `100px` breiten Maske und einer `1000px` breiten Ursprung-Box führt das Setzen von `mask-position: 10%;` (entspricht `10% 50%`) dazu, dass die Maske vertikal zentriert in `90px` vom linken Rand positioniert ist. Die Gleichung lautet `(1000 - 100) * 10% = 90`. Wäre der linke Versatz `0%`, würde der linke Rand der Maske bündig mit dem linken Rand des Containers abschließen (`(1000 - 100) * 0% = 0`).

Wäre der linke Versatz `100%`, würde der rechte Rand der Maske bündig mit dem rechten Rand des Containers abschließen, da der linke Rand der `100px` breiten Maske `900px` (`(1000 - 100) * 100% = 900`) vom linken Rand des Containers entfernt wäre (die `100px` Maskenbreite plus `900px` Entfernung vom linken Rand bedeutet, dass der rechte Rand `1000px` vom linken Rand entfernt wäre, was der rechte Rand des Containers ist).

### Zwei-Werte-Syntax

Ein zwei-Wert-`<position>` spezifiziert die Position des Maskenbildes innerhalb seines Maskenpositionierungsbereichs, mit Längen- und Prozentwerten, die Versätze vom `left` und `top` des Bereichs angeben.

Wenn die beiden Werte {{cssxref("&lt;length&gt;")}}-Werte, {{cssxref("&lt;percentage&gt;")}}-Werte oder das Schlüsselwort `center` sind, repräsentiert der erste Wert die horizontale Position als Versatz vom linken Rand des Maskenpositionierungsbereichs, und der zweite Wert repräsentiert die vertikale Position als Versatz von der oberen Kante, wobei [Prozente versetzt](#prozentwerte) durch die Größe der Maske in dieser Dimension sind.

Darüber hinaus, wenn {{cssxref("&lt;percentage&gt;")}}-Werte angegeben sind, ist der erste Wert auch der horizontale Positionswert relativ zum linken Rand, und der zweite Wert ist auch der vertikale Positionswert relativ zum oberen Rand.

Ein Paar von achsenspezifischen Schlüsselwörtern kann umgeordnet werden, ebenso wie ein achsenspezifisches Schlüsselwort und eine Länge oder ein Prozentwert, aber zwei Längen- oder Prozentwerte sind nicht austauschbar. Wenn einer der beiden Werte `top`, `right`, `bottom` oder `left` ist, spielt die Reihenfolge der beiden Werte keine Rolle. Jeder `center`- oder `<length-percentage>`-Wert im Paar der Werte wird auf die andere Dimension angewendet.

### Vier-Werte-Syntax

Die Vier-Werte-Syntax besteht aus zwei Wertepaaren, wobei jedes Paar ein Schlüsselwort enthält, das die Kante angibt, von der der Versatz ausgeht, und ein `<length>`- und `<percentage>`-Wert den Versatzabstand angibt. Zum Beispiel gibt `mask-position: left 1em top 2em` einen `1em` horizontalen Versatz vom linken Boxrand und einen `2em` vertikalen Versatz vom oberen Rand an. Das Zwei-Werte-Äquivalent wäre `mask-position: 1em 2em`.

Da wir die Versatzkanten definieren, wenn wir die Vier-Werte-Syntax verwenden, ist die Reihenfolge nicht wichtig: `mask-position: top 2em left 1em` und `mask-position: left 1em top 2em` ergeben das gleiche Ergebnis.

Der wirkliche Vorteil der Vier-Werte-Syntax ist, dass sie es uns erlaubt, andere Versatzkanten als `left` und `top` anzugeben. Zum Beispiel erzeugt `mask-position: bottom 10px right 20px` einen `10px` vertikalen Versatz nach oben von der unteren Kante und einen `20px` horizontalen Versatz nach links von der rechten Kante. Normalerweise wird die Vier-Werte-Syntax verwendet, um von unten und/oder von rechts zu versetzen. Aber diese Syntax ist auch nützlich, wenn Sie sich die Reihenfolge der Versatzkanten für die Zwei-Werte-Syntax nicht merken können.

Es ist zu beachten, dass im Gegensatz zu den `<bg-position>`-Datentypwerten für {{cssxref("background-position")}} die `<position>`-Werte für `mask-position` keine Drei-Werte-Syntax zulassen und kein Versetzen von `center` erlauben. Beim Versetzen der Maske von `bottom` oder `right` erfordert die `mask-position`, dass alle vier Werte deklariert werden.

Damit die Vier-Werte-Syntax gültig ist, muss sie entweder `top` oder `bottom` als vertikale Versatzkante sowie den vertikalen Längen- oder Prozentwert und entweder `left` oder `right` als horizontale Versatzkante sowie den horizontalen Längen- oder Prozentwert angeben.

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
- {{cssxref("mask")}} Kurzform
- {{cssxref("mask-border")}}
- {{cssxref("mask-border-outset")}}
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS-`mask`-Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklaration mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
- {{cssxref("background-position")}}
- {{cssxref("&lt;position&gt;")}}
