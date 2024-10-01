---
title: Box-Ausrichtung in Block-, absolut positionierten und Tabellen-Layouts
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables
l10n:
  sourceCommit: 17357e61de97b3bd599f04ec59c2fe4f10d2a1f2
---

Die [Box-Ausrichtungs-Spezifikation](/de/docs/Web/CSS/CSS_box_alignment) beschreibt, wie die Ausrichtung in verschiedenen Layout-Methoden funktioniert. Auf dieser Seite untersuchen wir, wie die Box-Ausrichtung im Kontext des Block-Layouts, einschließlich gefloateter, positionierter und Tabellenelemente, funktioniert. Da diese Seite darauf abzielt, Dinge zu erläutern, die spezifisch für Block-Layout und Box-Ausrichtung sind, sollte sie in Verbindung mit der Hauptseite zur [Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) gelesen werden, die die gemeinsamen Merkmale der Box-Ausrichtung in verschiedenen Layout-Methoden beschreibt.

## align-content und justify-content

Die {{cssxref("justify-content")}}-Eigenschaft gilt nicht für Block-Container oder Tabellenzellen.

Die {{cssxref("align-content")}}-Eigenschaft wird in der Blockachse angewendet, um den Inhalt der Box innerhalb ihres Containers auszurichten. Wenn eine Verteilungsmethode wie `space-between`, `space-around` oder `space-evenly` angefordert wird, wird die Ausrichtungsfalle verwendet, da der Inhalt als einzelnes {{Glossary("Alignment_Subject", "Ausrichtungsobjekt")}} behandelt wird.

## justify-self

Die {{cssxref("justify-self")}}-Eigenschaft wird verwendet, um ein Element innerhalb seines umgebenden Blocks auf der Inline-Achse auszurichten.

Diese Eigenschaft gilt nicht für gefloatete Elemente oder Tabellenzellen.

## align-self

Die {{cssxref("align-self")}}-Eigenschaft gilt nicht für Block-Boxen (einschließlich Floats), da es mehr als ein Element in der Blockachse gibt. Sie gilt auch nicht für Tabellenzellen.

### Absolut positionierte Elemente

Der Ausrichtungs-Container ist der positionierte Block, wobei die Versatzwerte von oben, links, unten und rechts berücksichtigt werden. Das normale Schlüsselwort wird zu `stretch`, es sei denn, das positionierte Element ist ein ersetztes Element, in welchem Fall es zu `start` wird.

## Ausrichtung in diesen Layout-Methoden heute

Da wir derzeit keine Browser-Unterstützung für die Box-Ausrichtung im Block-Layout haben, sind Ihre Optionen für die Ausrichtung entweder eine der bestehenden Ausrichtungs-Methoden zu verwenden oder sogar ein einzelnes Element innerhalb eines Containers zu einem Flex-Element zu machen, um die Ausrichtungseigenschaften wie im Flexbox spezifiziert zu verwenden.

Die horizontale Ausrichtung von Blöcken vor Flexbox wurde typischerweise durch Setzen von automatischen Rändern auf dem Block erreicht. Ein {{cssxref("margin")}} von `auto` absorbiert den gesamten verfügbaren Platz in dieser Dimension, daher kann durch Setzen eines linken und rechten Randes von auto ein Block in die Mitte geschoben werden:

```css
.container {
  width: 20em;
  margin-left: auto;
  margin-right: auto;
}
```

Im Tabellen-Layout haben Sie Zugriff auf die {{cssxref("vertical-align")}}-Eigenschaft, um den Inhalt einer Zelle innerhalb dieser Zelle auszurichten.

Für viele Anwendungsfälle wird das Umwandeln des Block-Containers in ein Flex-Element Ihnen die Ausrichtungsfähigkeit geben, die Sie suchen. Im untenstehenden Beispiel wurde ein Container mit einem einzelnen Element zu einem Flex-Container gemacht, um die Ausrichtungseigenschaften verwenden zu können.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/intro.html", '100%', 700)}}

## Referenz

### CSS-Eigenschaften

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}

### Glossar-Einträge

- {{Glossary("Alignment_Subject", "Ausrichtungsobjekt")}}
- {{Glossary("Alignment_Container", "Ausrichtungs-Container")}}
- {{Glossary("Fallback_Alignment", "Ausrichtungsfalle")}}

{{CSSRef}}
