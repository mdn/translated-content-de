---
title: Ausrichten von Elementen in einem Flex-Container
slug: Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container
l10n:
  sourceCommit: f11e9200b6f9d5c191051eb7ccbe7ebd44966e43
---

{{CSSRef}}

Einer der Gründe, warum Flexbox so nützlich ist, ist die Möglichkeit, eine ordnungsgemäße Ausrichtung zu ermöglichen, einschließlich einer schnellen Methode zum vertikalen Zentrieren von Elementen. In diesem Leitfaden werfen wir einen gründlichen Blick darauf, wie die Eigenschaften für Ausrichtung und Rechtfertigung in Flexbox funktionieren.

## Verwendung von Ausrichtung in Flexbox

Flexbox bietet mehrere Eigenschaften, um Ausrichtung und Abstände zu steuern, wobei `align-items` und `justify-content` grundlegend für das Zentrieren von Elementen sind. Um ein Element zu zentrieren, verwenden wir die {{cssxref("align-items")}} Eigenschaft, um das Element auf der {{Glossary("cross_axis", "Kreuzachse")}} auszurichten, die in diesem Fall die {{Glossary("Flow_relative_values", "Blockachse")}} ist, die vertikal verläuft. Wir verwenden {{cssxref("justify-content")}}, um das Element auf der Hauptachse auszurichten, die in diesem Fall die Inline-Achse ist, die horizontal verläuft.

![Die Kreuzachse ist die vertikale Achse und die Hauptachse ist die horizontale Achse.](align1.png)

Ändern Sie die Größe des Containers oder des verschachtelten Elements im unten stehenden Codebeispiel. Das verschachtelte Element bleibt immer zentriert.

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
- {{cssxref("gap")}}, {{cssxref("column-gap")}} und {{cssxref("row-gap")}}: Dienen zur Erstellung von Abständen oder Rinnen zwischen Flex-Elementen.

Wir werden auch entdecken, wie automatische Ränder zur Ausrichtung in Flexbox verwendet werden können.

## Ausrichten von Elementen auf der Kreuzachse

Die {{cssxref("align-items")}} Eigenschaft, die auf dem Flex-Container eingestellt wird, und die {{cssxref("align-self")}} Eigenschaft, die auf Flex-Elementen eingestellt wird, steuern die Ausrichtung von Flex-Elementen auf der Kreuzachse. Die Kreuzachse verläuft die Spalten hinunter, wenn {{cssxref("flex-direction")}} `row` ist, und entlang der Reihen, wenn `flex-direction` `column` ist.

In diesem grundlegenden Flex-Beispiel verwenden wir die Ausrichtung auf der Kreuzachse. Wenn wir `display: flex` zu einem Container hinzufügen, werden die Kindelemente zu Flex-Elementen, die in einer Reihe angeordnet sind. Standardmäßig dehnen sie sich alle so aus, dass sie der Höhe des höchsten Elements entsprechen, da dieses Element die Höhe der Elemente auf der Kreuzachse definiert. Wenn der Flex-Container eine eingestellte Höhe hat, dehnen sich die Elemente auf diese Höhe aus, unabhängig davon, wie viel Inhalt sich in jedem Element befindet.

![Drei Elemente, eines mit zusätzlichem Text, der es größer macht als die anderen.](align2.png)

![Drei Elemente, gestreckt auf 200 Pixel Höhe](align3.png)

Der Grund, warum die Elemente die gleiche Höhe haben, ist, dass der Anfangswert von `align-items`, also der Eigenschaft, die die Ausrichtung auf der Kreuzachse steuert, auf `stretch` gesetzt ist.

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

Im folgenden Beispiel ist der Wert von `align-items` auf `stretch` gesetzt. Versuchen Sie die anderen Werte und sehen Sie, wie die Elemente im Flex-Container gegeneinander ausgerichtet sind.

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

### Ausrichten eines einzelnen Elements mit `align-self`

Die `align-items` Eigenschaft setzt die `align-self` Eigenschaft auf alle Flex-Elemente als Gruppe. Das bedeutet, dass Sie die {{cssxref("align-self")}} Eigenschaft explizit deklarieren können, um ein einzelnes Element anzusprechen. Die `align-self` Eigenschaft akzeptiert alle gleichen Werte wie `align-items` plus einen Wert von `auto`, der den Wert auf den im Flex-Container definierten zurücksetzt.

In diesem nächsten Live-Beispiel hat der Flex-Container `align-items: flex-start`, was bedeutet, dass die Elemente alle am Anfang der Kreuzachse ausgerichtet sind. Mit dem `first-child` Selektor wird das erste Element auf `align-self: stretch` gesetzt. Ein anderes Element mit der `selected` Klasse hat `align-self: center` gesetzt. Ändern Sie den Wert von `align-items` oder ändern Sie die Werte von `align-self` auf den einzelnen Elementen, um zu sehen, wie dies funktioniert.

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

Bisher haben wir uns angesehen, wie das Ausrichtungsverhalten ist, wenn `flex-direction` standardmäßig auf `row` eingestellt ist, während in einer Sprache gearbeitet wird, die von oben nach unten geschrieben wird, mit einer horizontalen Hauptachse und einer vertikalen Kreuzachse.

![Drei Elemente, das erste zu flex-start ausgerichtet, das zweite zur Mitte, das dritte zu flex-end. Ausrichtung entlang der vertikalen Achse.](align4.png)

Wenn man denselben Schreibmodus beibehält, werden die `align-items` und `align-self` Eigenschaften die Elemente nach links und rechts ausrichten, wenn `flex-direction` zu `column` geändert wird, anstatt von oben nach unten; diese Eigenschaften richten die Elemente immer noch entlang der Kreuzachse aus, aber die Kreuzachse ist jetzt horizontal!

![Drei Elemente, das erste zu flex-start ausgerichtet, das zweite zur Mitte, das dritte zu flex-end. Ausrichtung entlang der horizontalen Achse.](align5.png)

Sie können dies im unten stehenden Beispiel ausprobieren, das einen Flex-Container mit `flex-direction: column` hat, ansonsten aber genau dasselbe ist wie das vorherige Beispiel.

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

## Ausrichten von Inhalten auf der Kreuzachse mit der `align-content` Eigenschaft

Bisher haben wir uns darauf konzentriert, Elemente oder ein einzelnes Element innerhalb des von einem {{Glossary("flex_container", "flex_container")}} definierten Bereichs auszurichten, der eine einzelne Linie von Flex-Elementen enthält. Wenn Flex-Elemente sich über mehrere Linien erstrecken dürfen, kann die {{cssxref("align-content")}} Eigenschaft verwendet werden, um die Verteilung des Raums zwischen den Linien zu steuern, auch bekannt als **Packing flex lines**.

Damit `align-content` Auswirkungen hat, muss die Abmessung der Kreuzachse (in diesem Fall die Höhe) des Flex-Containers größer sein als nötig, um die Elemente anzuzeigen. Dann wirkt sie auf alle Elemente als Gruppe. Die `align-content` Werte bestimmen, was mit dem zusätzlich verfügbaren Raum passiert und wie das gesamte Set von Elementen darin ausgerichtet wird.

Die `align-content` Eigenschaft nimmt die folgenden Werte an:

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

Im Live-Beispiel unten hat der Flex-Container eine Höhe von `400 Pixeln`, die mehr ist als nötig, um unsere Elemente anzuzeigen. Der Wert von `align-content` ist `space-between`, was bedeutet, dass der verfügbare Raum _zwischen_ den Flex-Linien aufgeteilt wird, die jeweils zu Beginn und am Ende des Containers auf der Kreuzachse platziert sind.

Versuchen Sie andere Werte, um zu sehen, wie die `align-content` Eigenschaft funktioniert.

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

Erneut können wir unsere `flex-direction` auf `column` umschalten, um zu sehen, wie sich diese Eigenschaft verhält, wenn wir in Spalten arbeiten. Wie zuvor benötigen wir genügend Platz in der Kreuzachse, um etwas freien Raum zu haben, nachdem alle Elemente angezeigt wurden.

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

Nachdem wir gesehen haben, wie die Ausrichtung auf der Kreuzachse funktioniert, können wir einen Blick auf die Hauptachse werfen. Hier steht uns nur eine Eigenschaft zur Verfügung – `justify-content`. Dies liegt daran, dass wir es auf der Hauptachse nur mit den Elementen als Gruppe zu tun haben. Mit `justify-content` steuern wir, was passiert, wenn es mehr Platz gibt als benötigt wird, um die Elemente anzuzeigen.

In unserem anfänglichen Beispiel mit `display: flex` auf dem Container werden die Elemente als Reihe angezeigt und alle am Anfang des Containers ausgerichtet. Dies liegt daran, dass der Anfangswert von `justify-content` `normal` ist, der sich wie `start` verhält. Jeder verfügbare Raum wird am Ende der Elemente platziert.

![Drei Elemente, jeweils 100 Pixel breit in einem 500 Pixel breiten Container. Der verfügbare Platz ist am Ende der Elemente.](align6.png)

Die `baseline` Werte sind in dieser Dimension nicht relevant. Ansonsten akzeptiert die `justify-content` Eigenschaft dieselben Werte wie `align-content`.

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
- `justify-content: normal` (verhält sich wie stretch, welches sich wie start verhält)

Im Beispiel unten ist der Wert von `justify-content` `space-between`. Der verfügbare Raum nach dem Anzeigen der Elemente wird zwischen den Elementen verteilt. Das linke und rechte Element stehen bündig am Start- und Endpunkt.

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

Wenn die Hauptachse in der Blockrichtung ist, weil `flex-direction` auf `column` gesetzt ist, verteilt `justify-content` den Raum zwischen den Elementen in dieser Dimension, solange es Platz im Flex-Container gibt, der verteilt werden kann.

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

Denken Sie daran, dass bei all diesen Ausrichtungsverfahren die Werte von `start` und `end` schreibmodussensitiv sind. Wenn der Wert von `justify-content` `start` ist und der Schreibmodus von links nach rechts erfolgt, wie im Englischen, richten sich die Elemente beginnend am linken Rand des Containers aus.

![Drei Elemente linksbündig ausgerichtet](basics5.png)

Wenn der Schreibmodus jedoch von rechts nach links ist, wie im Arabischen, richten sich die Elemente beginnend am rechten Rand des Containers aus.

![Drei Elemente rechts beginnend ausgerichtet](basics6.png)

Das Live-Beispiel unten hat die `direction` Eigenschaft auf `rtl` gesetzt, um einen rechts-nach-links-Fluss für unsere Elemente zu erzwingen. Sie können dies entfernen oder die Werte von `justify-content` ändern, um zu sehen, wie sich Flexbox verhält, wenn der Beginn der Inline-Richtung rechts ist.

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

Die Richtung des `start` der Linie ändert sich auch, wenn Sie die `flex-direction` Eigenschaft ändern - zum Beispiel die Verwendung von `row-reverse` anstelle von `row`.

Im nächsten Beispiel bestimmen `flex-direction: row-reverse` und `justify-content: flex-end` die Richtung und den Standort der Elemente innerhalb des Flex-Containers. In einer von links nach rechts Sprache reihen sich die Elemente am linken Rand auf. Versuchen Sie, `flex-direction: row-reverse` auf `flex-direction: row` zu ändern. Sie werden sehen, dass die Elemente nun auf die rechte Seite wechseln und die visuelle Reihenfolge der Elemente umgekehrt ist.

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

Obwohl dies alles ein wenig verwirrend erscheinen mag, ist die Regel, die man sich merken sollte, dass sich Flex-Elemente, sofern Sie nichts unternehmen, um es zu ändern, in der Richtung ausrichten, in der Wörter in der Sprache Ihres Dokuments entlang der Inline-, Reihenachse anliegen. `start` und `flex-start` werden dort sein, wo ein Satz Text beginnen würde.

![Diagramm, das start links und end rechts zeigt.](align8.png)

Sie können sie so umstellen, dass sie in der Blockrichtung für die Sprache Ihres Dokuments angezeigt werden, indem Sie `flex-direction: column` auswählen. Dann werden `start` und `flex-start` dort sein, wo der obere Teil Ihres ersten Textabsatzes beginnen würde.

![Diagramm, das start oben und end unten zeigt.](align10.png)

Wenn Sie `flex-direction` in einen der Rückwärtswerte ändern, ordnen sie sich vom Endachsen aus und in der umgekehrten Reihenfolge zur Art und Weise, wie Wörter in der Sprache Ihres Dokuments geschrieben werden. Dann ändern sich `start` und `flex-start` zum Ende dieser Achse – also zum Ort, an dem Ihre Zeilen umgebrochen würden, wenn Sie in Reihen arbeiten, oder am Ende Ihres letzten Textabsatzes in der Blockrichtung.

![Diagramm, das start rechts und end links zeigt.](align9.png)

![Diagramm, das end oben und start unten zeigt](align11.png)

## Verwendung von automatischen Rändern zur Ausrichtung auf der Hauptachse

Wir haben keine `justify-items` oder `justify-self` Eigenschaft auf der Hauptachse zur Verfügung, da unsere Elemente als Gruppe auf dieser Achse behandelt werden. Es ist jedoch möglich, eine individuelle Ausrichtung vorzunehmen, um ein Element oder eine Gruppe von Elementen von anderen zu trennen, indem man automatische Ränder zusammen mit Flexbox verwendet.

Ein häufiges Muster ist eine Navigationsleiste, bei der einige Schlüsselelemente rechts ausgerichtet sind, während die Hauptgruppe links ist. Sie könnten denken, dass dies ein Anwendungsfall für eine `justify-self` Eigenschaft sein sollte. Bedenken Sie jedoch das folgende Bild: Als Beispiel, nehmen Sie das folgende Bild mit drei Elementen auf einer Seite und zwei auf der anderen. Wenn `justify-self` auf Flex-Elementen funktionieren würde und auf Element _d_ eingestellt wäre, würde es auch die Ausrichtung des darauf folgenden Elements _e_ ändern, was vielleicht nicht beabsichtigt ist.

![Fünf Elemente, in zwei Gruppen. Drei auf der linken und zwei auf der rechten Seite.](align7.png)

Stattdessen kann das Element _d_ mit CSS-Rändern verschoben werden.

In diesem Live-Beispiel wird das Element 4 durch Setzen von {{cssxref("margin-left")}} auf `auto` von den ersten drei Elementen getrennt, das alle Plätze einnimmt, die es kann, in seiner Achse. Das ist der Weg, wie das Zentrieren eines Blocks mit {{cssxref("margin")}} auto links und rechts funktioniert. Jede Seite versucht, so viel Raum wie möglich zu nehmen, und so wird der Block in die Mitte geschoben.

In diesem Live-Beispiel sind die Flex-Elemente in einer Reihe mit den grundlegenden Flex-Werten arrangiert, und die Klasse `push`, auf das vierte Element gesetzt, wendet `margin-left: auto` auf dieses Element an. Versuchen Sie, die Klasse auf dem vierten Element zu entfernen oder fügen Sie die Klasse einem anderen Element hinzu, um zu sehen, wie es funktioniert.

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

Um einen Abstand zwischen Flex-Elementen zu schaffen, verwenden Sie die {{cssxref("gap")}}, {{cssxref("column-gap")}} und {{cssxref("row-gap")}} Eigenschaften. Die {{cssxref("column-gap")}} Eigenschaft erzeugt Abstände zwischen Elementen in einer Reihe. Die {{cssxref("row-gap")}} Eigenschaft erzeugt Abstände zwischen Flex-Linien, wenn Sie {{cssxref("flex-wrap")}} auf `wrap` gesetzt haben.

Die {{cssxref("gap")}} Eigenschaft ist eine Kurzform, die sowohl `row-gap` als auch `column-gap` setzt. Der Abstand zwischen Flex-Elementen oder zwischen Flex-Linien hängt von der Richtung ab. Wenn die {{cssxref("flex-direction")}} Eigenschaft Reihen erstellt, definiert der erste Wert den Abstand zwischen Flex-Linien, und der zweite Wert den Abstand zwischen Elementen innerhalb jeder Linie. Bei Spalten (wenn `flex-direction` auf `column` oder `column-reverse` gesetzt ist), definiert der erste Wert den Abstand zwischen Flex-Elementen, und der zweite Wert definiert die Abstände zwischen Flex-Linien.

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

- [CSS-Boxausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [Boxausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Boxausrichtung im Rasterlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
