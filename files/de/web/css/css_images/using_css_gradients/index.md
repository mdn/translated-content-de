---
title: Verwendung von CSS-Verläufen
short-title: Verwendung von Verläufen
slug: Web/CSS/CSS_images/Using_CSS_gradients
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**CSS-Verläufe** werden durch den Datentyp {{cssxref("&lt;gradient&gt;")}} repräsentiert, eine spezielle Art von {{cssxref("&lt;image&gt;")}}, die aus einem fortschreitenden Übergang zwischen zwei oder mehr Farben besteht. Sie können zwischen drei Arten von Verläufen wählen: _linear_ (erstellt mit der Funktion {{cssxref("gradient/linear-gradient", "linear-gradient()")}}), _radial_ (erstellt mit der Funktion {{cssxref("gradient/radial-gradient", "radial-gradient()")}}) und _konisch_ (erstellt mit der Funktion {{cssxref("gradient/conic-gradient", "conic-gradient()")}}). Zusätzlich können Sie wiederholte Verläufe mit den Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} erstellen.

Verläufe können überall dort verwendet werden, wo Sie ein `<image>` verwenden würden, zum Beispiel bei Hintergründen. Da Verläufe dynamisch generiert werden, können sie den Bedarf an Rasterbilddateien negieren, die traditionell verwendet wurden, um ähnliche Effekte zu erzielen. Darüber hinaus sehen Verläufe, da sie vom Browser generiert werden, beim Heranzoomen besser aus als Rasterbilder und können spontan in der Größe geändert werden.

Wir beginnen mit der Einführung linearer Verläufe, führen dann Funktionen ein, die in allen Verlaufstypen unterstützt werden, wobei wir lineare Verläufe als Beispiel verwenden, und gehen dann zu radialen, konischen und wiederholten Verläufen über.

## Verwendung linearer Verläufe

Ein linearer Verlauf erzeugt ein Farbbereich, das in einer geraden Linie fortschreitet.

### Ein grundlegender linearer Verlauf

Um den grundlegendsten Typ eines Verlaufs zu erstellen, müssen Sie nur zwei Farben angeben. Diese werden als _Farbstopps_ bezeichnet. Sie müssen mindestens zwei haben, aber Sie können beliebig viele haben.

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

Standardmäßig verlaufen lineare Verläufe von oben nach unten. Sie können deren Rotation ändern, indem Sie eine Richtung angeben.

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

Wenn Sie einen Winkel verwenden, erstellt `0deg` einen vertikalen Verlauf, der von unten nach oben verläuft, `90deg` erstellt einen horizontalen Verlauf, der von links nach rechts verläuft, und so weiter im Uhrzeigersinn. Negative Winkel verlaufen in Gegenrichtung.

![Vier Kästchen, die Winkel auflisten und den zugehörigen Verlauf von Rot nach Weiß zeigen. 0deg beginnt unten und geht nach oben. 90deg beginnt links und geht nach rechts. 180deg beginnt oben und geht nach unten. -90deg beginnt rechts und geht nach links.](linear_red_angles.png)

## Farben deklarieren & Effekte erstellen

Alle CSS-Verlaufsarten sind ein Bereich von positionsabhängigen Farben. Die durch CSS-Verläufe erzeugten Farben können sich kontinuierlich mit der Position ändern und fließende Farbüberblendungen erzeugen. Es ist auch möglich, Streifen von Vollfarben und harte Übergänge zwischen zwei Farben zu erstellen. Das Folgende gilt für alle Verlaufsfunktionen:

### Mehr als zwei Farben verwenden

Sie müssen sich nicht auf zwei Farben beschränken – Sie können so viele verwenden, wie Sie möchten! Standardmäßig sind die Farben gleichmäßig über den Verlauf verteilt.

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

Sie müssen Ihre Farbstopps nicht an ihren Standardpositionen belassen. Um ihre Positionen feinabzustimmen, können Sie jedem einzelnen null, einen oder zwei Prozentwerte oder, für radiale und lineare Verläufe, absolute Längenwerte geben. Wenn Sie die Position als Prozentsatz angeben, stellt `0%` den Startpunkt dar, während `100%` den Endpunkt darstellt; Sie können jedoch Werte außerhalb dieses Bereichs verwenden, um den gewünschten Effekt zu erzielen. Wenn Sie eine Position nicht angeben, wird die Position dieses bestimmten Farbstopps automatisch für Sie berechnet, wobei der erste Farbstopp bei `0%` liegt und der letzte Farbstopp bei `100%`, und alle anderen Farbstopps halbwegs zwischen ihren angrenzenden Farbstopps liegen.

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

### Harte Linien erstellen

Um eine harte Linie zwischen zwei Farben zu erstellen und einen Streifen anstatt eines allmählichen Übergangs zu schaffen, können benachbarte Farbstopps auf die gleiche Position gesetzt werden. In diesem Beispiel teilen sich die Farben einen Farbstopp an der `50%`-Markierung, in der Mitte des Verlaufs:

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

Standardmäßig geht der Verlauf gleichmäßig von einer Farbe zur nächsten über. Sie können einen Farb-Hinweis einfügen, um den Mittelpunkt des Übergangswerts an einem bestimmten Punkt entlang des Verlaufs zu verschieben. In diesem Beispiel haben wir den Mittelpunkt des Übergangs von der 50%-Markierung zur 10%-Markierung verschoben.

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

### Farbstreifen und -bänder erstellen

Um einen festen, nicht übergehenden Farbbereich innerhalb eines Verlaufs einzufügen, fügen Sie zwei Positionen für den Farbstopp ein. Farbstopps können zwei Positionen haben, was zwei aufeinanderfolgende Farbstopps mit derselben Farbe an unterschiedlichen Positionen entspricht. Die Farbe erreicht ihre volle Sättigung am ersten Farbstopp, behält diese Sättigung bis zum zweiten Farbstopp bei und wechselt dann zur Farbe des angrenzenden Farbstopps durch die erste Position des angrenzenden Farbstopps.

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

Im ersten Beispiel oben geht das Limettengrün von der 0%-Markierung, was impliziert wird, zur 20%-Markierung, wechselt innerhalb der nächsten 10% der Breite des Verlaufs von Limettengrün zu Rot, erreicht bei der 30%-Markierung festes Rot und bleibt bis zur 45%-Markierung des Verlaufs festes Rot, wo es zu Cyan übergeht, wird für 15% des Verlaufs vollständig Cyan, und so weiter.

Im zweiten Beispiel liegt der zweite Farbstopp für jede Farbe an derselben Position wie der erste Farbstopp für die angrenzende Farbe, was einen Streifeneffekt erzeugt.

In beiden Beispielen wird der Verlauf zweimal geschrieben: Der erste ist die Methode der CSS Images Level 3 zur Wiederholung der Farbe für jede Haltestelle, und das zweite Beispiel ist die Methode der CSS Images Level 4 mit mehreren Haltestellen, bei der zwei Farbstopp-Längen in einer linearen Farbstopp-Deklaration enthalten sind.

### Steuerung der Progression eines Verlaufs

Standardmäßig verläuft ein Verlauf gleichmäßig zwischen den Farben zweier benachbarter Farbstopps, wobei der Mittelpunkt zwischen diesen beiden Farbstopps der Mittelpunkt des Farbwerts ist. Sie können die {{Glossary("interpolation", "Interpolation")}} oder Fortschreibung zwischen zwei Farbstopps steuern, indem Sie einen Farbhinweisort hinzufügen. In diesem Beispiel erreicht die Farbe den Mittelpunkt zwischen Limettengrün und Cyan 20% des Weges durch den Verlauf anstatt 50% des Weges. Das zweite Beispiel enthält den Hinweis nicht, um den Unterschied hervorzuheben, den der Farbhinweis bewirken kann:

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

### Überlagernde Verläufe

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

Sie können sogar Verläufe mit anderen Verläufen stapeln. Solange die oberen Verläufe nicht vollständig undurchsichtig sind, sind die unteren Verläufe immer noch sichtbar.

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

### Mischende Verläufe

Neben der Transparenz können mehrere halbtransparente Verläufe gestapelt und Verläufe über Rasterhintergrundbilder gestapelt werden, und Verläufe können mit anderen CSS-Effekten verwendet werden. In diesem Beispiel haben die vier {{htmlelement("div")}}-Elemente dieselben zwei vollständig opaken Verläufe als Hintergrundbilder. Wir wenden verschiedene {{cssxref("background-blend-mode")}}-CSS-Eigenschaftswerte auf die letzten drei an, die die beiden Hintergrundbilder mischen und unterschiedliche Effekte erzeugen.

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

## Verwendung radialer Verläufe

Radiale Verläufe sind ähnlich wie lineare Verläufe, mit dem Unterschied, dass sie von einem zentralen Punkt aus strahlen. Sie können bestimmen, wo sich dieser zentrale Punkt befindet. Sie können sie auch rund oder elliptisch machen.

### Ein grundlegender radialer Verlauf

Wie bei linearen Verläufen benötigen Sie nur zwei Farben, um einen radialen Verlauf zu erstellen. Standardmäßig liegt der Mittelpunkt des Verlaufs bei der 50%-50%-Markierung, und der Verlauf ist elliptisch und passt zum {{Glossary("aspect_ratio", "Seitenverhältnis")}} seiner Box:

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

Ähnlich wie bei linearen Verläufen können Sie jeden radialen Farbstopp mit einem Prozentsatz oder einer absoluten Länge positionieren.

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

Sie können das Zentrum des Verlaufs mit Schlüsselbegriffe, Prozentsätzen oder absoluten Längen positionieren, wobei Längen- und Prozentwerte wiederholt werden, wenn nur einer vorhanden ist, ansonsten in der Reihenfolge der Position von links und der Position von oben.

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

Im Gegensatz zu linearen Verläufen können Sie die Größe von radialen Verläufen angeben. Mögliche Werte sind `closest-corner`, `closest-side`, `farthest-corner` und `farthest-side`, wobei `farthest-corner` der Standardwert ist. Kreise können auch mit einer Länge, und Ellipsen mit einer Länge oder einem Prozentsatz dimensioniert werden.

#### Beispiel: `closest-side` für Ellipsen

Dieses Beispiel verwendet den `closest-side`-Größenwert, was bedeutet, dass die Größe durch den Abstand vom Ausgangspunkt (dem Zentrum) zur nächsten Seite der umgebenden Box festgelegt wird.

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

Dieses Beispiel ist ähnlich wie das vorherige, mit der Ausnahme, dass seine Größe als `farthest-corner` angegeben wird, was die Größe des Verlaufs durch den Abstand vom Ausgangspunkt zur am weitesten entfernten Ecke der umgebenden Box vom Ausgangspunkt festlegt.

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

Dieses Beispiel verwendet `closest-side`, was dazu führt, dass der Radius des Kreises der Entfernung zwischen dem Zentrum des Verlaufs und der nächsten Seite entspricht. In diesem Fall ist der Radius die Entfernung zwischen dem Zentrum und der unteren Kante, weil der Verlauf 25% vom linken und 25% vom unteren Rand entfernt platziert ist und die Höhe des div-Elements kleiner ist als die Breite.

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

Nur für Ellipsen können Sie die Ellipse mit einer Länge oder einem Prozentsatz dimensionieren. Der erste Wert stellt den horizontalen Radius dar, der zweite den vertikalen Radius. Wenn Sie einen Prozentsatz verwenden, entspricht dies der Größe der Box in dieser Dimension. Im unteren Beispiel habe ich einen Prozentsatz für den horizontalen Radius verwendet.

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

Genau wie bei linearen Verläufen können Sie auch radiale Verläufe stapeln. Der zuerst angegebene liegt oben, der letzte unten.

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

## Verwendung konischer Verläufe

Die **`conic-gradient()`**-Funktion erstellt ein Bild, das aus einem Verlauf mit Farbüberblendungen besteht, die um einen Mittelpunkt herum gedreht sind (anstatt vom Zentrum auszustrahlen). Beispielhaft konische Verläufe umfassen Tortendiagramme und {{Glossary("color_wheel", "Farbräder")}}, aber sie können auch verwendet werden, um Schachbretter und andere interessante Effekte zu erstellen.

Die Syntax des konischen Verlaufs ähnelt der der radialen Verlaufs, aber die Farbstopps werden um einen Verlaufsbogen, den Umfang eines Kreises herum, und nicht auf dem vom Mittelpunkt ausgehenden Verlaufsstrich platziert. Die Farbstopps sind Prozentwerte oder Winkel: Absolute Längen sind nicht gültig.

In einem radialen Verlauf reichen die Farben vom Zentrum einer Ellipse aus nach außen in alle Richtungen. Bei konischen Verläufen ändern sich die Farben, als ob sie um das Zentrum eines Kreises gedreht würden, beginnend oben und im Uhrzeigersinn verlaufend. Ähnlich wie bei radialen Verläufen können Sie das Zentrum des Verlaufs positionieren. Ähnlich wie bei linearen Verläufen können Sie den Verlaufswinkel ändern.

### Ein grundlegender konischer Verlauf

Wie bei linearen und radialen Verläufen benötigen Sie nur zwei Farben, um einen konischen Verlauf zu erstellen. Standardmäßig liegt der Mittelpunkt des Verlaufs bei der 50%-50%-Markierung, wobei der Beginn des Verlaufs nach oben zeigt:

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

Wie bei radialen Verläufen können Sie das Zentrum des konischen Verlaufs mit Schlüsselwörtern, Prozentsätzen oder absoluten Längen positionieren, mit dem Schlüsselwort "at".

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

Standardmäßig sind die von Ihnen angegebenen verschiedenen Farbstopps gleichmäßig um den Kreis herum angeordnet. Sie können den Startwinkel des konischen Verlaufs einstellen, indem Sie das Schlüsselwort "from" am Anfang gefolgt von einem Winkel oder einer Länge verwenden, und Sie können für die Farbenstopps unterschiedliche Positionen angeben, indem Sie einen Winkel oder eine Länge nach ihnen einfügen.

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

## Verwendung wiederholter Verläufe

Die Funktionen {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}} und {{cssxref("gradient/conic-gradient", "conic-gradient()")}} unterstützen keine automatisch wiederholten Farbstopps. Allerdings stehen die Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} zur Verfügung, um diese Funktionalität zu bieten.

Die Größe der Verlaufsstrecke oder des Verlaufsbogens, der sich wiederholt, ist die Länge zwischen dem ersten Farbpunkt und dem letzten Farbstopplängenwert. Wenn der erste Farbstopp nur eine Farbe und keinen Farbstopplängenwert hat, beträgt der Wert standardmäßig 0. Wenn der letzte Farbstopp nur eine Farbe und keinen Farbstopplängenwert hat, beträgt der Wert standardmäßig 100%. Wenn keiner angegeben ist, ist die Verlaufsstrecke 100%, was bedeutet, dass die linearen und konischen Verlaufs nicht wiederholt werden und der radiale Verlauf nur wiederholt wird, wenn der Radius des Verlaufs kleiner ist als die Länge zwischen dem Mittelpunkt des Verlaufs und der nächstgelegenen Ecke. Wenn der erste Farbstopp angegeben ist und der Wert größer als 0 ist, wird der Verlauf wiederholt, da die Größe der Linie oder des Bogens die Differenz zwischen dem ersten und letzten Farbstopp weniger als 100% oder 360 Grad beträgt.

### Wiederholte lineare Verläufe

Dieses Beispiel verwendet {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, um einen Verlauf zu erstellen, der sich wiederholt in einer geraden Linie fortsetzt. Die Farben werden immer wieder durchlaufen, wenn der Verlauf wiederholt wird. In diesem Fall ist die Verlaufsstrecke 10px lang.

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

### Mehrere wiederholte lineare Verläufe

Ähnlich wie bei regulären linearen und radialen Verläufen können Sie mehrere Verläufe übereinander einfügen. Das macht nur Sinn, wenn die Verläufe teilweise transparent sind und somit nachfolgende Verläufe durch die transparenten Bereiche sichtbar werden, oder wenn Sie unterschiedliche [background-sizes](/de/docs/Web/CSS/Reference/Properties/background-size) verwenden, optional mit verschiedenen [background-position](/de/docs/Web/CSS/Reference/Properties/background-position)-Eigenschaftenwerten für jedes Verlaufsbild. Wir verwenden Transparenz.

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

### Karierter Verlauf

Um ein Karo-Muster zu erstellen, fügen wir mehrere überlappende Verläufe mit Transparenz ein. In der ersten Hintergrunddeklaration haben wir jeden Farbstopp separat aufgeführt. Die zweite Hintergrunddeklaration verwendet die Syntax für mehrere Positionalstopps:

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

### Wiederholte radiale Verläufe

Dieses Beispiel verwendet {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, um einen Verlauf zu erstellen, der sich wiederholt von einem zentralen Punkt aus ausbreitet. Die Farben werden immer wieder durchlaufen, wenn der Verlauf wiederholt wird.

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

### Mehrere wiederholte radiale Verläufe

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

### Wiederholte konische Verläufe

Dieses Beispiel verwendet {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, um einen Verlauf zu erstellen, der sich wiederholt um einen Mittelpunkt dreht. In diesem Fall werden die deklarierten Farbstopps vierfach wiederholt.

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

### Mehrere wiederholte konische Verläufe

Ähnlich wie bei linearen und radialen wiederholten Verläufen können Sie mehrere konische Verläufe übereinander stapeln, um interessante Effekte zu erzeugen, indem Sie unterschiedliche `at <position>`-Werte verwenden, sodass sich die konischen Verläufe nicht in ihren Zentren überlappen, und unterschiedliche `from <angle>`-Werte, sodass sich die Wiederholungseffekte nicht überlappen. In diesem Beispiel überlappen sich drei halbtransparente wiederholte radiale Verläufe, die jeweils ihr Farbschema viermal wiederholen. Um überlappende Verläufe sichtbar zu machen, müssen Sie entweder sicherstellen, dass die Farben der oben auf dem Stapel befindlichen Verläufe teilweise transparent sind, oder die {{cssxref("background-blend-mode")}}-CSS-Eigenschaft verwenden.

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
- [CSS Gradients Patterns Gallery, von Lea Verou](https://projects.verou.me/css3patterns/)
- [Gradient CSS Generator](https://cssgenerator.org/gradient-css-generator.html)
- [Erweiterter CSS-Verlaufs-Generator](https://colorbeta.com/)
- [HDR-Verlaufs-Generator](https://gradient.style/)
