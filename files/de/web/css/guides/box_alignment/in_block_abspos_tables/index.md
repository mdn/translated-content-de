---
title: Box-Ausrichtung für Block-, absolut positionierte und Tabellenelement-Layouts
short-title: Im Block-Layout
slug: Web/CSS/Guides/Box_alignment/In_block_abspos_tables
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/Guides/Box_alignment) beschreibt, wie die Ausrichtung in verschiedenen Layoutmethoden funktioniert. In diesem Leitfaden erkunden wir, wie die Box-Ausrichtung im Kontext von Block-Layouts funktioniert, einschließlich gefloateter, positionierter und Tabellenelemente. Da dieser Leitfaden darauf abzielt, Dinge zu detaillieren, die spezifisch für Block-Layouts und Box-Ausrichtung sind, sollte er zusammen mit dem [Box-Ausrichtungs-Leitfaden](/de/docs/Web/CSS/Guides/Box_alignment/Overview) gelesen werden, der die allgemeinen Merkmale der Box-Ausrichtung über Layoutmethoden hinweg beschreibt.

## align-content und justify-content

Die Eigenschaft {{cssxref("justify-content")}} gilt nicht für Blockcontainer oder Tabellzellen.

Die Eigenschaft {{cssxref("align-content")}} gilt für die Blockachse, um den Inhalt der Box innerhalb ihres Containers auszurichten. Wenn eine Inhaltsverteilungsmethode wie `space-between`, `space-around` oder `space-evenly` angefordert wird, wird die Fallback-Ausrichtung verwendet, da der Inhalt als einzelnes {{Glossary("Alignment_Subject", "Ausrichtungsobjekt")}} behandelt wird.

## justify-self

Die Eigenschaft {{cssxref("justify-self")}} wird verwendet, um ein Element innerhalb seines enthaltenden Blocks auf der Inline-Achse auszurichten.

Diese Eigenschaft gilt nicht für gefloatete Elemente oder Tabellzellen.

## align-self

Die Eigenschaft {{cssxref("align-self")}} gilt nicht für Block-Level-Boxen (einschließlich Floats), da es mehr als ein Element auf der Blockachse gibt. Sie gilt auch nicht für Tabellzellen.

### Absolut positionierte Elemente

Der Ausrichtungscontainer ist der positionierte Block, wobei die Versatzwerte von oben, links, unten und rechts berücksichtigt werden. Das normale Schlüsselwort löst sich zu `stretch`, es sei denn, das positionierte Element ist ein ersetztes Element, in diesem Fall löst es sich zu `start`.

## Ausrichtung in diesen Layoutmethoden heute

Da wir derzeit keine Browser-Unterstützung für die Box-Ausrichtung im Block-Layout haben, haben Sie die Optionen, entweder eine der bestehenden Ausrichtungsmethoden zu verwenden oder sogar ein einzelnes Element innerhalb eines Containers zu einem Flex-Element zu machen, um die in Flexbox spezifizierten Ausrichtungseigenschaften zu verwenden.

Die horizontale Ausrichtung von Blöcken vor Flexbox wurde typischerweise durch das Setzen von automatischen Rändern am Block erreicht. Ein {{cssxref("margin")}} von `auto` wird allen verfügbaren Raum in dieser Dimension aufnehmen, daher können Sie einen linken und rechten Rand von auto setzen, um einen Block in die Mitte zu schieben:

```css
.container {
  width: 20em;
  margin-left: auto;
  margin-right: auto;
}
```

Im Tabellenlayout haben Sie Zugriff auf die Eigenschaft {{cssxref("vertical-align")}}, um den Inhalt einer Zelle innerhalb dieser Zelle auszurichten.

Für viele Anwendungsfälle gibt Ihnen das Umwandeln des Blockcontainers in ein Flex-Element die gewünschte Ausrichtungsfähigkeit. Im folgenden Beispiel wurde ein Container mit einem einzigen Element darin in einen Flex-Container umgewandelt, um die Ausrichtungseigenschaften verwenden zu können.

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

- [Übersicht zur Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment/Overview)
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [Box-Ausrichtung im Mehrspaltenlayout](/de/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout)
