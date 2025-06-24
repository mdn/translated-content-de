---
title: <position-area>
slug: Web/CSS/position-area_value
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Der **`<position-area>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) definiert die Zelle oder überlappende Zellen eines **position-area grid**, eines 3x3 Rasters, dessen mittlere Zelle ein Anker-Element ist.

Die `<position-area>` Schlüsselwortwerte können als Werte der {{cssxref("position-area")}} Eigenschaft festgelegt werden, um ein ankerpositioniertes Element an einem bestimmten Ort relativ zu seinem zugehörigen Ankerelement zu platzieren.

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

Positionierungsbereiche basieren auf dem Konzept eines **position-area grid**, eines 3x3-Rasters aus Kacheln, das aus vier Gitterlinien besteht, zwei auf jeder Achse, wobei das Ankerelement die mittlere Kachel ist:

![Das position-area grid, wie unten beschrieben](position-area.png)

Wenn der `position-area` Eigenschaft eines positionierten Elements als Wert verwendet wird, werden die Maße der zentralen Kachel durch den [umgebenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Standardankerelements des Elements definiert. Die Maße der äußeren Kante des Rasters werden durch den umgebenden Block des positionierten Elements definiert. Logische Schlüsselbegriffe basieren im Allgemeinen auf dem Schreibmodus und der Richtung des umgebenden Blocks, mit Ausnahme der Schlüsselbegriffe `self-*`, die aus dem Schreibmodus des ankerpositionierten Elements berechnet werden.

Die Rasterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Äquivalente wie `block-start`, `center` und `block-end` sowie Koordinatenäquivalente — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `inline-start`, `center` und `inline-end` sowie Koordinatenäquivalente — `x-start`, `center` und `x-end`.

`<position-area>` Werte enthalten ein oder zwei Schlüsselwörter, die einen bestimmten Bereich des position-area grid definieren. Das Setzen eines `position-area` Wertes auf ein positioniertes Element platziert seinen umgebenden Block im angegebenen Gitterbereich:

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
- [Große allgemeine logische Zeilen- und Spaltenschlüsselwörter](#generische_logische_zeilen-_und_spaltenschlüsselwörter)
- [Explizite Inline- und Blocklogik-Schlüsselwörter](#explizite_inline-_und_blocklogik-schlüsselwörter)
- [Koordinatengitter-Schlüsselwörter](#koordinatengitter-schlüsselwörter)

> [!NOTE]
> Im Allgemeinen können Sie verschiedene Typen nicht in einem Wert mischen, z. B. physische und logische. Dies führt zu ungültigen Werten. Zum Beispiel ist `position-area: bottom inline-end` kein gültiger Wert, da es physische und logische Schlüsselwörter mischt.

## Physische Gitter-Schlüsselwörter

Die physischen Gitter-Schlüsselwörter spezifizieren eine Zelle oder einen Abschnitt des `position-area` Grids unter Verwendung physischer Werte. Diese Werte werden nicht durch die Einstellungen von {{cssxref("writing-mode")}} oder {{cssxref("direction")}} beeinflusst.

Mit physischen Zeilen- und Spaltenschlüsselwörtern können Sie ein Schlüsselwort aus jeder der beiden untenstehenden Listen auswählen, um eine spezifische Gitternetz-Kachel auszuwählen:

- `top`, `center` oder `bottom`: Die oberste, mittlere oder unterste Zeile des Rasters.
- `left`, `center` oder `right`: Die linke, mittlere oder rechte Spalte des Rasters.

Zum Beispiel wählt `top left` die oberste linke Kachel aus, während `center right` die Kachel in der Mitte der rechten Spalte auswählt.

### Physische Spann-Gitter-Schlüsselwörter

Die physischen Spann-Schlüsselwörter — wenn sie mit einem physischen Zeilen- oder Spaltenschlüsselwort kombiniert werden — spezifizieren eine zweite Kachel, in die sich der Positionsbereich erweitern soll. Wenn eine solche Kombination als Wert der `position-area` Eigenschaft gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der spezifizierten Zeile oder Spalte platziert; es erstreckt sich dann in der im Spann-Schlüsselwort angegebenen Richtung, indem es zwei Rasterkacheln umfasst:

- `span-left`

  - : Erstreckt die mittlere Spalte und die linke Spalte des Rasters.

- `span-right`

  - : Erstreckt die mittlere Spalte und die rechte Spalte des Rasters.

- `span-top`

  - : Erstreckt die mittlere Zeile und die obere Zeile des Rasters.

- `span-bottom`

  - : Erstreckt die mittlere Zeile und die untere Zeile des Rasters.

- `span-all`
  - : Gültig mit allen Schlüsselwortarten, umfasst die angegebene Zelle sowie die angrenzenden Zellen in derselben Zeile oder Spalte. Siehe [`span-all`](#span-all_2) unten.

Zum Beispiel erstreckt `top span-left` die oberen mittleren und oberen linken Rasterzellen.

> [!NOTE]
> Der Versuch, ein Zeilen- oder Spaltenschlüsselwort mit einem ungeeigneten Spann-Schlüsselwort zu paaren, führt zu einem ungültigen Wert. Zum Beispiel ist `right span-right` ungültig — Sie können keine mittig-rechte Rasterkachel auswählen und dann versuchen, weiter nach rechts zu spannen.

### Physische Gitter-Schlüsselwort-Standards

Wenn nur ein einziges physisches Schlüsselwort im `position-area` Wert angegeben ist, wird der andere Wert wie folgt impliziert:

- `left`, `right`, `top` oder `bottom`

  - : Der andere Wert wird als [`span-all`](#span-all_2) standardmäßig angenommen, was dazu führt, dass das Element alle drei Kacheln der Zeile oder Spalte, in der es ursprünglich platziert wurde, umspannt. Zum Beispiel ist `left` äquivalent zu `left span-all`.

- `center`, `span-left`, `span-right`, `span-top` oder `span-bottom`
  - : Der andere Wert wird standardmäßig als `center` angenommen. Zum Beispiel ist `span-left` äquivalent zu `center span-left` und `center` zu `center center`.

## Logische Gitter-Schlüsselwörter

Die logischen Gitter-Schlüsselwörter spezifizieren einen Bereich des Positionierungsbereichsrasters unter Verwendung logischer Werte. Mit diesen Werten werden die Position und Richtung durch die Einstellungen von {{cssxref("writing-mode")}} und {{cssxref("direction")}} entweder auf dem [umgebenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements oder, im Falle der `self` Schlüsselwörter, dem positionierten Element selbst beeinflusst. Es gibt zwei Arten von logischen Schlüsselwörtern; generische und explizite.

### Generische logische Zeilen- und Spaltenschlüsselwörter

Die generischen logischen Schlüsselwörter verwenden dieselben Begriffe für die Inline- und Blockrichtungen, wobei die Richtung durch die Position des Schlüsselbegriffs innerhalb eines Paares von `<position-area>` Werten bestimmt wird. Der erste Wert definiert die Blockrichtungsposition und der zweite Wert die Inline-Richtung. Sie können einen oder zwei Schlüsselbegriffe aus der folgenden Liste angeben. Die Angabe von zwei aus dieser Liste definiert eine einzelne spezifische Rasterkachel. Die Schlüsselwortposition oder -richtung ist:

- `start`

  - : Der Start der Block-/Inline-Richtung des Rasters, berechnet aus dem Schreibmodus des umgebenden Blocks.

- `end`

  - : Das Ende der Block-/Inline-Richtung des Rasters, berechnet aus dem Schreibmodus des umgebenden Blocks.

- `self-start`

  - : Der Start der Block-/Inline-Richtung des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `self-end`

  - : Das Ende der Block-/Inline-Richtung des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der Blockrichtung des Rasters (wenn dieses Schlüsselwort zuerst angegeben wird) oder der Inlinerichtung (wenn dieses Schlüsselwort zweitens angegeben wird).

Zum Beispiel beschreiben `start end` und `self-start self-end` beide die Position am Anfang der Blockrichtung und am Ende der Inlinerichtung. Mit `writing-mode: horizontal-tb` eingestellt, ist dies die obere rechte Ecke des Ankerelements, während mit `writing-mode: vertical-rl` es die untere rechte Ecke des Ankers ist.

#### Generische logische Spannen-Zeilen- und Spaltenschlüsselwörter

Die generischen logischen Spann-Schlüsselwörter — wenn sie mit einem logischen Zeilen- oder Spaltenschlüsselwort kombiniert werden — spezifizieren eine zweite Rasterkachel, in die sich der Positionsbereich erweitern soll. Wenn eine solche Kombination als Wert der `position-area` Eigenschaft gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der spezifizierten Zeile oder Spalte platziert, und es erstreckt sich dann in der im Spann-Schlüsselwort angegebenen Richtung, indem es zwei Rasterkacheln umfasst:

- `span-start`

  - : Erstreckt die mittlere Kachel und die Anfangskachel der Rasterzeile/-spalte, wobei die Richtung auf den Schreibmodus des umgebenden Blocks des Elements verweist.

- `span-end`

  - : Erstreckt die mittlere Kachel und die Endkachel der Rasterzeile/-spalte, wobei die Richtung auf den Schreibmodus des umgebenden Blocks des Elements verweist.

- `span-self-start`

  - : Erstreckt die mittlere Kachel und die Anfangskachel der Rasterzeile/-spalte für den eigenen Schreibmodus des positionierten Elements.

- `span-self-end`
  - : Erstreckt die mittlere Kachel und die Endkachel der Rasterzeile/-spalte, berechnet aus dem eigenen Schreibmodus des Elements.

Zum Beispiel spezifizieren `start span-end` und `self-start span-self-end` beide einen Rasterpositionsbereich, der in der Mitte der Startblock-Zeile beginnt, und über die Kacheln in dieser Zeile erstreckt, die in der Inline-Mitte und den Endspalten sitzen. Mit `writing-mode: horizontal-tb` eingestellt, würde dies über die obere Mitte und das obere rechte Ende des Ankers spannen, während es mit `writing-mode: vertical-rl` eingestellt über die rechte Mitte und das untere rechte Ende spannen würde.

### Explizite Inline- und Blocklogik-Schlüsselwörter

Die expliziten Inline- und Blocklogik-Zeilen- und Spaltenschlüsselwörter beziehen sich explizit auf eine Block- (Zeilen-) oder Inline- (Spalten-) Position. Sie können ein Schlüsselwort für die Blockrichtung und eines für die Inlinerichtung angeben, um eine einzelne spezifische Rasterkachel auszuwählen. Im Gegensatz zu generischen logischen Schlüsselwortwerten spielt die Reihenfolge der Schlüsselwörter keine Rolle. Das Deklarieren von zwei Schlüsselwörtern auf derselben Achse macht jedoch den Wert ungültig.

- `block-start`

  - : Der Start der Blockrichtung des Rasters, berechnet aus dem Schreibmodus des umgebenden Blocks.

- `block-end`

  - : Das Ende der Blockrichtung des Rasters, berechnet aus dem Schreibmodus des umgebenden Blocks.

- `inline-start`

  - : Der Start der Inlinerichtung des Rasters, berechnet aus dem Schreibmodus des umgebenden Blocks.

- `inline-end`
  - : Das Ende der Inlinerichtung des Rasters, berechnet aus dem Schreibmodus des umgebenden Blocks.

Zum Beispiel spezifiziert `block-start inline-end` die Kachel am Anfang der Blockrichtung und am Ende der Inlinerichtung. Mit `writing-mode: horizontal-tb` eingestellt, wäre dies die Kachel oben rechts am Anker, während es mit `writing-mode: vertical-rl` diese oben rechts wäre.

> [!NOTE]
> Die Spezifikation definiert `self` Äquivalente dieser Schlüsselwörter — `block-self-start`, `block-self-end`, `inline-self-start` und `inline-self-end`. Diese werden jedoch derzeit in keinem Browser unterstützt.

#### Explizite Inline- und Blocklogik-Spans Schlüsselwörter

Die expliziten logischen Spann-Schlüsselwörter — wenn sie mit einem logischen Zeilen- oder Spaltenschlüsselwort kombiniert werden — spezifizieren eine zweite Rasterkachel, in die sich der Positionsbereich erweitern soll. Wenn eine solche Kombination als Wert der `position-area` Eigenschaft gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der spezifizierten Zeile oder Spalte platziert, basierend auf dem Schreibmodus des umgebenden Blocks, und es erstreckt sich dann in der im Spann-Schlüsselwort angegebenen Richtung, indem es zwei Rasterkacheln umfasst:

- `span-block-start`

  - : Erstreckt die mittlere Kachel und die block-start Kachel der spezifizierten Inline-Spalte.

- `span-block-end`

  - : Erstreckt die mittlere Kachel und die block-end Kachel der spezifizierten Inline-Spalte.

- `span-inline-start`

  - : Erstreckt die mittlere Kachel und die inline-start Kachel der spezifizierten Blockzeile.

- `span-inline-end`
  - : Erstreckt die mittlere Kachel und die inline-end Kachel der spezifizierten Blockzeile.

Zum Beispiel wählt `block-end span-inline-start` die mittlere Kachel der Endblock-Zeile aus und erstreckt sich über die Kacheln in dieser Zeile, die in der Inline-Mitte und den Startspalten sitzen. Mit `writing-mode: horizontal-tb` eingestellt, würde dies über die unteren mittleren und unteren linken Rasterkacheln spannen, während es mit `writing-mode: vertical-rl` über die linke Mitte und die obere linke Rasterkacheln spannen würde.

> [!NOTE]
> Die Spezifikation definiert `self` Äquivalente dieser Schlüsselwörter, zum Beispiel — `span-self-block-start`, `span-self-block-end`, `span-self-inline-start` und `span-self-inline-end`. Diese werden jedoch derzeit in keinem Browser unterstützt.

> [!NOTE]
> Der Versuch, ein Zeilen- oder Spaltenschlüsselwort mit einem ungeeigneten Spann-Schlüsselwort zu paaren, führt zu einem ungültigen Eigenschaftswert. Zum Beispiel ist `block-end span-block-end` ungültig — Sie können die Mittelblock-Endzeile nicht auswählen und dann versuchen, eine Kachel weiter über die Blockendrichtung hinaus zu spannen.

### Logische Gitter-Schlüsselwort-Standards

Wenn nur ein einziges logisches `<position-area>` Schlüsselwort angegeben ist, wird der andere Wert wie folgt impliziert:

- `start`, `end`, `self-start` oder `self-end`

  - : Der andere Wert wird als derselbe wie der erste Wert standardmäßig angenommen, wodurch die Rasterzelle am Anfang der Zeile und Spalte oder am Ende der Zeile und Spalte ausgewählt wird.

- `span-start`, `span-self-start`, `span-end`, `span-self-end`

  - : Der andere Wert wird standardmäßig als `center` angenommen. Zum Beispiel ist `span-start` äquivalent zu `span-start center`.

- `block-start`, `block-end`, `inline-start`, `inline-end`

  - : Der andere Wert wird standardmäßig als [`span-all`](#span-all_2) angenommen, wodurch alle drei Kacheln der festgelegten Spalte oder Zeile umspannt werden. Zum Beispiel ist `block-start` äquivalent zu `block-start span-all`.

- `span-block-start`, `span-block-end`, `span-inline-start`, `span-inline-end`
  - : Der andere Wert wird standardmäßig als `center` angenommen. Zum Beispiel ist `span-inline-start` äquivalent zu `span-inline-start center`.

## Koordinatengitter-Schlüsselwörter

Diese Schlüsselwörter spezifizieren die Zellen des `position-area` Grids unter Verwendung von x- und y-Koordinatenwerten. Seine Position/Richtung wird durch die Einstellungen von {{cssxref("writing-mode")}} und/oder {{cssxref("direction")}} entweder auf dem [umgebenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) eines Elements oder, im Falle der `self` Schlüsselwörter, auf dem Element selbst beeinflusst.

Die Gitterzellen werden jedoch nach physischen Achsen und nicht nach Block-/Inline-Richtungen definiert:

- Für `writing-mode: horizontal-tb` und `vertical-lr` verläuft die x-Achse von links nach rechts und die y-Achse von oben nach unten.
- Für `writing-mode: horizontal-tb; direction: rtl` und `writing-mode: vertical-rl` verläuft die x-Achse von rechts nach links und die y-Achse von oben nach unten.

Mit Koordinatenzeilen- und Spaltenschlüsselwörtern können Sie ein Schlüsselwort auf der x-Achse und eines auf der y-Achse auswählen, um eine einzelne spezifische Rasterkachel zu definieren.

Die x-Achse-Schlüsselwörter umfassen:

- `x-start`

  - : Die Startkachel entlang der x-Achse des Rasters, berechnet aus dem Schreibmodus des umgebenden Blocks.

- `x-end`

  - : Die Endkachel entlang der x-Achse des Rasters, berechnet aus dem Schreibmodus des umgebenden Blocks.

- `x-self-start`

  - : Die Startkachel entlang der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `x-self-end`

  - : Die Endkachel entlang der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

Die y-Achse-Schlüsselwörter umfassen:

- `y-start`

  - : Die Startkachel entlang der y-Achse des Rasters, berechnet aus dem Schreibmodus des umgebenden Blocks.

- `y-end`

  - : Die Endkachel entlang der y-Achse des Rasters, berechnet aus dem Schreibmodus des umgebenden Blocks.

- `y-self-start`

  - : Die Startkachel entlang der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `y-self-end`

  - : Die Endkachel entlang der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

Zum Beispiel wählen `x-end y-start` und `x-self-end y-self-start` beide die Rasterzelle am Ende der x-Achse und am Anfang der y-Achse. Mit `writing-mode: horizontal-tb` eingestellt, wäre dies die Zelle oben rechts am Anker, während es mit `writing-mode: vertical-rl` oben links wäre.

### Koordinatenspannungs-Schlüsselwörter

Wenn mit einem Koordinatenzeilen- oder Spaltenschlüsselwort kombiniert, spezifizieren die koordinatenspannenden Schlüsselwörter eine zweite Rasterkachel, in die sich der Positionsbereich erweitern soll. Wenn eine solche Kombination als Wert der `position-area` Eigenschaft gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der spezifizierten Zeile oder Spalte platziert, und es erstreckt sich dann in der im Spannungs-Schlüsselwort angegebenen Richtung, indem es zwei Rasterkacheln umfasst:

- `span-x-start`

  - : Erstreckt die mittlere Kachel und die x-start Kachel der spezifizierten y-Achsenzeile.

- `span-x-end`

  - : Erstreckt die mittlere Kachel und die x-end Kachel der spezifizierten y-Achsenzeile.

- `span-y-start`

  - : Erstreckt die mittlere Kachel und die y-start Kachel der spezifizierten x-Achsenzeile.

- `span-y-end`
  - : Erstreckt die mittlere Kachel und die y-end Kachel der spezifizierten x-Achsenzeile.

Zum Beispiel wählt `y-end span-x-end` die Kachel in der Mitte der End-y-Reihe aus und erstreckt sich über die Kacheln in dieser Zeile, die in der x-Mitte und den x-Endspalten sitzen. Mit `writing-mode: horizontal-tb` eingestellt, würde der Positionsgitterbereich über die unteren mittleren und unteren rechten Rasterkacheln spannen, während es mit `writing-mode: vertical-rl` eingestellt über die unteren mittleren und unteren linken Kacheln spannen würde.

> [!NOTE]
> Die Spezifikation definiert keine separaten koordinierenden `self` Spannungs-Schlüsselwörter, aber diese sind nicht notwendig — die Spannungs-Schlüsselwörter können sowohl mit Koordinatenzeilen- als auch Spaltenschlüsselwörtern verwendet werden.

### Koordinatengitter-Schlüsselwort-Standards

Wenn nur ein einziges koordinatengesteuertes `<position-area>` Schlüsselwort angegeben ist, wird der andere Wert wie folgt impliziert:

- `x-start`, `x-self-start`, `x-end`, `x-self-end`, `y-start`, `y-self-start`, `y-end` oder `y-self-end`

  - : Der andere Wert wird als [`span-all`](#span-all_2) standardmäßig angenommen, wodurch die Rasterkacheln alle drei Kacheln der Zeile oder Spalte umfassen, in der es ursprünglich platziert wurde. Zum Beispiel ist `x-start` äquivalent zu `x-start span-all`.

- `span-x-start`, `span-x-end`, `span-y-start` oder `span-y-end`
  - : Der andere Wert wird standardmäßig als `center` angenommen. Zum Beispiel ist `span-start` äquivalent zu `span-start center`.

## `span-all`

`span-all` ist ein spezielles Schlüsselwort, das mit allen oben aufgeführten Zeilen- und Spaltenschlüsselwörtern verwendet werden kann. Wenn Sie zwei Werte — ein Zeilen-/Spaltenschlüsselwort und `span-all` — angeben, wird das Element in der angegebenen Zeile oder Spalte platziert, und es erstreckt sich dann über alle Kacheln in dieser Zeile oder Spalte.

## Beispiele

Sehen Sie sich die {{cssxref("position-area")}} Eigenschaftsseite an.

Für detaillierte Informationen zu Ankerfunktionen und -verwendung, siehe die [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modulseite und den [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-area")}}
- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- [`anchor()`](/de/docs/Web/CSS/anchor) Funktion
- [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Ausweichoptionen und bedingtes Ausblenden für Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
