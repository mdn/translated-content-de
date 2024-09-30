---
title: <position-area>
slug: Web/CSS/position-area_value
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{CSSRef}}{{SeeCompatTable}}

Der **`<position-area>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) definiert die Zelle oder gespannten Zellen eines **position-area-Grids**, eines 3x3-Grids, dessen mittlere Zelle ein Ankerelement ist.

Mit den Schlüsselwortwerten von `<position-area>` kann die {{cssxref("position-area")}}-Eigenschaft so gesetzt werden, dass ein ankerpositioniertes Element an einem bestimmten Ort relativ zu seinem zugeordneten Ankerelement platziert wird.

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

Positionsbereiche basieren auf dem Konzept eines **position-area-Grids**, eines 3x3-Grids von Kacheln, das aus vier Rasterlinien besteht, zwei auf jeder Achse, wobei ein Ankerelement die mittlere Kachel ist:

![Das position-area-Grid, wie unten beschrieben](position-area.png)

Wenn es als Wert der `position-area`-Eigenschaft eines positionierten Elements verwendet wird, werden die Dimensionen der mittleren Kachel durch den [umgebenden Block](/de/docs/Web/CSS/Containing_block) des Standardankerelements des Elements definiert. Die Dimensionen der äußeren Kante des Grids werden durch den umgebenden Block des positionierten Elements definiert. Die logischen Schlüsselbegriffe basieren im Allgemeinen auf Schreibmodus und Richtung des umgebenden Blocks, außer für die `self-*`-Schlüsselbegriffe, die vom Schreibmodus des ankerpositionierten Elements berechnet werden.

Die Gitterkacheln sind in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Entsprechungen wie `block-start`, `center` und `block-end` sowie Koordinatenentsprechungen — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Entsprechungen wie `inline-start`, `center` und `inline-end` sowie Koordinatenentsprechungen — `x-start`, `center` und `x-end`.

Werte von `<position-area>` enthalten ein oder zwei Schlüsselwörter, die einen bestimmten Bereich des position-area-Grids definieren. Wenn ein Wert auf ein positioniertes Element gesetzt wird, platziert er den umgebenden Block in dem angegebenen Gitternbereich:

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

- [Physische Gitter-Schlüsselwörter](#physische_gitter-schlüsselwörter)
- [Generische logische Reihen- und Spalten-Schlüsselwörter](#generische_logische_zeilen-_und_spaltenschlüsselwort)
- [Explizite logische Zeilen- und Spalten-Schlüsselwörter](#explizite_zeilen-_und_spaltenschlüsselwörter)
- [Koordinaten-Gitter-Schlüsselwörter](#koordinaten-gitter-schlüsselwörter)

> [!NOTE]
> Generell kann man nicht verschiedene Typen in einem Wert mischen, z.B. physisch und logisch. Dadurch entstehen ungültige Werte. Zum Beispiel ist `position-area: bottom inline-end` kein gültiger Wert, weil es physische und logische Schlüsselwörter mischt.

## Physische Gitter-Schlüsselwörter

Die physischen Gitter-Schlüsselwörter spezifizieren eine Zelle oder Sektion des `position-area`-Grids unter Verwendung physischer Werte. Diese Werte werden nicht von den {{cssxref("writing-mode")}}- oder {{cssxref("direction")}}-Einstellungen beeinflusst.

Mit physischen Zeilen- und Spalten-Schlüsselwörtern können Sie ein Schlüsselwort aus jeder der beiden Listen unten wählen, um eine einzelne spezifische Gitterkachel auszuwählen:

- `top`, `center` oder `bottom`: Die obere, mittlere oder untere Reihe des Grids.
- `left`, `center` oder `right`: Die linke, mittlere oder rechte Spalte des Grids.

Zum Beispiel wählt `top left` die obere linke Kachel, während `center right` die mittlere Kachel der rechten Spalte auswählt.

### Physische überlappende Gitter-Schlüsselwörter

Die physischen überlappenden Schlüsselwörter — kombiniert mit einem physischen Zeilen- oder Spalten-Schlüsselwort — spezifizieren eine zweite Gitterkachel, in die sich der Positionsbereich ausdehnen soll. Wenn eine solche Kombination als `position-area`-Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert; es erstreckt sich dann in die Richtung, die im überlappenden Schlüsselwort angegeben ist, und erstreckt sich über zwei Gitterkacheln:

- `span-left`

  - : Umspannt die mittlere Spalte und die linke Spalte des Grids.

- `span-right`

  - : Umspannt die mittlere Spalte und die rechte Spalte des Grids.

- `span-top`

  - : Umspannt die mittlere Reihe und die oberste Reihe des Grids.

- `span-bottom`

  - : Umspannt die mittlere Reihe und die unterste Reihe des Grids.

- `span-all`

  - : Gültig für alle Schlüsselworttypen, umspannt die angegebene Zelle sowie die angrenzenden Zellen in derselben Reihe oder Spalte. Siehe [`span-all`](#span-all_2) unten.

Zum Beispiel überlappt `top span-left` die obere mittlere und oberen linken Gitterzellen.

> [!NOTE]
> Der Versuch, ein Zeilen- oder Spalten-Schlüsselwort mit einem ungeeigneten überlappenden Schlüsselwort zu kombinieren, führt zu einem ungültigen Wert. So ist `right span-right` ungültig — Sie können nicht die mittlere rechte Gitterkachel auswählen und dann weiter nach rechts überlappen.

### Physische Gitterstandardwerte

Wenn in einem `position-area`-Wert nur ein physisches Schlüsselwort angegeben wird, wird der andere Wert wie folgt impliziert:

- `left`, `right`, `top` oder `bottom`

  - : Der andere Wert wird auf [`span-all`](#span-all_2) gesetzt, wodurch das Element alle drei Kacheln des Grids oder der Reihe umfasst, in die es ursprünglich platziert wurde. Zum Beispiel ist `left` gleichbedeutend mit `left span-all`.

- `center`, `span-left`, `span-right`, `span-top` oder `span-bottom`

  - : Der andere Wert ist standardmäßig `center`. Zum Beispiel ist `span-left` gleichbedeutend mit `center span-left` und `center` ist gleichbedeutend mit `center center`.

## Logische Gitter-Schlüsselwörter

Die logischen Gitter-Schlüsselwörter spezifizieren einen Bereich des Positionsgrids mit logischen Werten. Mit diesen Werten werden Position und Richtung von den {{cssxref("writing-mode")}}- und {{cssxref("direction")}}-Einstellungen entweder des [umgebenden Blocks](/de/docs/Web/CSS/Containing_block) des Elements oder, im Falle der `self`-Schlüsselwörter, des positionierten Elements selbst beeinflusst. Es gibt zwei Arten von logischen Schlüsselwörtern; generische und explizite.

### Generische logische Zeilen- und Spaltenschlüsselwort

Die generischen logischen Schlüsselwörter verwenden dieselben Begriffe für die Inline- und Block-Richtungen, wobei die Richtung durch die Position des Schlüsselbegriffs innerhalb eines Paares von `<position-area>`-Werten bestimmt wird. Der erste Wert definiert die Blockrichtungsposition und der zweite Wert definiert den Inline-Wert. Sie können einen oder zwei Schlüsselbegriffe aus der folgenden Liste angeben. Die Angabe von zwei aus dieser Liste definiert eine einzige spezifische Gitterkachel. Die Position oder Richtung des Schlüsselworts ist:

- `start`

  - : Der Beginn der Block- oder Inline-Richtung des Grids, berechnet aus dem Schreibmodus des umgebenden Blocks.

- `end`

  - : Das Ende der Block- oder Inline-Richtung des Grids, berechnet aus dem Schreibmodus des umgebenden Blocks.

- `self-start`

  - : Der Beginn der Block- oder Inline-Richtung des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

- `self-end`

  - : Das Ende der Block- oder Inline-Richtung des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`

  - : Die Mitte der Blockrichtung des Grids (wenn dieses Schlüsselwort zuerst angegeben wird) oder der Inline-Richtung (wenn dieses Schlüsselwort zweitens angegeben wird).

Zum Beispiel beschreiben `start end` und `self-start self-end` beide die Position am Anfang der Blockrichtung und am Ende der Inline-Richtung. Mit `writing-mode: horizontal-tb` gesetzt, ist dies oben rechts des Ankers, während es mit `writing-mode: vertical-rl` unten rechts des Ankers ist.

#### Generische logische überlappende Zeilen- und Spaltenschlüsselwort

Die generischen logischen überlappenden Schlüsselwörter — wenn sie mit einem logischen Zeilen- oder Spaltenschlüsselwort kombiniert werden — spezifizieren eine zweite Gitterkachel, in die sich der Positionsbereich erstreckt. Wenn eine solche Kombination als `position-area`-Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert, und es erstreckt sich dann in der Richtung, die im überlappenden Schlüsselwort angegeben ist, und erstreckt sich über zwei Gitterkacheln:

- `span-start`

  - : Umspannt die mittlere Kachel und die Startkachel der Reihen-/Spaltenrichtung des Elements, wobei die Richtung sich auf den Schreibmodus des umgebenden Blocks des Elements bezieht.

- `span-end`

  - : Umspannt die mittlere Kachel und die Endkachel der Reihen-/Spaltenrichtung des Grids, mit der Richtung, die sich auf den Schreibmodus des umgebenden Blocks des Elements bezieht.

- `span-self-start`

  - : Umspannt die mittlere Kachel und die Startkachel der Reihen-/Spaltenrichtung des positionierten Elements in seinem eigenen Schreibmodus.

- `span-self-end`

  - : Umspannt die mittlere Kachel und die Endkachel der Reihen-/Spaltenrichtung des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

Zum Beispiel spezifizieren sowohl `start span-end` als auch `self-start span-self-end` einen Gitterpositionsbereich, der in der Mitte der Startblockreihe beginnt und sich über die Kacheln in dieser Reihe erstreckt, die in der Inline-Mitte und -Ende-Spalten liegen. Mit `writing-mode: horizontal-tb` gesetzt, würde dies über die obere Mitte und oben rechts des Ankers überspannen, während es mit `writing-mode: vertical-rl` das Element über die rechte Mitte und unten rechts überspannen würde.

### Explizite Zeilen- und Spaltenschlüsselwörter

Die expliziten logischen Zeilen- und Spaltenschlüsselwörter beziehen sich explizit auf eine Block- (Zeilen-) oder Inline- (Spalten-) Position. Sie können ein Schlüsselwort für die Blockrichtung und eines für die Inline-Richtung angeben, um eine einzelne spezifische Gitterkachel auszuwählen. Im Gegensatz zu generischen logischen Schlüsselwerten spielt die Schlüsselwortreihenfolge keine Rolle. Das Erklären von zwei Schlüsselwörtern in derselben Achse macht jedoch den Wert ungültig.

- `block-start`

  - : Der Beginn der Blockrichtung des Grids, berechnet aus dem Schreibmodus des umgebenden Blocks.

- `block-end`

  - : Das Ende der Blockrichtung des Grids, berechnet aus dem Schreibmodus des umgebenden Blocks.

- `inline-start`

  - : Der Beginn der Inline-Richtung des Grids, berechnet aus dem Schreibmodus des umgebenden Blocks.

- `inline-end`

  - : Das Ende der Inline-Richtung des Grids, berechnet aus dem Schreibmodus des umgebenden Blocks.

Zum Beispiel spezifiziert `block-start inline-end` die Kachel am Anfang der Blockrichtung und am Ende der Inline-Richtung. Mit `writing-mode: horizontal-tb` gesetzt, wäre dies die Kachel am oberen rechten Rand des Ankers, während es mit `writing-mode: vertical-rl` die Kachel unten rechts wäre.

> [!NOTE]
> Die Spezifikation definiert `self`-Äquivalente dieser Schlüsselwörter — `block-self-start`, `block-self-end`, `inline-self-start` und `inline-self-end`. Diese werden jedoch derzeit in keinem Browser unterstützt.

#### Explizite überlappende Zeilen- und Spaltenschlüsselwörter

Die expliziten logischen überlappenden Schlüsselwörter — kombiniert mit einem logischen Zeilen- oder Spaltenschlüsselwort — spezifizieren eine zweite Gitterkachel, in die sich der Positionsbereich erstreckt. Wenn eine solche Kombination als `position-area`-Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert, basierend auf dem Schreibmodus des umgebenden Blocks, und es erstreckt sich dann in der Richtung, die im überlappenden Schlüsselwort angegeben ist, und erstreckt sich über zwei Gitterkacheln:

- `span-block-start`

  - : Umspannt die mittlere Kachel und die Anfangskachel der angegebenen Inline-Spalte.

- `span-block-end`

  - : Umspannt die mittlere Kachel und die Endkachel der angegebenen Inline-Spalte.

- `span-inline-start`

  - : Umspannt die mittlere Kachel und die Startkachel der angegebenen Blockreihe.

- `span-inline-end`

  - : Umspannt die mittlere Kachel und die Endkachel der angegebenen Blockreihe.

Zum Beispiel wählt `block-end span-inline-start` die mittlere Kachel der Endblockreihe aus und erstreckt sich über die Kacheln in dieser Reihe, die in der Inline-Mitte und Startrichtung liegen. Mit `writing-mode: horizontal-tb` gesetzt, würde dies die unteren mittleren und unteren linken Gitterkacheln überspannen, während es mit `writing-mode: vertical-rl` die rechten mittleren und oberen linken Gitterkacheln überspannen würde.

> [!NOTE]
> Die Spezifikation definiert `self`-Äquivalente dieser Schlüsselwörter, zum Beispiel — `span-self-block-start`, `span-self-block-end`, `span-self-inline-start` und `span-self-inline-end`. Diese werden jedoch derzeit in keinem Browser unterstützt.

> [!NOTE]
> Der Versuch, ein Zeilen- oder Spalten-Schlüsselwort mit einem ungeeigneten überlappenden Schlüsselwort zu kombinieren, führt zu einem ungültigen Eigenschaftswert. Zum Beispiel ist `block-end span-block-end` ungültig — Sie können nicht die mittlere Blockendreihe auswählen und dann versuchen, eine Kachel weiter über den Blockendrichtung hinaus zu erstrecken.

### Logische Gitterstandardwerte

Wenn nur ein einzelnes logisches `<position-area>`-Schlüsselwort angegeben ist, wird der andere Wert wie folgt impliziert:

- `start`, `end`, `self-start`, oder `self-end`

  - : Der andere Wert ist standardmäßig derselbe wie der erste Wert und wählt die Kachel am Anfang der Zeile und Spalte oder am Ende der Zeile und Spalte.

- `span-start`, `span-self-start`, `span-end`, `span-self-end`

  - : Der andere Wert ist standardmäßig `center`. Zum Beispiel ist `span-start` gleichbedeutend mit `span-start center`.

- `block-start`, `block-end`, `inline-start`, `inline-end`

  - : Der andere Wert ist standardmäßig [`span-all`](#span-all_2), umspannt alle drei Kacheln der Spalte oder Reihe, in die es ursprünglich gesetzt wurde. Zum Beispiel ist `block-start` gleichbedeutend mit `block-start span-all`.

- `span-block-start`, `span-block-end`, `span-inline-start`, `span-inline-end`

  - : Der andere Wert ist standardmäßig `center`. Zum Beispiel ist `span-inline-start` gleichbedeutend mit `span-inline-start center`.

## Koordinaten-Gitter-Schlüsselwörter

Diese Schlüsselwörter spezifizieren die Zellen des `position-area`-Grids unter Verwendung von x- und y-Koordinatenwerten. Ihre Position/ihre Richtung wird durch die {{cssxref("writing-mode")}}- und/oder {{cssxref("direction")}}-Einstellungen entweder eines Elements [umgebenden Blocks](/de/docs/Web/CSS/Containing_block) oder, im Falle der `self`-Schlüsselwörter, des Elements selbst beeinflusst.

Die Gitterkacheln sind jedoch nach physischen Achsen definiert und nicht nach Block-/Inline-Richtungen:

- Für `writing-mode: horizontal-tb` und `vertical-lr` verläuft die x-Achse von links nach rechts und die y-Achse von oben nach unten.
- Für `writing-mode: horizontal-tb; direction: rtl` und `writing-mode: vertical-rl` verläuft die x-Achse von rechts nach links und die y-Achse von oben nach unten.

Mit Koordinaten- und -Spaltenschlüsselwörtern können Sie ein Schlüsselwort von der x-Achse und eines von der y-Achse angeben, um eine einzige spezifische Gitterkachel auszuwählen.

Die Schlüsselwörter für die x-Achse umfassen:

- `x-start`

  - : Die Startkachel entlang der x-Achse des Grids, berechnet aus dem Schreibmodus des umgebenden Blocks.

- `x-end`

  - : Die Endkachel entlang der x-Achse des Grids, berechnet aus dem Schreibmodus des umgebenden Blocks.

- `x-self-start`

  - : Die Startkachel entlang der x-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

- `x-self-end`

  - : Die Endkachel entlang der x-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`

  - : Die Mitte der x-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

Die Schlüsselwörter für die y-Achse umfassen:

- `y-start`

  - : Die Startkachel entlang der y-Achse des Grids, berechnet aus dem Schreibmodus des umgebenden Blocks.

- `y-end`

  - : Die Endkachel entlang der y-Achse des Grids, berechnet aus dem Schreibmodus des umgebenden Blocks.

- `y-self-start`

  - : Die Startkachel entlang der y-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

- `y-self-end`

  - : Die Endkachel entlang der y-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`

  - : Die Mitte der y-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

Zum Beispiel wählen sowohl `x-end y-start` als auch `x-self-end y-self-start` die Gitterkachel am Ende der x-Achse und am Anfang der y-Achse. Mit `writing-mode: horizontal-tb` gesetzt, wäre dies die Zelle oben rechts des Ankers, während `writing-mode: vertical-rl` oben links wäre.

### Koordinaten-überlappende Schlüsselwörter

Wenn sie mit einem Koordinaten- oder Spaltenschlüsselwort kombiniert werden, spezifizieren die Koordinaten-überlappenden Schlüsselwörter eine zweite Gitterkachel, in die sich der Positionsbereich ausdehnen soll. Wenn eine solche Kombination als `position-area`-Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert, und es erstreckt sich dann in der Richtung, die im überlappenden Schlüsselwort angegeben ist, und erstreckt sich über zwei Gitterkacheln:

- `span-x-start`

  - : Umspannt die mittlere Kachel und die x-Startkachel der angegebenen y-Achsenreihe.

- `span-x-end`

  - : Umspannt die mittlere Kachel und die x-Endkachel der angegebenen y-Achsenreihe.

- `span-y-start`

  - : Umspannt die mittlere Kachel und die y-Startkachel der angegebenen x-Achsspalte.

- `span-y-end`

  - : Umspannt die mittlere Kachel und die y-Endkachel der angegebenen x-Achsspalte.

Zum Beispiel wählt `y-end span-x-end` die Kachel in der Mitte der End-y-Reihe und erstreckt sich über die Kacheln in dieser Reihe, die in der x-Mitte und x-Ende-Spalten liegen. Mit `writing-mode: horizontal-tb` gesetzt, würde der Positionsbereich über die unteren mittleren und unteren rechten Gitterkacheln überspannen, während er mit `writing-mode: vertical-rl` die unteren mittleren und unteren linken Kacheln überspannen würde.

> [!NOTE]
> Die Spezifikation definiert keine separaten Koordinaten-`self`-überlappendenschlüsselwörter, aber diese sind nicht nötig — die überlappenden Schlüsselwörter können mit sowohl Koordinaten- als auch Spaltenschlüsselwörtern verwendet werden.

### Koordinaten-Gitter-Standardwerte

Wenn nur ein einzelnes Koordinatengitter-`<position-area>`-Schlüsselwort angegeben ist, wird der andere Wert wie folgt impliziert:

- `x-start`, `x-self-start`, `x-end`, `x-self-end`, `y-start`, `y-self-start`, `y-end` oder `y-self-end`

  - : Der andere Wert wird auf [`span-all`](#span-all_2) gesetzt, und wählt die Gitterkacheln, die alle drei Kacheln der Spalte oder Reihe umfassen, in die es ursprünglich platziert wurde. Zum Beispiel ist `x-start` gleichbedeutend mit `x-start span-all`.

- `span-x-start`, `span-x-end`, `span-y-start` oder `span-y-end`

  - : Der andere Wert ist standardmäßig `center`. Zum Beispiel ist `span-start` gleichbedeutend mit `span-start center`.

## `span-all`

`span-all` ist ein spezielles Schlüsselwort, das mit all den in den obigen Abschnitten aufgeführten Reihen- und Spaltenschlüsselwörtern verwendet werden kann. Wenn Sie zwei Werte angeben — ein Reihen-/Spaltenschlüsselwort und `span-all`, wird das Element in die angegebene Reihe oder Spalte platziert, und es erstreckt sich dann über alle Kacheln in dieser Reihe oder Spalte.

## Beispiele

Siehe die Seite der {{cssxref("position-area")}}-Eigenschaft.

Für detaillierte Informationen zu Ankerfunktionen und -verwendung siehe die [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning)-Modulstartseite und den [Anwendung von CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)-Leitfaden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-area")}}
- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- [`anchor()`](/de/docs/Web/CSS/anchor)-Funktion
- [Anwendung von CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)-Leitfaden
- [Umgang mit Überlauf: Versuchen Sie Fallbacks und bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)-Leitfaden
- [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning)-Modul
