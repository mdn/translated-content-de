---
title: CSS Box-Ausrichtung
slug: Web/CSS/CSS_box_alignment
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **CSS-Box-Ausrichtungsmodul** definiert CSS-Funktionen in Bezug auf die Ausrichtung von Boxen innerhalb ihrer Container. Es legt die Ausrichtung der verschiedenen CSS-Box-Layout-Modelle fest, einschließlich Block-Layout, Tabellen-Layout, Flexbox-Layout und Grid-Layout, und schafft eine konsistente Ausrichtungsmethode über alle CSS-Layouts hinweg.

Das Modul beschreibt die Ausrichtungsterminologie und ermöglicht es, Ausrichtungseigenschaften in mehreren Layout-Modulen zu verwenden, anstatt sie auf eine bestimmte Layout-Methode zu beschränken.

Die Ausrichtung ist mit den Schreibrichtungen verbunden, da wir bei der Ausrichtung eines Elements nicht berücksichtigen, ob wir es an den physischen Dimensionen von oben, rechts, unten und links ausrichten. Stattdessen beschreiben wir die Ausrichtung in Bezug auf den Anfang und das Ende der jeweiligen Dimension, mit der wir arbeiten. Dadurch wird sichergestellt, dass die Ausrichtung unabhängig von der Schreibrichtung des Dokuments auf die gleiche Weise funktioniert.

Die Ausrichtung von Text und Inhalte auf Inline-Ebene wird im [CSS Text Modul](/de/docs/Web/CSS/CSS_text) und [CSS Inline Modul](/de/docs/Web/CSS/CSS_inline_layout) definiert.

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

- {{Glossary("Alignment_container", "Ausrichtungscontainer")}}
- {{Glossary("Alignment_subject", "Ausrichtungsobjekt")}}
- [Baseline-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment#baseline_alignment)
- [Verteilte Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment#distributed_alignment)
- {{Glossary("Fallback_alignment", "Reserve-Ausrichtung")}}
- [Positionale Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment#positional_alignment)

## Leitfäden

- [Übersicht über die Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment)
  - : Überblick über die allgemeinen Konzepte des CSS-Box-Ausrichtungsmoduls.

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
  - : Wie die Box-Ausrichtung im Kontext von Flexbox funktioniert.

- [Box-Ausrichtung in CSS Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
  - : Wie die Box-Ausrichtung im Kontext von Grid-Layout funktioniert.

- [Box-Ausrichtung im Mehrspalten-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
  - : Wie die Box-Ausrichtung im Kontext des Mehrspalten-Layouts funktioniert.

- [Box-Ausrichtung für Block-, absolut positionierte und Tabellenelemente](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)
  - : Wie die Box-Ausrichtung im Kontext des Block-Layouts, einschließlich ausgeflossener, positionierter und Tabellenelemente, funktioniert.

## Verwandte Konzepte

- {{cssxref("alignment-baseline")}}
- {{cssxref("dominant-baseline")}}
- {{cssxref("scroll-snap-align")}}
- SVG-Attribut {{SVGAttr("dominant-baseline")}}
- {{Glossary("Cross_axis", "Kreuzachse")}}
- {{Glossary("Main_axis", "Hauptachse")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung in Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS Display](/de/docs/Web/CSS/CSS_display) Modul
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
