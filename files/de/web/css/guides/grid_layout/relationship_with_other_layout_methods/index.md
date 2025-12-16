---
title: Beziehung von Grid-Layout zu anderen Layout-Methoden
short-title: Grid und andere Layouts
slug: Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Das [CSS Grid Layout](/de/docs/Web/CSS/Guides/Grid_layout) wurde entwickelt, um zusammen mit anderen Teilen von CSS zu arbeiten, als Teil eines vollständigen Systems für das Layout. Dieser Leitfaden erklärt, wie das Grid-Layout mit anderen Techniken zusammenpasst.

## Grid und Flexbox

Der grundlegende Unterschied zwischen CSS Grid Layout und [CSS Flexbox Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) besteht darin, dass Flexbox für das Layout in einer Dimension konzipiert wurde - entweder eine Zeile _oder_ eine Spalte. Grid wurde für ein zweidimensionales Layout entwickelt - Zeilen und Spalten gleichzeitig. Beide Spezifikationen verwenden Funktionen der [CSS Boxausrichtung](/de/docs/Web/CSS/Guides/Box_alignment). Wenn Sie bereits gelernt haben, wie man Flexbox verwendet, sollten die Ähnlichkeiten Ihnen helfen, sich mit Grid vertraut zu machen.

### Eindimensionales versus zweidimensionales Layout

Ein grundlegendes Beispiel kann den Unterschied zwischen ein- und zweidimensionalen Layouts demonstrieren.

In diesem ersten Beispiel verwenden wir Flexbox, um eine Reihe von Boxen anzuordnen. Wir haben fünf Kind-Elemente in unserem Container, und wir haben den Flex-Eigenschaften Werte gegeben, sodass sie von einer Flex-Basis von 150 Pixel wachsen und schrumpfen können.

Wir setzen auch die {{cssxref("flex-wrap")}}-Eigenschaft auf `wrap`, sodass, wenn der Platz im Container zu schmal wird, um die Flex-Basis beizubehalten, die Elemente in eine neue Zeile umgebrochen werden.

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

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  width: 500px;
  display: flex;
  flex-wrap: wrap;
}
.wrapper > div {
  flex: 1 1 150px;
}
```

{{ EmbedLiveSample('One-dimensional_versus_two-dimensional_layout', '500', '170') }}

Auf dem Bild können Sie sehen, dass zwei Elemente in eine neue Zeile umgebrochen wurden. Diese Elemente teilen sich den verfügbaren Platz und sind nicht unter den darüberliegenden Elementen ausgerichtet. Dies liegt daran, dass bei Flex-Elementen jede neue Zeile (oder Spalte beim Arbeiten mit Spalten) eine unabhängige Flex-Linie im Flex-Container ist. Die Verteilung des Platzes erfolgt über die Flex-Linie hinweg.

Eine häufige Frage ist dann, wie man diese Elemente ausrichtet. Hier kommt eine zweidimensionale Layout-Methode ins Spiel: Sie möchten die Ausrichtung nach Zeile und Spalte kontrollieren, und genau das ist, wo Grid ins Spiel kommt.

### Dasselbe Layout mit CSS Grids

Im nächsten Beispiel erstellen wir dasselbe Layout mit Grid. Dieses Mal haben wir drei `1fr`-Spurspalten. Wir müssen nichts an den Elementen selbst festlegen; sie legen sich jeweils in eine Zelle des erstellten Grids. Wie Sie sehen können, bleiben sie in einem strikten Grid, ausgerichtet in Zeilen und Spalten. Bei fünf Elementen entsteht am Ende der zweiten Zeile eine Lücke.

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

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

{{ EmbedLiveSample('The_same_layout_with_CSS_grids', '300', '170') }}

Eine wichtige Frage, die Sie sich bei der Entscheidung zwischen Grid oder Flexbox stellen sollten, ist:

- Müssen wir das Layout nur nach Zeile _oder_ Spalte steuern? Wenn ja, verwenden Sie Flexbox.
- Müssen wir das Layout nach Zeile _und_ Spalte steuern? Wenn ja, verwenden Sie Grid-Layout.

### Von Inhalt nach außen oder Layout nach innen?

Zusätzlich zur Unterscheidung zwischen eindimensional und zweidimensional gibt es eine weitere Möglichkeit zu entscheiden, ob Sie Flexbox oder Grid für ein Layout verwenden sollten. Flexbox arbeitet von innen nach außen. Ein ideales Anwendungsbeispiel für Flexbox ist, wenn Sie eine Reihe von Elementen haben und sie gleichmäßig in einem Container verteilen möchten. Sie lassen die Größe des Inhalts bestimmen, wie viel Platz jedes einzelne Element einnimmt. Wenn die Elemente in eine neue Zeile umbrochen werden, arbeiten sie ihre Abstände basierend auf ihrer Größe und dem verfügbaren Platz _auf dieser Zeile_ aus.

Grid arbeitet vom Layout nach innen. Wenn Sie CSS Grid Layout verwenden, erstellen Sie ein Layout und platzieren dann die Elemente darin, oder Sie lassen die Regeln zur automatischen Platzierung die Elemente gemäß diesem strikten Grid in die Gitterzellen einfügen. Es ist möglich, Spuren zu erstellen, die auf die Größe des Inhalts reagieren, allerdings werden sie dann auch die gesamte Spur ändern.

Wenn Sie Flexbox verwenden und sich dabei ertappen, einige der Flexibilität zu deaktivieren, benötigen Sie wahrscheinlich das CSS Grid Layout. Wenn Sie beispielsweise eine Breite auf ein Flex-Element setzen, um es mit anderen Elementen in einer darüberliegenden Zeile auszurichten, ist Grid wahrscheinlich die bessere Wahl.

### Boxausrichtung

Die meisten Grid Ausrichtungsfunktionen wurden ursprünglich im [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) definiert. Diese Funktionen ermöglichten erstmals eine korrekte Ausrichtungskontrolle und das Zentrieren eines Blocks auf der Seite. Flex-Elemente können sich an die Höhe des Flex-Containers anpassen, was bedeutet, dass gleich hohe Spalten möglich waren. Diese Eigenschaften sind jetzt im [CSS Box Alignment](/de/docs/Web/CSS/Guides/Box_alignment) Modul definiert und werden in mehreren Layoutmodi verwendet, einschließlich des Grid-Layouts.

Wir werden uns später näher mit dem [Ausrichten von Elementen im CSS Grid Layout](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment) befassen. Vorläufig finden Sie hier einen Vergleich zwischen Beispielen von Flexbox und Grid.

Im ersten Beispiel, das Flexbox verwendet, haben wir einen Container mit drei darin befindlichen Elementen. Die {{cssxref("min-height")}} des Containers ist festgelegt, sodass sie die Höhe des Flex-Containers definiert. Wir haben {{cssxref("align-items")}} am Flex-Container auf `flex-end` gesetzt, sodass die Elemente am Ende des Flex-Containers ausgerichtet werden. Wir haben auch die {{cssxref("align-self")}}-Eigenschaft auf `box1` gesetzt, sodass es die Standardeinstellung überschreibt und sich an die Höhe des Containers anpasst und auf `box2`, sodass es sich am Anfang des Flex-Containers ausrichtet.

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

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
</div>
```

```css
.wrapper {
  display: flex;
  align-items: flex-end;
  min-height: 200px;
}
.box1 {
  align-self: stretch;
}
.box2 {
  align-self: flex-start;
}
```

{{ EmbedLiveSample('Box_alignment', '300', '230') }}

### Ausrichtung in CSS Grids

Dieses Beispiel verwendet ein Grid, um dasselbe Layout zu erstellen. Wir verwenden die Boxausrichtungs-Eigenschaften, wie sie auf ein Grid Layout angewandt werden. Wir richten uns nach `start` und `end` aus. (Wir könnten die {{cssxref("content-position")}} Synonyme `flex-start` und `flex-end` verwenden). Im Fall eines Grid-Layouts richten wir die Elemente innerhalb ihres Grid-Bereichs aus. In diesem Fall ist das eine einzelne Gitterzelle, aber es könnte auch ein Bereich sein, der aus mehreren Gitterzellen besteht.

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

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: end;
  grid-auto-rows: 200px;
}
.box1 {
  align-self: stretch;
}
.box2 {
  align-self: start;
}
```

{{ EmbedLiveSample('Alignment_in_CSS_Grids', '200', '240') }}

### Die `fr` Einheit und `flex-basis`

Wir haben bereits gesehen, wie die `fr` Einheit funktioniert, um einen Anteil des verfügbaren Platzes im Grid-Container unseren Grid-Spuren zuzuweisen. Die `fr` Einheit kann, in Kombination mit der {{cssxref("minmax()")}} Funktion, ein sehr ähnliches Verhalten wie die `flex` Eigenschaften in Flexbox bieten, während sie weiterhin die Erstellung eines zweidimensionalen Layouts ermöglicht.

Wenn wir auf das Beispiel zurückblicken, in dem wir den Unterschied zwischen ein- und zweidimensionalen Layouts gezeigt haben, können Sie sehen, dass es einen Unterschied in der responsiven Arbeitsweise der beiden Layouts gibt. Mit dem Flex-Layout, wenn wir unser Fenster breiter und kleiner ziehen, passt sich die Flexbox gut an die Anzahl der Elemente in jeder Zeile entsprechend dem verfügbaren Platz an. Wenn wir viel Platz haben, können alle fünf Elemente in eine Zeile passen. Wenn wir einen sehr schmalen Container haben, haben wir möglicherweise nur Platz für eines.

Im Vergleich dazu hat die Grid-Version immer drei Spaltenspuren. Die Spuren selbst wachsen und schrumpfen, aber es sind immer drei, da wir bei der Definition unseres Grids um drei gebeten haben.

#### Automatisches Auffüllen von Grid-Spuren

Wir können Grid verwenden, um einen ähnlichen Effekt wie Flexbox zu erzeugen, dabei jedoch den Inhalt in strengen Reihen und Spalten anordnen, indem wir unsere Spurliste mit Wiederholungsnotation und den Eigenschaften `auto-fill` und `auto-fit` erstellen.

Im nächsten Beispiel haben wir das Schlüsselwort `auto-fill` anstelle einer ganzen Zahl in der Wiederholungsnotation verwendet und die Spurliste auf 200 Pixel festgelegt. Dies bedeutet, dass Grid so viele 200 Pixel Spaltenspuren im Container erstellt, wie passen.

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

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
}
```

{{ EmbedLiveSample('Auto-filling_grid_tracks', '500', '70') }}

### Eine flexible Anzahl von Spuren

Dies ist nicht ganz dasselbe wie Flexbox. Im Flexbox-Beispiel sind die Elemente größer als die 200-Pixel-Grundlage, bevor sie umbrechen. Wir können dasselbe in Grid erreichen, indem wir `auto-fit` und die {{cssxref("minmax()")}} Funktion kombinieren.

In diesem Beispiel erstellen wir automatisch gefüllte Spuren mit `minmax`. Wir möchten, dass unsere Spuren mindestens 200 Pixel groß sind, und daher setzen wir das Maximum auf `1fr`. Sobald der Browser berechnet hat, wie oft 200 Pixel in den Container passen - auch unter Berücksichtigung von Gitterabständen - behandelt er das `1fr` Maximum als Anweisung, den verbleibenden Platz zwischen den Elementen zu teilen.

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

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

{{ EmbedLiveSample('A_flexible_number_of_tracks', '500', '70') }}

Mit dem Grid-Layout können wir ein Raster mit einer dynamischen Anzahl flexibler Spuren erstellen und die Elemente auf dem Raster nach Zeilen und Spalten ausrichten.

## Grid und absolut positionierte Elemente

Grid interagiert mit [absolut positionierten](/de/docs/Web/CSS/Reference/Properties/position#absolute_positioning) Elementen, was nützlich sein kann, wenn Sie ein Element innerhalb eines Grids oder grid area positionieren möchten. Die Spezifikation definiert das Verhalten, wenn ein Grid-Container ein Enthaltungsblock und ein Elternteil des absolut positionierten Elements ist.

### Ein Grid-Container als Enthaltungsblock

Um den Grid-Container zu einem [Enthaltungsblock](/de/docs/Web/CSS/Guides/Display/Containing_block) zu machen, müssen Sie die {{cssxref("position")}} Eigenschaft mit einem Wert von `relative` am Container hinzufügen, genau wie Sie einen Enthaltungsblock für andere absolut positionierte Elemente erzeugen würden. Sobald Sie dies getan haben, wird ein Grid-Element bei `position: absolute` als Enthaltungsblock den Grid-Container oder, wenn das Element auch über eine Grid-Position verfügt, den Bereich des Grids nehmen, in den es platziert wurde.

Im folgenden Beispiel haben wir eine Umhüllung, die vier Kind-Elemente enthält. Element drei ist absolut positioniert und auch mit zeilenbasierter Platzierung auf dem Grid platziert. Der Grid-Container hat `position: relative` und wird somit zum Positionierungskontext dieses Elements.

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

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">
    This block is absolutely positioned. In this example the grid container is
    the containing block and so the absolute positioning offset values are
    calculated in from the outer edges of the area it has been placed into.
  </div>
  <div class="box4">Four</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: 20px;
  position: relative;
}
.box3 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  position: absolute;
  top: 40px;
  left: 40px;
}
```

{{ EmbedLiveSample('A_grid_container_as_containing_block', '500', '270') }}

Sie können sehen, dass das Element den Bereich von Gitterspaltenlinie 2 bis 4 einnimmt und nach Linie 1 startet. Es ist jedoch in diesem Bereich unter Verwendung der oberen und linken Eigenschaften versetzt. Es wurde jedoch, wie für absolut positionierte Elemente üblich, aus dem Fluss genommen, sodass die Regeln zur automatischen Platzierung jetzt Elemente in denselben Raum platzieren. Das Element verursacht auch keine zusätzliche Zeile, um bis zur Zeilenlinie 3 zu spannen.

Wenn wir `position: absolute` aus den Regeln für `.box3` entfernen, können Sie sehen, wie es ohne die Positionierung angezeigt würde.

### Ein Grid-Container als Eltern

Wenn das absolut positionierte Kind einen Grid-Container als Eltern hat, dieser Container jedoch keinen neuen Positionierungskontext erstellt, wird es, wie im vorherigen Beispiel, aus dem Fluss genommen. Der _Positionierungskontext_ ist das Element, zu dem das absolut positionierte Element relativ positioniert wird. Der Positionierungskontext ist das, was Sie beim üblichen Layout von anderen Elementen kennen. In unserem Fall, wenn wir `position: relative` aus der oben erwähnten Umhüllung entfernen, ist der Positionierungskontext das Viewport, wie in diesem Bild gezeigt.

![Image of grid container as parent](2_abspos_example.png)

Wieder nimmt das Element nicht mehr an der Grid-Layout im Sinne der Größenbestimmung teil oder wenn andere Elemente automatisch platziert werden.

### Mit einem Gitternetzbereich als Elternteil

Wenn das absolut positionierte Element innerhalb eines Gitternetzbereichs ineinander verschachtelt ist, können Sie auf diesem Bereich auch einen Positionierungskontext erstellen. In diesem Beispiel haben wir unser Grid wie zuvor, aber dieses Mal haben wir ein Element innerhalb von `.box3` des Grids verschachtelt.

Wir haben `.box3` relativ positioniert und dann das Unterelement mit den Offset-Eigenschaften positioniert. In diesem Fall ist der Positionierungskontext der Gitternetzbereich.

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

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">
    Three
    <div class="abspos">
      This block is absolutely positioned. In this example the grid area is the
      containing block and so the absolute positioning offset values are
      calculated in from the outer edges of the grid area.
    </div>
  </div>
  <div class="box4">Four</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: 20px;
}
.box3 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  position: relative;
}
.abspos {
  position: absolute;
  top: 40px;
  left: 40px;
  background-color: rgb(255 255 255 / 50%);
  border: 1px solid rgb(0 0 0 / 50%);
  color: black;
  padding: 10px;
}
```

{{ EmbedLiveSample('With_a_grid_area_as_the_parent', '500', '460') }}

## Grid und display: contents

Eine letzte Interaktion, die erwähnenswert ist, ist die Interaktion zwischen CSS Grid Layout und `display: contents`, definiert im [CSS-Display](/de/docs/Web/CSS/Guides/Display) Modul. Wenn die {{cssxref("display")}} Eigenschaft auf `contents` gesetzt ist, erzeugt das Element selbst keine Boxen, aber seine Kinder und Pseudoelemente erzeugen weiterhin Boxen wie gewohnt. Das bedeutet, dass das Element für die Zwecke der Boxenerzeugung und des Layouts so behandelt wird, als wäre es durch seine Kinder und Pseudoelemente im Dokumentenbaum ersetzt worden.

Wenn Sie ein Element auf `display: contents` setzen, verschwindet die Box, die es normalerweise erstellen würde, und die Boxen der Kind-Elemente erscheinen, als ob sie eine Ebene nach oben gestiegen wären. Das bedeutet, dass Kinder eines Grid-Elements zu Grid-Elementen werden können. Klingt seltsam? Hier ist ein Beispiel.

### Grid-Layout mit verschachtelten Kindelementen

In diesem Beispiel ist das erste Element unseres Grids so eingestellt, dass es alle drei Spaltenspuren überspannt. Es enthält drei verschachtelte Elemente. Da diese Elemente keine direkten Kinder sind, werden sie nicht Teil des Grid-Layouts und daher mit regulärem Blocklayout angezeigt.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

```html
<div class="wrapper">
  <div class="box box1">
    <div class="nested">a</div>
    <div class="nested">b</div>
    <div class="nested">c</div>
  </div>
  <div class="box box2">Two</div>
  <div class="box box3">Three</div>
  <div class="box box4">Four</div>
  <div class="box box5">Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
}
```

{{ EmbedLiveSample('Grid_layout_with_nested_child_elements', '400', '440') }}

### Verwendung von display: contents

Wenn wir jetzt `display: contents` zu den Regeln für `box1` hinzufügen, verschwindet die Box für dieses Element, und die Unterelemente werden jetzt zu Grid-Elementen und legen sich nach den Regeln zur automatischen Platzierung aus.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

```html
<div class="wrapper">
  <div class="box box1">
    <div class="nested">a</div>
    <div class="nested">b</div>
    <div class="nested">c</div>
  </div>
  <div class="box box2">Two</div>
  <div class="box box3">Three</div>
  <div class="box box4">Four</div>
  <div class="box box5">Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  display: contents;
}
```

{{ EmbedLiveSample('Using_display_contents', '400', '350') }}

Dies kann eine Möglichkeit sein, Elemente im Grid zu verschachteln, sodass sie so handeln, als ob sie Teil des Grids wären. Sie können `display: contents` auf ähnliche Weise mit Flexbox verwenden, um verschachtelte Elemente zu Flex-Elementen zu machen.

Wie Sie aus diesem Leitfaden sehen können, ist das CSS Grid Layout nur ein Teil Ihres Werkzeugsatzes. Scheuen Sie sich nicht, es mit anderen Methoden der Layout-Erstellung zu mischen, um die verschiedenen Effekte zu erzielen, die Sie benötigen.

## Siehe auch

- [Flexbox-Leitfäden](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
- [Mehrspaltige Layout-Leitfäden](/de/docs/Web/CSS/Guides/Multicol_layout)
