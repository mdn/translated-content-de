---
title: Grid-Layout mithilfe von linienbasierter Platzierung
slug: Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Im [Artikel, der die grundlegenden Konzepte des Grid-Layouts behandelt](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout), begannen wir zu untersuchen, wie man Elemente in einem Grid mit Liniennummern positioniert. In diesem Artikel werden wir vollständig erkunden, wie dieses grundlegende Merkmal der Spezifikation funktioniert.

Die Untersuchung von Grids mit nummerierten Linien zu beginnen, ist der logischste Ausgangspunkt, da Sie bei der Verwendung des Grid-Layouts immer nummerierte Linien haben. Die Linien sind für Spalten und Zeilen nummeriert und werden ab 1 indiziert. Beachten Sie, dass das Grid gemäß der Schreibrichtung des Dokuments indiziert ist. In einer von links nach rechts verlaufenden Sprache wie dem Englischen befindet sich Linie 1 auf der linken Seite des Grids. Wenn Sie in einer von rechts nach links verlaufenden Sprache wie dem Arabischen arbeiten, befindet sich Linie 1 ganz rechts im Grid. Wir werden mehr über die Interaktion zwischen Schreibrichtungen und Grids in einem späteren Leitfaden lernen.

## Ein einfaches Beispiel

Als ein sehr einfaches Beispiel können wir ein Grid mit 3 Spaltentracks und 3 Zeilentracks nehmen. Dies gibt uns 4 Linien in jeder Dimension.

In unserem Grid-Container haben wir vier Kindelemente. Wenn wir diese nicht auf das Grid legen, werden sie gemäß den Regeln der automatischen Platzierung ausgerichtet, wobei ein Element in jeder der ersten vier Zellen liegt. Wenn Sie den [Firefox-Grid-Highlighter](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) verwenden, können Sie sehen, wie das Grid Spalten und Zeilen definiert hat.

![Unser Grid im DevTools hervorgehoben](highlighted_grid.png)

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

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

{{ EmbedLiveSample('A_basic_example', '300', '330') }}

## Positionierung von Elementen anhand der Liniennummer

Wir können die linienbasierte Platzierung verwenden, um zu steuern, wo diese Elemente im Grid sitzen. Wir möchten, dass das erste Element ganz links im Grid beginnt und einen einzigen Spaltentrack umfasst. Es sollte auch auf der ersten Zeilenlinie starten, oben im Grid, und sich bis zur vierten Zeilenlinie erstrecken.

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
}
```

Wenn Sie einige Elemente positionieren, werden andere Elemente im Grid weiterhin nach den Regeln der automatischen Platzierung ausgerichtet. Wir werden uns diese Arbeitsweise in einem späteren Leitfaden genauer ansehen, aber Sie können beim Arbeiten beobachten, dass Grid nicht platzierte Elemente in leeren Zellen des Grids anordnet.

Indem wir jedes Element einzeln ansprechen, können wir alle vier Elemente über Zeilen- und Spaltentracks verteilen. Beachten Sie, dass wir Zellen leer lassen können, wenn wir dies wünschen. Eine der sehr schönen Eigenschaften des Grid-Layouts ist die Möglichkeit, Leerraum in unseren Designs zu haben, ohne Dinge herumschieben zu müssen, um zu verhindern, dass Floats in den Raum aufsteigen, den wir gelassen haben.

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

## Die `grid-column` und `grid-row` Kurzschreibweisen

Wir haben hier ziemlich viel Code, um jedes Element zu positionieren. Es sollte nicht überraschen, dass es eine [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) gibt. Die Eigenschaften {{cssxref("grid-column-start")}} und {{cssxref("grid-column-end")}} können in {{cssxref("grid-column")}} zusammengefasst werden, {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}} in {{cssxref("grid-row")}}.

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

## Standardmäßig Bereiche

In den obigen Beispielen haben wir jede Endzeile und Spaltenlinie angegeben, um die Eigenschaften zu demonstrieren. In der Praxis, wenn ein Element nur eine Spur überspannt, können Sie den `grid-column-end` oder `grid-row-end` Wert weglassen. Grid überspannt standardmäßig einen Track.

### Standardspannen mit Langform-Platzierung

Das bedeutet, dass unser anfängliches Langform-Beispiel so aussehen würde:

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

### Standardspannen mit Kurzform-Platzierung

Unsere Kurzform würde wie folgt aussehen, ohne Schrägstrich und ohne zweiten Wert für die Elemente, die nur eine Spur überspannen.

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

Wir können noch einen Schritt weiter gehen und jeden Bereich mit einer einzigen Eigenschaft definieren – {{cssxref("grid-area")}}. Die Reihenfolge der Werte für grid-area ist wie folgt.

- grid-row-start
- grid-column-start
- grid-row-end
- grid-column-end

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

Diese Reihenfolge der Werte für `grid-area` kann etwas seltsam erscheinen, sie ist das Gegenteil der Richtung, in der wir beispielsweise Ränder und Innenabstände als Kurzschreibweise angeben. Es könnte helfen zu verstehen, dass dies auf die Verwendung der flussrelativen Richtungen durch das Grid zurückzuführen ist, wie sie in der CSS Writing Modes-Spezifikation definiert sind. Wir werden untersuchen, wie Grids mit Schreibrichtungen in einem späteren Artikel funktionieren, jedoch haben wir das Konzept von vier flussrelativen Richtungen:

- block-start
- block-end
- inline-start
- inline-end

Wir arbeiten in Englisch, einer von links nach rechts verlaufenden Sprache. Unser block-start ist die oberste Zeilenlinie des Grid-Containers, block-end ist die letzte Zeilenlinie des Containers. Unser inline-start ist die linke Spaltenlinie, da inline-start immer der Punkt ist, von dem Text in der aktuellen Schreibrichtung geschrieben würde, inline-end ist die letzte Spaltenlinie unseres Grids.

Wenn wir unseren Gitterbereich mit der `grid-area` Eigenschaft festlegen, definieren wir zuerst beide Startlinien `block-start` und `inline-start`, dann beide Endlinien `block-end` und `inline-end`. Dies erscheint zunächst ungewöhnlich, da wir an die physischen Eigenschaften von oben, rechts, unten und links gewöhnt sind, macht aber mehr Sinn, wenn Sie beginnen, Websites als multidirektional in der Schreibrichtung zu betrachten.

## Rückwärts zählen

Wir können auch rückwärts von der Block- und Inline-Ende des Grids zählen, für Englisch wäre dies die rechte Spaltenlinie und die letzte Zeilenlinie. Diese Linien können als `-1` angesprochen werden, und Sie können von dort aus zurückzählen – sodass die zweitletzte Linie `-2` ist. Es ist erwähnenswert, dass die letzte Linie die letzte Linie des _expliziten Grids_ ist, das Grid, das durch `grid-template-columns` und `grid-template-rows` definiert wird und keinerlei Zeilen oder Spalten berücksichtigt, die im _impliziten Grid_ außerhalb davon hinzugefügt wurden.

In diesem nächsten Beispiel haben wir das Layout, mit dem wir gearbeitet haben, umgedreht, indem wir von rechts und unten in unserem Grid gearbeitet haben, wenn wir die Elemente positioniert haben.

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

### Strecken eines Elements über das Grid

In der Lage zu sein, die Start- und Endlinien des Grids anzusprechen, ist nützlich, da Sie dann ein Element mit:

```css
.item {
  grid-column: 1 / -1;
}
```

## Rinnen oder Gassen

Die CSS-Grid-Spezifikation beinhaltet die Fähigkeit, Rinnen zwischen Spalten- und Zeilentiteln mit den Eigenschaften {{cssxref("column-gap")}} und {{cssxref("row-gap")}} hinzuzufügen. Diese geben eine Lücke an, die ähnlich wie die Eigenschaft {{cssxref("column-gap")}} im Mehrspalten-Layout funktioniert.

> [!NOTE]
> Als Grid erstmals in Browsern eingeführt wurde, wurden die Eigenschaften {{cssxref("column-gap")}}, {{cssxref("row-gap")}} und {{cssxref("gap")}} mit dem `grid-` Präfix als `grid-column-gap`, `grid-row-gap` und `grid-gap` vorangestellt.
>
> Browser aktualisieren ihre Rendering-Engines, um dieses Präfix zu entfernen, jedoch werden die vorangestellten Versionen als Aliase beibehalten, sodass sie sicher verwendet werden können.

Lücken erscheinen nur zwischen den Spuren des Grids, sie fügen dem oberen und unteren, linken oder rechten Rand des Containers keinen zusätzlichen Raum hinzu. Wir können in unserem vorherigen Beispiel Lücken hinzufügen, indem wir diese Eigenschaften im Grid-Container verwenden.

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

### Die `gap` Kurzform

Die beiden Eigenschaften können auch als Kurzform ausgedrückt werden, {{cssxref("gap")}}. Wenn Sie nur einen Wert für `gap` angeben, gilt dieser sowohl für Spalten- als auch für Zeilenlücken. Wenn Sie zwei Werte angeben, wird der erste für die `row-gap` und der zweite für die `column-gap` verwendet.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 1em 20px;
}
```

In Bezug auf die linienbasierte Positionierung von Elementen verhält sich der Abstand so, als hätte die Linie eine zusätzliche Breite gewonnen. Alles, was an dieser Linie beginnt, beginnt nach dem Abstand, und Sie können den Abstand nicht ansprechen oder etwas hinein platzieren. Wenn Sie Rinnen möchten, die mehr wie reguläre Spuren wirken, können Sie natürlich stattdessen eine Spur für diesen Zweck definieren.

## Verwendung des `span` Schlüsselworts

Zusätzlich zur Angabe der Start- und Endlinien nach Nummer können Sie eine Startlinie und dann die Anzahl der Tracks angeben, die Sie abdecken möchten.

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

Sie können das `span` Schlüsselwort auch im Wert von `grid-row-start`/`grid-row-end` und `grid-column-start/grid-column-end` verwenden. Die folgenden zwei Beispiele erstellen denselben Grid-Bereich. Im ersten legen wir die Startzeilenlinie fest, dann geben wir bei der Endlinie an, dass wir möchten, dass der Bereich 3 Tracks abdeckt. Der Bereich beginnt bei Linie 1 und endet 3 Linien von Linie 1; das heißt, der Bereich endet bei Linie 4.

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: span 3;
}
```

Im zweiten Beispiel geben wir die Endzeilenlinie an, an der das Element enden soll, und setzen dann die Startlinie als `span 3`. Dies bedeutet, dass das Element von der angegebenen Zeilenlinie aus nach oben überspannt werden muss. Der Bereich beginnt bei Linie 4 und überspannt 3 Linien bis zur Linie 1.

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: span 3;
  grid-row-end: 4;
}
```

Um sich mit der linienbasierten Positionierung im Grid vertraut zu machen, probieren Sie, ein paar gängige Layouts zu erstellen, indem Sie Elemente auf Grids mit unterschiedlicher Anzahl von Spalten setzen. Denken Sie daran, dass, wenn Sie nicht alle Elemente platzieren, übrig gebliebene Elemente gemäß den Regeln der automatischen Platzierung platziert werden. Dies kann das gewünschte Layout ergeben, aber wenn etwas unerwartet an einer Stelle erscheint, überprüfen Sie, ob Sie eine Position dafür festgelegt haben.

Denken Sie auch daran, dass sich Elemente im Grid überlappen können, wenn Sie sie explizit so platzieren. Das kann einige schöne Effekte erzeugen, allerdings können sich Dinge auch falsch überlappen, wenn Sie die falsche Start- oder Endlinie angeben. Der [Firefox-Grid-Highlighter](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) kann sehr nützlich sein, wenn Sie lernen, besonders wenn Ihr Grid ziemlich kompliziert ist.
