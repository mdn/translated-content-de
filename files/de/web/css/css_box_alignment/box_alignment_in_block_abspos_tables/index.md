---
title: Box-Alignment für Block-, absolut positionierte und Tabellenlayouts
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{CSSRef}}

Das [CSS Box-Alignment](/de/docs/Web/CSS/CSS_box_alignment) Modul beschreibt, wie die Ausrichtung in verschiedenen Layout-Methoden funktioniert. In diesem Leitfaden untersuchen wir, wie Box-Alignment im Kontext eines Block-Layouts funktioniert, einschließlich gefloateter, positionierter und Tabellenelemente. Da dieser Leitfaden darauf abzielt, Aspekte zu beschreiben, die spezifisch für Block-Layout und Box-Alignment sind, sollte er in Verbindung mit dem [Box-Alignment](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment) Leitfaden gelesen werden, der die gemeinsamen Merkmale von Box-Alignment über die Layout-Methoden hinweg beschreibt.

## align-content und justify-content

Die {{cssxref("justify-content")}}-Eigenschaft gilt nicht für Block-Container oder Tabellenzellen.

Die {{cssxref("align-content")}}-Eigenschaft gilt für die Blockachse, um die Inhalte der Box innerhalb ihres Containers auszurichten. Wenn eine Inhaltsverteilungsmethode wie `space-between`, `space-around` oder `space-evenly` angefordert wird, wird die Fallback-Ausrichtung verwendet, da der Inhalt als einzelnes {{Glossary("Alignment_Subject", "Ausrichtungsobjekt")}} behandelt wird.

## justify-self

Die {{cssxref("justify-self")}}-Eigenschaft wird verwendet, um ein Element innerhalb seines umgebenden Blocks auf der Inline-Achse auszurichten.

Diese Eigenschaft gilt nicht für gefloatete Elemente oder Tabellenzellen.

## align-self

Die {{cssxref("align-self")}}-Eigenschaft gilt nicht für Block-Level-Boxen (einschließlich Floats), da sich mehr als ein Element auf der Blockachse befindet. Sie gilt auch nicht für Tabellenzellen.

### Absolut positionierte Elemente

Der Ausrichtungscontainer ist der positionierte Block, der die Offset-Werte von oben, links, unten und rechts berücksichtigt. Das normale Schlüsselwort löst sich in `stretch` auf, es sei denn, das positionierte Element ist ein ersetztes Element, in welchem Fall es sich in `start` auflöst.

## Ausrichtung in diesen Layout-Methoden heute

Da wir derzeit keine Browser-Unterstützung für Box-Alignment in Block-Layouts haben, bestehen Ihre Möglichkeiten zur Ausrichtung darin, entweder eine der bestehenden Ausrichtungsmethoden zu verwenden oder ein einzelnes Element in einem Container zu einem Flex-Element zu machen, um die in Flexbox angegebenen Ausrichtungseigenschaften zu nutzen.

Die horizontale Ausrichtung von Blöcken vor Flexbox wurde typischerweise erreicht, indem automatische Margen auf den Block gesetzt wurden. Eine {{cssxref("margin")}} von `auto` absorbiert allen verfügbaren Platz in dieser Dimension, daher können Sie, indem Sie eine linke und rechte Margin von auto setzen, einen Block in die Mitte schieben:

```css
.container {
  width: 20em;
  margin-left: auto;
  margin-right: auto;
}
```

Im Tabellenlayout haben Sie Zugriff auf die {{cssxref("vertical-align")}}-Eigenschaft, um die Inhalte einer Zelle innerhalb dieser Zelle auszurichten.

Für viele Anwendungsfälle wird Ihnen das Umwandeln des Block-Containers in ein Flex-Element die Ausrichtungsfähigkeit geben, die Sie suchen. Im folgenden Beispiel wurde ein Container mit einem einzelnen Element darin in einen Flex-Container umgewandelt, um die Ausrichtungseigenschaften verwenden zu können.

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

- [Box-Alignment Übersicht](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment)
- [Box-Alignment in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Alignment im CSS Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Box-Alignment im Mehrspalten-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
