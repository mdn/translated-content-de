---
title: Box-Ausrichtung im Mehrspalten-Layout
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout
l10n:
  sourceCommit: 49106bd93693d889ff792dada676bdf62350d422
---

{{CSSRef}}

Das [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment) Modul beschreibt, wie Ausrichtung in verschiedenen Layout-Methoden funktioniert; in diesem Leitfaden erkunden wir, wie die Box-Ausrichtung im Kontext von [Mehrspalten-Layouts](/de/docs/Web/CSS/CSS_multicol_layout) funktioniert. Da dieser Leitfaden darauf abzielt, Aspekte zu erläutern, die spezifisch für beide Module sind, sollte er zusammen mit dem [Box-Ausrichtungsüberblick](/de/docs/Web/CSS/CSS_box_alignment/box_alignment) gelesen werden, der die gemeinsamen Merkmale der Box-Ausrichtung über verschiedene Layout-Methoden hinweg beschreibt.

Im [Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout/Basic_concepts) ist der {{Glossary("alignment_container", "alignment container")}} die Inhaltsbox des Multicol-Containers. Das {{Glossary("alignment_subject", "alignment subject")}} ist die Spaltenbox. Die Eigenschaften, die auf Mehrspalten-Layouts angewendet werden, sind unten aufgeführt.

## align-content und justify-content

Die {{cssxref("align-content")}} Eigenschaft gilt für die Block-Achse und {{cssxref("justify-content")}} für die Inline-Achse. Jeder Abstand, der den Spalten aufgrund der Verwendung der Raumverteilung hinzugefügt wird, wird zur Lücke zwischen den Spalten hinzugefügt, wodurch die Lücke größer wird, als sie möglicherweise durch die {{cssxref("column-gap")}} (oder {{cssxref("gap")}} Kurzform) Eigenschaft spezifiziert wurde.

Die Verwendung eines anderen Wertes als `normal` oder `stretch` bei `justify-content` bewirkt, dass Spaltenboxen in der durch den {{cssxref("column-width")}} auf dem Multicol-Container spezifizierten Breite angezeigt werden und der verbleibende Raum gemäß dem Wert von `justify-content` verteilt wird.

## column-gap

Die {{cssxref("column-gap")}} Eigenschaft wurde ursprünglich in der Mehrspaltenlayout-Spezifikation festgelegt und später mit den Gap-Eigenschaften für andere Layout-Methoden in der Box-Ausrichtung vereinheitlicht. Während andere Layout-Methoden den Anfangswert von `column-gap` als `0` behandeln, behandelt das Mehrspalten-Layout ihn als `1em` — in der Regel möchte man einen Abstand zwischen den Spalten haben.

## Siehe auch

- [Box-Ausrichtungsüberblick](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment)
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung im CSS Grid Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Box-Ausrichtung für Block-, absolut positionierte und Tabellen-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)
