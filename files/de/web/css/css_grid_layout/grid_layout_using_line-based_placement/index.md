---
title: Rasterlayout mit linienbasierter Platzierung
slug: Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Im [Artikel über die grundlegenden Konzepte des Rasterlayouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) haben wir begonnen, uns anzuschauen, wie man Elemente in einem Raster mithilfe von Liniennummern positioniert. In diesem Artikel werden wir vollständig erkunden, wie dieses grundlegende Merkmal der Spezifikation funktioniert.

Das Erforschen des Rasters mit nummerierten Linien ist der logischste Anfangspunkt, denn wenn Sie ein Rasterlayout verwenden, haben Sie immer nummerierte Linien. Die Linien sind für Spalten und Zeilen nummeriert und ab 1 indexiert. Beachten Sie, dass das Raster entsprechend der Schreibrichtung des Dokuments indiziert wird. In einer von links nach rechts verlaufenden Sprache wie Englisch ist Linie 1 auf der linken Seite des Rasters. Wenn Sie in einer von rechts nach links verlaufenden Sprache wie Arabisch arbeiten, ist Linie 1 ganz rechts im Raster. In einem späteren Leitfaden werden wir mehr über die Interaktion zwischen Schreibrichtungen und Rastern erfahren.

## Ein einfaches Beispiel

Als ein sehr einfaches Beispiel können wir ein Raster mit 3 Spaltentracks und 3 Zeilentracks nehmen. Dies ergibt 4 Linien in jeder Dimension.

Innerhalb unseres Rastercontainers haben wir vier Kind-Elemente. Wenn wir diese auf keine Weise im Raster platzieren, werden sie gemäß den Auto-Platzierung-Regeln verteilt, ein Element in jeder der ersten vier Zellen. Wenn Sie den [Firefox Raster-Highlighter](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) verwenden, können Sie sehen, wie das Raster Spalten und Zeilen definiert hat.

![Unser Raster im Entwicklertools hervorgehoben](highlighted_grid.png)

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

## Positionierung von Elementen durch Liniennummerierung

Wir können die linienbasierte Platzierung verwenden, um zu steuern, wo sich diese Elemente im Raster befinden. Wir möchten, dass das erste Element ganz links im Raster beginnt und einen einzelnen Spaltentrack umfasst. Es sollte auch auf der ersten Zeilenlinie, oben im Raster, beginnen und bis zur vierten Zeilenlinie reichen.

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
}
```

Während Sie einige Elemente positionieren, werden andere Elemente im Raster weiterhin nach den Auto-Platzierungsregeln angeordnet. Wir werden uns in einem späteren Leitfaden genauer ansehen, wie diese funktionieren, aber Sie können sehen, dass das Raster nicht platzierte Elemente in leere Zellen des Rasters einfügt.

Indem wir jedes Element einzeln adressieren, können wir alle vier Elemente über Zeilen- und Spaltentracks platzieren. Beachten Sie, dass wir Zellen leer lassen können, wenn wir möchten. Einer der sehr schönen Aspekte des Rasterlayouts ist die Möglichkeit, Leerstellen in unseren Designs zu haben, ohne dass man Dinge mit Rändern verschieben muss, um zu verhindern, dass Floats in den freigelassenen Raum aufsteigen.

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

Wir haben hier ziemlich viel Code, um jedes Element zu positionieren. Es sollte Sie nicht überraschen, dass es eine [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) gibt. Die {{cssxref("grid-column-start")}} und {{cssxref("grid-column-end")}} Eigenschaften können in {{cssxref("grid-column")}} kombiniert werden, {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}} in {{cssxref("grid-row")}}.

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

## Standards für Spannweiten

In den obigen Beispielen haben wir jede Endzeilen- und Spaltenlinie spezifiziert, um die Eigenschaften zu demonstrieren, jedoch in der Praxis, wenn ein Element nur einen Track umspannt, können Sie den `grid-column-end` oder `grid-row-end` Wert weglassen. Raster standardmäßig auf das Überbrücken eines Tracks.

### Standards für Spannweiten mit Langschreibung

Das bedeutet, dass unser anfängliches Langhand-Beispiel so aussehen würde:

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

### Standards für Spannweiten mit Kurzschrift

Unsere Kurzschrift würde wie folgt aussehen, ohne Schrägstrich und zweiten Wert für die Elemente, die nur einen Track umfassen.

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

Diese Reihenfolge der Werte für `grid-area` kann etwas merkwürdig erscheinen, sie ist entgegengesetzt der Richtung, in der wir Margins und Padding als Kurzschrift spezifizieren, zum Beispiel. Es kann helfen zu realisieren, dass dies auf die Verwendung der flussrelativen Richtungen im Grid zurückzuführen ist, wie sie in der CSS Writing Modes-Spezifikation definiert sind. Wir werden erkunden, wie Raster mit Schreibmodi in einem späteren Artikel funktionieren, jedoch besitzen wir das Konzept von vier flussrelativen Richtungen:

- block-start
- block-end
- inline-start
- inline-end

Wir arbeiten in Englisch, einer von links nach rechts verlaufenden Sprache. Unser block-start ist die Oberzeilenlinie des Rastercontainers, block-end ist die letzte Zeilenlinie des Containers. Unser inline-start ist die linke Spaltenlinie, da inline-start immer der Punkt ist, von dem aus Text im aktuellen Schreibmodus geschrieben würde, inline-end ist die letzte Spaltenlinie unseres Rasters.

Wenn wir unser Rasterfläche mit der Eigenschaft `grid-area` spezifizieren, definieren wir zuerst beide Startlinien `block-start` und `inline-start`, dann beide Endlinien `block-end` und `inline-end`. Dies scheint zunächst ungewöhnlich, da wir an die physischen Eigenschaften von oben, rechts, unten und links gewöhnt sind, aber es macht mehr Sinn, wenn Sie beginnen, Websites als multi-direktional im Schreibmodus zu betrachten.

## Rückwärts zählen

Wir können auch rückwärts von der Block- und Inline-Ende des Rasters zählen, für Englisch wäre das die rechte Spaltenlinie und die letzte Zeilenlinie. Diese Linien können als `-1` angesprochen werden, und Sie können von dort rückwärts zählen – also ist die vorletzte Linie `-2`. Es ist wichtig zu beachten, dass die letzte Linie die letzte Linie des _expliziten Rasters_ ist, das Raster, das durch `grid-template-columns` und `grid-template-rows` definiert wird, und keine Zeilen oder Spalten berücksichtigt, die im _impliziten Raster_ außerhalb davon hinzugefügt wurden.

Im nächsten Beispiel haben wir das Layout, an dem wir gearbeitet haben, umgedreht, indem wir von rechts und unten im Raster gearbeitet haben, wenn wir die Elemente platzieren.

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

Es ist nützlich, die Start- und Endlinien des Rasters adressieren zu können, da Sie dann ein Element direkt über das Raster strecken können mit:

```css
.item {
  grid-column: 1 / -1;
}
```

## Zwischenräume oder Lücken

Die CSS-Raster-Spezifikation umfasst die Möglichkeit, Zwischenräume zwischen Spalten- und Zeilentracks mit den Eigenschaften {{cssxref("column-gap")}} und {{cssxref("row-gap")}} hinzuzufügen. Diese spezifizieren einen Abstand, der ähnlich wie die {{cssxref("column-gap")}} Eigenschaft im Mehrspaltenlayout wirkt.

> [!NOTE]
> Als das Raster zum ersten Mal in Browsern implementiert wurde, waren die Eigenschaften {{cssxref("column-gap")}}, {{cssxref("row-gap")}} und {{cssxref("gap")}} mit dem `grid-` Präfix als `grid-column-gap`, `grid-row-gap` und `grid-gap` vorangestellt.
>
> Browser aktualisieren ihre Rendering-Engines, um dieses Präfix zu entfernen, jedoch werden die vorangestellten Versionen als Aliase beibehalten, was sie sicher für die Verwendung macht.

Zwischenräume erscheinen nur zwischen den Tracks des Rasters, sie fügen keinen Raum an der Ober- und Unterseite, links oder rechts des Containers hinzu. Wir können Lücken zu unserem vorherigen Beispiel hinzufügen, indem wir diese Eigenschaften auf den Rastercontainer anwenden.

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

### Die gap Kurzschreibweise

Die beiden Eigenschaften können auch als Kurzschreibweise ausgedrückt werden, {{cssxref("gap")}}. Wenn Sie nur einen Wert für `gap` angeben, wird dieser sowohl für Zwischenreihen als auch für Zwischenspalten angewendet. Wenn Sie zwei Werte angeben, wird der erste für `row-gap` und der zweite für `column-gap` verwendet.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 1em 20px;
}
```

Bei der linienbasierten Positionierung von Elementen wirkt die Lücke als ob die Linie extra Breite erhalten hätte. Alles, was an dieser Linie beginnt, beginnt nach der Lücke und Sie können die Lücke nicht adressieren oder etwas darin platzieren. Wenn Sie Zwischenräume möchten, die mehr wie reguläre Tracks funktionieren, können Sie natürlich einen Track zu diesem Zweck definieren.

## Verwendung des `span` Schlüsselworts

Zusätzlich zur Angabe der Start- und Endlinien durch Nummern, können Sie eine Startlinie angeben und dann die Anzahl an Tracks, die Sie umfassen möchten.

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

Sie können auch das `span` Schlüsselwort im Wert von `grid-row-start`/`grid-row-end` und `grid-column-start/grid-column-end` verwenden. Die folgenden zwei Beispiele erstellen denselben Rasterbereich. Im ersten Beispiel setzen wir die Startzeilenlinie, dann spezifizieren wir in der Endzeile, dass wir möchten, dass der Bereich 3 Tracks umfasst. Der Bereich beginnt bei Linie 1 und endet 3 Linien von Linie 1 entfernt; das bedeutet, der Bereich endet bei Linie 4.

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: span 3;
}
```

Im zweiten Beispiel spezifizieren wir die Endzeilenlinie, bei der das Element enden soll, und setzen dann die Startlinie als `span 3`. Das bedeutet, dass das Element von der spezifizierten Zeilenlinie nach oben gespannte werden muss. Der Bereich wird bei Linie 4 beginnen und 3 Linien bis zu Linie 1 spannnen.

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: span 3;
  grid-row-end: 4;
}
```

Um sich mit der linienbasierten Positionierung im Raster vertraut zu machen, versuchen Sie ein paar gängige Layouts zu erstellen, indem Sie Elemente auf Rastern mit verschiedenen Anzahlen von Spalten platzieren. Denken Sie daran, dass, wenn Sie nicht alle Elemente platzieren, verbleibende Elemente gemäß den Auto-Platzierungsregeln platziert werden. Dies kann zu dem gewünschten Layout führen, aber wenn etwas an einer unerwarteten Stelle erscheint, überprüfen Sie, ob Sie dafür eine Position festgelegt haben.

Denken Sie auch daran, dass sich Elemente im Raster gegenseitig überlappen können, wenn Sie sie explizit so platzieren. Das kann einige schöne Effekte erzeugen, jedoch können auch Dinge fälschlicherweise überlappen, wenn Sie die falsche Start- oder Endlinie angeben. Der [Firefox Raster-Highlighter](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) kann sehr nützlich sein, während Sie lernen, besonders wenn Ihr Raster ziemlich komplex ist.
