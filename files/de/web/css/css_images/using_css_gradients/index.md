---
title: Verwenden von CSS-Verläufen
slug: Web/CSS/CSS_images/Using_CSS_gradients
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{CSSRef}}

**CSS-Verläufe** werden durch den Datentyp {{cssxref("&lt;gradient&gt;")}} dargestellt, eine spezielle Art von {{cssxref("&lt;image&gt;")}}, die aus einem fortschreitenden Übergang zwischen zwei oder mehr Farben besteht. Sie können zwischen drei Arten von Verläufen wählen: _linear_ (erstellt mit der Funktion {{cssxref("gradient/linear-gradient", "linear-gradient()")}}), _radial_ (erstellt mit der Funktion {{cssxref("gradient/radial-gradient", "radial-gradient()")}}), und _konisch_ (erstellt mit der Funktion {{cssxref("gradient/conic-gradient", "conic-gradient()")}}). Sie können auch wiederholende Verläufe erstellen mit den Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}.

Verläufe können überall dort verwendet werden, wo Sie ein `<image>` verwenden würden, zum Beispiel in Hintergründen. Da Verläufe dynamisch erzeugt werden, können sie die Notwendigkeit für Rasterbilddateien überflüssig machen, die traditionell für ähnliche Effekte verwendet wurden. Darüber hinaus sehen Verläufe, da sie vom Browser erzeugt werden, beim Vergrößern besser aus und können dynamisch skaliert werden.

Wir beginnen mit der Einführung in lineare Verläufe, dann stellen wir Funktionen vor, die in allen Verlaufstypen unterstützt werden, wobei wir lineare Verläufe als Beispiel verwenden, und gehen dann weiter zu radialen, konischen und wiederholenden Verläufen.

## Verwenden von linearen Verläufen

Ein linearer Verlauf erzeugt ein Farbband, das sich in einer geraden Linie entwickelt.

### Ein grundlegender linearer Verlauf

Um die grundlegendste Art eines Verlaufs zu erstellen, müssen Sie nur zwei Farben angeben. Diese werden als _Farbstopps_ bezeichnet. Sie müssen mindestens zwei haben, können aber so viele haben, wie Sie möchten.

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

Wenn Sie mehr Kontrolle über die Richtung wünschen, können Sie dem Verlauf einen bestimmten Winkel geben.

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

Bei der Verwendung eines Winkels erzeugt `0deg` einen vertikalen Verlauf, der von unten nach oben verläuft, `90deg` einen horizontalen Verlauf von links nach rechts, und so weiter im Uhrzeigersinn. Negative Winkel verlaufen entgegen dem Uhrzeigersinn.

![Vier Felder mit Winkelangaben und dem zugehörigen Verlauf von Rot zu Weiß. 0deg beginnt unten und geht nach oben. 90deg beginnt links und verläuft nach rechts. 180deg beginnt oben und geht nach unten. -90deg beginnt rechts und verläuft nach links.](linear_red_angles.png)

## Farben deklarieren & Effekte erzeugen

Alle CSS-Verlaufsarten sind eine Auswahl von positionsabhängigen Farben. Die von CSS-Verläufen produzierten Farben können kontinuierlich mit der Position variieren und glatte Farbverläufe erzeugen. Es ist auch möglich, Bänder aus Vollfarben und harte Übergänge zwischen zwei Farben zu erzeugen. Das Folgende gilt für alle Verlaufsfunktionen:

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

Sie müssen Ihre Farbstopps nicht an ihren Standardpositionen belassen. Um deren Positionen fein abzustimmen, können Sie jedem entweder null, einem oder zwei Prozent oder, für radiale und lineare Verläufe, absolute Längenwerte geben. Wenn Sie den Ort als Prozentsatz angeben, repräsentiert `0%` den Anfangspunkt, während `100%` den Endpunkt repräsentiert. Sie können jedoch bei Bedarf Werte außerhalb dieses Bereichs verwenden, um den gewünschten Effekt zu erzielen. Wenn Sie eine Position nicht angeben, wird die Position dieses bestimmten Farbstopps automatisch berechnet, wobei der erste Farbstopp bei `0%` und der letzte Farbstopp bei `100%` liegt und alle anderen Farbstopps zwischen ihren angrenzenden Farbstopps halbiert werden.

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

Um eine harte Linie zwischen zwei Farben zu erzeugen, wodurch ein Streifen statt eines allmählichen Übergangs entsteht, können angrenzende Farbstopps auf dieselbe Position gesetzt werden. In diesem Beispiel teilen sich die Farben einen Farbstopp bei der `50%`-Markierung, also der Hälfte des Verlaufs:

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

Standardmäßig verläuft der Übergang des Verlaufs gleichmäßig von einer Farbe zur nächsten. Sie können einen Farbhinweis einschließen, um den Mittelpunkt des Übergangswerts an einen bestimmten Punkt entlang des Verlaufs zu verschieben. In diesem Beispiel haben wir den Mittelpunkt des Übergangs von der Markierung bei 50% auf die Markierung bei 10% verschoben.

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

Um einen festen, nicht übergehenden Farbbereich innerhalb eines Verlaufs einzuschließen, geben Sie zwei Positionen für den Farbstopp an. Farbstopps können zwei Positionen haben, was zwei aufeinanderfolgenden Farbstopps mit derselben Farbe an unterschiedlichen Positionen entspricht. Die Farbe erreicht die volle Sättigung am ersten Farbstopp, behält diese Sättigung bis zum zweiten Farbstopp bei und wechselt zur Farbe des angrenzenden Farbstopps durch die erste Position des angrenzenden Farbstopps.

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

Im obigen ersten Beispiel geht das Limettengrün von der 0%-Markierung, die implizit ist, zur 20%-Markierung über, wechselt dann über die nächsten 10% der Verlaufsbreite von Limettengrün zu Rot, erreicht bei der 30%-Markierung ein solides Rot und bleibt bis 45% des Verlaufs solid rot, wo es zu Cyan verblasst, und ist für 15% des Verlaufs vollständig cyan, und so weiter.

Im zweiten Beispiel liegt der zweite Farbstopp für jede Farbe an derselben Position wie der erste Farbstopp für die angrenzende Farbe, was einen gestreiften Effekt erzeugt.

In beiden Beispielen wird der Verlauf zweimal geschrieben: Der erste ist die CSS Images Level 3-Methode, bei der die Farbe bei jedem Stopp wiederholt wird, und das zweite Beispiel ist die CSS Images Level 4-Methode mit mehreren Farbstopps, bei der zwei Farbstopp-Längen in einer linearen Farbstopperklärung enthalten sind.

### Kontrolle über den Fortschritt eines Verlaufs

Standardmäßig verläuft ein Verlauf gleichmäßig zwischen den Farben von zwei angrenzenden Farbstopps, wobei der Mittelpunkt zwischen diesen beiden Farbstopps den mittleren Farbwert darstellt. Sie können die {{Glossary("interpolation", "Interpolation")}} oder den Fortschritt zwischen zwei Farbstopps steuern, indem Sie eine Farbhinweisposition angeben. In diesem Beispiel erreicht die Farbe den Mittelpunkt zwischen Limettengrün und Cyan 20% des Verlaufs statt 50% des Verlaufs. Das zweite Beispiel enthält keinen Hinweis, um den Unterschied hervorzuheben, den der Farbhinweis bewirken kann:

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

### Verläufe überlagern

Verläufe unterstützen Transparenz, sodass Sie mehrere Hintergründe stapeln können, um einige ziemlich raffinierte Effekte zu erzielen. Die Hintergründe werden von oben nach unten gestapelt, wobei der zuerst angegebene oben liegt.

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

Sie können sogar Verläufe mit anderen Verläufen stapeln. Solange die oberen Verläufe nicht vollständig undurchsichtig sind, bleiben die darunterliegenden Verläufe sichtbar.

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

Zusätzlich zur Transparenz, zum Stapeln mehrerer halbtransparenter Verläufe und zum Stapeln von Verläufen über Rasterhintergrundbilder, können Verläufe mit anderen CSS-Effekten verwendet werden. In diesem Beispiel haben die vier {{htmlelement("div")}}-Elemente dieselben zwei vollständig undurchsichtigen Verläufe als Hintergrundbilder. Wir wenden verschiedene Werte für die {{cssxref("background-blend-mode")}} CSS-Eigenschaft auf die letzten drei an, die die beiden Hintergrundbilder mischen und dabei unterschiedliche Effekte erzeugen.

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

## Verwenden von radialen Verläufen

Radiale Verläufe sind ähnlich wie lineare Verläufe, mit dem Unterschied, dass sie von einem zentralen Punkt ausstrahlen. Sie können bestimmen, wo sich dieser zentrale Punkt befindet. Sie können sie auch kreis- oder ellipsenförmig gestalten.

### Ein grundlegender radialer Verlauf

Wie bei linearen Verläufen benötigen Sie auch hier nur zwei Farben, um einen radialen Verlauf zu erstellen. Standardmäßig befindet sich das Zentrum des Verlaufs an der 50%-50%-Markierung, und der Verlauf ist elliptisch und entspricht dem {{Glossary("aspect_ratio", "Seitenverhältnis")}} seines Rahmens:

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

### Positionierung radiale Farbstopps

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
  background: radial-gradient(red 10px, yellow 30%, #1e90ff 50%);
}
```

{{ EmbedLiveSample('Positioning_radial_color_stops', 120, 120) }}

### Positionierung des Zentrums des Verlaufs

Sie können das Zentrum des Verlaufs mit Schlüsselbegriffen, Prozent- oder Absolutwerten positionieren, wobei sich Längen- und Prozentwerte wiederholen, wenn nur einer vorhanden ist, andernfalls in der Reihenfolge der Position von links und Position von oben.

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

Im Gegensatz zu linearen Verläufen können Sie die Größe radialer Verläufe angeben. Mögliche Werte sind `closest-corner`, `closest-side`, `farthest-corner` und `farthest-side`, wobei `farthest-corner` der Standardwert ist. Kreise können auch mit einer Länge und Ellipsen mit einer Länge oder einem Prozentsatz dimensioniert werden.

#### Beispiel: `closest-side` für Ellipsen

Dieses Beispiel verwendet den Größenwert `closest-side`, was bedeutet, dass die Größe durch den Abstand vom Startpunkt (dem Mittelpunkt) zur nächsten Seite des umgebenden Kastens festgelegt wird.

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

Dieses Beispiel ist ähnlich wie das vorherige, mit dem Unterschied, dass seine Größe als `farthest-corner` angegeben wird, was die Größe des Verlaufs durch den Abstand vom Startpunkt zur weitesten Ecke des umgebenden Kastens vom Startpunkt aus festlegt.

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

Dieses Beispiel verwendet `closest-side`, wodurch der Radius des Kreises der Abstand zwischen dem Zentrum des Verlaufs und der nächsten Seite ist. In diesem Fall ist der Radius der Abstand zwischen dem Zentrum und der unteren Kante, da der Verlauf 25% vom linken Rand und 25% vom unteren Rand entfernt ist und die Höhe des div-Elements kleiner ist als die Breite.

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

Nur für Ellipsen können Sie die Ellipse mit einer Länge oder einem Prozentsatz dimensionieren. Der erste Wert steht für den horizontalen Radius, der zweite für den vertikalen Radius; wenn Sie einen Prozentsatz verwenden, entspricht dies der Größe des Kastens in dieser Dimension. Im folgenden Beispiel habe ich einen Prozentsatz für den horizontalen Radius verwendet.

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

Genau wie bei linearen Verläufen können Sie auch radiale Verläufe stapeln. Der zuerst angegebene steht oben, der zuletzt unten.

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

## Verwenden von konischen Verläufen

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS) Funktion erzeugt ein Bild, das aus einem Verlauf besteht, dessen Farbveränderungen um einen zentralen Punkt rotiert sind (statt vom Zentrum zu strahlen). Beispiele für konische Verläufe sind Tortendiagramme und {{Glossary("color_wheel", "Farbkreisel")}}, aber sie können auch zum Erstellen von Schachbrettmustern und anderen interessanten Effekten verwendet werden.

Die Syntax von conic-gradient ist der Syntax von radial-gradient ähnlich, aber die Farbstopps sind um einen Gradientenbogen platziert, den Umfang eines Kreises, anstatt auf der Gradientenlinie, die vom Zentrum des Gradienten ausgeht, und die Farbstopps sind Prozentsätze oder Grad: Absolute Längen sind nicht gültig.

In einem radialen Verlauf verlaufen die Farben vom Zentrum einer Ellipse aus nach außen in alle Richtungen. Bei konischen Verläufen verlaufen die Farben, als ob sie um das Zentrum eines Kreises gedreht würden, beginnend oben und im Uhrzeigersinn verlaufend. Ähnlich wie bei radialen Verläufen können Sie das Zentrum des Gradienten positionieren. Ähnlich wie bei linearen Verläufen können Sie den Winkel des Gradienten ändern.

### Ein einfacher konischer Verlauf

Wie bei linearen und radialen Verläufen benötigen Sie nur zwei Farben, um einen konischen Verlauf zu erstellen. Standardmäßig befindet sich das Zentrum des Verlaufs an der 50%-50%-Markierung, wobei der Beginn des Verlaufs nach oben zeigt:

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

Wie bei radialen Verläufen können Sie das Zentrum des konischen Verlaufs mit Schlüsselbegriffen, Prozentwerten oder absoluten Längen positionieren, mit dem Schlüsselwort "at".

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

Standardmäßig sind die verschiedenen von Ihnen angegebenen Farbstopps im gleichen Abstand um den Kreis angeordnet. Sie können den Startwinkel des konischen Verlaufs mit dem Schlüsselwort "from" am Anfang gefolgt von einem Winkel oder einer Länge positionieren, und Sie können unterschiedliche Positionen für die Farbstopps angeben, indem Sie einen Winkel oder eine Länge nach ihnen hinzufügen.

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

## Verwenden von wiederholenden Verläufen

Die Funktionen {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, und {{cssxref("gradient/conic-gradient", "conic-gradient()")}} unterstützen keine automatisch wiederholten Farbstopps. Allerdings stehen die Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} zur Verfügung, um diese Funktionalität zu bieten.

Die Größe der sich wiederholenden Gradientenlinie oder des sich wiederholenden Bogens entspricht der Länge zwischen dem ersten Farbstoppwert und dem letzten Farbstopplängenwert. Wenn der erste Farbstopp nur eine Farbe und keine Farbstopplänge hat, beträgt der Wert standardmäßig 0. Wenn der letzte Farbstopp nur eine Farbe und keine Farbstopplänge hat, beträgt der Wert standardmäßig 100%. Wenn weder das eine noch das andere angegeben ist, ist die Gradientenlinie 100%, was bedeutet, dass die linearen und konischen Verläufe nicht wiederholt werden und der radiale Verlauf nur wiederholt wird, wenn der Radius des Verlaufs kleiner ist als der Abstand zwischen dem Zentrum des Verlaufs und der entferntesten Ecke. Wenn der erste Farbstopp angegeben ist und der Wert größer als 0 ist, wird der Verlauf wiederholt, da die Größe der Linie oder des Bogens, der Unterschied zwischen dem ersten Farbstopp und dem letzten Farbstopp weniger als 100% oder 360 Grad ist.

### Wiederholende lineare Verläufe

Dieses Beispiel verwendet {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, um einen Verlauf zu erstellen, der sich wiederholt in einer geraden Linie entwickelt. Die Farben werden immer wieder durchlaufen, während sich der Verlauf wiederholt. In diesem Fall ist die Gradientenlinie 10px lang.

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

Ähnlich wie bei regulären linearen und radialen Verläufen können Sie mehrere Verläufe übereinanderlegen. Dies ist nur sinnvoll, wenn die Verläufe teilweise transparent sind, was es ermöglicht, dass nachfolgende Verläufe durch die transparenten Bereiche sichtbar werden, oder wenn Sie unterschiedliche [background-sizes](/de/docs/Web/CSS/background-size) optional mit unterschiedlichen [background-position](/de/docs/Web/CSS/background-position) Eigenschaftswerten für jedes Verlaufsbild verwenden. Wir verwenden Transparenz.

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

### Karierter Verlauf

Um ein kariertes Muster zu erstellen, verwenden wir mehrere sich überlappende Verläufe mit Transparenz. In der ersten Hintergrunddeklaration haben wir jeden Farbstopp einzeln aufgeführt. Die zweite Hintergrunddeklaration verwendet die Syntax mit mehreren Positionsfarbstopps:

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

Dieses Beispiel verwendet {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, um einen Verlauf zu erstellen, der wiederholt von einem zentralen Punkt ausstrahlt. Die Farben werden immer wieder durchlaufen, während sich der Verlauf wiederholt.

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

Dieses Beispiel verwendet {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, um einen Verlauf zu erstellen, der sich wiederholt um einen zentralen Punkt dreht. In diesem Fall werden die deklarierten Farbstopps viermal wiederholt.

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

Genau wie bei linearen und radialen wiederholenden Verläufen können Sie auch mehrere konische Verläufe übereinander stapeln und interessante Effekte erzielen, indem Sie unterschiedliche `at <position>`-Werte verwenden, damit sich die konischen Verläufe nicht an ihren Zentren überlappen, und unterschiedliche `from <angle>`-Werte, damit sich die Wiederholungseffekte nicht ausrichten. In diesem Beispiel überlappen sich drei halbtransparente, sich wiederholende radiale Verläufe, die jeweils ihre Farbschemata viermal wiederholen. Um sicherzustellen, dass die überlappenden Verläufe sichtbar sind, müssen entweder die Farben der Verläufe oben im Stapel teilweise transparent sein oder die CSS-Eigenschaft {{cssxref("background-blend-mode")}} verwendet werden.

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
- Verlauf-bezogene CSS-Datentypen: {{cssxref("&lt;gradient&gt;")}}, {{cssxref("&lt;image&gt;")}}
- Verlauf-bezogene CSS-Eigenschaften: {{cssxref("background")}}, {{cssxref("background-image")}}
- [CSS-Verlaufsmustergalerie von Lea Verou](https://projects.verou.me/css3patterns/)
- [CSS-Verlaufbibliothek von Estelle Weyl](https://standardista.com/cssgradients/)
- [Gradient CSS Generator](https://cssgenerator.org/gradient-css-generator.html)
- [Fortgeschrittener CSS-Verlaufs-Generator](https://colorbeta.com/)
