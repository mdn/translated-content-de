---
title: Ausrichten von Elementen in einem Flex-Container
slug: Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container
l10n:
  sourceCommit: 8e16afba1f500f5e7f01b51ecaac8257c070b4b6
---

{{CSSRef}}

Einer der Gründe, warum Flexbox so nützlich ist, besteht darin, dass es eine korrekte Ausrichtung ermöglicht, einschließlich einer schnellen Methode, um Elemente vertikal zu zentrieren. In diesem Leitfaden werden wir uns gründlich ansehen, wie die Ausrichtungs- und Rechtfertigungseigenschaften in Flexbox funktionieren.

Flexbox bietet mehrere Eigenschaften zur Steuerung der Ausrichtung und Abstände, wobei `align-items` und `justify-content` grundlegend für die Zentrierung von Elementen sind. Um ein Element zu zentrieren, verwenden wir die {{cssxref("align-items")}}-Eigenschaft, um das Element auf der {{Glossary("cross_axis", "Querachse")}} auszurichten, die in diesem Fall die {{Glossary("Flow_relative_values", "Blockachse")}} ist, die vertikal verläuft. Wir verwenden {{cssxref("justify-content")}}, um das Element auf der Hauptachse auszurichten, die in diesem Fall die horizontale Achse ist.

![Die Querachse ist die vertikale Achse und die Hauptachse ist die horizontale Achse.](align1.png)

Ändern Sie die Größe des Containers oder des verschachtelten Elements im folgenden Codebeispiel. Das verschachtelte Element bleibt immer zentriert.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/intro.html", '100%', 700)}}

## Eigenschaften zur Steuerung der Ausrichtung in Flexbox

Die Eigenschaften, die wir uns in diesem Leitfaden ansehen werden, sind wie folgt:

- {{cssxref("justify-content")}}: Steuert die Ausrichtung aller Elemente auf der Hauptachse.
- {{cssxref("align-items")}}: Steuert die Ausrichtung aller Elemente auf der Querachse.
- {{cssxref("align-self")}}: Steuert die Ausrichtung eines einzelnen Flex-Elements auf der Querachse.
- {{cssxref("align-content")}}: Steuert den Abstand zwischen Flex-Linien auf der Querachse.
- {{cssxref("gap")}}, {{cssxref("column-gap")}} und {{cssxref("row-gap")}}: Werden verwendet, um Abstände oder Ränder zwischen Flex-Elementen zu schaffen.

Wir werden auch entdecken, wie automatische Ränder zur Ausrichtung in Flexbox genutzt werden können.

## Ausrichten von Elementen auf der Querachse

Die {{cssxref("align-items")}}-Eigenschaft, die auf dem Flex-Container gesetzt ist, und die {{cssxref("align-self")}}-Eigenschaft, die auf Flex-Elemente gesetzt ist, steuern die Ausrichtung der Flex-Elemente auf der Querachse. Die Querachse verläuft entlang der Spalten, wenn {{cssxref("flex-direction")}} `row` ist, und entlang der Zeilen, wenn `flex-direction` `column` ist.

In diesem grundlegenden Flex-Beispiel verwenden wir die Ausrichtung auf der Querachse. Wenn wir `display: flex` zu einem Container hinzufügen, werden die Kind-Elemente zu Flex-Elementen, die in einer Reihe angeordnet sind. Standardmäßig dehnen sie sich alle auf die Höhe des größten Elements aus, da dieses Element die Höhe der Elemente auf der Querachse definiert. Wenn der Flex-Container eine Höhe hat, werden die Elemente auf diese Höhe gestreckt, unabhängig davon, wie viel Inhalt in jedem Element ist.

![Drei Elemente, eines mit zusätzlichem Text, der es größer als die anderen macht.](align2.png)

![Drei Elemente, auf 200 Pixel Höhe gestreckt](align3.png)

Der Grund, warum die Elemente die gleiche Höhe haben, ist, dass der Anfangswert von `align-items`, der die Ausrichtung auf der Querachse steuert, auf `stretch` gesetzt ist.

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

Im folgenden Beispiel ist der Wert von `align-items` `stretch`. Probieren Sie die anderen Werte aus und sehen Sie, wie sich die Elemente im Flex-Container gegenseitig ausrichten.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-items.html", '100%', 520)}}

### Ein einzelnes Element mit `align-self` ausrichten

Die `align-items`-Eigenschaft setzt die `align-self`-Eigenschaft für alle Flex-Elemente als Gruppe. Das bedeutet, dass Sie die {{cssxref("align-self")}}-Eigenschaft explizit deklarieren können, um ein einzelnes Element zu zielen. Die `align-self`-Eigenschaft akzeptiert alle gleichen Werte wie `align-items` plus einen Wert von `auto`, der den Wert auf den im Flex-Container definierten zurücksetzt.

In diesem nächsten Live-Beispiel hat der Flex-Container `align-items: flex-start`, was bedeutet, dass die Elemente alle am Anfang der Querachse ausgerichtet sind. Mit dem `first-child`-Selektor ist das erste Element auf `align-self: stretch` gesetzt. Ein weiteres Element mit der Klasse `selected` hat `align-self: center` gesetzt. Ändern Sie den Wert von `align-items` oder die Werte von `align-self` an den einzelnen Elementen, um zu sehen, wie es funktioniert.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-self.html", '100%', 650)}}

### Die Hauptachse ändern

Bisher haben wir das Ausrichtungsverhalten betrachtet, wenn `flex-direction` standardmäßig auf `row` eingestellt ist, während wir in einer Sprache arbeiten, die von oben nach unten geschrieben wird, mit einer horizontalen Hauptachse und einer vertikalen Querachse.

![Drei Elemente, das erste ausgerichtet auf flex-start, das zweite in der Mitte, das dritte auf flex-end. Ausrichtung auf der vertikalen Achse.](align4.png)

Bei beibehaltung des gleichen Schriftsystems, wenn `flex-direction` auf `column` geändert wird, richten die `align-items` und `align-self`-Eigenschaften die Elemente nach links und rechts aus anstatt von oben nach unten; diese Eigenschaften richten immer noch Elemente entlang der Querachse aus, aber die Querachse ist jetzt horizontal!

![Drei Elemente, das erste ausgerichtet auf flex-start, das zweite in der Mitte, das dritte auf flex-end. Ausrichtung auf der horizontalen Achse.](align5.png)

Sie können dies im folgenden Beispiel ausprobieren, das einen Flex-Container mit `flex-direction: column` hat, ansonsten ist es genau dasselbe wie das vorherige Beispiel.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-self-column.html", '100%', 730)}}

## Inhalte auf der Querachse mit der `align-content`-Eigenschaft ausrichten

Bisher haben wir uns auf die Ausrichtung von Elementen oder eines einzelnen Elements innerhalb des Bereichs eines {{Glossary("flex_container", "flex_container")}} konzentriert, der eine einzelne Zeile von Flex-Elementen enthält. Wenn Flex-Elemente über mehrere Zeilen hinweg umgebrochen werden dürfen, kann die {{cssxref("align-content")}}-Eigenschaft verwendet werden, um die Verteilung des Raums zwischen den Zeilen zu steuern, auch bekannt als **Packung von Flex-Linien**.

Damit `align-content` eine Wirkung hat, muss die Querachsen-Dimension (in diesem Fall die Höhe) des Flex-Containers größer sein als nötig, um die Elemente anzuzeigen. Dann wirken sich die Werte von `align-content` auf die gesamte Menge der Elemente aus. Die `align-content`-Werte bestimmen, was mit dem zusätzlichen verfügbaren Raum geschieht und die Ausrichtung des gesamten Satzes von Elementen innerhalb dieses Raumes.

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

Im folgenden Live-Beispiel hat der Flex-Container eine Höhe von `400 Pixeln`, was mehr als nötig ist, um unsere Elemente anzuzeigen. Der Wert von `align-content` ist `space-between`, was bedeutet, dass der verfügbare Raum _zwischen_ den Flex-Linien geteilt wird, die bündig mit dem Anfang und dem Ende des Containers auf der Querachse platziert werden.

Probieren Sie die anderen Werte aus, um zu sehen, wie die `align-content`-Eigenschaft funktioniert.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-content.html", '100%', 850)}}

Erneut können wir unsere `flex-direction` auf `column` umschalten, um zu sehen, wie sich diese Eigenschaft verhält, wenn wir in Spalten arbeiten. Wie zuvor benötigen wir genügend Platz auf der Querachse, um noch freien Raum zu haben, nachdem alle Elemente angezeigt wurden.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-content-column.html", '100%', 860)}}

## Inhalte auf der Hauptachse ausrichten

Nachdem wir nun gesehen haben, wie die Ausrichtung auf der Querachse funktioniert, können wir uns die Hauptachse ansehen. Hier steht uns nur eine Eigenschaft zur Verfügung — `justify-content`. Dies liegt daran, dass wir uns nur mit Elementen als Gruppe auf der Hauptachse befassen. Mit `justify-content` steuern wir, was mit dem verfügbaren Platz passiert, falls mehr Platz vorhanden ist, als benötigt wird, um die Elemente anzuzeigen.

In unserem ersten Beispiel mit `display: flex` auf dem Container werden die Elemente als Reihe angezeigt und alle am Anfang des Containers ausgerichtet. Dies liegt daran, dass der Anfangswert von `justify-content` `normal` ist, was sich wie `start` verhält. Jeder verfügbare Platz wird am Ende der Elemente platziert.

![Drei Elemente, jeweils 100 Pixel breit in einem 500-Pixel-Container. Der verfügbare Platz befindet sich am Ende der Elemente.](align6.png)

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
- `justify-content: normal` (verhält sich wie stretch, das verhält sich wie start)

Im folgenden Beispiel ist der Wert von `justify-content` `space-between`. Der verfügbare Platz nach der Anzeige der Elemente wird zwischen den Elementen verteilt. Das linke und rechte Element stehen bündig mit dem Anfang und Ende.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content.html", '100%', 480)}}

Wenn die Hauptachse in der Blockrichtung ist, weil `flex-direction` auf `column` gesetzt ist, wird `justify-content` den Raum zwischen den Elementen in dieser Dimension verteilen, solange Platz im Flex-Container zum Verteilen vorhanden ist.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content-column.html", '100%', 880)}}

### Ausrichtung und Schrift Modi

Denken Sie daran, dass bei all diesen Ausrichtungsmethoden die Werte von `start` und `end` schreibmodussensitiv sind. Wenn der Wert von `justify-content` `start` ist und der Schreibmodus von links nach rechts verläuft, wie im Englischen, werden die Elemente beginnend auf der linken Seite des Containers ausgerichtet.

![Drei Elemente auf der linken Seite ausgerichtet](basics5.png)

Wenn jedoch der Schreibmodus von rechts nach links verläuft, wie im Arabischen, werden die Elemente beginnend auf der rechten Seite des Containers ausgerichtet.

![Drei Elemente beginnen von rechts ausgerichtet](basics6.png)

Das folgende Live-Beispiel hat die `direction`-Eigenschaft auf `rtl` gesetzt, um einen Rechts-nach-Links-Fluss für unsere Elemente zu erzwingen. Sie können dies entfernen oder die Werte von `justify-content` ändern, um zu sehen, wie sich Flexbox verhält, wenn der Beginn der Inline-Richtung auf der rechten Seite ist.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content-writing-mode.html", '100%', 440)}}

## Ausrichtung und `flex-direction`

Die Richtung des Anfangs der Linie wird sich auch ändern, wenn Sie die `flex-direction`-Eigenschaft ändern — zum Beispiel durch die Verwendung von `row-reverse` anstelle von `row`.

In diesem nächsten Beispiel definieren `flex-direction: row-reverse` und `justify-content: flex-end` die Richtung und den Standort der Elemente im Flex-Container. In einer von links nach rechts geschriebenen Sprache ordnen sich die Elemente auf der linken Seite an. Versuchen Sie, `flex-direction: row-reverse` zu `flex-direction: row` zu ändern. Sie werden sehen, dass sich die Elemente nun auf die rechte Seite bewegen und die visuelle Reihenfolge der Elemente umgekehrt wird.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content-reverse.html", '100%', 440)}}

Während dies alles ein wenig verwirrend erscheinen mag, ist die Regel, die man sich merken sollte, dass Flex-Elemente sich entlang der Richtung anordnen, in der Wörter in der Sprache Ihres Dokuments in der Inline-Richtung, der Zeilenachse, geschrieben werden, sofern Sie nichts tun, um dies zu ändern. `start` und `flex-start` werden dort sein, wo der Anfang eines Satzes Text beginnen würde.

![Diagramm zeigt start auf der linken Seite und end auf der rechten Seite.](align8.png)

Sie können sie in der Blockrichtung für die Sprache Ihres Dokuments durch die Auswahl von `flex-direction: column` anzeigen lassen. Dann werden `start` und `flex-start` dort sein, wo der Anfang Ihres ersten Absatzes Text beginnen würde.

![Diagramm zeigt start oben und end unten.](align10.png)

Wenn Sie `flex-direction` auf einen der umgekehrten Werte ändern, werden sie sich vom Endpunkt aus anordnen und in umgekehrter Reihenfolge zu der Art, wie Wörter in der Sprache Ihres Dokuments geschrieben werden. Dann werden `start` und `flex-start` an das Ende der Achse wechseln — also zur Position, an der sich Ihre Zeilen umwickeln würden, wenn Sie in Zeilen arbeiten, oder am Ende Ihres letzten Absatzes Text in der Blockrichtung.

![Diagramm zeigt start auf der rechten Seite und end auf der linken Seite.](align9.png)

![Diagramm zeigt end oben und start unten](align11.png)

## Auto-Ränder zur Ausrichtung auf der Hauptachse verwenden

Wir haben keine `justify-items`- oder `justify-self`-Eigenschaft auf der Hauptachse zur Verfügung, da unsere Elemente auf dieser Achse als Gruppe behandelt werden. Es ist jedoch möglich, eine gewisse individuelle Ausrichtung vorzunehmen, um ein Element oder eine Gruppe von Elementen von anderen zu trennen, indem man automatische Ränder zusammen mit Flexbox verwendet.

Ein häufiges Muster ist eine Navigationsleiste, bei der einige Schlüsselelemente rechts ausgerichtet sind, während sich die Hauptgruppe links befindet. Sie denken vielleicht, dass dies ein Anwendungsfall für eine `justify-self`-Eigenschaft sein könnte. Betrachten Sie jedoch das folgende Bild. Nehmen Sie als Beispiel das folgende Bild mit drei Elementen auf einer Seite und zwei auf der anderen. Wenn `justify-self` auf Flex-Elementen funktioniert und auf Element _d_ gesetzt wäre, würde dies auch die Ausrichtung des nachfolgenden Elements _e_ ändern, was möglicherweise nicht beabsichtigt ist.

![Fünf Elemente, in zwei Gruppen. Drei auf der linken Seite und zwei auf der rechten Seite.](align7.png)

Stattdessen kann das Element _d_ mit CSS-Rändern verschoben werden.

In diesem Live-Beispiel wird das Element 4 mit einem CSS-Rand links von der ersten drei Elemente getrennt, indem {{cssxref("margin-left")}} auf `auto` gesetzt wird, das in seiner Achse den gesamten Platz einnimmt, den es kann. Auf diese Weise funktioniert das Zentrieren eines Blocks mit {{cssxref("margin")}} auto links und rechts. Jede Seite versucht, so viel Raum wie möglich einzunehmen, und so wird der Block in die Mitte geschoben.

In diesem Live-Beispiel sind die Flex-Elemente in einer Reihe mit den grundlegenden Flex-Werten angeordnet, und die Klasse `push`, die am vierten Element gesetzt ist, wendet `margin-left: auto` auf dieses Element an. Versuchen Sie, die Klasse am vierten Element zu entfernen oder die Klasse einem anderen Element hinzuzufügen, um zu sehen, wie es funktioniert.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/auto-margins.html", '100%', 470)}}

## Lücken zwischen Elementen erzeugen

Um eine Lücke zwischen Flex-Elementen zu erzeugen, verwenden Sie die {{cssxref("gap")}}, {{cssxref("column-gap")}} und {{cssxref("row-gap")}}-Eigenschaften. Die {{cssxref("column-gap")}}-Eigenschaft erzeugt Lücken zwischen Elementen in einer Reihe. Die {{cssxref("row-gap")}}-Eigenschaft erzeugt Lücken zwischen Flex-Linien, wenn `flex-wrap` auf `wrap` eingestellt ist.

Die {{cssxref("gap")}}-Eigenschaft ist eine Abkürzung, die sowohl `row-gap` als auch `column-gap` setzt.
Die Lücke zwischen Flex-Elementen oder zwischen Flex-Linien hängt von der Richtung ab. Wenn die {{cssxref("flex-direction")}}-Eigenschaft Zeilen erzeugt, definiert der erste Wert die Lücke zwischen Flex-Linien und der zweite Wert die Lücke zwischen Elementen innerhalb jeder Linie. Bei Spalten (wenn `flex-direction` auf `column` oder `column-reverse` gesetzt ist) definiert der erste Wert die Lücke zwischen Flex-Elementen und der zweite Wert die Lücken zwischen Flex-Linien.

{{EmbedGHLiveSample("css-examples/box-alignment/flexbox/gap.html", '100%', 700)}}

## Siehe auch

- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
