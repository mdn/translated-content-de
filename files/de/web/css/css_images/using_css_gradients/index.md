---
title: Verwenden von CSS-Verläufen
slug: Web/CSS/CSS_images/Using_CSS_gradients
l10n:
  sourceCommit: 9c8c461dc350668ad326fa9aad604ce9da800df2
---

{{CSSRef}}

**CSS-Verläufe** werden durch den {{cssxref("&lt;gradient&gt;")}} Datentyp repräsentiert, eine spezielle Art von {{cssxref("&lt;image&gt;")}}, die einen fließenden Übergang zwischen zwei oder mehr Farben darstellt. Sie können zwischen drei Arten von Verläufen wählen: _linear_ (erstellt mit der Funktion {{cssxref("gradient/linear-gradient", "linear-gradient()")}}), _radial_ (erstellt mit der Funktion {{cssxref("gradient/radial-gradient", "radial-gradient()")}}) und _kegelförmig_ (erstellt mit der Funktion {{cssxref("gradient/conic-gradient", "conic-gradient()")}}). Sie können auch wiederholende Verläufe mit den Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} erstellen.

Verläufe können überall dort verwendet werden, wo Sie ein `<image>` verwenden würden, zum Beispiel in Hintergründen. Da Verläufe dynamisch generiert werden, können Sie auf die Rasterbilder verzichten, die traditionell für ähnliche Effekte verwendet wurden. Darüber hinaus sehen Verläufe, die vom Browser generiert werden, besser aus als Rasterbilder, wenn sie vergrößert werden, und können flexibel skaliert werden.

Wir beginnen mit der Einführung linearer Verläufe, erläutern dann Funktionen, die in allen Verlaufstypen unterstützt werden, anhand linearer Verläufe und gehen anschließend auf radiale, kegelförmige und wiederholende Verläufe ein.

## Verwenden von linearen Verläufen

Ein linearer Verlauf schafft ein Farbband, das sich in einer geraden Linie entwickelt.

### Ein einfacher linearer Verlauf

Um die einfachste Art von Verlauf zu erstellen, müssen Sie lediglich zwei Farben angeben. Diese werden als _Farbstopps_ bezeichnet. Sie müssen mindestens zwei haben, können aber beliebig viele hinzufügen.

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

Sie können den Verlauf sogar diagonal verlaufen lassen, von Ecke zu Ecke.

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

### Verwenden von Winkeln

Wenn Sie mehr Kontrolle über seine Richtung wünschen, können Sie dem Verlauf einen bestimmten Winkel geben.

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

Beim Verwenden eines Winkels erstellt `0deg` einen vertikalen Verlauf, der von unten nach oben verläuft, `90deg` einen horizontalen Verlauf, der von links nach rechts verläuft, und so weiter im Uhrzeigersinn. Negative Winkel verlaufen in die entgegengesetzte Richtung.

![Vier Kästchen, die den Winkel anzeigen und den zugehörigen Verlauf von rot nach weiß darstellen. 0deg beginnt unten und geht nach oben. 90deg beginnt links und geht nach rechts. 180deg beginnt oben und geht nach unten. -90deg beginnt rechts und geht nach links.](linear_red_angles.png)

## Farben deklarieren & Effekte erstellen

Alle CSS-Verlaufsarten sind ein Bereich von positionsabhängigen Farben. Die durch CSS-Verläufe erzeugten Farben können sich kontinuierlich mit der Position ändern und sanfte Farbübergänge erzeugen. Es ist auch möglich, Bänder aus Vollfarben und harte Übergänge zwischen zwei Farben zu erstellen. Die Folgenden sind für alle Verlaufsfunktionen gültig:

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

### Positionieren von Farbstopps

Sie müssen Ihre Farbstopps nicht an ihren Standardpositionen belassen. Um ihre Position fein abzustimmen, können Sie jedem eine, zwei oder drei Prozent- oder, für radiale und lineare Verläufe, absolute Längenwerte geben. Wenn Sie den Standort als Prozentsatz angeben, steht `0%` für den Anfangspunkt, während `100%` für den Endpunkt steht; Sie können jedoch Werte außerhalb dieses Bereichs verwenden, wenn es nötig ist, um den gewünschten Effekt zu erzielen. Wenn Sie keinen Standort angeben, wird die Position des jeweiligen Farbstopps automatisch für Sie berechnet, wobei der erste Farbstopp bei `0%` und der letzte Farbstopp bei `100%` liegt und alle weiteren Farbstopps zwischen ihren benachbarten Farbstopps halbiert werden.

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

Um eine harte Linie zwischen zwei Farben zu erstellen und einen Streifen anstelle eines langsamen Übergangs zu erzeugen, können benachbarte Farbstopps auf dieselbe Position gesetzt werden. In diesem Beispiel teilen die Farben einen Farbstopp bei der `50%`-Markierung, die sich auf halbem Weg durch den Verlauf befindet:

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

Standardmäßig verlaufen die Übergänge im Verlauf gleichmäßig von einer Farbe zur nächsten. Sie können einen Farbhinweis hinzufügen, um den Mittelpunkt des Übergangswerts an einen bestimmten Punkt entlang des Verlaufs zu verschieben. In diesem Beispiel wurde der Mittelpunkt des Übergangs von der 50%-Markierung auf die 10%-Markierung verschoben.

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

### Farb- & Streifenbänder erstellen

Um einen festen, nicht übergehenden Farbbereich innerhalb eines Verlaufs aufzunehmen, fügen Sie zwei Positionen für den Farbstopp hinzu. Farbstopps können zwei Positionen haben, was zwei aufeinander folgenden Farbstopps mit derselben Farbe an verschiedenen Positionen entspricht. Die Farbe erreicht beim ersten Farbstopp ihre volle Sättigung, behält diese Sättigung bis zum zweiten Farbstopp bei und geht in die Farbe des angrenzenden Farbstopps beim ersten Bereich des angrenzenden Farbstopps über.

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

Im ersten oben gezeigten Beispiel geht das Lime von der 0%-Markierung, die impliziert ist, zur 20%-Markierung, wechselt über die nächsten 10% der Breite des Verlaufs von Lime zu Rot, erreicht beim 30%-Punkt ein leuchtendes Rot und bleibt durch den Verlauf an der 45%-Markierung bis es zu Cyan verblasst, wobei es 15% des Verlaufs vollständig Cyan bleibt und so weiter.

Im zweiten Beispiel liegt der zweite Farbstopp für jede Farbe an derselben Stelle wie der erste Farbstopp für die benachbarte Farbe, wodurch ein Streifeneffekt entsteht.

In beiden Beispielen wird der Verlauf zweimal geschrieben: Der erste ist die CSS-Images-Level-3-Methode, um die Farbe für jeden Stopp zu wiederholen, und das zweite Beispiel ist die CSS-Images-Level-4-Methode mit mehreren Farbstopp-Längen in einer linear-color-stop-Deklaration.

### Kontrolle der Progression eines Verlaufs

Standardmäßig verläuft ein Verlauf gleichmäßig zwischen den Farben zweier benachbarter Farbstopps, wobei der Mittelpunkt zwischen diesen beiden Farbstopps der Farbe des Mittelpunkts entspricht. Sie können die [Interpolation](/de/docs/Glossary/interpolation), oder Progression, zwischen zwei Farbstopps steuern, indem Sie eine Farbhinweisposition hinzufügen. In diesem Beispiel erreicht die Farbe den Mittelpunkt zwischen Lime und Cyan 20% des Weges durch den Verlauf anstelle von 50% des Weges. Das zweite Beispiel enthält keinen Hinweis, um den Unterschied zu betonen, den der Farbhinweis bewirken kann:

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

### Überlagern von Verläufen

Verläufe unterstützen Transparenz, sodass Sie mehrere Hintergründe stapeln können, um einige ziemlich ausgefallene Effekte zu erzielen. Die Hintergründe werden von oben nach unten gestapelt, wobei der zuerst angegebene ganz oben liegt.

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

Sie können sogar Verläufe mit anderen Verläufen stapeln. Solange die oberen Verläufe nicht vollständig deckend sind, werden die darunter liegenden Verläufe weiterhin sichtbar sein.

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

### Mischen von Verläufen

Neben Transparenz können gestapelte halbtransparente Verläufe und gestapelte Verläufe über Rasterhintergrundbildern zusammen mit anderen CSS-Effekten verwendet werden. In diesem Beispiel haben die vier {{htmlelement("div")}} Elemente dieselben zwei vollständig deckenden Verläufe als Hintergrundbilder. Wir wenden verschiedene Werte der CSS-Eigenschaft {{cssxref("background-blend-mode")}} auf die letzten drei an, die die beiden Hintergrundbilder mischen und unterschiedliche Effekte erzeugen.

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

## Verwenden von radialen Verläufen

Radiale Verläufe ähneln linearen Verläufen, außer dass sie von einem zentralen Punkt aus strahlen. Sie können bestimmen, wo sich dieser zentrale Punkt befindet. Sie können sie auch kreisförmig oder elliptisch gestalten.

### Ein einfacher radialer Verlauf

Wie bei linearen Verläufen benötigen Sie auch nur zwei Farben, um einen radialen Verlauf zu erstellen. Standardmäßig befindet sich der Mittelpunkt des Verlaufs bei der 50% 50%-Markierung, und der Verlauf ist elliptisch und entspricht dem [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) seines Kastens:

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

### Positionieren radialer Farbstopps

Ähnlich wie bei linearen Verläufen können Sie jeden radialen Farbstopp mit einem Prozent oder einer absoluten Länge positionieren.

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

### Positionieren des Zentrums des Verlaufs

Sie können das Zentrum des Verlaufs mit Schlüsselbegriffen, Prozentsätzen oder absoluten Längen positionieren, wobei Werte für Länge und Prozentsatz wiederholt werden, wenn nur eine vorhanden ist, andernfalls in der Reihenfolge von der linken Position und der oberen Position.

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

### Größenanpassung radialer Verläufe

Im Gegensatz zu linearen Verläufen können Sie die Größe von radialen Verläufen angeben. Mögliche Werte sind `closest-corner`, `closest-side`, `farthest-corner` und `farthest-side`, wobei `farthest-corner` der Standardwert ist. Kreise können auch mit einer Länge und Ellipsen mit einer Länge oder einem Prozentsatz dimensioniert werden.

#### Beispiel: `closest-side` für Ellipsen

Dieses Beispiel verwendet den Wert `closest-side`, was bedeutet, dass die Größe durch den Abstand vom Ausgangspunkt (dem Zentrum) zur nächstgelegenen Seite des umschließenden Kastens festgelegt wird.

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

Dieses Beispiel ist dem vorherigen ähnlich, außer dass seine Größe als `farthest-corner` angegeben ist, was die Größe des Verlaufs durch den Abstand zum am weitesten vom Ausgangspunkt entfernten Eckpunkt des umschließenden Kastens festlegt.

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

Dieses Beispiel verwendet `closest-side`, was dazu führt, dass der Radius des Kreises der Abstand zwischen dem Mittelpunkt des Verlaufs und der nächstgelegenen Seite ist. In diesem Fall ist der Radius der Abstand zwischen dem Zentrum und der unteren Kante, da der Verlauf 25% von der linken und 25% von der unteren Seite entfernt ist und die Höhe des div-Elements kleiner als die Breite ist.

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

Nur für Ellipsen können Sie die Ellipse mit einer Länge oder einem Prozentsatz dimensionieren. Der erste Wert repräsentiert den horizontalen Radius, der zweite den vertikalen Radius, wobei ein Prozentsatz der Größe des Kastens in dieser Dimension entspricht. Im untenstehenden Beispiel habe ich einen Prozentsatz für den horizontalen Radius verwendet.

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

Genau wie lineare Verläufe können Sie auch radiale Verläufe stapeln. Der zuerst angegebene befindet sich oben, der letzte unten.

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

## Verwenden von kegelförmigen Verläufen

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS)-Funktion erstellt ein Bild, das aus einem Verlauf besteht, bei dem Farbübergänge um einen Mittelpunkt rotieren (anstatt vom Zentrum aus zu strahlen). Beispiele für kegelförmige Verläufe sind Kreis- und Farbkreise, aber sie können auch zur Erstellung von Schachbrettern und anderen interessanten Effekten verwendet werden.

Die Syntax des kegelförmigen Verlaufs ähnelt der eines radial-gradients, aber die Farbstopps werden um einen Bogen eines Kreises platziert, anstelle entlang einer Linie, die aus dem Zentrum des Verlaufs hervorgeht, und die Farbstopps sind prozentual oder in Gradzahlen angegeben: absolute Längen sind nicht gültig.

Bei einem radialen Verlauf gehen die Farben vom Mittelpunkt einer Ellipse aus nach außen in alle Richtungen. Bei kegelförmigen Verläufen verläuft der Farbverlauf, als ob er sich um den Mittelpunkt eines Kreises dreht, beginnt am oberen Ende und dreht sich im Uhrzeigersinn. Ähnlich wie bei radialen Verläufen können Sie das Zentrum des Verlaufs positionieren. Ähnlich wie bei linearen Verläufen können Sie den Winkel des Verlaufs ändern.

### Ein einfacher kegelförmiger Verlauf

Wie bei linearen und radialen Verläufen benötigen Sie auch zwei Farben, um einen kegelförmigen Verlauf zu erstellen. Standardmäßig befindet sich der Mittelpunkt des Verlaufs bei der 50% 50%-Markierung, wobei der Beginn des Verlaufs nach oben zeigt:

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

### Positionieren des kegelförmigen Zentrums

Wie bei radialen Verläufen können Sie das Zentrum des kegelförmigen Verlaufs mit Schlüsselbegriffen, Prozentsätzen oder absoluten Längen positionieren, mit dem Schlüsselwort "at".

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

Standardmäßig sind die verschiedenen angegebenen Farbstopps im gleichen Abstand um den Kreis verteilt. Sie können den Anfangswinkel des kegelförmigen Verlaufs mit dem Schlüsselwort "from" am Anfang gefolgt von einem Winkel oder einer Länge positionieren, und Sie können für die Farbstopps unterschiedliche Positionen angeben, indem Sie nach ihnen einen Winkel oder eine Länge angeben.

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

Die Funktionen {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}} und {{cssxref("gradient/conic-gradient", "conic-gradient()")}} unterstützen keine automatisch wiederholten Farbstopps. Die Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} sind jedoch verfügbar, um diese Funktionalität anzubieten.

Die Größe der sich wiederholenden Verlaufsbahn oder des Bogens ist die Länge zwischen dem ersten Farbstoppswert und dem letzten Farbstoppslängenwert. Wenn der erste Farbstopp nur eine Farbe und keinen Farbstoppslängenwert hat, wird der Wert auf 0 gesetzt. Wenn der letzte Farbstopp nur eine Farbe und keinen Farbstoppslängenwert hat, wird der Wert auf 100% gesetzt. Wenn keiner deklariert ist, beträgt die Verlaufsbahn 100%, was bedeutet, dass die linearen und kegelförmigen Verläufe nicht wiederholt werden und der radiale Verlauf sich nur wiederholt, wenn der Radius des Verlaufs kleiner ist als die Länge zwischen dem Zentrum des Verlaufs und der am weitesten entfernten Ecke. Wenn der erste Farbstopp deklariert ist, und der Wert größer als 0 ist, wird sich der Verlauf wiederholen, da die Länge der Bahn oder des Bogens der Unterschied zwischen dem ersten Farbstopp und dem letzten Farbstopp kleiner als 100% oder 360 Grad ist.

### Wiederholende lineare Verläufe

Dieses Beispiel verwendet {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, um einen Verlauf zu erstellen, der sich wiederholt in einer geraden Linie entwickelt. Die Farben werden erneut durchlaufen, während der Verlauf sich wiederholt. In diesem Fall ist die Verlaufsbahn 10px lang.

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

Ähnlich wie bei normalen linearen und radialen Verläufen können Sie mehrere Verläufe übereinander legen. Dies macht nur Sinn, wenn die Verläufe teilweise transparent sind, sodass die nachfolgenden Verläufe durch die transparenten Bereiche hindurch sichtbar werden, oder wenn Sie für jedes Verlaufbild unterschiedliche [Hintergrundgrößen](/de/docs/Web/CSS/background-size) optional mit unterschiedlichen [Hintergrundposition](/de/docs/Web/CSS/background-position) Eigenschaftswerten festlegen. Wir verwenden Transparenz.

In diesem Fall sind die Verlaufsbahnen 300px, 230px und 300px lang.

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

### Karierter Verlauf

Um kariert zu erstellen, fügen wir mehrere überlappende Verläufe mit Transparenz ein. In der ersten Hintergrunddeklaration haben wir jeden Farbstopp separat aufgeführt. Die zweite Hintergrunddeklaration verwendet die Syntax mit mehreren Positionen für Farbstopps:

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

Dieses Beispiel verwendet {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, um einen Verlauf zu erstellen, der sich wiederholt von einem zentralen Punkt aus strahlt. Die Farben werden immer wieder durchlaufen, während der Verlauf sich wiederholt.

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

### Wiederholende kegelförmige Verläufe

Dieses Beispiel verwendet {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, um einen Verlauf zu erstellen, der wiederholt um einen Mittelpunkt rotiert. In diesem Fall werden die angegebenen Farbstopps viermal wiederholt.

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

### Mehrfache wiederholende kegelförmige Verläufe

Wie bei linearen und radialen Wiederholungsverläufen können Sie mehrere kegelförmige Verläufe übereinander stapeln und interessante Effekte erzeugen, indem Sie unterschiedliche `at <position>` Werte verwenden, sodass die kegelförmigen Verläufe sich nicht an ihren Zentren überlappen, und unterschiedliche `from <angle>` Werte, sodass sich die Wiederholungseffekte nicht ausrichten. Dieses Beispiel überlappt drei halbtransparente wiederholende radiale Verläufe, die jeweils ihr Farbschema viermal wiederholen. Um überlappende Verläufe sichtbar zu machen, müssen Sie entweder sicherstellen, dass die Farben der Verläufe an der Spitze des Stacks teilweise transparent sind, oder die CSS-Eigenschaft {{cssxref("background-blend-mode")}} verwenden.

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

- Verlauffunktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- Mit Verläufen in Verbindung stehende CSS-Datentypen: {{cssxref("&lt;gradient&gt;")}}, {{cssxref("&lt;image&gt;")}}
- Mit Verläufen in Verbindung stehende CSS-Eigenschaften: {{cssxref("background")}}, {{cssxref("background-image")}}
- [CSS-Gradienten-Muster-Galerie von Lea Verou](https://projects.verou.me/css3patterns/)
- [CSS-Gradienten-Bibliothek von Estelle Weyl](https://standardista.com/cssgradients/)
- [Gradient CSS Generator](https://cssgenerator.org/gradient-css-generator.html)
- [Erweiterter CSS Gradient Generator](https://colorbeta.com/)
