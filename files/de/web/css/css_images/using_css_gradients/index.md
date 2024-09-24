---
title: Verwendung von CSS-Verläufen
slug: Web/CSS/CSS_images/Using_CSS_gradients
l10n:
  sourceCommit: 9c8c461dc350668ad326fa9aad604ce9da800df2
---

{{CSSRef}}

**CSS-Verläufe** werden durch den {{cssxref("&lt;gradient&gt;")}}-Datentyp dargestellt, eine spezielle Art von {{cssxref("&lt;image&gt;")}}, die aus einem progressiven Übergang zwischen zwei oder mehr Farben besteht. Sie können zwischen drei Arten von Verläufen wählen: _linear_ (erstellt mit der {{cssxref("gradient/linear-gradient", "linear-gradient()")}}-Funktion), _radial_ (erstellt mit der {{cssxref("gradient/radial-gradient", "radial-gradient()")}}-Funktion) und _konisch_ (erstellt mit der {{cssxref("gradient/conic-gradient", "conic-gradient()")}}-Funktion). Sie können auch wiederholende Verläufe mit den Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} erstellen.

Verläufe können überall verwendet werden, wo Sie ein `<image>` verwenden würden, zum Beispiel in Hintergründen. Da Verläufe dynamisch generiert werden, können sie die Notwendigkeit für Rasterbilddateien negieren, die traditionell verwendet wurden, um ähnliche Effekte zu erzielen. Darüber hinaus sehen von der Browser generierte Verläufe bei Vergrößerung besser aus als Rasterbilder und können dynamisch in der Größe verändert werden.

Wir beginnen mit der Einführung von linearen Verläufen, stellen dann Funktionen vor, die in allen Verlaufstypen unterstützt werden, wobei wir lineare Verläufe als Beispiel verwenden, und gehen dann zu radialen, konischen und wiederholenden Verläufen über.

## Verwendung von linearen Verläufen

Ein linearer Verlauf erzeugt ein Farbband, das sich in einer geraden Linie erstreckt.

### Ein einfacher linearer Verlauf

Um die einfachste Art von Verlauf zu erstellen, müssen Sie lediglich zwei Farben angeben. Diese werden _Farbstopps_ genannt. Sie müssen mindestens zwei haben, aber Sie können so viele haben, wie Sie möchten.

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

### Die Richtung ändern

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

### Winkel verwenden

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

Bei Verwendung eines Winkels erzeugt `0deg` einen vertikalen Verlauf, der von unten nach oben verläuft, `90deg` erzeugt einen horizontalen Verlauf, der von links nach rechts verläuft, und so weiter im Uhrzeigersinn. Negative Winkel verlaufen gegen den Uhrzeigersinn.

![Vier Kästchen mit der Angabe des Winkels und der Darstellung des zugehörigen Verlaufs von rot zu weiß. 0deg beginnt unten und geht nach oben. 90deg beginnt links und geht nach rechts. 180deg beginnt oben und geht nach unten. -90deg beginnt rechts und geht nach links.](linear_red_angles.png)

## Farben deklarieren & Effekte erzeugen

Alle CSS-Verlaufstypen sind ein Bereich von positionsabhängigen Farben. Die von CSS-Verläufen erzeugten Farben können sich kontinuierlich mit der Position ändern und dabei sanfte Farbverläufe erzeugen. Es ist auch möglich, Bereiche fester Farben und harte Übergänge zwischen zwei Farben zu schaffen. Folgendes gilt für alle Verlauffunktionen:

### Mehr als zwei Farben verwenden

Sie müssen sich nicht auf zwei Farben beschränken — Sie können so viele verwenden, wie Sie möchten! Standardmäßig sind die Farben gleichmäßig über den Verlauf verteilt.

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

### Farbstopps positionieren

Sie müssen Ihre Farbstopps nicht an ihren Standardpositionen belassen. Um ihre Positionen zu optimieren, können Sie jedem Null, einen oder zwei Prozentwerte oder, für radiale und lineare Verläufe, absolute Längenwerte geben. Wenn Sie die Position als Prozentsatz angeben, stellt `0%` den Startpunkt dar, während `100%` den Endpunkt repräsentiert; Sie können jedoch auch Werte außerhalb dieses Bereichs verwenden, um den gewünschten Effekt zu erzielen. Wenn Sie eine Position nicht angeben, wird die Position dieses bestimmten Farbstopps automatisch für Sie berechnet, wobei der erste Farbstopp bei `0%` und der letzte Farbstopp bei `100%` liegt. Alle weiteren Farbstopps befinden sich auf halbem Weg zwischen ihren angrenzenden Farbstopps.

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

Um eine harte Linie zwischen zwei Farben zu erzeugen und einen Streifen statt eines allmählichen Übergangs zu schaffen, können benachbarte Farbstopps auf dieselbe Position gesetzt werden. In diesem Beispiel teilen sich die Farben einen Farbstopp bei der `50%`-Marke, in der Mitte des Verlaufs:

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

Standardmäßig erfolgt der Übergang im Verlauf gleichmäßig von einer Farbe zur nächsten. Sie können einen Farbe-Hinweis einschließen, um den Mittelpunkt des Übergangs an einem bestimmten Punkt entlang des Verlaufs zu verschieben. In diesem Beispiel haben wir den Mittelpunkt des Übergangs von der 50%-, Marke zur 10%-Marke verschoben.

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

### Farbbänder & Streifen erstellen

Um einen festen, nicht übergehenden Farbbereich innerhalb eines Verlaufs einzuschließen, geben Sie zwei Positionen für den Farbstopp an. Farbstops können zwei Positionen haben, was äquivalent zu zwei aufeinander folgenden Farbstops mit derselben Farbe an verschiedenen Positionen ist. Die Farbe erreicht die volle Sättigung am ersten Farbstopp, behält diese Sättigung bis zum zweiten Farbstopp bei und wechselt zur Farbe des angrenzenden Farbstopps über die erste Position des angrenzenden Farbstopps.

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

Im ersten Beispiel oben geht das Limetten-Grün von der 0%-Marke, die implizit ist, zur 20%-Marke, wechselt über die nächsten 10% der Breite des Verlaufs von Limette zu Rot, erreicht ein festes Rot bei der 30%-Marke, und bleibt fest Rot bis zu 45% des Verlaufs, wo es bis zu Cyan verblasst, 15% des Verlaufs vollständig Cyan ist, und so weiter.

Im zweiten Beispiel befindet sich der zweite Farbstopp für jede Farbe an derselben Stelle wie der erste Farbstopp für die angrenzende Farbe, wodurch ein Streifeneffekt entsteht.

In beiden Beispielen wird der Verlauf zweimal geschrieben: Das erste ist die CSS Images Level 3-Methode, um die Farbe für jeden Stopp zu wiederholen und das zweite Beispiel ist die CSS Images Level 4-Methode mit mehreren Farbstopp-Längen in einer linearen Farbstopp-Deklaration.

### Den Verlauf fortschreiten kontrollieren

Standardmäßig verläuft ein Verlauf gleichmäßig zwischen den Farben von zwei angrenzenden Farbstops, wobei sich der Mittelwert zwischen diesen beiden Farbstops als der Mittelwert-Farbwert ergibt. Sie können die {{Glossary("Interpolation")}}, oder den Fortschritt, zwischen zwei Farbstops kontrollieren, indem Sie einen Farbe-Hinweis-Standort hinzufügen. In diesem Beispiel erreicht die Farbe den Mittelwert zwischen Limetten-Grün und Cyan 20% des Verlaufs statt 50% des Weges. Das zweite Beispiel enthält nicht den Hinweis, um den Unterschied, den der Farbhintergrund ausmachen kann, zu verdeutlichen:

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

### Verläufe überlagern

Verläufe unterstützen Transparenz, sodass Sie mehrere Hintergründe stapeln können, um einige ziemlich ausgefallene Effekte zu erzielen. Die Hintergründe sind von oben nach unten gestapelt, wobei der zuerst angegebene oben liegt.

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

### Gestapelte Verläufe

Sie können sogar Verläufe mit anderen Verläufen stapeln. Solange die oberen Verläufe nicht vollständig undurchsichtig sind, sind die darunter liegenden Verläufe weiterhin sichtbar.

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

### Verläufe mischen

Zusätzlich zur Transparenz können mehrere halbtransparente Verläufe gestapelt und Verläufe über Rasterhintergrundbilder gestapelt werden. Verläufe können mit anderen CSS-Effekten verwendet werden. In diesem Beispiel haben die vier {{htmlelement("div")}}-Elemente dieselben zwei vollständig deckenden Verläufe als Hintergrundbilder. Wir wenden unterschiedliche Werte der CSS-Eigenschaft {{cssxref("background-blend-mode")}} auf die letzten drei an, die die beiden Hintergrundbilder mischen und unterschiedliche Effekte erzeugen.

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

## Verwendung von radialen Verläufen

Radiale Verläufe sind den linearen Verläufen ähnlich, mit dem Unterschied, dass sie von einem zentralen Punkt ausstrahlen. Sie können diktieren, wo sich dieser zentrale Punkt befindet. Sie können sie auch rund oder elliptisch gestalten.

### Ein einfacher radialer Verlauf

Wie bei linearen Verläufen benötigen Sie zur Erstellung eines radialen Verlaufs zwei Farben. Standardmäßig befindet sich das Zentrum des Verlaufs bei der 50% 50%-Marke, und der Verlauf ist elliptisch, entsprechend dem {{glossary("aspect ratio", "Seitenverhältnis")}} seines Rahmens:

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

Wie bei linearen Verläufen können Sie auch bei radialen Farbstopps mit einem Prozentsatz oder einer absoluten Länge positionieren.

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

### Das Zentrum des Verlaufs positionieren

Sie können das Zentrum des Verlaufs mit Schlüsselwörtern, Prozentsätzen oder absoluten Längen positionieren, wobei die Längen- und Prozentwerte wiederholt werden, wenn nur einer vorhanden ist, andernfalls in der Reihenfolge der Position von links und der Position von oben.

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

### Radiale Verläufe dimensionieren

Im Gegensatz zu linearen Verläufen können Sie die Größe von radialen Verläufen angeben. Mögliche Werte sind `closest-corner`, `closest-side`, `farthest-corner` und `farthest-side`, wobei `farthest-corner` der Standardwert ist. Kreise können auch mit einer Länge dimensioniert werden, und Ellipsen mit einer Länge oder einem Prozentsatz.

#### Beispiel: `closest-side` für Ellipsen

Dieses Beispiel verwendet den Größenwert `closest-side`, der bedeutet, dass die Größe durch den Abstand vom Ausgangspunkt (dem Zentrum) zur nächsten Seite des umschließenden Kastens festgelegt wird.

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

Dieses Beispiel ist ähnlich wie das vorherige, außer dass seine Größe als `farthest-corner` angegeben ist, was die Größe des Verlaufs durch den Abstand von der Ausgangsstelle zur am weitesten entfernten Ecke des umschließenden Kastens von der Ausgangsstelle festlegt.

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

Dieses Beispiel verwendet `closest-side`, wodurch der Radius des Kreises die Entfernung zwischen dem Zentrum des Verlaufs und der nächstgelegenen Seite beträgt. In diesem Fall ist der Radius die Entfernung zwischen dem Zentrum und der unteren Kante, da der Verlauf 25% von links und 25% vom Boden platziert ist und die Höhe des Div-Elements kleiner ist als die Breite.

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

Nur für Ellipsen können Sie die Größe der Ellipse mit einer Länge oder einem Prozentsatz angeben. Der erste Wert repräsentiert den horizontalen Radius, der zweite den vertikalen Radius, bei dem Sie einen Prozentsatz verwenden, der der Größe des Kastens in dieser Dimension entspricht. Im unten stehenden Beispiel habe ich einen Prozentsatz für den horizontalen Radius verwendet.

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

Für Kreise kann die Größe als {{cssxref("length")}} angegeben werden, die die Größe des Kreises darstellt.

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

Genau wie lineare Verläufe können Sie auch radiale Verläufe stapeln. Der zuerst angegebene ist oben, der zuletzt ist unten.

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

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS)-Funktion erstellt ein Bild, das aus einem Verlauf mit Farbübergängen besteht, die um einen Mittelpunkt gedreht anstatt vom Mittelpunkt abstrahlen. Beispielhafte konische Verläufe umfassen Tortengrafiken und {{glossary("Farbkreis", "Farbräder")}}, aber sie können auch zur Erstellung von Schachbrettmustern und anderen interessanten Effekten verwendet werden.

Die Syntax der konischen Verläufe ist ähnlich wie die der radialen Verläufe, aber die Farbübergänge sind um einen Verlauf-Bogen, den Umfang eines Kreises, herum platziert und die Farbstops sind Prozentsätze oder Winkel: absolute Längen sind nicht gültig.

In einem radialen Verlauf verlaufen die Farben vom Zentrum einer Ellipse aus in alle Richtungen nach außen. Bei konischen Verläufen verlaufen die Farben, als ob sie um den Mittelpunkt eines Kreises gedreht würden, beginnend oben und im Uhrzeigersinn verlaufend. Ähnlich wie bei radialen Verläufen können Sie den Mittelpunkt des Verlaufs positionieren. Ähnlich wie bei linearen Verläufen können Sie den Verlaufswinkel ändern.

### Ein einfacher konischer Verlauf

Wie bei linearen und radialen Verläufen benötigen Sie bei konischen Verläufen nur zwei Farben. Standardmäßig ist das Zentrum des Verlaufs an der 50% 50%-Marke, wobei der Beginn des Verlaufs nach oben zeigt:

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

### Die Mitte des konischen Verlaufes positionieren

Wie bei radialen Verläufen können Sie die Mitte des konischen Verlaufs mit Schlüsselwörtern, Prozentsätzen oder absoluten Längen positionieren, mit dem Schlüsselwort "at"

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

### Den Winkel ändern

Standardmäßig sind die verschiedenen von Ihnen angegebenen Farbstops gleichmäßig um den Kreis herum verteilt. Sie können den Startwinkel des konischen Verlaufs mit dem Wort "from" am Anfang festlegen, gefolgt von einem Winkel oder einer Länge, und Sie können verschiedene Positionen für die Farbstops angeben, indem Sie ihn um einen Winkel oder eine Länge verschieben.

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

## Verwendung wiederholender Verläufe

Die Funktionen {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, und {{cssxref("gradient/conic-gradient", "conic-gradient()")}} unterstützen nicht automatisch wiederholte Farbstops. Allerdings sind die Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} verfügbar, um diese Funktionalität zu bieten.

Die Größe der sich wiederholenden Verlaufslinie oder des Kreisbogens ist der Abstand zwischen dem ersten Farbstoppwert und dem letzten Farbstopplängenwert. Wenn der erste Farbstopp nur eine Farbe hat und keine Farbstopplänge, beträgt der Wert standardmäßig 0. Wenn der letzte Farbstopp nur eine Farbe hat und keine Farbstopplänge, beträgt der Wert standardmäßig 100%. Wenn beide nicht deklariert sind, ist die Verlaufslinie 100%, was bedeutet, dass lineare und konische Verläufe sich nicht wiederholen und der radiale Verlauf sich nur dann wiederholt, wenn der Radius des Verlaufs kleiner ist als die Entfernung zwischen dem Zentrum des Verlaufs und der am weitesten entfernten Ecke. Wenn der erste Farbstopp deklariert ist und der Wert größer als 0 ist, wiederholt sich der Verlauf, da die Größe der Linie oder des Kreisbogens der Unterschied zwischen dem ersten Farbstopp und dem letzten Farbstopp kleiner als 100% oder 360 Grad ist.

### Wiederholende lineare Verläufe

Dieses Beispiel verwendet {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, um einen Verlauf zu erstellen, der sich wiederholt in einer geraden Linie fortführt. Die Farben wiederholen sich neu, da sich der Verlauf wiederholt. In diesem Fall ist die Verlaufslinie 10 px lang.

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

Ähnlich wie bei regulären linearen und radialen Verläufen können Sie mehrere Verläufe einbeziehen, einen über den anderen. Dies ergibt nur dann Sinn, wenn die Verläufe teilweise transparent sind, sodass nachfolgende Verläufe durch die transparenten Bereiche sichtbar werden, oder wenn Sie für jedes Hintergrundbild unterschiedliche [background-sizes](/de/docs/Web/CSS/background-size), optional mit unterschiedlichen [background-position](/de/docs/Web/CSS/background-position)-Eigenschaftswerten einbeziehen. Wir verwenden Transparenz.

In diesem Fall sind die Verlaufslinien 300px, 230px und 300px lang.

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

### Karo-Verlauf

Um ein Karo-Muster zu erstellen, umfassen wir mehrere überlappende Verläufe mit Transparenz. In der ersten Hintergrunddeklaration haben wir jeden Farbstopp einzeln aufgeführt. Die zweite Hintergrunddeklaration verwendet die Syntax für mehrere Farbstopppositionen:

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

### Wiederholende radiale Verläufe

Dieses Beispiel verwendet {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, um einen Verlauf zu erzeugen, der sich wiederholt von einem zentralen Punkt aus ausstrahlt. Die Farben werden immer wieder neu zyklisch genutzt, wenn sich der Verlauf wiederholt.

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

Dieses Beispiel verwendet {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, um einen Verlauf zu erzeugen, der wiederholt um einen Mittelpunkt rotiert. In diesem Fall werden die deklarierten Farbstops viermal wiederholt.

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

### Mehrfache wiederholende konische Verläufe

Genau wie lineare und radiale wiederholende Verläufe können Sie mehrere konische Verläufe übereinander stapeln, indem Sie interessante Effekte erzielen, indem Sie verschiedene `at <position>`-Werte verwenden, sodass die konischen Verläufe sich nicht in ihren Zentren überlappen, und verschiedene `from <angle>`-Werte verwenden, sodass sich die wiederholenden Effekte nicht ausrichten. Dieses Beispiel überlappt drei halbtransparente, sich wiederholende radiale Verläufe, die jeweils ihr Farbschema viermal wiederholen. Um sich überlappende Verläufe sichtbar zu machen, müssen Sie sicherstellen, dass entweder die Farben der Verläufe, die oben auf dem Stapel sind, teilweise transparent sind oder die CSS-Eigenschaft {{cssxref("background-blend-mode")}} verwenden.

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

- Verlaufsfunktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- Verlauf-bezogene CSS-Datentypen: {{cssxref("&lt;gradient&gt;")}}, {{cssxref("&lt;image&gt;")}}
- Verlauf-bezogene CSS-Eigenschaften: {{cssxref("background")}}, {{cssxref("background-image")}}
- [CSS-Verlaufsmuster-Galerie von Lea Verou](https://projects.verou.me/css3patterns/)
- [CSS-Verlauf-Bibliothek von Estelle Weyl](https://standardista.com/cssgradients/)
- [Verlaufs-CSS-Generator](https://cssgenerator.org/gradient-css-generator.html)
- [Erweiterter CSS-Verlaufs-Generator](https://colorbeta.com/)
