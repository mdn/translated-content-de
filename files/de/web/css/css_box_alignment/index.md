---
title: CSS-Box-Ausrichtung
slug: Web/CSS/CSS_box_alignment
l10n:
  sourceCommit: f3d3298130d8e22fb89ba123a0648ad3cb7b3655
---

{{CSSRef}}

Das **CSS-Box-Ausrichtungsmodul** definiert CSS-Funktionen zur Ausrichtung von Boxen innerhalb ihrer Container. Es legt die Ausrichtung der verschiedenen CSS-Box-Layout-Modelle fest, einschließlich Block-Layout, Tabellen-Layout, Flexbox-Layout und Gitter-Layout (Grid), und schafft so eine konsistente Ausrichtungsmethode für ganz CSS.

Das Modul beschreibt die Ausrichtungsterminologie, wodurch Ausrichtungs-Eigenschaften in mehreren Layout-Modulen verwendet werden können, anstatt auf eine bestimmte Layout-Methode beschränkt zu sein.

Die Ausrichtung ist mit Schreibmodi verbunden. Wenn wir ein Element ausrichten, betrachten wir dabei nicht die physischen Dimensionen von oben, rechts, unten und links. Stattdessen beschreiben wir die Ausrichtung in Bezug auf Anfang und Ende der spezifischen Dimension, mit der wir arbeiten. Dies stellt sicher, dass die Ausrichtung auf dieselbe Weise funktioniert, unabhängig davon, welcher Schreibmodus das Dokument hat.

Die Ausrichtung von Text und Inline-Inhalten wird im [CSS-Textmodul](/de/docs/Web/CSS/CSS_text) und im [CSS-Inline-Modul](/de/docs/Web/CSS/CSS_inline_layout) definiert.

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
- [Baseline-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment#baseline_alignment)
- [Verteilte Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment#distributed_alignment)
- {{Glossary("Fallback_alignment", "Fallback-Ausrichtung")}}
- [Positionale Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment#positional_alignment)

## Leitfäden

- [Übersicht zur Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment)

  - : Überblick über die allgemeinen Konzepte des CSS-Box-Ausrichtungsmoduls.

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)

  - : Wie die Box-Ausrichtung im Kontext von Flexbox funktioniert.

- [Box-Ausrichtung im CSS-Gitter-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)

  - : Wie die Box-Ausrichtung im Kontext des Gitter-Layouts funktioniert.

- [Box-Ausrichtung in Mehrspalten-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)

  - : Wie die Box-Ausrichtung im Kontext des Mehrspalten-Layouts funktioniert.

- [Box-Ausrichtung für Block-, absolut positionierte und Tabellen-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)

  - : Wie die Box-Ausrichtung im Kontext von Block-Layouts funktioniert, einschließlich gefloateter, positionierter und Tabellen-Elemente.

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

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung im Gitter-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS-Display-Modul](/de/docs/Web/CSS/CSS_display)
- [CSS-Flexbox-Layout-Modul](/de/docs/Web/CSS/CSS_flexible_box_layout)
- [CSS-Gitter-Layout-Modul](/de/docs/Web/CSS/CSS_grid_layout)
