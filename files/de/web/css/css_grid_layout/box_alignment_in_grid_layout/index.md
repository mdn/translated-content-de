---
title: Ausrichten von Elementen in CSS-Grid-Layout
short-title: Elemente ausrichten
slug: Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout
l10n:
  sourceCommit: fdaaf0efca6acb1a2547d4e1ac00d867bddf8cb3
---

[CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) implementiert die [Ausrichtung von CSS-Boxen](/de/docs/Web/CSS/CSS_box_alignment), was demselben Standard entspricht, den [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) zur Ausrichtung von Elementen in seinem Flex-Container verwendet. Das Ausrichtungsmodul beschreibt, wie die Ausrichtung in allen Layout-Methoden funktionieren sollte.

In diesem Leitfaden betrachten wir, wie die Box-Ausrichtungs-Eigenschaften verwendet werden, um Elemente im Grid-Layout auszurichten.

Sie werden möglicherweise Ähnlichkeiten darin feststellen, wie diese Eigenschaften und Werte in Flexbox funktionieren. Da Grid zweidimensional und Flexbox eindimensional ist, gibt es einige kleine Unterschiede, auf die Sie achten sollten. Aus diesem Grund beginnen wir damit, die beiden Achsen zu betrachten, mit denen wir es beim Ausrichten von Elementen in einem Grid zu tun haben.

## Die beiden Achsen eines Grid-Layouts

Beim Arbeiten mit Grid-Layout stehen Ihnen zwei Achsen zur Verfügung, an denen Sie Elemente ausrichten können – die _Block-Achse_ und die _Inline-Achse_. Die {{Glossary("Flow_relative_values#block_direction", "Block-Achse")}} ist die Achse, entlang derer Blöcke im Block-Layout angeordnet werden. Wenn Sie zwei Absätze auf Ihrer Seite haben, wird der eine unter dem anderen angezeigt, also ist diese Richtung das, was wir als Block-Achse beschreiben.

![Blockachsen sind vertikal.](block_axis.png)

Die {{Glossary("Flow_relative_values#inline_direction", "Inline-Achse")}} verläuft quer zur Block-Achse und ist die Richtung, in der Text im regulären Inline-Fluss verläuft.

![Inline-/Zeilenachse sind horizontal.](7_inline_axis.png)

Wir können den Inhalt innerhalb von Grid-Bereichen ausrichten und die Grid-Strecken selbst auf diesen beiden Achsen anordnen.

## Ausrichten von Elementen auf der Block-Achse

Die Eigenschaften {{cssxref("align-self")}} und {{cssxref("align-items")}} steuern die Ausrichtung auf der Block-Achse. Wenn wir diese Eigenschaften verwenden, ändern wir die Ausrichtung des Elements innerhalb des Grid-Bereichs, in dem Sie es platziert haben.

### Verwendung von align-items

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

Der Standardwert ist `normal`, was bei Grid-Containern zu `stretch` wird.

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

Beachten Sie, dass, wenn Sie `align-items: start` festlegen, die Höhe jedes `<div>`-Kindes durch den Inhalt des `<div>` bestimmt wird. Das steht im Gegensatz dazu, {{cssxref("align-items")}} vollständig wegzulassen, in welchem Fall sich die Höhe jedes `<div>` über den gesamten Grid-Bereich erstreckt.

Die `align-items`-Eigenschaft setzt die {{cssxref("align-self")}}-Eigenschaft für alle Kind-Grid-Elemente. Das bedeutet, dass Sie die Eigenschaft individuell festlegen können, indem Sie `align-self` direkt auf einem Grid-Element verwenden.

### Verwendung von align-self

Im nächsten Beispiel verwenden wir die Eigenschaft `align-self`, um die verschiedenen Ausrichtungswerte zu demonstrieren. Der erste Bereich zeigt das Standardverhalten von `align-self`, was in diesem Fall zu `stretch` wird. Das zweite Element hat einen `align-self`-Wert von `start`, das dritte `end` und das vierte `center`.

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

Das Standardverhalten für {{cssxref("align-self")}} ist es, vom `align-items`-Eigenschaft des Grid-Containers zu erben, bei dem der Default `normal` ist, was zu `stretch` führt, außer für Elemente, die ein intrinsisches {{Glossary("aspect_ratio", "Seitenverhältnis")}} haben. In diesem Fall verhalten sie sich wie `start`. Der Grund dafür ist, dass wenn Elemente mit einem Seitenverhältnis gedehnt werden, sie verzerrt würden.

## Elemente auf der Inline-Achse rechtfertigen

Während `align-items` und `align-self` Elemente auf der Block-Achse ausrichten, richten {{cssxref("justify-items")}} und {{cssxref("justify-self")}} Elemente auf der Inline-Achse aus. Die von Ihnen wählbaren Werte ähneln den `normal`, `stretch`, {{cssxref("self-position")}} und {{cssxref("baseline-position")}} Werten der `align-self` Eigenschaft, zusammen mit `left` und `right`. Werte umfassen:

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

Sie können das gleiche Beispiel verwenden wie bei {{cssxref("align-items")}}, unten. Diesmal wenden wir die {{cssxref("justify-self")}}-Eigenschaft an.

Wieder ist der Standard `stretch`, außer für Elemente mit einem intrinsischen Seitenverhältnis. Das bedeutet, dass Grid-Elemente ihren Grid-Bereich standardmäßig abdecken, es sei denn, Sie ändern die Ausrichtung. In diesem Beispiel zeigt das erste Element den Standard-Ausrichtungswert `stretch`:

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

Wie bei `align-self` und `align-items` können Sie `justify-items` auf den Grid-Container anwenden, um einen `justify-self`-Wert für alle Grid-Elemente im Container festzulegen.

> [!NOTE]
> Die Eigenschaften `justify-self` und `justify-items` sind in Flexbox nicht implementiert. Dies liegt an der eindimensionalen Natur von [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) und daran, dass es mehrere Elemente entlang der Achse geben kann, was es unmöglich macht, ein einzelnes Element zu rechtfertigen. Um Elemente entlang der Haupt-, Inline-Achse in Flexbox auszurichten, verwenden Sie die {{cssxref("justify-content")}}-Eigenschaft.

### Kurzschreibereigenschaften

Die Eigenschaft {{CSSxRef("place-items")}} ist eine Kurzschreibweise für `align-items` und `justify-items`.

Die Eigenschaft {{CSSxRef("place-self")}} ist eine Kurzschreibweise für `align-self` und `justify-self`.

## Ein Element in der Fläche zentrieren

Durch die Kombination der Ausrichtungs- und Rechtfertigungseigenschaften können wir ein Element einfach in einem Grid-Bereich zentrieren.

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

## Ausrichten der Grid-Strecken auf der Block-Achse

Wenn Sie eine Situation haben, in der Ihre Grid-Strecken einen Bereich verwenden, der kleiner ist als der Grid-Container, können Sie die Grid-Strecken selbst in diesem Container ausrichten. Die {{cssxref("align-content")}}-Eigenschaft richtet die Strecken auf der Block-Achse aus und {{cssxref("justify-content")}} richtet sie auf der Inline-Achse aus. Wie bei den `*-items` und `*-item` Eigenschaften ist die {{CSSxRef("place-content")}} Eigenschaft eine Abkürzung für `align-content` und `justify-content`.

Die Werte für `align-content`, `justify-content` und `place-content` umfassen alle {{cssxref("content-distribution")}} und {{cssxref("content-position")}} Werte. Die `align-content`-Eigenschaft akzeptiert auch {{cssxref("baseline-position")}}-Werte, und wie die anderen `justify-*` Eigenschaften akzeptiert `justify-content` auch `left` und `right`.

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

In diesem Beispiel hat der 500px mal 500px große Grid-Container drei Zeilen und drei Spalten mit 100px Strecken und einer 10px Nut. Das bedeutet, dass innerhalb des Grid-Containers in sowohl der Block- als auch der Inline-Richtung Platz ist.

Standardmäßig befinden sich unsere Grid-Strecken in der oberen linken Ecke des Grids, ausgerichtet an den Startlinien des Grids, da das Standardverhalten im Grid-Layout `start` ist:

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

Mit dem gleichen CSS und HTML fügen wir in diesem Beispiel dem Container `align-content` mit dem Wert `end` hinzu, sodass sich die Strecken in der Block-Dimension alle zur Endlinie des Grid-Containers bewegen:

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

Wir können auch die {{cssxref("content-distribution")}}-Raumverteilungswerte `space-between`, `space-around`, `space-evenly` und `stretch` anwenden. In diesem Beispiel setzen wir {{cssxref("align-content")}}, das die Strecken auf der Block-Achse ausrichtet, auf `space-between`, was die Strecken auseinanderzieht:

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

Wenn ein Element mehr als eine Grid-Strecke überspannt, führt die Verwendung eines Raumverteilungswerts wahrscheinlich dazu, dass Ihre Grid-Elemente größer werden, da der Raum, der zwischen den Strecken hinzugefügt wird, dem spannenden Element hinzugefügt wird. Daher stellen Sie sicher, wenn Sie diese Werte verwenden, dass der Inhalt der Strecken mit dem zusätzlichen Raum zurechtkommt oder dass Sie Ausrichtungseigenschaften auf den Elementen verwendet haben, damit sie zum Start oder Ende verschoben werden anstatt sich zu dehnen.

Im unten abgebildeten Bild haben wir das Grid mit zwei verschiedenen `align-content`-Werten platziert, um `start` und `space-between` zu vergleichen. Sie können sehen, wie die ersten beiden Elemente, die zwei Zeilen-Strecken überspannen, im `space-between`-Beispiel zusätzliche Höhe angenommen haben, da sie den Raum erhalten, der durch den zwischen den drei Zeilen verteilten freien Raum existiert:

![Demonstration, wie Elemente größer werden, wenn wir space-between verwenden.](7_space-between.png)

## Rechtfertigung der Grid-Strecken auf der Inline-Achse

Wir können `justify-content` verwenden, um denselben Typ der Ausrichtung auf der Inline-Achse zu erreichen, den wir mit `align-content` auf der Block-Achse verwendet haben.

Mit demselben Beispiel setzen wir {{cssxref("justify-content")}} auf `space-around`. Dies führt wiederum dazu, dass Strecken, die mehr als eine Spalte überspannen, zusätzlichen Raum gewinnen:

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

Eine andere Möglichkeit, Elemente innerhalb ihres Bereichs auszurichten, besteht darin, automatische Ränder zu verwenden. Wenn Sie jemals ein Layout im Ansichtsfenster oder ein Block-Element innerhalb seines übergeordneten Elements zentriert haben, haben Sie dies möglicherweise getan, indem Sie den rechten und linken Rand des Elements, das Sie zentrieren möchten, auf `auto` gesetzt haben. Der automatische Rand absorbiert den gesamten verfügbaren Platz. Das Setzen des Randes auf `auto` auf beiden Seiten drückt das Block-Element in die Mitte, da beide Ränder versuchen, den gesamten Platz einzunehmen.

Im nächsten Beispiel hat das Element 1 seine {{cssxref("margin-left")}}-Eigenschaft auf `auto` gesetzt. Dies verschiebt den Inhalt der Fläche nach rechts, da der automatische Rand den verfügbaren Platz einnimmt, der nach der Zuweisung des für den Inhalt benötigten Raums übrig geblieben ist:

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

Verwenden Sie den Grid-Inspektor in Ihren Entwicklertools des Browsers, um zu sehen, wie das Element ausgerichtet ist:

![Bild zeigt Auto-Ränder mit dem Firefox-Grid-Hervorheber.](7_auto_margins.png)

## Ausrichtung und Schreibrichtungen

Alle diese Beispiele waren in Englisch, einer von links nach rechts verlaufenden Sprache. Das bedeutet, dass sich unsere Startlinien oben links in unserem Grid befinden, wenn wir in physischen Richtungen denken.

CSS-Grid-Layout und CSS-Box-Ausrichtung funktionieren mit den Schreibrichtungen in CSS. Bei der Anzeige einer von rechts nach links verlaufenden Sprache, wie Arabisch, befindet sich der Start des Grids oben rechts, daher würde der Standard `justify-content: start` bedeuten, dass die Grid-Strecken auf der rechten Seite des Grids beginnen.

Das Setzen von {{Glossary("physical_properties", "physischen Eigenschaften")}}, beispielsweise das Setzen von Auto-Rändern mit {{cssxref("margin-right")}} oder {{cssxref("margin-left")}}, oder das absolute Positionieren von Elementen unter Verwendung der {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}}-Offsets respektiert keine Schreibrichtungen. Im [Grid-, logische Werte und Schreibrichtungen](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes) Leitfaden werden wir weiter darauf eingehen, wie CSS-Grid-Layout, Box-Ausrichtung und Schreibrichtungen miteinander interagieren. Dies wird wichtig zu verstehen sein, wenn Sie Websites entwickeln, die dann in mehreren Sprachen angezeigt werden oder wenn Sie Sprachen oder Schreibrichtungen in einem Design mischen möchten.

## Siehe auch

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Beziehung des Grid-Layouts zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [Grid-Layout basierend auf Linienplatzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Vorlagenbereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Grid-Layout mit benannten Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
