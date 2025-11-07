---
title: Raster, logische Werte und Schreibrichtungen
short-title: Logische Werte und Schreibrichtungen
slug: Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

Eine der wichtigsten Funktionen des CSS-Rasterlayouts ist die Unterstützung verschiedener Schreibrichtungen, die in die Spezifikation integriert sind. In diesem Leitfaden betrachten wir diese Funktion des CSS-Rasterlayouts und anderer moderner Layoutmethoden und lernen dabei etwas über Schreibrichtungen und logische vs. physische Eigenschaften.

## Logische und physische Eigenschaften und Werte

CSS ist voll von **physischen** Positionierungseigenschaften und Schlüsselwörtern – `left` und `right`, `top` und `bottom`. Im folgenden Codebeispiel positionieren wir ein Element mithilfe der absoluten Positionierung und verwenden die physischen {{Glossary("inset_properties", "inset properites")}} als Offset-Werte, um das Element zu verschieben. Das Element befindet sich 20 Pixel vom oberen Rand und 30 Pixel vom linken Rand des Containers entfernt:

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

Dieses Beispiel verwendet die Eigenschaften {{cssxref("left")}} und {{cssxref("right")}}; dies sind nur zwei der vielen **{{Glossary("physical_properties", "physische Eigenschaften")}}** in CSS. Wir können auch Ränder, Innenabstände und Rahmen mit physischen Eigenschaften hinzufügen, zum Beispiel {{cssxref("margin-left")}} und {{cssxref("padding-left")}}. Sie könnten auch die Verwendung physischer Schlüsselwörter sehen, z. B. wenn `text-align: right` verwendet wird, um Text nach rechts auszurichten.

Wir nennen diese Schlüsselwörter und Eigenschaften _physisch_, weil sie sich auf den Bildschirm beziehen, auf den Sie schauen. Links ist immer links, egal in welcher Richtung Ihr Text verläuft.

### Probleme mit physischen Eigenschaften

Physische Eigenschaften können Probleme verursachen, wenn eine Website entwickelt wird, die in mehreren Sprachen funktionieren muss, einschließlich Sprachen, bei denen der Text von rechts nach links oder von oben nach unten fließt. Browser sind so konzipiert, dass sie Inhalte unabhängig von der Sprache korrekt anzeigen. Einige CSS-Funktionen können jedoch die Standardwerte des Browsers überschreiben und dazu führen, dass Inhalte weniger optimal angezeigt werden.

In diesem Beispiel wurde die Eigenschaft {{cssxref("direction")}} auf {{Glossary("rtl", "rtl")}} gesetzt, was den Schreibmodus von der Standardeinstellung eines englischen Dokuments `ltr` umschaltet. Wir haben zwei Absätze. Diese sollten beide von rechts nach links fließen, weil der `direction`-Wert auf einem übergeordneten Element (`<body>`) gesetzt ist. Der erste Absatz hat {{cssxref("text-align")}} auf `left` gesetzt, sodass er sich am linken Rand seines Containers ausrichtet. Der zweite Absatz richtet sich nach rechts aus und fließt von rechts nach links.

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

Dies ist eine grundlegende Demonstration der Probleme, die auftreten können, wenn physische Werte und Eigenschaften in CSS verwendet werden. Wenn wir CSS mit physischen Eigenschaften und Schlüsselwörtern schreiben, teilt es dem Browser unsere Annahme darüber mit, wie der Text fließen wird, und verhindert, dass er alternative Schreibmodi behandelt.

### Logische Eigenschaften und Werte

**{{Glossary("Logical_properties", "Logische Eigenschaften")}} und Werte** setzen keine Textrichtung voraus. Aus diesem Grund verwenden wir das Schlüsselwort `start` im CSS-Rasterlayout, um etwas mit dem Anfang eines Containers auszurichten. Bei der Arbeit mit englischen Inhalten wird `start` links sein, es muss jedoch nicht so sein. Das Wort `start` weist keinen physischen Ort auf, was es Websites ermöglicht, den Inhalt auf der rechten Seite zu beginnen, wenn Sprachen mit Schreibrichtung von rechts nach links, wie Arabisch, verwendet werden.

## Block und Inline

Wenn wir logische statt physische Eigenschaften verwenden, sehen wir die Welt nicht als links nach rechts und von oben nach unten. Wir haben einen anderen Bezugspunkt. Dies ist der Punkt, an dem das Verständnis der _Block- und Inline-Achsen_, die im [Leitfaden zur Rasterausrichtung](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment) eingeführt wurden, sehr nützlich wird. Wenn Sie das Layout in Bezug auf Block und Inline denken, wird der Arbeitsablauf im CSS-Rasterlayout verständlich.

![Ein Bild, das die Standardrichtung der Block- und Inline-Achsen zeigt.](8-horizontal-tb.png)

## CSS-Schreibrichtungen

Das Modul [CSS-Schreibrichtungen](/de/docs/Web/CSS/Guides/Writing_modes) beschreibt, wie Schreibrichtungen in CSS funktionieren. Diese Funktionen dienen nicht nur zur Unterstützung von Sprachen mit einer anderen Schreibrichtung als Englisch; sie können auch für kreative Zwecke verwendet werden. Die Beispiele in diesem Abschnitt verwenden die Eigenschaft {{cssxref("writing-mode")}}, um Änderungen am angewendeten Schreibrichtung auf unseren Raster vorzunehmen und dabei zu demonstrieren, wie logische Werte funktionieren.

### `writing-mode`

Schreibrichtungen sind mehr als nur links nach rechts und rechts nach links Text, und die Eigenschaft `writing-mode` hilft uns, Text in anderen Richtungen darzustellen. Die Eigenschaft {{cssxref("writing-mode")}} kann folgende Werte haben:

- `horizontal-tb`
- `vertical-rl`
- `vertical-lr`
- `sideways-rl`
- `sideways-lr`

Der Wert `horizontal-tb`, steht für "horizontal, von oben nach unten", ist der Standard für Text im Web. Es ist die Richtung, in die Sie diesen Leitfaden lesen. Die anderen Werte ändern, wie Text in unserem Dokument fließt und entsprechen den verschiedenen Schreibrichtungen weltweit.

Als Beispiel haben wir unten zwei Absätze. Der erste verwendet den Standardwert `horizontal-tb`, und der zweite verwendet `vertical-rl`. Im zweiten Schreibrichtung verläuft der Text weiterhin von links nach rechts, jedoch ist die Richtung des Textes jetzt vertikal — Inline-Text verläuft jetzt entlang der Seite, von oben nach unten.

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

## Schreibmodi in Rasterlayouts

Wenn dies auf ein Rasterlayout angewendet wird, können wir sehen, wie sich unser Verständnis der Block- und Inline-Achsen ändert, wenn der Schreibrichtung geändert wird.

### Standard-Schreibmodus

In diesem Beispiel hat das Raster drei Spalten und zwei Reihenspuren. Dies bedeutet, dass es drei Spuren entlang der Blockachse gibt. Im Standardschreibmodus platziert das Raster automatisch Elemente beginnend oben links, entlang der Inline-Achse nach rechts bewegend, und füllt die drei Zellen der Inline-Achse aus. Es bewegt sich dann zur nächsten Zeile, erstellt eine neue Reihenspur und füllt weitere Elemente aus:

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

### Schreibmodus festlegen

Wenn wir `writing-mode: vertical-lr` zum Rastercontainer im vorherigen Beispiel hinzufügen, können wir sehen, dass die Block- und Inline-Achsen nun in eine andere Richtung verlaufen. Die Block- oder _Column_-Achse verläuft nun über die Seite von links nach rechts, während die Inline-Achse entlang der Seite verläuft und Zeilen von oben nach unten erstellt.

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

Da sich die Block- und Inline-Achsen ändern können, beginnen die logischen Werte für die Ausrichtungseigenschaften mehr Sinn zu machen.

In diesem Beispiel verwenden wir die Ausrichtung (die Eigenschaften {{cssxref("align-self")}} und {{cssxref("justify-self")}}), um Elemente innerhalb eines Rasters auszurichten, das auf `writing-mode: vertical-lr` gesetzt ist. Die Eigenschaften `start` und `end` funktionieren genau so wie im Standardschreibmodus und bleiben logisch, während die Verwendung von links und rechts, oben und unten zur Ausrichtung von Elementen es nicht tun würde. Dies geschieht, nachdem wir das Raster sozusagen auf die Seite gedreht haben, wie hier:

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

Wenn Sie sehen möchten, wie diese mit einer Schreibrichtung von rechts nach links sowie von oben nach unten funktionieren, ändern Sie `vertical-lr` zu `vertical-rl`, das eine vertikale Schreibrichtung von rechts nach links darstellt.

## Automatische Platzierung und Schreibrichtungen

Wie wir in den vorherigen Beispielen gesehen haben, kann der Schreibrichtung die visuelle Richtung ändern, in der Elemente auf das Raster gesetzt werden. Elemente werden standardmäßig entlang der Inline-Achse platziert, wobei neue Zeilen in der Blockrichtung hinzugefügt werden. Wir haben jetzt gesehen, dass die Inline-Achse nicht immer von links nach rechts verläuft und die Block-Achse nicht immer von oben nach unten.

## Zeilenbasierte Platzierung und Schreibrichtungen

Der Schlüsselpunkt, den Sie sich merken sollten, wenn Sie Elemente anhand von Zeilen nummer platzieren, ist, dass Zeile 1 die Startzeile und Zeile -1 die Endzeile ist, egal in welchem Schreibrichtung Sie sich befinden.

### Zeilenbasierte Platzierung mit Text von links nach rechts

In diesem Beispiel haben wir ein Raster im Standard-`ltr`-Stil mit drei Elementen, die mit zeilenbasierter Platzierung positioniert sind.

- Element 1 beginnt bei Spaltenzeile 1 und spannt sich über eine Spur.
- Element 2 beginnt bei Spaltenzeile -1 und spannt sich bis -3.
- Element 3 beginnt bei Spaltenzeile 1 und spannt sich bis Spaltenzeile 3.

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

### Zeilenbasierte Platzierung mit Text von rechts nach links

Wenn wir die Eigenschaft {{cssxref("direction")}} mit dem Wert `rtl` zum Raster-Container im vorherigen Beispiel hinzufügen, befindet sich Zeile 1 auf der rechten Seite des Rasters und Zeile -1 auf der linken Seite.

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

Wenn Sie die Richtung Ihres Textes ändern, entweder für ganze Seiten oder für Teile von Seiten, und Zeilen verwenden, möchten Sie möglicherweise [Ihre Zeilen benennen](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines), um zu vermeiden, dass das Layout vollständig die Richtung wechselt. Für einige Dinge, zum Beispiel, wenn ein Raster Textinhalte enthält, könnte diese Umstellung genau das sein, was Sie wollen. Für andere Verwendungen möglicherweise nicht.

### Die seltsame Reihenfolge der Werte in der `grid-area`-Eigenschaft

Sie können die Eigenschaft {{cssxref("grid-area")}} verwenden, um alle vier Zeilen eines Rasterbereichs als einen Wert anzugeben. Wenn Menschen dies zum ersten Mal sehen, sind sie oft überrascht, dass die Werte nicht in der gleichen Reihenfolge wie die Kurzschreibweise von {{cssxref("margin")}} sind – welche im Uhrzeigersinn läuft: oben, rechts, unten, links.

Die Reihenfolge der `grid-area`-Werte lautet:

- `grid-row-start`
- `grid-column-start`
- `grid-row-end`
- `grid-column-end`

Was im Englischen in der Schreibrichtung von links nach rechts bedeutet:

- `oben`
- `links`
- `unten`
- `rechts`

Das ist gegen den Uhrzeigersinn! Es ist das Gegenteil von dem, was wir für Ränder und Abstände tun. Wenn wir bedenken, dass `grid-area` die Welt als "Block und Inline" sieht, werden Sie feststellen, dass wir zuerst die beiden Startpunkte und dann die beiden Endpunkte setzen, was viel logischer erscheint, wenn man es weiß!

## Gemischte Schreibrichtungen und Rasterlayout

Neben der Darstellung von Dokumenten in der richtigen Schreibrichtung für die Sprache können Schreibrichtungen kreativ in Dokumenten verwendet werden, die sonst `ltr` sind. In diesem Beispiel haben wir ein Rasterlayout mit einer Reihe von Links an einer Seite. Wir verwenden Schreibrichtungen (`writing-mode: vertical-lr`), um diese in der Spurenachse auf ihre Seite zu drehen:

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

Wenn Sie logische Rastereigenschaften mit physischen Eigenschaften kombinieren, denken Sie daran, dass physische Eigenschaften sich nicht entsprechend der Schreibrichtung ändern. In unserem [Ausrichten von Elementen im CSS-Rasterlayout](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment) Leitfaden verwenden wir automatische Ränder, um ein Element von den anderen wegzuschieben; das verwendet physische Eigenschaften. Es gibt für die meisten physischen Eigenschaften logische Äquivalente, die Schreibrichtungen auf die gleiche Weise respektieren wie die Platzierungs- und Ausrichtungseigenschaften und -werte im Raster.

Ebenso können Sie beim Verwenden von absoluter Positionierung innerhalb eines Rasterbereichs logische {{Glossary("inset_properties", "inset properties")}} verwenden, um Elemente innerhalb des Rasterbereichs zu platzieren. Beim Mischen von logischen und physischen Eigenschaften oder Werten sollten Sie die Spannung zwischen ihnen beachten. Beispielsweise müssen Sie möglicherweise Ihr CSS ändern, um eine Umstellung von `ltr` auf `rtl` zu bewältigen. Ihr Verständnis von Block und Inline durch Raster wird Ihnen helfen, [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) zu verstehen.
