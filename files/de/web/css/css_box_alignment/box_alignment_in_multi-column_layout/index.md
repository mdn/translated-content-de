---
title: Box-Ausrichtung im Mehrspaltenlayout
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment)-Modul beschreibt, wie Ausrichtung in verschiedenen Layoutmethoden funktioniert; in diesem Leitfaden untersuchen wir, wie Box-Ausrichtung im Kontext des [Mehrspaltenlayouts](/de/docs/Web/CSS/CSS_multicol_layout) funktioniert. Da dieser Leitfaden darauf abzielt, Dinge zu detaillieren, die spezifisch für beide Module sind, sollte er in Verbindung mit dem [Box Alignment Überblick](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment) Leitfaden gelesen werden, der die gemeinsamen Merkmale der Box-Ausrichtung über verschiedene Layoutmethoden hinweg beschreibt.

Im [Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout/Basic_concepts) ist der {{Glossary("alignment_container", "Ausrichtungscontainer")}} die Inhaltsbox des Mehrspalten-Containers. Das {{Glossary("alignment_subject", "Ausrichtungsobjekt")}} ist die Spaltenbox. Die auf Mehrspaltenlayouts anzuwendenden Eigenschaften sind unten beschrieben.

## align-content und justify-content

Die {{cssxref("align-content")}}-Eigenschaft gilt für die Blockachse und {{cssxref("justify-content")}} für die Inline-Achse. Jeder Freiraum, der durch die Verwendung der Raumverteilung zu den Spalten hinzugefügt wird, wird zum Abstand zwischen den Spalten hinzugefügt, wodurch der Abstand größer wird als möglicherweise durch die {{cssxref("column-gap")}} (oder {{cssxref("gap")}} Kurzform) Eigenschaft festgelegt.

Die Verwendung eines Wertes von `justify-content`, der nicht `normal` oder `stretch` ist, führt dazu, dass die Spaltenboxen mit der im Mehrspalten-Container angegebenen {{cssxref("column-width")}} angezeigt werden und der verbleibende Raum entsprechend dem `justify-content`-Wert verteilt wird.

## column-gap

Die {{cssxref("column-gap")}}-Eigenschaft wurde ursprünglich in der Mehrspaltenlayout-Spezifikation festgelegt und später mit den Lückeneigenschaften für andere Layoutmethoden in der Box-Ausrichtung vereinheitlicht. Während andere Layoutmethoden den Anfangswert von `column-gap` als `0` behandeln, behandelt das Mehrspaltenlayout ihn als `1em` — Sie möchten im Allgemeinen einen Abstand zwischen den Spalten haben.

## Siehe auch

- [Box Alignment Überblick](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment)
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung im CSS Grid Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Box-Ausrichtung für Block-, absolut positioniertes und Tabellen-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)
