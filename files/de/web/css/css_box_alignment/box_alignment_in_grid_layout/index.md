---
title: Box-Ausrichtung im Grid-Layout
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout
l10n:
  sourceCommit: 243e5eabfe95971f2850fcfdf2a7b2f210c85532
---

{{CSSRef}}

Das [CSS Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment) beschreibt, wie die Ausrichtung in verschiedenen Layout-Methoden funktioniert. Auf dieser Seite wird erklärt, wie die Box-Ausrichtung im Kontext des [CSS Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout) funktioniert.

Da dieser Leitfaden speziell auf CSS Grid-Layout und Box-Ausrichtung eingeht, sollte er zusammen mit dem [Box-Ausrichtungs-Leitfaden](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment) gelesen werden, der die gemeinsamen Merkmale der Box-Ausrichtung über verschiedene Layout-Methoden erklärt.

## Einfaches Beispiel

In diesem Beispiel mit [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) gibt es zusätzlichen Platz im {{Glossary("grid_container", "Grid-Container")}}, nachdem die fixierten Breiten-Tracks entlang der Inline-{{Glossary("main_axis", "Hauptachse")}} angeordnet wurden. Dieser Platz wird mithilfe von {{cssxref("justify-content")}} verteilt. Auf der Block-{{Glossary("cross_axis", "Querachse")}} wird die Ausrichtung der Elemente innerhalb ihrer Grid-Bereiche mit {{cssxref("align-items")}} gesteuert. Das erste Element überschreibt den Wert von `align-items`, der für die Gruppe festgelegt wurde, indem {{cssxref("align-self")}} auf `center` gesetzt wird.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/grid-align-items.html", '100%', 500)}}

## Grid-Achsen

Als zweidimensionale Layout-Methode haben wir beim Arbeiten mit Grid-Layout immer zwei Achsen, entlang derer wir unsere Elemente ausrichten können. Wir haben Zugriff auf alle Box-Ausrichtungs-Properties, um dies zu erreichen.

Die Inline-Achse entspricht der Richtung, in der Wörter in einem Satz im verwendeten Schreibmodus laufen würden. In einer horizontalen Sprache wie Englisch oder Arabisch verläuft die Inline-Richtung horizontal. Sollten Sie sich in einem vertikalen Schreibmodus befinden, verläuft die Inline-Achse vertikal.

![Inline-Achsen sind horizontal.](inline_axis.png)

Um Elemente auf der Inline-Achse auszurichten, verwenden Sie die Properties, die mit `justify-` beginnen: {{cssxref("justify-content")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}}.

Die Block-Achse kreuzt die Inline-Achse in der Richtung, in der Blöcke dargestellt werden – beispielsweise werden Absätze im Englischen vertikal untereinander angezeigt. Dies ist die Block-Dimension.

Um Elemente auf der Block-Achse auszurichten, verwenden Sie die Properties, die mit `align-` beginnen: {{cssxref("align-content")}}, {{cssxref("align-items")}} und {{cssxref("align-self")}}.

![Die Block-Achsen sind vertikal.](block_axis.png)

## Eigen-Ausrichtung

Diese Eigenschaften beschäftigen sich mit der Ausrichtung des Elements innerhalb des Grid-Bereichs, in den es platziert wird:

- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}
- {{cssxref("place-self")}}
- {{cssxref("justify-items")}}
- {{cssxref("align-items")}}
- {{cssxref("place-items")}}

Die `*-items`-Eigenschaften, `align-items` und `justify-items`, werden auf den Grid-Container angewendet und legen die Ausrichtung aller Grid-Elemente als Gruppe fest. Die `*-self`-Eigenschaften, `align-self` und `justify-self`, werden stattdessen auf Grid-Elemente gesetzt. Das bedeutet, dass Sie die Ausrichtung auf alle Grid-Elemente festlegen und dann alle Elemente, die eine andere Ausrichtung benötigen, überschreiben können, indem Sie die Eigenschaft `align-self` oder `justify-self` auf die Regeln für die einzelnen Grid-Elemente anwenden.

Der Anfangswert für `align-items` und `justify-items` ist `stretch`, und der Anfangswert für `align-self` und `justify-self` ist `auto`, sodass das Element den gesamten Grid-Bereich einnimmt. Die Ausnahme von dieser Regel ist, wenn das Element ein intrinsisches {{Glossary("aspect_ratio", "Seitenverhältnis")}} hat, zum Beispiel ein Bild. In diesem Fall wird das Element in beiden Dimensionen auf `start` ausgerichtet, um zu verhindern, dass das Bild verzerrt wird.

## Inhaltsausrichtung

Diese Eigenschaften kontrollieren die Ausrichtung der Tracks des Grids, wenn zusätzlicher Platz zum Verteilen vorhanden ist:

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("place-content")}}

Dieses Szenario tritt ein, wenn die von Ihnen definierten Tracks insgesamt geringer sind als die gesamte Breite des Grid-Containers.

## Abstand und veraltete grid-gap Eigenschaften

Diese Eigenschaften definieren den Abstand zwischen Grid-Elementen innerhalb eines Grid-Containers:

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

Die Grid-Spezifikation enthielt ursprünglich die Definition für die Eigenschaften {{cssxref("row-gap", "grid-row-gap")}}, {{cssxref("column-gap", "grid-column-gap")}} und {{cssxref("gap", "grid-gap")}}. Diese wurden inzwischen in die Box-Ausrichtungs-Spezifikation verschoben und auf {{cssxref("row-gap")}}, {{cssxref("column-gap")}} und {{cssxref("gap")}} aliasiert. Dies erlaubt ihre Verwendung für andere Layout-Methoden, bei denen ein Abstand zwischen den Elementen sinnvoll ist.

## Siehe auch

- [Box-Ausrichtungs-Übersicht](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment)
- [Box-Ausrichtung im Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung im Mehrspalten-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
- [Box-Ausrichtung für Block-, absolut positionierte und Tabellen-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)

- [Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
