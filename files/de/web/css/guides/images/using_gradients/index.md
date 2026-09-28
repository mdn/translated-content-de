---
title: CSS-Farbverläufe verwenden
short-title: Farbverläufe verwenden
slug: Web/CSS/Guides/Images/Using_gradients
l10n:
  sourceCommit: b7e9f482c51817d3a885e26092f8219fd0d9d278
---

**CSS-Farbverläufe** werden durch den Datentyp {{cssxref("gradient")}} dargestellt, eine besondere Art von {{cssxref("image")}}, die aus einem kontinuierlichen Übergang zwischen zwei oder mehr Farben besteht. Sie können zwischen drei Arten von Farbverläufen wählen: _linear_ (erstellt mit der Funktion {{cssxref("gradient/linear-gradient", "linear-gradient()")}}), _radial_ (erstellt mit der Funktion {{cssxref("gradient/radial-gradient", "radial-gradient()")}}) und _konisch_ (erstellt mit der Funktion {{cssxref("gradient/conic-gradient", "conic-gradient()")}}). Mit den Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} können Sie außerdem sich wiederholende Farbverläufe erstellen.

Farbverläufe können überall dort verwendet werden, wo Sie ein `<image>` verwenden würden, beispielsweise als Hintergrund. Da Farbverläufe dynamisch erzeugt werden, können sie Rasterbilddateien ersetzen, die traditionell für ähnliche Effekte verwendet wurden. Außerdem sehen vom Browser erzeugte Farbverläufe beim Vergrößern besser aus als Rasterbilder und lassen sich dynamisch in der Größe ändern.

Zunächst behandeln wir lineare Farbverläufe. Anhand dieser erläutern wir anschließend Funktionen, die von allen Arten von Farbverläufen unterstützt werden. Danach befassen wir uns mit radialen, konischen und sich wiederholenden Farbverläufen.

## Lineare Farbverläufe verwenden

Ein linearer Farbverlauf erzeugt ein Farbband, dessen Farben entlang einer geraden Linie ineinander übergehen.

### Ein einfacher linearer Farbverlauf

Für die einfachste Art von Farbverlauf müssen Sie lediglich zwei Farben angeben. Diese werden _Farbstopps_ genannt. Mindestens zwei sind erforderlich, Sie können aber beliebig viele verwenden.

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

Standardmäßig verlaufen lineare Farbverläufe von oben nach unten. Sie können ihre Ausrichtung ändern, indem Sie eine Richtung angeben.

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

### Diagonale Farbverläufe

Sie können den Farbverlauf auch diagonal von einer Ecke zur anderen verlaufen lassen.

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

Wenn Sie die Richtung genauer festlegen möchten, können Sie einen bestimmten Winkel angeben.

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

Bei der Verwendung eines Winkels erzeugt `0deg` einen vertikalen Farbverlauf von unten nach oben und `90deg` einen horizontalen Farbverlauf von links nach rechts. Weitere Winkel folgen im Uhrzeigersinn. Negative Winkel verlaufen gegen den Uhrzeigersinn.

![Vier Kästchen mit Winkelangaben und den zugehörigen Farbverläufen von Rot nach Weiß. Bei 0deg beginnt der Verlauf unten und verläuft nach oben. Bei 90deg beginnt er links und verläuft nach rechts. Bei 180deg beginnt er oben und verläuft nach unten. Bei -90deg beginnt er rechts und verläuft nach links.](linear_red_angles.png)

## Farben festlegen und Effekte erzeugen

Alle Arten von CSS-Farbverläufen bestehen aus Farben, die von ihrer Position abhängen. Die von CSS-Farbverläufen erzeugten Farben können sich mit der Position kontinuierlich ändern und so weiche Farbübergänge bilden. Es lassen sich auch einfarbige Bänder und abrupte Übergänge zwischen zwei Farben erzeugen. Die folgenden Möglichkeiten gelten für alle Farbverlaufsfunktionen:

### Mehr als zwei Farben verwenden

Sie müssen sich nicht auf zwei Farben beschränken – verwenden Sie so viele, wie Sie möchten! Standardmäßig sind die Farben gleichmäßig über den Farbverlauf verteilt.

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

Farbstopps müssen nicht an ihren Standardpositionen bleiben. Um ihre Position genau festzulegen, können Sie für jeden Stopp null, einen oder zwei Prozentwerte angeben. Bei radialen und linearen Farbverläufen sind auch absolute Längenwerte möglich. Wenn Sie eine Position als Prozentwert angeben, steht `0%` für den Anfangspunkt und `100%` für den Endpunkt. Bei Bedarf können Sie auch Werte außerhalb dieses Bereichs verwenden, um den gewünschten Effekt zu erzielen. Lassen Sie eine Position weg, wird sie für den betreffenden Farbstopp automatisch berechnet: Der erste Farbstopp liegt bei `0%`, der letzte bei `100%` und alle übrigen jeweils in der Mitte zwischen ihren benachbarten Farbstopps.

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

### Scharfe Trennlinien erzeugen

Um zwischen zwei Farben statt eines allmählichen Übergangs eine scharfe Trennlinie und damit einen Streifen zu erzeugen, können Sie benachbarte Farbstopps auf dieselbe Position setzen. In diesem Beispiel teilen sich die Farben einen Farbstopp bei `50%`, also in der Mitte des Farbverlaufs:

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

### Farbbänder und Streifen erzeugen

Um innerhalb eines Farbverlaufs einen einfarbigen Bereich ohne Übergang einzufügen, geben Sie für einen Farbstopp zwei Positionen an. Ein Farbstopp mit zwei Positionen entspricht zwei aufeinanderfolgenden Farbstopps derselben Farbe an unterschiedlichen Positionen. Die Farbe erreicht am ersten Farbstopp ihre volle Intensität, behält diese bis zum zweiten bei und geht anschließend bis zur ersten Position des benachbarten Farbstopps in dessen Farbe über.

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
    red 30% 45%,
    cyan 55% 70%,
    yellow 80%
  );
}
.multiposition-stop2 {
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

Im ersten Beispiel oben reicht Limettengrün von der impliziten Position bei 0 % bis zur Position bei 20 %. Über die nächsten 10 % der Breite des Farbverlaufs geht es in Rot über. Bei 30 % ist das Rot vollständig erreicht und bleibt bis 45 % erhalten. Dort beginnt der Übergang zu Cyan, das über 15 % des Farbverlaufs als einfarbiger Bereich erscheint, und so weiter.

Im zweiten Beispiel befindet sich der zweite Farbstopp jeder Farbe an derselben Position wie der erste Farbstopp der benachbarten Farbe. Dadurch entsteht ein Streifenmuster.

### Den Verlauf mit Farbübergangspunkten steuern

Standardmäßig erfolgt der Übergang zwischen den Farben zweier benachbarter Farbstopps gleichmäßig. In der Mitte zwischen den beiden Stopps liegt dabei der mittlere Farbwert. Sie können die {{Glossary("interpolation", "Interpolation")}}, also den Übergang zwischen zwei Farbstopps, steuern, indem Sie die Position eines Farbübergangspunkts angeben. Im folgenden Beispiel erreicht die Farbe den Mittelwert zwischen Limettengrün und Cyan bereits nach 20 % statt nach 50 % des Farbverlaufs. Das zweite Beispiel enthält keinen Farbübergangspunkt und verdeutlicht so dessen Wirkung:

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

### Farbverläufe überlagern

Farbverläufe unterstützen Transparenz. Daher können Sie mehrere Hintergründe übereinanderlegen, um besondere Effekte zu erzielen. Die Hintergründe werden übereinandergeschichtet, wobei der zuerst angegebene ganz oben liegt.

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

### Übereinanderliegende Farbverläufe

Sie können auch Farbverläufe übereinanderlegen. Solange die oberen Farbverläufe nicht vollständig deckend sind, bleiben die darunterliegenden sichtbar.

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

### Farbverläufe mischen

Neben Transparenz, der Überlagerung mehrerer halbtransparenter Farbverläufe und der Platzierung von Farbverläufen über Rasterbildern als Hintergrund können Farbverläufe auch mit anderen CSS-Effekten kombiniert werden. In diesem Beispiel haben die vier {{htmlelement("div")}}-Elemente dieselben beiden vollständig deckenden Farbverläufe als Hintergrundbilder. Auf die letzten drei wenden wir unterschiedliche Werte der CSS-Eigenschaft {{cssxref("background-blend-mode")}} an. Diese mischen die beiden Hintergrundbilder und erzeugen verschiedene Effekte.

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

## Radiale Farbverläufe verwenden

Radiale Farbverläufe ähneln linearen Farbverläufen, breiten sich jedoch von einem Mittelpunkt aus. Sie können festlegen, wo dieser Mittelpunkt liegt. Außerdem können radiale Farbverläufe kreisförmig oder elliptisch sein.

### Ein einfacher radialer Farbverlauf

Wie bei linearen Farbverläufen benötigen Sie für einen radialen Farbverlauf lediglich zwei Farben. Standardmäßig liegt der Mittelpunkt bei 50 % 50 % und der Farbverlauf ist eine Ellipse, die dem {{Glossary("aspect_ratio", "Seitenverhältnis")}} des umschließenden Bereichs entspricht:

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

### Radiale Farbstopps positionieren

Wie bei linearen Farbverläufen können Sie jeden radialen Farbstopp mit einem Prozentwert oder einer absoluten Länge positionieren.

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

### Den Mittelpunkt des Farbverlaufs positionieren

Sie können den Mittelpunkt des Farbverlaufs mit Schlüsselwörtern, Prozentwerten oder absoluten Längen positionieren. Wenn nur ein Längen- oder Prozentwert angegeben wird, gilt er für beide Koordinaten. Andernfalls gibt der erste Wert die Position von links und der zweite die Position von oben an.

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

### Die Größe radialer Farbverläufe festlegen

Anders als bei linearen Farbverläufen können Sie die Größe radialer Farbverläufe angeben. Mögliche Werte sind `closest-corner`, `closest-side`, `farthest-corner` und `farthest-side`. Der Standardwert ist `farthest-corner`. Für Kreise kann die Größe auch mit einer Länge und für Ellipsen mit einer Länge oder einem Prozentwert festgelegt werden.

#### Beispiel: `closest-side` für Ellipsen

Dieses Beispiel verwendet den Größenwert `closest-side`. Dabei wird die Größe durch den Abstand vom Ausgangspunkt (dem Mittelpunkt) zur nächstgelegenen Seite des umschließenden Bereichs bestimmt.

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

Dieses Beispiel ähnelt dem vorherigen. Die Größe wird jedoch mit `farthest-corner` festgelegt und ergibt sich aus dem Abstand vom Ausgangspunkt zur am weitesten entfernten Ecke des umschließenden Bereichs.

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

Dieses Beispiel verwendet `closest-side`. Dadurch entspricht der Radius des Kreises dem Abstand zwischen dem Mittelpunkt des Farbverlaufs und der nächstgelegenen Seite. Hier ist das der Abstand zur unteren Kante: Der Farbverlauf liegt 25 % vom linken und 25 % vom unteren Rand entfernt, und das div-Element ist weniger hoch als breit.

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

#### Beispiel: Länge oder Prozentwert für Ellipsen

Nur bei Ellipsen können Sie die Größe mit Längen- oder Prozentwerten festlegen. Der erste Wert bezeichnet den horizontalen Radius, der zweite den vertikalen. Ein Prozentwert bezieht sich auf die Größe des umschließenden Bereichs in der jeweiligen Dimension. Im folgenden Beispiel wird für den horizontalen Radius ein Prozentwert verwendet.

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

Bei Kreisen kann die Größe als {{cssxref("length")}} angegeben werden. Dieser Wert bestimmt die Größe des Kreises.

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

### Übereinanderliegende radiale Farbverläufe

Wie lineare Farbverläufe können Sie auch radiale Farbverläufe übereinanderlegen. Der zuerst angegebene liegt ganz oben, der zuletzt angegebene ganz unten.

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

## Konische Farbverläufe verwenden

Die [CSS](/de/docs/Web/CSS)-Funktion **`conic-gradient()`** erzeugt ein Bild mit Farbübergängen, die um einen Mittelpunkt rotieren, statt sich von ihm aus nach außen auszubreiten. Beispiele für konische Farbverläufe sind Kreisdiagramme und {{Glossary("color_wheel", "Farbkreise")}}. Sie können damit aber auch Schachbrettmuster und andere interessante Effekte erzeugen.

Die Syntax von `conic-gradient()` ähnelt der von `radial-gradient()`. Die Farbstopps liegen jedoch auf einem Kreisbogen um den Mittelpunkt statt auf einer vom Mittelpunkt ausgehenden Verlaufslinie. Als Positionen für Farbstopps dienen Prozent- oder Winkelwerte; absolute Längen sind nicht zulässig.

Bei einem radialen Farbverlauf gehen die Farben vom Mittelpunkt einer Ellipse aus in alle Richtungen nach außen ineinander über. Bei einem konischen Farbverlauf gehen sie ineinander über, als würden sie um den Mittelpunkt eines Kreises gedreht – beginnend oben und im Uhrzeigersinn fortlaufend. Wie bei radialen Farbverläufen können Sie den Mittelpunkt positionieren. Wie bei linearen Farbverläufen können Sie den Winkel des Farbverlaufs ändern.

### Ein einfacher konischer Farbverlauf

Wie bei linearen und radialen Farbverläufen benötigen Sie für einen konischen Farbverlauf lediglich zwei Farben. Standardmäßig liegt der Mittelpunkt bei 50 % 50 % und der Farbverlauf beginnt oben:

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

### Den Mittelpunkt eines konischen Farbverlaufs positionieren

Wie bei radialen Farbverläufen können Sie den Mittelpunkt eines konischen Farbverlaufs mit Schlüsselwörtern, Prozentwerten oder absoluten Längen positionieren. Dazu verwenden Sie das Schlüsselwort `at`.

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

Standardmäßig sind die angegebenen Farbstopps gleichmäßig um den Kreis verteilt. Sie können den Anfangswinkel eines konischen Farbverlaufs festlegen, indem Sie am Anfang das Schlüsselwort `from` gefolgt von einem Winkel oder einer Länge verwenden. Für Farbstopps können Sie unterschiedliche Positionen angeben, indem Sie ihnen jeweils einen Winkel oder eine Länge nachstellen.

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

## Sich wiederholende Farbverläufe verwenden

Die Funktionen {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}} und {{cssxref("gradient/conic-gradient", "conic-gradient()")}} unterstützen keine automatische Wiederholung von Farbstopps. Dafür stehen die Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} zur Verfügung.

Die Größe der sich wiederholenden Verlaufslinie oder des Kreisbogens entspricht dem Abstand zwischen der Position des ersten und der Position des letzten Farbstopps. Wenn für den ersten Farbstopp nur eine Farbe und keine Position angegeben ist, gilt standardmäßig der Wert 0. Wenn für den letzten Farbstopp nur eine Farbe und keine Position angegeben ist, gilt standardmäßig 100 %. Ist für keinen der beiden eine Position angegeben, umfasst die Verlaufslinie 100 %. Das bedeutet, dass sich lineare und konische Farbverläufe nicht wiederholen. Ein radialer Farbverlauf wiederholt sich dann nur, wenn sein Radius kleiner ist als der Abstand zwischen dem Mittelpunkt des Farbverlaufs und der am weitesten entfernten Ecke. Wird für den ersten Farbstopp ein Wert größer als 0 angegeben, wiederholt sich der Farbverlauf, sofern der Abstand zwischen dem ersten und dem letzten Farbstopp weniger als 100 % beziehungsweise 360 Grad beträgt.

### Sich wiederholende lineare Farbverläufe

Dieses Beispiel verwendet {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, um einen Farbverlauf zu erzeugen, der sich entlang einer geraden Linie wiederholt. Dabei durchlaufen die Farben immer wieder dieselbe Abfolge. Die Verlaufslinie ist hier 10px lang.

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

### Mehrere sich wiederholende lineare Farbverläufe

Wie bei gewöhnlichen linearen und radialen Farbverläufen können Sie mehrere Farbverläufe übereinanderlegen. Das ist nur sinnvoll, wenn die Farbverläufe teilweise transparent sind und darunterliegende Farbverläufe durchscheinen lassen, oder wenn Sie für jedes Verlaufsbild unterschiedliche [background-sizes](/de/docs/Web/CSS/Reference/Properties/background-size) und gegebenenfalls unterschiedliche Werte für [background-position](/de/docs/Web/CSS/Reference/Properties/background-position) angeben. Hier verwenden wir Transparenz.

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

### Karomuster aus Farbverläufen

Um ein Karomuster zu erzeugen, legen wir mehrere transparente Farbverläufe übereinander. Dabei verwenden wir die Syntax für Farbstopps mit mehreren Positionen:

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

### Sich wiederholende radiale Farbverläufe

Dieses Beispiel verwendet {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, um einen Farbverlauf zu erzeugen, der sich von einem Mittelpunkt aus wiederholt. Dabei durchlaufen die Farben immer wieder dieselbe Abfolge.

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

### Mehrere sich wiederholende radiale Farbverläufe

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

### Sich wiederholende konische Farbverläufe

Dieses Beispiel verwendet {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, um einen Farbverlauf zu erzeugen, der sich um einen Mittelpunkt wiederholt. Hier werden die angegebenen Farbstopps viermal wiederholt.

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

### Mehrere sich wiederholende konische Farbverläufe

Wie bei sich wiederholenden linearen und radialen Farbverläufen können Sie mehrere konische Farbverläufe übereinanderlegen. Mit unterschiedlichen Werten für `at <position>` liegen ihre Mittelpunkte nicht übereinander; unterschiedliche Werte für `from <angle>` sorgen dafür, dass ihre Wiederholungen versetzt sind. So entstehen interessante Effekte. In diesem Beispiel überlagern sich drei halbtransparente, sich wiederholende radiale Farbverläufe, deren Farbabfolgen sich jeweils viermal wiederholen. Damit die überlagerten Farbverläufe sichtbar sind, müssen die Farben der oberen Farbverläufe teilweise transparent sein. Alternativ können Sie die CSS-Eigenschaft {{cssxref("background-blend-mode")}} verwenden.

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

- Farbverlaufsfunktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- CSS-Datentypen für Farbverläufe: {{cssxref("gradient")}}, {{cssxref("image")}}
- CSS-Eigenschaften für Farbverläufe: {{cssxref("background")}}, {{cssxref("background-image")}}
- [Galerie mit CSS-Farbverlaufsmustern von Lea Verou](https://projects.verou.me/css3patterns/)
- [CSS-Farbverlaufsgenerator](https://cssgenerator.org/gradient-css-generator.html)
- [Erweiterter CSS-Farbverlaufsgenerator](https://colorbeta.com/)
- [HDR-Farbverlaufsgenerator](https://gradient.style/)
