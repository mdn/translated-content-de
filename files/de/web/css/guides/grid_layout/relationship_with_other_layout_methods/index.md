---
title: Beziehung des Rasterlayouts zu anderen Layoutmethoden
short-title: Raster und andere Layouts
slug: Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods
l10n:
  sourceCommit: 98066c71788a31f0f8726f5bf3d4a2acf4a6ff88
---

Das [CSS-Rasterlayout](/de/docs/Web/CSS/Guides/Grid_layout) ist dafür konzipiert, neben den anderen Teilen von CSS als Teil eines vollständigen Systems zur Erstellung von Layouts zu arbeiten. Dieser Leitfaden erklärt, wie das Rasterlayout mit anderen Techniken zusammenpasst.

## Raster und Flexbox

Der grundlegende Unterschied zwischen dem CSS-Rasterlayout und dem [CSS-Flexbox-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) besteht darin, dass Flexbox für das Layout in einer Dimension – entweder einer Zeile _oder_ einer Spalte – entwickelt wurde. Das Raster wurde für zweidimensionale Layouts konzipiert – Zeilen und Spalten gleichzeitig. Beide Spezifikationen nutzen [CSS-Box-Ausrichtungs](/de/docs/Web/CSS/Guides/Box_alignment)-Funktionen. Wenn Sie bereits gelernt haben, wie man Flexbox verwendet, sollten die Ähnlichkeiten Ihnen helfen, das Raster zu verstehen.

### Eindimensionales versus zweidimensionales Layout

Ein einfaches Beispiel kann den Unterschied zwischen eindimensionale und zweidimensionale Layouts demonstrieren.

Im ersten Beispiel verwenden wir Flexbox, um eine Reihe von Kästchen anzuordnen. Wir haben fünf Kindelemente in unserem Container und wir haben den Flexeigenschaften Werte zugewiesen, sodass sie von einer Flexbasis von 150 Pixeln wachsen und schrumpfen können.

Wir setzen auch die Eigenschaft {{cssxref("flex-wrap")}} auf `wrap`, sodass, wenn der Platz im Container zu eng wird, um die Flexbasis zu halten, sich die Elemente in eine neue Zeile verlagern.

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

Im Bild sehen Sie, dass zwei Elemente in eine neue Zeile umgebrochen sind. Diese Elemente teilen sich den verfügbaren Platz und ordnen sich nicht unterhalb der darüber liegenden Elemente an. Das liegt daran, dass beim Scrollen von Flex-Elementen jede neue Zeile (oder Spalte, wenn man mit Spalten arbeitet) eine unabhängige Flexlinie im Flexcontainer ist. Die Raumverteilung erfolgt über die Flexlinie.

Eine häufige Frage ist dann, wie man diese Elemente ausrichtet. Hier benötigen Sie eine zweidimensionale Layoutmethode: Sie möchten die Ausrichtung nach Zeilen und Spalten kontrollieren, und hier kommt das Raster ins Spiel.

### Dasselbe Layout mit CSS-Rastern

Im nächsten Beispiel erstellen wir dasselbe Layout mit dem Raster. Diesmal haben wir drei `1fr`-Spurspuren. Wir müssen nichts an den Elementen selbst einstellen; sie legen sich selbst in jede Zelle des erstellten Rasters. Wie Sie sehen, bleiben sie in einem strikten Raster, das sich in Zeilen und Spalten ausrichtet. Mit fünf Elementen erhalten wir eine Lücke am Ende der zweiten Zeile.

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

Eine wichtige Frage, die man sich stellen sollte, wenn man sich zwischen Raster und Flexbox entscheidet, ist:

- Müssen wir das Layout nur nach Zeilen _oder_ Spalten kontrollieren? Wenn ja, verwenden Sie Flexbox.
- Müssen wir das Layout nach Zeilen _und_ Spalten kontrollieren? Wenn ja, verwenden Sie das Rasterlayout.

### Inhalt von außen oder Layout von innen?

Zusätzlich zur Unterscheidung zwischen eindimensional und zweidimensional gibt es eine weitere Möglichkeit zu entscheiden, ob Sie Flexbox oder Raster für ein Layout verwenden sollten. Flexbox arbeitet von innen nach außen. Ein idealer Anwendungsfall für Flexbox ist, wenn Sie eine Reihe von Elementen haben und diese gleichmäßig in einem Container anordnen möchten. Sie lassen die Größe des Inhalts entscheiden, wie viel Platz jedes Element einnimmt. Wenn die Elemente in eine neue Zeile umgebrochen werden, arbeiten sie ihren Abstand basierend auf ihrer Größe und dem verfügbaren Platz _in dieser Zeile_ aus.

Das Raster arbeitet von innen nach außen. Wenn Sie das CSS-Rasterlayout verwenden, erstellen Sie ein Layout und platzieren dann Elemente darin oder Sie lassen die Autoplatzierungsregeln die Elemente gemäß dem strikten Raster in die Rasterzellen platzieren. Es ist möglich, Spuren zu erstellen, die auf die Größe des Inhalts reagieren, jedoch ändern sie auch die gesamte Spur.

Wenn Sie Flexbox verwenden und feststellen, dass Sie einige der Flexibilität deaktivieren, müssen Sie wahrscheinlich das CSS-Rasterlayout verwenden. Wenn Sie beispielsweise die Breite eines Flexelements festlegen, um es mit anderen Elementen in einer darüber liegenden Zeile auszurichten, ist ein Raster wahrscheinlich die bessere Wahl.

### Box-Ausrichtung

Die meisten Rasterausrichtungsfunktionen wurden ursprünglich im [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) definiert. Diese Funktionen boten zum ersten Mal eine ordnungsgemäße Ausrichtungskontrolle und ermöglichten das Zentrieren eines Kastens auf der Seite. Flex-Elemente können sich auf die Höhe des Flexcontainers strecken, was bedeutet, dass gleich hohe Spalten möglich waren. Diese Eigenschaften sind jetzt im [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment)-Modul definiert und werden in mehreren Layoutmodi, einschließlich Rasterlayout, verwendet.

Wir werden uns später genauer mit der [Ausrichtung von Elementen im CSS-Rasterlayout](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment) befassen. Für den Moment hier ein Vergleich zwischen Beispielen von Flexbox und Raster.

Im ersten Beispiel, das Flexbox verwendet, haben wir einen Container mit drei Elementen darin. Die {{cssxref("min-height")}} des Containers ist festgelegt, sodass sie die Höhe des Flexcontainers definiert. Wir haben {{cssxref("align-items")}} auf dem Flexcontainer auf `flex-end` gesetzt, sodass die Elemente am Ende des Flexcontainers ausgerichtet sind. Wir haben auch die Eigenschaft {{cssxref("align-self")}} auf `box1` gesetzt, damit sie die Standardeinstellung überschreibt und sich auf die Höhe des Containers streckt und auf `box2`, damit sie sich am Anfang des Flexcontainers ausrichtet.

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

### Ausrichtung in CSS-Rastern

In diesem Beispiel wird ein Raster verwendet, um dasselbe Layout zu erstellen. Wir verwenden die Box-Ausrichtungs-Eigenschaften, wie sie auf ein Rasterlayout angewendet werden. Wir richten uns nach `start` und `end` aus. (Wir könnten die {{cssxref("content-position")}} Synonyme `flex-start` und `flex-end` verwenden.) Im Falle eines Rasterlayouts richten wir die Elemente innerhalb ihres Rasterbereichs aus. In diesem Fall ist das eine einzelne Rasterzelle, aber es könnte auch ein Bereich sein, der aus mehreren Rasterzellen besteht.

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

Wir haben bereits gesehen, wie die `fr`-Einheit funktioniert, um einen Anteil des verfügbaren Raums im Rastercontainer unseren Rasterspuren zuzuweisen. Die `fr`-Einheit kann in Kombination mit der {{cssxref("minmax()")}}-Funktion ein ähnliches Verhalten wie die `flex`-Eigenschaften in Flexbox bieten, während es gleichzeitig die Erstellung eines zweidimensionalen Layouts ermöglicht.

Wenn wir uns das Beispiel anschauen, das den Unterschied zwischen ein- und zweidimensionalen Layouts demonstriert, können Sie sehen, dass es einen Unterschied in der Art und Weise gibt, wie die beiden Layouts reaktiv arbeiten. Beim Flexlayout, wenn wir unser Fenster breiter und kleiner ziehen, macht Flexbox einen guten Job, die Anzahl der Elemente in jeder Zeile entsprechend dem verfügbaren Platz anzupassen. Wenn wir viel Platz haben, passen alle fünf Elemente in eine Zeile. Wenn wir einen sehr schmalen Container haben, haben wir möglicherweise nur Platz für einen.

Im Vergleich dazu hat die Rasterversion immer drei Spurkollonien. Die Spuren selbst werden wachsen und schrumpfen, aber es gibt immer drei, da wir beim Definieren unseres Rasters um drei gebeten haben.

#### Automatisches Füllen der Rasterspuren

Wir können mit dem Raster einen ähnlichen Effekt wie mit Flexbox erzielen und gleichzeitig den Inhalt in strikte Zeilen und Spalten anordnen, indem wir unsere Spurauflistung mit Wiederholungsnotation und den Eigenschaften `auto-fill` und `auto-fit` erstellen.

Im nächsten Beispiel haben wir das Schlüsselwort `auto-fill` anstelle einer ganzen Zahl in der Wiederholungsnotation verwendet und die Spurauflistung auf 200 Pixel gesetzt. Das bedeutet, dass das Raster so viele Spurkollonien von 200 Pixeln erstellen wird, wie in den Container passen.

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

Dies ist nicht ganz dasselbe wie Flexbox. Im Flexbox-Beispiel sind die Elemente größer als die 200 Pixel Basis, bevor sie umgebrochen werden. Wir können dasselbe im Raster erreichen, indem wir `auto-fit` und die {{cssxref("minmax()")}}-Funktion kombinieren.

In diesem Beispiel erstellen wir automatisch gefüllte Spuren mit `minmax`. Wir möchten, dass unsere Spuren mindestens 200 Pixel groß sind, daher setzen wir das Maximum auf `1fr`. Sobald der Browser berechnet hat, wie oft 200 Pixel in den Container passen – einschließlich der Rasterabstände – wird er das `1fr`-Maximum als Anweisung zur Verteilung des verbleibenden Raums zwischen den Elementen behandeln.

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

Mit dem Rasterlayout können wir ein Raster mit einer dynamischen Anzahl von flexiblen Spuren erstellen und die Elemente im Raster ausgerichtet nach Zeilen und Spalten anordnen.

## Raster und absolut positionierte Elemente

Das Raster interagiert mit [absolut positionierten](/de/docs/Web/CSS/Reference/Properties/position#absolute_positioning) Elementen, was nützlich sein kann, wenn Sie ein Element innerhalb eines Rasters oder Rasterbereichs positionieren möchten. Die Spezifikation definiert das Verhalten, wenn ein Rastercontainer ein enthaltender Block und ein Elternteil des absolut positionierten Elements ist.

### Ein Rastercontainer als enthaltender Block

Um den Rastercontainer zu einem [enthaltenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) zu machen, müssen Sie die Eigenschaft {{cssxref("position")}} zum Container mit dem Wert `relative` hinzufügen, genauso wie Sie einen enthaltenden Block für andere absolut positionierte Elemente erstellen würden. Sobald Sie dies getan haben und einem Rasterelement `position: absolute` geben, nimmt es als seinen enthaltenden Block den Rastercontainer oder, wenn das Element ebenfalls eine Rasterposition hat, den Bereich des Rasters, in den es platziert wird.

Im untenstehenden Beispiel haben wir einen Wrapper, der vier Kindelemente enthält. Element drei ist absolut positioniert und auch im Raster mit linienbasierter Platzierung platziert. Der Rastercontainer hat `position: relative` und wird somit zum Positionierungskontext dieses Elements.

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

Sie können sehen, dass das Element den Bereich von Rasterspaltenlinie 2 bis 4 einnimmt und nach Linie 1 beginnt. Dann wird es unter Verwendung der oberen und linken Eigenschaften in diesem Bereich versetzt. Es wurde jedoch, wie üblich für absolut positionierte Elemente, aus dem Fluss genommen, sodass die Autoplatzierungsregeln nun Elemente in denselben Raum einfügen. Das Element verursacht auch nicht, dass eine zusätzliche Zeile erstellt wird, um bis zur Zeilenlinie 3 zu spannen.

Wenn wir `position: absolute` aus den Regeln für `.box3` entfernen, können Sie sehen, wie es ohne die Positionierung angezeigt würde.

### Ein Rastercontainer als Elternteil

Wenn das absolut positionierte Kind einen Rastercontainer als übergeordnetes Element hat, aber dieser Container keinen neuen Positionierungskontext erstellt, wird es wie im vorherigen Beispiel aus dem Fluss genommen. Der _Positionierungskontext_ ist das Element, relativ zu dem das absolut positionierte Element positioniert wird. Der Positionierungskontext wird das Element sein, das einen Positionierungskontext erstellt, wie es bei anderen Layoutmethoden üblich ist. In unserem Fall, wenn wir `position: relative` aus dem Wrapper oben entfernen, ist der Positionierungskontext vom Ansichtsfenster, wie in diesem Bild dargestellt.

![Bild des Rastercontainers als Elternteil](2_abspos_example.png)

Wieder einmal nimmt das Element nicht am Rasterlayout im Hinblick auf die Größenanpassung oder wenn andere Elemente automatisch platziert werden, teil.

### Mit einem Rasterbereich als Elternteil

Wenn das absolut positionierte Element in einem Rasterbereich verschachtelt ist, können Sie einen Positionierungskontext in diesem Bereich erstellen. In diesem Beispiel haben wir unser Raster wie zuvor, aber diesmal haben wir ein Element innerhalb von `.box3` des Rasters verschachtelt.

Wir haben `.box3` relativ positioniert und dann das Unterelement mit den Versatz-Eigenschaften positioniert. In diesem Fall ist der Positionierungskontext der Rasterbereich.

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

## Raster und display: contents

Eine letzte Erwähnung ist die Interaktion zwischen dem CSS-Rasterlayout und `display: contents`, das im [CSS-Display](/de/docs/Web/CSS/Guides/Display)-Modul definiert wird. Wenn die {{cssxref("display")}}-Eigenschaft auf `contents` gesetzt ist, erzeugt das Element selbst keine Boxen, aber seine Kinder und Pseudo-Elemente erzeugen weiterhin Boxen wie gewohnt. Das bedeutet, dass für die Zwecke der Boxengenerierung und des Layouts das Element so behandelt wird, als ob es durch seine Kinder und Pseudo-Elemente im Dokumentenbaum ersetzt worden wäre.

Wenn Sie ein Element auf `display: contents` setzen, verschwindet die Box, die es normalerweise erzeugen würde, und die Boxen der Kindelemente erscheinen, als wären sie eine Ebene nach oben gestiegen. Das bedeutet, dass Kinder eines Rasterelements zu Rasterelementen werden können. Klingt seltsam? Hier ist ein Beispiel.

### Rasterlayout mit verschachtelten Kindelementen

In diesem Beispiel ist das erste Element unseres Rasters so eingestellt, dass es sich über alle drei Spurkollonien erstreckt. Es enthält drei verschachtelte Elemente. Da diese Elemente keine direkten Kinder sind, werden sie nicht Teil des Rasterlayouts und daher mithilfe des regulären Blocklayouts angezeigt.

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

Wenn wir jetzt `display: contents` zu den Regeln für `box1` hinzufügen, verschwindet die Box für dieses Element und die Unterelemente werden jetzt zu Rasterelementen und ordnen sich mit den Autoplatzierungsregeln an.

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

Dies kann eine Möglichkeit sein, Elemente, die in das Raster verschachtelt sind, so zu verhalten, als wären sie Teil des Rasters. Sie können `display: contents` in ähnlicher Weise mit Flexbox verwenden, um es geschachtelten Elementen zu ermöglichen, Flexelemente zu werden.

Wie Sie aus diesem Leitfaden sehen können, ist das CSS-Rasterlayout nur ein Teil Ihres Werkzeugkastens. Zögern Sie nicht, es mit anderen Methoden zur Erstellung von Layouts zu kombinieren, um die unterschiedlichen Effekte zu erzielen, die Sie benötigen.

## Siehe auch

- [Flexbox-Leitfäden](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
- [Leitfäden für mehrspaltige Layouts](/de/docs/Web/CSS/Guides/Multicol_layout)
