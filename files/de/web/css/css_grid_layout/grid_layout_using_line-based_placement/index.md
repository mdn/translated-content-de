---
title: Rasterlayout mit linienbasierter Platzierung
short-title: Verwendung der linienbasierten Platzierung
slug: Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Im [Leitfaden zu den grundlegenden Konzepten des Rasterlayouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) haben wir uns kurz angesehen, wie man Elemente in einem Raster mithilfe von Linenummern positioniert. In diesem Leitfaden werden wir ausführlich erkunden, wie dieses grundlegende Merkmal der Spezifikation funktioniert.

Die Erkundung des Rasters mit nummerierten Linien ist der logischste Ausgangspunkt, da Sie bei der Verwendung von Rasterlayout immer nummerierte Linien haben. Die Linien sind für Spalten und Reihen nummeriert und werden ab `1` indiziert. Beachten Sie, dass das Raster gemäß dem Schreibmodus des Dokuments indiziert wird. In einer von links nach rechts verlaufenden Sprache wie Englisch befindet sich Linie 1 auf der linken Seite des Rasters. Wenn Sie in einer von rechts nach links verlaufenden Sprache wie Arabisch arbeiten, befindet sich Linie 1 auf der rechten Seite des Rasters. Mehr über die Interaktion zwischen Schreibmodi und Rastern erfahren Sie im [Leitfaden zu Rastern, logischen Werten und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes).

## Ein einfaches Beispiel

Als einfaches Beispiel erstellen wir ein Raster mit 3 Spalten- und 3 Reihen-Spuren. Dies ergibt 4 Linien in jeder Dimension.

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

In unserem Rastercontainer fügen wir vier Kindelemente ein.

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

{{ EmbedLiveSample('A_basic_example', '300', '330') }}

Wenn wir diese nicht irgendwie auf das Raster platzieren, werden sie entsprechend den Auto-Platzierungsregeln layoutet, ein Element in jeder der ersten vier Zellen. Sie können das Raster mit den Entwicklertools Ihres Browsers inspizieren, um zu sehen, wie das Raster Spalten und Reihen definiert.

![Das Beispielraster, hervorgehoben in den Entwicklertools](highlighted_grid.png)

## Positionierung von Elementen nach Liniennummer

Wir können die linienbasierte Platzierung verwenden, um zu steuern, wo sich diese Elemente im Raster befinden. Wir können die Eigenschaften {{cssxref("grid-column-start")}} und {{cssxref("grid-column-end")}} verwenden, um das erste Element auf der äußersten linken Seite des Rasters beginnen zu lassen und eine einzelne Spalten-Spur zu überspannen. Mit {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}} beginnen wir das Element auf der ersten Reihenlinie oben im Raster und lassen es bis zur vierten Reihenlinie überspannen.

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
}
```

Wenn Sie einige Elemente positionieren, werden andere Elemente im Raster weiterhin gemäß den Auto-Platzierungsregeln layoutet. Dieses Verhalten wird im [Leitfaden zur Auto-Platzierung im Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout) erklärt. Beobachten Sie vorerst, wie das Raster nicht platzierte Elemente in leere Zellen des Rasters einfügt.

Indem wir jedes Element einzeln mit den gleichen Eigenschaften, jedoch mit unterschiedlichen Werten ansprechen, platzieren wir alle vier Elemente, die Reihen- und Spalten-Spuren überspannen.

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

Beachten Sie, dass wir Zellen leer lassen können, wenn wir möchten. Eine der sehr angenehmen Eigenschaften des Rasterlayouts ist die Möglichkeit, ohne Tricks weißen Raum in unseren Designs zu haben.

## Die `grid-column` und `grid-row` Kurzschreibweisen

Das vorherige Beispiel hatte ziemlich viel Code, um jedes Element zu positionieren. Es sollte nicht überraschen, dass es eine [Kurzschrift](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) gibt. Die Eigenschaften {{cssxref("grid-column-start")}} und {{cssxref("grid-column-end")}} können zu {{cssxref("grid-column")}} kombiniert werden, {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}} zu {{cssxref("grid-row")}}. In diesem Beispiel replizieren wir das obige Beispiel, indem wir diese Kurzschreibweiseigenschaften verwenden:

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

## Standardüberlappungen

In den obigen Beispielen haben wir jede End-Reihen- und Spaltenlinie spezifiziert, um die Eigenschaften zu demonstrieren. In der Praxis können Sie jedoch, wenn ein Element nur eine Spur überspannt, den Wert für `grid-column-end` oder `grid-row-end` weglassen. Das Raster überspannt standardmäßig eine Spur.

### Standardüberlappungen mit Langhandplatzierung

Das bedeutet, dass unser ursprüngliches Langhandschrift-Beispiel so aussehen würde:

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

### Standardüberlappungen mit Kurzschreibweiseplatzierung

Unsere Kurzschrift würde folgendermaßen aussehen, ohne Schrägstrich und zweiten Wert für die Elemente, die nur eine Spur überspannen.

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

## Die `grid-area` Eigenschaft

Wir können noch einen Schritt weiter gehen und jede Fläche mit einer einzigen Eigenschaft definieren – {{cssxref("grid-area")}}. Die Reihenfolge der Werte für `grid-area` lautet wie folgt.

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

Diese Reihenfolge der Werte für `grid-area` mag etwas seltsam erscheinen — sie ist das Gegenteil der Richtung, in der wir beispielsweise Ränder und Abstände als Kurzschrift angeben. Es könnte hilfreich sein, zu verstehen, dass dies daran liegt, dass das CSS-Rasterlayout die flussrelativen Richtungen verwendet, die in den [CSS-Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes) definiert sind. In [Rastern, logischen Werten und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes) erkunden wir, wie Raster mit Schreibmodi funktionieren. Für jetzt betrachten Sie das Konzept von vier {{Glossary("Flow_relative_values", "flussrelativen")}} Richtungen:

- `block-start`
- `block-end`
- `inline-start`
- `inline-end`

Wir arbeiten in Englisch, einer von links nach rechts verlaufenden Sprache. Unser `block-start` ist die obere Reihenlinie des Rastercontainers, `block-end` ist die letzte Reihenlinie des Containers. Unser `inline-start` ist die linke Spaltenlinie, da `inline-start` immer der Punkt ist, von dem aus im aktuellen Schreibmodus Text geschrieben würde, während `inline-end` die letzte Spaltenlinie unseres Rasters ist.

Wenn wir unsere Rasterfläche mit der Eigenschaft `grid-area` spezifizieren, definieren wir zuerst beide Anfangslinien `block-start` und `inline-start`, dann beide Endlinien `block-end` und `inline-end`. Dies mag zunächst ungewöhnlich erscheinen, da wir es gewohnt sind, die {{Glossary("physical_properties", "physischen Eigenschaften")}} von `oben`, `rechts`, `unten` und `links` zu verwenden, aber es macht mehr Sinn, wenn Sie beginnen, Webseiten als multidirektional in verschiedenen Schreibmodi zu betrachten.

## Rückwärtszählen

Wir können auch rückwärts von den Block- und Inline-Enden des Rasters zählen, was für Englisch die rechte Spaltenlinie und die letzte Reihenlinie wäre. Die letzten Linien des expliziten Rasters können als `-1` angesprochen werden, und Sie können von dort aus rückwärts zählen – sodass die vorletzte Linie `-2` ist.

Beachten Sie, dass negative Werte nur für das explizite Raster relevant sind. Die letzte Linie ist die letzte Linie des durch `grid-template-columns` und `grid-template-rows` definierten Rasters und berücksichtigt keine Reihen oder Spalten, die im _impliziten Raster_ darüber hinaus hinzugefügt werden.

In diesem nächsten Beispiel haben wir das Layout, mit dem wir gearbeitet haben, invertiert, indem wir vom rechten und unteren Ende unseres Rasters gearbeitet haben, um die Elemente zu platzieren.

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

### Ein Element über das Raster strecken

Es ist nützlich, die Start- und Endlinien des Rasters adressieren zu können, da Sie ein Element dann über das gesamte Raster strecken können mit:

```css
.item {
  grid-column: 1 / -1;
}
```

## Zwischenräume oder Böden

CSS-Raster beinhaltet die Möglichkeit, Zwischenräume zwischen Spalten- und Reihen-Spuren mit den Eigenschaften {{cssxref("column-gap")}} und {{cssxref("row-gap")}} oder der Kurzform {{cssxref("gap")}} hinzuzufügen.

Lücken erscheinen nur zwischen den Spuren des Rasters, sie fügen dem oberen und unteren, linken oder rechten Rand des Containers keinen Raum hinzu. Wir können Lücken in unserem vorherigen Beispiel hinzufügen, indem wir diese Eigenschaften auf den Rastercontainer anwenden.

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

### Die `gap` Kurzschrift

Die zwei Eigenschaften können auch als Kurzschrift {{cssxref("gap")}} ausgedrückt werden. Wenn Sie nur einen Wert für `gap` angeben, gilt dieser sowohl für Spalten- als auch für Reihenzwischenräume. Wenn Sie zwei Werte angeben, wird der erste für den `row-gap` und der zweite für den `column-gap` verwendet.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 1em 20px;
}
```

In Bezug auf die linienbasierte Positionierung von Elementen wirkt die Lücke, als hätte die Linie zusätzliche Breite gewonnen. Alles, was an dieser Linie beginnt, beginnt nach der Lücke und Sie können nichts in die Lücke adressieren oder platzieren. Wenn Sie Zwischenräume möchten, die mehr wie reguläre Spuren fungieren, können Sie eine Spur für diesen Zweck definieren.

## Verwendung des `span` Schlüsselworts

Zusätzlich zur Angabe der Start- und Endlinien durch Zahlen können Sie eine Startlinie angeben und dann die Anzahl der Spuren, die Sie möchten, dass der Bereich mit dem `span` Schlüsselwort überspannt.

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

Sie können auch das `span` Schlüsselwort im Wert von `grid-row-start`/`grid-row-end` und `grid-column-start/grid-column-end` verwenden. Die folgenden zwei Beispiele werden die gleiche Rasterfläche erstellen. Im ersten Beispiel setzen wir die Start-Reihenlinie, dann bei der Endlinie spezifizieren wir, dass wir möchten, dass der Bereich 3 Spuren umfasst. Der Bereich beginnt bei Linie 1 und endet 3 Linien von Linie 1; das heißt, der Bereich endet bei Linie 4.

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: span 3;
}
```

Im zweiten Beispiel spezifizieren wir die End-Reihenlinie, bei der das Element enden soll, und setzen dann die Startlinie als `span 3`. Das bedeutet, dass das Element von der angegebenen Reihenlinie nach oben überspannen muss. Der Bereich beginnt bei Linie 4 und überspannt 3 Linien bis Linie 1.

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: span 3;
  grid-row-end: 4;
}
```

Um sich mit der linienbasierten Positionierung im Raster vertraut zu machen, versuchen Sie, einige gängige Layouts zu erstellen, indem Sie Elemente auf Rastern mit unterschiedlichen Spaltenzahlen platzieren. Denken Sie daran, dass, wenn Sie nicht alle Elemente platzieren, alle übrig gebliebenen Elemente gemäß den Auto-Platzierungsregeln platziert werden. Dies könnte zu dem gewünschten Layout führen, aber wenn etwas an einer unerwarteten Stelle erscheint, überprüfen Sie, ob Sie ihm eine Position zugewiesen haben.

Denken Sie auch daran, dass sich Elemente auf dem Raster überlappen können, wenn Sie sie explizit so platzieren. Überlappende Elemente können einige schöne Effekte erzeugen, jedoch können Sie auch falsche Überlappungen haben, wenn Sie die falsche Start- oder Endlinie angeben. Das Inspizieren von Rastern mit den Entwicklertools Ihres Browsers kann sehr hilfreich sein, um solche Probleme zu identifizieren, während Sie lernen, insbesondere wenn Ihr Raster recht kompliziert ist.
