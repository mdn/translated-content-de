---
title: Beziehung des Grid-Layouts zu anderen Layout-Methoden
slug: Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Das CSS Grid-Layout wurde entwickelt, um neben anderen Teilen von CSS zu arbeiten, als Teil eines vollständigen Systems für das Layout. In diesem Leitfaden werde ich erklären, wie ein Grid mit anderen Techniken, die Sie möglicherweise bereits verwenden, zusammenpasst.

## Grid und Flexbox

Der grundlegende Unterschied zwischen CSS Grid-Layout und [CSS Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) besteht darin, dass Flexbox für das Layout in einer Dimension - entweder eine Zeile _oder_ eine Spalte – entworfen wurde. Grid wurde für zweidimensionale Layouts entwickelt - Zeilen und Spalten gleichzeitig. Die beiden Spezifikationen teilen einige gemeinsame Merkmale, und wenn Sie bereits gelernt haben, wie man Flexbox verwendet, sollten Ihnen die Ähnlichkeiten helfen, sich mit Grid auseinanderzusetzen.

### Eindimensionales versus zweidimensionales Layout

Ein einfaches Beispiel kann den Unterschied zwischen ein- und zweidimensionalen Layouts demonstrieren.

In diesem ersten Beispiel verwende ich Flexbox, um eine Reihe von Boxen zu gestalten. Ich habe fünf Kindelemente in meinem Container und habe den Flex-Eigenschaften Werte gegeben, damit sie sich von einer Flex-Basis von 150 Pixeln aus wachsen und schrumpfen können.

Ich habe auch die {{cssxref("flex-wrap")}}-Eigenschaft auf `wrap` gesetzt, sodass, wenn der Platz im Container zu schmal wird, um die Flex-Basis aufrechtzuerhalten, die Elemente in eine neue Zeile umgebrochen werden.

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

{{ EmbedLiveSample('One-dimensional_versus_two-dimensional_layout', '500', '230') }}

In dem Bild können Sie sehen, dass zwei Elemente in eine neue Zeile umgebrochen wurden. Diese Elemente teilen den verfügbaren Platz und sind nicht unter den darüberliegenden Elementen ausgerichtet. Dies liegt daran, dass, wenn Sie Flex-Elemente umbrechen, jede neue Zeile (oder Spalte, wenn Sie mit Spalten arbeiten) eine unabhängige Flex-Zeile im Flex-Container ist. Die Platzverteilung erfolgt über die Flex-Zeile.

Eine häufig gestellte Frage ist dann, wie man diese Elemente ausrichtet. Hier kommt eine zweidimensionale Layout-Methode ins Spiel: Sie möchten die Ausrichtung nach Zeilen und Spalten steuern, und hier kommt Grid ins Spiel.

### Dasselbe Layout mit CSS Grids

In diesem nächsten Beispiel erstelle ich dasselbe Layout unter Verwendung von Grid. Dieses Mal haben wir drei `1fr` Spalten-Tracks. Wir müssen nichts an den Elementen selbst einstellen; sie ordnen sich jeweils selbst in eine Zelle des erstellten Grids zu. Wie Sie sehen können, bleiben sie in einem strikten Grid und richten sich in Zeilen und Spalten aus. Mit fünf Elementen entsteht eine Lücke am Ende der zweiten Zeile.

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

Eine einfache Frage, die Sie sich stellen können, wenn Sie zwischen Grid oder Flexbox entscheiden:

- Muss ich das Layout nur nach Zeile _oder_ Spalte steuern – verwenden Sie Flexbox
- Muss ich das Layout nach Zeile _und_ Spalte steuern – verwenden Sie Grid

### Inhalt heraus oder Layout hinein?

Zusätzlich zur Unterscheidung eindimensional versus zweidimensional gibt es eine weitere Möglichkeit zu entscheiden, ob Sie Flexbox oder Grid für ein Layout verwenden sollten. Flexbox funktioniert vom Inhalt nach außen. Ein ideales Anwendungsbeispiel für Flexbox ist, wenn Sie eine Reihe von Elementen haben und diese gleichmäßig in einem Container verteilen möchten. Sie lassen die Größe des Inhalts bestimmen, wie viel individueller Platz jedes Element einnimmt. Wenn die Elemente in eine neue Zeile umbrochen werden, ermitteln sie ihren Abstand basierend auf ihrer Größe und dem verfügbaren Raum _in dieser Zeile_.

Grid funktioniert vom Layout nach innen. Wenn Sie CSS Grid-Layout verwenden, erstellen Sie ein Layout und platzieren dann Elemente darin, oder Sie erlauben es den automatischen Platzierungsregeln, die Elemente gemäß dem strikten Grid in den Zellen zu platzieren. Es ist möglich, Tracks zu erstellen, die auf die Größe des Inhalts reagieren, allerdings ändern sie auch den gesamten Track.

Wenn Sie Flexbox verwenden und feststellen, dass Sie einen Teil der Flexibilität deaktivieren, müssen Sie wahrscheinlich das CSS Grid-Layout verwenden. Ein Beispiel wäre, wenn Sie eine prozentuale Breite auf ein Flex-Element einstellen, um es mit anderen Elementen in einer darüberliegenden Zeile auszurichten. In diesem Fall ist ein Grid wahrscheinlich die bessere Wahl.

### Box-Ausrichtung

Das Feature von Flexbox, das viele von uns am meisten begeistert hat, war, dass es uns zum ersten Mal eine ordentliche Ausrichtungssteuerung gab. Es machte es einfach, eine Box auf der Seite zu zentrieren. Flex-Elemente können sich an die Höhe des Flex-Containers anpassen, was bedeutet, dass gleich hohe Spalten möglich waren. Dies waren Dinge, die wir schon lange tun wollten, und wofür wir allerlei Tricks entwickelt haben, um sie zumindest visuell zu erreichen.

Die Ausrichtungseigenschaften aus der Flexbox-Spezifikation wurden einer neuen Spezifikation namens [Box Alignment Level 3](https://drafts.csswg.org/css-align/) hinzugefügt. Das bedeutet, dass sie in anderen Spezifikationen, einschließlich Grid-Layout, verwendet werden können. In Zukunft könnten sie möglicherweise auch auf andere Layout-Methoden angewendet werden.

In einem späteren Leitfaden in dieser Serie werde ich einen genauen Blick auf die Box-Ausrichtung und deren Funktion im Grid-Layout werfen. Für den Moment hier ein Vergleich zwischen einfachen Beispielen für Flexbox und Grid.

Im ersten Beispiel, das Flexbox verwendet, habe ich einen Container mit drei darin enthaltenen Elementen. Der Wrapper {{cssxref("min-height")}} ist festgelegt, sodass er die Höhe des Flex-Containers definiert. Ich habe {{cssxref("align-items")}} auf den Flex-Container auf `flex-end` gesetzt, sodass die Elemente am Ende des Flex-Containers ausgerichtet werden. Ich habe auch die {{cssxref("align-self")}}-Eigenschaft auf `box1` gesetzt, sodass sie die Standardeinstellung außer Kraft setzt und sich an die Höhe des Containers anpasst, und auf `box2`, sodass sie sich am Anfang des Flex-Containers ausrichtet.

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

Dieses zweite Beispiel verwendet ein Grid, um dasselbe Layout zu erstellen. Dieses Mal verwenden wir die Box-Ausrichtungseigenschaften, wie sie auf ein Grid-Layout angewendet werden. Also richten wir `start` und `end` anstelle von `flex-start` und `flex-end` aus. Beim Grid-Layout richten wir die Elemente innerhalb ihres Grid-Bereichs aus. In diesem Fall ist es eine einzelne Grid-Zelle, es könnte aber auch ein Bereich sein, der aus mehreren Grid-Zellen besteht.

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

{{ EmbedLiveSample('Alignment_in_CSS_Grids', '200', '310') }}

### Die `fr` Einheit und `flex-basis`

Wir haben bereits gesehen, wie die `fr` Einheit funktioniert, um einen Anteil des verfügbaren Raums im Grid-Container unseren Grid-Tracks zuzuteilen. Die `fr` Einheit, kombiniert mit der {{cssxref("minmax", "minmax()")}} Funktion, kann uns ein sehr ähnliches Verhalten wie die `flex` Eigenschaften in Flexbox geben, während wir dennoch ein Layout in zwei Dimensionen erstellen können.

Wenn wir auf das Beispiel zurückblicken, in dem ich den Unterschied zwischen ein- und zweidimensionalen Layouts demonstriert habe, können Sie sehen, dass es einen Unterschied in der Art gibt, wie die beiden Layouts anpassbar arbeiten. Beim Flex-Layout, wenn wir unser Fenster weiter und kleiner ziehen, erledigt die Flexbox eine gute Arbeit, indem sie die Anzahl der Elemente in jeder Zeile entsprechend dem verfügbaren Raum anpasst. Wenn wir viel Platz haben, können alle fünf Elemente in eine Zeile passen. Wenn wir einen sehr schmalen Container haben, kann es sein, dass wir nur Platz für eines haben.

Im Vergleich dazu hat die Grid-Version immer drei Spalten-Tracks. Die Tracks selbst werden größer und kleiner, aber es gibt immer drei, da wir drei beim Definieren unseres Grids angefordert haben.

#### Automatisches Füllen von Grid-Tracks

Wir können Grid verwenden, um einen ähnlichen Effekt wie Flexbox zu erzielen und gleichzeitig den Inhalt in strikten Zeilen und Spalten zu halten, indem wir unsere Track-Auflistung mit der Wiederholungsnotation und den Eigenschaften `auto-fill` und `auto-fit` erstellen.

In diesem nächsten Beispiel habe ich das `auto-fill` Schlüsselwort anstelle einer ganzen Zahl in der Wiederholungsnotation verwendet und die Track-Auflistung auf 200 Pixel gesetzt. Das bedeutet, dass Grid so viele 200 Pixel breite Spalten-Tracks erstellt, wie in den Container passen.

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

{{ EmbedLiveSample('Auto-filling_grid_tracks', '500', '170') }}

### Eine flexible Anzahl von Tracks

Das ist nicht ganz dasselbe wie Flexbox. Im Flexbox-Beispiel sind die Elemente größer als die 200 Pixel Basis, bevor sie umgebrochen werden. Wir können dasselbe im Grid erreichen, indem wir `auto-fit` und die {{cssxref("minmax", "minmax()")}} Funktion kombinieren. In diesem nächsten Beispiel erstelle ich automatisch gefüllte Tracks mit `minmax`. Ich möchte, dass meine Tracks mindestens 200 Pixel groß sind, also setze ich das Maximum auf `1fr`. Sobald der Browser herausgefunden hat, wie oft 200 Pixel in den Container passen (unter Berücksichtigung der Grid-Lücken), behandelt er das `1fr` Maximum als Anweisung, den verbleibenden Platz zwischen den Elementen aufzuteilen.

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

{{ EmbedLiveSample('A_flexible_number_of_tracks', '500', '170') }}

Mit Grid-Layout können wir ein Grid mit einer dynamischen Anzahl flexibler Tracks erstellen und die Elemente im Grid ausrichten, indem sie nach Zeilen und Spalten geordnet werden.

## Grid und absolut positionierte Elemente

Grid interagiert mit absolut positionierten Elementen, was nützlich sein kann, wenn Sie ein Element innerhalb eines Grids oder Grid-Bereichs positionieren möchten. Die Spezifikation definiert das Verhalten, wenn ein Grid-Container ein enthaltender Block und ein Elternteil des absolut positionierten Elements ist.

### Ein Grid-Container als enthaltender Block

Um den Grid-Container zu einem enthaltenden Block zu machen, müssen Sie die Positions-Eigenschaft mit dem Wert relativ zu dem Container hinzufügen, genau wie Sie einen enthaltenden Block für andere absolut positionierte Elemente erstellen würden. Sobald Sie dies getan haben, nimmt ein Grid-Element mit `position: absolute` den Grid-Container oder, wenn das Element auch eine Grid-Position hat, den Bereich des Grids, in den es platziert wird, als enthaltenden Block an.

Im folgenden Beispiel habe ich einen Wrapper, der vier Kindelemente enthält. Element drei ist absolut positioniert und ebenfalls im Grid platziert unter Verwendung einer linienbasierten Platzierung. Der Grid-Container hat `position: relative` und wird somit der Positionierungskontext dieses Elements.

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

{{ EmbedLiveSample('A_grid_container_as_containing_block', '500', '330') }}

Sie können sehen, dass das Element den Bereich von Grid-Spaltenlinie 2 bis 4 einnimmt und nach Linie 1 beginnt. Dann wird es in diesem Bereich unter Verwendung der Top- und Left-Eigenschaften verschoben. Es wurde jedoch, wie es bei absolut positionierten Elementen üblich ist, aus dem Fluss genommen, und die Auto-Platzierungsregeln platzieren jetzt Elemente in den gleichen Raum. Das Element verursacht auch nicht die Erstellung der zusätzlichen Zeile, um sich bis zur Zeilenlinie 3 zu erstrecken.

Wenn wir `position: absolute` aus den Regeln für `.box3` entfernen, können Sie sehen, wie es ohne die Positionierung angezeigt würde.

### Ein Grid-Container als Elternteil

Wenn das absolut positionierte Kind einen Grid-Container als Elternteil hat, dieser Container jedoch keinen neuen Positionierungskontext erstellt, wird es wie im vorherigen Beispiel aus dem Fluss genommen. Der Positionierungskontext wird das Element sein, das einen Positionierungskontext erstellt, wie es bei anderen Layout-Methoden üblich ist. In unserem Fall, wenn wir `position: relative` aus dem oben beschriebenen Wrapper entfernen, ist der Positionierungskontext vom Ansichtsfenster, wie in diesem Bild gezeigt.

![Bild des Grid-Containers als Elternteil](2_abspos_example.png)

Ein weiteres Mal nimmt das Element nicht an den Layout-Berechnungen des Grids in Bezug auf Größe oder wenn andere Elemente automatisch platziert werden, teil.

### Mit einem Grid-Bereich als Elternteil

Wenn das absolut positionierte Element in einem Grid-Bereich verschachtelt ist, können Sie einen Positionierungskontext auf diesem Bereich erstellen. Im folgenden Beispiel haben wir unser Grid wie zuvor, aber dieses Mal habe ich ein Element in `.box3` des Grids verschachtelt.

Ich habe `.box3` position relativ gegeben und dann das Unterelement mit den Versatz-Eigenschaften positioniert. In diesem Fall ist der Positionierungskontext der Grid-Bereich.

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
  color: #000;
  padding: 10px;
}
```

{{ EmbedLiveSample('With_a_grid_area_as_the_parent', '500', '460') }}

## Grid und display: contents

Eine letzte Interaktion mit einer anderen Layout-Spezifikation, die es wert ist, erwähnt zu werden, ist die Interaktion zwischen CSS Grid-Layout und `display: contents`. Der `contents` Wert der Display-Eigenschaft ist ein neuer Wert, der in der [Display-Spezifikation](https://drafts.csswg.org/css-display/#box-generation) wie folgt beschrieben wird:

> "Das Element selbst erzeugt keine Boxen, aber seine Kinder und Pseudo-Elemente erzeugen wie gewohnt Boxen. Für die Zwecke der Box-Erzeugung und des Layouts muss das Element so behandelt werden, als ob es durch seine Kinder und Pseudo-Elemente im Dokumentbaum ersetzt worden wäre."

Wenn Sie einem Element `display: contents` zuweisen, verschwindet die Box, die es normalerweise erzeugen würde, und die Boxen der Kinderelemente erscheinen, als ob sie eine Ebene nach oben gestiegen wären. Das bedeutet, dass Kinder eines Grid-Elements zu Grid-Elementen werden können. Klingt seltsam? Hier ein einfaches Beispiel.

### Grid-Layout mit verschachtelten Kindelementen

Im folgenden Markup habe ich ein Grid und das erste Element im Grid ist so eingestellt, dass es sich über alle drei Spuren der Spalten erstreckt. Es enthält drei verschachtelte Elemente. Da diese Elemente keine direkten Kinder sind, werden sie nicht Teil des Grid-Layouts und werden daher im regulären Block-Layout dargestellt.

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

Wenn ich jetzt `display: contents` zu den Regeln für `box1` hinzufüge, verschwindet die Box für dieses Element und die Unterelemente werden jetzt zu Grid-Elementen und ordnen sich entsprechend den Auto-Platzierungsregeln an.

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

Dies kann eine Möglichkeit sein, um Elemente, die in das Grid verschachtelt sind, so zu gestalten, als ob sie Teil des Grids wären, und ist ein Weg, um einige der Probleme zu umgehen, die durch Subgrids gelöst würden, sobald sie implementiert sind. Sie können `display: contents` auf ähnliche Weise mit Flexbox verwenden, um verschachtelte Elemente zu Flex-Elementen werden zu lassen.

Wie Sie in diesem Leitfaden sehen können, ist das CSS Grid-Layout nur ein Teil Ihrer Werkzeuge. Zögern Sie nicht, es mit anderen Methoden der Layout-Erstellung zu mischen, um die verschiedenen Effekte zu erzielen, die Sie benötigen.

## Siehe auch

- [Flexbox-Leitfäden](/de/docs/Learn/CSS/CSS_layout/Flexbox)
- [Mehrspaltige Layout-Leitfäden](/de/docs/Web/CSS/CSS_multicol_layout)
