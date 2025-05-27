---
title: Ausrichtung von Elementen im CSS-Gitterlayout
slug: Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout
l10n:
  sourceCommit: 150aeae3b296ab557e520c9e627c0d26433e5253
---

{{CSSRef}}

Das [CSS-Gitterlayout](/de/docs/Web/CSS/CSS_grid_layout) implementiert die [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment), die denselben Standard verwendet, den auch [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) zum Ausrichten von Elementen in einem Flexcontainer nutzt. Das Ausrichtungsmodul beschreibt, wie die Ausrichtung in allen Layoutmethoden funktionieren soll.

In diesem Leitfaden betrachten wir, wie die Box-Ausrichtungseigenschaften verwendet werden, um Elemente im Gitterlayout auszurichten.

Sie werden Ähnlichkeiten bemerken, wie diese Eigenschaften und Werte in Flexbox funktionieren. Da Gitter zwei-dimensional und Flexbox ein-dimensional ist, gibt es einige kleine Unterschiede, auf die Sie achten sollten. Aus diesem Grund beginnen wir damit, die beiden Achsen zu betrachten, mit denen wir bei der Ausrichtung von Elementen im Gitter arbeiten.

## Die zwei Achsen eines Gitterlayouts

Beim Arbeiten mit Gitterlayouts haben Sie zwei Achsen, gegen die Sie Dinge ausrichten können: die _Block-Achse_ und die _Inline-Achse_. Die {{Glossary("Flow_relative_values#block_direction", "Block-Achse")}} ist die Achse, auf der Blöcke im Blocklayout ausgelegt werden. Wenn Sie zwei Absätze auf Ihrer Seite haben, werden diese untereinander dargestellt. Dies ist die Richtung, die wir als Block-Achse beschreiben.

![Blockachsen sind vertikal.](block_axis.png)

Die {{Glossary("Flow_relative_values#inline_direction", "Inline-Achse")}} verläuft quer zur Block-Achse und ist die Richtung, in der Text im regulären Inline-Fluss verläuft.

![Inline- / Reihenachse sind horizontal.](7_inline_axis.png)

Wir können den Inhalt innerhalb von Gitterbereichen und die Gitterspuren selbst auf diesen beiden Achsen ausrichten.

## Ausrichten von Elementen auf der Block-Achse

Die {{cssxref("align-self")}} und {{cssxref("align-items")}} Eigenschaften steuern die Ausrichtung auf der Block-Achse. Wenn wir diese Eigenschaften verwenden, ändern wir die Ausrichtung des Elements innerhalb des Gitterbereichs, in dem Sie es platziert haben.

### Verwendung von align-items

Im folgenden Beispiel haben wir vier {{Glossary("grid_areas", "Gitterbereiche")}} innerhalb unseres Gitters. Wir können die {{cssxref("align-items")}} Eigenschaft auf dem {{Glossary("grid_container", "Gittercontainer")}} verwenden, um die Elemente mit den Werten `normal`, `stretch` oder {{cssxref("self-position")}} oder {{cssxref("baseline-position")}} auszurichten:

- `normal`
- `stretch`
- `start`
- `end`
- `center`
- `baseline`
- `first baseline`
- `last baseline`
- `auto` (nur bei `align-self`)

Der Standardwert ist `normal`, was sich für Gittercontainer zu `stretch` auflöst.

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

Beachten Sie, dass die Höhe jedes `<div>`-Kindes durch den Inhalt des `<div>` bestimmt wird, sobald Sie `align-items: start` setzen. Im Gegensatz dazu, wenn Sie {{cssxref("align-items")}} vollständig weglassen, streckt sich die Höhe jedes `<div>`, um seinen Gitterbereich auszufüllen.

Die `align-items` Eigenschaft setzt die {{cssxref("align-self")}} Eigenschaft für alle Kindergitterelemente. Das bedeutet, dass Sie die Eigenschaft individuell setzen können, indem Sie `align-self` direkt auf ein Gitterelement anwenden.

### Verwendung von align-self

In diesem nächsten Beispiel verwenden wir die `align-self` Eigenschaft, um die unterschiedlichen Ausrichtungswerte zu demonstrieren. Der erste Bereich zeigt das Standardverhalten von `align-self`, das in diesem Fall zu `stretch` aufgelöst wird. Das zweite Element hat einen `align-self` Wert von `start`, das dritte `end` und das vierte `center`.

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

Das Standardverhalten für {{cssxref("align-self")}} ist, vom `align-items` Wert des Gittercontainers zu erben, bei dem das `normal` Standard ist, sich zu `stretch` aufzulösen, außer bei Elementen, die ein intrinsisches {{Glossary("aspect_ratio", "Seitenverhältnis")}} haben, in diesem Fall verhalten sie sich wie `start`. Der Grund dafür ist, dass wenn Elemente mit einem Seitenverhältnis gestreckt werden, sie verzerrt würden.

## Ausrichten von Elementen auf der Inline-Achse

Während `align-items` und `align-self` Elemente auf der Block-Achse ausrichten, richten {{cssxref("justify-items")}} und {{cssxref("justify-self")}} Elemente auf der Inline-Achse aus. Die Werte, die Sie auswählen können, ähneln den `normal`, `stretch`, {{cssxref("self-position")}} und {{cssxref("baseline-position")}} der `align-self` Eigenschaft, zusammen mit `left` und `right`. Die Werte umfassen:

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
- `auto` (nur bei `justify-self`)

Sie können dasselbe Beispiel sehen, das für {{cssxref("align-items")}} verwendet wird, unten. Dieses Mal wenden wir die {{cssxref("justify-self")}} Eigenschaft an.

Auch hier ist der Standard `stretch`, außer für Elemente mit einem intrinsischen Seitenverhältnis. Das bedeutet, dass Gitterelemente standardmäßig ihren Gitterbereich ausfüllen, es sei denn, Sie ändern die Ausrichtung. In diesem Beispiel zeigt das erste Element den Standardwert der Ausrichtung `stretch`:

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

{{ EmbedLiveSample('Justifying_Items_on_the_Inline_Axis', '500', '550') }}

Wie bei `align-self` und `align-items`, können Sie `justify-items` auf den Gittercontainer anwenden, um einen `justify-self` Wert für alle Gitterelemente innerhalb des Containers festzulegen.

> [!NOTE]
> Die Eigenschaften `justify-self` und `justify-items` sind in Flexbox nicht implementiert. Dies liegt an der eindimensionalen Natur von [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) und daran, dass es mehrere Elemente entlang der Achse geben kann, wodurch es unmöglich wird, ein einzelnes Element auszurichten. Um Elemente entlang der Haupt-Inline-Achse in Flexbox auszurichten, verwenden Sie die {{cssxref("justify-content")}} Eigenschaft.

### Kurzschreibweise

Die {{CSSxRef("place-items")}} Eigenschaft ist eine Kurzschreibweise für `align-items` und `justify-items`.

Die {{CSSxRef("place-self")}} Eigenschaft ist eine Kurzschreibweise für `align-self` und `justify-self`.

## Zentrieren eines Elements im Bereich

Durch die Kombination der Align- und Justify-Eigenschaften können wir ein Element leicht in einem Gitterbereich zentrieren.

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

## Ausrichten der Gitterspuren auf der Block-Achse

Wenn Ihre Gitterspuren eine Fläche nutzen, die kleiner ist als der Gittercontainer, können Sie die Gitterspuren selbst innerhalb dieses Containers ausrichten. Die {{cssxref("align-content")}} richtet die Spuren auf der Block-Achse aus und {{cssxref("justify-content")}} auf der Inline-Achse. Wie bei den `*-items` und `*-item` Eigenschaften ist die {{CSSxRef("place-content")}} Eigenschaft eine Kurzschreibweise für `align-content` und `justify-content`.

Die Werte für `align-content`, `justify-content` und `place-content` umfassen alle {{cssxref("content-distribution")}} und {{cssxref("content-position")}} Werte. Die `align-content` Eigenschaft akzeptiert auch {{cssxref("baseline-position")}} Werte und, wie die anderen `justify-*` Eigenschaften, akzeptiert `justify-content` auch `left` und `right`.

Gültige Schlüsselwörter für `place-content` umfassen:

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

Die `align-content` Eigenschaft wird auf den Gittercontainer angewendet, da sie auf das gesamte Gitter wirkt.

### Standardausrichtung

In diesem Beispiel hat der 500px mal 500px Gittercontainer drei Zeilen- und drei Spalten-Tracks von je 100px mit einem 10px Abstand. Das bedeutet, es gibt innerhalb des Gittercontainers Platz sowohl in Block- als auch in Inlinerichtung.

Standardmäßig sind unsere Gitterspuren in der oberen linken Ecke des Gitters, ausgerichtet an den Startgitterlinien, da das Standardverhalten im Gitterlayout `start` ist:

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

### Einrichten von align-content: end

Mit derselben CSS und HTML, fügen wir in diesem Beispiel `align-content` mit dem Wert `end` zum Container hinzu, sodass die Spuren alle zur Endlinie des Gittercontainers in der Block-Dimension verschoben werden:

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

### Einrichten von align-content: space-between

Wir können auch die {{cssxref("content-distribution")}} Raumverteilungswerte von `space-between`, `space-around`, `space-evenly` und `stretch` anwenden. In diesem Beispiel setzen wir {{cssxref("align-content")}}, das die Spuren auf der Block-Achse ausrichtet, auf `space-between`, das die Spuren verteilt:

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

Wenn ein Element mehr als eine Gitterspur überspannt, kann die Verwendung eines Raumverteilungswerts dazu führen, dass sich die Elemente in Ihrem Gitter vergrößern, weil der Raum, der zwischen den Spuren hinzugefügt wird, auf das überspannende Element angewendet wird. Daher sollten Sie sicherstellen, dass der Inhalt der Spuren mit dem zusätzlichen Raum zurechtkommt oder dass Sie Ausrichtungseigenschaften auf die Elemente angewendet haben, damit sie zum Start oder Ende anstatt sich zu dehnen verschoben werden.

Im untenstehenden Bild haben wir das Gitter mit zwei verschiedenen `align-content` Werten platziert, um `start` und `space-between` zu vergleichen. Sie können sehen, wie die ersten beiden Elemente, die zwei Zeilen-Tracks überspannen, in dem `space-between`-Beispiel zusätzliche Höhe angenommen haben, da sie den Raum gewinnen, der aufgrund des freien Raums, der _zwischen_ den drei Reihen verteilt wurde, existiert:

![Demonstration, wie Elemente größer werden, wenn wir space-between verwenden.](7_space-between.png)

## Ausrichten der Gitterspuren auf der Inline-Achse

Wir können `justify-content` verwenden, um dieselbe Art von Ausrichtung auf der Inline-Achse durchzuführen, die wir für die Block-Achse mit `align-content` verwendet haben.

Mit demselben Beispiel setzen wir {{cssxref("justify-content")}} auf `space-around`. Dies führt erneut dazu, dass Spuren, die mehr als eine Spalten-Spur überspannen, zusätzlichen Raum erhalten:

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

## Ausrichtung und Auto-Ränder

Eine andere Möglichkeit, Elemente innerhalb ihres Bereichs auszurichten, ist die Verwendung von Auto-Rändern. Wenn Sie jemals ein Layout im Ansichtsfenster oder ein Block-Level-Element innerhalb seines Elternteils zentriert haben, haben Sie dies möglicherweise getan, indem Sie den rechten und linken Rand des Elements, das Sie zentrieren möchten, auf `auto` gesetzt haben. Der automatische Rand nimmt den gesamten verfügbaren Raum auf. Wenn der Rand auf beiden Seiten auf `auto` gesetzt wird, wird das Block-Level-Element in die Mitte gedrückt, da beide Ränder den gesamten Raum einnehmen möchten.

Im nächsten Beispiel hat das Element 1 seine {{cssxref("margin-left")}} Eigenschaft auf `auto` gesetzt. Dies schiebt den Inhalt zur rechten Seite des Bereichs, da der automatische Rand den verfügbaren Raum einnimmt, der nach dem zugewiesenen Raum für den Inhalt verbleibt:

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

Verwenden Sie den Gitterinspektor in Ihren Browser-Entwicklertools, um zu sehen, wie das Element ausgerichtet ist:

![Bild, das Auto-Ränder mit dem Firefox-Gitter-Highlighter zeigt.](7_auto_margins.png)

## Ausrichtung und Schreibrichtungen

Alle diese Beispiele waren in Englisch, einer von links nach rechts Sprache. Das bedeutet, dass unsere Startlinien oben und links von unserem Gitter sind, wenn wir in physischen Richtungen denken.

CSS-Gitterlayout und CSS-Box-Ausrichtung arbeiten mit Schreibrichtungen in CSS. Wenn eine von rechts nach links Sprache wie Arabisch angezeigt wird, ist der Beginn des Gitters oben rechts, sodass die Standardeinstellung von `justify-content: start` für Gitterspuren wäre, auf der rechten Seite des Gitters zu beginnen.

Das Setzen von {{Glossary("physical_properties", "physischen Eigenschaften")}}, wie das Setzen von Auto-Rändern mit {{cssxref("margin-right")}} oder {{cssxref("margin-left")}}, oder das absolute Positionieren von Elementen mit den {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}} Offsets, respektiert keine Schreibrichtungen. Im [Grids, logische Werte und Schreibrichtungen](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)-Leitfaden werden wir diese Interaktion zwischen CSS-Gitterlayout, Box-Ausrichtung und Schreibrichtungen weiter betrachten. Dies wird wichtig sein, wenn Sie Websites entwickeln, die dann in mehreren Sprachen angezeigt werden, oder wenn Sie Sprachen oder Schreibrichtungen in einem Design mischen möchten.

## Siehe auch

- [Grundkonzepte des Gitterlayouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Beziehung des Gitterlayouts zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [Gitterlayout mit Zeilenbasierter Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Gitter-Vorlagenbereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Gitterlayout mit benannten Gitterlinien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Automatische Platzierung im Gitterlayout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [Box-Ausrichtung im CSS-Gitterlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
