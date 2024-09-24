---
title: Ausrichtung von Elementen in einem Flex-Container
slug: Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container
l10n:
  sourceCommit: 8e16afba1f500f5e7f01b51ecaac8257c070b4b6
---

{{CSSRef}}

Einer der Gründe, warum Flexbox so nützlich ist, ist, dass es eine ordnungsgemäße Ausrichtung ermöglicht, einschließlich einer schnellen Methode zur vertikalen Zentrierung von Elementen. In diesem Leitfaden werden wir uns eingehend damit befassen, wie die Ausrichtungs- und Justierungs-Eigenschaften in Flexbox funktionieren.

Flexbox bietet mehrere Eigenschaften zur Steuerung der Ausrichtung und Abstände, wobei `align-items` und `justify-content` grundlegend für die Zentrierung von Elementen sind. Um ein Element zu zentrieren, verwenden wir die {{cssxref("align-items")}}-Eigenschaft, um das Element auf der {{glossary("cross axis")}} auszurichten, die in diesem Fall die [Block-Achse](/de/docs/Glossary/Flow_relative_values) ist, die vertikal verläuft. Wir verwenden {{cssxref("justify-content")}}, um das Element auf der Hauptachse auszurichten, die in diesem Fall die Inline-Achse ist, die horizontal verläuft.

![Die Kreuzachse ist die vertikale Achse und die Hauptachse ist die horizontale Achse.](align1.png)

Ändern Sie die Größe des Containers oder des verschachtelten Elements im unten stehenden Codebeispiel. Das verschachtelte Element bleibt immer zentriert.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/intro.html", '100%', 700)}}

## Eigenschaften zur Steuerung der Ausrichtung in Flexbox

Die Eigenschaften, die wir in diesem Leitfaden betrachten werden, sind wie folgt.

- {{cssxref("justify-content")}}: Steuert die Ausrichtung aller Elemente auf der Hauptachse.
- {{cssxref("align-items")}}: Steuert die Ausrichtung aller Elemente auf der Kreuzachse.
- {{cssxref("align-self")}}: Steuert die Ausrichtung eines einzelnen Flex-Elements auf der Kreuzachse.
- {{cssxref("align-content")}}: Steuert den Raum zwischen Flexzeilen auf der Kreuzachse.
- {{cssxref("gap")}}, {{cssxref("column-gap")}}, und {{cssxref("row-gap")}}: Werden verwendet, um Abstände oder Rinnen zwischen Flex-Elementen zu erstellen.

Wir werden auch entdecken, wie automatische Margen für die Ausrichtung in Flexbox verwendet werden können.

## Ausrichtung von Elementen auf der Kreuzachse

Die {{cssxref("align-items")}}-Eigenschaft, die auf dem Flex-Container gesetzt ist, und die {{cssxref("align-self")}}-Eigenschaft, die auf Flex-Elementen gesetzt ist, steuern die Ausrichtung von Flex-Elementen auf der Kreuzachse. Die Kreuzachse verläuft entlang der Spalten, wenn {{cssxref("flex-direction")}} auf `row` gesetzt ist, und entlang der Reihen, wenn `flex-direction` auf `column` gesetzt ist.

In diesem grundlegenden Flex-Beispiel verwenden wir die Ausrichtung auf der Kreuzachse. Wenn wir `display: flex` zu einem Container hinzufügen, werden die Kind-Elemente zu Flex-Elementen, die in einer Reihe angeordnet sind. Standardmäßig werden sie alle gedehnt, um die Höhe des höchsten Elements zu erreichen, da dieses Element die Höhe der Elemente auf der Kreuzachse definiert. Wenn der Flex-Container eine festgelegte Höhe hat, werden die Elemente auf diese Höhe gedehnt, unabhängig davon, wie viel Inhalt in jedem Element enthalten ist.

![Drei Elemente, eines mit zusätzlichem Text, was es höher macht als die anderen.](align2.png)

![Drei Elemente, die auf 200 Pixel Höhe gestreckt sind](align3.png)

Der Grund, warum die Elemente die gleiche Höhe haben, ist, dass der Standardwert von `align-items`, der die Ausrichtung auf der Kreuzachse steuert, auf `stretch` gesetzt ist.

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

Im folgenden Beispiel ist der Wert von `align-items` `stretch`. Versuchen Sie die anderen Werte und sehen Sie, wie sich die Elemente im Flex-Container ausrichten.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-items.html", '100%', 520)}}

### Ausrichtung eines einzelnen Elements mit `align-self`

Die `align-items`-Eigenschaft setzt die `align-self`-Eigenschaft auf alle Flex-Elemente als Gruppe. Das bedeutet, dass Sie explizit die {{cssxref("align-self")}}-Eigenschaft deklarieren können, um ein einzelnes Element anzusprechen. Die `align-self`-Eigenschaft akzeptiert alle gleichen Werte wie `align-items`, plus einen Wert von `auto`, der den Wert auf den im Flex-Container definierten Wert zurücksetzt.

Im nächsten Live-Beispiel hat der Flex-Container `align-items: flex-start`, was bedeutet, dass die Elemente alle am Start der Kreuzachse ausgerichtet sind. Mit dem `first-child`-Selektor wird das erste Element auf `align-self: stretch` gesetzt. Ein weiteres Element mit der Klasse `selected` hat `align-self: center` gesetzt. Ändern Sie den Wert von `align-items` oder die Werte von `align-self` auf den einzelnen Elementen, um zu sehen, wie dies funktioniert.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-self.html", '100%', 650)}}

### Ändern der Hauptachse

Bisher haben wir das Ausrichtungsverhalten betrachtet, wenn die `flex-direction` standardmäßig auf `row` gesetzt ist, während wir in einer top-to-bottom geschriebenen Sprache arbeiten, mit einer horizontalen Hauptachse und einer vertikalen Kreuzachse.

![Drei Elemente, das erste ausgerichtet auf flex-start, das zweite auf center, das dritte auf flex-end. Ausrichtung auf der vertikalen Achse.](align4.png)

Bei Beibehaltung des gleichen Schreibmodus, wenn die `flex-direction` auf `column` geändert wird, richten die `align-items`- und `align-self`-Eigenschaften die Elemente nach links und rechts aus, anstatt von oben nach unten; diese Eigenschaften richten die Elemente weiterhin entlang der Kreuzachse aus, aber diese ist jetzt horizontal!

![Drei Elemente, das erste ausgerichtet auf flex-start, das zweite auf center, das dritte auf flex-end. Ausrichtung auf der horizontalen Achse.](align5.png)

Sie können dies im folgenden Beispiel ausprobieren, das einen Flex-Container mit `flex-direction: column` hat, jedoch ansonsten genau gleich wie das vorherige Beispiel ist.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-self-column.html", '100%', 730)}}

## Ausrichten von Inhalten auf der Kreuzachse mit der `align-content`-Eigenschaft

Bisher haben wir uns darauf konzentriert, Elemente oder einzelne Elemente innerhalb des Bereichs auszurichten, der durch einen {{glossary("flex_container")}} definiert wird, der eine einzelne Zeile von Flex-Elementen enthält. Wenn Flex-Elemente erlaubt sind, sich über mehrere Zeilen zu erstrecken, kann die {{cssxref("align-content")}}-Eigenschaft verwendet werden, um die Verteilung des Raums zwischen den Zeilen zu steuern, auch bekannt als **flex zeilen-packing**.

Damit `align-content` eine Wirkung hat, muss die Dimension der Kreuzachse (in diesem Fall die Höhe) des Flex-Containers größer sein als die benötigte, um die Elemente anzuzeigen. Dann wirkt es sich auf alle Elemente als Satz aus. Die `align-content`-Werte bestimmen, was mit dem zusätzlich verfügbaren Raum passiert und wie das gesamte Set von Elementen innerhalb dessen ausgerichtet ist.

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

Im Live-Beispiel unten hat der Flex-Container eine Höhe von `400 Pixeln`, was mehr ist, als benötigt, um unsere Elemente anzuzeigen. Der Wert von `align-content` ist `space-between`, was bedeutet, dass der verfügbare Raum _zwischen_ den Flex-Zeilen geteilt wird, die bündig mit dem Anfang und Ende des Containers auf der Kreuzachse platziert sind.

Probieren Sie die anderen Werte aus, um zu sehen, wie die `align-content`-Eigenschaft funktioniert.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-content.html", '100%', 850)}}

Wir können erneut unsere `flex-direction` auf `column` wechseln, um zu sehen, wie sich diese Eigenschaft verhält, wenn wir in Spalten arbeiten. Wie zuvor benötigen wir genügend Platz auf der Kreuzachse, um nach Anzeige aller Elemente freien Raum zu haben.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-content-column.html", '100%', 860)}}

## Ausrichten von Inhalten auf der Hauptachse

Nachdem wir gesehen haben, wie die Ausrichtung auf der Kreuzachse funktioniert, können wir einen Blick auf die Hauptachse werfen. Hier steht uns nur eine Eigenschaft zur Verfügung — `justify-content`. Das liegt daran, dass wir nur mit den Elementen als Gruppe auf der Hauptachse arbeiten. Mit `justify-content` steuern wir, was mit verfügbarem Raum geschieht, wenn mehr Platz vorhanden ist, als benötigt wird, um die Elemente anzuzeigen.

In unserem ersten Beispiel mit `display: flex` auf dem Container werden die Elemente als Reihe angezeigt und alle am Anfang des Containers ausgerichtet. Dies liegt am Standardwert von `justify-content`, der `normal` ist, was sich wie `start` verhält. Jeglicher verfügbare Raum wird am Ende der Elemente platziert.

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

Im Beispiel unten ist der Wert von `justify-content` `space-between`. Der verfügbare Raum nach der Anzeige der Elemente wird zwischen den Elementen geteilt. Das linke und rechte Element richten sich bündig mit dem Anfang und Ende aus.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content.html", '100%', 480)}}

Wenn die Hauptachse in der Blockrichtung verläuft, weil die `flex-direction` auf `column` gesetzt ist, dann wird `justify-content` den Raum zwischen den Elementen in dieser Dimension verteilen, solange im Flex-Container Platz zur Verteilung vorhanden ist.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content-column.html", '100%', 880)}}

### Ausrichtung und Schreibmodi

Denken Sie daran, dass bei all diesen Ausrichtungsmethoden die Werte von `start` und `end` schreibmodusbewusst sind. Wenn der Wert von `justify-content` `start` ist und der Schreibmodus von links nach rechts wie im Englischen ist, richten sich die Elemente beginnend auf der linken Seite des Containers aus.

![Drei Elemente, links ausgerichtet](basics5.png)

Wenn der Schreibmodus jedoch von rechts nach links wie im Arabischen ist, richten sich die Elemente beginnend auf der rechten Seite des Containers aus.

![Drei Elemente, rechts ausgerichtet](basics6.png)

Das Live-Beispiel unten hat die `direction`-Eigenschaft auf `rtl` gesetzt, um einen Fluss von rechts nach links für unsere Elemente zu erzwingen. Sie können dies entfernen oder die Werte von `justify-content` ändern, um zu sehen, wie Flexbox funktioniert, wenn der Start der Inline-Richtung rechts liegt.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content-writing-mode.html", '100%', 440)}}

## Ausrichtung und `flex-direction`

Die Richtung des `start` der Zeile ändert sich ebenfalls, wenn Sie die `flex-direction`-Eigenschaft ändern — zum Beispiel bei der Verwendung von `row-reverse` anstelle von `row`.

Im nächsten Beispiel legen `flex-direction: row-reverse` und `justify-content: flex-end` die Richtung und den Standort der Elemente im Flex-Container fest. In einer von links nach rechts Sprache ordnen sich die Elemente auf der linken Seite an. Versuchen Sie, `flex-direction: row-reverse` auf `flex-direction: row` zu ändern. Sie werden sehen, dass sich die Elemente jetzt auf die rechte Seite bewegen und die visuelle Reihenfolge der Elemente umgekehrt ist.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content-reverse.html", '100%', 440)}}

Obwohl dies alles etwas verwirrend erscheinen mag, ist die Regel, die man sich merken sollte, dass sich Flex-Elemente, sofern Sie nichts tun, um es zu ändern, in der Richtung anordnen, in der Wörter in der Sprache Ihres Dokuments entlang der Inline-Reihe angeordnet sind. `start` und `flex-start` werden dort sein, wo der Anfang eines Satzes von Text beginnen würde.

![Diagramm, das start auf der linken Seite und end auf der rechten Seite zeigt.](align8.png)

Sie können sie so umschalten, dass sie in der Blockrichtung der Sprache Ihres Dokuments angezeigt werden, indem Sie `flex-direction: column` auswählen. Dann werden `start` und `flex-start` dort sein, wo der Anfang Ihres ersten Absatzes Text beginnen würde.

![Diagramm, das start oben und end unten zeigt.](align10.png)

Wenn Sie die `flex-direction` auf einen der reverse-Werte ändern, werden sie sich vom End-Axisknoten aus und in der umgekehrten Reihenfolge zu der Richtung, in der Wörter in der Sprache Ihres Dokuments geschrieben sind, anordnen. Dann werden `start` und `flex-start` zum Ende dieser Achse wechseln — also zu dem Punkt, an dem Ihre Zeilen umgebrochen werden würden, wenn Sie in Reihen arbeiten, oder am Ende Ihres letzten Absatzes Text in der Blockrichtung.

![Diagramm, das start auf der rechten Seite und end auf der linken Seite zeigt.](align9.png)

![Diagramm, das end oben und start unten zeigt.](align11.png)

## Verwendung von automatischen Margen zur Ausrichtung auf der Hauptachse

Wir haben keine `justify-items`- oder `justify-self`-Eigenschaft, die uns auf der Hauptachse zur Verfügung steht, da unsere Elemente auf dieser Achse als Gruppe behandelt werden. Es ist jedoch möglich, einzelne Elemente zur Trennung eines Elements oder einer Gruppe von Elementen von anderen mit Auto-Margen zusammen mit Flexbox individuell auszurichten.

Ein häufiges Muster ist eine Navigationsleiste, bei der einige Schlüsselelemente nach rechts ausgerichtet sind, während die Hauptgruppe auf der linken Seite ist. Sie könnten denken, dass dies ein Anwendungsbeispiel für eine `justify-self`-Eigenschaft sein sollte. Betrachten Sie jedoch das folgende Bild. Als Beispiel: Nehmen Sie das folgende Bild mit drei Elementen auf einer Seite und zwei auf der anderen. Wenn `justify-self` auf Flex-Elementen funktionieren würde und auf Element _d_ gesetzt wäre, würde dies auch die Ausrichtung des folgenden Elements _e_ ändern, was möglicherweise nicht gewünscht ist.

![Fünf Elemente, in zwei Gruppen. Drei auf der linken und zwei auf der rechten Seite.](align7.png)

Stattdessen kann das _d_-Element mit CSS-Margen verschoben werden.

In diesem Live-Beispiel wird das Element 4 von den ersten drei Elementen getrennt, indem {{cssxref("margin-left")}} auf `auto` gesetzt wird, was den gesamten Platz einnimmt, den es auf seiner Achse kann. So funktioniert das Zentrieren eines Blocks mit {{cssxref("margin")}} auto links und rechts. Jede Seite versucht, so viel Platz wie möglich einzunehmen, und so wird der Block in die Mitte geschoben.

In diesem Live-Beispiel sind die Flex-Elemente in einer Reihe mit den grundlegenden Flex-Werten angeordnet, und die Klasse `push`, die auf das vierte Element gesetzt ist, wendet `margin-left: auto` auf dieses Element an. Versuchen Sie, die Klasse auf dem vierten Element zu entfernen oder die Klasse auf ein anderes Element zu setzen, um zu sehen, wie es funktioniert.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/auto-margins.html", '100%', 470)}}

## Erstellen von Lücken zwischen Elementen

Um eine Lücke zwischen Flex-Elementen zu erzeugen, verwenden Sie die {{cssxref("gap")}}, {{cssxref("column-gap")}}, und {{cssxref("row-gap")}}-Eigenschaften. Die {{cssxref("column-gap")}}-Eigenschaft erstellt Lücken zwischen Elementen in einer Reihe. Die {{cssxref("row-gap")}}-Eigenschaft erstellt Lücken zwischen Flex-Zeilen, wenn Sie {{cssxref("flex-wrap")}} auf `wrap` gesetzt haben.

Die {{cssxref("gap")}}-Eigenschaft ist eine Kurzform, die sowohl `row-gap` als auch `column-gap` setzt.
Die Lücke zwischen Flex-Elementen oder zwischen Flex-Zeilen hängt von der Richtung ab. Wenn die {{cssxref("flex-direction")}}-Eigenschaft Reihen erstellt, definiert der erste Wert die Lücke zwischen Flex-Zeilen und der zweite Wert die Lücke zwischen den Elementen innerhalb jeder Zeile. Bei Spalten (wenn `flex-direction` auf `column` oder `column-reverse` gesetzt ist) definiert der erste Wert die Lücke zwischen Flex-Elementen und der zweite Wert die Lücken zwischen den Flex-Zeilen.

{{EmbedGHLiveSample("css-examples/box-alignment/flexbox/gap.html", '100%', 700)}}

## Siehe auch

- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)-Modul
- [CSS-Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)-Modul
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung in Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
