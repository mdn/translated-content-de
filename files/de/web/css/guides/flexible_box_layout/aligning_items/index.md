---
title: Ausrichten von Elementen in einem Flex-Container
short-title: Ausrichten von Flex-Elementen
slug: Web/CSS/Guides/Flexible_box_layout/Aligning_items
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Einer der Gründe, warum Flexbox so nützlich ist, liegt darin, dass es eine ordnungsgemäße Ausrichtung ermöglicht, einschließlich einer schnellen Methode zum vertikalen Zentrieren von Elementen. In diesem Leitfaden werden wir uns genau ansehen, wie die Ausrichtungs- und Rechtfertigungseigenschaften in Flexbox funktionieren.

## Verwendung der Ausrichtung in Flexbox

Flexbox bietet mehrere Eigenschaften zur Steuerung von Ausrichtung und Abstand, wobei `align-items` und `justify-content` grundlegend für das Zentrieren von Elementen sind. Um ein Element zu zentrieren, verwenden wir die {{cssxref("align-items")}}-Eigenschaft, um das Element auf der {{Glossary("cross_axis", "Queraxt")}} auszurichten, die in diesem Fall die {{Glossary("Flow_relative_values", "Block-Achse")}} ist, die vertikal verläuft. Wir verwenden {{cssxref("justify-content")}}, um das Element auf der Hauptachse auszurichten, die in diesem Fall die Inline-Achse ist, die horizontal verläuft.

![Die Queraxt ist die vertikale Achse und die Hauptachse ist die horizontale Achse.](align1.png)

Ändern Sie die Größe des Containers oder des geschachtelten Elements im folgenden Codebeispiel. Das geschachtelte Element bleibt immer zentriert.

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

Die Eigenschaften, die wir in diesem Leitfaden betrachten werden, sind folgende:

- {{cssxref("justify-content")}}: Steuert die Ausrichtung aller Elemente auf der Hauptachse.
- {{cssxref("align-items")}}: Steuert die Ausrichtung aller Elemente auf der Queraxt.
- {{cssxref("align-self")}}: Steuert die Ausrichtung eines einzelnen Flex-Elements auf der Queraxt.
- {{cssxref("align-content")}}: Steuert den Raum zwischen Flex-Linien auf der Queraxt.
- {{cssxref("gap")}}, {{cssxref("column-gap")}} und {{cssxref("row-gap")}}: Werden verwendet, um Lücken oder Abstände zwischen Flex-Elementen zu erzeugen.

Wir werden auch entdecken, wie automatische Ränder für die Ausrichtung in Flexbox verwendet werden können.

## Elemente auf der Queraxt ausrichten

Die {{cssxref("align-items")}}-Eigenschaft, die auf dem Flex-Container festgelegt ist, und die {{cssxref("align-self")}}-Eigenschaft, die auf Flex-Elementen festgelegt ist, steuern die Ausrichtung von Flex-Elementen auf der Queraxt. Die Queraxt verläuft nach unten, wenn {{cssxref("flex-direction")}} `row` ist, und entlang der Reihen, wenn `flex-direction` `column` ist.

In diesem grundlegenden Flex-Beispiel verwenden wir die Querauslenkung. Wenn wir einem Container `display: flex` hinzufügen, werden die Kind-Elemente zu Flex-Elementen, die in einer Reihe angeordnet sind. Standardmäßig dehnen sie sich alle so aus, dass sie die Höhe des höchsten Elements erreichen, da dieses Element die Höhe der Elemente auf der Queraxt definiert. Wenn der Flex-Container eine festgelegte Höhe hat, dehnen sich die Elemente unabhängig vom Inhalt auf diese Höhe aus.

![Drei Elemente, eines mit zusätzlichem Text, das es höher macht als die anderen.](align2.png)

![Drei Elemente, die sich auf 200 Pixel Höhe erstrecken](align3.png)

Der Grund, warum die Elemente die gleiche Höhe haben, ist, dass der anfängliche Wert von `align-items`, der die Ausrichtung auf der Queraxt steuert, auf `stretch` gesetzt ist.

Wir können andere Werte verwenden, um zu steuern, wie die Elemente ausgerichtet sind:

- `align-items: stretch`
- `align-items: flex-start`
- `align-items: flex-end`
- `align-items: start`
- `align-items: end`
- `align-items: center`
- `align-items: baseline`
- `align-items: first baseline`
- `align-items: last baseline`

Im folgenden Beispiel ist der Wert von `align-items` auf `stretch` gesetzt. Versuchen Sie die anderen Werte und beobachten Sie, wie die Elemente gegeneinander im Flex-Container ausgerichtet sind.

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

### Ausrichten eines einzelnen Elements mit `align-self`

Die `align-items`-Eigenschaft setzt die `align-self`-Eigenschaft für alle Flex-Elemente als Gruppe. Das bedeutet, dass Sie die {{cssxref("align-self")}}-Eigenschaft explizit angeben können, um ein einzelnes Element zu zielen. Die `align-self`-Eigenschaft akzeptiert alle gleichen Werte wie `align-items` plus einen Wert von `auto`, der den Wert auf den im Flex-Container definierten zurücksetzt.

In diesem nächsten Live-Beispiel hat der Flex-Container `align-items: flex-start`, was bedeutet, dass die Elemente alle am Anfang der Queraxt ausgerichtet sind. Mit dem `first-child`-Selektor wird das erste Element auf `align-self: stretch` gesetzt. Ein anderes Element mit der Klasse `selected` hat `align-self: center` gesetzt. Ändern Sie den Wert von `align-items` oder die Werte von `align-self` auf den einzelnen Elementen, um zu sehen, wie dies funktioniert.

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

Bisher haben wir das Ausrichtungsverhalten betrachtet, wenn die `flex-direction` standardmäßig auf `row` gesetzt ist, während in einer Sprache gearbeitet wird, die von oben nach unten geschrieben wird, mit einer horizontalen Hauptachse und einer vertikalen Queraxt.

![Drei Elemente, das erste ausgerichtet zu flex-start, das zweite zur Mitte, das dritte zu flex-end. Ausrichtung auf der vertikalen Achse.](align4.png)

Wenn derselbe Schreibmodus beibehalten wird, richtet die `align-items`- und `align-self`-Eigenschaft, wenn die `flex-direction` auf `column` geändert wird, die Elemente nach links und rechts anstatt oben und unten aus; diese Eigenschaften richten die Elemente immer noch entlang der Queraxt aus, aber die Queraxt ist jetzt horizontal!

![Drei Elemente, das erste ausgerichtet zu flex-start, das zweite zur Mitte, das dritte zu flex-end. Ausrichtung auf der horizontalen Achse.](align5.png)

Sie können dies im folgenden Beispiel ausprobieren, das einen Flex-Container mit `flex-direction: column` hat, ansonsten jedoch genau dasselbe wie das vorherige Beispiel ist.

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

## Ausrichten von Inhalt auf der Queraxt mit der `align-content`-Eigenschaft

Bisher haben wir uns darauf konzentriert, Elemente oder einzelne Elemente innerhalb des Bereichs, der von einem {{Glossary("flex_container", "Flex-Container")}} definiert wird, mit einer einzigen Linie von Flex-Elementen auszurichten. Wenn Flex-Elemente über mehrere Linien verteilt werden dürfen, kann die {{cssxref("align-content")}}-Eigenschaft verwendet werden, um die Verteilung des Raums zwischen den Linien zu steuern, auch bekannt als **Verpackung von Flex-Linien**.

Damit `align-content` eine Wirkung hat, muss die Queraxt-Dimension (in diesem Fall die Höhe) des Flex-Containers größer sein als nötig, um die Elemente anzuzeigen. Sie wirkt dann auf alle Elemente als Ganzes. Die `align-content`-Werte diktieren, was mit dem zusätzlich verfügbaren Raum passiert und wie die gesamte Menge der Elemente innerhalb dieses Raums ausgerichtet wird.

Die `align-content`-Eigenschaft nimmt die folgenden Werte an:

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

Im Live-Beispiel unten hat der Flex-Container eine Höhe von `400 Pixeln`, die mehr als nötig ist, um unsere Elemente anzuzeigen. Der Wert von `align-content` ist `space-between`, was bedeutet, dass der verfügbare Raum _zwischen_ den Flex-Linien geteilt wird, die bündig mit dem Anfang und Ende des Containers auf der Queraxt platziert sind.

Probieren Sie die anderen Werte aus, um zu sehen, wie die `align-content`-Eigenschaft funktioniert.

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

Erneut können wir unsere `flex-direction` auf `column` umschalten, um zu sehen, wie sich diese Eigenschaft verhält, wenn wir mit Spalten arbeiten. Wie zuvor benötigen wir genug Platz auf der Queraxt, um etwas freien Raum zu haben, nachdem alle Elemente angezeigt wurden.

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

Nachdem wir nun gesehen haben, wie die Ausrichtung auf der Queraxt funktioniert, können wir einen Blick auf die Hauptachse werfen. Hier haben wir nur eine Eigenschaft verfügbar — `justify-content`. Das liegt daran, dass wir nur mit den Elementen als Gruppe auf der Hauptachse umgehen. Mit `justify-content` steuern wir, was mit dem verfügbaren Raum passiert, sollte mehr Platz vorhanden sein, als zur Anzeige der Elemente benötigt wird.

In unserem ersten Beispiel mit `display: flex` auf dem Container werden die Elemente als Reihe angezeigt und alle am Anfang des Containers ausgerichtet. Dies liegt daran, dass der Anfangswert von `justify-content` `normal` ist, was sich wie `start` verhält. Jeder verfügbare Raum wird am Ende der Elemente plaziert.

![Drei Elemente, jeweils 100 Pixel breit in einem 500 Pixel breiten Container. Der verfügbare Raum liegt am Ende der Elemente.](align6.png)

Die `baseline`-Werte sind in dieser Dimension nicht relevant. Ansonsten akzeptiert die `justify-content`-Eigenschaft dieselben Werte wie `align-content`.

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
- `justify-content: stretch` (verhält sich wie start)
- `justify-content: normal` (verhält sich wie stretch, was sich wie start verhält)

Im Beispiel unten ist der Wert von `justify-content` `space-between`. Der verfügbare Raum nach der Anzeige der Elemente wird zwischen den Elementen verteilt. Das linke und das rechte Element sind bündig mit dem Anfang und Ende ausgerichtet.

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

Wenn die Hauptachse in der Blockrichtung ist, weil `flex-direction` auf `column` gesetzt ist, dann verteilt `justify-content` den Raum zwischen den Elementen in dieser Dimension, solange Platz im Flex-Container vorhanden ist, um diesen zu verteilen.

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

### Ausrichtung und Schreibweisen

Denken Sie daran, dass bei all diesen Ausrichtungsmethoden die Werte von `start` und `end` schreibweiseabhängig sind. Wenn der Wert von `justify-content` `start` ist und die Schreibrichtung ist von links nach rechts, wie im Englischen, werden die Elemente beginnend an der linken Seite des Containers ausgerichtet.

![Drei Elemente am linken Rand ausgerichtet](basics5.png)

Wenn jedoch die Schreibrichtung von rechts nach links ist, wie im Arabischen, werden die Elemente beginnend an der rechten Seite des Containers ausgerichtet.

![Drei Elemente vom rechten Rand ausgerichtet](basics6.png)

Im Live-Beispiel unten ist die `direction`-Eigenschaft `rtl` gesetzt, um einen rechts-nach-links-Fluss für unsere Elemente zu erzwingen. Sie können dies entfernen oder die Werte von `justify-content` ändern, um zu sehen, wie Flexbox sich verhält, wenn der Start der Inline-Richtung rechts liegt.

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

Die Richtung der Linie von `start` wird sich ebenfalls ändern, wenn Sie die `flex-direction`-Eigenschaft ändern — zum Beispiel durch die Verwendung von `row-reverse` anstelle von `row`.

Im nächsten Beispiel definieren `flex-direction: row-reverse` und `justify-content: flex-end` die Richtung und Position der Elemente innerhalb des Flex-Containers. In einer von links nach rechts Sprache richten sich die Elemente an der linken Seite aus. Versuchen Sie, `flex-direction: row-reverse` in `flex-direction: row` zu ändern. Sie werden sehen, dass die Elemente jetzt auf die rechte Seite wandern und die visuelle Reihenfolge der Elemente umgekehrt ist.

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

Auch wenn dies alles etwas verwirrend erscheinen mag, lautet die Regel, die man sich merken muss, dass sich Flex-Elemente in der Richtung, in der die Wörter in der Sprache Ihres Dokuments entlang der Inline-Reihenachse angeordnet sind, selbst ausrichten, es sei denn, Sie tun etwas, um dies zu ändern. `start` und `flex-start` werden dort sein, wo der Beginn eines Satzes Textes wäre.

![Diagramm zeigt Start auf der linken und Ende auf der rechten Seite.](align8.png)

Sie können sie in der Blockrichtung anzeigen lassen, die für die Sprache Ihres Dokuments gilt, indem Sie `flex-direction: column` auswählen. Dann werden `start` und `flex-start` dort sein, wo der obere Rand Ihres ersten Absatzes Textes anfängt.

![Diagramm zeigt Start oben und Ende unten.](align10.png)

Wenn Sie `flex-direction` auf einen der umgekehrten Werte ändern, werden sie sich vom End-Achse aus selbst ausrichten und in umgekehrter Reihenfolge zu der Art, wie die Wörter in der Sprache Ihres Dokuments geschrieben sind. Dann werden `start` und `flex-start` an das Ende dieser Achse wechseln — also zu dem Ort, an dem Ihre Zeilen umgebrochen werden würden, wenn Sie in Zeilen arbeiten, oder am Ende Ihres letzten Absatzes von Text in der Blockrichtung.

![Diagramm zeigt Start auf der rechten und Ende auf der linken Seite.](align9.png)

![Diagramm zeigt Ende oben und Start unten](align11.png)

## Verwenden von automatischen Rändern für die Ausrichtung auf der Hauptachse

Wir haben keine `justify-items`- oder `justify-self`-Eigenschaft auf der Hauptachse zur Verfügung, da unsere Elemente auf dieser Achse als Gruppe behandelt werden. Es ist jedoch möglich, eine individuelle Ausrichtung vorzunehmen, um ein Element oder eine Gruppe von Elementen von anderen zu trennen, indem automatische Ränder zusammen mit Flexbox verwendet werden.

Ein häufiges Muster ist eine Navigationsleiste, bei der einige Schlüsselelemente nach rechts ausgerichtet sind, während die Hauptgruppe links bleibt. Vielleicht denken Sie, dass dies ein Anwendungsfall für eine `justify-self`-Eigenschaft sein sollte. Betrachten Sie jedoch das folgende Bild. Als Beispiel nehmen Sie das folgende Bild mit drei Elementen auf der einen Seite und zwei auf der anderen. Wenn `justify-self` auf Flex-Elementen funktionieren würde und auf Element _d_ gesetzt wäre, würde es auch die Ausrichtung des nachfolgenden Elements _e_ ändern, was möglicherweise nicht beabsichtigt ist.

![Fünf Elemente in zwei Gruppen. Drei auf der linken und zwei auf der rechten Seite.](align7.png)

Stattdessen kann das Element _d_ mit CSS-Rändern gezielt verschoben werden.

In diesem Live-Beispiel wird das vierte Element von den ersten drei Elementen getrennt, indem {{cssxref("margin-left")}} auf `auto` gesetzt wird, was allen Platz in seiner Achse einnimmt. So funktioniert es, einen Block mit {{cssxref("margin")}} auto links und rechts zu zentrieren. Jede Seite versucht, so viel Platz wie möglich einzunehmen, und der Block wird in die Mitte gedrängt.

In diesem Live-Beispiel werden die Flex-Elemente in einer Reihe mit den grundlegenden Flex-Werten angeordnet, und die Klasse `push`, die auf das vierte Element gesetzt ist, wendet `margin-left: auto` auf dieses Element an. Versuchen Sie, die Klasse am vierten Element zu entfernen oder die Klasse auf ein anderes Element zu setzen, um zu sehen, wie es funktioniert.

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

## Lücken zwischen den Elementen schaffen

Um eine Lücke zwischen Flex-Elementen zu schaffen, verwenden Sie die {{cssxref("gap")}}, {{cssxref("column-gap")}} und {{cssxref("row-gap")}}-Eigenschaften. Die {{cssxref("column-gap")}}-Eigenschaft erzeugt Lücken zwischen den Elementen in einer Reihe. Die {{cssxref("row-gap")}}-Eigenschaft erzeugt Lücken zwischen Flex-Linien, wenn Sie {{cssxref("flex-wrap")}} auf `wrap` gesetzt haben.

Die {{cssxref("gap")}}-Eigenschaft ist eine Kurzform, die sowohl `row-gap` als auch `column-gap` setzt. Die Lücken zwischen Flex-Elementen oder Flex-Linien hängen von der Richtung ab. Wenn die {{cssxref("flex-direction")}}-Eigenschaft Zeilen erzeugt, definiert der erste Wert die Lücke zwischen den Flex-Linien, und der zweite Wert definiert die Lücke zwischen den Elementen innerhalb jeder Zeile. Mit Spalten (wenn `flex-direction` auf `column` oder `column-reverse` gesetzt ist), definiert der erste Wert die Lücke zwischen Flex-Elementen und der zweite Wert die Lücken zwischen Flex-Linien.

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

- [CSS Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul
- [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
