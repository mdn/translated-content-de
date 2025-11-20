---
title: Box-Alignment im Mehrspalten-Layout
short-title: Im Mehrspalten-Layout
slug: Web/CSS/Guides/Box_alignment/In_multi-column_layout
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

Das [CSS-Box-Alignment](/de/docs/Web/CSS/Guides/Box_alignment)-Modul beschreibt, wie Ausrichtung in verschiedenen Layout-Methoden funktioniert; in diesem Leitfaden erkunden wir, wie Box-Alignment im Kontext des [Mehrspalten-Layouts](/de/docs/Web/CSS/Guides/Multicol_layout) funktioniert. Da dieser Leitfaden darauf abzielt, Dinge zu detaillieren, die für beide Module spezifisch sind, sollte er in Verbindung mit dem [Box-Alignment-Überblick](/de/docs/Web/CSS/Guides/Box_alignment/Overview)-Leitfaden gelesen werden, der die gemeinsamen Merkmale der Box-Ausrichtung über Layout-Methoden hinweg beschreibt.

Im [Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout/Basic_concepts) ist der {{Glossary("alignment_container", "Ausrichtungscontainer")}} die Inhaltsbox des Mehrspalten-Containers. Das {{Glossary("alignment_subject", "Ausrichtungsobjekt")}} ist die Spalten-Box. Die Eigenschaften, die auf Mehrspalten-Layouts angewendet werden, sind im Folgenden detailliert beschrieben.

## align-content und justify-content

Die {{cssxref("align-content")}}-Eigenschaft gilt für die Block-Achse und {{cssxref("justify-content")}} für die Inline-Achse. Jeglicher Platz, der den Spalten durch die Verwendung der Raumverteilung hinzugefügt wird, wird zur Lücke zwischen den Spalten hinzugefügt, wodurch die Lücke größer wird, als es durch die {{cssxref("column-gap")}}- (oder {{cssxref("gap")}}-Kurzschreibweise) Eigenschaft angegeben sein könnte.

Die Verwendung eines Wertes von `justify-content` abgesehen von `normal` oder `stretch` führt dazu, dass Spalten-Boxen mit der im Mehrspalten-Container angegebenen {{cssxref("column-width")}} angezeigt werden, und der verbleibende Raum wird entsprechend dem Wert von `justify-content` verteilt.

## column-gap

Die {{cssxref("column-gap")}}-Eigenschaft wurde ursprünglich in der Spezifikation für das Mehrspalten-Layout festgelegt und später mit den Lücken-Eigenschaften für andere Layout-Methoden im Box-Alignment vereinheitlicht. Während andere Layout-Methoden den Anfangswert von `column-gap` als `0` behandeln, behandelt das Mehrspalten-Layout ihn als `1em` — in der Regel möchte man eine Lücke zwischen den Spalten.

## Siehe auch

- [CSS-Box-Alignment](/de/docs/Web/CSS/Guides/Box_alignment)-Modul
- [Box-Alignment-Überblick](/de/docs/Web/CSS/Guides/Box_alignment/Overview)
- [Box-Alignment in Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [Box-Alignment im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [Box-Alignment für block-, absolut positionierte und Tabellen-Layouts](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)
