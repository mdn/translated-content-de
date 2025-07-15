---
title: Beziehung des Grid-Layouts zu anderen Layout-Methoden
short-title: Grid und andere Layouts
slug: Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

[CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) ist so konzipiert, dass es in Verbindung mit anderen Teilen von CSS funktioniert, als Teil eines vollständigen Systems für das Layout. Dieser Leitfaden erklärt, wie das Grid-Layout mit anderen Techniken zusammenpasst.

## Grid und Flexbox

Der grundlegende Unterschied zwischen dem CSS-Grid-Layout und dem [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) besteht darin, dass Flexbox für das Layout in einer Dimension entwickelt wurde - entweder eine Zeile _oder_ eine Spalte. Grid wurde für zweidimensionale Layouts entwickelt - Zeilen und Spalten gleichzeitig. Beide Spezifikationen verwenden [CSS-Box-Ausrichtungs](/de/docs/Web/CSS/CSS_box_alignment)-Funktionen. Wenn Sie bereits gelernt haben, wie man Flexbox verwendet, sollten die Ähnlichkeiten Ihnen helfen, das Grid zu verstehen.

### Eindimensionales versus zweidimensionales Layout

Ein einfaches Beispiel kann den Unterschied zwischen ein- und zweidimensionalen Layouts demonstrieren.

In diesem ersten Beispiel verwenden wir Flexbox, um eine Reihe von Boxen anzuordnen. Wir haben fünf Kind-Elemente in unserem Container und haben die Flex-Eigenschaften so eingestellt, dass sie von einer flex-basis von 150 Pixeln wachsen und schrumpfen können.

Wir setzen auch die Eigenschaft {{cssxref("flex-wrap")}} auf `wrap`, sodass, wenn der Platz im Container zu schmal wird, um die Flex-Basis beizubehalten, sich die Elemente auf eine neue Zeile umbrechen.

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

Auf dem Bild können Sie sehen, dass zwei Elemente in eine neue Zeile umgebrochen wurden. Diese Elemente teilen sich den verfügbaren Platz und sind nicht unter den obigen Elementen ausgerichtet. Dies liegt daran, dass, wenn Sie Flex-Elemente umbrechen, jede neue Zeile (oder Spalte, wenn Sie mit Spalten arbeiten) eine unabhängige Flex-Linie im Flex-Container ist. Die Platzverteilung erfolgt über die Flex-Linie.

Eine häufige Frage ist dann, wie man diese Elemente ausrichtet. Hier kommt eine zweidimensionale Layout-Methode ins Spiel: Sie möchten die Ausrichtung nach Zeilen und Spalten steuern, und hier kommt das Grid ins Spiel.

### Dasselbe Layout mit CSS-Grids

Im nächsten Beispiel erstellen wir dasselbe Layout mit Grid. Diesmal haben wir drei `1fr`-Spalten-Tracks. Wir müssen nichts an den Elementen selbst einstellen; sie werden sich selbst in jede Zelle des erstellten Grids anordnen. Wie Sie sehen können, bleiben sie in einem strikten Grid und richten sich in Zeilen und Spalten aus. Mit fünf Elementen erhalten wir eine Lücke am Ende der zweiten Zeile.

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

Eine wichtige Frage, die Sie sich stellen sollten, wenn Sie sich zwischen Grid und Flexbox entscheiden, ist:

- Müssen wir das Layout nur nach Zeilen _oder_ Spalten steuern? Wenn ja, verwenden Sie Flexbox.
- Müssen wir das Layout nach Zeilen _und_ Spalten steuern? Wenn ja, verwenden Sie Grid-Layout.

### Inhalt heraus oder Layout hinein?

Zusätzlich zur Unterscheidung zwischen ein- und zweidimensional gibt es eine weitere Möglichkeit zu entscheiden, ob Sie Flexbox oder Grid für ein Layout verwenden sollten. Flexbox funktioniert von innen nach außen. Ein idealer Anwendungsfall für Flexbox ist, wenn Sie eine Reihe von Elementen haben und diese gleichmäßig in einem Container verteilen möchten. Sie lassen die Größe des Inhalts entscheiden, wie viel individuellen Platz jedes Element einnimmt. Wenn die Elemente in eine neue Zeile umbrechen, bestimmen sie ihre Platzierung basierend auf ihrer Größe und dem verfügbaren Platz _in dieser Zeile_.

Grid funktioniert vom Layout nach innen. Wenn Sie CSS-Grid-Layout verwenden, erstellen Sie ein Layout und platzieren dann Elemente hinein, oder Sie lassen die Autoplatzierungsregeln die Elemente gemäß diesem strikten Grid in die Gitterszellen platzieren. Es ist möglich, Tracks zu erstellen, die auf die Größe des Inhalts reagieren, jedoch ändern sie auch den gesamten Track.

Wenn Sie Flexbox verwenden und feststellen, dass Sie einige der Flexibilität deaktivieren, müssen Sie wahrscheinlich CSS-Grid-Layout verwenden. Wenn Sie beispielsweise die Breite eines Flex-Elements festlegen, um es mit anderen Elementen in einer Zeile darüber auszurichten, ist Grid wahrscheinlich die bessere Wahl.

### Box-Ausrichtung

Die meisten Grid-Ausrichtungsfunktionen wurden ursprünglich im [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) definiert. Diese Funktionen boten zum ersten Mal eine ordentliche Ausrichtungssteuerung an und machten es einfach, eine Box auf der Seite zu zentrieren. Flex-Elemente können sich auf die Höhe des Flex-Containers erstrecken, was bedeutet, dass gleich hohe Spalten möglich waren. Diese Eigenschaften sind jetzt im [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment) definiert und werden in mehreren Layout-Modi verwendet, einschließlich Grid-Layout.

Wir werden später genauer auf [Ausrichten von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout) eingehen. Für den Moment hier ein Vergleich zwischen Beispielen von Flexbox und Grid.

Im ersten Beispiel, das Flexbox verwendet, haben wir einen Container mit drei Elementen innen. Die {{cssxref("min-height")}} des Containers ist gesetzt, sodass sie die Höhe des Flex-Containers definiert. Wir haben {{cssxref("align-items")}} auf dem Flex-Container auf `flex-end` eingestellt, sodass die Elemente am Ende des Flex-Containers ausgerichtet werden. Wir haben auch die Eigenschaft {{cssxref("align-self")}} auf `box1` gesetzt, sodass sie den Standard überschreibt und sich auf die Höhe des Containers erstreckt und auf `box2`, sodass sie sich am Anfang des Flex-Containers ausrichtet.

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

Dieses Beispiel verwendet ein Grid, um dasselbe Layout zu erstellen. Wir verwenden die Box-Ausrichtungseigenschaften, wie sie auf ein Grid-Layout angewendet werden. Wir richten uns auf `start` und `end` aus. (Wir könnten die {{cssxref("content-position")}} Synonyme `flex-start` und `flex-end` verwenden.) Im Fall eines Grid-Layouts richten wir die Elemente innerhalb ihres Grid-Bereichs aus. In diesem Fall ist das eine einzelne Gitterzelle, aber es könnte ein Bereich aus mehreren Gitterszellen sein.

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

Wir haben bereits gesehen, wie die `fr` Einheit funktioniert, um einen Anteil des verfügbaren Platzes im Grid-Container unseren Grid-Tracks zuzuweisen. Die `fr` Einheit, wenn sie mit der {{cssxref("minmax", "minmax()")}} Funktion kombiniert wird, kann uns ein sehr ähnliches Verhalten wie die `flex` Eigenschaften in Flexbox geben, während sie dennoch die Erstellung eines Layouts in zwei Dimensionen ermöglicht.

Wenn wir uns das Beispiel ansehen, in dem wir den Unterschied zwischen ein- und zweidimensionalen Layouts demonstriert haben, können Sie sehen, dass es einen Unterschied zwischen der Art und Weise gibt, wie die beiden Layouts responsiv arbeiten. Beim Flex-Layout, wenn wir unser Fenster breiter und kleiner ziehen, macht die Flexbox einen guten Job, um die Anzahl der Elemente in jeder Zeile entsprechend dem verfügbaren Platz anzupassen. Wenn wir viel Platz haben, können alle fünf Elemente auf eine Zeile passen. Wenn wir einen sehr schmalen Container haben, haben wir möglicherweise nur Platz für eines.

Im Vergleich dazu hat die Grid-Version immer drei Spalten-Tracks. Die Tracks selbst wachsen und schrumpfen, aber es gibt immer drei, da wir beim Definieren unseres Grids drei angefordert haben.

#### Automatische Füllung von Grid-Tracks

Wir können Grid verwenden, um einen ähnlichen Effekt wie Flexbox zu erzeugen, während der Inhalt in strengen Zeilen und Spalten arrangiert bleibt, indem wir unser Track-Listing mit Wiederholungsnotation und den Eigenschaften `auto-fill` und `auto-fit` erstellen.

Im nächsten Beispiel haben wir das Keyword `auto-fill` anstelle einer ganzen Zahl in der Wiederholungsnotation verwendet und das Track-Listing auf 200 Pixel gesetzt. Dies bedeutet, dass Grid so viele Spalten-Tracks von 200 Pixeln erstellt, wie in den Container passen.

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

Dies ist nicht ganz dasselbe wie Flexbox. Im Flexbox-Beispiel sind die Elemente vor dem Umbruch größer als die 200 Pixel-Basis. Wir können dasselbe in Grid erreichen, indem wir `auto-fit` und die {{cssxref("minmax", "minmax()")}} Funktion kombinieren.

In diesem Beispiel erstellen wir automatische Füll-Tracks mit `minmax`. Wir möchten, dass unsere Tracks mindestens 200 Pixel groß sind, also setzen wir das Maximum auf `1fr`. Sobald der Browser berechnet hat, wie oft 200 Pixel in den Container passen (unter Berücksichtigung von Gittersabständen), behandelt er das `1fr` Maximum als Anweisung, den verbleibenden Platz zwischen den Elementen aufzuteilen.

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

Mit Grid-Layout können wir ein Grid mit einer dynamischen Anzahl von flexiblen Tracks erstellen und die Elemente auf dem Grid geordnet nach Zeilen und Spalten layouten.

## Grid und absolut positionierte Elemente

Das Grid interagiert mit [absolut positionierten](/de/docs/Web/CSS/position#absolute_positioning) Elementen, was nützlich sein kann, wenn Sie ein Element innerhalb eines Grids oder Grid-Bereichs positionieren möchten. Die Spezifikation definiert das Verhalten, wenn ein Grid-Container ein umschließender Block und ein Elternteil des absolut positionierten Elements ist.

### Ein Grid-Container als umschließender Block

Um den Grid-Container zu einem [umschließenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) zu machen, müssen Sie die {{cssxref("position")}} Eigenschaft mit dem Wert `relative` dem Container hinzufügen, so wie Sie einen umschließenden Block für andere absolut positionierte Elemente erstellen würden. Sobald Sie dies getan haben, wird ein Grid-Element mit `position: absolute` als sein umschließender Block den Grid-Container oder, wenn das Element auch eine Gitterposition hat, den Bereich des Grids, in den es platziert wird, nehmen.

Im untenstehenden Beispiel haben wir einen Wrapper, der vier Kind-Elemente enthält. Element drei ist absolut positioniert und auch über linienbasiertes Platzieren im Grid platziert. Der Grid-Container hat `position: relative` und wird so zum Positionierungskontext dieses Elements.

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

Sie können sehen, dass das Element den Bereich von der Grid-Spaltenlinie 2 bis 4 nimmt und nach Linie 1 beginnt. Dann wird es in diesem Bereich mit den Eigenschaften 'top' und 'left' versetzt. Allerdings wurde es aus dem Fluss genommen, wie es üblich ist für absolut positionierte Elemente, und die Autoplatzierungsregeln platzieren daher Elemente in denselben Bereich. Das Element verursacht auch nicht die Erstellung einer zusätzlichen Zeile, um bis zur Zeilenlinie 3 zu spannen.

Wenn wir `position: absolute` aus den Regeln für `.box3` entfernen, können Sie sehen, wie es sich ohne die Positionierung zeigen würde.

### Ein Grid-Container als Eltern

Wenn das absolut positionierte Kind-Element einen Grid-Container als Eltern hat, aber dieser Container keinen neuen Positionierungskontext erstellt, wird es aus dem Fluss genommen, wie im vorherigen Beispiel. Der _Positionierungskontext_ ist das Element, auf das sich das absolut positionierte Element relativ positioniert. Der Positionierungskontext wird jedes Element sein, das einen Positionierungskontext erstellt, wie es bei anderen Layout-Methoden üblich ist. In unserem Fall, wenn wir `position: relative` aus dem obigen Wrapper entfernen, kommt der Positionierungskontext vom Viewport, wie in diesem Bild gezeigt.

![Bild eines Grid-Containers als Eltern](2_abspos_example.png)

Auch hier nimmt das Element nicht mehr am Grid-Layout in Bezug auf die Größenbestimmung oder wenn andere Elemente automatisch platziert werden, teil.

### Mit einem Grid-Bereich als Eltern

Wenn das absolut positionierte Element innerhalb eines Grid-Bereichs verschachtelt ist, können Sie einen Positionierungskontext auf diesem Bereich erstellen. In diesem Beispiel haben wir unser Grid wie zuvor, aber diesmal haben wir ein Element innerhalb von `.box3` des Grids verschachtelt.

Wir haben `.box3` relative positioniert und dann das untergeordnete Element mit den Versatz-Eigenschaften positioniert. In diesem Fall ist der Positionierungskontext der Gitterbereich.

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

Eine letzte erwähnenswerte Interaktion ist die Interaktion zwischen CSS-Grid-Layout und dem `display: contents`, das im [CSS-Display](/de/docs/Web/CSS/CSS_display) Modul definiert ist. Wenn die {{cssxref("display")}} Eigenschaft auf `contents` gesetzt ist, erzeugt das Element selbst keine Boxen, aber seine Kinder und Pseudo-Elemente erzeugen weiterhin Boxen wie gewohnt. Das bedeutet, dass das Element für die Zwecke der Boxenerzeugung und des Layouts so behandelt wird, als ob es durch seine Kinder und Pseudo-Elemente im Dokumentenbaum ersetzt worden wäre.

Wenn Sie ein Element auf `display: contents` setzen, verschwindet die Box, die es normalerweise erzeugen würde, und die Boxen der Kind-Elemente erscheinen, als wären sie eine Ebene höher gestiegen. Das bedeutet, dass Kinder eines Grid-Elements zu Grid-Elementen werden können. Klingt seltsam? Hier ist ein Beispiel.

### Grid-Layout mit verschachtelten Kind-Elementen

In diesem Beispiel ist das erste Element unseres Grids so eingestellt, dass es alle drei Spalten-Tracks umfasst. Es enthält drei verschachtelte Elemente. Da diese Elemente keine direkten Kinder sind, werden sie nicht Teil des Grid-Layouts und werden daher im regulären Block-Layout angezeigt.

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

Wenn wir nun `display: contents` zu den Regeln für `box1` hinzufügen, verschwindet die Box für dieses Element und die Unterelemente werden nun zu Grid-Elementen und ordnen sich nach den Autoplatzierungsregeln an.

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

Dies kann eine Möglichkeit sein, verschachtelte Elemente im Grid so zu verhalten, als ob sie Teil des Grids wären. Sie können `display: contents` auch in ähnlicher Weise mit Flexbox verwenden, um verschachtelte Elemente zu Flex-Elementen zu machen.

Wie Sie aus diesem Leitfaden sehen können, ist CSS-Grid-Layout nur ein Teil Ihrer Werkzeuge. Scheuen Sie sich nicht, es mit anderen Methoden für Layouts zu kombinieren, um die verschiedenen Effekte zu erzielen, die Sie benötigen.

## Siehe auch

- [Flexbox-Leitfäden](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
- [Mehrspaltige Layout-Leitfäden](/de/docs/Web/CSS/CSS_multicol_layout)
