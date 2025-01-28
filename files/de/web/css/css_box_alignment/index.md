---
title: CSS-Box-Ausrichtung
slug: Web/CSS/CSS_box_alignment
l10n:
  sourceCommit: 5c9a8d58490aa2a1934009023a38e6113f5e1a5b
---

{{CSSRef}}

Das **CSS-Box-Ausrichtungsmodul** spezifiziert CSS-Funktionen in Bezug auf die Ausrichtung von Boxen innerhalb ihrer Container. Es definiert die Ausrichtung der verschiedenen CSS-Box-Layout-Modelle, einschließlich Blocklayout, Tabellenlayout, flexibles Box-Layout (Flexbox) und Rasterlayout, und schafft eine konsistente Ausrichtungsmethode in ganz CSS.

Das Modul beschreibt Ausrichtungsbegriffe, sodass Ausrichtungseigenschaften in mehreren Layoutmodulen verwendet werden können, anstatt auf eine bestimmte Layoutmethode beschränkt zu sein.

Die Ausrichtung ist mit den Schreibrichtungen verbunden, insofern, dass wir bei der Ausrichtung eines Elements nicht berücksichtigen, ob wir es an den physischen Dimensionen von oben, rechts, unten und links ausrichten. Stattdessen beschreiben wir die Ausrichtung in Bezug auf den Anfang und das Ende der jeweiligen Dimension, mit der wir arbeiten. Dies stellt sicher, dass die Ausrichtung auf die gleiche Weise funktioniert, unabhängig davon, welche Schreibrichtung das Dokument hat.

Die Ausrichtung von Text und Inline-Inhalten wird im [CSS-Textmodul](/de/docs/Web/CSS/CSS_text) und im [CSS-Inlinemodul](/de/docs/Web/CSS/CSS_inline_layout) definiert.

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
- [Basislinienausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment#baseline_alignment)
- [Verteilte Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment#distributed_alignment)
- {{Glossary("Fallback_alignment", "Fallback-Ausrichtung")}}
- [Positionale Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment#positional_alignment)

## Leitfäden

- [Überblick über die Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment)

  - : Überblick über die allgemeinen Konzepte im CSS-Box-Ausrichtungsmodul.

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)

  - : Wie die Box-Ausrichtung im Kontext von Flexbox funktioniert.

- [Box-Ausrichtung im CSS-Rasterlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)

  - : Wie die Box-Ausrichtung im Kontext des Rasterlayouts funktioniert.

- [Box-Ausrichtung im Mehrspaltenlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)

  - : Wie die Box-Ausrichtung im Kontext des Mehrspaltenlayouts funktioniert.

- [Box-Ausrichtung für Block-, absolut positionierte und Tabellenlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)

  - : Wie die Box-Ausrichtung im Kontext des Blocklayouts, einschließlich schwebender, positionierter und Tabellenelemente, funktioniert.

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
- [Box-Ausrichtung in CSS-Rasterlayouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS-Display](/de/docs/Web/CSS/CSS_display) Modul
- [Flexibles Boxlayout in CSS](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout) Modul
