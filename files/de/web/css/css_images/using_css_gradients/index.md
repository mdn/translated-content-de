---
title: Verwendung von CSS-Gradients
slug: Web/CSS/CSS_images/Using_CSS_gradients
l10n:
  sourceCommit: 9c8c461dc350668ad326fa9aad604ce9da800df2
---

{{CSSRef}}

**CSS-Gradients** werden durch den {{cssxref("&lt;gradient&gt;")}} Datentyp dargestellt, ein spezieller Typ von {{cssxref("&lt;image&gt;")}}, der eine allmähliche Übergang zwischen zwei oder mehreren Farben darstellt. Sie können zwischen drei Arten von Gradients wählen: _linear_ (erstellt mit der {{cssxref("gradient/linear-gradient", "linear-gradient()")}} Funktion), _radial_ (erstellt mit der {{cssxref("gradient/radial-gradient", "radial-gradient()")}} Funktion) und _konisch_ (erstellt mit der {{cssxref("gradient/conic-gradient", "conic-gradient()")}} Funktion). Sie können auch wiederholende Gradients mit den Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} erstellen.

Gradients können überall dort verwendet werden, wo Sie ein `<image>` verwenden würden, z.B. in Hintergründen. Da Gradients dynamisch erzeugt werden, können sie die Notwendigkeit für Rasterbilddateien negieren, die traditionell für ähnliche Effekte verwendet wurden. Außerdem sehen Gradients, die vom Browser generiert werden, beim Vergrößern besser aus und können im laufenden Betrieb skaliert werden.

Wir beginnen mit einer Einführung in lineare Gradients, stellen dann Funktionen vor, die in allen Gradienttypen unterstützt werden, und verwenden lineare Gradients als Beispiel, bevor wir uns radialen, konischen und wiederholenden Gradients zuwenden.

## Verwendung von linearen Gradients

Ein linearer Gradient erzeugt ein Farbbereich, der in einer geraden Linie fortschreitet.

### Ein einfacher linearer Gradient

Um die einfachste Art von Gradient zu erstellen, müssen Sie nur zwei Farben angeben. Diese werden _Farbstopps_ genannt. Sie müssen mindestens zwei haben, aber es können so viele sein, wie Sie möchten.

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

### Änderung der Richtung

Standardmäßig verlaufen lineare Gradients von oben nach unten. Sie können ihre Rotation ändern, indem Sie eine Richtung angeben.

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

### Diagonale Gradients

Sie können sogar den Gradient diagonal von Ecke zu Ecke verlaufen lassen.

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

Wenn Sie mehr Kontrolle über die Richtung wünschen, können Sie dem Gradient einen bestimmten Winkel geben.

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

Wenn Sie einen Winkel verwenden, erzeugt `0deg` einen vertikalen Gradient, der von unten nach oben verläuft, `90deg` einen horizontalen Gradient, der von links nach rechts verläuft, und so weiter im Uhrzeigersinn. Negative Winkel verlaufen gegen den Uhrzeigersinn.

![Vier Kästchen, die Winkel anzeigen und den zugehörigen Gradient von rot nach weiß. 0deg beginnt unten und geht nach oben. 90deg beginnt links und geht nach rechts. 180deg beginnt oben und geht nach unten. -90deg beginnt rechts und geht nach links.](linear_red_angles.png)

## Farben definieren & Effekte erzeugen

Alle CSS-Gradienttypen sind ein Bereich von positionsabhängigen Farben. Die von CSS-Gradients erzeugten Farben können mit der Position kontinuierlich variieren und sanfte Farbübergänge erzeugen. Es ist auch möglich, Bänder voller Farben und harte Übergänge zwischen zwei Farben zu erstellen. Die folgenden Punkte gelten für alle Gradientfunktionen:

### Verwendung von mehr als zwei Farben

Sie müssen sich nicht auf zwei Farben beschränken – Sie können so viele Farben verwenden, wie Sie möchten! Standardmäßig sind die Farben gleichmäßig entlang des Gradients verteilt.

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

### Positionierung von Farbstopps

Sie müssen Ihre Farbstopps nicht an ihren Standardpositionen lassen. Um deren Positionen fein abzustimmen, können Sie jedem eine Null, einen oder zwei Prozentsätze oder für radiale und lineare Gradients absolute Längenwerte zuweisen. Wenn Sie die Position als Prozentsatz angeben, stellt `0%` den Startpunkt dar, während `100%` den Endpunkt darstellt; Sie können jedoch Werte außerhalb dieses Bereichs verwenden, um den gewünschten Effekt zu erzielen. Wenn Sie keine Position angeben, wird die Position des jeweiligen Farbstopps automatisch für Sie berechnet, wobei der erste Farbstopp bei `0%` liegt und der letzte Farbstopp bei `100%`, und alle anderen Farbstopps auf halbem Weg zwischen benachbarten Farbstopps liegen.

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

### Harte Linien erzeugen

Um eine harte Linie zwischen zwei Farben zu erzeugen, die einen Streifen anstelle eines allmählichen Übergangs bildet, können benachbarte Farbstopps auf dieselbe Position gesetzt werden. In diesem Beispiel teilen sich die Farben einen Farbstopp an der `50%`-Markierung, auf halbem Weg durch den Gradient:

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

### Gradientvarianten

Standardmäßig verlaufen Gradients gleichmäßig von einer Farbe zur nächsten. Sie können einen Farbhinweis hinzufügen, um den Mittelpunkt des Übergangswerts an einen bestimmten Punkt entlang des Gradients zu verschieben. In diesem Beispiel haben wir den Mittelpunkt des Übergangs von der 50%-Markierung auf die 10%-Markierung verschoben.

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

### Farbbanden & Streifen erstellen

Um einen festen, nicht übergangenen Farbbereich innerhalb eines Gradients zu erstellen, geben Sie zwei Positionen für den Farbstopp an. Farbstopps können zwei Positionen haben, was zwei aufeinanderfolgende Farbstopps mit derselben Farbe an unterschiedlichen Positionen entspricht. Die Farbe erreicht ihre volle Sättigung am ersten Farbstopp, behält diese Sättigung bis zum zweiten Farbstopp und wechselt zur Farbe des angrenzenden Farbstopps über die erste Position des angrenzenden Farbstopps.

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

Im ersten obigen Beispiel geht das Limettengrün von der 0%-Markierung, die impliziert ist, bis zur 20%-Markierung, wechselt über die nächsten 10% der Breite des Gradients von Limette zu Rot, erreicht festes Rot bei der 30%-Markierung und bleibt bis 45% durch den Gradient fest rot, wo es zu Cyan verblasst, das für 15% des Gradients voll cyanfärbig ist, und so weiter.

Im zweiten Beispiel befindet sich der zweite Farbstopp für jede Farbe an der gleichen Position wie der erste Farbstopp für die benachbarte Farbe, was einen Streifeneffekt erzeugt.

In beiden Beispielen wird der Gradient zweimal geschrieben: das erste ist die Methode von CSS Images Level 3, bei der die Farbe für jeden Stopp wiederholt wird, und das zweite Beispiel ist die Methode von CSS Images Level 4, mit mehreren Farbstopp-Längen in einer linearen Color-Stop-Deklaration.

### Kontrolle der Verlaufsgestaltung eines Gradients

Standardmäßig verläuft ein Gradient gleichmäßig zwischen den Farben von zwei angrenzenden Farbstopps, wobei der Mittelpunkt zwischen diesen beiden Farbstopps der Mittelpunkt der Farbe ist. Sie können die {{Glossary("interpolation", "Interpolation")}} oder Progression zwischen zwei Farbstopps kontrollieren, indem Sie eine Farbe-Hinweisposition hinzufügen. In diesem Beispiel erreicht die Farbe den Mittelpunkt zwischen Limette und Cyan 20% des Weges durch den Gradient anstelle von 50% des Weges durch. Das zweite Beispiel enthält den Hinweis nicht, um den Unterschied hervorzuheben, den der Farbhinweis machen kann:

```html hidden
<div class="colorhint-gradient"></div>
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
.colorhint-gradient {
  background: linear-gradient(to top, lime, 20%, cyan);
}
.regular-progression {
  background: linear-gradient(to top, lime, cyan);
}
```

{{ EmbedLiveSample('Controlling_the_progression_of_a_gradient', 120, 120) }}

### Überlagerung von Gradients

Gradients unterstützen Transparenz, sodass Sie mehrere Hintergründe stapeln können, um einige ziemlich raffinierte Effekte zu erzielen. Die Hintergründe werden von oben nach unten gestapelt, wobei der zuerst angegebene oben ist.

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
  background: linear-gradient(to right, transparent, mistyrose),
    url("critters.png");
}
```

{{ EmbedLiveSample('Overlaying_gradients', 300, 150) }}

### Gestapelte Gradients

Sie können sogar Gradients mit anderen Gradients stapeln. Solange die oberen Gradients nicht vollständig undurchsichtig sind, bleiben die darunter liegenden Gradients sichtbar.

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
  background: linear-gradient(
      217deg,
      rgb(255 0 0 / 80%),
      rgb(255 0 0 / 0%) 70.71%
    ),
    linear-gradient(127deg, rgb(0 255 0 / 80%), rgb(0 255 0 / 0%) 70.71%),
    linear-gradient(336deg, rgb(0 0 255 / 80%), rgb(0 0 255 / 0%) 70.71%);
}
```

{{ EmbedLiveSample('Stacked_gradients', 200, 200) }}

### Gradients mischen

Zusätzlich zur Transparenz, dem Stapeln mehrerer halbdurchsichtiger Gradients und dem Stapeln von Gradients über Rasterhintergrundbilder können Gradients mit anderen CSS-Effekten verwendet werden. In diesem Beispiel haben die vier {{htmlelement("div")}}-Elemente dieselben zwei vollständig undurchsichtigen Gradients als Hintergrundbilder. Wir wenden unterschiedliche Werte der CSS-Eigenschaft {{cssxref("background-blend-mode")}} auf die letzten drei an, die die beiden Hintergrundbilder mischen und unterschiedliche Effekte erzeugen.

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
  background: linear-gradient(to top, red, blue),
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

## Verwendung von radialen Gradients

Radiale Gradients sind den linearen Gradients ähnlich, außer dass sie von einem zentralen Punkt aus strahlen. Sie können festlegen, wo sich dieser zentrale Punkt befindet. Sie können sie auch kreisförmig oder elliptisch gestalten.

### Ein einfacher radialer Gradient

Wie bei linearen Gradients benötigen Sie nur zwei Farben, um einen radialen Gradient zu erstellen. Standardmäßig befindet sich das Zentrum des Gradients an der 50% 50%-Markierung, und der Gradient ist elliptisch und entspricht dem {{Glossary("aspect_ratio", "Seitenverhältnis")}} seines Rahmens:

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

### Positionierung von radialen Farbstopps

Wie lineare Gradients können Sie auch jeden radialen Farbstopp mit einem Prozentsatz oder einer absoluten Länge positionieren.

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

### Positionierung des Zentrums des Gradients

Sie können das Zentrum des Gradients mit Schlüsselbegriffen, Prozentsätzen oder absoluten Längen positionieren, indem Länge und Prozentsätze Werte wiederholt werden, wenn nur eine vorhanden ist, andernfalls in der Reihenfolge von Position von links und Position von oben.

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

### Größe von radialen Gradients

Im Gegensatz zu linearen Gradients können Sie die Größe von radialen Gradients angeben. Mögliche Werte sind `closest-corner`, `closest-side`, `farthest-corner` und `farthest-side`, wobei `farthest-corner` der Standard ist. Kreise können auch mit einer Länge und Ellipsen mit einer Länge oder einem Prozentsatz dimensioniert werden.

#### Beispiel: `closest-side` für Ellipsen

Dieses Beispiel verwendet den Größenwert `closest-side`, was bedeutet, dass die Größe durch den Abstand vom Startpunkt (dem Zentrum) zur nächsten Seite des umschließenden Rahmens festgelegt ist.

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

Dieses Beispiel ähnelt dem vorherigen, außer dass seine Größe als `farthest-corner` angegeben ist, was die Größe des Gradients durch den Abstand vom Startpunkt zur entferntesten Ecke des umschließenden Rahmens vom Startpunkt aus festlegt.

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

Dieses Beispiel verwendet `closest-side`, was bedeutet, dass der Radius des Kreises der Abstand zwischen dem Zentrum des Gradients und der nächsten Seite ist. In diesem Fall ist der Radius der Abstand zwischen dem Zentrum und der unteren Kante, weil der Gradient 25% von links und 25% von unten platziert ist und die Höhe des div Elements kleiner ist als die Breite.

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

Nur für Ellipsen können Sie die Ellipse mit einer Länge oder einem Prozentsatz dimensionieren. Der erste Wert stellt den horizontalen Radius dar, der zweite den vertikalen Radius, wenn Sie einen Prozentsatz verwenden, entspricht dies der Größe des Rahmens in dieser Dimension. Im untenstehenden Beispiel habe ich einen Prozentsatz für den horizontalen Radius verwendet.

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

Für Kreise kann die Größe als {{cssxref("length")}} angegeben werden, was der Größe des Kreises entspricht.

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

### Gestapelte radiale Gradients

Wie lineare Gradients können Sie auch radiale Gradients stapeln. Der zuerst angegebene ist oben, der letzte unten.

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

## Verwendung von konischen Gradients

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS) Funktion erstellt ein Bild, das aus einem Gradient mit Farbübergängen besteht, die um einen Mittelpunkt gedreht sind (statt vom Zentrum aus zu strahlen). Beispiele für konische Gradients sind Tortendiagramme und {{Glossary("color_wheel", "Farbkreise")}}, aber sie können auch zur Erstellung von Schachbrettmustern und anderen interessanten Effekten verwendet werden.

Die Syntax für konische Gradients ähnelt der für radiale Gradients, aber die Farbstopps werden um einen Gradientbogen herum platziert, den Umfang eines Kreises, anstatt auf der von der Mitte des Gradients ausgehenden Gradientlinie, und die Farbstopps sind Prozentsätze oder Grad: absolute Längen sind nicht gültig.

In einem radialen Gradient verlaufen die Farben von der Mitte einer Ellipse ausgehend in alle Richtungen. Bei konischen Gradients verlaufen die Farben, als würden sie um das Zentrum eines Kreises geschwungen, beginnend oben und im Uhrzeigersinn verlaufend. Ähnlich wie bei radialen Gradients können Sie das Zentrum des Gradients positionieren. Ähnlich wie bei linearen Gradients können Sie den Winkel des Gradients ändern.

### Ein einfacher konischer Gradient

Wie bei linearen und radialen Gradients benötigen Sie nur zwei Farben, um einen konischen Gradient zu erstellen. Standardmäßig befindet sich das Zentrum des Gradients an der 50% 50%-Markierung, wobei der Beginn des Gradients nach oben zeigt:

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

Wie radiale Gradients können Sie das Zentrum des konischen Gradients mit Schlüsselbegriffen, Prozentsätzen oder absoluten Längen positionieren, mit dem Schlüsselwort "at"

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

### Änderung des Winkels

Standardmäßig sind die verschiedenen von Ihnen angegebenen Farbstopps gleichabständig um den Kreis verteilt. Sie können den Startwinkel des konischen Gradients mit dem Schlüsselwort "from" am Anfang gefolgt von einem Winkel oder einer Länge positionieren, und Sie können verschiedene Positionen für die Farbstopps angeben, indem Sie einen Winkel oder eine Länge nach ihnen einschließen.

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

## Verwendung von wiederholenden Gradients

Die {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}} und {{cssxref("gradient/conic-gradient", "conic-gradient()")}} Funktionen unterstützen keine automatisch wiederholten Farbstopps. Jedoch stehen die Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} zur Verfügung, um diese Funktionalität zu bieten.

Die Größe der sich wiederholenden Gradientlinie oder des Bogens entspricht der Länge zwischen dem ersten Farbstoppwert und dem letzten Farbstopplängenwert. Wenn der erste Farbstopp nur eine Farbe und keine Farbstopplänge hat, standardisiert sich der Wert auf 0. Wenn der letzte Farbstopp nur eine Farbe und keine Farbstopplänge hat, standardisiert sich der Wert auf 100%. Wenn weder deklariert ist, beträgt die Gradientlinie 100%, was bedeutet, dass sich die linearen und konischen Gradients nicht wiederholen werden, und der radiale Gradient nur dann wiederholt wird, wenn der Radius des Gradients kleiner ist als die Länge zwischen dem Zentrum des Gradients und der entferntesten Ecke. Wenn der erste Farbstopp deklariert ist und der Wert größer als 0 ist, wird sich der Gradient wiederholen, da die Größe der Linie oder des Bogens der Unterschied zwischen dem ersten Farbstopp und dem letzten Farbstopp ist und weniger als 100% oder 360 Grad beträgt.

### Wiederholende lineare Gradients

Dieses Beispiel verwendet {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, um einen Gradient zu erstellen, der wiederholt in einer geraden Linie verläuft. Die Farben wiederholen sich immer wieder, sobald der Gradient sich wiederholt. In diesem Fall ist die Gradientlinie 10px lang.

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

### Mehrere wiederholende lineare Gradients

Ähnlich wie bei normalen linearen und radialen Gradients können Sie mehrere Gradients einbeziehen, einen über dem anderen. Dies macht nur Sinn, wenn die Gradients teilweise transparent sind und die nachfolgenden Gradients durch die transparenten Bereiche hindurch sichtbar sind, oder wenn Sie unterschiedliche [Hintergrundgrößen](/de/docs/Web/CSS/background-size) optional mit unterschiedlichen [Hintergrundpositionen](/de/docs/Web/CSS/background-position) Eigenschaftswerte für jedes Gradient-Bild verwenden. Wir nutzen Transparenz.

In diesem Fall sind die Gradientlinien 300px, 230px und 300px lang.

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
  background: repeating-linear-gradient(
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

### Schottenmuster-Gradient

Um ein Schottenmuster zu erstellen, schließen wir mehrere überlappende Gradients mit Transparenz ein. In der ersten Hintergrunddeklaration haben wir jeden Farbstopp einzeln aufgelistet. Die zweite Hintergrunddeklaration verwendet die Syntax für mehrere Positionsfarbstopps:

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
  background: repeating-linear-gradient(
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

  background: repeating-linear-gradient(
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

### Wiederholende radiale Gradients

Dieses Beispiel verwendet {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, um einen Gradient zu erstellen, der sich wiederholt von einem zentralen Punkt aus ausbreitet. Die Farben wiederholen sich immer wieder, sobald der Gradient sich wiederholt.

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

### Mehrere wiederholende radiale Gradients

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

### Wiederholende konische Gradients

Dieses Beispiel verwendet {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, um einen Gradient zu erstellen, der sich wiederholt um einen Mittelpunkt dreht. In diesem Fall werden die deklarierten Farbstopps viermal wiederholt.

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

### Mehrere wiederholende konische Gradients

Wie lineare und radiale wiederholende Gradients können Sie mehrere konische Gradients übereinander stapeln, indem Sie interessante Effekte erzielen, indem Sie unterschiedliche `at <position>` Werte verwenden, damit die konischen Gradients in ihren Zentren nicht überlappen, und unterschiedliche `from <angle>` Werte, damit sich die wiederholenden Effekte nicht ausrichten. Dieses Beispiel überlagert drei halbtransparente, sich wiederholende radiale Gradients, die jeweils ihr Farbschema viermal wiederholen. Um überlappende Gradients sichtbar zu machen, müssen Sie entweder sicherstellen, dass die Farben der Gradients oben im Stapel teilweise transparent sind oder die CSS-Eigenschaft {{cssxref("background-blend-mode")}} verwenden.

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
  background: repeating-conic-gradient(
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

- Gradientfunktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- Gradient-bezogene CSS-Datentypen: {{cssxref("&lt;gradient&gt;")}}, {{cssxref("&lt;image&gt;")}}
- Gradient-bezogene CSS-Eigenschaften: {{cssxref("background")}}, {{cssxref("background-image")}}
- [CSS Gradients Patterns Galerie, von Lea Verou](https://projects.verou.me/css3patterns/)
- [CSS Gradients Bibliothek, von Estelle Weyl](https://standardista.com/cssgradients/)
- [Gradient CSS Generator](https://cssgenerator.org/gradient-css-generator.html)
- [Erweiterter CSS-Gradient-Generator](https://colorbeta.com/)
