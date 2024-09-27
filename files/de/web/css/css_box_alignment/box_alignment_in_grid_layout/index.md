---
title: Box-Ausrichtung im Grid-Layout
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Die [Spezifikation zur Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) beschreibt, wie die Ausrichtung in verschiedenen Layout-Methoden funktioniert. Auf dieser Seite untersuchen wir, wie die Box-Ausrichtung im Kontext des [CSS Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout) funktioniert.

Da diese Seite darauf abzielt, Besonderheiten des CSS-Grid-Layouts und der Box-Ausrichtung zu erläutern, sollte sie in Verbindung mit der Hauptseite zur [Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) gelesen werden, die die gemeinsamen Merkmale der Box-Ausrichtung über Layout-Methoden hinweg beschreibt.

## Einfaches Beispiel

In diesem Beispiel mit Grid-Layout gibt es zusätzlichen Raum im Grid-Container, nachdem die festen Breiten-Spuren auf der Inline- (Haupt-) Achse ausgelegt wurden. Dieser Raum wird mit `justify-content` verteilt. Auf der Block- (Quer-) Achse wird die Ausrichtung der Elemente innerhalb ihrer Grid-Bereiche mit `align-items` gesteuert. Das erste Element überschreibt den `align-items`-Wert, der für die Gruppe festgelegt wurde, indem es `align-self` auf `center` setzt.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/grid-align-items.html", '100%', 500)}}

## Grid-Achsen

Als zweidimensionales Layoutverfahren haben wir beim Arbeiten mit Grid-Layouts immer zwei Achsen, auf denen wir unsere Elemente ausrichten können. Wir haben Zugriff auf alle Eigenschaften der Box-Ausrichtung, um dies zu erreichen.

Die Inline-Achse ist die Achse, die der Richtung entspricht, in der Wörter in einem Satz im verwendeten Schreibmodus verlaufen würden. Daher verläuft die Inline-Richtung in einer horizontalen Sprache wie Englisch oder Arabisch horizontal. Befindet man sich in einem vertikalen Schreibmodus, verläuft die Inline-Achse vertikal.

![Inline-Achsen sind horizontal.](inline_axis.png)

Um Dinge auf der Inline-Achse auszurichten, verwenden Sie die Eigenschaften, die mit `justify-` beginnen: {{cssxref("justify-content")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}}.

Die Block-Achse kreuzt die Inline-Achse in der Richtung, in der Blöcke auf die Seite herunter dargestellt werden — zum Beispiel werden Absätze im Englischen vertikal untereinander dargestellt. Dies ist daher die Block-Dimension.

Um Dinge auf der Block-Achse auszurichten, verwenden Sie die Eigenschaften, die mit `align-` beginnen: {{cssxref("align-content")}}, {{cssxref("align-items")}} und {{cssxref("align-self")}}.

![Die Block-Achsen sind vertikal.](block_axis.png)

## Eigenständige Ausrichtung

- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}
- {{cssxref("place-self")}}
- {{cssxref("justify-items")}}
- {{cssxref("align-items")}}
- {{cssxref("place-items")}}

Diese Eigenschaften befassen sich mit der Ausrichtung des Elements innerhalb des Grid-Bereichs, in den es platziert wird. Die Eigenschaften `align-items` und `justify-items` werden auf den Grid-Container angewendet und setzen die Eigenschaften `align-self` und `justify-self` als Gruppe. Das bedeutet, dass Sie die Ausrichtung für alle Ihre Grid-Elemente auf einmal festlegen und dann einzelne Elemente, die eine andere Ausrichtung benötigen, überschreiben können, indem Sie die Eigenschaften `align-self` oder `justify-self` auf die Regeln für die einzelnen Grid-Elemente anwenden.

Der Anfangswert für `align-self` und `justify-self` ist `stretch`, sodass das Element über den gesamten Grid-Bereich gedehnt wird. Die Ausnahme von dieser Regel ist, wenn das Element ein intrinsisches [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) hat, zum Beispiel ein Bild. In diesem Fall wird das Element in beiden Dimensionen auf `start` ausgerichtet, damit das Bild nicht verzerrt wird.

## Inhaltsausrichtung

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("place-content")}}

Diese Eigenschaften befassen sich mit der Ausrichtung der Spuren des Grids, wenn zusätzlicher Raum zu verteilen ist. Dieses Szenario tritt auf, wenn die von Ihnen definierten Spuren insgesamt weniger als die Gesamtbreite des Grid-Containers ergeben.

## Lücke und veraltete grid-gap-Eigenschaften

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

Die Grid-Spezifikation enthielt ursprünglich die Definition für die Eigenschaften {{cssxref("row-gap", "grid-row-gap")}}, {{cssxref("column-gap", "grid-column-gap")}} und {{cssxref("gap", "grid-gap")}}. Diese wurden in die Box-Ausrichtungs-Spezifikation verschoben und in {{cssxref("row-gap")}}, {{cssxref("column-gap")}} und {{cssxref("gap")}} umbenannt. Dies ermöglicht ihre Verwendung für andere Layout-Methoden, bei denen ein Abstand zwischen Elementen sinnvoll ist.

Die aktualisierten Eigenschaften sind noch nicht in allen Browsern implementiert. Daher sollten Sie, um die Lücken-Eigenschaften im Grid-Layout zu verwenden, die `grid-row-gap`, `grid-column-gap` und `grid-gap` Versionen verwenden, um vollständige Kompatibilität sicherzustellen. Sie könnten die Eigenschaften verdoppeln und beide verwenden, wie Sie es bei Anbieter-Präfixen tun würden.

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

### Glossareinträge

- [Querachse](/de/docs/Glossary/Cross_Axis)
- [Hauptachse](/de/docs/Glossary/Main_Axis)

## Leitfäden

- [Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
