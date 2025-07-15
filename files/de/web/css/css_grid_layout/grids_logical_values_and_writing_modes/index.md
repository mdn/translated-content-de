---
title: Raster, logische Werte und Schreibrichtungen
short-title: Logische Werte und Schreibrichtungen
slug: Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes
l10n:
  sourceCommit: 72a2f0fa7f25ba32ab8e07447a8d4bbc2f936b85
---

Eines der wichtigsten Merkmale des CSS-Rasterlayouts ist die Unterstützung verschiedener Schreibrichtungen, die in die Spezifikation integriert sind. In diesem Leitfaden betrachten wir dieses Merkmal des CSS-Rasterlayouts und andere moderne Layoutmethoden und lernen dabei ein wenig über Schreibrichtungen sowie logische vs. physische Eigenschaften.

## Logische und physische Eigenschaften und Werte

CSS ist voll von **physischen** Positionierungseigenschaften und Schlüsselwörtern – `left` und `right`, `top` und `bottom`. Im untenstehenden Codebeispiel positionieren wir ein Element mit absoluter Positionierung und verwenden die physischen {{Glossary("inset_properties", "Einfügeeigenschaften")}} als Versatzwerte, um das Element im Container zu verschieben. Das Element wird 20 Pixel vom oberen Rand und 30 Pixel vom linken Rand des Containers platziert:

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

Dieses Beispiel verwendet die Eigenschaften {{cssxref("left")}} und {{cssxref("right")}}; dies sind nur zwei der vielen **{{Glossary("physical_properties", "physischen Eigenschaften")}}** in CSS. Wir können auch Margen, Abstände und Rahmen unter Verwendung physischer Eigenschaften hinzufügen, zum Beispiel {{cssxref("margin-left")}} und {{cssxref("padding-left")}}. Es können auch physische Schlüsselwörter verwendet werden, wie zum Beispiel bei der Anwendung von `text-align: right`, um Text rechts auszurichten.

Wir nennen diese Schlüsselwörter und Eigenschaften _physisch_, weil sie sich auf den Bildschirm beziehen, den Sie betrachten. Links ist immer links, egal in welche Richtung Ihr Text läuft.

### Probleme mit physischen Eigenschaften

Physische Eigenschaften können Probleme verursachen, wenn eine Website entwickelt werden muss, die in mehreren Sprachen funktioniert, einschließlich Sprachen, in denen der Text von rechts nach links oder von oben nach unten fließt. Browser sind so konzipiert, dass sie Inhalte unabhängig von der Sprache korrekt anzeigen. Einige CSS-Funktionen können jedoch die Standardvorgaben des Browsers außer Kraft setzen und dazu führen, dass Inhalte weniger optimal angezeigt werden.

In diesem Beispiel wurde die Eigenschaft {{cssxref("direction")}} auf {{Glossary("rtl", "rtl")}} gesetzt, wodurch die Schreibrichtung vom Standardwert `ltr` für ein englischsprachiges Dokument umgestellt wird. Wir haben zwei Absätze. Diese sollten beide von rechts nach links fließen, da der `direction`-Wert auf einem übergeordneten Element (`<body>`) gesetzt ist. Der erste Absatz hat {{cssxref("text-align")}} auf `left` gesetzt, sodass er sich am linken Rand seines Containers ausrichtet. Der zweite Absatz richtet sich am rechten Rand aus und fließt von rechts nach links.

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

{{EmbedLiveSample("Probleme mit physischen Eigenschaften","",170)}}

Dies ist eine grundlegende Demonstration der Probleme, die auftreten können, wenn physische Werte und Eigenschaften in CSS verwendet werden. Wenn wir CSS mit physischen Eigenschaften und Schlüsselwörtern schreiben, teilen wir dem Browser unsere Annahme darüber mit, wie der Text fließen wird, und verhindern, dass er alternative Schreibrichtungen verarbeitet.

### Logische Eigenschaften und Werte

**{{Glossary("Logical_properties", "Logische Eigenschaften")}} und Werte** nehmen keine Textrichtung an. Aus diesem Grund verwenden wir das Schlüsselwort `start` im CSS-Rasterlayout, um etwas am Anfang eines Containers auszurichten. Wenn wir mit englischen Inhalten arbeiten, wird `start` auf der linken Seite sein, muss es jedoch nicht. Das Wort `start` gibt keinen physischen Standort an, was es Websites ermöglicht, den Inhalt auf der rechten Seite zu beginnen, wenn Sprachen von rechts nach links, wie Arabisch, verwendet werden.

## Block und Inline

Wenn wir logische statt physische Eigenschaften verwenden, sehen wir die Welt nicht von links nach rechts und von oben nach unten. Wir haben einen anderen Bezugspunkt. Dies ist der Punkt, an dem das Verständnis der _Block-_ und \_Inline-\_Achsen, eingeführt im [Leitfaden zur Rasterausrichtung](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout), sehr nützlich wird. Wenn Sie über Layout im Hinblick auf Block und Inline nachdenken, macht die Funktionsweise im CSS-Rasterlayout viel Sinn.

![Ein Bild, das die Standardrichtung der Block- und Inline-Achsen zeigt.](8-horizontal-tb.png)

## CSS-Schreibrichtungen

Das [CSS-Modul für Schreibrichtungen](/de/docs/Web/CSS/CSS_writing_modes) spezifiziert, wie Schreibrichtungen in CSS funktionieren. Diese Funktionen sind nicht nur zur Unterstützung von Sprachen mit einer anderen Schreibrichtung als Englisch gedacht; sie können auch für kreative Zwecke genutzt werden. Die Beispiele in diesem Abschnitt nutzen die Eigenschaft {{cssxref("writing-mode")}}, um die Schreibrichtung zu ändern, die auf unser Raster angewendet wird, und demonstrieren, wie logische Werte dabei funktionieren.

### `writing-mode`

Schreibrichtungen sind mehr als nur von links nach rechts und von rechts nach links verlaufender Text, und die Eigenschaft `writing-mode` hilft uns, Text in anderen Richtungen anzuzeigen. Die Eigenschaft {{cssxref("writing-mode")}} kann die folgenden Werte haben:

- `horizontal-tb`
- `vertical-rl`
- `vertical-lr`
- `sideways-rl`
- `sideways-lr`

Der Wert `horizontal-tb`, der für "horizontal, von oben nach unten" steht, ist der Standard für Text im Web. Es ist die Richtung, in der Sie diesen Leitfaden lesen. Die anderen Werte verändern, wie Text in unserem Dokument fließt und entsprechen den unterschiedlichen Schreibrichtungen weltweit.

Als Beispiel haben wir unten zwei Absätze. Der erste verwendet den Standardwert `horizontal-tb`, und der zweite verwendet `vertical-rl`. In der zweiten Schreibrichtung läuft der Text weiterhin von links nach rechts, jedoch ist die Textausrichtung vertikal — Inline-Text läuft nun von oben nach unten über die Seite.

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

## Schreibrichtungen in Rasterlayouts

Anwendung auf ein Rasterlayout-Beispiel: Wir können sehen, wie das Ändern der Schreibrichtung unsere Vorstellung davon verändert, wo sich die Block- und Inline-Achsen befinden.

### Standard-Schreibrichtung

In diesem Beispiel hat das Raster drei Spalten und zwei Zeilenspuren. Dies bedeutet, dass es drei Spuren gibt, die entlang der Blockachse verlaufen. In der Standard-Schreibrichtung platziert das Raster automatisch Elemente beginnend oben links, bewegt sich nach rechts und füllt die drei Zellen auf der Inline-Achse aus. Es bewegt sich dann zur nächsten Zeile, erstellt eine neue Zeilenspur und fügt weitere Elemente hinzu:

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

{{ EmbedLiveSample('Standard-Schreibrichtung', '500', '230') }}

### Schreiben der Schreibrichtung

Wenn wir `writing-mode: vertical-lr` zum Rastercontainer im vorherigen Beispiel hinzufügen, können wir sehen, dass die Block- und Inline-Achsen nun in eine andere Richtung verlaufen. Die Block- oder \_Spalten-\_Achse verläuft nun über die Seite von links nach rechts, während die Inline-Achse die Seite hinunterläuft und dadurch Zeilen von oben nach unten erstellt.

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

{{ EmbedLiveSample('Schreibrichtung setzen', '500', '330') }}

## Logische Werte für die Ausrichtung

Wenn die Block- und Inline-Achsen die Richtung ändern können, ergeben die logischen Werte für die Ausrichtungseigenschaften mehr Sinn.

In diesem Beispiel verwenden wir die Ausrichtung (die Eigenschaften {{cssxref("align-self")}} und {{cssxref("justify-self")}}), um Elemente innerhalb eines Rasters zu richten, das auf `writing-mode: vertical-lr` gesetzt ist. Die Eigenschaften `start` und `end` funktionieren genauso wie in der Standard-Schreibrichtung und bleiben logisch in einer Weise, die die Verwendung von links und rechts, oben und unten zur Ausrichtung von Elementen nicht tun würde. Dies tritt auf, nachdem wir das Raster auf die Seite gedreht haben, wie dies:

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

{{ EmbedLiveSample('Logische Werte für die Ausrichtung', '500', '280') }}

Wenn Sie sehen möchten, wie diese mit einer von rechts nach links sowie von oben nach unten verlaufenden Schreibrichtung funktionieren, ändern Sie `vertical-lr` auf `vertical-rl`, was eine vertikale Schreibrichtung ist, die von rechts nach links verläuft.

## Automatische Platzierung und Schreibrichtungen

Wie wir in den vorherigen Beispielen gesehen haben, kann die Schreibrichtung die visuelle Richtung ändern, in der sich Elemente auf dem Raster platzieren. Elemente werden standardmäßig entlang der Inline-Achse platziert und fügen in Blockrichtung neue Zeilen hinzu. Wir haben nun gesehen, dass die Inline-Achse nicht immer von links nach rechts verläuft und die Blockachse nicht immer von oben nach unten.

## Linienbasierte Platzierung und Schreibrichtungen

Der entscheidende Punkt bei der Platzierung von Elementen nach Liniennummern ist, dass Linie 1 die Startlinie und Linie -1 die Endlinie ist, unabhängig in welcher Schreibrichtung Sie sich befinden.

### Linienbasierte Platzierung mit von links nach rechts verlaufendem Text

In diesem Beispiel haben wir ein Raster, das in der Standardrichtung `ltr` ausgelegt ist, mit drei Elementen, die mittels linienbasierter Platzierung positioniert sind.

- Element 1 beginnt bei Spaltenlinie 1 und erstreckt sich über eine Spur.
- Element 2 beginnt bei Spaltenlinie -1 und erstreckt sich bis -3.
- Element 3 beginnt bei Spaltenlinie 1 und erstreckt sich bis zur Spaltenlinie 3.

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

{{ EmbedLiveSample('Linienbasierte Platzierung mit von links nach rechts verlaufendem Text', '500', '240') }}

### Linienbasierte Platzierung mit von rechts nach links verlaufendem Text

Wenn wir die Eigenschaft {{cssxref("direction")}} mit einem Wert von `rtl` zum Raster-Container im vorherigen Beispiel hinzufügen, liegt Linie 1 auf der rechten Seite des Rasters und Linie -1 auf der linken.

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

{{ EmbedLiveSample('Linienbasierte Platzierung mit von rechts nach links verlaufendem Text', '500', '240') }}

Wenn Sie die Richtung Ihres Textes ändern, entweder für ganze Seiten oder Teile von Seiten, und Linien verwenden, möchten Sie möglicherweise [ihre Linien benennen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines), um zu vermeiden, dass das Layout vollständig die Richtung ändert. Für einige Dinge, zum Beispiel wo ein Raster Textinhalt enthält, ist diese Umstellung möglicherweise genau das, was Sie wollen. Für andere Anwendungen möglicherweise nicht.

### Die seltsame Reihenfolge von Werten in der `grid-area` Eigenschaft

Sie können die Eigenschaft {{cssxref("grid-area")}} verwenden, um alle vier Linien eines Rasterbereichs als einen Wert anzugeben. Wenn Menschen dies zum ersten Mal sehen, sind sie oft überrascht, dass die Werte nicht in der gleichen Reihenfolge wie die Kurzform für {{cssxref("margin")}} stehen – die im Uhrzeigersinn ablaufen: oben, rechts, unten, links.

Die Reihenfolge der `grid-area` Werte ist:

- `grid-row-start`
- `grid-column-start`
- `grid-row-end`
- `grid-column-end`

Was für Englisch, von links nach rechts, bedeutet die Reihenfolge ist:

- `oben`
- `links`
- `unten`
- `rechts`

Das ist gegen den Uhrzeigersinn! Es ist das Gegenteil von dem, was wir für Margen und Abstände tun. Wenn wir uns daran erinnern, dass `grid-area` die Welt in "Block und Inline" sieht, werden Sie feststellen, dass wir die beiden Starts und dann die beiden Enden setzen, was viel logischer ist, wenn Sie es wissen!

## Gemischte Schreibrichtungen und Rasterlayout

Zusätzlich zur Darstellung von Dokumenten mit der richtigen Schreibrichtung für die Sprache können Schreibrichtungen kreativ in Dokumenten verwendet werden, die sonst `ltr` sind. In diesem Beispiel haben wir ein Rasterlayout mit einer Reihe von Links an einer Seite. Wir verwenden Schreibrichtungen (`writing-mode: vertical-lr`), um diese in der Spalten-Segment auf die Seite zu drehen:

```css
.wrapper {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr auto;
  font:
    1em Helvetica,
    Arial,
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

{{ EmbedLiveSample('Gemischte Schreibrichtungen und Rasterlayout', '500', '280') }}

## Physische Werte und logische Eigenschaften

Wenn Sie logische Rastereigenschaften mit physischen Eigenschaften kombinieren, denken Sie daran, dass physische Eigenschaften sich nicht entsprechend der Schreibrichtung ändern. In unserem [Leitfaden zur Ausrichtung von Elementen im CSS-Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout) verwenden wir automatische Margen, um ein Element von anderen wegzudrücken; dies verwendet physische Eigenschaften. Es gibt logische Eigenschaftsentsprechungen zu den meisten physischen Eigenschaften, die Schreibrichtungen in der gleichen Weise wie Rasterplatzierung und Ausrichtungseigenschaften und -werte respektieren.

Ähnlich können Sie bei der Verwendung absoluter Positionierung innerhalb eines Rasterbereichs logische {{Glossary("inset_properties", "Einfügeeigenschaften")}} verwenden, um Elemente innerhalb des Rasterbereichs zu platzieren. Wenn logische und physische Eigenschaften oder Werte gemischt werden, beachten Sie die Spannung zwischen ihnen. Beispielsweise müssen Sie möglicherweise Ihr CSS ändern, um mit einem Wechsel von `ltr` zu `rtl` umzugehen. Ihr Verständnis von Block und Inline durch Raster wird Ihnen helfen, [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) zu verstehen.
