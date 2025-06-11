---
title: Ausrichten von Elementen im CSS-Grid-Layout
short-title: Ausrichten von Elementen
slug: Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Das [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) implementiert die [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment), die demselben Standard wie [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) folgt, um Elemente in ihrem Flex-Container auszurichten. Das Ausrichtungsmodul beschreibt, wie die Ausrichtung in allen Layoutmethoden funktionieren sollte.

In diesem Leitfaden betrachten wir, wie die Box-Ausrichtungs-Eigenschaften verwendet werden, um Elemente im Grid-Layout auszurichten.

Sie werden Ähnlichkeiten bemerken, wie diese Eigenschaften und Werte in Flexbox funktionieren. Da Grid zweidimensional und Flexbox eindimensional ist, gibt es einige kleine Unterschiede, auf die Sie achten sollten. Aus diesem Grund beginnen wir mit einem Blick auf die beiden Achsen, mit denen wir es beim Ausrichten von Dingen in einem Grid zu tun haben.

## Die zwei Achsen eines Grid-Layouts

Beim Arbeiten mit Grid-Layout stehen Ihnen zwei Achsen zur Verfügung, an denen Sie Dinge ausrichten können – die _Block-Achse_ und die _Inline-Achse_. Die {{Glossary("Flow_relative_values#block_direction", "Block-Achse")}} ist die Achse, auf der Blöcke im Block-Layout angeordnet werden. Wenn Sie zwei Absätze auf Ihrer Seite haben, werden sie untereinander angezeigt, daher beschreiben wir diese Richtung als Block-Achse.

![Block-Achsen sind vertikal.](block_axis.png)

Die {{Glossary("Flow_relative_values#inline_direction", "Inline-Achse")}} verläuft quer zur Block-Achse, es ist die Richtung, in der Text im regulären Inline-Fluss läuft.

![Inline- / Zeilenachse sind horizontal.](7_inline_axis.png)

Wir können den Inhalt innerhalb von Grid-Bereichen und die Grid-Tracks selbst auf diesen beiden Achsen ausrichten.

## Ausrichten von Elementen auf der Block-Achse

Die {{cssxref("align-self")}}- und {{cssxref("align-items")}}-Eigenschaften steuern die Ausrichtung auf der Block-Achse. Wenn wir diese Eigenschaften verwenden, ändern wir die Ausrichtung des Elements innerhalb des Grid-Bereichs, in dem Sie es platziert haben.

### Verwenden von align-items

Im folgenden Beispiel haben wir vier {{Glossary("grid_areas", "Grid-Bereiche")}} in unserem Grid. Wir können die {{cssxref("align-items")}}-Eigenschaft auf dem {{Glossary("grid_container", "Grid-Container")}} verwenden, um die Elemente mit den Werten `normal`, `stretch` oder {{cssxref("self-position")}} oder {{cssxref("baseline-position")}} auszurichten:

- `normal`
- `stretch`
- `start`
- `end`
- `center`
- `baseline`
- `first baseline`
- `last baseline`
- `auto` (nur bei `align-self`)

Der Standardwert ist `normal`, was für Grid-Container zu `stretch` aufgelöst wird.

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

Beachten Sie, dass, sobald Sie `align-items: start` setzen, die Höhe jedes Kindes `<div>` durch den Inhalt des `<div>` bestimmt wird. Dies steht im Gegensatz zum vollständigen Weglassen von {{cssxref("align-items")}}, bei dem die Höhe jedes `<div>` gestreckt wird, um seinen Grid-Bereich auszufüllen.

Die Eigenschaft `align-items` setzt die {{cssxref("align-self")}}-Eigenschaft für alle Kinder-Grid-Elemente. Das bedeutet, dass Sie die Eigenschaft individuell setzen können, indem Sie `align-self` direkt auf ein Grid-Element anwenden.

### Verwenden von align-self

Im nächsten Beispiel verwenden wir die `align-self`-Eigenschaft, um die verschiedenen Ausrichtungswerte zu demonstrieren. Der erste Bereich zeigt das Standardverhalten von `align-self`, das in diesem Fall zu `stretch` aufgelöst wird. Das zweite Element hat einen `align-self`-Wert von `start`, das dritte `end` und das vierte `center`.

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

Das Standardverhalten für {{cssxref("align-self")}} ist, vom `align-items`-Wert des Grid-Containers zu erben, dessen Standard `normal` zu `stretch` resolviert, es sei denn, es handelt sich um Elemente mit einem intrinsischen {{Glossary("aspect_ratio", "Seitenverhältnis")}}, in welchem Fall sie sich als `start` verhalten. Der Grund dafür ist, dass, wenn Elemente mit einem Seitenverhältnis gestreckt werden, sie verzerrt würden.

## Elemente auf der Inline-Achse ausrichten

Während `align-items` und `align-self` Elemente auf der Block-Achse ausrichten, richten {{cssxref("justify-items")}} und {{cssxref("justify-self")}} Elemente auf der Inline-Achse aus. Die Werte, die Sie wählen können, ähneln den `normal`, `stretch`, {{cssxref("self-position")}} und {{cssxref("baseline-position")}} Werten der `align-self`-Eigenschaft, zusammen mit `left` und `right`. Werte umfassen:

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

Sie können dasselbe Beispiel wie für {{cssxref("align-items")}} unten sehen. Diesmal wenden wir die {{cssxref("justify-self")}}-Eigenschaft an.

Nochmals, der Standard ist `stretch`, außer für Elemente mit einem intrinsischen Seitenverhältnis. Das bedeutet, dass Grid-Elemente standardmäßig ihren Grid-Bereich abdecken, es sei denn, Sie ändern die Ausrichtung. In diesem Beispiel demonstriert das erste Element den Standard-`stretch`-Ausrichtungswert:

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

Wie bei `align-self` und `align-items` können Sie `justify-items` auf den Grid-Container anwenden, um `justify-self`-Werte für alle Grid-Elemente in dem Container zu setzen.

> [!NOTE]
> Die `justify-self` und `justify-items` Eigenschaften sind in Flexbox nicht implementiert. Dies liegt an der eindimensionalen Natur von [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), und dass es möglicherweise mehrere Elemente entlang der Achse gibt, was es unmöglich macht, ein einzelnes Element zu rechtfertigen. Um Elemente entlang der Haupt-, Inline-Achse in Flexbox auszurichten, verwenden Sie die {{cssxref("justify-content")}}-Eigenschaft.

### Shorthand-Eigenschaften

Die {{CSSxRef("place-items")}}-Eigenschaft ist ein Shorthand für `align-items` und `justify-items`.

Die {{CSSxRef("place-self")}}-Eigenschaft ist ein Shorthand für `align-self` und `justify-self`.

## Ein Element im Bereich zentrieren

Indem wir die Align- und Justify-Eigenschaften kombinieren, können wir ein Element leicht innerhalb eines Grid-Bereichs zentrieren.

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

## Die Grid-Tracks auf der Block-Achse ausrichten

Wenn Sie eine Situation haben, in der Ihre Grid-Tracks einen Bereich verwenden, der kleiner ist als der Grid-Container, können Sie die Grid-Tracks selbst innerhalb dieses Containers ausrichten. Die {{cssxref("align-content")}}-Eigenschaft richtet die Tracks auf der Block-Achse aus und {{cssxref("justify-content")}} richtet auf der Inline-Achse aus. Wie bei den `*-items` und `*-item` Eigenschaften ist die {{CSSxRef("place-content")}}-Eigenschaft ein Shorthand für `align-content` und `justify-content`.

Die Werte für `align-content`, `justify-content` und `place-content` schließen die {{cssxref("content-distribution")}}- und {{cssxref("content-position")}}-Werte ein. Die `align-content`-Eigenschaft akzeptiert auch {{cssxref("baseline-position")}}-Werte und, wie die anderen `justify-*` Eigenschaften, akzeptiert `justify-content` auch `left` und `right`.

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

Die `align-content`-Eigenschaft wird auf den Grid-Container angewendet, da sie am gesamten Grid funktioniert.

### Standard-Ausrichtung

In diesem Beispiel hat der 500px mal 500px Grid-Container drei Zeilen und drei Spalten mit 100px Tracks und einem 10px Zwischenraum. Das bedeutet, dass es Platz innerhalb des Grid-Containers in beiden, der Block- und Inline-Richtung gibt.

Standardmäßig sind unsere Grid-Tracks in der oberen linken Ecke des Grids, an den Start-Grid-Linien ausgerichtet, da das Standardverhalten im Grid-Layout `start` ist:

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

### Festlegen von align-content: end

Mit demselben CSS und HTML fügen wir in diesem Beispiel `align-content` mit einem Wert von `end` zum Container hinzu, sodass sich die Tracks alle zur Endlinie des Grid-Containers in der Block-Dimension bewegen:

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

### Festlegen von align-content: space-between

Wir können auch die {{cssxref("content-distribution")}} Raumverteilungswerte von `space-between`, `space-around`, `space-evenly` und `stretch` anwenden. In diesem Beispiel setzen wir {{cssxref("align-content")}}, das die Tracks auf der Block-Achse ausrichtet, auf `space-between`, das die Tracks auseinanderreiht:

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

Wenn ein Element mehr als einen Grid-Track überspannt, kann die Verwendung eines Raumverteilungswertes dazu führen, dass Elemente in Ihrem Grid größer werden, da der zusätzliche Raum zwischen den Tracks auf das überspannende Element hinzugefügt wird. Wenn Sie diese Werte verwenden, stellen Sie daher sicher, dass der Inhalt der Tracks mit dem zusätzlichen Raum umgehen kann oder dass Sie Ausrichtungseigenschaften auf die Elemente angewendet haben, sodass sie sich zum Start oder Ende bewegen, anstatt sich zu strecken.

Im untenstehenden Bild haben wir das Grid mit zwei verschiedenen `align-content`-Werten platziert, um `start` und `space-between` zu vergleichen. Sie können sehen, wie die ersten zwei Elemente, die zwei Zeilen-Tracks überspannen, im `space-between`-Beispiel zusätzliche Höhe gewonnen haben, da sie den Raum einnehmen, der durch den freien Raum zwischen den drei Zeilen verteilt wurde:

![Demonstration, wie Elemente größer werden, wenn wir space-between verwenden.](7_space-between.png)

## Die Grid-Tracks auf der Inline-Achse ausrichten

Wir können `justify-content` verwenden, um die gleiche Art von Ausrichtung auf der Inline-Achse durchzuführen, die wir mit `align-content` für die Block-Achse verwendet haben.

Mit demselben Beispiel setzen wir {{cssxref("justify-content")}} auf `space-around`. Dies führt erneut dazu, dass Tracks, die mehr als einen Spalten-Track überspannen, zusätzlichen Raum gewinnen:

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

Eine andere Möglichkeit, Elemente innerhalb ihres Bereichs auszurichten, ist die Verwendung von automatischen Rändern. Wenn Sie jemals ein Layout im Ansichtsfenster zentriert haben oder ein Block-Element innerhalb seines übergeordneten Elements, haben Sie dies möglicherweise getan, indem Sie die rechten und linken Ränder des zu zentrierenden Elements auf `auto` gesetzt haben. Der automatische Rand nimmt den gesamten verfügbaren Raum ein. Wenn der Rand auf beiden Seiten auf `auto` gesetzt wird, wird das Block-Element in die Mitte geschoben, da beide Ränder versuchen, den gesamten Raum einzunehmen.

Im nächsten Beispiel hat Element 1 seine {{cssxref("margin-left")}}-Eigenschaft auf `auto` gesetzt. Dies schiebt den Inhalt auf die rechte Seite des Bereichs, da der automatische Rand den verfügbaren Raum einnimmt, der nach Zuweisung des für den Inhalt benötigten Raums übrig bleibt:

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

Verwenden Sie den Grid-Inspektor in den Entwickler-Tools Ihres Browsers, um zu sehen, wie das Element ausgerichtet ist:

![Bild, das automatische Ränder mit dem grid highlighter in Firefox zeigt.](7_auto_margins.png)

## Ausrichtung und Schreibrichtungen

Alle diese Beispiele waren in Englisch, einer Links-nach-Rechts-Sprache. Das bedeutet, dass unsere Startlinien oben links in unserem Grid sind, wenn wir in physischen Richtungen denken.

Das CSS-Grid-Layout und die CSS-Box-Ausrichtung arbeiten mit Schreibrichtungen in CSS. Wenn Sie eine Rechts-nach-Links-Sprache wie Arabisch anzeigen, ist der Anfang des Grids oben rechts, sodass das Standard von `justify-content: start` bedeuten würde, dass die Grid-Tracks auf der rechten Seite des Grids beginnen.

Das Festlegen von {{Glossary("physical_properties", "physischen Eigenschaften")}} wie dem Festlegen von automatischen Rändern mit {{cssxref("margin-right")}} oder {{cssxref("margin-left")}}, oder das absolute Positionieren von Elementen mit den {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}} Versätzen, respektiert keine Schreibrichtungen. Im Leitfaden zu [Grids, logischen Werten und Schreibrichtungen](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes) werden wir weiter auf diese Interaktion zwischen CSS-Grid-Layout, Box-Ausrichtung und Schreibrichtungen eingehen. Dies wird wichtig zu verstehen sein, wenn Sie Websites entwickeln, die dann in mehreren Sprachen angezeigt werden, oder wenn Sie Sprachen oder Schreibrichtungen in einem Design mischen möchten.

## Siehe auch

- [Grundlegende Konzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Beziehung des Grid-Layouts zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [Grid-Layout mit linienbasierter Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Template-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Grid-Layout mit benannten Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
