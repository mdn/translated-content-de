---
title: Verwendung von CSS-Gradienten
short-title: Verwendung von Gradienten
slug: Web/CSS/CSS_images/Using_CSS_gradients
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

**CSS-Gradienten** werden durch den {{cssxref("&lt;gradient&gt;")}} Datentyp repräsentiert, eine spezielle Art von {{cssxref("&lt;image&gt;")}}, die aus einer progressiven Übergangszone zwischen zwei oder mehreren Farben besteht. Sie können zwischen drei Arten von Gradienten wählen: _linear_ (erstellt mit der {{cssxref("gradient/linear-gradient", "linear-gradient()")}} Funktion), _radial_ (erstellt mit der {{cssxref("gradient/radial-gradient", "radial-gradient()")}} Funktion) und _konisch_ (erstellt mit der {{cssxref("gradient/conic-gradient", "conic-gradient()")}} Funktion). Sie können auch wiederholende Gradienten mit den Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} erstellen.

Gradienten können überall dort verwendet werden, wo Sie ein `<image>` verwenden würden, z. B. in Hintergründen. Da Gradienten dynamisch generiert werden, können sie die Notwendigkeit für Rasterbilddateien negieren, die traditionell verwendet wurden, um ähnliche Effekte zu erzielen. Darüber hinaus sehen Gradienten, da sie vom Browser generiert werden, beim Vergrößern besser aus als Rasterbilder und können spontan skaliert werden.

Wir beginnen mit der Einführung von linearen Gradienten, stellen dann die in allen Gradiententypen unterstützten Funktionen anhand von linearen Gradienten als Beispiel vor und fahren dann mit radialen, konischen und wiederholenden Gradienten fort.

## Verwendung von linearen Gradienten

Ein linearer Gradient erzeugt ein Farbband, das sich in einer geraden Linie entwickelt.

### Ein einfacher linearer Gradient

Um die einfachste Art von Gradient zu erstellen, müssen Sie nur zwei Farben angeben. Diese werden _Farbstopps_ genannt. Sie müssen mindestens zwei haben, aber Sie können so viele haben, wie Sie möchten.

```html hidden
<div class="simple-linear"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.simple-linear {
  background: linear-gradient(blue, pink);
}
```

{{ EmbedLiveSample('A_basic_linear_gradient', 120, 120) }}

### Ändern der Richtung

Standardmäßig verlaufen lineare Gradienten von oben nach unten. Sie können ihre Rotation ändern, indem Sie eine Richtung angeben.

```html hidden
<div class="horizontal-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.horizontal-gradient {
  background: linear-gradient(to right, blue, pink);
}
```

{{ EmbedLiveSample('Changing_the_direction', 120, 120) }}

### Diagonale Gradienten

Sie können den Gradient sogar diagonal von Ecke zu Ecke verlaufen lassen.

```html hidden
<div class="diagonal-gradient"></div>
```

```css hidden
div {
  width: 200px;
  height: 100px;
}
```

```css
.diagonal-gradient {
  background: linear-gradient(to bottom right, blue, pink);
}
```

{{ EmbedLiveSample('Diagonal_gradients', 200, 100) }}

### Verwendung von Winkeln

Wenn Sie mehr Kontrolle über die Richtung haben möchten, können Sie dem Gradient einen bestimmten Winkel geben.

```html hidden
<div class="angled-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.angled-gradient {
  background: linear-gradient(70deg, blue, pink);
}
```

{{ EmbedLiveSample('Using_angles', 120, 120) }}

Wenn Sie einen Winkel verwenden, erzeugt `0deg` einen vertikalen Gradient, der von unten nach oben verläuft, `90deg` einen horizontalen Gradient von links nach rechts und so weiter im Uhrzeigersinn. Negative Winkel verlaufen in die entgegengesetzte Richtung.

![Vier Kästchen mit Winkeln und dazugehörigem Gradient von Rot zu Weiß. 0deg beginnt unten und geht nach oben. 90deg beginnt links und geht nach rechts. 180deg beginnt oben und geht nach unten. -90deg beginnt rechts und geht nach links.](linear_red_angles.png)

## Farben deklarieren & Effekte erzeugen

Alle CSS-Gradiententypen sind eine Reihe von positionsabhängigen Farben. Die von CSS-Gradienten erzeugten Farben können sich kontinuierlich mit der Position ändern und sanfte Farbverläufe erzeugen. Es ist auch möglich, Bänder aus Vollfarben und harte Übergänge zwischen zwei Farben zu erzeugen. Die folgenden Punkte gelten für alle Gradientfunktionen:

### Verwenden von mehr als zwei Farben

Sie müssen sich nicht auf zwei Farben beschränken – Sie können so viele verwenden, wie Sie möchten! Standardmäßig sind die Farben gleichmäßig entlang des Gradienten verteilt.

```html hidden
<div class="auto-spaced-linear-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.auto-spaced-linear-gradient {
  background: linear-gradient(red, yellow, blue, orange);
}
```

{{ EmbedLiveSample('Using_more_than_two_colors', 120, 120) }}

### Positionieren von Farbstopps

Sie müssen Ihre Farbstopps nicht an ihren Standardpositionen belassen. Um ihre Positionen feinabzustimmen, können Sie jedem eine null, eine oder zwei Prozent- oder, für radiale und lineare Gradienten, absolute Längenwerte geben. Wenn Sie den Standort als Prozentsatz angeben, stellt `0%` den Startpunkt dar, während `100%` den Endpunkt darstellt; Sie können jedoch bei Bedarf auch Werte außerhalb dieses Bereichs verwenden, um den gewünschten Effekt zu erzielen. Wenn Sie eine Position nicht angeben, wird die Position dieses bestimmten Farbstopps automatisch für Sie berechnet, wobei der erste Farbstopp bei `0%`, der letzte Farbstopp bei `100%` und alle anderen Farbstopps in der Mitte zwischen ihren angrenzenden Farbstopps liegen.

```html hidden
<div class="multicolor-linear"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.multicolor-linear {
  background: linear-gradient(to left, lime 28px, red 77%, cyan);
}
```

{{ EmbedLiveSample('Positioning_color_stops', 120, 120) }}

### Erzeugen harter Linien

Um eine harte Linie zwischen zwei Farben zu erzeugen, die einen Streifen anstelle eines allmählichen Übergangs erzeugt, können benachbarte Farbstopps auf dieselbe Position gesetzt werden. In diesem Beispiel teilen sich die Farben einen Farbstopp bei der `50%` Marke, in der Mitte des Gradienten:

```html hidden
<div class="striped"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.striped {
  background: linear-gradient(to bottom left, cyan 50%, palegoldenrod 50%);
}
```

{{ EmbedLiveSample('Creating_hard_lines', 120, 120) }}

### Gradient-Hinweise

Standardmäßig verläuft der Gradient gleichmäßig von einer Farbe zur nächsten. Sie können einen Farbhinweis hinzufügen, um den Mittelpunkt des Übergangswertes an einem bestimmten Punkt entlang des Gradienten zu verschieben. In diesem Beispiel haben wir den Mittelpunkt des Übergangs von der 50%-Marke auf die 10%-Marke verschoben.

```html hidden
<div class="color-hint"></div>
<div class="simple-linear"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
  float: left;
  margin-right: 10px;
}
```

```css
.color-hint {
  background: linear-gradient(blue, 10%, pink);
}
.simple-linear {
  background: linear-gradient(blue, pink);
}
```

{{ EmbedLiveSample('Gradient_hints', 120, 120) }}

### Erstellen von Farbbändern & Streifen

Um einen festen, nicht übergehenden Farbbereich innerhalb eines Gradienten einzuschließen, fügen Sie dem Farbstopp zwei Positionen hinzu. Farbstopps können zwei Positionen haben, was zwei aufeinanderfolgende Farbstopps mit derselben Farbe an verschiedenen Positionen entspricht. Die Farbe erreicht beim ersten Farbstopp volle Sättigung, behält diese Sättigung bis zum zweiten Farbstopp bei und wechselt zur Farbe des angrenzenden Farbstopps durch die erste Position des angrenzenden Farbstopps.

```html hidden
<div class="multiposition-stops"></div>
<div class="multiposition-stop2"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
  float: left;
  margin-right: 10px;
  box-sizing: border-box;
}
```

```css
.multiposition-stops {
  background: linear-gradient(
    to left,
    lime 20%,
    red 30%,
    red 45%,
    cyan 55%,
    cyan 70%,
    yellow 80%
  );
  background: linear-gradient(
    to left,
    lime 20%,
    red 30% 45%,
    cyan 55% 70%,
    yellow 80%
  );
}
.multiposition-stop2 {
  background: linear-gradient(
    to left,
    lime 25%,
    red 25%,
    red 50%,
    cyan 50%,
    cyan 75%,
    yellow 75%
  );
  background: linear-gradient(
    to left,
    lime 25%,
    red 25% 50%,
    cyan 50% 75%,
    yellow 75%
  );
}
```

{{ EmbedLiveSample('Creating_color_bands_stripes', 120, 120) }}

Im ersten oben genannten Beispiel reicht das Limettengrün von der 0%-Marke, die implizit ist, bis zur 20%-Marke, wechselt von Limettengrün zu Rot über die nächsten 10% der Breite des Gradienten, erreicht vollsättigtes Rot bei der 30%-Marke und bleibt fest Rot bis zu 45% des Gradienten, wo es zu Cyan verblasst, über 15% des Gradienten vollständig Cyan wird, und so weiter.

Im zweiten Beispiel liegt der zweite Farbstopp für jede Farbe an derselben Stelle wie der erste Farbstopp der angrenzenden Farbe, wodurch ein gestreifter Effekt entsteht.

In beiden Beispielen wird der Gradient zweimal geschrieben: der erste ist die Methode der CSS-Images Level 3, bei der die Farbe für jeden Stopp wiederholt wird, und das zweite Beispiel ist die Methode der CSS-Images Level 4 für mehrere Farbstopplängen in einer linearen Farbstopp-Deklaration.

### Steuerung des Fortschritts eines Gradienten

Standardmäßig verläuft ein Gradient gleichmäßig zwischen den Farben von zwei aufeinanderfolgenden Farbstopps, wobei der Mittelpunkt zwischen diesen beiden Farbstopps den Mittelpunktfarbe darstellt. Sie können die {{Glossary("interpolation", "Interpolation")}}, oder den Verlauf, zwischen zwei Farbstopps steuern, indem Sie den Standort eines Farbhinweises hinzufügen. In diesem Beispiel erreicht die Farbe den Mittelpunkt zwischen Limettengrün und Cyan 20% des Weges durch den Gradient anstelle von 50% des Weges durch. Das zweite Beispiel enthält keinerlei Hinweis, um den Unterschied zu dem durch den Farbhinweis verursachten Effekt hervorzuheben:

```html hidden
<div class="color-hint-gradient"></div>
<div class="regular-progression"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
  float: left;
  margin-right: 10px;
  box-sizing: border-box;
}
```

```css
.color-hint-gradient {
  background: linear-gradient(to top, lime, 20%, cyan);
}
.regular-progression {
  background: linear-gradient(to top, lime, cyan);
}
```

{{ EmbedLiveSample('Controlling_the_progression_of_a_gradient', 120, 120) }}

### Überlagerung von Gradienten

Gradienten unterstützen Transparenz, sodass Sie mehrere Hintergründe stapeln können, um einige ziemlich elegante Effekte zu erzielen. Die Hintergründe werden von oben nach unten gestapelt, wobei das zuerst angegebene oben liegt.

```html hidden
<div class="layered-image"></div>
```

```css hidden
div {
  width: 300px;
  height: 150px;
}
```

```css
.layered-image {
  background:
    linear-gradient(to right, transparent, mistyrose), url("critters.png");
}
```

{{ EmbedLiveSample('Overlaying_gradients', 300, 150) }}

### Gestapelte Gradienten

Sie können sogar Gradienten mit anderen Gradienten stapeln. Solange die oberen Gradienten nicht vollständig undurchsichtig sind, bleiben die unteren Gradienten weiterhin sichtbar.

```html hidden
<div class="stacked-linear"></div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.stacked-linear {
  background:
    linear-gradient(217deg, rgb(255 0 0 / 80%), rgb(255 0 0 / 0%) 70.71%),
    linear-gradient(127deg, rgb(0 255 0 / 80%), rgb(0 255 0 / 0%) 70.71%),
    linear-gradient(336deg, rgb(0 0 255 / 80%), rgb(0 0 255 / 0%) 70.71%);
}
```

{{ EmbedLiveSample('Stacked_gradients', 200, 200) }}

### Mischen von Gradienten

Neben Transparenz, dem Stapeln mehrerer halbtransparenter Gradienten und dem Stapeln von Gradienten über Raster-Hintergrundbildern können Gradienten mit anderen CSS-Effekten verwendet werden. In diesem Beispiel haben die vier {{htmlelement("div")}} Elemente dieselben zwei vollständig undurchsichtigen Gradienten als Hintergrundbilder. Wir wenden verschiedene Werte der CSS-Eigenschaft {{cssxref("background-blend-mode")}} auf die letzten drei an, die die beiden Hintergrundbilder unterschiedlich mischen und somit unterschiedliche Effekte erzeugen.

```html hidden
<div class="original"></div>
<div class="screen"></div>
<div class="overlay"></div>
<div class="difference"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
  float: left;
  margin-right: 10px;
  box-sizing: border-box;
}
```

```css
div {
  background:
    linear-gradient(to top, red, blue),
    linear-gradient(to right, #5500ff, #00ff55);
}

.screen {
  background-blend-mode: screen;
}

.overlay {
  background-blend-mode: overlay;
}

.difference {
  background-blend-mode: difference;
}
```

{{ EmbedLiveSample('Blending_gradients', 120, 120) }}

## Verwendung von radialen Gradienten

Radiale Gradienten sind ähnlich wie lineare Gradienten, außer dass sie von einem zentralen Punkt ausstrahlen. Sie können festlegen, wo sich dieser zentrale Punkt befindet. Sie können sie auch kreisförmig oder elliptisch gestalten.

### Ein einfacher radialer Gradient

Wie bei linearen Gradienten benötigen Sie zum Erstellen eines radialen Gradienten nur zwei Farben. Standardmäßig befindet sich der Mittelpunkt des Gradienten an der 50% 50% Marke, und der Gradient ist elliptisch, entsprechend dem {{Glossary("aspect_ratio", "Seitenverhältnis")}} seines Rahmens:

```html hidden
<div class="simple-radial"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.simple-radial {
  background: radial-gradient(red, blue);
}
```

{{ EmbedLiveSample('A_basic_radial_gradient', 120, 120) }}

### Positionieren radialer Farbstopps

Wieder wie bei linearen Gradienten können Sie jeden radialen Farbstopp mit einem Prozentsatz oder einer absoluten Länge positionieren.

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.radial-gradient {
  background: radial-gradient(red 10px, yellow 30%, #1e90ff 50%);
}
```

{{ EmbedLiveSample('Positioning_radial_color_stops', 120, 120) }}

### Positionieren des Zentrums des Gradienten

Sie können das Zentrum des Gradienten mit Schlüsselwörtern, Prozentwerten oder absoluten Längen, Länge und Prozentwerten positionieren. Diese wiederholen sich, wenn nur eines vorhanden ist, andernfalls in der Reihenfolge der Position von links und Position von oben.

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 240px;
}
```

```css
.radial-gradient {
  background: radial-gradient(at 0% 30%, red 10px, yellow 30%, #1e90ff 50%);
}
```

{{ EmbedLiveSample('Positioning_the_center_of_the_gradient', 120, 120) }}

### Größenanpassung radialer Gradienten

Anders als bei linearen Gradienten können Sie die Größe radialer Gradienten angeben. Mögliche Werte sind `closest-corner`, `closest-side`, `farthest-corner` und `farthest-side`, wobei `farthest-corner` der Standardwert ist. Kreise können auch mit einer Länge und Ellipsen mit einer Länge oder einem Prozentsatz dimensioniert werden.

#### Beispiel: `closest-side` für Ellipsen

Dieses Beispiel verwendet den `closest-side` Größe-Wert, was bedeutet, dass die Größe durch den Abstand vom Startpunkt (dem Zentrum) zur nächsten Seite des umgebenden Rahmens festgelegt wird.

```html hidden
<div class="radial-ellipse-side"></div>
```

```css hidden
div {
  width: 240px;
  height: 100px;
}
```

```css
.radial-ellipse-side {
  background: radial-gradient(
    ellipse closest-side,
    red,
    yellow 10%,
    #1e90ff 50%,
    beige
  );
}
```

{{ EmbedLiveSample('Example_closest-side_for_ellipses', 240, 100) }}

#### Beispiel: `farthest-corner` für Ellipsen

Dieses Beispiel ist dem vorherigen ähnlich, mit dem Unterschied, dass seine Größe als `farthest-corner` angegeben wird, was die Größe des Gradienten durch den Abstand vom Startpunkt zur entferntesten Ecke des umgebenden Rahmens vom Startpunkt festlegt.

```html hidden
<div class="radial-ellipse-far"></div>
```

```css hidden
div {
  width: 240px;
  height: 100px;
}
```

```css
.radial-ellipse-far {
  background: radial-gradient(
    ellipse farthest-corner at 90% 90%,
    red,
    yellow 10%,
    #1e90ff 50%,
    beige
  );
}
```

{{ EmbedLiveSample('Example_farthest-corner_for_ellipses', 240, 100) }}

#### Beispiel: `closest-side` für Kreise

Dieses Beispiel verwendet `closest-side`, wodurch der Radius des Kreises der Abstand zwischen dem Zentrum des Gradienten und der nächsten Seite wird. In diesem Fall ist der Radius der Abstand zwischen dem Zentrum und der unteren Kante, da der Gradient 25% von links und 25% von unten entfernt platziert ist und die Höhe des div-Elements kleiner als die Breite ist.

```html hidden
<div class="radial-circle-close"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.radial-circle-close {
  background: radial-gradient(
    circle closest-side at 25% 75%,
    red,
    yellow 10%,
    #1e90ff 50%,
    beige
  );
}
```

{{ EmbedLiveSample('Example_closest-side_for_circles', 240, 120) }}

#### Beispiel: Länge oder Prozentsatz für Ellipsen

Nur für Ellipsen können Sie die Ellipse mit einer Länge oder einem Prozentsatz dimensionieren. Der erste Wert repräsentiert den horizontalen Radius, der zweite den vertikalen Radius. Wenn Sie einen Prozentsatz verwenden, entspricht dies der Größe des Rahmens in dieser Dimension. Im folgenden Beispiel habe ich einen Prozentsatz für den horizontalen Radius verwendet.

```html hidden
<div class="radial-ellipse-size"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.radial-ellipse-size {
  background: radial-gradient(
    ellipse 50% 50px,
    red,
    yellow 10%,
    #1e90ff 50%,
    beige
  );
}
```

{{ EmbedLiveSample('Example_length_or_percentage_for_ellipses', 240, 120) }}

#### Beispiel: Länge für Kreise

Bei Kreisen kann die Größe als {{cssxref("length")}}, die die Größe des Kreises ist, angegeben werden.

```html hidden
<div class="radial-circle-size"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.radial-circle-size {
  background: radial-gradient(circle 50px, red, yellow 10%, #1e90ff 50%, beige);
}
```

{{ EmbedLiveSample('Example_length_for_circles', 240, 120) }}

### Gestapelte radiale Gradienten

Genau wie lineare Gradienten können Sie auch radiale Gradienten stapeln. Das zuerst angegebene ist oben, das letzte unten.

```html hidden
<div class="stacked-radial"></div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.stacked-radial {
  background:
    radial-gradient(
      circle at 50% 0,
      rgb(255 0 0 / 50%),
      rgb(255 0 0 / 0%) 70.71%
    ),
    radial-gradient(
      circle at 6.7% 75%,
      rgb(0 0 255 / 50%),
      rgb(0 0 255 / 0%) 70.71%
    ),
    radial-gradient(
        circle at 93.3% 75%,
        rgb(0 255 0 / 50%),
        rgb(0 255 0 / 0%) 70.71%
      )
      beige;
  border-radius: 50%;
}
```

{{ EmbedLiveSample('Stacked_radial_gradients', 200, 200) }}

## Verwendung von konischen Gradienten

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS) Funktion erzeugt ein Bild, das aus einem Gradient mit Farbverläufen besteht, die um einen Mittelpunkt gedreht werden (anstatt vom Zentrum zu abstrahlen). Beispiele für konische Gradienten sind Tortendiagramme und {{Glossary("color_wheel", "Farbräder")}}, aber sie können auch verwendet werden, um Schachbrettmuster und andere interessante Effekte zu erzeugen.

Die Syntax für konische Gradienten ist der Syntax für radiale Gradienten ähnlich, aber die Farbstopps werden um einen Gradientenbogen, den Umfang eines Kreises, platziert, anstatt auf der Gradientenlinie, die von der Mitte des Gradienten ausgeht. Die Farbstopps sind Prozentsätze oder Grad: absolute Längen sind nicht gültig.

In einem radialen Gradient verlaufen die Farben vom Zentrum einer Ellipse nach außen in alle Richtungen. Bei konischen Gradienten verlaufen die Farben, als würden sie um das Zentrum eines Kreises gedreht, beginnend oben und im Uhrzeigersinn verlaufend. Ähnlich wie bei radialen Gradienten können Sie das Zentrum des Gradienten positionieren. Ähnlich wie bei linearen Gradienten können Sie den Winkel des Gradienten ändern.

### Ein einfacher konischer Gradient

Wie bei linearen und radialen Gradienten benötigen Sie zum Erstellen eines konischen Gradienten nur zwei Farben. Standardmäßig befindet sich der Mittelpunkt des Gradienten an der 50% 50% Marke, mit dem Beginn des Gradienten nach oben:

```html hidden
<div class="simple-conic"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.simple-conic {
  background: conic-gradient(red, blue);
}
```

{{ EmbedLiveSample('A_basic_conic_gradient', 120, 120) }}

### Positionierung des konischen Zentrums

Wie bei radialen Gradienten können Sie das Zentrum des konischen Gradienten mit Schlüsselwörtern, Prozentwerten oder absoluten Längen unter Verwendung des Schlüsselworts "at" positionieren.

```html hidden
<div class="conic-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.conic-gradient {
  background: conic-gradient(at 0% 30%, red 10%, yellow 30%, #1e90ff 50%);
}
```

{{ EmbedLiveSample('Positioning_the_conic_center', 120, 120) }}

### Ändern des Winkels

Standardmäßig werden die verschiedenen angegebenen Farbstopps gleichmäßig um den Kreis herum verteilt. Sie können den Startwinkel des konischen Gradienten mit dem Schlüsselwort "from" am Anfang gefolgt von einem Winkel oder einer Länge angeben, und Sie können verschiedene Positionen für die Farbstopps angeben, indem Sie nach ihnen einen Winkel oder eine Länge einschließen.

```html hidden
<div class="conic-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.conic-gradient {
  background: conic-gradient(from 45deg, red, orange 50%, yellow 85%, green);
}
```

{{ EmbedLiveSample('Changing_the_angle', 120, 120) }}

## Verwendung von wiederholenden Gradienten

Die Funktionen {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}} und {{cssxref("gradient/conic-gradient", "conic-gradient()")}} unterstützen keine automatisch wiederholten Farbstopps. Allerdings sind die Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} verfügbar, um diese Funktionalität anzubieten.

Die Größe der Gradientenlinie oder des Bogens, der wiederholt wird, ist die Länge zwischen dem ersten Farbstoppwert und dem letzten Farbstopplängenwert. Wenn der erste Farbstopp nur eine Farbe und keine Farbstopplänge hat, beträgt der Standardwert 0. Wenn der letzte Farbstopp nur eine Farbe und keine Farbstopplänge hat, beträgt der Standardwert 100%. Wenn weder das eine noch das andere erklärt wird, beträgt die Gradientenlinie 100%, was bedeutet, dass lineare und konische Gradienten nicht wiederholt werden und der radiale Gradient nur dann wiederholt wird, wenn der Radius des Gradienten kleiner ist als die Länge zwischen dem Zentrum des Gradienten und der entferntesten Ecke. Wenn der erste Farbstopp erklärt wird und der Wert größer als 0 ist, wird der Gradient wiederholt, da die Größe der Linie oder des Bogens der Unterschied zwischen dem ersten und dem letzten Farbstoppwert kleiner als 100% oder 360 Grad ist.

### Wiederholende lineare Gradienten

Dieses Beispiel verwendet {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, um einen Gradient zu erstellen, der sich wiederholt in einer geraden Linie fortsetzt. Die Farben werden erneut durchlaufen, während sich der Gradient wiederholt. In diesem Fall ist die Gradientenlinie 10px lang.

```html hidden
<div class="repeating-linear"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.repeating-linear {
  background: repeating-linear-gradient(
    -45deg,
    red,
    red 5px,
    blue 5px,
    blue 10px
  );
}
```

{{ EmbedLiveSample('Repeating_linear_gradients', 120, 120) }}

### Mehrere wiederholende lineare Gradienten

Ähnlich wie bei regulären linearen und radialen Gradienten können Sie mehrere Gradienten übereinanderlegen. Dies macht nur Sinn, wenn die Gradienten teilweise transparent sind, so dass nachfolgende Gradienten durch die transparenten Bereiche hindurch sichtbar sind, oder wenn Sie verschiedene [background-sizes](/de/docs/Web/CSS/background-size) gegebenenfalls mit unterschiedlichen [background-position](/de/docs/Web/CSS/background-position) Eigenschaftswerten für jedes Gradientenbild einschließen. Wir verwenden Transparenz.

In diesem Fall sind die Gradientenlinien 300px, 230px und 300px lang.

```html hidden
<div class="multi-repeating-linear"></div>
```

```css hidden
div {
  width: 600px;
  height: 400px;
}
```

```css
.multi-repeating-linear {
  background:
    repeating-linear-gradient(
      190deg,
      rgb(255 0 0 / 50%) 40px,
      rgb(255 153 0 / 50%) 80px,
      rgb(255 255 0 / 50%) 120px,
      rgb(0 255 0 / 50%) 160px,
      rgb(0 0 255 / 50%) 200px,
      rgb(75 0 130 / 50%) 240px,
      rgb(238 130 238 / 50%) 280px,
      rgb(255 0 0 / 50%) 300px
    ),
    repeating-linear-gradient(
      -190deg,
      rgb(255 0 0 / 50%) 30px,
      rgb(255 153 0 / 50%) 60px,
      rgb(255 255 0 / 50%) 90px,
      rgb(0 255 0 / 50%) 120px,
      rgb(0 0 255 / 50%) 150px,
      rgb(75 0 130 / 50%) 180px,
      rgb(238 130 238 / 50%) 210px,
      rgb(255 0 0 / 50%) 230px
    ),
    repeating-linear-gradient(
      23deg,
      red 50px,
      orange 100px,
      yellow 150px,
      green 200px,
      blue 250px,
      indigo 300px,
      violet 350px,
      red 370px
    );
}
```

{{ EmbedLiveSample('Multiple_repeating_linear_gradients', 600, 400) }}

### Karierter Gradient

Um ein kariertes Muster zu erstellen, fügen wir mehrere überlappende Gradienten mit Transparenz ein. In der ersten Hintergrunddeklaration haben wir jeden Farbstopp separat aufgelistet. Die zweite Hintergrundeigenschaftsdeklaration verwendet die Syntax für mehrere Positionsfarbstopps:

```html hidden
<div class="plaid-gradient"></div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.plaid-gradient {
  background:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 50px,
      rgb(255 127 0 / 25%) 50px,
      rgb(255 127 0 / 25%) 56px,
      transparent 56px,
      transparent 63px,
      rgb(255 127 0 / 25%) 63px,
      rgb(255 127 0 / 25%) 69px,
      transparent 69px,
      transparent 116px,
      rgb(255 206 0 / 25%) 116px,
      rgb(255 206 0 / 25%) 166px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 50px,
      rgb(255 127 0 / 25%) 50px,
      rgb(255 127 0 / 25%) 56px,
      transparent 56px,
      transparent 63px,
      rgb(255 127 0 / 25%) 63px,
      rgb(255 127 0 / 25%) 69px,
      transparent 69px,
      transparent 116px,
      rgb(255 206 0 / 25%) 116px,
      rgb(255 206 0 / 25%) 166px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 5px,
      rgb(143 77 63 / 25%) 5px,
      rgb(143 77 63 / 25%) 10px
    ),
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 5px,
      rgb(143 77 63 / 25%) 5px,
      rgb(143 77 63 / 25%) 10px
    );

  background:
    repeating-linear-gradient(
      90deg,
      transparent 0 50px,
      rgb(255 127 0 / 25%) 50px 56px,
      transparent 56px 63px,
      rgb(255 127 0 / 25%) 63px 69px,
      transparent 69px 116px,
      rgb(255 206 0 / 25%) 116px 166px
    ),
    repeating-linear-gradient(
      0deg,
      transparent 0 50px,
      rgb(255 127 0 / 25%) 50px 56px,
      transparent 56px 63px,
      rgb(255 127 0 / 25%) 63px 69px,
      transparent 69px 116px,
      rgb(255 206 0 / 25%) 116px 166px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent 0 5px,
      rgb(143 77 63 / 25%) 5px 10px
    ),
    repeating-linear-gradient(
      45deg,
      transparent 0 5px,
      rgb(143 77 63 / 25%) 5px 10px
    );
}
```

{{ EmbedLiveSample('Plaid_gradient', 200, 200) }}

### Wiederholende radiale Gradienten

Dieses Beispiel verwendet {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, um einen Gradient zu erstellen, der sich wiederholt von einem zentralen Punkt aus ausbreitet. Die Farben werden immer wiederholt, während sich der Gradient wiederholt.

```html hidden
<div class="repeating-radial"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.repeating-radial {
  background: repeating-radial-gradient(
    black,
    black 5px,
    white 5px,
    white 10px
  );
}
```

{{ EmbedLiveSample('Repeating_radial_gradients', 120, 120) }}

### Mehrere wiederholende radiale Gradienten

```html hidden
<div class="multi-target"></div>
```

```css hidden
div {
  width: 250px;
  height: 150px;
}
```

```css
.multi-target {
  background:
    repeating-radial-gradient(
        ellipse at 80% 50%,
        rgb(0 0 0 / 50%),
        rgb(0 0 0 / 50%) 15px,
        rgb(255 255 255 / 50%) 15px,
        rgb(255 255 255 / 50%) 30px
      )
      top left no-repeat,
    repeating-radial-gradient(
        ellipse at 20% 50%,
        rgb(0 0 0 / 50%),
        rgb(0 0 0 / 50%) 10px,
        rgb(255 255 255 / 50%) 10px,
        rgb(255 255 255 / 50%) 20px
      )
      top left no-repeat yellow;
  background-size:
    200px 200px,
    150px 150px;
}
```

{{ EmbedLiveSample('Multiple_repeating_radial_gradients', 250, 150) }}

### Wiederholende konische Gradienten

Dieses Beispiel verwendet {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, um einen Gradient zu erstellen, der sich wiederholt um einen Mittelpunkt dreht. In diesem Fall werden die deklarierten Farbstopps vier Mal wiederholt.

```html hidden
<div class="repeating-conic"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.repeating-conic {
  background: repeating-conic-gradient(
    #66ccff 0% 8.25%,
    #6633ff 8.25% 16.5%,
    #ff3399 16.5% 25%
  );
}
```

{{ EmbedLiveSample('Repeating_conic_gradients', 120, 120) }}

### Mehrere wiederholende konische Gradienten

Genau wie lineare und radiale wiederholende Gradienten können Sie mehrere konische Gradienten übereinander stapeln und interessante Effekte erzielen, indem Sie verschiedene `at <position>` Werte verwenden, damit sich die konischen Gradienten nicht in ihren Zentren überlappen, und unterschiedliche `from <angle>` Werte, damit sich die wiederholenden Effekte nicht ausrichten. Dieses Beispiel überlappt drei halbtransparente, wiederholende radiale Gradienten, die jeweils ihre Farbschemata vier Mal wiederholen. Um überlappende Gradienten sichtbar zu machen, müssen Sie entweder sicherstellen, dass die Farben der Gradienten oben im Stapel teilweise transparent sind, oder die CSS-Eigenschaft {{cssxref("background-blend-mode")}} verwenden.

```html hidden
<div class="multi-repeating-conic"></div>
```

```css hidden
div {
  width: 250px;
  height: 250px;
}
```

```css
.multi-repeating-conic {
  background:
    repeating-conic-gradient(
      from 0deg at 80% 50%,
      #5691f580 0% 8.25%,
      #b338ff80 8.25% 16.5%,
      #f8305880 16.5% 25%
    ),
    repeating-conic-gradient(
      from 15deg at 50% 50%,
      #e856f580 0% 8.25%,
      #ff384c80 8.25% 16.5%,
      #e7f83080 16.5% 25%
    ),
    repeating-conic-gradient(
      from 0deg at 20% 50%,
      #f58356ff 0% 8.25%,
      #caff38ff 8.25% 16.5%,
      #30f88aff 16.5% 25%
    );
}
```

{{ EmbedLiveSample('Multiple_repeating_conic_gradients', 250, 250) }}

## Siehe auch

- Gradientenfunktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- Gradientbezogene CSS-Datentypen: {{cssxref("&lt;gradient&gt;")}}, {{cssxref("&lt;image&gt;")}}
- Gradientbezogene CSS-Eigenschaften: {{cssxref("background")}}, {{cssxref("background-image")}}
- [CSS-Gradientenmuster-Galerie, von Lea Verou](https://projects.verou.me/css3patterns/)
- [CSS-Gradientenbibliothek, von Estelle Weyl](https://standardista.com/cssgradients/)
- [Gradient CSS-Generator](https://cssgenerator.org/gradient-css-generator.html)
- [Fortgeschrittener CSS-Gradienten-Generator](https://colorbeta.com/)
