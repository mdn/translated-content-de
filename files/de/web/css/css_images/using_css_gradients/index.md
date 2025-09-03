---
title: Verwendung von CSS-Gradienten
short-title: Verwendung von Verläufen
slug: Web/CSS/CSS_images/Using_CSS_gradients
l10n:
  sourceCommit: a30ab12f3cb156c1ab2fb5b41fcdc47df2ead51b
---

**CSS-Gradienten** werden durch den Datentyp {{cssxref("&lt;gradient&gt;")}} dargestellt, eine spezielle Art von {{cssxref("&lt;image&gt;")}} bestehend aus einem progressiven Übergang zwischen zwei oder mehreren Farben. Sie können zwischen drei Arten von Verläufen wählen: _linear_ (erstellt mit der {{cssxref("gradient/linear-gradient", "linear-gradient()")}} Funktion), _radial_ (erstellt mit der {{cssxref("gradient/radial-gradient", "radial-gradient()")}} Funktion) und _konisch_ (erstellt mit der {{cssxref("gradient/conic-gradient", "conic-gradient()")}} Funktion). Sie können auch wiederholende Verläufe mit den Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} erzeugen.

Verläufe können überall verwendet werden, wo Sie ein `<image>` verwenden würden, zum Beispiel in Hintergründen. Da Verläufe dynamisch erzeugt werden, können sie den Bedarf an Rasterbilddateien, die traditionell für ähnliche Effekte verwendet wurden, negieren. Zusätzlich sehen Verläufe, die vom Browser generiert werden, beim Hereinzoomen besser aus als Rasterbilder und können dynamisch in der Größe angepasst werden.

Wir beginnen mit der Vorstellung linearer Verläufe, dann gehen wir auf Funktionen ein, die in allen Verlaufsarten unterstützt werden, indem wir lineare Verläufe als Beispiel verwenden, und dann zu radialen, konischen und sich wiederholenden Verläufen.

## Verwendung von linearen Verläufen

Ein linearer Verlauf erzeugt ein Farbband, das in einer geraden Linie fortschreitet.

### Ein grundlegender linearer Verlauf

Um die grundlegendste Art eines Verlaufs zu erstellen, müssen Sie lediglich zwei Farben angeben. Diese werden _Farbstopps_ genannt. Sie müssen mindestens zwei haben, können aber so viele haben, wie Sie möchten.

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

### Gebrauch von Winkeln

Wenn Sie mehr Kontrolle über die Richtung haben möchten, können Sie dem Verlauf einen spezifischen Winkel geben.

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

![Vier Kästchen, die Winkel anzeigen und den zugehörigen Verlauf von rot nach weiß zeigen. 0deg beginnt unten und geht nach oben. 90deg beginnt links und geht nach rechts. 180deg beginnt oben und geht nach unten. -90deg beginnt rechts und geht nach links.](linear_red_angles.png)

## Farben deklarieren & Effekte erzeugen

Alle CSS-Verlaufsarten sind ein Bereich von positionsabhängigen Farben. Die Farben, die durch CSS-Verläufe erzeugt werden, können in Abhängigkeit von der Position kontinuierlich variieren und sanfte Farbüberläufe erzeugen. Es ist auch möglich, Bänder aus festen Farben und harte Übergänge zwischen zwei Farben zu erzeugen. Folgendes gilt für alle Verlaufsfunktionen:

### Verwendung von mehr als zwei Farben

Sie müssen sich nicht auf zwei Farben beschränken – Sie können so viele verwenden, wie Sie möchten! Standardmäßig sind die Farben entlang des Verlaufs gleichmäßig verteilt.

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

Sie müssen Ihre Farbstopps nicht an ihren Standardpositionen lassen. Um ihre Standorte fein abzustimmen, können Sie jedem Null, einen oder zwei Prozentsätze oder, für radiale und lineare Verläufe, absolut längere Werte zuweisen. Wenn Sie den Standort als Prozentsatz angeben, repräsentiert `0%` den Ausgangspunkt, während `100%` den Endpunkt darstellt; Sie können jedoch auch Werte außerhalb dieses Bereichs verwenden, um den gewünschten Effekt zu erzielen. Wenn Sie einen Standort nicht angeben, wird die Position dieses speziellen Farbstopps automatisch für Sie berechnet, wobei der erste Farbverlauf bei `0%` und der letzte Farbverlauf bei `100%` liegt und alle anderen Farbstopps auf halbem Weg zwischen ihren angrenzenden Farbstopps liegen.

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

### Erstellung harter Linien

Um eine harte Linie zwischen zwei Farben zu erstellen und einen Streifen statt eines allmählichen Übergangs zu erzeugen, können angrenzende Farbstopps auf denselben Standort gesetzt werden. In diesem Beispiel teilen die Farben einen Farbstopp bei der 50%-Marke, die sich in der Mitte des Verlaufs befindet:

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

Standardmäßig geht der Verlauf gleichmäßig von einer Farbe zur nächsten über. Sie können einen Farbhinweis hinzufügen, um den Mittelpunkt des Übergangswerts an einem bestimmten Punkt des Verlaufs zu bewegen. In diesem Beispiel haben wir den Mittelpunkt des Übergangs von der 50%-Marke zur 10%-Marke verschoben.

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

### Erstellen von Farbbändern & -streifen

Um einen festen, nicht übergehenden Farbbereich innerhalb eines Verlaufs einzuschließen, geben Sie für den Farbstopp zwei Positionen an. Farbstopps können zwei Positionen haben, was zwei aufeinanderfolgende Farbstopps mit der gleichen Farbe an unterschiedlichen Positionen entspricht. Die Farbe erreicht die vollständige Sättigung an der ersten Farbposition, behält diese Sättigung bis zur zweiten Farbposition bei und wechselt zur Farbe des angrenzenden Farbstopps durch die erste Position des angrenzenden Farbstopps.

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

Im ersten Beispiel oben geht das Limettengrün von der 0%-Marke, die impliziert ist, bis zur 20%-Marke, wechselt innerhalb der nächsten 10% der Breite des Verlaufs von Limettengrün zu Rot, erreicht bei der 30%-Marke solides Rot und bleibt so bis zu 45% durch den Verlauf, wo es zu Zyan ausbleicht, und für 15% des Verlaufs voll Zyan ist, und so weiter.

Im zweiten Beispiel befindet sich der zweite Farbstopp für jede Farbe an derselben Stelle wie der erste Farbstopp der angrenzenden Farbe und erzeugt einen Streifeneffekt.

In beiden Beispielen wird der Verlauf zweimal geschrieben: das erste Mal ist die Methode der CSS Images Level 3, jede Farbe für jeden Stopp zu wiederholen, und das zweite Beispiel ist die Methode der CSS Images Level 4 mit mehreren Farbstopplängen in einer linearen-Farb-Stopp-Deklaration.

### Steuerung des Fortschreitens eines Verlaufs

Standardmäßig geht ein Verlauf gleichmäßig zwischen den Farben von zwei angrenzenden Farbstopps weiter, wobei der Mittelpunkt zwischen diesen beiden Farbstopps der Farbwert der Mitte ist. Sie können die {{Glossary("interpolation", "Interpolation")}} oder den Fortschritt zwischen zwei Farbstopps steuern, indem Sie einen Farbhinweisstandort einschließen. In diesem Beispiel erreicht die Farbe den Mittelpunkt zwischen Limettengrün und Zyan 20% des Weges durch den Verlauf statt bei 50%. Das zweite Beispiel enthält den Hinweis nicht, um den Unterschied hervorzuheben, den der Farbhinweis machen kann:

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

Sie können sogar Verläufe mit anderen Verläufen stapeln. Solange die oberen Verläufe nicht vollständig undurchsichtig sind, bleiben die darunter liegenden Verläufe sichtbar.

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

### Mischverläufe

Zusätzlich zu Transparenz können Sie mehrere halbtransparente Verläufe stapeln und Verläufe über Rasterhintergrundbilder legen. Verläufe können mit anderen CSS-Effekten verwendet werden. In diesem Beispiel haben die vier {{htmlelement("div")}}-Elemente die gleichen zwei vollständig undurchsichtigen Verläufe als Hintergrundbilder. Wir wenden verschiedene {{cssxref("background-blend-mode")}} CSS-Eigenschaften-Werte auf die letzten drei an, die die beiden Hintergrundbilder mischen und verschiedene Effekte erzeugen.

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

Radiale Verläufe sind ähnlich wie lineare Verläufe, außer dass sie von einem zentralen Punkt aus strahlen. Sie können bestimmen, wo dieser zentrale Punkt ist. Sie können sie auch kreisförmig oder elliptisch gestalten.

### Ein grundlegender radialer Verlauf

Wie bei linearen Verläufen benötigen Sie lediglich zwei Farben, um einen radialen Verlauf zu erzeugen. Standardmäßig befindet sich das Zentrum des Verlaufs bei der 50%-50%-Marke und der Verlauf ist elliptisch und entspricht dem {{Glossary("aspect_ratio", "Seitenverhältnis")}} seines Kastens:

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

Wie bei linearen Verläufen können Sie jeden radialen Farbstopp mit einem Prozentsatz oder einer absoluten Länge positionieren.

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

Sie können das Zentrum des Verlaufs mit Schlüsselbegriffen, Prozentsätzen oder absoluten Längen positionieren, wobei Längen- und Prozentwerte sich wiederholen, wenn nur einer vorhanden ist, andernfalls in der Reihenfolge der Position von der linken und der Position von der Spitze.

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

### Größenbestimmung radialer Verläufe

Im Gegensatz zu linearen Verläufen können Sie die Größe radialer Verläufe angeben. Mögliche Werte sind `closest-corner`, `closest-side`, `farthest-corner` und `farthest-side`, wobei `farthest-corner` der Standardwert ist. Kreise können auch mit einer Länge und Ellipsen mit einer Länge oder einem Prozentsatz in der Größe bestimmt werden.

#### Beispiel: `closest-side` für Ellipsen

Dieses Beispiel verwendet den Größenwert `closest-side`, was bedeutet, dass die Größe durch den Abstand vom Startpunkt (dem Zentrum) zur nächstgelegenen Seite des umgebenden Kastens festgelegt wird.

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

Dieses Beispiel ist dem vorherigen ähnlich, außer dass seine Größe als `farthest-corner` angegeben ist, was die Größe des Verlaufs durch den Abstand vom Startpunkt zur entferntesten Ecke des umgebenden Kastens vom Ausgangspunkt festlegt.

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

Dieses Beispiel verwendet `closest-side`, wodurch der Radius des Kreises der Abstand zwischen dem Zentrum des Verlaufs und der nächstgelegen Seite ist. In diesem Fall ist der Radius der Abstand zwischen dem Zentrum und der unteren Kante, da der Verlauf 25% von links und 25% von unten platziert ist und die Höhe des Div-Elements kleiner als die Breite ist.

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

Nur für Ellipsen können Sie die Ellipse mithilfe einer Länge oder eines Prozentsatzes in der Größe bestimmen. Der erste Wert repräsentiert den horizontalen Radius, der zweite den vertikalen Radius. Wenn Sie einen Prozentsatz verwenden, entspricht dieser der Größe des Kastens in dieser Dimension. Im untenstehenden Beispiel habe ich einen Prozentsatz für den horizontalen Radius verwendet.

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

Genauso wie lineare Verläufe können Sie auch radiale Verläufe stapeln. Der zuerst angegebene befindet sich oben, der letzte unten.

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

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS) Funktion erstellt ein Bild, das aus einem Verlauf mit Farbverläufen besteht, die um einen Mittelpunkt (anstatt von der Mitte aus zu strahlen) rotieren. Beispielhafte konische Verläufe beinhalten Tortendiagramme und {{Glossary("color_wheel", "Farbkreise")}}, aber sie können auch verwendet werden, um Schachbretter und andere interessante Effekte zu erzeugen.

Die conic-gradient-Syntax ähnelt der radial-gradient-Syntax, aber die Farbstopps sind um einen Verlaufsbogen, den Umfang eines Kreises, verteilt, statt auf der Verlaufsgeraden, die von der Mitte des Verlaufs ausgeht, und die Farbstopps sind Prozentsätze oder Grad: absolute Längen sind ungültig.

In einem radialen Verlauf wechseln die Farben vom Zentrum einer Ellipse ausgehend in alle Richtungen. Bei konischen Verläufen wechseln die Farben, als ob sie um das Zentrum eines Kreises gedreht würden, beginnend oben und im Uhrzeigersinn verlaufend. Ähnlich wie bei radialen Verläufen können Sie das Zentrum des Verlaufs positionieren. Ähnlich wie bei linearen Verläufen können Sie den Verlaufswinkel ändern.

### Ein grundlegender konischer Verlauf

Wie bei linearen und radialen Verläufen benötigen Sie lediglich zwei Farben, um einen konischen Verlauf zu erzeugen. Standardmäßig befindet sich das Zentrum des Verlaufs bei der 50%-50%-Marke mit dem Verlauf beginnend nach oben gerichtet:

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

Wie bei radialen Verläufen können Sie das Zentrum des konischen Verlaufs mit Schlüsselbegriffen, Prozentwerten oder absoluten Längen sowie dem Schlüsselwort "at" positionieren.

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

Standardmäßig sind die verschiedenen Farbstopps, die Sie angeben, gleichmäßig um den Kreis verteilt. Sie können den Ausgangswinkel des konischen Verlaufs mithilfe des Schlüsselworts "from" zu Beginn, gefolgt von einem Winkel oder einer Länge, positionieren, und Sie können unterschiedliche Positionen für die Farbstopps angeben, indem Sie einen Winkel oder eine Länge nach ihnen einschließen.

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

## Verwendung sich wiederholender Verläufe

Die {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}} und {{cssxref("gradient/conic-gradient", "conic-gradient()")}} Funktionen unterstützen keine automatisch wiederholenden Farbstopps. Allerdings sind die Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} verfügbar, um diese Funktionalität anzubieten.

Die Größe der wiederholten Verlaufsgerade oder des Verlaufsbogens ist die Länge zwischen dem ersten Farbstoppwert und dem letzten Farbstopplängenwert. Wenn der erste Farbstopp nur eine Farbe und keine Farbstopplänge hat, wird der Wert auf 0 gesetzt. Wenn der letzte Farbstopp nur eine Farbe und keine Farbstopplänge hat, wird der Wert standardmäßig auf 100% gesetzt. Wenn keiner deklariert ist, beträgt die Verlaufsgerade 100%, was bedeutet, dass lineare und konische Verläufe nicht wiederholt werden und der radiale Verlauf nur wiederholt wird, wenn der Radius des Verlaufs kleiner als die Länge zwischen dem Zentrum des Verlaufs und der entferntesten Ecke ist. Wenn der erste Farbstopp deklariert wird und der Wert größer als 0 ist, wird der Verlauf wiederholt, da die Größe der Linie oder des Bogens die Differenz zwischen dem ersten Farbstopp und dem letzten Farbstopp kleiner als 100% oder 360 Grad ist.

### Wiederholende lineare Verläufe

Dieses Beispiel verwendet {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, um einen Verlauf zu erstellen, der sich wiederholt in einer geraden Linie fortschreitet. Die Farben werden immer wieder durchlaufen, während sich der Verlauf wiederholt. In diesem Fall ist die Verlaufsgerade 10px lang.

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

### Mehrere sich wiederholende lineare Verläufe

Ähnlich wie normale lineare und radiale Verläufe können Sie mehrere Verläufe einschließen, einen über dem anderen. Dies macht nur Sinn, wenn die Verläufe teilweise transparent sind, sodass die nachfolgenden Verläufe durch die transparenten Bereiche sichtbar sind, oder wenn Sie unterschiedliche [Hintergrundgrößen](/de/docs/Web/CSS/background-size), optional mit unterschiedlichen [Hintergrundpositionen](/de/docs/Web/CSS/background-position) Eigenschaftenwerten, für jedes Verlaufsbild angeben. Wir verwenden Transparenz.

In diesem Fall sind die Verlaufsgeraden 300px, 230px und 300px lang.

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

Um Karo zu erstellen, fügen wir mehrere überlappende Verläufe mit Transparenz hinzu. In der ersten Hintergrunddeklaration haben wir jeden Farbstopp separat aufgelistet. Die zweite Hintergrunddeklaration verwendet die Syntax für mehrere Positionsfarbstopps:

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

Dieses Beispiel verwendet {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, um einen Verlauf zu erstellen, der sich wiederholt von einem zentralen Punkt aus strahlt. Die Farben werden immer und immer wieder durchlaufen, während sich der Verlauf wiederholt.

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

### Mehrere sich wiederholende radiale Verläufe

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

### Mehrere sich wiederholende konische Verläufe

Genauso wie lineare und radiale sich wiederholende Verläufe können Sie mehrere konische Verläufe übereinander stapeln, interessante Effekte erzeugen, indem Sie unterschiedliche `at <position>` Werte verwenden, sodass sich die konischen Verläufe nicht im Zentrum überlagern und unterschiedliche `from <angle>` Werte verwenden, sodass sich die Wiederholeffekte nicht ausrichten. Dieses Beispiel überlagert drei semitransparente sich wiederholende radiale Verläufe, die jeweils ihr Farbschema viermal wiederholen. Um überlappende Verläufe sichtbar zu machen, müssen Sie entweder sicherstellen, dass die Farben der Verläufe auf der Oberseite des Stapels teilweise transparent sind oder die {{cssxref("background-blend-mode")}} CSS-Eigenschaft verwenden.

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
- [Erweiterter CSS Gradient Generator](https://colorbeta.com/)
- [HDR gradient generator](https://gradient.style/)
