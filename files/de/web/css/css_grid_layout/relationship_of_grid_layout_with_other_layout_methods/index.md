---
title: Beziehung des Grid-Layouts zu anderen Layout-Methoden
slug: Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Das CSS-Grid-Layout wurde entwickelt, um zusammen mit anderen Teilen von CSS als Teil eines vollständigen Systems für das Layout zu funktionieren. In diesem Leitfaden werde ich erklären, wie ein Grid mit anderen Techniken zusammenpasst, die Sie möglicherweise bereits verwenden.

## Grid und Flexbox

Der grundlegende Unterschied zwischen dem CSS-Grid-Layout und dem [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) besteht darin, dass Flexbox für das Layout in einer Dimension - entweder in einer Zeile _oder_ einer Spalte - entwickelt wurde. Grid wurde für zweidimensionale Layouts - Zeilen und Spalten gleichzeitig - konzipiert. Die beiden Spezifikationen teilen einige gemeinsame Merkmale, und wenn Sie bereits gelernt haben, wie man Flexbox verwendet, sollten die Ähnlichkeiten Ihnen helfen, sich mit Grid vertraut zu machen.

### Eindimensionales versus zweidimensionales Layout

Ein einfaches Beispiel kann den Unterschied zwischen ein- und zweidimensionalen Layouts verdeutlichen.

In diesem ersten Beispiel verwende ich Flexbox, um eine Reihe von Boxen zu layouten. Ich habe fünf Kind-Elemente in meinem Container und habe die Flex-Eigenschaften so eingestellt, dass sie von einer Flex-Basis von 150 Pixel wachsen und schrumpfen können.

Ich habe auch die Eigenschaft {{cssxref("flex-wrap")}} auf `wrap` gesetzt, sodass, wenn der Platz im Container zu eng wird, um die Flex-Basis beizubehalten, die Elemente in eine neue Zeile umbrechen.

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

Im Bild sehen Sie, dass zwei Elemente in eine neue Zeile umgebrochen sind. Diese Elemente teilen sich den verfügbaren Platz und sind nicht unter den Elementen darüber ausgerichtet. Dies liegt daran, dass beim Umbruch von Flex-Elementen jede neue Zeile (oder Spalte, wenn nach Spalten gearbeitet wird) eine unabhängige Flex-Linie im Flex-Container ist. Die Platzverteilung erfolgt über die Flex-Linie.

Eine häufig gestellte Frage ist dann, wie man diese Elemente ausrichtet. Hier kommt eine zweidimensionale Layout-Methode ins Spiel: Sie möchten die Ausrichtung nach Zeilen und Spalten steuern, und hier kommt Grid ins Spiel.

### Das gleiche Layout mit CSS-Grids

In diesem nächsten Beispiel erstelle ich das gleiche Layout mithilfe von Grid. Diesmal haben wir drei `1fr`-Spaltenspuren. Es ist nicht notwendig, etwas an den Elementen selbst zu setzen; sie ordnen sich automatisch in jede Zelle des erstellten Grids ein. Wie Sie sehen, bleiben sie in einem strikten Grid, das in Zeilen und Spalten ausgerichtet ist. Mit fünf Elementen erhalten wir eine Lücke am Ende der zweiten Zeile.

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

Eine einfache Frage, die Sie sich stellen sollten, wenn Sie zwischen Grid und Flexbox entscheiden, lautet:

- Benötige ich nur die Steuerung des Layouts per Zeile _oder_ Spalte – verwenden Sie Flexbox
- Muss ich das Layout per Zeile _und_ Spalte steuern – verwenden Sie Grid

### Von Inhalt nach außen oder Layout nach innen?

Zusätzlich zur Unterscheidung zwischen ein- und zweidimensional gibt es eine weitere Möglichkeit zu entscheiden, ob Sie Flexbox oder Grid für ein Layout verwenden sollten. Flexbox arbeitet vom Inhalt nach außen. Ein idealer Anwendungsfall für Flexbox ist, wenn Sie eine Reihe von Elementen haben und diese gleichmäßig in einem Container verteilen möchten. Sie lassen die Größe des Inhalts entscheiden, wie viel individuellen Platz jedes Element einnimmt. Wenn die Elemente in eine neue Zeile umgebrochen werden, ermitteln sie ihre Abstände basierend auf ihrer Größe und dem verfügbaren Platz _auf dieser Zeile_.

Grid arbeitet vom Layout nach innen. Wenn Sie das CSS-Grid-Layout verwenden, erstellen Sie ein Layout und platzieren dann Elemente darin, oder Sie erlauben den Auto-Platzierungsregeln, die Elemente gemäß diesem strikten Grid in die Zellen einzufügen. Es ist möglich, Spuren zu erstellen, die auf die Größe des Inhalts reagieren, jedoch ändern sie auch die gesamte Spur.

Wenn Sie Flexbox verwenden und feststellen, dass Sie einige der Flexibilität deaktivieren, müssen Sie wahrscheinlich das CSS-Grid-Layout verwenden. Ein Beispiel wäre, wenn Sie eine Prozentbreite für ein Flex-Element festlegen, um es mit anderen Elementen in einer darüber liegenden Zeile auszurichten. In diesem Fall ist Grid wahrscheinlich die bessere Wahl.

### Box-Ausrichtung

Die Funktion von Flexbox, die den meisten von uns am aufregendsten war, war, dass sie uns zum ersten Mal eine ordentliche Ausrichtungskontrolle gab. Es erleichterte das Zentrieren einer Box auf der Seite. Flex-Elemente können sich auf die Höhe des Flex-Containers strecken, was bedeutet, dass gleich hohe Spalten möglich waren. Dies waren Dinge, die wir schon lange machen wollten und für die wir alle möglichen Hacks entwickelt haben, zumindest optisch.

Die Ausrichtungseigenschaften aus der Flexbox-Spezifikation wurden zu einer neuen Spezifikation namens [Box Alignment Level 3](https://drafts.csswg.org/css-align/) hinzugefügt. Dies bedeutet, dass sie in anderen Spezifikationen, einschließlich Grid-Layout, verwendet werden können. In Zukunft könnten sie auch auf andere Layout-Methoden angewendet werden.

In einem späteren Leitfaden dieser Serie werde ich einen genauen Blick auf Box Alignment werfen und wie es im Grid-Layout funktioniert. Hier ist zunächst ein Vergleich zwischen einfachen Beispielen von Flexbox und Grid.

Im ersten Beispiel, das Flexbox verwendet, habe ich einen Container mit drei Elementen darin. Der Wrapper hat {{cssxref("min-height")}} gesetzt, wodurch die Höhe des Flex-Containers definiert wird. Ich habe {{cssxref("align-items")}} auf den Flex-Container gesetzt, damit die Elemente am Ende des Flex-Containers ausgerichtet werden. Ich habe auch die {{cssxref("align-self")}}-Eigenschaft für `box1` festgelegt, sodass diese sich an die Höhe des Containers streckt, und für `box2`, damit sie sich an dem Beginn des Flex-Containers anordnet.

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

Dieses zweite Beispiel verwendet ein Grid, um das gleiche Layout zu erstellen. Diesmal verwenden wir die Box-Ausrichtungseigenschaften, wie sie auf ein Grid-Layout angewendet werden. Wir richten uns also auf `start` und `end` statt auf `flex-start` und `flex-end` aus. Im Falle eines Grid-Layouts richten wir die Elemente innerhalb ihres Grid-Bereichs aus. In diesem Fall ist dies eine einzelne Gitterzelle, es könnte jedoch ein Bereich sein, der aus mehreren Gitterzellen besteht.

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

Wir haben bereits gesehen, wie die `fr`-Einheit funktioniert, um einen Anteil des verfügbaren Platzes im Grid-Container unseren Grid-Spuren zuzuweisen. Die `fr`-Einheit kann, wenn sie mit der {{cssxref("minmax", "minmax()")}}-Funktion kombiniert wird, sehr ähnliche Verhaltensweisen zu den `flex`-Eigenschaften in Flexbox bieten, während sie dennoch die Erstellung eines Layouts in zwei Dimensionen ermöglicht.

Wenn wir uns das Beispiel ansehen, in dem ich den Unterschied zwischen ein- und zweidimensionalen Layouts demonstriert habe, können Sie sehen, dass es einen Unterschied zwischen der Funktionsweise der beiden Layouts gibt, wenn es um Responsive Design geht. Beim Flex-Layout, wenn wir das Fenster breiter oder schmaler ziehen, leistet Flexbox hervorragende Arbeit, um die Anzahl der Elemente in jeder Zeile entsprechend dem verfügbaren Platz anzupassen. Wenn wir viel Platz haben, können alle fünf Elemente in einer Zeile passen. Wenn wir einen sehr engen Container haben, haben wir möglicherweise nur Platz für eines.

Im Vergleich dazu hat die Grid-Version immer drei Spaltenspuren. Die Spuren selbst werden wachsen und schrumpfen, aber es gibt immer drei, da wir beim Definieren unseres Grids nach drei gefragt haben.

#### Automatisches Auffüllen von Grid-Spuren

Wir können Grid so verwenden, dass es einen ähnlichen Effekt wie Flexbox erzeugt, während wir den Inhalt weiterhin in festen Zeilen und Spalten anordnen, indem wir unsere Spurauflistung mit Wiederholungsnotation und den Eigenschaften `auto-fill` und `auto-fit` erstellen.

In diesem nächsten Beispiel habe ich das `auto-fill`-Schlüsselwort anstelle einer ganzen Zahl in der Wiederholungsnotation verwendet und die Spurauflistung auf 200 Pixel gesetzt. Das bedeutet, dass Grid so viele 200 Pixel breite Spaltenspuren erstellt, wie im Container passen.

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

Dies ist nicht ganz dasselbe wie Flexbox. Im Flexbox-Beispiel sind die Elemente größer als die 200-Pixel-Basis, bevor sie umbrochen werden. Wir können dasselbe in Grid erreichen, indem wir `auto-fit` und die {{cssxref("minmax", "minmax()")}}-Funktion kombinieren. In diesem nächsten Beispiel erstelle ich automatisch gefüllte Spuren mit `minmax`. Ich möchte, dass meine Spuren mindestens 200 Pixel groß sind, daher setze ich das Maximum auf `1fr`. Sobald der Browser herausgefunden hat, wie oft 200 Pixel in den Container passen–unter Berücksichtigung der Grid-Abstände–behandelt er das `1fr`-Maximum als Anweisung, den verbleibenden Raum zwischen den Elementen aufzuteilen.

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

Mit Grid-Layout können wir ein Grid mit einer dynamischen Anzahl von flexiblen Spuren erstellen und die Elemente im Grid layoutieren, ausgerichtet nach Zeilen und Spalten.

## Grid und absolut positionierte Elemente

Grid interagiert mit absolut positionierten Elementen, was nützlich sein kann, wenn Sie ein Element innerhalb eines Grids oder Grid-Bereichs positionieren möchten. Die Spezifikation definiert das Verhalten, wenn ein Grid-Container ein umschließender Block und ein Elternteil des absolut positionierten Elements ist.

### Ein Grid-Container als Umgebungsblock

Um den Grid-Container zu einem umgebenden Block zu machen, müssen Sie die Positions-Eigenschaft auf den Container mit einem Wert von "relative" setzen, genau so, wie Sie einen umgebenden Block für andere absolut positionierte Elemente erstellen würden. Sobald Sie dies getan haben, nimmt ein Grid-Element mit `position: absolute` als seinen umgebenden Block den Grid-Container oder, wenn das Element auch eine Grid-Position hat, den Bereich des Grids, in den es platziert wurde.

Im untenstehenden Beispiel habe ich einen Wrapper, der vier Kind-Elemente enthält. Element drei ist absolut positioniert und auch auf dem Grid mithilfe von linienbasiertem Platzieren positioniert. Der Grid-Container hat `position: relative` und wird somit zum Positionierungskontext dieses Elements.

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
    Dieser Block ist absolut positioniert. In diesem Beispiel ist der Grid-Container
    der umgebende Block, und daher werden die absoluten Positionierungs-Offset-Werte
    von den äußeren Rändern des Bereichs aus berechnet, in den er platziert wurde.
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

Sie sehen, dass das Element den Bereich von der Grid-Spaltenlinie 2 bis 4 einnimmt und hinter der Zeile 1 beginnt. Dann wird es in diesem Bereich mit den Eigenschaften "top" und "left" versetzt. Es wurde jedoch, wie üblich bei absolut positionierten Elementen, aus dem Fluss genommen, und die Auto-Platzierungsregeln platzieren Elemente jetzt in demselben Raum. Das Element verursacht auch nicht die zusätzliche Zeile, um zur Zeilenlinie 3 zu gelangen.

Wenn wir `position: absolute` aus den Regeln für `.box3` entfernen, können Sie sehen, wie es ohne die Positionierung angezeigt würde.

### Ein Grid-Container als Elternteil

Wenn das absolut positionierte Kind ein Grid-Container als Elternteil hat, dieser Container jedoch keinen neuen Positionierungskontext erstellt, dann wird es, wie im vorherigen Beispiel, aus dem Fluss genommen. Der Positionierungskontext wird das Element sein, das einen Positionierungskontext erstellt, wie es bei anderen Layout-Methoden üblich ist. In unserem Fall, wenn wir `position: relative` aus dem obigen Wrapper entfernen, ist der Positionierungskontext das Ansichtsfenster, wie in diesem Bild gezeigt.

![Bild von Grid-Container als Elternteil](2_abspos_example.png)

Wieder einmal nimmt das Element nicht mehr am Grid-Layout teil, zum Beispiel bei der Größenbestimmung oder wenn andere Elemente automatisch platziert werden.

### Mit einem Grid-Bereich als Elternteil

Wenn das absolut positionierte Element innerhalb eines Grid-Bereichs geschachtelt ist, können Sie auf diesem Bereich einen Positionierungskontext erstellen. Im untenstehenden Beispiel haben wir unser Grid wie zuvor, aber diesmal habe ich ein Element innerhalb von `.box3` des Grids geschachtelt.

Ich habe `.box3` position: relative gegeben und dann das Unterelement mit den Offset-Eigenschaften positioniert. In diesem Fall ist der Positionierungskontext der Grid-Bereich.

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
      Dieser Block ist absolut positioniert. In diesem Beispiel ist der Grid-Bereich
      der umgebende Block, und daher werden die absoluten Positionierungs-Offset-Werte
      von den äußeren Rändern des Grid-Bereichs aus berechnet.
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

Eine letzte Interaktion mit einer anderen Layout-Spezifikation, die es zu beachten gilt, ist die Interaktion zwischen CSS-Grid-Layout und `display: contents`. Der `contents`-Wert der Display-Eigenschaft ist ein neuer Wert, der in der [Display-Spezifikation](https://drafts.csswg.org/css-display/#box-generation) wie folgt beschrieben wird:

> "Das Element selbst erzeugt keine Boxen, aber seine Kinder und Pseudoelemente erzeugen wie gewohnt Boxen. Für die Zwecke der Box-Generierung und des Layouts muss das Element so behandelt werden, als ob es durch seine Kinder und Pseudoelemente im Dokumentbaum ersetzt worden wäre."

Wenn Sie ein Element auf `display: contents` setzen, verschwindet die Box, die es normalerweise erzeugen würde, und die Boxen der Kind-Elemente erscheinen, als ob sie eine Ebene nach oben gestiegen wären. Dies bedeutet, dass Kinder eines Grid-Elements zu Grid-Elementen werden können. Klingt seltsam? Hier ist ein einfaches Beispiel.

### Grid-Layout mit verschachtelten Kind-Elementen

Im folgenden HTML-Markup habe ich ein Grid, und das erste Element im Grid ist so eingestellt, dass es alle drei Spaltenspuren überspannt. Es enthält drei verschachtelte Elemente. Da diese Elemente keine direkten Kinder sind, werden sie nicht Teil des Grid-Layouts und werden daher im regulären Block-Layout angezeigt.

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

Wenn ich jetzt `display: contents` zu den Regeln für `box1` hinzufüge, verschwindet die Box für dieses Element, und die Unterelemente werden nun zu Grid-Elementen und ordnen sich nach den Auto-Platzierungsregeln.

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

Dies kann eine Möglichkeit sein, Elemente, die im Grid geschachtelt sind, so zu behandeln, als wären sie Teil des Grids, und ist eine Lösung für einige der Probleme, die durch Subgrids gelöst würden, sobald diese implementiert sind. Sie können `display: contents` auch auf ähnliche Weise mit Flexbox verwenden, um verschachtelten Elementen zu ermöglichen, Flex-Elemente zu werden.

Wie Sie aus diesem Leitfaden sehen können, ist CSS-Grid-Layout nur ein Teil Ihres Werkzeugsatzes. Scheuen Sie sich nicht, es mit anderen Methoden des Layouts zu kombinieren, um die unterschiedlichen Effekte zu erzielen, die Sie benötigen.

## Siehe auch

- [Flexbox-Leitfäden](/de/docs/Learn/CSS/CSS_layout/Flexbox)
- [Layout-Leitfäden mit mehreren Spalten](/de/docs/Web/CSS/CSS_multicol_layout)
