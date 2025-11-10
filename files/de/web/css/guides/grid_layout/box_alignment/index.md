---
title: Ausrichten von Elementen im CSS-Rasterlayout
short-title: Ausrichten von Elementen
slug: Web/CSS/Guides/Grid_layout/Box_alignment
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das [CSS-Rasterlayout](/de/docs/Web/CSS/Guides/Grid_layout) implementiert die [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment), die derselbe Standard ist, den [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) zur Ausrichtung von Elementen in seinem Flex-Container verwendet. Das Ausrichtungsmodul beschreibt, wie die Ausrichtung in allen Layoutmethoden funktionieren sollte.

In diesem Leitfaden betrachten wir, wie die Box-Ausrichtungs-Eigenschaften verwendet werden, um Elemente im Rasterlayout auszurichten.

Es kann Ihnen auffallen, dass es Ähnlichkeiten gibt, wie diese Eigenschaften und Werte in Flexbox funktionieren. Da das Raster zweidimensional ist und Flexbox eindimensional, gibt es kleine Unterschiede, auf die Sie achten sollten. Aus diesem Grund beginnen wir mit einem Blick auf die beiden Achsen, die wir beim Ausrichten von Dingen in einem Raster betrachten.

## Die beiden Achsen eines Rasterlayouts

Beim Arbeiten mit einem Rasterlayout haben Sie zwei Achsen zur Verfügung, an denen Sie Dinge ausrichten können – die _Block-Achse_ und die _Inline-Achse_. Die {{Glossary("Flow_relative_values#block_direction", "Block-Achse")}} ist die Achse, auf der Blöcke im Block-Layout angeordnet werden. Wenn Sie zwei Absätze auf Ihrer Seite haben, werden diese untereinander angezeigt, sodass wir diese Richtung als die Block-Achse beschreiben.

![Block-Achsen sind vertikal.](block_axis.png)

Die {{Glossary("Flow_relative_values#inline_direction", "Inline-Achse")}} läuft quer zur Block-Achse, es ist die Richtung, in der der Text im regulären Inline-Fluss läuft.

![Inline- / Reihen-Achsen sind horizontal.](7_inline_axis.png)

Wir können den Inhalt innerhalb von Rasterbereichen und die Rasterspuren selbst auf diesen beiden Achsen ausrichten.

## Elemente auf der Block-Achse ausrichten

Die {{cssxref("align-self")}} und {{cssxref("align-items")}} Eigenschaften steuern die Ausrichtung auf der Block-Achse. Wenn wir diese Eigenschaften verwenden, ändern wir die Ausrichtung des Elements innerhalb des von Ihnen platzierten Rasterbereichs.

### Verwenden von align-items

Im folgenden Beispiel haben wir vier {{Glossary("grid_areas", "Rasterbereiche")}} innerhalb unseres Rasters. Wir können die {{cssxref("align-items")}} Eigenschaft auf dem {{Glossary("grid_container", "Raster-Container")}} verwenden, um die Elemente mit den Werten `normal`, `stretch` oder {{cssxref("self-position")}} oder {{cssxref("baseline-position")}} auszurichten:

- `normal`
- `stretch`
- `start`
- `end`
- `center`
- `baseline`
- `first baseline`
- `last baseline`
- `auto` (nur `align-self`)

Der Standardwert ist `normal`, was für Raster-Container zu `stretch` aufgelöst wird.

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

Denken Sie daran, dass, wenn Sie `align-items: start` festlegen, die Höhe jedes untergeordneten `<div>` durch den Inhalt des `<div>` bestimmt wird. Dies steht im Gegensatz zum vollständigen Auslassen von {{cssxref("align-items")}}, in welchem Fall die Höhe jedes `<div>` sich so ausdehnt, dass es den Rasterbereich ausfüllt.

Die `align-items` Eigenschaft setzt die {{cssxref("align-self")}} Eigenschaft für alle untergeordneten Raster-Elemente. Das bedeutet, dass Sie die Eigenschaft individuell festlegen können, indem Sie `align-self` direkt auf ein Raster-Element anwenden.

### Verwenden von align-self

Im nächsten Beispiel verwenden wir die `align-self` Eigenschaft, um die verschiedenen Ausrichtungswerte zu demonstrieren. Der erste Bereich zeigt das Standardverhalten von `align-self`, das in diesem Fall zu `stretch` aufgelöst wird. Das zweite Element hat einen `align-self`-Wert von `start`, das dritte `end` und das vierte `center`.

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

Das Standardverhalten für {{cssxref("align-self")}} ist, vom `align-items` der Raster-Container-Eigenschaft zu erben, wobei der `normal` Standard zu `stretch` führt, mit Ausnahme von Elementen mit einem intrinsischen {{Glossary("aspect_ratio", "Seitenverhältnis")}}. In diesem Fall verhalten sie sich wie `start`. Der Grund dafür ist, dass wenn Elemente mit einem Seitenverhältnis gestreckt werden würden, sie verzerrt würden.

## Elemente auf der Inline-Achse rechtfertigen

Während `align-items` und `align-self` Elemente auf der Block-Achse ausrichten, richten {{cssxref("justify-items")}} und {{cssxref("justify-self")}} Elemente auf der Inline-Achse aus. Die Werte, aus denen Sie wählen können, sind ähnlich denen der `align-self`-Eigenschaft `normal`, `stretch`, {{cssxref("self-position")}} und {{cssxref("baseline-position")}}, zusammen mit `left` und `right`. Zu den Werten gehören:

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

Sie können das gleiche Beispiel wie für {{cssxref("align-items")}} unten sehen. Diesmal wenden wir die {{cssxref("justify-self")}} Eigenschaft an.

Wieder einmal ist der Standard `stretch`, außer für Elemente mit einem intrinsischen Seitenverhältnis. Dies bedeutet, dass Raster-Elemente standardmäßig ihren Rasterbereich abdecken, es sei denn, Sie ändern die Ausrichtung. In diesem Beispiel zeigt das erste Element den Standardwert `stretch` der Ausrichtung:

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

Wie bei `align-self` und `align-items`, können Sie `justify-items` auf den Raster-Container anwenden, um einen `justify-self`-Wert für alle Raster-Elemente im Container festzulegen.

> [!NOTE]
> Die `justify-self` und `justify-items` Eigenschaften werden in Flexbox nicht implementiert. Dies liegt an der eindimensionalen Natur von [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) und dass es möglicherweise mehrere Elemente entlang der Achse gibt, was es unmöglich macht, ein einzelnes Element zu rechtfertigen. Um Elemente entlang der Haupt-, Inline-Achse in Flexbox auszurichten, verwenden Sie die {{cssxref("justify-content")}} Eigenschaft.

### Kurzschreibweise

Die {{CSSxRef("place-items")}} Eigenschaft ist eine Kurzschreibweise für `align-items` und `justify-items`.

Die {{CSSxRef("place-self")}} Eigenschaft ist eine Kurzschreibweise für `align-self` und `justify-self`.

## Ein Element in der Fläche zentrieren

Indem wir die Ausrichtungs- und Rechtfertigungseigenschaften kombinieren, können wir ein Element leicht in einem Rasterbereich zentrieren.

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

## Die Rasterspuren auf der Block-Achse ausrichten

Wenn Sie eine Situation haben, in der Ihre Rasterspuren einen Bereich nutzen, der kleiner ist als der Raster-Container, können Sie die Rasterspuren selbst innerhalb dieses Containers ausrichten. Die {{cssxref("align-content")}} richtet die Spuren auf der Block-Achse aus und {{cssxref("justify-content")}} richtet auf der Inline-Achse aus. Wie bei den `*-items` und `*-item` Eigenschaften ist die {{CSSxRef("place-content")}} Eigenschaft eine Kurzschreibweise für `align-content` und `justify-content`.

Die Werte für `align-content`, `justify-content` und `place-content` beinhalten alle die {{cssxref("content-distribution")}} und {{cssxref("content-position")}} Werte. Die `align-content` Eigenschaft akzeptiert auch {{cssxref("baseline-position")}} Werte und, wie die anderen `justify-*` Eigenschaften, akzeptiert `justify-content` auch `left` und `right`.

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

Die `align-content` Eigenschaft wird auf den Raster-Container angewendet, da sie auf das gesamte Raster wirkt.

### Standardausrichtung

In diesem Beispiel hat der 500px x 500px Raster-Container drei Reihen- und drei Spaltenspuren von 100px mit einem 10px Abstand. Das bedeutet, dass es Platz innerhalb des Raster-Containers in sowohl der Block- als auch der Inline-Richtung gibt.

Standardmäßig sind unsere Rasterspuren in der oberen linken Ecke des Rasters, ausgerichtet an den Start-Rasterlinien, da das Standardverhalten im Rasterlayout `start` ist:

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

### Einstellen von align-content: end

Mit demselben CSS und HTML fügen wir in diesem Beispiel `align-content` mit dem Wert `end` zum Container hinzu, sodass sich die Spuren alle zur Endlinie des Raster-Containers in der Blockdimension bewegen:

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

### Einstellen von align-content: space-between

Wir können auch die {{cssxref("content-distribution")}} Raumverteilungswerte `space-between`, `space-around`, `space-evenly` und `stretch` anwenden. In diesem Beispiel setzen wir {{cssxref("align-content")}}, das die Spuren auf der Block-Achse ausrichtet, auf `space-between`, was die Spuren verteilt:

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

Wenn ein Element sich über mehr als eine Rasterspur erstreckt, wird die Verwendung eines Raumverteilungswertes wahrscheinlich dazu führen, dass Elemente auf Ihrem Raster größer werden, da der Raum, der zwischen den Spuren hinzugefügt wird, zum den sich erstreckenden Element hinzugefügt wird. Daher, wenn Sie diese Werte verwenden, stellen Sie sicher, dass der Inhalt der Spuren mit dem zusätzlichen Platz zurechtkommt, oder dass Sie Ausrichtungseigenschaften auf den Elementen verwendet haben, sodass sie sich zum Anfang oder Ende statt zum Strecken bewegen.

Im untenstehenden Bild haben wir das Raster mit zwei verschiedenen `align-content` Werten platziert, um `start` und `space-between` zu vergleichen. Sie können sehen, wie die ersten beiden Elemente, die sich über zwei Zeilenspuren erstrecken, im `space-between`-Beispiel zusätzliche Höhe gewonnen haben, da sie den Raum aufnehmen, der aufgrund des freigegebenen Raums, der _zwischen_ den drei Reihen verteilt wurde, existiert:

![Demonstration, wie Elemente größer werden, wenn wir space-between verwenden.](7_space-between.png)

## Die Rasterspuren auf der Inline-Achse rechtfertigen

Wir können `justify-content` verwenden, um die gleiche Art von Ausrichtung auf der Inline-Achse durchzuführen, die wir `align-content` für die Block-Achse verwendet haben.

Verwenden Sie das gleiche Beispiel, setzen wir {{cssxref("justify-content")}} auf `space-around`. Dies führt erneut dazu, dass Spuren, die sich über mehr als eine Spaltenspur erstrecken, zusätzlichen Platz erhalten:

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

Eine andere Möglichkeit, Elemente innerhalb ihres Bereichs auszurichten, besteht darin, automatische Ränder zu verwenden. Wenn Sie jemals ein Layout im Ansichtsfenster zentriert haben oder ein beliebiges Blockelement innerhalb seines übergeordneten Elements, haben Sie dies möglicherweise getan, indem Sie den rechten und linken Rand des Elements, das Sie zentrieren wollten, auf `auto` gesetzt haben. Der automatische Rand absorbiert den gesamten verfügbaren Platz. Das Festlegen des Rands auf `auto` auf beiden Seiten drückt das blockelement in die Mitte, da beide Ränder versuchen, den gesamten Raum einzunehmen.

Im nächsten Beispiel hat das Element 1 seine {{cssxref("margin-left")}} Eigenschaft auf `auto` gesetzt. Dadurch wird der Inhalt auf die rechte Seite des Bereichs gedrückt, da der automatische Rand den verfügbaren Platz einnimmt, der noch vorhanden war, nachdem der für den Inhalt benötigte Platz zugewiesen wurde:

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

Verwenden Sie den Rasterinspektor in den Entwicklertools Ihres Browsers, um zu sehen, wie das Element ausgerichtet ist:

![Bild, das automatische Ränder mit dem Firefox-Raster-Highlighter zeigt.](7_auto_margins.png)

## Ausrichtung und Schreibmodi

Alle diese Beispiele waren in Englisch, einer Sprache von links nach rechts. Das bedeutet, dass unsere Startlinien oben links auf unserem Raster sind, wenn wir in physikalischen Richtungen denken.

CSS-Rasterlayout und CSS-Box-Ausrichtung arbeiten mit Schreibmodi in CSS. Beim Anzeigen einer Sprache von rechts nach links, wie Arabisch, liegt der Anfang des Rasters oben rechts, sodass das Standardverhalten von `justify-content: start` wäre, dass Rasterspuren auf der rechten Seite des Rasters beginnen.

Das Festlegen von {{Glossary("physical_properties", "physikalischen Eigenschaften")}}, wie das Festlegen von automatischen Rändern mit {{cssxref("margin-right")}} oder {{cssxref("margin-left")}}, oder das absolut Positionieren von Elementen mit den {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}} Offsets, berücksichtigen keine Schreibmodi. Im [Raster, logische Werte und Schreibmodi](/de/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes) Leitfaden werden wir weiter auf diese Interaktion zwischen CSS-Rasterlayout, Box-Ausrichtung und Schreibmodi eingehen. Dies wird wichtig zu verstehen sein, wenn Sie Websites entwickeln, die dann in mehreren Sprachen angezeigt werden, oder wenn Sie in einem Design Sprachen oder Schreibmodi mischen möchten.

## Siehe auch

- [Grundkonzepte des Rasterlayouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [Verhältnis des Rasterlayouts zu anderen Layoutmethoden](/de/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)
- [Rasterlayout unter Verwendung der linienbasierten Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Rastervorlage Bereiche](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
- [Rasterlayout unter Verwendung benannter Rasterlinien](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)
- [Automatikplatzierung im Rasterlayout](/de/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
- [Box-Ausrichtung im CSS-Rasterlayout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
