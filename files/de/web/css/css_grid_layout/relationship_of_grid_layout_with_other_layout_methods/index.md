---
title: Beziehung des Grid-Layouts zu anderen Layout-Methoden
slug: Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

[CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) ist so konzipiert, dass es zusammen mit anderen Teilen von CSS funktioniert und Teil eines vollständigen Systems zur Erstellung von Layouts ist. Dieser Leitfaden erklärt, wie Grid-Layout sich mit anderen Techniken verbindet.

## Grid und Flexbox

Der grundlegende Unterschied zwischen CSS Grid-Layout und [CSS Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) besteht darin, dass Flexbox für das Layout in einer Dimension entwickelt wurde - entweder einer Reihe _oder_ einer Spalte. Grid wurde für zweidimensionale Layouts entwickelt - Reihen und Spalten gleichzeitig. Beide Spezifikationen nutzen die [CSS Box-Alignment](/de/docs/Web/CSS/CSS_box_alignment) Funktionen. Wenn Sie bereits gelernt haben, wie man Flexbox verwendet, sollten Ihnen die Ähnlichkeiten helfen, Grid zu verstehen.

### Eindimensionales versus zweidimensionales Layout

Ein einfaches Beispiel kann den Unterschied zwischen eindimensionalen und zweidimensionalen Layouts demonstrieren.

In diesem ersten Beispiel verwenden wir Flexbox, um eine Reihe von Boxen anzuordnen. Wir haben fünf Kind-Elemente in unserem Container und haben den Flex-Eigenschaften Werte gegeben, sodass sie von einer Flex-Basis von 150 Pixeln wachsen und schrumpfen können.

Wir setzen auch die {{cssxref("flex-wrap")}} Eigenschaft auf `wrap`, sodass, wenn der Platz im Container zu eng wird, um die Flex-Basis zu halten, die Elemente in eine neue Reihe umbrechen.

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

Auf dem Bild können Sie sehen, dass zwei Elemente in eine neue Zeile umgebrochen sind. Diese Elemente teilen sich den verfügbaren Platz und richten sich nicht unter den darüber liegenden Elementen aus. Dies liegt daran, dass beim Umbruch von Flex-Elementen jede neue Zeile (oder Spalte beim Arbeiten mit Spalten) eine unabhängige Flex-Linie im Flex-Container ist. Die Platzverteilung erfolgt entlang der Flex-Linie.

Eine häufige Frage ist dann, wie man diese Elemente ausrichten kann. Hierbei handelt es sich um eine zweidimensionale Layout-Methode: Sie möchten die Ausrichtung nach Reihe und Spalte steuern, und hier kommt das Grid ins Spiel.

### Das gleiche Layout mit CSS-Grids

Im nächsten Beispiel erstellen wir das gleiche Layout unter Verwendung von Grid. Diesmal haben wir drei `1fr`-Spaltenspuren. Wir müssen nichts an den Elementen selbst einstellen; sie legen sich jeweils in eine Zelle des erstellten Grids. Wie Sie sehen können, bleiben sie in einem strengen Raster und richten sich in Reihen und Spalten aus. Mit fünf Elementen entsteht eine Lücke am Ende der zweiten Reihe.

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

Eine wichtige Frage, die Sie sich stellen sollten, wenn Sie sich zwischen Grid und Flexbox entscheiden, lautet:

- Müssen wir das Layout nur nach Reihe _oder_ Spalte steuern? Wenn ja, verwenden Sie Flexbox.
- Müssen wir das Layout nach Reihe _und_ Spalte steuern? Wenn ja, verwenden Sie Grid-Layout.

### Inhalt von außen oder Layout von innen?

Zusätzlich zum Unterschied zwischen eindimensional und zweidimensional gibt es eine weitere Möglichkeit zu entscheiden, ob Sie Flexbox oder Grid für ein Layout verwenden sollten. Flexbox arbeitet von Inhalt nach außen. Ein idealer Anwendungsfall für Flexbox ist, wenn Sie eine Reihe von Elementen haben und diese gleichmäßig in einem Container verteilen möchten. Sie lassen die Größe des Inhalts entscheiden, wie viel individuellen Platz jedes Element einnimmt. Wenn die Elemente in eine neue Zeile umbrechen, ermitteln sie ihren Abstand basierend auf ihrer Größe und dem verfügbaren Platz _in dieser Zeile_.

Grid arbeitet vom Layout nach innen. Wenn Sie das CSS-Grid-Layout verwenden, erstellen Sie ein Layout und platzieren dann Elemente darin, oder Sie erlauben den Auto-Platzierungsregeln, die Elemente in die Grid-Zellen gemäß diesem strengen Grid zu platzieren. Es ist möglich, Spuren zu erstellen, die auf die Größe des Inhalts reagieren, jedoch ändern sie auch die gesamte Spur.

Wenn Sie Flexbox verwenden und feststellen, dass Sie einige der Flexibilität deaktivieren, müssen Sie wahrscheinlich das CSS Grid-Layout verwenden. Zum Beispiel, wenn Sie eine Breite auf ein Flex-Element setzen, um es mit anderen Elementen in einer darüber liegenden Reihe auszurichten, ist ein Grid wahrscheinlich eine bessere Wahl.

### Box-Alignment

Die meisten Grid-Ausrichtungsfunktionen wurden ursprünglich im [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) definiert. Diese Funktionen boten erstmals eine ordnungsgemäße Ausrichtungskontrolle und ermöglichten es, eine Box einfach auf der Seite zu zentrieren. Flex-Elemente können sich auf die Höhe des Flex-Containers strecken, was gleich hohe Spalten ermöglicht. Diese Eigenschaften werden jetzt im [CSS Box-Alignment](/de/docs/Web/CSS/CSS_box_alignment) Modul definiert und werden in mehreren Layout-Modi verwendet, einschließlich des Grid-Layouts.

Wir werden uns später genauer mit dem [Ausrichten von Elementen im CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout) befassen. Für den Moment hier ein Vergleich zwischen einfachen Beispielen von Flexbox und Grid.

Im ersten Beispiel, das Flexbox verwendet, haben wir einen Container mit drei enthaltenen Elementen. Die {{cssxref("min-height")}} des Containers ist festgelegt, sodass sie die Höhe des Flex-Containers definiert. Wir haben {{cssxref("align-items")}} auf den Flex-Container `flex-end` gesetzt, damit sich die Elemente am Ende des Flex-Containers ausrichten. Wir haben auch die {{cssxref("align-self")}} Eigenschaft auf `box1` gesetzt, damit es die Standardwerte überschreibt und sich auf die Höhe des Containers dehnt und auf `box2`, damit es sich am Anfang des Flex-Containers ausrichtet.

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

In diesem Beispiel wird ein Grid verwendet, um das gleiche Layout zu erstellen. Wir verwenden die Box-Ausrichtungs-Eigenschaften, wie sie in einem Grid-Layout gelten. Wir richten uns an `start` und `end` aus. (Wir hätten die {{cssxref("content-position")}} Synonyme `flex-start` und `flex-end` verwenden können.) Im Fall eines Grid-Layouts richten wir die Elemente innerhalb ihrer Grid-Fläche aus. In diesem Fall ist das eine einzelne Grid-Zelle, aber es könnte auch ein Bereich aus mehreren Grid-Zellen sein.

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

Wir haben bereits gesehen, wie die `fr`-Einheit funktioniert, um einen Anteil des verfügbaren Raums im Grid-Container unseren Grid-Spuren zuzuweisen. Die `fr`-Einheit kann, in Kombination mit der {{cssxref("minmax", "minmax()")}} Funktion, ein sehr ähnliches Verhalten wie die `flex` Eigenschaften in Flexbox bieten und dennoch die Erstellung eines Layouts in zwei Dimensionen ermöglichen.

Wenn wir uns das Beispiel ansehen, wo wir den Unterschied zwischen eindimensionalen und zweidimensionalen Layouts demonstriert haben, können Sie sehen, dass es einen Unterschied zwischen den beiden Layouts in Bezug auf responsives Verhalten gibt. Mit dem Flex-Layout, wenn wir unser Fenster breiter und schmaler ziehen, passt sich das Flexbox-Layout gut an, indem es die Anzahl der Elemente in jeder Reihe entsprechend dem verfügbaren Raum anpasst. Wenn wir viel Platz haben, passen alle fünf Elemente in eine Reihe. Haben wir einen sehr schmalen Container, haben wir möglicherweise nur Platz für eines.

Im Vergleich dazu hat die Grid-Version immer drei Spaltenspuren. Die Spuren selbst werden wachsen und schrumpfen, aber es gibt immer drei, da wir beim Definieren unseres Grids drei angefordert haben.

#### Auto-Filling von Grid-Spuren

Wir können Grid nutzen, um einen ähnlichen Effekt wie Flexbox zu erzielen, während wir den Inhalt weiterhin in strenge Reihen und Spalten anordnen, indem wir unsere Spurauflistung mit Wiederholungsnotation und den Eigenschaften `auto-fill` und `auto-fit` erstellen.

Im nächsten Beispiel haben wir das Schlüsselwort `auto-fill` anstelle einer Zahl in der Wiederholungsnotation verwendet und die Spurauflistung auf 200 Pixel gesetzt. Das bedeutet, dass das Grid so viele 200-Pixel-Spaltenspuren erstellt, wie in den Container passen.

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

Das ist nicht ganz dasselbe wie Flexbox. Im Flexbox-Beispiel sind die Elemente größer als die 200-Pixel-Basis, bevor sie umbrechen. Wir können das Gleiche in Grid erreichen, indem wir `auto-fit` und die {{cssxref("minmax", "minmax()")}} Funktion kombinieren.

In diesem Beispiel erstellen wir mit `minmax` autofilled Spuren. Wir wollen, dass unsere Spuren mindestens 200 Pixel groß sind, also setzen wir das Maximum auf `1fr`. Sobald der Browser berechnet hat, wie oft 200 Pixel in den Container passen (unter Berücksichtigung der Grid-Abstände), wird er das `1fr` Maximum als Anweisung behandeln, den verbleibenden Platz zwischen den Elementen aufzuteilen.

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

Mit dem Grid-Layout können wir ein Grid mit einer dynamischen Anzahl flexibler Spuren erstellen und die Elemente im Grid in Reihen und Spalten ausgerichtet anordnen.

## Grid und absolut positionierte Elemente

Grid interagiert mit [absolut positionierten](/de/docs/Web/CSS/position#absolute_positioning) Elementen, was nützlich sein kann, wenn Sie ein Element innerhalb eines Grids oder Grid-Bereichs positionieren möchten. Die Spezifikation definiert das Verhalten, wenn ein Grid-Container einen Block enthält und übergeordnetes Element des absolut positionierten Elements ist.

### Ein Grid-Container als enthaltender Block

Um den Grid-Container zu einem [enthaltenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) zu machen, müssen Sie die {{cssxref("position")}} Eigenschaft mit dem Wert `relative` zum Container hinzufügen, so wie Sie es tun würden, um einen enthaltenden Block für andere absolut positionierte Elemente zu erstellen. Sobald Sie dies getan haben, wird ein Grid-Element mit `position: absolute` seinen enthaltenden Block als den Grid-Container oder, wenn das Element auch eine Grid-Position hat, den Bereich des Grids, in den es platziert ist, nehmen.

Im folgenden Beispiel haben wir einen Wrapper, der vier untergeordnete Elemente enthält. Element drei ist absolut positioniert und ebenfalls auf dem Grid mit linienbasierter Platzierung platziert. Der Grid-Container hat `position: relative` und wird so zum Positionierungskontext dieses Elements.

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

Sie können sehen, dass das Element den Bereich von Grid-Spaltenlinie 2 bis 4 übernimmt und nach Linie 1 startet. Dann wird es in diesem Bereich mit den Eigenschaften top und left versetzt. Es wurde jedoch wie üblich für absolut positionierte Elemente aus dem Fluss genommen, sodass die Auto-Platzierungsregeln nun Gegenstände in den gleichen Raum platzieren. Das Element führt auch nicht dazu, dass eine zusätzliche Zeile erstellt wird, um auf Zeilenlinie 3 zu spannen.

Wenn wir `position: absolute` aus den Regeln für `.box3` entfernen, können Sie sehen, wie es ohne die Positionierung angezeigt werden würde.

### Ein Grid-Container als übergeordnetes Element

Wenn das absolut positionierte Kind einen Grid-Container als übergeordnetes Element hat, dieser Container jedoch keinen neuen Positionierungskontext erstellt, dann wird es wie im vorherigen Beispiel aus dem Fluss genommen. Der _Positionierungskontext_ ist das Element, zu dem das absolut positionierte Element relativ ist. Der Positionierungskontext ist das Element, das einen Positionierungskontext erstellt, wie es bei anderen Layout-Methoden üblich ist. In unserem Fall, wenn wir `position: relative` aus dem Wrapper oben entfernen, ist der Positionierungskontext das Viewport, wie auf diesem Bild gezeigt.

![Bild von Grid-Container als Elternteil](2_abspos_example.png)

Wieder einmal nimmt das Element nicht am Grid-Layout in Bezug auf Größe oder beim automatische Platzieren teil.

### Mit einem Grid-Bereich als Elternteil

Wenn sich das absolut positionierte Element innerhalb eines Grid-Bereichs befindet, können Sie einen Positionierungskontext auf diesem Bereich erstellen. In diesem Beispiel haben wir unser Grid wie zuvor, aber diesmal haben wir ein Element innerhalb von `.box3` des Grids verschachtelt.

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
  color: #000;
  padding: 10px;
}
```

{{ EmbedLiveSample('With_a_grid_area_as_the_parent', '500', '460') }}

## Grid und display: contents

Eine letzte erwähnenswerte Interaktion ist die Interaktion zwischen CSS-Grid-Layout und `display: contents`, definiert im [CSS-Display](/de/docs/Web/CSS/CSS_display) Modul. Wenn die {{cssxref("display")}} Eigenschaft auf `contents` gesetzt ist, erzeugt das Element selbst keine Boxen, aber seine Kinder und Pseudo-Elemente erzeugen Boxen wie gewohnt. Das bedeutet, dass das Element für die Zwecke der Box-Erstellung und des Layouts so behandelt wird, als ob es durch seine Kinder und Pseudo-Elemente im Dokumentbaum ersetzt wurde.

Wenn Sie ein Element auf `display: contents` setzen, verschwindet die Box, die es normalerweise erstellen würde, und die Boxen der untergeordneten Elemente erscheinen, als wären sie eine Ebene höher gestiegen. Dies bedeutet, dass Kinder eines Grid-Elements zu Grid-Elementen werden können. Hört sich seltsam an? Hier ist ein Beispiel.

### Grid-Layout mit geschachtelten Kind-Elementen

In diesem Beispiel ist das erste Element unseres Grids so eingestellt, dass es alle drei Spaltenspuren überspannt. Es enthält drei geschachtelte Elemente. Da diese Elemente keine direkten Kinder sind, werden sie nicht Teil des Grid-Layouts und werden daher im regulären Block-Layout angezeigt.

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

Wenn wir jetzt `display: contents` zu den Regeln für `box1` hinzufügen, verschwindet die Box für dieses Element und die Unterelemente werden nun zu Grid-Elementen und legen sich nach den Auto-Platzierungsregeln aus.

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

Dies kann eine Möglichkeit sein, um Elemente in das Grid zu bringen, sodass sie sich wie Teil des Grids verhalten. Sie können `display: contents` auch in ähnlicher Weise mit Flexbox verwenden, um geschachtelte Elemente zu Flex-Elementen zu machen.

Wie in diesem Leitfaden zu sehen ist, ist CSS-Grid-Layout nur ein Teil Ihres Werkzeugsatzes. Scheuen Sie sich nicht, es mit anderen Methoden zur Erstellung von Layouts zu kombinieren, um die verschiedenen benötigten Effekte zu erzielen.

## Siehe auch

- [Flexbox-Leitfäden](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
- [Mehrspalten-Layout-Leitfäden](/de/docs/Web/CSS/CSS_multicol_layout)
