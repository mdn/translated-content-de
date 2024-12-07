---
title: <position-area>
slug: Web/CSS/position-area_value
l10n:
  sourceCommit: 9a23308bcdf92b9f10abbc5ecbed2343b9346dd4
---

{{CSSRef}}{{SeeCompatTable}}

Der **`<position-area>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) definiert die Zelle oder die überspannten Zellen eines **position-area-Gitters**, ein 3x3-Gitter, dessen mittlere Zelle ein Ankerelement ist.

Die Schlüsselwortwerte von `<position-area>` können als Wert der {{cssxref("position-area")}}-Eigenschaft gesetzt werden, um ein ankergestütztes Element an einer bestimmten Position relativ zu seinem zugehörigen Ankerelement zu platzieren.

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

Positionsbereiche basieren auf dem Konzept eines **position-area-Gitters**, eines 3x3-Kachelgitters, das aus vier Gitternetzlinien, zwei auf jeder Achse, besteht, wobei das Ankerelement die mittlere Kachel ist:

![Das position-area-Gitter, wie unten beschrieben](position-area.png)

Wenn sie als Wert der `position-area`-Eigenschaft eines positionierten Elements verwendet werden, werden die Dimensionen der mittleren Kachel durch den [umfassenden Block](/de/docs/Web/CSS/Containing_block) des standardmäßigen Ankerelements des Elements definiert. Die Dimensionen der äußeren Kante des Gitters werden durch den umfassenden Block des positionierten Elements bestimmt. Logische Schlüsselbegriffe basieren in der Regel auf dem Schreibmodus und der Richtung des umfassenden Blocks, mit Ausnahme der Schlüsselbegriffe `self-*`, die aus dem Schreibmodus des ankergestützten Elements berechnet werden.

Die Gitterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Entsprechungen wie `block-start`, `center` und `block-end`, und Koordinatenäquivalente - `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Entsprechungen wie `inline-start`, `center` und `inline-end`, und Koordinatenäquivalente - `x-start`, `center` und `x-end`.

`<position-area>`-Werte enthalten ein oder zwei Schlüsselwörter, die einen bestimmten Bereich des position-area-Gitters definieren. Das Setzen eines `position-area`-Werts auf ein positioniertes Element platziert seinen umfassenden Block im angegebenen Gitterbereich:

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
- [Generische logische Reihen- und Spalten-Schlüsselwörter](#generische_logische_reihen-_und_spalten-schlüsselwörter)
- [Explizite inline und block logische Schlüsselwörter](#explizite_inline_und_block_logische_schlüsselwörter)
- [Koordinaten-Gitter-Schlüsselwörter](#koordinaten-gitter-schlüsselwörter)

> [!NOTE]
> Im Allgemeinen können Sie nicht verschiedene Arten in einem Wert mischen, z.B. physisch und logisch. Dadurch entstehen ungültige Werte. Zum Beispiel ist `position-area: bottom inline-end` kein gültiger Wert, da es physische und logische Schlüsselwörter mischt.

## Physische Gitter-Schlüsselwörter

Die physischen Gitter-Schlüsselwörter spezifizieren eine Zelle oder einen Abschnitt des `position-area`-Gitters unter Verwendung physischer Werte. Diese Werte werden nicht durch {{cssxref("writing-mode")}}- oder {{cssxref("direction")}}-Einstellungen beeinflusst.

Mit physischen Reihen- und Spalten-Schlüsselwörtern können Sie ein Schlüsselwort aus jeder der beiden unten stehenden Listen angeben, um eine einzelne spezifische Gitterkachel auszuwählen:

- `top`, `center` oder `bottom`: Die obere, mittlere oder untere Reihe des Gitters.
- `left`, `center` oder `right`: Die linke, mittlere oder rechte Spalte des Gitters.

Zum Beispiel wählt `top left` die obere linke Kachel aus, während `center right` die mittlere Kachel der rechten Spalte auswählt.

### Physische Gitter-Überspannungs-Schlüsselwörter

Die physischen Überspannungs-Schlüsselwörter - wenn sie mit einem physischen Reihen- oder Spalten-Schlüsselwort kombiniert werden - spezifizieren eine zweite Gitterkachel, in die der Positionsbereich erweitert werden soll. Wenn eine solche Kombination als `position-area`-Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Reihe oder Spalte platziert; es erstreckt sich dann in die im Überspannungsschlüsselwort angegebene Richtung und überspannt zwei Gitterkacheln:

- `span-left`

  - : Überspannt die mittlere Spalte und die linke Spalte des Gitters.

- `span-right`

  - : Überspannt die mittlere Spalte und die rechte Spalte des Gitters.

- `span-top`

  - : Überspannt die mittlere Reihe und die obere Reihe des Gitters.

- `span-bottom`

  - : Überspannt die mittlere Reihe und die untere Reihe des Gitters.

- `span-all`

  - : Gültig mit allen Schlüsselwörttypen, überspannt die angegebene Zelle sowie die angrenzenden Zellen in derselben Reihe oder Spalte. Siehe [`span-all`](#span-all_2) unten.

Zum Beispiel überspannt `top span-left` die obere-mittlere und obere-linke Gitterzellen.

> [!NOTE]
> Der Versuch, ein Reihe- oder Spalte-Schlüsselwort mit einem unangemessenen Überspannungsschlüsselwort zu kombinieren, führt zu einem ungültigen Wert. Zum Beispiel ist `right span-right` ungültig — Sie können nicht die mittlere rechte Gitterkachel auswählen und dann versuchen, weiter nach rechts zu überspannen.

### Physische Gitter-Schlüsselwort-Standards

Wenn nur ein einzelnes physisches Schlüsselwort im `position-area`-Wert angegeben wird, wird der andere Wert wie folgt impliziert:

- `left`, `right`, `top`, oder `bottom`

  - : Der andere Wert wird auf [`span-all`](#span-all_2) gesetzt, wodurch das Element alle drei Kacheln des Gitters oder der Reihe, in der es ursprünglich platziert wurde, überspannt. Zum Beispiel ist `left` gleich `left span-all`.

- `center`, `span-left`, `span-right`, `span-top`, oder `span-bottom`

  - : Der andere Wert wird auf `center` gesetzt. Zum Beispiel ist `span-left` gleich `center span-left` und `center` ist gleich `center center`.

## Logische Gitter-Schlüsselwörter

Die logischen Gitter-Schlüsselwörter spezifizieren einen Bereich des position-area-Gitters unter Verwendung logischer Werte. Mit diesen Werten werden die Position und Richtung durch die {{cssxref("writing-mode")}}- und {{cssxref("direction")}}-Einstellungen entweder des [umfassenden Blocks](/de/docs/Web/CSS/Containing_block) des Elements oder, im Falle der `self`-Schlüsselwörter, des positionierten Elements selbst beeinflusst. Es gibt zwei Arten von logischen Schlüsselwörtern; generische und explizite.

### Generische logische Reihen- und Spalten-Schlüsselwörter

Die generischen logischen Schlüsselwörter verwenden die gleichen Begriffe für die Inline- und Blockrichtung, wobei die Richtung durch die Position des Schlüsselbegriffs innerhalb eines Paares von `<position-area>`-Werten bestimmt wird. Der erste Wert definiert die Position in der Blockrichtung und der zweite Wert definiert den Inline-Wert. Sie können einen oder zwei Schlüsselbegriffe aus der folgenden Liste angeben. Die Angabe von zwei aus dieser Liste definiert eine einzige spezifische Gitterkachel. Die Schlüsselwortposition oder -richtung ist:

- `start`

  - : Der Anfang der Block- oder Inline-Richtung des Gitters, berechnet vom Schreibmodus des umfassenden Blocks.

- `end`

  - : Das Ende der Block- oder Inline-Richtung des Gitters, berechnet vom Schreibmodus des umfassenden Blocks.

- `self-start`

  - : Der Anfang der Block- oder Inline-Richtung des Gitters, berechnet vom eigenen Schreibmodus des Elements.

- `self-end`

  - : Das Ende der Block- oder Inline-Richtung des Gitters, berechnet vom eigenen Schreibmodus des Elements.

- `center`

  - : Das Zentrum der Blockrichtung des Gitters (wenn dieses Schlüsselwort zuerst angegeben wird) oder Inline-Richtung (wenn dieses Schlüsselwort als zweites angegeben wird).

Zum Beispiel beschreiben sowohl `start end` als auch `self-start self-end` die Position am Anfang der Blockrichtung und dem Ende der Inline-Richtung. Mit `writing-mode: horizontal-tb` gesetzt, ist dies die obere rechte Ecke des Ankerelements, während mit `writing-mode: vertical-rl` die untere rechte Ecke des Ankers.

#### Generische logische Überspannungs-Reihen- und Spalten-Schlüsselwörter

Die generischen logischen Überspannungsschlüsselwörter - wenn sie mit einem logischen Reihen- oder Spalten-Schlüsselwort kombiniert werden - spezifizieren eine zweite Gitterkachel für den Positionsbereich, um in diesen zu erweitern. Wenn eine solche Kombination als `position-area`-Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Reihe oder Spalte platziert, und es erstreckt sich dann in die im Überspannungsschlüsselwort angegebene Richtung und überspannt zwei Gitterkacheln:

- `span-start`

  - : Überspannt die mittlere Kachel und die Anfangskachel der Gitterreihe/Spalte, wobei die Richtung sich auf den Schreibmodus des umfassenden Blocks des Elements bezieht.

- `span-end`

  - : Überspannt die mittlere Kachel und die Endkachel der Gitterreihe/Spalte, wobei die Richtung sich auf den Schreibmodus des umfassenden Blocks des Elements bezieht.

- `span-self-start`

  - : Überspannt die mittlere Kachel und die Anfangskachel der Gitterreihe/Spalte für den eigenen Schreibmodus des positionierten Elements.

- `span-self-end`

  - : Überspannt die mittlere Kachel und die Endkachel der Gitterreihe/Spalte, berechnet vom eigenen Schreibmodus des Elements.

Zum Beispiel spezifizieren `start span-end` und `self-start span-self-end` beide einen Gitterpositionsbereich, der in der Mitte der Startblockreihe beginnt und sich über die Kacheln in dieser Reihe erstreckt, die sich in den Inlinemitte- und Endspalten befinden. Mit `writing-mode: horizontal-tb` gesetzt, würde dies die obere Mitte und das obere rechte Ende des Ankers überspannen, während es bei `writing-mode: vertical-rl` die rechte Mitte und das untere rechte Ende überspannt.

### Explizite inline und block logische Schlüsselwörter

Die expliziten Inline- und Blocklogischen Reihen- und Spalten-Schlüsselwörter beziehen sich explizit auf eine Block- (Reihe) oder Inline- (Spalte) Position. Sie können ein Schlüsselwort für die Blockrichtung und eines für die Inline-Richtung angeben, um eine einzelne spezifische Gitterkachel auszuwählen. Anders als bei generischen logischen Schlüsselwortwerten spielt die Reihenfolge der Schlüsselwörter keine Rolle. Allerdings führt die Deklaration von zwei Schlüsselwörtern in derselben Achse zu einem ungültigen Wert.

- `block-start`

  - : Der Anfang der Blockrichtung des Gitters, berechnet vom Schreibmodus des umfassenden Blocks.

- `block-end`

  - : Das Ende der Blockrichtung des Gitters, berechnet vom Schreibmodus des umfassenden Blocks.

- `inline-start`

  - : Der Anfang der Inlinerichtung des Gitters, berechnet vom Schreibmodus des umfassenden Blocks.

- `inline-end`

  - : Das Ende der Inlinerichtung des Gitters, berechnet vom Schreibmodus des umfassenden Blocks.

Zum Beispiel spezifiziert `block-start inline-end` die Kachel am Anfang der Blockrichtung und dem Ende der Inlinerichtung. Mit `writing-mode: horizontal-tb` gesetzt, wäre dies die Kachel oben rechts des Ankers, während es bei `writing-mode: vertical-rl` die Kachel unten rechts wäre.

> [!NOTE]
> Die Spezifikation definiert `self`-Äquivalente dieser Schlüsselwörter — `block-self-start`, `block-self-end`, `inline-self-start` und `inline-self-end`. Diese werden jedoch derzeit in keinem Browser unterstützt.

#### Explizite inline und block logische Überspannungsschlüsselwörter

Die expliziten logischen Überspannungsschlüsselwörter - wenn sie mit einem logischen Reihen- oder Spalten-Schlüsselwort kombiniert werden - spezifizieren eine zweite Gitterkachel, in die der Positionsbereich erweitert werden soll. Wenn eine solche Kombination als `position-area`-Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Reihe oder Spalte platziert, basierend auf dem Schreibmodus des umfassenden Blocks, und es erstreckt sich dann in die im Überspannungsschlüsselwort angegebene Richtung und überspannt zwei Gitterkacheln:

- `span-block-start`

  - : Überspannt die mittlere Kachel und die Block-Start-Kachel der angegebenen Inline-Spalte.

- `span-block-end`

  - : Überspannt die mittlere Kachel und die Block-End-Kachel der angegebenen Inline-Spalte.

- `span-inline-start`

  - : Überspannt die mittlere Kachel und die Inline-Start-Kachel der angegebenen Blockreihe.

- `span-inline-end`

  - : Überspannt die mittlere Kachel und die Inline-End-Kachel der angegebenen Blockreihe.

Zum Beispiel wählt `block-end span-inline-start` die mittlere Kachel der Endblockreihe aus und erstreckt sich über die Kacheln in dieser Reihe, die sich in den Inline-Mitte- und Startspalten befinden. Mit `writing-mode: horizontal-tb` gesetzt, würde dies die unteren Mitte- und linken Gitterkacheln überspannen, während es bei `writing-mode: vertical-rl` die linke Mitte- und obere linke Gitterkachel überspannt.

> [!NOTE]
> Die Spezifikation definiert `self`-Äquivalente dieser Schlüsselwörter, zum Beispiel — `span-self-block-start`, `span-self-block-end`, `span-self-inline-start` und `span-self-inline-end`. Diese werden jedoch derzeit in keinem Browser unterstützt.

> [!NOTE]
> Der Versuch, ein Reihe- oder Spalten-Schlüsselwort mit einem unangemessenen Überspannungsschlüsselwort zu kombinieren, führt zu einem ungültigen Eigenschaftswert. Zum Beispiel ist `block-end span-block-end` ungültig — Sie können nicht die mittlere Block-Endreihe auswählen und dann versuchen, eine Kachel weiter über das Blockende hinaus zu überspannen.

### Logische Gitter-Schlüsselwort-Standards

Wenn nur ein einziges logisches `<position-area>`-Schlüsselwort angegeben ist, wird der andere Wert wie folgt impliziert:

- `start`, `end`, `self-start` oder `self-end`

  - : Der andere Wert wird standardmäßig auf denselben Wert wie der erste gesetzt und wählt die Gitterzelle in der Anfangsreihe und -spalte oder der Endreihe und -spalte aus.

- `span-start`, `span-self-start`, `span-end`, `span-self-end`

  - : Der andere Wert wird auf `center` gesetzt. Zum Beispiel ist `span-start` gleich `span-start center`.

- `block-start`, `block-end`, `inline-start`, `inline-end`

  - : Der andere Wert wird auf [`span-all`](#span-all_2) gesetzt, alle drei Kacheln der angegebenen Spalte oder Reihe überspannend. Zum Beispiel ist `block-start` gleich `block-start span-all`.

- `span-block-start`, `span-block-end`, `span-inline-start`, `span-inline-end`

  - : Der andere Wert wird auf `center` gesetzt. Zum Beispiel ist `span-inline-start` gleich `span-inline-start center`.

## Koordinaten-Gitter-Schlüsselwörter

Diese Schlüsselwörter spezifizieren die Zellen des `position-area`-Gitters unter Verwendung von x- und y-Koordinatenwerten. Ihre Position/Richtung wird von {{cssxref("writing-mode")}}- und/oder {{cssxref("direction")}}-Einstellungen entweder des [umfassenden Blocks](/de/docs/Web/CSS/Containing_block) eines Elements oder, im Fall der `self`-Schlüsselwörter, des Elements selbst beeinflusst.

Jedoch werden die Gitterzellen gemäß physikalischen Achsen und nicht nach Block/Inline-Richtungen definiert:

- Bei `writing-mode: horizontal-tb` und `vertical-lr` verläuft die x-Achse von links nach rechts und die y-Achse von oben nach unten.
- Bei `writing-mode: horizontal-tb; direction: rtl` und `writing-mode: vertical-rl` verläuft die x-Achse von rechts nach links und die y-Achse von oben nach unten.

Mit Koordinaten-Reihen- und Spalten-Schlüsselwörtern können Sie ein Schlüsselwort von der x-Achse und eines von der y-Achse angeben, um eine einzige spezifische Gitterkachel zu definieren.

Die x-Achsen-Schlüsselwörter umfassen:

- `x-start`

  - : Die Anfangskachel entlang der x-Achse des Gitters, berechnet vom Schreibmodus des umfassenden Blocks.

- `x-end`

  - : Die Endkachel entlang der x-Achse des Gitters, berechnet vom Schreibmodus des umfassenden Blocks.

- `x-self-start`

  - : Die Anfangskachel entlang der x-Achse des Gitters, berechnet vom eigenen Schreibmodus des Elements.

- `x-self-end`

  - : Die Endkachel entlang der x-Achse des Gitters, berechnet vom eigenen Schreibmodus des Elements.

- `center`

  - : Der Mittelpunkt der x-Achse des Gitters, berechnet vom eigenen Schreibmodus des Elements.

Die y-Achsen-Schlüsselwörter umfassen:

- `y-start`

  - : Die Anfangskachel entlang der y-Achse des Gitters, berechnet vom Schreibmodus des umfassenden Blocks.

- `y-end`

  - : Die Endkachel entlang der y-Achse des Gitters, berechnet vom Schreibmodus des umfassenden Blocks.

- `y-self-start`

  - : Die Anfangskachel entlang der y-Achse des Gitters, berechnet vom eigenen Schreibmodus des Elements.

- `y-self-end`

  - : Die Endkachel entlang der y-Achse des Gitters, berechnet vom eigenen Schreibmodus des Elements.

- `center`

  - : Der Mittelpunkt der y-Achse des Gitters, berechnet vom eigenen Schreibmodus des Elements.

Zum Beispiel wählen sowohl `x-end y-start` als auch `x-self-end y-self-start` die Gitterzelle am Ende der x-Achse und am Anfang der y-Achse. Mit `writing-mode: horizontal-tb` gesetzt, wäre dies die Zelle oben rechts des Ankers, während bei `writing-mode: vertical-rl` oben links liegt.

### Koordinaten-Überspannungs-Schlüsselwörter

Wenn sie mit einem Koordinaten-Reihen- oder Spalten-Schlüsselwort kombiniert werden, spezifizieren die Koordinaten-Überspannungsschlüsselwörter eine zweite Gitterkachel, in die der Positionsbereich expandieren soll. Wenn eine solche Kombination als `position-area`-Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Reihe oder Spalte platziert, und es erstreckt sich dann in die im Überspannungsschlüsselwort angegebene Richtung und überspannt zwei Gitterkacheln:

- `span-x-start`

  - : Überspannt die mittlere Kachel und die x-Start-Kachel der angegebenen y-Achsen-Reihe.

- `span-x-end`

  - : Überspannt die mittlere Kachel und die x-End-Kachel der angegebenen y-Achsen-Reihe.

- `span-y-start`

  - : Überspannt die mittlere Kachel und die y-Start-Kachel der angegebenen x-Achsen-Spalte.

- `span-y-end`

  - : Überspannt die mittlere Kachel und die y-End-Kachel der angegebenen x-Achsen-Spalte.

Zum Beispiel wählt `y-end span-x-end` die Kachel in der Mitte der End-y-Reihe aus und erstreckt sich über die Kacheln in dieser Reihe, die sich in den x-Mitte- und x-End-Spalten befinden. Mit `writing-mode: horizontal-tb` gesetzt, würde der Positionsgitterbereich die Gitterkacheln unten-mitte und unten-rechts überspannen, während es bei `writing-mode: vertical-rl` die Kacheln unten-mitte und unten-links überspannt.

> [!NOTE]
> Die Spezifikation definiert keine separaten `self`-Koordinaten-Überspannungsschlüsselwörter, aber diese werden nicht benötigt — die Überspannungsschlüsselwörter können sowohl mit den Koordinaten-Reihen- als auch mit den Spalten-Schlüsselwörtern verwendet werden.

### Koordinaten-Gitter-Schlüsselwort-Standards

Wenn nur ein einziges Koordinaten-Gitter-`<position-area>`-Schlüsselwort angegeben ist, wird der andere Wert wie folgt impliziert:

- `x-start`, `x-self-start`, `x-end`, `x-self-end`, `y-start`, `y-self-start`, `y-end`, oder `y-self-end`

  - : Der andere Wert wird auf [`span-all`](#span-all_2) gesetzt, wodurch die Gitterkacheln, die alle drei Kacheln der Spalte oder Reihe überspannen, in der sie ursprünglich platziert wurden, ausgewählt werden. Zum Beispiel ist `x-start` gleich `x-start span-all`.

- `span-x-start`, `span-x-end`, `span-y-start`, oder `span-y-end`

  - : Der andere Wert wird auf `center` gesetzt. Zum Beispiel ist `span-start` gleich `span-start center`.

## `span-all`

`span-all` ist ein spezielles Schlüsselwort, das mit allen der oben aufgeführten Reihen- und Spalten-Schlüsselwörter verwendbar ist. Wenn Sie zwei Werte angeben — ein Reihe-/Spalte-Schlüsselwort und `span-all`, wird das Element in der angegebenen Reihe oder Spalte platziert, und es erstreckt sich über alle Kacheln in dieser Reihe oder Spalte.

## Beispiele

Siehe die {{cssxref("position-area")}}-Eigenschaftsseite.

Für detaillierte Informationen über Ankergestützte Positionierungsfunktionen und deren Verwendung siehe die [CSS-Ankerplatzierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modulseite und den [Verwendung von CSS-Ankerplatzierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-area")}}
- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- [`anchor()`](/de/docs/Web/CSS/anchor) Funktion
- [Verwendung von CSS-Ankerplatzierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Umgang mit Überlauf: Versuchen Sie Fallbacks und bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS-Ankerplatzierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
