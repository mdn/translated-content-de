---
title: Ausrichten von Elementen in einem Flex-Container
short-title: Ausrichten von Flex-Elementen
slug: Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Einer der Gründe, warum Flexbox so nützlich ist, liegt darin, dass es eine korrekte Ausrichtung ermöglicht, einschließlich einer schnellen Methode zur vertikalen Zentrierung von Elementen. In diesem Leitfaden werden wir uns detailliert ansehen, wie die Ausrichtungs- und Rechtfertigungseigenschaften in Flexbox funktionieren.

## Verwendung von Ausrichtung in Flexbox

Flexbox bietet mehrere Eigenschaften zur Kontrolle der Ausrichtung und des Abstands, wobei `align-items` und `justify-content` grundlegend für die Zentrierung von Elementen sind. Um ein Element zu zentrieren, verwenden wir die {{cssxref("align-items")}}-Eigenschaft, um das Element auf der {{Glossary("cross_axis", "Querachse")}} auszurichten, die in diesem Fall die {{Glossary("Flow_relative_values", "Blockachse")}} ist und vertikal verläuft. Wir verwenden {{cssxref("justify-content")}}, um das Element auf der Hauptachse auszurichten, die in diesem Fall die Inlineachse ist und horizontal verläuft.

![Die Querachse ist die vertikale Achse und die Hauptachse ist die horizontale Achse.](align1.png)

Verändern Sie die Größe des Containers oder des verschachtelten Elements im untenstehenden Codebeispiel. Das verschachtelte Element bleibt immer zentriert.

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

## Eigenschaften zur Kontrolle der Ausrichtung in Flexbox

Die Eigenschaften, die wir in diesem Leitfaden betrachten werden, sind wie folgt.

- {{cssxref("justify-content")}}: Steuert die Ausrichtung aller Elemente auf der Hauptachse.
- {{cssxref("align-items")}}: Steuert die Ausrichtung aller Elemente auf der Querachse.
- {{cssxref("align-self")}}: Steuert die Ausrichtung eines einzelnen Flex-Elements auf der Querachse.
- {{cssxref("align-content")}}: Steuert den Raum zwischen Flex-Linien auf der Querachse.
- {{cssxref("gap")}}, {{cssxref("column-gap")}}, und {{cssxref("row-gap")}}: Dienen dazu, Lücken oder Rinnen zwischen Flex-Elementen zu erzeugen.

Wir werden auch entdecken, wie automatische Ränder zur Ausrichtung in Flexbox verwendet werden können.

## Ausrichtung von Elementen auf der Querachse

Die {{cssxref("align-items")}}-Eigenschaft, die auf den Flex-Container angewendet wird, und die {{cssxref("align-self")}}-Eigenschaft, die auf Flex-Elemente angewendet wird, steuern die Ausrichtung der Flex-Elemente auf der Querachse. Die Querachse verläuft entlang der Spalten, wenn {{cssxref("flex-direction")}} `row` ist, und entlang der Reihen, wenn `flex-direction` `column` ist.

In diesem grundlegenden Flex-Beispiel verwenden wir die Ausrichtung auf der Querachse. Wenn wir `display: flex` zu einem Container hinzufügen, werden die Kind-Elemente zu Flex-Elementen, die in einer Reihe angeordnet sind. Standardmäßig werden sie alle auf die Höhe des höchsten Elements gestreckt, da dieses Element die Höhe der Elemente auf der Querachse definiert. Wenn der Flex-Container eine festgelegte Höhe hat, strecken sich die Elemente auf diese Höhe, unabhängig davon, wie viel Inhalt sich in jedem Element befindet.

![Drei Elemente, eines mit zusätzlichem Text, der es größer macht als die anderen.](align2.png)

![Drei Elemente, gestreckt auf 200 Pixel Höhe](align3.png)

Der Grund, warum die Elemente die gleiche Höhe haben, liegt darin, dass der Anfangswert von `align-items`, der die Ausrichtung auf der Querachse steuert, auf `stretch` gesetzt ist.

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

Im untenstehenden Beispiel ist der Wert von `align-items` `stretch`. Versuchen Sie die anderen Werte und sehen Sie, wie die Elemente im Flex-Container zueinander ausgerichtet sind.

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

### Ausrichten eines Elements mit `align-self`

Die `align-items`-Eigenschaft setzt die `align-self`-Eigenschaft auf alle Flex-Elemente als Gruppe. Das bedeutet, dass Sie explizit die {{cssxref("align-self")}}-Eigenschaft deklarieren können, um ein einzelnes Element zu targetieren. Die `align-self`-Eigenschaft nimmt alle gleichen Werte wie `align-items` an, plus einen Wert von `auto`, der den Wert auf denjenigen zurücksetzt, der auf dem Flex-Container definiert ist.

In diesem nächsten Live-Beispiel hat der Flex-Container `align-items: flex-start`, was bedeutet, dass die Elemente alle am Anfang der Querachse ausgerichtet sind. Mithilfe des `first-child`-Selectors wird das erste Element auf `align-self: stretch` gesetzt. Ein anderes Element mit der `selected`-Klasse hat `align-self: center` gesetzt. Ändern Sie den Wert von `align-items` oder die Werte von `align-self` auf den einzelnen Elementen, um zu sehen, wie das funktioniert.

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

Bisher haben wir das Ausrichtungsverhalten betrachtet, wenn `flex-direction` standardmäßig `row` ist, während in einer von oben nach unten geschriebenen Sprache mit einer horizontalen Hauptachse und einer vertikalen Querachse gearbeitet wird.

![Drei Elemente, das erste zu flex-start, das zweite zu center, das dritte zu flex-end ausgerichtet. Ausrichtung auf der vertikalen Achse.](align4.png)

Wenn bei gleicher Schreibrichtung `flex-direction` auf `column` geändert wird, richten die `align-items`- und `align-self`-Eigenschaften die Elemente nach links und rechts statt nach oben und unten aus; diese Eigenschaften richten immer noch Gegenstände entlang der Querachse aus, aber die Querachse ist jetzt horizontal!

![Drei Elemente, das erste zu flex-start, das zweite zu center, das dritte zu flex-end ausgerichtet. Ausrichtung auf der horizontalen Achse.](align5.png)

Sie können dies im untenstehenden Beispiel ausprobieren, das einen Flex-Container mit `flex-direction: column` hat, aber ansonsten genau wie das vorherige Beispiel ist.

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

## Ausrichtung von Inhalten auf der Querachse mit der `align-content`-Eigenschaft

Bisher haben wir uns darauf konzentriert, Elemente oder einzelne Elemente innerhalb des Bereichs eines {{Glossary("flex_container", "Flex-Containers")}} auszurichten, der eine einzige Zeile von Flex-Elementen enthält. Wenn Flex-Elemente erlaubt sind, sich über mehrere Linien zu erstrecken, kann die {{cssxref("align-content")}}-Eigenschaft verwendet werden, um die Verteilung des Raumes zwischen den Linien zu kontrollieren, auch bekannt als **Verpackung von Flex-Linien**.

Damit `align-content` Wirkung hat, muss die Querachsendimension (in diesem Fall die Höhe) des Flex-Containers größer sein als nötig, um die Elemente anzuzeigen. Dann arbeitet es auf alle Elemente als Satz. Die `align-content`-Werte bestimmen, was mit dem zusätzlichen verfügbaren Raum und der Ausrichtung des gesamten Elementsatzes innerhalb dieses Raums passiert.

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
- `align-content: normal` (benimmt sich wie `stretch`)
- `align-content: baseline`
- `align-content: first baseline`
- `align-content: last baseline`

Im Live-Beispiel unten hat der Flex-Container eine Höhe von `400 Pixel`, was mehr ist, als benötigt wird, um unsere Elemente anzuzeigen. Der Wert von `align-content` ist `space-between`, was bedeutet, dass der verfügbare Raum _zwischen_ den Flex-Linien verteilt wird, die bündig mit dem Anfang und Ende des Containers auf der Querachse platziert sind.

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

Wieder können wir unsere `flex-direction` zu `column` wechseln, um zu sehen, wie sich diese Eigenschaft verhält, wenn wir nach Spalte arbeiten. Wie zuvor benötigen wir genügend Raum in der Querachse, um nach der Anzeige aller Elemente einige Freiräume zu haben.

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

## Ausrichtung von Inhalten auf der Hauptachse

Nun, da wir gesehen haben, wie Ausrichtung auf der Querachse funktioniert, können wir einen Blick auf die Hauptachse werfen. Hier steht uns nur eine Eigenschaft zur Verfügung — `justify-content`. Das liegt daran, dass wir nur mit Elementen als Gruppe auf der Hauptachse arbeiten. Mit `justify-content` kontrollieren wir, was mit verfügbarer Raumausnutzung passiert, sollte mehr Raum vorhanden sein, als für die Anzeige der Elemente benötigt wird.

In unserem Anfangsbeispiel mit `display: flex` auf dem Container werden die Elemente wie eine Reihe angezeigt und alle am Anfang des Containers ausgerichtet. Dies liegt am Anfangswert von `justify-content`, der `normal` ist, was sich wie `start` verhält. Jeder verfügbare Raum befindet sich am Ende der Artikel.

![Drei Elemente, jeweils 100 Pixel breit in einem 500-Pixel-Container. Der verfügbare Raum befindet sich am Ende der Artikel.](align6.png)

Die `baseline`-Werte sind in dieser Dimension nicht relevant. Ansonsten akzeptiert die `justify-content`-Eigenschaft die gleichen Werte wie `align-content`.

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
- `justify-content: stretch` (benimmt sich wie start)
- `justify-content: normal` (benimmt sich wie stretch, was sich wie start benimmt)

Im folgenden Beispiel ist der Wert von `justify-content` `space-between`. Der verfügbare Raum nach der Anzeige der Elemente wird zwischen den Elementen verteilt. Das linke und rechte Element stehen bündig mit dem Anfang und Ende.

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

Wenn die Hauptachse in der Blockrichtung liegt, weil `flex-direction` auf `column` eingestellt ist, dann wird `justify-content` den Raum zwischen den Elementen in dieser Dimension verteilen, solange im Flex-Container Raum verteilt werden kann.

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

Denken Sie daran, dass bei all diesen Ausrichtungsmethoden die Werte von `start` und `end` schreibmodusabhängig sind. Wenn der Wert von `justify-content` `start` ist und der Schreibmodus von links nach rechts ist, wie im Englischen, werden die Elemente beginnend auf der linken Seite des Containers ausgerichtet.

![Drei Elemente links ausgerichtet](basics5.png)

Wenn der Schreibmodus jedoch von rechts nach links ist, wie im Arabischen, werden die Elemente beginnend auf der rechten Seite des Containers ausgerichtet.

![Drei Elemente vom rechten Rand aus ausgerichtet](basics6.png)

Das Live-Beispiel unten hat die `direction`-Eigenschaft auf `rtl` gesetzt, um einen Rechts-nach-Links-Fluss für unsere Elemente zu erzwingen. Sie können dies entfernen oder die Werte von `justify-content` ändern, um zu sehen, wie Flexbox sich verhält, wenn der Beginn der Inline-Richtung rechts liegt.

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

Die Richtung des Linienbeginns ändert sich ebenfalls, wenn Sie die `flex-direction`-Eigenschaft ändern — zum Beispiel durch die Verwendung von `row-reverse` statt `row`.

Im nächsten Beispiel definieren `flex-direction: row-reverse` und `justify-content: flex-end` die Richtung und den Standort der Elemente innerhalb des Flex-Containers. In einer von links nach rechts geschriebenen Sprache richten sich die Elemente auf der linken Seite aus. Versuchen Sie, `flex-direction: row-reverse` zu `flex-direction: row` zu ändern. Sie werden sehen, dass sich die Elemente nun an der rechten Seite positionieren und die visuelle Reihenfolge der Elemente auf den Kopf gestellt wird.

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

Während dies alles ein wenig verwirrend erscheinen mag, ist die Regel, die Sie sich merken sollten, dass, solange Sie nichts daran ändern, sich Flex-Elemente in der Richtung anordnen, in der Worte in der Sprache Ihres Dokuments entlang der Inline- oder Reihenachse angeordnet sind. `start` und `flex-start` werden dort sein, wo der Anfang eines Satzes Text wäre.

![Diagramm, das den Anfang auf der linken Seite und das Ende auf der rechten Seite zeigt.](align8.png)

Sie können sie in die Blockrichtung für die Sprache Ihres Dokuments umschalten, indem Sie `flex-direction: column` auswählen. Dann werden `start` und `flex-start` dort sein, wo der Anfang Ihres ersten Absatzes Text wäre.

![Diagramm, das den Anfang oben und das Ende unten zeigt.](align10.png)

Wenn Sie `flex-direction` auf einen der umgekehrten Werte ändern, legen sie sich vom Endpunkt aus in umgekehrter Reihenfolge zu der Weise an, wie Worte in der Sprache Ihres Dokuments geschrieben werden. Dann ändern sich `start` und `flex-start` an das Ende dieser Achse — also an den Ort, an dem Ihre Zeilen umbrochen werden würden, wenn Sie in Reihen arbeiten, oder am Ende Ihres letzten Absatzes Text in der Blockrichtung.

![Diagramm, das den Anfang auf der rechten Seite und das Ende auf der linken Seite zeigt.](align9.png)

![Diagramm, das das Ende oben und den Anfang unten zeigt](align11.png)

## Verwendung von automatischen Rändern für die Ausrichtung auf der Hauptachse

Uns steht keine `justify-items` oder `justify-self` Eigenschaft auf der Hauptachse zur Verfügung, da unsere Elemente auf dieser Achse als Gruppe behandelt werden. Trotzdem ist es möglich, einige Einzelpositionierungen zu erreichen, um ein Element oder eine Gruppe von Elementen von anderen zu trennen, indem man automatische Ränder zusammen mit Flexbox verwendet.

Ein häufiges Muster ist eine Navigationsleiste, bei der einige Schlüsselelemente rechts ausgerichtet sind und die Hauptgruppe links. Vielleicht denken Sie, dass dies ein Anwendungsfall für eine `justify-self`-Eigenschaft sein sollte. Betrachten Sie jedoch das folgende Bild mit fünf Elementen, von denen zwei berühmte Elemente auf der einen und drei auf der anderen Seite auftreten. Wenn `justify-self` mit Flex-Elementen funktionieren würde und auf Element _d_ gesetzt wäre, würde es auch die Ausrichtung des darauf folgenden Elements _e_ ändern, was unter Umständen möglicherweise nicht gewünscht wird.

![Fünf Elemente, in zwei Gruppen. Drei links und zwei rechts.](align7.png)

Stattdessen kann das Element _d_ mit CSS-Rändern verschoben werden.

In diesem Live-Beispiel wird das Element 4 von den ersten drei Elementen durch {{cssxref("margin-left")}} auf `auto` getrennt, das den gesamten Raum aufnimmt, den es in seiner Achse beanspruchen kann. Dies ist, wie die Zentrierung eines Blocks mit {{cssxref("margin")}} Auto links und rechts funktioniert. Jede Seite versucht, so viel Raum zu beanspruchen wie möglich, und so wird der Block in die Mitte gedrückt.

In diesem Live-Beispiel werden die Flex-Elemente in einer Reihe mit den grundlegenden Flex-Werten angeordnet, und die Klasse `push` wird auf das vierte Element angewendet, wodurch `margin-left: auto` auf dieses Element angewendet wird. Versuchen Sie, die Klasse auf dem vierten Element zu entfernen oder die Klasse auf ein anderes Element anzuwenden, um zu sehen, wie es funktioniert.

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

## Erstellen von Lücken zwischen Elementen

Um Lücken zwischen Flex-Elementen zu schaffen, verwenden Sie die {{cssxref("gap")}}, {{cssxref("column-gap")}} und {{cssxref("row-gap")}} Eigenschaften. Die {{cssxref("column-gap")}}-Eigenschaft erzeugt Lücken zwischen Elementen in einer Reihe. Die {{cssxref("row-gap")}}-Eigenschaft erzeugt Lücken zwischen Flex-Linien, wenn Sie {{cssxref("flex-wrap")}} auf `wrap` eingestellt haben.

Die {{cssxref("gap")}}-Eigenschaft ist eine Kurzform, die sowohl `row-gap` als auch `column-gap` festlegt.
Die Lücken zwischen Flex-Elementen oder Flex-Linien hängen von der Richtung ab. Wenn die {{cssxref("flex-direction")}}-Eigenschaft Reihen erzeugt, definiert der erste Wert die Lücke zwischen Flex-Linien, und der zweite Wert definiert die Lücke zwischen den Elementen innerhalb jeder Zeile. Bei Spalten (wenn `flex-direction` auf `column` oder `column-reverse` eingestellt ist), definiert der erste Wert die Lücke zwischen Flex-Elementen, und der zweite Wert definiert die Lücken zwischen Flex-Linien.

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
- [CSS Flexibler Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Ausrichtung im Rasterlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
