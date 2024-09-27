---
title: Grids, logische Werte und Schreibmodi
slug: Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{CSSRef}}

In diesen Leitfäden habe ich bereits ein wichtiges Merkmal des Grid-Layouts angesprochen: die Unterstützung für unterschiedliche Schreibmodi, die in die Spezifikation eingebaut ist. In diesem Leitfaden werden wir uns dieses Merkmal von Grid und anderen modernen Layoutmethoden genauer ansehen und dabei ein wenig über Schreibmodi und logische vs. physische Eigenschaften lernen.

## Logische und physische Eigenschaften und Werte

CSS ist voller **physischer** Positionierungsschlüsselwörter – links und rechts, oben und unten. Wenn wir ein Element mit absoluter Positionierung platzieren, verwenden wir diese physischen Schlüsselwörter als Offset-Werte, um das Element zu verschieben. Im folgenden Code-Snippet wird das Element 20 Pixel vom oberen und 30 Pixel von der linken Seite des Containers platziert:

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

Ein weiteres Beispiel für die Verwendung physischer Schlüsselwörter ist `text-align: right`, um Text nach rechts auszurichten. Zudem gibt es physische **Eigenschaften** in CSS. Wir fügen Ränder, Abstände und Rahmen mit diesen physischen Eigenschaften wie {{cssxref("margin-left")}}, {{cssxref("padding-left")}} usw. hinzu.

Wir nennen diese Schlüsselwörter und Eigenschaften _physisch_, weil sie sich auf den Bildschirm beziehen, den Sie betrachten. Links ist immer links, egal in welche Richtung Ihr Text verläuft.

### Probleme mit physischen Eigenschaften

Dies kann ein Problem darstellen, wenn eine Website in mehreren Sprachen funktionieren muss, einschließlich Sprachen, die textlich von rechts beginnen statt von links. Browser sind ziemlich gut darin, mit Textausrichtungen umzugehen, und man muss nicht einmal in einer [rtl](/de/docs/Glossary/rtl)-Sprache arbeiten, um sich das anzusehen. Im folgenden Beispiel habe ich zwei Absätze. Der erste Absatz hat {{cssxref("text-align")}} auf `left` gesetzt, der zweite hat keine `text-align` Eigenschaft. Ich habe `dir="rtl"` zum `html`-Element hinzugefügt, was den Schreibmodus vom Standard-`ltr` für ein englischsprachiges Dokument umschaltet. Sie sehen, dass der erste Absatz aufgrund des `text-align`-Werts `left` von links nach rechts bleibt. Der zweite wechselt jedoch die Richtung, und der Text läuft von rechts nach links.

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

{{EmbedLiveSample("Issues with physical properties","",200)}}

Dies ist ein sehr einfaches Beispiel für das Problem mit physischen Werten und Eigenschaften, die in CSS verwendet werden. Sie verhindern, dass der Browser den Schreibmodus wechseln kann, da sie davon ausgehen, dass der Text von links nach rechts und von oben nach unten fließt.

### Logische Eigenschaften und Werte

Logische Eigenschaften und Werte nehmen keine Annahmen über die Textausrichtung vor. Deshalb verwenden wir im Grid-Layout das Schlüsselwort `start`, wenn wir etwas am Anfang des Containers ausrichten. Für mich, der in Englisch arbeitet, kann `start` durchaus links sein, muss es jedoch nicht, und das Wort `start` hat keinen physischen Ort.

## Block und Inline

Sobald wir mit logischen statt physischen Eigenschaften arbeiten, hören wir auf, die Welt als links nach rechts und oben nach unten zu sehen. Wir brauchen einen neuen Bezugspunkt, und hier wird das Verständnis der _Block-_ und _Inline-_ Achsen, die wir zuvor im Leitfaden zur _Ausrichtung_ kennengelernt haben, sehr nützlich. Wenn Sie anfangen, Layouts in Bezug auf Block und Inline zu sehen, wird vieles, was im Grid funktioniert, viel verständlicher.

![Ein Bild, das die Standardrichtung der Block- und Inline-Achsen zeigt.](8-horizontal-tb.png)

## CSS-Schreibmodi

Hier werde ich eine weitere Spezifikation vorstellen, die ich in meinen Beispielen verwenden werde: die Spezifikation der CSS-Schreibmodi. Diese Spezifikation beschreibt, wie wir diese unterschiedlichen Schreibmodi in CSS verwenden können, nicht nur zur Unterstützung von Sprachen, die einen anderen Schreibmodus als Englisch haben, sondern auch für kreative Zwecke. Ich werde die Eigenschaft {{cssxref("writing-mode")}} verwenden, um Änderungen am Schreibmodus unserer Grid anzuwenden, um zu demonstrieren, wie die logischen Werte funktionieren. Wenn Sie sich tiefer mit Schreibmodi befassen möchten, empfehle ich Ihnen, den hervorragenden Artikel von Jen Simmons über [CSS-Schreibmodi](https://24ways.org/2016/css-writing-modes/) zu lesen. Dieser geht tiefer in diese Spezifikation ein, als wir hier behandeln werden.

### `writing-mode`

Schreibmodi sind mehr als nur von links nach rechts und von rechts nach links, und die Eigenschaft `writing-mode` hilft uns dabei, Text in anderen Richtungen anzuzeigen. Die Eigenschaft {{cssxref("writing-mode")}} kann folgende Werte haben:

- `horizontal-tb`
- `vertical-rl`
- `vertical-lr`
- `sideways-rl`
- `sideways-lr`

Der Wert `horizontal-tb` ist der Standard für Text im Web. Er ist die Richtung, in der Sie diesen Leitfaden lesen. Die anderen Eigenschaften ändern die Flussrichtung des Textes in unserem Dokument und passen sich den verschiedenen weltweit verwendeten Schreibmodi an. Als einfaches Beispiel habe ich unten zwei Absätze. Der erste verwendet den Standard `horizontal-tb`, und der zweite `vertical-rl`. Im Modus läuft der Text immer noch von links nach rechts, jedoch ist die Richtung des Textes vertikal - Inline-Text läuft nun die Seite herunter, von oben nach unten.

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

Wenn wir uns nun ein Beispiel für ein Grid-Layout ansehen, können wir sehen, wie das Ändern des Schreibmodus bedeutet, dass wir unsere Vorstellung von der Block- und Inline-Achse ändern.

### Standard-Schreibmodus

Das Grid in diesem Beispiel hat drei Spalten und zwei Reihen. Das bedeutet, dass es drei Tracks gibt, die entlang der Blockachse verlaufen. Im Standard-Schreibmodus platziert das Grid automatisch Elemente, beginnend oben links und sich nach rechts bewegend, füllt die drei Zellen auf der Inline-Achse aus. Es bewegt sich dann zur nächsten Zeile, erstellt einen neuen Track und füllt weitere Elemente ein:

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

### Einstellen des Schreibmodus

Wenn wir `writing-mode: vertical-lr` zum Grid-Container hinzufügen, können wir sehen, dass die Block- und Inline-Achse nun in eine andere Richtung verläuft. Die Block- oder _Spalten_-Achse verläuft nun von links nach rechts über die Seite, Inline verläuft die Seite hinunter und erstellt Zeilen von oben nach unten.

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

## Logische Werte zur Ausrichtung

Da die Block- und Inline-Achse ihre Richtung ändern können, machen die logischen Werte für die Ausrichtungseigenschaften mehr Sinn.

Im nächsten Beispiel nutze ich die Ausrichtung, um Elemente innerhalb eines Grids auszurichten, das auf `writing-mode: vertical-lr` gesetzt ist. Die Eigenschaften `start` und `end` funktionieren genau so wie im Standard-Schreibmodus und bleiben logisch in einer Weise, die links und rechts, oben und unten verwenden nicht tun würden. Dies geschieht, sobald wir das Grid auf die Seite drehen, wie hier:

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

Wenn Sie sehen möchten, wie diese mit einem Rechts-nach-Links- sowie einem Oben-nach-Unten-Schreibmodus funktionieren, ändern Sie `vertical-lr` auf `vertical-rl`, welcher ein vertikaler Schreibmodus ist, der von rechts nach links verläuft.

## Automatische Platzierung und Schreibmodi

Im bereits gezeigten Beispiel können Sie sehen, wie der Schreibmodus die Richtung ändert, in der sich die Elemente im Grid platzieren. Standardmäßig platzieren sich die Elemente entlang der Inline-Achse und wechseln dann in eine neue Zeile. Diese Inline-Achse verläuft jedoch möglicherweise nicht immer von links nach rechts.

## Linienbasierte Platzierung und Schreibmodi

Der entscheidende Punkt bei der positionsbasierten Platzierung ist, dass Linie 1 die Startlinie ist, unabhängig davon, in welchem Schreibmodus Sie sich befinden. Linie -1 ist die Endlinie, egal in welchem Schreibmodus Sie sich befinden.

### Linienbasierte Platzierung mit links nach rechts Text

Im nächsten Beispiel habe ich ein Grid, das sich in der Standardrichtung `ltr` befindet. Ich habe drei Elemente mithilfe der linienbasierten Platzierung positioniert.

- Element 1 beginnt bei Liniennummer 1 der Spalte und erstreckt sich über einen Track.
- Element 2 beginnt bei Liniennummer -1 der Spalte und erstreckt sich bis -3.
- Element 3 beginnt bei Liniennummer 1 der Spalte und erstreckt sich bis Liniennummer 3 der Spalte.

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

### Linienbasierte Platzierung mit rechts nach links Text

Wenn ich nun die {{cssxref("direction")}} Eigenschaft mit dem Wert `rtl` zum Grid-Container hinzufüge, wird Linie 1 zur rechten Seite des Grids und Linie -1 zur linken Seite.

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

Dies zeigt, dass wenn Sie die Richtung Ihres Textes wechseln, entweder für ganze Seiten oder für Teile davon, und Linien verwenden: Sie Ihre Linien benennen möchten, falls Sie nicht möchten, dass sich das Layout vollständig umkehrt. Bei einigen Dingen, z.B. wenn ein Grid Textinhalte enthält, kann genau dieses Umschalten gewünscht sein. Bei anderer Nutzung möglicherweise nicht.

### Die eigenartige Reihenfolge der Werte in der `grid-area` Eigenschaft

Sie können die {{cssxref("grid-area")}} Eigenschaft verwenden, um alle vier Linien eines Grid-Bereichs als einen Wert anzugeben. Viele sind überrascht, dass die Reihenfolge der Werte nicht der gleichen Reihenfolge wie im Shorthand für Ränder – der im Uhrzeigersinn verläuft: oben, rechts, unten, links – folgt.

Die Reihenfolge der `grid-area` Werte ist:

- `grid-row-start`
- `grid-column-start`
- `grid-row-end`
- `grid-column-end`

Was für Englisch, in Links-nach-Rechts bedeutet, dass die Reihenfolge ist:

- `oben`
- `links`
- `unten`
- `rechts`

Das ist gegen den Uhrzeigersinn! Also das Gegenteil dessen, was wir für Ränder und Abstände tun. Sobald Sie realisieren, dass `grid-area` die Welt als "Block und Inline" sieht, können Sie sich merken, dass wir die beiden Starts festlegen, dann die beiden Enden. Es wird viel logischer, wenn Sie das wissen!

## Gemischte Schreibmodi und Grid-Layout

Zusätzlich zur Anzeige von Dokumenten, die den richtigen Schreibmodus für die Sprache verwenden, können Schreibmodi kreativ innerhalb von eigentlich `ltr`-Dokumenten verwendet werden. Im nächsten Beispiel habe ich ein Grid-Layout mit einer Reihe von Links an einer Seite. Ich habe Schreibmodi verwendet, um diese in der Spalte auf die Seite zu drehen:

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

## Physische Werte und Grid-Layout

Wir begegnen häufig physischen Eigenschaften beim Erstellen von Websites, und obwohl die Platzierungs- und Ausrichtungseigenschaften und -werte im Grid die Schreibmodi respektieren, gibt es Dinge, die Sie mit Grid tun möchten, die Sie zwingen, physische Eigenschaften und Werte zu verwenden. Im Leitfaden zu [Box-Ausrichtung und Grids](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout) habe ich gezeigt, wie Auto-Abstände in einem Grid-Bereich funktionieren. Die Verwendung eines Auto-Abstands, um ein Element von den anderen wegzuschieben, ist auch ein häufiges Flexbox-Trick, bindet das Layout jedoch an den physischen Raum.

Wenn Sie absolute Positionierung innerhalb eines Grid-Bereichs verwenden, verwenden Sie wieder physische Offsets, um das Element im Grid-Bereich zu verschieben. Wichtig ist, sich der Spannung zwischen physischen und logischen Eigenschaften und Werten bewusst zu sein. Beispielsweise sollten Sie beachten, dass Sie möglicherweise Änderungen an Ihrem CSS vornehmen müssen, um mit einem Wechsel von `ltr` zu `rtl` umzugehen.

### Logische Eigenschaften für alles!

Unsere neuen Layoutmethoden geben uns die Möglichkeit, diese logischen Werte zur Platzierung von Elementen zu verwenden, aber sobald wir beginnen sie mit den physischen Eigenschaften zu kombinieren, die für Abstände und Polsterungen verwendet werden, müssen wir bedenken, dass diese physischen Eigenschaften sich nicht nach dem Schreibmodus ändern.

Die [CSS Logical Properties Specification](https://drafts.csswg.org/css-logical/) ermöglicht es Ihnen, die [logischen Entsprechungen](/de/docs/Web/CSS/CSS_logical_properties_and_values) für Eigenschaften wie {{cssxref("margin-left")}} und {{cssxref("margin-right")}} in Ihrem CSS zu verwenden. Diese Eigenschaften und Werte werden in modernen Browsern gut unterstützt. Ihr Verständnis von Block und Inline durch Grid wird Ihnen helfen, zu verstehen, wie auch diese zu verwenden sind.
