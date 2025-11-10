---
title: Beziehung des Grid-Layouts zu anderen Layout-Methoden
short-title: Grid und andere Layouts
slug: Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

[CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) wurde entwickelt, um neben anderen Teilen von CSS zu arbeiten, als Teil eines umfassenden Systems für das Layout. Dieser Leitfaden erklärt, wie das Grid-Layout mit anderen Techniken zusammenpasst.

## Grid und Flexbox

Der grundlegende Unterschied zwischen CSS-Grid-Layout und [CSS-Flexbox-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) besteht darin, dass Flexbox für das Layout in einer Dimension - entweder eine Zeile _oder_ eine Spalte - entwickelt wurde. Grid wurde für ein zweidimensionales Layout entwickelt - Zeilen und Spalten gleichzeitig. Beide Spezifikationen verwenden die [CSS-Box-Alignment](/de/docs/Web/CSS/Guides/Box_alignment)-Funktionen. Wenn Sie bereits gelernt haben, wie man Flexbox verwendet, sollten Ihnen die Ähnlichkeiten helfen, sich mit Grid vertraut zu machen.

### Eindimensionales versus zweidimensionales Layout

Ein einfaches Beispiel kann den Unterschied zwischen eindimensionalen und zweidimensionalen Layouts veranschaulichen.

In diesem ersten Beispiel verwenden wir Flexbox, um eine Reihe von Boxen anzuordnen. Wir haben fünf Kind-Elemente in unserem Container und wir haben den Flex-Werteeigenschaften so eingestellt, dass sie von einer Flex-Basis von 150 Pixeln wachsen und schrumpfen können.

Wir setzen auch die Eigenschaft {{cssxref("flex-wrap")}} auf `wrap`, sodass, wenn der Platz im Container zu eng wird, um die Flex-Basis aufrechtzuerhalten, die Elemente in eine neue Zeile umgebrochen werden.

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

In dem Bild sehen Sie, dass zwei Elemente in eine neue Zeile umgebrochen wurden. Diese Elemente teilen den verfügbaren Raum und richten sich nicht unter den Elementen darüber aus. Das liegt daran, dass beim Umbruch von Flex-Elementen jede neue Zeile (oder Spalte, wenn man mit Spalten arbeitet) eine unabhängige Flexline im Flexcontainer ist. Die Raumverteilung erfolgt über die Flexline.

Eine häufig gestellte Frage ist, wie man diese Elemente ausrichten kann. Hier benötigen Sie eine zweidimensionale Layout-Methode: Sie möchten die Ausrichtung nach Zeilen und Spalten kontrollieren, und hier kommt Grid ins Spiel.

### Dasselbe Layout mit CSS-Grids

Im nächsten Beispiel erstellen wir dasselbe Layout mit Grid. Diesmal haben wir drei `1fr`-Spurspuren. Wir müssen nichts an den Elementen selbst einstellen; sie werden sich eins in jede Zelle des erstellten Grids einfügen. Wie Sie sehen können, bleiben sie in einem strengen Raster und richten sich in Reihen und Spalten aus. Bei fünf Elementen erhalten wir eine Lücke am Ende der zweiten Reihe.

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

- Müssen wir das Layout nur nach Zeile _oder_ Spalte steuern? Wenn ja, verwenden Sie Flexbox.
- Müssen wir das Layout nach Zeile _und_ Spalte steuern? Wenn ja, verwenden Sie das Grid-Layout.

### Vom Inhalt aus oder vom Layout herein?

Zusätzlich zur Unterscheidung zwischen eindimensionalem und zweidimensionalem Layout gibt es einen anderen Weg, um zu entscheiden, ob Sie Flexbox oder Grid für ein Layout verwenden sollten. Flexbox arbeitet vom Inhalt ausgehend. Ein ideales Anwendungsbeispiel für Flexbox ist, wenn Sie eine Reihe von Elementen haben und sie gleichmäßig in einem Container verteilen möchten. Sie lassen die Größe des Inhalts bestimmen, wie viel individuellen Raum jedes Element einnimmt. Wenn die Elemente in eine neue Zeile umgebrochen werden, berechnen sie ihren Abstand basierend auf ihrer Größe und dem verfügbaren Platz _in dieser Zeile_.

Grid arbeitet vom Layout ausgehend. Wenn Sie CSS-Grid-Layout verwenden, erstellen Sie ein Layout und platzieren dann Elemente darin, oder Sie lassen die Auto-Platzierungsregeln die Elemente in die Grid-Zellen entsprechend diesem strengen Raster einfügen. Es ist möglich, Spuren zu erstellen, die auf die Größe des Inhalts reagieren, jedoch ändern sie dabei die gesamte Spur.

Wenn Sie Flexbox verwenden und dabei feststellen, dass Sie einiges der Flexibilität deaktivieren, benötigen Sie wahrscheinlich das CSS-Grid-Layout. Wenn Sie zum Beispiel eine Breite auf ein Flex-Element setzen, um es mit anderen Elementen in einer oberen Zeile zu erreichen, ist Grid wahrscheinlich die bessere Wahl.

### Box-Alignment

Die meisten Grid-Alignment-Funktionen wurden ursprünglich im [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) definiert. Diese Funktionen boten zum ersten Mal eine ordnungsgemäße Ausrichtungssteuerung und machten es einfach, eine Box auf der Seite zu zentrieren. Flex-Elemente können sich auf die Höhe des Flex-Containers erstrecken, was bedeutete, dass gleich hohe Spalten möglich waren. Diese Eigenschaften sind jetzt im [CSS-Box-Alignment](/de/docs/Web/CSS/Guides/Box_alignment) Modul definiert und werden in mehreren Layout-Modi, einschließlich Grid-Layout, verwendet.

Wir werden uns später [Das Ausrichten von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment) genauer ansehen. Für den Moment hier ein Vergleich zwischen Flexbox- und Grid-Beispielen.

Im ersten Beispiel, das Flexbox verwendet, haben wir einen Container mit drei Elementen darin. Die {{cssxref("min-height")}} des Containers ist eingestellt, sodass es die Höhe des Flexcontainers definiert. Wir haben {{cssxref("align-items")}} auf den Flexcontainer auf `flex-end` gesetzt, sodass die Elemente am Ende des Flexcontainers ausgerichtet werden. Wir haben auch die Eigenschaft {{cssxref("align-self")}} auf `box1` gesetzt, damit es den Standardwert überschreibt und sich auf die Höhe des Containers erstreckt, und auf `box2`, damit es sich am Anfang des Flexcontainers ausrichtet.

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

Dieses Beispiel verwendet ein Grid, um dasselbe Layout zu erstellen. Wir verwenden die Box-Alignment-Eigenschaften, wie sie auf einen Grid-Layout angewendet werden. Wir richten uns nach `start` und `end`. (Wir hätten die {{cssxref("content-position")}} Synonyme `flex-start` und `flex-end` verwenden können.) Im Fall von Grid-Layout richten wir die Elemente innerhalb ihres Grid-Bereichs aus. In diesem Fall ist das eine einzelne Grid-Zelle, aber es könnte auch ein Bereich aus mehreren Grid-Zellen sein.

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

### Die `fr`-Einheit und `flex-basis`

Wir haben bereits gesehen, wie die Einheit `fr` funktioniert, um einem Teil des verfügbaren Platzes im Grid-Container unseren Grid-Spuren zuzuweisen. Die `fr`-Einheit kann, wenn sie mit der {{cssxref("minmax", "minmax()")}} Funktion kombiniert wird, ein sehr ähnliches Verhalten zu den `flex`-Eigenschaften in Flexbox geben, während immer noch die Erstellung eines Layouts in zwei Dimensionen ermöglicht wird.

Wenn wir auf das Beispiel zurückblicken, bei dem wir den Unterschied zwischen ein- und zweidimensionalen Layouts gezeigt haben, können Sie einen Unterschied zwischen der Art und Weise sehen, wie die beiden Layouts responsiv arbeiten. Mit dem Flex-Layout, wenn wir unser Fenster breiter und kleiner ziehen, macht Flexbox einen guten Job beim Anpassen der Anzahl der Elemente in jeder Zeile entsprechend dem verfügbaren Platz. Wenn wir viel Platz haben, können alle fünf Elemente in eine Zeile passen. Wenn wir einen sehr schmalen Container haben, haben wir möglicherweise nur Platz für eins.

Im Vergleich dazu hat die Grid-Version immer drei Spalten. Die Spuren selbst werden wachsen und schrumpfen, aber es gibt immer drei, da wir beim Definieren nosso Grids nach drei gefragt haben.

#### Automatisch füllende Grid-Spuren

Wir können Grid verwenden, um einen ähnlichen Effekt wie Flexbox zu kreieren, während wir den Inhalt immer noch in strikten Reihen und Spalten arrangiert halten, indem wir unsere Spur-Liste mit der Wiederholungsnotation und den `auto-fill` und `auto-fit`-Eigenschaften erstellen.

Im folgenden Beispiel haben wir das `auto-fill`-Schlüsselwort anstelle einer ganzen Zahl in der Wiederholungsnotation verwendet und die Spur-Liste auf 200 Pixel gesetzt. Das bedeutet, dass Grid so viele 200-Pixel-Spalten-Spuren erstellt, wie in den Container passen.

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

Das ist nicht ganz dasselbe wie bei Flexbox. Im Flexbox-Beispiel sind die Elemente größer als die 200-Pixel-Basis, bevor sie umbrechen. Wir können dasselbe in Grid erreichen, indem wir `auto-fit` und die {{cssxref("minmax", "minmax()")}} Funktion kombinieren.

In diesem Beispiel erstellen wir automatisch gefüllte Spuren mit `minmax`. Wir wollen, dass unsere Spuren mindestens 200 Pixel groß sind, also setzen wir das Maximum auf `1fr`. Sobald der Browser ermittelt hat, wie oft 200 Pixel in den Container passen - unter Berücksichtigung von Grid-Lücken - wird das `1fr`-Maximum als Anweisung behandelt, den verbleibenden Raum zwischen den Elementen zu verteilen.

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

Mit Grid-Layout können wir ein Grid mit einer dynamischen Anzahl flexibler Spuren erzeugen und die Elemente auf dem Grid ausgerichtet nach Reihen und Spalten anordnen.

## Grid und absolut positionierte Elemente

Grid interagiert mit [absolut positionierten](/de/docs/Web/CSS/Reference/Properties/position#absolute_positioning) Elementen, was nützlich sein kann, wenn Sie ein Element innerhalb eines Grids oder Grid-Bereichs positionieren möchten. Die Spezifikation definiert das Verhalten, wenn ein Grid-Container ein Containing-Block und ein Elternteil des absolut positionierten Elements ist.

### Ein Grid-Container als Containing-Block

Um den Grid-Container zu einem [Containing-Block](/de/docs/Web/CSS/Guides/Display/Containing_block) zu machen, müssen Sie die {{cssxref("position")}} Eigenschaft am Container mit einem Wert von `relative` hinzufügen, genau wie Sie einen Containing-Block für andere absolut positionierte Elemente erstellen würden. Sobald Sie dies getan haben, wird, wenn Sie einem Grid-Element `position: absolute` geben, es als seinen Containing-Block den Grid-Container nehmen oder, wenn das Element auch eine Grid-Position hat, den Bereich des Grids, in den es eingefügt wird.

Im unten stehenden Beispiel haben wir ein Wrapper, das vier Kind-Elemente enthält. Element drei ist absolut positioniert und auch im Grid mit Line-Placement platziert. Der Grid-Container hat `position: relative` und wird so zum Positionierungskontext dieses Elements.

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

Sie können sehen, dass das Element den Bereich von Grid-Spalte Zeile 2 bis 4 einnimmt, beginnend nach Linie 1. Dann wird es in diesem Bereich mithilfe der Top- und Linkseigenschaften versetzt. Es wurde jedoch wie üblich für absolut positionierte Elemente aus dem Fluss genommen, sodass die Auto-Platzierungsregeln jetzt Elemente in denselben Raum platzieren. Das Element verursacht auch keine zusätzliche Zeile, um bis zur Zeilenlinie 3 zu spannen.

Wenn wir `position: absolute` aus den Regeln für `.box3` entfernen, können Sie sehen, wie es ohne die Positionierung angezeigt würde.

### Ein Grid-Container als Elternteil

Wenn das absolut positionierte Kind einen Grid-Container als Elternteil hat, dieser Container jedoch keinen neuen Positionierungskontext erstellt, wird es wie im vorherigen Beispiel aus dem Fluss genommen. Der _Positionierungskontext_ ist das Element, relativ zu dem das absolut positionierte Element positioniert wird. Der Positionierungskontext wird jedes Element sein, das einen Positionierungskontext erstellt, wie es bei anderen Layout-Methoden üblich ist. In unserem Fall, wenn wir `position: relative` aus dem oben genannten Wrapper entfernen, kommt der Positionierungskontext vom Viewport, wie in diesem Bild gezeigt.

![Bild eines Grid-Containers als Elternteil](2_abspos_example.png)

Einmal mehr, das Element nimmt nicht mehr am Grid-Layout in Bezug auf die Größe teil oder wenn andere Elemente automatisch platziert werden.

### Mit einem Grid-Bereich als Eltern

Wenn das absolut positionierte Element innerhalb eines Grid-Bereichs verschachtelt ist, können Sie einen Positionierungskontext auf diesem Bereich erstellen. In diesem Beispiel haben wir unser Grid wie zuvor, jedoch haben wir dieses Mal ein Element in `.box3` des Grids verschachtelt.

Wir haben `.box3` Position relativ gegeben und dann das Unterelement mit den Versatzeigenschaften positioniert. In diesem Fall ist der Positionierungskontext die Grid-Fläche.

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

Eine letzte bemerkenswerte Interaktion ist die Interaktion zwischen CSS-Grid-Layout und `display: contents`, das im [CSS-Display](/de/docs/Web/CSS/Guides/Display) Modul definiert ist. Wenn die {{cssxref("display")}} Eigenschaft auf `contents` gesetzt ist, generiert das Element selbst keine Boxen, aber seine Kinder und Pseudo-Elemente generieren weiterhin Boxen wie gewohnt. Dies bedeutet, dass das Element für die Zwecke der Boxengenerierung und des Layouts so behandelt wird, als ob es durch seine Kinder und Pseudo-Elemente im Dokumentbaum ersetzt worden wäre.

Wenn Sie ein Element auf `display: contents` setzen, verschwindet die Box, die es normalerweise erstellen würde, und die Boxen der Kind-Elemente erscheinen, als ob sie ein Level aufgestiegen wären. Dies bedeutet, dass Kinder eines Grid-Elements zu Grid-Elementen werden können. Klingt seltsam? Hier ist ein Beispiel.

### Grid-Layout mit verschachtelten Kind-Elementen

In diesem Beispiel ist das erste Element unseres Grids so festgelegt, dass es alle drei Spuren der Spalten umfasst. Es enthält drei verschachtelte Elemente. Da diese Elemente keine direkten Kinder sind, werden sie nicht Teil des Grid-Layouts und wird daher mit regulärem Block-Layout angezeigt.

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

Wenn wir jetzt `display: contents` zu den Regeln für `box1` hinzufügen, verschwindet die Box für dieses Element und die Unterelemente werden nun zu Grid-Elementen und richten sich nach den Auto-Platzierungsregeln aus.

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

Dies kann ein Weg sein, um Elemente, die in das Grid eingefügt wurden, so zu behandeln, als ob sie Teil des Grids wären. Sie können `display: contents` auf ähnliche Weise mit Flexbox verwenden, um verschachtelte Elemente zu Flex-Elementen zu machen.

Wie Sie aus diesem Leitfaden sehen können, ist das CSS-Grid-Layout nur ein Teil Ihres Werkzeugsatzes. Scheuen Sie sich nicht, es mit anderen Methoden zur Erstellung von Layouts zu mischen, um die verschiedenen Effekte zu erzielen, die Sie benötigen.

## Siehe auch

- [Flexbox Leitfäden](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
- [Mehrspalten-Layout-Leitfäden](/de/docs/Web/CSS/Guides/Multicol_layout)
