---
title: Ausrichten von Elementen in einem Flex-Container
slug: Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container
l10n:
  sourceCommit: 6507fce619e492a688a1141b40e813a3ead194ee
---

{{CSSRef}}

Ein Grund, warum Flexbox so nützlich ist, liegt darin, dass es eine ordnungsgemäße Ausrichtung ermöglicht, einschließlich einer schnellen Methode zum vertikalen Zentrieren von Elementen. In diesem Leitfaden werden wir uns eingehend damit befassen, wie die Ausrichtungs- und Rechtfertigungseigenschaften in Flexbox funktionieren.

## Ausrichtung in Flexbox verwenden

Flexbox bietet mehrere Eigenschaften zur Steuerung von Ausrichtung und Abständen, wobei `align-items` und `justify-content` grundlegend sind, um Elemente zu zentrieren. Um ein Element zu zentrieren, verwenden wir die {{cssxref("align-items")}}-Eigenschaft, um das Element auf der {{Glossary("cross_axis", "Querachse")}} auszurichten, die in diesem Fall die {{Glossary("Flow_relative_values", "Blockachse")}} ist und vertikal verläuft. Wir verwenden {{cssxref("justify-content")}}, um das Element auf der Hauptachse auszurichten, die in diesem Fall die Inline-Achse ist, die horizontal verläuft.

![Die Querachse ist die vertikale Achse und die Hauptachse ist die horizontale Achse.](align1.png)

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

Die Eigenschaften, die wir in diesem Leitfaden betrachten werden, sind wie folgt:

- {{cssxref("justify-content")}}: Steuert die Ausrichtung aller Elemente auf der Hauptachse.
- {{cssxref("align-items")}}: Steuert die Ausrichtung aller Elemente auf der Querachse.
- {{cssxref("align-self")}}: Steuert die Ausrichtung eines einzelnen Flex-Elements auf der Querachse.
- {{cssxref("align-content")}}: Steuert den Abstand zwischen Flex-Linien auf der Querachse.
- {{cssxref("gap")}}, {{cssxref("column-gap")}} und {{cssxref("row-gap")}}: Werden verwendet, um Lücken oder Abstände zwischen Flex-Elementen zu schaffen.

Wir werden auch entdecken, wie automatische Margen zur Ausrichtung in Flexbox verwendet werden können.

## Elemente auf der Querachse ausrichten

Die {{cssxref("align-items")}}-Eigenschaft, die auf den Flex-Container angewendet wird, und die {{cssxref("align-self")}}-Eigenschaft, die auf Flex-Elemente angewendet wird, steuern die Ausrichtung von Flex-Elementen auf der Querachse. Die Querachse verläuft entlang der Spalten, wenn {{cssxref("flex-direction")}} auf `row` gesetzt ist, und entlang der Zeilen, wenn `flex-direction` auf `column` gesetzt ist.

In diesem grundlegenden Flex-Beispiel verwenden wir die Ausrichtung auf der Querachse. Wenn wir `display: flex` zu einem Container hinzufügen, werden die Kindelemente zu Flex-Elementen, die in einer Zeile angeordnet sind. Standardmäßig werden sie alle gedehnt, um die Höhe des höchsten Elements zu erreichen, da dieses Element die Höhe der Elemente auf der Querachse definiert. Wenn der Flex-Container eine festgelegte Höhe hat, werden die Elemente auf diese Höhe gedehnt, unabhängig davon, wie viel Inhalt sich in jedem Element befindet.

![Drei Elemente, eines mit zusätzlichem Text, der es höher als die anderen macht.](align2.png)

![Drei Elemente, die auf 200 Pixel Höhe gedehnt sind](align3.png)

Der Grund, warum die Elemente die gleiche Höhe haben, ist, dass der Anfangswert von `align-items`, die Eigenschaft, die die Ausrichtung auf der Querachse steuert, auf `stretch` gesetzt ist.

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

Im folgenden Beispiel ist der Wert von `align-items` `stretch`. Versuchen Sie, die anderen Werte zu verwenden und sehen Sie, wie sich die Elemente im Flex-Container zueinander ausrichten.

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
  height: 100px;
  background-color: rgb(96 139 168 / 0.2);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
}
```

{{EmbedLiveSample("align-items")}}

### Ein Element mit `align-self` ausrichten

Die `align-items`-Eigenschaft legt die `align-self`-Eigenschaft für alle Flex-Elemente als Gruppe fest. Das bedeutet, dass Sie die {{cssxref("align-self")}}-Eigenschaft explizit deklarieren können, um ein einzelnes Element zu löschen. Die `align-self`-Eigenschaft akzeptiert alle dieselben Werte wie `align-items` plus einen Wert von `auto`, der den Wert auf den im Flex-Container definierten zurücksetzt.

Im nächsten Live-Beispiel hat der Flex-Container `align-items: flex-start`, was bedeutet, dass die Elemente am Anfang der Querachse ausgerichtet sind. Mit dem `first-child`-Selektor wird das erste Element auf `align-self: stretch` gesetzt. Ein anderes Element mit der Klasse `selected` hat `align-self: center` gesetzt. Ändern Sie den Wert von `align-items` oder ändern Sie die Werte von `align-self` für die einzelnen Elemente, um zu sehen, wie dies funktioniert.

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

### Die Hauptachse ändern

Bisher haben wir das Ausrichtungsverhalten betrachtet, wenn `flex-direction` standardmäßig auf `row` gesetzt ist und wir in einer Sprache arbeiten, die von oben nach unten geschrieben wird, mit einer horizontalen Hauptachse und einer vertikalen Querachse.

![Drei Elemente, das erste ausgerichtet zu flex-start, das zweite zu center, das dritte zu flex-end. Ausrichtung auf der vertikalen Achse.](align4.png)

Bei gleichem Schreibmodus, wenn die `flex-direction` auf `column` geändert wird, richten die `align-items`- und `align-self`-Eigenschaften die Elemente nach links und rechts statt nach oben und unten aus; diese Eigenschaften richten die Elemente immer noch entlang der Querachse aus, aber die Querachse ist jetzt horizontal!

![Drei Elemente, das erste ausgerichtet zu flex-start, das zweite zu center, das dritte zu flex-end. Ausrichtung auf der horizontalen Achse.](align5.png)

Sie können dies im folgenden Beispiel ausprobieren, das einen Flex-Container mit `flex-direction: column` enthält, jedoch ansonsten genau wie das vorherige Beispiel ist.

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

## Inhalte auf der Querachse mit der `align-content`-Eigenschaft ausrichten

Bis jetzt haben wir uns darauf konzentriert, Elemente oder einzelne Elemente innerhalb des Bereichs auszurichten, der durch einen {{Glossary("flex_container", "Flex-Container")}} definiert ist, der eine einzelne Linie von Flex-Elementen enthält. Wenn Flex-Elemente das Umfließen über mehrere Zeilen erlauben, kann die {{cssxref("align-content")}}-Eigenschaft verwendet werden, um die Verteilung des Raums zwischen den Zeilen zu steuern, auch bekannt als **Verpacken von Flex-Linien**.

Damit `align-content` eine Wirkung hat, muss die Dimension der Querachse (in diesem Fall die Höhe) des Flex-Containers größer sein als nötig, um die Elemente anzuzeigen. Es wirkt dann auf alle Elemente als Set. Die `align-content`-Werte bestimmen, was mit dem zusätzlichen verfügbaren Raum passiert und wie das gesamte Set von Elementen darin ausgerichtet wird.

Die `align-content`-Eigenschaft akzeptiert die folgenden Werte:

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

Im folgenden Live-Beispiel hat der Flex-Container eine Höhe von `400 Pixeln`, was mehr ist als nötig, um unsere Elemente anzuzeigen. Der Wert von `align-content` ist `space-between`, was bedeutet, dass der verfügbare Raum _zwischen_ den Flex-Linien aufgeteilt wird, die sich bündig mit dem Anfang und Ende des Containers auf der Querachse befinden.

Versuchen Sie die anderen Werte aus, um zu sehen, wie die `align-content`-Eigenschaft funktioniert.

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

Erneut können wir unsere `flex-direction` auf `column` umstellen, um zu sehen, wie sich diese Eigenschaft verhält, wenn wir in Spalten arbeiten. Wie zuvor benötigen wir genug Raum in der Querachse, um nach der Anzeige aller Elemente etwas freien Raum zu haben.

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

## Inhalte auf der Hauptachse ausrichten

Jetzt, da wir gesehen haben, wie die Ausrichtung auf der Querachse funktioniert, können wir einen Blick auf die Hauptachse werfen. Hier steht uns nur eine Eigenschaft zur Verfügung — `justify-content`. Dies liegt daran, dass wir nur mit Elementen als Gruppe auf der Hauptachse arbeiten. Mit `justify-content` steuern wir, was mit dem verfügbaren Raum passiert, sollte mehr Platz vorhanden sein als nötig, um die Elemente anzuzeigen.

In unserem anfänglichen Beispiel mit `display: flex` auf dem Container werden die Elemente als Zeile angezeigt und alle am Anfang des Containers ausgerichtet. Dies liegt am Anfangswert von `justify-content`, der `normal` ist, was sich wie `start` verhält. Jeder verfügbare Raum wird am Ende der Elemente platziert.

![Drei Elemente, jeweils 100 Pixel breit in einem 500 Pixel breiten Container. Der verfügbare Raum ist am Ende der Elemente.](align6.png)

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
- `justify-content: stretch` (verhält sich wie start)
- `justify-content: normal` (verhält sich wie stretch, was sich wie start verhält)

Im folgenden Beispiel ist der Wert von `justify-content` `space-between`. Der verfügbare Raum nach der Anzeige der Elemente wird zwischen den Elementen verteilt. Das linke und rechte Element richten sich bündig mit dem Anfang und Ende aus.

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

Wenn die Hauptachse in der Blockrichtung ist, weil `flex-direction` auf `column` gesetzt ist, dann wird `justify-content` den Raum zwischen den Elementen in dieser Dimension verteilen, solange im Flex-Container Raum zum Verteilen vorhanden ist.

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

### Ausrichtung und Schreibrichtungen

Denken Sie daran, dass bei all diesen Ausrichtungsmethoden die Werte von `start` und `end` schreibmodusabhängig sind. Wenn der Wert von `justify-content` `start` ist und der Schreibmodus von links nach rechts verläuft, wie im Englischen, werden die Elemente beginnend am linken Rand des Containers ausgerichtet.

![Drei Elemente, die sich links ausrichten](basics5.png)

Wenn der Schreibmodus jedoch von rechts nach links verläuft, wie im Arabischen, werden die Elemente beginnend am rechten Rand des Containers ausgerichtet.

![Drei Elemente, die sich von rechts ausrichten](basics6.png)

Das Live-Beispiel unten hat die `direction`-Eigenschaft auf `rtl` gesetzt, um einen Fluss von rechts nach links für unsere Elemente zu erzwingen. Sie können dies entfernen oder die Werte von `justify-content` ändern, um zu sehen, wie sich Flexbox verhält, wenn der Anfang der Inline-Richtung rechts ist.

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

Die Richtung von `start` der Linie ändert sich auch, wenn Sie die `flex-direction`-Eigenschaft ändern — zum Beispiel von `row-reverse` zu `row`.

In diesem nächsten Beispiel definieren `flex-direction: row-reverse` und `justify-content: flex-end` die Richtung und den Ort der Elemente im Flex-Container. In einer von links nach rechts verlaufenden Sprache richten sich die Elemente links aus. Versuchen Sie, `flex-direction: row-reverse` in `flex-direction: row` zu ändern. Sie werden sehen, dass die Elemente sich jetzt auf die rechte Seite bewegen, und die visuelle Reihenfolge der Elemente umgekehrt wird.

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

Auch wenn das alles ein wenig verwirrend erscheinen mag, die Regel, die man sich merken sollte, ist, dass Flex-Elemente sich, sofern man nichts daran ändert, in der Richtung ausrichten, in der Wörter im Dokument in der Sprache entlang der Inline-, Reihenachse ausgerichtet sind. `start` und `flex-start` werden dort sein, wo der Anfang eines Textsatzes beginnen würde.

![Diagramm zeigt start links und end rechts.](align8.png)

Sie können sie so umschalten, dass sie in der Blockrichtung der Sprache Ihres Dokuments angezeigt werden, indem Sie `flex-direction: column` auswählen. Dann werden `start` und `flex-start` dort sein, wo der Anfang Ihres ersten Absatzes im Text beginnen würde.

![Diagramm zeigt start oben und end unten.](align10.png)

Wenn Sie `flex-direction` auf einen der Umkehrwerte ändern, werden sie sich von der Endachse aus und in umgekehrter Reihenfolge zu der Art und Weise, wie Wörter in der Sprache Ihres Dokuments geschrieben sind, ausrichten. Dann ändern sich `start` und `flex-start` zum Ende dieser Achse — also an den Ort, an dem Ihre Zeilen umgebrochen würden, wenn sie in Reihen angeordnet wären, oder am Ende Ihres letzten Absatzes im Blockrichtung.

![Diagramm zeigt start rechts und end links.](align9.png)

![Diagramm zeigt end oben und start unten.](align11.png)

## Automatische Margen für die Ausrichtung auf der Hauptachse verwenden

Wir haben keine `justify-items` oder `justify-self`-Eigenschaft auf der Hauptachse, da unsere Elemente als Gruppe auf dieser Achse behandelt werden. Es ist jedoch möglich, mit Hilfe von automatischen Margen zusammen mit Flexbox einige individuelle Ausrichtungen vorzunehmen, um ein Element oder eine Gruppe von Elementen von anderen zu trennen.

Ein häufiges Muster ist eine Navigationsleiste, bei der einige Schlüsselelemente rechts ausgerichtet sind, mit der Hauptgruppe auf der linken Seite. Man könnte meinen, dass dies ein Anwendungsfall für eine `justify-self`-Eigenschaft sein sollte. Erwägen Sie jedoch das folgende Bild. Nehmen Sie als Beispiel das folgende Bild mit drei Elementen auf einer Seite und zwei auf der anderen. Wenn `justify-self` auf Flex-Elemente wirken würde und auf Element _d_ gesetzt wäre, würde es auch die Ausrichtung von Element _e_ ändern, das folgt, was möglicherweise nicht beabsichtigt ist.

![Fünf Elemente, in zwei Gruppen. Drei auf der linken und zwei auf der rechten Seite.](align7.png)

Stattdessen kann das _d_-Element mit CSS-Margen verschoben werden.

In diesem Live-Beispiel wird das Element 4 von den ersten drei Elementen getrennt, indem {{cssxref("margin-left")}} auf `auto` gesetzt wird, was den gesamten Raum auf seiner Achse einnimmt, den es kann. So funktioniert das Zentrieren eines Blocks mit {{cssxref("margin")}} auto links und rechts. Jede Seite versucht, so viel Raum wie möglich zu nehmen, und so wird der Block in die Mitte geschoben.

In diesem Live-Beispiel sind die Flex-Elemente in einer Zeile mit den Grundflexwerten angeordnet, und die Klasse `push`, die auf das vierte Element angewendet wird, wendet `margin-left: auto` auf dieses Element an. Versuchen Sie, die Klasse am vierten Element zu entfernen oder es auf ein anderes Element anzuwenden, um zu sehen, wie es funktioniert.

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

## Lücken zwischen Elementen erstellen

Um eine Lücke zwischen Flex-Elementen zu erstellen, verwenden Sie die {{cssxref("gap")}}, {{cssxref("column-gap")}}, und {{cssxref("row-gap")}}-Eigenschaften. Die {{cssxref("column-gap")}}-Eigenschaft erstellt Lücken zwischen Elementen in einer Reihe. Die {{cssxref("row-gap")}}-Eigenschaft erstellt Lücken zwischen Flex-Linien, wenn Sie {{cssxref("flex-wrap")}} auf `wrap` gesetzt haben.

Die {{cssxref("gap")}}-Eigenschaft ist eine Kurzform, die sowohl `row-gap` als auch `column-gap` festlegt. Die Lücken zwischen Flex-Elementen oder Flex-Linien hängen von der Richtung ab. Wenn die {{cssxref("flex-direction")}}-Eigenschaft Reihen erstellt, definiert der erste Wert die Lücke zwischen Flex-Linien, und der zweite Wert definiert die Lücke zwischen den Elementen innerhalb jeder Linie. Bei Spalten (wenn `flex-direction` auf `column` oder `column-reverse` gesetzt ist) definiert der erste Wert die Lücke zwischen Flex-Elementen, und der zweite Wert definiert die Lücken zwischen Flex-Linien.

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
