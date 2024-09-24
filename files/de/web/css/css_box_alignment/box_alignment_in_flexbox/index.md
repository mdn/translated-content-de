---
title: Box-Ausrichtung in Flexbox
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Die [Box-Ausrichtungs-Spezifikation](/de/docs/Web/CSS/CSS_box_alignment) beschreibt, wie die Ausrichtung in verschiedenen Layoutmethoden funktioniert; auf dieser Seite untersuchen wir, wie die Box-Ausrichtung im Kontext von Flexbox funktioniert. Da diese Seite darauf abzielt, Dinge zu detaillieren, die spezifisch für Flexbox und Box-Ausrichtung sind, sollte sie in Verbindung mit der Hauptseite [Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) gelesen werden, die die gemeinsamen Merkmale der Box-Ausrichtung über Layoutmethoden hinweg beschreibt.

## Grundlegendes Beispiel

In diesem Beispiel sind drei Flex-Elemente auf der Hauptachse mit {{cssxref("justify-content")}} und auf der Querachse mit {{cssxref("align-items")}} ausgerichtet. Das erste Element überschreibt die `align-items`-Werte, die für die Gruppe gesetzt sind, indem es {{cssxref("align-self")}} auf `center` setzt.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/flex-align-items.html", '100%', 500)}}

## Die Achsen und flex-direction

Flexbox respektiert den Schreibmodus des Dokuments. Wenn Sie also auf Englisch arbeiten und {{cssxref("justify-content")}} auf `flex-end` setzen, werden die Elemente am Ende des Flex-Containers ausgerichtet. Wenn Sie mit {{cssxref("flex-direction")}} auf `row` arbeiten, erfolgt diese Ausrichtung in der Inline-Richtung.

Jedoch können Sie in Flexbox die Hauptachse ändern, indem Sie `flex-direction` auf `column` setzen. In diesem Fall wird `justify-content` die Elemente in Blockrichtung ausrichten. Daher ist es am einfachsten, die Haupt- und Querachse beim Arbeiten in Flexbox folgendermaßen zu betrachten:

- Die Hauptachse = Richtung, die durch `flex-direction` festgelegt wird = Ausrichtung über `justify-content`
- Die Querachse = verläuft über die Hauptachse = Ausrichtung über `align-content`, `align-self`/`align-items`

### Ausrichtung auf der Hauptachse

- {{cssxref("justify-content")}}

### Ausrichtung auf der Querachse

- {{cssxref("align-self")}}
- {{cssxref("align-items")}}
- {{cssxref("align-content")}}

### Es gibt kein justify-self in Flexbox

Auf der Hauptachse behandelt Flexbox unsere Inhalte als Gruppe. Der benötigte Raum zum Anordnen der Elemente wird berechnet, und der verbleibende Raum steht dann zur Verteilung zur Verfügung. Die Eigenschaft `justify-content` steuert, wie dieser verbleibende Raum verwendet wird. Setzen Sie `justify-content: flex-end` und der zusätzliche Raum wird vor den Elementen platziert, bei `justify-content: space-around` wird er auf beide Seiten des Elements in dieser Dimension platziert usw.

Das bedeutet, dass eine `justify-self`-Eigenschaft in Flexbox keinen Sinn ergibt, da es immer darum geht, die gesamte Gruppe von Elementen zu verschieben.

Auf der Querachse ergibt `align-self` Sinn, da wir potenziell zusätzlichen Platz im Flex-Container in dieser Dimension haben, in der ein einzelnes Element zum Anfang oder Ende verschoben werden kann.

## Ausrichtung und automatische Margen

Es gibt einen speziellen Anwendungsfall in Flexbox, bei dem wir denken könnten, dass eine `justify-self`-Eigenschaft notwendig ist. Dies ist der Fall, wenn wir eine Gruppe von Flex-Elementen aufteilen wollen, um vielleicht ein geteiltes Navigationsmuster zu erstellen. Für diesen Anwendungsfall können wir eine `auto`-Margin verwenden. Eine auf `auto` gesetzte Margin nimmt den gesamten verfügbaren Raum in ihrer Dimension auf. Das ist, wie das Zentrieren eines Blocks mit automatischen Rändern funktioniert. Indem der linke und rechte Rand auf `auto` gesetzt wird, versuchen beide Seiten unseres Blocks, den gesamten verfügbaren Raum einzunehmen und drücken so die Box in die Mitte.

Durch das Setzen einer {{cssxref("margin")}} von `auto` auf ein Element in einer Gruppe von Flex-Elementen, die alle am Anfang ausgerichtet sind, können wir eine geteilte Navigation erstellen. Dies funktioniert gut mit Flexbox und den Ausrichtungseigenschaften. Sobald kein Raum mehr für die automatische Margin vorhanden ist, verhält sich das Element genauso wie alle anderen Flex-Elemente und schrumpft, um in den Raum zu passen.

{{EmbedGHLiveSample("css-examples/box-alignment/flexbox/auto-margins.html", '100%', 500)}}

## Die `gap`-Eigenschaften

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### Feste Größenabstände zwischen Elementen erstellen

Auf der Hauptachse erzeugt die Eigenschaft `column-gap` feste Größenabstände zwischen angrenzenden Elementen.

Auf der Querachse erzeugt die Eigenschaft `row-gap` Abstände zwischen benachbarten Flex-Linien. Daher muss `flex-wrap` auf `wrap` gesetzt werden, damit dies eine Wirkung hat.

{{EmbedGHLiveSample("css-examples/box-alignment/flexbox/gap.html", '100%', 700)}}

## Referenz

### CSS-Eigenschaften

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

### Glossareinträge

- {{Glossary("Cross axis")}}
- {{Glossary("Main axis")}}

## Anleitungen

- [Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
