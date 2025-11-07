---
title: Verwendung von CSS-Gradienten
short-title: Verwendung von Gradienten
slug: Web/CSS/Guides/Images/Using_gradients
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**CSS-Gradienten** werden durch den Datentyp {{cssxref("&lt;gradient&gt;")}} dargestellt, ein spezieller Typ von {{cssxref("&lt;image&gt;")}}, der aus einem progressiven Übergang zwischen zwei oder mehr Farben besteht. Sie können zwischen drei Arten von Gradienten wählen: _linear_ (erstellt mit der Funktion {{cssxref("gradient/linear-gradient", "linear-gradient()")}}), _radial_ (erstellt mit der Funktion {{cssxref("gradient/radial-gradient", "radial-gradient()")}}) und _konisch_ (erstellt mit der Funktion {{cssxref("gradient/conic-gradient", "conic-gradient()")}}). Sie können auch wiederholende Gradienten mit den Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} erstellen.

Gradienten können überall dort verwendet werden, wo Sie ein `<image>` verwenden würden, zum Beispiel in Hintergründen. Da Gradienten dynamisch erzeugt werden, können sie die Notwendigkeit für Rasterbilddateien vermeiden, die traditionell verwendet wurden, um ähnliche Effekte zu erzielen. Darüber hinaus sehen Gradienten, die vom Browser generiert werden, besser aus als Rasterbilder, wenn sie vergrößert werden und können dynamisch angepasst werden.

Wir beginnen mit der Einführung von linearen Gradienten, dann stellen wir Merkmale vor, die in allen Gradientenarten unterstützt werden, wobei wir lineare Verläufe als Beispiel verwenden, und bewegen uns dann zu radialen, konischen und wiederholenden Gradienten.

## Verwendung von linearen Gradienten

Ein linearer Gradient erzeugt ein Band von Farben, das in einer geraden Linie fortschreitet.

### Ein einfacher linearer Gradient

Um den einfachsten Typ eines Gradienten zu erstellen, müssen Sie nur zwei Farben angeben. Diese werden _Farbstopps_ genannt. Sie müssen mindestens zwei Farbstopps haben, aber Sie können so viele haben, wie Sie möchten.

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

Standardmäßig verlaufen lineare Gradienten von oben nach unten. Sie können ihre Drehung ändern, indem Sie eine Richtung angeben.

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

Sie können den Gradient sogar diagonal laufen lassen, von Ecke zu Ecke.

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

Wenn Sie einen Winkel verwenden, erstellt `0deg` einen vertikalen Verlauf, der von unten nach oben verläuft, `90deg` erstellt einen horizontalen Verlauf, der von links nach rechts verläuft, und so weiter im Uhrzeigersinn. Negative Winkel verlaufen in gegen den Uhrzeigersinn.

![Vier Felder, die den Winkel auflisten und den dazugehörigen Verlauf von Rot zu Weiß anzeigen. 0deg beginnt unten und geht nach oben. 90deg beginnt links und geht nach rechts. 180deg beginnt oben und geht nach unten. -90deg beginnt rechts und geht nach links.](linear_red_angles.png)

## Deklarieren von Farben und Erstellen von Effekten

Alle CSS-Gradiententypen sind eine Reihe von positionsabhängigen Farben. Die von CSS-Gradienten erzeugten Farben können mit der Position kontinuierlich variieren und somit sanfte Farbübergänge erzeugen. Es ist auch möglich, Bänder aus Vollfarben und harte Übergänge zwischen zwei Farben zu erzeugen. Folgendes gilt für alle Gradientenfunktionen:

### Verwendung von mehr als zwei Farben

Sie müssen sich nicht auf zwei Farben beschränken — Sie können so viele verwenden, wie Sie möchten! Standardmäßig sind die Farben gleichmäßig entlang des Gradienten verteilt.

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

Sie müssen Ihre Farbstopps nicht an ihren Standardpositionen belassen. Um ihre Positionen fein abzustimmen, können Sie jedem eine Null, eine oder zwei Prozentwerte oder bei radialen und linearen Gradienten absolute Längenwerte geben. Wenn Sie den Standort als Prozentsatz angeben, repräsentiert `0%` den Startpunkt, während `100%` den Endpunkt darstellt; Sie können jedoch auch Werte außerhalb dieses Bereichs verwenden, um den gewünschten Effekt zu erzielen. Wenn Sie einen Standort nicht angeben, wird die Position des betreffenden Farbstopps automatisch berechnet, wobei der erste Farbstopp bei `0%` ist und der letzte Farbstopp bei `100%`, und alle anderen Farbstopps in der Mitte zwischen ihren benachbarten Farbstopps liegen.

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

Um eine harte Linie zwischen zwei Farben zu erstellen und damit einen Streifen anstelle eines allmählichen Übergangs zu erzeugen, können angrenzende Farbstopps auf dieselbe Position eingestellt werden. In diesem Beispiel teilen sich die Farben einen Farbstopp an der Marke von `50%`, also der Hälfte des Gradienten:

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

Standardmäßig verläuft der Gradient gleichmäßig von einer Farbe zur nächsten. Sie können einen Farbhint hinzufügen, um den Mittelpunkt des Übergangswerts zu einem bestimmten Punkt entlang des Gradienten zu verschieben. In diesem Beispiel haben wir den Mittelpunkt des Übergangs von der 50%-Marke auf die 10%-Marke verschoben.

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

Um innerhalb eines Gradienten einen soliden, nicht übergehenden Farbbereich zu erstellen, platzieren Sie zwei Positionen für den Farbstopp. Farbstopps können zwei Positionen haben, was zwei aufeinanderfolgende Farbstopps mit derselben Farbe an verschiedenen Positionen entspricht. Die Farbe erreicht die vollständige Sättigung am ersten Farbstopp, behält diese Sättigung bis zum zweiten Farbstopp bei und wechselt dann zur Farbe des angrenzenden Farbstopps durch die erste Position des angrenzenden Farbstopps.

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

Im ersten Beispiel oben geht der Limettenton von der 0%-Marke, die implizit ist, zur 20%-Marke, wechselt von Limette zu Rot über die nächsten 10% der Breite des Gradienten, wird bei der 30%-Marke zu solidem Rot und bleibt bis zu 45% des Verlaufs solid rot, wo es zu Cyan verblasst und über 15% des Verlaufs vollständig Cyan wird, und so weiter.

Im zweiten Beispiel liegt der zweite Farbstopp für jede Farbe an der gleichen Position wie der erste Farbstopp für die benachbarte Farbe und erzeugt so einen gestreiften Effekt.

In beiden Beispielen wird der Verlauf zweimal geschrieben: Der erste ist die Methode der CSS-Bilder Level 3, bei der die Farbe für jeden Stopp wiederholt wird, und das zweite Beispiel ist die Methode der CSS-Bilder Level 4, bei der mehrere Farbstopplängen in einer linear-color-stop-Deklaration enthalten sind.

### Kontrolle des Verlaufsfortschritts

Standardmäßig verläuft ein Verlauf gleichmäßig zwischen den Farben von zwei benachbarten Farbstopps, wobei der Mittelpunkt zwischen diesen beiden Farbstopps den Mittelpunktfarbwert darstellt. Sie können die {{Glossary("interpolation", "Interpolation")}} oder den Verlauf zwischen zwei Farbstopps steuern, indem Sie eine Farbhint-Position hinzufügen. In diesem Beispiel erreicht die Farbe den Mittelpunkt zwischen Limette und Cyan 20% des Weges durch den Verlauf statt 50% des Weges. Das zweite Beispiel enthält den Hinweis nicht, um den Unterschied zu verdeutlichen, den der Farbhint bewirken kann:

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

### Überlagernde Gradienten

Gradienten unterstützen Transparenz, sodass Sie mehrere Hintergründe stapeln können, um einige ziemlich ausgefallene Effekte zu erzielen. Die Hintergründe werden von oben nach unten gestapelt, wobei das zuerst angegebene oben liegt.

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

Sie können sogar Gradienten mit anderen Gradienten stapeln. Solange die obersten Gradienten nicht vollständig opak sind, bleiben die unten liegenden Gradienten sichtbar.

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

### Mischung von Gradienten

Zusätzlich zur Transparenz können mehrere halbtransparente Verläufe und Verläufe über Rasterhintergrundbilder gestapelt werden. Gradient können mit anderen CSS-Effekten verwendet werden. In diesem Beispiel haben die vier {{htmlelement("div")}}-Elemente dieselben zwei vollständig opaken Verläufe als Hintergrundbilder. Wir wenden verschiedene {{cssxref("background-blend-mode")}} CSS-Property-Werte auf die letzten drei an, die die beiden Hintergrundbilder mischen und so unterschiedliche Effekte erzielen.

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

Radiale Gradienten ähneln linearen Gradienten, außer dass sie von einem zentralen Punkt aus strahlen. Sie können bestimmen, wo dieser zentrale Punkt liegt. Sie können sie auch kreisförmig oder elliptisch gestalten.

### Ein einfacher radialer Gradient

Wie bei linearen Gradienten benötigen Sie zum Erstellen eines radialen Gradienten nur zwei Farben. Standardmäßig befindet sich der Mittelpunkt des Verlaufs bei der 50%-50%-Marke, und der Verlauf ist elliptisch und entspricht dem {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Rahmens:

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

Wie bei linearen Gradienten können Sie auch bei radialen Gradienten jeden Farbstopp mit einem Prozent- oder absoluten Längenwert positionieren.

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

### Die Position des Gradienten-Zentrums bestimmen

Sie können das Zentrum des Verlaufs mit Schlüsselbegriffen, Prozentsätzen oder absoluten Längen positionieren, wobei sich Längen- und Prozentwerte wiederholen, wenn nur einer vorhanden ist, ansonsten in der Reihenfolge der Position von links und Position von oben.

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

### Größe radialer Verläufe

Im Gegensatz zu linearen Verläufen können Sie die Größe von radialen Verläufen angeben. Mögliche Werte sind `closest-corner`, `closest-side`, `farthest-corner` und `farthest-side`, wobei `farthest-corner` der Standard ist. Kreise können auch mit einer Länge und Ellipsen mit einer Länge oder einem Prozentsatz dimensioniert werden.

#### Beispiel: `closest-side` für Ellipsen

Dieses Beispiel verwendet den Größenwert `closest-side`, was bedeutet, dass die Größe durch den Abstand vom Startpunkt (dem Zentrum) zur nächsten Seite des umgebenden Rahmens festgelegt wird.

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

Dieses Beispiel ähnelt dem vorherigen, außer dass seine Größe als `farthest-corner` angegeben ist, die die Größe des Verlaufs durch den Abstand vom Startpunkt zur entferntesten Ecke des umgebenden Rahmens vom Startpunkt aus festlegt.

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

Dieses Beispiel verwendet `closest-side`, wodurch der Radius des Kreises als Abstand zwischen dem Mittelpunkt des Gradienten und der nächsten Seite festgelegt wird. In diesem Fall ist der Radius der Abstand zwischen dem Zentrum und der unteren Kante, da der Verlauf 25% von links und 25% von unten platziert ist und die Höhe des div-Elements kleiner ist als die Breite.

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

Nur für Ellipsen können Sie die Ellipse mit einer Länge oder einem Prozentsatz dimensionieren. Der erste Wert repräsentiert den horizontalen Radius, der zweite den vertikalen Radius, wobei der Prozentsatz der Größe des Rahmens in dieser Dimension entspricht. Im untenstehenden Beispiel habe ich einen Prozentsatz für den horizontalen Radius verwendet.

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

Für Kreise kann die Größe als {{cssxref("length")}} angegeben werden, die die Größe des Kreises ist.

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

### Gestapelte radiale Gradienten

Genau wie lineare Gradienten können Sie auch radiale Gradienten stapeln. Das zuerst angegebene liegt oben, das zuletzt unten.

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

## Verwendung von konischen Gradienten

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS)-Funktion erstellt ein Bild, das aus einem Verlauf mit Farbübergängen besteht, die um einen Mittelpunkt rotieren (anstatt vom Zentrum aus zu strahlen). Beispiele für konische Gradienten sind Kreisdiagramme und {{Glossary("color_wheel", "Farbräder")}}, sie können jedoch auch verwendet werden, um Schachbrettmuster und andere interessante Effekte zu erstellen.

Die Syntax von konischen Verläufen ähnelt der von radialen Verläufen, jedoch werden die Farbstopps um einen Gradientenbogen, den Umfang eines Kreises, platziert, anstatt auf der vom Mittelpunkt des Verlaufs ausgehenden Gradientenlinie, und die Farbstopps sind Prozentsätze oder Grad: Absolute Längen sind nicht gültig.

In einem radialen Verlauf wechseln die Farben vom Zentrum einer Ellipse nach außen in alle Richtungen. Bei konischen Verläufen wechseln die Farben so, als ob sie um den Mittelpunkt eines Kreises gedreht werden, beginnend oben und im Uhrzeigersinn gehend. Ähnlich wie bei radialen Verläufen können Sie das Zentrum des Verlaufs positionieren. Ähnlich wie bei linearen Verläufen können Sie den Verlaufwinkels ändern.

### Ein einfacher konischer Gradient

Wie bei linearen und radialen Verläufen benötigen Sie zum Erstellen eines konischen Verlaufs nur zwei Farben. Standardmäßig befindet sich der Mittelpunkt des Verlaufs bei der 50%-50%-Marke, wobei der Anfang des Verlaufs nach oben zeigt:

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

### Die Position des konischen Zentrums festlegen

Wie bei radialen Verläufen können Sie das Zentrum des konischen Verlaufs mit Schlüsselbegriffen, Prozentsätzen oder absoluten Längenwerten positionieren, wobei das Schlüsselwort "at" verwendet wird.

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

### Den Winkel ändern

Standardmäßig sind die verschiedenen von Ihnen angegebenen Farbstopps gleichmäßig um den Kreis verteilt. Sie können den Startwinkel des konischen Verlaufs mit dem "from"-Schlüsselwort am Anfang festlegen, gefolgt von einem Winkel oder einer Länge, und Sie können verschiedene Positionen für die Farbenstops angeben, indem Sie einen Winkel oder eine Länge nach ihnen hinzufügen.

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

Die Funktionen {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}} und {{cssxref("gradient/conic-gradient", "conic-gradient()")}} unterstützen keine automatisch wiederholten Farbstopps. Es stehen jedoch die Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} zur Verfügung, um diese Funktionalität anzubieten.

Die Größe der sich wiederholenden Gradientenlinie oder des Bogens entspricht der Länge zwischen dem ersten Farbstoppwert und dem letzten Farbstopplängenwert. Wenn der erste Farbstopp nur eine Farbe und keine Farbstopplänge hat, wird der Wert standardmäßig auf 0 gesetzt. Wenn der letzte Farbstopp nur eine Farbe und keine Farbstopplänge hat, wird der Wert standardmäßig auf 100% gesetzt. Wenn keine angegeben ist, ist die Gradientenlinie 100%, was bedeutet, dass lineare und konische Verläufe nicht wiederholt werden und der radiale Verlauf nur wiederholt wird, wenn der Radius des Verlaufs kleiner ist als die Länge zwischen dem Zentrum des Verlaufs und der entferntesten Ecke. Wenn der erste Farbstopp deklariert ist und der Wert größer als 0 ist, wird der Verlauf wiederholt, da die Länge der Linie oder des Bogens der Unterschied zwischen dem ersten Farbstopp und dem letzten Farbstopp kleiner als 100% oder 360 Grad ist.

### Wiederholende lineare Verläufe

Dieses Beispiel verwendet {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, um einen Verlauf zu erstellen, der sich wiederholt in einer geraden Linie entwickelt. Die Farben werden erneut durchlaufen, wenn sich der Verlauf wiederholt. In diesem Fall ist die Verlaufsline 10px lang.

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

Ähnlich wie bei normalen linearen und radialen Verläufen können Sie mehrere Verläufe übereinander legen. Das ergibt nur Sinn, wenn die Verläufe teilweise transparent sind und die nachfolgenden Verläufe durch die transparenten Bereiche hindurch sichtbar sind, oder wenn Sie unterschiedliche [background-sizes](/de/docs/Web/CSS/Reference/Properties/background-size), optional mit unterschiedlichen [background-position](/de/docs/Web/CSS/Reference/Properties/background-position)-Eigenschaften, für jedes Verlaufsbild angeben. Wir verwenden Transparenz.

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

### Karierter Verlauf

Um ein karomuster zu erstellen, fügen wir mehrere sich überlappende Verläufe mit Transparenz hinzu. Im ersten Hintergrund-Deklaration haben wir jeden einzelnen Farbstopp aufgelistet. Die zweite Hintergrund-Property-Deklaration verwendet die Syntax für mehrere Positionen der Farbstopps:

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

Dieses Beispiel verwendet {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, um einen Verlauf zu erstellen, der wiederholt von einem Mittelpunkt aus strahlt. Die Farben werden immer wieder durchlaufen, wenn sich der Verlauf wiederholt.

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

### Mehrere wiederholende konische Verläufe

Genau wie bei linearen und radialen wiederholenden Verläufen können Sie mehrere konische Verläufe übereinander legen, indem Sie interessante Effekte erzielen, indem Sie verschiedene `at <position>`-Werte verwenden, sodass sich die konischen Verläufe nicht in ihren Zentren überlappen und verschiedene `from <angle>`-Werte, sodass die wiederholenden Effekte nicht ausgerichtet sind. In diesem Beispiel überlagern sich drei halbtransparente, sich wiederholende radiale Verläufe, die ihr Farbschema jeweils viermal wiederholen. Um überlappende Verläufe sichtbar zu machen, müssen Sie sicherstellen, dass die Farben der Verläufe oben im Stapel teilweise transparent sind oder verwenden Sie die {{cssxref("background-blend-mode")}} CSS-Property.

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
- Gradientenbezogene CSS-Datentypen: {{cssxref("&lt;gradient&gt;")}}, {{cssxref("&lt;image&gt;")}}
- Gradientenbezogene CSS-Eigenschaften: {{cssxref("background")}}, {{cssxref("background-image")}}
- [CSS Gradientenmuster Galerie, von Lea Verou](https://projects.verou.me/css3patterns/)
- [Gradient CSS Generator](https://cssgenerator.org/gradient-css-generator.html)
- [Erweiterter CSS-Gradientengenerator](https://colorbeta.com/)
- [HDR-Gradienten-Generator](https://gradient.style/)
