---
title: Box-Ausrichtung für Block-, absolut positionierte und Tabellenlayouts
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables
l10n:
  sourceCommit: 49106bd93693d889ff792dada676bdf62350d422
---

Das [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment) beschreibt, wie die Ausrichtung in verschiedenen Layout-Methoden funktioniert. In diesem Leitfaden untersuchen wir, wie Box-Ausrichtung im Kontext von Block-Layouts funktioniert, einschließlich gefloateter, positionierter und Tabellenelemente. Da dieser Leitfaden darauf abzielt, Dinge zu erläutern, die spezifisch für das Block-Layout und die Box-Ausrichtung sind, sollte er in Verbindung mit dem Leitfaden zur [Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/box_alignment) gelesen werden, der die gemeinsamen Merkmale der Box-Ausrichtung über Layout-Methoden hinweg beschreibt.

## align-content und justify-content

Die Eigenschaft {{cssxref("justify-content")}} gilt nicht für Block-Container oder Tabellenzellen.

Die Eigenschaft {{cssxref("align-content")}} bezieht sich auf die Blockachse, um den Inhalt der Box innerhalb ihres Containers auszurichten. Wenn eine Inhaltsverteilungsmethode wie `space-between`, `space-around` oder `space-evenly` angefordert wird, wird die Ersatz-Ausrichtung verwendet, da der Inhalt als ein einziges {{Glossary("Alignment_Subject", "Ausrichtungsobjekt")}} behandelt wird.

## justify-self

Die Eigenschaft {{cssxref("justify-self")}} wird verwendet, um ein Element innerhalb seines umgebenden Blocks auf der Inline-Achse auszurichten.

Diese Eigenschaft gilt nicht für gefloatete Elemente oder Tabellenzellen.

## align-self

Die Eigenschaft {{cssxref("align-self")}} gilt nicht für Block-Level-Boxen (einschließlich Floats), da es mehr als ein Element in der Blockachse gibt. Sie gilt auch nicht für Tabellenzellen.

### Absolut positionierte Elemente

Der Ausrichtungs-Container ist der positionierte Block, unter Berücksichtigung der Offset-Werte von oben, links, unten und rechts. Das normale Schlüsselwort wird zu `stretch`, es sei denn, das positionierte Element ist ein ersetztes Element, in diesem Fall wird es zu `start`.

## Ausrichtung in diesen Layout-Methoden heute

Da wir derzeit keine Browser-Unterstützung für die Box-Ausrichtung im Block-Layout haben, besteht Ihre Möglichkeit zur Ausrichtung entweder in der Verwendung einer der bestehenden Ausrichtungsmethoden oder darin, sogar ein einzelnes Element innerhalb eines Containers zu einem Flex-Element zu machen, um die in Flexbox angegebenen Ausrichtungseigenschaften zu verwenden.

Die horizontale Ausrichtung von Blöcken vor Flexbox wurde typischerweise durch das Setzen von automatischen Rändern auf dem Block erreicht. Ein {{cssxref("margin")}} von `auto` absorbiert den gesamten verfügbaren Platz in dieser Dimension, daher können Sie durch das Setzen eines linken und rechten Randes von `auto` einen Block in die Mitte schieben:

```css
.container {
  width: 20em;
  margin-left: auto;
  margin-right: auto;
}
```

Im Tabellenlayout haben Sie Zugriff auf die Eigenschaft {{cssxref("vertical-align")}}, um den Inhalt einer Zelle innerhalb dieser Zelle auszurichten.

Für viele Anwendungsfälle wird Ihnen das Umwandeln des Block-Containers in ein Flex-Element die Ausrichtungsfähigkeit geben, die Sie suchen. Im folgenden Beispiel wurde ein Container mit einem einzigen Element darin in einen Flex-Container umgewandelt, um die Ausrichtungseigenschaften verwenden zu können.

```html live-sample___intro
<div class="box">
  <div></div>
</div>
```

```css live-sample___intro
.box {
  height: 300px;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.box div {
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("intro", "", "320px")}}

## Siehe auch

- [Übersicht zur Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment)
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Box-Ausrichtung im Mehrspalten-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
