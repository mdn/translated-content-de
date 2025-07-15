---
title: mask-position
slug: Web/CSS/mask-position
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`mask-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Anfangsposition relativ zur Maskenpositionsebene, die durch {{cssxref("mask-origin")}} festgelegt ist, für jedes definierte Maskenbild fest.

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

Einer oder mehrere `<position>` Werte, getrennt durch Kommata.

- {{cssxref("&lt;position&gt;")}}
  - : Ein, zwei oder vier Werte, die eine 2D-Position repräsentieren, welche die Kanten des Box-Elements spezifiziert. Relative oder absolute Offsets können angegeben werden.

## Beschreibung

Die `mask-position` Eigenschaft definiert die Position jeder Maskenebene. Ein Element kann mehrere Maskenebenen haben. Die Anzahl der Ebenen wird durch die Anzahl der durch Kommata getrennten Werte im {{cssxref("mask-image")}} Eigenschaftswert bestimmt (sogar `none`-Werte erzeugen eine Ebene).

Jeder Wert von `mask-position` in der durch Kommata getrennten Liste der Werte wird mit einer zugeordneten Maskenebene, wie durch die Liste der `mask-image` Werte definiert, in der Reihenfolge abgeglichen. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist:

- Hat `mask-position` mehr Werte als mask-image, werden die überschüssigen Werte von `mask-position` nicht verwendet.
- Hat `mask-position` weniger Werte als mask-image, werden die `mask-position` Werte wiederholt.

Jeder `mask-position` definiert die Position der zugeordneten Maskenebene relativ zum zugeordneten {{cssxref("mask-origin")}} Wert. Die `mask-origin` Eigenschaftswerte werden in der Reihenfolge mit den `mask-image` Werten abgeglichen, wobei überschüssige `mask-position` Werte nicht verwendet oder `mask-position` Werte wiederholt werden, falls sie weniger zahlreich sind als die `mask-origin` Werte. Jede Maskenebene hat daher einen zugeordneten `mask-origin` und `mask-position` Wert.

Wenn kein `mask-origin` festgelegt ist, lautet der Standardwert `padding-box`, was bedeutet, dass der Ursprung jeder `mask-position` die [padding-box](/de/docs/Web/CSS/box-edge#padding-box) des Elements ist.

### Ein-Wert-Syntax

Wenn nur ein `mask-position` Wert angegeben ist, wird der zweite Wert als `center` angenommen. Wenn der Wert ein `<length>` oder `<percentage>` ist, definiert er die Position der Maske entlang der horizontalen Achse, wobei die Maske vertikal innerhalb der Ursprungsbox zentriert ist. Zum Beispiel, `mask-position: 0%;` entspricht `mask-position: 0% center`.

Wenn Sie ein einzelnes Schlüsselwort zur Positionierung verwenden, wird der andere Wert auf `center` aufgelöst. Der Standard von `mask-position` ist `0% 0%`, was `mask-position: top left` entspricht. Jedoch:

- `mask-position: top;` ist gleichbedeutend mit `mask-position: top center;`.
- `mask-position: left;` ist gleichbedeutend mit `mask-position: center left`.
- `mask-position: center;` entspricht `mask-position: center center`.

Wenn der Wert ein {{cssxref("&lt;length&gt;")}} Wert ist, stellt er die horizontale Position als ein Offset von der linken Kante der Maskenpositionierung dar. Ein positiver Wert repräsentiert ein Inward-Offset von der linken Kante des Box-Containers. Die Position kann außerhalb der Box des Elements unter Verwendung eines negativen Wertes gesetzt werden – dies erzeugt ein Outward-Offset, das das Element außerhalb der linken Kante des Containers platziert.

#### Prozentwerte

Ein {{cssxref("&lt;percentage&gt;")}} Wert stellt den horizontalen Positionswert der Maske relativ zur Breite des Containers dar, positioniert relativ zur linken Kante. Jedoch ist das Offset nicht von der Maskenkante zur Box-Kante. Stattdessen wird die Maskenbilddimension [von der Dimension des Containers subtrahiert](/de/docs/Web/CSS/background-position#regarding_percentages) und dann ein Prozentsatz des resultierenden Wertes als direktes Offset von der linken Kante der Box verwendet, was dem gleichen wie [Prozentwerte für `background-position`](/de/docs/Web/CSS/background-position#regarding_percentages) entspricht.

Die Gleichung lautet:

`(Container-Dimension - Masken-Dimension) * Prozentwert der Position = Offset-Wert der Dimension`

Bei einer `100px` breiten Maske und einer `1000px` breiten Ursprungsbox führt das Setzen von `mask-position: 10%;` (entspricht `10% 50%`) dazu, dass die Maske vertikal zentriert ist und `90px` von der linken Kante entfernt ist. Die Gleichung lautet `(1000 - 100) * 10% = 90`. Wäre das linke Offset `0%` gewesen, würde die linke Kante der Maske bündig mit der linken Seite des Containers sein (`(1000 - 100) * 0% = 0`).

Wäre das linke Offset `100%` gewesen, würde die rechte Kante der Maske bündig mit der rechten Seite des Containers sein, da die linke Kante der `100px` breiten Maske `900px` (`(1000 - 100) * 100% = 900`) von der linken Kante des Containers entfernt wäre (die `100px` Maskenbreite plus `900px` Abstand von der linken Kante bedeutet, dass die rechte Kante `1000px` von der linken Kante entfernt wäre, was die rechte Kante des Containers ist).

### Zwei-Wert-Syntax

Eine Zwei-Wert-`<position>` gibt die Position des Maskenbildes innerhalb seines Maskenpositionierungsbereichs an, wobei Längen- und Prozentwerte Offsets von `left` und `top` des Bereichs spezifizieren.

Wenn die beiden Werte {{cssxref("&lt;length&gt;")}} Werte, {{cssxref("&lt;percentage&gt;")}} Werte oder das Schlüsselwort `center` sind, repräsentiert der erste Wert die horizontale Position als ein Offset von der linken Kante des Maskenpositionierungsbereichs, und der zweite Wert repräsentiert die vertikale Position als ein Offset von dessen oberer Kante, wobei [Prozentwerte durch die Größe der Maske in dieser Dimension offsetiert werden](#prozentwerte).

Zudem, wenn {{cssxref("&lt;percentage&gt;")}} Werte angegeben sind, ist der erste Wert auch der horizontale Positionswert relativ zur linken Kante, und der zweite Wert ist auch der vertikale Positionswert relativ zur oberen Kante.

Ein Paar von achsenspezifischen Keywords kann umgeordnet werden, ebenso wie ein achsenspezifisches Schlüsselwort und eine Länge oder Prozentsatz, aber zwei Längen- oder Prozentsatzwerte sind nicht austauschbar.
Wenn einer der beiden Werte `top`, `right`, `bottom` oder `left` ist, spielt die Reihenfolge der beiden Werte keine Rolle. Jeder `center` oder `<length-percentage>` Wert im Paar wird auf die andere Dimension angewendet.

### Vier-Wert-Syntax

Die Vier-Wert-Syntax besteht aus zwei Paaren von Werten, wobei jedes Paar ein Schlüsselwort enthält, das die Kante angibt, von der offsetiert werden soll, und ein `<length>` und `<percentage>` Wert, der den Offset-Abstand angibt. Zum Beispiel, `mask-position: left 1em top 2em` spezifiziert ein `1em` horizontales Offset von der linken Box-Kante und ein `2em` vertikales Offset von der oberen Kante. Das Zwei-Wert-Äquivalent wäre `mask-position: 1em 2em`.

Da wir die Offset-Kanten bei der Verwendung der Vier-Wert-Syntax definieren, ist die Reihenfolge nicht wichtig: `mask-position: top 2em left 1em` und `mask-position: left 1em top 2em` ergeben beide das gleiche Ergebnis.

Die wirkliche Stärke der Vier-Wert-Syntax liegt darin, dass es uns erlaubt, Offset-Kanten anders als `left` und `top` anzugeben. Zum Beispiel, `mask-position: bottom 10px right 20px` erzeugt ein `10px` vertikales Offset von unten nach oben und ein `20px` horizontales Offset nach links von der rechten Kante. Normalerweise wird die Vier-Wert-Syntax verwendet, um von unten und/oder rechts zu offsetieren. Aber diese Syntax ist auch hilfreich, wenn Sie sich die Offset-Kantenreihenfolge für die Zwei-Wert-Syntax nicht merken können.

Eine Sache, die zu beachten ist, dass im Gegensatz zu den `<bg-position>` Datentypwerten für {{cssxref("background-position")}}, die `<position>` Werte für `mask-position` keine Drei-Wert-Syntax erlauben und kein Offset von `center` erlauben. Beim Offsetting der Maske von `bottom` oder `right`, erfordert `mask-position`, dass alle vier Werte deklariert werden.

Damit die Vier-Wert-Syntax gültig ist, muss sie entweder `top` oder `bottom` als vertikale Offset-Kante sowie den vertikalen Längen- oder Prozentwert angeben, und entweder `left` oder `right` als horizontalen Offset-Rand sowie den horizontalen Längen- oder Prozentwert.

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
- {{cssxref("mask")}} Kurzschreibweise
- {{cssxref("mask-border")}}
- {{cssxref("mask-border-outset")}}
- [Einführung in CSS-Masking](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking) Modul
- {{cssxref("background-position")}}
- {{cssxref("&lt;position&gt;")}}
