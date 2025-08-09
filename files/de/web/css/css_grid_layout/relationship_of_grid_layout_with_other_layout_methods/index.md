---
title: Beziehung des Grid-Layouts zu anderen Layoutmethoden
short-title: Grid und andere Layouts
slug: Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

[CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) ist so konzipiert, dass es zusammen mit anderen Teilen von CSS funktioniert, als Teil eines vollständigen Systems zur Erstellung von Layouts. Dieser Leitfaden erklärt, wie Grid-Layout mit anderen Techniken zusammenpasst.

## Grid und Flexbox

Der grundlegende Unterschied zwischen CSS-Grid-Layout und [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) besteht darin, dass Flexbox für ein Layout in einer Dimension – entweder eine Zeile _oder_ eine Spalte – entwickelt wurde. Grid wurde für zweidimensionale Layouts entworfen – Zeilen und Spalten gleichzeitig. Beide Spezifikationen verwenden [CSS-Box-Alignment](/de/docs/Web/CSS/CSS_box_alignment)-Funktionen. Wenn Sie bereits gelernt haben, wie man Flexbox verwendet, sollten Ihnen die Ähnlichkeiten helfen, sich mit Grid vertraut zu machen.

### Eindimensionales versus zweidimensionales Layout

Ein einfaches Beispiel kann den Unterschied zwischen ein- und zweidimensionalen Layouts verdeutlichen.

In diesem ersten Beispiel verwenden wir Flexbox, um eine Reihe von Boxen anzuordnen. Wir haben fünf Kind-Elemente in unserem Container und haben den Flex-Eigenschaften Werte zugewiesen, sodass sie von der basis von 150 Pixeln wachsen und schrumpfen können.

Wir setzen auch die {{cssxref("flex-wrap")}} Eigenschaft auf `wrap`, damit, wenn der Platz im Container zu schmal wird, um die Flex-Basis aufrechtzuerhalten, sich die Items in eine neue Zeile umschlagen.

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

Auf dem Bild können Sie sehen, dass zwei Items in eine neue Zeile umgebrochen sind. Diese Items teilen sich den verfügbaren Platz und richten sich nicht unter den darüber liegenden Items aus. Dies liegt daran, dass wenn Sie Flex-Items umschlagen, jede neue Zeile (oder Spalte beim Arbeiten mit Spalten) eine unabhängige Flex-Line im Flex-Container ist. Die Platzverteilung erfolgt über die Flex-Linie.

Eine häufige Frage ist dann, wie man diese Items ausrichtet. Hier benötigen Sie eine zweidimensionale Layout-Methode: Sie möchten die Ausrichtung nach Zeilen und Spalten kontrollieren, und hier kommt Grid ins Spiel.

### Dasselbe Layout mit CSS-Grids

Im nächsten Beispiel erstellen wir dasselbe Layout mit Grid. Diesmal haben wir drei `1fr` Spaltentracks. Wir müssen nichts an den Items selbst einstellen; sie legen sich selbst jeweils in eine Zelle des erstellten Grids. Wie Sie sehen, bleiben sie in einem strengen Raster, das sich in Zeilen und Spalten ausrichtet. Mit fünf Items erhalten wir eine Lücke am Ende von Zeile zwei.

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

Eine wichtige Frage, die Sie sich stellen sollten, wenn Sie zwischen Grid oder Flexbox entscheiden, ist:

- Müssen wir das Layout nur nach Zeile _oder_ Spalte kontrollieren? Wenn ja, verwenden Sie Flexbox.
- Müssen wir das Layout nach Zeile _und_ Spalte kontrollieren? Wenn ja, verwenden Sie Grid-Layout.

### Inhalt außen oder Layout innen?

Neben dem eindimensionalen vs. zweidimensionalen Unterscheidungsmerkmal gibt es noch eine andere Methode, um zu entscheiden, ob Sie Flexbox oder Grid für ein Layout verwenden sollten. Flexbox arbeitet von Innen nach Außen. Ein idealer Anwendungsfall für Flexbox ist es, wenn Sie eine Reihe von Items haben und diese gleichmäßig in einem Container verteilen möchten. Sie lassen die Größe des Inhalts entscheiden, wie viel individuellen Platz jedes Item einnimmt. Wenn die Items in eine neue Zeile umschlagen, bestimmen sie ihren Abstand basierend auf ihrer Größe und dem verfügbaren Platz _in dieser Zeile_.

Grid arbeitet von Außen nach Innen. Wenn Sie CSS-Grid-Layout verwenden, erstellen Sie ein Layout und platzieren dann Items darin, oder Sie überlassen es den automatischen Platzierungsregeln, die Items gemäß diesem strengen Raster in die Grid-Zellen zu platzieren. Es ist möglich, Tracks zu erstellen, die auf die Größe des Inhalts reagieren, jedoch ändern sie auch die gesamte Track.

Wenn Sie Flexbox verwenden und sich dabei ertappen, einige der Flexibilität zu deaktivieren, benötigen Sie wahrscheinlich CSS-Grid-Layout. Zum Beispiel, wenn Sie eine Breite bei einem Flex-Item einstellen, um es mit anderen Items in einer darüber liegenden Zeile auszurichten, ist ein Grid wahrscheinlich die bessere Wahl.

### Box-Ausrichtung

Die meisten Grid-Ausrichtungsfunktionen wurden ursprünglich im [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) definiert. Diese Funktionen boten zum ersten Mal eine ordnungsgemäße Kontrollmöglichkeit für die Ausrichtung und machten es einfach, eine Box auf der Seite zu zentrieren. Flex-Items können sich auf die Höhe des Flex-Containers strecken, was bedeutet, dass gleich hohe Spalten möglich waren. Diese Eigenschaften sind nun im Modul [CSS-Box-Alignment](/de/docs/Web/CSS/CSS_box_alignment) definiert und werden in mehreren Layout-Modi verwendet, einschließlich Grid-Layout.

Wir werden uns später im Detail mit dem [Ausrichten von Items im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout) befassen. Für den Moment hier ein Vergleich zwischen Flexbox- und Grid-Beispielen.

Im ersten Beispiel, das Flexbox verwendet, haben wir einen Container mit drei Items darin. Die {{cssxref("min-height")}} des Containers ist eingestellt, sodass sie die Höhe des Flex-Containers definiert. Wir haben {{cssxref("align-items")}} auf dem Flex-Container auf `flex-end` gesetzt, sodass sich die Items am Ende des Flex-Containers ausrichten. Wir haben auch die {{cssxref("align-self")}} Eigenschaft auf `box1` gesetzt, damit es die Standardeinstellung überschreibt und sich auf die Höhe des Containers streckt, und auf `box2`, sodass es sich am Anfang des Flex-Containers ausrichtet.

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

### Ausrichtung in CSS-Grids

In diesem Beispiel verwenden wir ein Grid, um dasselbe Layout zu erstellen. Wir verwenden die Box-Ausrichtungs-Eigenschaften, wie sie auf ein Grid-Layout angewendet werden. Wir richten uns an `start` und `end` aus. (Wir hätten auch die {{cssxref("content-position")}} Synonyme `flex-start` und `flex-end` verwenden können.) Im Fall eines Grid-Layouts richten wir die Items innerhalb ihres Grid-Bereichs aus. In diesem Fall ist das eine einzelne Grid-Zelle, aber es könnte ein Bereich sein, der aus mehreren Grid-Zellen besteht.

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

Wir haben bereits gesehen, wie die `fr` Einheit funktioniert, um einem Grid-Container einen Anteil des verfügbaren Platzes zuzuweisen. Die `fr` Einheit kann, wenn sie mit der {{cssxref("minmax", "minmax()")}} Funktion kombiniert wird, ein sehr ähnliches Verhalten wie die `flex` Eigenschaften in Flexbox ermöglichen, während gleichzeitig die Erstellung eines zweidimensionalen Layouts ermöglicht wird.

Wenn wir uns das Beispiel noch einmal ansehen, in dem wir den Unterschied zwischen ein- und zweidimensionalen Layouts demonstriert haben, können Sie einen Unterschied in der Art und Weise sehen, wie die beiden Layouts responsiv arbeiten. Mit dem Flex-Layout, wenn wir unser Fenster breiter oder schmaler ziehen, macht die Flexbox einen schönen Job, die Anzahl der Items in jeder Zeile entsprechend dem verfügbaren Platz anzupassen. Wenn wir viel Platz haben, passen alle fünf Items in eine Zeile. Wenn wir einen sehr schmalen Container haben, haben wir möglicherweise nur Platz für ein Item.

Im Vergleich dazu hat die Grid-Version immer drei Spaltentracks. Die Tracks selbst werden wachsen und schrumpfen, aber es gibt immer drei, da wir drei angefordert haben, als wir unser Grid definierten.

#### Automatisches Füllen von Grid-Tracks

Wir können Grid verwenden, um einen ähnlichen Effekt wie bei Flexbox zu erzielen, während wir das Layout in strengen Zeilen und Spalten beibehalten, indem wir unsere Track-Liste mittels Wiederholungsnotation und den Eigenschaften `auto-fill` und `auto-fit` erstellen.

In diesem nächsten Beispiel haben wir das `auto-fill` Schlüsselwort anstelle einer ganzen Zahl in der Wiederholungsnotation verwendet und die Track-Liste auf 200 Pixel festgelegt. Dies bedeutet, dass Grid so viele 200-Pixel-Spalten-Tracks erstellen wird, wie in den Container passen.

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

### Eine flexible Anzahl von Tracks

Das ist nicht ganz dasselbe wie Flexbox. Im Flexbox-Beispiel sind die Items größer als die 200-Pixel-Basis, bevor sie umgebrochen werden. Wir können dasselbe in Grid erreichen, indem wir `auto-fit` und die {{cssxref("minmax", "minmax()")}} Funktion kombinieren.

In diesem Beispiel erstellen wir automatisch gefüllte Tracks mit `minmax`. Wir möchten, dass unsere Tracks mindestens 200 Pixel betragen, daher setzen wir das Maximum auf `1fr`. Sobald der Browser berechnet hat, wie oft 200 Pixel in den Container passen – unter Berücksichtigung der Grid-Lücken – wird er das `1fr`-Maximum als Anweisung behandeln, den verbleibenden Platz zwischen den Items zu verteilen.

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

Mit Grid-Layout können wir ein Raster mit einer dynamischen Anzahl flexibler Tracks erstellen und die Items auf dem Grid nach Zeilen und Spalten ausgerichtet anordnen.

## Grid und absolut positionierte Elemente

Grid interagiert mit [absolut positionierten](/de/docs/Web/CSS/position#absolute_positioning) Elementen, was nützlich sein kann, wenn Sie ein Item innerhalb eines Grids oder Grid-Bereichs positionieren möchten. Die Spezifikation definiert das Verhalten, wenn ein Grid-Container ein enthaltender Block und ein Elternteil des absolut positionierten Elements ist.

### Ein Grid-Container als enthaltender Block

Um den Grid-Container zu einem [enthaltenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) zu machen, müssen Sie die {{cssxref("position")}} Eigenschaft des Containers auf `relative` setzen, genauso wie Sie einen enthaltenden Block für andere absolut positionierte Items erstellen würden. Wenn Sie dies getan haben, und Sie einem Grid-Item `position: absolute` geben, wird es als enthaltender Block den Grid-Container oder, wenn das Item auch eine Grid-Position hat, den Bereich des Grids, in den es platziert wird, nehmen.

Im untenstehenden Beispiel haben wir einen Wrapper, der vier Kindelemente enthält. Item drei ist absolut positioniert und wird auch auf dem Grid mittels linienbasierter Platzierung platziert. Der Grid-Container hat `position: relative` und wird so zum Positionierungskontext dieses Items.

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

Sie können sehen, dass das Item den Bereich von der Grid-Spaltenlinie 2 bis 4 einnimmt und nach Linie 1 beginnt. Es ist jedoch in diesem Bereich mit den Top- und Linkseigenschaften versetzt. Dennoch wurde es aus dem Fluss genommen, wie es bei absolut positionierten Items üblich ist, und daher platzieren die automatischen Platzierungsregeln nun Items in denselben Platz. Das Item führt auch nicht dazu, dass eine zusätzliche Zeile erstellt wird, um bis zur Zeilenlinie 3 zu spannen.

Wenn wir die Eigenschaft `position: absolute` aus den Regeln für `.box3` entfernen, können Sie sehen, wie es ohne die Positionierung angezeigt wird.

### Ein Grid-Container als Elternteil

Wenn das absolut positionierte Kind einen Grid-Container als Elternteil hat, dieser Container jedoch keinen neuen Positionierungskontext erstellt, wird es, wie im vorhergehenden Beispiel, aus dem Fluss genommen. Der _Positionierungskontext_ ist das Element, relativ zu dem das absolut positionierte Element positioniert wird. Der Positionierungskontext ist das Element, das einen Positionierungskontext erzeugt, wie es bei anderen Layoutmethoden üblich ist. In unserem Fall, wenn wir `position: relative` aus dem Wrapper oben entfernen, ist der Positionierungskontext das Viewport, wie auf diesem Bild gezeigt.

![Bild des Grid-Containers als Eltern](2_abspos_example.png)

Erneut nimmt das Item nicht am Grid-Layout in Bezug auf die Größe teil oder wenn andere Items automatisch platziert werden.

### Mit einem Grid-Bereich als Eltern

Wenn das absolut positionierte Item in einem Grid-Bereich verschachtelt ist, können Sie einen Positionierungskontext in diesem Bereich erstellen. In diesem Beispiel haben wir unser Grid wie zuvor, aber diesmal haben wir ein Item in `.box3` des Grids verschachtelt.

Wir haben `.box3` relative positioniert und dann das Unterelement mit den Versatzeigenschaften positioniert. In diesem Fall ist der Positionierungskontext der Grid-Bereich.

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

Eine letzte Interaktion, die es zu beachten gilt, ist die Interaktion zwischen CSS-Grid-Layout und `display: contents`, wie es im [CSS-Display](/de/docs/Web/CSS/CSS_display) Modul definiert ist. Wenn die {{cssxref("display")}} Eigenschaft auf `contents` gesetzt ist, erzeugt das Element selbst keine Boxen, aber seine Kinder und Pseudoelemente erzeugen weiterhin Boxen wie gewohnt. Das bedeutet, dass das Element für die Zwecke der Boxenerzeugung und des Layouts so behandelt wird, als ob es durch seine Kinder und Pseudoelemente im Dokumentbaum ersetzt worden wäre.

Wenn Sie ein Item auf `display: contents` setzen, verschwindet die Box, die es normalerweise erstellt hätte, und die Boxen der Kind-Elemente erscheinen, als ob sie eine Ebene nach oben gestiegen wären. Das bedeutet, dass Kinder eines Grid-Items zu Grid-Items werden können. Klingt komisch? Hier ist ein Beispiel.

### Grid-Layout mit verschachtelten Kind-Elementen

In diesem Beispiel ist das erste Item unseres Grids so eingestellt, dass es alle drei Spaltentracks umspannt. Es enthält drei verschachtelte Items. Da diese Items keine direkten Kinder sind, werden sie nicht Teil des Grid-Layouts und werden daher im regulären Block-Layout angezeigt.

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

Wenn wir jetzt `display: contents` zu den Regeln für `box1` hinzufügen, verschwindet die Box für dieses Item und die Unterelemente werden nun zu Grid-Items und richten sich nach den automatischen Platzierungsregeln aus.

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

Dies kann eine Möglichkeit sein, um Items, die in das Grid verschachtelt sind, so zu behandeln, als ob sie Teil des Grids wären. Sie können `display: contents` auch auf ähnliche Weise mit Flexbox verwenden, um verschachtelte Items zu Flex-Items zu machen.

Wie Sie aus diesem Leitfaden sehen können, ist das CSS-Grid-Layout nur ein Teil Ihres Werkzeugsatzes. Scheuen Sie sich nicht, es mit anderen Methoden zur Layoutgestaltung zu kombinieren, um die verschiedenen benötigten Effekte zu erzielen.

## Siehe auch

- [Flexbox-Leitfäden](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
- [Multiple-Column-Layout-Leitfäden](/de/docs/Web/CSS/CSS_multicol_layout)
