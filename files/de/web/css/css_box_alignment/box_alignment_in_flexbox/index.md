---
title: Box-Ausrichtung in flexbox
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Die [Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Spezifikation legt fest, wie die Ausrichtung in verschiedenen Layout-Methoden funktioniert; auf dieser Seite erkunden wir, wie die Box-Ausrichtung im Kontext von Flexbox funktioniert. Da diese Seite darauf abzielt, Dinge zu erklären, die spezifisch für Flexbox und Box-Ausrichtung sind, sollte sie in Verbindung mit der Hauptseite [Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) gelesen werden, die die gemeinsamen Merkmale der Box-Ausrichtung über Layout-Methoden hinweg beschreibt.

## Grundlegendes Beispiel

In diesem Beispiel werden drei Flex-Elemente auf der Hauptachse mit {{cssxref("justify-content")}} und auf der Querachse mit {{cssxref("align-items")}} ausgerichtet. Das erste Element überschreibt die `align-items` Werte, die auf die Gruppe gesetzt wurden, indem es {{cssxref("align-self")}} auf `center` setzt.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/flex-align-items.html", '100%', 500)}}

## Die Achsen und flex-direction

Flexbox respektiert den Schreibmodus des Dokuments, daher werden, wenn Sie in Englisch arbeiten und {{cssxref("justify-content")}} auf `flex-end` setzen, die Elemente am Ende des Flex-Containers ausgerichtet. Wenn Sie mit {{cssxref("flex-direction")}} auf `row` eingestellt arbeiten, erfolgt diese Ausrichtung in der Inline-Richtung.

In Flexbox können Sie jedoch die Hauptachse ändern, indem Sie `flex-direction` auf `column` einstellen. In diesem Fall richtet `justify-content` die Elemente in der Blockrichtung aus. Daher ist es am einfachsten, über die Haupt- und Nebenachse nachzudenken, wenn man in Flexbox arbeitet, wie folgt:

- Die Hauptachse = Richtung, die durch `flex-direction` gesetzt wird = Ausrichtung über `justify-content`
- Die Querachse = verläuft quer zur Hauptachse = Ausrichtung über `align-content`, `align-self`/`align-items`

### Ausrichtung auf der Hauptachse

- {{cssxref("justify-content")}}

### Ausrichtung auf der Querachse

- {{cssxref("align-self")}}
- {{cssxref("align-items")}}
- {{cssxref("align-content")}}

### Es gibt kein justify-self in Flexbox

Auf der Hauptachse behandelt Flexbox unseren Inhalt als Gruppe. Der Platzbedarf für das Layout der Elemente wird berechnet, und der verbleibende Raum steht dann zur Verteilung zur Verfügung. Die `justify-content` Eigenschaft steuert, wie dieser verbleibende Raum genutzt wird. Setzen Sie `justify-content: flex-end` und der zusätzliche Raum wird vor den Elementen platziert, `justify-content: space-around` und er wird entweder auf beiden Seiten des Elements in dieser Dimension platziert, usw.

Das bedeutet, dass eine `justify-self` Eigenschaft in Flexbox keinen Sinn ergibt, da wir immer die gesamte Gruppe von Elementen bewegen.

Auf der Querachse macht `align-self` Sinn, da wir möglicherweise zusätzlichen Raum im Flex-Container in dieser Dimension haben, in dem ein einzelnes Element zum Anfang oder Ende verschoben werden kann.

## Ausrichtung und automatische Margen

Es gibt einen speziellen Anwendungsfall in Flexbox, bei dem wir vielleicht denken, dass eine `justify-self` Eigenschaft das ist, was wir brauchen, und zwar wenn wir eine Gruppe von Flex-Elementen aufteilen möchten, möglicherweise um ein gesplittetes Navigationsmuster zu erstellen. Für diesen Anwendungsfall können wir eine `auto`-Margin verwenden. Eine auf `auto` eingestellte Margin nimmt den gesamten verfügbaren Raum in ihrer Dimension auf. So funktioniert das Zentrieren eines Blocks mit automatischen Margen. Indem Sie die linke und rechte Margin auf `auto` setzen, versuchen beide Seiten unseres Blocks, den gesamten verfügbaren Raum einzunehmen, und drücken den Block damit in die Mitte.

Indem Sie ein {{cssxref("margin")}} von `auto` auf ein Element in einer Gruppe von Flex-Elementen setzen, die alle nach links ausgerichtet sind, können Sie eine gesplittete Navigation erstellen. Dies funktioniert gut mit Flexbox und den Ausrichtungseigenschaften. Sobald kein Platz mehr für die automatische Margin verfügbar ist, verhält sich das Element wie alle anderen Flex-Elemente und schrumpft, um zu versuchen, in den Raum zu passen.

{{EmbedGHLiveSample("css-examples/box-alignment/flexbox/auto-margins.html", '100%', 500)}}

## Die `gap` Eigenschaften

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### Feste Lücken zwischen Elementen erstellen

Auf der Hauptachse erstellt die Eigenschaft `column-gap` feste Lücken zwischen benachbarten Elementen.

Auf der Querachse erzeugt die Eigenschaft `row-gap` Abstände zwischen benachbarten Flex-Linien, daher muss `flex-wrap` auch auf `wrap` gesetzt sein, damit dies eine Wirkung hat.

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

### Glossar Einträge

- [Querachse](/de/docs/Glossary/Cross_axis)
- [Hauptachse](/de/docs/Glossary/Main_axis)

## Leitfäden

- [Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
