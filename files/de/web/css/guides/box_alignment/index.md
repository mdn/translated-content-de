---
title: CSS-Box-Ausrichtung
short-title: Box alignment
slug: Web/CSS/Guides/Box_alignment
l10n:
  sourceCommit: 53745a2089268ce62bf79695d7d347bcbd0abe57
---

Das **CSS-Box-Ausrichtungsmodul** spezifiziert CSS-Eigenschaften zur Ausrichtung von Boxen innerhalb ihrer Container. Es definiert die Ausrichtung der verschiedenen CSS-Box-Layout-Modelle, einschließlich Block-Layout, Tabellen-Layout, flexibles Box-Layout (Flexbox) und Raster-Layout, und schafft eine konsistente Ausrichtungsmethode über alle CSS-Methoden hinweg.

Das Modul beschreibt Ausrichtungsbegriffe und ermöglicht die Verwendung von Ausrichtungseigenschaften in mehreren Layout-Modulen, anstatt sie auf eine bestimmte Layout-Methode zu beschränken.

Die Ausrichtung ist mit Schreibrichtungen verknüpft, da wir bei der Ausrichtung eines Elements nicht darauf achten, ob wir es an den physischen Dimensionen oben, rechts, unten und links ausrichten. Stattdessen beschreiben wir die Ausrichtung in Bezug auf den Anfang und das Ende der jeweiligen Dimension, mit der wir arbeiten. Dies stellt sicher, dass die Ausrichtung unabhängig von der Schreibrichtung des Dokuments auf die gleiche Weise funktioniert.

Die Ausrichtung von Text und Inhalten auf Inline-Ebene ist im [CSS Textmodule](/de/docs/Web/CSS/Guides/Text) und im [CSS Inline-Modul](/de/docs/Web/CSS/Guides/Inline_layout) definiert.

## Referenz

### CSS-Eigenschaften

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("justify-content")}}
- {{cssxref("justify-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}
- {{cssxref("place-self")}}

### Datentypen

- {{cssxref("baseline-position")}}
- {{cssxref("content-distribution")}}
- {{cssxref("content-position")}}
- {{cssxref("overflow-position")}}
- {{cssxref("self-position")}}

### Begriffe und Definitionen

- {{Glossary("Alignment_container", "Ausrichtungscontainer")}}
- {{Glossary("Alignment_subject", "Ausrichtungsobjekt")}}
- [Grundlinienausrichtung](/de/docs/Web/CSS/Guides/Box_alignment/Overview#baseline_alignment)
- [Verteilte Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment/Overview#distributed_alignment)
- {{Glossary("Fallback_alignment", "Ersatz-Ausrichtung")}}
- [Positionsausrichtung](/de/docs/Web/CSS/Guides/Box_alignment/Overview#positional_alignment)

## Leitfäden

- [Übersicht der Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment/Overview)
  - : Übersicht über die allgemeinen Konzepte im CSS-Box-Ausrichtungsmodul.

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
  - : Wie die Box-Ausrichtung im Kontext von Flexbox funktioniert.

- [Box-Ausrichtung im CSS-Raster-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
  - : Wie die Box-Ausrichtung im Kontext des Raster-Layouts funktioniert.

- [Box-Ausrichtung im Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout)
  - : Wie die Box-Ausrichtung im Kontext des Mehrspalten-Layouts funktioniert.

- [Box-Ausrichtung für Block-, absolut positioniertes und Tabellen-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)
  - : Wie die Box-Ausrichtung im Kontext von Block-Layout, einschließlich gefloateter, positionierter und Tabellenelemente, funktioniert.

## Verwandte Konzepte

- {{cssxref("alignment-baseline")}}
- {{cssxref("dominant-baseline")}}
- {{cssxref("scroll-snap-align")}}
- SVG-{{SVGAttr("dominant-baseline")}}-Attribut
- {{Glossary("Cross_axis", "Sekundärachse")}}
- {{Glossary("Main_axis", "Hauptachse")}}

[CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps) Modul

- {{cssxref("column-gap")}}
- {{cssxref("gap")}}
- {{cssxref("row-gap")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Grundkonzepte der Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Box-Ausrichtung im Raster-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [CSS-Display](/de/docs/Web/CSS/Guides/Display) Modul
- [CSS flexibles Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS-Raster-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
