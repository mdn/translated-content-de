---
title: Box-Ausrichtung für Block-, absolut positionierte und Tabellen-Layouts
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables
l10n:
  sourceCommit: 17357e61de97b3bd599f04ec59c2fe4f10d2a1f2
---

Die [Box-Ausrichtungsspezifikation](/de/docs/Web/CSS/CSS_box_alignment) beschreibt, wie Ausrichtung in verschiedenen Layout-Methoden funktioniert. Auf dieser Seite untersuchen wir, wie die Box-Ausrichtung im Kontext des Block-Layouts funktioniert, einschließlich gefloateter, positionierter und Tabellenelemente. Da diese Seite darauf abzielt, Dinge zu detaillieren, die spezifisch für Block-Layouts und die Box-Ausrichtung sind, sollte sie in Verbindung mit der Hauptseite zur [Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) gelesen werden, die die gemeinsamen Merkmale der Box-Ausrichtung über die verschiedenen Layout-Methoden hinweg beschreibt.

## align-content und justify-content

Die Eigenschaft {{cssxref("justify-content")}} gilt nicht für Block-Container oder Tabellenzellen.

Die Eigenschaft {{cssxref("align-content")}} gilt für die Block-Achse, um die Inhalte der Box innerhalb ihres Containers auszurichten. Wenn eine Inhaltsverteilungsmethode wie `space-between`, `space-around` oder `space-evenly` angefordert wird, wird die Ausrichtungszuflucht verwendet, da der Inhalt als ein einziges [Ausrichtungsobjekt](/de/docs/Glossary/Alignment_Subject) behandelt wird.

## justify-self

Die Eigenschaft {{cssxref("justify-self")}} wird verwendet, um ein Element auf der Inline-Achse innerhalb seines umgebenden Blocks auszurichten.

Diese Eigenschaft gilt nicht für gefloatete Elemente oder Tabellenzellen.

## align-self

Die Eigenschaft {{cssxref("align-self")}} gilt nicht für Blocklevel-Boxen (einschließlich Floats), da sich mehr als ein Element in der Blockachse befindet. Sie gilt auch nicht für Tabellenzellen.

### Absolut positionierte Elemente

Der Ausrichtungscontainer ist der positionierte Block, wobei die Offset-Werte von oben, links, unten und rechts berücksichtigt werden. Das normale Schlüsselwort löst sich zu `stretch` auf, es sei denn, das positionierte Element ist ein ersetztes Element, in diesem Fall löst es sich zu `start` auf.

## Ausrichtung in diesen Layout-Methoden heute

Da wir derzeit keine Browser-Unterstützung für Box-Ausrichtung im Block-Layout haben, besteht Ihre Möglichkeit zur Ausrichtung darin, entweder eine der bestehenden Ausrichtungsmethoden zu verwenden oder sogar ein einzelnes Element innerhalb eines Containers zu einem Flex-Element zu machen, um die in Flexbox spezifizierten Ausrichtungseigenschaften zu verwenden.

Die horizontale Ausrichtung von Blöcken vor Flexbox wurde typischerweise durch das Setzen von automatischen Margen auf dem Block erreicht. Ein {{cssxref("margin")}} von `auto` wird den gesamten verfügbaren Raum in dieser Dimension aufzehren, daher können Sie durch das Setzen von linken und rechten Margen auf automatisch einen Block in die Mitte schieben:

```css
.container {
  width: 20em;
  margin-left: auto;
  margin-right: auto;
}
```

Im Tabellen-Layout haben Sie Zugriff auf die Eigenschaft {{cssxref("vertical-align")}}, um die Inhalte einer Zelle innerhalb dieser Zelle auszurichten.

Für viele Anwendungsfälle wird das Umwandeln des Block-Containers in ein Flex-Element Ihnen die Ausrichtungsfähigkeit geben, die Sie suchen. Im nachstehenden Beispiel wurde ein Container mit einem einzigen Element darin zu einem Flex-Container gemacht, um die Ausrichtungseigenschaften verwenden zu können.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/intro.html", '100%', 700)}}

## Referenz

### CSS-Eigenschaften

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}

### Glossareinträge

- [Ausrichtungsobjekt](/de/docs/Glossary/Alignment_Subject)
- [Ausrichtungscontainer](/de/docs/Glossary/Alignment_Container)
- [Ausrichtungszuflucht](/de/docs/Glossary/Fallback_Alignment)

{{CSSRef}}
