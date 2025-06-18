---
title: <position-area>
slug: Web/CSS/position-area_value
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{CSSRef}}

Der **`<position-area>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) definiert die Zelle oder gespannten Zellen eines **Positionierungsbereichs-Rasters**, ein 3x3-Raster, dessen mittlere Zelle ein Ankerelement ist.

Die `<position-area>` Schlüsselwortwerte können als Wert der {{cssxref("position-area")}} Eigenschaft festgelegt werden, um ein ankerpositioniertes Element an einer bestimmten Position relativ zu seinem zugehörigen Ankerelement zu platzieren.

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

Positionsbereiche basieren auf dem Konzept eines **Positionierungsbereichs-Rasters**, einem 3x3-Raster von Kacheln, das aus vier Rasterlinien besteht, zwei auf jeder Achse, wobei ein Ankerelement die mittlere Kachel ist:

![Das Positionierungsbereichs-Raster, wie unten beschrieben](position-area.png)

Wenn es als Wert der `position-area` Eigenschaft eines positionierten Elements verwendet wird, werden die Dimensionen der mittleren Kachel durch den [enthaltenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Standardankerelements des Elements definiert. Die Dimensionen des äußeren Randes des Rasters werden durch den enthaltenen Block des positionierten Elements definiert. Logische Schlüsselbegriffe basieren in der Regel auf dem Schreibmodus und der Richtung des enthaltenden Blocks, mit Ausnahme der `self-*` Schlüsselbegriffe, die vom Schreibmodus des ankerpositionierten Elements berechnet werden.

Die Rasterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Entsprechungen wie `block-start`, `center` und `block-end` sowie Koordinatenentsprechungen — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Entsprechungen wie `inline-start`, `center` und `inline-end` sowie Koordinatenentsprechungen — `x-start`, `center` und `x-end`.

`<position-area>` Werte enthalten ein oder zwei Schlüsselwörter, die einen bestimmten Bereich des Positionierungsbereichs-Rasters definieren. Das Festlegen eines `position-area` Wertes auf einem positionierten Element platziert seinen enthaltenden Block im angegebenen Rasterbereich:

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
- [Generische logische Zeilen- und Spalten-Schlüsselwörter](#generische_logische_zeilen-_und_spalten-schlüsselwörter)
- [Explizite Inline- und Blocklogik-Schlüsselwörter](#explizite_inline-_und_blocklogik-schlüsselwörter)
- [Koordinatenraster-Schlüsselwörter](#koordinatenraster-schlüsselwörter)

> [!NOTE]
> Im Allgemeinen können Sie keine verschiedenen Typen in einem Wert mischen, z.B. physische und logische. Solch ein Versuch führt zu ungültigen Werten. Zum Beispiel ist `position-area: bottom inline-end` kein gültiger Wert, weil er physische und logische Schlüsselwörter mischt.

## Physische Raster-Schlüsselwörter

Die physischen Raster-Schlüsselwörter spezifizieren eine Zelle oder einen Abschnitt des `position-area` Rasters mit physischen Werten. Diese Werte werden nicht durch die Einstellungen von {{cssxref("writing-mode")}} oder {{cssxref("direction")}} beeinflusst.

Mit physischen Zeilen- und Spaltenschlüsselwörtern können Sie ein Schlüsselwort aus jeder der beiden untenstehenden Listen auswählen, um eine einzelne spezifische Rasterkachel zu wählen:

- `top`, `center` oder `bottom`: Die obere, mittlere oder untere Zeile des Rasters.
- `left`, `center` oder `right`: Die linke, mittlere oder rechte Spalte des Rasters.

Zum Beispiel wählt `top left` die oben linke Kachel, während `center right` die mittlere Kachel der rechten Spalte wählt.

### Physische Spanning-Raster-Schlüsselwörter

Die physischen Spanning-Schlüsselwörter — wenn sie mit einem physischen Zeilen- oder Spaltenschlüsselwort kombiniert werden — spezifizieren eine zweite Rasterkachel, in die sich der Positionierungsbereich ausdehnen soll. Wenn eine solche Kombination als `position-area` Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert; es erstreckt sich dann in die Richtung, die im Spanning-Schlüsselwort angegeben ist, über zwei Rasterkacheln:

- `span-left`

  - : Umspannt die mittlere Spalte und die linke Spalte des Rasters.

- `span-right`

  - : Umspannt die mittlere Spalte und die rechte Spalte des Rasters.

- `span-top`

  - : Umspannt die mittlere Zeile und die obere Zeile des Rasters.

- `span-bottom`

  - : Umspannt die mittlere Zeile und die untere Zeile des Rasters.

- `span-all`

  - : Gültig bei allen Schlüsselworttypen, umspannt die Zelle sowie die angrenzenden Zellen in derselben Zeile oder Spalte. Siehe [`span-all`](#span-all_2) unten.

Zum Beispiel spannt `top span-left` die oberen mittleren und oberen linken Rasterzellen.

> [!NOTE]
> Der Versuch, ein Zeilen- oder Spaltenschlüsselwort mit einem unangemessenen Spanning-Schlüsselwort zu paaren, führt zu einem ungültigen Wert. Zum Beispiel ist `right span-right` ungültig — Sie können nicht die mittlere rechte Rasterkachel auswählen und dann versuchen, weiter nach rechts zu spannen.

### Physische Raster-Schlüsselwort-Defaults

Wenn nur ein einziges physisches Schlüsselwort im `position-area` Wert angegeben ist, wird der andere Wert wie folgt impliziert:

- `left`, `right`, `top` oder `bottom`

  - : Der andere Wert wird zu [`span-all`](#span-all_2), wodurch das Element alle drei Kacheln der Zeile oder Spalte umspannt, in der es zunächst platziert wurde. Zum Beispiel ist `left` äquivalent zu `left span-all`.

- `center`, `span-left`, `span-right`, `span-top` oder `span-bottom`

  - : Der andere Wert wird auf `center` standardisiert. Zum Beispiel ist `span-left` äquivalent zu `center span-left` und `center` ist äquivalent zu `center center`.

## Logische Raster-Schlüsselwörter

Die logischen Raster-Schlüsselwörter spezifizieren einen Bereich des Positionierungsbereichs-Rasters mit logischen Werten. Bei diesen Werten werden die Position und Richtung durch die Einstellungen von {{cssxref("writing-mode")}} und {{cssxref("direction")}} entweder auf den [Enthaltungsblock](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements oder, im Fall der `self` Schlüsselwörter, auf das positionierte Element selbst beeinflusst. Es gibt zwei Arten von logischen Schlüsselwörtern; generische und explizite.

### Generische logische Zeilen- und Spalten-Schlüsselwörter

Die generischen logischen Schlüsselwörter verwenden dieselben Begriffe für die Inline- und Blockrichtungen, wobei die Richtung durch die Position des Schlüsselbegriffs innerhalb eines Paares von `<position-area>` Werten bestimmt wird. Der erste Wert definiert die Blockrichtungsposition und der zweite Wert definiert die Inline-Richtung. Sie können ein oder zwei Schlüsselbegriffe aus der folgenden Liste angeben. Das Angeben von zwei Schlüsselbegriffen in dieser Liste definiert eine einzelne spezifische Rasterkachel. Die Schlüsselwortposition oder -richtung ist:

- `start`

  - : Der Anfang der Block- oder Inlinerichtung des Rasters, berechnet aus dem Schreibmodus des enthaltenden Blocks.

- `end`

  - : Das Ende der Block- oder Inlinerichtung des Rasters, berechnet aus dem Schreibmodus des enthaltenden Blocks.

- `self-start`

  - : Der Anfang der Block- oder Inlinerichtung des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `self-end`

  - : Das Ende der Block- oder Inlinerichtung des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`

  - : Die Mitte der Blockrichtung des Rasters (wenn dieses Schlüsselwort zuerst angegeben wird) oder der Inlinerichtung (wenn dieses Schlüsselwort als zweites angegeben wird).

Zum Beispiel beschreiben `start end` und `self-start self-end` beide die Position am Anfang der Blockrichtung und am Ende der Inlinerichtung. Mit `writing-mode: horizontal-tb` eingestellt, ist dies oben rechts des Ankers, während es mit `writing-mode: vertical-rl` unten rechts des Ankers ist.

#### Generische logische Spanning-Zeilen- und Spalten-Schlüsselwörter

Die generischen logischen Spanning-Schlüsselwörter — wenn sie mit einem logischen Zeilen- oder Spaltenschlüsselwort kombiniert werden — spezifizieren eine zweite Rasterkachel, in die sich der Positionierungsbereich ausdehnen soll. Wenn eine solche Kombination als `position-area` Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert, und es erstreckt sich dann in die Richtung, die im Spanning-Schlüsselwort angegeben ist, über zwei Rasterkacheln:

- `span-start`

  - : Span die mittlere Kachel und die Startkachel der Rasterzeile/-spalte, wobei sich die Richtung auf den Schreibmodus des enthaltenden Blocks des Elements bezieht.

- `span-end`

  - : Span die mittlere Kachel und die Endkachel der Rasterzeile/-spalte, wobei sich die Richtung auf den Schreibmodus des enthaltenden Blocks des Elements bezieht.

- `span-self-start`

  - : Span die mittlere Kachel und die Startkachel der Rasterzeile/-spalte für den eigenen Schreibmodus des positionierten Elements.

- `span-self-end`

  - : Span die mittlere Kachel und die Endkachel der Rasterzeile/-spalte, berechnet aus dem eigenen Schreibmodus des Elements.

Zum Beispiel spezifizieren `start span-end` und `self-start span-self-end` einen Positionierungsbereich, der in der Mitte der Startblockzeile beginnt und sich über die Kacheln in dieser Zeile erstreckt, die in den Inline-Mitte- und Endspalten liegen. Mit `writing-mode: horizontal-tb` eingestellt, würde sich dies über die obere Mitte und das obere rechte des Ankers erstrecken, während es mit `writing-mode: vertical-rl` eingestellt das Element über die rechte Mitte und das untere rechte erstrecken würde.

### Explizite Inline- und Blocklogik-Schlüsselwörter

Die expliziten Inline- und Blocklogik-Zeilen- und Spalten-Schlüsselwörter beziehen sich explizit auf eine Block- (Zeile) oder Inline- (Spalte) Position. Sie können ein Schlüsselwort für die Blockrichtung und eines für die Inlinerichtung angeben, um eine einzelne spezifische Rasterkachel auszuwählen. Im Gegensatz zu generischen logischen Schlüsselwortwerten spielt die Reihenfolge der Schlüsselwörter keine Rolle. Die Angabe von zwei Schlüsselwörtern in derselben Achse macht den Wert jedoch ungültig.

- `block-start`

  - : Der Anfang der Blockrichtung des Rasters, berechnet aus dem Schreibmodus des enthaltenden Blocks.

- `block-end`

  - : Das Ende der Blockrichtung des Rasters, berechnet aus dem Schreibmodus des enthaltenden Blocks.

- `inline-start`

  - : Der Anfang der Inlinerichtung des Rasters, berechnet aus dem Schreibmodus des enthaltenden Blocks.

- `inline-end`

  - : Das Ende der Inlinerichtung des Rasters, berechnet aus dem Schreibmodus des enthaltenden Blocks.

Zum Beispiel spezifiziert `block-start inline-end` die Kachel am Anfang der Blockrichtung und am Ende der Inlinerichtung. Mit `writing-mode: horizontal-tb` eingestellt, wäre dies die Kachel oben rechts des Ankers, während es mit `writing-mode: vertical-rl` eingestellt die Kachel unten rechts wäre.

> [!NOTE]
> Die Spezifikation definiert `self`-Äquivalente dieser Schlüsselwörter — `block-self-start`, `block-self-end`, `inline-self-start` und `inline-self-end`. Diese werden jedoch derzeit von keinem Browser unterstützt.

#### Explizite Inline- und Blocklogik-Spanning-Schlüsselwörter

Die expliziten logischen Spanning-Schlüsselwörter — wenn sie mit einem logischen Zeilen- oder Spaltenschlüsselwort kombiniert werden — spezifizieren eine zweite Rasterkachel, in die sich der Positionierungsbereich ausdehnen soll. Wenn eine solche Kombination als `position-area` Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert, basierend auf dem Schreibmodus des enthaltenden Blocks, und es erstreckt sich dann in die Richtung, die im Spanning-Schlüsselwort angegeben ist, über zwei Rasterkacheln:

- `span-block-start`

  - : Umspannt die mittlere Kachel und die Blockstartkachel der angegebenen Inline-Spalte.

- `span-block-end`

  - : Umspannt die mittlere Kachel und die Blockendkachel der angegebenen Inline-Spalte.

- `span-inline-start`

  - : Umspannt die mittlere Kachel und die Inlinestartkachel der angegebenen Blockzeile.

- `span-inline-end`

  - : Umspannt die mittlere Kachel und die Inlineendkachel der angegebenen Blockzeile.

Zum Beispiel wählt `block-end span-inline-start` die mittlere Kachel der Endblockzeile und erstreckt sich über die Kacheln in dieser Zeile, die in den Inline-Mitte- und Startspalten liegen. Mit `writing-mode: horizontal-tb` eingestellt, würde dies die Kacheln an der unteren Mitte und unten links umfassen, während es mit `writing-mode: vertical-rl` eingestellt die Kacheln links in der Mitte und oben links umfassen würde.

> [!NOTE]
> Die Spezifikation definiert `self`-Äquivalente dieser Schlüsselwörter, zum Beispiel — `span-self-block-start`, `span-self-block-end`, `span-self-inline-start`, und `span-self-inline-end`. Diese werden jedoch derzeit in keinem Browser unterstützt.

> [!NOTE]
> Der Versuch, ein Zeilen- oder Spaltenschlüsselwort mit einem unangemessenen Spanning-Schlüsselwort zu paaren, führt zu einem ungültigen Eigenschaftswert. Zum Beispiel ist `block-end span-block-end` ungültig — Sie können nicht die Center-Block-End-Zeile auswählen und dann versuchen, eine Kachel weiter über das Block-Ende hinaus zu spannen.

### Logische Raster-Schlüsselwort-Defaults

Wenn nur ein einziges logisches `<position-area>` Schlüsselwort angegeben ist, wird der andere Wert wie folgt impliziert:

- `start`, `end`, `self-start` oder `self-end`

  - : Der andere Wert wird auf denselben Wert wie der erste Wert gesetzt, wodurch die Rasterzelle in der Startreihe und Spalte oder der Endreihe und Spalte ausgewählt wird.

- `span-start`, `span-self-start`, `span-end`, `span-self-end`

  - : Der andere Wert wird auf `center` standardisiert. Zum Beispiel ist `span-start` äquivalent zu `span-start center`.

- `block-start`, `block-end`, `inline-start`, `inline-end`

  - : Der andere Wert wird zu [`span-all`](#span-all_2), wodurch alle drei Kacheln der Spalte oder Zeile umspannt werden, die festgelegt wurde. Zum Beispiel ist `block-start` äquivalent zu `block-start span-all`.

- `span-block-start`, `span-block-end`, `span-inline-start`, `span-inline-end`

  - : Der andere Wert wird auf `center` standardisiert. Zum Beispiel ist `span-inline-start` äquivalent zu `span-inline-start center`.

## Koordinatenraster-Schlüsselwörter

Diese Schlüsselwörter spezifizieren die Zellen des `position-area` Rasters mit x- und y-Koordinatenwerten. Ihre Position/Richtung wird durch die Einstellungen von {{cssxref("writing-mode")}} und/oder {{cssxref("direction")}} entweder auf den [Enthaltungsblock](/de/docs/Web/CSS/CSS_display/Containing_block) eines Elements oder, im Fall der `self` Schlüsselwörter, auf das Element selbst beeinflusst.

Allerdings werden die Rasterzellen gemäß physikalischer Achsen anstelle von Block-/Inlinerichtungen definiert:

- Für `writing-mode: horizontal-tb` und `vertical-lr` verläuft die x-Achse von links nach rechts und die y-Achse von oben nach unten.
- Für `writing-mode: horizontal-tb; direction: rtl` und `writing-mode: vertical-rl` verläuft die x-Achse von rechts nach links und die y-Achse von oben nach unten.

Mit Koordinatenzeilen- und -spaltenschlüsselwörtern können Sie ein Schlüsselwort von der x-Achse und eines von der y-Achse angeben, um eine einzelne spezifische Rasterkachel zu definieren.

Die Schlüsselwörter der x-Achse umfassen:

- `x-start`

  - : Die Startkachel entlang der x-Achse des Rasters, berechnet aus dem Schreibmodus des enthaltenden Blocks.

- `x-end`

  - : Die Endkachel entlang der x-Achse des Rasters, berechnet aus dem Schreibmodus des enthaltenden Blocks.

- `x-self-start`

  - : Die Startkachel entlang der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `x-self-end`

  - : Die Endkachel entlang der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`

  - : Die Mitte der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

Die Schlüsselwörter der y-Achse umfassen:

- `y-start`

  - : Die Startkachel entlang der y-Achse des Rasters, berechnet aus dem Schreibmodus des enthaltenden Blocks.

- `y-end`

  - : Die Endkachel entlang der y-Achse des Rasters, berechnet aus dem Schreibmodus des enthaltenden Blocks.

- `y-self-start`

  - : Die Startkachel entlang der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `y-self-end`

  - : Die Endkachel entlang der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`

  - : Die Mitte der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

Zum Beispiel wählen `x-end y-start` und `x-self-end y-self-start` beide die Rasterzelle am Ende der x-Achse und am Anfang der y-Achse aus. Mit `writing-mode: horizontal-tb` eingestellt, wäre dies die Zelle oben rechts des Ankers, während es mit `writing-mode: vertical-rl` oben links ist.

### Koordinaten-Spanning-Schlüsselwörter

Wenn sie mit einem Koordinatenzeilen- oder -spaltenschlüsselwort kombiniert sind, spezifizieren die Koordinaten-Spanning-Schlüsselwörter eine zweite Rasterkachel, in die sich der Positionierungsbereich erweitern soll. Wenn eine solche Kombination als `position-area` Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert, und es erstreckt sich dann in die Richtung, die im Spanning-Schlüsselwort angegeben ist, über zwei Rasterkacheln:

- `span-x-start`

  - : Umspannt die mittlere Kachel und die x-Startkachel der angegebenen y-Achse.

- `span-x-end`

  - : Umspannt die mittlere Kachel und die x-Endkachel der angegebenen y-Achse.

- `span-y-start`

  - : Umspannt die mittlere Kachel und die y-Startkachel der angegebenen x-Achse.

- `span-y-end`

  - : Umspannt die mittlere Kachel und die y-Endkachel der angegebenen x-Achse.

Zum Beispiel wählt `y-end span-x-end` die Kachel in der Mitte der End-y-Zeile aus und erstreckt sich über die Kacheln in dieser Zeile, die in der x-Mitte und x-Ende-Spalten liegen. Mit `writing-mode: horizontal-tb` eingestellt, würde sich der Positionierungsrasterbereich über die Kacheln an der unteren Mitte und unten rechts erstrecken, während er sich mit `writing-mode: vertical-rl` über die Kacheln an der unteren Mitte und unten links erstrecken würde.

> [!NOTE]
> Die Spezifikation definiert keine separaten Koordinaten-`self`-Spanning-Schlüsselwörter, aber diese sind nicht notwendig — die Spanning-Schlüsselwörter können sowohl mit Koordinatenzeilen- als auch -spaltenschlüsselwörtern verwendet werden.

### Koordinatenraster-Schlüsselwort-Defaults

Wenn nur ein einziges Koordinatenraster-`<position-area>`-Schlüsselwort angegeben ist, wird der andere Wert wie folgt impliziert:

- `x-start`, `x-self-start`, `x-end`, `x-self-end`, `y-start`, `y-self-start`, `y-end`, oder `y-self-end`

  - : Der andere Wert wird zu [`span-all`](#span-all_2), wobei die Rasterzellen ausgewählt werden, die alle drei Kacheln der Spalte oder Zeile umfassen, in der es zunächst platziert wurde. Zum Beispiel ist `x-start` äquivalent zu `x-start span-all`.

- `span-x-start`, `span-x-end`, `span-y-start`, oder `span-y-end`

  - : Der andere Wert wird auf `center` standardisiert. Zum Beispiel ist `span-start` äquivalent zu `span-start center`.

## `span-all`

`span-all` ist ein spezielles Schlüsselwort, das mit allen der in den oben genannten Abschnitten aufgeführten Zeilen- und Spaltenschlüsselwörtern verwendet werden kann. Wenn Sie zwei Werte angeben — ein Zeilen-/Spaltenschlüsselwort und `span-all`, wird das Element in der angegebenen Zeile oder Spalte platziert, und es erstreckt sich dann über alle Kacheln in dieser Zeile oder Spalte.

## Beispiele

Siehe die {{cssxref("position-area")}} Eigenschaftsseite.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung: siehe die [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und den [Verwendung von CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-area")}}
- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- [`anchor()`](/de/docs/Web/CSS/anchor) Funktion
- [Verwendung von CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Verbergen für Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
