---
title: Rasterlayout mit linienbasierter Platzierung
short-title: Verwendung der linienbasierten Platzierung
slug: Web/CSS/Guides/Grid_layout/Line-based_placement
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Im [Leitfaden zu den grundlegenden Konzepten des Rasterlayouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts) haben wir uns kurz mit der Positionierung von Elementen in einem Raster mittels Linienzahlen beschäftigt. In diesem Leitfaden werden wir genau untersuchen, wie dieses grundlegende Merkmal der Spezifikation funktioniert.

Es ist am logischsten, sich zunächst mit nummerierten Linien im Raster auseinanderzusetzen, da Sie bei der Verwendung eines Rasterlayouts immer nummerierte Linien haben. Die Linien sind für Spalten und Reihen nummeriert und beginnen bei `1`. Beachten Sie, dass das Raster entsprechend der Schreibweise des Dokuments indiziert wird. In einer von links nach rechts ausgerichteten Sprache wie Englisch befindet sich Linie 1 auf der linken Seite des Rasters. Arbeiten Sie in einer von rechts nach links ausgerichteten Sprache wie Arabisch, befindet sich Linie 1 auf der rechten Seite des Rasters. Mehr über die Interaktion zwischen Schreibweisen und Rastern erfahren Sie im Leitfaden zu [Rastern, logischen Werten und Schreibmodi](/de/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes).

## Ein einfaches Beispiel

Als einfaches Beispiel erstellen wir ein Raster mit 3 Spalten- und 3 Reihen-Tracks. Dies ergibt 4 Linien in jeder Dimension.

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

In unserem Raster-Container fügen wir vier Kind-Elemente ein.

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

{{ EmbedLiveSample('A_basic_example', '300', '330') }}

Wenn wir diese nicht auf irgendeine Weise im Raster platzieren, werden sie gemäß den Regeln der automatischen Platzierung ausgelegt, wobei jedes Element in einer der ersten vier Zellen landet. Sie können das Raster mit den Entwickler-Tools Ihres Browsers inspizieren, um zu sehen, wie das Raster Spalten und Reihen definiert.

![Das Beispielraster im DevTools hervorgehoben](highlighted_grid.png)

## Positionierung von Elementen nach Liniennummer

Wir können die linienbasierte Platzierung verwenden, um zu steuern, wo diese Elemente im Raster sitzen. Wir können die Eigenschaften {{cssxref("grid-column-start")}} und {{cssxref("grid-column-end")}} verwenden, damit das erste Element ganz links im Raster beginnt und eine einzelne Spalten-Spur überspannt. Mit {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}} wird das Element auf der ersten Zeilenlinie oben im Raster positioniert und erstreckt sich bis zur vierten Zeilenlinie.

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
}
```

Beim Positionieren einiger Elemente werden andere Elemente im Raster weiterhin nach den Regeln der automatischen Platzierung angeordnet. Dieses Verhalten wird im [Leitfaden zur automatischen Platzierung im Rasterlayout](/de/docs/Web/CSS/Guides/Grid_layout/Auto-placement) erklärt. Beobachten Sie vorerst, wie das Raster unnötig platzierte Elemente in leere Zellen einfügt.

Jedes Element individuell ansprechbar zu machen, indem man dieselben Eigenschaften mit unterschiedlichen Werten verwendet, platzieren wir alle vier Elemente, indem wir Reihen- und Spalten-Tracks überspannen.

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

Beachten Sie, dass wir Zellen leer lassen können, wenn wir möchten. Eine der sehr schönen Eigenschaften des Rasterlayouts ist die Möglichkeit, Weißraum in unseren Designs zu haben, ohne Hack-Techniken anwenden zu müssen.

## Die `grid-column` und `grid-row` Kurzformen

Das vorherige Beispiel enthielt viel Code, um jedes Element zu positionieren. Es sollte nicht überraschen, dass es dafür eine [Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) gibt. Die Eigenschaften {{cssxref("grid-column-start")}} und {{cssxref("grid-column-end")}} können zu {{cssxref("grid-column")}} kombiniert werden, {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}} zu {{cssxref("grid-row")}}. In diesem Beispiel replizieren wir das obige Beispiel mit diesen Kurzform-Eigenschaften:

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

## Standard-Spannweiten

In den obigen Beispielen haben wir jede Endreihe und -spaltenlinie angegeben, um die Eigenschaften zu demonstrieren. In der Praxis, wenn ein Element nur eine Spur überspannt, können Sie den `grid-column-end` oder `grid-row-end` Wert weglassen. Standardmäßig überspannt das Raster eine Spur.

### Standard-Spannweiten mit Langform-Platzierung

Dies bedeutet, dass unser anfängliches Langform-Beispiel so aussehen würde:

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

### Standard-Spannweiten mit Kurzform-Platzierung

Unsere Kurzform würde wie folgt aussehen, ohne Schrägstrich und zweiten Wert für die Elemente, die nur eine Spur überspannen.

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

Wir können noch einen Schritt weiter gehen und jeden Bereich mit einer einzigen Eigenschaft definieren – {{cssxref("grid-area")}}. Die Reihenfolge der Werte für `grid-area` ist wie folgt.

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

Diese Reihenfolge der Werte für `grid-area` mag etwas merkwürdig erscheinen — sie ist das Gegenteil der Richtung, in der wir zum Beispiel Margen und Abstände als Kurzform angeben. Es kann hilfreich sein zu verstehen, dass dies daran liegt, dass das CSS-Rasterlayout die flussrelativen Richtungen verwendet, die in den [CSS-Schreibmodi](/de/docs/Web/CSS/Guides/Writing_modes) definiert sind. Wir untersuchen, wie Raster mit Schreibmodi funktionieren, in [Rastern, logischen Werten und Schreibmodi](/de/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes). Betrachten Sie vorerst das Konzept von vier {{Glossary("Flow_relative_values", "flussrelativen")}} Richtungen:

- `block-start`
- `block-end`
- `inline-start`
- `inline-end`

Wir arbeiten auf Englisch, einer von links nach rechts ausgerichteten Sprache. Unser `block-start` ist die obere Zeilenlinie des Raster-Containers, `block-end` ist die letzte Zeilenlinie des Containers. Unser `inline-start` ist die linke Spaltenlinie, da `inline-start` immer der Punkt ist, an dem im aktuellen Schreibmodus Text geschrieben wird, während `inline-end` die letzte Spaltenlinie unseres Rasters ist.

Wenn wir unseren Rasterbereich mit der `grid-area` Eigenschaft spezifizieren, definieren wir zuerst beide Startlinien `block-start` und `inline-start`, dann beide Endlinien `block-end` und `inline-end`. Dies scheint auf den ersten Blick ungewöhnlich, da wir an die {{Glossary("physical_properties", "physikalischen Eigenschaften")}} von `top`, `right`, `bottom` und `left` gewöhnt sind, aber es macht mehr Sinn, wenn Sie anfangen, Websites als multidirektional in verschiedenen Schreibmodi zu betrachten.

## Rückwärts zählen

Wir können auch von den Block- und Inline-Enden des Rasters rückwärts zählen, für Englisch wäre das die rechte Spaltenlinie und die letzte Zeilenlinie. Die letzten Linien des expliziten Rasters können als `-1` angesprochen werden, und Sie können von dort aus rückwärts zählen – die zweitletzte Linie ist `-2`.

Beachten Sie, dass negative Werte nur für das explizite Raster relevant sind. Die letzte Linie ist die letzte Linie des Rasters, das durch `grid-template-columns` und `grid-template-rows` definiert ist, und berücksichtigt nicht die in den _impliziten Raster_ hinzugefügten Zeilen oder Spalten außerhalb davon.

In diesem nächsten Beispiel haben wir das Layout, mit dem wir gearbeitet haben, umgekehrt, indem wir von rechts und unten in unserem Raster arbeiten, wenn wir die Elemente platzieren.

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

### Ein Element über das gesamte Raster strecken

In der Lage zu sein, die Start- und Endlinien des Rasters anzusprechen, ist nützlich, da Sie ein Element dann mit:

```css
.item {
  grid-column: 1 / -1;
}
```

## Zwischenräume oder Gassen

CSS-Raster bietet die Möglichkeit, Zwischenräume zwischen Spalten- und Zeilen-Tracks mit den Eigenschaften {{cssxref("column-gap")}} und {{cssxref("row-gap")}} oder der Kurzform {{cssxref("gap")}} hinzuzufügen.

Lücken erscheinen nur zwischen Tracks des Rasters, sie fügen dem Container oben und unten, links oder rechts keinen Raum hinzu. Wir können unseren vorherigen Beispielen Lücken hinzufügen, indem wir diese Eigenschaften auf den Raster-Container anwenden.

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

### Die Kurzform der Lücke

Die beiden Eigenschaften können auch als Kurzform {{cssxref("gap")}} ausgedrückt werden. Wenn Sie nur einen Wert für `gap` angeben, wird er sowohl für Spalten- als auch für Zeilenabstände gelten. Wenn Sie zwei Werte angeben, wird der erste für `row-gap` und der zweite für `column-gap` verwendet.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 1em 20px;
}
```

In Bezug auf die linienbasierte Positionierung von Elementen wirkt der Abstand so, als hätte die Linie eine größere Breite gewonnen. Alles, was an dieser Linie beginnt, beginnt nach dem Abstand und Sie können den Abstand nicht ansprechen oder etwas in ihm platzieren. Wenn Sie Zwischenräume wünschen, die eher wie reguläre Tracks funktionieren, können Sie dafür einen Track definieren.

## Verwendung des `span` Schlüsselworts

Zusätzlich zur Angabe der Start- und Endlinien nach Nummer können Sie eine Startlinie und dann die Anzahl der Tracks angeben, die Sie mit dem `span` Schlüsselwort überspannen möchten.

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

Sie können das `span` Schlüsselwort auch im Wert von `grid-row-start`/`grid-row-end` und `grid-column-start/grid-column-end` verwenden. Die folgenden zwei Beispiele erstellen denselben Rasterbereich. Im ersten legen wir die Startzeilenlinie fest, dann bei der Endlinie geben wir an, dass wir wollen, dass der Bereich 3 Tracks umfasst. Der Bereich beginnt bei Linie 1 und endet 3 Linien von Linie 1; das heißt, der Bereich endet bei Linie 4.

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: span 3;
}
```

Im zweiten Beispiel geben wir die Endzeilenlinie an, an der das Element enden soll, und setzen dann die Startlinie als `span 3`. Dies bedeutet, dass das Element von der angegebenen Zeilenlinie aus nach oben erstreckt werden muss. Der Bereich beginnt bei Linie 4 und erstreckt sich über 3 Linien bis Linie 1.

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: span 3;
  grid-row-end: 4;
}
```

Um sich mit der linienbasierten Positionierung im Raster vertraut zu machen, versuchen Sie, ein paar gängige Layouts zu erstellen, indem Sie Elemente auf Rastern mit unterschiedlicher Spaltenanzahl platzieren. Denken Sie daran, dass, wenn Sie nicht alle Elemente platzieren, eventuell übrig gebliebene Elemente gemäß den Regeln der automatischen Platzierung angeordnet werden. Dies könnte das gewünschte Layout ergeben, aber wenn etwas an einem unerwarteten Ort erscheint, überprüfen Sie, ob Sie ihm eine Position zugewiesen haben.

Denken Sie auch daran, dass sich Elemente auf dem Raster überlappen können, wenn Sie sie explizit so platzieren. Überlappende Elemente können einige schöne Effekte erzeugen, jedoch können auch falsche Überlappungen auftreten, wenn Sie die falsche Start- oder Endlinie angeben. Die Untersuchung von Rastern mit den Entwickler-Tools Ihres Browsers kann sehr hilfreich sein, um solche Probleme zu identifizieren, insbesondere wenn Ihr Raster ziemlich kompliziert ist.
