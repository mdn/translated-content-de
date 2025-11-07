---
title: mask-position
slug: Web/CSS/Reference/Properties/mask-position
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`mask-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Anfangsposition relativ zur Maske-Positionsebene, die durch {{cssxref("mask-origin")}} festgelegt wird, für jedes definierte Maskenbild fest.

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

Einer oder mehrere `<position>` Werte, getrennt durch Kommas.

- {{cssxref("&lt;position&gt;")}}
  - : Ein, zwei oder vier Werte, die eine 2D-Position darstellen, die die Kanten des Elements beschreibt. Es können relative oder absolute Offsets angegeben werden.

## Beschreibung

Die `mask-position` Eigenschaft definiert die Position jeder Maskenschicht. Ein Element kann mehrere Maskenschichten haben. Die Anzahl der Schichten wird durch die Anzahl der durch Kommas getrennten Werte im {{cssxref("mask-image")}} Eigenschaftswert bestimmt (sogar `none` Werte erzeugen eine Schicht).

Jeder `mask-position` Wert in der Liste mit durch Kommas getrennten Werten wird mit einer zugeordneten Maskenschicht abgeglichen, wie sie durch die Liste der `mask-image` Werte in Reihenfolge definiert ist. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist:

- Wenn `mask-position` mehr Werte hat als mask-image, werden die überschüssigen Werte von `mask-position` nicht verwendet.
- Wenn `mask-position` weniger Werte hat als mask-image, werden die `mask-position` Werte wiederholt.

Jeder `mask-position` definiert die Position der zugehörigen Maskenschicht relativ zum zugehörigen {{cssxref("mask-origin")}} Wert. Die `mask-origin` Eigenschaftswerte werden in derselben Weise wie die `mask-image` Werte in Reihenfolge abgeglichen, wobei überschüssige `mask-position` Werte ungenutzt bleiben oder `mask-position` Werte wiederholt werden, wenn sie weniger sind als die `mask-origin` Werte. Jede Maskenschicht hat daher einen zugeordneten `mask-origin` und `mask-position` Wert.

Wenn kein `mask-origin` festgelegt ist, lautet der Standardwert `padding-box`, was bedeutet, dass der Ursprung jeder `mask-position` die [padding-box](/de/docs/Web/CSS/Reference/Values/box-edge#padding-box) des Elements ist.

### Ein-Wert-Syntax

Wenn nur ein `mask-position` Wert angegeben wird, wird der zweite Wert als `center` angenommen. Wenn der Wert ein `<length>` oder `<percentage>` ist, definiert er die Position der Maske entlang der horizontalen Achse, wobei die Maske vertikal innerhalb der Ursprungskiste zentriert wird. Zum Beispiel ist `mask-position: 0%;` gleich `mask-position: 0% center`.

Wenn Sie ein einzelnes Schlüsselwort zur Positionierung verwenden, wird der andere Wert zu `center`. Der Standard von `mask-position` ist `0% 0%`, was `mask-position: top left` entspricht. Jedoch:

- `mask-position: top;` entspricht `mask-position: top center;`.
- `mask-position: left;` entspricht `mask-position: center left`.
- `mask-position: center;` ist gleich `mask-position: center center`.

Wenn der Wert ein {{cssxref("&lt;length&gt;")}} Wert ist, repräsentiert er die horizontale Position als Offset vom linken Rand der Maskierung. Ein positiver Wert repräsentiert ein inneres Offset vom linken Rand des Boxcontainers. Die Position kann außerhalb der Box des Elements mit einem negativen Wert gesetzt werden - dies erzeugt ein nach außen gerichtetes Offset, das das Element außerhalb des linken Randes des Containers platziert.

#### Prozentwerte

Ein {{cssxref("&lt;percentage&gt;")}} Wert repräsentiert den horizontalen Positionswert der Maske relativ zur Breite des Containers, relativ zum linken Rand positioniert. Das Offset ist jedoch nicht von der Maskenkante zum Boxrand. Stattdessen wird die Maskenbilddimension [von der Dimension des Containers subtrahiert](/de/docs/Web/CSS/Reference/Properties/background-position#regarding_percentages), und dann wird ein Prozentsatz des resultierenden Werts als direktes Offset vom linken Boxrand verwendet, was dem [Prozentwerten bei `background-position`](/de/docs/Web/CSS/Reference/Properties/background-position#regarding_percentages) entspricht.

Die Gleichung lautet:

`(Container-Dimension - Masken-Dimension) * Positionsprozentsatz = Dimensions-Offset-Wert`

Angenommen, eine `100px` breite Maske und eine `1000px` breite Ursprungskiste, setzt `mask-position: 10%;` (das Äquivalent von `10% 50%`) die Maske vertikal zentriert bei `90px` vom linken Rand. Die Gleichung ist `(1000 - 100) * 10% = 90`. Wenn das linke Offset `0%` gewesen wäre, wäre die linke Kante der Maske bündig mit dem linken Rand des Containers (`(1000 - 100) * 0% = 0`).

Wenn das linke Offset `100%` gewesen wäre, wäre die rechte Kante der Maske bündig mit dem rechten Rand des Containers, da die linke Kante der `100px` breiten Maske `900px` (`(1000 - 100) * 100% = 900`) vom linken Rand des Containers entfernt wäre (die `100px` Maskenbreite plus `900px` Abstand vom linken Rand bedeutet, dass die rechte Kante `1000px` vom linken Rand entfernt wäre, was dem rechten Rand des Containers entspricht).

### Zwei-Wert-Syntax

Ein Zwei-Wert `<position>` spezifiziert die Position des Maskenbilds innerhalb seines Maskenpositionierungsbereichs, wobei Längen- und Prozentwerte Offsets vom `left` und `top` des Bereichs spezifizieren.

Wenn die beiden Werte {{cssxref("&lt;length&gt;")}} Werte, {{cssxref("&lt;percentage&gt;")}} Werte oder das Schlüsselwort `center` sind, repräsentiert der erste Wert die horizontale Position als Offset vom linken Rand des Maskenpositionierungsbereichs, und der zweite Wert repräsentiert die vertikale Position als Offset von dessen oberen Rand, wobei [Prozentsätze nach Offset](#prozentwerte) durch die Größe der Maske in dieser Dimension versetzt werden.

Darüber hinaus, wenn {{cssxref("&lt;percentage&gt;")}} Werte festgelegt sind, ist der erste Wert der horizontale Positionswert relativ zum linken Rand, und der zweite Wert ist der vertikale Positionswert relativ zum oberen Rand.

Ein Paar achsenspezifischer Schlüsselwörter kann umgeordnet werden, ebenso ein achsenspezifisches Schlüsselwort und eine Länge oder ein Prozentsatz, aber zwei Längen- oder Prozentwerte sind nicht austauschbar. Wenn einer der beiden Werte `top`, `right`, `bottom` oder `left` ist, spielt die Reihenfolge der beiden Werte keine Rolle. Jeder `center` oder `<length-percentage>` Wert im Wertepaar wird auf die andere Dimension angewendet.

### Vier-Wert-Syntax

Die Vier-Wert-Syntax besteht aus zwei Wertepaaren, wobei jedes Paar ein Schlüsselwort enthält, das die Kante angibt, von der der Offset ausgeht, und einen `<length>` bzw. `<percentage>` Wert, der den Offset-Abstand angibt. Zum Beispiel spezifiziert `mask-position: left 1em top 2em` einen `1em` horizontalen Offset vom linken Boxrand und einen `2em` vertikalen Offset vom oberen Rand. Das Zwei-Wert-Äquivalent wäre `mask-position: 1em 2em`.

Da wir die Offset-Kanten bei Verwendung der Vier-Wert-Syntax definieren, ist die Reihenfolge nicht wichtig: `mask-position: top 2em left 1em` und `mask-position: left 1em top 2em` ergeben dasselbe Ergebnis.

Die eigentliche Stärke der Vier-Wert-Syntax besteht darin, dass sie es uns ermöglicht, andere Offset-Kanten als `left` und `top` anzugeben. Zum Beispiel erzeugt `mask-position: bottom 10px right 20px` einen `10px` vertikalen Offset nach oben von der unteren Kante und einen `20px` horizontalen Offset nach links von der rechten Kante. Üblicherweise wird die Vier-Wert-Syntax verwendet, um vom unteren und/oder rechten Rand zu versetzen. Doch diese Syntax ist auch hilfreich, wenn Sie sich die Offset-Kantenreihenfolge für die Zwei-Wert-Syntax nicht merken können.

Eine Sache ist zu beachten, dass im Gegensatz zu den `<bg-position>` Datentypwerten für {{cssxref("background-position")}}, die `<position>` Werte für `mask-position` keine Drei-Wert-Syntax zulassen und kein Offset vom `center` erlauben. Wenn die Maske von `bottom` oder `right` abgesetzt wird, müssen bei der `mask-position` alle vier Werte deklariert werden.

Damit die Vier-Wert-Syntax gültig ist, muss sie entweder `top` oder `bottom` als vertikale Offset-Kante angeben, zusammen mit dem vertikalen Längen- oder Prozent-Offset-Wert, und entweder `left` oder `right` als horizontale Offset-Kante, zusammen mit dem horizontalen Längen- oder Prozent-Offset-Wert.

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
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Mehrere Masken deklarieren](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
- {{cssxref("background-position")}}
- {{cssxref("&lt;position&gt;")}}
