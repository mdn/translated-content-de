---
title: Verwendung von CSS-Verläufen
slug: Web/CSS/CSS_images/Using_CSS_gradients
l10n:
  sourceCommit: b64538dc77e9a6181b882bd54bdbb307c1430ba8
---

{{CSSRef}}

**CSS-Verläufe** werden durch den Datentyp {{cssxref("&lt;gradient&gt;")}} dargestellt, eine spezielle Art von {{cssxref("&lt;image&gt;")}}, die aus einem progressiven Übergang zwischen zwei oder mehr Farben besteht. Sie können zwischen drei Arten von Verläufen wählen: _linear_ (erstellt mit der Funktion {{cssxref("gradient/linear-gradient", "linear-gradient()")}}), _radial_ (erstellt mit der Funktion {{cssxref("gradient/radial-gradient", "radial-gradient()")}}) und _kegelig_ (erstellt mit der Funktion {{cssxref("gradient/conic-gradient", "conic-gradient()")}}). Sie können auch sich wiederholende Verläufe mit den Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} erstellen.

Verläufe können überall verwendet werden, wo Sie ein `<image>` verwenden würden, wie z. B. in Hintergründen. Da Verläufe dynamisch generiert werden, können sie die Notwendigkeit für Rasterbilddateien negieren, die traditionell verwendet wurden, um ähnliche Effekte zu erzielen. Zudem sehen Verläufe, die vom Browser generiert werden, beim Vergrößern besser aus als Rasterbilder und können spontan in der Größe geändert werden.

Wir beginnen mit der Einführung linearer Verläufe, stellen dann Funktionen vor, die von allen Verlaufstypen unterstützt werden, wobei lineare Verläufe als Beispiel dienen, und gehen anschließend zu radialen, kegelförmigen und sich wiederholenden Verläufen über.

## Verwendung von linearen Verläufen

Ein linearer Verlauf erzeugt ein Farbbank, das in einer geraden Linie verläuft.

### Ein grundlegender linearer Verlauf

Um die einfachste Art eines Verlaufs zu erstellen, müssen Sie lediglich zwei Farben angeben. Diese werden _Farbstopps_ genannt. Sie müssen mindestens zwei haben, aber Sie können so viele haben, wie Sie möchten.

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

Sie können den Verlauf sogar schräg verlaufen lassen, von Ecke zu Ecke.

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

Wenn Sie einen Winkel verwenden, erzeugt `0deg` einen vertikalen Verlauf, der von unten nach oben verläuft, `90deg` erzeugt einen horizontalen Verlauf, der von links nach rechts verläuft, und so weiter im Uhrzeigersinn. Negative Winkel verlaufen gegen den Uhrzeigersinn.

![Vier Kästen mit Winkelangaben und zugehörigen Verlauf von rot nach weiß. 0deg beginnt unten und geht nach oben. 90deg beginnt links und geht nach rechts. 180deg beginnt oben und geht nach unten. -90deg beginnt rechts und geht nach links.](linear_red_angles.png)

## Deklarieren von Farben & Erstellen von Effekten

Alle CSS-Verlaufstypen sind ein Spektrum von positionsabhängigen Farben. Die von CSS-Verläufen erzeugten Farben können kontinuierlich mit der Position variieren und erzeugen glatte Farbverläufe. Es ist auch möglich, Bänder fester Farben und harte Übergänge zwischen zwei Farben zu erzeugen. Die folgenden sind für alle Verlauffunktionen gültig:

### Verwendung von mehr als zwei Farben

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

Sie müssen Ihre Farbstopps nicht an ihren Standardpositionen belassen. Um ihre Positionen fein abzustimmen, können Sie jedem Farbstopp null, einen oder zwei Prozentwerte oder, für radiale und lineare Verläufe, absolute Längenwerte geben. Wenn Sie den Standort als Prozentsatz angeben, repräsentiert `0%` den Startpunkt, während `100%` den Endpunkt repräsentiert; Sie können jedoch Werte außerhalb dieses Bereichs verwenden, wenn dies erforderlich ist, um den gewünschten Effekt zu erzielen. Wenn Sie einen Ort nicht angeben, wird die Position dieses bestimmten Farbstopps automatisch für Sie berechnet, wobei der erste Farbstopp bei `0%` und der letzte Farbstopp bei `100%` liegt und alle anderen Farbstopps auf halbem Weg zwischen ihren benachbarten Farbstopps liegen.

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

Um eine harte Linie zwischen zwei Farben zu erstellen, die einen Streifen anstelle eines allmählichen Übergangs erzeugt, können benachbarte Farbstopps auf denselben Standort eingestellt werden. In diesem Beispiel teilen sich die Farben einen Farbstopp bei der `50%`-Markierung, also in der Mitte des Verlaufs:

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

### Verlauf-Hinweise

Standardmäßig verläuft der Verlauf gleichmäßig von einer Farbe zur nächsten. Sie können einen Farbe-Hinweis einfügen, um den Mittelpunkt des Übergangswerts an einen bestimmten Punkt entlang des Verlaufs zu verschieben. In diesem Beispiel haben wir den Mittelpunkt des Übergangs von der 50%-Markierung auf die 10%-Markierung verschoben.

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

Um einen festen, nicht übergehenden Farbbereich innerhalb eines Verlaufs einzuschließen, fügen Sie zwei Positionen für den Farbstopp ein. Farbstopps können zwei Positionen haben, was zwei aufeinanderfolgende Farbstopps mit derselben Farbe an verschiedenen Positionen entspricht. Die Farbe erreicht bei dem ersten Farbstopp die volle Sättigung, behält diese Sättigung bis zum zweiten Farbstopp bei und wechselt durch die erste Position des benachbarten Farbstopps zur Farbe des benachbarten Farbstopps.

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

Im ersten Beispiel oben, verläuft das Lime von der 0%-Markierung, die impliziert ist, bis zur 20%-Markierung, wechselt von Lime zu Rot über die nächsten 10% der Breite des Verlaufs, erreicht festes Rot bei der 30%-Markierung und bleibt festes Rot bis zu 45% durch den Verlauf, wo es in Cyan übergeht, wobei es 15% des Verlaufs völlig Cyan ist, und so weiter.

Im zweiten Beispiel befindet sich der zweite Farbstopp für jede Farbe an derselben Stelle wie der erste Farbstopp für die benachbarte Farbe, wodurch ein Streifeneffekt entsteht.

In beiden Beispielen wird der Verlauf zweimal geschrieben: Der erste ist die Methode der CSS Images Level 3, die Farbe für jeden Stopp zu wiederholen, und das zweite Beispiel ist die Methode des CSS Images Level 4 mit mehreren Farbstoppmethoden, die zwei Farbstopp-Längen in einer linearen Farbstoppdeklaration einschließt.

### Kontrolle des Fortschritts eines Verlaufs

Standardmäßig verläuft ein Verlauf gleichmäßig zwischen den Farben zweier angrenzender Farbstopps, wobei der Mittelpunkt zwischen diesen beiden Farbstopps der Mittelpunkt der Farbe ist. Sie können die {{Glossary("interpolation", "Interpolation")}} oder den Fortschritt zwischen zwei Farbstopps steuern, indem Sie einen Farbe-Hinweis-Standort einfügen. In diesem Beispiel erreicht die Farbe den Mittelpunkt zwischen Lime und Cyan 20% des Verlaufs anstelle von 50% des Verlaufs. Das zweite Beispiel enthält den Hinweis nicht, um den Unterschied hervorzuheben, den der Farbe-Hinweis machen kann:

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

Verläufe unterstützen Transparenz, sodass Sie mehrere Hintergründe stapeln können, um einige ziemlich ausgefallene Effekte zu erzielen. Die Hintergründe sind von oben nach unten gestapelt, wobei das zuerst angegebene oben liegt.

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
  background:
    linear-gradient(217deg, rgb(255 0 0 / 80%), rgb(255 0 0 / 0%) 70.71%),
    linear-gradient(127deg, rgb(0 255 0 / 80%), rgb(0 255 0 / 0%) 70.71%),
    linear-gradient(336deg, rgb(0 0 255 / 80%), rgb(0 0 255 / 0%) 70.71%);
}
```

{{ EmbedLiveSample('Stacked_gradients', 200, 200) }}

### Vermischen von Verläufen

Zusätzlich zur Transparenz, können Sie mehrere halbtransparente Verläufe stapeln und Verläufe über Rasterhintergrundbilder stapeln, Verläufe können mit anderen CSS-Effekten verwendet werden. In diesem Beispiel haben die vier {{htmlelement("div")}}-Elemente dieselben zwei vollständig undurchsichtigen Verläufe als Hintergrundbilder. Wir wenden unterschiedliche Werte der CSS-Eigenschaft {{cssxref("background-blend-mode")}} auf die letzten drei an, die die beiden Hintergrundbilder mischen und unterschiedliche Effekte erzeugen.

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

Radiale Verläufe sind ähnlich wie lineare Verläufe, außer dass sie von einem zentralen Punkt ausstrahlen. Sie können diktieren, wo dieser zentrale Punkt ist. Sie können sie auch kreisförmig oder elliptisch gestalten.

### Ein grundlegender radialer Verlauf

Wie bei linearen Verläufen benötigen Sie auch für einen radialen Verlauf nur zwei Farben. Standardmäßig befindet sich der Mittelpunkt des Verlaufs bei der 50% 50% Marke, und der Verlauf ist elliptisch und entspricht dem {{Glossary("aspect_ratio", "Seitenverhältnis")}} seiner Box:

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

Wieder ähnlich wie bei linearen Verläufen, können Sie jeden radialen Farbstopp mit einem Prozent oder einer absoluten Länge positionieren.

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

Sie können das Zentrum des Verlaufs mit Schlüsselbegriffen, Prozenten oder absoluten Längen positionieren, wobei sich die Längs- und Prozentwerte wiederholen, wenn nur einer vorhanden ist, ansonsten in der Reihenfolge der Position von links und Position von oben.

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

### Größenbestimmung von radialen Verläufen

Im Gegensatz zu linearen Verläufen können Sie die Größe radialer Verläufe angeben. Mögliche Werte schließen `closest-corner`, `closest-side`, `farthest-corner` und `farthest-side` ein, wobei `farthest-corner` der Standard ist. Kreise können auch mit einer Länge und Ellipsen mit einer Länge oder einem Prozentsatz eingestellt werden.

#### Beispiel: `closest-side` für Ellipsen

Dieses Beispiel verwendet den Größenwert `closest-side`, was bedeutet, dass die Größe durch die Entfernung vom Ausgangspunkt (dem Zentrum) zur nächsten Seite der einschließenden Box festgelegt wird.

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

Dieses Beispiel ist dem vorherigen ähnlich, jedoch ist seine Größe als `farthest-corner` angegeben, was die Größe des Verlaufs durch die Entfernung vom Ausgangspunkt zur am weitesten entfernten Ecke der einschließenden Box vom Ausgangspunkt aus festlegt.

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

In diesem Beispiel wird `closest-side` verwendet, was den Radius des Kreises als die Entfernung zwischen dem Zentrum des Verlaufs und der nächsten Seite festlegt. In diesem Fall ist der Radius die Entfernung zwischen dem Zentrum und der unteren Kante, da der Verlauf 25% von links und 25% von unten platziert ist und die Höhe des div-Elements kleiner ist als die Breite.

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

#### Beispiel: Länge oder Prozent für Ellipsen

Nur für Ellipsen können Sie die Ellipse mit einer Länge oder einem Prozentsatz festlegen. Der erste Wert repräsentiert den horizontalen Radius, der zweite den vertikalen Radius, wobei Sie bei Verwendung eines Prozentsatzes auf die Größe der Box in dieser Dimension bezogen sind. Im unten stehenden Beispiel habe ich einen Prozentsatz für den horizontalen Radius verwendet.

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
  background: radial-gradient(circle 50px, red, yellow 10%, #1e90ff 50%, beige);
}
```

{{ EmbedLiveSample('Example_length_for_circles', 240, 120) }}

### Gestapelte radiale Verläufe

Genauso wie lineare Verläufe können Sie auch radiale Verläufe stapeln. Der zuerst angegebene ist oben, der letzte unten.

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

## Verwendung von kegelförmigen Verläufen

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS)-Funktion erstellt ein Bild, das aus einem Verlauf mit Farbüberblendungen besteht, die um einen Mittelpunkt rotiert sind (anstatt vom Zentrum aus zu strahlen). Beispielhafte kegelförmige Verläufe sind Tortendiagramme und {{Glossary("color_wheel", "Farbkreise")}}, aber sie können auch zum Erstellen von Schachbrettern und anderen interessanten Effekten verwendet werden.

Die Syntax des kegelförmigen Verlaufs ist der Syntax des radialen Verlaufs ähnlich, aber die Farbstopps werden entlang eines Verlaufbogens, dem Umfang eines Kreises, platziert, anstatt auf der vom Zentrum des Verlaufs ausgehenden Verlaufslinie, und die Farbstopps sind Prozentsätze oder Grad: absolute Längen sind nicht gültig.

In einem radialen Verlauf verlaufen die Farben vom Zentrum einer Ellipse aus nach außen in alle Richtungen. Bei kegelförmigen Verläufen verlaufen die Farben, als ob sie um ein Zentrum eines Kreises gedreht würden, beginnend oben und im Uhrzeigersinn. Ähnlich wie bei radialen Verläufen können Sie das Zentrum des Verlaufs positionieren. Ähnlich wie bei linearen Verläufen können Sie den Verlaufwinkel ändern.

### Ein grundlegender kegelförmiger Verlauf

Wie bei linearen und radialen Verläufen benötigen Sie auch für einen kegelförmigen Verlauf nur zwei Farben. Standardmäßig befindet sich der Mittelpunkt des Verlaufs bei der 50% 50%-Markierung, wobei der Anfang des Verlaufs nach oben zeigt:

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

### Positionierung des kegelförmigen Zentrums

Wie radiale Verläufe, können Sie das Zentrum des kegelförmigen Verlaufs mit Schlüsselbegriffen, Prozentsätzen oder absoluten Längen, mit dem Schlüsselwort "at" positionieren.

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

Standardmäßig sind die verschiedenen von Ihnen angegebenen Farbstopps gleichmäßig um den Kreis verteilt. Sie können den Startwinkel des kegelförmigen Verlaufs mit dem Schlüsselwort "from" am Anfang gefolgt von einem Winkel oder einer Länge positionieren, und Sie können für die Farbstopps unterschiedliche Positionen angeben, indem Sie nach diesen einen Winkel oder eine Länge einschließen.

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

## Verwendung von sich wiederholenden Verläufen

Die Funktionen {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}} und {{cssxref("gradient/conic-gradient", "conic-gradient()")}} unterstützen keine automatisch wiederholten Farbstopps. Allerdings stehen die Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} zur Verfügung, um diese Funktionalität zu bieten.

Die Länge der Verlaufslinie oder des Bogens, der sich wiederholt, ist die Länge zwischen dem ersten Farbenstopwert und dem letzten Farbstopp-Längenwert. Wenn der erste Farbstopp nur eine Farbe und keine Farbe-Stopp-Länge hat, wird der Wert standardmäßig auf 0 gesetzt. Wenn der letzte Farbstopp nur eine Farbe und keine Farbstopp-Länge hat, wird der Wert standardmäßig auf 100% gesetzt. Wenn keine der beiden deklariert ist, beträgt die Verlaufslinie 100%, was bedeutet, dass lineare und kegelförmige Verläufe sich nicht wiederholen und der radiale Verlauf sich nur wiederholt, wenn der Radius des Verlaufs kleiner ist als die Länge zwischen dem Zentrum des Verlaufs und der entferntesten Ecke. Wenn der erste Farbstopp deklariert ist und der Wert größer als 0 ist, wird der Verlauf wiederholt, da die Größe der Linie oder des Bogens die Differenz zwischen dem ersten Farbenstopp und dem letzten Farbenstopp kleiner ist als 100% oder 360 Grad.

### Wiederholende lineare Verläufe

Dieses Beispiel verwendet {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, um einen Verlauf zu erzeugen, der sich wiederholt in einer geraden Linie fortsetzt. Die Farben werden immer wieder durchlaufen, während sich der Verlauf wiederholt. In diesem Fall ist die Verlaufslinie 10px lang.

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

Ähnlich wie bei regulären linearen und radialen Verläufen können Sie mehrere Verläufe einfügen, einen auf dem anderen. Dies macht nur Sinn, wenn die Verläufe teilweise transparent sind und nachfolgende Verläufe durch die transparenten Bereiche sichtbar werden, oder wenn Sie unterschiedliche [background-sizes](/de/docs/Web/CSS/background-size) optional mit unterschiedlichen Werten der [background-position](/de/docs/Web/CSS/background-position)-Eigenschaft für jedes Verlauf-Bild angeben. Wir verwenden Transparenz.

In diesem Fall sind die Länge der Verlaufslinien 300px, 230px und 300px.

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

Um Karo zu erstellen, fügen wir mehrere sich überlappende Verläufe mit Transparenz ein. Im ersten Hintergrunddeklaration haben wir jeden Farbstopp separat aufgelistet. Die zweite Hintergrund-Eigenschaftsdeklaration verwendet die Syntax für mehrere Positionen von Farbstopps:

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

Dieses Beispiel verwendet {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, um einen Verlauf zu erzeugen, der wiederholt von einem zentralen Punkt ausstrahlt. Die Farben werden immer wieder durchlaufen, während sich der Verlauf wiederholt.

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

### Wiederholende kegelförmige Verläufe

Dieses Beispiel verwendet {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, um einen Verlauf zu erzeugen, der sich wiederholt um einen Mittelpunkt dreht. In diesem Fall werden die angegebenen Farbstopps viermal wiederholt.

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

### Mehrfach wiederholende kegelförmige Verläufe

Genauso wie lineare und radiale wiederholende Verläufe, können Sie auch mehrere kegelförmige Verläufe übereinander stapeln, um interessante Effekte zu erzeugen, indem Sie verschiedene `at <position>`-Werte verwenden, sodass sich die kegelförmigen Verläufe nicht in ihren Zentren überlappen, und verschiedene `from <angle>`-Werte, damit sich die wiederholenden Effekte nicht ausrichten. Dieses Beispiel überlagert drei halbtransparente sich wiederholende radiale Verläufe, die jeweils ihr Farbdesign viermal wiederholen. Um überlappende Verläufe sichtbar zu machen, müssen Sie sicherstellen, dass entweder die Farben der Verläufe oben im Stapel teilweise transparent sind, oder die CSS-Eigenschaft {{cssxref("background-blend-mode")}} verwenden.

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
- Verlauf-bezogene CSS-Datentypen: {{cssxref("&lt;gradient&gt;")}}, {{cssxref("&lt;image&gt;")}}
- Verlauf-bezogene CSS-Eigenschaften: {{cssxref("background")}}, {{cssxref("background-image")}}
- [CSS Gradients Patterns Gallery von Lea Verou](https://projects.verou.me/css3patterns/)
- [CSS Gradients Library von Estelle Weyl](https://standardista.com/cssgradients/)
- [Gradient CSS Generator](https://cssgenerator.org/gradient-css-generator.html)
- [Advanced CSS Gradient Generator](https://colorbeta.com/)
