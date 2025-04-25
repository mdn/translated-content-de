---
title: Raster-Layout mit linienbasierter Platzierung
slug: Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement
l10n:
  sourceCommit: 60ac5e1de092017d4f2eaf7b6117c4c4514d9ede
---

{{CSSRef}}

Im [Leitfaden zu den grundlegenden Konzepten des Raster-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) haben wir einen kurzen Blick darauf geworfen, wie Elemente auf einem Raster mithilfe von Liniennummern positioniert werden können. In diesem Leitfaden werden wir ausführlich untersuchen, wie dieses grundlegende Merkmal der Spezifikation funktioniert.

Die Erkundung des Rasters mit nummerierten Linien zu beginnen, ist der logischste Ausgangspunkt, da Sie beim Verwenden des Raster-Layouts immer nummerierte Linien haben. Die Linien sind für Spalten und Reihen nummeriert und beginnen bei `1`. Beachten Sie, dass das Raster gemäß dem Schreibmodus des Dokuments indexiert ist. In einer von links nach rechts verlaufenden Sprache wie Englisch befindet sich Linie 1 auf der linken Seite des Rasters. Wenn Sie in einer von rechts nach links verlaufenden Sprache wie Arabisch arbeiten, befindet sich Linie 1 auf der rechten Seite des Rasters. Wir werden mehr über die Interaktion zwischen Schreibmodi und Rastern im Leitfaden zu [Rastern, logischen Werten und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes) erfahren.

## Ein einfaches Beispiel

Als einfaches Beispiel erstellen wir ein Raster mit 3 Spalten- und 3 Zeilen-Spuren. Dies ergibt 4 Linien in jeder Dimension.

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

In unserem Gittercontainer fügen wir vier Kindelemente ein.

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

{{ EmbedLiveSample('A_basic_example', '300', '330') }}

Wenn wir diese Elemente nicht in irgendeiner Weise auf das Raster platzieren, werden sie gemäß den Regeln der automatischen Platzierung abgelegt, ein Element in jeder der ersten vier Zellen. Sie können das Raster mit den Entwicklerwerkzeugen Ihres Browsers inspizieren, um zu sehen, wie das Raster Spalten und Reihen definiert.

![Das Beispielraster im Entwicklertools hervorgehoben](highlighted_grid.png)

## Positionierung von Elementen nach Liniennummer

Wir können die linienbasierte Platzierung verwenden, um zu steuern, wo sich diese Elemente im Raster befinden. Wir können die Eigenschaften {{cssxref("grid-column-start")}} und {{cssxref("grid-column-end")}} verwenden, damit das erste Element auf der linken Seite des Rasters beginnt und sich über eine einzelne Spalten-Spur erstreckt. Mit {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}} lassen wir das Element auf der ersten Zeilenlinie oben im Raster beginnen und bis zur vierten Zeilenlinie reichen.

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
}
```

Wenn Sie einige Elemente positionieren, werden andere Elemente im Raster weiterhin gemäß den Regeln der automatischen Platzierung angeordnet. Dieses Verhalten wird im [Leitfaden zur automatischen Platzierung im Raster-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout) erklärt. Beobachten Sie vorerst, wie das Raster unplatzierte Elemente in leere Zellen des Rasters anordnet.

Indem wir jedes Element individuell mithilfe derselben Eigenschaften, aber mit unterschiedlichen Werten ansprechen, platzieren wir alle vier Elemente, die sich über Zeilen- und Spalten-Spuren erstrecken.

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

Beachten Sie, dass wir Zellen leer lassen können, wenn wir möchten. Ein großer Vorteil des Raster-Layouts besteht darin, dass wir weißen Raum in unseren Designs ohne Tricksereien haben können.

## Die Kurzschreibweise `grid-column` und `grid-row`

Das vorherige Beispiel enthielt ziemlich viel Code, um jedes Element zu positionieren. Es sollte nicht überraschen, dass es eine [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) gibt. Die Eigenschaften {{cssxref("grid-column-start")}} und {{cssxref("grid-column-end")}} können zu {{cssxref("grid-column")}} kombiniert werden, {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}} zu {{cssxref("grid-row")}}. In diesem Beispiel replizieren wir das obige Beispiel unter Verwendung dieser Kurzschreibweise:

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

In den obigen Beispielen haben wir jede Endzeilen- und Spaltenlinie angegeben, um die Eigenschaften zu demonstrieren, jedoch können Sie in der Praxis, wenn ein Element nur eine Spur überspannt, den Wert für `grid-column-end` oder `grid-row-end` weglassen. Das Raster spannt standardmäßig eine Spur.

### Standardspannen mit ausführlicher Platzierung

Das bedeutet, dass unser initiales, ausführliches Beispiel folgendermaßen aussähe:

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

### Standardspannen mit Kurzschreibweise

Unsere Kurzschreibweise würde folgendem Code entsprechen, ohne Schrägstrich und zweiten Wert für die Elemente, die nur eine Spur spanen.

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

## Die Eigenschaft `grid-area`

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

Diese Reihenfolge der Werte für `grid-area` kann ein wenig seltsam erscheinen – sie ist das Gegenteil der Richtung, in der wir z.B. Ränder und Abstände als Kurzschreibweise angeben. Es kann hilfreich sein zu wissen, dass dies daran liegt, dass das CSS-Raster-Layout die flussrelativen Richtungen verwendet, die in [CSS-Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes) definiert sind. Wir erkunden, wie Rasters mit Schreibmodi in [Rastern, logischen Werten und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes) funktionieren. Betrachten Sie vorerst das Konzept von vier {{Glossary("Flow_relative_values", "flussrelativen")}} Richtungen:

- `block-start`
- `block-end`
- `inline-start`
- `inline-end`

Wir arbeiten in Englisch, einer von links nach rechts verlaufenden Sprache. Unser `block-start` ist die obere Zeilenlinie des Rastercontainers, `block-end` ist die letzte Zeilenlinie des Containers. Unser `inline-start` ist die linke Spaltenlinie, da `inline-start` immer der Punkt ist, von dem Text im aktuellen Schreibmodus geschrieben würde, während `inline-end` die letzte Spaltenlinie unseres Rasters ist.

Wenn wir unseren Rasterbereich mit der Eigenschaft `grid-area` angeben, definieren wir zuerst beide Startlinien `block-start` und `inline-start`, dann beide Endlinien `block-end` und `inline-end`. Dies scheint anfangs ungewöhnlich zu sein, da wir es gewohnt sind, die {{Glossary("physical_properties", "physischen Eigenschaften")}} von `oben`, `rechts`, `unten` und `links` zu nutzen, aber es macht mehr Sinn, wenn Sie beginnen, Webseiten als multidirektional in verschiedenen Schreibmodi zu betrachten.

## Rückwärts zählen

Wir können auch rückwärts von den Block- und Inline-Enden des Rasters zählen, für Englisch wäre das die rechte Spaltenlinie und die letzte Zeilenlinie. Die letzten Linien des expliziten Rasters können als `-1` angesprochen werden, und Sie können von dort aus rückwärts zählen – also ist die vorletzte Linie `-2`.

Beachten Sie, dass negative Werte nur für das explizite Raster relevant sind. Die letzte Linie ist die letzte Linie des Rasters, das durch `grid-template-columns` und `grid-template-rows` definiert ist, und berücksichtigt keine Reihen oder Spalten, die im _impliziten Raster_ außerhalb davon hinzugefügt werden.

Im nächsten Beispiel haben wir das Layout, mit dem wir gearbeitet haben, umgekehrt, indem wir von rechts und unten aus unser Raster betrachten, um die Elemente zu platzieren.

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

### Ein Element über das Raster spannen

Die Möglichkeit, die Start- und Endlinien des Rasters anzusprechen, ist nützlich, da Sie dann ein Element über das gesamte Raster hinweg spannen können mit:

```css
.item {
  grid-column: 1 / -1;
}
```

## Rinnen oder Gassen

CSS-Raster ermöglicht das Hinzufügen von Rinnen zwischen Spalten- und Zeilenspuren mit den Eigenschaften {{cssxref("column-gap")}} und {{cssxref("row-gap")}}, oder der Kurzschreibweise {{cssxref("gap")}}.

Lücken erscheinen nur zwischen den Spuren des Rasters, sie fügen dem oberen und unteren, linken oder rechten Bereich des Containers keinen Platz hinzu. Wir können Lücken in unserem früheren Beispiel hinzufügen, indem wir diese Eigenschaften auf den Rastercontainer anwenden.

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

### Die Kurzschreibweise von `gap`

Die beiden Eigenschaften können auch als Kurzschreibweise {{cssxref("gap")}} ausgedrückt werden. Wenn Sie nur einen Wert für `gap` angeben, wird er sowohl für Spalten- als auch für Zeilenlücken verwendet. Wenn Sie zwei Werte angeben, wird der erste für `row-gap` und der zweite für `column-gap` verwendet.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 1em 20px;
}
```

Hinsichtlich der linienbasierten Positionierung von Elementen verhält sich die Lücke so, als hätte die Linie zusätzliche Breite. Alles, was an dieser Linie beginnt, beginnt nach der Lücke, und Sie können die Lücke nicht ansprechen oder etwas darin platzieren. Wenn Sie Rinnen möchten, die sich eher wie reguläre Spuren verhalten, können Sie eine Spur für diesen Zweck definieren.

## Verwendung des `span`-Schlüsselworts

Zusätzlich zur Angabe von Start- und Endlinien nach Nummer können Sie eine Startlinie angeben und dann die Anzahl der Spuren, die Sie möchten, dass der Bereich mit dem Schlüsselwort `span` überspannt.

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

Sie können das Schlüsselwort `span` auch im Wert von `grid-row-start`/`grid-row-end` und `grid-column-start/grid-column-end` verwenden. Die folgenden beiden Beispiele erstellen denselben Rasterbereich. Im ersten Beispiel legen wir die Startzeilenlinie fest, dann geben wir mit der Endlinie an, dass wir möchten, dass der Bereich 3 Spuren umfasst. Der Bereich beginnt bei Linie 1 und endet 3 Linien von Linie 1 entfernt; das heißt, der Bereich endet bei Linie 4.

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: span 3;
}
```

Im zweiten Beispiel geben wir die Endzeilenlinie an, bei der das Element enden soll, und legen dann die Startlinie mit `span 3` fest. Dies bedeutet, dass das Element von der angegebenen Zeilenlinie aufwärts reichen muss. Der Bereich beginnt bei Linie 4 und erstreckt sich über 3 Linien bis zu Linie 1.

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: span 3;
  grid-row-end: 4;
}
```

Um sich mit der linienbasierten Positionierung im Raster vertraut zu machen, versuchen Sie, einige gängige Layouts zu erstellen, indem Sie Elemente auf Rastern mit unterschiedlichen Spaltenzahlen platzieren. Denken Sie daran, dass, wenn Sie nicht alle Items platzieren, alle übrig gebliebenen Items gemäß den Regeln der automatischen Platzierung abgelegt werden. Dies kann zu dem gewünschten Layout führen, aber wenn etwas an unerwarteter Stelle erscheint, überprüfen Sie, ob Sie eine Position dafür festgelegt haben.

Denken Sie auch daran, dass sich Elemente im Raster überlappen können, wenn Sie sie auf diese Weise explizit platzieren. Überlappende Elemente können einige nette Effekte erzeugen, aber Sie können auch unerwünschte Überlappungen haben, wenn Sie die falsche Start- oder Endlinie angeben. Das Inspizieren von Rastern mit den Entwicklerwerkzeugen Ihres Browsers kann sehr hilfreich sein, um solche Probleme zu identifizieren, während Sie lernen, besonders wenn Ihr Raster ziemlich kompliziert ist.
