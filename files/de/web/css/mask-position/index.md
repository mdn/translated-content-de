---
title: mask-position
slug: Web/CSS/mask-position
l10n:
  sourceCommit: 14e9ec66f59c8c97242e9863b2d19902522638ae
---

{{CSSRef}}

Die **`mask-position`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die anfängliche Position relativ zur Maskenpositions-Ebene fest, die durch {{cssxref("mask-origin")}} erstellt wurde, für jedes definierte Maskenbild.

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
  - : Ein, zwei oder vier Werte, die eine 2D-Position repräsentieren und die Ränder des Box-Elements spezifizieren. Relative oder absolute Verschiebungen können angegeben werden.

## Beschreibung

Die `mask-position`-Eigenschaft definiert die Position jeder Maskenebene. Ein Element kann mehrere angewendete Maskenebenen haben. Die Anzahl der Ebenen wird durch die Anzahl der kommagetrennten Werte in der {{cssxref("mask-image")}}-Eigenschaft bestimmt (sogar `none`-Werte erzeugen eine Ebene).

Jeder `mask-position`-Wert in der kommagetrennten Liste von Werten wird mit einer zugeordneten Maskenebene abgeglichen, wie in der Liste der `mask-image`-Werte definiert. Wenn sich die Anzahl der Werte in den beiden Eigenschaften unterscheidet:

- Wenn `mask-position` mehr Werte hat als `mask-image`, werden die überzähligen Werte von `mask-position` nicht verwendet.
- Wenn `mask-position` weniger Werte hat als `mask-image`, werden die `mask-position`-Werte wiederholt.

Jeder `mask-position` definiert die Position der zugeordneten Maskenebene relativ zu dem zugeordneten {{cssxref("mask-origin")}}-Wert. Die `mask-origin`-Eigenschaftswerte werden in gleicher Weise mit den `mask-image`-Werten abgeglichen, mit überzähligen `mask-position`-Werten, die ungenutzt bleiben, oder `mask-position`-Werten, die wiederholt werden, wenn sie weniger zahlreich als die `mask-origin`-Werte sind. Jede Maskenebene hat daher einen zugeordneten `mask-origin`- und `mask-position`-Wert.

Falls kein `mask-origin` gesetzt ist, lautet der Standardwert `padding-box`, was bedeutet, dass der Ursprung jeder `mask-position` die [padding-box](/de/docs/Web/CSS/box-edge#padding-box) des Elements ist.

### Ein-Wert-Syntax

Wenn nur ein `mask-position`-Wert angegeben ist, wird der zweite Wert als `center` angenommen. Wenn der Wert ein `<length>` oder `<percentage>` ist, definiert er die Position der Maske entlang der horizontalen Achse, wobei die Maske vertikal innerhalb der Ursprungsbox zentriert ist. Zum Beispiel entspricht `mask-position: 0%;` `mask-position: 0% center`.

Wenn Sie ein Einzel-Schlüsselwort für die Positionierung verwenden, wird der andere Wert zu `center` aufgelöst. Der Standard von `mask-position` ist `0% 0%`, was `mask-position: top left` entspricht. Jedoch:

- `mask-position: top;` entspricht `mask-position: top center;`.
- `mask-position: left;` entspricht `mask-position: center left`.
- `mask-position: center;` entspricht `mask-position: center center`.

Wenn der Wert ein {{cssxref("&lt;length&gt;")}}-Wert ist, repräsentiert er die horizontale Position als Verschiebung vom linken Rand der Maskenpositionierung. Ein positiver Wert stellt eine Verschiebung von innen vom linken Rand des Box-Containers dar. Die Position kann außerhalb der Box des Elements durch einen negativen Wert eingestellt werden - dies erzeugt eine äußere Verschiebung, die das Element außerhalb des linken Rands des Containers platziert.

#### Prozentwerte

Ein {{cssxref("&lt;percentage&gt;")}}-Wert repräsentiert den horizontalen Positionswert der Maske relativ zur Breite des Containers, relativ zum linken Rand platziert. Die Verschiebung erfolgt jedoch nicht vom Rand der Maske zum Box-Rand. Stattdessen wird die Dimension des Maskenbilds [von der Dimension des Containers abgezogen](/de/docs/Web/CSS/background-position#regarding_percentages), und dann wird ein Prozentsatz des resultierenden Werts als direkte Verschiebung vom linken Rand der Box verwendet, was den [Prozentwerten von `background-position`](/de/docs/Web/CSS/background-position#regarding_percentages) entspricht.

Die Gleichung lautet:

`(Container-Dimension - Masken-Dimension) * Positionsprozentsatz = Dimensionsverschiebungswert`

Bei einer `100px` breiten Maske und einer `1000px` breiten Ursprungsbox führt das Setzen von `mask-position: 10%;` (entspricht `10% 50%`) dazu, dass die Maske vertikal zentriert bei `90px` vom linken Rand sitzt. Die Gleichung ist `(1000 - 100) * 10% = 90`. Wenn die linke Verschiebung `0%` gewesen wäre, würde der linke Rand der Maske bündig mit dem linken Rand des Containers sein (`(1000 - 100) * 0% = 0`).

Wenn die linke Verschiebung `100%` gewesen wäre, würde der rechte Rand der Maske bündig mit dem rechten Rand des Containers sein, da der linke Rand der `100px` breiten Maske `900px` (`(1000 - 100) * 100% = 900`) vom linken Rand des Containers entfernt wäre (die `100px` Maskenbreite plus `900px` Abstand vom linken Rand bedeutet, dass der rechte Rand `1000px` vom linken Rand entfernt wäre, was der rechte Rand des Containers ist).

### Zwei-Werte-Syntax

Ein Zwei-Werte-`<position>` spezifiziert die Position des Maskenbilds innerhalb seines Maskenpositionierungsbereichs, wobei Längen- und Prozentwerte Verschiebungen vom `left` und `top` des Bereichs angeben.

Wenn die beiden Werte {{cssxref("&lt;length&gt;")}}-Werte, {{cssxref("&lt;percentage&gt;")}}-Werte oder das Schlüsselwort `center` sind, repräsentiert der erste Wert die horizontale Position als Verschiebung vom linken Rand des Maskenpositionierungsbereichs, und der zweite Wert repräsentiert die vertikale Position als Verschiebung von der oberen Kante, wobei [Prozentsätze durch die Größe der Maske in dieser Dimension verschoben werden](#prozentwerte).

Darüber hinaus, wenn {{cssxref("&lt;percentage&gt;")}}-Werte angegeben sind, ist der erste Wert auch der horizontale Positionswert relativ zum linken Rand, und der zweite Wert ist auch der vertikale Positionswert relativ zur oberen Kante.

Ein Paar von achsenspezifischen Schlüsselwörtern kann umgeordnet werden, ebenso wie ein achsenspezifisches Schlüsselwort und eine Länge oder ein Prozentsatz, aber zwei Längen- oder Prozentwerte sind nicht austauschbar.
Wenn einer der beiden Werte `top`, `right`, `bottom` oder `left` ist, spielt die Reihenfolge der beiden Werte keine Rolle. Jeder `center`- oder `<length-percentage>`-Wert im Wertepaar wird auf die andere Dimension angewendet.

### Vier-Werte-Syntax

Die Vier-Werte-Syntax besteht aus zwei Wertepaaren, jedes Paar enthält ein Schlüsselwort, das die Versatzkante angibt, und einen `<length>`- und `<percentage>`-Wert, der die Versatzdistanz angibt. Zum Beispiel gibt `mask-position: left 1em top 2em` einen horizontalen Versatz von `1em` vom linken Boxrand und einen vertikalen Versatz von `2em` vom oberen Rand an. Das Zwei-Werte-Äquivalent wäre `mask-position: 1em 2em`.

Da wir die Versatzkanten bei Verwendung der Vier-Werte-Syntax definieren, ist die Reihenfolge nicht wichtig: `mask-position: top 2em left 1em` und `mask-position: left 1em top 2em` erzeugen beide dasselbe Ergebnis.

Die wahre Stärke der Vier-Werte-Syntax liegt darin, dass sie es uns ermöglicht, andere als `left` und `top` Versatzkanten zu spezifizieren. Zum Beispiel erzeugt `mask-position: bottom 10px right 20px` einen vertikalen Versatz von `10px` nach oben vom unteren Rand und einen horizontalen Versatz von `20px` nach links vom rechten Rand. Normalerweise wird die Vier-Werte-Syntax verwendet, um vom unteren und/oder rechten Rand zu versetzen. Aber diese Syntax ist auch hilfreich, wenn Sie sich nicht an die Reihenfolge der Versatzkanten für die Zwei-Werte-Syntax erinnern können.

Es sei angemerkt, dass im Gegensatz zu den `<bg-position>`-Datentypen für {{cssxref("background-position")}}, die `<position>`-Werte für `mask-position` keine Drei-Werte-Syntax erlauben und keine Versetzung von `center` erlauben. Beim Versetzen der Maske von `bottom` oder `right` erfordert `mask-position`, dass alle vier Werte deklariert werden.

Damit die Vier-Werte-Syntax gültig ist, muss entweder `top` oder `bottom` als vertikale Versatzkante zusammen mit dem vertikalen Längen- oder Prozentsatz-Versatzwert und entweder `left` oder `right` als horizontale Versatzkante zusammen mit dem horizontalen Längen- oder Prozentsatz-Versatzwert angegeben werden.

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
- {{cssxref("mask")}} Shorthand
- [CSS Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
- {{cssxref("background-position")}}
- {{cssxref("&lt;position&gt;")}}
