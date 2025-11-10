---
title: Ausrichten von Elementen in einem Flex-Container
short-title: Ausrichten von Flex-Elementen
slug: Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Einer der Gründe, warum Flexbox so nützlich ist, liegt darin, dass es ordnungsgemäße Ausrichtung ermöglicht, einschließlich einer schnellen Methode zum vertikalen Zentrieren von Elementen. In diesem Leitfaden betrachten wir eingehend, wie die Ausrichtungs- und Rechtfertigungseigenschaften in Flexbox funktionieren.

## Verwenden der Ausrichtung in Flexbox

Flexbox bietet mehrere Eigenschaften zur Steuerung von Ausrichtung und Abstand, wobei `align-items` und `justify-content` grundlegend sind, um Elemente zu zentrieren. Um ein Element zu zentrieren, verwenden wir die {{cssxref("align-items")}}-Eigenschaft, um das Element auf der {{Glossary("cross_axis", "Querachse")}} auszurichten, die in diesem Fall die {{Glossary("Flow_relative_values", "Blockachse")}} ist, die vertikal verläuft. Wir verwenden {{cssxref("justify-content")}}, um das Element auf der Hauptachse auszurichten, die in diesem Fall die Inline-Achse ist, die horizontal verläuft.

![Die Querachse ist die vertikale Achse und die Hauptachse ist die horizontale Achse.](align1.png)

Ändern Sie die Größe des Containers oder des verschachtelten Elements im folgenden Codebeispiel. Das verschachtelte Element bleibt immer zentriert.

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

Die Eigenschaften, die wir in diesem Leitfaden betrachten, sind wie folgt:

- {{cssxref("justify-content")}}: Steuert die Ausrichtung aller Elemente auf der Hauptachse.
- {{cssxref("align-items")}}: Steuert die Ausrichtung aller Elemente auf der Querachse.
- {{cssxref("align-self")}}: Steuert die Ausrichtung eines einzelnen Flex-Elements auf der Querachse.
- {{cssxref("align-content")}}: Steuert den Raum zwischen Flex-Linien auf der Querachse.
- {{cssxref("gap")}}, {{cssxref("column-gap")}}, und {{cssxref("row-gap")}}: Wird verwendet, um Lücken oder Rinnen zwischen Flex-Elementen zu erstellen.

Wir werden auch entdecken, wie automatische Ränder zur Ausrichtung in Flexbox verwendet werden können.

## Ausrichten von Elementen auf der Querachse

Die {{cssxref("align-items")}}-Eigenschaft, die im Flex-Container gesetzt wird, und die {{cssxref("align-self")}}-Eigenschaft, die an Flex-Elementen gesetzt wird, steuern die Ausrichtung von Flex-Elementen auf der Querachse. Die Querachse verläuft entlang der Spalten, wenn {{cssxref("flex-direction")}} `row` ist, und entlang der Zeilen, wenn `flex-direction` `column` ist.

In diesem einfachen Flex-Beispiel verwenden wir die Ausrichtung auf der Querachse. Wenn wir `display: flex` zu einem Container hinzufügen, werden die Kind-Elemente zu Flex-Elementen, die in einer Zeile angeordnet sind. Standardmäßig strecken sie sich alle, um die Höhe des höchsten Elements zu erreichen, da dieses Element die Höhe der Elemente auf der Querachse definiert. Wenn der Flex-Container eine eingestellte Höhe hat, strecken sich die Elemente auf diese Höhe, unabhängig davon, wie viel Inhalt in jedem Element ist.

![Drei Elemente, eines mit zusätzlichem Text, der es höher macht als die anderen.](align2.png)

![Drei Elemente, die auf 200 Pixel Höhe gestreckt sind](align3.png)

Der Grund, warum die Elemente die gleiche Höhe haben, ist, dass der Anfangswert von `align-items`, der die Ausrichtung auf der Querachse steuert, auf `stretch` gesetzt ist.

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

Im folgenden Beispiel ist der Wert von `align-items` `stretch`. Probieren Sie die anderen Werte aus und sehen Sie, wie sich die Elemente im Flex-Container zueinander ausrichten.

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

### Ein Element mit `align-self` ausrichten

Die `align-items`-Eigenschaft setzt die `align-self`-Eigenschaft auf alle Flex-Elemente als Gruppe. Das bedeutet, dass Sie die {{cssxref("align-self")}}-Eigenschaft explizit deklarieren können, um ein einzelnes Element anzusprechen. Die `align-self`-Eigenschaft akzeptiert alle dieselben Werte wie `align-items` sowie einen Wert von `auto`, der den Wert auf den im Flex-Container definierten Wert zurücksetzt.

In diesem nächsten Live-Beispiel hat der Flex-Container `align-items: flex-start`, was bedeutet, dass die Elemente alle am Anfang der Querachse ausgerichtet sind. Mit dem `first-child`-Selektor wird das erste Element auf `align-self: stretch` gesetzt. Ein weiteres Element mit der Klasse `selected` hat `align-self: center` gesetzt. Ändern Sie den Wert von `align-items` oder ändern Sie die Werte von `align-self` auf den einzelnen Elementen, um zu sehen, wie dies funktioniert.

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

Bisher haben wir uns das Ausrichtungsverhalten angesehen, wenn der `flex-direction`-Standard `row` ist, während in einer von oben nach unten geschriebenen Sprache gearbeitet wird, mit einer horizontalen Hauptachse und einer vertikalen Querachse.

![Drei Elemente, das erste auf flex-start ausgerichtet, das zweite auf center, das dritte auf flex-end. Ausrichtung auf der vertikalen Achse.](align4.png)

Wenn die gleiche Schreibrichtung beibehalten wird, richten sich bei geänderter `flex-direction` zu `column` die `align-items`- und `align-self`-Eigenschaften die Elemente nach links und rechts anstelle von oben und unten aus; diese Eigenschaften richten die Elemente weiterhin entlang der Querachse aus, aber die Querachse ist jetzt horizontal!

![Drei Elemente, das erste auf flex-start ausgerichtet, das zweite auf center, das dritte auf flex-end. Ausrichtung auf der horizontalen Achse.](align5.png)

Sie können dies im folgenden Beispiel ausprobieren, das einen Flex-Container mit `flex-direction: column` hat, jedoch ansonsten genau wie das vorherige Beispiel ist.

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

## Ausrichten von Inhalten auf der Querachse mit der `align-content`-Eigenschaft

Bisher haben wir uns darauf konzentriert, Elemente oder einzelne Elemente im durch einen {{Glossary("flex_container", "Flex-Container")}} definierten Bereich auszurichten, der eine einzelne Linie von Flex-Elementen enthält. Wenn Flex-Elemente über mehrere Linien verteilt werden dürfen, kann die {{cssxref("align-content")}}-Eigenschaft verwendet werden, um die Verteilung des Raums zwischen den Linien, auch bekannt als **Verpackung von Flex-Linien**, zu steuern.

Damit `align-content` eine Wirkung hat, muss die Dimension der Querachse (in diesem Fall die Höhe) des Flex-Containers größer sein als erforderlich, um die Elemente anzuzeigen. Es wirkt sich dann auf alle Elemente als Satz aus. Die `align-content`-Werte bestimmen, was mit dem zusätzlichen verfügbaren Raum und der Ausrichtung des gesamten Elementsatzes darin geschieht.

Die `align-content`-Eigenschaft nimmt folgende Werte an:

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

Im folgenden Live-Beispiel hat der Flex-Container eine Höhe von `400 Pixel`, was mehr ist als nötig, um unsere Elemente anzuzeigen. Der Wert von `align-content` ist `space-between`, was bedeutet, dass der verfügbare Raum _zwischen_ den Flex-Linien geteilt wird, die bündig mit dem Anfang und dem Ende des Containers auf der Querachse platziert sind.

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

Erneut können wir unsere `flex-direction` zu `column` wechseln, um zu sehen, wie sich diese Eigenschaft verhält, wenn wir in Spalten arbeiten. Wie zuvor benötigen wir genug Raum in der Querachse, um etwas freien Raum zu haben, nachdem alle Elemente angezeigt wurden.

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

## Ausrichten von Inhalten auf der Hauptachse

Jetzt, da wir gesehen haben, wie die Ausrichtung auf der Querachse funktioniert, können wir uns die Hauptachse ansehen. Hier steht uns nur eine Eigenschaft zur Verfügung — `justify-content`. Dies liegt daran, dass wir nur mit den Elementen als Gruppe auf der Hauptachse arbeiten. Mit `justify-content` steuern wir, was mit dem verfügbaren Raum passiert, falls mehr Raum vorhanden ist, als zur Anzeige der Elemente benötigt wird.

In unserem ursprünglichen Beispiel mit `display: flex` auf dem Container werden die Elemente als Zeile angezeigt und alle am Anfang des Containers ausgerichtet. Dies liegt am Anfangswert von `justify-content`, der `normal` ist, was sich wie `start` verhält. Jeder verfügbare Raum wird am Ende der Elemente platziert.

![Drei Elemente, jeweils 100 Pixel breit in einem 500-Pixel-Container. Der verfügbare Raum ist am Ende der Elemente.](align6.png)

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
- `justify-content: stretch` (verhält sich wie `start`)
- `justify-content: normal` (verhält sich wie `stretch`, was sich wie `start` verhält)

Im folgenden Beispiel ist der Wert von `justify-content` `space-between`. Der verfügbare Raum nach der Anzeige der Elemente wird zwischen die Elemente verteilt. Das linke und das rechte Element sind bündig mit dem Anfang und Ende ausgerichtet.

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

Wenn sich die Hauptachse in der Blockrichtung befindet, da `flex-direction` auf `column` gesetzt ist, verteilt `justify-content` den Raum zwischen den Elementen in dieser Dimension, solange im Flex-Container Raum zur Verteilung vorhanden ist.

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

Denken Sie daran, dass bei all diesen Ausrichtungsmethoden die Werte von `start` und `end` schreibweisebewusst sind. Wenn der Wert von `justify-content` `start` ist und die Schreibrichtung von links nach rechts verläuft, wie im Englischen, werden die Elemente beginnend auf der linken Seite des Containers ausgerichtet.

![Drei Elemente auf der linken Seite ausgerichtet](basics5.png)

Wenn die Schreibrichtung jedoch von rechts nach links ist, wie im Arabischen, werden die Elemente beginnend auf der rechten Seite des Containers ausgerichtet.

![Drei Elemente von rechts ausgerichtet](basics6.png)

Im folgenden Live-Beispiel ist die `direction`-Eigenschaft auf `rtl` gesetzt, um einen Fluss von rechts nach links für unsere Elemente zu erzwingen. Sie können das entfernen oder die Werte von `justify-content` ändern, um zu sehen, wie sich Flexbox verhält, wenn der Beginn der Inline-Richtung rechts ist.

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

Die Richtung von `start` der Linie ändert sich ebenfalls, wenn Sie die `flex-direction`-Eigenschaft ändern — zum Beispiel die Verwendung von `row-reverse` statt `row`.

Im nächsten Beispiel definieren `flex-direction: row-reverse` und `justify-content: flex-end` die Richtung und den Ort der Elemente innerhalb des Flex-Containers. In einer von links nach rechts Sprache richten sich die Elemente links aus. Ändern Sie `flex-direction: row-reverse` zu `flex-direction: row`. Sie werden sehen, dass die Elemente jetzt zur rechten Seite wechseln und die visuelle Reihenfolge der Elemente umgekehrt wird.

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

Obwohl dies alles etwas verwirrend erscheinen mag, ist die Regel, sich zu merken, dass sich Flex-Elemente, solange Sie nichts ändern, in der Richtung ausbreiten, in der Wörter in der Sprache Ihres Dokuments entlang der Inline-Zeilenachse angeordnet sind. `start` und `flex-start` werden dort sein, wo der Beginn eines Satzes von Wörtern beginnen würde.

![Diagramm zeigt start auf der linken und end auf der rechten Seite.](align8.png)

Sie können sie in die Blockrichtung für die Sprache Ihres Dokuments umschalten, indem Sie `flex-direction: column` wählen. Dann werden `start` und `flex-start` dort sein, wo der Beginn Ihres ersten Absatzes von Text wäre.

![Diagramm zeigt start oben und end unten.](align10.png)

Wenn Sie `flex-direction` auf einen der umgekehrten Werte ändern, verbreiten sie sich vom Endachsenpunkt und in der umgekehrten Reihenfolge zu der Art und Weise, wie Wörter in der Sprache Ihres Dokuments geschrieben werden. Dann ändern sich `start` und `flex-start` zum Ende dieser Achse — also zu dem Ort, an dem sich Ihre Zeilen um den Block wickeln würden, oder am Ende Ihres letzten Absatzes von Text in der Blockrichtung.

![Diagramm zeigt start auf der rechten und end auf der linken Seite.](align9.png)

![Diagramm zeigt end oben und start unten.](align11.png)

## Verwenden von automatischen Rändern zur Ausrichtung auf der Hauptachse

Wir haben keine `justify-items`- oder `justify-self`-Eigenschaft auf der Hauptachse zur Verfügung, da unsere Elemente auf dieser Achse als Gruppe behandelt werden. Es ist jedoch möglich, einzelne Elemente so auszurichten, dass ein Element oder eine Gruppe von Elementen von anderen getrennt wird, indem automatische Ränder zusammen mit Flexbox verwendet werden.

Ein häufiges Muster ist eine Navigationsleiste, bei der einige wichtige Elemente rechts ausgerichtet sind, während sich die Hauptgruppe links befindet. Sie könnten denken, dass dies ein Anwendungsfall für eine `justify-self`-Eigenschaft sein sollte. Betrachten Sie jedoch das folgende Bild mit drei Elementen auf einer Seite und zwei auf der anderen Seite. Wenn `justify-self` auf Flex-Elementen funktionieren würde und auf Element _d_ gesetzt wäre, würde es auch die Ausrichtung des nachfolgenden Elements _e_ ändern, was möglicherweise nicht beabsichtigt ist.

![Fünf Elemente in zwei Gruppen. Drei auf der linken und zwei auf der rechten Seite.](align7.png)

Stattdessen kann das _d_-Element mit CSS-Rändern verschoben werden.

In diesem Live-Beispiel wird das Element 4 von den ersten drei Elementen getrennt, indem bei ihm {{cssxref("margin-left")}} auf `auto` gesetzt wird, was in seiner Achse den gesamten Raum beansprucht, den es kann. So funktioniert auch das Zentrieren eines Blocks mit {{cssxref("margin")}} auto links und rechts. Jede Seite versucht, so viel Raum zu beanspruchen wie möglich, und so wird der Block in die Mitte geschoben.

In diesem Live-Beispiel werden die Flex-Elemente mit den grundlegenden Flex-Werten in einer Zeile angeordnet, und die Klasse `push`, die auf das vierte Element angewendet wird, setzt `margin-left: auto` für dieses Element. Versuchen Sie, die Klasse beim vierten Element zu entfernen oder die Klasse bei einem anderen Element hinzuzufügen, um zu sehen, wie es funktioniert.

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

Um eine Lücke zwischen Flex-Elementen zu erstellen, verwenden Sie die {{cssxref("gap")}}, {{cssxref("column-gap")}}, und {{cssxref("row-gap")}}-Eigenschaften. Die {{cssxref("column-gap")}}-Eigenschaft erstellt Lücken zwischen Elementen in einer Zeile. Die {{cssxref("row-gap")}}-Eigenschaft erstellt Lücken zwischen Flex-Linien, wenn Sie {{cssxref("flex-wrap")}} auf `wrap` gesetzt haben.

Die {{cssxref("gap")}}-Eigenschaft ist eine Kurzform, die sowohl `row-gap` als auch `column-gap` festlegt. Die Lücken zwischen Flex-Elementen oder Flex-Linien hängen von der Ausrichtung ab. Wenn die {{cssxref("flex-direction")}}-Eigenschaft Zeilen erstellt, definiert der erste Wert die Lücke zwischen den Flex-Linien, und der zweite Wert definiert die Lücke zwischen den Elementen innerhalb jeder Zeile. Bei Spalten (wenn `flex-direction` auf `column` oder `column-reverse` gesetzt ist) definiert der erste Wert die Lücke zwischen Flex-Elementen und der zweite Wert die Lücken zwischen Flex-Linien.

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

- [CSS-Kasten-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul
- [CSS-flexibles Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [Kasten-Ausrichtung in Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [Kasten-Ausrichtung im Raster-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
