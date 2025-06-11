---
title: <position-area>
slug: Web/CSS/position-area_value
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}{{SeeCompatTable}}

Der **`<position-area>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) definiert die Zelle oder gespannten Zellen eines **position-area grids**, eines 3x3 Rasters, dessen mittlere Zelle ein Ankerelement ist.

Die `<position-area>` Schlüsselwortwerte können als Wert der {{cssxref("position-area")}} Eigenschaft festgelegt werden, um ein anker-positioniertes Element an einer bestimmten Position relativ zu seinem zugehörigen Ankerelement zu platzieren.

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

Positionierungsbereiche basieren auf dem Konzept eines **position-area grids**, eines 3x3 Rasters aus Kacheln, das aus vier Gitterlinien besteht, zwei auf jeder Achse, wobei ein Ankerelement die mittlere Kachel ist:

![The position-area grid, as described below](position-area.png)

Wenn der Wert der `position-area` Eigenschaft eines positionierten Elements verwendet wird, werden die Abmessungen der Mittelkachel durch den [umfassenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Standardankerelements definiert. Die Abmessungen des äußeren Rands des Rasters werden durch den umfassenden Block des positionierten Elements definiert. Logische Schlüsselbegriffe basieren im Allgemeinen auf dem Schreibmodus und der Richtung des umfassenden Blocks, mit Ausnahme der `self-*` Schlüsselbegriffe, die aus dem Schreibmodus des anker-positionierten Elements berechnet werden.

Die Rasterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die physikalischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Entsprechungen wie `block-start`, `center` und `block-end`, sowie Koordinatenäquivalente — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physikalischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Entsprechungen wie `inline-start`, `center` und `inline-end`, sowie Koordinatenäquivalente — `x-start`, `center` und `x-end`.

`<position-area>` Werte enthalten ein oder zwei Schlüsselwörter, die einen bestimmten Bereich des position-area Grids definieren. Wenn Sie einen `position-area` Wert auf einem positionierten Element festlegen, wird der umfassende Block im angegebenen Gitterbereich platziert:

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

- [Physikalische Gitter-Schlüsselwörter](#physikalische_gitter-schlüsselwörter)
- [Allgemeine logische Zeilen- und Spalten-Schlüsselwörter](#generische_logische_zeilen-_und_spalten-schlüsselwörter)
- [Explizite Inline- und Blocklogische Schlüsselwörter](#explizite_inline-_und_blocklogische_schlüsselwörter)
- [Koordinaten-Gitter-Schlüsselwörter](#koordinaten-gitter-schlüsselwörter)

> [!NOTE]
> Im Allgemeinen können Sie in einem Wert keine verschiedenen Typen mischen, z. B. physikalisch und logisch. Dadurch entstehen ungültige Werte. Zum Beispiel ist `position-area: bottom inline-end` kein gültiger Wert, da es physikalische und logische Schlüsselwörter mischt.

## Physikalische Gitter-Schlüsselwörter

Die physikalischen Gitter-Schlüsselwörter spezifizieren eine Zelle oder einen Abschnitt des `position-area` Grids unter Verwendung physikalischer Werte. Diese Werte werden nicht durch {{cssxref("writing-mode")}} oder {{cssxref("direction")}} Einstellungen beeinflusst.

Mit physikalischen Zeilen- und Spalten-Schlüsselwörtern können Sie ein Schlüsselwort aus jeder der beiden unten stehenden Listen auswählen, um eine einzelne spezifische Gitterkachel auszuwählen:

- `top`, `center` oder `bottom`: Die obere, mittlere oder untere Zeile des Rasters.
- `left`, `center` oder `right`: Die linke, mittlere oder rechte Spalte des Rasters.

Zum Beispiel wählt `top left` die oben links befindliche Kachel aus, während `center right` die mittlere Kachel in der rechten Spalte auswählt.

### Physikalische Spann-Gitter-Schlüsselwörter

Die physikalischen Spann-Schlüsselwörter — wenn sie mit einem physikalischen Zeilen- oder Spalten-Schlüsselwort kombiniert werden — spezifizieren eine zweite Gitterkachel, in welche der Positionierungsbereich übergehen soll. Wenn eine solche Kombination als Wert der `position-area` Eigenschaft festgelegt wird, wird ein ausgewähltes Element zunächst in der Mitte der spezifizierten Reihe oder Spalte platziert; es dehnt sich dann in die durch das Spann-Schlüsselwort angegebene Richtung aus und umfasst zwei Gitterkacheln:

- `span-left`
  - : Dehnt sich über die mittlere Spalte und die linke Spalte des Rasters aus.
- `span-right`
  - : Dehnt sich über die mittlere Spalte und die rechte Spalte des Rasters aus.
- `span-top`
  - : Dehnt sich über die mittlere Zeile und die obere Zeile des Rasters aus.
- `span-bottom`
  - : Dehnt sich über die mittlere Zeile und die untere Zeile des Rasters aus.
- `span-all`
  - : Gültig mit allen Schlüsselworttypen, dehnt sich auf die angegebene Zelle sowie die angrenzenden Zellen in derselben Zeile oder Spalte aus. Siehe [`span-all`](#span-all_2) unten.

Zum Beispiel dehnt sich `top span-left` über die oberen mittleren und oberen linken Gitterzellen aus.

> [!NOTE]
> Der Versuch, ein Zeilen- oder Spalten-Schlüsselwort mit einem unpassenden Spann-Schlüsselwort zu kombinieren, führt zu einem ungültigen Wert. Zum Beispiel ist `right span-right` ungültig — Sie können die mittlere rechte Gitterkachel nicht auswählen und dann weiter nach rechts spannen.

### Standardwerte von physikalischen Gitter-Schlüsselwörtern

Wenn nur ein einziges physikalisches Schlüsselwort im `position-area` Wert angegeben wird, wird der andere Wert wie folgt impliziert:

- `left`, `right`, `top` oder `bottom`

  - : Der andere Wert wird als [`span-all`](#span-all_2) standardisiert, wodurch das Element über alle drei Kacheln des Rasters oder der Zeile, in der es ursprünglich platziert wurde, spannt. Zum Beispiel ist `left` gleichbedeutend mit `left span-all`.

- `center`, `span-left`, `span-right`, `span-top` oder `span-bottom`
  - : Der andere Wert wird als `center` standardisiert. Zum Beispiel ist `span-left` gleichbedeutend mit `center span-left` und `center` ist gleichbedeutend mit `center center`.

## Logische Gitter-Schlüsselwörter

Die logischen Gitter-Schlüsselwörter spezifizieren einen Bereich des position area grids mit logischen Werten. Mit diesen Werten werden Position und Richtung durch {{cssxref("writing-mode")}} und {{cssxref("direction")}} Einstellungen entweder am [umfassenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements oder, im Falle der `self`-Schlüsselwörter, am positionierten Element selbst beeinflusst. Es gibt zwei Arten von logischen Schlüsselwörtern: generische und explizite.

### Generische logische Zeilen- und Spalten-Schlüsselwörter

Die generischen logischen Keywords verwenden dieselben Begriffe für die Inline- und Blockrichtungen, wobei die Richtung durch die Position des Schlüsselbegriffs innerhalb eines Paares von `<position-area>` Werten bestimmt wird. Der erste Wert definiert die Blockrichtungsposition und der zweite Wert definiert den Inline-Wert. Sie können ein oder zwei Schlüsselbegriffe aus der folgenden Liste angeben. Die Angabe von zwei aus dieser Liste definiert eine einzelne spezifische Gitterzelle. Die Schlüsselwort-Position oder -Richtung ist:

- `start`
  - : Der Anfang der Block- oder Inline-Richtung des Rasters, berechnet aus dem Schreibmodus des umfassenden Blocks.
- `end`
  - : Das Ende der Block- oder Inline-Richtung des Rasters, berechnet aus dem Schreibmodus des umfassenden Blocks.
- `self-start`
  - : Der Start der Block- oder Inline-Richtung des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.
- `self-end`
  - : Das Ende der Block- oder Inline-Richtung des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.
- `center`
  - : Die Mitte der Blockrichtung des Rasters (wenn dieses Schlüsselwort zuerst angegeben wird) oder die Inline-Richtung (wenn dieses Schlüsselwort als zweites angegeben wird).

Zum Beispiel beschreiben `start end` und `self-start self-end` beide die Position am Anfang der Blockrichtung und am Ende der Inline-Richtung. Bei `writing-mode: horizontal-tb` ist dies oben rechts vom Anker-Element, während es bei `writing-mode: vertical-rl` unten rechts vom Anker liegt.

#### Generische logische Spannungs-Zeilen- und -Spalten-Schlüsselwörter

Die generischen logischen Spannungs-Schlüsselwörter — wenn sie mit einem logischen Zeilen- oder Spalten-Schlüsselwort kombiniert werden — spezifizieren eine zweite Gitterkachel für den Positionierungsbereich zum Expandieren. Wenn eine solche Kombination als `position-area` Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert und dehnt sich dann in die Richtung aus, die im Spannungs-Schlüsselwort angegeben ist, und erstreckt sich über zwei Gitterkacheln:

- `span-start`
  - : Erstreckt sich über die mittlere Kachel und die Startkachel der Gitterzeile/-spalte, wobei die Richtung den Schreibmodus des umfassenden Blocks des Elements berücksichtigt.
- `span-end`
  - : Erstreckt sich über die mittlere Kachel und die Endkachel der Gitterzeile/-spalte, wobei die Richtung den Schreibmodus des umfassenden Blocks des Elements berücksichtigt.
- `span-self-start`
  - : Erstreckt sich über die mittlere Kachel und die Startkachel der Gitterzeile/-spalte im eigenen Schreibmodus des positionierten Elements.
- `span-self-end`
  - : Erstreckt sich über die mittlere Kachel und die Endkachel der Gitterzeile/-spalte, berechnet aus dem eigenen Schreibmodus des Elements.

Zum Beispiel spezifizieren `start span-end` und `self-start span-self-end` beide einen Positionierungsbereich des Gitters, der in der Mitte der Startblockreihe beginnt und sich über die Kacheln in dieser Reihe erstreckt, die in der Inline-Mitte und den Endspalten sitzen. Bei `writing-mode: horizontal-tb` würde dies über die obere Mitte und die obere rechte des Ankers spannen, während es bei `writing-mode: vertical-rl` das Element über die rechte Mitte und die untere rechte Kachel spannen würde.

### Explizite Inline- und Blocklogische Schlüsselwörter

Die expliziten Inline- und Blocklogischen Zeilen- und Spalten-Schlüsselwörter beziehen sich explizit auf eine Block- (Zeilen-) oder Inline- (Spalten-) Position. Sie können ein Schlüsselwort für die Blockrichtung und eines für die Inline-Richtung angeben, um eine einzelne spezifische Gitterkachel auszuwählen. Im Gegensatz zu generischen logischen Schlüsselwortwerten spielt die Reihenfolge der Schlüsselwörter keine Rolle. Die Angabe von zwei Schlüsselwörtern in derselben Achse macht den Wert jedoch ungültig.

- `block-start`
  - : Der Anfang der Blockrichtung des Rasters, berechnet aus dem Schreibmodus des umfassenden Blocks.
- `block-end`
  - : Das Ende der Blockrichtung des Rasters, berechnet aus dem Schreibmodus des umfassenden Blocks.
- `inline-start`
  - : Der Anfang der Inline-Richtung des Rasters, berechnet aus dem Schreibmodus des umfassenden Blocks.
- `inline-end`
  - : Das Ende der Inline-Richtung des Rasters, berechnet aus dem Schreibmodus des umfassenden Blocks.

Zum Beispiel spezifiziert `block-start inline-end` die Kachel am Anfang der Blockrichtung und am Ende der Inlinerichtung. Bei `writing-mode: horizontal-tb` ist dies die Kachel oben rechts vom Anker, während bei `writing-mode: vertical-rl` dies die Kachel unten rechts ist.

> [!NOTE]
> Die Spezifikation definiert `self`-Äquivalente dieser Schlüsselwörter — `block-self-start`, `block-self-end`, `inline-self-start`, und `inline-self-end`. Diese werden jedoch derzeit von keinem Browser unterstützt.

#### Explizite Inline- und Blocklogische Spannungs-Schlüsselwörter

Die expliziten logischen Spannungs-Schlüsselwörter — wenn sie mit einem logischen Zeilen- oder Spalten-Schlüsselwort kombiniert werden — spezifizieren eine zweite Gitterkachel für den Positionierungsbereich zum Expandieren. Wenn eine solche Kombination als `position-area` Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert, basierend auf dem Schreibmodus des umfassenden Blocks, und dehnt sich dann in die Richtung aus, die im Spannungs-Schlüsselwort angegeben ist, und erstreckt sich über zwei Gitterkacheln:

- `span-block-start`
  - : Erstreckt sich über die mittlere Kachel und die Blockanfangskachel der angegebenen Inline-Spalte.
- `span-block-end`
  - : Erstreckt sich über die mittlere Kachel und die Blockendkachel der angegebenen Inline-Spalte.
- `span-inline-start`
  - : Erstreckt sich über die mittlere Kachel und die Inline-Anfangskachel der angegebenen Blockreihe.
- `span-inline-end`
  - : Erstreckt sich über die mittlere Kachel und die Inline-Endkachel der angegebenen Blockreihe.

Zum Beispiel wählt `block-end span-inline-start` die mittlere Kachel der Endblockreihe und erstreckt sich über die Kacheln in dieser Reihe, die in der Inline-Mitte und den Startspalten sitzen. Bei `writing-mode: horizontal-tb` würde dies die Kacheln in der unteren Mitte und links unten im Raster umfassen, während bei `writing-mode: vertical-rl` die Kacheln in der rechten Mitte und oben links umfasst würden.

> [!NOTE]
> Die Spezifikation definiert `self`-Äquivalente dieser Schlüsselwörter, zum Beispiel — `span-self-block-start`, `span-self-block-end`, `span-self-inline-start`, und `span-self-inline-end`. Diese werden jedoch derzeit von keinem Browser unterstützt.

> [!NOTE]
> Der Versuch, ein Zeilen- oder Spalten-Schlüsselwort mit einem unpassenden Spann-Schlüsselwort zu kombinieren, führt zu einem ungültigen Eigenschaftswert. Zum Beispiel ist `block-end span-block-end` ungültig — Sie können nicht die zentrale Block-End-Zeile auswählen und dann versuchen, eine weitere Kachel über das Block-End-Direktion hinaus zu spannen.

### Logische Gitter-Schlüsselwort-Standards

Wenn nur ein einziges logisches `<position-area>` Schlüsselwort angegeben wird, wird der andere Wert wie folgt impliziert:

- `start`, `end`, `self-start` oder `self-end`

  - : Der andere Wert wird zum gleichen wie der erste Wert standardisiert, um die Gitterzelle an der Startzeile und -spalte oder der Endzeile und -spalte auszuwählen.

- `span-start`, `span-self-start`, `span-end`, `span-self-end`

  - : Der andere Wert wird als `center` standardisiert. Zum Beispiel ist `span-start` gleichbedeutend mit `span-start center`.

- `block-start`, `block-end`, `inline-start`, `inline-end`

  - : Der andere Wert wird auf [`span-all`](#span-all_2) gesetzt, wodurch alle drei Kacheln der gesetzten Spalte oder Zeile umfasst werden. Zum Beispiel ist `block-start` gleichbedeutend mit `block-start span-all`.

- `span-block-start`, `span-block-end`, `span-inline-start`, `span-inline-end`
  - : Der andere Wert wird als `center` standardisiert. Zum Beispiel ist `span-inline-start` gleichbedeutend mit `span-inline-start center`.

## Koordinaten-Gitter-Schlüsselwörter

Diese Schlüsselwörter spezifizieren die Zellen des `position-area` Grids mit x- und y-Koordinatenwerten. Ihre Position/Richtung wird durch {{cssxref("writing-mode")}} und/oder {{cssxref("direction")}} Einstellungen entweder an einem Elementes [umfassenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) oder, im Falle der `self`-Schlüsselwörter, am Element selbst beeinflusst.

Die Rasterzellen werden jedoch gemäß physikalischen Achsen anstelle von Block/Inline-Richtungen definiert:

- Für `writing-mode: horizontal-tb` und `vertical-lr` verläuft die x-Achse von links nach rechts und die y-Achse von oben nach unten.
- Für `writing-mode: horizontal-tb; direction: rtl` und `writing-mode: vertical-rl` verläuft die x-Achse von rechts nach links und die y-Achse von oben nach unten.

Mit Koordinaten-Zeilen- und Spalten-Schlüsselwörtern können Sie ein Schlüsselwort aus der x-Achse und eines aus der y-Achse auswählen, um eine bestimmte Gitterkachel zu definieren.

Die Schlüsselwörter der x-Achse umfassen:

- `x-start`
  - : Die Startkachel entlang der x-Achse des Gitters, berechnet aus dem Schreibmodus des umfassenden Blocks.
- `x-end`
  - : Die Endkachel entlang der x-Achse des Gitters, berechnet aus dem Schreibmodus des umfassenden Blocks.
- `x-self-start`
  - : Die Startkachel entlang der x-Achse des Gitters, berechnet aus dem eigenen Schreibmodus des Elements.
- `x-self-end`
  - : Die Endkachel entlang der x-Achse des Gitters, berechnet aus dem eigenen Schreibmodus des Elements.
- `center`
  - : Die Mitte der x-Achse des Gitters, berechnet aus dem eigenen Schreibmodus des Elements.

Die Schlüsselwörter der y-Achse umfassen:

- `y-start`
  - : Die Startkachel entlang der y-Achse des Gitters, berechnet aus dem Schreibmodus des umfassenden Blocks.
- `y-end`
  - : Die Endkachel entlang der y-Achse des Gitters, berechnet aus dem Schreibmodus des umfassenden Blocks.
- `y-self-start`
  - : Die Startkachel entlang der y-Achse des Gitters, berechnet aus dem eigenen Schreibmodus des Elements.
- `y-self-end`
  - : Die Endkachel entlang der y-Achse des Gitters, berechnet aus dem eigenen Schreibmodus des Elements.
- `center`
  - : Die Mitte der y-Achse des Gitters, berechnet aus dem eigenen Schreibmodus des Elements.

Zum Beispiel wählen `x-end y-start` und `x-self-end y-self-start` beide die Gitterzelle am Ende der x-Achse und am Anfang der y-Achse aus. Bei `writing-mode: horizontal-tb` wäre dies die Zelle oben rechts vom Anker, während sie bei `writing-mode: vertical-rl` oben links ist.

### Koordinaten-Spannungs-Schlüsselwörter

Wenn sie mit einem Koordinaten-Zeilen- oder Spalten-Schlüsselwort kombiniert werden, spezifizieren die Koordinaten-Spannungs-Schlüsselwörter eine zweite Gitterkachel für den Positionierungsbereich zum Expandieren. Wenn eine solche Kombination als `position-area` Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert und dehnt sich dann in die Richtung aus, die im Spannungs-Schlüsselwort angegeben ist, und erstreckt sich über zwei Gitterkacheln:

- `span-x-start`
  - : Erstreckt sich über die mittlere Kachel und die x-Start-Kachel der angegebenen y-Achsenreihe.
- `span-x-end`
  - : Erstreckt sich über die mittlere Kachel und die x-End-Kachel der angegebenen y-Achsenreihe.
- `span-y-start`
  - : Erstreckt sich über die mittlere Kachel und die y-Start-Kachel der angegebenen x-Achsen-Spalte.
- `span-y-end`
  - : Erstreckt sich über die mittlere Kachel und die y-End-Kachel der angegebenen x-Achsen-Spalte.

Zum Beispiel wählt `y-end span-x-end` die Kachel an der Mitte der End-y-Zeile aus und erstreckt sich über die Kacheln in dieser Reihe, die in den x-Mitte- und x-End-Spalten liegen. Bei `writing-mode: horizontal-tb` würde der Positionsgitterbereich die Gitterkacheln in der unteren Mitte und rechts unten umfassen, während bei `writing-mode: vertical-rl` die Kacheln in der unteren Mitte und links unten umfasst werden.

> [!NOTE]
> Die Spezifikation definiert keine separaten `self`-Koordinatenspannungs-Schlüsselwörter, aber diese sind nicht notwendig — die Spannungs-Schlüsselwörter können sowohl mit Koordinaten-Zeilen- als auch Spalten-Schlüsselwörtern verwendet werden.

### Standardwerte der Koordinaten-Gitter-Schlüsselwörter

Wenn nur ein einziges Koordinatengitter-`<position-area>` Schlüsselwort angegeben wird, wird der andere Wert wie folgt impliziert:

- `x-start`, `x-self-start`, `x-end`, `x-self-end`, `y-start`, `y-self-start`, `y-end` oder `y-self-end`

  - : Der andere Wert wird auf [`span-all`](#span-all_2) gesetzt, wodurch die Gitterkacheln ausgewählt werden, die alle drei Kacheln der Spalte oder Zeile umfassen, in der es ursprünglich platziert wurde. Zum Beispiel ist `x-start` gleichbedeutend mit `x-start span-all`.

- `span-x-start`, `span-x-end`, `span-y-start` oder `span-y-end`
  - : Der andere Wert wird als `center` standardisiert. Zum Beispiel ist `span-start` gleichbedeutend mit `span-start center`.

## `span-all`

`span-all` ist ein spezielles Schlüsselwort, das mit allen der in den obigen Abschnitten aufgeführten Zeilen- und Spalten-Schlüsselwörtern verwendet werden kann. Wenn Sie zwei Werte angeben — ein Zeilen-/Spalten-Schlüsselwort und `span-all`, wird das Element in der angegebenen Zeile oder Spalte platziert und dann über alle Kacheln in dieser Zeile oder Spalte gespannt.

## Beispiele

Siehe die Seite zur {{cssxref("position-area")}} Eigenschaft.

Für detaillierte Informationen zu Ankerfunktionen und deren Nutzung siehe das Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) und den [Leitfaden zur Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-area")}}
- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- [`anchor()`](/de/docs/Web/CSS/anchor) Funktion
- [Leitfaden zur Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Leitfaden zu Fallback-Optionen und bedingtem verstecken für Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
