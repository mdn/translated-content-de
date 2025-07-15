---
title: Box-Ausrichtung für Block-, absolut positionierte und Tabellenlayouts
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das [CSS Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment) beschreibt, wie die Ausrichtung in verschiedenen Layoutmethoden funktioniert. In diesem Leitfaden untersuchen wir, wie die Box-Ausrichtung im Kontext von Block-Layouts funktioniert, einschließlich gefloateter, positionierter und Tabellenelemente. Da dieser Leitfaden darauf abzielt, Dinge zu detaillieren, die spezifisch für Block-Layouts und Box-Ausrichtung sind, sollte er zusammen mit dem [Box-Ausrichtungsleitfaden](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment) gelesen werden, der die gemeinsamen Merkmale der Box-Ausrichtung über Layoutmethoden hinweg beschreibt.

## align-content und justify-content

Die {{cssxref("justify-content")}}-Eigenschaft gilt nicht für Block-Container oder Tabellenzellen.

Die {{cssxref("align-content")}}-Eigenschaft wird auf die Blockachse angewendet, um die Inhalte der Box innerhalb ihres Containers auszurichten. Wenn eine Methode zur Inhaltsverteilung wie `space-between`, `space-around` oder `space-evenly` angefordert wird, wird die Fallback-Ausrichtung verwendet, da der Inhalt als ein einziges {{Glossary("Alignment_Subject", "Ausrichtungsobjekt")}} behandelt wird.

## justify-self

Die {{cssxref("justify-self")}}-Eigenschaft wird verwendet, um ein Element innerhalb seines enthaltenen Blocks auf der Inline-Achse auszurichten.

Diese Eigenschaft gilt nicht für gefloatete Elemente oder Tabellenzellen.

## align-self

Die {{cssxref("align-self")}}-Eigenschaft gilt nicht für Block-Level-Boxen (einschließlich Floats), da es mehr als ein Element auf der Blockachse gibt. Sie gilt auch nicht für Tabellenzellen.

### Absolut positionierte Elemente

Der Ausrichtungscontainer ist der positionierte Block, unter Berücksichtigung der Versatzwerte von oben, links, unten und rechts. Das normale Schlüsselwort wird zu `stretch`, es sei denn, das positionierte Element ist ein ersetztes Element, in welchem Fall es zu `start` aufgelöst wird.

## Ausrichtung in diesen Layoutmethoden heute

Da wir derzeit keine Browser-Unterstützung für die Box-Ausrichtung in Block-Layouts haben, bestehen Ihre Optionen zur Ausrichtung entweder darin, eine der bestehenden Ausrichtungsmethoden zu verwenden oder ein einzelnes Element innerhalb eines Containers zu einem Flex-Element zu machen, um die in Flexbox spezifizierten Ausrichtungseigenschaften zu verwenden.

Die horizontale Ausrichtung von Blöcken vor Flexbox wurde typischerweise durch das Setzen von automatischen Rändern auf dem Block erreicht. Ein {{cssxref("margin")}} von `auto` absorbiert allen verfügbaren Raum in dieser Dimension, daher können Sie durch Setzen eines linken und rechten Randes von auto einen Block in die Mitte schieben:

```css
.container {
  width: 20em;
  margin-left: auto;
  margin-right: auto;
}
```

Im Tabellenlayout haben Sie Zugriff auf die {{cssxref("vertical-align")}}-Eigenschaft, um den Inhalt einer Zelle innerhalb dieser Zelle auszurichten.

Für viele Anwendungsfälle gibt Ihnen die Umwandlung des Block-Containers in ein Flex-Element die Ausrichtungsfähigkeit, die Sie suchen. Im nachfolgenden Beispiel ist ein Container mit einem einzigen Element darin zu einem Flex-Container geworden, um die Ausrichtungseigenschaften verwenden zu können.

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

- [Box-Ausrichtungsübersicht](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment)
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung im CSS Grid Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Box-Ausrichtung im Mehrspalten-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
