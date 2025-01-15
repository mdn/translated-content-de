---
title: CSS-Box-Ausrichtung
slug: Web/CSS/CSS_box_alignment
l10n:
  sourceCommit: 49106bd93693d889ff792dada676bdf62350d422
---

{{CSSRef}}

Das **CSS-Box-Ausrichtungsmodul** spezifiziert CSS-Funktionen, die sich auf die Ausrichtung von Boxen innerhalb ihrer Container beziehen. Es definiert die Ausrichtung der verschiedenen CSS-Box-Layout-Modelle einschließlich Block-Layout, Tabellen-Layout, flexiblen Box-Layout (Flexbox) und Raster-Layout, um eine konsistente Ausrichtungsmethode in ganz CSS zu schaffen.

Das Modul beschreibt Ausrichtungsterminologie, sodass Ausrichtungseigenschaften in mehreren Layoutmodulen verwendet werden können, anstatt auf eine bestimmte Layoutmethode beschränkt zu sein.

Die Ausrichtung ist mit den Bezugsschreibrichtungen verbunden, da wir beim Ausrichten eines Elements nicht berücksichtigen, ob wir es an den physischen Dimensionen von oben, rechts, unten und links ausrichten. Stattdessen beschreiben wir die Ausrichtung in Bezug auf den Anfang und das Ende der jeweiligen Dimension, mit der wir arbeiten. Dies stellt sicher, dass die Ausrichtung auf dieselbe Weise funktioniert, unabhängig davon, welchen Schreibrichtungsmodus das Dokument verwendet.

Die Ausrichtung von Text und inline-inhaltlichen Inhalten wird im [CSS-Textmodul](/de/docs/Web/CSS/CSS_text) und im [CSS-Inline-Modul](/de/docs/Web/CSS/CSS_inline_layout) definiert.

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
- {{Glossary("Alignment_subject", "Ausrichtungsziel")}}
- [Baseline-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/box_alignment#baseline_alignment)
- [Verteilte Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/box_alignment#distributed_alignment)
- {{Glossary("Fallback_alignment", "Fallback-Ausrichtung")}}
- [Positionale Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/box_alignment#positional_alignment)

## Leitfäden

- [Überblick über die Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment)

  - : Ein Überblick über die allgemeinen Konzepte, die im CSS-Box-Ausrichtungsmodul zu finden sind.

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)

  - : Wie Box-Ausrichtung im Rahmen von Flexbox funktioniert.

- [Box-Ausrichtung im CSS-Raster-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)

  - : Wie Box-Ausrichtung im Rahmen des Raster-Layouts funktioniert.

- [Box-Ausrichtung im Mehrspalten-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)

  - : Wie Box-Ausrichtung im Rahmen des Mehrspalten-Layouts funktioniert.

- [Box-Ausrichtung für Block-, absolut positionierte und Tabellenlayouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)

  - : Wie Box-Ausrichtung im Rahmen des Block-Layouts, einschließlich schwebender, positionierter und Tabellenelemente, funktioniert.

## Verwandte Konzepte

- {{cssxref("alignment-baseline")}}
- {{cssxref("dominant-baseline")}}
- {{cssxref("grid-column-gap")}}
- {{cssxref("grid-gap")}}
- {{cssxref("grid-row-gap")}}
- {{cssxref("scroll-snap-align")}}
- SVG {{SVGAttr("dominant-baseline")}} Attribut
- {{Glossary("Cross_axis", "Querachse")}}
- {{Glossary("Main_axis", "Hauptachse")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung in CSS-Rasterlayouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS-Display](/de/docs/Web/CSS/CSS_display) Modul
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Raster-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
