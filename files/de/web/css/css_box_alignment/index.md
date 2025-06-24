---
title: CSS Box-Ausrichtung
slug: Web/CSS/CSS_box_alignment
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Das **CSS Box-Ausrichtungsmodul** spezifiziert CSS-Funktionen, die sich auf die Ausrichtung von Boxen innerhalb ihrer Container beziehen. Es definiert die Ausrichtung der verschiedenen CSS-Box-Layout-Modelle, einschließlich Block-Layout, Tabellen-Layout, flexiblen Box-Layout (Flexbox) und Gitter-Layout, und schafft eine konsistente Ausrichtungsmethode in der gesamten CSS.

Das Modul erläutert die Ausrichtungs-Terminologie und ermöglicht es, Ausrichtungseigenschaften in mehreren Layoutmodulen zu verwenden, anstatt auf eine bestimmte Layoutmethode beschränkt zu sein.

Die Ausrichtung ist mit Schreibrichtungen verknüpft, da wir bei der Ausrichtung eines Elements nicht bedenken, ob wir es an den physischen Dimensionen von oben, rechts, unten und links ausrichten. Stattdessen beschreiben wir die Ausrichtung in Bezug auf den Anfang und das Ende der besonderen Dimension, mit der wir arbeiten. Auf diese Weise funktioniert die Ausrichtung auf die gleiche Weise, unabhängig davon, welches Schreibrichtung der Dokument hat.

Die Ausrichtung von Text und inline-Inhalt wird im [CSS Textmodul](/de/docs/Web/CSS/CSS_text) und im [CSS Inline-Modul](/de/docs/Web/CSS/CSS_inline_layout) definiert.

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
- [Basislinienausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment#baseline_alignment)
- [Verteilte Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment#distributed_alignment)
- {{Glossary("Fallback_alignment", "Fallback-Ausrichtung")}}
- [Positionale Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment#positional_alignment)

## Leitfäden

- [Überblick über die Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment)

  - : Überblick über die allgemeinen Konzepte, die im CSS Box-Ausrichtungsmodul zu finden sind.

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)

  - : Wie die Box-Ausrichtung im Kontext von Flexbox funktioniert.

- [Box-Ausrichtung im CSS Grid Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)

  - : Wie die Box-Ausrichtung im Kontext von Gitter-Layout funktioniert.

- [Box-Ausrichtung im Mehrspalten-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)

  - : Wie die Box-Ausrichtung im Kontext von Mehrspalten-Layout funktioniert.

- [Box-Ausrichtung für Block-, absolut positionierte und Tabellen-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)
  - : Wie die Box-Ausrichtung im Kontext von Block-Layout funktioniert, einschließlich schwebender, positionierter und Tabellenelemente.

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

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS Display](/de/docs/Web/CSS/CSS_display) Modul
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
