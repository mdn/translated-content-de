---
title: Beziehung von Grid-Layout zu anderen Layout-Methoden
slug: Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Das CSS-Grid-Layout wurde entwickelt, um gemeinsam mit anderen Teilen von CSS als Teil eines vollständigen Systems zur Layout-Erstellung zu funktionieren. In diesem Leitfaden werde ich erklären, wie ein Grid zusammen mit anderen Techniken, die Sie möglicherweise bereits verwenden, passt.

## Grid und Flexbox

Der grundlegende Unterschied zwischen dem CSS-Grid-Layout und dem [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) besteht darin, dass Flexbox für das Layout in einer Dimension – entweder einer Reihe _oder_ einer Spalte – entworfen wurde. Grid hingegen wurde für ein zweidimensionales Layout entworfen – gleichzeitig Reihen und Spalten. Die beiden Spezifikationen teilen einige gemeinsame Merkmale, und wenn Sie bereits Flexbox gelernt haben, sollten Ihnen die Ähnlichkeiten helfen, sich mit Grid vertraut zu machen.

### Eindimensionales versus zweidimensionales Layout

Ein einfaches Beispiel kann den Unterschied zwischen ein- und zweidimensionalen Layouts verdeutlichen.

In diesem ersten Beispiel verwende ich Flexbox, um eine Gruppe von Boxen anzuordnen. Ich habe fünf Kind-Elemente in meinem Container und habe den Flex-Eigenschaften Werte gegeben, sodass sie ausgehend von einer Flex-Basis von 150 Pixeln wachsen und schrumpfen können.

Ich habe auch die Eigenschaft {{cssxref("flex-wrap")}} auf `wrap` gesetzt, sodass, wenn der Platz im Container zu eng wird, um die Flex-Basis beizubehalten, die Elemente auf eine neue Zeile umgebrochen werden.

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

Auf dem Bild sehen Sie, dass zwei Elemente auf eine neue Zeile umgebrochen wurden. Diese Elemente teilen sich den verfügbaren Platz und sind nicht unter den darüber liegenden Elementen ausgerichtet. Dies liegt daran, dass bei Umbruch von Flex-Elementen jede neue Zeile (oder Spalte, wenn nach Spalte gearbeitet wird) eine unabhängige Flex-Linie im Flex-Container ist. Die Platzverteilung erfolgt über die Flex-Linie.

Eine häufige Frage ist, wie man diese Elemente ausrichtet. Hier benötigen Sie eine zweidimensionale Layout-Methode: Sie möchten die Ausrichtung nach Reihe und Spalte steuern, und hier kommt Grid ins Spiel.

### Dasselbe Layout mit CSS-Grids

Im nächsten Beispiel erstelle ich dasselbe Layout mit Grid. Diesmal haben wir drei `1fr`-Spaltenspuren. Wir müssen nichts an den Elementen selbst festlegen; sie werden sich jeweils in eine Zelle des erstellten Grids einfügen. Wie Sie sehen können, bleiben sie in einem strengen Grid, ausgerichtet in Reihen und Spalten. Mit fünf Elementen entsteht am Ende von Reihe zwei eine Lücke.

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

Eine einfache Frage, die Sie sich stellen können, wenn Sie zwischen Grid und Flexbox entscheiden müssen, ist:

- Muss ich das Layout nur nach Reihe _oder_ Spalte steuern – verwenden Sie eine Flexbox
- Muss ich das Layout nach Reihe _und_ Spalte steuern – verwenden Sie ein Grid

### Von innen nach außen oder von außen nach innen?

Zusätzlich zur Unterscheidung zwischen eindimensional und zweidimensional gibt es noch einen weiteren Weg zu entscheiden, ob Sie Flexbox oder Grid für ein Layout verwenden sollten. Flexbox arbeitet von innen nach außen. Ein idealer Anwendungsfall für Flexbox ist, wenn Sie eine Reihe von Elementen haben und diese gleichmäßig in einem Container verteilen möchten. Sie lassen die Größe des Inhalts entscheiden, wie viel individueller Platz jedes Element einnimmt. Wenn sich die Elemente auf eine neue Zeile umbrechen, berechnen sie ihren Abstand basierend auf ihrer Größe und dem verfügbaren Platz _auf dieser Zeile_.

Grid arbeitet von außen nach innen. Wenn Sie das CSS-Grid-Layout verwenden, erstellen Sie ein Layout und platzieren dann Elemente darin, oder Sie lassen die Auto-Platzierungsregeln die Elemente entsprechend diesem strengen Grid in die Gitterzellen platzieren. Es ist möglich, Spuren zu erstellen, die auf die Größe des Inhalts reagieren, jedoch verändern sie auch die gesamte Spur.

Wenn Sie Flexbox verwenden und feststellen, dass Sie etwas von der Flexibilität deaktivieren, müssen Sie wahrscheinlich das CSS-Grid-Layout verwenden. Ein Beispiel wäre, wenn Sie eine Prozentbreite auf ein Flex-Element festlegen, um es mit anderen Elementen in einer darüberliegenden Zeile auszurichten. In diesem Fall ist Grid wahrscheinlich die bessere Wahl.

### Box-Ausrichtung

Die Funktion von Flexbox, die für viele von uns am aufregendsten war, war, dass sie uns zum ersten Mal eine ordentliche Ausrichtungskontrolle bot. Es war einfach, ein Element auf der Seite zu zentrieren. Flex-Elemente können sich auf die Höhe des Flex-Containers strecken, was bedeutet, dass gleiche Höhen von Spalten möglich waren. Dies waren Dinge, die wir schon lange tun wollten und für die wir alle möglichen Hacks entwickelt haben, um sie zumindest visuell zu erreichen.

Die Ausrichtungseigenschaften aus der Flexbox-Spezifikation wurden einer neuen Spezifikation namens [Box Alignment Level 3](https://drafts.csswg.org/css-align/) hinzugefügt. Dies bedeutet, dass sie in anderen Spezifikationen, einschließlich des Grid-Layouts, verwendet werden können. In Zukunft können sie möglicherweise auch auf andere Layout-Methoden angewendet werden.

In einem späteren Leitfaden dieser Serie werde ich mir Box Alignment und wie es im Grid-Layout funktioniert genauer ansehen. Für den Moment hier ein Vergleich zwischen einfachen Beispielen von Flexbox und Grid.

Im ersten Beispiel, das Flexbox verwendet, habe ich einen Container mit drei Elementen darin. Der Wrapper hat ein {{cssxref("min-height")}} gesetzt, wodurch die Höhe des Flex-Containers definiert wird. Ich habe {{cssxref("align-items")}} auf den Flex-Container mit `flex-end` gesetzt, damit die Elemente am Ende des Flex-Containers ausgerichtet werden. Ich habe auch die Eigenschaft {{cssxref("align-self")}} auf `box1` gesetzt, um den Standard zu überschreiben und sich auf die Höhe des Containers zu strecken, und auf `box2`, um es am Anfang des Flex-Containers auszurichten.

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

Dieses zweite Beispiel verwendet ein Grid, um dasselbe Layout zu erstellen. Diesmal verwenden wir die Box-Ausrichtungseigenschaften, wie sie auf ein Grid-Layout angewendet werden. Wir richten zu `start` und `end` aus, anstatt `flex-start` und `flex-end`. Im Fall eines Grid-Layouts richten wir die Elemente innerhalb ihres Grid-Bereichs aus. In diesem Fall ist das eine einzige Gitterzelle, aber es könnte ein Bereich sein, der aus mehreren Gitterzellen besteht.

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

### Die `fr`-Einheit und `flex-basis`

Wir haben bereits gesehen, wie die `fr`-Einheit funktioniert, um einen Anteil des verfügbaren Platzes im Grid-Container unseren Grid-Spuren zuzuweisen. Die `fr`-Einheit kann in Kombination mit der {{cssxref("minmax", "minmax()")}}-Funktion ein sehr ähnliches Verhalten wie die `flex`-Eigenschaften in Flexbox bieten, während sie dennoch die Erstellung eines Layouts in zwei Dimensionen ermöglicht.

Wenn wir uns das Beispiel ansehen, in dem ich den Unterschied zwischen ein- und zweidimensionalen Layouts demonstriert habe, können Sie sehen, dass es einen Unterschied zwischen der Art und Weise gibt, wie die beiden Layouts responsiv arbeiten. Beim Flex-Layout passt sich die Flexbox schön an die Anzahl der Elemente in jeder Reihe entsprechend dem verfügbaren Raum an, wenn wir unser Fenster breiter und schmaler ziehen. Wenn wir viel Platz haben, können alle fünf Elemente in eine Reihe passen. Bei einem sehr schmalen Container haben wir möglicherweise nur Platz für eins.

Im Vergleich dazu hat die Grid-Version immer drei Spaltenspuren. Die Spuren selbst werden wachsen und schrumpfen, aber es gibt immer drei, da wir drei bei der Definition unseres Grids angefordert haben.

#### Automatisches Füllen von Grid-Spuren

Wir können Grid verwenden, um einen ähnlichen Effekt wie Flexbox zu erzielen, während wir den Inhalt dennoch in strengen Reihen und Spalten arrangiert behalten, indem wir unsere Spurenliste mit Wiederholungsnotation und den Eigenschaften `auto-fill` und `auto-fit` erstellen.

Im nächsten Beispiel habe ich das Schlüsselwort `auto-fill` anstelle einer Ganzzahl in der Wiederholungsnotation verwendet und die Spurenliste auf 200 Pixel gesetzt. Dies bedeutet, dass das Grid so viele 200 Pixel breite Spaltenspuren erstellt, wie in den Container passen.

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

### Eine flexible Anzahl von Spuren

Dies ist nicht ganz dasselbe wie Flexbox. Im Flexbox-Beispiel sind die Elemente größer als die 200-Pixel-Basis vor dem Umbruch. Wir können dasselbe im Grid durch Kombination von `auto-fit` und der {{cssxref("minmax", "minmax()")}}-Funktion erreichen. Im nächsten Beispiel erstelle ich automatisch gefüllte Spuren mit `minmax`. Ich möchte, dass meine Spuren mindestens 200 Pixel sind, daher setze ich das Maximum auf `1fr`. Sobald der Browser berechnet hat, wie oft 200 Pixel in den Container passen - inklusive Berücksichtigung von Grid-Abständen - wird er das `1fr`-Maximum als Anweisung, den verbleibenden Platz zwischen den Elementen zu teilen, behandeln.

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

Mit Grid-Layout können wir ein Grid mit einer dynamischen Anzahl flexibler Spuren erstellen und die Elemente auf dem Grid nach Reihen und Spalten ausgerichtet anordnen.

## Grid und absolut positionierte Elemente

Grid interagiert mit absolut positionierten Elementen, was nützlich sein kann, wenn Sie ein Element innerhalb eines Grids oder Grid-Bereichs positionieren möchten. Die Spezifikation definiert das Verhalten, wenn ein Grid-Container ein enthaltender Block und ein übergeordnetes Element des absolut positionierten Elements ist.

### Ein Grid-Container als enthaltender Block

Um den Grid-Container zu einem enthaltenden Block zu machen, müssen Sie die position-Eigenschaft mit dem Wert `relative` auf den Container anwenden, genauso wie Sie einen enthaltenden Block für andere absolut positionierte Elemente erstellen würden. Sobald Sie dies getan haben, wird ein Grid-Element mit `position: absolute` den Grid-Container oder, wenn das Element auch eine Grid-Position hat, den Bereich des Grids, in den es platziert wurde, als seinen enthaltenden Block nehmen.

Im folgenden Beispiel habe ich einen Wrapper, der vier Kindelemente enthält. Element drei ist absolut positioniert und auch auf dem Grid mittels linienbasierter Platzierung positioniert. Der Grid-Container hat `position: relative` und wird daher zum Positionierungskontext dieses Elements.

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

Sie können sehen, dass das Element den Bereich von Grid-Spaltenlinie 2 bis 4 einnimmt und nach Linie 1 beginnt. Es wird jedoch in diesem Bereich mit Hilfe der top- und left-Eigenschaften versetzt. Es wurde jedoch aus dem Fluss genommen, wie es bei absolut positionierten Elementen üblich ist, und daher platziert die Auto-Platzierungsregel jetzt Elemente in demselben Raum. Das Element verursacht auch nicht, dass die zusätzliche Zeile zur Spannweite bis zur Zeilenlinie 3 erstellt wird.

Wenn wir `position: absolute` aus den Regeln für `.box3` entfernen, können Sie sehen, wie es ohne die Positionierung angezeigt werden würde.

### Ein Grid-Container als Elternteil

Wenn ein absolut positioniertes Kind einen Grid-Container als Elternteil hat, dieser Container jedoch keinen neuen Positionierungskontext erstellt, wird es wie im vorherigen Beispiel aus dem Fluss genommen. Der Positionierungskontext wird das Element sein, das wie bei anderen Layout-Methoden einen Positionierungskontext erstellt. In unserem Fall, wenn wir `position: relative` aus dem Wrapper oben entfernen, wird der Positionierungskontext vom Viewport übernommen, wie auf diesem Bild gezeigt.

![Bild des Grid-Containers als Elternteil](2_abspos_example.png)

Das Element nimmt erneut nicht am Grid-Layout in Bezug auf Größenänderungen oder wenn andere Elemente automatisch platziert werden, teil.

### Mit einem Grid-Bereich als Elternteil

Wenn das absolut positionierte Element innerhalb eines Grid-Bereichs verschachtelt ist, können Sie einen Positionierungskontext auf diesem Bereich erstellen. Im folgenden Beispiel haben wir unser Grid wie zuvor, aber diesmal habe ich ein Element innerhalb von `.box3` des Grids verschachtelt.

Ich habe `.box3` relative positioniert und dann das Unterelement mit den Versatzeigenschaften positioniert. In diesem Fall ist der Positionierungskontext der Grid-Bereich.

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

Eine letzte Wechselwirkung mit einer anderen Layout-Spezifikation, die es zu beachten gilt, ist die Wechselwirkung zwischen CSS-Grid-Layout und `display: contents`. Der `contents`-Wert der display-Eigenschaft ist ein neuer Wert, der in der [Display-Spezifikation](https://drafts.csswg.org/css-display/#box-generation) wie folgt beschrieben wird:

> „Das Element erzeugt selbst keine Boxen, aber seine Kinder und Pseudo-Elemente erzeugen weiterhin Boxen wie gewohnt. Für die Zwecke der Box-Erzeugung und des Layouts muss das Element so behandelt werden, als ob es durch seine Kinder und Pseudo-Elemente im Dokumentbaum ersetzt worden wäre.“

Wenn Sie ein Element auf `display: contents` setzen, verschwindet die Box, die es normalerweise erstellen würde, und die Boxen der Kindelemente erscheinen, als wären sie eine Ebene nach oben gestiegen. Dies bedeutet, dass die Kinder eines Grid-Elements zu Grid-Elementen werden können. Klingt seltsam? Hier ist ein einfaches Beispiel.

### Grid-Layout mit verschachtelten Kindelementen

Im folgenden Markup habe ich ein Grid und das erste Element im Grid ist so eingestellt, dass es alle drei Spaltenspuren umspannt. Es enthält drei verschachtelte Elemente. Da diese Elemente keine direkten Kinder sind, werden sie kein Teil des Grid-Layouts und zeigen daher das reguläre Block-Layout.

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

Wenn ich nun `display: contents` zu den Regeln für `box1` hinzufüge, verschwindet die Box für dieses Element und die Unterlemente werden jetzt zu Grid-Elementen und legen sich nach den Auto-Platzierungsregeln aus.

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

Dies kann eine Möglichkeit sein, Elemente, die in das Grid verschachtelt sind, so zu behandeln, als ob sie Teil des Grids wären, und ist eine Lösung für einige der Probleme, die durch Subgrids gelöst werden würden, sobald sie implementiert werden. Sie können `display: contents` auch in ähnlicher Weise mit Flexbox verwenden, um verschachtelte Elemente zu Flex-Elementen zu machen.

Wie Sie aus diesem Leitfaden sehen können, ist das CSS-Grid-Layout nur ein Teil Ihres Werkzeugkastens. Scheuen Sie sich nicht, es mit anderen Methoden zur Layout-Erstellung zu kombinieren, um die verschiedenen Effekte zu erzielen, die Sie benötigen.

## Siehe auch

- [Flexbox-Leitfäden](/de/docs/Learn/CSS/CSS_layout/Flexbox)
- [Mehrspaltige Layout-Leitfäden](/de/docs/Web/CSS/CSS_multicol_layout)
