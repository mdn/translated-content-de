---
title: CSS-Box-Ausrichtung
short-title: Box alignment
slug: Web/CSS/Guides/Box_alignment
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS-Box-Ausrichtung**-Modul spezifiziert CSS-Funktionen in Bezug auf die Ausrichtung von Boxen innerhalb ihrer Container. Es definiert die Ausrichtung der verschiedenen CSS-Box-Layout-Modelle einschließlich Block-Layout, Tabellen-Layout, flexiblen Box-Layouts (Flexbox) und Grid-Layouts und schafft eine konsistente Ausrichtungsmethode über alle CSS-Modelle hinweg.

Das Modul beschreibt die Ausrichtungs-Terminologie und ermöglicht es, Ausrichtungen in mehreren Layout-Modulen zu verwenden, anstatt auf eine bestimmte Layout-Methode beschränkt zu sein.

Die Ausrichtung ist mit Schreibmodi verknüpft, denn wenn wir ein Element ausrichten, berücksichtigen wir nicht, ob wir es an den physischen Dimensionen von oben, rechts, unten und links ausrichten. Stattdessen beschreiben wir die Ausrichtung in Bezug auf Anfang und Ende der spezifischen Dimension, mit der wir arbeiten. Dies stellt sicher, dass die Ausrichtung auf die gleiche Weise funktioniert, unabhängig davon, welcher Schreibmodus das Dokument hat.

Die Ausrichtung von Text und Inline-Inhalten wird im [CSS-Textmodul](/de/docs/Web/CSS/Guides/Text) und im [CSS-Inlinemodul](/de/docs/Web/CSS/Guides/Inline_layout) definiert.

## Referenz

### CSS-Eigenschaften

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}
- {{cssxref("justify-content")}}
- {{cssxref("justify-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}
- {{cssxref("place-self")}}
- {{cssxref("row-gap")}}

### Datentypen

- {{cssxref("baseline-position")}}
- {{cssxref("content-distribution")}}
- {{cssxref("content-position")}}
- {{cssxref("overflow-position")}}
- {{cssxref("self-position")}}

### Begriffe und Definitionen

- {{Glossary("Alignment_container", "Ausrichtungs-Container")}}
- {{Glossary("Alignment_subject", "Ausrichtungs-Subjekt")}}
- [Grundlinienausrichtung](/de/docs/Web/CSS/Guides/Box_alignment/Overview#baseline_alignment)
- [Verteilte Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment/Overview#distributed_alignment)
- {{Glossary("Fallback_alignment", "Fallback-Ausrichtung")}}
- [Positionelle Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment/Overview#positional_alignment)

## Leitfäden

- [Übersicht zur Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment/Overview)
  - : Übersicht über die allgemeinen Konzepte des CSS-Box-Ausrichtungs-Moduls.

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
  - : Wie die Box-Ausrichtung im Kontext von Flexbox funktioniert.

- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
  - : Wie die Box-Ausrichtung im Kontext von Grid-Layout funktioniert.

- [Box-Ausrichtung im Multi-Column-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout)
  - : Wie die Box-Ausrichtung im Kontext von Multi-Column-Layout funktioniert.

- [Box-Ausrichtung für Block-, absolut positionierte und Tabellen-Layouts](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)
  - : Wie die Box-Ausrichtung im Kontext von Block-Layout, inklusive floatierten, positionierten und Tabellenelementen, funktioniert.

## Verwandte Konzepte

- {{cssxref("alignment-baseline")}}
- {{cssxref("dominant-baseline")}}
- {{cssxref("scroll-snap-align")}}
- SVG {{SVGAttr("dominant-baseline")}} Attribut
- {{Glossary("Cross_axis", "Querachse")}}
- {{Glossary("Main_axis", "Hauptachse")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [CSS-Display](/de/docs/Web/CSS/Guides/Display)-Modul
- [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout)-Modul
- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout)-Modul
