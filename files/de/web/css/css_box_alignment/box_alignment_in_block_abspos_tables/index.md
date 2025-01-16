---
title: Box-Ausrichtung für Block-, absolut positionierte und Tabellen-Layouts
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables
l10n:
  sourceCommit: 243e5eabfe95971f2850fcfdf2a7b2f210c85532
---

Das [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul beschreibt, wie die Ausrichtung in verschiedenen Layout-Methoden funktioniert. In diesem Leitfaden erkunden wir, wie die Box-Ausrichtung im Kontext des Block-Layouts funktioniert, einschließlich gefloateter, positionierter und Tabellenelemente. Da dieser Leitfaden darauf abzielt, Dinge zu detailieren, die spezifisch für Block-Layouts und Box-Ausrichtung sind, sollte er in Verbindung mit dem [Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment) Leitfaden gelesen werden, der die gemeinsamen Merkmale der Box-Ausrichtung über Layout-Methoden hinweg beschreibt.

## align-content und justify-content

Die Eigenschaft {{cssxref("justify-content")}} gilt nicht für Block-Container oder Tabellenzellen.

Die Eigenschaft {{cssxref("align-content")}} gilt für die Block-Achse, um die Inhalte der Box innerhalb ihres Containers auszurichten. Wenn eine Verteilungsmethode wie `space-between`, `space-around` oder `space-evenly` verlangt wird, dann wird die Fallback-Ausrichtung verwendet, da der Inhalt als ein einziges {{Glossary("Alignment_Subject", "Ausrichtungsobjekt")}} behandelt wird.

## justify-self

Die Eigenschaft {{cssxref("justify-self")}} wird verwendet, um ein Element innerhalb seines umgebenden Blocks auf der Inline-Achse auszurichten.

Diese Eigenschaft gilt nicht für gefloatete Elemente oder Tabellenzellen.

## align-self

Die Eigenschaft {{cssxref("align-self")}} gilt nicht für block-level Boxen (einschließlich Floats), da es mehr als ein Element in der Block-Achse gibt. Sie gilt auch nicht für Tabellenzellen.

### Absolut positionierte Elemente

Der Ausrichtungscontainer ist der positionierte Block, der die Offset-Werte von oben, links, unten und rechts berücksichtigt. Das normale Schlüsselwort löst sich in `stretch` auf, es sei denn, das positionierte Element ist ein ersetztes Element, in diesem Fall löst es sich in `start` auf.

## Ausrichtung in diesen Layout-Methoden heute

Da wir derzeit keine Browser-Unterstützung für Box-Ausrichtung im Block-Layout haben, haben Sie die Möglichkeit, entweder eine der bestehenden Ausrichtungsmethoden zu verwenden oder selbst ein einziges Element innerhalb eines Containers zu einem Flex-Element zu machen, um die Ausrichtungseigenschaften wie in Flexbox angegeben zu verwenden.

Die horizontale Ausrichtung von Blöcken vor Flexbox wurde typischerweise durch das Setzen von automatischen Rändern auf dem Block erreicht. Ein {{cssxref("margin")}} von `auto` absorbiert den gesamten verfügbaren Raum in dieser Dimension, daher können Sie durch das Setzen eines linken und rechten Rands auf auto einen Block in die Mitte schieben:

```css
.container {
  width: 20em;
  margin-left: auto;
  margin-right: auto;
}
```

Im Tabellenlayout haben Sie Zugriff auf die Eigenschaft {{cssxref("vertical-align")}}, um die Inhalte einer Zelle innerhalb dieser Zelle auszurichten.

Für viele Anwendungsfälle wird das Umwandeln des Block-Containers in ein Flex-Element Ihnen die Ausrichtungsfähigkeit geben, die Sie suchen. Im untenstehenden Beispiel wurde ein Container mit einem einzigen Element darin in einen Flex-Container umgewandelt, um die Ausrichtungseigenschaften verwenden zu können.

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

- [Übersicht über die Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment)
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung im CSS Grid Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Box-Ausrichtung im Multi-Column Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
