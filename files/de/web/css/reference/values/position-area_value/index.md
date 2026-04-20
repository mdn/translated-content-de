---
title: "`<position-area>` CSS-Typ"
short-title: <position-area>
slug: Web/CSS/Reference/Values/position-area_value
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Der **`<position-area>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) definiert die Zelle oder die überspannten Zellen eines **Position-Area-Grids**, ein 3x3-Raster, dessen mittlere Zelle ein Ankerelement ist.

Die `<position-area>` Schlüsselwortwerte können als Wert der {{cssxref("position-area")}} Eigenschaft festgelegt werden, um ein Anker-positioniertes Element an einem bestimmten Ort relativ zu seinem zugehörigen Ankerelement zu platzieren.

## Syntax

```plain
<position-area> = [
  [ left | center | right | span-left | span-right | x-start | x-end | span-x-start | span-x-end | self-x-start | self-x-end | span-self-x-start | span-self-x-end | span-all ]
||
  [ top | center | bottom | span-top | span-bottom | y-start | y-end | span-y-start | span-y-end | self-y-start | self-y-end | span-self-y-start | span-self-y-end | span-all ]
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

Positionsbereiche basieren auf dem Konzept eines **Position-Area-Grids**, ein 3x3-Raster von Kacheln, die aus vier Rasterlinien bestehen, zwei auf jeder Achse, wobei ein Ankerelement die mittlere Kachel ist:

![Das Position-Area-Grid, wie unten beschrieben](position-area.png)

Wenn es als Wert der `position-area`-Eigenschaft eines positionierten Elements verwendet wird, werden die Dimensionen der mittleren Kachel durch den [umschließenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) des Standardelements des Ankers definiert. Die Dimensionen des äußeren Randes des Rasters werden durch den umschließenden Block des positionierten Elements definiert. Logische Schlüsselbegriffe basieren allgemein auf dem Schreibmodus und der Richtung des umschließenden Blocks, mit Ausnahme der `self-*` Schlüsselbegriffe, die vom Schreibmodus des Anker-positionierten Elements berechnet werden.

Die Rasterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Entsprechungen wie `block-start`, `center` und `block-end` und Koordinatenäquivalente — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Entsprechungen wie `inline-start`, `center` und `inline-end` und Koordinatenäquivalente — `x-start`, `center` und `x-end`.

`<position-area>` Werte enthalten ein oder zwei Schlüsselwörter, die einen bestimmten Bereich des Position-Area-Grids definieren. Das Festlegen eines `position-area` Wertes auf einem positionierten Element platziert seinen umschließenden Block im angegebenen Rasterbereich:

```css
/* Examples: Two keywords to place the element in a single specific tile */
position-area: top left;
position-area: bottom right;
position-area: start end;
position-area: center end;
position-area: block-start center;
position-area: inline-start block-end;
position-area: x-start y-end;
position-area: center self-y-end;

/* Examples: Two keywords to span the element across two tiles */
position-area: top span-left;
position-area: span-bottom right;
position-area: center span-start;
position-area: inline-start span-block-end;
position-area: y-start span-x-end;

/* Examples: Two keywords to span the element across three tiles */
position-area: top span-all;
position-area: block-end span-all;
position-area: self-x-start span-all;

/* Examples: One keyword with an implicit second keyword  */
position-area: top; /* equiv: top span-all */
position-area: inline-start; /* equiv: inline-start span-all */
position-area: center; /* equiv: center center */
position-area: span-all; /* equiv: center center */
position-area: start; /* equiv: start start */
position-area: end; /* equiv: end end */
```

Die verschiedenen Arten von Schlüsselwörtern, die verwendet werden können, umfassen:

- [Physische Raster-Schlüsselwörter](#physische_raster-schlüsselwörter)
- [Allgemeine logische Zeilen- und Spaltenschlüsselwörter](#allgemeine_logische_zeilen-_und_spaltenschlüsselwörter)
- [Explizite logische Inline- und Blockschlüsselwörter](#explizite_logische_inline-_und_blockschlüsselwörter)
- [Koordinaten-Raster-Schlüsselwörter](#koordinaten-raster-schlüsselwörter)

> [!NOTE]
> Im Allgemeinen können Sie nicht verschiedene Arten in einem Wert mischen, z.B. physisch und logisch. Ein solches Vorgehen ergibt ungültige Werte. Zum Beispiel ist `position-area: bottom inline-end` kein gültiger Wert, da er physische und logische Schlüsselwörter mischt.

## Physische Raster-Schlüsselwörter

Die physischen Raster-Schlüsselwörter geben eine Zelle oder einen Abschnitt des `position-area` Rasters unter Verwendung physischer Werte an. Diese Werte werden nicht von den Einstellungen {{cssxref("writing-mode")}} oder {{cssxref("direction")}} beeinflusst.

Mit physischen Zeilen- und Spaltenschlüsselwörtern können Sie ein Schlüsselwort aus jeder der beiden Listen unten auswählen, um eine einzelne spezifische Rasterkachel auszuwählen:

- `top`, `center` oder `bottom`: Die obere, mittlere oder untere Zeile des Rasters.
- `left`, `center` oder `right`: Die linke, mittlere oder rechte Spalte des Rasters.

Zum Beispiel: `top left` wählt die obere linke Kachel, während `center right` die mittlere Kachel der rechten Spalte auswählt.

### Physische Spannende Raster-Schlüsselwörter

Die physischen Spannenden Schlüsselwörter — in Kombination mit einem physischen Zeilen- oder Spaltenschlüsselwort — spezifizieren eine zweite Rasterkachel, in die sich der Positionsbereich ausdehnen soll. Wenn eine solche Kombination als Wert der `position-area`-Eigenschaft festgelegt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert; es dehnt sich dann in die im Spannen-Schlüsselwort angegebene Richtung aus und umfasst zwei Rasterkacheln:

- `span-left`
  - : Umfasst die mittlere Spalte und die linke Spalte des Rasters.

- `span-right`
  - : Umfasst die mittlere Spalte und die rechte Spalte des Rasters.

- `span-top`
  - : Umfasst die mittlere Zeile und die obere Zeile des Rasters.

- `span-bottom`
  - : Umfasst die mittlere Zeile und die untere Zeile des Rasters.

- `span-all`
  - : Gültig mit allen Schlüsselworttypen, umfasst die angegebene Zelle sowie die angrenzenden Zellen in derselben Zeile oder Spalte. Siehe [`span-all`](#span-all_2) unten.

Zum Beispiel: `top span-left` umfasst die obere mittlere und die obere linke Rasterzelle.

> [!NOTE]
> Das Paaren eines Zeilen- oder Spaltenschlüsselworts mit einem unangemessenen Spannungsschlüsselwort führt zu einem ungültigen Wert. Zum Beispiel ist `right span-right` ungültig — Sie können nicht die mittlere rechte Rasterkachel auswählen und dann weiter nach rechts dehnen.

### Standardwerte der physischen Raster-Schlüsselwörter

Wenn nur ein einzelnes physisches Schlüsselwort im `position-area` Wert angegeben wird, wird der andere Wert wie folgt impliziert:

- `left`, `right`, `top`, oder `bottom`
  - : Der andere Wert wird standardmäßig auf [`span-all`](#span-all_2) gesetzt, wodurch das Element alle drei Kacheln der Spalte oder Zeile, in der es ursprünglich platziert wurde, umspannt. Zum Beispiel ist `left` äquivalent zu `left span-all`.

- `center`, `span-left`, `span-right`, `span-top`, oder `span-bottom`
  - : Der andere Wert wird standardmäßig auf `center` gesetzt. Zum Beispiel ist `span-left` äquivalent zu `center span-left` und `center` ist äquivalent zu `center center`.

## Logische Raster-Schlüsselwörter

Die logischen Raster-Schlüsselwörter geben einen Bereich des Position-Area-Rasters unter Verwendung logischer Werte an. Mit diesen Werten werden Position und Richtung durch die {{cssxref("writing-mode")}} und {{cssxref("direction")}} Einstellungen des Elements oder, im Fall der `self` Schlüsselwörter, des positionierten Elements selbst, beeinflusst. Es gibt zwei Arten von logischen Schlüsselwörtern; allgemeine und explizite.

### Allgemeine logische Zeilen- und Spaltenschlüsselwörter

Die allgemeinen logischen Schlüsselwörter verwenden dieselben Begriffe für die Inline- und Block-Richtungen, wobei die Richtung durch die Position des Schlüsselbegriffs innerhalb eines Paars von `<position-area>` Werten bestimmt wird. Der erste Wert definiert die Blockrichtungsposition und der zweite Wert definiert die Inline-Richtung. Sie können ein oder zwei Schlüsselbegriffe aus der folgenden Liste angeben. Die Angabe von zwei aus dieser Liste definiert eine einzelne spezifische Rasterkachel. Die Position oder Richtung des Schlüsselwortes ist:

- `start`
  - : Der Beginn der Block- oder Inline-Richtung des Rasters, berechnet aus dem Schreibmodus des umschließenden Blocks.

- `end`
  - : Das Ende der Block- oder Inline-Richtung des Rasters, berechnet aus dem Schreibmodus des umschließenden Blocks.

- `self-start`
  - : Der Beginn der Block- oder Inline-Richtung des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `self-end`
  - : Das Ende der Block- oder Inline-Richtung des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der Blockrichtung des Rasters (wenn dieses Schlüsselwort zuerst angegeben wird) oder Inline-Richtung (wenn dieses Schlüsselwort als zweites angegeben wird).

Zum Beispiel beschreiben `start end` und `self-start self-end` beide die Position zu Beginn der Blockrichtung und am Ende der Inline-Richtung. Mit `writing-mode: horizontal-tb` eingestellt, ist dies die obere rechte Ecke des Ankers, während es mit `writing-mode: vertical-rl` die untere rechte Ecke ist.

#### Allgemeine Logische Spannende Zeilen- und Spaltenschlüsselwörter

Die allgemeinen logischen spannenden Schlüsselwörter — in Kombination mit einem logischen Zeilen- oder Spaltenschlüsselwort — spezifizieren eine zweite Rasterkachel, in die sich der Positionsbereich ausdehnen soll. Wenn eine solche Kombination als Wert der `position-area`-Eigenschaft festgelegt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert, und es dehnt sich dann in die im Spannen-Schlüsselwort angegebene Richtung aus und umfasst zwei Rasterkacheln:

- `span-start`
  - : Umfasst die mittlere Kachel und die Startkachel der Rasterzeile/-spalte, wobei sich die Richtung auf den Schreibmodus des umschließenden Blocks des Elements bezieht.

- `span-end`
  - : Umfasst die mittlere Kachel und die Endkachel der Rasterzeile/-spalte, wobei sich die Richtung auf den Schreibmodus des umschließenden Blocks des Elements bezieht.

- `span-self-start`
  - : Umfasst die mittlere Kachel und die Startkachel der Rasterzeile/-spalte im eigenen Schreibmodus des positionierten Elements.

- `span-self-end`
  - : Umfasst die mittlere Kachel und die Endkachel der Rasterzeile/-spalte, berechnet aus dem eigenen Schreibmodus des Elements.

Zum Beispiel spezifizieren `start span-end` und `self-start span-self-end` beide eine Rasterpositionsfläche, die in der Mitte der Startblockzeile beginnt und über die Kacheln dieser Zeile reicht, die sich in den Inline-Mittel- und Endspalten befinden. Mit `writing-mode: horizontal-tb` eingestellt, würde dies über die obere Mitte und rechts oben des Ankers reichen, während es mit `writing-mode: vertical-rl` die rechte Mitte und rechts unten umfassen würde.

### Explizite Logische Inline- und Blockschlüsselwörter

Die expliziten logischen Inline- und Block-Zeilen- und Spaltenschlüsselwörter beziehen sich explizit auf eine Block- (Zeilen-) oder Inline- (Spalten-) Position. Sie können ein Schlüsselwort für die Blockrichtung und eines für die Inlinerichtung angeben, um eine einzelne spezifische Rasterkachel auszuwählen. Im Gegensatz zu den allgemeinen logischen Schlüsselwortwerten spielt die Reihenfolge der Schlüsselwörter keine Rolle. Allerdings wird das Deklarieren von zwei Schlüsselwörtern entlang derselben Achse den Wert ungültig machen.

- `block-start`
  - : Der Beginn der Blockrichtung des Rasters, berechnet aus dem Schreibmodus des umschließenden Blocks.

- `block-end`
  - : Das Ende der Blockrichtung des Rasters, berechnet aus dem Schreibmodus des umschließenden Blocks.

- `inline-start`
  - : Der Beginn der Inline-Richtung des Rasters, berechnet aus dem Schreibmodus des umschließenden Blocks.

- `inline-end`
  - : Das Ende der Inline-Richtung des Rasters, berechnet aus dem Schreibmodus des umschließenden Blocks.

Zum Beispiel spezifiziert `block-start inline-end` die Kachel am Beginn der Blockrichtung und am Ende der Inline-Richtung. Mit `writing-mode: horizontal-tb` eingestellt, wäre dies die Kachel oben rechts des Ankers, während es bei `writing-mode: vertical-rl` die Kachel unten rechts wäre.

> [!NOTE]
> Die Spezifikation definiert `self`-Äquivalente dieser Schlüsselwörter — `block-self-start`, `block-self-end`, `inline-self-start`, und `inline-self-end`. Allerdings werden diese derzeit in keinem Browser unterstützt.

#### Explizite Logische Spannende Inline- und Block-Schlüsselwörter

Die expliziten logischen spannenden Schlüsselwörter — in Kombination mit einem logischen Zeilen- oder Spaltenschlüsselwort — spezifizieren eine zweite Rasterkachel für die Ausdehnung des Positionsbereichs. Wenn eine solche Kombination als Wert der `position-area`-Eigenschaft festgelegt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte, basierend auf dem Schreibmodus des umschließenden Blocks, platziert und dehnt sich dann in die durch das Spannen-Schlüsselwort angegebene Richtung aus, wobei zwei Rasterkacheln umspannt werden:

- `span-block-start`
  - : Umfasst die mittlere Kachel und die Block-Startkachel der angegebenen Inline-Spalte.

- `span-block-end`
  - : Umfasst die mittlere Kachel und die Block-Endkachel der angegebenen Inline-Spalte.

- `span-inline-start`
  - : Umfasst die mittlere Kachel und die Inline-Startkachel der angegebenen Blockzeile.

- `span-inline-end`
  - : Umfasst die mittlere Kachel und die Inline-Endkachel der angegebenen Blockzeile.

Zum Beispiel selektiert `block-end span-inline-start` die mittlere Kachel der Endblockzeile und erstreckt sich über die Kacheln in der Zeile, die in den Inline-Zentren und Startspalten sitzen. Mit `writing-mode: horizontal-tb` eingestellt, würde dies die untere Mitte und die untere linke Rasterkacheln umfassen, während es mit `writing-mode: vertical-rl` die linke Mitte und die obere linke Rasterkacheln umfassen würde.

> [!NOTE]
> Die Spezifikation definiert selbst-äquivalente dieser Schlüsselwörter, zum Beispiel — `span-self-block-start`, `span-self-block-end`, `span-self-inline-start`, und `span-self-inline-end`. Allerdings werden diese derzeit in keinem Browser unterstützt.

> [!NOTE]
> Der Versuch, ein Zeilen- oder Spaltenschlüsselwort mit einem unangemessenen Spannungsschlüsselwort zu koppeln, führt zu einem ungültigen Eigenschaftswert. Zum Beispiel ist `block-end span-block-end` ungültig — Sie können nicht die Mittellinie der Block-End-Zeile auswählen und dann versuchen, eine Kachel weiter über das Blockende hinaus zu spannen.

### Standardwerte der logischen Raster-Schlüsselwörter

Wenn nur ein einzelnes logisches `<position-area>` Schlüsselwort angegeben wird, wird der andere Wert wie folgt impliziert:

- `start`, `end`, `self-start`, oder `self-end`
  - : Der andere Wert wird standardmäßig als derselbe wie der erste Wert gesetzt, wodurch die Rasterzelle in der Startzeile und -spalte oder der Endzeile und -spalte ausgewählt wird.

- `span-start`, `span-self-start`, `span-end`, `span-self-end`
  - : Der andere Wert wird standardmäßig auf `center` gesetzt. Zum Beispiel ist `span-start` äquivalent zu `span-start center`.

- `block-start`, `block-end`, `inline-start`, `inline-end`
  - : Der andere Wert wird standardmäßig auf [`span-all`](#span-all_2) gesetzt, was alle drei Kacheln der gesetzten Spalte oder Zeile umfasst. Zum Beispiel ist `block-start` äquivalent zu `block-start span-all`.

- `span-block-start`, `span-block-end`, `span-inline-start`, `span-inline-end`
  - : Der andere Wert wird standardmäßig auf `center` gesetzt. Zum Beispiel ist `span-inline-start` äquivalent zu `span-inline-start center`.

## Koordinaten-Raster-Schlüsselwörter

Diese Schlüsselwörter geben die Zellen des `position-area` Rasters unter Verwendung von x- und y-Koordinatenwerten an. Deren Position/Richtung wird von den Einstellungen {{cssxref("writing-mode")}} und/oder {{cssxref("direction")}} entweder auf dem umschließenden Block eines Elements oder, im Fall der `self` Schlüsselwörter, auf dem Element selbst beeinflusst.

Allerdings sind die Rasterzellen gemäß physischen Achsen statt Block/Inline-Richtungen definiert:

- Für `writing-mode: horizontal-tb` und `vertical-lr`, verläuft die x-Achse von links nach rechts und die y-Achse von oben nach unten.
- Für `writing-mode: horizontal-tb; direction: rtl` und `writing-mode: vertical-rl`, verläuft die x-Achse von rechts nach links und die y-Achse von oben nach unten.

Mit Koordinaten-Reihen- und -Spaltenschlüsselwörtern können Sie ein Schlüsselwort von der x- und ein Schlüsselwort von der y-Achse angeben, um eine einzelne spezifische Rasterkachel zu definieren.

Die Schlüsselwörter der x-Achse umfassen:

- `x-start`
  - : Die Startkachel entlang der x-Achse des Rasters, berechnet aus dem Schreibmodus des umschließenden Blocks.

- `x-end`
  - : Die Endkachel entlang der x-Achse des Rasters, berechnet aus dem Schreibmodus des umschließenden Blocks.

- `self-x-start`
  - : Die Startkachel entlang der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `self-x-end`
  - : Die Endkachel entlang der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

Die Schlüsselwörter der y-Achse umfassen:

- `y-start`
  - : Die Startkachel entlang der y-Achse des Rasters, berechnet aus dem Schreibmodus des umschließenden Blocks.

- `y-end`
  - : Die Endkachel entlang der y-Achse des Rasters, berechnet aus dem Schreibmodus des umschließenden Blocks.

- `self-y-start`
  - : Die Startkachel entlang der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `self-y-end`
  - : Die Endkachel entlang der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

Zum Beispiel wählen `x-end y-start` und `self-x-end self-y-start` beide die Rasterzelle am Ende der x-Achse und am Beginn der y-Achse aus. Mit `writing-mode: horizontal-tb` eingestellt, wäre dies die Zelle oben rechts des Ankers, während es mit `writing-mode: vertical-rl` die Zelle oben links ist.

### Koordinaten-Spannende Schlüsselwörter

Wenn mit einem Koordinaten-Reihen- oder -Spaltenschlüsselwort kombiniert, spezifizieren die Koordinaten-spannenden Schlüsselwörter eine zweite Rasterkachel, in die sich der Positionsbereich ausdehnen soll. Wenn eine solche Kombination als Wert der `position-area`-Eigenschaft festgelegt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Reihe oder Spalte platziert, und es dehnt sich dann in die im Spannen-Schlüsselwort angegebene Richtung aus und umfasst zwei Rasterkacheln:

- `span-x-start`
  - : Umfasst die mittlere Kachel und die x-Startkachel der angegebenen y-Achsenreihe.

- `span-x-end`
  - : Umfasst die mittlere Kachel und die x-Endkachel der angegebenen y-Achsenreihe.

- `span-y-start`
  - : Umfasst die mittlere Kachel und die y-Startkachel der angegebenen x-Achsenspalte.

- `span-y-end`
  - : Umfasst die mittlere Kachel und die y-Endkachel der angegebenen x-Achsenspalte.

Zum Beispiel wählt `y-end span-x-end` die Kachel in der Mitte der End-y-Reihe aus und erstreckt sich über die Kacheln in dieser Reihe, die sich im x-Zentrum und in der x-Ende-Spalte befinden. Mit `writing-mode: horizontal-tb` eingestellt, würde der Positionsrasterbereich die Rasterkacheln in der unteren Mitte und unten rechts umfassen, während es mit `writing-mode: vertical-rl` die unteren Mitte und unteren linken Kacheln umspannt.

> [!NOTE]
> Die Spezifikation definiert keine separaten Koordinaten-`self`-Spannenschlüsselwörter, aber diese sind nicht erforderlich — die Spannenschlüsselwörter können mit beiden Koordinaten- Reihen- und -Spaltenschlüsselwörtern verwendet werden.

### Standardwerte der Koordinaten-Raster-Schlüsselwörter

Wenn nur ein einzelnes Koordinaten-Raster-`<position-area>`-Schlüsselwort angegeben wird, wird der andere Wert wie folgt impliziert:

- `x-start`, `self-x-start`, `x-end`, `self-x-end`, `y-start`, `self-y-start`, `y-end`, oder `self-y-end`
  - : Der andere Wert wird standardmäßig auf [`span-all`](#span-all_2) gesetzt, wodurch die Rasterzellen alle drei Kacheln der Spalte oder Zeile umspannen, in der es ursprünglich platziert wurde. Zum Beispiel ist `x-start` äquivalent zu `x-start span-all`.

- `span-x-start`, `span-x-end`, `span-y-start`, `span-y-end`, `span-self-x-start`, `span-self-x-end`, `span-self-y-end`, oder `span-self-y-start`
  - : Der andere Wert wird standardmäßig auf `center` gesetzt. Zum Beispiel ist `span-start` äquivalent zu `span-start center`.

## `span-all`

`span-all` ist ein spezielles Schlüsselwort, das mit allen oben aufgeführten Zeilen- und Spaltenschlüsselwörtern verwendbar ist. Wenn Sie zwei Werte angeben — ein Zeilen-/Spaltenschlüsselwort und `span-all`, wird das Element in der angegebenen Zeile oder Spalte platziert und dann auf alle Kacheln in dieser Zeile oder Spalte ausgedehnt.

## Beispiele

Siehe die {{cssxref("position-area")}} Eigenschaftsseite.

Für ausführliche Informationen zu Anker-Funktionen und -Nutzung, siehe das Modul [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) und den [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-area")}}
- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor) Funktion
- [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Verbergen für Überlauffehler](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
- [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
