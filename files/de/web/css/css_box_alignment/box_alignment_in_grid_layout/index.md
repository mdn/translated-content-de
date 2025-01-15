---
title: Box-Ausrichtung im Grid-Layout
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout
l10n:
  sourceCommit: 49106bd93693d889ff792dada676bdf62350d422
---

{{CSSRef}}

Das [CSS Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment) beschreibt, wie die Ausrichtung in verschiedenen Layout-Methoden funktioniert. Auf dieser Seite betrachten wir, wie die Box-Ausrichtung im Kontext des [CSS Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout) funktioniert.

Da dieser Leitfaden darauf abzielt, Dinge zu detaillieren, die spezifisch für CSS Grid-Layout und Box-Ausrichtung sind, sollte er zusammen mit der [Box-Ausrichtungsübersicht](/de/docs/Web/CSS/CSS_box_alignment/box_alignment) gelesen werden, die die gemeinsamen Merkmale der Box-Ausrichtung über Layout-Methoden hinweg beschreibt.

## Grundlegendes Beispiel

In diesem Beispiel mit [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) gibt es nach der Anordnung der fixierten Breitenlinien auf der inline {{Glossary("main_axis", "Hauptachse")}} zusätzlichen Platz im {{Glossary("grid_container", "Grid-Container")}}. Dieser Platz wird mit {{cssxref("justify-content")}} verteilt. Auf der Block-{{Glossary("cross_axis", "Querachse")}} wird die Ausrichtung der Elemente innerhalb ihrer Grid-Bereiche mit {{cssxref("align-items")}} gesteuert. Das erste Element überschreibt den für die Gruppe gesetzten Wert von `align-items`, indem es {{cssxref("align-self")}} auf `center` setzt.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/grid-align-items.html", '100%', 500)}}

## Grid-Achsen

Als zweidimensionale Layout-Methode haben wir beim Arbeiten mit Grid-Layout immer zwei Achsen, auf denen wir unsere Elemente ausrichten. Wir haben Zugriff auf alle Box-Ausrichtungseigenschaften, um dies zu erreichen.

Die Inline-Achse ist die Achse, die der Richtung entspricht, in der Wörter in einem Satz entsprechend des verwendeten Schreibmodus verlaufen würden. In einer horizontalen Sprache wie Englisch oder Arabisch verläuft die Inline-Richtung horizontal. Sollten Sie sich in einem vertikalen Schreibmodus befinden, verläuft die Inline-Achse vertikal.

![Inline-Achsen sind horizontal.](inline_axis.png)

Um Dinge auf der Inline-Achse auszurichten, verwenden Sie die Eigenschaften, die mit `justify-` beginnen: {{cssxref("justify-content")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}}.

Die Block-Achse kreuzt die Inline-Achse in der Richtung, in der Blöcke die Seite hinunter angezeigt werden - zum Beispiel werden Absätze im Englischen vertikal untereinander angezeigt. Dies ist die Block-Dimension.

Um Dinge auf der Block-Achse auszurichten, verwenden Sie die Eigenschaften, die mit `align-` beginnen, {{cssxref("align-content")}}, {{cssxref("align-items")}} und {{cssxref("align-self")}}.

![Die Block-Achsen sind vertikal.](block_axis.png)

## Selbst-Ausrichtung

Diese Eigenschaften befassen sich mit der Ausrichtung des Elements innerhalb des Grid-Bereichs, in den es platziert wird:

- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}
- {{cssxref("place-self")}}
- {{cssxref("justify-items")}}
- {{cssxref("align-items")}}
- {{cssxref("place-items")}}

Die `*-items`-Eigenschaften, `align-items` und `justify-items`, werden auf den Grid-Container angewendet und legen die Ausrichtung für alle Grid-Elemente als Gruppe fest. Die `*-self`-Eigenschaften, `align-self` und `justify-self`, werden stattdessen auf Grid-Elemente gesetzt. Dies bedeutet, dass Sie die Ausrichtung auf alle Grid-Elemente setzen und dann alle Elemente überschreiben können, die eine andere Ausrichtung benötigen, indem Sie die Eigenschaften `align-self` oder `justify-self` auf die Regeln für die einzelnen Grid-Elemente anwenden.

Der Anfangswert für `align-items` und `justify-items` ist `stretch`, und der Anfangswert für `align-self` und `justify-self` ist `auto`, sodass das Element sich über den gesamten Grid-Bereich erstreckt. Die Ausnahme von dieser Regel ist, wenn das Element ein intrinsisches {{Glossary("aspect_ratio", "Seitenverhältnis")}} hat, zum Beispiel ein Bild. In diesem Fall wird das Element in beiden Dimensionen auf `start` ausgerichtet, damit das Bild nicht verzerrt wird.

## Inhaltsausrichtung

Diese Eigenschaften befassen sich mit der Ausrichtung der Linien des Grids, wenn zusätzlicher Raum zu verteilen ist:

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("place-content")}}

Dieses Szenario tritt auf, wenn die von Ihnen definierten Linien zusammen weniger als die gesamte Breite des Grid-Containers ausmachen.

## Abstand und veraltete grid-gap-Eigenschaften

Diese Eigenschaften definieren den Abstand zwischen Grid-Elementen innerhalb eines Grid-Containers:

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

Die Grid-Spezifikation enthielt ursprünglich die Definition für die Eigenschaften {{cssxref("row-gap", "grid-row-gap")}}, {{cssxref("column-gap", "grid-column-gap")}} und {{cssxref("gap", "grid-gap")}}. Diese wurden inzwischen in die Box-Ausrichtungsspezifikation verschoben und zu {{cssxref("row-gap")}}, {{cssxref("column-gap")}}, und {{cssxref("gap")}} aliasiert. Dies ermöglicht ihre Verwendung für andere Layout-Methoden, bei denen ein Abstand zwischen Elementen sinnvoll ist.

## Siehe auch

- [Box-Ausrichtungsübersicht](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment)
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung im Mehrspalten-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
- [Box-Ausrichtung für Block-, absolute positionierte und Tabellen-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)

- [Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
