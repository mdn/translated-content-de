---
title: <position-area>
slug: Web/CSS/Reference/Values/position-area_value
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der **`<position-area>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) definiert die Zelle oder die überspannten Zellen eines **`position-area`-Gitters**, ein 3x3-Gitter, dessen zentrale Zelle ein Ankerelement ist.

Die `<position-area>` Schlüsselwortwerte können als Wert der {{cssxref("position-area")}} Eigenschaft gesetzt werden, um ein anchorgebundenes Element an einem spezifischen Ort relativ zu seinem zugehörigen Ankerelement zu platzieren.

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

Positionsbereiche basieren auf dem Konzept eines **`position-area`-Gitters**, ein 3x3-Gitter von Kacheln, das aus vier Gitterlinien besteht, zwei auf jeder Achse, wobei ein Ankerelement die zentrale Kachel ist:

![Das position-area Gitter, wie unten beschrieben](position-area.png)

Wenn es als Wert der `position-area` Eigenschaft eines positionierten Elements verwendet wird, werden die Abmessungen der zentralen Kachel durch den [enthaltenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Standardankerelements des Elements definiert. Die Dimensionen des äußeren Randes des Gitters werden durch den enthaltenden Block des positionierten Elements definiert. Logische Schlüsselbegriffe basieren im Allgemeinen auf dem Schreibrichtung und Modus des enthaltenden Blocks, mit Ausnahme der `self-*` Schlüsselbegriffe, die aus dem Schreibrichtung des anchorgebundenen Elements berechnet werden.

Die Gitterkacheln sind in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die physikalischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Entsprechungen wie `block-start`, `center` und `block-end`, und Koordinatenentsprechungen — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physikalischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Entsprechungen wie `inline-start`, `center` und `inline-end`, und Koordinatenentsprechungen — `x-start`, `center` und `x-end`.

`<position-area>` Werte enthalten ein oder zwei Schlüsselwörter, die einen spezifischen Bereich des `position-area`-Gitters definieren. Das Setzen eines `position-area`-Wertes auf einem positionierten Element platziert dessen enthaltenden Block im spezifizierten Gitterbereich:

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

Die verschiedenen Typen von Schlüsselwörtern, die verwendet werden können, umfassen:

- [Physische Gitter-Schlüsselwörter](#physische_gitter-schlüsselwörter)
- [Generische logische Reihen- und Spalten-Schlüsselwörter](#generische_logische_reihen-_und_spalten-schlüsselwörter)
- [Explizite inline- und blocklogische Schlüsselwörter](#explizite_inline-_und_blocklogische_schlüsselwörter)
- [Koordinaten-Gitter-Schlüsselwörter](#koordinaten-gitter-schlüsselwörter)

> [!NOTE]
> Im Allgemeinen können Sie keine unterschiedlichen Typen in einem Wert mischen, z.B. physisch und logisch. Dies führt zu ungültigen Werten. Zum Beispiel ist `position-area: bottom inline-end` kein gültiger Wert, da er physische und logische Schlüsselwörter mischt.

## Physische Gitter-Schlüsselwörter

Die physischen Gitter-Schlüsselwörter spezifizieren eine Zelle oder einen Abschnitt des `position-area`-Gitters mithilfe physikalischer Werte. Diese Werte werden nicht von {{cssxref("writing-mode")}} oder {{cssxref("direction")}}-Einstellungen beeinflusst.

Mit physischen Reihen- und Spalten-Schlüsselwörtern können Sie ein Schlüsselwort aus jeder der beiden unteren Listen auswählen, um eine einzelne spezifische Gitterkachel auszuwählen:

- `top`, `center` oder `bottom`: Die obere, zentrale oder untere Reihe des Gitters.
- `left`, `center` oder `right`: Die linke, zentrale oder rechte Spalte des Gitters.

Zum Beispiel wählt `top left` die obere linke Kachel aus, während `center right` die zentrale Kachel der rechten Spalte auswählt.

### Physische überspannende Gitter-Schlüsselwörter

Die physischen überspannenden Schlüsselwörter — kombiniert mit einem physischen Reihen- oder Spalten-Schlüsselwort — spezifizieren eine zweite Gitterkachel, in die sich der Positionsbereich ausdehnt. Wenn eine solche Kombination als `position-area` Eigenschaftswert festgelegt ist, wird ein ausgewähltes Element zunächst im Zentrum der spezifizierten Reihe oder Spalte platziert; es erstreckt sich dann in die Richtung, die im überspannenden Schlüsselwort angegeben ist, und spannt zwei Gitterkacheln:

- `span-left`
  - : Spannt die Zentralspalte und die linke Spalte des Gitters.

- `span-right`
  - : Spannt die Zentralspalte und die rechte Spalte des Gitters.

- `span-top`
  - : Spannt die Zentralreihe und die obere Reihe des Gitters.

- `span-bottom`
  - : Spannt die Zentralreihe und die untere Reihe des Gitters.

- `span-all`
  - : Gültig mit allen Schlüsselworttypen, spannt die aufgeführte Zelle sowie die angrenzenden Zellen derselben Reihe oder Spalte. Siehe [`span-all`](#span-all_2) unten.

Zum Beispiel spannt `top span-left` die zentral-oben und links-oberen Gitternzellen.

> [!NOTE]
> Der Versuch, ein Reihen- oder Spaltenschlüsselwort mit einem ungeeigneten überspannten Schlüsselwort zu kombinieren, führt zu einem ungültigen Wert. Zum Beispiel ist `right span-right` ungültig — Sie können die zentrale rechte Gitterkachel nicht auswählen und dann weiter nach rechts spannen.

### Standards für physische Gitter-Schlüsselwörter

Wenn nur ein einzelnes physisches Schlüsselwort im `position-area` Wert angegeben wird, wird das andere wie folgt impliziert:

- `left`, `right`, `top`, oder `bottom`
  - : Der andere Wert standardmäßig auf [`span-all`](#span-all_2), sodass das Element alle drei Kacheln der Spalte oder Reihe, in der es ursprünglich platziert wurde, überspannt. Zum Beispiel entspricht `left` `left span-all`.

- `center`, `span-left`, `span-right`, `span-top` oder `span-bottom`
  - : Der andere Wert standardmäßig auf `center`. Zum Beispiel entspricht `span-left` `center span-left` und `center` entspricht `center center`.

## Logische Gitter-Schlüsselwörter

Die logischen Gitter-Schlüsselwörter spezifizieren einen Bereich des `position-area`-Gitters mithilfe logischer Werte. Mit diesen Werten werden die Position und Richtung durch {{cssxref("writing-mode")}} und {{cssxref("direction")}}-Einstellungen entweder auf dem [enthaltenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements oder, im Fall der `self` Schlüsselwörter, des positionierten Elements selbst beeinflusst. Es gibt zwei Arten von logischen Schlüsselwörtern: generisch und explizit.

### Generische logische Reihen- und Spalten-Schlüsselwörter

Die generischen logischen Schlüsselwörter verwenden dieselben Begriffe für die Inline- und Blockrichtungen, wobei die Richtung durch die Position des Schlüsselbegriffs innerhalb eines Paares von `<position-area>` Werten bestimmt wird. Der erste Wert definiert die Position in der Blockrichtung und der zweite Wert die in der Inlinerichtung. Sie können ein oder zwei Schlüsselbegriffe aus der folgenden Liste angeben. Die Angabe von zwei aus dieser Liste definiert eine einzelne spezifische Gitterkachel. Die Schlüsselwortposition oder -richtung ist:

- `start`
  - : Der Beginn der Block- oder Inline-Richtung des Gitters, berechnet aus dem Schreibmodus des enthaltenen Blocks.

- `end`
  - : Das Ende der Block- oder Inline-Richtung des Gitters, berechnet aus dem Schreibmodus des enthaltenen Blocks.

- `self-start`
  - : Der Beginn der Block- oder Inline-Richtung des Gitters, berechnet aus dem eigenen Schreibmodus des Elements.

- `self-end`
  - : Das Ende der Block- oder Inline-Richtung des Gitters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Das Zentrum der Blockrichtung des Gitters (wenn dieses Schlüsselwort zuerst angegeben ist) oder der Inlinerichtung (wenn dieses Schlüsselwort als zweites angegeben ist).

Zum Beispiel beschreiben `start end` und `self-start self-end` beide die Position am Anfang der Blockrichtung und am Ende der Inlinerichtung. Mit `writing-mode: horizontal-tb` gesetzt, ist dies die obere rechte Ecke des Ankerelements, während es bei `writing-mode: vertical-rl` die untere rechte Ecke des Ankers ist.

#### Generische logische überspannende Reihen- und Spalten-Schlüsselwörter

Die generischen logischen überspannenden Schlüsselwörter — wenn kombiniert mit einem logischen Reihen- oder Spaltenschlüsselwort — spezifizieren eine zweite Gitterkachel, in die sich der Positionsbereich ausdehnt. Wenn eine solche Kombination als `position-area` Eigenschaftswert festgelegt ist, wird ein ausgewähltes Element zunächst im Zentrum der spezifizierten Reihe oder Spalte platziert, und es spannt dann in der Richtung, die im überspannenden Schlüsselwort angegeben ist, über zwei Gitterkacheln:

- `span-start`
  - : Spannt die zentrale Kachel und die Startkachel der Gitterreihe/-spalte, mit der Richtung bezogen auf den Schreibmodus des enthaltenen Blocks des Elements.

- `span-end`
  - : Spannt die zentrale Kachel und die Endkachel der Gitterreihe/-spalte, mit der Richtung bezogen auf den Schreibmodus des enthaltenen Blocks des Elements.

- `span-self-start`
  - : Spannt die zentrale Kachel und die Startkachel der Gitterreihe/-spalte für den eigenen Schreibmodus des positionierten Elements.

- `span-self-end`
  - : Spannt die zentrale Kachel und die Endkachel der Gitterreihe/-spalte, berechnet aus dem eigenen Schreibmodus des Elements.

Zum Beispiel spezifizieren `start span-end` und `self-start span-self-end` beide einen Gitterpositionsbereich, der im Zentrum der Blockstartreihe beginnt und über die Kacheln in dieser Reihe spannt, die sich in den Inline-Zentren und Endspalten befinden. Mit `writing-mode: horizontal-tb` gesetzt, würde dies über das obere Zentrum und die obere rechte Ecke des Ankers spannen, während es bei `writing-mode: vertical-rl` über das rechte Zentrum und die untere rechte Ecke spannen würde.

### Explizite Inline- und Blocklogische Schlüsselwörter

Die expliziten Inline- und Blocklogischen Reihen- und Spalten-Schlüsselwörter beziehen sich explizit auf eine Block- (Reihe) oder Inline- (Spalte) Position. Sie können ein Schlüsselwort für die Blockrichtung und eines für die Inlinerichtung angeben, um eine einzige spezifische Gitterkachel auszuwählen. Im Gegensatz zu generischen logischen Schlüsselwortwerten spielt die Reihenfolge der Schlüsselwörter keine Rolle. Die Angabe von zwei Schlüsselwörtern auf derselben Achse macht den Wert jedoch ungültig.

- `block-start`
  - : Der Beginn der Blockrichtung des Gitters, berechnet aus dem Schreibmodus des enthaltenen Blocks.

- `block-end`
  - : Das Ende der Blockrichtung des Gitters, berechnet aus dem Schreibmodus des enthaltenen Blocks.

- `inline-start`
  - : Der Beginn der Inlinerichtung des Gitters, berechnet aus dem Schreibmodus des enthaltenen Blocks.

- `inline-end`
  - : Das Ende der Inlinerichtung des Gitters, berechnet aus dem Schreibmodus des enthaltenen Blocks.

Zum Beispiel spezifiziert `block-start inline-end` die Kachel am Beginn der Blockrichtung und dem Ende der Inlinerichtung. Mit `writing-mode: horizontal-tb` gesetzt, wäre dies die Kachel oben rechts am Anker, während es bei `writing-mode: vertical-rl` die Kachel unten rechts wäre.

> [!NOTE]
> Die Spezifikation definiert `self` Äquivalente dieser Schlüsselwörter — `block-self-start`, `block-self-end`, `inline-self-start` und `inline-self-end`. Diese werden jedoch derzeit in keinem Browser unterstützt.

#### Explizite Inline- und Blocklogische überspannende Schlüsselwörter

Die expliziten logischen überspannenden Schlüsselwörter — wenn kombiniert mit einem logischen Reihen- oder Spaltenschlüsselwort — spezifizieren eine zweite Gitterkachel, in die sich der Positionsbereich ausdehnt. Wenn eine solche Kombination als `position-area` Eigenschaftswert festgelegt ist, wird ein ausgewähltes Element zunächst im Zentrum der spezifizierten Reihe oder Spalte platziert, basierend auf dem Schreibmodus des enthaltenen Blocks, und es erstreckt sich dann in der Richtung, die im überspannenden Schlüsselwort angegeben ist, über zwei Gitterkacheln:

- `span-block-start`
  - : Spannt die zentrale Kachel und die Blockstartkachel der spezifizierten Inline-Spalte.

- `span-block-end`
  - : Spannt die zentrale Kachel und die Blockendkachel der spezifizierten Inline-Spalte.

- `span-inline-start`
  - : Spannt die zentrale Kachel und die Inline-Startkachel der spezifizierten Blockreihe.

- `span-inline-end`
  - : Spannt die zentrale Kachel und die Inline-Endkachel der spezifizierten Blockreihe.

Zum Beispiel wählt `block-end span-inline-start` die zentrale Kachel der Endblockreihe und spannt über die Kacheln in dieser Reihe, die sich in den Inline-Zentren und Startspalten befinden. Mit `writing-mode: horizontal-tb` gesetzt, würde dies die untere Zentral- und die untere linke Gitterkachel spannen, während es bei `writing-mode: vertical-rl` die linke Zentral- und die obere linke Gitterkachel spannen würde.

> [!NOTE]
> Die Spezifikation definiert `self` Äquivalente dieser Schlüsselwörter, z.B. — `span-self-block-start`, `span-self-block-end`, `span-self-inline-start` und `span-self-inline-end`. Diese werden jedoch derzeit in keinem Browser unterstützt.

> [!NOTE]
> Der Versuch, ein Reihen- oder Spaltenschlüsselwort mit einem ungeeigneten überspannenden Schlüsselwort zu kombinieren, führt zu einem ungültigen Eigenschaftswert. Zum Beispiel ist `block-end span-block-end` ungültig — Sie können die mittlere Blockendreihe nicht auswählen und dann versuchen, eine Kachel weiter in Richtung Blockende zu spannen.

### Standards für logische Gitter-Schlüsselwörter

Wenn nur ein einziges logisches `<position-area>` Schlüsselwort angegeben wird, wird der andere Wert wie folgt impliziert:

- `start`, `end`, `self-start`, oder `self-end`
  - : Der andere Wert standardmäßig auf denselben wie der erste Wert, und wählt die Gitterzelle in der Startreihe und Spalte, oder in der Endreihe und Spalte.

- `span-start`, `span-self-start`, `span-end`, `span-self-end`
  - : Der andere Wert standardmäßig auf `center`. Zum Beispiel entspricht `span-start` `span-start center`.

- `block-start`, `block-end`, `inline-start`, `inline-end`
  - : Der andere Wert standardmäßig auf [`span-all`](#span-all_2), überspannend alle drei Kacheln der Spalte oder Reihe, die festgelegt wurde. Zum Beispiel entspricht `block-start` `block-start span-all`.

- `span-block-start`, `span-block-end`, `span-inline-start`, `span-inline-end`
  - : Der andere Wert standardmäßig auf `center`. Zum Beispiel entspricht `span-inline-start` `span-inline-start center`.

## Koordinaten-Gitter-Schlüsselwörter

Diese Schlüsselwörter spezifizieren die Zellen des `position-area`-Gitters mithilfe von x- und y-Koordinatenwerten. Die Position/Richtung wird durch {{cssxref("writing-mode")}} und/oder {{cssxref("direction")}}-Einstellungen entweder auf dem [enthaltenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) eines Elements oder, im Fall der `self` Schlüsselwörter, des Elements selbst beeinflusst.

Jedoch werden die Gitterzellen gemäß den physikalischen Achsen anstelle von Block-/Inline-Richtungen definiert:

- Für `writing-mode: horizontal-tb` und `vertical-lr` läuft die x-Achse von links nach rechts und die y-Achse von oben nach unten.
- Für `writing-mode: horizontal-tb; direction: rtl` und `writing-mode: vertical-rl` läuft die x-Achse von rechts nach links und die y-Achse von oben nach unten.

Mit Koordinaten-Reihen- und -Spalten-Schlüsselwörtern können Sie ein Schlüsselwort von der x-Achse und eines von der y-Achse angeben, um eine einzelne spezifische Gitterkachel zu definieren.

Die x-Achse Schlüsselwörter beinhalten:

- `x-start`
  - : Die Startkachel entlang der x-Achse des Gitters, berechnet aus dem Schreibmodus des enthaltenen Blocks.

- `x-end`
  - : Die Endkachel entlang der x-Achse des Gitters, berechnet aus dem Schreibmodus des enthaltenen Blocks.

- `self-x-start`
  - : Die Startkachel entlang der x-Achse des Gitters, berechnet aus dem eigenen Schreibmodus des Elements.

- `self-x-end`
  - : Die Endkachel entlang der x-Achse des Gitters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Das Zentrum der x-Achse des Gitters, berechnet aus dem eigenen Schreibmodus des Elements.

Die y-Achse Schlüsselwörter beinhalten:

- `y-start`
  - : Die Startkachel entlang der y-Achse des Gitters, berechnet aus dem Schreibmodus des enthaltenen Blocks.

- `y-end`
  - : Die Endkachel entlang der y-Achse des Gitters, berechnet aus dem Schreibmodus des enthaltenen Blocks.

- `self-y-start`
  - : Die Startkachel entlang der y-Achse des Gitters, berechnet aus dem eigenen Schreibmodus des Elements.

- `self-y-end`
  - : Die Endkachel entlang der y-Achse des Gitters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Das Zentrum der y-Achse des Gitters, berechnet aus dem eigenen Schreibmodus des Elements.

Zum Beispiel wählen `x-end y-start` und `self-x-end self-y-start` beide die Gitterzelle am Ende der x-Achse und am Start der y-Achse aus. Mit `writing-mode: horizontal-tb` gesetzt, wäre dies die Zelle oben rechts am Anker, während es bei `writing-mode: vertical-rl` die Zelle oben links wäre.

### Koordinaten-Spannungs-Schlüsselwörter

Wenn sie mit einem Koordinaten-Reihen- oder -Spalten-Schlüsselwort kombiniert werden, spezifizieren die Koordinaten-Spannungs-Schlüsselwörter eine zweite Gitterkachel, in die sich der Positionsbereich ausdehnt. Wenn eine solche Kombination als `position-area` Eigenschaftswert festgelegt ist, wird ein ausgewähltes Element zunächst im Zentrum der spezifizierten Reihe oder Spalte platziert, und es erstreckt sich dann in der Richtung, die im Spannungs-Schlüsselwort angegeben ist, über zwei Gitterkacheln:

- `span-x-start`
  - : Spannt die zentrale Kachel und die x-Startkachel der spezifizierten y-Achsenreihe.

- `span-x-end`
  - : Spannt die zentrale Kachel und die x-Endkachel der spezifizierten y-Achsenreihe.

- `span-y-start`
  - : Spannt die zentrale Kachel und die y-Startkachel der spezifizierten x-Achsenspalte.

- `span-y-end`
  - : Spannt die zentrale Kachel und die y-Endkachel der spezifizierten x-Achsenspalte.

Zum Beispiel wählt `y-end span-x-end` die Kachel im Zentrum der End-y-Reihe aus und spannt sich über die Kacheln in dieser Reihe, die sich in den x-Zentren und x-Enden befinden. Mit `writing-mode: horizontal-tb` gesetzt, würde der Positionsgitterbereich die Gitterkacheln im unteren Zentrum und unten rechts spannen, während es bei `writing-mode: vertical-rl` die Gitterkacheln im unteren Zentrum und unten links spannen würde.

> [!NOTE]
> Die Spezifikation definiert keine separaten Koordinaten `self` Spannungs-Schlüsselwörter, aber diese sind nicht notwendig — die Spannungs-Schlüsselwörter können mit sowohl Koordinaten-Reihen- als auch Spalten-Schlüsselwörtern verwendet werden.

### Standards für Koordinaten-Gitter-Schlüsselwörter

Wenn nur ein einziges Koordinaten-Gitter `<position-area>` Schlüsselwort angegeben wird, wird der andere Wert wie folgt impliziert:

- `x-start`, `self-x-start`, `x-end`, `self-x-end`, `y-start`, `self-y-start`, `y-end`, oder `self-y-end`
  - : Der andere Wert standardmäßig auf [`span-all`](#span-all_2), wobei die Gitterkacheln alle drei Kacheln der Spalte oder Reihe, in der sie ursprünglich platziert wurden, überspannen. Zum Beispiel entspricht `x-start` `x-start span-all`.

- `span-x-start`, `span-x-end`, `span-y-start`, `span-y-end`, `span-self-x-start`, `span-self-x-end`, `span-self-y-end`, oder `span-self-y-start`
  - : Der andere Wert standardmäßig auf `center`. Zum Beispiel entspricht `span-start` `span-start center`.

## `span-all`

`span-all` ist ein spezielles Schlüsselwort, das mit allen Reihen- und Spalten-Schlüsselwörtern, die in den Abschnitten oben aufgeführt sind, verwendbar ist. Wenn Sie zwei Werte angeben — ein Reihen-/Spaltenschlüsselwort und `span-all`, wird das Element in der angegebenen Reihe oder Spalte platziert, und es spannt sich dann über alle Kacheln in dieser Reihe oder Spalte.

## Beispiele

Siehe die {{cssxref("position-area")}} Eigenschaftsseite.

Für detaillierte Informationen über Ankerfunktionen und deren Nutzung, lesen Sie die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modulübersicht und den [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-area")}}
- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor) Funktion
- [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Ausweichoptionen und bedingtes Verbergen für Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
