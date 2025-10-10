---
title: <position-area>
slug: Web/CSS/position-area_value
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Der **`<position-area>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) definiert die Zelle oder die gespannten Zellen eines **position-area grids**, eines 3x3-Rasters, dessen zentrale Zelle ein Ankerelement ist.

Die `<position-area>` Schlüsselwortwerte können als Wert der {{cssxref("position-area")}}-Eigenschaft gesetzt werden, um ein ankerpositioniertes Element relativ zu seinem zugehörigen Ankerelement an einer bestimmten Stelle zu platzieren.

## Syntax

```plain
<position-area> = [
  [ left | center | right | span-left | span-right | x-start | x-end | span-x-start | span-x-end | x-self-start | x-self-end | span-x-self-start | span-x-self-end | span-all ]
||
  [ top | center | bottom | span-top | span-bottom | y-start | y-end | span-y-start | span-y-end | y-self-start | y-self-end | span-y-self-start | span-y-self-end | span-all ]
|
  [ block-start | center | block-end | span-block-start | span-block-end | span-all ]
||
  [ inline-start | center | inline-end | span-inline-start | span-inline-end | span-all ]
|
  [ self-block-start | self-block-end | span-self-block-start | span-self-block-end | span-all ]
||
  [ self-inline-start | self-inline-end | span-self-inline-start | span-self-inline-end | span-all ]
|
  [ start | center | end | span-start | span-end | span-all ]{1,2}
|
  [ self-start | center | self-end | span-self-start | span-self-end | span-all ]{1,2}
]
```

## Beschreibung

Positionsbereiche basieren auf dem Konzept eines **position-area grids**, eines 3x3-Rasters von Kacheln, das aus vier Gitterlinien besteht, zwei auf jeder Achse, wobei ein Ankerelement die zentrale Kachel ist:

![Das position-area grid, wie unten beschrieben](position-area.png)

Wenn sie als Wert der `position-area`-Eigenschaft eines positionierten Elements verwendet werden, werden die Dimensionen der mittleren Kachel durch den [enthaltenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Standardankerelements des Elements definiert. Die Dimensionen der Außenkante des Gitters werden durch den enthaltenden Block des positionierten Elements bestimmt. Logische Schlüsselwörter basieren im Allgemeinen auf dem Schreibmodus und der Ausrichtung des enthaltenden Blocks, mit Ausnahme der `self-*` Schlüsselwörter, die aus dem Schreibmodus des ankerpositionierten Elements berechnet werden.

Die Gitterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Entsprechungen wie `block-start`, `center` und `block-end` und Koordinatenäquivalente — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Entsprechungen wie `inline-start`, `center` und `inline-end` und Koordinatenäquivalente — `x-start`, `center` und `x-end`.

`<position-area>` Werte enthalten ein oder zwei Schlüsselwörter, die einen bestimmten Bereich des position-area grids definieren. Das Setzen eines `position-area` Wertes auf einem positionierten Element platziert dessen enthaltenden Block im angegebenen Gridbereich:

```css
/* Examples: Two keywords to place the element in a single specific tile */
position-area: top left;
position-area: bottom right;
position-area: start end;
position-area: center end;
position-area: block-start center;
position-area: inline-start block-end;
position-area: x-start y-end;
position-area: center y-self-end;

/* Examples: Two keywords to span the element across two tiles */
position-area: top span-left;
position-area: span-bottom right;
position-area: center span-start;
position-area: inline-start span-block-end;
position-area: y-start span-x-end;

/* Examples: Two keywords to span the element across three tiles */
position-area: top span-all;
position-area: block-end span-all;
position-area: x-self-start span-all;

/* Examples: One keyword with an implicit second keyword  */
position-area: top; /* equiv: top span-all */
position-area: inline-start; /* equiv: inline-start span-all */
position-area: center; /* equiv: center center */
position-area: span-all; /* equiv: center center */
position-area: start; /* equiv: start start */
position-area: end; /* equiv: end end */
```

Die verschiedenen Arten von Schlüsselwörtern, die verwendet werden können, umfassen:

- [Physische Grid-Schlüsselwörter](#physische_grid_schluesselwoerter)
- [Generische logische Zeilen- und Spaltenschlüsselwörter](#generische_logische_zeilen_und_spaltenschluesselwoerter)
- [Explizite Inline- und Blocklogische Schlüsselwörter](#explizite_inline_und_blocklogische_schluesselwoerter)
- [Koordinaten-Grid-Schlüsselwörter](#koordinaten_grid_schluesselwoerter)

> [!NOTE]
> Im Allgemeinen können Sie nicht verschiedene Arten in einem Wert mischen, z.B. physische und logische. Ein solcher Versuch führt zu ungültigen Werten. Zum Beispiel ist `position-area: bottom inline-end` kein gültiger Wert, da es physische und logische Schlüsselwörter mischt.

## Physische Grid-Schlüsselwörter

Die physischen Grid-Schlüsselwörter spezifizieren eine Zelle oder einen Bereich des `position-area` Grids unter Verwendung physischer Werte. Diese Werte werden nicht durch {{cssxref("writing-mode")}} oder {{cssxref("direction")}} Einstellungen beeinflusst.

Mit physischen Zeilen- und Spaltenschlüsselwörtern können Sie ein Schlüsselwort aus jeder der beiden untenstehenden Listen auswählen, um eine einzelne spezifische Gitterkachel auszuwählen:

- `top`, `center` oder `bottom`: Die obere, mittlere oder untere Zeile des Gitters.
- `left`, `center` oder `right`: Die linke, mittlere oder rechte Spalte des Gitters.

Beispielsweise wählt `top left` die obere linke Kachel aus, während `center right` die Mittelkachel der rechten Spalte auswählt.

### Physische Spannweite-Grid-Schlüsselwörter

Die physischen Spannweite-Schlüsselwörter — kombiniert mit einem physischen Zeilen- oder Spaltenschlüsselwort — spezifizieren eine zweite Gitterkachel, in die sich der Positionsbereich ausdehnen soll. Wenn eine solche Kombination als Wert der `position-area` Eigenschaft gesetzt wird, wird das ausgewählte Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert; es erweitert sich dann in die im Spannweite-Schlüsselwort angegebene Richtung und erstreckt sich über zwei Gitterkacheln:

- `span-left`
  - : Überspannt die mittlere Spalte und die linke Spalte des Gitters.

- `span-right`
  - : Überspannt die mittlere Spalte und die rechte Spalte des Gitters.

- `span-top`
  - : Überspannt die mittlere Zeile und die obere Zeile des Gitters.

- `span-bottom`
  - : Überspannt die mittlere Zeile und die untere Zeile des Gitters.

- `span-all`
  - : Gültig für alle Schlüsselworttypen, überspannt die angegebene Zelle sowie die angrenzenden Zellen in derselben Zeile oder Spalte. Siehe [`span-all`](#span-all_2) unten.

Zum Beispiel, `top span-left` überspannt die obere-mittlere und obere-linke Gitterzelle.

> [!NOTE]
> Der Versuch, ein Zeilen- oder Spaltenschlüsselwort mit einem unpassenden Spannweite-Schlüsselwort zu kombinieren, führt zu einem ungültigen Wert. Zum Beispiel ist `right span-right` ungültig — Sie können nicht die mittel-rechte Gitterkachel auswählen und dann versuchen, weiter nach rechts zu erstrecken.

### Physische Grid-Schlüsselwort-Standardeinstellungen

Wenn im `position-area` Wert nur ein einziges physisches Schlüsselwort angegeben ist, wird der andere Wert wie folgt impliziert:

- `left`, `right`, `top` oder `bottom`
  - : Der andere Wert standardmäßig zu [`span-all`](#span-all_2), wodurch das Element alle drei Kacheln der Spalte oder Zeile, in der es ursprünglich platziert wurde, überspannt. Zum Beispiel entspricht `left` `left span-all`.

- `center`, `span-left`, `span-right`, `span-top` oder `span-bottom`
  - : Der andere Wert standardmäßig zu `center`. Zum Beispiel entspricht `span-left` `center span-left` und `center` `center center`.

## Logische Grid-Schlüsselwörter

Die logischen Grid-Schlüsselwörter spezifizieren einen Bereich des position area grids unter Verwendung logischer Werte. Mit diesen Werten werden die Position und Richtung durch die {{cssxref("writing-mode")}} und {{cssxref("direction")}} Einstellungen entweder des enthaltenden Blocks des Elements oder, im Fall der `self` Schlüsselwörter, das positionierte Element selbst beeinflusst. Es gibt zwei Arten von logischen Schlüsselwörtern; generisch und explizit.

### Generische logische Zeilen- und Spaltenschlüsselwörter

Die generischen logischen Schlüsselwörter verwenden dieselben Begriffe für Inline- und Blockrichtungen, wobei die Richtung durch die Position des Schlüsselbegriffes innerhalb eines Paares von `<position-area>` Werten bestimmt wird. Der erste Wert definiert die Blockrichtung und der zweite die Inline-Wert. Sie können ein oder zwei Schlüsselbegriffe aus der folgenden Liste angeben. Wenn Sie zwei aus dieser Liste angeben, definieren Sie eine einzelne spezifische Gitterkachel. Die Schlüsselwortposition oder Richtung ist:

- `start`
  - : Der Anfang der Block- oder Inline-Richtung des Gitters, berechnet aus dem Schreibmodus des enthaltenden Blocks.

- `end`
  - : Das Ende der Block- oder Inline-Richtung des Gitters, berechnet aus dem Schreibmodus des enthaltenden Blocks.

- `self-start`
  - : Der Anfang der Block- oder Inline-Richtung des Gitters, berechnet aus dem eigenen Schreibmodus des Elements.

- `self-end`
  - : Das Ende der Block- oder Inline-Richtung des Gitters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der Blockrichtung des Gitters (dieses Schlüsselwort wird zuerst angegeben) oder Inline-Richtung (dieses Schlüsselwort wird als zweites angegeben).

Beispielsweise beschreiben `start end` und `self-start self-end` beide die Position am Start der Blockrichtung und dem Ende der Inline-Richtung. Mit `writing-mode: horizontal-tb` eingestellt, ist dies die obere rechte Ecke des Ankerelements, während es mit `writing-mode: vertical-rl` die untere rechte Ecke des Ankers ist.

#### Generische logische Spannweite-Row- und -Column-Schlüsselwörter

Die generischen logischen Spannweite-Schlüsselwörter — kombiniert mit einem logischen Zeilen- oder Spaltenschlüsselwort — spezifizieren eine zweite Gitterkachel, in die der Positionsbereich sich erweitert. Wenn eine solche Kombination als `position-area` Eigenschaftswert festgelegt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert und erstreckt sich dann in die im Spannweite-Schlüsselwort angegebene Richtung, unter Verwendung von zwei Gitterkacheln:

- `span-start`
  - : Überspannt die mittlere Kachel und die Startkachel der Gitterzeile/-spalte, wobei sich die Richtung auf den Schreibmodus des enthaltenden Blocks des Elements bezieht.

- `span-end`
  - : Überspannt die mittlere Kachel und die Endkachel der Gitterzeile/-spalte, wobei sich die Richtung auf den Schreibmodus des enthaltenden Blocks des Elements bezieht.

- `span-self-start`
  - : Überspannt die mittlere Kachel und die Startkachel der Gitterzeile/-spalte für den eigenen Schreibmodus des positionierten Elements.

- `span-self-end`
  - : Überspannt die mittlere Kachel und die Endkachel der Gitterzeile/-spalte, berechnet aus dem eigenen Schreibmodus des Elements.

Beispielsweise spezifizieren `start span-end` und `self-start span-self-end` beide einen Gitterpositionsbereich, der in der Mitte der Startblockzeile beginnt, und erstreckt sich über die Kacheln in dieser Zeile, die sich in den Inline-Zentren und -Endspalten befinden. Mit `writing-mode: horizontal-tb` eingestellt, würde dies über die obere Mitte und das obere rechte des Ankers erstrecken, während es mit `writing-mode: vertical-rl` eingestellt ist, würde es das Element über die rechte Mitte und das untere rechte erstrecken.

### Explizite Inline- und Blocklogische Schlüsselwörter

Die expliziten Inline- und Blocklogischen Zeilen- und Spaltenschlüsselwörter beziehen sich ausdrücklich auf die Position einer Block- (Zeile) oder Inline- (Spalte). Sie können ein Schlüsselwort für die Blockrichtung und eines für die Inlinerichtung angeben, um eine einzelne spezifische Gitterkachel auszuwählen. Im Gegensatz zu generischen logischen Schlüsselwortwerten spielt bei expliziten Schlüsselwörtern die Reihenfolge keine Rolle. Das Deklarieren von zwei Schlüsselwörtern auf derselben Achse invalidiert jedoch den Wert.

- `block-start`
  - : Der Anfang der Blockrichtung des Gitters, berechnet aus dem Schreibmodus des enthaltenden Blocks.

- `block-end`
  - : Das Ende der Blockrichtung des Gitters, berechnet aus dem Schreibmodus des enthaltenden Blocks.

- `inline-start`
  - : Der Anfang der Inlinerichtung des Gitters, berechnet aus dem Schreibmodus des enthaltenden Blocks.

- `inline-end`
  - : Das Ende der Inlinerichtung des Gitters, berechnet aus dem Schreibmodus des enthaltenden Blocks.

Beispielsweise spezifiziert `block-start inline-end` die Kachel am Anfang der Blockrichtung und dem Ende der Inlinerichtung. Mit `writing-mode: horizontal-tb` eingestellt, wäre dies die Kachel am oberen rechten Rand des Ankers, während dies bei `writing-mode: vertical-rl` die Kachel am unteren rechten wäre.

> [!NOTE]
> Die Spezifikation definiert `self` Äquivalente dieser Schlüsselwörter — `block-self-start`, `block-self-end`, `inline-self-start` und `inline-self-end`. Diese werden jedoch derzeit in keinem Browser unterstützt.

#### Explizite Inline- und Blocklogische Spannweite-Schlüsselwörter

Die expliziten logischen Spannweiten-Schlüsselwörter — kombiniert mit einem logischen Zeilen- oder Spaltenschlüsselwort — spezifizieren eine zweite Gitterkachel, in die sich der Positionsbereich ausdehnen soll. Wenn eine solche Kombination als Wert der `position-area` Eigenschaft gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert, basierend auf dem Schreibmodus des enthaltenden Blocks, und es erstreckt sich dann in die im Spannweite-Schlüsselwort angegebene Richtung, spannt sich über zwei Gitterkacheln:

- `span-block-start`
  - : Überspannt die mittlere Kachel und die block-start Kachel der angegebenen Inline-Spalte.

- `span-block-end`
  - : Überspannt die mittlere Kachel und die block-end Kachel der angegebenen Inline-Spalte.

- `span-inline-start`
  - : Überspannt die mittlere Kachel und die inline-start Kachel der angegebenen Blockzeile.

- `span-inline-end`
  - : Überspannt die mittlere Kachel und die inline-end Kachel der angegebenen Blockzeile.

Beispielsweise wählt `block-end span-inline-start` die mittlere Kachel der Endblockzeile aus und erstreckt sich über die Kacheln in dieser Zeile, die sich in den Inline-Zentren- und Startspalten befinden. Mit `writing-mode: horizontal-tb` eingestellt, würde dies die untere Mitte und die untere linke Gitterkachel überspannen, während mit `writing-mode: vertical-rl` eingestellt, würde es die linke Mitte und die obere linke Gitterkachel überspannen.

> [!NOTE]
> Die Spezifikation definiert `self` Äquivalente dieser Schlüsselwörter, zum Beispiel — `span-self-block-start`, `span-self-block-end`, `span-self-inline-start`, und `span-self-inline-end`. Diese werden jedoch derzeit in keinem Browser unterstützt.

> [!NOTE]
> Der Versuch, ein Zeilen- oder Spaltenschlüsselwort mit einem ungeeigneten Spannweite-Schlüsselwort zu kombinieren, führt zu einem ungültigen Eigenschaftswert. Zum Beispiel ist `block-end span-block-end` ungültig — Sie können nicht die mittlere block-end-Zeile auswählen und dann versuchen, eine Kachel weiter in die Richtung block-end zu spannen.

### Logische Grid-Schlüsselwort-Standardeinstellungen

Wenn nur ein einziges logisches `<position-area>` Schlüsselwort angegeben ist, wird der andere Wert wie folgt impliziert:

- `start`, `end`, `self-start` oder `self-end`
  - : Der andere Wert standardmäßig zum gleichen Wert wie der erste, Auswahl der Gitternzelle in der Startzeile und -spalte oder der Endzeile und -spalte.

- `span-start`, `span-self-start`, `span-end`, `span-self-end`
  - : Der andere Wert standardmäßig zu `center`. Zum Beispiel ist `span-start` gleichwertig mit `span-start center`.

- `block-start`, `block-end`, `inline-start`, `inline-end`
  - : Der andere Wert standardmäßig zu [`span-all`](#span-all_2), überspannend alle drei Kacheln der gesetzten Spalte oder Zeile. Zum Beispiel entspricht `block-start` `block-start span-all`.

- `span-block-start`, `span-block-end`, `span-inline-start`, `span-inline-end`
  - : Der andere Wert standardmäßig zu `center`. Zum Beispiel, `span-inline-start` entspricht `span-inline-start center`.

## Koordinaten-Grid-Schlüsselwörter

Diese Schlüsselwörter spezifizieren die Zellen des `position-area` Grids unter Verwendung von x- und y-Koordinatenwerten. Ihre Position/Richtung wird durch {{cssxref("writing-mode")}} und/oder {{cssxref("direction")}} Einstellungen entweder auf einem enthaltenden Block eines Elements oder, im Fall der `self` Schlüsselwörter, das Element selbst beeinflusst.

Die Gitterzellen werden jedoch gemäß physikalischer Achsen und nicht nach Block-/Inline-Richtungen definiert:

- Bei `writing-mode: horizontal-tb` und `vertical-lr` läuft die x-Achse von links nach rechts und die y-Achse von oben nach unten.
- Bei `writing-mode: horizontal-tb; direction: rtl` und `writing-mode: vertical-rl` läuft die x-Achse von rechts nach links und die y-Achse von oben nach unten.

Mit koordinierten Zeilen- und Spaltenschlüsselwörtern können Sie ein Schlüsselwort von der x-Achse und eines von der y-Achse angeben, um eine einzelne spezifische Gitterkachel festzulegen.

Die Schlüsselwörter der x-Achse umfassen:

- `x-start`
  - : Die Startkachel entlang der x-Achse des Grids, berechnet aus dem Schreibmodus des enthaltenden Blocks.

- `x-end`
  - : Die Endkachel entlang der x-Achse des Grids, berechnet aus dem Schreibmodus des enthaltenden Blocks.

- `x-self-start`
  - : Die Startkachel entlang der x-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

- `x-self-end`
  - : Die Endkachel entlang der x-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der x-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

Die Schlüsselwörter der y-Achse umfassen:

- `y-start`
  - : Die Startkachel entlang der y-Achse des Grids, berechnet aus dem Schreibmodus des enthaltenden Blocks.

- `y-end`
  - : Die Endkachel entlang der y-Achse des Grids, berechnet aus dem Schreibmodus des enthaltenden Blocks.

- `y-self-start`
  - : Die Startkachel entlang der y-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

- `y-self-end`
  - : Die Endkachel entlang der y-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der y-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

Beispielsweise wählen `x-end y-start` und `x-self-end y-self-start` beide die Gitterzelle am Ende der x-Achse und am Anfang der y-Achse aus. Mit `writing-mode: horizontal-tb` eingestellt, wäre dies die Zelle oben rechts des Ankers, während es mit `writing-mode: vertical-rl` oben links ist.

### Koordinaten-Spannweite-Schlüsselwörter

Diese Schlüsselwörter spezifizieren die Zellen des `position-area` Grids unter Verwendung von x- und y-Koordinatenwerten. Ihre Position/Richtung wird durch {{cssxref("writing-mode")}} und/oder {{cssxref("direction")}} Einstellungen entweder auf einem enthaltenden Block eines Elements oder, im Fall der `self` Schlüsselwörter, das Element selbst beeinflusst.

Die Gitterzellen werden jedoch gemäß physikalischer Achsen und nicht nach Block-/Inline-Richtungen definiert:

- Bei `writing-mode: horizontal-tb` und `vertical-lr` läuft die x-Achse von links nach rechts und die y-Achse von oben nach unten.
- Bei `writing-mode: horizontal-tb; direction: rtl` und `writing-mode: vertical-rl` läuft die x-Achse von rechts nach links und die y-Achse von oben nach unten.

Mit koordinierten Zeilen- und Spaltenschlüsselwörtern können Sie ein Schlüsselwort von der x-Achse und eines von der y-Achse angeben, um eine einzelne spezifische Gitterkachel festzulegen.

Die Schlüsselwörter der x-Achse umfassen:

- `x-start`
  - : Die Startkachel entlang der x-Achse des Grids, berechnet aus dem Schreibmodus des enthaltenden Blocks.

- `x-end`
  - : Die Endkachel entlang der x-Achse des Grids, berechnet aus dem Schreibmodus des enthaltenden Blocks.

- `x-self-start`
  - : Die Startkachel entlang der x-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

- `x-self-end`
  - : Die Endkachel entlang der x-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der x-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

Die Schlüsselwörter der y-Achse umfassen:

- `y-start`
  - : Die Startkachel entlang der y-Achse des Grids, berechnet aus dem Schreibmodus des enthaltenden Blocks.

- `y-end`
  - : Die Endkachel entlang der y-Achse des Grids, berechnet aus dem Schreibmodus des enthaltenden Blocks.

- `y-self-start`
  - : Die Startkachel entlang der y-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

- `y-self-end`
  - : Die Endkachel entlang der y-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der y-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

Beispielsweise wählen `x-end y-start` und `x-self-end y-self-start` beide die Gitterzelle am Ende der x-Achse und am Anfang der y-Achse aus. Mit `writing-mode: horizontal-tb` eingestellt, wäre dies die Zelle oben rechts des Ankers, während es mit `writing-mode: vertical-rl` oben links ist.

### Koordinaten-Spannweite-Schlüsselwörter

Wenn sie mit einem koordinierten Zeilen- oder Spaltenschlüsselwort kombiniert werden, spezifizieren die Koordinaten-Spannweite-Schlüsselwörter eine zweite Gitterkachel, in die sich der Positionsbereich ausdehnen soll. Wenn eine solche Kombination als Wert der `position-area` Eigenschaft festgelegt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert und dann in die im Spannweite-Schlüsselwort angegebene Richtung erstreckt, wobei zwei Gitterkacheln genutzt werden:

- `span-x-start`
  - : Überspannt die mittlere Kachel und die x-start Kachel der angegebenen y-Achsenzeile.

- `span-x-end`
  - : Überspannt die mittlere Kachel und die x-end Kachel der angegebenen y-Achsenzeile.

- `span-y-start`
  - : Überspannt die mittlere Kachel und die y-start Kachel der angegebenen x-Achsenspalte.

- `span-y-end`
  - : Überspannt die mittlere Kachel und die y-end Kachel der angegebenen x-Achsenspalte.

Beispielsweise wählt `y-end span-x-end` die mittlere Kachel der End-y-Zeile aus und erstreckt sich über die Kacheln in dieser Zeile, die sich in den x-Zentren- und Endspalten befinden. Mit `writing-mode: horizontal-tb` eingestellt, würde der Positionierungsbereich die Gitterkacheln in der unteren Mitte und unten rechts überspannen, während es mit `writing-mode: vertical-rl` eingestellt, würde es die untere Mitte und unten links Kacheln überspannen.

> [!NOTE]
> Die Spezifikation definiert keine separaten Koordinaten-`self` Spannweite-Schlüsselwörter, aber diese sind nicht notwendig — die Spannweite-Schlüsselwörter können sowohl mit koordinierten Zeilen- als auch Spaltenschlüsselwörtern verwendet werden.

### Standardwerte der Koordinaten-Grid-Schlüsselwörter

Wenn nur ein einziges Koordinaten-Grid-`<position-area>` Schlüsselwort angegeben ist, wird der andere Wert wie folgt impliziert:

- `x-start`, `x-self-start`, `x-end`, `x-self-end`, `y-start`, `y-self-start`, `y-end`, oder `y-self-end`
  - : Der andere Wert standardmäßig zu [`span-all`](#span-all_2), Auswahl der Gitterzellen, die alle drei Kacheln der Spalte oder Zeile, in der es ursprünglich platziert wurde, überspannen. Zum Beispiel entspricht `x-start` `x-start span-all`.

- `span-x-start`, `span-x-end`, `span-y-start`, oder `span-y-end`
  - : Der andere Wert standardmäßig zu `center`. Zum Beispiel entspricht `span-start` `span-start center`.

## `span-all`

`span-all` ist ein spezielles Schlüsselwort, das mit allen der oben aufgeführten Zeilen- und Spaltenschlüsselwörter verwendbar ist. Wenn Sie zwei Werte angeben — ein Zeilen-/Spaltenschlüsselwort und `span-all`, wird das Element in der angegebenen Zeile oder Spalte platziert, und es erstreckt sich dann über alle Kacheln in dieser Zeile oder Spalte.

## Beispiele

Siehe die {{cssxref("position-area")}} Eigenschaftsseite.

Für detaillierte Informationen zu Ankerfunktionen und ihrer Nutzung, siehe die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Landingpage und den [Anleitung zur Nutzung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-area")}}
- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- [`anchor()`](/de/docs/Web/CSS/anchor) Funktion
- [Anleitung zur Nutzung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Fallback-Optionen und bedingtes Verbergen für Overflow](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Anleitung
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
