---
title: Box-Ausrichtung für Block-, absolut positionierte und Tabellenlayouts
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables
l10n:
  sourceCommit: ca6d4f6114d278926e183225a90fd2209802cfe9
---

Die [Box-Ausrichtungs-Spezifikation](/de/docs/Web/CSS/CSS_box_alignment) erklärt, wie die Ausrichtung in verschiedenen Layout-Methoden funktioniert. Auf dieser Seite erkunden wir, wie Box-Ausrichtung im Kontext des Block-Layouts funktioniert, einschließlich schwebender, positionierter und Tabellenelemente. Da diese Seite darauf abzielt, Dinge zu detaillieren, die speziell für Block-Layout und Box-Ausrichtung gelten, sollte sie in Verbindung mit der Hauptseite zur [Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) gelesen werden, die die allgemeinen Merkmale der Box-Ausrichtung über die Layout-Methoden hinweg beschreibt.

## align-content und justify-content

Die {{cssxref("justify-content")}}-Eigenschaft gilt nicht für Block-Container oder Tabellenzellen.

Die {{cssxref("align-content")}}-Eigenschaft gilt für die Blockachse, um die Inhalte der Box innerhalb ihres Containers auszurichten. Wenn eine Inhaltsverteilungsmethode wie `space-between`, `space-around` oder `space-evenly` angefordert wird, wird die Ersatz-Ausrichtung verwendet, da der Inhalt als ein einziges {{Glossary("Alignment_Subject", "Alignment Subject")}} behandelt wird.

## justify-self

Die {{cssxref("justify-self")}}-Eigenschaft wird verwendet, um ein Element auf der Inline-Achse innerhalb seines enthaltenden Blocks auszurichten.

Diese Eigenschaft gilt nicht für schwebende Elemente oder Tabellenzellen.

## align-self

Die {{cssxref("align-self")}}-Eigenschaft gilt nicht für Block-Level-Boxen (einschließlich Floats), da mehr als ein Element in der Blockachse vorhanden ist. Sie gilt auch nicht für Tabellenzellen.

### Absolut positionierte Elemente

Der Ausrichtungs-Container ist der positionierte Block, der die Versatzwerte von oben, links, unten und rechts berücksichtigt. Das normale Schlüsselwort wird zu `stretch`, es sei denn, das positionierte Element ist ein ersetztes Element, in diesem Fall wird es zu `start`.

## Ausrichtung in diesen Layout-Methoden heute

Da wir derzeit keine Browser-Unterstützung für Box-Ausrichtung im Block-Layout haben, sind Ihre Optionen für die Ausrichtung entweder die Verwendung einer der bestehenden Ausrichtungsmethoden oder das Umwandeln eines einzigen Elements innerhalb eines Containers in ein Flex-Element, um die Ausrichtungseigenschaften gemäß Flexbox zu verwenden.

Die horizontale Ausrichtung von Blöcken vor Flexbox wurde typischerweise durch das Setzen von automatischen Rändern auf dem Block erreicht. Ein {{cssxref("margin")}} von `auto` wird den gesamten verfügbaren Platz in dieser Dimension absorbieren, daher können Sie durch Setzen eines linken und rechten Randes von auto einen Block in die Mitte schieben:

```css
.container {
  width: 20em;
  margin-left: auto;
  margin-right: auto;
}
```

Im Tabellenlayout haben Sie Zugriff auf die {{cssxref("vertical-align")}}-Eigenschaft, um den Inhalt einer Zelle innerhalb dieser Zelle auszurichten.

Für viele Anwendungsfälle gibt Ihnen das Umwandeln des Block-Containers in ein Flex-Element die Ausrichtungsfähigkeit, die Sie suchen. Im untenstehenden Beispiel wurde ein Container mit einem einzigen Element darin in einen Flex-Container umgewandelt, um die Ausrichtungseigenschaften nutzen zu können.

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

## Referenz

### CSS Eigenschaften

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}

### Glossar Einträge

- {{Glossary("Alignment_Subject", "Alignment subject")}}
- {{Glossary("Alignment_Container", "Alignment container")}}
- {{Glossary("Fallback_Alignment", "Fallback alignment")}}

{{CSSRef}}
