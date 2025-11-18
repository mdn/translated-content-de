---
title: Box-Alignment für Block-, absolut positionierte und Tabellen-Layouts
short-title: Im Block-Layout
slug: Web/CSS/Guides/Box_alignment/In_block_abspos_tables
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Das [CSS Box Alignments](/de/docs/Web/CSS/Guides/Box_alignment) Modul beschreibt, wie Ausrichtungen in verschiedenen Layout-Methoden funktionieren. In diesem Leitfaden untersuchen wir, wie Box-Alignment im Kontext des Block-Layouts funktioniert, einschließlich schwebender, positionierter und Tabellenelemente. Da dieser Leitfaden darauf abzielt, die spezifischen Aspekte des Block-Layouts und der Box-Alignment zu erläutern, sollte er in Verbindung mit dem [Box-Alignment](/de/docs/Web/CSS/Guides/Box_alignment/Overview) Leitfaden gelesen werden, der die allgemeinen Merkmale der Box-Alignment über alle Layout-Methoden hinweg beschreibt.

## align-content und justify-content

Die {{cssxref("justify-content")}} Eigenschaft gilt nicht für Blockcontainer oder Tabellenzellen.

Die {{cssxref("align-content")}} Eigenschaft wird auf die Block-Achse angewendet, um die Inhalte der Box innerhalb ihres Containers auszurichten. Wenn eine Inhaltsverteilungsmethode wie `space-between`, `space-around` oder `space-evenly` angefordert wird, wird die Ersatz-Ausrichtung verwendet, da der Inhalt als ein einzelnes {{Glossary("Alignment_Subject", "Ausrichtungsobjekt")}} behandelt wird.

## justify-self

Die {{cssxref("justify-self")}} Eigenschaft wird verwendet, um ein Element innerhalb seines enthaltenen Blocks auf der Inline-Achse auszurichten.

Diese Eigenschaft gilt nicht für schwebende Elemente oder Tabellenzellen.

## align-self

Die {{cssxref("align-self")}} Eigenschaft gilt nicht für Block-Level-Boxen (einschließlich schwebender), da sich mehr als ein Element auf der Block-Achse befindet. Sie gilt auch nicht für Tabellenzellen.

### Absolut positionierte Elemente

Der Ausrichtungscontainer ist der positionierte Block, wobei die Offset-Werte von oben, links, unten und rechts berücksichtigt werden. Das normale Schlüsselwort wird zu `stretch` aufgelöst, es sei denn, das positionierte Element ist ein ersetztes Element, in diesem Fall wird es zu `start` aufgelöst.

## Heutige Ausrichtung in diesen Layout-Methoden

Da wir derzeit keine Browser-Unterstützung für Box-Alignment im Block-Layout haben, besteht Ihre Möglichkeit zur Ausrichtung entweder darin, eine der vorhandenen Ausrichtungsmethoden zu verwenden oder sogar ein einzelnes Element innerhalb eines Containers zu einem Flex-Element zu machen, um die in Flexbox angegebenen Ausrichtungseigenschaften zu verwenden.

Die horizontale Ausrichtung von Blöcken vor Flexbox wurde typischerweise durch das Setzen von automatischen Margen auf dem Block erreicht. Eine {{cssxref("margin")}} von `auto` wird den gesamten verfügbaren Raum in dieser Dimension absorbieren, daher können Sie durch Setzen von linker und rechter Margin auf auto einen Block in die Mitte schieben:

```css
.container {
  width: 20em;
  margin-left: auto;
  margin-right: auto;
}
```

Im Tabellen-Layout haben Sie Zugriff auf die {{cssxref("vertical-align")}} Eigenschaft, um die Inhalte einer Zelle innerhalb dieser Zelle auszurichten.

Für viele Anwendungsfälle wird Ihnen das Umwandeln des Blockcontainers in ein Flex-Element die Ausrichtungsfähigkeit geben, die Sie suchen. Im untenstehenden Beispiel wurde ein Container mit einem einzelnen Element darin in einen Flex-Container umgewandelt, um die Ausrichtungseigenschaften nutzen zu können.

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

- [Überblick über Box-Alignment](/de/docs/Web/CSS/Guides/Box_alignment/Overview)
- [Box-Alignment in Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [Box-Alignment im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [Box-Alignment im Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout)
