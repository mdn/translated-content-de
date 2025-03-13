---
title: Ausrichten von Elementen in einem Flex-Container
slug: Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container
l10n:
  sourceCommit: f69b6432763c02faff0fa7e4a36ded410960227e
---

{{CSSRef}}

Einer der Gründe, warum Flexbox so nützlich ist, ist die Möglichkeit der richtigen Ausrichtung, einschließlich einer schnellen Methode zum vertikalen Zentrieren von Elementen. In diesem Leitfaden werden wir uns intensiv damit beschäftigen, wie die Ausrichtungs- und Begründungseigenschaften in Flexbox funktionieren.

## Verwendung von Ausrichtung in Flexbox

Flexbox bietet mehrere Eigenschaften zur Steuerung der Ausrichtung und des Abstands, wobei `align-items` und `justify-content` grundsätzlich für das Zentrieren von Elementen wichtig sind. Um ein Element zu zentrieren, verwenden wir die {{cssxref("align-items")}} Eigenschaft, um das Element auf der {{Glossary("cross_axis", "Kreuzachse")}} auszurichten, die in diesem Fall die {{Glossary("Flow_relative_values", "Blockachse")}} ist, die vertikal verläuft. Wir verwenden {{cssxref("justify-content")}}, um das Element auf der Hauptachse auszurichten, die in diesem Fall die Inline-Achse ist, die horizontal verläuft.

![Die Kreuzachse ist die vertikale Achse und die Hauptachse ist die horizontale Achse.](align1.png)

Ändern Sie die Größe des Containers oder des verschachtelten Elements im folgenden Code-Beispiel. Das verschachtelte Element bleibt immer zentriert.

```html live-sample___intro
<div class="box">
  <div></div>
</div>
```

```css live-sample___intro
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dotted rgb(96 139 168);
}

.box div {
  width: 100px;
  height: 100px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("intro")}}

## Eigenschaften zur Steuerung der Ausrichtung in Flexbox

Die Eigenschaften, die wir in diesem Leitfaden betrachten werden, sind wie folgt.

- {{cssxref("justify-content")}}: Steuert die Ausrichtung aller Elemente auf der Hauptachse.
- {{cssxref("align-items")}}: Steuert die Ausrichtung aller Elemente auf der Kreuzachse.
- {{cssxref("align-self")}}: Steuert die Ausrichtung eines einzelnen Flex-Elements auf der Kreuzachse.
- {{cssxref("align-content")}}: Steuert den Abstand zwischen Flex-Linien auf der Kreuzachse.
- {{cssxref("gap")}}, {{cssxref("column-gap")}}, und {{cssxref("row-gap")}}: Werden verwendet, um Abstände oder Rinnen zwischen Flex-Elementen zu erstellen.

Wir werden auch entdecken, wie automatische Ränder für die Ausrichtung in Flexbox verwendet werden können.

## Ausrichten von Elementen auf der Kreuzachse

Die {{cssxref("align-items")}} Eigenschaft, die auf den Flex-Container gesetzt ist, und die {{cssxref("align-self")}} Eigenschaft, die auf Flex-Elemente gesetzt ist, steuern die Ausrichtung von Flex-Elementen auf der Kreuzachse. Die Kreuzachse verläuft entlang der Spalten, wenn {{cssxref("flex-direction")}} `row` ist, und entlang der Reihen, wenn `flex-direction` `column` ist.

In diesem grundlegenden Flex-Beispiel verwenden wir die Kreuzachsen-Ausrichtung. Wenn wir `display: flex` zu einem Container hinzufügen, werden die Kindelemente zu Flex-Elementen, die in einer Reihe angeordnet sind. Standardmäßig werden sie alle gestreckt, um die Höhe des höchsten Elements zu erreichen, da dieses Element die Höhe der Elemente auf der Kreuzachse definiert. Wenn der Flex-Container eine festgelegte Höhe hat, werden die Elemente auf diese Höhe gestreckt, unabhängig davon, wie viel Inhalt in jedem Element ist.

![Drei Elemente, eines mit zusätzlichem Text, wodurch es größer ist als die anderen.](align2.png)

![Drei Elemente gestreckt auf 200 Pixel Höhe](align3.png)

Der Grund, warum die Elemente die gleiche Höhe haben, ist, dass der Anfangswert von `align-items`, die Eigenschaft, die die Ausrichtung auf der Kreuzachse steuert, auf `stretch` gesetzt ist.

Wir können andere Werte verwenden, um zu steuern, wie die Elemente ausgerichtet werden:

- `align-items: stretch`
- `align-items: flex-start`
- `align-items: flex-end`
- `align-items: start`
- `align-items: end`
- `align-items: center`
- `align-items: baseline`
- `align-items: first baseline`
- `align-items: last baseline`

Im folgenden Beispiel ist der Wert von `align-items` `stretch`. Probieren Sie die anderen Werte aus und sehen Sie, wie die Elemente im Flex-Container gegeneinander ausgerichtet werden.

```html live-sample___align-items
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three <br />has <br />extra <br />text</div>
</div>
```

```css live-sample___align-items
.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  align-items: stretch;
}

.box div {
  width: 100px;
  background-color: rgb(96 139 168 / 0.2);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
}
```

{{EmbedLiveSample("align-items")}}

### Ein einzelnes Element mit `align-self` ausrichten

Die `align-items` Eigenschaft setzt die `align-self` Eigenschaft auf alle Flex-Elemente als Gruppe. Das bedeutet, dass Sie die {{cssxref("align-self")}} Eigenschaft explizit deklarieren können, um ein einzelnes Element zu targetieren. Die `align-self` Eigenschaft akzeptiert alle dieselben Werte wie `align-items`, plus einen Wert von `auto`, der den Wert auf den im Flex-Container definierten Wert zurücksetzt.

Im nächsten Live-Beispiel hat der Flex-Container `align-items: flex-start`, was bedeutet, dass die Elemente alle am Anfang der Kreuzachse ausgerichtet sind. Mit dem `first-child` Selektor ist das erste Element auf `align-self: stretch` gesetzt. Ein anderes Element mit der `selected` Klasse hat `align-self: center` gesetzt. Ändern Sie den Wert von `align-items` oder ändern Sie die Werte von `align-self` auf den einzelnen Elementen, um zu sehen, wie dies funktioniert.

```html live-sample___align-self
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div class="selected">Three</div>
  <div>Four</div>
</div>
```

```css live-sample___align-self
.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  align-items: flex-start;
  height: 200px;
}
.box div {
  background-color: rgb(96 139 168 / 0.2);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 20px;
}
.box > *:first-child {
  align-self: stretch;
}
.box .selected {
  align-self: center;
}
```

{{EmbedLiveSample("align-self", "", "250px")}}

### Ändern der Hauptachse

Bisher haben wir das Ausrichtungsverhalten betrachtet, wenn `flex-direction` standardmäßig auf `row` gesetzt ist, während wir in einer Sprache arbeiten, die von oben nach unten geschrieben wird, mit einer horizontalen Hauptachse und einer vertikalen Kreuzachse.

![Drei Elemente, das erste ausgerichtet auf flex-start, das zweite auf center, das dritte auf flex-end. Ausrichtung auf die vertikale Achse.](align4.png)

Wenn wir den gleichen Schreibmodus beibehalten, werden bei Änderung von `flex-direction` zu `column` die `align-items` und `align-self` Eigenschaften die Elemente nach links und rechts statt oben und unten ausrichten; diese Eigenschaften richten weiterhin die Elemente entlang der Kreuzachse aus, aber die Kreuzachse ist jetzt horizontal!

![Drei Elemente, das erste ausgerichtet auf flex-start, das zweite auf center, das dritte auf flex-end. Ausrichtung auf die horizontale Achse.](align5.png)

Probieren Sie dies im folgenden Beispiel aus, das einen Flex-Container mit `flex-direction: column` hat und ansonsten genau dasselbe ist wie das vorherige Beispiel.

```html live-sample___align-self-column
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div class="selected">Three</div>
  <div>Four</div>
</div>
```

```css live-sample___align-self-column
.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 200px;
}
.box div {
  background-color: rgb(96 139 168 / 0.2);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 20px;
}
.box > *:first-child {
  align-self: stretch;
}
.box .selected {
  align-self: center;
}
```

{{EmbedLiveSample("align-self-column", "", "300px")}}

## Inhalt auf der Kreuzachse mit der `align-content` Eigenschaft ausrichten

Bisher haben wir uns darauf konzentriert, Elemente oder einzelne Elemente innerhalb des Bereichs eines {{Glossary("flex_container", "Flex-Containers")}} mit einer einzigen Flex-Linie auszurichten. Wenn Flex-Elemente über mehrere Linien hinweg erlaubt sind, kann die {{cssxref("align-content")}} Eigenschaft verwendet werden, um die Verteilung des Raums zwischen den Linien zu steuern, auch bekannt als **Verpacken von Flex-Linien**.

Damit `align-content` eine Wirkung hat, muss die Dimension der Kreuzachse (in diesem Fall die Höhe) des Flex-Containers größer sein, als nötig, um die Elemente anzuzeigen. Dann wirkt sie auf alle Elemente als Gruppe. Die `align-content` Werte bestimmen, was mit dem zusätzlichen verfügbaren Raum passiert und wie das gesamte Set von Elementen darin ausgerichtet wird.

Die `align-content` Eigenschaft nimmt die folgenden Werte:

- `align-content: flex-start`
- `align-content: flex-end`
- `align-content: start`
- `align-content: end`
- `align-content: center`
- `align-content: space-between`
- `align-content: space-around`
- `align-content: space-evenly`
- `align-content: stretch`
- `align-content: normal` (verhält sich wie `stretch`)
- `align-content: baseline`
- `align-content: first baseline`
- `align-content: last baseline`

Im Live-Beispiel unten hat der Flex-Container eine Höhe von `400 Pixel`, was mehr ist als nötig, um unsere Elemente anzuzeigen. Der Wert von `align-content` ist `space-between`, was bedeutet, dass der verfügbare Raum _zwischen_ den Flex-Linien aufgeteilt wird, die auf der Kreuzachse bündig mit dem Anfang und Ende des Containers platziert sind.

Probieren Sie die anderen Werte aus, um zu sehen, wie die `align-content` Eigenschaft funktioniert.

```html live-sample___align-content
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
</div>
```

```css live-sample___align-content
.box {
  width: 450px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
  height: 300px;
  align-content: space-between;
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 100px;
}

.box div {
  background-color: rgb(96 139 168 / 0.2);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 20px;
}
```

{{EmbedLiveSample("align-content", "", "380px")}}

Wir können wieder unsere `flex-direction` auf `column` umschalten, um zu sehen, wie sich diese Eigenschaft verhält, wenn wir mit Spalten arbeiten. Wie zuvor benötigen wir genügend Raum auf der Kreuzachse, um etwas freien Raum zu haben, nachdem alle Elemente angezeigt wurden.

```html live-sample___align-content-column
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
</div>
```

```css live-sample___align-content-column
.box {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 400px;
  height: 300px;
  align-content: space-between;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 100px;
}

.box div {
  background-color: rgb(96 139 168 / 0.2);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 20px;
}
```

{{EmbedLiveSample("align-content-column", "", "380px")}}

## Ausrichten von Inhalt auf der Hauptachse

Nachdem wir gesehen haben, wie die Ausrichtung auf der Kreuzachse funktioniert, können wir einen Blick auf die Hauptachse werfen. Hier steht uns nur eine Eigenschaft zur Verfügung — `justify-content`. Dies liegt daran, dass wir nur mit den Elementen als Gruppe auf der Hauptachse arbeiten. Mit `justify-content` steuern wir, was mit dem verfügbaren Raum passiert, wenn mehr Raum vorhanden ist, als nötig ist, um die Elemente anzuzeigen.

In unserem ersten Beispiel mit `display: flex` auf dem Container werden die Elemente als Reihe angezeigt und alle am Anfang des Containers ausgerichtet. Dies liegt daran, dass der Anfangswert von `justify-content` `normal` ist, was sich wie `start` verhält. Jeder verfügbare Raum befindet sich am Ende der Elemente.

![Drei Elemente, jeweils 100 Pixel breit in einem 500 Pixel Container. Der verfügbare Raum ist am Ende der Elemente.](align6.png)

Die `baseline` Werte sind in dieser Dimension nicht relevant. Ansonsten nimmt die `justify-content` Eigenschaft die gleichen Werte wie `align-content` an.

- `justify-content: flex-start`
- `justify-content: flex-end`
- `justify-content: start`
- `justify-content: end`
- `justify-content: left`
- `justify-content: right`
- `justify-content: center`
- `justify-content: space-between`
- `justify-content: space-around`
- `justify-content: space-evenly`
- `justify-content: stretch` (verhält sich wie `start`)
- `justify-content: normal` (verhält sich wie stretch, was sich wie start verhält)

Im folgenden Beispiel ist der Wert von `justify-content` `space-between`. Der verfügbare Raum nach der Anzeige der Elemente wird zwischen den Elementen verteilt. Das linke und rechte Element sind bündig mit dem Anfang und Ende ausgerichtet.

```html live-sample___justify-content
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

```css live-sample___justify-content
.box {
  display: flex;
  justify-content: space-between;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("justify-content")}}

Wenn die Hauptachse in der Blockrichtung ist, weil `flex-direction` auf `column` gesetzt ist, wird `justify-content` den Raum zwischen den Elementen in dieser Dimension verteilen, solange im Flex-Container genügend Raum zum Verteilen vorhanden ist.

```html live-sample___justify-content-column
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

```css live-sample___justify-content-column
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("justify-content-column", "", "380px")}}

### Ausrichtung und Schreibmodi

Beachten Sie, dass bei all diesen Ausrichtungsmethoden die Werte von `start` und `end` schreibmodusabhängig sind. Wenn der Wert von `justify-content` `start` ist und der Schreibmodus von links nach rechts, wie im Englischen, werden die Elemente beginnend von der linken Seite des Containers ausgerichtet.

![Drei Elemente, die auf der linken Seite ausgerichtet sind](basics5.png)

Wenn jedoch der Schreibmodus von rechts nach links ist, wie im Arabischen, werden die Elemente beginnend von der rechten Seite des Containers ausgerichtet.

![Drei Elemente, die von rechts ausgerichtet sind](basics6.png)

Im Live-Beispiel unten ist die `direction` Eigenschaft auf `rtl` gesetzt, um einen rechts-nach-links-Flow für unsere Elemente zu erzwingen. Sie können dies entfernen oder die Werte von `justify-content` ändern, um zu sehen, wie sich Flexbox verhält, wenn der Anfang der Inline-Richtung auf der rechten Seite liegt.

```html live-sample___justify-content-writing-mode
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

```css live-sample___justify-content-writing-mode
.box {
  direction: rtl;
  display: flex;
  justify-content: flex-end;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("justify-content-writing-mode")}}

## Ausrichtung und `flex-direction`

Die Richtung des `start` der Linie ändert sich auch, wenn Sie die `flex-direction` Eigenschaft ändern — beispielsweise, indem Sie `row-reverse` anstelle von `row` verwenden.

Im nächsten Beispiel definieren `flex-direction: row-reverse` und `justify-content: flex-end` die Richtung und den Ort der Elemente innerhalb des Flex-Containers. In einer von links nach rechts schreibenden Sprache sind die Elemente auf der linken Seite ausgerichtet. Versuchen Sie, `flex-direction: row-reverse` auf `flex-direction: row` zu ändern. Sie werden sehen, dass die Elemente jetzt auf die rechte Seite verschoben werden und die visuelle Reihenfolge der Elemente umgekehrt ist.

```html live-sample___justify-content-reverse
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

```css live-sample___justify-content-reverse
.box {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("justify-content-reverse")}}

Auch wenn dies etwas verwirrend erscheinen mag, ist die Regel, die man sich merken sollte, dass, sofern Sie nichts ändern, Flex-Elemente sich in der Richtung anordnen, in der Wörter in der Sprache Ihres Dokuments entlang der Inline-, Zeilenachse angeordnet sind. `start` und `flex-start` werden dort sein, wo der Anfang eines Satzes von Text beginnen würde.

![Diagramm zeigt start auf der linken Seite und end auf der rechten Seite.](align8.png)

Sie können sie in der Blockrichtung für die Sprache Ihres Dokuments anzeigen lassen, indem Sie `flex-direction: column` wählen. Dann werden `start` und `flex-start` dort sein, wo der Anfang Ihres ersten Absatzes von Text beginnen würde.

![Diagramm zeigt start oben und end unten.](align10.png)

Wenn Sie `flex-direction` auf einen der umgekehrten Werte ändern, werden sie sich vom Endpunkt und in der umgekehrten Reihenfolge der Art und Weise, wie Wörter in der Sprache Ihres Dokuments geschrieben werden, anordnen. Dann werden `start` und `flex-start` sich an das Ende dieser Achse ändern — also den Ort, an dem Ihre Zeilen umgebrochen würden, wenn Sie in Reihen arbeiten, oder am Ende Ihres letzten Absatzes von Text in der Blockrichtung.

![Diagramm zeigt start auf der rechten Seite und end auf der linken Seite.](align9.png)

![Diagramm zeigt end oben und start unten](align11.png)

## Verwenden von automatischen Rändern für Hauptachsen-Ausrichtung

Wir haben keine `justify-items` oder `justify-self` Eigenschaft für die Hauptachse, da unsere Elemente auf dieser Achse als Gruppe behandelt werden. Es ist jedoch möglich, durch die Verwendung von automatischen Rändern zusammen mit Flexbox einige individuelle Ausrichtungen vorzunehmen, um ein Element oder eine Gruppe von Elementen von anderen zu trennen.

Ein gängiges Muster ist eine Navigationsleiste, bei der einige Schlüsselelemente rechts ausgerichtet sind, während die Hauptgruppe links verbleibt. Man könnte denken, dass dies ein Anwendungsfall für eine `justify-self` Eigenschaft sein sollte. Betrachten Sie jedoch das folgende Bild. Als Beispiel nehmen Sie das folgende Bild mit drei Elementen auf einer Seite und zwei auf der anderen. Wenn `justify-self` auf Flex-Elementen funktionieren würde und auf Element _d_ gesetzt wäre, würde es auch die Ausrichtung von Element _e_ ändern, das folgt, was möglicherweise nicht beabsichtigt ist.

![Fünf Elemente, in zwei Gruppen. Drei links und zwei rechts.](align7.png)

Stattdessen kann das Element _d_ durch festgelegte CSS-Ränder verschoben werden.

In diesem Live-Beispiel wird das vierte Element durch Setzen von {{cssxref("margin-left")}} auf `auto` von den ersten drei Elementen getrennt, was den gesamten Raum, den es auf seiner Achse kann, einnimmt. So funktioniert das Zentrieren eines Blocks mit {{cssxref("margin")}} auto links und rechts. Jede Seite versucht, so viel Raum wie möglich einzunehmen, und so wird der Block in die Mitte geschoben.

In diesem Live-Beispiel sind die Flex-Elemente mit den Grundflexwerten in einer Reihe angeordnet, und die Klasse `push`, die auf das vierte Element angewandt wird, setzt `margin-left: auto` auf dieses Element. Versuchen Sie, die Klasse auf dem vierten Element zu entfernen oder die Klasse zu einem anderen Element hinzuzufügen, um zu sehen, wie es funktioniert.

```html live-sample___auto-margins
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div class="push">Four</div>
  <div>Five</div>
</div>
```

```css live-sample___auto-margins
.box {
  display: flex;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
.push {
  margin-left: auto;
}
```

{{EmbedLiveSample("auto-margins")}}

## Erstellen von Abständen zwischen Elementen

Um einen Abstand zwischen Flex-Elementen zu erstellen, verwenden Sie die Eigenschaften {{cssxref("gap")}}, {{cssxref("column-gap")}} und {{cssxref("row-gap")}}. Die {{cssxref("column-gap")}} Eigenschaft erzeugt Abstände zwischen den Elementen in einer Reihe. Die {{cssxref("row-gap")}} Eigenschaft erzeugt Abstände zwischen Flex-Linien, wenn Sie {{cssxref("flex-wrap")}} auf `wrap` gesetzt haben.

Die {{cssxref("gap")}} Eigenschaft ist eine Kurzform, die sowohl `row-gap` als auch `column-gap` festlegt.
Die Abstände zwischen Flex-Elementen oder Flex-Linien hängen von der Richtung ab. Wenn die {{cssxref("flex-direction")}} Eigenschaft Reihen erstellt, definiert der erste Wert den Abstand zwischen Flex-Linien, und der zweite Wert definiert den Abstand zwischen den Elementen innerhalb jeder Zeile. Bei Spalten (wenn `flex-direction` auf `column` oder `column-reverse` gesetzt ist) definiert der erste Wert den Abstand zwischen Flex-Elementen, und der zweite Wert definiert die Abstände zwischen Flex-Linien.

```html live-sample___gap
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
</div>
```

```css live-sample___gap
.box {
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 2em;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  flex: 1;
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("gap")}}

## Siehe auch

- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
