---
title: Verwenden von CSS-Verläufen
short-title: Verwendung von Verläufen
slug: Web/CSS/CSS_images/Using_CSS_gradients
l10n:
  sourceCommit: 30c9f71e6a6cac4d894688cabf7e4b50af87cfe5
---

**CSS-Verläufe** werden durch den {{cssxref("&lt;gradient&gt;")}} Datentyp dargestellt, eine spezielle Art von {{cssxref("&lt;image&gt;")}}, die aus einem progressiven Übergang zwischen zwei oder mehr Farben besteht. Sie können zwischen drei Arten von Verläufen wählen: _linear_ (erstellt mit der {{cssxref("gradient/linear-gradient", "linear-gradient()")}} Funktion), _radial_ (erstellt mit der {{cssxref("gradient/radial-gradient", "radial-gradient()")}} Funktion) und _konisch_ (erstellt mit der {{cssxref("gradient/conic-gradient", "conic-gradient()")}} Funktion). Sie können auch wiederholende Verläufe mit den Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} erstellen.

Verläufe können überall verwendet werden, wo Sie ein `<image>` verwenden würden, beispielsweise in Hintergründen. Da Verläufe dynamisch generiert werden, können sie die Notwendigkeit von Rasterbilddateien negieren, die traditionell verwendet wurden, um ähnliche Effekte zu erzielen. Zudem sehen Verläufe, da sie vom Browser generiert werden, beim Hineinzoomen besser aus als Rasterbilder und können spontan skaliert werden.

Wir beginnen mit der Einführung linearer Verläufe, dann stellen wir Funktionen vor, die in allen Verlaufstypen unterstützt werden, wobei lineare Verläufe als Beispiel dienen, und bewegen uns dann zu radialen, konischen und wiederholenden Verläufen.

## Verwendung von linearen Verläufen

Ein linearer Verlauf erzeugt ein Band von Farben, die in einer geraden Linie fortschreiten.

### Ein einfacher linearer Verlauf

Um die einfachste Art von Verlauf zu erstellen, müssen Sie nur zwei Farben angeben. Diese werden _Farbstopps_ genannt. Sie müssen mindestens zwei haben, aber Sie können so viele haben, wie Sie möchten.

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

Standardmäßig verlaufen lineare Verläufe von oben nach unten. Sie können ihre Drehung ändern, indem Sie eine Richtung angeben.

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

Wenn Sie mehr Kontrolle über die Richtung wünschen, können Sie dem Verlauf einen spezifischen Winkel geben.

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

Wenn Sie einen Winkel verwenden, erzeugt `0deg` einen vertikalen Verlauf, der von unten nach oben verläuft, `90deg` einen horizontalen Verlauf, der von links nach rechts verläuft, und so weiter im Uhrzeigersinn. Negative Winkel verlaufen gegen den Uhrzeigersinn.

![Vier Kästchen mit Winkeln und dem zugehörigen Verlauf von Rot zu Weiß. 0deg beginnt unten und geht nach oben. 90deg beginnt links und geht nach rechts. 180deg beginnt oben und geht nach unten. -90deg beginnt rechts und geht nach links.](linear_red_angles.png)

## Farben deklarieren und Effekte erzeugen

Alle CSS-Verlaufsarten sind Bereiche von positionsabhängigen Farben. Die von CSS-Verläufen erzeugten Farben können sich kontinuierlich mit der Position ändern und glatte Farbübergänge erzeugen. Es ist auch möglich, Bänder von Vollfarben und harte Übergänge zwischen zwei Farben zu erzeugen. Die folgenden Aspekte gelten für alle Verlaufsfunktionen:

### Verwendung von mehr als zwei Farben

Sie müssen sich nicht auf zwei Farben beschränken — Sie können so viele verwenden, wie Sie möchten! Standardmäßig sind die Farben gleichmäßig entlang des Verlaufs verteilt.

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

### Positionierung der Farbstopps

Sie müssen Ihre Farbstopps nicht an ihren Standardpositionen lassen. Um ihre Positionen fein abzustimmen, können Sie jedem Farbstopps null, einen oder zwei Prozentwerte oder für radiale und lineare Verläufe absolute Längenwerte zuweisen. Wenn Sie die Position als Prozentsatz angeben, repräsentiert `0%` den Startpunkt, während `100%` den Endpunkt darstellt; jedoch können Sie bei Bedarf Werte außerhalb dieses Bereichs verwenden, um den gewünschten Effekt zu erzielen. Wenn Sie eine Position nicht angeben, wird die Position dieses bestimmten Farbstopps automatisch für Sie berechnet, wobei der erste Farbstopp bei `0%`, der letzte Farbstopp bei `100%` liegt und alle anderen Farbstopps auf halbem Weg zwischen ihren angrenzenden Farbstopps liegen.

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

### Erstellen von harten Linien

Um eine harte Linie zwischen zwei Farben zu erstellen, die einen Streifen anstelle eines allmählichen Übergangs erzeugt, können benachbarte Farbstopps auf dieselbe Position gesetzt werden. In diesem Beispiel teilen die Farben bei der `50%`-Markierung auf halbem Weg durch den Verlauf einen Farbstopp:

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

### Verlaufshinweise

Standardmäßig verläuft der Verlauf gleichmäßig von einer Farbe zur nächsten. Sie können einen Farbhinweis einfügen, um den Mittelpunkt des Übergangswerts an einer bestimmten Stelle entlang des Verlaufs zu verschieben. In diesem Beispiel haben wir den Mittelpunkt des Übergangs von der 50%-Markierung auf die 10%-Markierung verschoben.

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

### Erstellen von Farbbändern und Streifen

Um einen festen, nicht übergehenden Farbbereich innerhalb eines Verlaufs einzuschließen, geben Sie für den Farbstopp zwei Positionen an. Farbstopps können zwei Positionen haben, was zwei aufeinanderfolgende Farbstopps mit derselben Farbe an unterschiedlichen Positionen entspricht. Die Farbe erreicht an der ersten Farbstopp ihre volle Sättigung, hält diese Sättigung bis zur zweiten Farbstopp und wechselt zur Farbe des angrenzenden Farbstopps durch die erste Position des angrenzenden Farbstopps.

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

Im ersten Beispiel oben geht das Limettengrün von der 0%-Markierung, die impliziert ist, bis zur 20%-Markierung, wechselt vom Limettengrün zu Rot über die nächsten 10% der Breite des Verlaufs, erreicht bei der 30%-Markierung volles Rot und bleibt bis zu 45% durch den Verlauf voll Rot, wo es zu Cyan verblasst und über 15% des Verlaufs vollständig Cyan wird, und so weiter.

Im zweiten Beispiel befindet sich der zweite Farbstopp für jede Farbe an derselben Position wie der erste Farbstopp für die angrenzende Farbe, wodurch ein Streifeneffekt entsteht.

In beiden Beispielen wird der Verlauf zweimal geschrieben: Das erste ist die CSS Images Level 3-Methode, bei der die Farbe für jeden Stopp wiederholt wird, und das zweite Beispiel ist die CSS Images Level 4-Methode mit mehreren Farbstopp-Längen in einer linearen Farbstopp-Deklaration.

### Steuerung der Progression eines Verlaufs

Standardmäßig verläuft ein Verlauf gleichmäßig zwischen den Farben von zwei angrenzenden Farbstopps, wobei der Mittelpunkt zwischen diesen beiden Farbstopps den Mittelpunkt des Farbwerts bildet. Sie können die {{Glossary("interpolation", "Interpolation")}} oder Progression zwischen zwei Farbstopps steuern, indem Sie einen Farbhinweisstandort einfügen. In diesem Beispiel erreicht die Farbe den Mittelpunkt zwischen Limettengrün und Cyan 20% des Weges durch den Verlauf statt 50% des Weges durch. Das zweite Beispiel enthält den Hinweis nicht, um den Unterschied hervorzuheben, den der Farbhinweis machen kann:

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

Verläufe unterstützen Transparenz, sodass Sie mehrere Hintergründe stapeln können, um einige ziemlich ausgefallene Effekte zu erzielen. Die Hintergründe werden von oben nach unten gestapelt, wobei der zuerst angegebene oben liegt.

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

Sie können sogar Verläufe mit anderen Verläufen stapeln. Solange die oberen Verläufe nicht vollständig undurchsichtig sind, werden die darunterliegenden Verläufe immer noch sichtbar sein.

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

### Verläufe mischen

Zusätzlich zur Transparenz können mehrere halbtransparente Verläufe und Verläufe über Rasterhintergrundbildern gestapelt werden. Verläufe können auch mit anderen CSS-Effekten verwendet werden. In diesem Beispiel haben die vier {{htmlelement("div")}}-Elemente dieselben zwei vollständig undurchsichtigen Verläufe als Hintergrundbilder. Wir wenden verschiedene {{cssxref("background-blend-mode")}} CSS-Eigenschaftswerte auf die letzten drei an, die die beiden Hintergrundbilder mischen und unterschiedliche Effekte erzeugen.

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

Radiale Verläufe ähneln linearen Verläufen, außer dass sie von einem zentralen Punkt ausstrahlen. Sie können festlegen, wo sich dieser zentrale Punkt befindet. Sie können sie auch kreisförmig oder elliptisch gestalten.

### Ein einfacher radialer Verlauf

Wie bei linearen Verläufen benötigen Sie nur zwei Farben, um einen radialen Verlauf zu erstellen. Standardmäßig befindet sich das Zentrum des Verlaufs bei der 50%-50%-Markierung, und der Verlauf ist elliptisch und entspricht dem {{Glossary("aspect_ratio", "Seitenverhältnis")}} Ihres Feldes:

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

### Positionierung der radialen Farbstopps

Wie auch bei linearen Verläufen können Sie jeden radialen Farbstopps mit einem Prozent- oder absoluten Längenwert positionieren.

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

### Positionierung des Verlaufszentrums

Sie können das Zentrum des Verlaufs mit Schlüsselbegriffen, Prozent- oder absoluten Längenwerten positionieren, wobei Längen- und Prozentwerte wiederholt werden, wenn nur eine vorhanden ist, ansonsten in der Reihenfolge der Position von links und der Position von oben.

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

### Größe von radialen Verläufen

Im Gegensatz zu linearen Verläufen können Sie die Größe von radialen Verläufen angeben. Mögliche Werte sind `closest-corner`, `closest-side`, `farthest-corner` und `farthest-side`, wobei `farthest-corner` der Standardwert ist. Kreise können auch mit einer Länge und Ellipsen mit einer Länge oder einem Prozentsatz dimensioniert werden.

#### Beispiel: `closest-side` für Ellipsen

Dieses Beispiel verwendet den Wert `closest-side` für die Größe, was bedeutet, dass die Größe durch die Entfernung vom Ausgangspunkt (dem Zentrum) zur nächsten Seite des umschließenden Feldes festgelegt wird.

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

Dieses Beispiel ist dem vorherigen ähnlich, außer dass seine Größe als `farthest-corner` angegeben ist, was die Größe des Verlaufs durch die Entfernung vom Ausgangspunkt zur am weitesten entfernten Ecke des umschließenden Feldes vom Ausgangspunkt festlegt.

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

Dieses Beispiel verwendet `closest-side`, was den Radius des Kreises als die Entfernung zwischen dem Zentrum des Verlaufs und der nächsten Seite festlegt. In diesem Fall ist der Radius die Entfernung zwischen dem Zentrum und der unteren Kante, da der Verlauf 25% von links und 25% von unten platziert ist und die Höhe des div-Elements kleiner ist als die Breite.

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

Für Ellipsen können Sie die Größe der Ellipse mit einer Länge oder einem Prozentsatz angeben. Der erste Wert repräsentiert den horizontalen Radius, der zweite den vertikalen Radius. Wenn Sie einen Prozentsatz verwenden, entspricht dies der Größe des Feldes in dieser Dimension. Im folgenden Beispiel habe ich einen Prozentsatz für den horizontalen Radius verwendet.

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
  background: radial-gradient(circle 50px, red, yellow 10%, #1e90ff 50%, beige);
}
```

{{ EmbedLiveSample('Example_length_for_circles', 240, 120) }}

### Gestapelte radiale Verläufe

Genau wie bei linearen Verläufen können Sie auch radiale Verläufe stapeln. Der zuerst angegebene ist oben, der letzte unten.

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

## Verwendung von konischen Verläufen

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS) Funktion erzeugt ein Bild, das aus einem Verlauf mit Farbverläufen besteht, die um einen Mittelpunkt herum rotieren (statt vom Zentrum aus zu strahlen). Beispiele für konische Verläufe sind Tortendiagramme und {{Glossary("color_wheel", "Farbkreise")}}, aber sie können auch verwendet werden, um Schachbretter und andere interessante Effekte zu erzeugen.

Die Syntax `conic-gradient` ähnelt der Syntax für radiale Verläufe, jedoch werden die Farbstopps um einen Verlaufsbogen, den Umfang eines Kreises, herum angeordnet, anstatt auf der Verlaufsstrecke, die vom Mittelpunkt des Verlaufs ausgeht, und die Farbstopps sind Prozentsätze oder Grad: absolute Längen sind nicht gültig.

In einem radialen Verlauf wechseln die Farben vom Zentrum einer Ellipse aus in alle Richtungen nach außen. Bei konischen Verläufen wechseln die Farben, als ob sie um den Mittelpunkt eines Kreises gedreht würden, beginnend oben und im Uhrzeigersinn verlaufend. Ähnlich wie bei radialen Verläufen können Sie das Zentrum des Verlaufs positionieren. Ähnlich wie bei linearen Verläufen können Sie den Verlaufwinkel ändern.

### Ein einfacher konischer Verlauf

Wie bei linearen und radialen Verläufen benötigen Sie nur zwei Farben, um einen konischen Verlauf zu erstellen. Standardmäßig befindet sich das Zentrum des Verlaufs bei der 50%-50%-Markierung, wobei der Beginn des Verlaufs nach oben zeigt:

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

Wie bei radialen Verläufen können Sie das Zentrum des konischen Verlaufs mit Schlüsselbegriffen, Prozent- oder absoluten Längenwerten positionieren, wobei das Schlüsselwort "bei" verwendet wird.

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

### Winkel ändern

Standardmäßig sind die verschiedenen Farbstopps, die Sie angeben, gleichmäßig um den Kreis verteilt. Sie können den Startwinkel des konischen Verlaufs mit dem Schlüsselwort "from" am Anfang gefolgt von einem Winkel oder einer Länge angeben, und Sie können verschiedene Positionen für die Farbstopps angeben, indem Sie einen Winkel oder eine Länge nach ihnen hinzufügen.

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

Die Funktionen {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}} und {{cssxref("gradient/conic-gradient", "conic-gradient()")}} unterstützen keine automatisch wiederholten Farbstopps. Jedoch sind die Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} verfügbar, um diese Funktionalität zu bieten.

Die Größe der Verlaufsstrecke oder des Bogens, die wiederholt wird, ist die Länge zwischen dem ersten Farbstoppwert und dem letzten Farbstopplängenwert. Wenn der erste Farbstopp nur eine Farbe hat und keinen Farbstopplängewert, beträgt der Wert standardmäßig 0. Wenn der letzte Farbstopp nur eine Farbe hat und keinen Farbstopplängewert, beträgt der Wert standardmäßig 100%. Wenn keins der beiden deklariert ist, beträgt die Verlaufsstrecke 100%, was bedeutet, dass die linearen und konischen Verläufe sich nicht wiederholen und der radiale Verlauf sich nur dann wiederholt, wenn der Radius des Verlaufs kleiner ist als die Strecke zwischen dem Zentrum des Verlaufs und der äußersten Ecke. Wenn der erste Farbstopp deklariert ist und der Wert größer als 0 ist, wird der Verlauf wiederholt, da die Strecke zwischen dem ersten und letzten Farbstopp kleiner als 100% oder 360 Grad ist.

### Wiederholende lineare Verläufe

Dieses Beispiel verwendet {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, um einen Verlauf zu erstellen, der sich wiederholt in einer geraden Linie fortschreitet. Die Farben werden immer wieder durchlaufen, während sich der Verlauf wiederholt. In diesem Fall ist die Verlaufsstrecke 10px lang.

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

### Mehrfach wiederholende lineare Verläufe

Ähnlich wie bei normalen linearen und radialen Verläufen können Sie mehrere Verläufe einschließen, einen über dem anderen. Dies ergibt nur dann einen Sinn, wenn die Verläufe teilweise transparent sind, sodass nachfolgende Verläufe durch die transparenten Bereiche hindurch sichtbar werden, oder wenn Sie unterschiedliche [Hintergrundgrößen](/de/docs/Web/CSS/background-size) und optional mit unterschiedlichen [Hintergrundpositionen](/de/docs/Web/CSS/background-position) für jedes Verlaufsbild angeben, um Transparenz zu nutzen.

In diesem Fall sind die Verlaufsstrecken 300px, 230px und 300px lang.

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

### Karo-Verlauf

Um ein Karo zu erstellen, enthalten wir mehrere sich überlappende Verläufe mit Transparenz. In der ersten Hintergrundangabe haben wir jeden Farbstopp separat aufgelistet. Die zweite Hintergrunddeklaration verwendet die Syntax für mehrere Positionsfarbstopps:

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

Dieses Beispiel verwendet {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, um einen Verlauf zu erstellen, der sich wiederholt von einem zentralen Punkt ausstrahlt. Die Farben werden immer wieder durchlaufen, während sich der Verlauf wiederholt.

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

### Mehrfach wiederholende radiale Verläufe

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

Dieses Beispiel verwendet {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, um einen Verlauf zu erstellen, der sich wiederholt um einen Mittelpunkt dreht. In diesem Fall werden die deklarierten Farbstopps viermal wiederholt.

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

### Mehrfach wiederholende konische Verläufe

Genau wie bei linearen und radialen wiederholenden Verläufen können Sie mehrere konische Verläufe übereinander stapeln und interessante Effekte erzeugen, indem Sie unterschiedliche `at <position>` Werte verwenden, damit sich die konischen Verläufe nicht an ihren Zentren überlappen, und unterschiedliche `from <angle>` Werte verwenden, damit die Wiederholungseffekte nicht ausgerichtet sind. Dieses Beispiel überlagert drei halbtransparente sich wiederholende radiale Verläufe, die jeweils ihr Farbschema viermal wiederholen. Um überlappende Verläufe sichtbar zu machen, müssen Sie entweder sicherstellen, dass die Farben der Verläufe oben im Stapel teilweise transparent sind oder die {{cssxref("background-blend-mode")}} CSS-Eigenschaft verwenden.

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
- Verlaufsbezogene CSS-Datentypen: {{cssxref("&lt;gradient&gt;")}}, {{cssxref("&lt;image&gt;")}}
- Verlaufsbezogene CSS-Eigenschaften: {{cssxref("background")}}, {{cssxref("background-image")}}
- [CSS Gradients Patterns Gallery, by Lea Verou](https://projects.verou.me/css3patterns/)
- [Gradient CSS Generator](https://cssgenerator.org/gradient-css-generator.html)
- [Advanced CSS Gradient Generator](https://colorbeta.com/)
