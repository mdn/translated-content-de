---
title: <position-area>
slug: Web/CSS/position-area_value
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`<position-area>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) definiert die Zelle oder gespannten Zellen eines **position-area Grids**, eines 3x3 Grids, dessen mittlere Zelle ein Anker-Element ist.

Die Werte des `<position-area>`-Schlüsselworts können als Wert der {{cssxref("position-area")}}-Eigenschaft gesetzt werden, um ein ankerpositioniertes Element an einem bestimmten Ort relativ zu seinem zugehörigen Anker-Element zu platzieren.

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

Positionsbereiche arbeiten mit dem Konzept eines **position-area Grids**, eines 3x3 Grids von Kacheln, bestehend aus vier Gitterlinien, zwei auf jeder Achse, wobei das Anker-Element die mittlere Kachel ist:

![Das position-area Grid, wie unten beschrieben](position-area.png)

Wenn es als Wert der `position-area`-Eigenschaft eines positionierten Elements verwendet wird, werden die Maße der mittleren Kachel durch den [enthältenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Standardanker-Elements des Elements definiert. Die Maße der äußeren Kante des Grids werden durch den enthältenden Block des positionierten Elements definiert. Logische Schlüsselbegriffe basieren im Allgemeinen auf dem Schreibmodus und der Richtung des enthältenden Blocks, mit Ausnahme der `self-*` Schlüsselbegriffe, die aus dem Schreibmodus des ankerpositionierten Elements berechnet werden.

Die Gitterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Äquivalente wie `block-start`, `center` und `block-end` sowie Koordinatenäquivalente — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `inline-start`, `center` und `inline-end` sowie Koordinatenäquivalente — `x-start`, `center` und `x-end`.

`<position-area>`-Werte beinhalten ein oder zwei Schlüsselwörter, die einen bestimmten Bereich des position-area Grids definieren. Das Festlegen eines `position-area`-Werts auf einem positionierten Element platziert seinen enthältenden Block in dem angegebenen Gitterbereich:

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

- [Physische Gitter-Schlüsselwörter](#physische_gitter-schlüsselwörter)
- [Generische logische Zeilen- und Spaltenschlüsselwörter](#generische_logische_zeilen-_und_spaltenschlüsselwörter)
- [Explizite logische Inline- und Block-Schlüsselwörter](#explizite_logische_inline-_und_block-schlüsselbegriffe)
- [Koordinaten-Gitter-Schlüsselwörter](#koordinaten-gitter-schlüsselwörter)

> [!NOTE]
> Im Allgemeinen können Sie keine unterschiedlichen Typen in einem Wert mischen, z.B. physische und logische. Dies würde zu ungültigen Werten führen. Beispielsweise ist `position-area: bottom inline-end` kein gültiger Wert, da es physische und logische Schlüsselbegriffe mischt.

## Physische Gitter-Schlüsselwörter

Die physischen Gitter-Schlüsselwörter spezifizieren eine Zelle oder einen Abschnitt des `position-area` Grids unter Verwendung physischer Werte. Diese Werte werden nicht von den Einstellungen von {{cssxref("writing-mode")}} oder {{cssxref("direction")}} beeinflusst.

Mit physischen Zeilen- und Spaltenschlüsselwörtern können Sie ein Schlüsselwort aus jeder der beiden Listen unten auswählen, um eine einzelne spezielle Gitterkachel auszuwählen:

- `top`, `center`, oder `bottom`: Die obere, mittlere oder untere Zeile des Grids.
- `left`, `center`, oder `right`: Die linke, mittlere oder rechte Spalte des Grids.

Zum Beispiel selektiert `top left` die obere linke Kachel, während `center right` die mittlere Kachel der rechten Spalte auswählt.

### Physische Spann-Gitter-Schlüsselwörter

Die physischen Spann-Schlüsselwörter — wenn sie mit einem physischen Zeilen- oder Spaltenschlüsselwort kombiniert werden — spezifizieren eine zweite Gitterkachel, in die sich der Positionsbereich ausdehnen soll. Wenn eine solche Kombination als `position-area`-Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert; es dehnt sich dann in die Richtung aus, die im Spann-Schlüsselwort angegeben ist, und erstreckt sich über zwei Gitterkacheln:

- `span-left`
  - : Erstreckt sich über die mittlere und die linke Spalte des Grids.

- `span-right`
  - : Erstreckt sich über die mittlere und die rechte Spalte des Grids.

- `span-top`
  - : Erstreckt sich über die mittlere und die obere Zeile des Grids.

- `span-bottom`
  - : Erstreckt sich über die mittlere und die untere Zeile des Grids.

- `span-all`
  - : Gültig mit allen Schlüsselbegriffsarten, spannt sie die aufgelistete Zelle sowie die angrenzenden Zellen in derselben Zeile oder Spalte. Siehe [`span-all`](#span-all_2) unten.

Zum Beispiel spannt `top span-left` die oberste mittlere und die oberste linke Gitterzelle.

> [!NOTE]
> Der Versuch, einen Zeilen- oder Spaltenschlüsselbegriff mit einem unpassenden Spann-Schlüsselwort zu paaren, führt zu einem ungültigen Wert. Beispielsweise ist `right span-right` ungültig — Sie können die mittlere rechte Gitterkachel nicht auswählen und dann versuchen, sich weiter nach rechts zu erstrecken.

### Physische Gitter-Schlüsselwort-Standards

Wenn nur ein einziges physisches Schlüsselwort in dem `position-area`-Wert spezifiziert wird, wird der andere Wert wie folgt impliziert:

- `left`, `right`, `top`, oder `bottom`
  - : Der andere Wert wird auf [`span-all`](#span-all_2) eingestellt, wodurch das Element über alle drei Kacheln der Zeile oder der Zeile, in die es zunächst gesetzt wurde, erstreckt. Zum Beispiel ist `left` gleichbedeutend mit `left span-all`.

- `center`, `span-left`, `span-right`, `span-top`, oder `span-bottom`
  - : Der andere Wert wird auf `center` voreingestellt. Zum Beispiel ist `span-left` gleichwertig mit `center span-left` und `center` mit `center center`.

## Logische Gitter-Schlüsselwörter

Die logischen Gitter-Schlüsselwörter spezifizieren einen Bereich des position area Grids mit logischen Werten. Mit diesen Werten werden Position und Richtung von den Einstellungen von {{cssxref("writing-mode")}} und {{cssxref("direction")}} entweder auf den [enthältenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements oder im Fall der `self`-Schlüsselwörter von dem positionierten Element selbst beeinflusst. Es gibt zwei Arten von logischen Schlüsselwörtern; generische und explizite.

### Generische logische Zeilen- und Spaltenschlüsselwörter

Die generischen logischen Schlüsselwörter verwenden dieselben Begriffe für die Inline- und Block-Richtungen, wobei die Richtung durch die Position des Schlüsselbegriffs innerhalb eines Paares von `<position-area>`-Werten bestimmt wird. Der erste Wert definiert die Blockrichtungsposition und der zweite Wert definiert den Inline-Wert. Sie können ein oder zwei Schlüsselbegriffe aus der folgenden Liste angeben. Zwei aus dieser Liste zu spezifizieren definiert eine einzelne spezifische Gitterkachel. Die Schlüsselwortposition oder Richtung ist:

- `start`
  - : Der Anfang der Block- oder Inline-Richtung des Grids, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `end`
  - : Das Ende der Block- oder Inline-Richtung des Grids, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `self-start`
  - : Der Anfang der Block- oder Inline-Richtung des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

- `self-end`
  - : Das Ende der Block- oder Inline-Richtung des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der Blockrichtung des Grids (wenn dieses Schlüsselwort zuerst angegeben wird) oder Inlinerichtung (wenn dieses Schlüsselwort als zweites angegeben wird).

Zum Beispiel beschreiben `start end` und `self-start self-end` beide die Position am Anfang der Blockrichtung und am Ende der Inlinerichtung. Mit `writing-mode: horizontal-tb` eingestellt, ist dies die obere rechte Ecke des Anker-Elements, während es bei `writing-mode: vertical-rl` die untere rechte Ecke des Ankers ist.

#### Generische logische Spanning-Zeilen- und Spaltenschlüsselwörter

Die generischen logischen Spanning-Schlüsselwörter — in Kombination mit einem logischen Zeilen- oder Spaltenschlüsselwort — spezifizieren eine zweite Gitterkachel, in die der Positionsbereich expandieren soll. Wenn eine solche Kombination als `position-area`-Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert, dann dehnt es sich in die Richtung aus, die im Spanning-Schlüsselwort angegeben ist, und erstreckt sich über zwei Gitterkacheln:

- `span-start`
  - : Erstreckt sich über die mittlere Kachel und die Startkachel der Gitterzeile/-spalte, wobei sich die Richtung auf den Schreibmodus des enthältenden Blocks bezieht.

- `span-end`
  - : Erstreckt sich über die mittlere Kachel und die Endkachel der Gitterzeile/-spalte, wobei sich die Richtung auf den Schreibmodus des enthältenden Blocks bezieht.

- `span-self-start`
  - : Erstreckt sich über die mittlere Kachel und die Startkachel der Gitterzeile/-spalte für den eigenen Schreibmodus des positionierten Elements.

- `span-self-end`
  - : Erstreckt sich über die mittlere Kachel und die Endkachel der Gitterzeile/-spalte, berechnet aus dem eigenen Schreibmodus des Elements.

Zum Beispiel legen `start span-end` und `self-start span-self-end` beide einen Gridpositionsbereich fest, der in der Mitte der Startblockzeile beginnt und sich über die Kacheln in dieser Zeile erstreckt, die in der Inline-Mitte und Endspalten sitzen. Mit `writing-mode: horizontal-tb` würde dies über die obere Mitte und das obere Recht des Ankers erstrecken, während es bei `writing-mode: vertical-rl` das Element über die rechte Mitte und das untere Recht erstrecken würde.

### Explizite logische Inline- und Block-Schlüsselbegriffe

Die expliziten logischen Inline- und Blockzeilen- und Spaltenschlüsselbegriffe beziehen sich ausdrücklich auf eine Block- (Zeile) oder Inline- (Spalte) Position. Sie können ein Schlüsselwort für die Blockrichtung und eines für die Inline-Richtung angeben, um eine einzelne spezifische Gitterkachel auszuwählen. Im Gegensatz zu generischen logischen Schlüsselwortwerten spielt die Reihenfolge der Schlüsselwörter keine Rolle. Das Deklarieren von zwei Schlüsselwörtern entlang derselben Achse macht den Wert jedoch ungültig.

- `block-start`
  - : Der Anfang der Blockrichtung des Grids, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `block-end`
  - : Das Ende der Blockrichtung des Grids, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `inline-start`
  - : Der Anfang der Inlinerichtung des Grids, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `inline-end`
  - : Das Ende der Inlinerichtung des Grids, berechnet aus dem Schreibmodus des enthältenden Blocks.

Zum Beispiel spezifiziert `block-start inline-end` die Kachel am Anfang der Blockrichtung und am Ende der Inlinerichtung. Mit `writing-mode: horizontal-tb` würde dies die Kachel oben rechts am Anker sein, während es bei `writing-mode: vertical-rl` die Kachel unten rechts sein würde.

> [!NOTE]
> Die Spezifikation definiert `self`-Äquivalente dieser Schlüsselwörter — `block-self-start`, `block-self-end`, `inline-self-start` und `inline-self-end`. Diese werden jedoch derzeit in keinem Browser unterstützt.

#### Explizite Inline- und Block-logische Spanning-Schlüsselbegriffe

Die expliziten logischen Spanning-Schlüsselbegriffe — in Kombination mit einem logischen Zeilen- oder Spaltenschlüsselwort — spezifizieren eine zweite Gitterkachel, in die der Positionsbereich expandieren soll. Wenn eine solche Kombination als `position-area`-Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte basierend auf dem Schreibmodus des Enthältenden Blocks platziert, dann dehnt es sich in die Richtung aus, die im Spanning-Schlüsselwort angegeben ist und erstreckt sich über zwei Gitterkacheln:

- `span-block-start`
  - : Erstreckt sich über die mittlere Kachel und die Block-Startkachel der angegebenen Inline-Spalte.

- `span-block-end`
  - : Erstreckt sich über die mittlere Kachel und die Block-Endkachel der angegebenen Inline-Spalte.

- `span-inline-start`
  - : Erstreckt sich über die mittlere Kachel und die Inline-Startkachel der angegebenen Blockzeile.

- `span-inline-end`
  - : Erstreckt sich über die mittlere Kachel und die Inline-Endkachel der angegebenen Blockzeile.

Zum Beispiel selektiert `block-end span-inline-start` die Mittelkachel der Endblockzeile und erstreckt sich über die Kacheln in dieser Zeile, die in der Inline-Mitte und den Startspalten sitzen. Mit `writing-mode: horizontal-tb` würde dies die Gitterkacheln unten in der Mitte und unten links erstrecken, während es bei `writing-mode: vertical-rl` die linke Mitte und oben links erstrecken würde.

> [!NOTE]
> Die Spezifikation definiert `self`-Äquivalente dieser Schlüsselwörter, zum Beispiel — `span-self-block-start`, `span-self-block-end`, `span-self-inline-start` und `span-self-inline-end`. Diese werden jedoch derzeit in keinem Browser unterstützt.

> [!NOTE]
> Der Versuch, einen Zeilen- oder Spaltenschlüsselbegriff mit einem unpassenden Spanning-Schlüsselwort zu paaren, führt zu einem ungültigen Eigenschaftswert. Zum Beispiel ist `block-end span-block-end` ungültig — Sie können die mittlere Block-Endzeile nicht auswählen und dann versuchen, eine Kachel weiter über die Block-Endrichtung hinaus zu erstrecken.

### Logische Gitter-Schlüsselwort-Standards

Wenn nur ein einziges logisches `<position-area>`-Schlüsselwort spezifiziert ist, wird der andere Wert wie folgt impliziert:

- `start`, `end`, `self-start`, oder `self-end`
  - : Der andere Wert wird auf den gleichen Wert wie der erste eingestellt, der die Gitterzelle an der Startzeile und der Startspalte oder der Endzeile und Endspalte auswählt.

- `span-start`, `span-self-start`, `span-end`, `span-self-end`
  - : Der andere Wert wird auf `center` voreingestellt. Zum Beispiel ist `span-start` gleichwertig mit `span-start center`.

- `block-start`, `block-end`, `inline-start`, `inline-end`
  - : Der andere Wert wird auf [`span-all`](#span-all_2) voreingestellt und erstreckt sich über alle drei Kacheln der Spalte oder Zeile, die festgelegt wurde. Zum Beispiel ist `block-start` gleichbedeutend mit `block-start span-all`.

- `span-block-start`, `span-block-end`, `span-inline-start`, `span-inline-end`
  - : Der andere Wert wird auf `center` voreingestellt. Zum Beispiel ist `span-inline-start` gleichwertig mit `span-inline-start center`.

## Koordinaten-Gitter-Schlüsselwörter

Diese Schlüsselwörter spezifizieren die Zellen des `position-area` Grids unter Verwendung von x- und y-Koordinatenwerten. Ihre Position/Richtung wird von den Einstellungen von {{cssxref("writing-mode")}} und/oder {{cssxref("direction")}} entweder auf den [enthältenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) eines Elements oder, im Fall der `self` Schlüsselwörter, auf das Element selbst beeinflusst.

Die Gitterzellen werden jedoch gemäß physischer Achsen statt Block-/Inline-Richtungen definiert:

- Für `writing-mode: horizontal-tb` und `vertical-lr` läuft die x-Achse von links nach rechts und die y-Achse von oben nach unten.
- Für `writing-mode: horizontal-tb; direction: rtl` und `writing-mode: vertical-rl` läuft die x-Achse von rechts nach links und die y-Achse von oben nach unten.

Mit Koordinaten-Zeilen- und Spaltenschlüsselwörtern können Sie ein Schlüsselwort von der x-Achse und eines von der y-Achse angeben, um eine einzige spezifische Gitterkachel zu definieren.

Die Schlüsselwörter der x-Achse umfassen:

- `x-start`
  - : Die Startkachel entlang der x-Achse des Grids, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `x-end`
  - : Die Endkachel entlang der x-Achse des Grids, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `x-self-start`
  - : Die Startkachel entlang der x-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

- `x-self-end`
  - : Die Endkachel entlang der x-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der x-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

Die Schlüsselwörter der y-Achse umfassen:

- `y-start`
  - : Die Startkachel entlang der y-Achse des Grids, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `y-end`
  - : Die Endkachel entlang der y-Achse des Grids, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `y-self-start`
  - : Die Startkachel entlang der y-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

- `y-self-end`
  - : Die Endkachel entlang der y-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der y-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

Zum Beispiel selektieren `x-end y-start` und `x-self-end y-self-start` beide die Gitterzelle am Ende der x-Achse und am Anfang der y-Achse. Mit `writing-mode: horizontal-tb eingestellt`, wäre dies die Zelle oben rechts am Anker, während es bei `writing-mode: vertical-rl` unten links ist.

### Koordinaten-Spanning-Schlüsselwörter

Wenn sie mit einem Koordinaten-Zeilen- oder Spaltenschlüsselwort kombiniert werden, spezifizieren die Koordinaten-Spanning-Schlüsselwörter eine zweite Gitterkachel, in die sich der Positionsbereich ausdehnen soll. Wenn eine solche Kombination als `position-area`-Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst mittig in der angegebenen Zeile oder Spalte platziert, und es dehnt sich dann in die Richtung des angegebenen Spanning-Schlüsselworts aus und erstreckt sich über zwei Gitterkacheln:

- `span-x-start`
  - : Erstreckt sich über die mittlere Kachel und die x-Startkachel der angegebenen y-Achsenzeile.

- `span-x-end`
  - : Erstreckt sich über die mittlere Kachel und die x-Endkachel der angegebenen y-Achsenzeile.

- `span-y-start`
  - : Erstreckt sich über die mittlere Kachel und die y-Startkachel der angegebenen x-Achsenspalte.

- `span-y-end`
  - : Erstreckt sich über die mittlere Kachel und die y-Endkachel der angegebenen x-Achsenspalte.

Zum Beispiel selektiert `y-end span-x-end` die Kachel in der Mitte der End y-Zeile und erstreckt sich über die Kacheln in dieser Zeile, die in der x-Mitte und x-End-Spalten sitzen. Mit `writing-mode: horizontal-tb` eingestellt, würde der Positionsgitterbereich die Gitterkacheln in der Mitte am unteren Rand und rechts unten erstrecken, während es bei `writing-mode: vertical-rl` die linke Mitte und oben links erstrecken würde.

> [!NOTE]
> Die Spezifikation definiert keine separaten Koordinaten-`self` Spann-Schlüsselwörter, aber diese sind nicht erforderlich — die Spann-Schlüsselwörter können mit beiden Koordinaten-Zeilen- und Spaltenschlüsselwörtern verwendet werden.

### Koordinaten-Gitter-Schlüsselwort-Standards

Wenn nur ein einziges Koordinaten-Gitter-`<position-area>`-Schlüsselwort spezifiziert ist, wird der andere Wert wie folgt impliziert:

- `x-start`, `x-self-start`, `x-end`, `x-self-end`, `y-start`, `y-self-start`, `y-end`, oder `y-self-end`
  - : Der andere Wert wird auf [`span-all`](#span-all_2) voreingestellt, wobei die Gitterkacheln über alle drei Kacheln der Spalte oder der Zeile auswählend, in die er ursprünglich gesetzt wurde. Zum Beispiel ist `x-start` gleichbedeutend mit `x-start span-all`.

- `span-x-start`, `span-x-end`, `span-y-start`, oder `span-y-end`
  - : Der andere Wert ist standardmäßig `center`. Zum Beispiel ist `span-start` gleichbedeutend mit `span-start center`.

## `span-all`

`span-all` ist ein spezielles Schlüsselwort, das mit allen in den obigen Abschnitten aufgelisteten Zeilen- und Spaltenschlüsselwörtern verwendet werden kann. Wenn Sie zwei Werte angeben — ein Zeilen-/Spaltenschlüsselwort und `span-all`, wird das Element in der angegebenen Zeile oder Spalte platziert und es erstreckt sich dann über alle Kacheln in dieser Zeile oder Spalte hinweg.

## Beispiele

Sehen Sie sich die Seite der {{cssxref("position-area")}} Eigenschaft an.

Für detaillierte Informationen über Ankerfunktionen und deren Verwendung siehe das [CSS-Anchor-Positioning](/de/docs/Web/CSS/CSS_anchor_positioning)-Modul und die [Verwendung der CSS-Anchor-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Anleitung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-area")}}
- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- [`anchor()`](/de/docs/Web/CSS/anchor) Funktion
- [Verwendung der CSS-Anchor-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Anleitung
- [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Anleitung
- [CSS-Anchor-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
