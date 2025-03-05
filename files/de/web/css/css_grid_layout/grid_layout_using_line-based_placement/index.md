---
title: Raster-Layout mit zeilenbasierter Platzierung
slug: Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Im [Leitfaden zu den grundlegenden Konzepten des Raster-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) haben wir einen kurzen Blick darauf geworfen, wie man Elemente auf einem Raster mit Zeilennummern positioniert. In diesem Leitfaden werden wir ausführlich erkunden, wie dieses grundlegende Feature der Spezifikation funktioniert.

Ihre Erkundung des Rasters mit nummerierten Linien zu beginnen, ist der logischste Ausgangspunkt, da Sie bei der Verwendung des Raster-Layouts immer nummerierte Linien haben. Die Linien sind für Spalten und Reihen nummeriert und beginnen bei `1`. Beachten Sie, dass das Raster entsprechend dem Schreibmodus des Dokuments indiziert ist. In einer von links nach rechts verlaufenden Sprache, wie zum Beispiel Englisch, befindet sich Linie 1 auf der linken Seite des Rasters. Wenn Sie in einer von rechts nach links verlaufenden Sprache arbeiten, wie Arabisch, befindet sich Linie 1 auf der rechten Seite des Rasters. Mehr über das Zusammenspiel von Schreibmodi und Rastern erfahren Sie im [Leitfaden zu Rastern, logischen Werten und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes).

## Ein einfaches Beispiel

Als einfaches Beispiel erstellen wir ein Raster mit 3 Spaltentracks und 3 Reihentracks. Das ergibt 4 Linien in jeder Dimension.

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

In unserem Raster-Container fügen wir vier Kind-Elemente hinzu.

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

{{ EmbedLiveSample('A_basic_example', '300', '330') }}

Wenn wir diese nicht auf irgendeine Weise auf das Raster legen, werden sie gemäß den Regeln der automatischen Platzierung in jeweils einer der ersten vier Zellen angeordnet. Sie können das Raster mit den Entwickler-Tools Ihres Browsers inspizieren, um zu sehen, wie das Raster Spalten und Reihen definiert.

![Das Beispielraster hervorgehoben in den Entwickler-Tools](highlighted_grid.png)

## Positionierung von Elementen nach Zeilennummer

Wir können eine zeilenbasierte Platzierung verwenden, um zu steuern, wo sich diese Elemente auf dem Raster befinden. Wir können die Eigenschaften {{cssxref("grid-column-start")}} und {{cssxref("grid-column-end")}} verwenden, um das erste Element ganz links auf dem Raster beginnen zu lassen und eine einzelne Spalte zu umfassen. Mit {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}}, lassen wir das Element auf der ersten Zeile oben auf dem Raster beginnen und bis zur vierten Zeile reichen.

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
}
```

Wenn Sie einige Elemente positionieren, werden andere Elemente auf dem Raster weiterhin gemäß den Regeln der automatischen Platzierung angeordnet. Dieses Verhalten wird im [Leitfaden zur automatischen Platzierung im Raster-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout) erklärt. Für den Moment beobachten Sie, wie das Raster nicht platzierte Elemente in leere Zellen des Rasters einfügt.

Jedes Element individuell anzusprechen, indem dieselben Eigenschaften mit unterschiedlichen Werten verwendet werden, ermöglicht es uns, alle vier Elemente zu platzieren und die Reihen- und Spaltentracks zu überspannen.

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

Beachten Sie, dass wir Zellen leer lassen können, wenn wir möchten. Eine der wirklich angenehmen Eigenschaften des Raster-Layouts ist die Möglichkeit, Weißraum in unseren Designs ohne Tricks zu haben.

## Die `grid-column` und `grid-row` Kurzschreibweisen

Das vorherige Beispiel enthielt ziemlich viel Code, um jedes Element zu positionieren. Es sollte keine Überraschung sein, dass es eine [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) gibt. Die Eigenschaften {{cssxref("grid-column-start")}} und {{cssxref("grid-column-end")}} können in {{cssxref("grid-column")}}, {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}} in {{cssxref("grid-row")}} kombiniert werden. In diesem Beispiel replizieren wir das obige Beispiel mit diesen Kurzschreibweisen:

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

In den obigen Beispielen haben wir jede Endzeile und jede Spaltenzeile angegeben, um die Eigenschaften zu demonstrieren. In der Praxis, wenn ein Element nur ein Track überspannt, können Sie den Wert von `grid-column-end` oder `grid-row-end` weglassen. Das Raster standardisiert auf das Überspannen eines Tracks.

### Standardspannen mit ausgeschriebener Platzierung

Das bedeutet, dass unser ursprüngliches, ausführliches Beispiel wie folgt aussehen würde:

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

Unsere Kurzschreibweise würde wie folgt aussehen, ohne Schrägstrich und zweiten Wert für die Elemente, die nur einen Track überspannen.

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

Wir können noch einen Schritt weitergehen und jeden Bereich mit einer einzigen Eigenschaft definieren – {{cssxref("grid-area")}}. Die Reihenfolge der Werte für `grid-area` ist wie folgt:

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

Diese Reihenfolge der Werte für `grid-area` kann etwas seltsam erscheinen — es ist das Gegenteil der Richtung, in der wir Margins und Padding als Kurzschreibweise angeben, zum Beispiel. Es kann hilfreich sein zu erkennen, dass dies darauf zurückzuführen ist, dass das CSS-Raster-Layout die flussrelativen Richtungen verwendet, die in den [CSS-Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes) definiert sind. Wir erkunden, wie Raster mit Schreibmodi funktionieren, in [Raster, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes). Betrachten Sie für jetzt das Konzept der vier {{Glossary("Flow_relative_values", "flussrelativen")}} Richtungen:

- `block-start`
- `block-end`
- `inline-start`
- `inline-end`

Wir arbeiten in Englisch, einer von links nach rechts verlaufenden Sprache. Unser `block-start` ist die obere Zeile des Raster-Containers, `block-end` ist die letzte Zeile des Containers. Unser `inline-start` ist die linke Spaltenlinie, da `inline-start` immer der Punkt ist, von dem aus im aktuellen Schreibmodus Text geschrieben würde, während `inline-end` die letzte Spaltenlinie unseres Rasters ist.

Wenn wir unser Rastergebiet mit der `grid-area` Eigenschaft spezifizieren, definieren wir zuerst beide Startlinien `block-start` und `inline-start` und dann beide Endlinien `block-end` und `inline-end`. Dies scheint zunächst ungewöhnlich, da wir es gewohnt sind, mit den {{Glossary("physical_properties", "physischen Eigenschaften")}} von `oben`, `rechts`, `unten` und `links` zu arbeiten, aber es macht mehr Sinn, wenn Sie beginnen, Websites als multidirektional in verschiedenen Schreibmodi zu betrachten.

## Rückwärts zählen

Wir können auch rückwärts von den Block- und Inline-Enden des Rasters zählen, für Englisch wäre das die rechte Spaltenlinie und die letzte Zeilenlinie. Die letzten Linien des expliziten Rasters können als `-1` angesprochen werden, und Sie können von dort an rückwärts zählen – also ist die zweitletzte Linie `-2`.

Beachten Sie, dass negative Werte nur für das explizite Raster relevant sind. Die letzte Linie ist die letzte Linie des durch `grid-template-columns` und `grid-template-rows` definierten Rasters und berücksichtigt keine Zeilen oder Spalten, die im _impliziten Raster_ außerhalb davon hinzugefügt wurden.

Im nächsten Beispiel haben wir das Layout, mit dem wir gearbeitet haben, umgekehrt, indem wir die Platzierung der Elemente von der rechten und unteren Seite unseres Rasters aus vorgenommen haben.

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

### Dehnung eines Elements über das Raster

Die Start- und Endlinien des Rasters ansprechen zu können, ist nützlich, da Sie dann ein Element mit folgendem Code über das Raster hinweg dehnen können:

```css
.item {
  grid-column: 1 / -1;
}
```

## Rinnen oder Gassen

CSS-Raster ermöglicht es, Rinnen zwischen Spalten- und Reihentracks mit den Eigenschaften {{cssxref("column-gap")}} und {{cssxref("row-gap")}}, oder der Kurzschreibweise {{cssxref("gap")}}, hinzuzufügen.

Lücken erscheinen nur zwischen den Tracks des Rasters, sie fügen dem oberen und unteren, linken oder rechten Rand des Containers keinen Platz hinzu. Wir können Lücken zu unserem vorherigen Beispiel hinzufügen, indem wir diese Eigenschaften auf dem Raster-Container verwenden.

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

### Die Kurzschreibweise `gap`

Die beiden Eigenschaften können auch als Kurzschreibweise, {{cssxref("gap")}}, ausgedrückt werden. Wenn Sie nur einen Wert für `gap` angeben, gilt dieser sowohl für Spalten- als auch für Reihengruppen. Wenn Sie zwei Werte angeben, wird der erste für `row-gap` und der zweite für `column-gap` verwendet.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 1em 20px;
}
```

In Bezug auf die zeilenbasierte Platzierung von Elementen wirkt sich die Lücke so aus, als hätte die Linie zusätzliche Breite erhalten. Alles, was an dieser Linie beginnt, beginnt nach der Lücke und Sie können die Lücke nicht ansprechen oder etwas darin platzieren. Wenn Sie Rinnen möchten, die eher wie reguläre Tracks funktionieren, können Sie einen Track für diesen Zweck definieren.

## Verwendung des `span` Schlüsselworts

Zusätzlich zur Angabe der Start- und Endlinien durch Nummer können Sie eine Startlinie angeben und dann mit dem Schlüsselwort `span` die Anzahl der Tracks festlegen, die der Bereich umfassen soll.

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

Sie können das `span` Schlüsselwort auch im Wert von `grid-row-start`/`grid-row-end` und `grid-column-start/grid-column-end` verwenden. Die folgenden zwei Beispiele erzeugen denselben Rasterbereich. Im ersten setzen wir die Startzeile des Bereichs, dann geben wir mit `span 3` an, dass der Bereich 3 Tracks umfassen soll. Der Bereich beginnt bei Linie 1 und endet 3 Linien weiter, das heißt bei Linie 4.

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: span 3;
}
```

Im zweiten Beispiel geben wir die Endzeile an, bei der das Element enden soll, und setzen dann die Startlinie mit `span 3`. Dies bedeutet, dass das Element von der angegebenen Zeile aus nach oben reichen muss. Der Bereich beginnt bei Linie 4 und überspannt 3 Linien hin zu Linie 1.

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: span 3;
  grid-row-end: 4;
}
```

Um sich mit der zeilenbasierten Positionierung im Raster vertraut zu machen, versuchen Sie, einige gängige Layouts zu erstellen, indem Sie Elemente auf Rastern mit unterschiedlichen Anzahlen von Spalten platzieren. Denken Sie daran, dass, wenn Sie nicht alle Elemente platzieren, alle übrig gebliebenen Elemente gemäß den Regeln der automatischen Platzierung angeordnet werden. Dies kann zu dem von Ihnen gewünschten Layout führen, aber wenn etwas unerwartet erscheint, überprüfen Sie, ob Sie dafür eine Position festgelegt haben.

Denken Sie auch daran, dass sich Elemente im Raster überlappen können, wenn Sie sie auf diese Weise explizit platzieren. Überlappende Elemente können einige schöne Effekte erzeugen, jedoch können Sie auch unkorrekte Überlappungen erhalten, wenn Sie die falsche Start- oder Endlinie angeben. Das Inspizieren von Rastern mit den Entwickler-Tools Ihres Browsers kann sehr hilfreich sein, um solche Probleme zu identifizieren, während Sie lernen, insbesondere wenn Ihr Raster ziemlich kompliziert ist.
