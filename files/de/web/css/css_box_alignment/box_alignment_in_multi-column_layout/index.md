---
title: Box-Ausrichtung in Mehrspalten-Layout
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout
l10n:
  sourceCommit: 243e5eabfe95971f2850fcfdf2a7b2f210c85532
---

{{CSSRef}}

Das [CSS Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment) beschreibt, wie die Ausrichtung in verschiedenen Layout-Methoden funktioniert; in diesem Leitfaden erkunden wir, wie die Box-Ausrichtung im Kontext von [Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) funktioniert. Da dieser Leitfaden darauf abzielt, Dinge zu erläutern, die für beide Module spezifisch sind, sollte er in Verbindung mit dem [Box-Ausrichtungsüberblick](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment) gelesen werden, der die gemeinsamen Merkmale der Box-Ausrichtung über Layout-Methoden hinweg beschreibt.

Im [Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout/Basic_concepts) ist der {{Glossary("alignment_container", "Ausrichtungs-Container")}} die Inhaltsbox des Mehrspalten-Containers. Das {{Glossary("alignment_subject", "Ausrichtungs-Subjekt")}} ist die Spaltenbox. Die Eigenschaften, die auf Mehrspalten-Layouts zutreffen, werden unten ausführlich beschrieben.

## align-content und justify-content

Die Eigenschaft {{cssxref("align-content")}} gilt für die Blockachse und {{cssxref("justify-content")}} für die Inlineachse. Jeder durch die Verteilung des Raums hinzugefügte Abstand wird zu dem Spaltenabstand hinzugefügt, wodurch der Abstand größer wird als möglicherweise durch die Eigenschaft {{cssxref("column-gap")}} (oder den Kurzschreibweise {{cssxref("gap")}}) angegeben.

Die Verwendung eines anderen Wertes als `justify-content` außer `normal` oder `stretch` führt dazu, dass Spaltenboxen in der auf dem Mehrspalten-Container angegebenen {{cssxref("column-width")}} angezeigt werden, und der verbleibende Raum wird entsprechend dem Wert von `justify-content` verteilt.

## column-gap

Die Eigenschaft {{cssxref("column-gap")}} wurde ursprünglich in der Mehrspalten-Layout-Spezifikation spezifiziert und später mit den Lücken-Eigenschaften anderer Layout-Methoden in der Box-Ausrichtung vereinheitlicht. Während andere Layout-Methoden den Anfangswert von `column-gap` als `0` behandeln, behandelt das Mehrspalten-Layout ihn als `1em` — man möchte in der Regel einen Abstand zwischen den Spalten.

## Siehe auch

- [Box-Ausrichtungsüberblick](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment)
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Box-Ausrichtung für Block-, absolut positioniertes und Tabellen-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)
