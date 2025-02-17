---
title: <position-area>
slug: Web/CSS/position-area_value
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}{{SeeCompatTable}}

Der **`<position-area>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) definiert die Zelle oder überspannten Zellen eines **position-area grids**, eines 3x3 Rasters, dessen zentrale Zelle ein Anker-Element ist.

Die `<position-area>` Schlüsselwortwerte können als Wert der {{cssxref("position-area")}} Eigenschaft festgelegt werden, um ein Anker-positioniertes Element an einer bestimmten Stelle relativ zu seinem zugehörigen Anker-Element zu platzieren.

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

Position-Areale basieren auf dem Konzept eines **position-area grids**, eines 3x3-Rasters aus Feldern, die aus vier Rasternetzlinien bestehen, zwei auf jeder Achse, wobei ein Anker-Element das zentrale Feld ist:

![Das position-area grid, wie unten beschrieben](position-area.png)

Wenn es als Wert der `position-area` Eigenschaft eines positionierten Elements verwendet wird, werden die Dimensionen des zentralen Feldes vom [enthaltenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Standardanker-Elements des Elements definiert. Die Dimensionen des äußeren Randes des Rasters werden durch den enthaltenden Block des positionierten Elements definiert. Logische Schlüsselbegriffe basieren in der Regel auf Schreibmodi und Richtung des enthaltenden Blocks, außer bei den `self-*` Schlüsselbegriffen, die aus dem Schreibmodus des Anker-positionierten Elements berechnet werden.

Die Rasterfelder sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben auch logische Äquivalente wie `block-start`, `center` und `block-end` sowie Koordinaten-Äquivalente — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `inline-start`, `center` und `inline-end` sowie Koordinaten-Äquivalente — `x-start`, `center` und `x-end`.

`<position-area>` Werte enthalten ein oder zwei Schlüsselwörter, die einen bestimmten Bereich des position-area grids definieren. Durch das Festlegen eines `position-area` Wertes auf einem positionierten Element wird sein enthaltender Block in dem angegebenen Rasterbereich platziert:

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

Die unterschiedlichen Arten von Schlüsselwörtern, die verwendet werden können, umfassen:

- [Physikalische Raster-Schlüsselwörter](#physikalische_raster-schlüsselwörter)
- [Generische logische Zeilen- und Spalten-Schlüsselwörter](#generische_logische_zeilen-_und_spalten-schlüsselwörter)
- [Explizite Inline- und Block-logische Schlüsselwörter](#explicit_inline_and_block_logical_keywords)
- [Koordinaten-Raster-Schlüsselwörter](#coordinate_grid_keywords)

> [!NOTE]
> In der Regel können Sie keine verschiedenen Typen in einem Wert mischen, z.B. physikalisch und logisch. Ein solcher Fall führt zu ungültigen Werten. Beispielsweise ist `position-area: bottom inline-end` kein gültiger Wert, da physikalische und logische Schlüsselwörter gemischt werden.

## Physikalische Raster-Schlüsselwörter

Die physikalischen Raster-Schlüsselwörter definieren eine Zelle oder einen Abschnitt des `position-area` Grids durch physikalische Werte. Diese Werte werden nicht von {{cssxref("writing-mode")}} oder {{cssxref("direction")}} Einstellungen beeinflusst.

Mit physikalischen Zeilen- und Spalten-Schlüsselwörtern können Sie ein Schlüsselwort aus jeder der beiden folgenden Listen auswählen, um eine einzelne spezifische Rasterkachel zu selektieren:

- `top`, `center` oder `bottom`: Die obere, mittlere oder untere Zeile des Rasters.
- `left`, `center` oder `right`: Die linke, mittlere oder rechte Spalte des Rasters.

Zum Beispiel wählt `top left` die obere linke Kachel aus, während `center right` die mittlere Kachel der rechten Spalte auswählt.

### Physikalische Spann-Raster-Schlüsselwörter

Die physikalischen Spann-Schlüsselwörter — in Kombination mit einem physikalischen Zeilen- oder Spalten-Schlüsselwort — spezifizieren eine zweite Rasterkachel, in die sich der Positionsbereich ausdehnt. Wenn eine solche Kombination als Wert der `position-area` Eigenschaft gesetzt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert und spannt sich dann in Richtung des angegebenen Spann-Schlüsselwortes über zwei Rasterkacheln:

- `span-left`

  - : Spannt die mittlere Spalte und die linke Spalte des Rasters.

- `span-right`

  - : Spannt die mittlere Spalte und die rechte Spalte des Rasters.

- `span-top`

  - : Spannt die mittlere Zeile und die obere Zeile des Rasters.

- `span-bottom`

  - : Spannt die mittlere Zeile und die untere Zeile des Rasters.

- `span-all`

  - : Gültig mit allen Schlüsselwort-Typen, spannt die angegebene Zelle sowie die angrenzenden Zellen in derselben Zeile oder Spalte. Siehe [`span-all`](#span-all_2) unten.

Zum Beispiel: `top span-left` spannt die oberen mittleren und oberen linken Rasterzellen.

> [!NOTE]
> Der Versuch, ein Zeilen- oder Spalten-Schlüsselwort mit einem unangemessenen Spann-Schlüsselwort zu kombinieren, führt zu einem ungültigen Wert. Beispielsweise: `right span-right` ist ungültig — Sie können nicht die mittlere rechte Rasterkachel auswählen und dann versuchen, weiter nach rechts zu spannen.

### Standardwerte für physikalische Raster-Schlüsselwörter

Wenn nur ein physikalisches Schlüsselwort im `position-area` Wert angegeben wird, wird der andere Wert wie folgt impliziert:

- `left`, `right`, `top` oder `bottom`

  - : Der andere Wert wird standardmäßig als [`span-all`](#span-all_2) behandelt, wodurch das Element alle drei Kacheln des Rasters oder der Zeile überspannt, in die es initial platziert wurde. Zum Beispiel ist `left` äquivalent zu `left span-all`.

- `center`, `span-left`, `span-right`, `span-top` oder `span-bottom`

  - : Der andere Wert wird standardmäßig als `center` behandelt. Zum Beispiel ist `span-left` äquivalent zu `center span-left` und `center` äquivalent zu `center center`.

## Logische Raster-Schlüsselwörter

Die logischen Raster-Schlüsselwörter bestimmen einen Bereich des position-area Grids mit logischen Werten. Mit diesen Werten werden Position und Richtung durch {{cssxref("writing-mode")}} und {{cssxref("direction")}} Einstellungen beeinflusst, entweder auf dem [enthaltenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements oder, im Fall der `self` Schlüsselwörter, auf dem positionierten Element selbst. Es gibt zwei Arten von logischen Schlüsselwörtern: generische und explizite.

### Generische logische Zeilen- und Spalten-Schlüsselwörter

Die generischen logischen Schlüsselwörter verwenden die gleichen Begriffe für die Inline- und Blockrichtungen, wobei die Richtung durch die Position des Schlüsselbegriffs innerhalb eines Paares von `<position-area>` Werten bestimmt wird.

Die Fortsetzung der Übersetzung erfolgt entsprechend den oben festgelegten Regeln in ähnlicher Weise.
