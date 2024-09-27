---
title: <position-area>
slug: Web/CSS/position-area_value
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{CSSRef}}{{SeeCompatTable}}

Der **`<position-area>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) definiert die Zelle oder die über mehrere Zellen gespannte Auswahl eines **position-area grids**, eines 3x3-Rasters, dessen mittlere Zelle ein Ankerelement ist.

Die `<position-area>`-Schlüsselwortwerte können als Wert der {{cssxref("position-area")}}-Eigenschaft gesetzt werden, um ein ankerpositioniertes Element an einem bestimmten Ort relativ zu seinem zugehörigen Ankerelement zu platzieren.

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

Positionsbereiche basieren auf dem Konzept eines **position-area grids**, eines 3x3-Rasters aus Kacheln, das aus vier Gitterlinien besteht, zwei auf jeder Achse, wobei das Ankerelement die mittlere Kachel ist:

![Das position-area grid, wie unten beschrieben](position-area.png)

Wenn es als Wert der Eigenschaft `position-area` eines positionierten Elements verwendet wird, werden die Dimensionen der mittleren Kachel durch den [Containing Block](/de/docs/Web/CSS/Containing_block) des Standardankerelements des Elements definiert. Die Abmessungen des äußersten Randes des Rasters werden durch den Containing Block des positionierten Elements definiert. Logische Schlüsselwörter basieren im Allgemeinen auf dem Schreibmodus und der Richtung des Containing Blocks, mit Ausnahme der `self-*`-Schlüsselwörter, die aus dem Schreibmodus des ankerpositionierten Elements berechnet werden.

Die Rasterkacheln sind in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Äquivalente wie `block-start`, `center` und `block-end` sowie koordinatenbasierte Äquivalente — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `inline-start`, `center` und `inline-end` sowie koordinatenbasierte Äquivalente — `x-start`, `center` und `x-end`.

`<position-area>`-Werte enthalten ein oder zwei Schlüsselwörter, die einen bestimmten Bereich des position-area grids definieren. Durch das Setzen eines `position-area`-Wertes wird der Containing Block eines positionierten Elements im angegebenen Rasterbereich platziert:

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

Die verschiedenen Typen von Schlüsselwörtern, die verwendet werden können, umfassen:

- [Physische Rastersystem-Schlüsselwörter](#physische_rastersystem-schlüsselwörter)
- [Allgemeine logische Reihen- und Spalten-Schlüsselwörter](#generische_logische_reihen-_und_spalten-schlüsselwörter)
- [Explizite Inline- und Blocklogik-Schlüsselwörter](#explizite_inline-_und_blocklogik-schlüsselwörter)
- [Koordinatenbasierte Rastersystem-Schlüsselwörter](#koordinatenbasierte_rastersystem-schlüsselwörter)

> [!NOTE]
> Im Allgemeinen können Sie nicht verschiedene Typen in einem Wert mischen, z.B. physische und logische. Dies würde zu ungültigen Werten führen. Zum Beispiel ist `position-area: bottom inline-end` kein gültiger Wert, da es physische und logische Schlüsselwörter mischt.

## Physische Rastersystem-Schlüsselwörter

Die physischen Rastersystem-Schlüsselwörter spezifizieren eine Zelle oder einen Abschnitt des `position-area` grids mithilfe physischer Werte. Diese Werte werden nicht von {{cssxref("writing-mode")}}- oder {{cssxref("direction")}}-Einstellungen beeinflusst.

Mit physischen Reihen- und Spalten-Schlüsselwörtern können Sie ein Schlüsselwort aus jeder der beiden unten stehenden Listen auswählen, um eine einzelne spezifische Rasterkachel auszuwählen:

- `top`, `center` oder `bottom`: Die oberste, mittlere oder unterste Reihe des Rasters.
- `left`, `center` oder `right`: Die linke, mittlere oder rechte Spalte des Rasters.

Zum Beispiel wählt `top left` die obere linke Kachel aus, während `center right` die mittlere Kachel der rechten Spalte auswählt.

### Physische Überspannende Rastersystem-Schlüsselwörter

Die physischen Überspannenden Schlüsselwörter — wenn sie mit einem physischen Reihen- oder Spalten-Schlüsselwort kombiniert werden — spezifizieren eine zweite Rasterkachel, in die sich der Positionsbereich ausdehnen soll. Wenn eine solche Kombination als `position-area`-Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Reihe oder Spalte platziert; es erstreckt sich dann in die Richtung, die im Überspannungsschlüsselwort spezifiziert ist, und erstreckt sich über zwei Rasterkacheln:

- `span-left`

  - : Umspannt die mittlere und die linke Spalte des Rasters.

- `span-right`

  - : Umspannt die mittlere und die rechte Spalte des Rasters.

- `span-top`

  - : Umspannt die mittlere und die obere Reihe des Rasters.

- `span-bottom`

  - : Umspannt die mittlere und die untere Reihe des Rasters.

- `span-all`

  - : Gültig mit allen Schlüsselworttypen, umspannt die angegebene Zelle sowie die angrenzenden Zellen in derselben Reihe oder Spalte. Siehe [`span-all`](#span-all_2) unten.

Zum Beispiel umfasst `top span-left` die oberste Mitte und die obere linke Rasterzelle.

> [!NOTE]
> Der Versuch, ein Reihen- oder Spaltenschlüsselwort mit einem unpassenden Überspannungsschlüsselwort zu paaren, führt zu einem ungültigen Wert. Zum Beispiel ist `right span-right` ungültig — Sie können nicht die mittlere rechte Rasterkachel auswählen und dann versuchen, weiter nach rechts zu erweitern.

### Physische Rastersystem-Schlüsselwort-Standards

Wenn nur ein einzelnes physisches Schlüsselwort im `position-area`-Wert angegeben wird, wird der andere Wert wie folgt impliziert:

- `left`, `right`, `top` oder `bottom`

  - : Der andere Wert wird standardmäßig auf [`span-all`](#span-all_2) gesetzt, wodurch das Element alle drei Kacheln des Rasters oder der Reihe überspannt, in die es ursprünglich platziert wurde. Zum Beispiel ist `left` gleichbedeutend mit `left span-all`.

- `center`, `span-left`, `span-right`, `span-top` oder `span-bottom`

  - : Der andere Wert wird standardmäßig auf `center` gesetzt. Zum Beispiel ist `span-left` gleichbedeutend mit `center span-left` und `center` ist gleichbedeutend mit `center center`.

## Logische Rastersystem-Schlüsselwörter

Die logischen Rastersystem-Schlüsselwörter spezifizieren einen Bereich des position-area grids mithilfe logischer Werte. Bei diesen Werten werden die Position und Richtung von den {{cssxref("writing-mode")}}- und {{cssxref("direction")}}-Einstellungen entweder auf dem [Containing Block](/de/docs/Web/CSS/Containing_block) des Elements oder, im Fall der `self`-Schlüsselwörter, auf dem positionierten Element selbst beeinflusst. Es gibt zwei Arten von logischen Schlüsselwörtern: generische und explizite.

### Generische logische Reihen- und Spalten-Schlüsselwörter

Die generischen logischen Schlüsselwörter verwenden dieselben Begriffe für die Inline- und Blockrichtungen, wobei die Richtung durch die Position des Schlüsselbegriffs innerhalb eines Paares von `<position-area>`-Werten bestimmt wird. Der erste Wert definiert die Position der Blockrichtung und der zweite Wert definiert den Inline-Wert. Sie können ein oder zwei Schlüsselbegriffe aus der folgenden Liste angeben. Zwei aus dieser Liste zu spezifizieren, definiert eine einzige spezifische Rasterkachel. Die Schlüsselwortposition oder -richtung ist:

- `start`

  - : Der Anfang der Block- oder Inline-Richtung des Rasters, berechnet aus dem Schreibmodus des Containing Blocks.

- `end`

  - : Das Ende der Block- oder Inline-Richtung des Rasters, berechnet aus dem Schreibmodus des Containing Blocks.

- `self-start`

  - : Der Anfang der Block- oder Inline-Richtung des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `self-end`

  - : Das Ende der Block- oder Inline-Richtung des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`

  - : Die Mitte der Blockrichtung des Rasters (wenn dieses Schlüsselwort zuerst angegeben ist) oder die Inline-Richtung (wenn dieses Schlüsselwort zweites angegeben ist).

Zum Beispiel beschreiben `start end` und `self-start self-end` beide die Position am Anfang der Blockrichtung und dem Ende der Inline-Richtung. Mit `writing-mode: horizontal-tb` gesetzt ist dies die obere rechte Ecke des Ankerelements, während es mit `writing-mode: vertical-rl` die untere rechte Ecke des Ankers ist.

#### Generische logische überspannende Reihen- und Spalten-Schlüsselwörter

Die generischen logischen überspannenden Schlüsselwörter — wenn sie mit einem logischen Reihen- oder Spalten-Schlüsselwort kombiniert werden — spezifizieren eine zweite Rasterkachel, in die sich der Positionsbereich ausdehnen soll. Wenn eine solche Kombination als `position-area`-Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Reihe oder Spalte platziert und es erstreckt sich dann in die Richtung, die im Überspannungsschlüsselwort spezifiziert ist, über zwei Rasterkacheln hinweg:

- `span-start`

  - : Umspannt die mittlere Kachel und die Startkachel der Rasterreihe/-spalte, wobei die Richtung auf den Schreibmodus des Containing Blocks des Elements verweist.

- `span-end`

  - : Umspannt die mittlere Kachel und die Endkachel der Rasterreihe/-spalte, wobei die Richtung auf den Schreibmodus des Containing Blocks des Elements verweist.

- `span-self-start`

  - : Umspannt die mittlere Kachel und die Startkachel der Rasterreihe/-spalte für den eigenen Schreibmodus des positionierten Elements.

- `span-self-end`

  - : Umspannt die mittlere Kachel und die Endkachel der Rasterreihe/-spalte, berechnet aus dem eigenen Schreibmodus des Elements.

Zum Beispiel spezifizieren `start span-end` und `self-start span-self-end` beide einen Rasterpositionsbereich, der in der Mitte der Startblockreihe beginnt und über die Kacheln in dieser Reihe spannt, die in den Inline-Mitte- und Endspalten liegen. Mit `writing-mode: horizontal-tb` gesetzt würde dies sich über die obere Mitte und obere rechte Ecke des Ankers erstrecken, während es mit `writing-mode: vertical-rl` gesetzt, das Element über die rechte Mitte und die untere rechte Ecke spannen würde.

### Explizite Inline- und Blocklogik-Schlüsselwörter

Die expliziten Inline- und Blocklogik-Reihen- und Spalten-Schlüsselwörter beziehen sich explizit auf eine Block- (Reihe) oder Inline- (Spalte) Position. Sie können ein Schlüsselwort für die Blockrichtung und eines für die Inline-Richtung angeben, um eine spezifische Rasterkachel auswählen. Im Gegensatz zu generischen logischen Schlüsselwortwerten spielt die Reihenfolge der Schlüsselwörter keine Rolle. Das Deklarieren von zwei Schlüsselwörtern in derselben Achse macht jedoch den Wert ungültig.

- `block-start`

  - : Der Anfang der Blockrichtung des Rasters, berechnet aus dem Schreibmodus des Containing Blocks.

- `block-end`

  - : Das Ende der Blockrichtung des Rasters, berechnet aus dem Schreibmodus des Containing Blocks.

- `inline-start`

  - : Der Anfang der Inline-Richtung des Rasters, berechnet aus dem Schreibmodus des Containing Blocks.

- `inline-end`

  - : Das Ende der Inline-Richtung des Rasters, berechnet aus dem Schreibmodus des Containing Blocks.

Zum Beispiel spezifiziert `block-start inline-end` die Kachel am Anfang der Blockrichtung und am Ende der Inline-Richtung. Mit `writing-mode: horizontal-tb` gesetzt, wäre dies die Kachel oben rechts neben dem Anker, während es mit `writing-mode: vertical-rl` gesetzt, dies die untere rechte Kachel wäre.

> [!NOTE]
> Die Spezifikation definiert `self`-Äquivalente dieser Schlüsselwörter — `block-self-start`, `block-self-end`, `inline-self-start` und `inline-self-end`. Diese werden jedoch derzeit in keinem Browser unterstützt.

#### Explizite Inline- und Blocklogik-Überspannungs-Schlüsselwörter

Die expliziten logischen Überspannungs-Schlüsselwörter — wenn sie mit einem logischen Reihen- oder Spalten-Schlüsselwort kombiniert werden — spezifizieren eine zweite Rasterkachel, in die sich der Positionsbereich ausdehnen soll. Wenn eine solche Kombination als `position-area`-Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Reihe oder Spalte platziert, basierend auf dem Schreibmodus des Containing Blocks, und es erstreckt sich dann in die Richtung, die im Überspannungsschlüsselwort spezifiziert ist, über zwei Rasterkacheln hinweg:

- `span-block-start`

  - : Umspannt die mittlere Kachel und die Block-Startkachel der angegebenen Inline-Spalte.

- `span-block-end`

  - : Umspannt die mittlere Kachel und die Block-Endkachel der angegebenen Inline-Spalte.

- `span-inline-start`

  - : Umspannt die mittlere Kachel und die Inline-Startkachel der angegebenen Blockreihe.

- `span-inline-end`

  - : Umspannt die mittlere Kachel und die Inline-Endkachel der angegebenen Blockreihe.

Zum Beispiel wählt `block-end span-inline-start` die mittlere Kachel der Endblockreihe aus und erstreckt sich über die Kacheln in dieser Reihe, die in den Inline-Mitte- und Startspalten liegen. Mit `writing-mode: horizontal-tb` gesetzt wäre dies das Überla</position-area> des unteren Zentrums und der unteren linken Rasterkacheln, während es mit `writing-mode: vertical-rl` gesetzt, es das linke Zentrum und die obere linke Rasterkachel umfassen würde.

> [!NOTE]
> Die Spezifikation definiert `self`-Äquivalente dieser Schlüsselwörter, zum Beispiel — `span-self-block-start`, `span-self-block-end`, `span-self-inline-start` und `span-self-inline-end`. Diese werden jedoch derzeit in keinem Browser unterstützt.

> [!NOTE]
> Der Versuch, ein Reihen- oder Spaltenschlüsselwort mit einem unpassenden Überspannungsschlüsselwort zu paaren, führt zu einem ungültigen Eigenschaftswert. Zum Beispiel ist `block-end span-block-end` ungültig — Sie können die mittlere Block-Endreihe nicht auswählen und dann versuchen, eine Kachel weiter in die Blockendrichtung zu spannen.

### Logische Rastersystem-Schlüsselwort-Standards

Wenn nur ein einzelnes logisches `<position-area>`-Schlüsselwort angegeben ist, wird der andere Wert wie folgt impliziert:

- `start`, `end`, `self-start` oder `self-end`

  - : Der andere Wert hat standardmäßig den gleichen Wert wie der erste Wert, und wählt die Rasterzelle in der Anfangsreihe und -spalte oder in der Endreihe und -spalte aus.

- `span-start`, `span-self-start`, `span-end`, `span-self-end`

  - : Der andere Wert ist standardmäßig `center`. Zum Beispiel ist `span-start` gleichbedeutend mit `span-start center`.

- `block-start`, `block-end`, `inline-start`, `inline-end`

  - : Der andere Wert ist standardmäßig [`span-all`](#span-all_2), und umspannt alle drei Kacheln der eingestellten Spalte oder Reihe. Zum Beispiel ist `block-start` gleichbedeutend mit `block-start span-all`.

- `span-block-start`, `span-block-end`, `span-inline-start`, `span-inline-end`

  - : Der andere Wert ist standardmäßig `center`. Zum Beispiel ist `span-inline-start` gleichbedeutend mit `span-inline-start center`.

## Koordinatenbasierte Rastersystem-Schlüsselwörter

Diese Schlüsselwörter spezifizieren die Zellen des `position-area` grids mithilfe von x- und y-Koordinatenwerten. Seine Position/Richtung wird von {{cssxref("writing-mode")}}- und/oder {{cssxref("direction")}}-Einstellungen entweder auf dem [Containing Block](/de/docs/Web/CSS/Containing_block) eines Elements oder, im Fall der `self`-Schlüsselwörter, auf dem Element selbst, beeinflusst.

Die Rasterzellen sind jedoch gemäß den physikalischen Achsen definiert und nicht gemäß der Block/Inline-Richtung:

- Für `writing-mode: horizontal-tb` und `vertical-lr` verläuft die x-Achse von links nach rechts und die y-Achse von oben nach unten.
- Für `writing-mode: horizontal-tb; direction: rtl` und `writing-mode: vertical-rl` verläuft die x-Achse von rechts nach links und die y-Achse von oben nach unten.

Mit den koordinierten Reihen- und Spaltenschlüsselwörtern können Sie ein Schlüsselwort aus der x-Achse und eines von der y-Achse angeben, um eine einzige spezifische Rasterkachel zu definieren.

Die Schlüsselwörter der x-Achse beinhalten:

- `x-start`

  - : Die Startkachel entlang der x-Achse des Rasters, berechnet aus dem Schreibmodus des Containing Blocks.

- `x-end`

  - : Die Endkachel entlang der x-Achse des Rasters, berechnet aus dem Schreibmodus des Containing Blocks.

- `x-self-start`

  - : Die Startkachel entlang der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `x-self-end`

  - : Die Endkachel entlang der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`

  - : Die Mitte der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

Die Schlüsselwörter der y-Achse beinhalten:

- `y-start`

  - : Die Startkachel entlang der y-Achse des Rasters, berechnet aus dem Schreibmodus des Containing Blocks.

- `y-end`

  - : Die Endkachel entlang der y-Achse des Rasters, berechnet aus dem Schreibmodus des Containing Blocks.

- `y-self-start`

  - : Die Startkachel entlang der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `y-self-end`

  - : Die Endkachel entlang der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`

  - : Die Mitte der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

Zum Beispiel wählen `x-end y-start` und `x-self-end y-self-start` beide die Rasterzelle am Ende der x-Achse und am Start der y-Achse. Mit `writing-mode: horizontal-tb` gesetzt wäre dies die Zelle oben rechts neben dem Anker, während mit `writing-mode: vertical-rl` es sich in der oberen linken Zelle befindet.

### Koordinaten-Überspannungs-Schlüsselwörter

Wenn sie mit einem koordinierten Reihen- oder Spaltenschlüsselwort kombiniert werden, spezifizieren die koordinierten Überspannungs-Schlüsselwörter eine zweite Rasterkachel, in die sich der Positionsbereich ausdehnen soll. Wenn eine solche Kombination als `position-area`-Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Reihe oder Spalte platziert und es erstreckt sich dann in die Richtung, die im Überspannungsschlüsselwort spezifiziert ist, und spannt zwei Rasterkacheln:

- `span-x-start`

  - : Umspannt die mittlere Kachel und die x-Startkachel der angegebenen y-Achsenreihe.

- `span-x-end`

  - : Umspannt die mittlere Kachel und die x-Endkachel der angegebenen y-Achsenreihe.

- `span-y-start`

  - : Umspannt die mittlere Kachel und die y-Startkachel der angegebenen x-Achsenspalte.

- `span-y-end`

  - : Umspannt die mittlere Kachel und die y-Endkachel der angegebenen x-Achsenspalte.

Zum Beispiel wählt `y-end span-x-end` die Kachel in der Mitte der End-y-Reihe aus und erstreckt sich über die Kacheln in dieser Reihe, die in den x-Mitte- und x-End-Spalten liegen. Mit `writing-mode: horizontal-tb` gesetzt, würde das Positionsrastergebiet die Rasterkacheln in der unteren Mitte und unten rechts umfassen, während mit `writing-mode: vertical-rl` gesetzt, es die untere Mitte und die untere linke Kachel umfasst.

> [!NOTE]
> Die Spezifikation definiert separate `self`-Koordinatenüberspannungs-Schlüsselwörter nicht, aber diese sind nicht nötig — die Überspannungs-Schlüsselwörter können sowohl mit koordinierten Reihen- als auch mit Spaltenschlüsselwörtern verwendet werden.

### Koordinatenbasierte Rastersystem-Schlüsselwort-Standards

Wenn nur ein einzelnes koordiniertes Rastersystem-`<position-area>`-Schlüsselwort angegeben ist, wird der andere Wert wie folgt impliziert:

- `x-start`, `x-self-start`, `x-end`, `x-self-end`, `y-start`, `y-self-start`, `y-end` oder `y-self-end`

  - : Der andere Wert ist standardmäßig [`span-all`](#span-all_2), die Rasterzellen auswählend, die alle drei Kacheln der Spalte oder Reihe umspannen, in der er ursprünglich platziert wurde. Zum Beispiel ist `x-start` gleichbedeutend mit `x-start span-all`.

- `span-x-start`, `span-x-end`, `span-y-start` oder `span-y-end`

  - : Der andere Wert ist standardmäßig `center`. Zum Beispiel ist `span-start` gleichbedeutend mit `span-start center`.

## `span-all`

`span-all` ist ein spezielles Schlüsselwort, das mit allen in den obigen Abschnitten genannten Reihen- und Spaltenschlüsselwörtern verwendet werden kann. Wenn Sie zwei Werte angeben — ein Reihen-/Spaltenschlüsselwort und `span-all`, wird das Element in der angegebenen Reihe oder Spalte platziert und es erstreckt sich dann über alle Kacheln in dieser Reihe oder Spalte.

## Beispiele

Siehe die {{cssxref("position-area")}} Eigenschaftsseite.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung siehe das [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul und den [CSS-Ankerpositionierung verwenden](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-area")}}
- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- [`anchor()`](/de/docs/Web/CSS/anchor) Funktion
- [CSS-Ankerpositionierung verwenden](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Handling overflow: try fallbacks and conditional hiding](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
