---
title: Verwendung von CSS-Verläufen
short-title: Verwendung von Verläufen
slug: Web/CSS/Guides/Images/Using_gradients
l10n:
  sourceCommit: 4f1188d6d007e5f57aa62326f89a849aa4cae707
---

**CSS-Verläufe** werden durch den {{cssxref("gradient")}} Datentyp dargestellt, eine spezielle Art von {{cssxref("image")}}, die aus einem progressiven Übergang zwischen zwei oder mehr Farben besteht. Sie können zwischen drei Arten von Verläufen wählen: _linear_ (erstellt mit der {{cssxref("gradient/linear-gradient", "linear-gradient()")}} Funktion), _radial_ (erstellt mit der {{cssxref("gradient/radial-gradient", "radial-gradient()")}} Funktion) und _konisch_ (erstellt mit der {{cssxref("gradient/conic-gradient", "conic-gradient()")}} Funktion). Sie können auch wiederholende Verläufe mit den Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} erstellen.

Verläufe können überall verwendet werden, wo Sie ein `<image>` verwenden würden, wie zum Beispiel in Hintergründen. Da Verläufe dynamisch generiert werden, können sie die Notwendigkeit für Rasterbilddateien negieren, die traditionell zur Erzielung ähnlicher Effekte verwendet wurden. Darüber hinaus sehen Verläufe, da sie vom Browser generiert werden, beim Heranzoomen besser aus als Rasterbilder und können flexibel resized werden.

Wir beginnen mit der Einführung von linearen Verläufen, dann führen wir die Funktionen ein, die in allen Verlaufstypen unterstützt werden, indem wir lineare Verläufe als Beispiel verwenden, und gehen dann zu radialen, konischen und wiederholenden Verläufen über.

## Verwendung von linearen Verläufen

Ein linearer Verlauf erzeugt ein Farbband, das in einer geraden Linie verläuft.

### Ein grundlegender linearer Verlauf

Um die grundlegendste Art von Verlauf zu erstellen, müssen Sie nur zwei Farben angeben. Diese werden _Farbstopps_ genannt. Sie müssen mindestens zwei haben, aber Sie können so viele haben, wie Sie möchten.

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

Standardmäßig laufen lineare Verläufe von oben nach unten. Sie können ihre Drehung ändern, indem Sie eine Richtung angeben.

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

Sie können sogar den Verlauf diagonal, von Ecke zu Ecke, verlaufen lassen.

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

Wenn Sie einen Winkel verwenden, erstellt `0deg` einen vertikalen Verlauf, der von unten nach oben verläuft, `90deg` einen horizontalen Verlauf, der von links nach rechts verläuft, und so weiter im Uhrzeigersinn. Negative Winkel verlaufen in gegen den Uhrzeigersinn.

![Vier Felder, die den Winkel auflisten und den zugehörigen Verlauf von Rot nach Weiß zeigen. 0deg beginnt unten und geht nach oben. 90deg beginnt links und geht nach rechts. 180deg beginnt oben und geht nach unten. -90deg beginnt rechts und geht nach links.](linear_red_angles.png)

## Farben deklarieren & Effekte erstellen

Alle CSS-Verlaufsarten sind Bereiche positionsabhängiger Farben. Die durch CSS-Verläufe erzeugten Farben können kontinuierlich mit der Position variieren, wodurch sanfte Farbverläufe entstehen. Es ist auch möglich, Bänder aus Vollfarben und harte Übergänge zwischen zwei Farben zu erzeugen. Das Folgende gilt für alle Verlaufsfunktionen:

### Verwendung von mehr als zwei Farben

Sie müssen sich nicht auf zwei Farben beschränken – Sie können so viele Farben verwenden, wie Sie möchten! Standardmäßig sind die Farben gleichmäßig entlang des Verlaufs verteilt.

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

### Positionieren der Farbstopps

Sie müssen Ihre Farbstopps nicht an den Standardpositionen belassen. Um ihre Positionen fein abzustimmen, können Sie jedem Null, einen oder zwei Prozentwerte oder, für radiale und lineare Verläufe, absolute Längenwerte zuweisen. Wenn Sie die Position als Prozentsatz angeben, steht `0%` für den Ausgangspunkt, während `100%` für den Endpunkt steht; Sie können jedoch Werte außerhalb dieses Bereichs verwenden, wenn nötig, um den gewünschten Effekt zu erzielen. Wenn Sie eine Position nicht angeben, wird die Position dieses bestimmten Farbstopps automatisch für Sie berechnet, wobei sich der erste Farbstopp bei `0%` und der letzte Farbstopp bei `100%` befindet, und alle anderen Farbstopps sich auf halbem Weg zwischen ihren angrenzenden Farbstopps befinden.

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

Um eine harte Linie zwischen zwei Farben zu erzeugen und einen Streifen anstelle eines allmählichen Übergangs zu schaffen, können angrenzende Farbstopps auf dieselbe Position gesetzt werden. In diesem Beispiel teilen die Farben einen Farbstopp bei der `50%` Marke, in der Mitte des Verlaufs:

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

### Erstellen von Farbbändern & Streifen

Um einen festen, nicht übergehenden Farbbereich innerhalb eines Verlaufs einzuschließen, fügen Sie zwei Positionen für den Farbstopp ein. Farbstopps können zwei Positionen haben, was zwei aufeinanderfolgenden Farbstopps entspricht, die dieselbe Farbe an unterschiedlichen Positionen haben. Die Farbe erreicht an der ersten Position des Farbstopps die volle Sättigung, hält diese Sättigung bis zum zweiten Farbstopp und wechselt zur Farbe des angrenzenden Farbstopps durch die erste Position des angrenzenden Farbstopps.

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

Im ersten Beispiel oben geht das Lime von der 0%-Marke, die impliziert ist, zur 20%-Marke, im Verlauf der nächsten 10 % der Breite des Verlaufs wird von Lime zu Rot übergegangen, erreicht das volle Rot an der 30%-Marke und bleibt bis zu 45% des Verlaufs fest rot, wo es zu Cyan verblasst, vollständig cyan für 15% des Verlaufs, und so weiter.

Im zweiten Beispiel befindet sich der zweite Farbstopp für jede Farbe an derselben Position wie der erste Farbstopp für die angrenzende Farbe, wodurch ein gestreifter Effekt entsteht.

In beiden Beispielen wird der Verlauf zweimal geschrieben: der erste ist die CSS Images Level 3 Methode, die Farbe für jeden Stopp zu wiederholen, und das zweite Beispiel ist die CSS Images Level 4 Methode mit mehreren Farbstopplängen in einer linearen Color-Stop-Deklaration.

### Kontrolle über die Verläufe durch Farbhints

Standardmäßig schreitet ein Verlauf gleichmäßig zwischen den Farben zweier benachbarter Farbstopps voran, wobei der Mittelpunkt zwischen diesen Farbstopps der Farbwert des Mittelpunkts ist. Sie können die {{Glossary("interpolation", "Interpolation")}} oder den Verlauf zwischen zwei Farbstopps steuern, indem Sie einen Farbhint angeben. In diesem Beispiel erreicht die Farbe den Mittelpunkt zwischen Lime und Cyan 20% des Weges durch den Verlauf anstelle von 50%. Das zweite Beispiel enthält keinen Hint, um den Unterschied zu zeigen, den der Farbhint bewirken kann:

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

{{ EmbedLiveSample('Controlling_the_progression_of_a_gradient_using_color_hints', 120, 120) }}

### Überlagerung von Verläufen

Verläufe unterstützen Transparenz, sodass Sie mehrere Hintergründe stapeln können, um einige ziemlich ausgefallene Effekte zu erzielen. Die Hintergründe werden von oben nach unten gestapelt, wobei das zuerst angegebene oben liegt.

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

Sie können sogar Verläufe mit anderen Verläufen stapeln. Solange die oberen Verläufe nicht vollständig undurchsichtig sind, sind die darunterliegenden Verläufe weiterhin sichtbar.

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

### Mischen von Verläufen

Zusätzlich zur Transparenz können mehrere halbtransparente Verläufe gestapelt und Verläufe über Rasterhintergrundbilder gestapelt werden, und Verläufe können mit anderen CSS-Effekten verwendet werden. In diesem Beispiel haben die vier {{htmlelement("div")}} Elemente dieselben zwei vollständig deckenden Verläufe als Hintergrundbilder. Wir wenden verschiedene {{cssxref("background-blend-mode")}} CSS-Eigenschaftswerte auf die letzten drei an, die die beiden Hintergrundbilder mischen und unterschiedliche Effekte erzeugen.

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

Radiale Verläufe sind linearen Verläufen ähnlich, außer dass sie von einem zentralen Punkt aus strahlen. Sie können festlegen, wo sich dieser zentrale Punkt befindet. Sie können sie auch kreisförmig oder elliptisch gestalten.

### Ein grundlegender radialer Verlauf

Wie bei linearen Verläufen benötigen Sie zur Erstellung eines radialen Verlaufs nur zwei Farben. Standardmäßig befindet sich der Mittelpunkt des Verlaufs bei der 50% 50% Marke und der Verlauf ist elliptisch, entsprechend dem {{Glossary("aspect_ratio", "Aspektverhältnis")}} seiner Box:

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

Wie bei linearen Verläufen können Sie auch hier jeden radialen Farbstopp mit einem Prozentsatz oder einer absoluten Länge positionieren.

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

### Positionierung des Mittelpunkts des Verlaufs

Sie können den Mittelpunkt des Verlaufs mit Schlüsselwörtern, Prozentsätzen oder absoluten Längen positionieren, die Länge und Prozentwerte wiederholen sich, wenn nur einer vorhanden ist, sonst in der Reihenfolge der Position von links und der Position von oben.

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

### Größenänderung von radialen Verläufen

Im Gegensatz zu linearen Verläufen können Sie die Größe von radialen Verläufen angeben. Mögliche Werte umfassen `closest-corner`, `closest-side`, `farthest-corner` und `farthest-side`, wobei `farthest-corner` der Standardwert ist. Kreise können auch mit einer Länge dimensioniert werden, und Ellipsen mit einer Länge oder einem Prozentsatz.

#### Beispiel: `closest-side` für Ellipsen

Dieses Beispiel verwendet den Wert `closest-side`, was bedeutet, dass die Größe durch den Abstand vom Startpunkt (dem Mittelpunkt) zur nächstgelegenen Seite der umschließenden Box festgelegt wird.

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

Dieses Beispiel ähnelt dem vorherigen, außer dass seine Größe als `farthest-corner` angegeben ist, was die Größe des Verlaufs durch den Abstand vom Startpunkt zum entferntesten Eckpunkt der umschließenden Box vom Startpunkt festlegt.

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

Dieses Beispiel verwendet `closest-side`, wodurch der Radius des Kreises der Abstand zwischen dem Mittelpunkt des Verlaufs und der nächstgelegenen Seite ist. In diesem Fall ist der Radius der Abstand zwischen dem Mittelpunkt und der unteren Kante, da der Verlauf 25% von links und 25% von unten platziert ist und die Höhe des Div-Elements geringer als die Breite ist.

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

Nur für Ellipsen können Sie die Ellipse mit einer Länge oder einem Prozentsatz dimensionieren. Der erste Wert repräsentiert den horizontalen Radius, der zweite den vertikalen Radius, wenn Sie einen Prozentsatz verwenden, entspricht dies der Größe der Box in dieser Dimension. Im unten stehenden Beispiel habe ich einen Prozentsatz für den horizontalen Radius verwendet.

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

Genau wie lineare Verläufe können Sie auch radiale Verläufe stapeln. Das zuerst angegebene steht oben, das zuletzt angegebene unten.

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

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS) Funktion erstellt ein Bild, das aus einem Verlauf mit Farbübergängen besteht, die um einen Mittelpunkt rotieren (anstatt vom Mittelpunkt aus zu strahlen). Beispiel für konische Verläufe sind Tortendiagramme und {{Glossary("color_wheel", "Farbkreise")}}, sie können aber auch zum Erstellen von Schachbrettern und anderen interessanten Effekten verwendet werden.

Die Syntax von konischen Verläufen ähnelt der von radialen Verläufen, aber die Farbstopps werden auf einem Verlaufsbogen, dem Umfang eines Kreises, platziert, anstatt auf der Verlaufsreihe, die vom Mittelpunkt des Verlaufs ausgeht, und die Farbstopps sind Prozentsätze oder Grad: Absolute Längen sind nicht gültig.

In einem radialen Verlauf gehen die Farben strahlig von der Mitte einer Ellipse aus in alle Richtungen. Bei konischen Verläufen verläuft der Farbverlauf so, als würde er sich um den Mittelpunkt eines Kreises drehen, beginnend oben und im Uhrzeigersinn. Ähnlich wie bei radialen Verläufen können Sie den Mittelpunkt des Verlaufs positionieren. Ähnlich wie bei linearen Verläufen können Sie den Winkel des Verlaufs ändern.

### Ein grundlegender konischer Verlauf

Wie bei linearen und radialen Verläufen benötigen Sie zur Erstellung eines konischen Verlaufs nur zwei Farben. Standardmäßig befindet sich der Mittelpunkt des Verlaufs bei der 50% 50% Marke, und der Beginn des Verlaufs zeigt nach oben:

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

### Positionierung des konischen Mittelpunkts

Ähnlich wie bei radialen Verläufen können Sie den Mittelpunkt des konischen Verlaufs mit Schlüsselwörtern, Prozentsätzen oder absoluten Längen, mit dem Schlüsselwort "at" positionieren.

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

### Änderung des Winkels

Standardmäßig sind die verschiedenen angegebenen Farbstopps gleichmäßig um den Kreis herum verteilt. Sie können den Anfangswinkel des konischen Verlaufs mithilfe des Schlüsselworts "from" zu Beginn, gefolgt von einem Winkel oder einer Länge, positionieren und Sie können verschiedene Positionen für die Farbstopps angeben, indem Sie einen Winkel oder eine Länge nach ihnen einfügen.

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

Die {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, und {{cssxref("gradient/conic-gradient", "conic-gradient()")}} Funktionen unterstützen keine automatisch wiederholten Farbstopps. Jedoch sind die Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} verfügbar, um diese Funktionalität anzubieten.

Die Größe der Verlaufsreihe oder des Verlaufsbogens, die sich wiederholt, ist die Länge zwischen dem ersten Farbstopplänge und der letzten Farbstopplänge. Wenn der erste Farbstopp nur eine Farbe hat und keine Farbstopplänge, wird der Wert standardmäßig auf 0 gesetzt. Wenn der letzte Farbstopp nur eine Farbe hat und keine Farbstopplänge, wird der Wert standardmäßig auf 100% gesetzt. Wenn weder deklariert ist, ist die Verlaufsreihe 100%, was bedeutet, dass lineare und konische Verläufe nicht wiederholen und der radiale Verlauf nur wiederholt wird, wenn der Radius des Verlaufs kleiner ist als die Länge zwischen dem Mittelpunkt des Verlaufs und der entferntesten Ecke. Wenn der erste Farbstopp deklariert ist, und der Wert größer als 0 ist, wird sich der Verlauf wiederholen, da die Größe der Linie oder des Bogens der Unterschied zwischen dem ersten Farbstopplänge und der letzten Farbstopplänge weniger als 100% oder 360 Grad beträgt.

### Wiederholende lineare Verläufe

Dieses Beispiel verwendet {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, um einen Verlauf zu erstellen, der sich wiederholt in einer geraden Linie fortbewegt. Die Farben werden wiederholt, während sich der Verlauf wiederholt. In diesem Fall ist die Verlaufsreihe 10px lang.

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

### Mehrere wiederholende lineare Verläufe

Ähnlich wie bei regulären linearen und radialen Verläufen können Sie mehrere Verläufe übereinander legen. Dies ergibt nur Sinn, wenn die Verläufe teilweise transparent sind und so die nachfolgenden Verläufe durch die transparenten Bereiche sichtbar werden, oder wenn Sie verschiedene [background-sizes](/de/docs/Web/CSS/Reference/Properties/background-size), optional mit unterschiedlichen [background-position](/de/docs/Web/CSS/Reference/Properties/background-position) Eigenschaftswerten, für jedes Hintergrundbild einfügen. Wir verwenden Transparenz.

In diesem Fall sind die Verlaufsreihen 300px, 230px und 300px lang.

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

### Karo-Muster-Verlauf

Um ein Karomuster zu erstellen, umfassen wir mehrere sich überlappende Verläufe mit Transparenz. In der ersten Hintergrunddeklaration haben wir jeden Farbstopp einzeln aufgelistet. Die zweite Hintergrunddeklaration verwendet die Syntax mit mehreren Positionen für Farbstopps:

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

Dieses Beispiel verwendet {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, um einen Verlauf zu erstellen, der sich von einem zentralen Punkt aus wiederholt ausbreitet. Die Farben wiederholen sich immer wieder, während sich der Verlauf wiederholt.

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

### Mehrere wiederholende radiale Verläufe

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

Dieses Beispiel verwendet {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, um einen Verlauf zu erstellen, der sich mehrfach um einen Mittelpunkt dreht. In diesem Fall werden die angegebenen Farbstopps viermal wiederholt.

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

Genau wie lineare und radiale wiederholende Verläufe können Sie auch mehrere konische Verläufe übereinander legen, wodurch interessante Effekte entstehen, indem Sie verschiedene `at <position>` Werte verwenden, damit sich die konischen Verläufe nicht an ihren Mittelpunkten überlappen, und verschiedene `from <angle>` Werte, damit sich die wiederholenden Effekte nicht ausrichten. Dieses Beispiel überlappt drei halbtransparente wiederholende radiale Verläufe, die jeweils ihr Farbschema viermal wiederholen. Um überlappende Verläufe sichtbar zu machen, müssen Sie sicherstellen, dass entweder die Farben der Verläufe oben im Stapel teilweise transparent sind oder die CSS-Eigenschaft {{cssxref("background-blend-mode")}} verwenden.

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

- Verlauf-Funktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- Verlaufsbezogene CSS-Datentypen: {{cssxref("gradient")}}, {{cssxref("image")}}
- Verlaufsbezogene CSS-Eigenschaften: {{cssxref("background")}}, {{cssxref("background-image")}}
- [CSS-Verlaufsmuster Galerie, von Lea Verou](https://projects.verou.me/css3patterns/)
- [Verlauf-CSS-Generator](https://cssgenerator.org/gradient-css-generator.html)
- [Erweiterter Verlauf-CSS-Generator](https://colorbeta.com/)
- [HDR-Verlaufsgenerator](https://gradient.style/)
