---
title: Grid-Layout mit linienbasierter Platzierung
slug: Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement
l10n:
  sourceCommit: a7444882eb1b18918f3c924d83eb3c78f245643a
---

{{CSSRef}}

Im [Leitfaden zu den grundlegenden Konzepten von Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) haben wir uns kurz angeschaut, wie Elemente anhand von Liniennummern in einem Gitter positioniert werden können. In diesem Leitfaden werden wir vollständig untersuchen, wie diese grundlegende Funktion der Spezifikation funktioniert.

Mit nummerierten Linien zu beginnen, wenn Sie Grid untersuchen, ist der logischste Ausgangspunkt, da Sie bei Verwendung des Grid-Layouts immer nummerierte Linien haben. Die Linien werden für Spalten und Zeilen nummeriert und beginnen mit `1`. Beachten Sie, dass Grid gemäß des Schreibmodus des Dokuments indiziert wird. In einer von links nach rechts geschriebenen Sprache wie Englisch befindet sich Linie 1 auf der linken Seite des Gitters. Wenn Sie in einer von rechts nach links geschriebenen Sprache wie Arabisch arbeiten, befindet sich Linie 1 auf der rechten Seite des Gitters. Wir werden mehr über die Interaktion zwischen Schreibmodi und Gittern im [Leitfaden zu Gittern, logischen Werten und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes) lernen.

## Ein einfaches Beispiel

In einem einfachen Beispiel erstellen wir ein Gitter mit 3 Spaltenstrecken und 3 Zeilenstrecken. Dies ergibt 4 Linien in jeder Dimension.

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

Innerhalb unseres Gittercontainers fügen wir vier Kind-Elemente hinzu.

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

{{ EmbedLiveSample('A_basic_example', '300', '330') }}

Wenn wir diese Elemente nicht explizit im Gitter platzieren, werden sie gemäß der Regeln der automatischen Platzierung verteilt, ein Element in jeder der ersten vier Zellen. Sie können das Gitter mit den Entwicklerwerkzeugen Ihres Browsers inspizieren, um zu sehen, wie Spalten und Zeilen des Gitters definiert sind.

![Das Beispielgitter im DevTools hervorgehoben](highlighted_grid.png)

## Elemente anhand von Liniennummern positionieren

Wir können die linienbasierte Platzierung verwenden, um zu steuern, wo sich diese Elemente auf dem Gitter befinden. Wir können die Eigenschaften {{cssxref("grid-column-start")}} und {{cssxref("grid-column-end")}} verwenden, um das erste Element auf der äußersten linken Seite des Gitters beginnen zu lassen und es nur eine Spaltenstrecke umfassen zu lassen. Mit {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}} beginnt das Element in der ersten Zeilenlinie oben im Gitter und erstreckt sich bis zur vierten Zeilenlinie.

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
}
```

Wenn Sie einige Elemente positionieren, werden andere Elemente im Gitter weiterhin gemäß den Regeln der automatischen Platzierung verteilt. Dieses Verhalten wird im [Leitfaden zur automatischen Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout) erklärt. Beobachten Sie zunächst, wie das Gitter nicht platzierte Elemente in leere Zellen des Gitters einfügt.

Indem Sie jedes Element einzeln mit denselben Eigenschaften, aber unterschiedlichen Werten ansprechen, können Sie alle vier Elemente platzieren, die sich über Zeilen- und Spaltenstrecken erstrecken.

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

Beachten Sie, dass wir Zellen nach Belieben leer lassen können. Eine der wesentlichen Stärken des Grid-Layouts ist die Fähigkeit, Leerraum in Designs zu schaffen, ohne irgendwelche Tricks anzuwenden.

## Die Kurzschreibweise `grid-column` und `grid-row`

Das vorherige Beispiel enthielt ziemlich viel Code, um jedes Element zu positionieren. Es ist nicht überraschend, dass es eine [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) gibt. Die Eigenschaften {{cssxref("grid-column-start")}} und {{cssxref("grid-column-end")}} können zu {{cssxref("grid-column")}} kombiniert werden, ebenso {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}} zu {{cssxref("grid-row")}}. In diesem Beispiel replizieren wir das obige Beispiel mit diesen Kurzschreibweisen:

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

## Standardmäßige Bereiche

In den obigen Beispielen haben wir jede Endzeile und jede Spaltenlinie, um die Eigenschaften zu demonstrieren, angegeben. In der Praxis können Sie jedoch, wenn ein Element nur eine Strecke umfasst, den Wert für `grid-column-end` oder `grid-row-end` weglassen. Grid legt standardmäßig eine Strecke von einem Track fest.

### Standardmäßige Bereiche mit detaillierter Platzierung

Das bedeutet, dass unser anfängliches, ausführliches Beispiel folgendermaßen aussehen würde:

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

### Standardmäßige Bereiche mit Kurzschreibweise

Unsere Kurzschreibweise würde wie der folgende Code aussehen, ohne einen Schrägstrich und einen zweiten Wert für Elemente, die nur eine Strecke umfassen.

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

Wir können noch einen Schritt weiter gehen und jede Fläche mit einer einzigen Eigenschaft definieren – {{cssxref("grid-area")}}. Die Reihenfolge der Werte für `grid-area` ist wie folgt.

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

Diese Reihenfolge der Werte für `grid-area` mag etwas ungewöhnlich erscheinen – sie ist das Gegenteil der Richtung, in der wir Ränder und Abstände in einer Kurzform angeben, z. B. `margin` und `padding`. Es kann hilfreich sein, zu erkennen, dass dies daran liegt, dass das CSS-Grid-Layout die flussrelativen Richtungen verwendet, die in [CSS-Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes) definiert sind. Wir erkunden, wie Grids mit Schreibmodi funktionieren, im [Leitfaden zu Gittern, logischen Werten und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes). Betrachten Sie zunächst das Konzept der vier {{Glossary("Flow_relative_values", "flussrelativen Werte")}}:

- `block-start`
- `block-end`
- `inline-start`
- `inline-end`

Wir arbeiten hier in Englisch, einer von links nach rechts Sprache. Unser `block-start` ist die obere Zeilenlinie des Gittercontainers, `block-end` ist die unterste Zeilenlinie des Containers. Unser `inline-start` ist die linke Spaltenlinie, da `inline-start` immer der Punkt ist, an dem Text im aktuellen Schreibmodus geschrieben würde, während `inline-end` die letzte Spaltenlinie unseres Gitters ist.

Wenn wir unsere Gitterfläche mit der Eigenschaft `grid-area` festlegen, definieren wir zuerst beide Startlinien `block-start` und `inline-start`, dann beide Endlinien `block-end` und `inline-end`. Dies mag zu Beginn ungewöhnlich erscheinen, da wir an die {{Glossary("physical_properties", "physischen Eigenschaften")}} von `top`, `right`, `bottom` und `left` gewöhnt sind. Es ergibt jedoch mehr Sinn, wenn Sie Webseiten als multidirektionale Entitäten in verschiedenen Schreibmodi betrachten.

## Rückwärts zählen

Zusätzlich können wir von den Block- und Inline-Enden des Gitters aus rückwärts zählen. Für Englisch würde dies die rechte Spaltenlinie und die unterste Zeilenlinie betreffen. Die letzten Linien des expliziten Gitters können als `-1` adressiert werden, und Sie können von dort aus rückwärts zählen – die zweitletzte Linie ist z. B. `-2`.

Beachten Sie jedoch, dass negative Werte nur für das explizite Gitter relevant sind. Die letzte Linie ist die letzte Linie des durch `grid-template-columns` und `grid-template-rows` definierten Gitters und berücksichtigt keine Zeilen oder Spalten, die im _impliziten Gitter_ außerhalb davon hinzugefügt wurden.

Im nächsten Beispiel haben wir das Layout so geändert, dass wir ausgehend von der rechten und unteren Seite unseres Gitters die Elemente platzieren.

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

### Ein Element über das gesamte Gitter spannen

Es ist nützlich, den Start- und Endlinien des Gitters Adressen zuzuweisen, da Sie dadurch ein Element über das gesamte Gitter spannen können, etwa so:

```css
.item {
  grid-column: 1 / -1;
}
```

## Abstände oder "Gutters"

CSS-Grid ermöglicht die Hinzufügung von Abständen zwischen Spalten- und Zeilenstrecken mit den Eigenschaften {{cssxref("column-gap")}} und {{cssxref("row-gap")}}, oder der Kurzschreibweise {{cssxref("gap")}}.

Abstände erscheinen nur zwischen den Strecken des Gitters. Sie fügen weder an den oberen und unteren noch den linken oder rechten Seiten des Containers zusätzlichen Platz hinzu. Wir können Abstände zu unserem vorherigen Beispiel hinzufügen, indem wir diese Eigenschaften auf den Gittercontainer anwenden.

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

### Die Kurzschreibweise für Gap

Die beiden Eigenschaften können auch in der Kurzform ausgedrückt werden, {{cssxref("gap")}}. Wenn Sie nur einen Wert für `gap` angeben, gilt dieser sowohl für Zeilen- als auch Spaltenabstände. Wenn Sie zwei Werte angeben, wird der erste für `row-gap` und der zweite für `column-gap` verwendet.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 1em 20px;
}
```

In Bezug auf die linienbasierte Platzierung von Elementen verhält sich die Lücke so, als hätte die Linie zusätzliche Breite erhalten. Alles, was bei dieser Linie beginnt, startet nach der Lücke und Sie können die Lücke nicht direkt adressieren oder etwas in sie setzen. Wenn Sie Abstände wünschen, die sich eher wie reguläre Strecken verhalten, können Sie dafür eine Strecke definieren.

## Das Keyword `span` verwenden

Neben der Festlegung der Start- und Endlinien durch Zahlen können Sie auch eine Startlinie festlegen und dann die Anzahl der Strecken, die der Bereich umfassen soll, mit dem Keyword `span` angeben.

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

Sie können das Keyword `span` auch im Wert von `grid-row-start`/`grid-row-end` und `grid-column-start/grid-column-end` verwenden. Die folgenden zwei Beispiele erzeugen denselben Gitterbereich. Im ersten Beispiel legen wir die Startzeilenlinie fest, dann die Endlinie, und geben an, dass der Bereich 3 Strecken umfassen soll. Der Bereich beginnt bei Linie 1 und endet 3 Linien von Linie 1 entfernt, also bei Linie 4.

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: span 3;
}
```

Im zweiten Beispiel geben wir die Endzeilenlinie an, an der das Element enden soll, und legen dann die Startlinie als `span 3` fest. Dies bedeutet, dass sich das Element von der angegebenen Zeilenlinie 3 Strecken nach oben erstrecken wird. Der Bereich beginnt bei Linie 4 und erstreckt sich über 3 Linien bis zu Linie 1.

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: span 3;
  grid-row-end: 4;
}
```

Um sich mit der linienbasierten Platzierung im Grid vertraut zu machen, versuchen Sie, ein paar gängige Layouts zu erstellen, indem Sie Elemente auf Gittern mit unterschiedlichen Spaltenanzahlen platzieren. Denken Sie daran, dass, wenn Sie nicht alle Elemente platzieren, die übrig gebliebenen Elemente gemäß den Regeln der automatischen Platzierung verteilt werden. Dies kann zu dem gewünschten Layout führen, aber wenn etwas unerwartet erscheint, überprüfen Sie, ob Sie eine Position für das Element festgelegt haben.

Denken Sie außerdem daran, dass sich Elemente im Gitter überlappen können, wenn Sie sie explizit auf diese Weise platzieren. Überlappende Elemente können einige schöne Effekte erzeugen, aber auch falsches Überlappen kann auftreten, wenn Sie eine falsche Start- oder Endlinie angeben. Das Gitter mit den Entwicklerwerkzeugen Ihres Browsers zu inspizieren, kann beim Erlernen dieses Konzepts besonders hilfreich sein, insbesondere wenn Ihr Gitter ziemlich komplex ist.
