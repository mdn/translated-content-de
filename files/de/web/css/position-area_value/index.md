---
title: <position-area>
slug: Web/CSS/position-area_value
l10n:
  sourceCommit: 2ce8a423f814edd1738c96561998ff7db1009cff
---

Der **`<position-area>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) definiert die Zelle oder gespannten Zellen eines **Position-Area-Grids**, eines 3x3-Gitters, dessen mittlere Zelle ein Ankerelement ist.

Die `<position-area>` Schlüsselwortwerte können als Wert der {{cssxref("position-area")}} Eigenschaft gesetzt werden, um ein Anker-positioniertes Element relativ zu seinem zugehörigen Ankerelement an einer bestimmten Position zu platzieren.

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

Positionsbereiche basieren auf dem Konzept eines **Position-Area-Grids**, eines 3x3-Gitters aus Kacheln, das aus vier Gitterlinien besteht, zwei auf jeder Achse, wobei ein Ankerelement die zentrale Kachel ist:

![Das Position-Area-Grid, wie unten beschrieben](position-area.png)

Wenn sie als Wert der `position-area` Eigenschaft eines positionierten Elements verwendet werden, werden die Abmessungen der mittleren Kachel durch den [enthaltenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Standard-Ankerelements des Elements definiert. Die Abmessungen des äußeren Randes des Grids werden durch den umschließenden Block des positionierten Elements definiert. Logische Schlüsselbegriffe basieren im Allgemeinen auf dem Schreibmodus und der Richtung des umschließenden Blocks, außer bei den `self-*` Schlüsselbegriffen, die aus dem Schreibmodus des Anker-positionierten Elements berechnet werden.

Das Gitter ist in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Äquivalente wie `block-start`, `center` und `block-end` sowie Koordinatenäquivalente — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `inline-start`, `center` und `inline-end` sowie Koordinatenäquivalente — `x-start`, `center` und `x-end`.

`<position-area>` Werte enthalten ein oder zwei Schlüsselwörter, die einen bestimmten Bereich des Position-Area-Grids definieren. Wenn man einen `position-area` Wert auf ein positioniertes Element setzt, wird sein umschließender Block im angegebenen Gitterbereich platziert:

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

- [Physische Gitter-Schlüsselwörter](#physische_gitter-schlüsselwörter)
- [Generische logische Reihen- und Spalten-Schlüsselwörter](#generische_logische_reihen-_und_spalten-schlüsselwörter)
- [Explizite logische Inline- und Block-Schlüsselwörter](#explizite_logische_inline-_und_block-schlüsselwörter)
- [Koordinaten-Gitter-Schlüsselwörter](#koordinaten-gitter-schlüsselwörter)

> [!NOTE]
> Im Allgemeinen können Sie keine verschiedenen Typen in einem Wert mischen, z. B. physisch und logisch. Dies führt zu ungültigen Werten. Zum Beispiel ist `position-area: bottom inline-end` kein gültiger Wert, weil er physische und logische Schlüsselwörter mischt.

## Physische Gitter-Schlüsselwörter

Die physischen Gitter-Schlüsselwörter spezifizieren eine Zelle oder einen Abschnitt des `position-area` Grids mit physischen Werten. Diese Werte werden nicht durch {{cssxref("writing-mode")}} oder {{cssxref("direction")}} Einstellungen beeinflusst.

Mit physischen Reihen- und Spalten-Schlüsselwörtern können Sie ein Schlüsselwort aus jeder der beiden folgenden Listen auswählen, um eine einzelne bestimmte Gitterkachel auszuwählen:

- `top`, `center` oder `bottom`: Die obere, mittlere oder untere Reihe des Grids.
- `left`, `center` oder `right`: Die linke, mittlere oder rechte Spalte des Grids.

Zum Beispiel wählt `top left` die obere linke Kachel aus, während `center right` die zentrale Kachel der rechten Spalte auswählt.

### Physische Spanning-Gitter-Schlüsselwörter

Die physischen Spanning-Schlüsselwörter — in Kombination mit einem physischen Reihen- oder Spalten-Schlüsselwort — spezifizieren eine zweite Gitterkachel, in die sich der Positionsbereich ausdehnen soll. Wenn eine solche Kombination als `position-area` Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Reihe oder Spalte platziert und erstreckt sich dann in die im Spanning-Schlüsselwort spezifizierte Richtung, wobei zwei Gitterkacheln überspannt werden:

- `span-left`
  - : Überspannt die mittlere und die linke Spalte des Grids.

- `span-right`
  - : Überspannt die mittlere und die rechte Spalte des Grids.

- `span-top`
  - : Überspannt die mittlere und die obere Reihe des Grids.

- `span-bottom`
  - : Überspannt die mittlere und die untere Reihe des Grids.

- `span-all`
  - : Gültig mit allen Schlüsselworttypen, überspannt die genannte Zelle sowie die angrenzenden Zellen in derselben Zeile oder Spalte. Siehe [`span-all`](#span-all_2) unten.

Zum Beispiel überspannt `top span-left` die oberen mittleren und oberen linken Gitterzellen.

> [!NOTE]
> Der Versuch, ein Reihen- oder Spalten-Schlüsselwort mit einem unangemessenen Spanning-Schlüsselwort zu kombinieren, führt zu einem ungültigen Wert. Zum Beispiel ist `right span-right` ungültig — Sie können die mittlere rechte Gitterkachel nicht auswählen und dann versuchen, weiter nach rechts zu spannen.

### Standardwerte der physischen Gitter-Schlüsselwörter

Wenn nur ein einzelnes physisches Schlüsselwort im Wert von `position-area` angegeben ist, wird der andere Wert wie folgt impliziert:

- `left`, `right`, `top`, oder `bottom`
  - : Der andere Wert wird als [`span-all`](#span-all_2) standardmäßig angenommen, wodurch das Element alle drei Kacheln der Spalte oder Reihe überspannt, in der es ursprünglich platziert wurde. Zum Beispiel ist `left` gleichbedeutend mit `left span-all`.

- `center`, `span-left`, `span-right`, `span-top`, oder `span-bottom`
  - : Der andere Wert wird standardmäßig mit `center` festgelegt. Zum Beispiel ist `span-left` gleichbedeutend mit `center span-left` und `center` ist gleichbedeutend mit `center center`.

## Logische Gitter-Schlüsselwörter

Die logischen Gitter-Schlüsselwörter spezifizieren einen Bereich des Position-Area-Grids mit logischen Werten. Mit diesen Werten werden Position und Richtung durch die {{cssxref("writing-mode")}} und {{cssxref("direction")}} Einstellungen entweder des [enthaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements oder, im Fall der `self` Schlüsselwörter, des positionierten Elements selbst beeinflusst. Es gibt zwei Arten von logischen Schlüsselwörtern; generisch und explizit.

### Generische logische Reihen- und Spalten-Schlüsselwörter

Die generischen logischen Schlüsselwörter verwenden dieselben Begriffe für die Inline- und Blockrichtungen, wobei die Richtung durch die Position des Schlüsselbegriffs innerhalb eines Paares von `<position-area>` Werten bestimmt wird. Der erste Wert definiert die Blockrichtung und der zweite Wert die Inline-Richtung. Sie können einen oder zwei Schlüsselbegriffe aus der folgenden Liste auswählen. Das Festlegen von zwei aus dieser Liste definiert eine einzelne bestimmte Gitterkachel. Die Position oder Richtung des Schlüsselbegriffs ist:

- `start`
  - : Der Anfang der Block- oder Inline-Richtung des Grids, berechnet aus dem Schreibmodus des enthaltenen Blocks.

- `end`
  - : Das Ende der Block- oder Inline-Richtung des Grids, berechnet aus dem Schreibmodus des enthaltenen Blocks.

- `self-start`
  - : Der Anfang der Block- oder Inline-Richtung des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

- `self-end`
  - : Das Ende der Block- oder Inline-Richtung des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der Blockrichtung des Grids (wenn dieses Schlüsselwort zuerst angegeben wird) oder Inline-Richtung (wenn dieses Schlüsselwort als zweites angegeben wird).

Zum Beispiel beschreiben `start end` und `self-start self-end` beide die Position am Anfang der Blockrichtung und dem Ende der Inline-Richtung. Mit `writing-mode: horizontal-tb` ist dies die obere rechte Ecke des Ankerelements, während es mit `writing-mode: vertical-rl` die untere rechte Ecke des Ankers ist.

#### Generische logische Spanning-Reihen- und Spalten-Schlüsselwörter

Die generischen logischen Spanning-Schlüsselwörter — in Kombination mit einem logischen Reihen- oder Spalten-Schlüsselwort — spezifizieren eine zweite Gitterkachel, in die sich der Positionsbereich ausdehnen soll. Wenn eine solche Kombination als `position-area` Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Reihe oder Spalte platziert, und es erstreckt sich dann in die im Spanning-Schlüsselwort angegebene Richtung, wobei zwei Gitterkacheln überspannt werden:

- `span-start`
  - : Überspannt die mittlere Kachel und die Start-Kachel der Grid-Reihe/spalte, bezogen auf den Schreibmodus des umschließenden Blocks des Elements.

- `span-end`
  - : Überspannt die mittlere Kachel und die End-Kachel der Grid-Reihe/spalte, bezogen auf den Schreibmodus des umschließenden Blocks des Elements.

- `span-self-start`
  - : Überspannt die mittlere Kachel und die Start-Kachel der Grid-Reihe/spalte, bezogen auf den eigenen Schreibmodus des positionierten Elements.

- `span-self-end`
  - : Überspannt die mittlere Kachel und die End-Kachel der Grid-Reihe/spalte, berechnet aus dem eigenen Schreibmodus des Elements.

Zum Beispiel spezifizieren `start span-end` und `self-start span-self-end` beide einen Positionsbereich, der in der Mitte der Start-Blockreihe beginnt und sich über die Kacheln in dieser Reihe erstreckt, die in der Inline-Mitte und -Ende liegen. Mit `writing-mode: horizontal-tb` erstreckt sich dies über die obere Mitte und das obere rechte Ende des Ankers, während es mit `writing-mode: vertical-rl` über die rechte Mitte und das untere rechte Ende des Ankers spannt.

### Explizite logische Inline- und Block-Schlüsselwörter

Die expliziten logischen Inline- und Block-Reihen- und Spalten-Schlüsselwörter beziehen sich ausdrücklich auf eine Block- (Reihe) oder Inline- (Spalte) Position. Sie können ein Schlüsselwort für die Blockrichtung und eines für die Inline-Richtung angeben, um eine einzige bestimmte Gitterkachel auszuwählen. Im Gegensatz zu den generischen logischen Schlüsselwortwerten spielt die Schlüsselwortreihenfolge keine Rolle. Das Deklarieren von zwei Schlüsselwörtern in derselben Achse macht den Wert jedoch ungültig.

- `block-start`
  - : Der Beginn der Blockrichtung des Grids, berechnet aus dem Schreibmodus des enthaltenen Blocks.

- `block-end`
  - : Das Ende der Blockrichtung des Grids, berechnet aus dem Schreibmodus des enthaltenen Blocks.

- `inline-start`
  - : Der Beginn der Inline-Richtung des Grids, berechnet aus dem Schreibmodus des enthaltenen Blocks.

- `inline-end`
  - : Das Ende der Inline-Richtung des Grids, berechnet aus dem Schreibmodus des enthaltenen Blocks.

Zum Beispiel spezifiziert `block-start inline-end` die Kachel am Beginn der Blockrichtung und am Ende der Inline-Richtung. Mit `writing-mode: horizontal-tb` wäre dies die Kachel oben rechts am Anker, während es mit `writing-mode: vertical-rl` die Kachel unten rechts wäre.

> [!NOTE]
> Die Spezifikation definiert `self`-Äquivalente dieser Schlüsselwörter — `block-self-start`, `block-self-end`, `inline-self-start`, und `inline-self-end`. Diese werden jedoch derzeit von keinem Browser unterstützt.

#### Explizite Spanning-Schlüsselwörter für Inline- und Blockrichtung

Die expliziten logischen Spanning-Schlüsselwörter — in Kombination mit einem logischen Reihen- oder Spalten-Schlüsselwort — spezifizieren eine zweite Gitterkachel, in die sich der Positionsbereich ausdehnen soll. Wenn eine solche Kombination als `position-area` Eigenschaftswert festgelegt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Reihe oder Spalte platziert, basierend auf dem Schreibmodus des umschließenden Blocks, und es erstreckt sich dann in die im Spanning-Schlüsselwort spezifizierte Richtung, wobei zwei Gitterkacheln überspannt werden:

- `span-block-start`
  - : Überspannt die mittlere Kachel und die block-start Kachel der angegebenen Inline-Spalte.

- `span-block-end`
  - : Überspannt die mittlere Kachel und die block-end Kachel der angegebenen Inline-Spalte.

- `span-inline-start`
  - : Überspannt die mittlere Kachel und die inline-start Kachel der angegebenen Blockreihe.

- `span-inline-end`
  - : Überspannt die mittlere Kachel und die inline-end Kachel der angegebenen Blockreihe.

Zum Beispiel wählt `block-end span-inline-start` die mittlere Kachel der End-Blockreihe aus und spannt sich über die Kacheln in dieser Reihe, die sich in der Inline-Mitte und -Start-Spalten befinden. Mit `writing-mode: horizontal-tb` spannt dies die untere Mitte und die unterste linke Gitterkachel, während es mit `writing-mode: vertical-rl` die linke Mitte und die oberste linke Gitterkachel überspannt.

> [!NOTE]
> Die Spezifikation definiert `self`-Äquivalente dieser Schlüsselwörter, zum Beispiel — `span-self-block-start`, `span-self-block-end`, `span-self-inline-start`, und `span-self-inline-end`. Diese werden jedoch derzeit von keinem Browser unterstützt.

> [!NOTE]
> Der Versuch, ein Reihen- oder Spalten-Schlüsselwort mit einem unangemessenen Spanning-Schlüsselwort zu kombinieren, führt zu einem ungültigen Eigenschaftswert. Zum Beispiel ist `block-end span-block-end` ungültig — Sie können die mittlere block-end Reihe nicht auswählen und dann versuchen, eine Kachel weiter in die block-end Richtung zu spannen.

### Standardwerte der logischen Gitter-Schlüsselwörter

Wenn nur ein einziges logisches `<position-area>` Schlüsselwort angegeben wird, wird der andere Wert wie folgt impliziert:

- `start`, `end`, `self-start`, oder `self-end`
  - : Der andere Wert wird als derselbe wie der erste Wert standardmäßig angenommen und wählt die Gitterzelle am Anfang der Reihe und Spalte oder am Ende der Reihe und Spalte aus.

- `span-start`, `span-self-start`, `span-end`, `span-self-end`
  - : Der andere Wert wird standardmäßig mit `center` festgelegt. Zum Beispiel ist `span-start` gleichbedeutend mit `span-start center`.

- `block-start`, `block-end`, `inline-start`, oder `inline-end`
  - : Der andere Wert wird als [`span-all`](#span-all_2) standardmäßig angenommen, um alle drei Kacheln der Spalte oder Reihe, die gesetzt wurde, zu überspannen. Zum Beispiel ist `block-start` gleichbedeutend mit `block-start span-all`.

- `span-block-start`, `span-block-end`, `span-inline-start`, oder `span-inline-end`
  - : Der andere Wert wird standardmäßig mit `center` festgelegt. Zum Beispiel ist `span-inline-start` gleichbedeutend mit `span-inline-start center`.

## Koordinaten-Gitter-Schlüsselwörter

Diese Schlüsselwörter spezifizieren die Zellen des `position-area` Grids mit x- und y-Koordinatenwerten. Die Position/Richtung wird von {{cssxref("writing-mode")}} und/oder {{cssxref("direction")}} Einstellungen auf entweder einem Element's [enthaltenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) oder, im Fall der `self` Schlüsselwörter, dem Element selbst betroffen.

Jedoch sind die Gitterzellen gemäß physikalischen Achsen und nicht gemäß Block/Inline-Richtungen definiert:

- Für `writing-mode: horizontal-tb` und `vertical-lr` verläuft die x-Achse von links nach rechts und die y-Achse von oben nach unten.
- Für `writing-mode: horizontal-tb; direction: rtl` und `writing-mode: vertical-rl` verläuft die x-Achse von rechts nach links und die y-Achse von oben nach unten.

Mit Koordinatenreihen- und Spalten-Schlüsselwörtern können Sie ein Schlüsselwort von der x-Achse und eines von der y-Achse angeben, um eine einzige bestimmte Gitterkachel zu definieren.

Die Schlüsselwörter auf der x-Achse umfassen:

- `x-start`
  - : Die start-Kachel entlang der x-Achse des Grids, berechnet aus dem Schreibmodus des umschließenden Blocks.

- `x-end`
  - : Die End-Kachel entlang der x-Achse des Grids, berechnet aus dem Schreibmodus des umschließenden Blocks.

- `self-x-start`
  - : Die start-Kachel entlang der x-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

- `self-x-end`
  - : Die End-Kachel entlang der x-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der x-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

Die Schlüsselwörter auf der y-Achse umfassen:

- `y-start`
  - : Die start-Kachel entlang der y-Achse des Grids, berechnet aus dem Schreibmodus des umschließenden Blocks.

- `y-end`
  - : Die End-Kachel entlang der y-Achse des Grids, berechnet aus dem Schreibmodus des umschließenden Blocks.

- `self-y-start`
  - : Die start-Kachel entlang der y-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

- `self-y-end`
  - : Die End-Kachel entlang der y-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der y-Achse des Grids, berechnet aus dem eigenen Schreibmodus des Elements.

Zum Beispiel wählen `x-end y-start` und `self-x-end self-y-start` beide die Gitterzelle am Ende der x-Achse und am Anfang der y-Achse aus. Mit `writing-mode: horizontal-tb` ist dies die Zelle oben rechts am Anker, während sie mit `writing-mode: vertical-rl` oben links ist.

### Koordinaten-Spanning-Schlüsselwörter

Wenn sie mit einem Koordinaten-Reihen- oder Spalten-Schlüsselwort kombiniert werden, spezifizieren die Koordinaten-Spanning-Schlüsselwörter eine zweite Grid-Kachel, in die sich der Positionsbereich ausdehnen soll. Wenn eine solche Kombination als `position-area` Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Reihe oder Spalte platziert, und es erstreckt sich dann in die im Spanning-Schlüsselwort spezifizierte Richtung, wobei zwei Gitterkacheln überspannt werden:

- `span-x-start`
  - : Überspannt die mittlere Kachel und die x-start Kachel der angegebenen y-Achsen-Reihe.

- `span-x-end`
  - : Überspannt die mittlere Kachel und die x-end Kachel der angegebenen y-Achsen-Reihe.

- `span-y-start`
  - : Überspannt die mittlere Kachel und die y-start Kachel der angegebenen x-Achsen-Spalte.

- `span-y-end`
  - : Überspannt die mittlere Kachel und die y-end Kachel der angegebenen x-Achsen-Spalte.

Zum Beispiel wählt `y-end span-x-end` die Kachel in der Mitte der End y-Reihe aus und erstreckt sich über die Kacheln in dieser Reihe, die sich in der x-Mitte und x-Enden-Spalten befinden. Mit `writing-mode: horizontal-tb` würde der Positionsbereich das Gitter über die Kacheln in der unteren Mitte und unten rechts erstrecken, während es mit `writing-mode: vertical-rl` die untere Mitte und unten links spannt.

> [!NOTE]
> Die Spezifikation definiert keine separaten Koordinaten `self` Spanning-Schlüsselwörter, aber diese sind nicht notwendig — die Spanning-Schlüsselwörter können mit beiden Koordinaten-Reihen- und Spalten-Schlüsselwörtern verwendet werden.

### Standardwerte der Koordinaten-Gitter-Schlüsselwörter

Wenn nur ein einzelnes Koordinaten-Gitter-`<position-area>`-Schlüsselwort angegeben ist, wird der andere Wert wie folgt impliziert:

- `x-start`, `self-x-start`, `x-end`, `self-x-end`, `y-start`, `self-y-start`, `y-end`, oder `self-y-end`
  - : Der andere Wert wird als [`span-all`](#span-all_2) standardmäßig angenommen, wobei die Gitterkacheln ausgewählt werden, die alle drei Kacheln der Spalte oder Reihe, in der es ursprünglich platziert wurde, überspannen. Zum Beispiel ist `x-start` gleichbedeutend mit `x-start span-all`.

- `span-x-start`, `span-x-end`, `span-y-start`, `span-y-end`, `span-self-x-start`, `span-self-x-end`, `span-self-y-end`, oder `span-self-y-start`
  - : Der andere Wert wird standardmäßig mit `center` festgelegt. Zum Beispiel ist `span-start` gleichbedeutend mit `span-start center`.

## `span-all`

`span-all` ist ein spezielles Schlüsselwort, das mit allen der oben aufgeführten Reihen- und Spalten-Schlüsselwörtern verwendet werden kann. Wenn Sie zwei Werte angeben — ein Reihen-/Spalten-Schlüsselwort und `span-all`, wird das Element in der angegebenen Reihe oder Spalte platziert, und es überspannt dann alle Kacheln in dieser Reihe oder Spalte.

## Beispiele

Siehe die {{cssxref("position-area")}} Eigenschaftsseite.

Für detaillierte Informationen zu Ankerfunktionen und -verwendung, siehe die [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Landing-Page und den [Verwenden von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-area")}}
- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- [`anchor()`](/de/docs/Web/CSS/anchor) Funktion
- [Verwenden von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
