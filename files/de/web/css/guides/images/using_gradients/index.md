---
title: Verwendung von CSS-Verläufen
short-title: Verwendung von Verläufen
slug: Web/CSS/Guides/Images/Using_gradients
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**CSS-Verläufe** werden durch den {{cssxref("gradient")}}-Datentyp dargestellt, eine spezielle Art von {{cssxref("image")}}, der aus einem fortschreitenden Übergang zwischen zwei oder mehr Farben besteht. Sie können zwischen drei Arten von Verläufen wählen: _linear_ (erstellt mit der {{cssxref("gradient/linear-gradient", "linear-gradient()")}}-Funktion), _radial_ (erstellt mit der {{cssxref("gradient/radial-gradient", "radial-gradient()")}}-Funktion) und _conic_ (erstellt mit der {{cssxref("gradient/conic-gradient", "conic-gradient()")}}-Funktion). Sie können auch wiederholende Verläufe mit den Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} erstellen.

Verläufe können überall dort verwendet werden, wo Sie ein `<image>` verwenden würden, beispielsweise in Hintergründen. Da Verläufe dynamisch generiert werden, können sie die Notwendigkeit für Rasterbilddateien überflüssig machen, die traditionell zur Erreichung ähnlicher Effekte verwendet wurden. Außerdem sehen Verläufe, da sie vom Browser generiert werden, besser aus als Rasterbilder, wenn sie vergrößert werden, und können „on the fly“ skaliert werden.

Wir beginnen mit der Einführung linearer Verläufe, dann stellen wir Funktionen vor, die in allen Verlaufstypen unterstützt werden, wobei lineare Verläufe das Beispiel sind, und fahren dann mit radialen, kegelförmigen und wiederholenden Verläufen fort.

## Verwendung von linearen Verläufen

Ein linearer Verlauf erstellt ein Band von Farben, das in einer geraden Linie übergeht.

### Ein einfacher linearer Verlauf

Um die einfachste Art von Verlauf zu erstellen, müssen Sie lediglich zwei Farben angeben. Diese werden als _Farbstopps_ bezeichnet. Es müssen mindestens zwei vorhanden sein, aber Sie können so viele wie gewünscht haben.

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

Standardmäßig verlaufen lineare Verläufe von oben nach unten. Sie können deren Drehung ändern, indem Sie eine Richtung angeben.

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

Sie können den Verlauf sogar diagonal, von Ecke zu Ecke, verlaufen lassen.

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

Bei Verwendung eines Winkels erstellt `0deg` einen vertikalen Verlauf, der von unten nach oben verläuft, `90deg` erstellt einen horizontalen Verlauf, der von links nach rechts verläuft, und so weiter im Uhrzeigersinn. Negative Winkel verlaufen in die entgegengesetzte Richtung.

![Vier Felder mit Auflistung von Winkeln und Anzeige des zugehörigen Verlaufs von Rot zu Weiß. 0deg beginnt unten und geht nach oben. 90deg beginnt links und geht nach rechts. 180deg beginnt oben und geht nach unten. -90deg beginnt rechts und geht nach links.](linear_red_angles.png)

## Farben deklarieren & Effekte erzeugen

Alle CSS-Verlaufstypen sind ein Bereich von positionsabhängigen Farben. Die von CSS-Verläufen erzeugten Farben können sich kontinuierlich mit der Position ändern und somit weiche Farbverläufe erzeugen. Es ist auch möglich, Bänder aus Vollfarben und harte Übergänge zwischen zwei Farben zu erzeugen. Die folgenden Punkte sind für alle Verlauf-Funktionen gültig:

### Verwendung von mehr als zwei Farben

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

### Positionieren von Farbstopps

Sie müssen Ihre Farbstopps nicht an ihren Standardpositionen belassen. Um ihre Positionen feinabzustimmen, können Sie jedem einen Wert in Prozent oder, für radiale und lineare Verläufe, absolute Längenwerte geben. Wenn Sie den Ort als Prozentsatz angeben, steht `0%` für den Ausgangspunkt, während `100%` für das Endziel steht; jedoch können Sie bei Bedarf Werte außerhalb dieses Bereichs verwenden, um den gewünschten Effekt zu erzielen. Wenn Sie eine Position nicht angeben, wird die Position des jeweiligen Farbstopps automatisch für Sie berechnet, wobei der erste Farbstopps bei `0%` liegt und der letzte Farbstopps bei `100%`, und alle anderen Farbstopps auf halbem Weg zwischen ihren angrenzenden Farbstopps liegen.

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

Um eine harte Linie zwischen zwei Farben zu erstellen, wodurch ein Streifen anstelle eines allmählichen Übergangs entsteht, können angrenzende Farbstopps auf denselben Ort gesetzt werden. In diesem Beispiel teilen die Farben einen Farbstopp bei der `50%`-Marke, auf halbem Weg durch den Verlauf:

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

### Verlaufstipps

Standardmäßig gehen die Übergänge im Verlauf gleichmäßig von einer Farbe zur nächsten über. Sie können ein Farbhint einfügen, um den Mittelpunkt des Übergangs auf einen bestimmten Punkt entlang des Verlaufs zu verschieben. In diesem Beispiel haben wir den Mittelpunkt des Übergangs von der 50%-Marke auf die 10%-Marke verschoben.

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

Um einen festen, nicht übergehenden Farbbereich innerhalb eines Verlaufs einzuschließen, geben Sie zwei Positionen für den Farbstopp an. Farbstopps können zwei Positionen haben, was zwei aufeinanderfolgende Farbstopps mit derselben Farbe an unterschiedlichen Positionen entspricht. Die Farbe erreicht die volle Sättigung beim ersten Farbstopp, behält diese Sättigung bis zum zweiten Farbstopp bei und geht in die Farbe des angrenzenden Farbstopps über die erste Position des angrenzenden Farbstopps über.

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

Im obigen ersten Beispiel geht das Lime von der 0%-Marke, die implizit ist, zur 20%-Marke, über die nächsten 10% der Breite des Verlaufs von Lime zu Rot, erreicht bei der 30%-Marke Vollrot, bleibt bis zu 45% des Verlaufs vollrot und blendet dann in Cyan, wobei es für 15% des Verlaufs vollständig Cyan ist, und so weiter.

Im zweiten Beispiel ist der zweite Farbstopp für jede Farbe an derselben Stelle wie der erste Farbstopp für die angrenzende Farbe, was einen Streifeneffekt erzeugt.

In beiden Beispielen wird der Verlauf zweimal geschrieben: Der erste ist die Methode CSS Images Level 3 mit der Wiederholung der Farbe für jeden Stopp und das zweite Beispiel ist die Methode CSS Images Level 4 mit mehreren Farbstopp-Längen in einer linearen Farbstopp-Deklaration.

### Steuerung des Verlaufsverlaufs

Standardmäßig verläuft ein Verlauf gleichmäßig zwischen den Farben zweier benachbarter Farbstopps, wobei der Mittelpunkt zwischen diesen beiden Farbstopps den Mittelpunktfarbwert darstellt. Sie können die {{Glossary("interpolation", "Interpolation")}}, oder den Verlauf, zwischen zwei Farbstopps steuern, indem Sie eine Farbhint-Position einschließen. In diesem Beispiel erreicht die Farbe den Mittelpunkt zwischen Lime und Cyan bei 20% des Verlaufs anstelle von 50%. Das zweite Beispiel enthält keinen Hinweis, um den Unterschied zu dem zu verdeutlichen, welchen Einfluss der Farbhint ausüben kann:

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

### Überlappende Verläufe

Verläufe unterstützen Transparenz, sodass Sie mehrere Hintergründe stapeln können, um beeindruckende Effekte zu erzielen. Die Hintergründe werden von oben nach unten gestapelt, wobei der zuerst angegebene oben liegt.

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

Sie können sogar Verläufe mit anderen Verläufen stapeln. Solange die oberen Verläufe nicht vollständig opak sind, sind die darunter liegenden Verläufe weiterhin sichtbar.

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

### Vermischung von Verläufen

Zusätzlich zur Transparenz können mehrere halbtransparente Verläufe gestapelt und Verläufe über Rasterbilderhintergründe gestapelt werden, um mit anderen CSS-Effekten verwendet zu werden. In diesem Beispiel haben die vier {{htmlelement("div")}}-Elemente dieselben beiden vollständig opaken Verläufe als Hintergrundbilder. Wir wenden verschiedene {{cssxref("background-blend-mode")}}-CSS-Eigenschaftswerte auf die letzten drei an, die die zwei Hintergrundbilder miteinander vermischen und so verschiedene Effekte erzeugen.

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

Radiale Verläufe sind ähnlich wie lineare Verläufe, außer dass sie von einem zentralen Punkt ausstrahlen. Sie können bestimmen, wo dieser zentrale Punkt liegt. Sie können sie auch kreisförmig oder elliptisch gestalten.

### Ein einfacher radialer Verlauf

Wie bei linearen Verläufen benötigen Sie für die Erstellung eines radialen Verlaufs lediglich zwei Farben. Standardmäßig befindet sich der Mittelpunkt des Verlaufs bei der 50%-50%-Marke, und der Verlauf ist elliptisch, passend zum {{Glossary("aspect_ratio", "Seitenverhältnis")}} seiner Box:

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

Ebenso wie bei linearen Verläufen können Sie jeden radialen Farbstopp mit einem Prozentsatz oder einer absoluten Länge positionieren.

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

### Positionierung des Mittelpunktes des Verlaufs

Sie können den Mittelpunkt des Verlaufs mit Schlüsselbegriffen, Prozentsätzen oder absoluten Längen positionieren, wobei sich bei nur einem Wert Länge und Prozentsatz wiederholen, ansonsten in der Reihenfolge der Position von links und der Position von oben.

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

### Größenanpassung radialer Verläufe

Im Gegensatz zu linearen Verläufen können Sie die Größe radialer Verläufe angeben. Mögliche Werte sind `closest-corner`, `closest-side`, `farthest-corner` und `farthest-side`, wobei `farthest-corner` der Standardwert ist. Kreise können auch mit einer Länge, und Ellipsen mit einer Länge oder Prozentsatz bemessen werden.

#### Beispiel: `closest-side` für Ellipsen

Dieses Beispiel verwendet den `closest-side`-Größenwert, was bedeutet, dass die Größe durch die Entfernung vom Ausgangspunkt (dem Mittelpunkt) zur nächstgelegenen Seite der umgebenden Box bestimmt wird.

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

Dieses Beispiel ist dem vorherigen ähnlich, außer dass seine Größe als `farthest-corner` angegeben ist, was die Größe des Verlaufs durch die Entfernung vom Ausgangspunkt zur entferntesten Ecke der umgebenden Box vom Ausgangspunkt bestimmt.

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

Dieses Beispiel verwendet `closest-side`, was den Radius des Kreises zu dem Abstand zwischen dem Mittelpunkt des Verlaufs und der nächstgelegenen Seite macht. In diesem Fall ist der Radius der Abstand zwischen dem Mittelpunkt und der unteren Kante, da der Verlauf 25% von links und 25% von unten platziert ist und die Höhe des Div-Elements kleiner als die Breite ist.

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

Nur für Ellipsen können Sie die Ellipse mit einer Länge oder einem Prozentsatz bemessen. Der erste Wert repräsentiert den horizontalen Radius, der zweite den vertikalen Radius, bei einem Prozentsatz entspricht dies der Größe der Box in dieser Dimension. Im unten stehenden Beispiel habe ich einen Prozentsatz für den horizontalen Radius verwendet.

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

Genau wie lineare Verläufe können auch radiale Verläufe gestapelt werden. Der zuerst angegebene liegt oben, der letzte unten.

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

## Verwendung von kegelförmigen Verläufen

Die **`conic-gradient()`**-Funktion in [CSS](/de/docs/Web/CSS) erstellt ein Bild, das aus einem Verlauf mit Farbwechseln besteht, die sich um einen Mittelpunkt drehen (anstatt vom Zentrum aus zu strahlen). Beispiel für kegelförmige Verläufe sind Tortendiagramme und {{Glossary("color_wheel", "Farbkreise")}}, aber sie können auch verwendet werden, um Schachbrettmuster und andere interessante Effekte zu erzeugen.

Die kegelförmige Verlaufs-Syntax ähnelt der radialen Verlaufs-Syntax, jedoch werden die Farbstopps auf einem Verlaufsbogen, dem Umfang eines Kreises, anstelle auf der Verlaufsini aus dem Mittelpunkt des Verlaufs platziert, und die Farbstopps sind Prozentsätze oder Grad: Absolute Längen sind nicht gültig.

In einem radialen Verlauf wechseln die Farben vom Zentrum einer Ellipse aus nach außen in alle Richtungen. Bei kegelförmigen Verläufen wechseln die Farben, als wü würden sie um den Mittelpunkt eines Kreises gedreht, beginnend oben und im Uhrzeigersinn laufend. Ähnlich wie bei radialen Verläufen können Sie den Mittelpunkt des Verlaufs positionieren. Ähnlich wie bei linearen Verläufen können Sie den Verlaufswinkel ändern.

### Ein einfacher kegelförmiger Verlauf

Wie bei linearen und radialen Verläufen benötigen Sie für die Erstellung eines kegelförmigen Verlaufs lediglich zwei Farben. Standardmäßig befindet sich der Beginn des Verlaufs bei 50% 50%, der Anfang des Verlaufs zeigt nach oben:

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

### Positionierung des kegelförmigen Mittelpunkts

Wie bei radialen Verläufen können Sie den Mittelpunkt des kegelförmigen Verlaufs mit Schlüsselbegriffen, Prozentsätzen oder absoluten Längen positionieren, mit dem Schlüsselwort "at"

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

Standardmäßig sind die verschiedenen Farbstopps, die Sie angeben, gleichmäßig um den Kreis verteilt. Sie können den Anfangswinkel des kegelförmigen Verlaufs mit dem Schlüsselwort "from" am Anfang gefolgt von einem Winkel oder einer Länge positionieren, und Sie können verschiedene Positionen für die Farbenstopps angeben, indem Sie einen Winkel oder eine Länge nach ihnen einschließen.

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

Die Funktionen {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}} und {{cssxref("gradient/conic-gradient", "conic-gradient()")}} unterstützen keine automatisch wiederholten Farbstopps. Allerdings sind die Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} verfügbar, um diese Funktionalität zu bieten.

Die Größe der verlaufenden Linie oder des Bogens, der sich wiederholt, ist der Abstand zwischen dem ersten Farbstopp-Wert und dem letzten Farbstopp-Längenwert. Wenn der erste Farbstopp nur eine Farbe und keine Farbstopp-Länge hat, beträgt der Standardwert 0. Wenn der letzte Farbstopp nur eine Farbe und keine Farbstopp-Länge hat, beträgt der Standardwert 100%. Wenn keine angegeben ist, ist die verlaufende Linie 100%, was bedeutet, dass die linearen und kegelförmigen Verläufe nicht wiederholen und der radiale Verlauf nur wiederholt, wenn der Radius des Verlaufs kleiner ist als die Entfernung zwischen dem Mittelpunkt des Verlaufs und der entferntesten Ecke. Wenn der erste Farbstopp angegeben ist und der Wert größer als 0 ist, wird der Verlauf wiederholt, da die Größe der Linie oder des Bogens der Unterschied zwischen dem ersten Farbstopp und dem letzten Farbstopp geringer ist als 100% oder 360 Grad.

### Wiederholende lineare Verläufe

Dieses Beispiel verwendet {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, um einen Verlauf zu erstellen, der sich wiederholt in einer geraden Linie fortsetzt. Die Farben werden wiederholt, wenn der Verlauf sich wiederholt. In diesem Fall ist die Verlaufsline 10px lang.

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

Ähnlich wie bei normalen linearen und radialen Verläufen können Sie mehrere Verläufe verwenden, einen über dem anderen. Dies macht nur Sinn, wenn die Verläufe teilweise transparent sind und nachfolgende Verläufe durch die transparenten Bereiche sichtbar werden oder wenn Sie unterschiedliche [background-sizes](/de/docs/Web/CSS/Reference/Properties/background-size) verwenden, optional mit unterschiedlichen [background-position](/de/docs/Web/CSS/Reference/Properties/background-position)-Eigenschaftswerten für jedes Hintergrundbild. Wir verwenden Transparenz.

In diesem Fall sind die Verlaufsline 300px, 230px und 300px lang.

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

### Plaid-Verlauf

Um Plaid zu erstellen, verwenden wir mehrere überlappende Verläufe mit Transparenz. In der ersten Background-Deklaration haben wir jeden Farbstopp separat aufgelistet. Die zweite Background-Eigenschaftsdeklaration verwendet die Syntax für mehrere Positionen von Farbstopps:

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

Dieses Beispiel verwendet {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, um einen Verlauf zu erstellen, der sich wiederholt von einem zentralen Punkt ausstrahlt. Die Farben werden immer wieder wiederholt, wenn der Verlauf sich wiederholt.

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

### Wiederholende kegelförmige Verläufe

Dieses Beispiel verwendet {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, um einen Verlauf zu erstellen, der sich wiederholt um einen Mittelpunkt dreht. In diesem Fall werden die angegebenen Farbstopps viermal wiederholt.

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

### Mehrere wiederholende kegelförmige Verläufe

Genau wie lineare und radiale wiederholende Verläufe können Sie auch mehrere kegelförmige Verläufe übereinander stapeln und interessante Effekte erzeugen, indem Sie unterschiedliche Werte für `at <position>` angeben, damit sich die kegelförmigen Verläufe nicht in ihren Zentren überlappen, und unterschiedliche Werte für `from <angle>`, damit sich die Wiederholungseffekte nicht ausrichten. In diesem Beispiel überlappen sich drei halbtransparente, sich wiederholende radiale Verläufe, die jeweils ihre Farbpaletten viermal wiederholen. Damit die überlappenden Verläufe sichtbar werden, müssen Sie sicherstellen, dass entweder die Farben der Verläufe im oberen Bereich des Stapels teilweise transparent sind oder die {{cssxref("background-blend-mode")}}-CSS-Eigenschaft verwenden.

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
- Verlaufbezogene CSS-Datentypen: {{cssxref("gradient")}}, {{cssxref("image")}}
- Verlaufbezogene CSS-Eigenschaften: {{cssxref("background")}}, {{cssxref("background-image")}}
- [CSS Verläufe Muster Galerie, von Lea Verou](https://projects.verou.me/css3patterns/)
- [Gradienten CSS Generator](https://cssgenerator.org/gradient-css-generator.html)
- [Erweiterter CSS Gradienten Generator](https://colorbeta.com/)
- [HDR-Gradienten Generator](https://gradient.style/)
