---
title: Raster, logische Werte und Schreibrichtungen
short-title: Logische Werte und Schreibrichtungen
slug: Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Eine der wichtigsten Funktionen von CSS-Grid-Layout ist die Unterstützung für verschiedene Schreibrichtungen, die in die Spezifikation integriert ist. In diesem Leitfaden betrachten wir diese Funktion des CSS-Grid-Layouts und anderer moderner Layout-Methoden und lernen dabei ein wenig über Schreibrichtungen sowie logische vs. physische Eigenschaften.

## Logische und physische Eigenschaften und Werte

CSS ist voll von **physischen** Positionseigenschaften und Schlüsselwörtern – `left` und `right`, `top` und `bottom`. Im folgenden Code-Schnipsel positionieren wir ein Element mit absoluter Positionierung und verwenden die physischen {{Glossary("inset_properties", "inset-Eigenschaften")}} als Versatzwerte, um das Element herumzuschieben. Das Element wird 20 Pixel vom oberen und 30 Pixel vom linken Rand des Containers platziert:

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

Dieses Beispiel verwendet die {{cssxref("left")}} und {{cssxref("right")}} Eigenschaften; dies sind nur zwei der vielen **{{Glossary("physical_properties", "physischen Eigenschaften")}}** in CSS. Wir können auch Ränder, Abstände und Rahmen mit physischen Eigenschaften hinzufügen, zum Beispiel {{cssxref("margin-left")}} und {{cssxref("padding-left")}}. Sie könnten auch physische Schlüsselwörter in Verwendung sehen, wie zum Beispiel bei `text-align: right`, um Text rechts auszurichten.

Diese Schlüsselwörter und Eigenschaften nennen wir _physisch_, weil sie sich auf den Bildschirm beziehen, den Sie gerade betrachten. Links ist immer links, unabhängig davon, in welche Richtung Ihr Text läuft.

### Probleme mit physischen Eigenschaften

Physische Eigenschaften können Probleme verursachen, wenn eine Website in mehreren Sprachen funktionieren muss, einschließlich Sprachen, bei denen der Text von rechts nach links oder von oben nach unten fließt. Browser sind dafür ausgelegt, Inhalte unabhängig von der Sprache korrekt anzuzeigen. Einige CSS-Funktionen können Browsereinstellungen überschreiben und dazu führen, dass Inhalte weniger optimal angezeigt werden.

In diesem Beispiel wurde die {{cssxref("direction")}} Eigenschaft auf {{Glossary("rtl", "rtl")}} gesetzt, was den Schreibrichtungsmodus vom Standardmodus eines englischsprachigen Dokuments `ltr` wechselt. Wir haben zwei Absätze. Diese sollten beide von rechts nach links fließen, aufgrund des `direction`-Werts, der auf einem übergeordneten Element (`<body>`) gesetzt ist. Der erste Absatz hat {{cssxref("text-align")}} auf `left` gesetzt, sodass er sich am linken Rand seines Containers ausrichtet. Der zweite Absatz richtet sich rechts aus und fließt von rechts nach links.

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

{{EmbedLiveSample("Probleme mit physischen Eigenschaften", "", 170)}}

Dies ist eine grundlegende Demonstration der Probleme, die entstehen können, wenn physische Werte und Eigenschaften in CSS verwendet werden. Wenn wir CSS mit physischen Eigenschaften und Schlüsselwörtern schreiben, teilen wir dem Browser unsere Annahme mit, wie der Text fließen soll, und verhindern, dass er alternative Schreibrichtungen handelt.

### Logische Eigenschaften und Werte

**{{Glossary("Logical_properties", "Logische Eigenschaften")}} und Werte** nehmen keine Textrichtung an. Deshalb verwenden wir das Schlüsselwort `start` im CSS-Grid-Layout, um etwas am Anfang eines Containers auszurichten. Wenn man mit englischen Inhalten arbeitet, ist `start` links, jedoch muss es das nicht sein. Das Wort `start` impliziert keinen physischen Ort, was es Websites ermöglicht, den Inhalt rechts zu starten, wenn Sprachen wie Arabisch verwendet werden.

## Block und Inline

Wenn wir logische anstelle von physischen Eigenschaften verwenden, sehen wir die Welt nicht als von links nach rechts und oben nach unten. Wir haben einen anderen Referenzpunkt. Hier wird das Verständnis der _block_ und _inline_ Achsen, eingeführt im [Leitfaden zur Rastersausrichtung](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout), sehr nützlich. Wenn Sie über Layout im Hinblick auf Block und Inline nachdenken, macht die Funktionsweise im CSS-Grid-Layout viel Sinn.

![Ein Bild, das die Standardrichtung der Block- und Inline-Achsen zeigt.](8-horizontal-tb.png)

## CSS-Schreibrichtungen

Das Modul [CSS-Schreibrichtungen](/de/docs/Web/CSS/CSS_writing_modes) spezifiziert, wie Schreibrichtungen in CSS funktionieren. Diese Funktionen sind nicht nur für die Unterstützung von Sprachen mit einer anderen Schreibrichtung als Englisch, sondern können auch für kreative Zwecke genutzt werden. Die Beispiele in diesem Abschnitt verwenden die Eigenschaft {{cssxref("writing-mode")}}, um Änderungen an der angewandten Schreibrichtung auf unser Raster vorzunehmen und dabei zu zeigen, wie logische Werte funktionieren.

### `writing-mode`

Schreibrichtungen sind mehr als nur von links nach rechts und rechts nach links und die Eigenschaft `writing-mode` hilft uns, Text in andere Richtungen laufen zu lassen. Die Eigenschaft {{cssxref("writing-mode")}} kann die Werte haben:

- `horizontal-tb`
- `vertical-rl`
- `vertical-lr`
- `sideways-rl`
- `sideways-lr`

Der Wert `horizontal-tb`, der für „horizontal, von oben nach unten“ steht, ist der Standardwert für Text im Web. Es ist die Richtung, in der Sie diesen Leitfaden lesen. Die anderen Werte ändern die Art, wie Text in unserem Dokument fließt, und entsprechen den unterschiedlichen Schreibrichtungen, die weltweit zu finden sind.

Zum Beispiel haben wir unten zwei Absätze. Der erste verwendet den Standardwert `horizontal-tb`, und der zweite verwendet `vertical-rl`. In der zweiten Schreibrichtung läuft der Text immer noch von links nach rechts, jedoch ist die Richtung des Textes vertikal — Inline-Text läuft jetzt die Seite hinunter, von oben nach unten.

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

## Schreibrichtungen in Rasterlayouts

Wenn wir dies auf ein Rasterlayout-Beispiel anwenden, können wir sehen, wie das Ändern der Schreibrichtung bedeutet, dass sich unsere Vorstellung von der Position der Block- und Inline-Achsen ändert.

### Standard-Schreibrichtung

In diesem Beispiel hat das Raster drei Spalten und zwei Zeilen. Das bedeutet, dass es drei Regionen entlang der Block-Achse gibt. Im Standard-Schreibrichtungsmodus platziert das Raster Elemente automatisch, beginnend oben links, und bewegt sich nach rechts, um die drei Zellen auf der Inline-Achse zu füllen. Es bewegt sich dann zur nächsten Zeile, erzeugt eine neue Zeilenregion und füllt weitere Elemente ein:

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

### Schreibrichtung festlegen

Wenn wir dem Rastercontainer im vorherigen Beispiel `writing-mode: vertical-lr` hinzufügen, sehen wir, dass die Block- und Inline-Achsen nun in eine andere Richtung verlaufen. Die Block- oder _Spalten_-Achse verläuft jetzt von links nach rechts über die Seite, während die Inline-Achse die Seite hinunter verläuft und Zeilen von oben nach unten erzeugt.

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

{{ EmbedLiveSample('Schreibrichtung festlegen', '500', '330') }}

## Logische Werte für Ausrichtung

Da sich die Block- und Inline-Achse ändern können, beginnen die logischen Werte für die Ausrichtungseigenschaften mehr Sinn zu machen.

In diesem Beispiel verwenden wir die Ausrichtung (die Eigenschaften {{cssxref("align-self")}} und {{cssxref("justify-self")}}), um Elemente innerhalb eines Rasters auszurichten, das auf `writing-mode: vertical-lr` eingestellt ist. Die Eigenschaften `start` und `end` funktionieren genau so, wie sie es im Standard-Schreibrichtungsmodus tun, und bleiben logisch, in einer Weise, die die Verwendung von links und rechts, oben und unten zur Ausrichtung von Elementen nicht tun würde, sobald wir das Raster auf die Seite kippten, so wie hier:

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

{{ EmbedLiveSample('Logische Werte für Ausrichtung', '500', '280') }}

Wenn Sie sehen wollen, wie diese mit einer von rechts nach links sowie von oben nach unten Schreibrichtung funktionieren, ändern Sie `vertical-lr` in `vertical-rl`, was ein vertikaler Schreibrichtungsmodus ist, der von rechts nach links läuft.

## Automatische Platzierung und Schreibrichtungen

Wie wir in den vorherigen Beispielen gesehen haben, kann der Schreibrichtungsmodus die visuelle Richtung ändern, in die sich Elemente auf das Raster platzieren. Elemente platzieren sich standardmäßig entlang der Inline-Achse und fügen neue Zeilen in Blockrichtung hinzu. Wir haben jetzt gesehen, dass die Inline-Achse nicht immer von links nach rechts läuft und die Blockachse nicht immer von oben nach unten läuft.

## Linienbasierte Platzierung und Schreibrichtungen

Das Wichtigste, an das Sie sich erinnern sollten, wenn Sie Elemente nach Liniennummer platzieren, ist, dass Linie 1 die Startlinie und Linie -1 die Endlinie ist, unabhängig davon, in welchem Schreibrichtungsmodus Sie sich befinden.

### Linienbasierte Platzierung mit links-nach-rechts-Text

In diesem Beispiel haben wir ein Raster, das im Standard `ltr` Modus angeordnet ist, mit drei Elementen, die mit linienbasierter Platzierung positioniert sind.

- Element 1 beginnt an der Spaltenlinie 1 und erstreckt sich über eine Region.
- Element 2 beginnt an der Spaltenlinie -1 und erstreckt sich bis -3.
- Element 3 beginnt an der Spaltenlinie 1 und erstreckt sich bis zur Spaltenlinie 3.

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

{{ EmbedLiveSample('Linienbasierte Platzierung mit links-nach-rechts-Text', '500', '240') }}

### Linienbasierte Platzierung mit rechts-nach-links-Text

Wenn wir die Eigenschaft {{cssxref("direction")}} mit einem Wert von `rtl` dem Rastercontainer im vorherigen Beispiel hinzufügen, wird Linie 1 auf der rechten Seite des Rasters platziert und Linie -1 auf der linken Seite.

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

{{ EmbedLiveSample('Linienbasierte Platzierung mit rechts-nach-links-Text', '500', '240') }}

Wenn Sie die Richtung Ihres Textes umschalten, sei es für ganze Seiten oder Teile von Seiten, und Linien verwenden, möchten Sie vielleicht [Ihre Linien benennen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines), um zu vermeiden, dass das Layout die Richtung komplett umschaltet. Für einige Dinge, zum Beispiel, wenn ein Raster Textinhalt enthält, könnte dieser Wechsel genau das sein, was Sie wünschen. Für andere Anwendungen möglicherweise nicht.

### Die seltsame Reihenfolge der Werte in der `grid-area` Eigenschaft

Sie können die {{cssxref("grid-area")}} Eigenschaft verwenden, um alle vier Linien eines Rasterbereichs als einen Wert anzugeben. Wenn Menschen dies zum ersten Mal sehen, sind sie oft überrascht, dass die Werte nicht der gleichen Reihenfolge wie die Kurzschreibweise für {{cssxref("margin")}} folgen – die im Uhrzeigersinn läuft: oben, rechts, unten, links.

Die Reihenfolge der `grid-area` Werte lautet:

- `grid-row-start`
- `grid-column-start`
- `grid-row-end`
- `grid-column-end`

Das bedeutet für Englisch, in links-nach-rechts, die Reihenfolge ist:

- `oben`
- `links`
- `unten`
- `rechts`

Das ist gegen den Uhrzeigersinn! Es ist das Gegenteil von dem, was wir für Ränder und Abstände tun. Wenn wir uns daran erinnern, dass `grid-area` die Welt als "Block und Inline" sieht, werden Sie bemerken, dass wir die beiden Anfänge festlegen, dann die beiden Enden, was viel logischer ist, sobald Sie Bescheid wissen!

## Gemischte Schreibrichtungen und Rasterlayout

Zusätzlich zur Anzeige von Dokumenten in der korrekten Schreibrichtung für die Sprache können Schreibrichtungen kreativ in Dokumenten verwendet werden, die ansonsten `ltr` sind. In diesem Beispiel haben wir ein Rasterlayout mit einem Satz von Links auf einer Seite. Wir verwenden Schreibrichtungen (`writing-mode: vertical-lr`), um diese auf die Seite im Spaltenbereich zu drehen:

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

Wenn Sie logische Rastereigenschaften mit physischen Eigenschaften kombinieren, denken Sie daran, dass physische Eigenschaften sich nicht entsprechend der Schreibrichtung ändern. In unserem [Leitfaden zum Ausrichten von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout) verwenden wir automatische Ränder, um ein Element von den anderen wegzuschieben; dies verwendet physische Eigenschaften. Es gibt logische Eigenschaftsäquivalente für die meisten physischen Eigenschaften, die Schreibrichtungen respektieren, genau wie die Platzierungs- und Ausrichtungseigenschaften und -werte im Raster.

Ähnlich, wenn sie absolute Positionierung innerhalb eines Rasterbereichs verwenden, können Sie logische {{Glossary("inset_properties", "inset-Eigenschaften")}} nutzen, um Elemente innerhalb des Rasterbereichs zu platzieren. Wenn Sie logische und physische Eigenschaften oder Werte mischen, seien Sie sich der Spannung zwischen ihnen bewusst. Zum Beispiel könnten Sie Ihr CSS ändern müssen, um mit einem Wechsel von `ltr` zu `rtl` umzugehen. Ihr Verständnis von Block und Inline durch das Raster wird Ihnen helfen, die [CSS-logischen Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) zu verstehen.
