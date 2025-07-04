---
title: mask-position
slug: Web/CSS/mask-position
l10n:
  sourceCommit: be28a11d9b2f6ab4ad0e5947e72a13ce16d4a6f2
---

{{CSSRef}}

Die **`mask-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Anfangsposition relativ zur Maskenpositionsschicht fest, die durch {{cssxref("mask-origin")}} festgelegt wird, für jedes definierte Maskenbild.

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
  - : Ein, zwei oder vier Werte, die eine 2D-Position darstellen, die die Ränder des Boxelements spezifiziert. Relative oder absolute Offsets können angegeben werden.

## Beschreibung

Die `mask-position` Eigenschaft definiert die Position jeder Maskenschicht. Ein Element kann mehrere Maskenschichten haben. Die Anzahl der Schichten wird durch die Anzahl der durch Kommas getrennten Werte im Wert der Eigenschaft {{cssxref("mask-image")}} bestimmt (selbst `none` Werte erzeugen eine Schicht).

Jeder `mask-position` Wert in der durch Kommas getrennten Werteliste wird mit einer zugehörigen Maskenschicht, wie durch die Liste der `mask-image` Werte definiert, in der Reihenfolge abgeglichen. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist:

- Wenn `mask-position` mehr Werte als mask-image hat, werden die überschüssigen Werte von `mask-position` nicht verwendet.
- Wenn `mask-position` weniger Werte als mask-image hat, werden die `mask-position` Werte wiederholt.

Jeder `mask-position` definiert die Position der zugehörigen Maskenschicht relativ zum zugehörigen {{cssxref("mask-origin")}} Wert. Die `mask-origin` Eigenschaftswerte werden in derselben Reihenfolge mit den `mask-image` Werten abgeglichen, wobei überschüssige `mask-position` Werte ungenutzt bleiben oder `mask-position` Werte wiederholt werden, wenn sie weniger zahlreich sind als die `mask-origin` Werte. Jede Maskenschicht hat daher einen zugehörigen `mask-origin` und `mask-position` Wert.

Wenn kein `mask-origin` festgelegt ist, wird der Standardwert `padding-box` verwendet, was bedeutet, dass der Ursprung jeder `mask-position` die [padding-box](/de/docs/Web/CSS/box-edge#padding-box) des Elements ist.

### Ein-Wert-Syntax

Wenn nur ein `mask-position` Wert angegeben ist, wird der zweite Wert als `center` angenommen. Wenn der Wert ein `<length>` oder `<percentage>` ist, definiert er die Position der Maske entlang der horizontalen Achse, wobei die Maske vertikal innerhalb der Ursprungsbox zentriert wird. Zum Beispiel ist `mask-position: 0%;` gleich `mask-position: 0% center`.

Wenn Sie ein einzelnes Schlüsselwort für die Positionierung verwenden, wird der andere Wert zu `center` aufgelöst. Der Standard von `mask-position` ist `0% 0%`, was gleich `mask-position: top left` ist. Allerdings:

- `mask-position: top;` entspricht `mask-position: top center;`.
- `mask-position: left;` entspricht `mask-position: center left`.
- `mask-position: center;` entspricht `mask-position: center center`.

Wenn der Wert ein {{cssxref("&lt;length&gt;")}}-Wert ist, stellt er die horizontale Position als Offset von der linken Kante der Maskenposition dar. Ein positiver Wert stellt einen nach innen gerichteten Offset von der linken Kante des Boxcontainers dar. Die Position kann außerhalb des Boxelements durch einen negativen Wert gesetzt werden – dies erzeugt einen nach außen gerichteten Offset, der das Objekt außerhalb der linken Kante des Containers platziert.

#### Prozentwerte

Ein {{cssxref("&lt;percentage&gt;")}}-Wert stellt den horizontalen Positionswert der Maske relativ zur Breite des Containers dar, positioniert relativ zur linken Kante. Der Offset ist jedoch nicht vom Maskenrand zur Boxkante. Stattdessen wird die Maskenbilddimension [von der Containerdimension abgezogen](/de/docs/Web/CSS/background-position#regarding_percentages), und dann wird ein Prozentsatz des resultierenden Wertes als direkter Offset von der linken Kante der Box verwendet, was dem gleichen ist wie [Prozentwerte für `background-position`](/de/docs/Web/CSS/background-position#regarding_percentages).

Die Gleichung ist:

`(Containerdimension - Maskendimension) * Positionsprozentsatz = Dimensionsoffsetwert`

Bei einer `100px` breiten Maske und einer `1000px` breiten Ursprungsbox führt die Einstellung `mask-position: 10%;` (entspricht `10% 50%`) dazu, dass die Maske vertikal zentriert `90px` von der linken Kante positioniert ist. Die Gleichung ist `(1000 - 100) * 10% = 90`. Wenn der linke Offset `0%` gewesen wäre, wäre der linke Rand der Maske bündig mit dem linken Rand des Containers (`(1000 - 100) * 0% = 0`).

Wenn der linke Offset `100%` gewesen wäre, würde der rechte Rand der Maske bündig mit dem rechten Rand des Containers sein, da der linke Rand der `100px` breiten Maske `900px` (`(1000 - 100) * 100% = 900`) von der linken Kante des Containers entfernt wäre (die `100px` Maskenbreite plus `900px` Entfernung von der linken Kante bedeutet, dass der rechte Rand `1000px` von der linken Kante, also der rechten Kante des Containers, entfernt wäre).

### Zwei-Werte-Syntax

Eine Zwei-Wert-`<position>`-Angabe spezifiziert die Position des Maskenbilds innerhalb seines Maskenpositionierungsbereichs, wobei Längen- und Prozentwerte Offsets von `links` und `oben` des Bereichs angeben.

Wenn die beiden Werte {{cssxref("&lt;length&gt;")}} Werte, {{cssxref("&lt;percentage&gt;")}} Werte oder das Schlüsselwort `center` sind, repräsentiert der erste Wert die horizontale Position als Offset von der linken Kante des Maskenpositionierungsbereichs, und der zweite Wert stellt die vertikale Position als Offset von deren oberer Kante dar, wobei [Prozentwerte als Offset](#prozentwerte) durch die Größe der Maske in dieser Dimension berücksichtigt werden.

Zusätzlich, wenn {{cssxref("&lt;percentage&gt;")}}-Werte spezifiziert sind, ist der erste Wert auch der horizontale Positionswert relativ zur linken Kante, und der zweite Wert ist auch der vertikale Positionswert relativ zur oberen Kante.

Ein Paar Achsenspezifischer Schlüsselwörter kann umgeordnet werden, ebenso wie ein Achsenspezifisches Schlüsselwort und eine Länge oder ein Prozentsatz, aber zwei Längen- oder Prozentwerte sind nicht austauschbar.
Wenn einer der beiden Werte `oben`, `rechts`, `unten` oder `links` ist, spielt die Reihenfolge der beiden Werte keine Rolle. Jeder `center` oder `<length-percentage>` Wert in dem Wertepaar wird auf die andere Dimension angewendet.

### Vier-Werte-Syntax

Die Vier-Werte-Syntax besteht aus zwei Wertepaaren, wobei jedes Paar ein Schlüsselwort enthält, das die Kante angibt, von der aus das Offset berechnet wird, und einen `<length>` und `<percentage>` Wert, der die Offset-Distanz angibt. Zum Beispiel spezifiziert `mask-position: left 1em top 2em` einen `1em` horizontalen Offset von der linken Boxkante und einen `2em` vertikalen Offset von der oberen Kante. Das Zwei-Wert-Äquivalent wäre `mask-position: 1em 2em`.

Da wir die Offset-Kanten bei der Verwendung der Vier-Werte-Syntax definieren, ist die Reihenfolge nicht wichtig: `mask-position: top 2em left 1em` und `mask-position: left 1em top 2em` ergeben dasselbe Ergebnis.

Die eigentliche Stärke der Vier-Werte-Syntax besteht darin, dass wir Versatzkanten außer `links` und `oben` angeben können. Zum Beispiel erzeugt `mask-position: bottom 10px right 20px` einen `10px` vertikalen Offset nach oben von der unteren Kante und einen `20px` horizontalen Offset nach links von der rechten Kante. Normalerweise wird die Vier-Werte-Syntax verwendet, um von unten und/oder rechts zu offseten. Diese Syntax ist aber auch hilfreich, wenn Sie sich die Reihenfolge der Offsetkanten für die Zwei-Werte-Syntax nicht merken können.

Eins ist anzumerken: Im Gegensatz zu den `<bg-position>` Datentypwerten für {{cssxref("background-position")}}, erlauben die `<position>`-Werte für `mask-position` keine Drei-Werte-Syntax und kein Offset von `center`. Beim Offset der Maske von `unten` oder `rechts` erfordert `mask-position`, dass alle vier Werte deklariert werden.

Um für die Vier-Werte-Syntax gültig zu sein, muss entweder `oben` oder `unten` als vertikale Versatzkante angegeben werden, zusammen mit dem vertikalen Längen- oder Prozentversatzwert, und entweder `links` oder `rechts` als horizontale Versatzkante, zusammen mit dem horizontalen Längen- oder Prozentversatzwert.

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

- {{cssxref("background-position")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask")}} Kurzschrift
- {{cssxref("mask-border")}}
- {{cssxref("mask-border-outset")}}
- [Einführung in CSS-Maskierungen](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Maskenmodul](/de/docs/Web/CSS/CSS_masking)
- {{cssxref("background-position")}}
- {{cssxref("&lt;position&gt;")}}
