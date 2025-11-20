---
title: Box-Ausrichtung für Block-, absolut positionierte und Tabellendesigns
short-title: Im Block-Layout
slug: Web/CSS/Guides/Box_alignment/In_block_abspos_tables
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

Das [CSS Box-Ausgleichsmodul](/de/docs/Web/CSS/Guides/Box_alignment) beschreibt, wie Ausrichtung in verschiedenen Layout-Methoden funktioniert. In diesem Leitfaden untersuchen wir, wie Box-Ausrichtung im Kontext des Block-Layouts funktioniert, einschließlich gefloateter, positionierter und Tabellenelemente. Da dieser Leitfaden darauf abzielt, Dinge zu detaillieren, die spezifisch für Block-Layout und Box-Ausrichtung sind, sollte er in Verbindung mit dem [Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment/Overview) Leitfaden gelesen werden, der die gemeinsamen Merkmale der Box-Ausrichtung über Layout-Methoden hinweg beschreibt.

## align-content und justify-content

Die {{cssxref("justify-content")}} Eigenschaft gilt nicht für Block-Container oder Tabellenzellen.

Die {{cssxref("align-content")}} Eigenschaft gilt für die Block-Achse, um den Inhalt der Box innerhalb ihres Containers auszurichten. Wenn eine Inhaltsverteilungsmethode wie `space-between`, `space-around` oder `space-evenly` angefordert wird, wird die Fallback-Ausrichtung verwendet, da der Inhalt als ein einziges {{Glossary("Alignment_Subject", "Ausrichtungssubjekt")}} behandelt wird.

## justify-self

Die {{cssxref("justify-self")}} Eigenschaft wird verwendet, um ein Element innerhalb seines umgebenden Blocks auf der Inline-Achse auszurichten.

Diese Eigenschaft gilt nicht für gefloatete Elemente oder Tabellenzellen.

## align-self

Die {{cssxref("align-self")}} Eigenschaft gilt nicht für Block-Level-Boxen (einschließlich Floats), da es mehr als ein Element auf der Block-Achse gibt. Sie gilt auch nicht für Tabellenzellen.

### Absolut positionierte Elemente

Der Ausrichtungscontainer ist der positionierte Block, unter Berücksichtigung der Offset-Werte von oben, links, unten und rechts. Das normale Schlüsselwort löst sich in `stretch` auf, es sei denn, das positionierte Element ist ein ersetztes Element, in diesem Fall löst es sich in `start` auf.

## Ausrichtung in diesen Layout-Methoden heute

Da wir derzeit keine Browser-Unterstützung für Box-Ausrichtung im Block-Layout haben, stehen Ihnen für die Ausrichtung entweder eine der bestehenden Ausrichtungsmethoden zur Verfügung oder Sie machen sogar ein einziges Element innerhalb eines Containers zu einem Flex-Element, um die im Flexbox angegebenen Ausrichtungseigenschaften zu verwenden.

Die horizontale Ausrichtung von Blöcken vor Flexbox wurde typischerweise durch das Setzen von automatischen Margen auf den Block erreicht. Eine {{cssxref("margin")}} von `auto` wird den gesamten verfügbaren Platz in dieser Dimension aufnehmen, daher können Sie durch das Setzen einer linken und rechten Marge von auto einen Block in die Mitte schieben:

```css
.container {
  width: 20em;
  margin-left: auto;
  margin-right: auto;
}
```

Im Tabellendesign haben Sie Zugriff auf die {{cssxref("vertical-align")}} Eigenschaft, um die Inhalte einer Zelle innerhalb dieser Zelle auszurichten.

Für viele Anwendungsfälle bietet es die Möglichkeit, den Block-Container in ein Flex-Element zu verwandeln, um die gewünschte Ausrichtungsfähigkeit zu erreichen. Im folgenden Beispiel wurde ein Container mit einem einzigen Element im Inneren in einen Flex-Container verwandelt, um die Ausrichtungseigenschaften nutzen zu können.

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

- [CSS Box-Ausgleichsmodul](/de/docs/Web/CSS/Guides/Box_alignment)
- [Übersicht zur Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment/Overview)
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [Box-Ausrichtung im Mehrspaltenlayout](/de/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout)
