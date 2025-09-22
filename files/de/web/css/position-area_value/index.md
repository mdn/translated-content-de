---
title: <position-area>
slug: Web/CSS/position-area_value
l10n:
  sourceCommit: 766cd31774c37ec58b8c33b5b8f0a8a33a469eb6
---

Der **`<position-area>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) definiert die Zelle oder die überspannten Zellen eines **position-area grids**, eines 3x3 Rasters, dessen zentrale Zelle ein Ankerelement ist.

Die `<position-area>` Schlüsselwortwerte können als Wert der {{cssxref("position-area")}} Eigenschaft festgelegt werden, um ein ankerpositioniertes Element an einem bestimmten Ort relativ zu seinem zugehörigen Ankerelement zu platzieren.

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

Positionsbereiche basieren auf dem Konzept eines **position-area grids**, einem 3x3 Kachelraster bestehend aus vier Rasterlinien, zwei auf jeder Achse, wobei ein Ankerelement die zentrale Kachel ist:

![Das position-area grid, wie unten beschrieben](position-area.png)

Wenn sie als Wert der `position-area` Eigenschaft eines positionierten Elements verwendet werden, werden die Abmessungen der zentralen Kachel durch den [enthältenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Standardelements des Ankers definiert. Die Abmessungen des äußeren Rändern des Rasters werden durch den enthältenden Block des positionierten Elements definiert. Logische Schlüsselbegriffe sind in der Regel basierend auf dem Schreibmodus und der Richtung des enthältenden Blocks, außer für die `self-*` Schlüsselbegriffe, die vom Schreibmodus des ankerpositionierten Elements berechnet werden.

Die Kacheln des Rasters sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die physischen Werte `top`, `center` und `bottom` repräsentiert. Sie haben auch logische Äquivalente wie `block-start`, `center` und `block-end` und Koordinatenäquivalente — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` repräsentiert. Sie haben auch logische Äquivalente wie `inline-start`, `center` und `inline-end` und Koordinatenäquivalente — `x-start`, `center` und `x-end`.

`<position-area>` Werte enthalten ein oder zwei Schlüsselwörter, die einen bestimmten Bereich des position-area grids definieren. Die Festlegung eines `position-area` Wertes auf einem positionierten Element platziert dessen enthältenden Block im angegebenen Rasterbereich:

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

Die verschiedenen Arten von Schlüsselwörtern, die verwendet werden können, sind:

- [Physische Raster-Schlüsselwörter](#physische_raster-schlüsselwörter)
- [Generische logische Zeilen- und Spaltenschlüsselwörter](#generische_logische_zeilen-_und_spaltenschlüsselwörter)
- [Explizite inline- und block-logische Schlüsselwörter](#explizite_inline-_und_block-logische_schlüsselwörter)
- [Koordinaten-Raster-Schlüsselwörter](#koordinaten-raster-schlüsselwörter)

> [!NOTE]
> Im Allgemeinen können Sie nicht verschiedene Typen in einem Wert mischen, z.B. physische und logische. Dies führt zu ungültigen Werten. Zum Beispiel ist `position-area: bottom inline-end` kein gültiger Wert, da es physische und logische Schlüsselwörter mischt.

## Physische Raster-Schlüsselwörter

Die physikalischen Raster-Schlüsselwörter geben eine Zelle oder einen Abschnitt des `position-area` Rasters mit physikalischen Werten an. Diese Werte werden nicht von {{cssxref("writing-mode")}} oder {{cssxref("direction")}} Einstellungen beeinflusst.

Mit physischen Zeilen- und Spalten-Schlüsselwörtern können Sie ein Schlüsselwort aus jeder der beiden Listen unten auswählen, um eine einzelne spezifische Kachel auszuwählen:

- `top`, `center` oder `bottom`: Die obere, mittlere oder untere Zeile des Rasters.
- `left`, `center` oder `right`: Die linke, mittlere oder rechte Spalte des Rasters.

Zum Beispiel wählt `top left` die obere linke Kachel, während `center right` die mittlere Kachel der rechten Spalte auswählt.

### Physikalische Spannweiten-Raster-Schlüsselwörter

Die physikalischen Spannweiten-Schlüsselwörter — in Kombination mit einem physischen Zeilen- oder Spalten-Schlüsselwort — geben eine zweite Kachel des Rasters an, in die der Positionsbereich expandieren soll. Wenn eine solche Kombination als Wert der `position-area` Eigenschaft festgelegt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert; es erstreckt sich dann in die Richtung, die im Spannweiten-Schlüsselwort spezifiziert ist, und erstreckt sich über zwei Rasterkacheln:

- `span-left`
  - : Überspannt die mittlere Spalte und die linke Spalte des Rasters.

- `span-right`
  - : Überspannt die mittlere Spalte und die rechte Spalte des Rasters.

- `span-top`
  - : Überspannt die mittlere Zeile und die obere Zeile des Rasters.

- `span-bottom`
  - : Überspannt die mittlere Zeile und die untere Zeile des Rasters.

- `span-all`
  - : Gültig mit allen Schlüsselworttypen, erstreckt sich über die aufgeführte Zelle sowie die angrenzenden Zellen in derselben Zeile oder Spalte. Siehe [`span-all`](#span-all_2) unten.

Zum Beispiel, `top span-left` erstreckt sich über die obere-mittlere und obere-linke Kachel des Rasters.

> [!NOTE]
> Der Versuch, ein Zeilen- oder Spalten-Schlüsselwort mit einem unangemessenen Spannweiten-Schlüsselwort zu kombinieren, führt zu einem ungültigen Wert. Zum Beispiel, `right span-right` ist ungültig — Sie können nicht die mittlere rechte Kachel auswählen und dann versuchen, weiter nach rechts zu spannen.

### Physische Raster-Schlüsselwort-Standards

Wenn nur ein einzelnes physikalisches Schlüsselwort im `position-area` Wert spezifiziert ist, wird der andere Wert wie folgt impliziert:

- `left`, `right`, `top`, oder `bottom`
  - : Der andere Wert wird als [`span-all`](#span-all_2) angenommen, was dazu führt, dass sich das Element über alle drei Kacheln der Spalte oder der Zeile erstreckt, in die es ursprünglich platziert wurde. Zum Beispiel, `left` ist gleichbedeutend mit `left span-all`.

- `center`, `span-left`, `span-right`, `span-top`, oder `span-bottom`
  - : Der andere Wert wird zu `center` angenommen. Zum Beispiel, `span-left` ist gleichbedeutend mit `center span-left` und `center` ist gleichbedeutend mit `center center`.

## Logische Raster-Schlüsselwörter

Die logischen Raster-Schlüsselwörter spezifizieren einen Bereich des position-area grids unter Verwendung logischer Werte. Mit diesen Werten werden die Position und Richtung durch {{cssxref("writing-mode")}} und {{cssxref("direction")}} Einstellungen entweder auf dem enthältenden Block des Elements oder, im Falle der `self` Schlüsselwörter, auf dem positionierten Element selbst beeinflusst. Es gibt zwei Arten von logischen Schlüsselwörtern; generisch und explizit.

### Generische logische Zeilen- und Spaltenschlüsselwörter

Die generischen logischen Schlüsselwörter verwenden dieselben Begriffe für die Inline- und Block-Richtungen, wobei die Richtung durch die Position des Schlüsselbegriffs innerhalb eines Paares von `<position-area>` Werten bestimmt wird. Der erste Wert definiert die Block-Richtungsposition und der zweite Wert definiert den Inline-Wert. Sie können ein oder zwei Schlüsselbegriffe aus der folgenden Liste angeben. Die Angabe von zwei aus dieser Liste definiert eine einzelne spezifische Rasterkachel. Die Position oder Richtung des Schlüsselwortes ist:

- `start`
  - : Der Beginn der Block- oder Inline-Richtung des Rasters, berechnet vom Schreibmodus des enthältenden Blocks.

- `end`
  - : Das Ende der Block- oder Inline-Richtung des Rasters, berechnet vom Schreibmodus des enthältenden Blocks.

- `self-start`
  - : Der Beginn der Block- oder Inline-Richtung des Rasters, berechnet vom eigenen Schreibmodus des Elements.

- `self-end`
  - : Das Ende der Block- oder Inline-Richtung des Rasters, berechnet vom eigenen Schreibmodus des Elements.

- `center`
  - : Das Zentrum der Blockrichtung des Rasters (wenn dieses Schlüsselwort zuerst angegeben wird) oder der Inline-Richtung (wenn dieses Schlüsselwort als zweites angegeben wird).

Zum Beispiel beschreiben `start end` und `self-start self-end` beide die Position am Beginn der Blockrichtung und das Ende der Inlinerichtung. Bei `writing-mode: horizontal-tb` gesetzt, ist dies oben rechts des Ankers, während bei `writing-mode: vertical-rl` dies unten rechts des Ankers ist.

#### Generische logische Spannweiten-Zeilen- und Spaltenschlüsselwörter

Die generischen logischen Spannweiten-Schlüsselwörter — kombiniert mit einem logischen Zeilen- oder Spalten-Schlüsselwort — spezifizieren eine zweite Kachel des Rasters, in die sich der Positionsbereich ausdehnen soll. Wenn eine solche Kombination als Wert der `position-area` Eigenschaft festgelegt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert, und es erstreckt sich dann in die Richtung, die im Spannweiten-Schlüsselwort spezifiziert ist, und erstreckt sich über zwei Rasterkacheln:

- `span-start`
  - : Überspannt die mittlere Kachel und die Startkachel der Grid-Zeile/-Spalte, wobei sich die Richtung auf den Schreibmodus des enthältenden Blocks des Elements bezieht.

- `span-end`
  - : Überspannt die mittlere Kachel und die Endkachel der Grid-Zeile/-Spalte, wobei sich die Richtung auf den Schreibmodus des enthältenden Blocks des Elements bezieht.

- `span-self-start`
  - : Überspannt die mittlere Kachel und die Startkachel der Grid-Zeile/-Spalte für den eigenen Schreibmodus des positionierten Elements.

- `span-self-end`
  - : Überspannt die mittlere Kachel und die Endkachel der Grid-Zeile/-Spalte, berechnet vom eigenen Schreibmodus des Elements.

Zum Beispiel, `start span-end` und `self-start span-self-end` geben beide einen position-area Bereich an, der in der Mitte der Startblock-Zeile beginnt und sich über die Kacheln in dieser Zeile erstreckt, die sich in den Inline-Center- und End-Spalten befinden. Bei `writing-mode: horizontal-tb` gesetzt, würde dies über die obere Mitte und oben rechts des Ankers verlaufen, während bei `writing-mode: vertical-rl` gesetzt, der Bereich über die rechte Mitte und unten rechts verlaufen würde.

### Explizite inline- und block-logische Schlüsselwörter

Die expliziten inline- und block-logischen Zeilen- und Spalten-Schlüsselwörter beziehen sich ausdrücklich auf eine Block- (Zeilen-) oder Inline- (Spalte-) Position. Sie können ein Schlüsselwort für die Blockrichtung und eines für die Inlinerichtung angeben, um eine einzelne spezifische Rasterkachel auszuwählen. Anders als bei generischen logischen Schlüsselwerten spielt die Reihenfolge der Schlüsselwörter keine Rolle. Allerdings führt die Deklaration von zwei Schlüsselwörtern in derselben Achse zu einem ungültigen Wert.

- `block-start`
  - : Der Beginn der Blockrichtung des Rasters, berechnet vom Schreibmodus des enthältenden Blocks.

- `block-end`
  - : Das Ende der Blockrichtung des Rasters, berechnet vom Schreibmodus des enthältenden Blocks.

- `inline-start`
  - : Der Beginn der Inline-Richtung des Rasters, berechnet vom Schreibmodus des enthältenden Blocks.

- `inline-end`
  - : Das Ende der Inline-Richtung des Rasters, berechnet vom Schreibmodus des enthältenden Blocks.

Zum Beispiel spezifiziert `block-start inline-end` die Kachel am Beginn der Blockrichtung und dem Ende der Inlinerichtung. Mit `writing-mode: horizontal-tb` gesetzt, wäre dies die Kachel oben rechts des Ankers, während mit `writing-mode: vertical-rl` gesetzt, dies die Kachel unten rechts wäre.

> [!NOTE]
> Die Spezifikation definiert `self` Äquivalente dieser Schlüsselwörter — `block-self-start`, `block-self-end`, `inline-self-start`, und `inline-self-end`. Diese werden jedoch derzeit in keinem Browser unterstützt.

#### Explizite inline- und block-logische Spannweiten-Schlüsselwörter

Die expliziten logischen Spannweiten-Schlüsselwörter — kombiniert mit einem logischen Zeilen- oder Spalten-Schlüsselwort — spezifizieren eine zweite Kachel des Rasters, in die sich der Positionsbereich ausdehnen soll. Wenn eine solche Kombination als Wert der `position-area` Eigenschaft festgelegt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte, basierend auf dem Schreibmodus des enthältenden Blocks, platziert, und es erstreckt sich dann in die Richtung, die im Spannweiten-Schlüsselwort spezifiziert ist, und erstreckt sich über zwei Rasterkacheln:

- `span-block-start`
  - : Überspannt die mittlere Kachel und die block-start-Kachel der angegebenen Inline-Spalte.

- `span-block-end`
  - : Überspannt die mittlere Kachel und die block-end-Kachel der angegebenen Inline-Spalte.

- `span-inline-start`
  - : Überspannt die mittlere Kachel und die inline-start-Kachel der angegebenen Block-Zeile.

- `span-inline-end`
  - : Überspannt die mittlere Kachel und die inline-end-Kachel der angegebenen Block-Zeile.

Zum Beispiel, `block-end span-inline-start` wählt die mittlere Kachel der Endblock-Zeile aus und erstreckt sich über die Kacheln in dieser Zeile, die sich in den Inline-Center- und Start-Spalten befinden. Mit `writing-mode: horizontal-tb` gesetzt, würde der Positionsrasterbereich die Kacheln der unteren Mitte und unten links umfassen, während mit `writing-mode: vertical-rl` gesetzt, würde er die linke Mitte und oben links umfassen.

> [!NOTE]
> Die Spezifikation definiert `self` Äquivalente dieser Schlüsselwörter, zum Beispiel — `span-self-block-start`, `span-self-block-end`, `span-self-inline-start`, und `span-self-inline-end`. Diese werden jedoch derzeit in keinem Browser unterstützt.

> [!NOTE]
> Der Versuch, ein Zeilen- oder Spalten-Schlüsselwort mit einem unangemessenen Spannweiten-Schlüsselwort zu kombinieren, führt zu einem ungültigen Property-Wert. Zum Beispiel, `block-end span-block-end` ist ungültig — Sie können nicht die zentrale block-end-Zeile auswählen und dann versuchen, eine weitere Kachel über die Block-End-Richtung hinaus zu spannen.

### Logische Raster-Schlüsselwort-Standards

Wenn nur ein einzelnes logisches `<position-area>` Schlüsselwort spezifiziert ist, wird der andere Wert wie folgt impliziert:

- `start`, `end`, `self-start`, oder `self-end`
  - : Der andere Wert wird zu demselben wie der erste Wert angenommen und wählt die Rasterzelle in der Startzeile und -spalte oder der Endzeile und -spalte aus.

- `span-start`, `span-self-start`, `span-end`, oder `span-self-end`
  - : Der andere Wert wird zu `center` angenommen. Zum Beispiel, `span-start` ist gleichbedeutend mit `span-start center`.

- `block-start`, `block-end`, `inline-start`, `inline-end`
  - : Der andere Wert wird als [`span-all`](#span-all_2) angenommen, um alle drei Kacheln der Spalte oder Zeile zu erstrecken, in denen es platziert wurde. Zum Beispiel, `block-start` ist gleichbedeutend mit `block-start span-all`.

- `span-block-start`, `span-block-end`, `span-inline-start`, `span-inline-end`
  - : Der andere Wert wird zu `center` angenommen. Zum Beispiel, `span-inline-start` ist gleichbedeutend mit `span-inline-start center`.

## Koordinaten-Raster-Schlüsselwörter

Diese Schlüsselwörter spezifizieren die Zellen des `position-area` Rasters unter Verwendung von x- und y-Koordinatenwerten. Seine Position/Richtung wird durch {{cssxref("writing-mode")}} und/oder {{cssxref("direction")}} Einstellungen entweder auf einem Element's [enthältendem Block](/de/docs/Web/CSS/CSS_display/Containing_block) oder, im Falle der `self` Schlüsselwörter, auf dem Element selbst beeinflusst.

Jedoch werden die Rasterzellen nach physischen Achsen anstelle von Block/Inline-Richtungen definiert:

- Bei `writing-mode: horizontal-tb` und `vertical-lr`, verläuft die x-Achse von links nach rechts und die y-Achse von oben nach unten.
- Bei `writing-mode: horizontal-tb; direction: rtl` und `writing-mode: vertical-rl`, verläuft die x-Achse von rechts nach links und die y-Achse von oben nach unten.

Mit Koordinaten-Zeilen- und Spalten-Schlüsselwörtern können Sie ein Schlüsselwort aus der x-Achse und eines aus der y-Achse auswählen, um eine einzelne spezifische Rasterkachel zu definieren.

Die x-Achsen-Schlüsselwörter umfassen:

- `x-start`
  - : Die Start-Zelle entlang der x-Achse des Rasters, berechnet vom Schreibmodus des enthältenden Blocks.

- `x-end`
  - : Die End-Zelle entlang der x-Achse des Rasters, berechnet vom Schreibmodus des enthältenden Blocks.

- `x-self-start`
  - : Die Start-Zelle entlang der x-Achse des Rasters, berechnet vom eigenen Schreibmodus des Elements.

- `x-self-end`
  - : Die End-Zelle entlang der x-Achse des Rasters, berechnet vom eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der x-Achse des Rasters, berechnet vom eigenen Schreibmodus des Elements.

Die y-Achsen-Schlüsselwörter umfassen:

- `y-start`
  - : Die Start-Zelle entlang der y-Achse des Rasters, berechnet vom Schreibmodus des enthältenden Blocks.

- `y-end`
  - : Die End-Zelle entlang der y-Achse des Rasters, berechnet vom Schreibmodus des enthältenden Blocks.

- `y-self-start`
  - : Die Start-Zelle entlang der y-Achse des Rasters, berechnet vom eigenen Schreibmodus des Elements.

- `y-self-end`
  - : Die End-Zelle entlang der y-Achse des Rasters, berechnet vom eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der y-Achse des Rasters, berechnet vom eigenen Schreibmodus des Elements.

Zum Beispiel, `x-end y-start` und `x-self-end y-self-start` wählen beide die Rasterzelle am Ende der x-Achse und Beginn der y-Achse aus. Bei `writing-mode: horizontal-tb` gesetzt, wäre dies die Zelle oben rechts des Ankers, während bei `writing-mode: vertical-rl` die oben links ist.

### Koordinaten-Spannweiten-Schlüsselwörter

Wenn sie mit einem Koordinaten-Zeilen- oder Spalten-Schlüsselwort kombiniert sind, spezifizieren die Koordinaten-Spannweiten-Schlüsselwörter eine zweite Rasterkachel, in welche sich der Positionsbereich ausdehnen soll. Wenn eine solche Kombination als Wert der `position-area` Eigenschaft festgelegt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert, und es erstreckt sich dann in die Richtung, die im Spannweiten-Schlüsselwort spezifiziert ist, und erstreckt sich über zwei Rasterkacheln:

- `span-x-start`
  - : Überspannt die mittlere Kachel und die x-start-Kachel der angegebenen y-Achsen-Zeile.

- `span-x-end`
  - : Überspannt die mittlere Kachel und die x-end-Kachel der angegebenen y-Achsen-Zeile.

- `span-y-start`
  - : Überspannt die mittlere Kachel und die y-start-Kachel der angegebenen x-Achsen-Spalte.

- `span-y-end`
  - : Überspannt die mittlere Kachel und die y-end-Kachel der angegebenen x-Achsen-Spalte.

Zum Beispiel, `y-end span-x-end` wählt die Kachel in der Mitte der End-y-Zeile aus und erstreckt sich über die Kacheln in dieser Zeile, die sich in der x-Mitte und x-End-Spalten befinden. Mit `writing-mode: horizontal-tb` gesetzt, würde der Positionsrasterbereich die Kacheln der unteren Mitte und unten rechts umfassen, während mit `writing-mode: vertical-rl` gesetzt, würde er die untere Mitte und unten links umfassen.

> [!NOTE]
> Die Spezifikation definiert keine separaten `self` Koordinaten-Spannweiten-Schlüsselwörter, aber diese werden nicht benötigt — die Spannweiten-Schlüsselwörter können mit beiden Koordinaten-Zeilen- und Spalten-Schlüsselwörtern verwendet werden.

### Koordinaten-Raster-Schlüsselwort-Standards

Wenn nur ein einzelnes Koordinaten-Raster `<position-area>` Schlüsselwort spezifiziert ist, wird der andere Wert wie folgt impliziert:

- `x-start`, `x-self-start`, `x-end`, `x-self-end`, `y-start`, `y-self-start`, `y-end`, oder `y-self-end`
  - : Der andere Wert wird als [`span-all`](#span-all_2) angenommen, indem die Rasterkacheln über alle drei Kacheln der Spalte oder Zeile, in die es platziert wurde, ausgespannt werden. Zum Beispiel, `x-start` ist gleichbedeutend mit `x-start span-all`.

- `span-x-start`, `span-x-end`, `span-y-start`, oder `span-y-end`
  - : Der andere Wert wird zu `center` angenommen. Zum Beispiel, `span-start` ist gleichbedeutend mit `span-start center`.

## `span-all`

`span-all` ist ein spezielles Schlüsselwort, das mit allen in den obigen Abschnitten aufgelisteten Zeilen- und Spalten-Schlüsselwörtern verwendet werden kann. Wenn Sie zwei Werte angeben — ein Zeilen-/Spalten-Schlüsselwort und `span-all`, wird das Element in der angegebenen Zeile oder Spalte platziert, und es erstreckt sich dann über alle Kacheln in dieser Zeile oder Spalte.

## Beispiele

Siehe die {{cssxref("position-area")}} Eigenschaftsseite.

Für detaillierte Informationen zu Ankerfunktionen und -verwendung, siehe das [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul und den Leitfaden [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-area")}}
- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- [`anchor()`](/de/docs/Web/CSS/anchor) Funktion
- [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
