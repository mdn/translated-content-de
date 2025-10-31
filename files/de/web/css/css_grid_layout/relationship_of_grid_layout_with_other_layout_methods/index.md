---
title: Beziehungen des Grid-Layouts zu anderen Layout-Methoden
short-title: Grid und andere Layouts
slug: Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

[CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) wurde entwickelt, um mit den anderen Teilen von CSS zusammenzuarbeiten, als Teil eines vollständigen Systems für die Gestaltung von Layouts. Dieser Leitfaden erklärt, wie das Grid-Layout mit anderen Techniken zusammenpasst.

## Grid und Flexbox

Der grundlegende Unterschied zwischen CSS Grid Layout und [CSS Flexbox Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) besteht darin, dass Flexbox für das Layout in einer Dimension entwickelt wurde - entweder einer Zeile _oder_ einer Spalte. Grid wurde für ein zweidimensionales Layout entwickelt - Zeilen und Spalten gleichzeitig. Beide Spezifikationen verwenden die Funktionen der [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment). Wenn Sie bereits gelernt haben, wie man Flexbox verwendet, sollten die Ähnlichkeiten Ihnen helfen, sich auch mit Grid vertraut zu machen.

### Eindimensionales vs. zweidimensionales Layout

Ein einfaches Beispiel kann den Unterschied zwischen ein- und zweidimensionalen Layouts verdeutlichen.

In diesem ersten Beispiel verwenden wir Flexbox, um eine Reihe von Boxen zu layouten. Wir haben fünf Child-Elemente in unserem Container und wir haben den Flex-Eigenschaften Werte zugewiesen, damit sie von einer Flex-Basis von 150 Pixeln wachsen und schrumpfen können.

Wir haben auch die {{cssxref("flex-wrap")}}-Eigenschaft auf `wrap` gesetzt, sodass, wenn der Platz im Container zu schmal wird, um die Flex-Basis beizubehalten, die Elemente in eine neue Zeile umbrochen werden.

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

Im Bild sehen Sie, dass zwei Elemente in eine neue Zeile umgebrochen wurden. Diese Elemente teilen sich den verfügbaren Raum und richten sich nicht unterhalb der darüber liegenden Elemente aus. Dies liegt daran, dass, wenn Sie Flex-Elemente umbrechen, jede neue Zeile (oder Spalte, wenn Sie in Spalten arbeiten) eine unabhängige Flex-Linie im Flex-Container ist. Die Platzverteilung erfolgt entlang der Flex-Linie.

Eine häufige Frage ist dann, wie man diese Elemente zur Ausrichtung bringt. Hier benötigen Sie eine zweidimensionale Layout-Methode: Sie möchten die Ausrichtung nach Zeile und Spalte steuern, und hier kommt Grid ins Spiel.

### Dasselbe Layout mit CSS Grids

Im nächsten Beispiel erstellen wir dasselbe Layout mit Grid. Diesmal haben wir drei `1fr`-Spur-Elemente. Wir müssen nichts an den Elementen selbst einstellen; Sie richten sich in jede Zelle des erstellten Grids aus. Wie Sie sehen, bleiben sie in einem strengen Raster, das sich in Zeilen und Spalten ausrichtet. Mit fünf Elementen entsteht am Ende der zweiten Zeile eine Lücke.

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

Eine wichtige Frage, die Sie sich stellen sollten, wenn Sie zwischen Grid oder Flexbox entscheiden:

- Müssen wir das Layout nur nach Zeile _oder_ Spalte steuern? Wenn ja, verwenden Sie Flexbox.
- Müssen wir das Layout nach Zeile _und_ Spalte steuern? Wenn ja, verwenden Sie Grid-Layout.

### Inhaltausgerichtet oder layoutbasiert?

Zusätzlich zur Unterscheidung zwischen eindimensional und zweidimensional gibt es eine weitere Möglichkeit zu entscheiden, ob Sie Flexbox oder Grid für ein Layout verwenden sollten. Flexbox arbeitet vom Inhalt ausgehend. Ein idealer Anwendungsfall für Flexbox ist, wenn Sie eine Reihe von Elementen haben und diese gleichmäßig in einem Container verteilen möchten. Sie lassen die Größe des Inhalts entscheiden, wie viel individuellen Raum jedes Element einnimmt. Wenn die Elemente in eine neue Zeile umgehen, ermitteln sie ihren Abstand basierend auf ihrer Größe und dem verfügbaren Platz _auf dieser Zeile_.

Grid arbeitet vom Layout ausgehend. Wenn Sie CSS Grid-Layout verwenden, erstellen Sie ein Layout und platzieren dann Elemente darin, oder Sie lassen die Autoplatzierungsregeln die Elemente gemäß diesem strengen Raster in die Gitternetze setzen. Es ist möglich, Spuren zu erstellen, die auf die Größe des Inhalts reagieren, sie ändern jedoch auch die gesamte Spur.

Wenn Sie Flexbox verwenden und einige der Flexibilität deaktivieren, sollten Sie wahrscheinlich das CSS Grid-Layout verwenden. Wenn Sie zum Beispiel eine Breite auf einem Flex-Element einstellen, um es mit anderen Elementen in einer Zeile darüber auszurichten, ist ein Grid wahrscheinlich eine bessere Wahl.

### Box-Ausrichtung

Die meisten Grid-Ausrichtungsfunktionen wurden ursprünglich im [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) definiert. Diese Funktionen boten erstmals eine ordnungsgemäße Ausrichtungssteuerung und machten es einfach, eine Box auf der Seite zu zentrieren. Flex-Elemente können sich auf die Höhe des Flex-Containers strecken, was bedeutet, dass gleich hohe Spalten möglich waren. Diese Eigenschaften sind jetzt im [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment) Modul definiert und werden in mehreren Layoutmodi verwendet, einschließlich Grid-Layout.

Wir werden uns später ausführlich mit dem [Ausrichten von Elementen im CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout) beschäftigen. Für jetzt hier ein Vergleich zwischen Beispielen von Flexbox und Grid.

Im ersten Beispiel, das Flexbox verwendet, haben wir einen Container mit drei Elementen darin. Die {{cssxref("min-height")}} des Containers ist festgelegt, um die Höhe des Flex-Containers zu definieren. Wir haben {{cssxref("align-items")}} auf dem Flex-Container auf `flex-end` gesetzt, damit sich die Elemente am Ende des Flex-Containers ausrichten. Wir haben auch die Eigenschaft {{cssxref("align-self")}} auf `box1` gesetzt, um die Standardeinstellung zu überschreiben und sich auf die Höhe des Containers zu strecken, und auf `box2`, damit es sich am Anfang des Flex-Containers ausrichtet.

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

In diesem Beispiel verwenden wir ein Grid, um dasselbe Layout zu erstellen. Wir verwenden die Box-Ausrichtungseigenschaften, wie sie auf ein Grid-Layout angewendet werden. Wir justieren uns nach `start` und `end`. (Wir hätten die {{cssxref("content-position")}} Synonyme `flex-start` und `flex-end` verwenden können.) Im Falle eines Grid-Layouts richten wir die Elemente innerhalb ihres Grid-Bereichs aus. In diesem Fall ist das eine einzelne Grid-Zelle, aber es könnte auch ein Bereich aus mehreren Grid-Zellen sein.

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

Wir haben bereits gesehen, wie die `fr`-Einheit funktioniert, um einen Anteil des verfügbaren Raums im Grid-Container unseren Grid-Spuren zuzuweisen. Die `fr`-Einheit kann in Kombination mit der {{cssxref("minmax", "minmax()")}}-Funktion ein sehr ähnliches Verhalten zu den `flex`-Eigenschaften in Flexbox bieten, während sie dennoch die Erstellung eines Layouts in zwei Dimensionen ermöglicht.

Wenn wir auf das Beispiel zurückblicken, in dem wir den Unterschied zwischen ein- und zweidimensionalen Layouts demonstriert haben, sehen Sie, dass es einen Unterschied in der Art und Weise gibt, wie die beiden Layouts reaktionsfähig arbeiten. Beim Flex-Layout, wenn wir unser Fenster breiter und schmaler ziehen, macht Flexbox einen guten Job darin, die Anzahl der Elemente in jeder Zeile entsprechend dem verfügbaren Raum anzupassen. Wenn wir viel Platz haben, können alle fünf Elemente in einer Zeile passen. Wenn wir einen sehr schmalen Container haben, haben wir möglicherweise nur Platz für eins.

Im Vergleich dazu hat die Grid-Version immer drei Spuren. Die Spuren selbst werden wachsen und schrumpfen, aber es gibt immer drei, da wir beim Definieren unseres Grids danach gefragt haben.

#### Automatisches Füllen von Grid-Spuren

Wir können Grid verwenden, um eine ähnliche Wirkung wie Flexbox zu erzielen, während wir den Inhalt in strikte Zeilen und Spalten anordnen, indem wir unsere Spur-Auflistung mit der Wiederholungsnotation und den Eigenschaften `auto-fill` und `auto-fit` erstellen.

In diesem nächsten Beispiel haben wir das `auto-fill`-Schlüsselwort anstelle einer ganzen Zahl in der Wiederholungsnotation verwendet und die Spur-Auflistung auf 200 Pixel gesetzt. Das bedeutet, dass Grid so viele 200 Pixel breite Spuren erstellt, wie in den Container passen.

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

Das ist nicht ganz dasselbe wie Flexbox. Im Flexbox-Beispiel sind die Elemente größer als die 200 Pixel-Basis, bevor sie umbrechen. Wir können dasselbe in Grid erreichen, indem wir `auto-fit` und die {{cssxref("minmax", "minmax()")}}-Funktion kombinieren.

In diesem Beispiel erstellen wir automatisch gefüllte Spuren mit `minmax`. Wir möchten, dass unsere Spuren mindestens 200 Pixel breit sind, also setzen wir das Maximum auf `1fr`. Sobald der Browser berechnet hat, wie oft 200 Pixel in den Container passen - auch unter Berücksichtigung der Grid-Lücken - behandelt er das `1fr`-Maximum als Anweisung, den verbleibenden Platz zwischen den Elementen aufzuteilen.

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

Mit Grid-Layout können wir ein Grid mit einer dynamischen Anzahl von flexiblen Spuren erstellen und die Elemente auf dem Grid ausgerichtet nach Zeilen und Spalten anordnen.

## Grid und absolut positionierte Elemente

Grid interagiert mit [absolut positionierten](/de/docs/Web/CSS/Reference/Properties/position#absolute_positioning) Elementen, was nützlich sein kann, wenn Sie ein Element innerhalb eines Grids oder eines Grid-Bereichs positionieren möchten. Die Spezifikation definiert das Verhalten, wenn ein Grid-Container ein enthaltender Block und ein Elternteil des absolut positionierten Elements ist.

### Ein Grid-Container als enthaltender Block

Um den Grid-Container zu einem [enthaltenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) zu machen, müssen Sie die Eigenschaft {{cssxref("position")}} zum Container mit einem Wert von `relative` hinzufügen, genauso wie Sie einen enthaltenden Block für andere absolut positionierte Elemente erstellen würden. Sobald Sie dies getan haben, nimmt ein Grid-Element mit `position: absolute` den Grid-Container oder, wenn das Element auch eine Grid-Position hat, den Bereich auf dem Grid, in den es platziert ist, als enthaltenden Block.

Im untenstehenden Beispiel haben wir einen Wrapper, der vier Child-Elemente enthält. Das dritte Element ist absolut positioniert und auch auf dem Grid unter Verwendung einer linearen Platzierung platziert. Der Grid-Container hat `position: relative` und wird so zum Positionierungskontext dieses Elements.

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

Sie können sehen, dass das Element den Bereich von der zweiten bis zur vierten Grid-Spalten-Linie einnimmt und nach der ersten Linie beginnt. Dann wird es in diesem Bereich mit den Eigenschaften top und left verschoben. Es wurde jedoch aus dem Fluss herausgenommen, wie es für absolut positionierte Elemente üblich ist, und daher platzieren die Autoplatzierungsregeln nun Elemente in denselben Raum. Das Element verursacht auch nicht die Erstellung einer zusätzlichen Zeile, um bis zur dritten Zeilenlinie zu spannen.

Wenn wir `position: absolute` aus den Regeln für `.box3` entfernen, können Sie sehen, wie es ohne Positionierung angezeigt würde.

### Ein Grid-Container als Elternteil

Wenn das absolut positionierte Kind einen Grid-Container als Elternteil hat, aber dieser kein neuen Positionierungskontext erstellt, wird es wie im vorherigen Beispiel aus dem Fluss genommen. Der _Positionierungskontext_ ist das Element, relativ zu dem das absolut positionierte Element positioniert wird. Der Positionierungskontext ist das Element, das einen Positionierungskontext erstellt, wie es bei anderen Layout-Methoden üblich ist. In unserem Fall, wenn wir `position: relative` vom obenstehenden Wrapper entfernen, ist der Positionierungskontext das Ansichtsfenster, wie in diesem Bild gezeigt.

![Bild eines Grid-Containers als Elternteil](2_abspos_example.png)

Wieder nimmt das Element nicht an der Grid-Layout-Berechnung hinsichtlich der Größe oder wenn andere Elemente automatisch platziert werden, teil.

### Mit einem Grid-Bereich als Eltern

Wenn das absolut positionierte Element innerhalb eines Grid-Bereichs verschachtelt ist, können Sie auf diesem Bereich einen Positionierungskontext erstellen. In diesem Beispiel haben wir unser Grid wie zuvor, aber diesmal haben wir ein Element in `box3` des Grids verschachtelt.

Wir haben `box3` die Position relativ eingestellt und dann das Unterelement mit den Offset-Eigenschaften positioniert. In diesem Fall ist der Positionierungskontext der Grid-Bereich.

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

Eine letzte erwähnenswerte Interaktion ist die Interaktion zwischen CSS Grid Layout und `display: contents`, die im [CSS Display](/de/docs/Web/CSS/CSS_display) Modul definiert ist. Wenn die Eigenschaft {{cssxref("display")}} auf `contents` gesetzt ist, erzeugt das Element selbst keine Boxen, aber seine Kinder und Pseudoelemente erzeugen wie gewohnt Boxen. Dies bedeutet, dass das Element für die Zwecke der Boxen-Generierung und des Layouts so behandelt wird, als ob es durch seine Kinder und Pseudoelemente im Dokumentenbaum ersetzt worden wäre.

Wenn Sie ein Element auf `display: contents` setzen, verschwindet die Box, die es normalerweise erzeugen würde, und die Boxen der Kindelemente erscheinen, als ob sie eine Ebene höher gestiegen wären. Das bedeutet, dass Kinder eines Grid-Elements zu Grid-Elementen werden können. Klingt seltsam? Hier ein Beispiel.

### Grid-Layout mit verschachtelten Kindelementen

In diesem Beispiel ist das erste Element unseres Grids so eingestellt, dass es alle drei Spuren umspannt. Es enthält drei verschachtelte Elemente. Da diese Elemente keine direkten Kinder sind, werden sie nicht Teil des Grid-Layouts und zeigen daher das reguläre Block-Layout an.

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

Wenn wir nun `display: contents` zu den Regeln für `box1` hinzufügen, verschwindet die Box für dieses Element und die Unterelemente werden jetzt zu Grid-Elementen und legen sich nach den Autoplatzierungsregeln aus.

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

Dies kann eine Möglichkeit sein, Elemente, die in das Grid verschachtelt sind, so zu behandeln, als ob sie Teil des Grids wären. Sie können `display: contents` auf ähnliche Weise mit Flexbox verwenden, um verschachtelte Elemente zu Flex-Elementen zu machen.

Wie Sie aus diesem Leitfaden sehen können, ist CSS Grid Layout nur ein Teil Ihres Werkzeugs. Haben Sie keine Angst, es mit anderen Verfahren der Layout-Erstellung zu mischen, um verschiedene benötigte Effekte zu erzielen.

## Siehe auch

- [Flexbox-Leitfäden](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
- [Mehrspaltige Layout-Leitfäden](/de/docs/Web/CSS/CSS_multicol_layout)
