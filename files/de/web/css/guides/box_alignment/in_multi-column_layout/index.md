---
title: Box-Ausrichtung im Mehrspalten-Layout
short-title: Im Mehrspalten-Layout
slug: Web/CSS/Guides/Box_alignment/In_multi-column_layout
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/Guides/Box_alignment) beschreibt, wie die Ausrichtung in verschiedenen Layout-Methoden funktioniert; in diesem Leitfaden untersuchen wir, wie die Box-Ausrichtung im Kontext des [Mehrspalten-Layouts](/de/docs/Web/CSS/Guides/Multicol_layout) funktioniert. Da dieser Leitfaden darauf abzielt, spezifische Dinge für beide Module zu detaillieren, sollte er in Verbindung mit dem [Übersicht der Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment/Overview)-Leitfaden gelesen werden, der die gemeinsamen Merkmale der Box-Ausrichtung über Layout-Methoden hinweg beschreibt.

Im [Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout/Basic_concepts) ist der {{Glossary("alignment_container", "Ausrichtungs-Container")}} das Inhaltsfeld des Multicol-Containers. Das {{Glossary("alignment_subject", "Ausrichtungs-Subjekt")}} ist das Spaltenfeld. Die Eigenschaften, die für Mehrspalten-Layouts gelten, sind unten beschrieben.

## align-content und justify-content

Die {{cssxref("align-content")}}-Eigenschaft gilt für die Block-Achse und {{cssxref("justify-content")}} für die Inline-Achse. Jeglicher Abstand, der den Spalten aufgrund der Verwendung der Raumverteilung hinzugefügt wird, wird zur Lücke zwischen den Spalten hinzugefügt, wodurch die Lücke größer wird als vielleicht durch die Eigenschaft {{cssxref("column-gap")}} (oder {{cssxref("gap")}}-Kurzform) angegeben.

Die Verwendung eines anderen Wertes von `justify-content` als `normal` oder `stretch` führt dazu, dass Spaltenblöcke bei der auf dem Multicol-Container angegebenen {{cssxref("column-width")}} angezeigt werden, und der verbleibende Raum entsprechend dem Wert von `justify-content` verteilt wird.

## column-gap

Die {{cssxref("column-gap")}}-Eigenschaft wurde ursprünglich in der Mehrspalten-Layout-Spezifikation festgelegt und dann später mit den Gap-Eigenschaften für andere Layout-Methoden in der Box-Ausrichtung vereinheitlicht. Während andere Layout-Methoden den Anfangswert von `column-gap` als `0` betrachten, behandelt das Mehrspalten-Layout ihn als `1em` — Sie möchten im Allgemeinen eine Lücke zwischen den Spalten.

## Siehe auch

- [Übersicht der Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment/Overview)
- [Box-Ausrichtung im Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [Box-Ausrichtung im CSS Grid Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [Box-Ausrichtung für Block, absolut positionierte und Tabellenlayouts](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)
