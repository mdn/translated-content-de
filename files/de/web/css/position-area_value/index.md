---
title: <position-area>
slug: Web/CSS/position-area_value
l10n:
  sourceCommit: 839c5e88a078deead1bcf1b2837d05499cb859b1
---

{{CSSRef}}{{SeeCompatTable}}

Der **`<position-area>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) definiert die Zelle oder die überspannten Zellen eines **position-area Rasters**, ein 3x3 Raster, dessen mittlere Zelle ein Ankerelement ist.

Die `<position-area>` Schlüsselwortwerte können als Wert der {{cssxref("position-area")}} Eigenschaft gesetzt werden, um ein Anker-Positionselement an einem bestimmten Ort relativ zu seinem zugehörigen Ankerelement zu platzieren.

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

Positionsflächen basieren auf dem Konzept eines **position-area Rasters**, ein 3x3 Raster von Kacheln, bestehend aus vier Rasterlinien, zwei auf jeder Achse, wobei ein Ankerelement die mittlere Kachel ist:

![Das position-area Raster, wie unten beschrieben](position-area.png)

Wenn sie als Wert der `position-area` Eigenschaft eines positionierten Elements verwendet werden, werden die Dimensionen der mittleren Kachel durch den [umfassenden Block](/de/docs/Web/CSS/Containing_block) des Standardankerelements des Elements definiert. Die Dimensionen des äußeren Randes des Rasters werden durch den umfassenden Block des positionierten Elements definiert. Logische Schlüsselbegriffe basieren im Allgemeinen auf dem Schreibmodus und der Richtung des umfassenden Blocks, mit Ausnahme der `self-*` Schlüsselbegriffe, die aus dem Schreibmodus des Anker-Positionselements berechnet werden.

Die Rasterkacheln sind in Reihen und Spalten aufgeteilt:

- Die drei Reihen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Äquivalente wie `block-start`, `center` und `block-end`, sowie Koordinatenäquivalente — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `inline-start`, `center` und `inline-end`, sowie Koordinatenäquivalente — `x-start`, `center` und `x-end`.

`<position-area>` Werte enthalten ein oder zwei Schlüsselwörter, die einen bestimmten Bereich des position-area Rasters definieren. Das Setzen eines `position-area` Wertes auf ein positioniertes Element platziert seinen umfassenden Block im angegebenen Rasterbereich:

```css
/* Beispiele: Zwei Schlüsselwörter, um das Element in einer einzelnen spezifischen Kachel zu platzieren */
position-area: top left;
position-area: bottom right;
position-area: start end;
position-area: center end;
position-area: block-start center;
position-area: inline-start block-end;
position-area: x-start y-end;
position-area: center y-self-end;

/* Beispiele: Zwei Schlüsselwörter, um das Element über zwei Kacheln hinweg zu spannen */
position-area: top span-left;
position-area: span-bottom right;
position-area: center span-start;
position-area: inline-start span-block-end;
position-area: y-start span-x-end;

/* Beispiele: Zwei Schlüsselwörter, um das Element über drei Kacheln hinweg zu spannen */
position-area: top span-all;
position-area: block-end span-all;
position-area: x-self-start span-all;

/* Beispiele: Ein Schlüsselwort mit einem impliziten zweiten Schlüsselwort */
position-area: top; /* Entspricht: top span-all */
position-area: inline-start; /* Entspricht: inline-start span-all */
position-area: center; /* Entspricht: center center */
position-area: span-all; /* Entspricht: center center */
position-area: start; /* Entspricht: start start */
position-area: end; /* Entspricht: end end */
```

Die verschiedenen Arten von Schlüsselwörtern, die verwendet werden können, umfassen:

- [Physische Raster-Schlüsselwörter](#physische_raster-schlüsselwörter)
- [Allgemeine logische Reihen- und Spalten-Schlüsselwörter](#allgemeine_logische_reihen-_und_spaltenschlüsselwörter)
- [Explizite Inline- und Blocklogische Schlüsselwörter](#explizite_inline-_und_blocklogische_schlüsselwörter)
- [Koordinaten-Raster-Schlüsselwörter](#koordinaten-raster-schlüsselwörter)

> [!NOTE]
> Im Allgemeinen können Sie nicht verschiedene Arten innerhalb eines Wertes mischen, z.B. physisch und logisch. Dies führt zu ungültigen Werten. Zum Beispiel ist `position-area: bottom inline-end` kein gültiger Wert, da es physische und logische Schlüsselwörter mischt.

## Physische Raster-Schlüsselwörter

Die physischen Raster-Schlüsselwörter spezifizieren eine Zelle oder einen Abschnitt des `position-area` Rasters, indem sie physische Werte verwenden. Diese Werte werden nicht von {{cssxref("writing-mode")}} oder {{cssxref("direction")}} Einstellungen beeinflusst.

Mit physischen Reihen- und Spaltenschlüsselwörtern können Sie ein Schlüsselwort aus jeder der beiden untenstehenden Listen auswählen, um eine einzige spezifische Rasterkachel auszuwählen:

- `top`, `center` oder `bottom`: Die oberste, mittlere oder untere Reihe des Rasters.
- `left`, `center` oder `right`: Die linke, mittlere oder rechte Spalte des Rasters.

Beispielsweise wählt `top left` die Kachel oben links, während `center right` die mittlere Kachel der rechten Spalte auswählt.

### Physische Überlappung von Raster-Schlüsselwörtern

Die physischen Überlappungsschlüsselwörter — kombiniert mit einem physischen Reihen- oder Spaltenschlüsselwort — spezifizieren eine zweite Rasterkachel, in die sich der Positionsbereich ausdehnt. Bei einer solchen Kombination, die als `position-area` Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in die Mitte der angegebenen Reihe oder Spalte platziert; es spannt sich dann in die Richtung aus, die im Überlappungsschlüsselwort angegeben ist, und erstreckt sich über zwei Rasterkacheln:

- `span-left`

  - Spannt die mittlere Spalte und die linke Spalte des Rasters.

- `span-right`

  - Spannt die mittlere Spalte und die rechte Spalte des Rasters.

- `span-top`

  - Spannt die mittlere Reihe und die obere Reihe des Rasters.

- `span-bottom`

  - Spannt die mittlere Reihe und die untere Reihe des Rasters.

- `span-all`

  - Ist für alle Schlüsselworttypen gültig und erstreckt sich über die Zelle, die aufgeführt ist, sowie über die angrenzenden Zellen in derselben Reihe oder Spalte. Siehe [`span-all`](#span-all_2) unten.

Zum Beispiel, `top span-left` überlappt die Zellen oben-mitte und oben-links des Rasters.

> [!NOTE]
> Der Versuch, ein Reihen- oder Spaltenschlüsselwort mit einem unpassenden Überlappungsschlüsselwort zu paaren, führt zu einem ungültigen Wert. Zum Beispiel ist `right span-right` ungültig — man kann nicht die mittlere rechte Rasterkachel auswählen und dann weiter nach rechts überlappen.

### Standardwerte für physische Raster-Schlüsselwörter

Wenn nur ein einziges physisches Schlüsselwort im `position-area` Wert angegeben wird, wird der andere Wert wie folgt impliziert:

- `left`, `right`, `top` oder `bottom`

  - Der andere Wert standardisiert sich auf [`span-all`](#span-all_2), was dazu führt, dass das Element alle drei Kacheln der Reihe oder des Spaltenr des Raster, in die es ursprünglich platziert wurde, überspannt. Zum Beispiel entspricht `left` der Angabe von `left span-all`.

- `center`, `span-left`, `span-right`, `span-top` oder `span-bottom`

  - Der andere Wert standardisiert sich auf `center`. Zum Beispiel entspricht `span-left` der Angabe von `center span-left`, und `center` entspricht der Angabe von `center center`.

## Logische Raster-Schlüsselwörter

Die logischen Raster-Schlüsselwörter spezifizieren einen Bereich des position-area Rasters unter Verwendung logischer Werte. Mit diesen Werten werden die Position und die Richtung durch die {{cssxref("writing-mode")}} und {{cssxref("direction")}} Einstellungen auf dem umfassenden Block des Elements oder, im Fall von `self` Schlüsselwörtern, dem positionierten Element selbst beeinflusst. Es gibt zwei Arten von logischen Schlüsselwörtern: allgemein und explizit.

### Allgemeine logische Reihen- und Spaltenschlüsselwörter

Die allgemeinen logischen Schlüsselwörter verwenden dieselben Begriffe für die Inline- und Block-Richtungen, wobei die Richtung durch die Position des Schlüsselbegriffs innerhalb eines Paares von `<position-area>` Werten bestimmt wird. Der erste Wert definiert die Position der Blockrichtung und der zweite definiert den Inline-Wert. Sie können ein oder zwei Schlüsselbegriffe aus der folgenden Liste angeben. Die Angabe von zwei aus dieser Liste definiert eine einzige spezifische Rasterkachel. Die Schlüsselwortposition oder -richtung ist:

- `start`

  - Der Anfang der Block- oder Inline-Richtung des Rasters, berechnet aus dem Schreibmodus des umfassenden Blocks.

- `end`

  - Das Ende der Block- oder Inline-Richtung des Rasters, berechnet aus dem Schreibmodus des umfassenden Blocks.

- `self-start`

  - Der Anfang der Block- oder Inline-Richtung des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `self-end`

  - Das Ende der Block- oder Inline-Richtung des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`

  - Die Mitte der Blockrichtung des Rasters (wenn dieses Schlüsselwort zuerst angegeben ist) oder die Inline-Richtung (wenn dieses Schlüsselwort als zweites angegeben ist).

Zum Beispiel beschreiben sowohl `start end` als auch `self-start self-end` die Position am Anfang der Blockrichtung und am Ende der Inline-Richtung. Bei `writing-mode: horizontal-tb` ist dies oben rechts im Ankerelement, während es bei `writing-mode: vertical-rl` unten rechts ist.

#### Allgemeine logische überlappende Reihen- und Spaltenschlüsselwörter

Die allgemeinen logischen überlappenden Schlüsselwörter — kombiniert mit einem logischen Reihen- oder Spaltenschlüsselwort — spezifizieren eine zweite Rasterkachel, in die sich der Positionsbereich ausdehnt. Bei einer solchen Kombination, die als `position-area` Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in die Mitte der angegebenen Reihe oder Spalte platziert, und es erstreckt sich dann in die Richtung, die im überlappenden Schlüsselwort angegeben ist, und erstreckt sich über zwei Rasterkacheln:

- `span-start`

  - Spannt die mittlere Kachel und die Startkachel der Rasterreihe/-spalte, wobei die Richtung sich auf den Schreibmodus des umfassenden Blocks des Elements bezieht.

- `span-end`

  - Spannt die mittlere Kachel und die Endkachel der Rasterreihe/-spalte, wobei die Richtung sich auf den Schreibmodus des umfassenden Blocks des Elements bezieht.

- `span-self-start`

  - Spannt die mittlere Kachel und die Startkachel der Rasterreihe/-spalte für den eigenen Schreibmodus des positionierten Elements.

- `span-self-end`

  - Spannt die mittlere Kachel und die Endkachel der Rasterreihe/-spalte, berechnet aus dem eigenen Schreibmodus des Elements.

Zum Beispiel spezifizieren sowohl `start span-end` als auch `self-start span-self-end` einen Positionsbereich des Rasters, der in der Mitte der Start-Blockreihe beginnt und die Kacheln in dieser Reihe, die sich in der Inline-Mitte und den Endspalten befinden, umfasst. Bei `writing-mode: horizontal-tb` würde dies über die obere Mitte und oben rechts des Ankers hinwegspannen, während es bei `writing-mode: vertical-rl` das Element über die rechte Mitte und unten rechts umfassen würde.

### Explizite Inline- und Blocklogische Schlüsselwörter

Die expliziten Inline- und Blocklogischen Reihen- und Spaltenschlüsselwörter beziehen sich explizit auf eine Block- (Reihen-) oder Inline- (Spalten-) Position. Sie können ein Schlüsselwort für die Blockrichtung und eins für die Inline-Richtung angeben, um eine einzige spezifische Rasterkachel auszuwählen. Im Gegensatz zu allgemeinen logischen Schlüsselwortwerten spielt die Reihenfolge der Schlüsselwörter keine Rolle. Aber das Deklarieren von zwei Schlüsselwörtern in derselben Achse macht den Wert ungültig.

- `block-start`

  - Der Beginn der Blockrichtung des Rasters, berechnet aus dem Schreibmodus des umfassenden Blocks.

- `block-end`

  - Das Ende der Blockrichtung des Rasters, berechnet aus dem Schreibmodus des umfassenden Blocks.

- `inline-start`

  - Der Beginn der Inlinerichtung des Rasters, berechnet aus dem Schreibmodus des umfassenden Blocks.

- `inline-end`

  - Das Ende der Inlinerichtung des Rasters, berechnet aus dem Schreibmodus des umfassenden Blocks.

Zum Beispiel spezifiziert `block-start inline-end` die Kachel am Anfang der Blockrichtung und am Ende der Inline-Richtung. Bei `writing-mode: horizontal-tb` wäre dies die Kachel oben rechts des Ankers, während es bei `writing-mode: vertical-rl` die Kachel unten rechts wäre.

> [!NOTE]
> Die Spezifikation definiert `self`-Äquivalente dieser Schlüsselwörter — `block-self-start`, `block-self-end`, `inline-self-start`, und `inline-self-end`. Diese werden jedoch derzeit in keinem Browser unterstützt.

#### Explizite Inline- und Blocklogische überlappende Schlüsselwörter

Die expliziten logischen überlappenden Schlüsselwörter — kombiniert mit einem logischen Reihen- oder Spaltenschlüsselwort — spezifizieren eine zweite Rasterkachel, in die sich der Positionsbereich ausdehnt. Bei einer solchen Kombination, die als `position-area` Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in die Mitte der angegebenen Reihe oder Spalte platziert, basierend auf dem Schreibmodus des umfassenden Blocks, und es erstreckt sich dann in die Richtung, die im überlappenden Schlüsselwort angegeben ist, und erstreckt sich über zwei Rasterkacheln:

- `span-block-start`

  - Spannt die mittlere Kachel und die Block-Startkachel der angegebenen Inline-Spalte.

- `span-block-end`

  - Spannt die mittlere Kachel und die Block-Endkachel der angegebenen Inline-Spalte.

- `span-inline-start`

  - Spannt die mittlere Kachel und die Inline-Startkachel der angegebenen Blockreihe.

- `span-inline-end`

  - Spannt die mittlere Kachel und die Inline-Endkachel der angegebenen Blockreihe.

Zum Beispiel wählt `block-end span-inline-start` die mittlere Kachel der Endblockreihe aus und erstreckt sich über die Kacheln in dieser Reihe, die sich in der Inline-Mitte und den Anfangsspalten befinden. Bei `writing-mode: horizontal-tb` würde dies die unteren mittleren und unteren linken Gitterkacheln umfassen, während bei `writing-mode: vertical-rl` die linken mittleren und oberen linken Gitterkacheln überspannt würden.

> [!NOTE]
> Die Spezifikation definiert `self`-Äquivalente dieser Schlüsselwörter, z.B. — `span-self-block-start`, `span-self-block-end`, `span-self-inline-start` und `span-self-inline-end`. Diese werden jedoch derzeit in keinem Browser unterstützt.

> [!NOTE]
> Der Versuch, ein Reihen- oder Spaltenschlüsselwort mit einem unpassenden Überlappungsschlüsselwort zu paaren, führt zu einem ungültigen Eigenschaftswert. Zum Beispiel ist `block-end span-block-end` ungültig — man kann nicht die Mitte der Block-Endreihe auswählen und dann versuchen, eine Kachel weiter über das Block-Ende hinaus zu spannen.

### Standardwerte für logische Raster-Schlüsselwörter

Wenn nur ein einzelnes logisches `<position-area>` Schlüsselwort angegeben wird, wird der andere Wert wie folgt impliziert:

- `start`, `end`, `self-start` oder `self-end`

  - Der andere Wert standardisiert sich auf denselben Wert wie der erste Wert und wählt die Rasterzelle in der Startreihe und -spalte oder der Endreihe und -spalte.

- `span-start`, `span-self-start`, `span-end`, `span-self-end`

  - Der andere Wert standardisiert sich auf `center`. Zum Beispiel entspricht `span-start` der Angabe von `span-start center`.

- `block-start`, `block-end`, `inline-start`, `inline-end`

  - Der andere Wert standardisiert sich auf [`span-all`](#span-all_2), was dazu führt, dass alle drei Kacheln der Spalte oder Reihe, in die das Element ursprünglich gesetzt wurde, überspannt werden. Zum Beispiel entspricht `block-start` der Angabe von `block-start span-all`.

- `span-block-start`, `span-block-end`, `span-inline-start`, `span-inline-end`

  - Der andere Wert standardisiert sich auf `center`. Zum Beispiel entspricht `span-inline-start` der Angabe von `span-inline-start center`.

## Koordinaten-Raster-Schlüsselwörter

Diese Schlüsselwörter spezifizieren die Zellen des `position-area` Rasters unter Verwendung von x- und y-Koordinatenwerten. Ihre Position/Richtung wird von {{cssxref("writing-mode")}} und/oder {{cssxref("direction")}} Einstellungen entweder auf dem umfassenden Block eines Elements oder, im Fall der `self` Schlüsselwörter, dem Element selbst beeinflusst.

Jedoch werden die Rasterzellen gemäß physischen Achsen anstelle von Block-/Inlinerichtungen definiert:

- Für `writing-mode: horizontal-tb` und `vertical-lr` verläuft die x-Achse von links nach rechts und die y-Achse von oben nach unten.
- Für `writing-mode: horizontal-tb; direction: rtl` und `writing-mode: vertical-rl` verläuft die x-Achse von rechts nach links und die y-Achse von oben nach unten.

Mit Koordinaten-Reihen- und Spaltenschlüsselwörtern können Sie ein Schlüsselwort von der x-Achse und eines von der y-Achse angeben, um eine einzige spezifische Rasterkachel zu definieren.

Die x-Achsen-Schlüsselwörter umfassen:

- `x-start`

  - Die Startkachel entlang der x-Achse des Rasters, berechnet aus dem Schreibmodus des umfassenden Blocks.

- `x-end`

  - Die Endkachel entlang der x-Achse des Rasters, berechnet aus dem Schreibmodus des umfassenden Blocks.

- `x-self-start`

  - Die Startkachel entlang der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `x-self-end`

  - Die Endkachel entlang der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`

  - Die Mitte der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

Die y-Achsen-Schlüsselwörter umfassen:

- `y-start`

  - Die Startkachel entlang der y-Achse des Rasters, berechnet aus dem Schreibmodus des umfassenden Blocks.

- `y-end`

  - Die Endkachel entlang der y-Achse des Rasters, berechnet aus dem Schreibmodus des umfassenden Blocks.

- `y-self-start`

  - Die Startkachel entlang der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `y-self-end`

  - Die Endkachel entlang der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`

  - Die Mitte der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

Zum Beispiel wählen sowohl `x-end y-start` als auch `x-self-end y-self-start` die Rasterzelle am Ende der x-Achse und am Anfang der y-Achse aus. Bei `writing-mode: horizontal-tb` wäre dies die Zelle oben rechts im Anker, während es bei `writing-mode: vertical-rl` oben links wäre.

### Überlappung von Koordinatenschlüsselwörtern

Wenn sie mit einem Koordinaten-Reihen- oder Spaltenschlüsselwort kombiniert werden, spezifizieren die überlappenden Koordinatenschlüsselwörter eine zweite Rasterkachel, in die sich der Positionsbereich ausdehnt. Bei einer solchen Kombination, die als `position-area` Eigenschaftswert gesetzt wird, wird ein ausgewähltes Element zunächst in die Mitte der angegebenen Reihe oder Spalte platziert, und es erstreckt sich dann in die Richtung, die im überlappenden Schlüsselwort angegeben ist, und erstreckt sich über zwei Rasterkacheln:

- `span-x-start`

  - Spannt die mittlere Kachel und die x-Startkachel der angegebenen y-Achsenreihe.

- `span-x-end`

  - Spannt die mittlere Kachel und die x-Endkachel der angegebenen y-Achsenreihe.

- `span-y-start`

  - Spannt die mittlere Kachel und die y-Startkachel der angegebenen x-Achsenspalte.

- `span-y-end`

  - Spannt die mittlere Kachel und die y-Endkachel der angegebenen x-Achsenspalte.

Zum Beispiel wählt `y-end span-x-end` die Kachel in der Mitte der End-y-Reihe aus und erstreckt sich über die Kacheln in dieser Reihe, die sich in der x-Mitte und x-Endspalten befinden. Bei `writing-mode: horizontal-tb` würde der Positionsrasterbereich die Rasterkacheln unten-mitte und unten-rechts umfassen, während bei `writing-mode: vertical-rl` die Kacheln unten-mitte und unten-links überspannt würden.

> [!NOTE]
> Die Spezifikation definiert keine separaten überlappenden `self` Koordinatenschlüsselwörter, aber diese sind nicht erforderlich — die überlappenden Schlüsselwörter können mit beiden Koordinaten-Reihen- und Spaltenschlüsselwörtern verwendet werden.

### Standardwerte für Koordinaten Raster-Schlüsselwörter

Wenn nur ein einzelnes Koordinaten-Raster-`<position-area>` Schlüsselwort angegeben wird, wird der andere Wert wie folgt impliziert:

- `x-start`, `x-self-start`, `x-end`, `x-self-end`, `y-start`, `y-self-start`, `y-end` oder `y-self-end`

  - Der andere Wert standardisiert sich auf [`span-all`](#span-all_2), wodurch die Rasterkacheln alle drei Kacheln der Spalte oder Reihe umfassen, in die es ursprünglich gesetzt wurde. Zum Beispiel entspricht `x-start` der Angabe von `x-start span-all`.

- `span-x-start`, `span-x-end`, `span-y-start` oder `span-y-end`

  - Der andere Wert standardisiert sich auf `center`. Zum Beispiel entspricht `span-start` der Angabe von `span-start center`.

## `span-all`

`span-all` ist ein spezielles Schlüsselwort, das mit allen oben in den Abschnitten aufgelisteten Reihen- und Spaltenschlüsselwörtern verwendet werden kann. Wenn Sie zwei Werte angeben — ein Reihen-/Spaltenschlüsselwort und `span-all`, wird das Element in der angegebenen Reihe oder Spalte platziert, und es spannt sich dann über alle Kacheln in dieser Reihe oder Spalte hinweg.

## Beispiele

Siehe die {{cssxref("position-area")}} Eigenschaftsseite.

Für detaillierte Informationen zu Ankereigenschaften und -nutzung, sehen Sie sich die [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modulseite und den Leitfaden [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) an.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-area")}}
- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- [`anchor()`](/de/docs/Web/CSS/anchor) Funktion
- [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Umgang mit Überlauf: Versuchen Sie Fallbacks und bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
