---
title: Box-Ausrichtung für Block-, absolut positionierte und Tabelllayouts
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables
l10n:
  sourceCommit: 17357e61de97b3bd599f04ec59c2fe4f10d2a1f2
---

Die [Box-Ausrichtungs-Spezifikation](/de/docs/Web/CSS/CSS_box_alignment) erklärt, wie die Ausrichtung in verschiedenen Layoutmethoden funktioniert. In dieser Seite untersuchen wir, wie die Box-Ausrichtung im Kontext des Blocklayouts funktioniert, einschließlich freischwebender, positionierter und Tabellenelemente. Da diese Seite darauf abzielt, Dinge zu erläutern, die spezifisch für das Blocklayout und die Box-Ausrichtung sind, sollte sie zusammen mit der Hauptseite zur [Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) gelesen werden, die die gemeinsamen Merkmale der Box-Ausrichtung über Layoutmethoden hinweg detailliert beschreibt.

## align-content und justify-content

Die {{cssxref("justify-content")}}-Eigenschaft gilt nicht für Blockcontainer oder Tabellenzellen.

Die {{cssxref("align-content")}}-Eigenschaft wird auf die Blockachse angewendet, um die Inhalte der Box innerhalb ihres Containers auszurichten. Wenn eine Inhaltsverteilungsmethode wie `space-between`, `space-around` oder `space-evenly` angefordert wird, wird die Ausweichs-ausrichtung verwendet, da der Inhalt als einzelnes [alignment subject](/de/docs/Glossary/Alignment_Subject) behandelt wird.

## justify-self

Die {{cssxref("justify-self")}}-Eigenschaft wird verwendet, um ein Element innerhalb seines enthaltenen Blocks auf der Inline-Achse auszurichten.

Diese Eigenschaft gilt nicht für freischwebende Elemente oder Tabellenzellen.

## align-self

Die {{cssxref("align-self")}}-Eigenschaft gilt nicht für Block-Level-Boxen (einschließlich Floats), da es mehr als ein Element auf der Blockachse gibt. Sie gilt auch nicht für Tabellenzellen.

### Absolut positionierte Elemente

Der Ausrichtungs-Container ist der positionierte Block, unter Berücksichtigung der Offset-Werte von oben, links, unten und rechts. Das normale Schlüsselwort wird zu `stretch`, es sei denn, das positionierte Element ist ein ersetztes Element, in diesem Fall wird es zu `start`.

## Ausrichten in diesen Layoutmethoden heute

Da wir derzeit keine Unterstützung in Browsern für die Box-Ausrichtung im Blocklayout haben, können Sie entweder eine der vorhandenen Ausrichtungsmethoden verwenden oder auch nur ein einziges Element innerhalb eines Containers zu einem Flex-Element machen, um die Ausrichtungseigenschaften wie im Flexbox spezifiziert zu nutzen.

Die horizontale Ausrichtung von Blöcken vor Flexbox wurde typischerweise durch das Setzen von automatischen Rändern auf dem Block erreicht. Ein {{cssxref("margin")}} von `auto` wird den gesamten verfügbaren Platz in dieser Dimension aufnehmen, daher können Sie durch Setzen eines linken und rechten Randes von auto einen Block in die Mitte schieben:

```css
.container {
  width: 20em;
  margin-left: auto;
  margin-right: auto;
}
```

Im Tabelllayout haben Sie Zugriff auf die {{cssxref("vertical-align")}}-Eigenschaft, um den Inhalt einer Zelle innerhalb dieser Zelle auszurichten.

Für viele Anwendungsfälle wird das Umwandeln des Blockcontainers in ein Flex-Element Ihnen die Ausrichtungsfähigkeit geben, die Sie suchen. Im folgenden Beispiel wurde ein Container mit einem einzigen Element darin zu einem Flex-Container gemacht, um die Ausrichtungseigenschaften verwenden zu können.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/intro.html", '100%', 700)}}

## Referenz

### CSS-Eigenschaften

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}

### Glossareinträge

- [Ausrichtungsgegenstand](/de/docs/Glossary/Alignment_Subject)
- [Ausrichtungscontainer](/de/docs/Glossary/Alignment_Container)
- [Ausweichs-Ausrichtung](/de/docs/Glossary/Fallback_Alignment)

{{CSSRef}}
