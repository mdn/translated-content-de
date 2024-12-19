---
title: Beziehung des Grid-Layouts zu anderen Layout-Methoden
slug: Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

CSS Grid-Layout wurde entwickelt, um neben anderen Teilen von CSS als Teil eines vollständigen Systems für das Layout zu funktionieren. In diesem Leitfaden werde ich erklären, wie ein Grid mit anderen Techniken zusammenpasst, die Sie möglicherweise bereits verwenden.

## Grid und Flexbox

Der grundlegende Unterschied zwischen CSS Grid-Layout und [CSS Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) besteht darin, dass Flexbox für Layouts in einer Dimension entwickelt wurde - entweder eine Reihe _oder_ eine Spalte. Grid hingegen wurde für zweidimensionale Layouts entworfen - Reihen und Spalten gleichzeitig. Die beiden Spezifikationen teilen einige gemeinsame Merkmale, und wenn Sie bereits gelernt haben, wie man Flexbox verwendet, sollten die Ähnlichkeiten Ihnen helfen, das Grid zu verstehen.

### Eindimensionales versus zweidimensionales Layout

Ein einfaches Beispiel kann den Unterschied zwischen ein- und zweidimensionalen Layouts verdeutlichen.

Im ersten Beispiel verwende ich Flexbox, um eine Reihe von Boxen anzuordnen. Ich habe fünf Kind-Elemente in meinem Container und habe den `flex` Eigenschaften Werte gegeben, sodass sie vom `flex-basis` von 150 Pixeln aus wachsen und schrumpfen können.

Ich habe auch die {{cssxref("flex-wrap")}} Eigenschaft auf `wrap` gesetzt, sodass, wenn der Raum im Container zu schmal wird, um die Flex-Basis beizubehalten, die Elemente auf eine neue Zeile umbrochen werden.

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

Im Bild sehen Sie, dass zwei Elemente auf eine neue Zeile umgebrochen sind. Diese Elemente teilen sich den verfügbaren Raum und sind nicht unter den Elementen oben ausgerichtet. Dies liegt daran, dass, wenn Sie Flex-Elemente umbrechen, jede neue Zeile (oder Spalte, wenn Sie mit Spalten arbeiten) eine unabhängige Flex-Linie im Flex-Container ist. Die Platzverteilung erfolgt über die Flex-Linie.

Eine häufige Frage ist dann, wie man diese Elemente ausrichtet. Hier benötigen Sie eine zweidimensionale Layout-Methode: Sie möchten die Ausrichtung nach Reihen und Spalten steuern, und hier kommt das Grid ins Spiel.

### Dasselbe Layout mit CSS Grids

Im nächsten Beispiel erstelle ich dasselbe Layout mit Grid. Diesmal haben wir drei `1fr` Spalten-Spuren. Wir müssen nichts an den Elementen selbst einstellen; sie legen sich eines in jede Zelle des erstellten Grids. Wie Sie sehen, bleiben sie in einem strengen Gitter, ausgerichtet in Reihen und Spalten. Mit fünf Elementen entsteht am Ende der zweiten Reihe eine Lücke.

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

Eine einfache Frage, die Sie sich stellen können, wenn Sie sich zwischen Grid und Flexbox entscheiden, ist:

- benötige ich nur die Kontrolle über das Layout nach Reihe _oder_ Spalte – verwenden Sie eine Flexbox
- benötige ich die Kontrolle über das Layout nach Reihe _und_ Spalte – verwenden Sie ein Grid

### Inhalt von innen oder Layout von außen?

Zusätzlich zur Unterscheidung zwischen ein- und zweidimensional, gibt es eine weitere Möglichkeit zu entscheiden, ob Sie Flexbox oder Grid für ein Layout verwenden sollten. Flexbox arbeitet von innen heraus. Ein idealer Anwendungsfall für Flexbox ist, wenn Sie eine Reihe von Elementen haben und diese gleichmäßig in einem Container verteilen möchten. Sie lassen die Größe des Inhalts entscheiden, wie viel Platz jedes Element einnimmt. Wenn die Elemente auf eine neue Zeile umbrechen, berechnen sie ihre Abstände basierend auf ihrer Größe und dem verfügbaren Platz _in dieser Zeile_.

Grid arbeitet von außen hinein. Wenn Sie CSS Grid-Layout verwenden, erstellen Sie ein Layout und platzieren dann die Elemente darin, oder Sie erlauben den automatischen Platzierungsregeln, die Elemente in die Grid-Zellen gemäß diesem strengen Gitter zu platzieren. Es ist möglich, Spuren zu erstellen, die auf die Größe des Inhalts reagieren, jedoch ändern sie dann den gesamten Spur.

Wenn Sie Flexbox verwenden und feststellen, dass Sie etwas von der Flexibilität deaktivieren, sollten Sie wahrscheinlich CSS-Grid-Layout verwenden. Ein Beispiel wäre, wenn Sie eine prozentuale Breite auf ein Flex-Element setzen, um es mit anderen Elementen in einer Reihe darüber auszurichten. In diesem Fall ist ein Grid wahrscheinlich eine bessere Wahl.

### Box-Ausrichtung

Die Funktion von Flexbox, die für viele von uns am aufregendsten war, ist, dass sie uns erstmals eine ordentliche Ausrichtungssteuerung ermöglichte. Sie machte es einfach, eine Box auf der Seite zu zentrieren. Flex-Elemente können sich auf die Höhe des Flex-Containers strecken, was bedeutete, dass gleich hohe Spalten möglich waren. Das waren Dinge, die wir schon sehr lange tun wollten und für die wir alle möglichen Tricks angewendet haben, um sie zumindest visuell zu erreichen.

Die Ausrichtungseigenschaften aus der Flexbox-Spezifikation wurden in eine neue Spezifikation namens [Box Alignment Level 3](https://drafts.csswg.org/css-align/) aufgenommen. Das bedeutet, dass sie in anderen Spezifikationen verwendet werden können, einschließlich Grid-Layout. In Zukunft könnten sie möglicherweise auch auf andere Layout-Methoden angewendet werden.

In einem späteren Leitfaden in dieser Serie werde ich einen genaueren Blick auf die Box-Ausrichtung und deren Funktionsweise im Grid-Layout werfen. Für den Moment finden Sie hier einen Vergleich zwischen einfachen Beispielen von Flexbox und Grid.

Im ersten Beispiel, das Flexbox verwendet, habe ich einen Container mit drei enthaltenen Elementen. Der {{cssxref("min-height")}} des Wrappers ist gesetzt, sodass er die Höhe des Flex-Containers definiert. Ich habe {{cssxref("align-items")}} im Flex-Container auf `flex-end` gesetzt, sodass die Elemente am Ende des Flex-Containers ausgerichtet werden. Ich habe die Eigenschaft {{cssxref("align-self")}} auf `box1` gesetzt, sodass es den Standard überschreibt und sich zur Höhe des Containers streckt, und auf `box2`, sodass es sich am Anfang des Flex-Containers ausrichtet.

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

Dieses zweite Beispiel verwendet ein Grid, um dasselbe Layout zu erstellen. Diesmal nutzen wir die Box-Ausrichtungseigenschaften, wie sie auf ein Grid-Layout angewendet werden. Wir richten diesmal nach `start` und `end` aus, anstatt nach `flex-start` und `flex-end`. Im Fall eines Grid-Layouts richten wir die Elemente innerhalb ihres Grid-Bereichs aus. In diesem Fall ist das eine einzelne Grid-Zelle, es könnte aber auch ein Bereich sein, der aus mehreren Grid-Zellen besteht.

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

Wir haben bereits gesehen, wie die `fr` Einheit funktioniert, um einen Anteil des verfügbaren Raums im Grid-Container unseren Grid-Spuren zuzuweisen. Die `fr` Einheit kann, kombiniert mit der {{cssxref("minmax", "minmax()")}} Funktion, ein sehr ähnliches Verhalten wie die `flex` Eigenschaften in Flexbox bieten, während sie dennoch die Erstellung eines zweidimensionalen Layouts ermöglicht.

Wenn wir auf das Beispiel zurückblicken, in dem ich den Unterschied zwischen ein- und zweidimensionalen Layouts demonstriert habe, sehen Sie, dass es einen Unterschied in der responsiven Arbeitsweise der beiden Layouts gibt. Mit dem Flex-Layout passt sich die Flexbox gut an die Anzahl der Elemente in jeder Reihe entsprechend dem verfügbaren Raum an, wenn wir unser Fenster verbreitern und verkleinern. Haben wir viel Platz, passen alle fünf Elemente in eine Reihe. Haben wir einen sehr schmalen Container, könnten wir nur Platz für eines haben.

Im Vergleich dazu hat die Grid-Version immer drei Spalten-Spuren. Die Spuren selbst werden wachsen und schrumpfen, aber es gibt immer drei, da wir drei angefordert haben, als wir unser Grid definierten.

#### Automatische Auffüllung von Grid-Spuren

Wir können Grid verwenden, um einen ähnlichen Effekt wie bei Flexbox zu erzielen, während wir den Inhalt dennoch in strengen Reihen und Spalten anordnen, indem wir unser Spur-Listing mit Wiederholungsnotation und den `auto-fill` und `auto-fit` Eigenschaften erstellen.

Im nächsten Beispiel habe ich das `auto-fill` Schlüsselwort anstelle einer Zahl in der Wiederholungsnotation verwendet und das Spur-Listing auf 200 Pixel gesetzt. Das bedeutet, dass Grid so viele 200-Pixel-Spalten-Spuren erstellt, wie in den Container passen.

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

Das ist nicht ganz dasselbe wie Flexbox. Im Flexbox-Beispiel sind die Elemente größer als die 200 Pixel Basis vor dem Umbruch. Wir können dasselbe im Grid erreichen, indem wir `auto-fit` und die {{cssxref("minmax", "minmax()")}} Funktion kombinieren. Im nächsten Beispiel erstelle ich automatisch gefüllte Spuren mit `minmax`. Ich möchte, dass meine Spuren mindestens 200 Pixel sind, also setze ich das Maximum auf `1fr`. Sobald der Browser berechnet hat, wie oft 200 Pixel in den Container passen – auch unter Berücksichtigung der Grid-Lücken – behandelt er das `1fr` Maximum als Anweisung, den verbleibenden Platz zwischen den Elementen zu verteilen.

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

Mit dem Grid-Layout können wir ein Grid mit einer dynamischen Anzahl flexibler Spuren erstellen und die Elemente im Grid anordnen, ausgerichtet nach Reihen und Spalten.

## Grid und absolut positionierte Elemente

Grid interagiert mit absolut positionierten Elementen, was nützlich sein kann, wenn Sie ein Element innerhalb eines Grids oder Grid-Bereichs positionieren möchten. Die Spezifikation definiert das Verhalten, wenn ein Grid-Container ein enthaltender Block und ein Elternteil des absolut positionierten Elements ist.

### Ein Grid-Container als enthaltender Block

Um den Grid-Container zu einem enthaltenden Block zu machen, müssen Sie die `position` Eigenschaft mit dem Wert `relative` zum Container hinzufügen, genauso wie Sie einen enthaltenden Block für andere absolut positionierte Elemente erstellen würden. Sobald Sie dies getan haben, nimmt ein Grid-Element mit `position: absolute` als enthaltenden Block den Grid-Container oder, wenn das Element auch eine Grid-Position hat, den Bereich des Grids ein, in den es platziert wurde.

Im unteren Beispiel habe ich einen Wrapper, der vier Kind-Elemente enthält. Element drei ist absolut positioniert und wird auch mithilfe der linienbasierten Platzierung auf dem Grid platziert. Der Grid-Container hat `position: relative` und wird somit zum Positionierungskontext dieses Elements.

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

Sie können sehen, dass das Element den Bereich von Grid-Spaltenlinie 2 bis 4 einnimmt und nach Linie 1 beginnt. Dann wird es in diesem Bereich durch die Top- und Left-Eigenschaften versetzt. Es wurde jedoch aus dem Fluss genommen, wie es für absolut positionierte Elemente üblich ist, und so platzieren die automatischen Platzierungsregeln nun Elemente im selben Raum. Das Element verursacht auch nicht die zusätzliche Zeile, die benötigt wird, um zur Zeilenlinie 3 zu spannen.

Wenn wir `position: absolute` aus den Regeln für `.box3` entfernen, können Sie sehen, wie es ohne die Positionierung angezeigt werden würde.

### Ein Grid-Container als Elternteil

Wenn das absolut positionierte Kind einen Grid-Container als Elternteil hat, aber dieser Container keinen neuen Positionierungskontext erstellt, wird es wie im vorherigen Beispiel aus dem Fluss genommen. Der Positionierungskontext wird jedes Element sein, das einen Positionierungskontext erstellt, wie es auch bei anderen Layout-Methoden üblich ist. In unserem Fall, wenn wir `position: relative` aus dem obigen Wrapper entfernen, ist der Positionierungskontext der Viewport, wie in diesem Bild gezeigt.

![Bild des Grid-Containers als Elternteil](2_abspos_example.png)

Auch hier nimmt das Element nicht mehr am Grid-Layout in Bezug auf Größenanpassung teil, oder wenn andere Elemente automatisch platziert werden.

### Mit einem Grid-Bereich als Elternteil

Wenn das absolut positionierte Element in einem Grid-Bereich verschachtelt ist, können Sie auf diesem Bereich einen Positionierungskontext erstellen. Im untenstehenden Beispiel haben wir unser Grid wie zuvor, aber diesmal habe ich ein Element in `.box3` des Grids eingebettet.

Ich habe `.box3` relativ positioniert und dann das Unterelement mit den Offset-Eigenschaften positioniert. In diesem Fall ist der Positionierungskontext der Grid-Bereich.

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

Eine letzte Interaktion mit einer anderen Layout-Spezifikation, die erwähnenswert ist, ist die Interaktion zwischen CSS Grid-Layout und `display: contents`. Der `contents` Wert der display-Eigenschaft ist ein neuer Wert, der in der [Display-Spezifikation](https://drafts.csswg.org/css-display/#box-generation) wie folgt beschrieben wird:

> "Das Element selbst erzeugt keine Boxen, aber seine Kinder und Pseudo-Elemente generieren weiterhin Boxen wie gewohnt. Für die Zwecke der Box-Generierung und des Layouts muss das Element behandelt werden, als wäre es mit seinen Kindern und Pseudo-Elementen im Dokumentenbaum ersetzt worden."

Wenn Sie ein Element auf `display: contents` setzen, verschwindet die Box, die es normalerweise erzeugen würde, und die Boxen der Kindelemente erscheinen, als wären sie eine Ebene nach oben verschoben. Dies bedeutet, dass Kinder eines Grid-Elements Grid-Elemente werden können. Klingt seltsam? Hier ist ein einfaches Beispiel.

### Grid-Layout mit verschachtelten Kind-Elementen

Im folgenden Markup habe ich ein Grid und das erste Element im Grid ist so eingestellt, dass es alle drei Spalten-Spuren überspannt. Es enthält drei verschachtelte Elemente. Da diese Elemente keine direkten Kinder sind, werden sie nicht Teil des Grid-Layouts und so mit dem normalen Block-Layout angezeigt.

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

### Die Verwendung von display: contents

Wenn ich jetzt `display: contents` zu den Regeln für `box1` hinzufüge, verschwindet die Box für dieses Element und die Unterelemente werden nun zu Grid-Elementen und legen sich mithilfe der automatischen Platzierungsregeln aus.

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

Dies kann eine Möglichkeit sein, um Elemente, die in das Grid eingebettet sind, so zu behandeln, als wären sie Teil des Grids, und ist ein Weg, um einige der Probleme zu lösen, die durch Subgrids gelöst würden, sobald diese implementiert sind. Sie können `display: contents` auch auf ähnliche Weise mit Flexbox verwenden, um verschachtelte Elemente dazu zu bringen, Flex-Elemente zu werden.

Wie Sie aus diesem Leitfaden sehen können, ist CSS Grid-Layout nur ein Teil Ihres Werkzeugkastens. Verschiedene Methoden zur Erstellung von Layouts zu kombinieren, um die unterschiedlichen erforderlichen Effekte zu erzielen, sollte keine Angst machen.

## Siehe auch

- [Flexbox-Leitfäden](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
- [Leitfäden für Mehrspalten-Layouts](/de/docs/Web/CSS/CSS_multicol_layout)
