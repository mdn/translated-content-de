---
title: Grid-Layout mit linienbasierter Platzierung
short-title: Verwendung der linienbasierten Platzierung
slug: Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Im [Leitfaden zu den grundlegenden Konzepten des Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts) haben wir einen kurzen Blick auf die Positionierung von Elementen in einem Raster mit Liniennummern geworfen. In diesem Leitfaden werden wir vollständig erkunden, wie dieses grundlegende Merkmal der Spezifikation funktioniert.

Die Erkundung des Grids mit nummerierten Linien zu beginnen, ist der logischste Ausgangspunkt, weil Sie bei der Verwendung von Grid-Layout immer nummerierte Linien haben. Die Linien sind für Spalten und Zeilen nummeriert und werden ab `1` indiziert. Beachten Sie, dass das Grid entsprechend dem Schreibmodus des Dokuments indiziert ist. In einer Sprache, die von links nach rechts verläuft, wie Englisch, befindet sich Linie 1 auf der linken Seite des Grids. Wenn Sie in einer von rechts nach links verlaufenden Sprache arbeiten, wie Arabisch, befindet sich Linie 1 auf der rechten Seite des Grids. Wir werden im [Leitfaden zu Grids, logischen Werten und Schreibmodi](/de/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes) mehr über die Interaktion zwischen Schreibmodi und Grids lernen.

## Ein einfaches Beispiel

Als einfaches Beispiel erstellen wir ein Grid mit 3 Spalten-Tracks und 3 Zeilen-Tracks. Dies ergibt 4 Linien in jeder Dimension.

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
  grid-template-rows: repeat(3, 100px);
}
```

Innerhalb unseres Grid-Containers fügen wir vier Kind-Elemente ein.

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

{{ EmbedLiveSample('A_basic_example', '300', '330') }}

Wenn wir diese nicht irgendwie auf dem Grid platzieren, werden sie gemäß den Auto-Platzierungsregeln angeordnet, jeweils ein Element in den ersten vier Zellen. Sie können das Grid mit den Entwickler-Tools Ihres Browsers inspizieren, um zu sehen, wie das Grid Spalten und Zeilen definiert.

![Das Beispiel-Grid, hervorgehoben in den DevTools](highlighted_grid.png)

## Platzieren von Elementen mittels Liniennummer

Wir können die linienbasierte Platzierung verwenden, um zu steuern, wo diese Elemente im Grid sitzen. Wir können die Eigenschaften {{cssxref("grid-column-start")}} und {{cssxref("grid-column-end")}} verwenden, um das erste Element ganz links im Grid beginnen zu lassen und über einen einzigen Spalten-Track zu spannen. Mit {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}} machen wir, dass das Element an der ersten Zeilenlinie oben im Grid beginnt und sich bis zur vierten Zeilenlinie erstreckt.

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
}
```

Während Sie einige Elemente positionieren, werden andere Elemente im Grid weiterhin gemäß den Auto-Platzierungsregeln angeordnet. Dieses Verhalten wird im [Autoplatzierung im Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Auto-placement) Leitfaden erklärt. Beobachten Sie vorerst, wie das Grid nicht platzierte Elemente in leere Zellen des Grids anordnet.

Indem wir jedes Element individuell mit denselben Eigenschaften, aber unterschiedlichen Werten ansprechen, platzieren wir alle vier Elemente und spannen auf Zeilen- und Spuren-Tracks.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
}
.box2 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}
.box3 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
.box4 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
}
```

{{ EmbedLiveSample('Positioning_items_by_line_number', '300', '330') }}

Beachten Sie, dass wir Zellen leer lassen können, wenn wir möchten. Ein sehr schöner Aspekt des Grid-Layouts ist die Möglichkeit, Leerraum in unseren Designs ohne Tricks zu haben.

## Die Kurzformen `grid-column` und `grid-row`

Das vorherige Beispiel hatte ziemlich viel Code, um jedes Element zu positionieren. Es wird Sie nicht überraschen zu erfahren, dass es eine [Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) gibt. Die Eigenschaften {{cssxref("grid-column-start")}} und {{cssxref("grid-column-end")}} können in {{cssxref("grid-column")}}, und {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}} in {{cssxref("grid-row")}} kombiniert werden. In diesem Beispiel replizieren wir das obige Beispiel unter Verwendung dieser Kurzformen:

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-column: 1 / 2;
  grid-row: 1 / 4;
}
.box2 {
  grid-column: 3 / 4;
  grid-row: 1 / 3;
}
.box3 {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}
.box4 {
  grid-column: 2 / 4;
  grid-row: 3 / 4;
}
```

{{ EmbedLiveSample('The_grid-column_and_grid-row_shorthands', '300', '330') }}

## Standardspannen

In den obigen Beispielen haben wir jede Endzeile und Spaltenlinie spezifiziert, um die Eigenschaften zu demonstrieren. In der Praxis, wenn ein Element nur einen Track spannt, können Sie den Wert `grid-column-end` oder `grid-row-end` weglassen. Das Grid spannt standardmäßig über einen Track.

### Standardspannen mit ausführlicher Platzierung

Das bedeutet, dass unser anfängliches, ausführliches Beispiel so aussehen würde:

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: 4;
}
.box2 {
  grid-column-start: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}
.box3 {
  grid-column-start: 2;
  grid-row-start: 1;
}
.box4 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
}
```

{{ EmbedLiveSample('Default_spans_with_longhand_placement', '300', '330') }}

### Standardspannen mit Kurzformplatzierung

Unsere Kurzform würde wie folgt aussehen, ohne Schrägstrich und zweiten Wert für die Elemente, die nur einen Track spannen.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-column: 1;
  grid-row: 1 / 4;
}
.box2 {
  grid-column: 3;
  grid-row: 1 / 3;
}
.box3 {
  grid-column: 2;
  grid-row: 1;
}
.box4 {
  grid-column: 2 / 4;
  grid-row: 3;
}
```

{{ EmbedLiveSample('Default_spans_with_shorthand_placement', '300', '330') }}

## Die `grid-area`-Eigenschaft

Wir können einen Schritt weiter gehen und jeden Bereich mit einer einzigen Eigenschaft definieren – {{cssxref("grid-area")}}. Die Reihenfolge der Werte für `grid-area` ist wie folgt.

– {{cssxref("grid-row-start")}}
– {{cssxref("grid-column-start")}}
– {{cssxref("grid-row-end")}}
– {{cssxref("grid-column-end")}}

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-area: 1 / 1 / 4 / 2;
}
.box2 {
  grid-area: 1 / 3 / 3 / 4;
}
.box3 {
  grid-area: 1 / 2 / 2 / 3;
}
.box4 {
  grid-area: 3 / 2 / 4 / 4;
}
```

{{ EmbedLiveSample('The_grid-area_property', '300', '330') }}

Diese Reihenfolge der Werte für `grid-area` kann etwas seltsam erscheinen – sie ist das Gegenteil der Richtung, in der wir beispielsweise Margins und Padding als Kurzform angeben. Es könnte hilfreich sein, sich klarzumachen, dass dies darauf zurückzuführen ist, dass das CSS-Grid-Layout die flussrelativen Richtungen verwendet, die in den [CSS-Schreibmodi](/de/docs/Web/CSS/Guides/Writing_modes) definiert sind. Wir erkunden, wie Grids mit Schreibmodi funktionieren, in [Grids, logische Werte und Schreibmodi](/de/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes). Betrachten Sie vorerst das Konzept von vier {{Glossary("Flow_relative_values", "fluss-relativen")}} Richtungen:

- `block-start`
- `block-end`
- `inline-start`
- `inline-end`

Wir arbeiten in Englisch, einer von links nach rechts gehenden Sprache. Unser `block-start` ist die oberste Zeilenlinie des Grid-Containers, `block-end` ist die letzte Zeilenlinie des Containers. Unser `inline-start` ist die linke Spaltenlinie, da `inline-start` immer der Punkt ist, von dem aus im aktuellen Schreibmodus Text geschrieben würde, während `inline-end` die letzte Spaltenlinie unseres Grids ist.

Wenn wir unser Grid-Bereich über die `grid-area`-Eigenschaft angeben, definieren wir zuerst beide Startlinien `block-start` und `inline-start`, dann beide Endlinien `block-end` und `inline-end`. Dies erscheint zunächst ungewöhnlich, da wir an die {{Glossary("physical_properties", "physischen Eigenschaften")}} von „oben“, „rechts“, „unten“ und „links“ gewöhnt sind. Es macht jedoch mehr Sinn, wenn Sie beginnen, Websites als mehrdirektional in verschiedenen Schreibmodi zu betrachten.

## Rückwärts zählen

Wir können auch rückwärts von den Block- und Inline-Enden des Grids zählen, für Englisch wäre das die rechte Spaltenlinie und die letzte Zeilenlinie. Die letzten Linien des expliziten Grids können als `-1` angesprochen werden, und Sie können von dort zurückzählen – also die vorletzte Linie ist `-2`.

Beachten Sie, dass negative Werte nur für das explizite Grid relevant sind. Die letzte Linie ist die letzte Linie des Grids, das durch `grid-template-columns` und `grid-template-rows` definiert ist, und berücksichtigt keine Zeilen oder Spalten, die im _impliziten Grid_ außerhalb davon hinzugefügt werden.

In diesem nächsten Beispiel haben wir das Layout, mit dem wir gearbeitet haben, umgekehrt, indem wir von rechts und unten in unserem Grid gearbeitet haben, wenn wir die Elemente platzieren.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-column-start: -1;
  grid-column-end: -2;
  grid-row-start: -1;
  grid-row-end: -4;
}
.box2 {
  grid-column-start: -3;
  grid-column-end: -4;
  grid-row-start: -1;
  grid-row-end: -3;
}
.box3 {
  grid-column-start: -2;
  grid-column-end: -3;
  grid-row-start: -1;
  grid-row-end: -2;
}
.box4 {
  grid-column-start: -2;
  grid-column-end: -4;
  grid-row-start: -3;
  grid-row-end: -4;
}
```

{{ EmbedLiveSample('Counting_backwards', '300', '330') }}

### Ein Element über das ganze Grid strecken

Die Start- und Endlinien des Grids ansprechen zu können, ist nützlich, da Sie ein Element dann quer über das gesamte Grid strecken können mit:

```css
.item {
  grid-column: 1 / -1;
}
```

## Abstände oder Gassen

CSS Grid ermöglicht es, Abstände zwischen Spalten- und Zeilen-Tracks mit den Eigenschaften {{cssxref("column-gap")}} und {{cssxref("row-gap")}} oder der Kurzform {{cssxref("gap")}} hinzuzufügen.

Abstände erscheinen nur zwischen den Tracks des Grids, sie fügen dem oberen und unteren, linken oder rechten Rand des Containers keinen Platz hinzu. Wir können Abstände zu unserem vorherigen Beispiel hinzufügen, indem wir diese Eigenschaften auf dem Grid-Container anwenden.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-column: 1;
  grid-row: 1 / 4;
}
.box2 {
  grid-column: 3;
  grid-row: 1 / 3;
}
.box3 {
  grid-column: 2;
  grid-row: 1;
}
.box4 {
  grid-column: 2 / 4;
  grid-row: 3;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  column-gap: 20px;
  row-gap: 1em;
}
```

{{ EmbedLiveSample('Gutters_or_Alleys', '300', '350') }}

### Die Gap-Kurzform

Diese beiden Eigenschaften können auch als Kurzform ausgedrückt werden, {{cssxref("gap")}}. Wenn Sie nur einen Wert für `gap` angeben, gilt er für sowohl Spalten- als auch Zeilen-Abstände. Wenn Sie zwei Werte angeben, wird der erste für `row-gap` und der zweite für `column-gap` verwendet.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 1em 20px;
}
```

In Bezug auf die linienbasierte Positionierung von Elementen wirkt der Abstand so, als hätte die Linie zusätzliche Breite gewonnen. Alles, was an dieser Linie beginnt, beginnt nach dem Abstand und Sie können den Abstand nicht ansprechen oder etwas darin platzieren. Wenn Sie Abstände möchten, die mehr wie reguläre Tracks wirken, können Sie einen Track zu diesem Zweck definieren.

## Verwendung des `span`-Schlüsselworts

Zusätzlich zur Spezifikation der Start- und Endlinien durch Nummerierung können Sie eine Startlinie festlegen und dann die Anzahl der Tracks, die Sie möchten, dass der Bereich mit dem `span`-Schlüsselwort überspannt.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-column: 1;
  grid-row: 1 / span 3;
}
.box2 {
  grid-column: 3;
  grid-row: 1 / span 2;
}
.box3 {
  grid-column: 2;
  grid-row: 1;
}
.box4 {
  grid-column: 2 / span 2;
  grid-row: 3;
}
```

{{ EmbedLiveSample('Using_the_span_keyword', '300', '330') }}

Sie können das `span`-Schlüsselwort auch im Wert von `grid-row-start`/`grid-row-end` und `grid-column-start/grid-column-end` verwenden. Die folgenden zwei Beispiele erzeugen denselben Grid-Bereich. Im ersten Beispiel setzen wir die Startzeile, dann geben wir in der Endzeile an, dass wir möchten, dass der Bereich 3 Tracks umfasst. Der Bereich beginnt bei Linie 1 und endet 3 Linien von Linie 1 entfernt; das heißt, der Bereich endet bei Linie 4.

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: span 3;
}
```

Im zweiten Beispiel geben wir die Endzeile an, bei der das Element beendet werden soll, und setzen dann die Startzeile als `span 3`. Das bedeutet, dass das Element nach oben von der angegebenen Zeilenlinie aus spannen soll. Der Bereich beginnt bei Zeile 4 und spannt über 3 Linien bis zur Linie 1.

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: span 3;
  grid-row-end: 4;
}
```

Um sich mit der linienbasierten Positionierung im Grid vertraut zu machen, versuchen Sie, ein paar gängige Layouts zu erstellen, indem Sie Elemente auf Grids mit unterschiedlichen Spalten platzieren. Denken Sie daran, dass, wenn Sie nicht alle Elemente platzieren, alle übrig gebliebenen Elemente gemäß den Auto-Platzierungsregeln platziert werden. Dies kann zu dem Layout führen, das Sie wünschen, aber wenn etwas unerwartet erscheint, überprüfen Sie, ob Sie dafür eine Position festgelegt haben.

Denken Sie auch daran, dass sich Elemente auf dem Grid überlappen können, wenn Sie sie explizit wie beschrieben platzieren. Überlappende Elemente können einige schöne Effekte erzeugen, allerdings können Sie auch zu unerwünschtem Überlappen führen, wenn Sie die falsche Start- oder Endlinie angeben. Das Inspizieren von Grids mit den Entwickler-Tools Ihres Browsers kann sehr hilfreich sein, um solche Probleme beim Lernen zu identifizieren, besonders wenn Ihr Grid ziemlich kompliziert ist.
