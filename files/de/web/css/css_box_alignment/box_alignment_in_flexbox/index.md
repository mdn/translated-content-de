---
title: Box-Ausrichtung in Flexbox
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Die [Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)-Spezifikation beschreibt, wie die Ausrichtung in verschiedenen Layout-Methoden funktioniert; auf dieser Seite erkunden wir, wie die Box-Ausrichtung im Kontext von Flexbox funktioniert. Da diese Seite darauf abzielt, Dinge zu erläutern, die spezifisch für Flexbox und Box-Ausrichtung sind, sollte sie zusammen mit der Hauptseite zur [Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) gelesen werden, die die allgemeinen Merkmale der Box-Ausrichtung über Layout-Methoden hinweg beschreibt.

## Einfaches Beispiel

In diesem Beispiel werden drei Flex-Elemente auf der Hauptachse mit {{cssxref("justify-content")}} und auf der Querachse mit {{cssxref("align-items")}} ausgerichtet. Das erste Element überschreibt die mit `align-items` auf die Gruppe gesetzten Werte, indem es {{cssxref("align-self")}} auf `center` setzt.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/flex-align-items.html", '100%', 500)}}

## Die Achsen und Flex-Richtung

Flexbox respektiert den Schreibmodus des Dokuments, daher wird, wenn Sie auf Englisch arbeiten und {{cssxref("justify-content")}} auf `flex-end` setzen, dies die Elemente an das Ende des Flex-Containers ausrichten. Wenn Sie mit {{cssxref("flex-direction")}} auf `row` arbeiten, erfolgt diese Ausrichtung in der Inline-Richtung.

In Flexbox können Sie jedoch die Hauptachse ändern, indem Sie `flex-direction` auf `column` setzen. In diesem Fall richtet `justify-content` die Elemente in der Blockrichtung aus. Daher ist es am einfachsten, bei der Arbeit in Flexbox über die Haupt- und Querachse wie folgt nachzudenken:

- Die Hauptachse = Richtung, die durch `flex-direction` festgelegt wird = Ausrichtung über `justify-content`
- Die Querachse = verläuft quer zur Hauptachse = Ausrichtung über `align-content`, `align-self`/`align-items`

### Ausrichtung auf der Hauptachse

- {{cssxref("justify-content")}}

### Ausrichtung auf der Querachse

- {{cssxref("align-self")}}
- {{cssxref("align-items")}}
- {{cssxref("align-content")}}

### Es gibt kein justify-self in Flexbox

Auf der Hauptachse behandelt Flexbox unseren Inhalt als Gruppe. Der benötigte Platz, um die Elemente anzuordnen, wird berechnet, und der übrig gebliebene Raum steht dann zur Verteilung zur Verfügung. Die `justify-content`-Eigenschaft steuert, wie dieser verbleibende Raum genutzt wird. Setzen Sie `justify-content: flex-end` und der zusätzliche Raum wird vor den Elementen platziert, `justify-content: space-around` und er wird auf beiden Seiten des Elements in dieser Dimension platziert, usw.

Das bedeutet, dass eine `justify-self`-Eigenschaft in Flexbox keinen Sinn ergibt, da wir immer die gesamte Gruppe von Elementen bewegen.

Auf der Querachse ergibt `align-self` Sinn, da wir möglicherweise zusätzlichen Raum im Flex-Container in dieser Dimension haben, in der ein einzelnes Element zum Anfang und Ende bewegt werden kann.

## Ausrichtung und automatische Ränder

Es gibt einen speziellen Anwendungsfall in Flexbox, bei dem wir denken könnten, dass eine `justify-self`-Eigenschaft das ist, was wir benötigen, und zwar, wenn wir eine Gruppe von Flex-Elementen aufteilen möchten, vielleicht um ein geteiltes Navigationsmuster zu erstellen. Für diesen Anwendungsfall können wir einen `auto`-Rand verwenden. Ein auf `auto` gesetzter Rand absorbiert den gesamten verfügbaren Raum in seiner Dimension. So funktioniert das Zentrieren eines Blocks mit automatischen Rändern. Durch das Setzen des linken und rechten Rands auf `auto` versuchen beide Seiten unseres Blocks, den gesamten verfügbaren Platz einzunehmen und schieben so die Box in die Mitte.

Durch das Setzen eines {{cssxref("margin")}} von `auto` auf ein Element in einer Gruppe von Flex-Elementen, die alle am Anfang ausgerichtet sind, können wir eine geteilte Navigation erstellen. Dies funktioniert gut mit Flexbox und den Ausrichtungseigenschaften. Sobald kein Platz mehr für den automatischen Rand zur Verfügung steht, verhält sich das Element in gleicher Weise wie alle anderen Flex-Elemente und schrumpft, um in den Raum zu passen.

{{EmbedGHLiveSample("css-examples/box-alignment/flexbox/auto-margins.html", '100%', 500)}}

## Die `gap`-Eigenschaften

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### Erstellung fester Abstände zwischen Elementen

Auf der Hauptachse erzeugt die `column-gap`-Eigenschaft feste Abstände zwischen benachbarten Elementen.

Auf der Querachse schafft die `row-gap`-Eigenschaft Abstände zwischen benachbarten Flex-Linien, daher muss `flex-wrap` auch auf `wrap` gesetzt werden, damit dies Wirkung zeigt.

{{EmbedGHLiveSample("css-examples/box-alignment/flexbox/gap.html", '100%', 700)}}

## Referenz

### CSS Eigenschaften

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("place-content")}}
- {{cssxref("justify-items")}}
- {{cssxref("align-items")}}
- {{cssxref("place-items")}}
- {{cssxref("align-self")}}
- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### Glossar Einträge

- {{Glossary("Cross_axis", "Querachse")}}
- {{Glossary("Main_axis", "Hauptachse")}}

## Leitfäden

- [Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
