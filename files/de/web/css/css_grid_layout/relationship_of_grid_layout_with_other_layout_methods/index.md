---
title: Beziehung des Grid-Layouts zu anderen Layoutmethoden
short-title: Grid und andere Layouts
slug: Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

[CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) wurde entwickelt, um neben anderen Bestandteilen von CSS als Teil eines vollständigen Systems zur Erstellung von Layouts zu funktionieren. Dieser Leitfaden erklärt, wie sich Grid-Layout mit anderen Techniken zusammenfügt.

## Grid und Flexbox

Der grundlegende Unterschied zwischen CSS Grid Layout und [CSS Flexbox Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) besteht darin, dass Flexbox für Layouts in einer Dimension - entweder eine Zeile _oder_ eine Spalte - entworfen wurde. Grid wurde für zweidimensionale Layouts - Zeilen und Spalten gleichzeitig - entwickelt. Beide Spezifikationen verwenden [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment)-Funktionen. Wenn Sie bereits gelernt haben, wie man Flexbox verwendet, sollten die Ähnlichkeiten Ihnen helfen, sich mit Grid vertraut zu machen.

### Eindimensionales versus zweidimensionales Layout

Ein einfaches Beispiel kann den Unterschied zwischen eindimensionalen und zweidimensionalen Layouts demonstrieren.

Im ersten Beispiel verwenden wir Flexbox, um eine Reihe von Boxen zu layouten. Wir haben fünf Kindelemente in unserem Container und wir haben den Flex-Eigenschaften Werte gegeben, sodass sie von einer Flex-Basis von 150 Pixeln wachsen und schrumpfen können.

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

Auf dem Bild sehen Sie, dass zwei Elemente in eine neue Zeile umgebrochen wurden. Diese Elemente teilen sich den verfügbaren Platz und stehen nicht untereinander im Einklang mit den Elementen darüber. Das liegt daran, dass, wenn Sie Flex-Elemente umbrechen, jede neue Zeile (oder Spalte beim Arbeiten mit Spalten) eine unabhängige Flex-Linie im Flex-Container ist. Die Verteilung des Platzes erfolgt über die Flex-Linie.

Eine häufig gestellte Frage ist, wie man diese Elemente in Einklang bringt. Hierbei brauchen Sie eine zweidimensionale Layoutmethode: Sie möchten die Ausrichtung von Zeile und Spalte steuern, und hier kommt Grid ins Spiel.

### Dasselbe Layout mit CSS Grids

Im nächsten Beispiel erstellen wir dasselbe Layout mit Grid. Dieses Mal haben wir drei `1fr`-Spurspalten. Wir müssen nichts an den Elementen selbst einstellen; sie legen sich selbst in jede Zelle des erstellten Grids. Wie Sie sehen können, bleiben sie in einem strikten Grid, das sich in Zeilen und Spalten ausrichtet. Mit fünf Elementen bekommen wir eine Lücke am Ende der zweiten Zeile.

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

Eine wichtige Frage, die Sie sich stellen sollten, wenn Sie zwischen Grid oder Flexbox entscheiden, lautet:

- Müssen wir das Layout nur nach Zeile _oder_ Spalte steuern? Wenn ja, verwenden Sie Flexbox.
- Müssen wir das Layout nach Zeile _und_ Spalte steuern? Wenn ja, verwenden Sie das Grid-Layout.

### Content out oder Layout in?

Zusätzlich zur Unterscheidung zwischen eindimensional und zweidimensional gibt es eine weitere Methode, um zu entscheiden, ob Sie Flexbox oder Grid für ein Layout verwenden sollten. Flexbox arbeitet von innen nach außen. Ein ideales Anwendungsbeispiel für Flexbox ist, wenn Sie eine Reihe von Elementen haben und diese gleichmäßig in einem Container verteilen möchten. Sie lassen die Größe des Inhalts entscheiden, wie viel Platz jedes Element einnimmt. Wenn die Elemente in eine neue Zeile brechen, werden sie ihren Abstand basierend auf ihrer Größe und dem verfügbaren Platz _in dieser Zeile_ ermitteln.

Grid arbeitet von außen nach innen. Wenn Sie CSS Grid Layout verwenden, erstellen Sie ein Layout und platzieren dann Elemente darin oder lassen die Regeln zur automatischen Platzierung die Elemente gemäß diesem strikten Grid in die Zellen setzen. Es ist möglich, Spuren zu erstellen, die auf die Größe des Inhalts reagieren, aber sie verändern auch die gesamte Spur.

Wenn Sie Flexbox verwenden und feststellen, dass Sie einige der Flexibilität deaktivieren, müssen Sie wahrscheinlich CSS Grid Layout verwenden. Zum Beispiel, wenn Sie eine Breite auf ein Flex-Element setzen, damit es sich mit anderen Elementen in einer darüberliegenden Zeile ausrichtet, ist Grid wahrscheinlich die bessere Wahl.

### Box-Ausrichtung

Die meisten Grid-Ausrichtungsfunktionen wurden ursprünglich im [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) definiert. Diese Funktionen boten zum ersten Mal eine ordentliche Ausrichtungskontrolle und machten es einfach, eine Box auf der Seite zu zentrieren. Flex-Elemente können sich auf die Höhe des Flex-Containers strecken, was bedeutete, dass gleich hohe Spalten möglich waren. Diese Eigenschaften sind jetzt im [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment)-Modul definiert und werden in mehreren Layout-Modi verwendet, einschließlich Grid-Layout.

Wir werden uns später eingehend mit [Ausrichten von Elementen im CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout) beschäftigen. Fürs Erste ist hier ein Vergleich zwischen Flexbox- und Grid-Beispielen.

Im ersten Beispiel, das Flexbox verwendet, haben wir einen Container mit drei Elementen darin. Die {{cssxref("min-height")}} des Containers ist festgelegt, sodass sie die Höhe des Flex-Containers definiert. Wir haben {{cssxref("align-items")}} auf dem Flex-Container auf `flex-end` gesetzt, sodass die Elemente am Ende des Flex-Containers ausgerichtet werden. Wir haben auch die {{cssxref("align-self")}}-Eigenschaft auf `box1` gesetzt, damit sie die Standardeinstellung überschreibt und sich der Höhe des Containers anpasst, und auf `box2`, sodass es sich am Anfang des Flex-Containers ausrichtet.

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

Dieses Beispiel verwendet ein Grid, um dasselbe Layout zu erstellen. Wir verwenden die Box-Ausrichtungseigenschaften, wie sie auf ein Grid-Layout angewendet werden. Wir richten auf `start` und `end` aus. (Wir könnten die {{cssxref("content-position")}} Synonyme `flex-start` und `flex-end` verwenden.) Im Fall eines Grid-Layouts richten wir die Elemente innerhalb ihres Grid-Bereichs aus. In diesem Fall ist das eine einzelne Grid-Zelle, aber es könnte auch ein Bereich aus mehreren Grid-Zellen sein.

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

Wir haben bereits gesehen, wie die `fr`-Einheit funktioniert, um einen Anteil des verfügbaren Platzes im Grid-Container auf unsere Grid-Spuren zu übertragen. Die `fr`-Einheit, kombiniert mit der {{cssxref("minmax", "minmax()")}} Funktion, kann uns ein sehr ähnliches Verhalten zu den `flex`-Eigenschaften in Flexbox geben, während sie immer noch die Erstellung eines Layouts in zwei Dimensionen ermöglicht.

Wenn wir auf das Beispiel zurückblicken, in dem wir den Unterschied zwischen eindimensionalen und zweidimensionalen Layouts demonstriert haben, können wir erkennen, dass es einen Unterschied in der Art und Weise gibt, wie die beiden Layouts responsiv arbeiten. Mit dem Flex-Layout, wenn wir unser Fenster breiter oder schmaler ziehen, leistet Flexbox gute Arbeit, die Anzahl der Elemente in jeder Zeile entsprechend dem verfügbaren Platz anzupassen. Wenn wir viel Platz haben, können alle fünf Elemente auf eine Zeile passen. Wenn wir einen sehr schmalen Container haben, haben wir vielleicht nur Platz für eines.

Im Vergleich dazu hat die Grid-Version immer drei Spaltenspuren. Die Spuren selbst werden wachsen und schrumpfen, aber es gibt immer drei, weil wir beim Definieren unseres Grids drei angefordert haben.

#### Automatisches Auffüllen der Grid-Spuren

Wir können mithilfe von Grid einen ähnlichen Effekt wie bei Flexbox erzielen, während wir immer noch den Inhalt in strengen Zeilen und Spalten anordnen. Dazu erstellen wir unsere Spurauflistung mit Wiederholungsnotation und den Eigenschaften `auto-fill` und `auto-fit`.

Im nächsten Beispiel haben wir das `auto-fill`-Schlüsselwort anstelle eines Integers in der Wiederholungsnotation verwendet und die Spurauflistung auf 200 Pixel gesetzt. Das bedeutet, dass Grid so viele 200-Pixel-Spaltenspuren erstellt, wie im Container Platz finden.

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

Dies ist nicht ganz dasselbe wie bei Flexbox. Im Flexbox-Beispiel sind die Elemente größer als die 200-Pixel-Basis, bevor sie umbrechen. Wir können dasselbe in Grid erreichen, indem wir `auto-fit` und die {{cssxref("minmax", "minmax()")}}-Funktion kombinieren.

Im Beispiel erstellen wir automatisch aufgefüllte Spuren mit `minmax`. Wir möchten, dass unsere Spuren mindestens 200 Pixel betragen, also setzen wir das Maximum auf `1fr`. Sobald der Browser berechnet hat, wie oft 200 Pixel in den Container passen – dabei auch die Grid-Lücken berücksichtigend – wird er das 1fr Maximum als Anweisung behandeln, den verbleibenden Platz zwischen den Elementen zu teilen.

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

Mit Grid-Layout können wir ein Grid mit einer dynamischen Anzahl von flexiblen Spuren erstellen und die Elemente auf dem Grid nach Zeilen und Spalten ausrichten.

## Grid und absolut positionierte Elemente

Grid interagiert mit [absolut positionierten](/de/docs/Web/CSS/position#absolute_positioning) Elementen, was nützlich sein kann, wenn Sie ein Element innerhalb eines Grids oder Grid-Bereichs positionieren möchten. Die Spezifikation definiert das Verhalten, wenn ein Grid-Container ein Umgebungsblock und ein Elternelement des absolut positionierten Elements ist.

### Ein Grid-Container als umgebender Block

Um den Grid-Container zu einem [umgebenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) zu machen, müssen Sie die {{cssxref("position")}}-Eigenschaft mit einem Wert von `relative` zum Container hinzufügen, so wie Sie einen umgebenden Block für alle anderen absolut positionierten Elemente erstellen würden. Sobald Sie dies getan haben, wird, wenn Sie einem Grid-Element `position: absolute` geben, als umgebender Block der Grid-Container genommen oder, wenn das Element auch eine Grid-Position hat, der Bereich des Grids, in den es platziert wird.

Im unten stehenden Beispiel haben wir eine Wrapper, der vier Kindelemente enthält. Element drei ist absolut positioniert und auch im Grid mittels linienbasierter Platzierung platziert. Der Grid-Container hat `position: relative` und wird somit der Positionierungskontext dieses Elements.

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

Sie können sehen, dass das Element den Bereich von Grid-Spaltenlinie 2 bis 4 einnimmt und nach Linie 1 beginnt. Es wird jedoch in diesem Bereich mit den Eigenschaften top und left versetzt. Es wurde jedoch aus dem Fluss genommen, wie es bei absolut positionierten Elementen üblich ist, und daher platzieren die automatischen Platzierungsregeln jetzt auch Elemente in denselben Raum. Das Element verursacht nicht, dass die zusätzliche Zeile erstellt wird, um bis zur Zeilenlinie 3 zu spannen.

Wenn wir `position: absolute` aus den Regeln für `.box3` entfernen, können Sie sehen, wie es ohne die Positionierung angezeigt wird.

### Ein Grid-Container als Elternteil

Wenn das absolut positionierte Kind einen Grid-Container als Elternteil hat, dieser Container jedoch keinen neuen Positionierungskontext erstellt, wird es aus dem Fluss genommen, wie im vorherigen Beispiel. Der _Positionierungskontext_ ist das Element, das relativ zum absolut positionierten Element positioniert wird. Der Positionierungskontext wird das Element sein, das einen Positionierungskontext erstellt, wie es bei anderen Layoutmethoden üblich ist. In unserem Fall, wenn wir `position: relative` aus dem Wrapper oben entfernen, ist der Positionierungskontext der Viewport, wie in diesem Bild gezeigt.

![Bild von Grid-Container als Elternteil](2_abspos_example.png)

Auch hier nimmt das Element nicht mehr an der Grid-Layout-Berechnung teil, weder in Bezug auf die Größe noch wenn andere Elemente automatisch platziert werden.

### Mit einem Grid-Bereich als Eltern

Wenn das absolut positionierte Element innerhalb eines Grid-Bereichs verschachtelt ist, können Sie auf diesem Bereich einen Positionierungskontext erstellen. In diesem Beispiel haben wir unser Grid wie zuvor, aber dieses Mal haben wir ein Element innerhalb von `.box3` des Grids verschachtelt.

Wir haben `.box3` positionsrelativ gegeben und dann das Unterobjekt mit den Versatzeigenschaften positioniert. In diesem Fall ist der Positionierungskontext der Grid-Bereich.

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

Eine letzte erwähnenswerte Interaktion ist die Interaktion zwischen CSS Grid Layout und `display: contents`, das im [CSS Display](/de/docs/Web/CSS/CSS_display)-Modul definiert ist. Wenn die {{cssxref("display")}}-Eigenschaft auf `contents` gesetzt ist, erzeugt das Element selbst keine Boxen, aber seine Kinder und Pseudo-Elemente erzeugen weiterhin Boxen wie gewohnt. Dies bedeutet, dass das Element für die Zwecke der Boxenerzeugung und des Layouts so behandelt wird, als ob es durch seine Kinder und Pseudo-Elemente im Dokumentbaum ersetzt worden wäre.

Wenn Sie ein Element auf `display: contents` setzen, verschwindet die Box, die es normalerweise erzeugen würde, und die Boxen der Kindelemente erscheinen, als ob sie ein Level höher gestiegen wären. Dies bedeutet, dass Kinder eines Grid-Elements zu Grid-Elementen werden können. Klingt seltsam? Hier ist ein Beispiel.

### Grid-Layout mit verschachtelten Kindelementen

In diesem Beispiel ist das erste Element unseres Grids so eingestellt, dass es alle drei Spaltenspuren überspannt. Es enthält drei verschachtelte Elemente. Da diese Elemente keine direkten Kinder sind, werden sie nicht Teil des Grid-Layouts und werden daher mit regulärem Block-Layout angezeigt.

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

Wenn wir jetzt `display: contents` zu den Regeln für `box1` hinzufügen, verschwindet die Box für dieses Element und die Unterelemente werden jetzt zu Grid-Elementen und legen sich selbst mit den Regeln zur automatischen Platzierung aus.

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

Dies kann ein Weg sein, um Elemente, die in das Grid eingebettet sind, so behandeln zu lassen, als ob sie Teil des Grids wären. Sie können `display: contents` auch in ähnlicher Weise mit Flexbox verwenden, um es verschachtelten Elementen zu ermöglichen, Flex-Elemente zu werden.

Wie Sie aus diesem Leitfaden sehen können, ist CSS Grid Layout nur ein Teil Ihres Werkzeugkastens. Scheuen Sie sich nicht, es mit anderen Methoden der Gestaltung zu kombinieren, um die verschiedenen Effekte zu erzielen, die Sie benötigen.

## Siehe auch

- [Flexbox Leitfäden](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
- [Mehrspaltenlayout-Leitfäden](/de/docs/Web/CSS/CSS_multicol_layout)
