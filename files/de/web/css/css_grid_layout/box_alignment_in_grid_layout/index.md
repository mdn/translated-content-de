---
title: Ausrichtung von Elementen im CSS-Grid-Layout
slug: Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout
l10n:
  sourceCommit: 607096ddf4ce72c5c3e510f1c6ca014dd6d732fc
---

{{CSSRef}}

[CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) implementiert die [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment), die denselben Standard verwendet wie [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) zur Ausrichtung der Elemente in ihrem Flex-Container. Das Alignment-Modul beschreibt im Detail, wie Ausrichtungen in allen Layout-Methoden funktionieren.

In diesem Leitfaden schauen wir uns an, wie die Eigenschaften der Box-Ausrichtung verwendet werden, um Elemente im Grid-Layout auszurichten.

Sie werden Ähnlichkeiten bemerken, wie diese Eigenschaften und Werte in Flexbox funktionieren. Da Grids zweidimensional und Flexbox eindimensional sind, gibt es einige kleine Unterschiede, die Sie beachten sollten. Aus diesem Grund beginnen wir damit, die beiden Achsen zu betrachten, mit denen wir Elemente in einem Grid ausrichten.

## Die beiden Achsen eines Grid-Layouts

Beim Arbeiten mit einem Grid-Layout haben Sie zwei Achsen, an denen Dinge ausgerichtet werden können – die _Block-Achse_ und die _Inline-Achse_. Die {{Glossary("Flow_relative_values#block_direction", "Block-Achse")}} ist die Achse, entlang derer Blöcke im Block-Layout ausgerichtet werden. Wenn Sie zwei Absätze auf Ihrer Seite haben, erscheinen diese untereinander, und diese Richtung bezeichnen wir als die Block-Achse.

![Block-Achsen sind vertikal.](block_axis.png)

Die {{Glossary("Flow_relative_values#inline_direction", "Inline-Achse")}} verläuft quer zur Block-Achse und entspricht der Richtung, in der Text im regulären Inline-Fluss verläuft.

![Inline-Achsen / Zeilen-Achsen sind horizontal.](7_inline_axis.png)

Wir können den Inhalt innerhalb der Grid-Bereiche und die Grid-Tracks selbst entlang dieser beiden Achsen ausrichten.

## Ausrichten von Elementen auf der Block-Achse

Die Eigenschaften {{cssxref("align-self")}} und {{cssxref("align-items")}} steuern die Ausrichtung auf der Block-Achse. Wenn wir diese Eigenschaften verwenden, ändern wir die Ausrichtung des Elements innerhalb des Grid-Bereichs, in dem Sie es platziert haben.

### Verwendung von align-items

Im folgenden Beispiel haben wir vier {{Glossary("grid_areas", "Grid-Bereiche")}} innerhalb unseres Grids. Wir können die Eigenschaft {{cssxref("align-items")}} auf den {{Glossary("grid_container", "Grid-Container")}} anwenden, um die Elemente mithilfe von `normal`, `stretch`, oder {{cssxref("self-position")}}- oder {{cssxref("baseline-position")}}-Werten auszurichten:

- `normal`
- `stretch`
- `start`
- `end`
- `center`
- `baseline`
- `first baseline`
- `last baseline`
- `auto` (nur `align-self`)

Der Standardwert ist `normal`, was für Grid-Container auf `stretch` aufgelöst wird.

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
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  grid-auto-rows: 100px;
  grid-template-areas:
    "a a a a b b b b"
    "a a a a b b b b"
    "c c c c d d d d"
    "c c c c d d d d";
  align-items: start;
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('Using_align-items', '500', '500') }}

Beachten Sie, dass, sobald Sie `align-items: start` setzen, die Höhe jedes untergeordneten `<div>` vom Inhalt des `<div>` bestimmt wird. Im Gegensatz dazu wird bei komplettem Weglassen von {{cssxref("align-items")}} die Höhe jedes `<div>` gedehnt, um seinen Grid-Bereich auszufüllen.

Die Eigenschaft `align-items` setzt die Eigenschaft {{cssxref("align-self")}} für alle untergeordneten Grid-Elemente. Das bedeutet, dass Sie die Eigenschaft auch individuell für jedes Grid-Element mit `align-self` festlegen können.

### Verwendung von align-self

Im nächsten Beispiel verwenden wir die Eigenschaft `align-self`, um die verschiedenen Ausrichtungswerte zu demonstrieren. Der erste Bereich zeigt das Standardverhalten von `align-self`, das in diesem Fall auf `stretch` aufgelöst wird. Das zweite Element hat den Wert `align-self: start`, das dritte `end` und das vierte `center`.

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
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  grid-auto-rows: 100px;
  grid-template-areas:
    "a a a a b b b b"
    "a a a a b b b b"
    "c c c c d d d d"
    "c c c c d d d d";
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
  align-self: start;
}
.item3 {
  grid-area: c;
  align-self: end;
}
.item4 {
  grid-area: d;
  align-self: center;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('Using_align-self', '500', '500') }}

### Elemente mit einem intrinsischen Seitenverhältnis

Das Standardverhalten für {{cssxref("align-self")}} ist, vom `align-items`-Wert des Grid-Containers zu erben, wobei der Standardwert `normal` auf Dehnen (`stretch`) resolviert – außer bei Elementen mit einem intrinsischen {{Glossary("aspect_ratio", "Seitenverhältnis")}}. In diesem Fall verhalten sie sich wie `start`. Der Grund dafür ist, dass Elemente mit einem Seitenverhältnis bei Dehnen verzerrt würden.

## Ausrichten von Elementen auf der Inline-Achse

Während `align-items` und `align-self` Elemente auf der Block-Achse ausrichten, richten {{cssxref("justify-items")}} und {{cssxref("justify-self")}} Elemente auf der Inline-Achse aus. Die Werte, die Sie auswählen können, sind ähnlich wie bei den Werten für `align-self`: `normal`, `stretch`, {{cssxref("self-position")}} und {{cssxref("baseline-position")}}, sowie `left` und `right`. Zu den möglichen Werten gehören:

- `normal`
- `start`
- `end`
- `left`
- `right`
- `center`
- `stretch`
- `baseline`
- `first baseline`
- `last baseline`
- `auto` (nur `justify-self`)

Das untenstehende Beispiel, das bereits bei {{cssxref("align-items")}} verwendet wurde, zeigt dieses Mal die Anwendung der Eigenschaft {{cssxref("justify-self")}}.

Erneut ist der Standardwert `stretch`, außer bei Elementen mit einem intrinsischen Seitenverhältnis. Das bedeutet, dass Grid-Elemente standardmäßig ihren Grid-Bereich ausfüllen, es sei denn, Sie ändern die Ausrichtung. In diesem Beispiel zeigt das erste Element den standardmäßigen `stretch`-Ausrichtungswert:

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
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  grid-auto-rows: 100px;
  grid-template-areas:
    "a a a a b b b b"
    "a a a a b b b b"
    "c c c c d d d d"
    "c c c c d d d d";
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
  justify-self: start;
}
.item3 {
  grid-area: c;
  justify-self: end;
}
.item4 {
  grid-area: d;
  justify-self: center;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('Justifying_Items_on_the_Inline_Axis', '500', '500') }}

Wie bei `align-self` und `align-items` können Sie `justify-items` auf den Grid-Container anwenden, um einen `justify-self`-Wert für alle Grid-Elemente innerhalb des Containers einzustellen.

> [!NOTE]
> Die Eigenschaften `justify-self` und `justify-items` sind in Flexbox nicht implementiert. Dies liegt an der eindimensionalen Natur von [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), bei der es mehrere Elemente entlang der Achse geben kann, was es unmöglich macht, ein einziges Element zu rechtfertigen. Um Elemente entlang der Haupt- und Inline-Achse in Flexbox auszurichten, verwenden Sie die Eigenschaft {{cssxref("justify-content")}}.

### Kurzschreibweisen

Die Eigenschaft {{CSSxRef("place-items")}} ist eine Kurzschreibweise für `align-items` und `justify-items`.

Die Eigenschaft {{CSSxRef("place-self")}} ist eine Kurzschreibweise für `align-self` und `justify-self`.

## Ein Element im Bereich zentrieren

Indem wir die Eigenschaften zur Ausrichtung und zum Justieren kombinieren, können wir ein Element leicht innerhalb eines Grid-Bereichs zentrieren.

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
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  grid-auto-rows: 200px;
  grid-template-areas:
    ". a a ."
    ". a a .";
}
.item1 {
  grid-area: a;
  align-self: center;
  justify-self: center;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
</div>
```

{{ EmbedLiveSample('Center_an_item_in_the_area', '500', '500') }}

## Ausrichtung der Grid-Tracks auf der Block-Achse

Wenn Ihre Grid-Tracks einen Bereich nutzen, der kleiner ist als der Grid-Container, können Sie die Grid-Tracks selbst innerhalb dieses Containers ausrichten. Die Eigenschaft {{cssxref("align-content")}} richtet die Tracks auf der Block-Achse aus, und {{cssxref("justify-content")}} richtet sie auf der Inline-Achse aus. Wie bei den Eigenschaften `*-items` und `*-item` ist die Eigenschaft {{CSSxRef("place-content")}} eine Kurzschreibweise für `align-content` und `justify-content`.

Die Werte für `align-content`, `justify-content` und `place-content` beinhalten alle {{cssxref("content-distribution")}}- und {{cssxref("content-position")}}-Werte. Die Eigenschaft `align-content` akzeptiert auch {{cssxref("baseline-position")}}-Werte, und wie die anderen `justify-*`-Eigenschaften akzeptiert `justify-content` ebenfalls `left` und `right`.

Gültige Schlüsselwörter für `place-content` sind:

- `normal`
- `start`
- `end`
- `center`
- `stretch`
- `space-around`
- `space-between`
- `space-evenly`
- `baseline`
- `first baseline`
- `last baseline`
- `left`
- `right`

Die Eigenschaft `align-content` wird auf den Grid-Container angewendet, da sie für das gesamte Grid funktioniert.

### Standardausrichtung

In diesem Beispiel hat der 500px x 500px große Grid-Container drei Reihen und drei Spalten mit 100px-Grid-Tracks und einer 10px-Rinne. Das bedeutet, es gibt Platz innerhalb des Grid-Containers in beiden Richtungen.

Standardmäßig befinden sich die Grid-Tracks in der oberen linken Ecke des Grids, ausgerichtet an den Startlinien des Grids, da das Standardverhalten im Grid-Layout `start` ist:

```css
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
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 500px;
  gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('Default_alignment', '500', '550') }}

### Einstellung von align-content: end

Mit demselben CSS und HTML fügen wir in diesem Beispiel `align-content` mit dem Wert `end` zum Container hinzu, wodurch die Tracks alle zur Endlinie des Grid-Containers in der Block-Dimension verschoben werden:

```css
.wrapper {
  align-content: end;
}
```

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

.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 500px;
  gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

```html hidden
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('Setting_align-content_end', '500', '550') }}

### Einstellung von align-content: space-between

Wir können auch die {{cssxref("content-distribution")}}-Werte zur Verteilung des Raumes anwenden, wie `space-between`, `space-around`, `space-evenly` und `stretch`. In diesem Beispiel setzen wir {{cssxref("align-content")}}, um die Tracks auf der Block-Achse mit `space-between` auszurichten, was die Tracks verteilt:

```css
.wrapper {
  align-content: space-between;
}
```

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

.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 500px;
  gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

```html hidden
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('Setting_align-content_space-between', '500', '600') }}

Wenn ein Element mehr als eine Grid-Track überspannt, wird die Nutzung eines Raumverteilung-Werts wahrscheinlich dazu führen, dass Elemente in Ihrem Grid größer werden, da der zwischen den Tracks hinzugefügte Raum auf das überspannende Element verteilt wird. Daher stellen Sie sicher, dass der Inhalt der Tracks den zusätzlichen Raum aufnehmen kann oder dass Sie Ausrichtungseigenschaften auf die Elemente anwenden, sodass sie sich zum Start oder Endpunkt und nicht zu `stretch` verschieben.

Im untenstehenden Bild haben wir das Grid mit zwei verschiedenen `align-content`-Werten positioniert, um `start` und `space-between` zu vergleichen. Sie können sehen, wie die ersten beiden Elemente, die zwei Grid-Tracks überspannen, in der `space-between`-Darstellung zusätzliche Höhe erhalten, da sie den Raum übernehmen, der zwischen den drei Reihen verteilt wurde:

![Demonstration, wie Elemente größer werden, wenn wir space-between nutzen.](7_space-between.png)

## Justierung der Grid-Tracks auf der Inline-Achse

Wir können `justify-content` nutzen, um dieselbe Art der Ausrichtung auf der Inline-Achse durchzuführen, die wir mit `align-content` auf der Block-Achse nutzten.

Mit demselben Beispiel setzen wir {{cssxref("justify-content")}} auf `space-around`. Auch hier führt dies dazu, dass Tracks, die mehr als einen Spalten-Track überspannen, zusätzlichen Raum erhalten:

```css
.wrapper {
  align-content: space-between;
  justify-content: space-around;
}
```

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

.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 500px;
  gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

```html hidden
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('Justifying_the_grid_tracks_on_the_inline_axis', '500', '550') }}

## Ausrichtung und automatische Abstände

Eine weitere Möglichkeit, Elemente innerhalb ihres Bereichs auszurichten, ist die Verwendung von automatischen Abständen. Wenn Sie jemals ein Layout in der Ansicht zentriert haben oder ein Block-Element innerhalb seines Elternteils, haben Sie möglicherweise die rechten und linken `margin`-Eigenschaften des Elements, das Sie zentrieren möchten, auf `auto` gesetzt. Die automatische Margin absorbiert den gesamten verfügbaren Raum. Indem Sie die Margin auf beiden Seiten auf `auto` setzen, wird das Block-Level-Element in die Mitte verschoben, da beide Margins versuchen, den gesamten Platz einzunehmen.

Im nächsten Beispiel hat das Element 1 seine {{cssxref("margin-left")}}-Eigenschaft auf `auto` gesetzt. Dies verschiebt den Inhalt auf die rechte Seite des Bereichs, da die automatische Margin den verfügbaren Platz einnimmt, der nach Zuweisung des für den Inhalt erforderlichen Platzes übrig bleibt:

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
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 500px;
  gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
}
.item1 {
  grid-area: a;
  margin-left: auto;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('Alignment_and_auto_margins', '500', '550') }}

Verwenden Sie den Grid-Inspektor in den Entwicklertools Ihres Browsers, um zu sehen, wie das Element ausgerichtet ist:

![Bild zeigt automatische Margins im Firefox-Grid-Highlighter.](7_auto_margins.png)

## Ausrichtung und Schreibmodi

All diese Beispiele wurden in Englisch, einer von links nach rechts geschriebenen Sprache, dargestellt. Das bedeutet, dass unsere Startlinien oben und links sind, wenn wir in physischen Richtungen denken.

CSS-Grid-Layout und CSS-Box-Ausrichtung funktionieren mit Schreibmodi in CSS. Beim Anzeigen einer von rechts nach links geschriebenen Sprache, wie Arabisch, beginnt das Grid oben rechts, sodass der Standardwert `justify-content: start` bedeutet, dass Grid-Tracks auf der rechten Seite des Grids starten.

Das Festlegen von {{Glossary("physical_properties", "physischen Eigenschaften")}}, wie das Festlegen von automatischen Margins mit {{cssxref("margin-right")}} oder {{cssxref("margin-left")}}, oder das absolute Positionieren von Elementen mit den Eigenschaften {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}}, berücksichtigt keine Schreibmodi. Im Leitfaden [Grids, Logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes) werden wir tiefer in diese Interaktion zwischen CSS-Grid-Layout, Box-Ausrichtung und Schreibmodi eintauchen, was wichtig ist, wenn Sie Websites entwickeln, die in mehreren Sprachen angezeigt werden, oder wenn Sie Sprachen mit unterschiedlichen Schreibrichtungen in einem Design mischen möchten.

## Siehe auch

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Beziehung des Grid-Layouts zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [Grid-Layout mit zeilenbasierter Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Template-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Grid-Layout mit benannten Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Auto-Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
