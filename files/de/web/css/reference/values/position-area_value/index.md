---
title: CSS-Typ `<position-area>`
short-title: <position-area>
slug: Web/CSS/Reference/Values/position-area_value
l10n:
  sourceCommit: c9f812354ae36bbafc6f6d9b0961f3b25f350f4c
---

Der [CSS](/de/docs/Web/CSS)-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) **`<position-area>`** definiert die Zelle oder die über mehrere Zellen reichenden Zellen eines **position-area-Rasters**, eines 3x3-Rasters, dessen mittlere Zelle ein Ankerelement ist.

Die Schlüsselwortwerte von `<position-area>` können als Wert der Eigenschaft {{cssxref("position-area")}} festgelegt werden, um ein anchor-positioniertes Element an einer bestimmten Position relativ zu seinem zugehörigen Ankerelement zu platzieren.

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

Positionierungsbereiche basieren auf dem Konzept eines **position-area-Rasters**, eines 3x3-Rasters aus Kacheln, das aus vier Rasterlinien besteht, zwei auf jeder Achse, wobei ein Ankerelement die mittlere Kachel bildet:

![Das position-area-Raster, wie unten beschrieben](position-area.png)

Wenn sie als Wert der Eigenschaft `position-area` eines positionierten Elements verwendet werden, werden die Abmessungen der mittleren Kachel durch den [Enthaltenen Block](/de/docs/Web/CSS/Guides/Display/Containing_block) des Standardankers des Elements definiert. Die Abmessungen der Außenkante des Rasters werden durch den Enthaltenen Block des positionierten Elements definiert. Logische Schlüsselbegriffe basieren im Allgemeinen auf dem Schreibmodus und der Richtung des Enthaltenen Blocks, mit Ausnahme der `self-*`-Schlüsselbegriffe, die aus dem Schreibmodus des anchor-positionierten Elements berechnet werden.

Die Rasterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die physischen Werte `top`, `center` und `bottom` dargestellt. Sie haben außerdem logische Entsprechungen wie `block-start`, `center` und `block-end` sowie Koordinatenentsprechungen — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben außerdem logische Entsprechungen wie `inline-start`, `center` und `inline-end` sowie Koordinatenentsprechungen — `x-start`, `center` und `x-end`.

`<position-area>`-Werte enthalten ein oder zwei Schlüsselwörter, die einen bestimmten Bereich des position-area-Rasters definieren. Das Festlegen eines `position-area`-Werts für ein positioniertes Element platziert dessen Enthaltenen Block im angegebenen Rasterbereich:

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
position-area: span-all; /* equiv: span-all span-all */
position-area: start; /* equiv: start start */
position-area: end; /* equiv: end end */
```

Zu den verschiedenen verwendbaren Arten von Schlüsselwörtern gehören:

- [Physische Raster-Schlüsselwörter](#physische_raster-schlüsselwörter)
- [Generische logische Zeilen- und Spalten-Schlüsselwörter](#generische_logische_zeilen-_und_spalten-schlüsselwörter)
- [Explizite logische Inline- und Block-Schlüsselwörter](#explizite_logische_inline-_und_block-schlüsselwörter)
- [Koordinaten-Raster-Schlüsselwörter](#koordinaten-raster-schlüsselwörter)

> [!NOTE]
> Im Allgemeinen können Sie verschiedene Arten nicht in einem Wert mischen, beispielsweise physische und logische. Dies führt zu ungültigen Werten. Beispielsweise ist `position-area: bottom inline-end` kein gültiger Wert, da er physische und logische Schlüsselwörter mischt.

## Physische Raster-Schlüsselwörter

Die physischen Raster-Schlüsselwörter geben mithilfe physischer Werte eine Zelle oder einen Abschnitt des `position-area`-Rasters an. Diese Werte werden nicht durch die Einstellungen von {{cssxref("writing-mode")}} oder {{cssxref("direction")}} beeinflusst.

Mit physischen Zeilen- und Spalten-Schlüsselwörtern können Sie jeweils ein Schlüsselwort aus den beiden folgenden Listen angeben, um eine einzelne bestimmte Rasterkachel auszuwählen:

- `top`, `center` oder `bottom`: Die obere, mittlere oder untere Zeile des Rasters.
- `left`, `center` oder `right`: Die linke, mittlere oder rechte Spalte des Rasters.

Beispielsweise wählt `top left` die Kachel oben links aus, während `center right` die mittlere Kachel der rechten Spalte auswählt.

### Physische übergreifende Raster-Schlüsselwörter

Die physischen übergreifenden Schlüsselwörter — wenn sie mit einem physischen Zeilen- oder Spalten-Schlüsselwort kombiniert werden — geben eine zweite Rasterkachel an, in die sich der Positionierungsbereich ausdehnen soll. Wenn eine solche Kombination als Wert der Eigenschaft `position-area` festgelegt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert; anschließend erstreckt es sich in die durch das übergreifende Schlüsselwort angegebene Richtung über zwei Rasterkacheln:

- `span-left`
  - : Erstreckt sich über die mittlere und die linke Spalte des Rasters.

- `span-right`
  - : Erstreckt sich über die mittlere und die rechte Spalte des Rasters.

- `span-top`
  - : Erstreckt sich über die mittlere und die obere Zeile des Rasters.

- `span-bottom`
  - : Erstreckt sich über die mittlere und die untere Zeile des Rasters.

- `span-all`
  - : Gültig für alle Schlüsselworttypen; erstreckt sich über die aufgeführte Zelle sowie die angrenzenden Zellen in derselben Zeile oder Spalte. Siehe [`span-all`](#span-all_2) unten.

Beispielsweise erstreckt sich `top span-left` über die Rasterzellen oben in der Mitte und oben links.

> [!NOTE]
> Der Versuch, ein Zeilen- oder Spalten-Schlüsselwort mit einem ungeeigneten übergreifenden Schlüsselwort zu kombinieren, führt zu einem ungültigen Wert. Beispielsweise ist `right span-right` ungültig — Sie können nicht die Rasterkachel in der Mitte rechts auswählen und dann versuchen, sich weiter nach rechts zu erstrecken.

### Standardwerte physischer Raster-Schlüsselwörter

Wenn im Wert `position-area` nur ein einzelnes physisches Schlüsselwort angegeben wird, wird der andere Wert wie folgt impliziert:

- `left`, `right`, `top` oder `bottom`
  - : Der andere Wert ist standardmäßig [`span-all`](#span-all_2), wodurch sich das Element über alle drei Kacheln der Spalte oder Zeile erstreckt, in der es ursprünglich platziert wurde. Beispielsweise entspricht `left` `left span-all`.

- `span-left`, `span-right`, `span-top` oder `span-bottom`
  - : Der andere Wert ist standardmäßig [`span-all`](#span-all_2). Beispielsweise entspricht `span-left` `span-left span-all`.

- `center` oder `span-all`
  - : Der andere Wert ist standardmäßig derselbe wie der erste Wert. Beispielsweise entspricht `center` `center center` und `span-all` entspricht `span-all span-all`.

## Logische Raster-Schlüsselwörter

Die logischen Raster-Schlüsselwörter geben mithilfe logischer Werte einen Bereich des Positionierungsbereichsrasters an. Bei diesen Werten werden Position und Richtung durch die Einstellungen von {{cssxref("writing-mode")}} und {{cssxref("direction")}} für entweder den [Enthaltenen Block](/de/docs/Web/CSS/Guides/Display/Containing_block) des Elements oder, im Fall der `self`-Schlüsselwörter, das positionierte Element selbst beeinflusst. Es gibt zwei Arten logischer Schlüsselwörter: generische und explizite.

### Generische logische Zeilen- und Spalten-Schlüsselwörter

Die generischen logischen Schlüsselwörter verwenden dieselben Begriffe für die Inline- und Blockrichtungen, wobei die Richtung durch die Position des Schlüsselbegriffs innerhalb eines Paars von `<position-area>`-Werten bestimmt wird. Der erste Wert definiert die Position in Blockrichtung und der zweite Wert definiert den Inline-Wert. Sie können ein oder zwei Schlüsselbegriffe aus der folgenden Liste angeben. Die Angabe von zwei Werten aus dieser Liste definiert eine einzelne bestimmte Rasterkachel. Die Position oder Richtung des Schlüsselworts ist:

- `start`
  - : Der Anfang der Block- oder Inlinerichtung des Rasters, berechnet aus dem Schreibmodus des Enthaltenen Blocks.

- `end`
  - : Das Ende der Block- oder Inlinerichtung des Rasters, berechnet aus dem Schreibmodus des Enthaltenen Blocks.

- `self-start`
  - : Der Anfang der Block- oder Inlinerichtung des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `self-end`
  - : Das Ende der Block- oder Inlinerichtung des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der Blockrichtung des Rasters (wenn dieses Schlüsselwort zuerst angegeben wird) oder der Inlinerichtung (wenn dieses Schlüsselwort als zweites angegeben wird).

Beispielsweise beschreiben `start end` und `self-start self-end` beide die Position am Anfang der Blockrichtung und am Ende der Inlinerichtung. Bei festgelegtem `writing-mode: horizontal-tb` ist dies oben rechts vom Ankerelement, während es bei `writing-mode: vertical-rl` unten rechts vom Anker ist.

#### Generische logische übergreifende Zeilen- und Spalten-Schlüsselwörter

Die generischen logischen übergreifenden Schlüsselwörter — wenn sie mit einem logischen Zeilen- oder Spalten-Schlüsselwort kombiniert werden — geben eine zweite Rasterkachel an, in die sich der Positionierungsbereich ausdehnen soll. Wenn eine solche Kombination als Wert der Eigenschaft `position-area` festgelegt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert und erstreckt sich dann in die durch das übergreifende Schlüsselwort angegebene Richtung über zwei Rasterkacheln:

- `span-start`
  - : Erstreckt sich über die mittlere Kachel und die Anfangskachel der Rasterzeile/-spalte, wobei sich die Richtung auf den Schreibmodus des Enthaltenen Blocks des Elements bezieht.

- `span-end`
  - : Erstreckt sich über die mittlere Kachel und die Endkachel der Rasterzeile/-spalte, wobei sich die Richtung auf den Schreibmodus des Enthaltenen Blocks des Elements bezieht.

- `span-self-start`
  - : Erstreckt sich über die mittlere Kachel und die Anfangskachel der Rasterzeile/-spalte für den eigenen Schreibmodus des positionierten Elements.

- `span-self-end`
  - : Erstreckt sich über die mittlere Kachel und die Endkachel der Rasterzeile/-spalte, berechnet aus dem eigenen Schreibmodus des Elements.

Beispielsweise geben `start span-end` und `self-start span-self-end` beide einen Rasterpositionierungsbereich an, der in der Mitte der Anfangsblockzeile beginnt und sich über die Kacheln dieser Zeile erstreckt, die sich in den Inline-Spalten Mitte und Ende befinden. Bei festgelegtem `writing-mode: horizontal-tb` würde sich dies über die obere mittlere und die obere rechte Kachel des Ankers erstrecken, während sich das Element bei festgelegtem `writing-mode: vertical-rl` über die rechte mittlere und die untere rechte Kachel erstrecken würde.

### Explizite logische Inline- und Block-Schlüsselwörter

Die expliziten logischen Inline- und Block-Zeilen- und -Spalten-Schlüsselwörter beziehen sich ausdrücklich auf eine Block- (Zeilen-) oder Inline- (Spalten-)Position. Sie können ein Schlüsselwort für die Blockrichtung und eines für die Inlinerichtung angeben, um eine einzelne bestimmte Rasterkachel auszuwählen. Anders als bei generischen logischen Schlüsselwortwerten spielt die Reihenfolge der Schlüsselwörter keine Rolle. Die Angabe von zwei Schlüsselwörtern auf derselben Achse macht den Wert jedoch ungültig.

- `block-start`
  - : Der Anfang der Blockrichtung des Rasters, berechnet aus dem Schreibmodus des Enthaltenen Blocks.

- `block-end`
  - : Das Ende der Blockrichtung des Rasters, berechnet aus dem Schreibmodus des Enthaltenen Blocks.

- `inline-start`
  - : Der Anfang der Inlinerichtung des Rasters, berechnet aus dem Schreibmodus des Enthaltenen Blocks.

- `inline-end`
  - : Das Ende der Inlinerichtung des Rasters, berechnet aus dem Schreibmodus des Enthaltenen Blocks.

Beispielsweise gibt `block-start inline-end` die Kachel am Anfang der Blockrichtung und am Ende der Inlinerichtung an. Bei festgelegtem `writing-mode: horizontal-tb` wäre dies die Kachel oben rechts vom Anker, während dies bei festgelegtem `writing-mode: vertical-rl` die Kachel unten rechts wäre.

> [!NOTE]
> Die Spezifikation definiert `self`-Entsprechungen dieser Schlüsselwörter — `block-self-start`, `block-self-end`, `inline-self-start` und `inline-self-end`. Diese werden jedoch derzeit von keinem Browser unterstützt.

#### Explizite logische Inline- und Block-Schlüsselwörter zum Übergreifen

Die expliziten logischen übergreifenden Schlüsselwörter — wenn sie mit einem logischen Zeilen- oder Spalten-Schlüsselwort kombiniert werden — geben eine zweite Rasterkachel an, in die sich der Positionierungsbereich ausdehnen soll. Wenn eine solche Kombination als Wert der Eigenschaft `position-area` festgelegt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert, basierend auf dem Schreibmodus des Enthaltenen Blocks, und erstreckt sich dann in die durch das übergreifende Schlüsselwort angegebene Richtung über zwei Rasterkacheln:

- `span-block-start`
  - : Erstreckt sich über die mittlere Kachel und die Kachel `block-start` der angegebenen Inline-Spalte.

- `span-block-end`
  - : Erstreckt sich über die mittlere Kachel und die Kachel `block-end` der angegebenen Inline-Spalte.

- `span-inline-start`
  - : Erstreckt sich über die mittlere Kachel und die Kachel `inline-start` der angegebenen Blockzeile.

- `span-inline-end`
  - : Erstreckt sich über die mittlere Kachel und die Kachel `inline-end` der angegebenen Blockzeile.

Beispielsweise wählt `block-end span-inline-start` die mittlere Kachel der Endblockzeile aus und erstreckt sich über die Kacheln dieser Zeile, die sich in den Inline-Spalten Mitte und Anfang befinden. Bei festgelegtem `writing-mode: horizontal-tb` würde sich dies über die Rasterkacheln unten in der Mitte und unten links erstrecken, während es sich bei festgelegtem `writing-mode: vertical-rl` über die Rasterkacheln links in der Mitte und oben links erstrecken würde.

> [!NOTE]
> Die Spezifikation definiert `self`-Entsprechungen dieser Schlüsselwörter, beispielsweise `span-self-block-start`, `span-self-block-end`, `span-self-inline-start` und `span-self-inline-end`. Diese werden jedoch derzeit von keinem Browser unterstützt.

> [!NOTE]
> Der Versuch, ein Zeilen- oder Spalten-Schlüsselwort mit einem ungeeigneten übergreifenden Schlüsselwort zu kombinieren, führt zu einem ungültigen Eigenschaftswert. Beispielsweise ist `block-end span-block-end` ungültig — Sie können nicht die mittlere `block-end`-Zeile auswählen und dann versuchen, sich noch eine Kachel über die Richtung des Blockendes hinaus zu erstrecken.

### Standardwerte logischer Raster-Schlüsselwörter

Wenn nur ein einzelnes logisches `<position-area>`-Schlüsselwort angegeben wird, wird der andere Wert wie folgt impliziert:

- `start`, `end`, `self-start` oder `self-end`
  - : Der andere Wert ist standardmäßig derselbe wie der erste Wert und wählt die Rasterzelle in der Anfangszeile und -spalte oder der Endzeile und -spalte aus.

- `span-start`, `span-self-start`, `span-end`, `span-self-end`
  - : Der andere Wert ist standardmäßig derselbe wie der erste Wert. Beispielsweise entspricht `span-start` `span-start span-start`.

- `block-start`, `block-end`, `inline-start`, `inline-end`
  - : Der andere Wert ist standardmäßig [`span-all`](#span-all_2), wodurch alle drei Kacheln der festgelegten Spalte oder Zeile übergriffen werden. Beispielsweise entspricht `block-start` `block-start span-all`.

- `span-block-start`, `span-block-end`, `span-inline-start`, `span-inline-end`
  - : Der andere Wert ist standardmäßig [`span-all`](#span-all_2). Beispielsweise entspricht `span-inline-start` `span-inline-start span-all`.

## Koordinaten-Raster-Schlüsselwörter

Diese Schlüsselwörter geben die Zellen des `position-area`-Rasters mithilfe von x- und y-Koordinatenwerten an. Ihre Position/Richtung wird durch die Einstellungen von {{cssxref("writing-mode")}} und/oder {{cssxref("direction")}} für entweder den [Enthaltenen Block](/de/docs/Web/CSS/Guides/Display/Containing_block) eines Elements oder, im Fall der `self`-Schlüsselwörter, das Element selbst beeinflusst.

Die Rasterzellen werden jedoch anhand physischer Achsen statt Block-/Inlinerichtungen definiert:

- Bei `writing-mode: horizontal-tb` und `vertical-lr` verläuft die x-Achse von links nach rechts und die y-Achse von oben nach unten.
- Bei `writing-mode: horizontal-tb; direction: rtl` und `writing-mode: vertical-rl` verläuft die x-Achse von rechts nach links und die y-Achse von oben nach unten.

Mit Koordinaten-Zeilen- und -Spalten-Schlüsselwörtern können Sie ein Schlüsselwort von der x-Achse und eines von der y-Achse angeben, um eine einzelne bestimmte Rasterkachel zu definieren.

Zu den Schlüsselwörtern für die x-Achse gehören:

- `x-start`
  - : Die Anfangskachel entlang der x-Achse des Rasters, berechnet aus dem Schreibmodus des Enthaltenen Blocks.

- `x-end`
  - : Die Endkachel entlang der x-Achse des Rasters, berechnet aus dem Schreibmodus des Enthaltenen Blocks.

- `self-x-start`
  - : Die Anfangskachel entlang der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `self-x-end`
  - : Die Endkachel entlang der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der x-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

Zu den Schlüsselwörtern für die y-Achse gehören:

- `y-start`
  - : Die Anfangskachel entlang der y-Achse des Rasters, berechnet aus dem Schreibmodus des Enthaltenen Blocks.

- `y-end`
  - : Die Endkachel entlang der y-Achse des Rasters, berechnet aus dem Schreibmodus des Enthaltenen Blocks.

- `self-y-start`
  - : Die Anfangskachel entlang der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `self-y-end`
  - : Die Endkachel entlang der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

- `center`
  - : Die Mitte der y-Achse des Rasters, berechnet aus dem eigenen Schreibmodus des Elements.

Beispielsweise wählen `x-end y-start` und `self-x-end self-y-start` beide die Rasterzelle am Ende der x-Achse und am Anfang der y-Achse aus. Bei festgelegtem `writing-mode: horizontal-tb` wäre dies die Zelle oben rechts vom Anker, während sie bei `writing-mode: vertical-rl` oben links liegt.

### Übergreifende Koordinaten-Schlüsselwörter

Wenn sie mit einem Koordinaten-Zeilen- oder -Spalten-Schlüsselwort kombiniert werden, geben die übergreifenden Koordinaten-Schlüsselwörter eine zweite Rasterkachel an, in die sich der Positionierungsbereich ausdehnen soll. Wenn eine solche Kombination als Wert der Eigenschaft `position-area` festgelegt wird, wird ein ausgewähltes Element zunächst in der Mitte der angegebenen Zeile oder Spalte platziert und erstreckt sich dann in die durch das übergreifende Schlüsselwort angegebene Richtung über zwei Rasterkacheln:

- `span-x-start`
  - : Erstreckt sich über die mittlere Kachel und die Kachel `x-start` der angegebenen y-Achsenzeile.

- `span-x-end`
  - : Erstreckt sich über die mittlere Kachel und die Kachel `x-end` der angegebenen y-Achsenzeile.

- `span-y-start`
  - : Erstreckt sich über die mittlere Kachel und die Kachel `y-start` der angegebenen x-Achsenspalte.

- `span-y-end`
  - : Erstreckt sich über die mittlere Kachel und die Kachel `y-end` der angegebenen x-Achsenspalte.

Beispielsweise wählt `y-end span-x-end` die Kachel in der Mitte der y-Endzeile aus und erstreckt sich über die Kacheln dieser Zeile, die sich in den x-Spalten Mitte und Ende befinden. Bei festgelegtem `writing-mode: horizontal-tb` würde sich der Positionierungsrasterbereich über die Rasterkacheln unten in der Mitte und unten rechts erstrecken, während er sich bei festgelegtem `writing-mode: vertical-rl` über die Kacheln unten in der Mitte und unten links erstrecken würde.

> [!NOTE]
> Die Spezifikation definiert keine separaten `self`-Schlüsselwörter zum Übergreifen für Koordinaten, diese werden jedoch nicht benötigt — die übergreifenden Schlüsselwörter können sowohl mit Koordinaten-Zeilen- als auch mit Koordinaten-Spalten-Schlüsselwörtern verwendet werden.

### Standardwerte von Koordinaten-Raster-Schlüsselwörtern

Wenn nur ein einzelnes `<position-area>`-Schlüsselwort für ein Koordinatenraster angegeben wird, wird der andere Wert wie folgt impliziert:

- `x-start`, `self-x-start`, `x-end`, `self-x-end`, `y-start`, `self-y-start`, `y-end` oder `self-y-end`
  - : Der andere Wert ist standardmäßig [`span-all`](#span-all_2), wodurch die Rasterkacheln ausgewählt werden, die sich über alle drei Kacheln der Spalte oder Zeile erstrecken, in der es ursprünglich platziert wurde. Beispielsweise entspricht `x-start` `x-start span-all`.

- `span-x-start`, `span-x-end`, `span-y-start`, `span-y-end`, `span-self-x-start`, `span-self-x-end`, `span-self-y-end` oder `span-self-y-start`
  - : Der andere Wert ist standardmäßig [`span-all`](#span-all_2). Beispielsweise entspricht `span-x-start` `span-x-start span-all`.

## `span-all`

`span-all` ist ein spezielles Schlüsselwort, das mit allen in den obigen Abschnitten aufgeführten Zeilen- und Spalten-Schlüsselwörtern verwendet werden kann. Wenn Sie zwei Werte angeben — ein Zeilen-/Spalten-Schlüsselwort und `span-all` — wird das Element in der angegebenen Zeile oder Spalte platziert und erstreckt sich dann über alle Kacheln dieser Zeile oder Spalte.

## Beispiele

Siehe die Seite zur Eigenschaft {{cssxref("position-area")}}.

Detaillierte Informationen zu Ankerfunktionen und ihrer Verwendung finden Sie im Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) sowie im Leitfaden [CSS-Ankerpositionierung verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-area")}}
- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- Funktion [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor)
- Leitfaden [CSS-Ankerpositionierung verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
- Leitfaden [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
- Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)
