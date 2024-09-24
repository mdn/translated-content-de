---
title: Rasterlayout mit Linien-basierter Platzierung
slug: Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Im [Artikel, der die grundlegenden Konzepte des Rasterlayouts behandelt](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout), haben wir begonnen, uns anzuschauen, wie man Elemente auf einem Raster mit Hilfe von Liniennummern positioniert. In diesem Artikel werden wir diese grundlegende Funktion der Spezifikation vollständig erkunden.

Ihr Erkundungsprozess des Rasters mit nummerierten Linien zu beginnen, ist der logischste Einstieg, denn wenn Sie ein Rasterlayout verwenden, haben Sie immer nummerierte Linien. Die Linien sind für Spalten und Zeilen nummeriert und werden ab 1 indiziert. Beachten Sie, dass ein Raster entsprechend der Schreibrichtung des Dokuments indiziert wird. In einer von links nach rechts orientierten Sprache wie Englisch liegt Linie 1 auf der linken Seite des Rasters. Wenn Sie in einer rechts-nach-links orientierten Sprache wie Arabisch arbeiten, befindet sich Linie 1 ganz rechts im Raster. Wir werden in einem späteren Leitfaden mehr über die Interaktion zwischen Schreibrichtungen und Rastern erfahren.

## Ein einfaches Beispiel

Als ein sehr einfaches Beispiel können wir ein Raster mit 3 Spalten-Tracks und 3 Zeilen-Tracks nehmen. Dies ergibt 4 Linien in jeder Dimension.

Innerhalb unseres Rastercontainers haben wir vier Kindelemente. Wenn wir diese nicht auf irgendeine Weise auf dem Raster platzieren, werden sie entsprechend den Auto-Platzierungsregeln ausgelegt, ein Element in jeder der ersten vier Zellen. Wenn Sie den [Rasterhervorheber von Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) verwenden, können Sie sehen, wie das Raster Spalten und Zeilen definiert hat.

![Unser Raster hervorgehoben in den Entwicklerwerkzeugen](highlighted_grid.png)

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

## Platzierung von Elementen nach Liniennummer

Wir können linienbasierte Platzierung verwenden, um zu kontrollieren, wo diese Elemente auf dem Raster sitzen. Wir möchten, dass das erste Element am äußersten linken Ende des Rasters beginnt und einen einzelnen Spaltentrack überspannt. Es sollte auch an der ersten Zeilenlinie, am oberen Rand des Rasters, beginnen und bis zur vierten Zeilenlinie reichen.

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
}
```

Wenn Sie einige Elemente positionieren, werden andere Elemente auf dem Raster weiterhin gemäß den Auto-Platzierungsregeln ausgelegt. Wir werden uns in einem späteren Leitfaden ausführlich damit beschäftigen, wie diese funktionieren, aber Sie können während der Arbeit sehen, dass das Raster unverteilte Elemente in leeren Zellen des Rasters auslegt.

Indem wir jedes Element einzeln ansprechen, können wir alle vier Elemente auf Zeilen- und Spaltentracks platzieren. Beachten Sie, dass wir Zellen leer lassen können, wenn wir wollen. Ein sehr angenehmes Merkmal des Rasterlayouts ist die Fähigkeit, weißen Raum in unserer Gestaltung zu haben, ohne dass wir Dinge mit Margen verschieben müssen, um zu verhindern, dass Floats in den von uns gelassenen Raum aufsteigen.

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

Wir haben hier ziemlich viel Code, um jedes Element zu positionieren. Es sollte nicht überraschen, dass es eine [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) gibt. Die Eigenschaften {{cssxref("grid-column-start")}} und {{cssxref("grid-column-end")}} können zu {{cssxref("grid-column")}} kombiniert werden, {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}} zu {{cssxref("grid-row")}}.

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

In den obigen Beispielen haben wir jede Endzeilen- und Spaltenlinie spezifiziert, um die Eigenschaften zu demonstrieren. In der Praxis, wenn ein Element nur einen Track umfasst, können Sie den Wert von `grid-column-end` oder `grid-row-end` weglassen. Standardmäßig umfasst das Raster einen Track.

### Standardüberlappungen mit Langformen

Dies bedeutet, dass unser anfängliches Beispiel in der Langform so aussehen würde:

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

### Standardüberlappungen mit Kurzformen

Unsere Kurzformen würden wie der folgende Code aussehen, ohne Schrägstrich und zweiten Wert für die Elemente, die nur einen Track umfassen.

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

Diese Reihenfolge der Werte für `grid-area` kann ein wenig merkwürdig wirken. Sie ist das Gegenteil der Richtung, in der wir zum Beispiel Margen und Polster als Kurzform angeben. Es könnte helfen zu verstehen, dass dies auf der Verwendung der flussbezogenen Richtungen im CSS Schreibmodi-Spezifikationsdokument basiert. Wir werden untersuchen, wie Raster mit Schreibrichtungen in einem späteren Artikel funktionieren, aber wir haben das Konzept von vier flussbezogenen Richtungen:

- block-start
- block-end
- inline-start
- inline-end

Wir arbeiten in Englisch, einer links-nach-rechts Sprache. Unser block-start ist die oberste Zeilenlinie des Rastercontainers, block-end ist die letzte Zeilenlinie des Containers. Unser inline-start ist die linke Spaltenlinie, da inline-start immer der Punkt ist, von dem in der aktuellen Schreibrichtung Text geschrieben würde, und inline-end ist die letzte Spaltenlinie unseres Rasters.

Wenn wir unseren Rasterbereich mit der `grid-area` Eigenschaft spezifizieren, definieren wir zuerst beide Startlinien `block-start` und `inline-start`, dann beide Endlinien `block-end` und `inline-end`. Dies scheint zunächst ungewöhnlich, da wir an die physischen Eigenschaften oben, rechts, unten und links gewöhnt sind, aber es wird mehr Sinn machen, wenn Sie anfangen, Webseiten als multi-direktional in der Schreibrichtung zu betrachten.

## Rückwärts zählen

Wir können auch rückwärts von der block- und inline-Ende des Rasters zählen; für Englisch wäre das die rechte Spaltenlinie und die letzte Zeilenlinie. Diese Linien können als `-1` angesprochen werden, und Sie können von dort rückwärts zählen - die vorletzte Linie ist `-2`. Es ist bemerkenswert, dass die letzte Linie die letzte Linie des _expliziten Rasters_ ist, das durch `grid-template-columns` und `grid-template-rows` definiert wird, und keine Zeilen oder Spalten der _impliziten Rasters_ außerhalb dessen berücksichtigt.

In diesem nächsten Beispiel haben wir das Layout, mit dem wir gearbeitet haben, umgedreht, indem wir beim Platzieren der Elemente von rechts und unten unseres Gitters gearbeitet haben.

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

Die Möglichkeit, die Start- und Endlinien des Gitters anzusprechen, ist nützlich, da Sie dann ein Element mit folgendem Code über das gesamte Raster strecken können:

```css
.item {
  grid-column: 1 / -1;
}
```

## Abstände oder Lücken

Die CSS-Rasterspezifikation beinhaltet die Fähigkeit, Abstände zwischen Spalten- und Zeilenspuren mit den Eigenschaften {{cssxref("column-gap")}} und {{cssxref("row-gap")}} hinzuzufügen. Diese geben eine Lücke an, die ähnlich wie die {{cssxref("column-gap")}} Eigenschaft in der Mehrspaltenanordnung wirkt.

> [!NOTE]
> Als das Raster zuerst in Browsern eingeführt wurde, waren die Eigenschaften {{cssxref("column-gap")}}, {{cssxref("row-gap")}} und {{cssxref("gap")}} mit dem Präfix `grid-` als `grid-column-gap`, `grid-row-gap` und `grid-gap` versehen.
>
> Browser aktualisieren ihre Rendering-Engines, um dieses Präfix zu entfernen, jedoch werden die vorgeprägten Versionen als Aliase beibehalten, sodass sie sicher verwendet werden können.

Lücken erscheinen nur zwischen den Tracks des Rasters, sie fügen dem oberen und unteren, linken oder rechten Rand des Containers keinen zusätzlichen Raum hinzu. Wir können Lücken zu unserem früheren Beispiel hinzufügen, indem wir diese Eigenschaften auf den Rastercontainer anwenden.

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

### Das Gap-Kurzschreibweise

Die beiden Eigenschaften können auch als Kurzschreibweise, {{cssxref("gap")}}, ausgedrückt werden. Wenn Sie nur einen Wert für `gap` angeben, wird er sowohl für Spalten- als auch für Zeilenabstände verwendet. Wenn Sie zwei Werte angeben, wird der erste für `row-gap` und der zweite für `column-gap` genutzt.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 1em 20px;
}
```

In Bezug auf die linienbasierte Positionierung von Elementen wirkt der Abstand so, als ob die Linie eine zusätzliche Breite erlangt hat. Alles, was an dieser Linie beginnt, beginnt nach der Lücke und Sie können den Abstand nicht ansprechen oder Dinge in ihn hinein platzieren. Wenn Sie Lücken möchten, die mehr wie reguläre Tracks wirken, können Sie natürlich stattdessen einen Track für diesen Zweck definieren.

## Das `span` Schlüsselwort verwenden

Neben der Spezifikation der Start- und Endlinien durch Nummerierung können Sie auch eine Startlinie angeben und dann die Anzahl der Tracks, die Sie haben möchten, das der Bereich überspannen soll.

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

Sie können das `span` Schlüsselwort auch im Wert von `grid-row-start`/`grid-row-end` und `grid-column-start/grid-column-end` verwenden. Die folgenden beiden Beispiele werden denselben Rasterbereich erstellen. Im ersten setzen wir die Startzeilenlinie und geben dann an, dass wir möchten, dass der Bereich 3 Tracks umfasst. Der Bereich beginnt bei Linie 1 und endet 3 Zeilen hinter Linie 1; das heißt, der Bereich endet bei Linie 4.

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: span 3;
}
```

Im zweiten Beispiel spezifizieren wir die Endzeilenlinie, bei der das Element aufhören soll, und setzen dann die Startlinie als `span 3`. Das bedeutet, das Element muss von der angegebenen Zeilenlinie nach oben reichen. Der Bereich beginnt bei Linie 4 und erstreckt sich über 3 Linien bis Linie 1.

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: span 3;
  grid-row-end: 4;
}
```

Um sich mit der linienbasierten Positionierung in Raster vertraut zu machen, versuchen Sie, einige häufige Layouts zu erstellen, indem Sie Elemente auf Rastern mit unterschiedlichen Spaltenanzahlen platzieren. Denken Sie daran, dass, wenn Sie nicht alle Elemente platzieren, alle verbleibenden Elemente gemäß den Auto-Platzierungsregeln platziert werden. Dies kann zu dem gewünschten Layout führen, jedoch, wenn etwas unerwartet erscheint, überprüfen Sie, ob Sie eine Position dafür festgelegt haben.

Auch ist zu bedenken, dass Elemente in einem Raster sich überlappen können, wenn Sie sie auf diese Weise explizit platzieren. Das kann einige nette Effekte erzeugen, allerdings kann es auch dazu führen, dass sich Elemente fälschlicherweise überlappen, wenn Sie die falsche Start- oder Endlinie angeben. Der [Rasterhervorheber von Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) kann sehr nützlich sein, wenn Sie lernen, insbesondere wenn Ihr Raster ziemlich kompliziert ist.
