---
title: Grid, logische Werte und Schreibmodi
short-title: Logische Werte und Schreibmodi
slug: Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Ein wichtiges Merkmal des CSS-Grid-Layouts ist die Unterstützung verschiedener Schreibmodi, die in die Spezifikation eingebaut sind. In diesem Leitfaden betrachten wir diese Funktion des CSS-Grid-Layouts und andere moderne Layout-Methoden und lernen dabei etwas über Schreibmodi sowie logische versus physische Eigenschaften.

## Logische und physische Eigenschaften und Werte

CSS ist voller **physischer** Positions-Eigenschaften und Schlüsselwörter – `left` und `right`, `top` und `bottom`. Im folgenden Codebeispiel positionieren wir ein Element mittels absoluter Positionierung und verwenden die physischen {{Glossary("inset_properties", "inset properties")}} als Abstands-Werte, um das Element zu verschieben. Das Element wird 20 Pixel vom oberen Rand und 30 Pixel vom linken Rand des Containers platziert:

```css
.container {
  position: relative;
}
.item {
  position: absolute;
  top: 20px;
  left: 30px;
}
```

```html
<div class="container">
  <div class="item">Item</div>
</div>
```

Dieses Beispiel verwendet die {{cssxref("left")}} und {{cssxref("right")}} Eigenschaften; dies sind nur zwei der vielen **{{Glossary("physical_properties", "physischen Eigenschaften")}}** in CSS. Wir können auch Ränder, Abstände und Rahmen unter Verwendung physischer Eigenschaften hinzufügen, zum Beispiel {{cssxref("margin-left")}} und {{cssxref("padding-left")}}. Sie könnten auch physische Schlüsselwörter verwenden sehen, wie bei der Nutzung von `text-align: right`, um Text rechts auszurichten.

Wir nennen diese Schlüsselwörter und Eigenschaften _physisch_, weil sie sich auf den Bildschirm beziehen, den Sie betrachten. Links ist immer links, egal in welche Richtung Ihr Text verlaufen könnte.

### Probleme mit physischen Eigenschaften

Physische Eigenschaften können zu Problemen führen, wenn Sie eine Website entwickeln, die in mehreren Sprachen funktionieren muss, einschließlich Sprachen, bei denen der Text von rechts nach links oder von oben nach unten fließt. Browser sind so konzipiert, dass sie Inhalte unabhängig von der Sprache korrekt anzeigen. Einige CSS-Funktionen können die Browservoreinstellungen überschreiben und dazu führen, dass Inhalte weniger optimal angezeigt werden.

In diesem Beispiel wurde die {{cssxref("direction")}} Eigenschaft auf {{Glossary("rtl", "rtl")}} gesetzt, was den Schreibmodus vom Standard für ein englischsprachiges Dokument `ltr` umschaltet. Wir haben zwei Absätze. Diese sollten beide von rechts nach links fließen wegen des `direction`-Werts, der auf ein Vorgängerelement (`<body>`) gesetzt ist. Der erste Absatz hat {{cssxref("text-align")}} auf `left` gesetzt, sodass er sich am linken Rand seines Containers ausrichtet. Der zweite Absatz richtet sich rechts aus und fließt von rechts nach links.

```html hidden
<p class="left">
  I have my text set to <code>text-align: left</code> I will always align left
  even if the direction of the text in this document is rtl.
</p>

<p>I have no alignment set and use the direction set in the document.</p>
```

```css
body {
  direction: rtl;
}
.left {
  text-align: left;
}
```

```css hidden
p {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  margin: 1em;
  color: #d9480f;
}
```

{{EmbedLiveSample("Issues with physical properties","",170)}}

Dies ist eine grundlegende Demonstration der Probleme, die auftreten können, wenn physische Werte und Eigenschaften in CSS verwendet werden. Wenn wir CSS mit physischen Eigenschaften und Schlüsselwörtern schreiben, teilen wir dem Browser unsere Annahme mit, wie der Text fließen wird, und verhindern, dass er alternative Schreibmodi handhabt.

### Logische Eigenschaften und Werte

**{{Glossary("Logical_properties", "Logische Eigenschaften")}} und Werte** gehen nicht von einer Textflussrichtung aus. Daher verwenden wir im CSS-Grid-Layout das Schlüsselwort `start`, um etwas am Anfang eines Containers auszurichten. Bei der Arbeit mit englischen Inhalten wird `start` auf der linken Seite sein, muss es jedoch nicht. Das Wort `start` impliziert keinen physischen Ort, was es Websites ermöglicht, Inhalte auf der rechten Seite zu beginnen, wenn Sprachen von rechts nach links, wie Arabisch, verwendet werden.

## Block und Inline

Wenn logische anstatt physische Eigenschaften verwendet werden, sehen wir die Welt nicht mehr als von links nach rechts und von oben nach unten. Wir haben einen anderen Bezugspunkt. Hierbei ist es sehr nützlich, die _Block-_ und \_Inline-\_Achse zu verstehen, die im [Grid-Ausrichtungsleitfaden](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment) eingeführt wurden. Wenn Sie das Layout in Bezug auf Block und Inline betrachten, macht die Funktionsweise im CSS-Grid-Layout viel Sinn.

![Ein Bild, das die Standardrichtung der Block- und Inline-Achsen zeigt.](8-horizontal-tb.png)

## CSS-Schreibmodi

Das [CSS-Modul für Schreibmodi](/de/docs/Web/CSS/Guides/Writing_modes) gibt an, wie Schreibmodi in CSS funktionieren. Diese Funktionen dienen nicht nur zur Unterstützung von Sprachen mit einem anderen Schreibmodus als Englisch; sie können auch für kreative Zwecke verwendet werden. Die Beispiele in diesem Abschnitt verwenden die {{cssxref("writing-mode")}} Eigenschaft, um Änderungen am Schreibmodus zu demonstrieren, der auf unser Grid angewendet wird, und zeigen dabei, wie logische Werte funktionieren.

### `writing-mode`

Schreibmodi gehen über einfachen von links nach rechts oder von rechts nach links Text hinaus, und die Eigenschaft `writing-mode` hilft uns, Text in andere Richtungen darzustellen. Die {{cssxref("writing-mode")}} Eigenschaft kann folgende Werte haben:

- `horizontal-tb`
- `vertical-rl`
- `vertical-lr`
- `sideways-rl`
- `sideways-lr`

Der Wert `horizontal-tb`, der für "horizontal, von oben nach unten" steht, ist der Standard für Text im Web. Es ist die Richtung, in der Sie diesen Leitfaden lesen. Die anderen Werte ändern, wie Text in unserem Dokument fließt, und passen sich den unterschiedlichen Schreibmodi an, die weltweit zu finden sind.

Als Beispiel haben wir unten zwei Absätze. Der erste verwendet den Standardwert `horizontal-tb`, und der zweite verwendet `vertical-rl`. Im zweiten Schreibmodus läuft der Text immer noch von links nach rechts, jedoch ist die Richtung des Textes vertikal — Inline-Text verläuft nun entlang der Seite von oben nach unten.

```css hidden
.wrapper > p {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  margin: 1em;
  color: #d9480f;
  max-width: 300px;
}
```

```html
<div class="wrapper">
  <p class="horizontal-tb">
    I have writing mode set to the default <code>horizontal-tb</code>
  </p>
  <p class="vertical-rl">I have writing mode set to <code>vertical-rl</code></p>
</div>
```

```css
.horizontal-tb {
  writing-mode: horizontal-tb;
}
.vertical-rl {
  writing-mode: vertical-rl;
}
```

{{ EmbedLiveSample('writing-mode', '500', '420') }}

## Schreibmodi in Grid-Layouts

Angewendet auf ein Grid-Layout-Beispiel können wir sehen, wie das Ändern des Schreibmodus bedeutet, unser Verständnis darüber zu ändern, wo sich die Block- und Inline-Achsen befinden.

### Standard-Schreibmodus

In diesem Beispiel hat das Grid drei Spalten- und zwei Zeilentracks. Das bedeutet, dass es drei Tracks entlang der Blockachse gibt. Im Standard-Schreibmodus platziert das Grid automatisch Elemente beginnend oben links, bewegt sich nach rechts und füllt die drei Zellen auf der Inline-Achse auf. Es bewegt sich dann zur nächsten Zeile, erstellt einen neuen Zeilentrack und füllt weitere Elemente ein:

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
  gap: 10px;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
  <div class="item5">Item 5</div>
</div>
```

{{ EmbedLiveSample('Default_writing_mode', '500', '230') }}

### Schreibmodus einstellen

Wenn wir `writing-mode: vertical-lr` dem Grid-Container im vorherigen Beispiel hinzufügen, können wir sehen, dass die Block- und Inline-Achsen nun in eine andere Richtung verlaufen. Die Block- oder \_Spalten-\_Achse verläuft nun über die Seite von links nach rechts, während die Inline-Achse nach unten verläuft und Zeilen von oben nach unten erstellt.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
  gap: 10px;
}
```

```css
.wrapper {
  writing-mode: vertical-lr;
}
```

```html hidden
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
  <div class="item5">Item 5</div>
</div>
```

{{ EmbedLiveSample('Setting_writing_mode', '500', '330') }}

## Logische Werte für die Ausrichtung

Mit der Möglichkeit, dass die Block- und Inline-Achse die Richtung ändern können, beginnen die logischen Werte für die Ausrichtungseigenschaften mehr Sinn zu ergeben.

In diesem Beispiel verwenden wir die Ausrichtung (die {{cssxref("align-self")}} und {{cssxref("justify-self")}} Eigenschaften), um Elemente innerhalb eines Grids auszurichten, das auf `writing-mode: vertical-lr` gesetzt ist. Die `start` und `end` Eigenschaften funktionieren genau so, wie sie es im Standard-Schreibmodus tun, und bleiben logisch, so wie es das Verwenden von links und rechts, oben und unten für die Ausrichtung von Elementen nicht wäre. Dies geschieht, nachdem wir das Grid zur Seite gedreht haben, so wie dieses:

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  writing-mode: vertical-lr;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
}

.item1 {
  grid-column: 1 / 4;
  align-self: start;
}

.item2 {
  grid-column: 1 / 3;
  grid-row: 2 / 4;
  align-self: start;
}

.item3 {
  grid-column: 3;
  grid-row: 2 / 4;
  align-self: end;
  justify-self: end;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
</div>
```

{{ EmbedLiveSample('Logical_values_for_alignment', '500', '280') }}

Wenn Sie sehen möchten, wie diese mit einem Rechts-zu-Links- sowie einem Oben-zu-Unten-Schreibmodus funktionieren, ändern Sie `vertical-lr` zu `vertical-rl`, welcher ein vertikaler Schreibmodus von rechts nach links ist.

## Automatische Platzierung und Schreibmodi

Wie wir in den vorherigen Beispielen gesehen haben, kann der Schreibmodus die visuelle Richtung ändern, in die sich Elemente auf das Grid platzieren. Standardmäßig platzieren sich Elemente entlang der Inline-Achse und fügen neue Zeilen in der Blockrichtung hinzu. Wir haben nun gesehen, dass die Inline-Achse nicht immer von links nach rechts verläuft und die Blockachse nicht immer von oben nach unten verläuft.

## Linienbasierte Platzierung und Schreibmodi

Das Wichtigste bei der platzierung von Elementen nach Zeilennummer zu beachten ist, dass Linie 1 die Startlinie ist und Linie -1 die Endlinie, unabhängig davon, in welchem Schreibmodus Sie sich befinden.

### Linienbasierte Platzierung mit von links nach rechts Text

In diesem Beispiel haben wir ein Grid, das in der Standardrichtung `ltr` angeordnet ist, mit drei Elementen, die mittels linienbasierter Platzierung positioniert werden.

- Element 1 beginnt bei Spaltenlinie 1 und spannt einen Track.
- Element 2 beginnt bei Spaltenlinie -1 und geht bis -3.
- Element 3 beginnt bei Spaltenlinie 1 und geht bis Spaltenlinie 3.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
  gap: 10px;
}
.item1 {
  grid-column: 1;
}
.item2 {
  grid-column: -1 / -3;
}
.item3 {
  grid-column: 1 / 3;
  grid-row: 2;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
</div>
```

{{ EmbedLiveSample('Line-based_placement_with_left_to_right_text', '500', '240') }}

### Linienbasierte Platzierung mit von rechts nach links Text

Wenn wir dem Grid-Container im vorherigen Beispiel die {{cssxref("direction")}} Eigenschaft mit einem Wert von `rtl` hinzufügen, wird Linie 1 auf der rechten Seite des Grids platziert und Linie -1 auf der linken Seite.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
  gap: 10px;
}

.item1 {
  grid-column: 1;
}

.item2 {
  grid-column: -1 / -3;
}

.item3 {
  grid-column: 1 / 3;
  grid-row: 2;
}
```

```css
.wrapper {
  direction: rtl;
}
```

```html hidden
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
</div>
```

{{ EmbedLiveSample('Line-based_placement_with_right_to_left_text', '500', '240') }}

Wenn Sie die Richtung Ihres Textes ändern, sei es für ganze Seiten oder Teile von Seiten, und Linien verwenden, möchten Sie möglicherweise [Ihre Linien benennen](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines), um zu verhindern, dass das Layout vollständig die Richtung ändert. Für einige Dinge, z.B. wenn ein Grid Textinhalt enthält, kann diese Umstellung genau das sein, was Sie wollen. Für andere Anwendungen möglicherweise nicht.

### Die seltsame Reihenfolge von Werten in der `grid-area` Eigenschaft

Sie können die {{cssxref("grid-area")}} Eigenschaft verwenden, um alle vier Linien eines Grid-Bereichs als einen Wert anzugeben. Wenn Menschen dies zum ersten Mal erblicken, sind sie oft überrascht, dass die Werte nicht derselben Reihenfolge wie die Kurzform für {{cssxref("margin")}} folgen – die im Uhrzeigersinn abläuft: oben, rechts, unten, links.

Die Reihenfolge der `grid-area` Werte ist:

- `grid-row-start`
- `grid-column-start`
- `grid-row-end`
- `grid-column-end`

Was für Englisch, von links nach rechts, die Reihenfolge bedeutet:

- `top`
- `left`
- `bottom`
- `right`

Dies ist gegen den Uhrzeigersinn! Es ist das Gegenteil von dem, was wir für Ränder und Abstände tun. Wenn wir uns erinnern, dass `grid-area` die Welt als "Block und Inline" sieht, werden Sie bemerken, dass wir die beiden Starts, dann die beiden Enden setzen, was viel logischer ist, wenn man es weiß!

## Gemischte Schreibmodi und Grid-Layout

Neben dem Anzeigen von Dokumenten mit dem korrekten Schreibmodus für die Sprache können Schreibmodi kreativ innerhalb sonstiger `ltr`-Dokumente verwendet werden. In diesem Beispiel haben wir ein Grid-Layout mit einem Satz von Links an einer Seite. Wir verwenden Schreibmodi (`writing-mode: vertical-lr`), um diese in der Spaltenreihe auf die Seite zu drehen:

```css
.wrapper {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr auto;
  font:
    1em "Helvetica",
    "Arial",
    sans-serif;
}
nav {
  writing-mode: vertical-lr;
}
nav ul {
  list-style: none;
  margin: 0;
  padding: 1em;
  display: flex;
  justify-content: space-between;
}
nav a {
  text-decoration: none;
}
```

```html
<div class="wrapper">
  <div class="content">
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo
      shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.
      Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi
      beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki
      bean chickweed potato bell pepper artichoke.
    </p>
    <p>
      Nori grape silver beet broccoli kombu beet greens fava bean potato
      quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
      turnip greens parsnip. Sea lettuce water chestnut eggplant winter purslane
      fennel azuki bean earthnut pea sierra leone bologi leek soko chicory
      celtuce parsley jícama salsify.
    </p>
  </div>
  <nav>
    <ul>
      <li><a href="">Link 1</a></li>
      <li><a href="">Link 2</a></li>
      <li><a href="">Link 3</a></li>
    </ul>
  </nav>
</div>
```

{{ EmbedLiveSample('Mixed_writing_modes_and_grid_layout', '500', '280') }}

## Physische Werte und logische Eigenschaften

Wenn Sie logische Gittereigenschaften mit physischen Eigenschaften kombinieren, denken Sie daran, dass sich physische Eigenschaften nicht gemäß dem Schreibmodus ändern. In unserem [Ausrichten von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment) Leitfaden verwenden wir automatische Ränder, um ein Element von den anderen zu verdrängen; dies nutzt physische Eigenschaften. Es gibt logische Eigenschaften, die für die meisten physische Eigenschaften äquivalent sind und welche die Schreibmodi auf die gleiche Weise respektieren wie Gitterplatzierungs- und Ausrichtungseigenschaften und -werte.

Ähnlich können Sie, wenn Sie absolute Positionierung innerhalb eines Grid-Bereichs verwenden, logische {{Glossary("inset_properties", "inset properties")}} verwenden, um Elemente innerhalb des Bereichs zu platzieren. Wenn Sie logische und physische Eigenschaften oder Werte mischen, seien Sie sich der Spannung zwischen ihnen bewusst. Beispielsweise müssen Sie eventuell Ihr CSS ändern, um mit einem Wechsel von `ltr` nach `rtl` zurechtzukommen. Ihr Verständnis von Block und Inline durch Grid wird Ihnen helfen, [CSS-Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) zu verstehen.
