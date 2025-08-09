---
title: Verwendung von CSS-Verläufen
short-title: Verwendung von Verläufen
slug: Web/CSS/CSS_images/Using_CSS_gradients
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

**CSS-Verläufe** werden durch den Datentyp {{cssxref("&lt;gradient&gt;")}}, eine spezielle Art von {{cssxref("&lt;image&gt;")}}, repräsentiert, die einen fortschreitenden Übergang zwischen zwei oder mehr Farben darstellt. Sie können zwischen drei Arten von Verläufen wählen: _linear_ (erstellt mit der Funktion {{cssxref("gradient/linear-gradient", "linear-gradient()")}}), _radial_ (erstellt mit der Funktion {{cssxref("gradient/radial-gradient", "radial-gradient()")}}) und _konisch_ (erstellt mit der Funktion {{cssxref("gradient/conic-gradient", "conic-gradient()")}}). Sie können auch wiederholende Verläufe mit den Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} erstellen.

Verläufe können überall dort verwendet werden, wo Sie ein `<image>` verwenden würden, wie zum Beispiel in Hintergründen. Da Verläufe dynamisch generiert werden, können sie die Notwendigkeit von Rasterbilddateien negieren, die traditionell verwendet wurden, um ähnliche Effekte zu erzielen. Außerdem sehen Verläufe, die vom Browser generiert werden, beim Hineinzoomen besser aus und können problemlos in der Größe angepasst werden.

Wir beginnen mit der Einführung linearer Verläufe, dann stellen wir Funktionen vor, die in allen Verlaufsarten unterstützt werden und verwenden lineare Verläufe als Beispiel, bevor wir zu radialen, konischen und wiederholenden Verläufen übergehen.

## Verwendung von linearen Verläufen

Ein linearer Verlauf erstellt ein Band von Farben, die sich in einer geraden Linie verändern.

### Ein einfacher linearer Verlauf

Um die einfachste Art von Verlauf zu erstellen, müssen Sie lediglich zwei Farben angeben. Diese werden als _Farbstopps_ bezeichnet. Sie müssen mindestens zwei haben, können aber so viele haben, wie Sie möchten.

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

Standardmäßig verlaufen lineare Verläufe von oben nach unten. Sie können ihre Rotation ändern, indem Sie eine Richtung angeben.

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

### Diagonale Verläufe

Sie können den Verlauf sogar diagonal von Ecke zu Ecke verlaufen lassen.

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

Wenn Sie mehr Kontrolle über die Richtung haben möchten, können Sie dem Verlauf einen bestimmten Winkel geben.

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

Bei Verwendung eines Winkels erstellt `0deg` einen vertikalen Verlauf, der von unten nach oben verläuft, `90deg` erstellt einen horizontalen Verlauf von links nach rechts und so weiter im Uhrzeigersinn. Negative Winkel verlaufen in gegen den Uhrzeigersinn.

![Vier Kästchen, die den Winkel auflisten und den zugehörigen Verlauf von Rot zu Weiß zeigen. 0deg beginnt unten und geht nach oben. 90deg beginnt links und geht nach rechts. 180deg beginnt oben und geht nach unten. -90deg beginnt rechts und geht nach links.](linear_red_angles.png)

## Farben deklarieren & Effekte erstellen

Alle CSS-Verlaufsarten sind eine Reihe von positionsabhängigen Farben. Die durch CSS-Verläufe erzeugten Farben können je nach Position kontinuierlich variieren und erzeugen so sanfte Farbverläufe. Es ist auch möglich, Bänder aus Vollfarben und harte Übergänge zwischen zwei Farben zu erzeugen. Die folgenden gelten für alle Verlaufsfunktionen:

### Mehr als zwei Farben verwenden

Sie müssen sich nicht auf zwei Farben beschränken – Sie können so viele verwenden, wie Sie möchten! Standardmäßig sind die Farben gleichmäßig entlang des Verlaufs verteilt.

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

Sie müssen Ihre Farbstopps nicht an ihren Standardpositionen lassen. Um ihre Positionen genau abzustimmen, können Sie jedem Null, einen oder zwei Prozentsatz- oder, für radiale und lineare Verläufe, absolute Längenwerte geben. Wenn Sie den Standort als Prozentsatz angeben, repräsentiert `0%` den Startpunkt, während `100%` den Endpunkt repräsentiert; Sie können jedoch Werte außerhalb dieses Bereichs verwenden, falls erforderlich, um den gewünschten Effekt zu erzielen. Wenn Sie eine Position nicht angeben, wird die Position dieses bestimmten Farbstopps automatisch für Sie berechnet, wobei sich der erste Farbstopp bei `0%` und der letzte Farbstopp bei `100%` befindet, und alle anderen Farbstopps zwischen ihren angrenzenden Farbstopps liegen.

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

### Erstellung von harten Linien

Um eine harte Linie zwischen zwei Farben zu erstellen, wodurch ein Streifen anstelle eines allmählichen Übergangs entsteht, können benachbarte Farbstopps auf dieselbe Position gesetzt werden. In diesem Beispiel teilen sich die Farben einen Farbstopp bei der `50%`-Marke, also auf halbem Weg durch den Verlauf:

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

### Verlaufs-Hinweise

Standardmäßig wechselt der Verlauf gleichmäßig von einer Farbe zur nächsten. Sie können einen Farbhinweis einfügen, um den Mittelpunkt des Übergangswertes an einen bestimmten Punkt entlang des Verlaufs zu verschieben. In diesem Beispiel haben wir den Mittelpunkt des Übergangs von der 50%-Marke auf die 10%-Marke verschoben.

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

Um einen festen, nicht übergehenden Farbbereich innerhalb eines Verlaufs einzuschließen, geben Sie zwei Positionen für den Farbstopp an. Farbstopps können zwei Positionen haben, was zwei aufeinanderfolgende Farbstopps mit derselben Farbe an verschiedenen Positionen entspricht. Die Farbe erreicht die volle Sättigung am ersten Farbstopp, hält diese Sättigung bis zum zweiten Farbstopp aufrecht und wechselt über die erste Position des benachbarten Farbstopps zur Farbe des benachbarten Farbstopps.

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

Im ersten oben genannten Beispiel verläuft das Limette von der 0%-Marke, die impliziert ist, zur 20%-Marke, wechselt über die nächsten 10% der Breite des Verlaufs von Limette zu Rot, erreicht bei der 30%-Marke solides Rot und bleibt bis zu 45% durch den Verlauf fest Rot, wo es zu Cyan verblasst und für 15% des Verlaufs vollständig Cyan wird und so weiter.

Im zweiten Beispiel befindet sich der zweite Farbstopp für jede Farbe an derselben Position wie der erste Farbstopp für die benachbarte Farbe, was einen Streifeneffekt erzeugt.

In beiden Beispielen wird der Verlauf zweimal geschrieben: Das erste ist die CSS Images Level 3-Methode, die Farbe für jeden Stopp zu wiederholen, und das zweite Beispiel ist die CSS Images Level 4-Methode, die mehrere Farbstopp-Längen in einer linearen-Farbstopp-Deklaration einschließt.

### Steuerung des Fortschritts eines Verlaufs

Standardmäßig schreitet ein Verlauf gleichmäßig zwischen den Farben von zwei benachbarten Farbstopps fort, wobei der Mittelpunkt zwischen diesen beiden Farbstopps der Mittelpunktfarbwert ist. Sie können die {{Glossary("interpolation", "Interpolation")}} oder den Fortschritt zwischen zwei Farbstops steuern, indem Sie einen Farbhinweis-Lagewinkel angeben. In diesem Beispiel erreicht die Farbe den Mittelpunkt zwischen Limette und Cyan 20% des Weges durch den Verlauf, anstatt 50% des Weges. Das zweite Beispiel enthält den Hinweis nicht, um den Unterschied hervorzuheben, den der Farbhinweis macht:

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

### Überlagerung von Verläufen

Verläufe unterstützen Transparenz, sodass Sie mehrere Hintergründe stapeln können, um einige ziemlich beeindruckende Effekte zu erzielen. Die Hintergründe werden von oben nach unten gestapelt, wobei das zuerst angegebene oben liegt.

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

### Gestapelte Verläufe

Sie können auch Verläufe mit anderen Verläufen stapeln. Solange die oberen Verläufe nicht vollständig undurchsichtig sind, sind die darunterliegenden Verläufe weiterhin sichtbar.

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
    linear-gradient(217deg, rgb(255 0 0 / 80%), transparent 70.71%),
    linear-gradient(127deg, rgb(0 255 0 / 80%), transparent 70.71%),
    linear-gradient(336deg, rgb(0 0 255 / 80%), transparent 70.71%);
}
```

{{ EmbedLiveSample('Stacked_gradients', 200, 200) }}

### Mischung von Verläufen

Zusätzlich zur Transparenz, dem Stapeln mehrerer halbtransparenter Verläufe und dem Stapeln von Verläufen über Rasterhintergrundbildern, können Verläufe mit anderen CSS-Effekten verwendet werden. In diesem Beispiel haben die vier {{htmlelement("div")}}-Elemente dieselben zwei vollständig undurchsichtigen Verläufe als Hintergrundbilder. Wir wenden unterschiedliche CSS-Werte der {{cssxref("background-blend-mode")}}-Eigenschaft auf die letzten drei an, die die beiden Hintergrundbilder mischen und unterschiedliche Effekte erzeugen.

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

## Verwendung von radialen Verläufen

Radiale Verläufe ähneln linearen Verläufen, außer dass sie von einem zentralen Punkt ausstrahlen. Sie können bestimmen, wo sich dieser zentrale Punkt befindet. Sie können sie auch kreisförmig oder elliptisch gestalten.

### Ein einfacher radialer Verlauf

Genau wie bei linearen Verläufen benötigen Sie zur Erstellung eines radialen Verlaufs zwei Farben. Standardmäßig befindet sich das Zentrum des Verlaufs bei der 50%-50%-Marke, und der Verlauf ist elliptisch und entspricht dem {{Glossary("aspect_ratio", "Seitenverhältnis")}} seines Kastens:

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

### Positionierung radialer Farbstopps

Eben wie bei linearen Verläufen können Sie jeden radialen Farbstopp mit einem Prozentsatz oder einer absoluten Länge positionieren.

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
  background: radial-gradient(red 10px, yellow 30%, dodgerblue 50%);
}
```

{{ EmbedLiveSample('Positioning_radial_color_stops', 120, 120) }}

### Positionierung des Zentrums des Verlaufs

Sie können das Zentrum des Verlaufs mit Schlüsselwörtern, Prozentwerten oder absoluten Längenwerten positionieren, wobei sich Längen- und Prozentwerte wiederholen, wenn nur einer vorhanden ist, andernfalls in der Reihenfolge der Position von links und Position von oben.

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
  background: radial-gradient(at 0% 30%, red 10px, yellow 30%, dodgerblue 50%);
}
```

{{ EmbedLiveSample('Positioning_the_center_of_the_gradient', 120, 120) }}

### Größe von radialen Verläufen

Im Gegensatz zu linearen Verläufen können Sie die Größe von radialen Verläufen angeben. Mögliche Werte sind `closest-corner`, `closest-side`, `farthest-corner` und `farthest-side`, wobei `farthest-corner` der Standardwert ist. Kreise können auch mit einer Länge und Ellipsen mit einer Länge oder einem Prozentsatz dimensioniert werden.

#### Beispiel: `closest-side` für Ellipsen

Dieses Beispiel verwendet den Größenwert `closest-side`, was bedeutet, dass die Größe durch den Abstand vom Startpunkt (der Mitte) zur nächstgelegenen Seite des umschließenden Kastens festgelegt wird.

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
    dodgerblue 50%,
    beige
  );
}
```

{{ EmbedLiveSample('Example_closest-side_for_ellipses', 240, 100) }}

#### Beispiel: `farthest-corner` für Ellipsen

Dieses Beispiel ähnelt dem vorherigen, außer dass seine Größe als `farthest-corner` angegeben ist, was die Größe des Verlaufs durch den Abstand vom Startpunkt zur am weitesten entfernten Ecke des umschließenden Kastens vom Startpunkt aus festlegt.

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
    dodgerblue 50%,
    beige
  );
}
```

{{ EmbedLiveSample('Example_farthest-corner_for_ellipses', 240, 100) }}

#### Beispiel: `closest-side` für Kreise

Dieses Beispiel verwendet `closest-side`, was bedeutet, dass der Radius des Kreises der Abstand zwischen der Mitte des Verlaufs und der nächsten Seite ist. In diesem Fall ist der Radius der Abstand zwischen der Mitte und der unteren Kante, da der Verlauf 25% von links und 25% von unten platziert ist und die Höhe des div-Elements kleiner als die Breite ist.

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
    dodgerblue 50%,
    beige
  );
}
```

{{ EmbedLiveSample('Example_closest-side_for_circles', 240, 120) }}

#### Beispiel: Länge oder Prozentsatz für Ellipsen

Nur für Ellipsen können Sie die Ellipse mit einer Länge oder einem Prozentsatz dimensionieren. Der erste Wert steht für den horizontalen Radius, der zweite für den vertikalen Radius, wobei ein Prozentsatz verwendet wird, der der Größe des Kastens in dieser Dimension entspricht. Im folgenden Beispiel habe ich einen Prozentsatz für den horizontalen Radius verwendet.

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
    dodgerblue 50%,
    beige
  );
}
```

{{ EmbedLiveSample('Example_length_or_percentage_for_ellipses', 240, 120) }}

#### Beispiel: Länge für Kreise

Für Kreise kann die Größe als {{cssxref("length")}} angegeben werden, was die Größe des Kreises ist.

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
  background: radial-gradient(
    circle 50px,
    red,
    yellow 10%,
    dodgerblue 50%,
    beige
  );
}
```

{{ EmbedLiveSample('Example_length_for_circles', 240, 120) }}

### Gestapelte radiale Verläufe

Genau wie lineare Verläufe können Sie auch radiale Verläufe stapeln. Der zuerst angegebene ist oben, der letzte unten.

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
    radial-gradient(circle at 50% 0, rgb(255 0 0 / 50%), transparent 70.71%),
    radial-gradient(circle at 6.7% 75%, rgb(0 0 255 / 50%), transparent 70.71%),
    radial-gradient(circle at 93.3% 75%, rgb(0 255 0 / 50%), transparent 70.71%)
      beige;
  border-radius: 50%;
}
```

{{ EmbedLiveSample('Stacked_radial_gradients', 200, 200) }}

## Verwendung von konischen Verläufen

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS)-Funktion erstellt ein Bild, das aus einem Verlauf besteht, bei dem sich Farbwechsel um einen Mittelpunkt drehen (anstatt vom Zentrum aus zu strahlen). Beispiele für konische Verläufe sind Tortendiagramme und {{Glossary("color_wheel", "Farbkreise")}}, aber sie können auch zum Erstellen von Schachbrettmustern und anderen interessanten Effekten verwendet werden.

Die Syntax der conic-gradient-Funktion ähnelt der radial-gradient-Syntax, aber die Farbstopps werden um einen Verlaufsbogen, den Umfang eines Kreises, platziert, statt auf der Verlaufsachse in der Mitte des Verlaufs, und die Farbstopps sind Prozentwerte oder Grad: absolute Längen sind nicht gültig.

In einem radialen Verlauf gehen die Farben vom Zentrum der Ellipse nach außen in alle Richtungen über. Bei konischen Verläufen wechseln die Farben, als ob sie im Uhrzeigersinn um das Zentrum eines Kreises gedreht werden. Ähnlich wie bei radialen Verläufen können Sie das Zentrum des Verlaufs positionieren. Ähnlich wie bei linearen Verläufen können Sie den Verlaufswinkel ändern.

### Ein einfacher konischer Verlauf

Wie bei linearen und radialen Verläufen benötigen Sie zur Erstellung eines konischen Verlaufs nur zwei Farben. Standardmäßig befindet sich das Zentrum des Verlaufs bei der 50%-50%-Marke, wobei der Beginn des Verlaufs nach oben zeigt:

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

Wie bei radialen Verläufen können Sie das Zentrum des konischen Verlaufs mit Schlüsselwörtern, Prozentwerten oder absoluten Längenwerten positionieren, wobei das Schlüsselwort "at" verwendet wird.

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
  background: conic-gradient(at 0% 30%, red 10%, yellow 30%, dodgerblue 50%);
}
```

{{ EmbedLiveSample('Positioning_the_conic_center', 120, 120) }}

### Ändern des Winkels

Standardmäßig sind die verschiedenen von Ihnen angegebenen Farbstopps gleichmäßig um den Kreis verteilt. Sie können den Startwinkel des konischen Verlaufs ändern, indem Sie das Schlüsselwort "from" am Anfang gefolgt von einem Winkel oder einer Länge verwenden, und Sie können unterschiedliche Positionen für die Farbstopps angeben, indem Sie nach ihnen einen Winkel oder eine Längeneinheit einschließen.

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

## Verwendung von wiederholenden Verläufen

Die Funktionen {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}} und {{cssxref("gradient/conic-gradient", "conic-gradient()")}} unterstützen keine automatisch wiederholten Farbstopps. Es stehen jedoch die Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} zur Verfügung, um diese Funktionalität bereitzustellen.

Die Größe der wiederholten Verlaufsachse oder des -bogens ist die Länge zwischen dem ersten Farbstopp-Wert und dem letzten Farbstopp-Längenwert. Wenn der erste Farbstopp nur eine Farbe hat und keine Farbstopp-Länge, liegt der Wert standardmäßig bei 0. Wenn der letzte Farbstopp nur eine Farbe hat und keine Farbstopp-Länge, liegt der Wert standardmäßig bei 100%. Wenn keiner angegeben ist, ist die Verlaufsachse 100%, was bedeutet, dass die linearen und konischen Verläufe sich nicht wiederholen und der radiale Verlauf nur wiederholt, wenn der Radius des Verlaufs kleiner als der Abstand zwischen dem Zentrum des Verlaufs und der am weitesten entfernten Ecke ist. Wenn der erste Farbstopp angegeben ist und der Wert größer als 0 ist, wird der Verlauf wiederholt, da die Größe der Achse oder des Bogens die Differenz zwischen dem ersten Farbstopp und dem letzten Farbstopp weniger als 100% oder 360 Grad ist.

### Wiederholende lineare Verläufe

Dieses Beispiel verwendet die Funktion {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, um einen Verlauf zu erstellen, der sich in einer geraden Linie wiederholt. Die Farben werden nach und nach über den Verlauf hinweg wiederholt. In diesem Fall ist die Verlaufsachse 10px lang.

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

### Mehrfache wiederholende lineare Verläufe

Ähnlich wie bei regulären linearen und radialen Verläufen können Sie mehrere Verläufe übereinander legen. Dies ist nur sinnvoll, wenn die Verläufe teilweise transparent sind und die nachfolgenden Verläufe durch die transparenten Bereiche sichtbar werden, oder wenn Sie unterschiedliche [background-sizes](/de/docs/Web/CSS/background-size) und optional unterschiedliche Werte für [background-position](/de/docs/Web/CSS/background-position) für jedes Verlaufsbild angeben. Wir verwenden Transparenz.

In diesem Fall sind die Verlaufsachsen 300px, 230px und 300px lang.

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

### Tartanmuster

Um ein Tartanmuster zu erstellen, kombinieren wir mehrere sich überlappende Verläufe mit Transparenz. In der ersten Hintergrunddeklaration haben wir jeden Farbstop separat aufgelistet. Die zweite Hintergrunddeklaration verwendet die Syntax für mehrere Postionsfarbstops.

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

### Wiederholende radiale Verläufe

Dieses Beispiel verwendet {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, um einen Verlauf zu erstellen, der sich von einem zentralen Punkt aus wiederholt ausstrahlt. Die Farben laufen immer wieder ab, während sich der Verlauf wiederholt.

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

### Mehrfache wiederholende radiale Verläufe

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

### Wiederholende konische Verläufe

Dieses Beispiel verwendet {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, um einen Verlauf zu erstellen, der sich um einen zentralen Punkt herum wiederholt dreht. In diesem Fall werden die erklärten Farbstopps viermal wiederholt.

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

### Mehrere wiederholende konische Verläufe

Genauso wie lineare und radiale wiederholende Verläufe können Sie mehrere konische Verläufe übereinanderlegen, um interessante Effekte zu erzielen, indem Sie verschiedene `at <position>`-Werte verwenden, sodass sich die konischen Verläufe in ihren Zentren nicht überlappen, und verschiedene `from <angle>`-Werte, sodass sich die wiederholenden Effekte nicht ausrichten. Dieses Beispiel überlappt drei halbtransparente wiederholende radiale Verläufe, die jeweils ihre Farbschemata viermal wiederholen. Um überlappende Verläufe sichtbar zu machen, müssen Sie sicherstellen, dass entweder die Farben der Verläufe an der Spitze des Stapels teilweise transparent sind oder die CSS-Eigenschaft {{cssxref("background-blend-mode")}} verwenden.

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

- Verlaufsfunktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- Mit Verläufen verwandte CSS-Datentypen: {{cssxref("&lt;gradient&gt;")}}, {{cssxref("&lt;image&gt;")}}
- Mit Verläufen verwandte CSS-Eigenschaften: {{cssxref("background")}}, {{cssxref("background-image")}}
- [CSS Verläufe Muster Galerie, von Lea Verou](https://projects.verou.me/css3patterns/)
- [Gradient CSS Generator](https://cssgenerator.org/gradient-css-generator.html)
- [Erweiterter CSS Gradient Generator](https://colorbeta.com/)
