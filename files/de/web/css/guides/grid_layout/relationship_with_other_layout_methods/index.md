---
title: Beziehung des Grid-Layouts zu anderen Layout-Methoden
short-title: Grid und andere Layouts
slug: Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods
l10n:
  sourceCommit: 32bdfdb82cf91ce9942b694286dec62be2cc20aa
---

[CSS Grid Layout](/de/docs/Web/CSS/Guides/Grid_layout) ist dafür konzipiert, zusammen mit anderen Teilen von CSS zu arbeiten, als Teil eines kompletten Systems zur Erstellung von Layouts. Dieser Leitfaden erklärt, wie das Grid-Layout mit anderen Techniken zusammenpasst.

## Grid und Flexbox

Der grundlegende Unterschied zwischen CSS Grid Layout und [CSS Flexbox Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) besteht darin, dass Flexbox für das Layout in einer Dimension entwickelt wurde - entweder eine Zeile _oder_ eine Spalte. Grid wurde für zweidimensionale Layouts - Zeilen und Spalten gleichzeitig - entwickelt. Beide Spezifikationen verwenden Funktionen der [CSS Box Alignment](/de/docs/Web/CSS/Guides/Box_alignment). Wenn Sie bereits gelernt haben, wie Flexbox zu verwenden ist, sollten die Ähnlichkeiten Ihnen helfen, sich mit Grid zurechtzufinden.

### Eindimensionales versus zweidimensionales Layout

Ein einfaches Beispiel kann den Unterschied zwischen ein- und zweidimensionalen Layouts veranschaulichen.

In diesem ersten Beispiel verwenden wir Flexbox, um eine Reihe von Boxen zu layouten. Wir haben fünf Kindelemente in unserem Container und haben den Flex-Eigenschaften Werte zugewiesen, sodass sie von einer Flex-Basis von 150 Pixeln wächst und schrumpft.

Wir haben auch die Eigenschaft {{cssxref("flex-wrap")}} auf `wrap` gesetzt, sodass die Elemente auf eine neue Zeile umbrechen, wenn der Platz im Container zu eng wird, um die Flex-Basis aufrechtzuerhalten.

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

Im Bild können Sie sehen, dass zwei Elemente auf eine neue Zeile umgebrochen sind. Diese Elemente teilen sich den verfügbaren Raum und richten sich nicht unter den darüber liegenden Elementen aus. Dies liegt daran, dass beim Umbruch von Flex-Elementen jede neue Zeile (oder Spalte, wenn man mit Spalten arbeitet) eine unabhängige Flex-Linie im Flex-Container ist. Die Raumverteilung erfolgt über die Flex-Linie.

Eine häufige Frage ist, wie diese Elemente ausgerichtet werden können. Hier kommt die zweidimensionale Layout-Methode ins Spiel: Sie möchten die Ausrichtung nach Zeilen und Spalten steuern, und hier kommt Grid ins Spiel.

### Dasselbe Layout mit CSS-Grids

Im nächsten Beispiel erstellen wir dasselbe Layout mit Grid. Dieses Mal haben wir drei `1fr` Spalten-Tracks. Wir müssen nichts auf die Elemente selbst setzen; sie werden sich selbst in jede Zelle des erstellten Grids layouten. Wie Sie sehen können, bleiben sie in einem strikten Grid, das sich in Zeilen und Spalten ausrichtet. Bei fünf Elementen bleibt am Ende von Zeile zwei eine Lücke.

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

Eine wichtige Frage, die Sie sich stellen sollten, wenn Sie zwischen Grid oder Flexbox entscheiden müssen, ist:

- Müssen wir das Layout nur nach Zeilen _oder_ Spalten steuern? Wenn ja, verwenden Sie Flexbox.
- Müssen wir das Layout nach Zeilen _und_ Spalten steuern? Wenn ja, verwenden Sie das Grid-Layout.

### Außengehendes oder innengehendes Layout?

Zusätzlich zur Unterscheidung zwischen eindimensional und zweidimensional gibt es eine weitere Möglichkeit zu entscheiden, ob Sie Flexbox oder Grid für ein Layout verwenden sollten. Flexbox arbeitet vom Inhalt ausgehend. Ein idealer Anwendungsfall für Flexbox ist, wenn Sie eine Reihe von Elementen haben und diese gleichmäßig in einem Container verteilen möchten. Sie lassen die Größe des Inhalts darüber entscheiden, wie viel individuellen Platz jedes Element einnimmt. Wenn die Elemente auf eine neue Zeile umbrechen, werden sie ihren Abstand basierend auf ihrer Größe und dem verfügbaren Platz _auf dieser Zeile_ ermitteln.

Grid arbeitet vom Layout ausgehend. Wenn Sie das CSS Grid Layout verwenden, erstellen Sie ein Layout und platzieren dann Elemente darin, oder Sie erlauben den Auto-Placement-Regeln, die Elemente in die Grid-Zellen gemäß diesem strikten Grid zu platzieren. Es ist möglich, Tracks zu erstellen, die auf die Größe des Inhalts reagieren, jedoch ändern sie auch den gesamten Track.

Wenn Sie Flexbox verwenden und feststellen, dass Sie einige der Flexibilität deaktivieren, benötigen Sie wahrscheinlich das CSS Grid Layout. Zum Beispiel, wenn Sie eine Breite auf ein Flex-Element setzen, um es mit anderen Elementen in einer darüber liegenden Zeile auszurichten, ist ein Grid wahrscheinlich die bessere Wahl.

### Box-Ausrichtung

Die meisten Grid-Ausrichtungsfunktionen wurden ursprünglich im [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) definiert. Diese Funktionen boten erstmals eine ordnungsgemäße Ausrichtungskontrolle und ermöglichten das Zentrieren einer Box auf der Seite. Flex-Elemente können sich auf die Höhe des Flex-Containers strecken, sodass gleich hohe Spalten möglich waren. Diese Eigenschaften sind jetzt im [CSS Box Alignment](/de/docs/Web/CSS/Guides/Box_alignment) Modul definiert und werden in mehreren Layout-Modi verwendet, einschließlich Grid-Layout.

Wir werden uns später genauer mit dem [Ausrichten von Elementen im CSS Grid Layout](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment) befassen. Vorerst hier ein Vergleich zwischen Flexbox- und Grid-Beispielen.

Im ersten Beispiel, das Flexbox verwendet, haben wir einen Container mit drei Elementen darin. Die {{cssxref("min-height")}} des Containers ist festgelegt, sodass sie die Höhe des Flex-Containers definiert. Wir haben {{cssxref("align-items")}} auf den Flex-Container zum `flex-end` gesetzt, sodass sich die Elemente am Ende des Flex-Containers ausrichten. Wir haben auch die Eigenschaft {{cssxref("align-self")}} auf `box1` gesetzt, sodass es die Standardeinstellung überschreibt und sich auf die Höhe des Containers ausdehnt, und auf `box2`, sodass es sich am Anfang des Flex-Containers ausrichtet.

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

Dieses Beispiel verwendet ein Grid, um dasselbe Layout zu erstellen. Wir verwenden die Box-Ausrichtungseigenschaften, wie sie auf ein Grid-Layout angewendet werden. Wir richten zu `start` und `end` aus. (Wir hätten die {{cssxref("content-position")}} Synonyme `flex-start` und `flex-end` verwenden können.) Im Falle eines Grid-Layouts richten wir die Elemente innerhalb ihres Grid-Bereichs aus. In diesem Fall ist das eine einzelne Grid-Zelle, aber es könnte auch ein Bereich aus mehreren Grid-Zellen sein.

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

Wir haben bereits gesehen, wie die `fr`-Einheit funktioniert, um einen Anteil des verfügbaren Raums im Grid-Container unseren Grid-Tracks zuzuweisen. Die `fr`-Einheit kann uns, wenn sie mit der {{cssxref("minmax", "minmax()")}} Funktion kombiniert wird, sehr ähnliches Verhalten wie die `flex`-Eigenschaften in Flexbox bieten, während sie weiterhin die Erstellung eines Layouts in zwei Dimensionen ermöglicht.

Wenn wir uns das Beispiel ansehen, bei dem wir den Unterschied zwischen ein- und zweidimensionalen Layouts demonstrierten, können wir sehen, dass es einen Unterschied zwischen der Arbeitsweise der beiden Layouts gibt. Beim Flex-Layout, wenn wir unser Fenster breiter und kleiner ziehen, erledigt Flexbox eine schöne Aufgabe, die Anzahl der Elemente in jeder Zeile entsprechend dem verfügbaren Raum anzupassen. Wenn wir viel Platz haben, können alle fünf Elemente in eine Zeile passen. Wenn unser Container sehr schmal ist, haben wir vielleicht nur Platz für eines.

Im Vergleich dazu hat die Grid-Version immer drei Spalten-Tracks. Die Tracks selbst werden wachsen und schrumpfen, aber es gibt immer drei, da wir bei der Definition unseres Grids um drei gebeten haben.

#### Automatisches Auffüllen von Grid-Tracks

Wir können Grid verwenden, um einen ähnlichen Effekt wie Flexbox zu erzielen, während der Inhalt weiterhin in strikten Zeilen und Spalten angeordnet bleibt, indem wir unsere Track-Auflistung mit Wiederholungsnotation und den Eigenschaften `auto-fill` und `auto-fit` erstellen.

Im nächsten Beispiel haben wir das Schlüsselwort `auto-fill` anstelle einer Ganzzahl in der Wiederholungsnotation verwendet und die Track-Auflistung auf 200 Pixel gesetzt. Das bedeutet, dass Grid so viele 200 Pixel breite Spalten-Tracks erstellt, wie im Container passen.

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

Das ist nicht ganz dasselbe wie Flexbox. Im Flexbox-Beispiel sind die Elemente größer als die 200 Pixel Basis vor dem Umbruch. Wir können dasselbe im Grid erreichen, indem wir `auto-fit` und die {{cssxref("minmax", "minmax()")}} Funktion kombinieren.

In diesem Beispiel erstellen wir automatisch gefüllte Tracks mit `minmax`. Wir möchten, dass unsere Tracks mindestens 200 Pixel groß sind, also setzen wir das Maximum auf `1fr`. Sobald der Browser herausgefunden hat, wie oft 200 Pixel in den Container passen – unter Berücksichtigung der Grid-Abstände – behandelt er das `1fr` Maximum als Anweisung, den verbleibenden Raum zwischen den Elementen aufzuteilen.

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

Mit Grid-Layout können wir ein Grid mit einer dynamischen Anzahl flexibler Tracks erstellen und die Elemente auf dem Grid nach Zeilen und Spalten ausrichten.

## Grid und absolut positionierte Elemente

Grid interagiert mit [absolut positionierten](/de/docs/Web/CSS/Reference/Properties/position#absolute_positioning) Elementen, was nützlich sein kann, wenn Sie ein Element innerhalb eines Grids oder Grid-Bereichs positionieren möchten. Die Spezifikation definiert das Verhalten, wenn ein Grid-Container ein begrenzender Block und ein Elternteil des absolut positionierten Elements ist.

### Ein Grid-Container als begrenzender Block

Um den Grid-Container zu einem [begrenzenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) zu machen, müssen Sie die {{cssxref("position")}} Eigenschaft mit einem Wert von `relative` zum Container hinzufügen, genau wie Sie einen begrenzenden Block für alle anderen absolut positionierten Elemente erstellen würden. Sobald Sie dies getan haben, nimmt ein Grid-Element mit `position: absolute` den Grid-Container als begrenzenden Block oder, wenn das Element auch eine Grid-Position hat, den Bereich des Grids, in den es platziert wird.

Im nachstehenden Beispiel haben wir einen Wrapper, der vier Kindelemente enthält. Element drei ist absolut positioniert und auch mithilfe von linienbasierter Platzierung auf dem Grid platziert. Der Grid-Container hat `position: relative` und wird daher zum Positionierungskontext dieses Elements.

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

Sie können sehen, dass das Element den Bereich von Grid-Spaltenlinie 2 bis 4 einnimmt und nach Linie 1 beginnt. Dann wird es in diesem Bereich mithilfe der top und left Eigenschaften verschoben. Es wurde jedoch wie üblich für absolut positionierte Elemente aus dem Fluss genommen, sodass die Auto-Platzierungsregeln nun Elemente in denselben Raum platzieren. Das Element lässt auch keine zusätzliche Zeile entstehen, um bis zur Zeilenlinie 3 zu spannen.

Wenn wir `position: absolute` aus den Regeln für `.box3` entfernen, können Sie sehen, wie es ohne die Positionierung angezeigt würde.

### Ein Grid-Container als Elternteil

Wenn das absolut positionierte Kind einen Grid-Container als Eltern hat, dieser Container jedoch keinen neuen Positionierungskontext erstellt, wird es wie im vorherigen Beispiel aus dem Fluss genommen. Der _Positionierungskontext_ ist das Element, relativ zu dem das absolut positionierte Element positioniert wird. Der Positionierungskontext wird das Element sein, das einen Positionierungskontext erstellt, wie bei anderen Layout-Methoden üblich. In unserem Fall, wenn wir `position: relative` aus dem obigen Wrapper entfernen, ist der Positionierungskontext vom Viewport, wie in diesem Bild gezeigt.

![Bild des Grid-Containers als Elternteil](2_abspos_example.png)

Auch hier nimmt das Element nicht am Grid-Layout in Bezug auf Größenanpassung oder Auto-Platzierung anderer Elemente teil.

### Mit einem Grid-Bereich als Elternteil

Wenn das absolut positionierte Element in einem Grid-Bereich verschachtelt ist, können Sie auf diesem Bereich einen Positionierungskontext erstellen. In diesem Beispiel haben wir unser Grid wie zuvor, aber dieses Mal haben wir ein Element innerhalb von `.box3` des Grids verschachtelt.

Wir haben `.box3` eine relative Position gegeben und dann das Unterelement mithilfe der Versatzeigenschaften positioniert. In diesem Fall ist der Positionierungskontext der Grid-Bereich.

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

Eine letzte erwähnenswerte Interaktion ist die Interaktion zwischen CSS Grid Layout und `display: contents`, definiert im [CSS Display](/de/docs/Web/CSS/Guides/Display) Modul. Wenn die {{cssxref("display")}} Eigenschaft auf `contents` gesetzt ist, erzeugt das Element selbst keine Boxen, aber seine Kinder und Pseudoelemente erzeugen wie gewohnt Boxen. Dies bedeutet, dass das Element in Bezug auf die Boxenerstellung und das Layout so behandelt wird, als wäre es durch seine Kinder und Pseudoelemente im Dokumentbaum ersetzt worden.

Wenn Sie ein Element auf `display: contents` setzen, verschwindet die Box, die es normalerweise erzeugen würde, und die Boxen der Kindelemente erscheinen, als ob sie eine Ebene nach oben gerückt wären. Dies bedeutet, dass Kinder eines Grid-Elements zu Grid-Elementen werden können. Klingt seltsam? Hier ist ein Beispiel.

### Grid-Layout mit verschachtelten Kindelementen

In diesem Beispiel ist das erste Element unseres Grids so eingestellt, dass es alle drei Spalten-Tracks überspannt. Es enthält drei verschachtelte Elemente. Da diese Elemente keine direkten Kinder sind, werden sie nicht Teil des Grid-Layouts und daher im regulären Blocklayout angezeigt.

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

Wenn wir nun `display: contents` zu den Regeln für `box1` hinzufügen, verschwindet die Box für dieses Element und die Unterelemente werden nun zu Grid-Elementen und layouten sich selbst mithilfe der Auto-Platzierungsregeln.

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

Dies kann eine Möglichkeit sein, um Elemente, die in das Grid verschachtelt sind, so zu behandeln, als wären sie Teil des Grids. Sie können `display: contents` in ähnlicher Weise mit Flexbox verwenden, um verschachtelte Elemente zu Flex-Elementen zu machen.

Wie Sie aus diesem Leitfaden sehen können, ist CSS Grid Layout nur ein Teil Ihres Werkzeugsatzes. Scheuen Sie sich nicht, es mit anderen Methoden der Layout-Erstellung zu kombinieren, um die verschiedenen Effekte zu erzielen, die Sie benötigen.

## Siehe auch

- [Flexbox-Leitfäden](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
- [Mehrspaltige Layout-Leitfäden](/de/docs/Web/CSS/Guides/Multicol_layout)
