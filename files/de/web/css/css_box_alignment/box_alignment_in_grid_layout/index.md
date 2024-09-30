---
title: Box-Alignment im Grid-Layout
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Die [Box-Alignment](/de/docs/Web/CSS/CSS_box_alignment) Spezifikation beschreibt, wie die Ausrichtung in verschiedenen Layout-Methoden funktioniert. Auf dieser Seite untersuchen wir, wie das Box-Alignment im Kontext des [CSS Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout) funktioniert.

Da diese Seite darauf abzielt, spezifische Details des CSS Grid-Layouts und des Box-Alignments zu erläutern, sollte sie zusammen mit der Hauptseite [Box-Alignment](/de/docs/Web/CSS/CSS_box_alignment) gelesen werden, die die allgemeinen Funktionen des Box-Alignments über die Layout-Methoden hinweg beschreibt.

## Grundlegendes Beispiel

In diesem Beispiel mit Grid-Layout gibt es zusätzlichen Platz im Grid-Container, nachdem die festbreiten Tracks auf der Inline- (Haupt-) Achse angeordnet wurden. Dieser Raum wird mithilfe von `justify-content` verteilt. Auf der Block- (Quer-) Achse wird die Ausrichtung der Elemente innerhalb ihrer Grid-Bereiche mit `align-items` gesteuert. Das erste Element überschreibt den `align-items`-Wert, der auf die Gruppe gesetzt wurde, indem es `align-self` auf `center` setzt.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/grid-align-items.html", '100%', 500)}}

## Grid-Achsen

Als zweidimensionale Layout-Methode haben wir beim Arbeiten mit Grid-Layout immer zwei Achsen, auf denen wir unsere Elemente ausrichten können. Wir haben Zugriff auf alle Box-Alignment-Eigenschaften, um dies zu erreichen.

Die Inline-Achse entspricht der Richtung, in der Wörter in einem Satz im verwendeten Schreibmodus verlaufen würden. Daher verläuft die Inline-Richtung in einer horizontalen Sprache wie Englisch oder Arabisch horizontal. Sollten Sie sich in einem vertikalen Schreibmodus befinden, verläuft die Inline-Achse vertikal.

![Inline-Achsen sind horizontal.](inline_axis.png)

Um Dinge auf der Inline-Achse auszurichten, verwenden Sie die Eigenschaften, die mit `justify-` beginnen, {{cssxref("justify-content")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}}.

Die Block-Achse kreuzt die Inline-Achse in der Richtung, in der Blöcke auf der Seite dargestellt werden — zum Beispiel werden Absätze im Englischen vertikal untereinander dargestellt. Dies ist daher die Block-Dimension.

Um Dinge auf der Block-Achse auszurichten, verwenden Sie die Eigenschaften, die mit `align-` beginnen, {{cssxref("align-content")}}, {{cssxref("align-items")}} und {{cssxref("align-self")}}.

![Die Block-Achsen sind vertikal.](block_axis.png)

## Selbst-Ausrichtung

- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}
- {{cssxref("place-self")}}
- {{cssxref("justify-items")}}
- {{cssxref("align-items")}}
- {{cssxref("place-items")}}

Diese Eigenschaften befassen sich mit der Ausrichtung des Elements innerhalb des Grid-Bereichs, in den es platziert ist. Die Eigenschaften `align-items` und `justify-items` werden auf den Grid-Container angewendet und setzen die Eigenschaften `align-self` und `justify-self` als Gruppe. Das bedeutet, dass Sie die Ausrichtung für alle Ihre Grid-Elemente auf einmal setzen können, um dann die Elemente, die eine andere Ausrichtung benötigen, durch Anwenden der Eigenschaft `align-self` oder `justify-self` auf die Regeln für die einzelnen Grid-Elemente zu überschreiben.

Der anfängliche Wert für `align-self` und `justify-self` ist `stretch`, sodass das Element sich über den gesamten Grid-Bereich erstreckt. Eine Ausnahme zu dieser Regel ist, wenn das Element ein intrinsisches [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) hat, zum Beispiel ein Bild. In diesem Fall wird das Element in beiden Dimensionen auf `start` ausgerichtet, um zu vermeiden, dass das Bild verzerrt wird.

## Inhaltsausrichtung

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("place-content")}}

Diese Eigenschaften befassen sich mit der Ausrichtung der Tracks des Grids, wenn Überschussraum verteilt werden muss. Dieses Szenario tritt auf, wenn die von Ihnen definierten Tracks insgesamt kleiner sind als die Gesamtbreite des Grid-Containers.

## Abstände und veraltete grid-gap-Eigenschaften

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

Die Grid-Spezifikation enthielt ursprünglich die Definition für die Eigenschaften {{cssxref("row-gap", "grid-row-gap")}}, {{cssxref("column-gap", "grid-column-gap")}} und {{cssxref("gap", "grid-gap")}}. Diese wurden mittlerweile in die Box-Alignment-Spezifikation verschoben und in {{cssxref("row-gap")}}, {{cssxref("column-gap")}}, und {{cssxref("gap")}} umbenannt. Dies ermöglicht ihre Verwendung für andere Layout-Methoden, bei denen ein Abstand zwischen Elementen sinnvoll ist.

Die aktualisierten Eigenschaften wurden noch nicht in allen Browsern implementiert. Daher sollten Sie zur Verwendung der gap-Eigenschaften im Grid-Layout die `grid-row-gap`, `grid-column-gap` und `grid-gap`-Versionen verwenden, um vollständige Kompatibilität sicherzustellen. Sie könnten die Eigenschaften verdoppeln und sowohl als auch wie bei Vendor-Präfixen verwenden.

## Referenz

### CSS-Eigenschaften

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("place-content")}}
- {{cssxref("justify-items")}}
- {{cssxref("align-items")}}
- {{cssxref("place-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}
- {{cssxref("place-self")}}
- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### Glossar-Einträge

- [Querachse](/de/docs/Glossary/Cross_Axis)
- [Hauptachse](/de/docs/Glossary/Main_Axis)

## Leitfäden

- [Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
