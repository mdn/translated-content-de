---
title: Verwenden von CSS-Verläufen
short-title: Verwenden von Verläufen
slug: Web/CSS/CSS_images/Using_CSS_gradients
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**CSS-Verläufe** werden durch den Daten-Typ {{cssxref("&lt;gradient&gt;")}} dargestellt, ein spezieller Typ von {{cssxref("&lt;image&gt;")}}, der aus einem progressiven Übergang zwischen zwei oder mehr Farben besteht. Sie können zwischen drei Arten von Verläufen wählen: _linear_ (erstellt mit der Funktion {{cssxref("gradient/linear-gradient", "linear-gradient()")}}), _radial_ (erstellt mit der Funktion {{cssxref("gradient/radial-gradient", "radial-gradient()")}}) und _konisch_ (erstellt mit der Funktion {{cssxref("gradient/conic-gradient", "conic-gradient()")}}). Sie können auch wiederholende Verläufe mit den Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} erstellen.

Verläufe können überall dort verwendet werden, wo Sie ein `<image>` einsetzen würden, beispielsweise in Hintergründen. Da Verläufe dynamisch generiert werden, können sie den Bedarf an Rasterbilddateien, die traditionell für ähnliche Effekte verwendet wurden, überflüssig machen. Außerdem sehen Verläufe, da sie vom Browser generiert werden, beim Vergrößern besser aus als Rasterbilder und können im laufenden Betrieb skaliert werden.

Wir beginnen mit der Einführung von linearen Verläufen, dann stellen wir Funktionen vor, die in allen Verlaufstypen unterstützt werden, indem wir lineare Verläufe als Beispiel verwenden, und gehen dann zu radialen, konischen und wiederholenden Verläufen über.

## Verwenden von linearen Verläufen

Ein linearer Verlauf erzeugt ein Farbband, das in einer geraden Linie fortschreitet.

### Ein grundlegender linearer Verlauf

Um die grundlegendste Art von Verlauf zu erstellen, müssen Sie lediglich zwei Farben angeben. Diese werden _Farbstopps_ genannt. Sie müssen mindestens zwei haben, können jedoch so viele hinzufügen, wie Sie möchten.

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

Beim Verwenden eines Winkels erzeugt `0deg` einen vertikalen Verlauf, der von unten nach oben verläuft, `90deg` einen horizontalen Verlauf von links nach rechts und so weiter im Uhrzeigersinn. Negative Winkel verlaufen gegen den Uhrzeigersinn.

![Vier Kästchen, die den Winkel auflisten und den zugehörigen Verlauf von rot nach weiß zeigen. 0deg beginnt unten und geht nach oben. 90deg beginnt links und geht nach rechts. 180deg beginnt oben und geht nach unten. -90deg beginnt rechts und geht nach links.](linear_red_angles.png)

## Farben deklarieren & Effekte erzeugen

Alle CSS-Verlaufsarten sind eine Palette von positionsabhängigen Farben. Die von CSS-Verläufen erzeugten Farben können sich kontinuierlich mit der Position ändern und so sanfte Farbverläufe erzeugen. Es ist auch möglich, Bänder aus Vollfarben und harte Übergänge zwischen zwei Farben zu erzeugen. Folgende Punkte gelten für alle Verlaufsfunktionen:

### Verwenden von mehr als zwei Farben

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

### Farbstopps positionieren

Sie müssen Ihre Farbstopps nicht an ihrer Standardposition belassen. Um ihre Positionen fein abzustimmen, können Sie jedem Farbstop null, einen oder zwei Prozentwerte oder für radiale und lineare Verläufe absolute Längenwerte geben. Wenn Sie den Ort als Prozentsatz angeben, repräsentiert `0%` den Ausgangspunkt, während `100%` den Endpunkt darstellt; jedoch können Sie Werte außerhalb dieses Bereichs verwenden, um den gewünschten Effekt zu erzielen. Wenn Sie eine Position nicht angeben, wird die Position des entsprechenden Farbstopps automatisch für Sie berechnet, wobei der erste Farbstopp bei `0%` und der letzte Farbstopp bei `100%` liegt, und alle anderen Farbstopps sich in der Mitte zwischen ihren benachbarten Farbstopps befinden.

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

Um eine harte Linie zwischen zwei Farben zu erzeugen und damit einen Streifen statt eines allmählichen Übergangs zu schaffen, können angrenzende Farbstopps an derselben Position eingestellt werden. In diesem Beispiel teilen die Farben einen Farbstopp an der `50%`-Markierung, auf halbem Weg durch den Verlauf:

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

Standardmäßig wechselt der Verlauf gleichmäßig von einer Farbe zur nächsten. Sie können einen Verlaufs-Hinweis einfügen, um den Mittelpunkt der Übergangswerte an eine bestimmte Stelle entlang des Verlaufs zu verschieben. In diesem Beispiel haben wir den Mittelpunkt des Übergangs von der 50%-Markierung zur 10%-Markierung verschoben.

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

### Farbbänder und Streifen erstellen

Um einen festen, nicht übergehenden Farbbereich innerhalb eines Verlaufs einzuschließen, geben Sie zwei Positionen für den Farbstopp an. Farbstopps können zwei Positionen haben, was zwei aufeinanderfolgende Farbstopps mit derselben Farbe an verschiedenen Positionen entspricht. Die Farbe erreicht die vollständige Sättigung am ersten Farbstopp, behält diese Sättigung bis zum zweiten Farbstopp bei und wechselt zur Farbe des angrenzenden Farbstopps durch die erste Position des angrenzenden Farbstopps.

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

Im ersten obigen Beispiel geht das Lime von der 0%-Markierung, die implizit ist, zur 20%-Markierung, wechselt von Lime zu Rot über die nächsten 10% der Breite des Verlaufs, erreicht festes Rot bei der 30%-Markierung und bleibt fest rot bis zur 45%-Markierung des Verlaufs, wo es zu Cyan übergeht, was für 15% des Verlaufs vollständig Cyan ist, und so weiter.

Im zweiten Beispiel liegt der zweite Farbstopp für jede Farbe an der gleichen Stelle wie der erste Farbstopp für die angrenzende Farbe, wodurch ein gestreifter Effekt entsteht.

In beiden Beispielen wird der Verlauf zweimal geschrieben: das erste ist die CSS Images Level 3-Methode, bei der die Farbe für jeden Stopp wiederholt wird, und das zweite Beispiel ist die CSS Images Level 4-Methode, bei der mehrere Farbstopp-Längen in einer linearen Farbstopp-Deklaration enthalten sind.

### Kontrolle des Verlaufsfortschritts

Standardmäßig verläuft ein Verlauf gleichmäßig zwischen den Farben zweier benachbarter Farbstopps, wobei der Mittelpunkt zwischen diesen beiden Farbstopps den Mittelpunkt-Farbwert darstellt. Sie können die {{Glossary("interpolation", "Interpolation")}} oder den Fortschritt zwischen zwei Farbstopps steuern, indem Sie eine Verlaufshinweisposition angeben. In diesem Beispiel erreicht die Farbe den Mittelpunkt zwischen Lime und Cyan 20% des Weges durch den Verlauf statt 50%. Das zweite Beispiel enthält keinen Hinweis, um den Unterschied zu verdeutlichen, den der Verlaufshinweis bewirken kann:

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

Sie können Verläufe sogar mit anderen Verläufen stapeln. Solange die oberen Verläufe nicht vollständig undurchsichtig sind, bleiben die darunter liegenden Verläufe sichtbar.

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

Zusätzlich zur Transparenz, dem Stapeln mehrerer halbdurchsichtiger Verläufe und dem Stapeln von Verläufen über Rasterhintergrundbildern können Verläufe mit anderen CSS-Effekten verwendet werden. In diesem Beispiel haben die vier {{htmlelement("div")}}-Elemente dieselben zwei vollständig undurchsichtigen Verläufe als Hintergrundbilder. Wir setzen unterschiedliche {{cssxref("background-blend-mode")}} CSS-Eigenschaftswerte auf die letzten drei, die die beiden Hintergrundbilder mischen und verschiedene Effekte erzeugen.

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

Radiale Verläufe sind ähnlich wie lineare Verläufe, außer dass sie von einem zentralen Punkt ausstrahlen. Sie können festlegen, wo sich dieser zentrale Punkt befindet. Sie können sie auch kreisförmig oder elliptisch machen.

### Ein grundlegender radialer Verlauf

Wie bei linearen Verläufen benötigen Sie nur zwei Farben, um einen radialen Verlauf zu erstellen. Standardmäßig befindet sich das Zentrum des Verlaufs an der 50% 50%-Markierung, und der Verlauf ist elliptisch und passt sich dem {{Glossary("aspect_ratio", "Aspektverhältnis")}} seiner Box an:

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

Wieder, wie bei linearen Verläufen, können Sie jeden radialen Farbstopp mit einem Prozentsatz oder einer absoluten Länge positionieren.

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

Sie können das Zentrum des Verlaufs mit Schlüsselbegriffen, Prozentsätzen oder absoluten Längen positionieren, wobei Längen- und Prozentwerte wiederholt werden, wenn nur eines vorhanden ist, ansonsten in der Reihenfolge von der Position von links und der Position von oben.

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

### Radiale Verläufe skalieren

Im Gegensatz zu linearen Verläufen können Sie die Größe radialer Verläufe angeben. Mögliche Werte sind `closest-corner`, `closest-side`, `farthest-corner`, und `farthest-side`, wobei `farthest-corner` der Standard ist. Kreise können auch mit einer Länge skaliert werden, und Ellipsen mit einer Länge oder einem Prozentwert.

#### Beispiel: `closest-side` für Ellipsen

Dieses Beispiel verwendet den `closest-side` Größenwert, was bedeutet, dass die Größe durch die Entfernung vom Startpunkt (dem Zentrum) zur nächsten Seite der umschließenden Box festgelegt wird.

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

Dieses Beispiel ist ähnlich wie das vorherige, außer dass seine Größe als `farthest-corner` angegeben ist, was die Größe des Verlaufs durch die Entfernung vom Startpunkt zur entferntesten Ecke der umschließenden Box vom Startpunkt aus setzt.

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

Dieses Beispiel verwendet `closest-side`, wodurch der Radius des Kreises zu der Entfernung zwischen dem Zentrum des Verlaufs und der nächsten Seite wird. In diesem Fall ist der Radius die Entfernung zwischen dem Zentrum und der unteren Kante, da der Verlauf 25% von links und 25% von unten platziert ist und die Höhe des div-Elements kleiner als die Breite ist.

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

Nur für Ellipsen können Sie die Ellipse mit einer Länge oder einem Prozentsatz skalieren. Der erste Wert stellt den horizontalen Radius dar, der zweite den vertikalen Radius, wobei Sie einen Prozentsatz verwenden, der der Größe der Box in dieser Dimension entspricht. Im folgenden Beispiel habe ich einen Prozentsatz für den horizontalen Radius verwendet.

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

Für Kreise kann die Größe als {{cssxref("length")}} angegeben werden, die der Größe des Kreises entspricht.

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

Genau wie lineare Verläufe können auch radiale Verläufe gestapelt werden. Die zuerst angegebenen sind oben, die zuletzt angegebenen unten.

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

Die **`conic-gradient()`**- [CSS](/de/docs/Web/CSS) Funktion erstellt ein Bild aus einem Verlauf mit Farbübergängen, die um einen zentralen Punkt gedreht werden (anstatt vom Zentrum zu strahlen). Beispiele für konische Verläufe sind Kreisdiagramme und {{Glossary("color_wheel", "Farbkreise")}}, sie können jedoch auch zur Erstellung von Schachbrettmustern und anderen interessanten Effekten verwendet werden.

Die Syntax von konischen Verläufen ähnelt der von radialen Verläufen, aber die Farbstopps werden entlang eines Bogenverlaufs platziert, dem Umfang eines Kreises, anstatt auf der Verlaufsachse, die vom Zentrum des Verlaufs ausstrahlt. Die Farbstopps sind in Prozent oder Grad angegeben; absolute Längen sind ungültig.

In einem radialen Verlauf wechseln die Farben vom Zentrum einer Ellipse ausgehend nach außen in alle Richtungen. Bei konischen Verläufen wechseln die Farben, als ob sie um das Zentrum eines Kreises gedreht würden, beginnend oben und im Uhrzeigersinn. Ähnlich wie bei radialen Verläufen können Sie das Zentrum des Verlaufs positionieren. Ähnlich wie bei linearen Verläufen können Sie den Verlaufwinkel ändern.

### Ein grundlegender konischer Verlauf

Wie bei linearen und radialen Verläufen benötigen Sie nur zwei Farben, um einen konischen Verlauf zu erstellen. Standardmäßig befindet sich das Zentrum des Verlaufs an der 50% 50%-Markierung, mit dem Start des Verlaufs nach oben gerichtet:

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

Wie radiale Verläufe können Sie das Zentrum des konischen Verlaufs mit Schlüsselelementen, Prozentsätzen oder absoluten Längen positionieren, mit dem Schlüsselwort "at".

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

Standardmäßig sind die verschiedenen von Ihnen angegebenen Farbstopps gleichmäßig um den Kreis herum verteilt. Sie können den Startwinkel des konischen Verlaufs mit dem Schlüsselwort "from" am Anfang gefolgt von einem Winkel oder einer Länge positionieren und Sie können unterschiedliche Positionen für die Farbstopps angeben, indem Sie einen Winkel oder eine Länge nach ihnen einschließen.

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

Die Funktionen {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}} und {{cssxref("gradient/conic-gradient", "conic-gradient()")}} unterstützen keine automatisch wiederholten Farbstopps. Die Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} sind jedoch verfügbar, um diese Funktionalität bereitzustellen.

Die Größe der wiederholten Verlaufslinie oder des Bogenverlaufs ist die Länge zwischen dem ersten Farbstoppwert und dem Wert der letzten Farbstopp-Länge. Wenn der erste Farbstopp nur eine Farbe und keine Farbstopp-Länge hat, ist der Wert standardmäßig 0. Wenn der letzte Farbstopp nur eine Farbe und keine Farbstopp-Länge hat, ist der Wert standardmäßig 100%. Wenn keiner deklariert ist, beträgt die Länge der Verlaufslinie 100%, was bedeutet, dass lineare und konische Verläufe sich nicht wiederholen und der radiale Verlauf sich nur wiederholt, wenn der Radius des Verlaufs kleiner als die Länge zwischen dem Zentrum des Verlaufs und der entferntesten Ecke ist. Wenn der erste Farbstopp deklariert ist und der Wert größer als 0 ist, wird der Verlauf wiederholt, da die Größe der Linie oder des Bogens kleiner als 100% oder 360 Grad ist.

### Wiederholende lineare Verläufe

Dieses Beispiel verwendet {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, um einen Verlauf zu erstellen, der sich wiederholt linear fortsetzt. Die Farben werden bei jeder Wiederholung des Verlaufs erneut durchlaufen. In diesem Fall ist die Verlaufslinie 10px lang.

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

Ähnlich wie bei normalen linearen und radialen Verläufen können Sie mehrere Verläufe einfügen, einer über dem anderen. Dies macht nur dann Sinn, wenn die Verläufe teilweise transparent sind und nachfolgende Verläufe durch die transparenten Bereiche sichtbar sind, oder wenn Sie unterschiedliche [background-sizes](/de/docs/Web/CSS/background-size), optional mit unterschiedlichen [background-position](/de/docs/Web/CSS/background-position)-Eigenschaftswerten, für jedes Verlaufshintergrundbild verwenden. Wir verwenden Transparenz.

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

Um Karo zu erstellen, fügen wir mehrere sich überlappende Verläufe mit Transparenz ein. In der ersten Hintergrunddeklaration haben wir jeden Farbstopp separat aufgelistet. Die zweite Hintergrunddeklaration verwendet die Syntax für mehrere Positionsfarbstopps:

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

Dieses Beispiel verwendet {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, um einen Verlauf zu erstellen, der sich wiederholt von einem zentralen Punkt ausstrahlt. Die Farben werden bei jeder Wiederholung des Verlaufs immer wieder durchlaufen.

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

### Mehrere wiederholende konische Verläufe

Genau wie lineare und radiale wiederholende Verläufe können Sie mehrere konische Verläufe übereinander stapeln und interessante Effekte erzielen, indem Sie unterschiedliche `at <position>` Werte verwenden, sodass sich die konischen Verläufe in ihren Zentren nicht überlappen, und unterschiedliche `from <angle>` Werte, sodass sich die Wiederholungseffekte nicht ausrichten. Dieses Beispiel überlappt drei halbtransparente wiederholende radiale Verläufe, die jeweils ihr Farbschema viermal wiederholen. Um überlappende Verläufe sichtbar zu machen, sollten Sie entweder sicherstellen, dass die Farben der oben auf dem Stack befindlichen Verläufe teilweise transparent sind oder die {{cssxref("background-blend-mode")}} CSS-Eigenschaft verwenden.

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
- Verlaufbezogene CSS-Datentypen: {{cssxref("&lt;gradient&gt;")}}, {{cssxref("&lt;image&gt;")}}
- Verlaufbezogene CSS-Eigenschaften: {{cssxref("background")}}, {{cssxref("background-image")}}
- [CSS Gradients Patterns Gallery, von Lea Verou](https://projects.verou.me/css3patterns/)
- [CSS Gradients Library, von Estelle Weyl](https://standardista.com/cssgradients/)
- [Gradient CSS Generator](https://cssgenerator.org/gradient-css-generator.html)
- [Advanced CSS Gradient Generator](https://colorbeta.com/)
