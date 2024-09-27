---
title: Ausrichtung von Elementen in einem Flex-Container
slug: Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container
l10n:
  sourceCommit: 8e16afba1f500f5e7f01b51ecaac8257c070b4b6
---

{{CSSRef}}

Einer der Gründe, warum Flexbox so nützlich ist, besteht darin, dass es eine ordnungsgemäße Ausrichtung ermöglicht, einschließlich einer schnellen Methode zum vertikalen Zentrieren von Elementen. In diesem Leitfaden werden wir uns eingehend damit befassen, wie die Ausrichtungs- und Rechtfertigungseigenschaften in Flexbox funktionieren.

Flexbox bietet mehrere Eigenschaften, um Ausrichtung und Abstände zu steuern, wobei `align-items` und `justify-content` grundlegend für das Zentrieren von Elementen sind. Um ein Element zu zentrieren, verwenden wir die {{cssxref("align-items")}}-Eigenschaft, um das Element auf der [Cross-Achse](/de/docs/Glossary/cross_axis) auszurichten, die in diesem Fall die [Block-Achse](/de/docs/Glossary/Flow_relative_values) ist und vertikal verläuft. Wir verwenden {{cssxref("justify-content")}}, um das Element auf der Hauptachse auszurichten, die in diesem Fall die Inline-Achse ist, die horizontal verläuft.

![Die Cross-Achse ist die vertikale Achse und die Hauptachse ist die horizontale Achse.](align1.png)

Ändern Sie die Größe des Containers oder des eingebetteten Elements im unten stehenden Codebeispiel. Das eingebettete Element bleibt immer zentriert.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/intro.html", '100%', 700)}}

## Eigenschaften zur Steuerung der Ausrichtung in Flexbox

Die Eigenschaften, die wir in diesem Leitfaden betrachten werden, sind:

- {{cssxref("justify-content")}}: Steuert die Ausrichtung aller Elemente auf der Hauptachse.
- {{cssxref("align-items")}}: Steuert die Ausrichtung aller Elemente auf der Cross-Achse.
- {{cssxref("align-self")}}: Steuert die Ausrichtung eines einzelnen Flex-Elements auf der Cross-Achse.
- {{cssxref("align-content")}}: Steuert den Raum zwischen Flex-Linien auf der Cross-Achse.
- {{cssxref("gap")}}, {{cssxref("column-gap")}}, und {{cssxref("row-gap")}}: Werden verwendet, um Lücken oder Rinnen zwischen Flex-Elementen zu schaffen.

Wir werden außerdem entdecken, wie automatische Ränder zur Ausrichtung in Flexbox verwendet werden können.

## Ausrichtung von Elementen auf der Cross-Achse

Die {{cssxref("align-items")}}-Eigenschaft, die auf den Flex-Container gesetzt wird, und die {{cssxref("align-self")}}-Eigenschaft, die auf Flex-Elemente gesetzt wird, steuern die Ausrichtung der Flex-Elemente auf der Cross-Achse. Die Cross-Achse verläuft entlang der Spalten, wenn {{cssxref("flex-direction")}} `row` ist, und entlang der Zeilen, wenn `flex-direction` `column` ist.

In diesem einfachen Flex-Beispiel verwenden wir die Ausrichtung der Cross-Achse. Wenn wir `display: flex` zu einem Container hinzufügen, werden die Kindelemente zu Flex-Elementen, die in einer Zeile angeordnet sind. Standardmäßig werden sie alle gedehnt, um die Höhe des höchsten Elements zu erreichen, da dieses Element die Höhe der Elemente auf der Cross-Achse definiert. Wenn der Flex-Container eine festgelegte Höhe hat, werden die Elemente auf diese Höhe gedehnt, unabhängig davon, wie viel Inhalt in jedem Element enthalten ist.

![Drei Elemente, eines mit zusätzlichem Text, wodurch es höher ist als die anderen.](align2.png)

![Drei Elemente, die auf 200 Pixel Höhe gedehnt sind](align3.png)

Der Grund dafür, dass die Elemente die gleiche Höhe haben, ist der Initialwert von `align-items`, der Eigenschaft, die die Ausrichtung auf der Cross-Achse steuert, der auf `stretch` gesetzt ist.

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

Im Beispiel unten ist der Wert von `align-items` `stretch`. Probieren Sie die anderen Werte aus und sehen Sie, wie die Elemente in Bezug auf einander im Flex-Container ausgerichtet sind.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-items.html", '100%', 520)}}

### Ausrichten eines einzelnen Elements mit `align-self`

Die `align-items`-Eigenschaft setzt die `align-self`-Eigenschaft auf alle Flex-Elemente als Gruppe. Das bedeutet, Sie können die {{cssxref("align-self")}}-Eigenschaft explizit erklären, um ein einzelnes Element anzusprechen. Die Eigenschaft `align-self` akzeptiert alle gleichen Werte wie `align-items`, plus einen Wert von `auto`, der den Wert auf den des Flex-Containers zurücksetzt.

Im nächsten Live-Beispiel hat der Flex-Container `align-items: flex-start`, was bedeutet, dass die Elemente alle am Anfang der Cross-Achse ausgerichtet sind. Mit dem `first-child`-Selektor wird das erste Element auf `align-self: stretch` gesetzt. Ein anderes Element mit der `selected`-Klasse hat `align-self: center`. Ändern Sie den Wert von `align-items` oder ändern Sie die Werte von `align-self` bei den einzelnen Elementen, um zu sehen, wie dies funktioniert.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-self.html", '100%', 650)}}

### Ändern der Hauptachse

Bisher haben wir das Ausrichtungsverhalten betrachtet, wenn die `flex-direction` auf `row` voreingestellt ist und wir in einer von oben nach unten geschriebenen Sprache arbeiten, mit einer horizontalen Hauptachse und einer vertikalen Cross-Achse.

![Drei Elemente, das erste am Anfang, das zweite in der Mitte, das dritte am Ende ausgerichtet. Ausrichtung auf der vertikalen Achse.](align4.png)

Wenn der gleiche Schreibmodus beibehalten wird, wird durch Ändern der `flex-direction` in `column` die Eigenschaft `align-items` und `align-self` die Elemente links und rechts statt oben und unten ausrichten; diese Eigenschaften richten die Elemente immer noch entlang der Cross-Achse aus, aber die Cross-Achse ist jetzt horizontal!

![Drei Elemente, das erste am Anfang, das zweite in der Mitte, das dritte am Ende ausgerichtet. Ausrichtung auf der horizontalen Achse.](align5.png)

Sie können dies im Beispiel unten ausprobieren, das einen Flex-Container mit `flex-direction: column` enthält, ansonsten jedoch genau gleich wie das vorherige Beispiel ist.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-self-column.html", '100%', 730)}}

## Ausrichten von Inhalten auf der Cross-Achse mit der `align-content`-Eigenschaft

Bisher haben wir uns darauf konzentriert, Elemente oder ein einzelnes Element innerhalb des Bereichs auszurichten, der von einem [flex_container](/de/docs/Glossary/flex_container) definiert wird, der eine einzelne Linie von Flex-Elementen enthält. Wenn Flex-Elemente erlaubt sind, sich über mehrere Zeilen zu verteilen, kann die {{cssxref("align-content")}}-Eigenschaft verwendet werden, um die Verteilung des Raums zwischen den Zeilen zu steuern, auch als **Packen von Flex-Linien** bekannt.

Damit `align-content` Wirkung zeigt, muss die Dimension der Cross-Achse (in diesem Fall die Höhe) des Flex-Containers größer sein als erforderlich, um die Elemente anzuzeigen. Dann arbeitet es mit allen Elementen als Set. Die Werte von `align-content` bestimmen, was mit dem zusätzlichen verfügbaren Raum passiert und wie das gesamte Set von Elementen innerhalb davon ausgerichtet wird.

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

Im Live-Beispiel unten hat der Flex-Container eine Höhe von `400 Pixel`, was mehr ist, als erforderlich, um unsere Elemente anzuzeigen. Der Wert von `align-content` ist `space-between`, was bedeutet, dass der verfügbare Raum _zwischen_ den Flex-Linien aufgeteilt wird, die bündig mit dem Anfang und Ende des Containers auf der Cross-Achse platziert sind.

Probieren Sie die anderen Werte aus, um zu sehen, wie die `align-content`-Eigenschaft funktioniert.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-content.html", '100%', 850)}}

Wir können erneut die `flex-direction` auf `column` ändern, um zu sehen, wie sich diese Eigenschaft verhält, wenn wir in Spalten arbeiten. Wie zuvor benötigen wir genügend Platz auf der Cross-Achse, um nach der Darstellung aller Elemente etwas freien Raum zu haben.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-content-column.html", '100%', 860)}}

## Ausrichten von Inhalten auf der Hauptachse

Nachdem wir gesehen haben, wie die Ausrichtung auf der Cross-Achse funktioniert, können wir einen Blick auf die Hauptachse werfen. Hier steht uns nur eine Eigenschaft zur Verfügung — `justify-content`. Dies liegt daran, dass wir es auf der Hauptachse nur mit den Elementen als Gruppe zu tun haben. Mit `justify-content` steuern wir, was mit dem verfügbaren Raum passiert, falls mehr Raum vorhanden ist, als benötigt wird, um die Elemente darzustellen.

In unserem ersten Beispiel mit `display: flex` am Container werden die Elemente als eine Reihe angezeigt und alle am Anfang des Containers ausgerichtet. Dies liegt daran, dass der Initialwert von `justify-content` `normal` ist, was sich wie `start` verhält. Jeder verfügbare Platz wird am Ende der Elemente platziert.

![Drei Elemente, jeweils 100 Pixel breit in einem 500 Pixel -Container. Der verfügbare Platz ist am Ende der Elemente.](align6.png)

Die `baseline`-Werte sind in dieser Dimension irrelevant. Ansonsten akzeptiert die `justify-content`-Eigenschaft die gleichen Werte wie `align-content`.

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

Im Beispiel unten ist der Wert von `justify-content` `space-between`. Der verfügbare Raum nach der Anzeige der Elemente wird zwischen den Elementen aufgeteilt. Das linke und rechte Element sind bündig mit dem Anfang und Ende ausgerichtet.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content.html", '100%', 480)}}

Wenn die Hauptachse sich in der Blockrichtung befindet, weil `flex-direction` auf `column` gesetzt ist, dann wird `justify-content` den Raum zwischen den Elementen in dieser Dimension verteilen, solange im Flex-Container Platz zur Verteilung vorhanden ist.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content-column.html", '100%', 880)}}

### Ausrichtung und Schreibmodi

Denken Sie daran, dass bei allen diesen Ausrichtungsmethoden die Werte von `start` und `end` schreibmodusbewusst sind. Wenn der Wert von `justify-content` `start` ist und der Schreibmodus von links nach rechts verläuft, wie im Englischen, werden die Elemente beginnend am linken Rand des Containers ausgerichtet.

![Drei Elemente, die links ausgerichtet sind](basics5.png)

Wenn der Schreibmodus jedoch von rechts nach links verläuft, wie im Arabischen, werden die Elemente beginnend am rechten Rand des Containers ausgerichtet.

![Drei Elemente, die von rechts ausgerichtet sind](basics6.png)

Im Live-Beispiel unten ist die `direction`-Eigenschaft auf `rtl` gesetzt, um einen von rechts nach links verlaufenden Fluss für unsere Elemente zu erzwingen. Sie können dies entfernen oder die Werte von `justify-content` ändern, um zu sehen, wie Flexbox sich verhält, wenn der Anfang der Inline-Richtung rechts ist.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content-writing-mode.html", '100%', 440)}}

## Ausrichtung und `flex-direction`

Die Richtung von `start` der Linie wird sich ebenfalls ändern, wenn Sie die `flex-direction`-Eigenschaft ändern — zum Beispiel die Verwendung von `row-reverse` anstelle von `row`.

Im nächsten Beispiel definieren `flex-direction: row-reverse` und `justify-content: flex-end` die Richtung und Position der Elemente im Flex-Container. In einer von links nach rechts Sprache, richten sich die Elemente links aus. Versuchen Sie, `flex-direction: row-reverse` zu `flex-direction: row` zu ändern. Sie werden sehen, dass die Elemente nun auf die rechte Seite verschoben werden und die visuelle Reihenfolge der Elemente umgekehrt ist.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content-reverse.html", '100%', 440)}}

Obwohl all dies etwas verwirrend erscheinen mag, ist die Regel, an die man sich erinnern sollte, dass, sofern Sie nichts unternehmen, um dies zu ändern, Flex-Elemente sich in der gleichen Richtung anordnen, wie Wörter in der Sprache Ihres Dokuments entlang der Inline-, Zeilenachse angeordnet sind. `start` und `flex-start` werden dort sein, wo der Anfang eines Textsatzes beginnen würde.

![Diagramm zeigt start auf der linken und end auf der rechten Seite.](align8.png)

Sie können sie so umschalten, dass sie in Blockrichtung für die Sprache Ihres Dokuments angezeigt werden, indem Sie `flex-direction: column` auswählen. Dann werden `start` und `flex-start` dort sein, wo der Anfang Ihres ersten Textabsatzes beginnen würde.

![Diagramm zeigt start oben und end unten.](align10.png)

Wenn Sie `flex-direction` in einen der umgekehrten Werte ändern, werden sie sich vom Endpunkt und in umgekehrter Reihenfolge zu der Weise, wie Wörter in der Sprache Ihres Dokuments geschrieben werden, anordnen. Dann werden `start` und `flex-start` sich auf dem Endpunkt der Achse ändern — also an der Stelle, an der Ihre Zeilen sich in Reihen befinden würden, oder am Ende Ihres letzten Textparagraphen in der Blockrichtung.

![Diagramm zeigt start auf der rechten und end auf der linken Seite.](align9.png)

![Diagramm zeigt end oben und start unten.](align11.png)

## Verwendung von automatischen Rändern zur Ausrichtung auf der Hauptachse

Uns steht auf der Hauptachse keine `justify-items`- oder `justify-self`-Eigenschaft zur Verfügung, da unsere Elemente auf dieser Achse als Gruppe behandelt werden. Es ist jedoch möglich, durch die Verwendung von automatischen Rändern zusammen mit Flexbox eine individuelle Ausrichtung durchzuführen, um ein Element oder eine Gruppe von Elementen von anderen zu trennen.

Ein gängiges Muster ist eine Navigationsleiste, bei der einige wichtige Elemente rechts ausgerichtet sind, mit der Hauptgruppe links. Sie könnten denken, dass dies ein Anwendungsbeispiel für eine `justify-self`-Eigenschaft sein sollte. Betrachten Sie jedoch das Bild unten. Nehmen Sie zum Beispiel folgendes Bild mit drei Elementen auf einer Seite und zwei auf der anderen. Wenn `justify-self` auf Flex-Elementen funktionieren würde und auf das Element _d_ gesetzt wäre, würde es auch die Ausrichtung von Element _e_ verändern, das folgt, was möglicherweise nicht beabsichtigt ist.

![Fünf Elemente, in zwei Gruppen. Drei auf der linken Seite und zwei auf der rechten Seite.](align7.png)

Stattdessen kann das _d_-Element durch CSS-Ränder verschoben werden.

In diesem Live-Beispiel wird das Element 4 von den ersten drei Elementen durch das Setzen von {{cssxref("margin-left")}} auf `auto` getrennt, wodurch es im Rahmen seines Achsenbereichs den gesamten Raum einnimmt, den es kann. Dies ist, wie das Zentrieren eines Blocks mit {{cssxref("margin")}} auto links und rechts funktioniert. Jede Seite versucht, so viel Raum wie möglich einzunehmen, und so wird der Block in die Mitte gedrückt.

In diesem Live-Beispiel sind die Flex-Items in einer Reihe mit den Standard-Flex-Werten angeordnet, und die Klasse `push`, die auf das vierte Element gesetzt wird, wendet `margin-left: auto` auf dieses Element an. Versuchen Sie, die Klasse auf dem vierten Element zu entfernen oder sie auf ein anderes Element zu setzen, um zu sehen, wie es funktioniert.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/auto-margins.html", '100%', 470)}}

## Erstellen von Lücken zwischen Elementen

Um eine Lücke zwischen Flex-Elementen zu schaffen, verwenden Sie die Eigenschaften {{cssxref("gap")}}, {{cssxref("column-gap")}}, und {{cssxref("row-gap")}}. Die {{cssxref("column-gap")}}-Eigenschaft erzeugt Lücken zwischen Elementen in einer Reihe. Die {{cssxref("row-gap")}}-Eigenschaft erzeugt Lücken zwischen Flex-Linien, wenn Sie {{cssxref("flex-wrap")}} auf `wrap` gesetzt haben.

Die {{cssxref("gap")}}-Eigenschaft ist eine Kurzform, die sowohl `row-gap` als auch `column-gap` festlegt. Die Lücke zwischen Flex-Elementen oder zwischen Flex-Linien hängt von der Richtung ab. Wenn die {{cssxref("flex-direction")}}-Eigenschaft Zeilen erzeugt, definiert der erste Wert die Lücke zwischen Flex-Linien, und der zweite Wert definiert die Lücke zwischen den Elementen innerhalb jeder Linie. Bei Spalten (wenn `flex-direction` auf `column` oder `column-reverse` gesetzt ist), definiert der erste Wert die Lücke zwischen Flex-Elementen, und der zweite Wert definiert die Lücken zwischen Flex-Linien.

{{EmbedGHLiveSample("css-examples/box-alignment/flexbox/gap.html", '100%', 700)}}

## Siehe auch

- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [Box-Ausführung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausführung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
