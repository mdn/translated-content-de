---
title: Elemente in CSS Grid-Layout ausrichten
slug: Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout
l10n:
  sourceCommit: baa935a39f0248a0773c84e03e6fc9cdb65ec21b
---

{{CSSRef}}

Das [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) implementiert die [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment), die denselben Standard verwendet, den auch [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) zur Ausrichtung von Elementen in einem Flex-Container nutzt. Das Ausrichtungsmodul beschreibt, wie die Ausrichtung in allen Layout-Methoden funktionieren sollte.

In diesem Leitfaden betrachten wir, wie die Box-Ausrichtungseigenschaften verwendet werden, um Elemente im Grid-Layout auszurichten.

Sie werden Ähnlichkeiten bemerken, wie diese Eigenschaften und Werte in Flexbox funktionieren. Aufgrund der Tatsache, dass Grid zweidimensional und Flexbox eindimensional ist, gibt es einige kleine Unterschiede, auf die Sie achten sollten. Aus diesem Grund beginnen wir damit, die zwei Achsen zu betrachten, mit denen wir arbeiten, wenn wir Dinge in einem Grid ausrichten.

## Die zwei Achsen eines Grid-Layouts

Beim Arbeiten mit Grid-Layouts stehen Ihnen zwei Achsen zur Verfügung, um Dinge daran auszurichten – die _Block-Achse_ und die _Inline-Achse_. Die {{Glossary("Flow_relative_values#block_direction", "Block-Achse")}} ist die Achse, entlang der Blöcke im Block-Layout angeordnet sind. Wenn Sie zwei Absätze auf Ihrer Seite haben, werden sie untereinander angezeigt, wir beschreiben diese Richtung als die Block-Achse.

![Block-Achsen sind vertikal.](block_axis.png)

Die {{Glossary("Flow_relative_values#inline_direction", "Inline-Achse")}} verläuft über die Block-Achse hinweg, es ist die Richtung, in der Text im regulären Inline-Fluss verläuft.

![Inline-Achse / Zeilenachse sind horizontal.](7_inline_axis.png)

Wir können den Inhalt innerhalb der Grid-Bereiche und die Grid-Spuren selbst entlang dieser zwei Achsen ausrichten.

## Ausrichten von Elementen auf der Block-Achse

Die {{cssxref("align-self")}} und {{cssxref("align-items")}}-Eigenschaften steuern die Ausrichtung auf der Block-Achse. Wenn wir diese Eigenschaften verwenden, ändern wir die Ausrichtung des Elements innerhalb des Grid-Bereichs, in dem Sie es platziert haben.

### Verwendung von `align-items`

Im folgenden Beispiel haben wir vier {{Glossary("grid_areas", "Grid-Bereiche")}} innerhalb unseres Grids. Wir können die Eigenschaft {{cssxref("align-items")}} auf dem {{Glossary("grid_container", "Grid-Container")}} verwenden, um die Elemente mit den Werten `normal`, `stretch` oder {{cssxref("self-position")}} oder {{cssxref("baseline-position")}} auszurichten:

- `normal`
- `stretch`
- `start`
- `end`
- `center`
- `baseline`
- `first baseline`
- `last baseline`
- `auto` (nur `align-self`)

Der Standardwert ist `normal`, der in Grid-Containern zu `stretch` aufgelöst wird.

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

Beachten Sie, dass sobald Sie `align-items: start` festlegen, die Höhe jedes Kind-`<div>`-Elements durch den Inhalt des `<div>` bestimmt wird. Dies steht im Gegensatz zum vollständigen Weglassen von {{cssxref("align-items")}}, wobei die Höhe jedes `<div>` gestreckt wird, um seinen Grid-Bereich auszufüllen.

Die Eigenschaft `align-items` setzt die {{cssxref("align-self")}}-Eigenschaft für alle Kind-Grid-Elemente. Das bedeutet, dass Sie die Eigenschaft individuell festlegen können, indem Sie `align-self` direkt auf ein Grid-Element anwenden.

### Verwendung von `align-self`

Im nächsten Beispiel verwenden wir die Eigenschaft `align-self`, um die verschiedenen Ausrichtungswerte zu demonstrieren. Der erste Bereich zeigt das Standardverhalten von `align-self`, das in diesem Fall zu `stretch` aufgelöst wird. Das zweite Element hat einen `align-self`-Wert von `start`, das dritte von `end` und das vierte von `center`.

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

Das Standardverhalten für {{cssxref("align-self")}} ist, von der `align-items`-Eigenschaft des Grid-Containers zu erben, wobei der Standardwert `normal` auf `stretch` auflöst, außer bei Elementen mit einem intrinsischen {{Glossary("aspect_ratio", "Seitenverhältnis")}}, in diesem Fall verhalten sie sich als `start`. Der Grund dafür ist, dass, wenn Elemente mit einem Seitenverhältnis gestreckt werden, sie verzerrt würden.

## Justieren von Elementen auf der Inline-Achse

Während `align-items` und `align-self` die Elemente auf der Block-Achse ausrichten, richten {{cssxref("justify-items")}} und {{cssxref("justify-self")}} Elemente auf der Inline-Achse aus. Die Werte, die Sie auswählen können, ähneln den `normal`, `stretch`, {{cssxref("self-position")}} und {{cssxref("baseline-position")}}-Werten der `align-self`-Eigenschaft, sowie `left` und `right`. Werte umfassen:

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

Sie können das gleiche Beispiel sehen, das für {{cssxref("align-items")}} verwendet wurde. Dieses Mal wenden wir die Eigenschaft {{cssxref("justify-self")}} an.

Auch hier ist der Standard `stretch`, außer bei Elementen mit einem intrinsischen Seitenverhältnis. Das bedeutet, dass Grid-Elemente standardmäßig ihren Grid-Bereich abdecken, es sei denn, Sie ändern die Ausrichtung. In diesem Beispiel zeigt das erste Element den Standardausrichtungswert `stretch`:

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

Wie bei `align-self` und `align-items` können Sie `justify-items` auf den Grid-Container anwenden, um einen `justify-self`-Wert für alle Grid-Items innerhalb des Containers festzulegen.

> [!NOTE]
> Die Eigenschaften `justify-self` und `justify-items` sind in Flexbox nicht implementiert. Dies liegt an der eindimensionalen Natur von [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), und dass es möglicherweise mehrere Elemente entlang der Achse gibt, was es unmöglich macht, ein einzelnes Element zu justieren. Um Elemente entlang der Haupt-, Inline-Achse in Flexbox auszurichten, verwenden Sie die Eigenschaft {{cssxref("justify-content")}}.

### Kurzschreibweise

Die Eigenschaft {{CSSxRef("place-items")}} ist eine Kurzschreibweise für `align-items` und `justify-items`.

Die Eigenschaft {{CSSxRef("place-self")}} ist eine Kurzschreibweise für `align-self` und `justify-self`.

## Ein Element in der Fläche zentrieren

Durch die Kombination der Align- und Justify-Eigenschaften können wir ein Element leicht in einem Grid-Bereich zentrieren.

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

## Die Grid-Spuren auf der Block-Achse ausrichten

Wenn Sie eine Situation haben, in der Ihre Grid-Spuren einen Bereich nutzen, der kleiner ist als der Grid-Container, können Sie die Grid-Spuren selbst innerhalb dieses Containers ausrichten. Die Eigenschaft {{cssxref("align-content")}} richtet die Spuren auf der Block-Achse aus und {{cssxref("justify-content")}} richtet sie auf der Inline-Achse aus. Wie bei den `*-items` und `*-item`-Eigenschaften, ist die Eigenschaft {{CSSxRef("place-content")}} eine Kurzschreibweise für `align-content` und `justify-content`.

Die Werte für `align-content`, `justify-content` und `place-content` umfassen alle die {{cssxref("content-distribution")}} und {{cssxref("content-position")}}-Werte. Die `align-content`-Eigenschaft akzeptiert auch {{cssxref("baseline-position")}}-Werte, und wie die anderen `justify-*`-Eigenschaften akzeptiert `justify-content` auch `left` und `right`.

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

Die Eigenschaft `align-content` wird auf den Grid-Container angewendet, da sie auf das gesamte Grid wirkt.

### Standardausrichtung

In diesem Beispiel hat der 500px mal 500px große Grid-Container drei Zeilen und drei Spalten mit 100px Spuren mit einem 10px Abstand. Dies bedeutet, dass im Grid-Container sowohl in der Block- als auch in der Inline-Richtung Platz ist.

Standardmäßig sind unsere Grid-Spuren in der oberen linken Ecke des Grids, ausgerichtet an den Startlinien des Grids, da das Standardverhalten im Grid-Layout `start` ist:

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

Unter Verwendung derselben CSS und HTML fügen wir in diesem Beispiel `align-content` mit einem Wert von `end` zum Container hinzu, sodass sich die Spuren alle zur Endlinie des Grid-Containers in der Block-Dimension bewegen:

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

Wir können auch die {{cssxref("content-distribution")}} Raumverteilung-Werte `space-between`, `space-around`, `space-evenly` und `stretch` anwenden. In diesem Beispiel setzen wir {{cssxref("align-content")}}, das die Spuren auf der Block-Achse ausrichtet, auf `space-between`, was die Spuren verteilt:

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

Wenn ein Element mehr als eine Grid-Spur überspannt, wird die Verwendung eines Raumverteilung-Werts wahrscheinlich dazu führen, dass Elemente in Ihrem Grid größer werden, da der Raum, der zwischen den Spuren hinzugefügt wird, dem überspannenden Element hinzugefügt wird. Daher, wenn Sie diese Werte verwenden, stellen Sie sicher, dass der Inhalt der Spuren mit dem zusätzlichen Raum umgehen kann oder dass Sie Ausrichtungseigenschaften auf den Elementen verwendet haben, sodass sie sich zum Anfang oder Ende bewegen, anstatt sich zu strecken.

Im untenstehenden Bild haben wir das Grid mit zwei verschiedenen `align-content`-Werten platziert, um `start` und `space-between` zu vergleichen. Sie können sehen, wie die ersten beiden Elemente, die zwei Reihen-Spuren überbrücken, im `space-between`-Beispiel zusätzliche Höhe angenommen haben, da sie den Raum erhalten, der aufgrund des freien Raums, der _zwischen_ den drei Reihen verteilt wurde, existiert:

![Demonstriert, wie Elemente größer werden, wenn wir space-between verwenden.](7_space-between.png)

## Die Grid-Spuren auf der Inline-Achse justieren

Wir können `justify-content` verwenden, um denselben Typ der Ausrichtung auf der Inline-Achse durchzuführen, den wir für die Block-Achse mit `align-content` verwendet haben.

Mit dem gleichen Beispiel setzen wir {{cssxref("justify-content")}} auf `space-around`. Dies führt erneut dazu, dass Spuren, die mehr als eine Spalten-Spur überspannen, zusätzlichen Raum gewinnen:

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

## Ausrichtung und automatische Ränder

Eine andere Möglichkeit, Elemente innerhalb ihres Bereichs auszurichten, ist die Verwendung automatischer Ränder. Wenn Sie jemals ein Layout im Ansichtsfenster zentriert oder ein Block-Element innerhalb seines Elternteils zentriert haben, haben Sie dies möglicherweise getan, indem Sie den linken und rechten Rand des Elements, das Sie zentrieren wollten, auf `auto` gesetzt haben. Der automatische Rand absorbiert den gesamten verfügbaren Raum. Wenn Sie den Rand auf beiden Seiten auf `auto` setzen, wird das Block-Level-Element in die Mitte geschoben, da beide Ränder versuchen, den gesamten Raum zu übernehmen.

Im nächsten Beispiel hat das Element 1 seine {{cssxref("margin-left")}}-Eigenschaft auf `auto` gesetzt. Dies schiebt den Inhalt auf die rechte Seite des Bereichs, da der automatische Rand den verfügbaren Raum einnimmt, der verbleibt, nachdem der für den Inhalt benötigte Raum zugewiesen wurde:

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

Verwenden Sie den Grid-Inspektor in den Entwicklerwerkzeugen Ihres Browsers, um zu sehen, wie das Element ausgerichtet ist:

![Bild zeigt automatische Ränder mit dem Firefox Grid-Highlighter.](7_auto_margins.png)

## Ausrichtung und Schreibmodi

Alle diese Beispiele waren in Englisch, eine Sprache von links nach rechts. Das bedeutet, dass unsere Startlinien oben und links von unserem Grid sind, wenn man in physischen Richtungen denkt.

CSS-Grid-Layout und CSS-Box-Ausrichtung arbeiten mit Schreibmodi in CSS. Wenn Sie eine von rechts nach links verlaufende Sprache anzeigen, wie etwa Arabisch, beginnt das Grid oben rechts, sodass das Standardverhalten von `justify-content: start` darin besteht, dass die Grid-Spuren auf der rechten Seite des Grids beginnen.

Das Setzen von {{Glossary("physical_properties", "physischen Eigenschaften")}}, wie das Setzen von automatischen Rändern mit {{cssxref("margin-right")}} oder {{cssxref("margin-left")}}, oder das absolut Positionieren von Elementen mit den {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, und {{cssxref("left")}} Offsets, achtet nicht auf Schreibmodi. Im [Leitfaden Grids, logische Werte, und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes) werden wir weiter in diese Interaktion zwischen CSS-Grid-Layout, Box-Ausrichtung und Schreibmodi eintauchen. Dies wird wichtig zu verstehen sein, wenn Sie Webseiten entwickeln, die dann in mehreren Sprachen angezeigt werden, oder wenn Sie Sprachen oder Schreibmodi in einem Design mischen möchten.

## Siehe auch

- [Grundlegende Konzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Beziehung des Grid-Layouts zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [Grid-Layout mithilfe von Lines-basierter Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Template-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Grid-Layout mithilfe benannter Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [Box-Ausrichtung im CSS String-Diagramm-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
