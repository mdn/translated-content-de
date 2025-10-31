---
title: mask-position
slug: Web/CSS/Reference/Properties/mask-position
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`mask-position`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die anfängliche Position relativ zur durch {{cssxref("mask-origin")}} festgelegten Maskenpositionsebene für jedes definierte Maskenbild fest.

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

Ein oder mehrere `<position>`-Werte, durch Kommata getrennt.

- {{cssxref("&lt;position&gt;")}}
  - : Ein, zwei oder vier Werte, die eine 2D-Position darstellen und die Ränder des Box-Elements spezifizieren. Relative oder absolute Verschiebungen können angegeben werden.

## Beschreibung

Die `mask-position`-Eigenschaft definiert die Position jeder Maskenschicht. Ein Element kann mehrere Maskenschichten haben. Die Anzahl der Schichten wird durch die Anzahl der kommagetrennten Werte im {{cssxref("mask-image")}}-Eigenschaftswert bestimmt (selbst `none`-Werte erzeugen eine Schicht).

Jeder `mask-position`-Wert in der Liste der kommagetrennten Werte wird mit einer zugehörigen Maskenschicht abgeglichen, wie sie durch die Liste der `mask-image`-Werte definiert sind, und zwar in der Reihenfolge. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist:

- Wenn `mask-position` mehr Werte als `mask-image` hat, werden die überschüssigen Werte von `mask-position` nicht verwendet.
- Wenn `mask-position` weniger Werte als `mask-image` hat, werden die `mask-position`-Werte wiederholt.

Jeder `mask-position` definiert die Position der zugehörigen Maskenschicht relativ zum zugehörigen {{cssxref("mask-origin")}}-Wert. Die `mask-origin`-Eigenschaftswerte werden ebenfalls mit den `mask-image`-Werten in der Reihenfolge abgeglichen, wobei überschüssige `mask-position`-Werte unbenutzt bleiben oder `mask-position`-Werte wiederholt werden, wenn sie weniger zahlreich als die `mask-origin`-Werte sind. Jede Maskenschicht hat daher einen zugehörigen `mask-origin`- und `mask-position`-Wert.

Wenn kein `mask-origin` gesetzt ist, ist der Standardwert `padding-box`, was bedeutet, dass der Ursprung jeder `mask-position` die [padding-box](/de/docs/Web/CSS/box-edge#padding-box) des Elements ist.

### Ein-Wert-Syntax

Wenn nur ein `mask-position`-Wert angegeben wird, wird davon ausgegangen, dass der zweite Wert `center` ist. Wenn der Wert ein `<length>` oder `<percentage>` ist, definiert er die Position der Maske entlang der horizontalen Achse, wobei die Maske vertikal innerhalb der Ursprungsbox zentriert ist. Zum Beispiel entspricht `mask-position: 0%;` `mask-position: 0% center`.

Wenn Sie ein einzelnes Schlüsselwort für die Positionierung verwenden, wird der andere Wert auf `center` aufgelöst. Der Standard von `mask-position` ist `0% 0%`, was `mask-position: top left` entspricht. Jedoch:

- `mask-position: top;` ist gleichbedeutend mit `mask-position: top center;`.
- `mask-position: left;` ist gleichbedeutend mit `mask-position: center left`.
- `mask-position: center;` entspricht `mask-position: center center`.

Wenn der Wert ein {{cssxref("&lt;length&gt;")}}-Wert ist, stellt er die horizontale Position als Versatz von der linken Kante des Maskenpositionierungsbereichs dar. Ein positiver Wert stellt einen Versatz von der linken Kante der Box im Innern dar. Die Position kann außerhalb der Box des Elements mit einem negativen Wert gesetzt werden – dies erzeugt einen äußeren Versatz, der das Element außerhalb der linken Kante des Containers platziert.

#### Prozentuale Werte

Ein {{cssxref("&lt;percentage&gt;")}}-Wert stellt den horizontalen Positionswert der Maske relativ zur Breite des Containers dar, der relativ zur linken Kante positioniert ist. Der Versatz erfolgt jedoch nicht von der Maskenkante zur Boxkante. Stattdessen wird die Maskenbilddimension von der Containerdimension [subtrahiert](/de/docs/Web/CSS/Reference/Properties/background-position#regarding_percentages) und dann wird ein Prozentsatz des resultierenden Wertes als direkter Versatz von der linken Kante der Box verwendet, was dem gleichen [Prozentsatzwert für `background-position`](/de/docs/Web/CSS/Reference/Properties/background-position#regarding_percentages) entspricht.

Die Gleichung ist:

`(Contenderdimension - Maskendimension) * Positionsprozentsatz = Dimensionswert`

Bei einer `100px` breiten Maske und einer `1000px` breiten Ursprungsbox führt das Setzen von `mask-position: 10%;` (entspricht `10% 50%`) dazu, dass die Maske vertikal zentriert auf `90px` von der linken Kante ist. Die Gleichung ist `(1000 - 100) * 10% = 90`. Wäre der linke Versatz `0%`, würde die linke Kante der Maske bündig mit der linken Kante des Containers (`(1000 - 100) * 0% = 0`) sein.

Wäre der linke Versatz `100%`, wäre die rechte Kante der Maske bündig mit der rechten Kante des Containers, da die linke Kante der `100px` breiten Maske `900px` (`(1000 - 100) * 100% = 900`) von der linken Kante des Containers entfernt wäre (die `100px` Maskenbreite plus `900px` Abstand von der linken Kante bedeutet, dass die rechte Kante `1000px` von der linken Kante entfernt wäre, was die rechte Kante des Containers ist).

### Zwei-Wert-Syntax

Eine Zwei-Wert-`<position>` gibt die Position des Maskenbildes in seinem Maskenpositionierungsbereich an, wobei Längen- und Prozentwerte Versätze von `links` und `oben` des Bereichs spezifizieren.

Wenn die beiden Werte {{cssxref("&lt;length&gt;")}}-Werte, {{cssxref("&lt;percentage&gt;")}}-Werte oder das Schlüsselwort `center` sind, stellt der erste Wert die horizontale Position als Versatz von der linken Kante des Maskenpositionierungsbereichs dar, und der zweite Wert stellt die vertikale Position als Versatz von der oberen Kante dar, wobei [Prozentsätze durch die Größe der Maske in dieser Dimension?von der Groesse der Maske in dieser Dimension versetzt] (ennnnn #percentage_values) sind.

Zusätzlich, wenn {{cssxref("&lt;percentage&gt;")}}-Werte angegeben sind, ist der erste Wert auch der horizontale Positionswert relativ zur linken Kante, und der zweite Wert ist auch der vertikale Positionswert relativ zur oberen Kante.

Ein Paar achsenspezifischer Schlüsselwörter kann umgekehrt werden, ebenso ein achsenspezifisches Schlüsselwort und eine Länge oder ein Prozentsatz, aber zwei Längen- oder Prozentwerte sind nicht austauschbar.
Wenn einer der beiden Werte `oben`, `rechts`, `unten` oder `links` ist, spielt die Reihenfolge der beiden Werte keine Rolle. Ein beliebiger `center`- oder `<längen-prozentual>`-Wert im Paar von Werten wird auf die andere Dimension angewendet.

### Vier-Wert-Syntax

Die Vier-Wert-Syntax besteht aus zwei Paaren von Werten, wobei jedes Paar ein Schlüsselwort zur Angabe des Versatzrands sowie einen `<length>`- oder `<percentage>`-Wert zur Angabe der Versatzdistanz enthält. Zum Beispiel spezifiziert `mask-position: left 1em top 2em` einen `1em` horizontalen Versatz von der linken Boxkante und einen `2em` vertikalen Versatz von der oberen Kante. Das Zwei-Wert-Äquivalent wäre `mask-position: 1em 2em`.

Da wir die Versatzränder definieren, wenn wir die Vier-Wert-Syntax verwenden, ist die Reihenfolge nicht wichtig: `mask-position: top 2em left 1em` und `mask-position: left 1em top 2em` führen beide zum gleichen Ergebnis.

Die wirkliche Stärke der Vier-Wert-Syntax besteht darin, dass wir Versatzränder spezifizieren können, die nicht `links` und `oben` sind. Zum Beispiel erzeugt `mask-position: bottom 10px right 20px` einen `10px` vertikalen Versatz von der unteren Kante und einen `20px` horizontalen Versatz nach links von der rechten Kante. Normalerweise wird die Vier-Wert-Syntax verwendet, um von unten und/oder rechts zu versetzen. Aber diese Syntax ist auch hilfreich, wenn Sie sich die Versatzreihenfolge für die Zwei-Wert-Syntax nicht merken können.

Es ist zu beachten, dass im Gegensatz zu den `<bg-position>`-Datentypwerten für {{cssxref("background-position")}} die `<position>`-Werte für `mask-position` keine Drei-Wert-Syntax zulassen und keine Versatz von `center` zulassen. Wenn die Maske von `unten` oder `rechts` versetzt wird, erfordert `mask-position` die Angabe aller vier Werte.

Damit die Vier-Wert-Syntax gültig ist, muss sie entweder `oben` oder `unten` als vertikalen Versatzrand angeben, zusammen mit dem vertikalen Längen- oder Prozentsatzwert, und entweder `links` oder `rechts` als horizontalen Versatzrand, zusammen mit dem horizontalen Längen- oder Prozentsatzversatzwert.

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
- [Einführung in CSS Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask`-Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklaration mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking)-Modul
- {{cssxref("background-position")}}
- {{cssxref("&lt;position&gt;")}}
