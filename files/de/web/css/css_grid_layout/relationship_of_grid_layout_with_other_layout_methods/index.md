---
title: Beziehung des Grid-Layouts zu anderen Layout-Methoden
slug: Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods
l10n:
  sourceCommit: b17ca921175c0a92d21c6c4effbc7fa3dc348a8e
---

{{CSSRef}}

[CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) ist dazu gedacht, zusammen mit anderen Teilen von CSS zu funktionieren, als Teil eines kompletten Systems zum Erstellen von Layouts. Dieser Leitfaden erklärt, wie Grid-Layout mit anderen Techniken zusammenpasst.

## Grid und Flexbox

Der grundlegende Unterschied zwischen CSS Grid-Layout und [CSS Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) besteht darin, dass Flexbox für Layouts in einer Dimension konzipiert wurde - entweder eine Zeile _oder_ eine Spalte. Grid wurde für zweidimensionale Layouts entwickelt - Zeilen und Spalten gleichzeitig. Beide Spezifikationen nutzen die [CSS Box-Alignment](/de/docs/Web/CSS/CSS_box_alignment) Funktionen. Wenn Sie bereits gelernt haben, wie Flexbox verwendet wird, sollten die Ähnlichkeiten Ihnen helfen, sich mit Grid vertraut zu machen.

### Eindimensionales versus zweidimensionales Layout

Ein einfaches Beispiel kann den Unterschied zwischen ein- und zweidimensionalen Layouts demonstrieren.

In diesem ersten Beispiel verwenden wir Flexbox, um eine Gruppe von Boxen zu layouten. Wir haben fünf Kindelemente in unserem Container und wir haben den Flex-Eigenschaften Werte zugewiesen, sodass sie von einer Flex-Basis von 150 Pixeln wachsen und schrumpfen können.

Wir setzen auch die Eigenschaft {{cssxref("flex-wrap")}} auf `wrap`, sodass sich die Elemente auf eine neue Zeile umschlagen, wenn der Platz im Container zu schmal wird, um die Flex-Basis aufrechtzuerhalten.

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

In der Abbildung sehen Sie, dass zwei Elemente auf eine neue Zeile umgebrochen wurden. Diese Elemente teilen sich den verfügbaren Platz und richten sich nicht unter den darüber liegenden Elementen aus. Dies liegt daran, dass, wenn Sie Flex-Elemente umschlagen, jede neue Zeile (oder Spalte, wenn Sie mit Spalten arbeiten) eine unabhängige Flex-Zeile im Flex-Container ist. Die Raumverteilung erfolgt über die Flex-Zeile.

Eine häufig gestellte Frage ist dann, wie man diese Elemente ausrichtet. Hier benötigen Sie eine zweidimensionale Layout-Methode: Sie möchten die Ausrichtung nach Zeile und Spalte steuern, und hier kommt Grid ins Spiel.

### Dasselbe Layout mit CSS Grids

Im nächsten Beispiel erstellen wir dasselbe Layout mit Grid. Dieses Mal haben wir drei `1fr` Spaltenspuren. Wir müssen nichts an den Elementen selbst einstellen; sie ordnen sich selbst je in eine Zelle des erstellten Grids ein. Wie Sie sehen können, bleiben sie in einem strikten Grid, das sich in Zeilen und Spalten ausrichtet. Mit fünf Elementen erhalten wir am Ende der zweiten Zeile eine Lücke.

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

Eine wichtige Frage, die Sie sich stellen sollten, wenn Sie zwischen Grid oder Flexbox wählen, ist:

- Müssen wir das Layout nur nach Zeile _oder_ Spalte steuern? Wenn ja, verwenden Sie Flexbox.
- Müssen wir das Layout nach Zeile _und_ Spalte steuern? Wenn ja, verwenden Sie Grid-Layout.

### Inhalt heraus oder Layout hinein?

Zusätzlich zur Unterscheidung zwischen eindimensional und zweidimensional gibt es einen weiteren Weg zu entscheiden, ob Sie für ein Layout Flexbox oder Grid verwenden sollten. Flexbox funktioniert vom Inhalt nach außen. Ein idealer Anwendungsfall für Flexbox ist, wenn Sie eine Gruppe von Elementen haben und diese gleichmäßig in einem Container verteilen möchten. Sie lassen die Größe des Inhalts entscheiden, wie viel individuellen Platz jedes Element einnimmt. Wenn sich die Elemente auf eine neue Zeile umschlagen, errechnen sie ihre Abstände basierend auf ihrer Größe und dem verfügbaren Platz _auf dieser Zeile_.

Grid funktioniert vom Layout nach innen. Wenn Sie CSS Grid-Layout verwenden, erstellen Sie ein Layout und dann platzieren Sie Elemente darin oder Sie lassen die Auto-Platzierungsregeln die Elemente gemäß diesem strikten Grid in die Zellen des Grids platzieren. Es ist möglich, Spuren zu erstellen, die auf die Größe des Inhalts reagieren; sie ändern jedoch auch die gesamte Spur.

Wenn Sie Flexbox verwenden und feststellen, dass Sie einige der Flexibilität deaktivieren, müssen Sie wahrscheinlich CSS Grid-Layout verwenden. Zum Beispiel, wenn Sie auf einem Flex-Element eine Breite festlegen, um es mit anderen Elementen in einer Zeile darüber auszurichten, ist ein Grid wahrscheinlich eine bessere Wahl.

### Box-Ausrichtung

Die meisten Grid-Ausrichtungsmerkmale wurden ursprünglich im [CSS Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) definiert. Diese Funktionen boten erstmals eine korrekte Ausrichtungssteuerung und ermöglichten es, eine Box einfach in der Mitte der Seite auszurichten. Flex-Elemente können sich auf die Höhe des Flex-Containers strecken, was bedeutete, dass gleich hohe Spalten möglich waren. Diese Eigenschaften sind jetzt im [CSS Box-Alignment](/de/docs/Web/CSS/CSS_box_alignment) Modul definiert und werden in mehreren Layout-Modi verwendet, einschließlich Grid-Layout.

Wir werden uns später genauer mit [Ausrichten von Elementen im CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout) beschäftigen. Für den Moment hier ein Vergleich zwischen Beispielen von Flexbox und Grid.

Im ersten Beispiel, das Flexbox verwendet, haben wir einen Container mit drei Elementen darin. Die minimale Höhe des Containers ({{cssxref("min-height")}}) ist festgelegt, sodass er die Höhe des Flex-Containers definiert. Wir haben {{cssxref("align-items")}} auf dem Flex-Container auf `flex-end` gesetzt, sodass die Elemente am Ende des Flex-Containers ausgerichtet sind. Wir haben auch die {{cssxref("align-self")}} Eigenschaft auf `box1` gesetzt, sodass es den Standardwert überschreibt und sich auf die Höhe des Containers streckt, und auf `box2`, sodass es sich am Anfang des Flex-Containers ausrichtet.

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

Dieses Beispiel verwendet ein Grid, um dasselbe Layout zu erstellen. Wir verwenden die Box-Ausrichtungsmerkmale, wie sie auf ein Grid-Layout angewendet werden. Wir richten `start` und `end` aus. (Wir könnten die {{cssxref("content-position")}} Synonyme `flex-start` und `flex-end` verwenden.) Im Falle eines Grid-Layouts richten wir die Elemente innerhalb ihres Grid-Bereichs aus. In diesem Fall ist es eine einzelne Grid-Zelle, aber es könnte auch ein Bereich sein, der aus mehreren Grid-Zellen besteht.

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

Wir haben bereits gesehen, wie die `fr`-Einheit funktioniert, um einem Teil des verfügbaren Raums im Grid-Container unseren Grid-Spuren zuzuweisen. Die `fr`-Einheit kann, wenn sie mit der {{cssxref("minmax", "minmax()")}} Funktion kombiniert wird, ein sehr ähnliches Verhalten wie die `flex` Eigenschaften in Flexbox bieten und gleichzeitig die Erstellung eines Layouts in zwei Dimensionen ermöglichen.

Wenn wir auf das Beispiel zurückblicken, bei dem wir den Unterschied zwischen ein- und zweidimensionalen Layouts demonstriert haben, können Sie sehen, dass es einen Unterschied zwischen der Art und Weise gibt, wie die beiden Layouts reaktionsfähig arbeiten. Beim Flex-Layout, wenn wir unser Fenster breiter und schmaler ziehen, leistet das Flexbox einen guten Job, die Anzahl der Elemente in jeder Zeile gemäß dem verfügbaren Raum anzupassen. Wenn wir viel Platz haben, können alle fünf Elemente in eine Zeile passen. Wenn wir einen sehr schmalen Container haben, haben wir möglicherweise nur Platz für eins.

Im Vergleich dazu hat die Grid-Version immer drei Spaltenspuren. Die Spuren selbst wachsen und schrumpfen, aber es gibt immer drei, da wir beim Definieren unseres Grids drei angefordert haben.

#### Automatisches Füllen der Grid-Spuren

Wir können Grid verwenden, um einen ähnlichen Effekt wie Flexbox zu erzielen und trotzdem den Inhalt in strikten Zeilen und Spalten zu halten, indem wir unsere Spurenliste mit Notation zum Wiederholen und den `auto-fill` und `auto-fit` Eigenschaften erstellen.

Im nächsten Beispiel haben wir das `auto-fill` Schlüsselwort anstelle einer Ganzzahl in der Notation zum Wiederholen verwendet und die Spurenliste auf 200 Pixel gesetzt. Dies bedeutet, dass Grid so viele 200 Pixel breite Spaltenspuren erstellt, wie in den Container passen.

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

Dies ist nicht ganz dasselbe wie Flexbox. Im Flexbox-Beispiel sind die Elemente größer als die 200 Pixel Basis, bevor sie umschlagen. Wir können dasselbe im Grid erreichen, indem wir `auto-fit` und die {{cssxref("minmax", "minmax()")}} Funktion kombinieren.

In diesem Beispiel erstellen wir automatisch gefüllte Spuren mit `minmax`. Wir möchten, dass unsere Spuren mindestens 200 Pixel groß sind, also setzen wir das Maximum auf `1fr`. Sobald der Browser berechnet hat, wie oft 200 Pixel in den Container passen–unter Berücksichtigung der Grid-Lücken–behandelt er das `1fr` Maximum als Anweisung, den verbleibenden Raum zwischen den Elementen zu verteilen.

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

Mit dem Grid-Layout können wir ein Grid mit einer dynamischen Anzahl von flexiblen Spuren erstellen und die Elemente im Grid ausgerichtet nach Zeilen und Spalten layouten.

## Grid und absolut positionierte Elemente

Grid interagiert mit [absolut positionierten](/de/docs/Web/CSS/position#absolute_positioning) Elementen, was nützlich sein kann, wenn Sie ein Element innerhalb eines Grids oder eines Grid-Bereichs positionieren möchten. Die Spezifikation definiert das Verhalten, wenn ein Grid-Container ein Containing Block und ein übergeordnetes Element des absolut positionierten Elements ist.

### Ein Grid-Container als Containing Block

Um den Grid-Container zu einem [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block) zu machen, müssen Sie die {{cssxref("position")}} Eigenschaft dem Container mit dem Wert `relative` hinzufügen, genau wie Sie es tun würden, um einen Containing Block für andere absolut positionierte Elemente zu erstellen. Sobald Sie dies getan haben, wenn Sie einem Grid-Element `position: absolute` zuweisen, nimmt es als seinen Containing Block den Grid-Container oder, wenn das Element auch eine Grid-Position hat, den Bereich des Grids, in den es platziert ist.

Im folgenden Beispiel haben wir einen Wrapper, der vier Kindelemente enthält. Element drei ist absolut positioniert und auch im Grid mithilfe von linienbasierter Platzierung positioniert. Der Grid-Container hat `position: relative` und wird so zum Positionierungskontext dieses Elements.

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

Sie können sehen, dass das Element den Bereich von Grid-Spaltenlinie 2 bis 4 einnimmt und nach Linie 1 beginnt. Dann wird es in diesem Bereich mit den Top- und Left-Eigenschaften versetzt. Es wurde jedoch aus dem Fluss genommen, wie es bei absolut positionierten Elementen üblich ist, und die automatischen Platzierungsregeln platzieren die Elemente jetzt in denselben Raum. Das Element verursacht auch nicht, dass eine weitere Zeile erstellt wird, um bis zu Zeilenlinie 3 zu reichen.

Wenn wir `position: absolute` aus den Regeln für `.box3` entfernen, können Sie sehen, wie es ohne die Positionierung angezeigt würde.

### Ein Grid-Container als Elternteil

Wenn das absolut positionierte Kindelement einen Grid-Container als Elternteil hat, aber dieser Container keinen neuen Positionierungskontext erstellt, dann wird es aus dem Fluss genommen, wie im vorherigen Beispiel. Der _Positionierungskontext_ ist das Element, zu dem das absolut positionierte Element relativ positioniert ist. Der Positionierungskontext ist das Element, das einen Positionierungskontext erstellt, wie es bei anderen Layout-Methoden üblich ist. In unserem Fall, wenn wir `position: relative` aus dem Wrapper oben entfernen, ist der Positionierungskontext das Viewport, wie in diesem Bild gezeigt.

![Bild eines Grid-Containers als Elternteil](2_abspos_example.png)

Wieder einmal nimmt das Element nicht an der Grid-Layout im Sinne der Dimensionierung oder wenn andere Elemente automatisch platziert werden, teil.

### Mit einem Grid-Bereich als Elternteil

Wenn das absolut positionierte Element innerhalb eines Grid-Bereichs verschachtelt ist, können Sie einen Positionierungskontext auf diesem Bereich erstellen. In diesem Beispiel haben wir unser Grid wie zuvor, aber diesmal haben wir ein Element innerhalb von `.box3` des Grids verschachtelt.

Wir haben `.box3` Position relativ gegeben und dann das Unterelement mit den Versetzeigenschaften positioniert. In diesem Fall ist der Positionierungskontext der Grid-Bereich.

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

Eine letzte Interaktion, die erwähnenswert ist, ist die Interaktion zwischen CSS Grid-Layout und `display: contents`, wie im [CSS Display](/de/docs/Web/CSS/CSS_display) Modul definiert. Wenn die {{cssxref("display")}} Eigenschaft auf `contents` gesetzt ist, erzeugt das Element selbst keine Boxen, aber seine Kinder und Pseudo-Elemente generieren nach wie vor Boxen wie gewohnt. Das bedeutet, dass das Element für die Zwecke der Box-Generierung und des Layouts so behandelt wird, als ob es durch seine Kinder und Pseudo-Elemente im Dokumentbaum ersetzt wurde.

Wenn Sie ein Element auf `display: contents` setzen, verschwindet die Box, die es normalerweise erstellen würde, und die Boxen der Kindelemente erscheinen, als ob sie eine Ebene höher gestiegen wären. Das bedeutet, dass Kinder eines Grid-Elements zu Grid-Elementen werden können. Klingt das seltsam? Hier ist ein Beispiel.

### Grid-Layout mit verschachtelten Kindelementen

In diesem Beispiel ist das erste Element unseres Grids so eingestellt, dass es alle drei Spaltenspuren überspannt. Es enthält drei verschachtelte Elemente. Da diese Elemente keine direkten Kinder sind, werden sie nicht Teil des Grid-Layouts und werden daher im regulären Block-Layout angezeigt.

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

Wenn wir nun `display: contents` zu den Regeln für `box1` hinzufügen, verschwindet die Box für dieses Element und die Unterelemente werden nun zu Grid-Elementen und layouten sich selbst mit den Auto-Platzierungsregeln.

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

Dies kann eine Möglichkeit sein, verschachtelte Elemente im Grid dazu zu bringen, sich so zu verhalten, als ob sie Teil des Grids sind. Sie können `display: contents` auch auf ähnliche Weise mit Flexbox verwenden, um verschachtelte Elemente zu Flex-Elementen zu machen.

Wie Sie aus diesem Leitfaden ersehen können, ist CSS Grid-Layout nur ein Teil Ihres Werkzeugkastens. Scheuen Sie sich nicht, es mit anderen Methoden des Layouts zu kombinieren, um die verschiedenen Effekte zu erzielen, die Sie benötigen.

## Siehe auch

- [Flexbox-Leitfäden](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
- [Mehrspaltige Layout-Leitfäden](/de/docs/Web/CSS/CSS_multicol_layout)
