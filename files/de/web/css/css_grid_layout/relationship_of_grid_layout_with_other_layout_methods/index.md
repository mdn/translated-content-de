---
title: Beziehung des Grid-Layouts zu anderen Layout-Methoden
slug: Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods
l10n:
  sourceCommit: 6de86143d5eab7ec876d0502a6408f0948287287
---

{{CSSRef}}

[CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) ist dafür konzipiert, neben anderen CSS-Komponenten zu funktionieren, als Teil eines vollständigen Systems zur Erstellung von Layouts. Dieser Leitfaden erklärt, wie das Grid-Layout mit anderen Techniken zusammenpasst.

## Grid und Flexbox

Der grundlegende Unterschied zwischen CSS-Grid-Layout und [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) besteht darin, dass Flexbox für ein eindimensionales Layout konzipiert wurde - entweder eine Reihe _oder_ eine Spalte. Grid hingegen wurde für ein zweidimensionales Layout konzipiert - Reihen und Spalten gleichzeitig. Beide Spezifikationen verwenden [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment). Wenn Sie bereits gelernt haben, wie Flexbox funktioniert, sollten Ihnen die Ähnlichkeiten helfen, sich mit Grid vertraut zu machen.

### Eindimensionales versus zweidimensionales Layout

Ein einfaches Beispiel kann den Unterschied zwischen ein- und zweidimensionalen Layouts verdeutlichen.

In diesem ersten Beispiel verwenden wir Flexbox, um eine Reihe von Boxen anzuordnen. Wir haben fünf untergeordnete Elemente in unserem Container und haben den Flex-Eigenschaften Werte zugewiesen, damit sie sich von einer Flex-Basis von 150 Pixeln aus ausdehnen und schrumpfen können.

Wir setzen auch die Eigenschaft {{cssxref("flex-wrap")}} auf `wrap`, sodass, wenn der Platz im Container zu schmal wird, um die Flex-Basis aufrechtzuerhalten, die Elemente in eine neue Zeile umgebrochen werden.

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

Auf dem Bild können Sie sehen, dass zwei Elemente in eine neue Zeile umgebrochen sind. Diese Elemente teilen sich den verfügbaren Platz und richten sich nicht unter den darüber liegenden Elementen aus. Dies liegt daran, dass beim Umbruch von Flex-Elementen jede neue Zeile (oder Spalte, wenn Sie in der Spalte arbeiten) eine unabhängige Flex-Linie im Flex-Container ist. Die Platzverteilung erfolgt über die Flex-Linie.

Eine häufig gestellte Frage ist dann, wie man diese Elemente ausrichtet. Hier benötigt man eine zweidimensionale Layout-Methode: Man will die Ausrichtung nach Reihe und Spalte steuern, und hier kommt Grid ins Spiel.

### Dasselbe Layout mit CSS-Grids

In diesem nächsten Beispiel erstellen wir dasselbe Layout mithilfe von Grid. Diesmal haben wir drei `1fr`-Spaltentracks. Wir müssen nichts an den Elementen selbst einstellen; sie ordnen sich selbst in jede Zelle des erstellten Grids ein. Wie Sie sehen können, bleiben sie in einem strikten Grid und richten sich in Reihen und Spalten aus. Mit fünf Elementen bekommen wir am Ende der zweiten Zeile eine Lücke.

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

Eine wichtige Frage, die Sie sich stellen sollten, wenn Sie sich zwischen Grid oder Flexbox entscheiden:

- Müssen wir das Layout nur nach Reihe _oder_ Spalte steuern? Wenn ja, verwenden Sie Flexbox.
- Müssen wir das Layout nach Reihe _und_ Spalte steuern? Wenn ja, verwenden Sie Grid-Layout.

### Inhalt nach außen oder Layout nach innen?

Zusätzlich zu Unterschieden zwischen ein- und zweidimensional gibt es eine andere Möglichkeit zu entscheiden, ob Sie Flexbox oder Grid für ein Layout verwenden sollten. Flexbox funktioniert vom Inhalt nach außen. Ein idealer Anwendungsfall für Flexbox ist, wenn Sie eine Reihe von Elementen haben und diese gleichmäßig in einem Container verteilen möchten. Sie lassen die Größe des Inhalts darüber entscheiden, wie viel individuellen Platz jedes Element einnimmt. Wenn die Elemente in eine neue Zeile umbrochen werden, bestimmen sie ihre Platzierung basierend auf ihrer Größe und dem verfügbaren Platz _in dieser Zeile_.

Grid funktioniert vom Layout nach innen. Wenn Sie das CSS-Grid-Layout verwenden, erstellen Sie ein Layout und platzieren dann die Elemente darin oder lassen die Auto-Platzierungsregeln die Elemente in die Rasterzellen platzieren, gemäß diesem strikten Grid. Es ist möglich, Spuren zu erstellen, die auf die Größe des Inhalts reagieren, sie ändern jedoch auch die gesamte Spur.

Wenn Sie Flexbox verwenden und dabei feststellen, dass Sie einige der Flexibilität deaktivieren, müssen Sie wahrscheinlich das CSS-Grid-Layout verwenden. Zum Beispiel, wenn Sie eine Breite auf ein Flex-Element setzen, um es mit anderen Elementen in einer darüber liegenden Reihe auszurichten, ist Grid vermutlich die bessere Wahl.

### Box-Ausrichtung

Die meisten Grid-Ausrichtungsfunktionen wurden ursprünglich im [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) definiert. Diese Funktionen ermöglichten zum ersten Mal eine ordnungsgemäße Ausrichtungssteuerung und erleichterten es, eine Box auf der Seite zu zentrieren. Flex-Elemente können sich auf die Höhe des Flex-Containers ausdehnen, was bedeutet, dass gleich hohe Spalten möglich waren. Diese Eigenschaften sind nun im [CSS-Box-Ausrichtungs-](/de/docs/Web/CSS/CSS_box_alignment) Modul definiert und werden in mehreren Layout-Modi verwendet, einschließlich des Grid-Layouts.

Wir werden uns später eingehender mit [Ausrichten von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout) befassen. Hier ist zunächst ein Vergleich zwischen einfachen Beispielen von Flexbox und Grid.

Im ersten Beispiel, das Flexbox verwendet, haben wir einen Container mit drei Elementen darin. Die {{cssxref("min-height")}} des Containers ist festgelegt, sodass sie die Höhe des Flex-Containers definiert. Wir haben {{cssxref("align-items")}} auf dem Flex-Container auf `flex-end` gesetzt, sodass die Elemente am Ende des Flex-Containers ausgerichtet werden. Wir haben auch die Eigenschaft {{cssxref("align-self")}} auf `box1` gesetzt, damit sie die Standardeinstellung überschreibt und sich auf die Höhe des Containers erstreckt, und auf `box2`, damit es sich am Anfang des Flex-Containers ausrichtet.

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

Dieses Beispiel verwendet ein Grid, um dasselbe Layout zu erstellen. Wir verwenden die Box-Ausrichtungseigenschaften, wie sie auf ein Grid-Layout angewendet werden. Wir richten auf `start` und `end` aus. (Wir könnten die {{cssxref("content-position")}} Synonyme `flex-start` und `flex-end` verwenden.) Im Falle eines Grid-Layouts richten wir die Elemente innerhalb ihres Grid-Bereichs aus. In diesem Fall ist das eine einzelne Rasterzelle, aber es könnte ein Bereich aus mehreren Rasterzellen sein.

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

Wir haben bereits gesehen, wie die `fr`-Einheit funktioniert, um einem bestimmten Anteil des verfügbaren Raums im Grid-Container unseren Grid-Tracks zuzuweisen. Die `fr`-Einheit, kombiniert mit der {{cssxref("minmax", "minmax()")}} Funktion, kann uns ein sehr ähnliches Verhalten wie die `flex`-Eigenschaften in Flexbox bieten, während immer noch die Erstellung eines Layouts in zwei Dimensionen ermöglicht wird.

Wenn wir auf das Beispiel zurückblicken, bei dem wir den Unterschied zwischen ein- und zweidimensionale Layouts demonstriert haben, können Sie sehen, dass es einen Unterschied gibt, wie die beiden Layouts responsiv arbeiten. Mit dem Flex-Layout, wenn wir unser Fenster breiter und kleiner ziehen, leistet Flexbox gute Arbeit, indem es die Anzahl der Elemente in jeder Zeile an den verfügbaren Platz anpasst. Wenn wir viel Platz haben, können alle fünf Elemente in eine Zeile passen. Wenn wir einen sehr schmalen Container haben, haben wir möglicherweise nur Platz für eines.

Im Vergleich dazu hat die Grid-Version immer drei Spaltentracks. Die Tracks selbst werden wachsen und schrumpfen, aber es gibt immer drei, da wir drei bei der Definition unseres Grids angefordert haben.

#### Automatisches Füllen von Grid-Tracks

Wir können Grid verwenden, um einen ähnlichen Effekt wie Flexbox zu erzeugen, während wir immer noch den Inhalt in strikten Reihen und Spalten angeordnet halten, indem wir unsere Track-Liste mit der Wiederholungsnotation und den Eigenschaften `auto-fill` und `auto-fit` erstellen.

Im nächsten Beispiel haben wir das `auto-fill` Schlüsselwort statt einer ganzen Zahl in der Wiederholungsnotation verwendet und die Track-Liste auf 200 Pixel gesetzt. Dies bedeutet, dass Grid so viele 200 Pixel breite Spaltentracks erstellt, wie im Container passen.

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

Dies ist nicht ganz dasselbe wie Flexbox. Im Flexbox-Beispiel sind die Elemente größer als die 200 Pixel Basis vor dem Umbruch. Wir können dasselbe in Grid erreichen, indem wir `auto-fit` und die {{cssxref("minmax", "minmax()")}} Funktion kombinieren.

In diesem Beispiel erstellen wir automatisch gefüllte Tracks mit `minmax`. Wir möchten, dass unsere Tracks mindestens 200 Pixel haben, also setzen wir das Maximum auf `1fr`. Sobald der Browser berechnet hat, wie oft 200 Pixel in den Container passen– unter Berücksichtigung von Rasterlücken – wird das `1fr` Maximum als Anweisung behandelt, den restlichen Platz zwischen den Elementen aufzuteilen.

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

Mit Grid-Layout können wir ein Grid mit einer dynamischen Anzahl von flexiblen Tracks erstellen und die Elemente auf dem Grid ausrichten, indem sie in Reihen und Spalten angeordnet werden.

## Grid und absolut positionierte Elemente

Grid interagiert mit [absolut positionierten](/de/docs/Web/CSS/position#absolute_positioning) Elementen, was nützlich sein kann, wenn Sie ein Element innerhalb eines Grids oder Grid-Bereichs positionieren möchten. Die Spezifikation definiert das Verhalten, wenn ein Grid-Container ein enthaltenes Block ist und ein Elternteil des absolut positionierten Elements.

### Ein Grid-Container als enthaltenes Block

Um den Grid-Container zu einem [enthaltenen Block](/de/docs/Web/CSS/CSS_display/Containing_block) zu machen, müssen Sie die {{cssxref("position")}} Eigenschaft mit einem Wert von `relative` auf den Container setzen, genau so, wie Sie einen enthaltenen Block für andere absolut positionierten Elemente erstellen würden. Sobald Sie dies getan haben, nimmt ein Grid-Element mit `position: absolute` den Grid-Container oder, wenn das Element auch eine Grid-Position hat, den Bereich des Grids, in den es platziert wird, als enthaltenes Block.

Im folgenden Beispiel haben wir eine Wrapper mit vier untergeordneten Elementen. Element drei ist absolut positioniert und auch im Grid mit zeilenbasierter Platzierung platziert. Der Grid-Container hat `position: relative` und wird somit zum Positionierungskontext dieses Elements.

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

Sie können sehen, dass das Element den Bereich von der Grid-Spaltenlinie 2 bis 4 einnimmt und nach Linie 1 beginnt. Dann wird es in diesem Bereich mithilfe der top- und left-Eigenschaften versetzt. Aber es wurde aus dem Fluss entfernt, wie es für absolut positionierte Elemente üblich ist, und die Auto-Platzierungsregeln platzieren nun Elemente in denselben Bereich. Das Element führt auch nicht dazu, dass eine zusätzliche Zeile erstellt wird, um bis zur Zeilenlinie 3 zu spannen.

Wenn wir `position: absolute` aus den Regeln für `.box3` entfernen, können Sie sehen, wie es ohne die Positionierung angezeigt wird.

### Ein Grid-Container als Elternteil

Wenn das absolut positionierte Kind einen Grid-Container als Eltern hat, aber dieser Container keinen neuen Positionierungskontext schafft, dann wird es aus dem Fluss genommen, wie im vorherigen Beispiel. Der _Positionierungskontext_ ist das Element, relativ zu dem das absolut positionierte Element positioniert wird. Der Positionierungskontext wird das Element sein, das einen Positionierungskontext schafft, wie es für andere Layout-Methoden üblich ist. In unserem Fall, wenn wir `position: relative` vom Wrapper oben entfernen, ist der Positionierungskontext das Ansichtsfenster, wie auf diesem Bild gezeigt.

![Image of grid container as parent](2_abspos_example.png)

Wieder einmal, das Element nimmt nicht am Grid-Layout in Bezug auf die Größenbestimmung oder wenn andere Elemente automatisch platziert werden teil.

### Mit einem Grid-Bereich als Elternteil

Wenn das absolut positionierte Element innerhalb eines Grid-Bereichs ist, dann können Sie einen Positionierungskontext auf diesem Bereich erstellen. In diesem Beispiel haben wir unser Grid wie zuvor, aber diesmal haben wir ein Element innerhalb von `.box3` des Grids eingefügt.

Wir haben `.box3` relative Position gegeben und dann das Unterelement mit den Versatz-Eigenschaften positioniert. In diesem Fall ist der Positionierungskontext der Grid-Bereich.

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

## Grid und `display: contents`

Eine letzte zu erwähnende Interaktion ist die Interaktion zwischen dem CSS-Grid-Layout und `display: contents`, definiert im [CSS-Display](/de/docs/Web/CSS/CSS_display) Modul. Wenn die {{cssxref("display")}} Eigenschaft auf `contents` gesetzt ist, erzeugt das Element selbst keine Boxen, aber seine Kinder und Pseudo-Elemente erzeugen weiterhin Boxen wie gewohnt. Dies bedeutet, dass das Element für die Zwecke der Box-Erzeugung und des Layouts so behandelt wird, als wäre es durch seine Kinder und Pseudo-Elemente im Dokumentbaum ersetzt worden.

Wenn Sie ein Element auf `display: contents` setzen, verschwindet die Box, die es normalerweise erzeugen würde, und die Boxen der Kind-Elemente erscheinen, als wären sie eine Ebene aufgestiegen. Das bedeutet, dass Kinder eines Grid-Elements zu Grid-Elementen werden können. Klingt seltsam? Hier ist ein Beispiel.

### Grid-Layout mit verschachtelten Kind-Elementen

In diesem Beispiel wird das erste Element unseres Grids so eingestellt, dass es alle drei Spaltentracks spannt. Es enthält drei verschachtelte Elemente. Da diese Elemente keine direkten Kinder sind, werden sie nicht Teil des Grid-Layouts und werden daher im regulären Block-Layout angezeigt.

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

### Verwendung von `display: contents`

Wenn wir jetzt `display: contents` zu den Regeln für `box1` hinzufügen, verschwindet die Box für dieses Element und die Unterelemente werden nun zu Grid-Elementen und ordnen sich entsprechend den Auto-Platzierungsregeln an.

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

Dies kann eine Möglichkeit sein, Elemente, die in das Grid verschachtelt sind, so zu verhalten, als wären sie Teil des Grids. Sie können `display: contents` auf ähnliche Weise mit Flexbox verwenden, um verschachtelte Elemente zu Flex-Elementen werden zu lassen.

Wie Sie aus diesem Leitfaden sehen können, ist das CSS-Grid-Layout nur ein Teil Ihres Werkzeugsatzes. Scheuen Sie sich nicht, es mit anderen Methoden der Layout-Erstellung zu kombinieren, um die unterschiedlichen Effekte zu erzielen, die Sie benötigen.

## Siehe auch

- [Flexbox-Leitfäden](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
- [Mehrspalten-Layout-Leitfäden](/de/docs/Web/CSS/CSS_multicol_layout)
