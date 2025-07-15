---
title: Ausrichten von Elementen im CSS-Grid-Layout
short-title: Elemente ausrichten
slug: Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) implementiert [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment), denselben Standard, den [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) für die Ausrichtung von Elementen in seinem Flex-Container verwendet. Das Alignment-Modul beschreibt, wie die Ausrichtung in allen Layout-Methoden funktionieren soll.

In diesem Leitfaden betrachten wir, wie die Box-Ausrichtungseigenschaften genutzt werden, um Elemente im Grid-Layout auszurichten.

Sie werden Ähnlichkeiten bemerken, wie diese Eigenschaften und Werte in Flexbox funktionieren. Da das Grid zweidimensional und Flexbox eindimensional ist, gibt es einige kleine Unterschiede, auf die Sie achten sollten. Aus diesem Grund beginnen wir damit, die zwei Achsen zu betrachten, mit denen wir bei der Ausrichtung von Elementen in einem Grid arbeiten.

## Die zwei Achsen eines Grid-Layouts

Beim Arbeiten mit dem Grid-Layout stehen Ihnen zwei Achsen zur Verfügung, um Dinge auszurichten – die _Block-Achse_ und die _Inline-Achse_. Die {{Glossary("Flow_relative_values#block_direction", "Block-Achse")}} ist die Achse, auf der Blöcke im Block-Layout angeordnet sind. Wenn Sie zwei Absätze auf Ihrer Seite haben, werden sie untereinander angezeigt, daher beschreiben wir diese Richtung als die Block-Achse.

![Blockachsen sind vertikal.](block_axis.png)

Die {{Glossary("Flow_relative_values#inline_direction", "Inline-Achse")}} verläuft entlang der Block-Achse; es ist die Richtung, in der Text im regulären Inline-Fluss verläuft.

![Inline- / Zeilenachsen sind horizontal.](7_inline_axis.png)

Wir können den Inhalt innerhalb von Grid-Bereichen und die Grid-Spuren selbst entlang dieser beiden Achsen ausrichten.

## Ausrichten von Elementen auf der Block-Achse

Die Eigenschaften {{cssxref("align-self")}} und {{cssxref("align-items")}} steuern die Ausrichtung auf der Block-Achse. Wenn wir diese Eigenschaften verwenden, ändern wir die Ausrichtung des Elements innerhalb des Grid-Bereichs, in dem Sie es platziert haben.

### Verwendung von align-items

Im folgenden Beispiel haben wir vier {{Glossary("grid_areas", "Grid-Bereiche")}} innerhalb unseres Grids. Wir können die Eigenschaft {{cssxref("align-items")}} auf den {{Glossary("grid_container", "Grid-Container")}} anwenden, um die Elemente mit den Werten `normal`, `stretch`, oder {{cssxref("self-position")}} oder {{cssxref("baseline-position")}} auszurichten:

- `normal`
- `stretch`
- `start`
- `end`
- `center`
- `baseline`
- `first baseline`
- `last baseline`
- `auto` (nur `align-self`)

Der Standardwert ist `normal`, was sich für Grid-Container zu `stretch` auflöst.

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

Beachten Sie, dass, sobald Sie `align-items: start` festlegen, die Höhe jedes Kind-`<div>` durch den Inhalt des `<div>` bestimmt wird. Dies steht im Gegensatz zu dem völligen Weglassen von {{cssxref("align-items")}}, in welchem Fall sich die Höhe jedes `<div>` streckt, um seinen Grid-Bereich auszufüllen.

Die `align-items`-Eigenschaft setzt die {{cssxref("align-self")}}-Eigenschaft für alle Kind-Grid-Elemente. Das bedeutet, dass Sie die Eigenschaft individuell einstellen können, indem Sie `align-self` direkt auf einem Grid-Element verwenden.

### Verwendung von align-self

Im nächsten Beispiel verwenden wir die `align-self`-Eigenschaft, um die verschiedenen Ausrichtungswerte zu demonstrieren. Der erste Bereich zeigt das Standardverhalten von `align-self`, das sich in diesem Fall auf `stretch` auflöst. Das zweite Element hat einen `align-self`-Wert von `start`, das dritte `end` und das vierte `center`.

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

Das Standardverhalten für {{cssxref("align-self")}} ist es, von der `align-items`-Eigenschaft des Grid-Containers zu erben, für die der Standard `normal` zu strecken ist, außer für Elemente, die ein intrinsisches {{Glossary("aspect_ratio", "Seitenverhältnis")}} haben, in diesem Fall verhalten sie sich wie `start`. Der Grund dafür ist, dass, wenn Elemente mit einem Seitenverhältnis gestreckt werden, sie verzerrt würden.

## Elemente auf der Inline-Achse rechtfertigen

Während `align-items` und `align-self` Elemente auf der Block-Achse ausrichten, richten {{cssxref("justify-items")}} und {{cssxref("justify-self")}} Elemente auf der Inline-Achse aus. Die Werte, die Sie wählen können, sind ähnlich denen der `normal`, `stretch`, {{cssxref("self-position")}} und {{cssxref("baseline-position")}}-Werte der `align-self`-Eigenschaft, zusammen mit `left` und `right`. Die Werte umfassen:

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

Unten sehen Sie dasselbe Beispiel, das für {{cssxref("align-items")}} verwendet wurde. Diesmal wenden wir die Eigenschaft {{cssxref("justify-self")}} an.

Wieder einmal ist der Standard `stretch`, außer für Elemente mit einem intrinsischen Seitenverhältnis. Dies bedeutet, dass Grid-Elemente standardmäßig ihren Grid-Bereich abdecken, es sei denn, Sie ändern die Ausrichtung. In diesem Beispiel zeigt das erste Element den Standardwert `stretch`:

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

Wie bei `align-self` und `align-items` können Sie `justify-items` auf den Grid-Container anwenden, um einen `justify-self`-Wert für alle Grid-Elemente innerhalb des Containers festzulegen.

> [!NOTE]
> Die `justify-self`- und `justify-items`-Eigenschaften sind in Flexbox nicht implementiert. Dies liegt an der eindimensionalen Natur von [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) und daran, dass es entlang der Achse möglicherweise mehrere Elemente gibt, die es unmöglich machen, ein einzelnes Element zu rechtfertigen. Um Elemente entlang der Haupt-, Inline-Achse in Flexbox auszurichten, verwenden Sie die {{cssxref("justify-content")}}-Eigenschaft.

### Kurzschreibweise

Die {{CSSxRef("place-items")}}-Eigenschaft ist eine Kurzschreibweise für `align-items` und `justify-items`.

Die {{CSSxRef("place-self")}}-Eigenschaft ist eine Kurzschreibweise für `align-self` und `justify-self`.

## Ein Element innerhalb des Bereichs zentrieren

Indem wir die Align- und Justify-Eigenschaften kombinieren, können wir ein Element leicht in einem Grid-Bereich zentrieren.

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

Wenn Sie eine Situation haben, in der Ihre Grid-Spuren einen Bereich verwenden, der kleiner ist als der Grid-Container, können Sie die Grid-Spuren selbst in diesem Container ausrichten. Die {{cssxref("align-content")}}-Eigenschaft richtet die Spuren auf der Block-Achse aus und {{cssxref("justify-content")}} richtet sie auf der Inline-Achse aus. Wie bei den `*-items`- und `*-item`-Eigenschaften ist die {{CSSxRef("place-content")}}-Eigenschaft eine Kurzschreibweise für `align-content` und `justify-content`.

Die Werte für `align-content`, `justify-content` und `place-content` umfassen alle die {{cssxref("content-distribution")}}- und {{cssxref("content-position")}}-Werte. Die `align-content`-Eigenschaft akzeptiert auch {{cssxref("baseline-position")}}-Werte und, wie die anderen `justify-*`-Eigenschaften, akzeptiert `justify-content` auch `left` und `right`.

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

Die `align-content`-Eigenschaft wird auf den Grid-Container angewendet, da sie auf das gesamte Grid wirkt.

### Standardausrichtung

In diesem Beispiel hat der 500px mal 500px große Grid-Container drei Zeilen und drei Spalten mit 100px-Spuren und einem 10px-Abstand. Das bedeutet, dass im Grid-Container in beide Richtungen Platz vorhanden ist.

Standardmäßig sind unsere Grid-Spuren in der oberen linken Ecke des Grids, an den Anfangs-Gitterlinien ausgerichtet, da das Standardverhalten im Grid-Layout `start` ist:

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

Mit demselben CSS und HTML fügen wir in diesem Beispiel `align-content` mit einem Wert von `end` zum Container hinzu, wodurch alle Spuren zur Endlinie des Grid-Containers in der Block-Dimension verschoben werden:

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

Wir können auch die {{cssxref("content-distribution")}}-Abstandsverteilungswerte von `space-between`, `space-around`, `space-evenly` und `stretch` anwenden. In diesem Beispiel setzen wir {{cssxref("align-content")}}, das die Spuren auf der Block-Achse ausrichtet, auf `space-between`, was die Spuren verteilt:

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

Wenn ein Element mehr als eine Grid-Spur umfasst, wird durch die Verwendung eines Verteilungswertes wahrscheinlich Ihre Gitterelemente größer, weil der zwischen den Spuren hinzugefügte Platz zu dem umfassenden Element hinzugefügt wird. Deshalb stellen Sie sicher, dass der Inhalt der Spuren mit dem zusätzlichen Raum umgehen kann oder dass Sie Ausrichtungseigenschaften auf den Elementen verwendet haben, sodass sie sich zum Anfang oder Ende bewegen, anstatt sich zu strecken.

Im Bild unten haben wir das Grid mit zwei verschiedenen `align-content`-Werten platziert, um `start` und `space-between` zu vergleichen. Sie können sehen, wie die ersten beiden Elemente, die zwei Zeilen-Spuren umfassen, in dem `space-between`-Beispiel zusätzliche Höhe gewonnen haben, da sie den Raum einnehmen, der durch den freien Raum entsteht, der _zwischen_ den drei Zeilen verteilt wurde:

![Veranschaulicht, wie Elemente größer werden, wenn wir space-between verwenden.](7_space-between.png)

## Die Grid-Spuren auf der Inline-Achse rechtfertigen

Wir können `justify-content` verwenden, um die gleiche Art von Ausrichtung auf der Inline-Achse durchzuführen, die wir für die Block-Achse mit `align-content` verwendet haben.

Am selben Beispiel setzen wir {{cssxref("justify-content")}} auf `space-around`. Dies führt wiederum dazu, dass Spuren, die mehr als eine Spalten-Spur umfassen, zusätzlichen Platz bekommen:

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

Eine andere Möglichkeit, Elemente innerhalb ihres Bereichs auszurichten, besteht darin, automatische Ränder zu verwenden. Wenn Sie jemals ein Layout im Anzeigebereich zentriert haben oder ein Block-Level-Element innerhalb seines übergeordneten Elements, haben Sie dies möglicherweise getan, indem Sie den rechten und linken Rand des zentrieren zu wollenden Elements auf `auto` gesetzt haben. Der automatische Rand absorbiert den gesamten verfügbaren Raum. Wird der Rand auf beiden Seiten auf `auto` gesetzt, drängt es das Block-Level-Element in die Mitte, da beide Ränder versuchen, den gesamten Platz einzunehmen.

Im nächsten Beispiel hat das erste Element seine {{cssxref("margin-left")}}-Eigenschaft auf `auto` gesetzt. Dies schiebt den Inhalt auf die rechte Seite des Bereichs, da der automatische Rand den verfügbaren Platz einnimmt, der nach der Zuweisung des für den Inhalt erforderlichen Raums übrig blieb:

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

![Bild, das die Auto-Ränder unter Verwendung des Firefox-Grid-Highlighters zeigt.](7_auto_margins.png)

## Ausrichtung und Schreibmodi

All diese Beispiele waren auf Englisch, einer von links nach rechts verlaufenden Sprache. Das bedeutet, dass unsere Startlinien oben links in unserem Grid sind, wenn wir in physischen Richtungen denken.

CSS-Grid-Layout und CSS-Box-Ausrichtung arbeiten mit Schreibmodi in CSS. Beim Anzeigen einer von rechts nach links verlaufenden Sprache wie Arabisch ist der Anfang des Grids oben rechts, daher würden die Grid-Spuren bei der Standardeinstellung `justify-content: start` auf der rechten Seite des Grids beginnen.

Das Festlegen von {{Glossary("physical_properties", "physischen Eigenschaften")}}, wie das Festlegen von automatischen Rändern mit {{cssxref("margin-right")}} oder {{cssxref("margin-left")}} oder das absolute Positionieren von Elementen mit den Versätzen {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}} berücksichtigt keine Schreibmodi. Im [Raster, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes) Leitfaden werden wir uns weiter mit dieser Interaktion zwischen CSS-Grid-Layout, Box-Ausrichtung und Schreibmodi befassen. Dies wird wichtig zu verstehen sein, wenn Sie Websites entwickeln, die dann in mehreren Sprachen angezeigt werden, oder wenn Sie Sprachen oder Schreibmodi in einem Design mischen wollen.

## Siehe auch

- [Grundlegende Konzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Beziehung des Grid-Layouts mit anderen Layout-Methoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [Grid-Layout unter Verwendung von linienbasierter Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Template-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Grid-Layout unter Verwendung von benannten Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
