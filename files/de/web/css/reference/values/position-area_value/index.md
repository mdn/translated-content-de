---
title: <position-area>
slug: Web/CSS/Reference/Values/position-area_value
l10n:
  sourceCommit: 3e0ba995376cace7f08f0771635f86f0fb1753b3
---

Der **`<position-area>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) definiert die Zelle oder die über mehrere Zellen reichenden Bereiche eines **Positionierungsrasterbereichs**, eines 3x3 Rasters, dessen zentrale Zelle ein Ankerelement ist.

Die `<position-area>` Schlüsselwortwerte können als Wert der {{cssxref("position-area")}} Eigenschaft festgelegt werden, um ein ankerpositioniertes Element an einem bestimmten Ort relativ zu seinem zugehörigen Ankerelement zu platzieren.

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

Positionierungsbereiche arbeiten nach dem Konzept eines **Positionierungsrasterbereichs**, eines 3x3 Rasters von Kacheln, das aus vier Rasterlinien besteht, jeweils zwei auf jeder Achse, wobei das Ankerelement die mittlere Kachel ist:

![The position-area grid, as described below](position-area.png)

Wird der `position-area`-Wert eines positionierten Elements verwendet, so werden die Abmessungen der zentralen Kachel durch den [umschließenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) des Standardankerelements des Elements definiert. Die Dimensionen der Außenkante des Rasters werden durch den umschließenden Block des positionierten Elements definiert. Logische Schlüsselbegriffe basieren im Allgemeinen auf dem Schreibmodus und der Richtung des umschließenden Blocks, mit Ausnahme der `self-*` Schlüsselbegriffe, die aus dem Schreibmodus des ankerpositionierten Elements berechnet werden.

Die Rasterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die physikalischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Äquivalente wie `block-start`, `center` und `block-end`, und Koordinatenäquivalente — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physikalischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `inline-start`, `center` und `inline-end`, und Koordinatenäquivalente — `x-start`, `center` und `x-end`.

`<position-area>` Werte enthalten ein oder zwei Schlüsselwörter, die einen spezifischen Bereich des Positionierungsrasterbereichs definieren. Das Setzen eines `position-area` Werts auf ein positioniertes Element platziert seinen umschließenden Block im angegebenen Rasterbereich:

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

- [Physische Raster-Schlüsselwörter](#physische_raster-schlüsselwörter)
- [Generische logische Zeilen- und Spalten-Schlüsselwörter](#generische_logische_zeilen-_und_spalten-schlüsselwörter)
- [Explizite Inline- und Block-logische Schlüsselwörter](#explizite_inline-_und_block-logische_schlüsselwörter)
- [Koordinaten-Raster-Schlüsselwörter](#koordinaten-raster-schlüsselwörter)

> [!NOTE]
> Im Allgemeinen kann man nicht verschiedene Typen in einem Wert mischen, z.B. physische und logische. Dies führt zu ungültigen Werten. Zum Beispiel ist `position-area: bottom inline-end` kein gültiger Wert, da er physische und logische Schlüsselwörter mischt.

## Physische Raster-Schlüsselwörter

Die physischen Raster-Schlüsselwörter bestimmen eine Zelle oder einen Abschnitt des `position-area` Rasters mit physischen Werten. Diese Werte werden nicht durch die Einstellungen von {{cssxref("writing-mode")}} oder {{cssxref("direction")}} beeinflusst.

Mit physischen Zeilen- und Spalten-Schlüsselwörtern können Sie jeweils ein Schlüsselwort aus den beiden unten stehenden Listen auswählen, um eine einzelne spezifische Rasterkachel auszuwählen:

- `top`, `center` oder `bottom`: Die obere, mittlere oder untere Zeile des Rasters.
- `left`, `center` oder `right`: Die linke, mittlere oder rechte Spalte des Rasters.

Zum Beispiel wählt `top left` die obere linke Kachel, während `center right` die mittlere Kachel der rechten Spalte auswählt.

### Physische übergreifende Raster-Schlüsselwörter

Die physischen übergreifenden Schlüsselwörter — in Kombination mit einem physischen Zeilen- oder Spalten-Schlüsselwort — bestimmen eine zweite Rasterkachel, in die der Positionierungsbereich erweitert werden soll. Wenn eine solche Kombination als `position-area` Eigenschaftswert festgelegt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert; es erstreckt sich dann in die Richtung, die im übergreifenden Schlüsselwort angegeben ist, über zwei Rasterkacheln:

- `span-left`
  - : Überspannt die mittlere Spalte und die linke Spalte des Rasters.

- `span-right`
  - : Überspannt die mittlere Spalte und die rechte Spalte des Rasters.

- `span-top`
  - : Überspannt die mittlere Zeile und die obere Zeile des Rasters.

- `span-bottom`
  - : Überspannt die mittlere Zeile und die untere Zeile des Rasters.

- `span-all`
  - : Gültig mit allen Schlüsselwörtern, überspannt die angegebene Zelle sowie die angrenzenden Zellen in derselben Zeile oder Spalte. Siehe [`span-all`](#span-all_2) unten.

Zum Beispiel überspannt `top span-left` die obere mittlere und die obere linke Rasterzelle.

> [!NOTE]
> Der Versuch, ein Zeilen- oder Spalten-Schlüsselwort mit einem nicht geeigneten übergreifenden Schlüsselwort zu kombinieren, führt zu einem ungültigen Wert. Zum Beispiel ist `right span-right` ungültig – Sie können das mittlere-rechte Rasterfeld nicht auswählen und dann versuchen, weiter nach rechts zu spannen.

### Standardwerte physischer Raster-Schlüsselwörter

Wenn nur ein einzelnes physisches Schlüsselwort im `position-area` Wert angegeben ist, wird der andere Wert folgendermaßen impliziert:

- `left`, `right`, `top` oder `bottom`
  - : Der andere Wert wird als [`span-all`](#span-all_2) voreingestellt, so dass das Element alle drei Kacheln der Spalte oder Zeile überspannt, in der es ursprünglich platziert wurde. Zum Beispiel ist `left` gleichbedeutend mit `left span-all`.

- `center`, `span-left`, `span-right`, `span-top` oder `span-bottom`
  - : Der andere Wert wird als `center` voreingestellt. Zum Beispiel ist `span-left` gleichbedeutend mit `center span-left` und `center` ist gleichbedeutend mit `center center`.

## Logische Raster-Schlüsselwörter

Die logischen Raster-Schlüsselwörter bestimmen einen Bereich des Positionierungsrasterbereichs mit logischen Werten. Mit diesen Werten werden die Position und Richtung durch die Einstellungen für {{cssxref("writing-mode")}} und {{cssxref("direction")}} auf entweder dem [umschließenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) des Elements oder, im Fall der `self` Schlüsselwörter, dem positionierten Element selbst beeinflusst. Es gibt zwei Arten von logischen Schlüsselwörtern; generische und explizite.

### Generische logische Zeilen- und Spalten-Schlüsselwörter

Die generischen logischen Schlüsselwörter verwenden dieselben Begriffe für die Inline- und Blockrichtungen, wobei die Richtung durch die Position des Schlüsselbegriffs innerhalb eines Paares von `<position-area>` Werten bestimmt wird. Der erste Wert definiert die Position der Blockrichtung und der zweite Wert definiert den Inline-Wert. Sie können einen oder zwei Schlüsselbegriffe aus der folgenden Liste angeben. Zwei aus dieser Liste zu spezifizieren, definiert eine einzelne spezifische Rasterkachel. Die Schlüsselwortposition oder -richtung ist:

- `start`
  - : Der Anfang der Block- oder Inline-Richtung des Rasters, berechnet aus dem Schreibmodus des umschließenden Blocks.

- `end`
  - : Das Ende der Block- oder Inline-Richtung des Rasters, berechnet aus dem Schreibmodus des umschließenden Blocks.

- `self-start`
  - : Der Anfang der Block- oder Inline-Richtung des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `self-end`
  - : Das Ende der Block- oder Inline-Richtung des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der Blockrichtung des Rasters (wenn dieses Schlüsselwort zuerst angegeben wird) oder der Inline-Richtung (wenn dieses Schlüsselwort zuletzt angegeben wird).

Zum Beispiel beschreiben `start end` und `self-start self-end` beide die Position am Anfang der Blockrichtung und dem Ende der Inline-Richtung. Mit `writing-mode: horizontal-tb` wäre dies oben rechts am Ankerelement, während es mit `writing-mode: vertical-rl` unten rechts am Anker ist.

#### Generische logische übergreifende Zeilen- und Spalten-Schlüsselwörter

Die generischen logischen übergreifenden Schlüsselwörter — in Kombination mit einem logischen Zeilen- oder Spalten-Schlüsselwort — bestimmen eine zweite Rasterkachel für den Positionierungsbereich. Wird eine solche Kombination als `position-area` Eigenschaftswert festgelegt, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert und dann in der Richtung, die im übergreifenden Schlüsselwort angegeben ist, über zwei Rasterkacheln erweitert:

- `span-start`
  - : Überspannt die mittlere Kachel und die Startkachel der Rasterzeile/-spalte, wobei die Richtung sich auf den Schreibmodus des umschließenden Blocks des Elements bezieht.

- `span-end`
  - : Überspannt die mittlere Kachel und die Endkachel der Rasterzeile/-spalte, wobei die Richtung sich auf den Schreibmodus des umschließenden Blocks des Elements bezieht.

- `span-self-start`
  - : Überspannt die mittlere Kachel und die Startkachel der Rasterzeile/-spalte im eigenen Schreibmodus des positionierten Elements.

- `span-self-end`
  - : Überspannt die mittlere Kachel und die Endkachel der Rasterzeile/-spalte, berechnet aus dem eigenen Schreibmodus des Elements.

Zum Beispiel spezifizieren `start span-end` und `self-start span-self-end` beide einen Positionierungsbereich, der in der Mitte der Start-Blockzeile beginnt und die Kacheln in dieser Zeile überspannt, die in den Inline-Zentren und Endspalten sitzen. Mit `writing-mode: horizontal-tb` würde dies über die obere Mitte und oben rechts des Ankers spannen, während es mit `writing-mode: vertical-rl` über die rechte Mitte und unten rechts spannt.

### Explizite Inline- und Block-logische Schlüsselwörter

Die expliziten Inline- und Block-logischen Zeilen- und Spalten-Schlüsselwörter beziehen sich explizit auf eine Block- (Zeilen-) oder Inline- (Spalten-)Position. Sie können ein Schlüsselwort für die Blockrichtung und eines für die Inlinerichtung angeben, um eine einzelne spezifische Rasterkachel auszuwählen. Anders als bei generischen logischen Schlüsselwerten spielt die Reihenfolge der Schlüsselwörter keine Rolle. Das Deklarieren von zwei Schlüsselwörtern auf derselben Achse macht den Wert jedoch ungültig.

- `block-start`
  - : Der Anfang der Blockrichtung des Rasters, berechnet aus dem Schreibmodus des umschließenden Blocks.

- `block-end`
  - : Das Ende der Blockrichtung des Rasters, berechnet aus dem Schreibmodus des umschließenden Blocks.

- `inline-start`
  - : Der Anfang der Inlinerichtung des Rasters, berechnet aus dem Schreibmodus des umschließenden Blocks.

- `inline-end`
  - : Das Ende der Inlinerichtung des Rasters, berechnet aus dem Schreibmodus des umschließenden Blocks.

Zum Beispiel spezifiziert `block-start inline-end` die Kachel am Anfang der Blockrichtung und dem Ende der Inlinerichtung. Mit `writing-mode: horizontal-tb` wäre dies die Kachel oben rechts am Anker, während es mit `writing-mode: vertical-rl` die Kachel unten rechts wäre.

> [!NOTE]
> Die Spezifikation definiert `self`-Äquivalente dieser Schlüsselwörter — `block-self-start`, `block-self-end`, `inline-self-start` und `inline-self-end`. Diese werden jedoch derzeit in keinem Browser unterstützt.

#### Explizite Inline- und Block-logische übergreifende Schlüsselwörter

Die expliziten logischen übergreifenden Schlüsselwörter — in Kombination mit einem logischen Zeilen- oder Spalten-Schlüsselwort — bestimmen eine zweite Rasterkachel für den Positionierungsbereich, in die er sich erstrecken soll. Wird eine solche Kombination als `position-area` Eigenschaftswert festgelegt, wird ein ausgewähltes Element anhand des Schreibmodus des umschließenden Blocks zunächst in der Mitte der angegebenen Zeile oder Spalte platziert und dann in der Richtung, die im übergreifenden Schlüsselwort angegeben ist, über zwei Rasterkacheln erweitert:

- `span-block-start`
  - : Überspannt die mittlere Kachel und die Block-Startkachel der angegebenen Inline-Spalte.

- `span-block-end`
  - : Überspannt die mittlere Kachel und die Block-Endkachel der angegebenen Inline-Spalte.

- `span-inline-start`
  - : Überspannt die mittlere Kachel und die Inline-Startkachel der angegebenen Blockzeile.

- `span-inline-end`
  - : Überspannt die mittlere Kachel und die Inline-Endkachel der angegebenen Blockzeile.

Zum Beispiel wählt `block-end span-inline-start` die mittlere Kachel der Endblockzeile aus und überspannt die Kacheln in dieser Zeile, die in den Inline-Zentren und Startspalten sitzen. Mit `writing-mode: horizontal-tb` spannt dies über die mittlere-unten und links-unten Rasterkacheln, während es mit `writing-mode: vertical-rl` die mittlere-links und oben-links Rasterkacheln überspannt.

> [!NOTE]
> Die Spezifikation definiert `self` Äquivalente dieser Schlüsselwörter, z.B. — `span-self-block-start`, `span-self-block-end`, `span-self-inline-start`, und `span-self-inline-end`. Diese werden jedoch derzeit in keinem Browser unterstützt.

> [!NOTE]
> Der Versuch, ein Zeilen- oder Spalten-Schlüsselwort mit einem nicht geeigneten übergreifenden Schlüsselwort zu kombinieren, führt zu einem ungültigen Eigenschaftswert. Zum Beispiel ist `block-end span-block-end` ungültig – Sie können die mittlere Block-Endzeile nicht auswählen und dann versuchen, eine Kachel weiter vom Block-Ende-Richtung zu spannen.

### Standardwerte logischer Raster-Schlüsselwörter

Wenn nur ein einziges logisches `<position-area>` Schlüsselwort angegeben ist, wird der andere Wert folgendermaßen impliziert:

- `start`, `end`, `self-start`, oder `self-end`
  - : Der andere Wert wird als der gleiche wie der erste Wert voreingestellt, wodurch die Rasterzelle in der Anfangszeile und -spalte oder der Endzeile und -spalte ausgewählt wird.

- `span-start`, `span-self-start`, `span-end`, `span-self-end`
  - : Der andere Wert wird auf `center` voreingestellt. Zum Beispiel ist `span-start` gleichbedeutend mit `span-start center`.

- `block-start`, `block-end`, `inline-start`, `inline-end`
  - : Der andere Wert wird als [`span-all`](#span-all_2) voreingestellt, wodurch alle drei Kacheln der festgelegten Spalte oder Zeile überspannt werden. Zum Beispiel ist `block-start` gleichbedeutend mit `block-start span-all`.

- `span-block-start`, `span-block-end`, `span-inline-start`, `span-inline-end`
  - : Der andere Wert wird auf `center` voreingestellt. Zum Beispiel ist `span-inline-start` gleichbedeutend mit `span-inline-start center`.

## Koordinaten-Raster-Schlüsselwörter

Diese Schlüsselwörter spezifizieren die Zellen des `position-area` Rasters unter Verwendung von x- und y-Koordinatenwerten. Seine Position/Richtung wird von den Einstellungen für {{cssxref("writing-mode")}} und/oder {{cssxref("direction")}} auf entweder einem [umschließenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) des Elements oder, im Fall der `self` Schlüsselwörter, dem Element selbst beeinflusst.

Jedoch sind die Rasterzellen gemäß der physischen Achsen und nicht Block/Inline-Richtungen definiert:

- Für `writing-mode: horizontal-tb` und `vertical-lr` verläuft die x-Achse von links nach rechts und die y-Achse von oben nach unten.
- Für `writing-mode: horizontal-tb; direction: rtl` und `writing-mode: vertical-rl` verläuft die x-Achse von rechts nach links und die y-Achse von oben nach unten.

Mit Koordinaten-Zeilen- und Spalten-Schlüsselwörtern können Sie ein Schlüsselwort aus der x-Achse und eins aus der y-Achse angeben, um eine einzelne spezifische Rasterkachel zu definieren.

Die Schlüsselwörter der x-Achse umfassen:

- `x-start`
  - : Die Startkachel entlang der x-Achse des Rasters, berechnet aus dem Schreibmodus des umschließenden Blocks.

- `x-end`
  - : Die Endkachel entlang der x-Achse des Rasters, berechnet aus dem Schreibmodus des umschließenden Blocks.

- `self-x-start`
  - : Die Startkachel entlang der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `self-x-end`
  - : Die Endkachel entlang der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

Die Schlüsselwörter der y-Achse umfassen:

- `y-start`
  - : Die Startkachel entlang der y-Achse des Rasters, berechnet aus dem Schreibmodus des umschließenden Blocks.

- `y-end`
  - : Die Endkachel entlang der y-Achse des Rasters, berechnet aus dem Schreibmodus des umschließenden Blocks.

- `self-y-start`
  - : Die Startkachel entlang der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `self-y-end`
  - : Die Endkachel entlang der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

Zum Beispiel wählen `x-end y-start` und `self-x-end self-y-start` beide die Rasterzelle am Ende der x-Achse und dem Anfang der y-Achse. Mit `writing-mode: horizontal-tb` wäre dies die Zelle oben rechts am Anker, während es mit `writing-mode: vertical-rl` oben links ist.

### Koordinaten übergreifende Schlüsselwörter

Wenn mit einem Koordinaten-Zeilen- oder Spalten-Schlüsselwort kombiniert, bestimmen die koordinatenübergreifenden Schlüsselwörter eine zweite Rasterkachel, in die sich der Positionierungsbereich erstrecken soll. Wird eine solche Kombination als `position-area` Eigenschaftswert festgelegt, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert und dann in der Richtung, die im übergreifenden Schlüsselwort angegeben ist, über zwei Rasterkacheln erweitert:

- `span-x-start`
  - : Überspannt die mittlere Kachel und die x-Startkachel der angegebenen y-Achsenreihe.

- `span-x-end`
  - : Überspannt die mittlere Kachel und die x-Endkachel der angegebenen y-Achsenreihe.

- `span-y-start`
  - : Überspannt die mittlere Kachel und die y-Startkachel der angegebenen x-Achsenspalte.

- `span-y-end`
  - : Überspannt die mittlere Kachel und die y-Endkachel der angegebenen x-Achsenspalte.

Zum Beispiel wählt `y-end span-x-end` die Kachel in der Mitte der End-y-Zeile aus und überspannt die Kacheln in dieser Zeile, die in den x-Zentren und x-Endspalten sitzen. Mit `writing-mode: horizontal-tb` würde der Positionierungsrasterbereich die Rasterkacheln in der unteren Mitte und unten rechts überspannen, während er mit `writing-mode: vertical-rl` die untere Mitte und unten links überspannen würde.

> [!NOTE]
> Die Spezifikation definiert keine separaten Koordinaten-`self` übergreifende Schlüsselwörter, aber diese sind nicht nötig - die übergreifenden Schlüsselwörter können mit sowohl den Koordinaten-Zeilen- als auch Spalten-Schlüsselwörtern verwendet werden.

### Standardwerte koordinatenbezogener Raster-Schlüsselwörter

Wenn nur ein einzelnes koordinatenbezogenes `<position-area>` Schlüsselwort angegeben ist, wird der andere Wert folgendermaßen impliziert:

- `x-start`, `self-x-start`, `x-end`, `self-x-end`, `y-start`, `self-y-start`, `y-end`, oder `self-y-end`
  - : Der andere Wert wird als [`span-all`](#span-all_2) voreingestellt, wobei alle drei Kacheln der Spalte oder Zeile, in der es ursprünglich platziert wurde, ausgewählt werden. Zum Beispiel ist `x-start` gleichbedeutend mit `x-start span-all`.

- `span-x-start`, `span-x-end`, `span-y-start`, `span-y-end`, `span-self-x-start`, `span-self-x-end`, `span-self-y-end`, oder `span-self-y-start`
  - : Der andere Wert wird auf `center` voreingestellt. Zum Beispiel ist `span-start` gleichbedeutend mit `span-start center`.

## `span-all`

`span-all` ist ein spezielles Schlüsselwort, das mit allen oben beschriebenen Zeilen- und Spalten-Schlüsselwörtern verwendbar ist. Wenn Sie zwei Werte angeben — ein Zeilen-/Spaltenschlüsselwort und `span-all`, wird das Element in der angegebenen Zeile oder Spalte platziert und dann über alle Kacheln in dieser Zeile oder Spalte erweitert.

## Beispiele

Siehe die {{cssxref("position-area")}} Eigenschaftsseite.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung sehen Sie das [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul und den [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-area")}}
- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor) Funktion
- [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Verbergen für Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
- [CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
