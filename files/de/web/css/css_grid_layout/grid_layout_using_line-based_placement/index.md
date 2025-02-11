---
title: Raster-Layout mit linienbasierter Platzierung
slug: Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement
l10n:
  sourceCommit: bd6d62961fbc6a05298a8b182f3c5461e5e54b28
---

{{CSSRef}}

Im [Leitfaden zu den grundlegenden Konzepten des Raster-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) haben wir einen kurzen Blick darauf geworfen, wie Elemente eines Rasters mithilfe von Liniennummern positioniert werden können. In diesem Leitfaden werden wir vollständig erkunden, wie diese fundamentale Funktion der Spezifikation funktioniert.

Das Verständnis von nummerierten Linien ist der logischste Ausgangspunkt bei der Erkundung von Rastern, da Sie beim Arbeiten mit Raster-Layouts immer nummerierte Linien haben. Die Linien sind für Spalten und Zeilen nummeriert und werden ab `1` indexiert. Beachten Sie, dass der Index des Rasters vom Schreibmodus des Dokuments abhängt. In einer von links nach rechts verlaufenden Sprache wie Englisch befindet sich Linie 1 auf der linken Seite des Rasters. Wenn Sie in einer von rechts nach links verlaufenden Sprache wie Arabisch arbeiten, befindet sich Linie 1 auf der rechten Seite des Rasters. Mehr über die Interaktion zwischen Schreibmodi und Rastern erfahren Sie im Leitfaden [Raster, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes).

## Ein einfaches Beispiel

Als einfaches Beispiel erstellen wir ein Raster mit 3 Spaltenspuren und 3 Zeilenspuren. Dies führt zu jeweils 4 Linien in jeder Dimension.

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

Innerhalb unseres Raster-Containers fügen wir vier Kind-Elemente ein.

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

{{ EmbedLiveSample('A_basic_example', '300', '330') }}

Wenn wir diese Elemente nicht manuell im Raster platzieren, werden sie gemäß den Regeln für die automatische Platzierung angeordnet, wobei jeweils ein Element in einer der ersten vier Zellen liegt. Sie können das Raster mit den Entwicklertools Ihres Browsers überprüfen, um zu sehen, wie die Spalten und Zeilen definiert sind.

![Das Beispielraster hervorgehoben in DevTools](highlighted_grid.png)

## Elemente mithilfe von Liniennummern positionieren

Wir können die linienbasierte Platzierung verwenden, um zu kontrollieren, wo diese Elemente im Raster positioniert werden. Mit den Eigenschaften {{cssxref("grid-column-start")}} und {{cssxref("grid-column-end")}} können wir das erste Element am äußersten linken Ende des Rasters beginnen und eine einzelne Spaltenspur überspannen lassen. Mit {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}} lassen wir das Element an der ersten Zeilenlinie oben im Raster beginnen und bis zur vierten Zeilenlinie verlaufen.

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
}
```

Während Sie einige Elemente positionieren, werden andere Elemente im Raster weiterhin gemäß den Regeln für die automatische Platzierung angeordnet. Dieses Verhalten wird im [Leitfaden zur automatischen Platzierung im Raster-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout) erläutert. Beobachten Sie zunächst, wie das Raster nicht platzierte Elemente in leere Zellen des Rasters legt.

Jedes Element einzeln adressierend, verwenden wir dieselben Eigenschaften mit unterschiedlichen Werten, um alle vier Elemente zu platzieren und dabei sowohl Zeilen- als auch Spaltenspuren zu überspannen.

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

Beachten Sie, dass wir Zellen leer lassen können, wenn wir möchten. Eine der sehr schönen Eigenschaften des Raster-Layouts ist die Möglichkeit, Freiflächen in Designs zu haben, ohne auf Tricks zurückzugreifen.

## Die Kurzschreibweisen `grid-column` und `grid-row`

Das vorherige Beispiel enthielt ziemlich viel Code, um jedes Element zu positionieren. Es sollte keine Überraschung sein, dass es eine [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) gibt. Die Eigenschaften {{cssxref("grid-column-start")}} und {{cssxref("grid-column-end")}} können zu {{cssxref("grid-column")}} kombiniert werden, ebenso können {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}} zu {{cssxref("grid-row")}} kombiniert werden. In diesem Beispiel replizieren wir das obige Beispiel mithilfe dieser Kurzschreibweise:

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

## Standardmäßige Spannweiten

In den obigen Beispielen haben wir jede Zeilen- und Spaltenlinie angegeben, um die Eigenschaften zu demonstrieren, aber in der Praxis können Sie den Wert von `grid-column-end` oder `grid-row-end` weglassen, wenn ein Element nur eine Spur überspannt. Raster überspannt standardmäßig eine Spur.

### Standardmäßige Spannweiten mit ausführlicher Platzierung

Das bedeutet, dass unser ursprüngliches, ausführliches Beispiel so aussehen würde:

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

### Standardmäßige Spannweiten mit Kurzschreibweise

Unsere Kurzschreibweise würde wie folgt aussehen, ohne Schrägstrich und zweiten Wert für die Elemente, die nur eine Spur überspannen.

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

Wir können noch weiter gehen und mit einer einzigen Eigenschaft – {{cssxref("grid-area")}} – jeden Bereich definieren. Die Reihenfolge der Werte für `grid-area` lautet:

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

Diese Reihenfolge der Werte für `grid-area` mag zunächst seltsam erscheinen – sie ist das Gegenteil der Richtung, in der wir zum Beispiel Abstände und Polsterungen als Kurzform spezifizieren. Es kann helfen zu verstehen, dass dies darauf zurückzuführen ist, dass CSS-Raster-Layouts die flussrelativen Richtungen verwenden, die in [CSS-Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes) definiert sind. Wir untersuchen, wie Raster mit Schreibmodi zusammenarbeiten, im Leitfaden [Raster, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes). Betrachten Sie vorerst das Konzept der vier {{Glossary("Flow_relative_values", "flussrelativen")}} Richtungen:

- `block-start`
- `block-end`
- `inline-start`
- `inline-end`

Wir arbeiten in Englisch, einer von links nach rechts lesenden Sprache. Unser `block-start` ist die oberste Zeilenlinie des Raster-Containers, `block-end` ist die letzte Zeilenlinie des Containers. Unser `inline-start` ist die linke Spaltenlinie, da `inline-start` immer der Punkt ist, von dem aus Text im aktuellen Schreibmodus geschrieben würde, während `inline-end` die letzte Spaltenlinie unseres Rasters ist.

Wenn wir unseren Rasterbereich mit der Eigenschaft `grid-area` spezifizieren, definieren wir zuerst beide Startlinien (`block-start` und `inline-start`), dann beide Endlinien (`block-end` und `inline-end`). Dies mag zunächst ungewöhnlich erscheinen, da wir an die {{Glossary("physical_properties", "physischen Eigenschaften")}} von `top`, `right`, `bottom` und `left` gewöhnt sind, aber es macht mehr Sinn, wenn Sie anfangen, Webseiten als multidirektional in verschiedenen Schreibmodi zu betrachten.

## Rückwärts zählen

Wir können auch rückwärts von den Block- und Inline-Enden des Rasters zählen, was für Englisch die rechte Spaltenlinie und die letzte Zeilenlinie wäre. Die letzten Linien des expliziten Rasters können als `-1` angesprochen werden, und Sie können von dort aus zurückzählen – die zweitletzte Linie ist also `-2`.

Beachten Sie, dass negative Werte nur für das explizite Raster relevant sind. Die letzte Linie ist die letzte Linie des durch `grid-template-columns` und `grid-template-rows` definierten Rasters und berücksichtigt keine Zeilen oder Spalten, die im _impliziten Raster_ außerhalb davon hinzugefügt werden.

Im nächsten Beispiel haben wir das Layout umgedreht, indem wir von der rechten und unteren Seite unseres Rasters arbeiten, um die Elemente zu platzieren.

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

### Ein Element über das gesamte Raster erstrecken

Die Möglichkeit, die Start- und Endlinien des Rasters anzusprechen, ist nützlich, da Sie damit ein Element über das gesamte Raster erstrecken können, mit:

```css
.item {
  grid-column: 1 / -1;
}
```

## Abstände oder Lücken

Das CSS-Raster ermöglicht das Hinzufügen von Abständen zwischen Spalten- und Zeilenspuren mit den Eigenschaften {{cssxref("column-gap")}} und {{cssxref("row-gap")}} oder der Kurzschreibweise {{cssxref("gap")}}.

Abstände erscheinen nur zwischen den Spuren des Rasters, sie fügen keinen Platz oben und unten oder links und rechts des Containers hinzu. Wir können die Abstände zu unserem vorherigen Beispiel hinzufügen, indem wir diese Eigenschaften auf den Raster-Container anwenden.

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

Die beiden Eigenschaften können auch als Kurzform ausgedrückt werden, {{cssxref("gap")}}. Wenn Sie nur einen Wert für `gap` angeben, wird er sowohl auf die Spalten- als auch auf die Zeilenabstände angewendet. Wenn Sie zwei Werte angeben, wird der erste verwendet für `row-gap` und der zweite für `column-gap`.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 1em 20px;
}
```

In Bezug auf die linienbasierte Positionierung von Elementen handelt die Lücke so, als ob die Linie eine zusätzliche Breite erhalten hätte. Alles, was an dieser Linie beginnt, beginnt nach der Lücke, und Sie können die Lücke weder ansprechen noch etwas darin platzieren. Wenn Sie Abstände möchten, die wie reguläre Spuren agieren, können Sie eine Spur für diesen Zweck definieren.

## Verwendung des Schlüsselworts `span`

Zusätzlich zur Angabe der Start- und Endlinien durch Nummern können Sie eine Startlinie angeben und dann die Anzahl der Spuren, die der Bereich mit dem Schlüsselwort `span` überspannen soll.

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

Sie können das Schlüsselwort `span` auch im Wert von `grid-row-start`/`grid-row-end` und `grid-column-start/grid-column-end` verwenden. Die folgenden zwei Beispiele erzeugen denselben Rasterbereich. Im ersten Beispiel setzen wir die Startzeilenlinie, dann geben wir für die Endlinie an, dass der Bereich 3 Spuren umfassen soll. Der Bereich beginnt bei Linie 1 und endet 3 Linien von Linie 1 entfernt, also bei Linie 4.

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: span 3;
}
```

Im zweiten Beispiel geben wir die Endzeilenlinie an, an der das Element enden soll, und setzen dann die Startlinie als `span 3`. Das bedeutet, dass sich das Element vom Ende der angegebenen Zeilenlinie aus nach oben erstrecken wird. Der Bereich beginnt bei Linie 4 und erstreckt sich über 3 Linien bis Linie 1.

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: span 3;
  grid-row-end: 4;
}
```

Um sich mit der linienbasierten Positionierung im Raster vertraut zu machen, versuchen Sie, einige häufige Layouts zu erstellen, indem Sie Elemente auf Rastern mit unterschiedlichen Spaltenanzahlen platzieren. Denken Sie daran, dass alle nicht platzierten Elemente entsprechend den Regeln für die automatische Platzierung angeordnet werden. Dies könnte das gewünschte Layout ergeben, aber wenn etwas an einem unerwarteten Ort erscheint, überprüfen Sie, ob Sie eine Position dafür festgelegt haben.

Beachten Sie auch, dass sich Elemente im Raster überlappen können, wenn Sie sie auf diese Weise explizit platzieren. Überlappende Elemente können einige nette Effekte erzeugen, Sie können jedoch auch unerwünschte Überlappungen haben, wenn Sie falsche Start- oder Endlinien angeben. Die Überprüfung von Rastern mit den Entwicklertools Ihres Browsers kann sehr hilfreich sein, um solche Probleme zu identifizieren, insbesondere wenn Ihr Raster recht kompliziert ist.
