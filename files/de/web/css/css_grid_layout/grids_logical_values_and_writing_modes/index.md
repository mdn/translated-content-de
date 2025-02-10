---
title: Grids, logische Werte und Schreibmodi
slug: Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes
l10n:
  sourceCommit: 9416c5b089a1c18296bde0b55e1c0d6637871869
---

{{CSSRef}}

Eine der wichtigsten Eigenschaften des CSS-Grid-Layouts ist die Unterstützung verschiedener Schreibmodi, die in die Spezifikation integriert sind. In diesem Leitfaden befassen wir uns mit dieser Funktion des CSS-Grid-Layouts und anderer moderner Layout-Methoden und lernen dabei ein wenig über Schreibmodi sowie logische im Vergleich zu physischen Eigenschaften.

## Logische und physische Eigenschaften und Werte

CSS verfügt über zahlreiche **physische** Positionierungseigenschaften und Schlüsselwörter – `left` und `right`, `top` und `bottom`. Im folgenden Codebeispiel positionieren wir ein Element mit absoluter Positionierung und verwenden die physischen {{Glossary("inset_properties", "inset-Eigenschaften")}} als Offset-Werte, um das Element zu verschieben. Das Element wird 20 Pixel vom oberen und 30 Pixel vom linken Rand des Containers platziert:

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

Dieses Beispiel verwendet die {{cssxref("left")}}- und {{cssxref("right")}}-Eigenschaften; dies sind nur zwei von vielen **{{Glossary("physical_properties", "physischen Eigenschaften")}}** in CSS. Wir können auch Ränder, Abstände und Rahmen mit physischen Eigenschaften hinzufügen, zum Beispiel {{cssxref("margin-left")}} und {{cssxref("padding-left")}}. Außerdem können physische Schlüsselwörter verwendet werden, wie z.B. bei `text-align: right`, um Text rechtsbündig auszurichten.

Diese Eigenschaften und Schlüsselwörter nennen wir _physisch_, da sie sich auf den Bildschirm beziehen, den Sie gerade betrachten. "Left" ist immer links, unabhängig davon, in welche Richtung Ihr Text verläuft.

### Probleme mit physischen Eigenschaften

Physische Eigenschaften können Probleme verursachen, wenn eine Website für mehrere Sprachen funktionieren muss, einschließlich Sprachen, bei denen der Textfluss von rechts nach links oder von oben nach unten verläuft. Browser sind dafür ausgelegt, Inhalte unabhängig von der Sprache korrekt darzustellen. Einige CSS-Features können jedoch die Standardeinstellungen des Browsers überschreiben und dazu führen, dass Inhalte nicht optimal angezeigt werden.

In diesem Beispiel wurde die {{cssxref("direction")}}-Eigenschaft auf {{Glossary("rtl", "rtl")}} gesetzt, was den Schreibmodus vom Standard eines englischsprachigen Dokuments (`ltr`) ändert. Wir haben zwei Absätze, die aufgrund des auf einem übergeordneten Element (`<body>`) gesetzten `direction`-Werts von rechts nach links fließen sollten. Der erste Absatz hat {{cssxref("text-align")}} auf `left` gesetzt, sodass er sich am linken Rand seines Containers ausrichtet. Der zweite Absatz richtet sich rechts aus und fließt von rechts nach links.

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

Dies ist eine grundlegende Demonstration der Probleme, die bei der Verwendung physischer Werte und Eigenschaften in CSS auftreten können. Wenn wir CSS mit physischen Eigenschaften und Schlüsselwörtern schreiben, teilen wir dem Browser unsere Annahme mit, wie der Text fließen soll, und verhindern somit, dass er alternative Schreibmodi korrekt verarbeitet.

### Logische Eigenschaften und Werte

**{{Glossary("Logical_properties", "Logische Eigenschaften")}} und Werte** setzen keinen Textfluss voraus. Deshalb verwenden wir das Schlüsselwort `start` in CSS-Grid-Layouts, um etwas am Anfang eines Containers auszurichten. Bei der Arbeit mit englischen Inhalten befindet sich `start` auf der linken Seite, aber das muss nicht so sein. Das Wort `start` gibt keinen physischen Ort an, wodurch es Websites ermöglicht, den Inhalt auf der rechten Seite zu beginnen, wenn Sprachen wie Arabisch, die von rechts nach links verlaufen, verwendet werden.

## Block- und Inline-Achsen

Wenn wir logische anstelle von physischen Eigenschaften verwenden, betrachten wir die Welt nicht mehr als links nach rechts und oben nach unten. Wir haben einen anderen Referenzpunkt. Hier wird das Verständnis der _Block_- und _Inline_-Achsen, wie im [Grid-Ausrichtungsleitfaden](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout) eingeführt, sehr nützlich. Wenn Sie das Layout in Bezug auf Block- und Inline-Achsen betrachten, wird deutlich, wie die Dinge im CSS-Grid-Layout funktionieren.

![Ein Bild, das die Standardrichtung der Block- und Inline-Achsen zeigt.](8-horizontal-tb.png)

## CSS Schreibmodi

Das [CSS Schreibmodi-Modul](/de/docs/Web/CSS/CSS_writing_modes) legt fest, wie Schreibmodi in CSS funktionieren. Diese Funktionen dienen nicht nur zur Unterstützung von Sprachen mit einem anderen Schreibmodus als Englisch; sie können auch kreativ eingesetzt werden. Die Beispiele in diesem Abschnitt nutzen die {{cssxref("writing-mode")}}-Eigenschaft, um Änderungen am Schreibmodus unseres Grids vorzunehmen, und demonstrieren dabei, wie logische Werte funktionieren.

### `writing-mode`

Schreibmodi sind mehr als nur von links nach rechts und rechts nach links Text, und die `writing-mode`-Eigenschaft hilft dabei, Text in andere Richtungen anzuzeigen. Die {{cssxref("writing-mode")}}-Eigenschaft kann folgende Werte haben:

- `horizontal-tb`
- `vertical-rl`
- `vertical-lr`
- `sideways-rl`
- `sideways-lr`

Der Wert `horizontal-tb`, der für "horizontal, oben nach unten" steht, ist der Standard für Text im Web. Es ist die Richtung, in der Sie diesen Leitfaden lesen. Die anderen Werte ändern, wie Text in unserem Dokument verläuft, und entsprechen den verschiedenen Schreibmodi, die weltweit genutzt werden.

Als Beispiel haben wir unten zwei Absätze. Der erste verwendet den Standardwert `horizontal-tb`, und der zweite verwendet `vertical-rl`. Im zweiten Schreibmodus läuft der Text weiterhin von links nach rechts, jedoch verläuft die Richtung des Textes vertikal – Inline-Text läuft jetzt die Seite hinunter, von oben nach unten.

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
  <p style="writing-mode: horizontal-tb">
    I have writing mode set to the default <code>horizontal-tb</code>
  </p>
  <p style="writing-mode: vertical-rl">
    I have writing mode set to <code>vertical-rl</code>
  </p>
</div>
```

{{ EmbedLiveSample('writing-mode', '500', '420') }}

## Schreibmodi in Grid-Layouts

Wenn wir dies auf ein Grid-Layout anwenden, können wir sehen, wie das Ändern des Schreibmodus bedeutet, dass sich unsere Vorstellung von der Position der Block- und Inline-Achsen ändert.

### Standard-Schreibmodus

In diesem Beispiel verfügt das Grid über drei Spalten und zwei Zeilenspuren. Das bedeutet, dass es drei Spuren entlang der Blockachse gibt. Im Standard-Schreibmodus platziert Grid Elemente automatisch, beginnend oben links, von der linken zur rechten Seite, und füllt die drei Zellen entlang der Inline-Achse. Danach erstellt es eine neue Zeilenspur und füllt weitere Elemente ein:

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

Wenn wir `writing-mode: vertical-lr` auf den Grid-Container im obigen Beispiel anwenden, können wir sehen, dass die Block- und Inline-Achsen nun in einer anderen Richtung verlaufen. Die Block- oder _Spalten_-Achse verläuft jetzt von links nach rechts über die Seite, während die Inline-Achse die Seite hinunterläuft und Zeilen von oben nach unten erstellt.

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

## Logische Werte für Ausrichtung

Da die Block- und Inline-Achsen ihre Richtung ändern können, werden die logischen Werte für die Ausrichtungs-Eigenschaften sinnvoller.

In diesem Beispiel verwenden wir Ausrichtung (die {{cssxref("align-self")}}- und {{cssxref("justify-self")}}-Eigenschaften), um Elemente innerhalb eines Grids auszurichten, das auf `writing-mode: vertical-lr` eingestellt ist. Die Eigenschaften `start` und `end` funktionieren auf genau die gleiche Weise wie im Standard-Schreibmodus und bleiben logisch im Gegensatz zur Verwendung von "left" und "right", "top" und "bottom", um Elemente auszurichten. Dies zeigt sich deutlich, wenn wir das Grid umdrehen, wie hier:

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

Wenn Sie sehen möchten, wie diese mit einem Schreibmodus von rechts nach links sowie von oben nach unten funktionieren, ändern Sie `vertical-lr` zu `vertical-rl`, einem vertikalen Schreibmodus, der von rechts nach links verläuft.

## Automatische Platzierung und Schreibmodi

Wie in den obigen Beispielen gezeigt, kann der Schreibmodus die visuelle Richtung ändern, in der Elemente sich auf dem Grid platzieren. Standardmäßig platzieren sich Elemente entlang der Inline-Achse und fügen in der Blockrichtung neue Zeilen hinzu. Bisher haben wir gesehen, dass die Inline-Achse nicht immer von links nach rechts verläuft und die Block-Achse nicht immer von oben nach unten.

## Linienbasierte Platzierung und Schreibmodi

Der entscheidende Punkt bei der linienbasierten Platzierung von Elementen ist, dass Linie 1 immer die Anfangslinie und Linie -1 die Endlinie ist, egal in welchem Schreibmodus Sie sich befinden.

### Linienbasierte Platzierung mit Text von links nach rechts

In diesem Beispiel haben wir ein Grid, das im Standard-Schreibmodus `ltr` angeordnet ist, mit drei Elementen, die linienbasiert positioniert sind.

- Element 1 beginnt bei Spaltenlinie 1 und erstreckt sich über eine Spur.
- Element 2 beginnt bei Spaltenlinie -1 und erstreckt sich bis -3.
- Element 3 beginnt bei Spaltenlinie 1 und erstreckt sich bis Spaltenlinie 3.

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

### Linienbasierte Platzierung mit Text von rechts nach links

Wenn wir die {{cssxref("direction")}}-Eigenschaft mit dem Wert `rtl` zum Grid-Container im obigen Beispiel hinzufügen, wird Linie 1 auf die rechte Seite des Grids und Linie -1 auf die linke Seite platziert.

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

Wenn Sie die Schreibrichtung Ihres Textes ändern, entweder für ganze Seiten oder für Teile von Seiten, und Linien verwenden, möchten Sie möglicherweise [Ihre Linien benennen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines), um zu vermeiden, dass das Layout vollständig die Richtung wechselt. In einigen Fällen, z.B. wenn ein Grid Text enthält, kann dieses Wechseln genau das sein, was Sie wollen. Für andere Zwecke jedoch möglicherweise nicht.

### Die seltsame Reihenfolge von Werten in der Eigenschaft `grid-area`

Mit der Eigenschaft {{cssxref("grid-area")}} können Sie alle vier Linien eines Grid-Bereichs als einen Wert angeben. Oft sind Anwender überrascht, dass die Reihenfolge der Werte nicht der Reihenfolge wie in der Kurznotation von {{cssxref("margin")}}, die im Uhrzeigersinn verläuft: oben, rechts, unten, links, entspricht.

Die Reihenfolge der Werte in `grid-area` ist:

- `grid-row-start`
- `grid-column-start`
- `grid-row-end`
- `grid-column-end`

Für Englisch, das von links nach rechts verläuft, bedeutet das:

- `oben`
- `links`
- `unten`
- `rechts`

Das ist gegen den Uhrzeigersinn! Es ist das Gegenteil von dem, was wir für Margins und Padding verwenden. Wenn wir jedoch bedenken, dass `grid-area` die Welt als "Block und Inline" sieht, werden wir feststellen, dass wir zuerst die beiden Startpunkte und dann die beiden Endpunkte setzen, was viel logischer ist, wenn man es versteht.

## Gemischte Schreibmodi und Grid-Layouts

Zusätzlich zur Darstellung von Dokumenten im richtigen Schreibmodus für die Sprache können Schreibmodi kreativ in Dokumenten verwendet werden, die ansonsten `ltr` verlaufen. In diesem Beispiel haben wir ein Grid-Layout mit einer Reihe von Links auf einer Seite. Wir verwenden Schreibmodi (`writing-mode: vertical-lr`), um diese in der Spalten-Spur auf die Seite zu drehen:

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

{{ EmbedLiveSample('Mixed_writing_modes_and_grid_layout', '500', '280') }}

## Physische Werte und logische Eigenschaften

Wenn Sie logische Grid-Eigenschaften mit physischen Eigenschaften kombinieren, denken Sie daran, dass physische Eigenschaften sich nicht gemäß dem Schreibmodus ändern. In unserem [Leitfaden zur Ausrichtung von Elementen in CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout) verwenden wir automatische Margins, um ein Element von anderen zu trennen, was physische Eigenschaften einsetzt. Es gibt logische Entsprechungen für die meisten physischen Eigenschaften, die Schreibmodi in ähnlicher Weise wie Grid-Platzierungs- und Ausrichtungs-Eigenschaften respektieren.

Ebenso können Sie bei der Verwendung von absoluter Positionierung innerhalb eines Grid-Bereichs logische {{Glossary("inset_properties", "inset-Eigenschaften")}} nutzen, um Elemente innerhalb des Grid-Bereichs zu positionieren. Wenn Sie logische und physische Eigenschaften oder Werte mischen, sollten Sie die Spannung zwischen ihnen berücksichtigen. Sie müssen beispielsweise Ihr CSS möglicherweise anpassen, um einen Wechsel von `ltr` zu `rtl` zu bewältigen. Ihr Verständnis von Block und Inline über das Grid wird Ihnen helfen, [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) besser zu verstehen.
