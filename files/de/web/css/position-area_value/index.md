---
title: <position-area>
slug: Web/CSS/position-area_value
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}{{SeeCompatTable}}

Der **`<position-area>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) definiert die Zelle oder die überspannten Zellen eines **`position-area`-Rasters**, ein 3x3-Raster, dessen mittlere Zelle ein Ankerelement ist.

Die `<position-area>`-Schlüsselwortwerte können als Wert der {{cssxref("position-area")}}-Eigenschaft festgelegt werden, um ein ankergesetztes Element an einem bestimmten Ort relativ zu seinem zugehörigen Ankerelement zu platzieren.

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

Positionsbereiche basieren auf dem Konzept eines **`position-area`-Rasters**, ein 3x3-Raster von Kacheln, das aus vier Rasterlinien besteht, zwei auf jeder Achse, mit einem Ankerelement als mittlere Kachel:

![Das position-area Raster, wie unten beschrieben](position-area.png)

Wenn es als Wert der `position-area`-Eigenschaft eines positionierten Elements verwendet wird, sind die Abmessungen der mittleren Kachel durch den [enthaltenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Standardankerelements des Elements definiert. Die Abmessungen des äußeren Randes des Rasters werden durch den enthaltenden Block des positionierten Elements definiert. Logische Schlüsselbegriffe basieren im Allgemeinen auf dem Schreibmodus und der Richtung des enthaltenden Blocks, mit Ausnahme der `self-*`-Schlüsselbegriffe, die aus dem Schreibmodus des ankergesetzten Elements berechnet werden.

Die Rasterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die physischen Werte `top`, `center` und `bottom` repräsentiert. Sie haben auch logische Entsprechungen wie `block-start`, `center` und `block-end` sowie Koordinatenäquivalente — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` repräsentiert. Sie haben auch logische Entsprechungen wie `inline-start`, `center` und `inline-end` sowie Koordinatenäquivalente — `x-start`, `center` und `x-end`.

`<position-area>`-Werte enthalten ein oder zwei Schlüsselwörter, die einen bestimmten Bereich des `position-area`-Rasters definieren. Das Festlegen eines `position-area`-Wertes auf einem positionierten Element platziert dessen enthaltenden Block in dem angegebenen Rasterbereich:

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

- [Physische Raster-Schlüsselwörter](#physische_raster-schlüsselwörter)
- [Allgemeine logische Zeilen- und Spaltenschlüsselwörter](#allgemeine_logische_zeilen-_und_spaltenschlüsselwörter)
- [Explizite logische Inline- und Block-Schlüsselwörter](#explizite_inline-_und_blocklogische_schlüsselwörter)
- [Koordinatenraster-Schlüsselwörter](#koordinatenraster-schlüsselwörter)

> [!NOTE]
> Im Allgemeinen können Sie unterschiedliche Typen nicht in einem Wert mischen, z.B. physisch und logisch. Dies führt zu ungültigen Werten. Zum Beispiel ist `position-area: bottom inline-end` kein gültiger Wert, weil es physische und logische Schlüsselwörter mischt.

## Physische Raster-Schlüsselwörter

Die physischen Raster-Schlüsselwörter spezifizieren eine Zelle oder einen Abschnitt des `position-area`-Rasters mit physischen Werten. Diese Werte werden nicht durch {{cssxref("writing-mode")}} oder {{cssxref("direction")}}-Einstellungen beeinflusst.

Mit physischen Zeilen- und Spaltenschlüsselwörtern können Sie ein Schlüsselwort aus jeder der beiden Listen unten auswählen, um eine einzelne spezifische Rasterkachel auszuwählen:

- `top`, `center` oder `bottom`: Die obere, mittlere oder untere Zeile des Rasters.
- `left`, `center` oder `right`: Die linke, mittlere oder rechte Spalte des Rasters.

Zum Beispiel wählt `top left` die obere linke Kachel aus, während `center right` die mittlere Kachel der rechten Spalte auswählt.

### Physische Spannraster-Schlüsselwörter

Die physischen Spann-Schlüsselwörter — in Kombination mit einem physischen Zeilen- oder Spaltenschlüsselwort — spezifizieren eine zweite Rasterkachel, in die sich der Positionsbereich ausdehnen soll. Wenn eine solche Kombination als Wert der `position-area`-Eigenschaft festgelegt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert; es dehnt sich dann in die im Spann-Schlüsselwort angegebene Richtung aus und überspannt zwei Rasterkacheln:

- `span-left`

  - : Überspannen Sie die mittlere Spalte und die linke Spalte des Rasters.

- `span-right`

  - : Überspannen Sie die mittlere Spalte und die rechte Spalte des Rasters.

- `span-top`

  - : Überspannen Sie die mittlere Zeile und die obere Zeile des Rasters.

- `span-bottom`

  - : Überspannen Sie die mittlere Zeile und die untere Zeile des Rasters.

- `span-all`

  - : Gültig mit allen Schlüsselworttypen, überspannt die angegebene Zelle sowie die angrenzenden Zellen in derselben Zeile oder Spalte. Siehe [`span-all`](#span-all_2) unten.

Zum Beispiel überspannt `top span-left` die oberen mittleren und oberen linken Rasterzellen.

> [!NOTE]
> Der Versuch, ein Zeilen- oder Spaltenschlüsselwort mit einem ungeeigneten Spann-Schlüsselwort zu kombinieren, führt zu einem ungültigen Wert. Zum Beispiel ist `right span-right` ungültig — Sie können nicht die mittlere rechte Rasterkachel auswählen und dann versuchen, weiter nach rechts zu spannen.

### Physische Standardwerte für Raster-Schlüsselwörter

Wenn nur ein einziges physisches Schlüsselwort im `position-area`-Wert angegeben wird, wird der andere Wert wie folgt impliziert:

- `left`, `right`, `top` oder `bottom`

  - : Der andere Wert wird auf [`span-all`](#span-all_2) standardmäßig gesetzt, wodurch das Element die gesamten drei Kacheln des Rasters oder der Zeile, in die es ursprünglich platziert wurde, überspannt. Zum Beispiel ist `left` äquivalent zu `left span-all`.

- `center`, `span-left`, `span-right`, `span-top` oder `span-bottom`

  - : Der andere Wert wird auf `center` standardmäßig gesetzt. Zum Beispiel ist `span-left` äquivalent zu `center span-left` und `center` ist äquivalent zu `center center`.

## Logische Raster-Schlüsselwörter

Die logischen Raster-Schlüsselwörter spezifizieren einen Bereich des `position-area`-Rasters mit logischen Werten. Mit diesen Werten werden die Position und die Richtung durch {{cssxref("writing-mode")}} und {{cssxref("direction")}}-Einstellungen entweder am [enthältenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements oder im Fall der `self`-Schlüsselwörter durch das positionierte Element selbst beeinflusst. Es gibt zwei Arten von logischen Schlüsselwörtern; allgemeine und explizite.

### Allgemeine logische Zeilen- und Spaltenschlüsselwörter

Die allgemeinen logischen Schlüsselwörter verwenden dieselben Begriffe für die Inline- und Block-Richtungen, wobei die Richtung durch die Position des Schlüsselbegriffs innerhalb eines Paares von `<position-area>`-Werten bestimmt wird. Der erste Wert definiert die Block-Richtungsposition und der zweite Wert definiert den Inline-Wert. Sie können einen oder zwei Schlüsselbegriffe aus der folgenden Liste angeben. Das Spezifizieren von zwei aus dieser Liste definiert eine einzelne spezifische Rasterkachel. Die Position oder Richtung des Schlüsselworts ist:

- `start`

  - : Der Start der Block- oder Inline-Richtung des Rasters, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `end`

  - : Das Ende der Block- oder Inline-Richtung des Rasters, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `self-start`

  - : Der Start der Block- oder Inline-Richtung des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `self-end`

  - : Das Ende der Block- oder Inline-Richtung des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`

  - : Die Mitte der Block-Richtung des Rasters (wenn dieses Schlüsselwort zuerst angegeben wird) oder der Inline-Richtung (wenn dieses Schlüsselwort als zweites angegeben wird).

Zum Beispiel beschreiben `start end` und `self-start self-end` beide die Position am Start der Block-Richtung und am Ende der Inline-Richtung. Mit `writing-mode: horizontal-tb` eingestellt, ist dies oben rechts des Ankers, während es bei `writing-mode: vertical-rl` unten rechts des Ankers ist.

#### Allgemeine logische Spannraster-Schlüsselwörter

Die allgemeinen logischen Spann-Schlüsselwörter — in Kombination mit einem logischen Zeilen- oder Spaltenschlüsselwort — spezifizieren eine zweite Rasterkachel, in die sich der Positionsbereich ausdehnen soll. Wenn eine solche Kombination als Wert der `position-area`-Eigenschaft festgelegt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert, und es dehnt sich dann in die im Spann-Schlüsselwort angegebene Richtung aus und überspannt zwei Rasterkacheln:

- `span-start`

  - : Überspannt die Mittelkachel und die Startkachel der Rasterzeile/-spalte, wobei die Richtung auf den Schreibmodus des enthältenden Blocks des Elements verweist.

- `span-end`

  - : Überspannt die Mittelkachel und die Endkachel der Rasterzeile/-spalte, wobei die Richtung auf den Schreibmodus des enthältenden Blocks des Elements verweist.

- `span-self-start`

  - : Überspannt die Mittelkachel und die Startkachel der Rasterzeile/-spalte im eigenen Schreibmodus des positionierten Elements.

- `span-self-end`

  - : Überspannt die Mittelkachel und die Endkachel der Rasterzeile/-spalte, berechnet aus dem eigenen Schreibmodus des Elements.

Zum Beispiel spezifizieren `start span-end` und `self-start span-self-end` beide einen Rasterpositionsbereich, der in der Mitte der Startblockreihe beginnt und sich über die Kacheln in dieser Reihe erstreckt, die sich in den Inline-Mitte- und Endspalten befinden. Mit `writing-mode: horizontal-tb` eingestellt, würde dies über das obere Zentrum und den oberen rechten Anker erstrecken, während es bei `writing-mode: vertical-rl` das Element über das rechte Zentrum und unten rechts erstreckt.

### Explizite Inline- und Blocklogische Schlüsselwörter

Die expliziten Inline- und Blocklogischen Zeilen- und Spaltenschlüsselwörter beziehen sich explizit auf eine Block- (Zeile) oder Inline- (Spalte) Position. Sie können ein Schlüsselwort für die Blockrichtung und eines für die Inlinerichtung angeben, um eine einzelne spezifische Rasterkachel auszuwählen. Im Gegensatz zu allgemeinen logischen Schlüsselwortwerten spielt die Reihenfolge der Schlüsselwörter keine Rolle. Das Deklarieren von zwei Schlüsselwörtern in derselben Achse macht den Wert jedoch ungültig.

- `block-start`

  - : Der Start der Blockrichtung des Rasters, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `block-end`

  - : Das Ende der Blockrichtung des Rasters, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `inline-start`

  - : Der Start der Inlinerichtung des Rasters, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `inline-end`

  - : Das Ende der Inlinerichtung des Rasters, berechnet aus dem Schreibmodus des enthältenden Blocks.

Zum Beispiel spezifiziert `block-start inline-end` die Kachel am Start der Blockrichtung und am Ende der Inlinerichtung. Mit `writing-mode: horizontal-tb` eingestellt, wäre dies die Kachel oben rechts des Ankers, während es bei `writing-mode: vertical-rl` die Kachel unten rechts wäre.

> [!NOTE]
> Die Spezifikation definiert `self`-Äquivalente dieser Schlüsselwörter — `block-self-start`, `block-self-end`, `inline-self-start` und `inline-self-end`. Diese werden jedoch derzeit in keinem Browser unterstützt.

#### Explizite Inline- und Blocklogische Spann-Schlüsselwörter

Die expliziten logischen Spann-Schlüsselwörter — in Kombination mit einem logischen Zeilen- oder Spaltenschlüsselwort — spezifizieren eine zweite Rasterkachel, in die sich der Positionsbereich ausdehnen soll. Wenn eine solche Kombination als Wert der `position-area`-Eigenschaft festgelegt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte, basierend auf dem Schreibmodus des enthältenden Blocks, platziert, und es dehnt sich dann in die im Spann-Schlüsselwort angegebene Richtung aus und überspannt zwei Rasterkacheln:

- `span-block-start`

  - : Überspannt die Mittelkachel und die Block-Startkachel der angegebenen Inline-Spalte.

- `span-block-end`

  - : Überspannt die Mittelkachel und die Block-Endkachel der angegebenen Inline-Spalte.

- `span-inline-start`

  - : Überspannt die Mittelkachel und die Inline-Startkachel der angegebenen Blockreihe.

- `span-inline-end`

  - : Überspannt die Mittelkachel und die Inline-Endkachel der angegebenen Blockreihe.

Zum Beispiel, `block-end span-inline-start` wählt die Mittelkachel der Endblockreihe aus und erstreckt sich über die Kacheln in dieser Reihe, die sich in den Inline-Mitte- und Startspalten befinden. Mit `writing-mode: horizontal-tb` eingestellt, würde dies die unteren mittleren und unteren linken Rasterkacheln überspannen, während es bei `writing-mode: vertical-rl` die links-mittleren und oberen linken Rasterkacheln überspannen würde.

> [!NOTE]
> Die Spezifikation definiert `self`-Äquivalente dieser Schlüsselwörter, beispielsweise — `span-self-block-start`, `span-self-block-end`, `span-self-inline-start`, und `span-self-inline-end`. Diese werden jedoch derzeit in keinem Browser unterstützt.

> [!NOTE]
> Der Versuch, ein Zeilen- oder Spaltenschlüsselwort mit einem ungeeigneten Spann-Schlüsselwort zu kombinieren, führt zu einem ungültigen Eigenschaftswert. Zum Beispiel ist `block-end span-block-end` ungültig — Sie können nicht die mittlere Block-Endreihe auswählen und dann versuchen, eine Kachel weiter über die Block-Endrichtung zu spannen.

### Standards für logische Rasterschlüsselwörter

Wenn nur ein einziges logisches `<position-area>`-Schlüsselwort angegeben wird, wird der andere Wert wie folgt impliziert:

- `start`, `end`, `self-start`, oder `self-end`

  - : Der andere Wert ist standardmäßig derselbe wie der erste Wert, wobei die Rasterzelle in der Startzeile und -spalte oder der Endzeile und -spalte ausgewählt wird.

- `span-start`, `span-self-start`, `span-end`, `span-self-end`

  - : Der andere Wert wird auf `center` standardmäßig gesetzt. Zum Beispiel ist `span-start` äquivalent zu `span-start center`.

- `block-start`, `block-end`, `inline-start`, `inline-end`

  - : Der andere Wert wird auf [`span-all`](#span-all_2) standardmäßig gesetzt, wobei alle drei Kacheln der festgelegten Spalte oder Reihe überspannt werden. Zum Beispiel ist `block-start` äquivalent zu `block-start span-all`.

- `span-block-start`, `span-block-end`, `span-inline-start`, `span-inline-end`

  - : Der andere Wert wird auf `center` standardmäßig gesetzt. Zum Beispiel ist `span-inline-start` äquivalent zu `span-inline-start center`.

## Koordinatenraster-Schlüsselwörter

Diese Schlüsselwörter spezifizieren die Zellen des `position-area`-Rasters unter Verwendung von x- und y-Koordinatenwerten. Ihre Position/Richtung wird von {{cssxref("writing-mode")}} und/oder {{cssxref("direction")}}-Einstellungen entweder am [enthältenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) eines Elements oder, im Fall der `self`-Schlüsselwörter, am Element selbst beeinflusst.

Die Rasterzellen werden jedoch gemäß physischer Achsen und nicht nach Block-/Inline-Richtungen definiert:

- Für `writing-mode: horizontal-tb` und `vertical-lr` verläuft die x-Achse von links nach rechts und die y-Achse von oben nach unten.
- Für `writing-mode: horizontal-tb; direction: rtl` und `writing-mode: vertical-rl` verläuft die x-Achse von rechts nach links und die y-Achse von oben nach unten.

Mit Koordinaten- und Spaltenschlüsselwörtern können Sie ein Schlüsselwort der x-Achse und ein Schlüsselwort der y-Achse angeben, um eine einzelne spezifische Rasterkachel zu definieren.

Die x-Achse-Schlüsselwörter umfassen:

- `x-start`

  - : Die Startkachel entlang der x-Achse des Rasters, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `x-end`

  - : Die Endkachel entlang der x-Achse des Rasters, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `x-self-start`

  - : Die Startkachel entlang der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `x-self-end`

  - : Die Endkachel entlang der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`

  - : Die Mitte der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

Die y-Achse-Schlüsselwörter umfassen:

- `y-start`

  - : Die Startkachel entlang der y-Achse des Rasters, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `y-end`

  - : Die Endkachel entlang der y-Achse des Rasters, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `y-self-start`

  - : Die Startkachel entlang der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `y-self-end`

  - : Die Endkachel entlang der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`

  - : Die Mitte der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

Zum Beispiel selektieren sowohl `x-end y-start` als auch `x-self-end y-self-start` die Gitterzelle am Ende der x-Achse und am Anfang der y-Achse. Mit `writing-mode: horizontal-tb` eingestellt, wäre dies die Zelle oben rechts des Ankers, während sie bei `writing-mode: vertical-rl` oben links wäre.

### Spann-Schlüsselwörter für Koordinaten

Wenn sie mit einem Koordinatenzeilen- oder Spaltenschlüsselwort kombiniert werden, spezifizieren die Koordinatenspann-Schlüsselwörter eine zweite Rasterkachel, in die sich der Positionsbereich ausdehnt. Wenn eine solche Kombination als `position-area`-Eigenschaftswert festgelegt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert, und es erstreckt sich dann in die im Spann-Schlüsselwort angegebene Richtung, wobei es zwei Rasterkacheln umspannt:

- `span-x-start`

  - : Überspannt die Mittelkachel und die x-Startkachel der angegebenen y-Achsenreihe.

- `span-x-end`

  - : Überspannt die Mittelkachel und die x-Endkachel der angegebenen y-Achsenreihe.

- `span-y-start`

  - : Überspannt die Mittelkachel und die y-Startkachel der angegebenen x-Achsenreihe.

- `span-y-end`

  - : Überspannt die Mittelkachel und die y-Endkachel der angegebenen x-Achsenreihe.

Zum Beispiel wählt `y-end span-x-end` die Kachel in der Mitte der End-y-Reihe und erstreckt sich über die Kacheln in dieser Reihe, die sich in den x-Mitte- und x-Endspalten befinden. Mit `writing-mode: horizontal-tb` eingestellt, würde der Position-Rasterbereich die Kacheln unten in der Mitte und unten rechts des Rasters umspannen, während er bei `writing-mode: vertical-rl` die Kacheln unten in der Mitte und unten links umspannen würde.

> [!NOTE]
> Die Spezifikation definiert keine separaten Koordinaten `self` Spann-Schlüsselwörter, aber diese sind nicht erforderlich — die Spann-Schlüsselwörter können sowohl mit Koordinatenzeilen- als auch mit Spaltenschlüsselwörtern verwendet werden.

### Standards für Koordinatengitter-Schlüsselwörter

Wenn nur ein einziges Koordinatengitter-`<position-area>`-Schlüsselwort angegeben wird, wird der andere Wert wie folgt impliziert:

- `x-start`, `x-self-start`, `x-end`, `x-self-end`, `y-start`, `y-self-start`, `y-end`, oder `y-self-end`

  - : Der andere Wert wird auf [`span-all`](#span-all_2) standardmäßig gesetzt, wobei die Rasterkacheln ausgewählt werden, die alle drei Kacheln der Spalte oder Reihe umspannen, in die sie ursprünglich platziert wurden. Zum Beispiel ist `x-start` äquivalent zu `x-start span-all`.

- `span-x-start`, `span-x-end`, `span-y-start`, oder `span-y-end`

  - : Der andere Wert wird auf `center` standardmäßig gesetzt. Zum Beispiel ist `span-start` äquivalent zu `span-start center`.

## `span-all`

`span-all` ist ein spezielles Schlüsselwort, das mit allen der oben aufgeführten Zeilen- und Spaltenschlüsselwörter verwendbar ist. Wenn Sie zwei Werte angeben — ein Zeilen-/Spaltenschlüsselwort und `span-all`, wird das Element in der angegebenen Zeile oder Spalte platziert, und es werden dann alle Kacheln in dieser Zeile oder Spalte umspannt.

## Beispiele

Siehe die {{cssxref("position-area")}}-Eigenschaftsseite.

Für detaillierte Informationen zu Ankerfunktionen und - Verwendung, siehe das [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul und die [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Anleitung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-area")}}
- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- [`anchor()`](/de/docs/Web/CSS/anchor) Funktion
- [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Anleitung
- [Umgang mit Überlauf: Versuch von Alternativen und bedingtem Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Anleitung
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
