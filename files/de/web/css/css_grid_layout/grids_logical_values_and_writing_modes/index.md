---
title: Grids, logische Werte und Schreibmodi
slug: Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{CSSRef}}

In diesen Leitfäden habe ich bereits eine wichtige Funktion des Grid-Layouts angesprochen: die Unterstützung verschiedener Schreibmodi, die in der Spezifikation integriert ist. In diesem Leitfaden werden wir uns mit dieser Funktion von Grid und anderen modernen Layoutmethoden beschäftigen und dabei ein wenig über Schreibmodi sowie logische und physische Eigenschaften lernen.

## Logische und physische Eigenschaften und Werte

CSS ist voll von **physischen** Positionierungsschlüsselwörtern – links und rechts, oben und unten. Wenn wir ein Element mit absoluter Positionierung ausrichten, verwenden wir diese physischen Schlüsselwörter als Offset-Werte, um das Element zu verschieben. Im folgenden Codebeispiel wird das Element 20 Pixel vom oberen Rand und 30 Pixel vom linken Rand des Containers platziert:

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

Ein weiteres Beispiel, wo physische Schlüsselwörter verwendet werden, ist `text-align: right`, um Text rechts auszurichten. Es gibt auch physische **Eigenschaften** in CSS. Wir fügen Ränder, Abstände und Rahmen mit diesen physischen Eigenschaften wie {{cssxref("margin-left")}}, {{cssxref("padding-left")}} und so weiter hinzu.

Wir nennen diese Schlüsselwörter und Eigenschaften _physisch_, weil sie sich auf den Bildschirm beziehen, den Sie gerade betrachten. Links ist immer links, egal in welcher Richtung Ihr Text läuft.

### Probleme mit physischen Eigenschaften

Dies kann zu einem Problem werden, wenn Sie eine Website entwickeln, die in mehreren Sprachen funktionieren muss, einschließlich Sprachen, die Text von rechts statt von links beginnen. Browser sind ziemlich gut im Umgang mit Textausrichtungen, und Sie müssen nicht einmal in einer {{Glossary("rtl", "rtl")}} Sprache arbeiten, um dies zu überprüfen. Im folgenden Beispiel habe ich zwei Absätze. Der erste Absatz hat {{cssxref("text-align")}} auf `left` gesetzt, der zweite hat keine `text-align` Eigenschaft gesetzt. Ich habe `dir="rtl"` zum `html`-Element hinzugefügt, was den Schreibmodus vom Standard für ein englisches Dokument von `ltr` wechselt. Sie können sehen, dass der erste Absatz weiterhin von links nach rechts bleibt, da der `text-align` Wert auf `left` gesetzt ist. Der zweite jedoch wechselt die Richtung, und der Text läuft von rechts nach links.

```html hidden
<p class="left">
  I have my text set to <code>text-align: left</code> I will always align left
  even if the direction of the text in this document is rtl.
</p>

<p>I have no alignment set and use the direction set in the document.</p>
```

```css hidden
body {
  direction: rtl;
}

p {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  margin: 1em;
  color: #d9480f;
}

.left {
  text-align: left;
}
```

{{EmbedLiveSample("Probleme mit physischen Eigenschaften","",200)}}

Dies ist ein sehr einfaches Beispiel für das Problem mit physischen Werten und Eigenschaften, die in CSS verwendet werden. Sie verhindern, dass der Browser die Arbeit übernimmt, den Schreibmodus zu wechseln, da sie davon ausgehen, dass der Text von links nach rechts und von oben nach unten verläuft.

### Logische Eigenschaften und Werte

Logische Eigenschaften und Werte treffen keine Annahme über die Textrichtung. Deshalb verwenden wir im Grid-Layout das Schlüsselwort `start`, wenn etwas am Anfang des Containers ausgerichtet wird. Für mich, beim Arbeiten auf Englisch, könnte `start` tatsächlich links sein, muss es aber nicht, und das Wort `start` deutet keinen physischen Standort an.

## Block und Inline

Sobald wir beginnen, mit logischen statt physischen Eigenschaften zu arbeiten, hören wir auf, die Welt als von links nach rechts und von oben nach unten zu sehen. Wir benötigen einen neuen Bezugspunkt, und hier ist das Verständnis der _Block_- und _Inline_-Achsen nützlich, die wir zuvor im Leitfaden zur _Ausrichtung_ kennengelernt haben. Wenn Sie Layouts in Bezug auf Block und Inline betrachten können, macht es vieles im Grid-System logischer.

![Ein Bild zeigt die Standardrichtung der Block- und Inline-Achsen.](8-horizontal-tb.png)

## CSS-Schreibmodi

Ich möchte hier eine weitere Spezifikation vorstellen, die ich in meinen Beispielen verwenden werde: die CSS Writing Modes-Spezifikation. Diese Spezifikation beschreibt, wie wir diese verschiedenen Schreibmodi in CSS verwenden können, nicht nur zur Unterstützung von Sprachen, die einen anderen Schreibmodus als Englisch haben, sondern auch für kreative Zwecke. Ich werde die {{cssxref("writing-mode")}} Eigenschaft verwenden, um Änderungen am angewendeten Schreibmodus unseres Grids vorzunehmen, um zu demonstrieren, wie die logischen Werte funktionieren. Wenn Sie tiefer in Schreibmodi einsteigen möchten, empfehle ich Jen Simmons' ausgezeichneten Artikel über [CSS-Schreibmodi](https://24ways.org/2016/css-writing-modes/). Dieser geht tiefer in die Spezifikation, als wir es hier ansprechen.

### `writing-mode`

Schreibmodi sind mehr als nur links nach rechts und rechts nach links Text, und die `writing-mode`-Eigenschaft hilft uns, Text in andere Richtungen anzuzeigen. Die {{cssxref("writing-mode")}} Eigenschaft kann folgende Werte haben:

- `horizontal-tb`
- `vertical-rl`
- `vertical-lr`
- `sideways-rl`
- `sideways-lr`

Der Wert `horizontal-tb` ist der Standard für Text im Web. Es ist die Richtung, in der Sie diesen Leitfaden lesen. Die anderen Eigenschaften ändern die Art und Weise, wie Text in unserem Dokument fließt und entsprechen den verschiedenen Schreibmodi, die weltweit gefunden werden. Als einfaches Beispiel habe ich unten zwei Absätze. Der erste verwendet den Standard `horizontal-tb`, und der zweite verwendet `vertical-rl`. In diesem Modus läuft der Text immer noch von links nach rechts, jedoch ist die Richtung des Textes vertikal - der Inline-Text läuft jetzt die Seite hinunter, von oben nach unten.

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

## Schreibmodi in Rasterlayouts

Wenn wir jetzt ein Beispiel für ein Rasterlayout betrachten, können wir sehen, wie das Ändern des Schreibmodus bedeutet, dass sich unsere Vorstellung davon, wo die Block- und Inline-Achse liegen, ändert.

### Standard-Schreibmodus

Das Raster in diesem Beispiel hat drei Spalten und zwei Zeilen. Das bedeutet, dass es drei Spuren entlang der Blockachse gibt. Im Standard-Schreibmodus platziert das Raster Elemente automatisch, beginnend links oben, bewegt sich nach rechts und füllt die drei Zellen auf der Inline-Achse. Es bewegt sich dann zur nächsten Linie, erstellt eine neue Zeile und füllt weitere Elemente ein:

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

Wenn wir `writing-mode: vertical-lr` zum Raster-Container hinzufügen, können wir sehen, dass die Block- und Inline-Achse nun in eine andere Richtung verlaufen. Die Block- oder _Spalten_-Achse läuft jetzt über die Seite von links nach rechts, Inline läuft die Seite hinunter und erstellt Zeilen von oben nach unten.

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

{{ EmbedLiveSample('Setting_writing_mode', '500', '330') }}

## Logische Werte für die Ausrichtung

Mit der Block- und Inline-Achse, die die Richtung ändern kann, beginnen die logischen Werte für die Ausrichtungseigenschaften mehr Sinn zu ergeben.

Im nächsten Beispiel verwende ich die Ausrichtung, um Elemente innerhalb eines Rasters, das auf `writing-mode: vertical-lr` gesetzt ist, auszurichten. Die `start` und `end`-Eigenschaften funktionieren genau so, wie sie im Standard-Schreibmodus tun, und bleiben logisch in einer Weise, die das Verwenden von links und rechts, oben und unten zur Ausrichtung von Elementen nicht tun würde. Dies tritt auf, sobald wir das Raster auf die Seite stellen, wie hier:

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

Wenn Sie sehen möchten, wie diese funktionieren, mit einem Rechts-nach-links sowie einem Oben-nach-unten-Schreibmodus, ändern Sie `vertical-lr` in `vertical-rl`, was ein vertikaler Schreibmodus von rechts nach links ist.

## Automatische Platzierung und Schreibmodi

In dem bereits gezeigten Beispiel können Sie sehen, wie sich der Schreibmodus auf die Richtung ändert, in die sich Elemente auf dem Raster platzieren. Elemente platzieren sich standardmäßig entlang der Inline-Achse und bewegen sich dann in eine neue Zeile. Allerdings verläuft diese inline-Achse möglicherweise nicht immer von links nach rechts.

## Linienbasierte Platzierung und Schreibmodi

Das Wichtigste, an das Sie sich erinnern sollten, wenn Sie Elemente nach Liniennummer platzieren, ist, dass Linie 1 die Startlinie ist, egal in welchem Schreibmodus Sie sich befinden. Linie -1 ist die Endlinie, egal in welchem Schreibmodus Sie sich befinden.

### Linienbasierte Platzierung mit links-nach-rechts Text

Im nächsten Beispiel habe ich ein Raster, das in der Standardrichtung `ltr` ist. Ich habe drei Elemente mit linienbasierter Platzierung positioniert.

- Element 1 beginnt bei Spaltenlinie 1 und überspannt eine Spur.
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

### Linienbasierte Platzierung mit rechts-nach-links Text

Wenn ich nun die {{cssxref("direction")}} Eigenschaft mit einem Wert von `rtl` zum Raster-Container hinzufüge, wird Linie 1 zur rechten Seite des Rasters und Linie -1 zur linken.

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
  direction: rtl;
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

{{ EmbedLiveSample('Line-based_placement_with_right_to_left_text', '500', '240') }}

Dies zeigt, dass, wenn Sie die Richtung Ihres Textes ändern, sei es für ganze Seiten oder für Teile von Seiten, und Linien verwenden: Sie könnten Ihre Linien benennen, wenn Sie nicht möchten, dass sich das Layout vollständig in die entgegengesetzte Richtung ändert. Für einige Dinge, beispielsweise wenn ein Raster Textinhalt enthält, könnte dieser Wechsel genau das sein, was Sie wollen. Für andere Verwendungen möglicherweise nicht.

### Die seltsame Reihenfolge der Werte in der `grid-area` Eigenschaft

Sie können die {{cssxref("grid-area")}} Eigenschaft verwenden, um alle vier Linien eines Rasterbereichs als einen Wert anzugeben. Wenn Menschen dies zum ersten Mal sehen, sind sie oft überrascht, dass die Werte nicht in derselben Reihenfolge wie die Kurzschreibweise für Ränder sind – die im Uhrzeigersinn verläuft: oben, rechts, unten, links.

Die Reihenfolge der `grid-area` Werte ist:

- `grid-row-start`
- `grid-column-start`
- `grid-row-end`
- `grid-column-end`

Was für Englisch, in links-nach-rechts bedeutet, die Reihenfolge ist:

- `top`
- `left`
- `bottom`
- `right`

Das ist gegen den Uhrzeigersinn! Also das Gegenteil von dem, was wir für Ränder und Abstände tun. Sobald Sie erkennen, dass `grid-area` die Welt als "Block und Inline" sieht, können Sie sich merken, dass wir zuerst die zwei Start- und dann die zwei Endwerte setzen. Es wird viel logischer, sobald Sie das wissen!

## Gemischte Schreibmodi und Rasterlayout

Zusätzlich zur Anzeige von Dokumenten mit dem richtigen Schreibmodus für die Sprache können Schreibmodi kreativ in Dokumenten verwendet werden, die ansonsten `ltr` sind. Im nächsten Beispiel habe ich ein Rasterlayout mit einem Satz von Links auf einer Seite. Ich habe Schreibmodi verwendet, um diese in der Spurenlinie auf die Seite zu drehen:

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
.wrapper nav {
  writing-mode: vertical-lr;
}
.wrapper ul {
  list-style: none;
  margin: 0;
  padding: 1em;
  display: flex;
  justify-content: space-between;
}
.wrapper a {
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

## Physische Werte und Rasterlayout

Wir begegnen physischen Eigenschaften häufig beim Erstellen von Websites, und während die Rasterplatzierungs- und Ausrichtungseigenschaften und -werte Schreibmodi respektieren, gibt es Dinge, die Sie mit Raster tun könnten, die Sie zwingen, physische Eigenschaften und Werte zu verwenden. Im Leitfaden zu [Box-Ausrichtung und Raster](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout) habe ich gezeigt, wie automatische Ränder in einem Rasterbereich funktionieren. Das Verwenden eines automatischen Randes, um ein Element von den anderen wegzuschieben, ist auch ein häufiger Flexbox-Trick. Allerdings bindet dies auch das Layout an den physischen Raum.

Wenn Sie eine absolute Positionierung innerhalb eines Rasterbereichs verwenden, verwenden Sie erneut physische Offsets, um das Element innerhalb des Rasterbereichs zu verschieben. Das Wichtigste, dessen Sie sich bewusst sein sollten, ist die Spannung zwischen physischen und logischen Eigenschaften und Werten. Seien Sie sich beispielsweise bewusst, dass Sie möglicherweise Änderungen an Ihrem CSS vornehmen müssen, um mit einem Wechsel von `ltr` zu `rtl` umzugehen.

### Logische Eigenschaften für alles!

Unsere neuen Layoutmethoden geben uns die Möglichkeit, diese logischen Werte zu verwenden, um Elemente zu platzieren. Sobald wir jedoch beginnen, sie mit den physischen Eigenschaften zu kombinieren, die für Ränder und Abstände verwendet werden, müssen wir uns daran erinnern, dass sich diese physischen Eigenschaften nicht entsprechend des Schreibmodus ändern.

Die [CSS Logical Properties-Spezifikation](https://drafts.csswg.org/css-logical/) bedeutet, dass Sie die [logischen Äquivalente](/de/docs/Web/CSS/CSS_logical_properties_and_values) für Eigenschaften wie {{cssxref("margin-left")}} und {{cssxref("margin-right")}} in Ihrem CSS verwenden können. Diese Eigenschaften und Werte haben eine gute Unterstützung in modernen Browsern. Ihr Verständnis von Block und Inline durch Raster wird Ihnen helfen zu verstehen, wie Sie auch diese verwenden können.
