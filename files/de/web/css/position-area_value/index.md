---
title: \<position-area\>
slug: Web/CSS/position-area_value
l10n:
  sourceCommit: 0ed2a2ba4bbaf6840dcc80583b682898d593d0df
---

{{CSSRef}}

Der **`<position-area>`** [CSS](/de/docs/Web/CSS)-[Datentyp](/de/docs/Web/CSS/CSS_Types) definiert die Zelle oder die mehrspannigen Zellen eines **position-area Grids**, ein 3x3 Grid, dessen mittlere Zelle ein Ankerelement ist.

Die `<position-area>` Schlüsselwortwerte können als Wert der {{cssxref("position-area")}}-Eigenschaft gesetzt werden, um ein ankergestütztes Element an einem bestimmten Ort relativ zu seinem zugehörigen Ankerelement zu platzieren.

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

Positionsbereiche basieren auf dem Konzept eines **position-area Grids**, ein 3x3 Raster von Kacheln, das aus vier Rasterlinien besteht, zwei auf jeder Achse, wobei ein Ankerelement die mittlere Kachel ist:

![Das position-area Grid, wie unten beschrieben](position-area.png)

Wenn sie als Wert der `position-area`-Eigenschaft eines positionierten Elements verwendet werden, werden die Abmessungen der mittleren Kachel durch den [enthältenden Block](/de/docs/Web/CSS/Containing_block) des Standardelements des Ankers definiert. Die Abmessungen der äußeren Kante des Grids werden durch den enthältenden Block des positionierten Elements definiert. Logische Schlüsselbegriffe basieren in der Regel auf dem Schreibmodus und der Richtung des enthältenden Blocks, mit Ausnahme der `self-*` Schlüsselbegriffe, die aus dem Schreibmodus des ankergestützten Elements berechnet werden.

Die Rasterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Entsprechungen wie `block-start`, `center` und `block-end` sowie Koordinatenäquivalente — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Entsprechungen wie `inline-start`, `center` und `inline-end` sowie Koordinatenäquivalente — `x-start`, `center` und `x-end`.

`<position-area>` Werte enthalten ein oder zwei Schlüsselwörter, die einen bestimmten Bereich des position-area Grids definieren. Das Setzen eines `position-area`-Werts auf einem positionierten Element platziert seinen enthältenden Block im angegebenen Rasterbereich:

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

Die verschiedenen Schlüsselworttypen, die verwendet werden können, umfassen:

- [Physische Raster-Schlüsselwörter](#physische_raster-schlüsselwörter)
- [Generische logische Reihen- und Spalten-Schlüsselwörter](#generische_logische_reihen-_und_spalten-schlüsselwörter)
- [Explizite Inline- und Block-Logik-Schlüsselwörter](#explizite_inline-_und_block-logik-schlüsselwörter)
- [Koordinaten-Raster-Schlüsselwörter](#koordinaten-raster-schlüsselwörter)

> [!NOTE]
> Im Allgemeinen können Sie keine verschiedenen Typen in einem Wert mischen, z.B. physisch und logisch. Ein solches Vorgehen führt zu ungültigen Werten. Zum Beispiel ist `position-area: bottom inline-end` kein gültiger Wert, da es physische und logische Schlüsselwörter mischt.

## Physische Raster-Schlüsselwörter

Die physischen Raster-Schlüsselwörter spezifizieren eine Zelle oder einen Abschnitt des `position-area`-Grids mit physischen Werten. Diese Werte werden nicht durch {{cssxref("writing-mode")}} oder {{cssxref("direction")}} Einstellungen beeinflusst.

Mit physischen Reihen- und Spalten-Schlüsselwörtern können Sie jeweils ein Schlüsselwort aus den beiden untenstehenden Listen auswählen, um eine einzelne spezifische Rasterkachel auszuwählen:

- `top`, `center` oder `bottom`: Die obere, mittlere oder untere Zeile des Rasters.
- `left`, `center` oder `right`: Die linke, mittlere oder rechte Spalte des Rasters.

Beispielsweise wählt `top left` die Kachel oben links aus, während `center right` die mittlere Kachel der rechten Spalte auswählt.

### Physische Spannungs-Raster-Schlüsselwörter

Die physischen Spannungs-Schlüsselwörter – wenn sie mit einem physischen Reihen- oder Spalten-Schlüsselwort kombiniert werden – spezifizieren eine zweite Rasterkachel, in die sich der Positionsbereich erweitern soll. Wenn eine solche Kombination als Wert der `position-area`-Eigenschaft festgelegt ist, wird ein ausgewähltes Element zunächst in die Mitte der angegebenen Zeile oder Spalte platziert; es breitet sich dann in die Richtung des angegebenen Spannungs-Schlüsselworts aus und spannt zwei Rasterkacheln:

- `span-left`

  - : Umspannt die mittlere Spalte und die linke Spalte des Rasters.

- `span-right`

  - : Umspannt die mittlere Spalte und die rechte Spalte des Rasters.

- `span-top`

  - : Umspannt die mittlere Reihe und die obere Reihe des Rasters.

- `span-bottom`

  - : Umspannt die mittlere Reihe und die untere Reihe des Rasters.

- `span-all`

  - : Gültig mit allen Schlüsselworttypen, überspannt die angegebene Zelle sowie die angrenzenden Zellen in derselben Zeile oder Spalte. Siehe [`span-all`](#span-all_2) unten.

Beispielsweise überspannt `top span-left` die Zellen oben-mitte und oben-links des Rasters.

> [!NOTE]
> Der Versuch, ein Reihen- oder Spalten-Schlüsselwort mit einem unpassenden Spannungs-Schlüsselwort zu paaren, führt zu einem ungültigen Wert. Beispielsweise ist `right span-right` ungültig – Sie können nicht die mittlere-rechte Rasterkachel auswählen und dann versuchen, weiter nach rechts zu spannen.

### Defaults für physische Raster-Schlüsselwörter

Wenn in dem `position-area`-Wert nur ein einzelnes physisches Schlüsselwort angegeben ist, wird der andere Wert wie folgt impliziert:

- `left`, `right`, `top` oder `bottom`

  - : Der andere Wert wird standardmäßig auf [`span-all`](#span-all_2) gesetzt, wodurch das Element alle drei Kacheln des Rasters oder der Reihe spannt, in die es ursprünglich platziert wurde. Zum Beispiel entspricht `left` `left span-all`.

- `center`, `span-left`, `span-right`, `span-top` oder `span-bottom`

  - : Der andere Wert wird standardmäßig auf `center` gesetzt. Zum Beispiel entspricht `span-left` `center span-left` und `center` entspricht `center center`.

## Logische Raster-Schlüsselwörter

Die logischen Raster-Schlüsselwörter spezifizieren einen Bereich des position-area Grids unter Verwendung logischer Werte. Mit diesen Werten werden die Position und Richtung durch die {{cssxref("writing-mode")}} und {{cssxref("direction")}} Einstellungen entweder auf dem [enthältenden Block](/de/docs/Web/CSS/Containing_block) des Elements oder, im Falle der `self` Schlüsselwörter, auf dem positionierten Element selbst beeinflusst. Es gibt zwei Arten logischer Schlüsselwörter; generische und explizite.

### Generische logische Reihen- und Spalten-Schlüsselwörter

Die generischen logischen Schlüsselwörter verwenden dieselben Begriffe für die Inline- und Block-Richtung, wobei die Richtung durch die Position des Schlüsselbegriffs innerhalb eines Paares von `<position-area>` Werten bestimmt wird. Der erste Wert definiert die Block-Richtungsposition und der zweite Wert den Inline-Wert. Sie können ein oder zwei Schlüsselbegriffe aus der folgenden Liste angeben. Die Angabe von zwei dieser Begriffe definiert eine einzige spezifische Rasterkachel. Die Schlüsselwortposition oder Richtung ist:

- `start`

  - : Der Anfang der Block- oder Inline-Richtung des Rasters, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `end`

  - : Das Ende der Block- oder Inline-Richtung des Rasters, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `self-start`

  - : Der Anfang der Block- oder Inline-Richtung des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `self-end`

  - : Das Ende der Block- oder Inline-Richtung des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`

  - : Das Zentrum der Block-Richtung des Rasters (wenn dieses Schlüsselwort zuerst angegeben wird) oder der Inline-Richtung (wenn dieses Schlüsselwort als zweites angegeben wird).

Zum Beispiel beschreiben `start end` und `self-start self-end` beide die Position am Anfang der Block-Richtung und am Ende der Inline-Richtung. Mit `writing-mode: horizontal-tb` ist dies oben rechts des Ankerelements, während es mit `writing-mode: vertical-rl` unten rechts des Ankers ist.

#### Generische logische Spannungs-Reihen- und Spalten-Schlüsselwörter

Die generischen logischen Spannungs-Schlüsselwörter – wenn sie mit einem logischen Reihen- oder Spalten-Schlüsselwort kombiniert werden – spezifizieren eine zweite Rasterkachel, in die der Positionsbereich expandieren soll. Wenn eine solche Kombination als Wert der `position-area`-Eigenschaft festgelegt ist, wird ein ausgewähltes Element zunächst in die Mitte der angegebenen Zeile oder Spalte platziert und breitet sich dann in die Richtung des angegebenen Spannungs-Schlüsselworts aus, wobei zwei Rasterkacheln gespannt werden:

- `span-start`

  - : Umspannt die mittlere Kachel und die Startkachel der Rasterreihe/-spalte, wobei die Richtung auf den Schreibmodus des enthältenden Blocks des Elements verweist.

- `span-end`

  - : Umspannt die mittlere Kachel und die Endkachel der Rasterreihe/-spalte, wobei die Richtung auf den Schreibmodus des enthältenden Blocks des Elements verweist.

- `span-self-start`

  - : Umspannt die mittlere Kachel und die Startkachel der Rasterreihe/-spalte für den eigenen Schreibmodus des positionierten Elements.

- `span-self-end`

  - : Umspannt die mittlere Kachel und die Endkachel der Rasterreihe/-spalte, berechnet aus dem eigenen Schreibmodus des Elements.

Beispielsweise spezifizieren `start span-end` und `self-start span-self-end` beide einen Rasterpositionsbereich, der in der Mitte der Start-Blockreihe beginnt und über die Kacheln in dieser Reihe spannt, die in der Inline-Mitte und Endspalten liegen. Mit `writing-mode: horizontal-tb` würde dies über die oberen Mitte und obere rechte des Ankers spannen, während es mit `writing-mode: vertical-rl` das Element über die rechte Mitte und untere rechte spannt.

### Explizite Inline- und Block-Logik-Schlüsselwörter

Die expliziten Inline- und Block-Logik-Reihen- und Spalten-Schlüsselwörter beziehen sich ausdrücklich auf eine Block-(Zeilen-) oder Inline-(Spalten-)Position. Sie können ein Schlüsselwort für die Block-Richtung und eines für die Inline-Richtung angeben, um eine einzelne spezifische Rasterkachel auszuwählen. Im Gegensatz zu generischen logischen Schlüsselwortwerten spielt die Reihenfolge der Schlüsselwörter keine Rolle. Das Deklarieren von zwei Schlüsselwörtern auf derselben Achse macht jedoch den Wert ungültig.

- `block-start`

  - : Der Anfang der Block-Richtung des Rasters berechnet aus dem Schreibmodus des enthältenden Blocks.

- `block-end`

  - : Das Ende der Block-Richtung des Rasters berechnet aus dem Schreibmodus des enthältenden Blocks.

- `inline-start`

  - : Der Anfang der Inline-Richtung des Rasters berechnet aus dem Schreibmodus des enthältenden Blocks.

- `inline-end`

  - : Das Ende der Inline-Richtung des Rasters berechnet aus dem Schreibmodus des enthältenden Blocks.

Zum Beispiel spezifiziert `block-start inline-end` die Kachel am Anfang der Block-Richtung und am Ende der Inline-Richtung. Mit `writing-mode: horizontal-tb` wäre dies die Kachel oben rechts des Ankers, während es mit `writing-mode: vertical-rl` die Kachel unten rechts wäre.

> [!NOTE]
> Die Spezifikation definiert `self`-Äquivalente dieser Schlüsselwörter — `block-self-start`, `block-self-end`, `inline-self-start` und `inline-self-end`. Diese werden jedoch derzeit in keinem Browser unterstützt.

#### Explizite Inline- und Block-Logik-Spannungs-Schlüsselwörter

Die expliziten logischen Spannungs-Schlüsselwörter – wenn sie mit einem logischen Reihen- oder Spalten-Schlüsselwort kombiniert werden – spezifizieren eine zweite Rasterkachel, in die sich der Positionsbereich erweitern soll. Wenn eine solche Kombination als Wert der `position-area`-Eigenschaft festgelegt ist, wird ein ausgewähltes Element zunächst in die Mitte der angegebenen Zeile oder Spalte basierend auf dem Schreibmodus des enthältenden Blocks platziert, und es breitet sich dann in die Richtung des angegebenen Spannungs-Schlüsselworts aus, wobei zwei Rasterkacheln gespannt werden:

- `span-block-start`

  - : Umspannt die mittlere Kachel und die Block-Startkachel der angegebenen Inline-Spalte.

- `span-block-end`

  - : Umspannt die mittlere Kachel und die Block-Endkachel der angegebenen Inline-Spalte.

- `span-inline-start`

  - : Umspannt die mittlere Kachel und die Inline-Startkachel der angegebenen Block-Reihe.

- `span-inline-end`

  - : Umspannt die mittlere Kachel und die Inline-Endkachel der angegebenen Block-Reihe.

Zum Beispiel wählt `block-end span-inline-start` die mittlere Kachel der End-Blockreihe aus und spannt über die Kacheln in dieser Reihe, die in der Inline-Mitte und Startspalten liegen. Mit `writing-mode: horizontal-tb` würde dies die Kacheln unten-mitte und unten-links des Grids spannen, während es mit `writing-mode: vertical-rl` die Kacheln links-mitte und oben-links spannen würde.

> [!NOTE]
> Die Spezifikation definiert `self`-Äquivalente dieser Schlüsselwörter, z.B. — `span-self-block-start`, `span-self-block-end`, `span-self-inline-start` und `span-self-inline-end`. Diese werden jedoch derzeit in keinem Browser unterstützt.

> [!NOTE]
> Der Versuch, ein Reihen- oder Spalten-Schlüsselwort mit einem unpassenden Spannungs-Schlüsselwort zu paaren, führt zu einem ungültigen Eigenschaftswert. Zum Beispiel ist `block-end span-block-end` ungültig – Sie können nicht die mittlere Block-Endreihe auswählen und dann versuchen, eine weitere Kachel über die Block-Endrichtung hinaus zu spannen.

### Defaults für logische Raster-Schlüsselwörter

Wenn nur ein einzelnes logisches `<position-area>` Schlüsselwort angegeben ist, wird der andere Wert wie folgt impliziert:

- `start`, `end`, `self-start` oder `self-end`

  - : Der andere Wert wird standardmäßig auf denselben Wert wie der erste Wert gesetzt, wodurch die Rasterzelle am Start der Reihe und Spalte oder am Ende der Reihe und Spalte ausgewählt wird.

- `span-start`, `span-self-start`, `span-end`, `span-self-end`

  - : Der andere Wert wird standardmäßig auf `center` gesetzt. Beispielsweise entspricht `span-start` `span-start center`.

- `block-start`, `block-end`, `inline-start`, `inline-end`

  - : Der andere Wert wird standardmäßig auf [`span-all`](#span-all_2) gesetzt, wodurch alle drei Kacheln der festgelegten Spalte oder Reihe gespannt werden. Beispielsweise entspricht `block-start` `block-start span-all`.

- `span-block-start`, `span-block-end`, `span-inline-start`, `span-inline-end`

  - : Der andere Wert wird standardmäßig auf `center` gesetzt. Beispielsweise entspricht `span-inline-start` `span-inline-start center`.

## Koordinaten-Raster-Schlüsselwörter

Diese Schlüsselwörter spezifizieren die Zellen des `position-area` Grids unter Verwendung von x- und y-Koordinatenwerten. Seine Position/Richtung wird von den {{cssxref("writing-mode")}}- und/oder {{cssxref("direction")}}-Einstellungen entweder auf dem [enthältenden Block](/de/docs/Web/CSS/Containing_block) eines Elements oder, im Falle der `self`-Schlüsselwörter, dem Element selbst beeinflusst.

Die Rasterzellen werden jedoch gemäß den physischen Achsen statt der Block/Inline-Richtungen definiert:

- Bei `writing-mode: horizontal-tb` und `vertical-lr` verläuft die x-Achse von links nach rechts und die y-Achse von oben nach unten.
- Bei `writing-mode: horizontal-tb; direction: rtl` und `writing-mode: vertical-rl` verläuft die x-Achse von rechts nach links und die y-Achse von oben nach unten.

Mit Koordinaten-Reihen- und Spalten-Schlüsselwörtern können Sie ein Schlüsselwort von der x-Achse und eines von der y-Achse angeben, um eine einzelne spezifische Rasterkachel zu definieren.

Die Schlüsselwörter der x-Achse umfassen:

- `x-start`

  - : Die Startkachel entlang der x-Achse des Rasters, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `x-end`

  - : Die Endkachel entlang der x-Achse des Rasters, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `x-self-start`

  - : Die Startkachel entlang der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `x-self-end`

  - : Die Endkachel entlang der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`

  - : Das Zentrum der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

Die Schlüsselwörter der y-Achse umfassen:

- `y-start`

  - : Die Startkachel entlang der y-Achse des Rasters, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `y-end`

  - : Die Endkachel entlang der y-Achse des Rasters, berechnet aus dem Schreibmodus des enthältenden Blocks.

- `y-self-start`

  - : Die Startkachel entlang der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `y-self-end`

  - : Die Endkachel entlang der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`

  - : Das Zentrum der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

Zum Beispiel wählen `x-end y-start` und `x-self-end y-self-start` beide die Rasterzelle am Ende der x-Achse und am Anfang der y-Achse aus. Mit `writing-mode: horizontal-tb` wäre dies die Zelle oben rechts des Ankers, während es mit `writing-mode: vertical-rl` oben links ist.

### Koordinaten-Spannungs-Schlüsselwörter

Wenn sie mit einem Koordinaten-Reihen- oder Spalten-Schlüsselwort kombiniert werden, spezifizieren die Koordinaten-Spannungs-Schlüsselwörter eine zweite Rasterkachel, in die sich der Positionsbereich erweitern soll. Wenn eine solche Kombination als Wert der `position-area`-Eigenschaft festgelegt ist, wird ein ausgewähltes Element zunächst in die Mitte der angegebenen Zeile oder Spalte platziert und breitet sich dann in die Richtung des angegebenen Spannungs-Schlüsselworts aus, wobei zwei Rasterkacheln gespannt werden:

- `span-x-start`

  - : Umspannt die mittlere Kachel und die x-Startkachel der angegebenen y-Achsenreihe.

- `span-x-end`

  - : Umspannt die mittlere Kachel und die x-Endkachel der angegebenen y-Achsenreihe.

- `span-y-start`

  - : Umspannt die mittlere Kachel und die y-Startkachel der angegebenen x-Achsenspalte.

- `span-y-end`

  - : Umspannt die mittlere Kachel und die y-Endkachel der angegebenen x-Achsenspalte.

Zum Beispiel wählt `y-end span-x-end` die mittlere Kachel der End-y-Reihe aus und spannt über die Kacheln in dieser Reihe, die in der Inline-Mitte und Endspalten liegen. Mit `writing-mode: horizontal-tb` würde der Positionsrasterbereich über die Kacheln unten-mitte und unten-rechts spannen, während es mit `writing-mode: vertical-rl` die Kacheln unten-mitte und unten-links spannt.

> [!NOTE]
> Die Spezifikation definiert keine separaten Koordinaten-`self`-Spannungsschlüsselwörter, aber diese sind nicht nötig – die Spannungs-Schlüsselwörter können mit sowohl Koordinaten-Reihen- als auch Spalten-Schlüsselwörtern verwendet werden.

### Defaults für Koordinaten-Raster-Schlüsselwörter

Wenn nur ein einzelnes Koordinaten-Raster-`<position-area>` Schlüsselwort angegeben ist, wird der andere Wert wie folgt impliziert:

- `x-start`, `x-self-start`, `x-end`, `x-self-end`, `y-start`, `y-self-start`, `y-end` oder `y-self-end`

  - : Der andere Wert wird standardmäßig auf [`span-all`](#span-all_2) gesetzt, wodurch die Rasterkacheln über alle drei Kacheln der Spalte oder Reihe, in die es ursprünglich gesetzt wurde, ausgewählt werden. Beispielsweise entspricht `x-start` `x-start span-all`.

- `span-x-start`, `span-x-end`, `span-y-start` oder `span-y-end`

  - : Der andere Wert wird standardmäßig auf `center` gesetzt. Zum Beispiel entspricht `span-start` `span-start center`.

## `span-all`

`span-all` ist ein spezielles Schlüsselwort, das mit allen der oben aufgeführten Reihen- und Spalten-Schlüsselwörter verwendbar ist. Wenn Sie zwei Werte angeben — ein Reihen-/Spalten-Schlüsselwort und `span-all`, wird das Element in die angegebene Reihe oder Spalte gesetzt und dehnt sich dann über alle Kacheln in dieser Reihe oder Spalte aus.

## Beispiele

Siehe die {{cssxref("position-area")}} Eigentumsseite.

Für detaillierte Informationen zu Ankerfunktionen und -verwendung siehe die [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und den [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-area")}}
- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- [`anchor()`](/de/docs/Web/CSS/anchor) Funktion
- [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Umgang mit Überlauf: Versuchen Sie Fallbacks und Bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
