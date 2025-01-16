---
title: CSS-Box-Alignment
slug: Web/CSS/CSS_box_alignment
l10n:
  sourceCommit: 243e5eabfe95971f2850fcfdf2a7b2f210c85532
---

{{CSSRef}}

Das **CSS-Box-Alignment**-Modul spezifiziert CSS-Funktionen, die sich auf die Ausrichtung von Boxen innerhalb ihrer Container beziehen. Es definiert die Ausrichtung der verschiedenen CSS-Box-Layout-Modelle einschließlich Block-Layout, Tabellen-Layout, flexibler Box-Layout (Flexbox) und Grid-Layout und schafft eine einheitliche Ausrichtungsmethode für alle CSS-Modelle.

Das Modul beschreibt die Ausrichtungsterminologie und ermöglicht es, Ausrichtungseigenschaften in mehreren Layout-Modulen zu verwenden, anstatt sie auf eine bestimmte Layout-Methode zu beschränken.

Die Ausrichtung ist mit Schreibmodi verknüpft, da wir bei der Ausrichtung eines Elements nicht berücksichtigen, ob wir es in Bezug auf die physischen Dimensionen von oben, rechts, unten und links ausrichten. Stattdessen beschreiben wir die Ausrichtung in Bezug auf den Anfang und das Ende der jeweiligen Dimension, mit der wir arbeiten. Dies stellt sicher, dass die Ausrichtung unabhängig vom Schreibmodus des Dokuments gleich funktioniert.

Die Ausrichtung von Text und inline-level-Inhalten wird im [CSS-Textmodul](/de/docs/Web/CSS/CSS_text) bzw. im [CSS-Inline-Modul](/de/docs/Web/CSS/CSS_inline_layout) definiert.

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

- [Überblick über die Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment)

  - : Überblick über die allgemeinen Konzepte im CSS-Box-Alignment-Modul.

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)

  - : Wie die Box-Ausrichtung im Kontext von Flexbox funktioniert.

- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)

  - : Wie die Box-Ausrichtung im Kontext von Grid-Layout funktioniert.

- [Box-Ausrichtung im Mehrspalten-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)

  - : Wie die Box-Ausrichtung im Kontext von Mehrspalten-Layout funktioniert.

- [Box-Ausrichtung für Block-, absolut positioniertes und Tabellen-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)

  - : Wie die Box-Ausrichtung im Kontext von Block-Layout, einschließlich eingefloßter, positionierter und Tabellenelemente, funktioniert.

## Verwandte Konzepte

- {{cssxref("alignment-baseline")}}
- {{cssxref("dominant-baseline")}}
- {{cssxref("grid-column-gap")}}
- {{cssxref("grid-gap")}}
- {{cssxref("grid-row-gap")}}
- {{cssxref("scroll-snap-align")}}
- SVG {{SVGAttr("dominant-baseline")}} Attribut
- {{Glossary("Cross_axis", "Sekundärachse")}}
- {{Glossary("Main_axis", "Hauptachse")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung in CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS-Display](/de/docs/Web/CSS/CSS_display) Modul
- [CSS-Flexibler Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
