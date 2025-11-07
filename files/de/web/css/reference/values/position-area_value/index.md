---
title: <position-area>
slug: Web/CSS/Reference/Values/position-area_value
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`<position-area>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) definiert die Zelle oder überspannten Zellen eines **Position-Area-Rasters**, eines 3x3-Rasters, dessen mittlere Zelle ein Ankerelement ist.

Die `<position-area>`-Schlüsselwortwerte können als Wert der {{cssxref("position-area")}}-Eigenschaft festgelegt werden, um ein Anker-positioniertes Element an einem bestimmten Ort relativ zu seinem verbundenen Ankerelement zu platzieren.

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

Positionsbereiche basieren auf dem Konzept eines **Position-Area-Rasters**, eines 3x3-Rasters von Feldern, das aus vier Rasterlinien besteht, zwei auf jeder Achse, wobei das Ankerelement das mittlere Feld ist:

![Das Position-Area-Raster, wie unten beschrieben](position-area.png)

Wenn es als Wert der `position-area`-Eigenschaft eines positionierten Elements verwendet wird, werden die Abmessungen des mittleren Feldes durch den [enthaltenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) des Standard-Ankerelements des Elements definiert. Die Abmessungen des äußeren Randes des Rasters werden durch den enthaltenen Block des positionierten Elements definiert. Logische Schlüsselbegriffe basieren im Allgemeinen auf dem Schreibmodus und der Richtung des enthaltenen Blocks, außer bei den `self-*`-Schlüsselbegriffen, die vom Schreibmodus des anker-positionierten Elements berechnet werden.

Die Gitterfelder sind in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Äquivalente wie `block-start`, `center` und `block-end`, sowie Koordinatenäquivalente — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `inline-start`, `center` und `inline-end`, sowie Koordinatenäquivalente — `x-start`, `center` und `x-end`.

`<position-area>`-Werte enthalten ein oder zwei Schlüsselwörter, die einen bestimmten Bereich des Position-Area-Rasters definieren. Durch das Setzen eines `position-area`-Werts auf ein positioniertes Element wird dessen enthaltender Block im angegebenen Rasterbereich platziert:

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
- [Allgemeine logische Reihen- und Spaltenschlüsselwörter](#allgemeine_logische_reihen-_und_spaltenschlüsselwörter)
- [Explizite inline und block logische Schlüsselwörter](#explizite_inline_und_block_logische_schlüsselwörter)
- [Koordinaten-Raster-Schlüsselwörter](#koordinaten-raster-schlüsselwörter)

> [!NOTE]
> Im Allgemeinen können Sie in einem Wert keine verschiedenen Typen mischen, z. B. physisch und logisch. Dies führt zu ungültigen Werten. Zum Beispiel ist `position-area: bottom inline-end` kein gültiger Wert, weil es physische und logische Schlüsselwörter mischt.

## Physische Raster-Schlüsselwörter

Die physischen Raster-Schlüsselwörter spezifizieren eine Zelle oder einen Abschnitt des `position-area`-Rasters mit physischen Werten. Diese Werte werden nicht von den Einstellungen {{cssxref("writing-mode")}} oder {{cssxref("direction")}} beeinflusst.

Mit den physischen Reihen- und Spaltenschlüsselwörtern können Sie jeweils ein Schlüsselwort aus jeder der beiden Listen unten auswählen, um ein einzelnes spezifisches Rasterfeld auszuwählen:

- `top`, `center` oder `bottom`: Die obere, mittlere oder untere Reihe des Rasters.
- `left`, `center` oder `right`: Die linke, mittlere oder rechte Spalte des Rasters.

Zum Beispiel wählt `top left` das obere linke Feld aus, während `center right` das mittlere Feld der rechten Spalte auswählt.

### Physische überbrückende Raster-Schlüsselwörter

Die physischen überbrückenden Schlüsselwörter — in Kombination mit einem physischen Reihen- oder Spaltenschlüsselwort — spezifizieren ein zweites Rasterfeld, in das sich der Positionierungsbereich ausdehnen soll. Wenn eine solche Kombination als `position-area`-Eigenschaftswert festgelegt ist, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Reihe oder Spalte platziert; es erstreckt sich dann in die durch das überbrückende Schlüsselwort spezifizierte Richtung und erstreckt sich über zwei Rasterfelder:

- `span-left`

  - : Erstreckt sich über die Mittelsäule und die linke Säule des Rasters.

- `span-right`

  - : Erstreckt sich über die Mittelsäule und die rechte Säule des Rasters.

- `span-top`

  - : Erstreckt sich über die Mittelreihe und die obere Reihe des Rasters.

- `span-bottom`

  - : Erstreckt sich über die Mittelreihe und die untere Reihe des Rasters.

- `span-all`
  - : Gültig für alle Schlüsselworttypen, erstreckt sich über die angegebene Zelle sowie die angrenzenden Zellen in derselben Reihe oder Spalte. Siehe [`span-all`](#span-all_2) unten.

Zum Beispiel erstreckt sich `top span-left` über die oberen mittleren und oberen linken Rasterzellen.

> [!NOTE]
> Der Versuch, ein Reihen- oder Spaltenschlüsselwort mit einem unangemessenen überbrückenden Schlüsselwort zu kombinieren, führt zu einem ungültigen Wert. Zum Beispiel ist `right span-right` ungültig — Sie können nicht das mittlere rechte Rasterfeld auswählen und dann versuchen, weiter nach rechts zu spannen.

### Standardwerte physische Raster-Schlüsselwörter

Wenn nur ein einzelnes physisches Schlüsselwort im `position-area`-Wert spezifiziert ist, wird der andere Wert wie folgt impliziert:

- `left`, `right`, `top` oder `bottom`

  - : Der andere Wert geht implizit von [`span-all`](#span-all_2) aus, wodurch das Element alle drei Kacheln der Spalte oder Reihe überspannt, in der es ursprünglich platziert wurde. Zum Beispiel ist `left` gleichbedeutend mit `left span-all`.

- `center`, `span-left`, `span-right`, `span-top` oder `span-bottom`
  - : Der andere Wert geht von `center` aus. Zum Beispiel ist `span-left` gleichbedeutend mit `center span-left` und `center` ist gleichbedeutend mit `center center`.

## Logische Raster-Schlüsselwörter

Die logischen Raster-Schlüsselwörter spezifizieren einen Bereich des Positionierungsbereichsrasters mit logischen Werten. Mit diesen Werten werden die Position und Richtung von den Einstellungen {{cssxref("writing-mode")}} und {{cssxref("direction")}} beeinflusst, entweder auf dem [enthältenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) eines Elements oder, im Fall der `self`-Schlüsselwörter, auf dem positionierten Element selbst. Es gibt zwei Arten von logischen Schlüsselwörtern: generisch und explizit.

### Allgemeine logische Reihen- und Spaltenschlüsselwörter

Die allgemeinen logischen Schlüsselwörter verwenden dieselben Begriffe für die Inline- und Blockrichtungen, wobei die Richtung durch die Position des Schlüsselbegriffs innerhalb eines Paares von `<position-area>`-Werten bestimmt wird. Der erste Wert definiert die Blockrichtungsposition und der zweite Wert definiert den Inline-Wert. Sie können ein oder zwei Schlüsselbegriffe aus der folgenden Liste angeben. Zwei aus dieser Liste spezifizieren ein einzelnes spezifisches Rasterfeld. Die Schlüsselwortposition oder -richtung ist:

- `start`

  - : Der Anfang der Block- oder Inlinerichtung des Rasters, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `end`

  - : Das Ende der Block- oder Inlinerichtung des Rasters, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `self-start`

  - : Der Anfang der Block- oder Inlinerichtung des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `self-end`

  - : Das Ende der Block- oder Inlinerichtung des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der Blockrichtung des Rasters (wenn dieses Schlüsselwort zuerst angegeben wird) oder Inline-Richtung (wenn dieses Schlüsselwort als zweites angegeben wird).

Zum Beispiel beschreiben `start end` und `self-start self-end` beide die Position am Anfang der Blockrichtung und am Ende der Inlinerichtung. Mit `writing-mode: horizontal-tb` gesetzt, ist dies oben rechts vom Anker, während es mit `writing-mode: vertical-rl` unten rechts vom Anker ist.

#### Allgemeine logische überbrückende Reihen- und Spaltenschlüsselwörter

Die allgemeinen logischen überbrückenden Schlüsselwörter — in Kombination mit einem logischen Reihen- oder Spaltenschlüsselwort — spezifizieren ein zweites Rasterfeld, in das sich der Positionierungsbereich ausdehnen soll. Wenn eine solche Kombination als `position-area`-Eigenschaftswert festgelegt ist, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Reihe oder Spalte platziert, und es spannt sich dann in die durch das überbrückende Schlüsselwort spezifizierte Richtung und erstreckt sich über zwei Rasterfelder:

- `span-start`

  - : Erstreckt sich über das mittlere Feld und das Startfeld der Gitterreihe/-spalte, wobei sich die Richtung auf den Schreibmodus des enthältenden Blocks des Elements bezieht.

- `span-end`

  - : Erstreckt sich über das mittlere Feld und das Endfeld der Gitterreihe/-spalte, wobei sich die Richtung auf den Schreibmodus des enthältenden Blocks des Elements bezieht.

- `span-self-start`

  - : Erstreckt sich über das mittlere Feld und das Startfeld der Gitterreihe/-spalte für den eigenen Schreibmodus des positionierten Elements.

- `span-self-end`
  - : Erstreckt sich über das mittlere Feld und das Endfeld der Gitterreihe/-spalte, berechnet aus dem eigenen Schreibmodus des Elements.

Zum Beispiel spezifizieren `start span-end` und `self-start span-self-end` beide einen Rasterpositionierungsbereich, der im Zentrum der Startblockreihe beginnt und sich über die Kacheln erstreckt, die in dieser Reihe in den Inline-Mitteil- und Endspalten liegen. Mit `writing-mode: horizontal-tb` gesetzt, würde dies über die oberen mittleren und oberen rechten Anker spannen, während es im Modus `writing-mode: vertical-rl` das Element über das rechte mittlere und untere rechte erstrecken würde.

### Explizite inline und block logische Schlüsselwörter

Die expliziten inline- und block-logischen Reihen- und Spaltenschlüsselwörter beziehen sich explizit auf eine Block- (Reihe) oder Inline- (Spalte) Position. Sie können ein Schlüsselwort für die Blockrichtung und eines für die Inlinerichtung angeben, um ein einzelnes spezifisches Rasterfeld auszuwählen. Im Gegensatz zu den generischen logischen Schlüsselwortwerten spielt die Reihenfolge der Schlüsselwörter keine Rolle. Das Deklarieren von zwei Schlüsselwörtern in derselben Achse macht jedoch den Wert ungültig.

- `block-start`

  - : Der Anfang der Blockrichtung des Rasters, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `block-end`

  - : Das Ende der Blockrichtung des Rasters, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `inline-start`

  - : Der Anfang der Inlinerichtung des Rasters, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `inline-end`
  - : Das Ende der Inlinerichtung des Rasters, berechnet aus dem Schreibmodus des enthältenden Blocks.

Zum Beispiel spezifiziert `block-start inline-end` das Feld am Anfang der Blockrichtung und am Ende der Inlinerichtung. Mit `writing-mode: horizontal-tb` gesetzt, wäre dies das Feld oben rechts des Ankers, während es mit `writing-mode: vertical-rl` das Feld unten rechts wäre.

> [!NOTE]
> Die Spezifikation definiert `self`-Äquivalente dieser Schlüsselwörter — `block-self-start`, `block-self-end`, `inline-self-start` und `inline-self-end`. Allerdings werden diese derzeit von keinem Browser unterstützt.

#### Explizite inline und block logische überbrückende Schlüsselwörter

Die expliziten logischen überbrückenden Schlüsselwörter — wenn sie mit einem logischen Reihen- oder Spaltenschlüsselwort kombiniert werden — spezifizieren ein zweites Rasterfeld für den Positionierungsbereich, in das sich das Element ausdehnt. Wenn eine solche Kombination als `position-area`-Eigenschaftswert festgelegt ist, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Reihe oder Spalte, basierend auf dem Schreibmodus des enthältenden Blocks, platziert, und es spannt sich dann in die durch das überbrückende Schlüsselwort spezifizierte Richtung, über zwei Rasterfelder:

- `span-block-start`

  - : Erstreckt sich über das mittlere Feld und das Block-Start-Feld der angegebenen Inline-Spalte.

- `span-block-end`

  - : Erstreckt sich über das mittlere Feld und das Block-End-Feld der angegebenen Inline-Spalte.

- `span-inline-start`

  - : Erstreckt sich über das mittlere Feld und das Inline-Start-Feld der angegebenen Blockreihe.

- `span-inline-end`
  - : Erstreckt sich über das mittlere Feld und das Inline-End-Feld der angegebenen Blockreihe.

Zum Beispiel, `block-end span-inline-start` wählt das mittlere Feld der Endblockreihe und spannt sich über die Felder in dieser Reihe, die in den Inline-Mittel- und Startspalten liegen. Mit `writing-mode: horizontal-tb` gesetzt, würde dies die unteren mittleren und unteren linken Rasterfelder überspannen, während es mit `writing-mode: vertical-rl` die linken mittleren und oberen linken Rasterfelder überspannen würde.

> [!NOTE]
> Die Spezifikation definiert `self`-Äquivalente dieser Schlüsselwörter, z. B. — `span-self-block-start`, `span-self-block-end`, `span-self-inline-start` und `span-self-inline-end`. Diese werden jedoch derzeit von keinem Browser unterstützt.

> [!NOTE]
> Der Versuch, eine Reihen- oder Spaltenschlüsselwort mit einem unangemessenen überbrückenden Schlüsselwort zu kombinieren, führt zu einem ungültigen Eigenschaftswert. Zum Beispiel ist `block-end span-block-end` ungültig — Sie können nicht die mittlere Block-End-Reihe auswählen und dann versuchen, ein Feld weiter über die Block-End-Richtung zu spannen.

### Standardwerte logische Raster-Schlüsselwörter

Wenn nur ein einzelnes logisches `<position-area>`-Schlüsselwort angegeben ist, wird der andere Wert wie folgt impliziert:

- `start`, `end`, `self-start` oder `self-end`

  - : Der andere Wert wird mit demselben Wert wie der erste angegeben, der die Rasterzelle in der Startreihe und -spalte oder der Endreihe und -spalte auswählt.

- `span-start`, `span-self-start`, `span-end`, `span-self-end`

  - : Der andere Wert ist `center`. Zum Beispiel ist `span-start` gleichbedeutend mit `span-start center`.

- `block-start`, `block-end`, `inline-start`, `inline-end`

  - : Der andere Wert ist [`span-all`](#span-all_2), der alle drei Kacheln der Spalte oder Reihe überspannt, in der es ursprünglich platziert wurde. Zum Beispiel ist `block-start` gleichbedeutend mit `block-start span-all`.

- `span-block-start`, `span-block-end`, `span-inline-start`, `span-inline-end`
  - : Der andere Wert ist `center`. Zum Beispiel ist `span-inline-start` gleichbedeutend mit `span-inline-start center`.

## Koordinaten-Raster-Schlüsselwörter

Diese Schlüsselwörter spezifizieren die Zellen des `position-area`-Rasters mit x- und y-Koordinatenwerten. Ihre Position/Richtung wird durch die Einstellungen {{cssxref("writing-mode")}} und/oder {{cssxref("direction")}} beeinflusst, entweder auf einem [enthältenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) eines Elements oder, im Fall der `self`-Schlüsselwörter, auf dem Element selbst.

Allerdings sind die Rasterzellen gemäß den physischen Achsen und nicht den Block-/Inline-Richtungen definiert:

- Für `writing-mode: horizontal-tb` und `vertical-lr` verläuft die x-Achse von links nach rechts und die y-Achse von oben nach unten.
- Bei `writing-mode: horizontal-tb; direction: rtl` und `writing-mode: vertical-rl` verläuft die x-Achse von rechts nach links und die y-Achse von oben nach unten.

Mit den Koordinatenreihen- und -spaltenschlüsselwörtern können Sie ein Schlüsselwort von der x-Achse und eines von der y-Achse auswählen, um ein einzelnes spezifisches Rasterfeld zu definieren.

Die x-Achsen-Schlüsselwörter umfassen:

- `x-start`

  - : Die Startkachel entlang der x-Achse des Rasters, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `x-end`

  - : Die Endkachel entlang der x-Achse des Rasters, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `self-x-start`

  - : Die Startkachel entlang der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `self-x-end`

  - : Die Endkachel entlang der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

Die y-Achsen-Schlüsselwörter umfassen:

- `y-start`

  - : Die Startkachel entlang der y-Achse des Rasters, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `y-end`

  - : Die Endkachel entlang der y-Achse des Rasters, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `self-y-start`

  - : Die Startkachel entlang der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `self-y-end`

  - : Die Endkachel entlang der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

Zum Beispiel wählen `x-end y-start` und `self-x-end self-y-start` beide die Rasterzelle am Ende der x-Achse und am Anfang der y-Achse aus. Mit `writing-mode: horizontal-tb` gesetzt, wäre dies die Zelle oben rechts vom Anker, während es bei `writing-mode: vertical-rl` oben links ist.

### Koordinaten-überbrückende Schlüsselwörter

In Kombination mit einem Koordinatenreihen- oder -spaltenschlüsselwort spezifizieren die koordinatenüberbrückenden Schlüsselwörter ein zweites Rasterfeld für den Positionierungsbereich, in das sich das Element ausdehnen soll. Wenn eine solche Kombination als `position-area`-Eigenschaftswert festgelegt ist, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Reihe oder Spalte platziert, und es spannt sich dann in die durch das überbrückende Schlüsselwort spezifizierte Richtung und erstreckt sich über zwei Rasterfelder:

- `span-x-start`

  - : Erstreckt sich über das mittlere Feld und das x-Start-Feld der angegebenen y-Achsenreihe.

- `span-x-end`

  - : Erstreckt sich über das mittlere Feld und das x-End-Feld der angegebenen y-Achsenreihe.

- `span-y-start`

  - : Erstreckt sich über das mittlere Feld und das y-Start-Feld der angegebenen x-Achsenspalte.

- `span-y-end`
  - : Erstreckt sich über das mittlere Feld und das y-Ende-Feld der angegebenen x-Achsenspalte.

Zum Beispiel selektiert `y-end span-x-end` das Feld in der Mitte der End-y-Reihe und spannt sich über die Felder in dieser Reihe, die in den x-Mittel- und x-Endspalten liegen. Mit `writing-mode: horizontal-tb` gesetzt, würde der Positionierungsbereich des Rasters die unteren mittleren und unteren rechten Rasterfelder überspannen, während er mit `writing-mode: vertical-rl` die unteren mittleren und unteren linken Felder überspannen würde.

> [!NOTE]
> Die Spezifikation definiert keine separaten `self`-koordinatenüberbrückenden Schlüsselwörter, aber diese werden nicht benötigt — die überbrückenden Schlüsselwörter können mit sowohl Koordinatenreihen- als auch -spaltenschlüsselwörtern verwendet werden.

### Standardwerte Koordinaten-Raster-Schlüsselwörter

Wenn nur ein einzelnes Koordinatenraster-`<position-area>`-Schlüsselwort angegeben ist, wird der andere Wert wie folgt impliziert:

- `x-start`, `self-x-start`, `x-end`, `self-x-end`, `y-start`, `self-y-start`, `y-end` oder `self-y-end`

  - : Der andere Wert ist [`span-all`](#span-all_2), wobei die Rasterzellen alle drei Kacheln der Spalte oder Reihe überspannen, in der es ursprünglich platziert wurde. Zum Beispiel ist `x-start` gleichbedeutend mit `x-start span-all`.

- `span-x-start`, `span-x-end`, `span-y-start`, `span-y-end`, `span-self-x-start`, `span-self-x-end`, `span-self-y-end` oder `span-self-y-start`
  - : Der andere Wert geht von `center` aus. Zum Beispiel ist `span-start` gleichbedeutend mit `span-start center`.

## `span-all`

`span-all` ist ein spezielles Schlüsselwort, das mit allen in den obigen Abschnitten aufgeführten Reihen- und Spaltenschlüsselwörtern verwendet werden kann. Wenn Sie zwei Werte angeben — ein Reihen-/Spaltenschlüsselwort und `span-all`, wird das Element in der angegebenen Reihe oder Spalte platziert und spannt sich dann über alle Kacheln in dieser Reihe oder Spalte.

## Beispiele

Siehe die Eigenschaftsseite {{cssxref("position-area")}}.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung siehe die Modul-Startseite [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) und den [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-area")}}
- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- [Funktion `anchor()`](/de/docs/Web/CSS/Reference/Values/anchor)
- [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Ausblenden für Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
