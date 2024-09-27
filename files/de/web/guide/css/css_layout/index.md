---
title: CSS-Layout
slug: Web/Guide/CSS/CSS_Layout
l10n:
  sourceCommit: 0d8e5e932d471180075f041b73c03289abdf6b3c
---

Es gibt eine Reihe von Methoden, die Sie verwenden können, um Ihre Webseiten und Anwendungen zu layouten. MDN enthält eine Vielzahl von ausführlichen Leitfäden zu den verschiedenen Methoden, und diese Seite bietet einen Überblick über alle.

## Normaler Fluss, Block- und Inline-Layout

Wenn Sie kein Flex- oder Raster-Layout verwenden, wird Ihr Inhalt mit normalem Fluss oder Block- und Inline-Layout angeordnet. Diese Leitfäden helfen Ihnen dabei zu verstehen, wie diese Layoutmethode funktioniert.

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
  - : Eine Einführung in den normalen Fluss.
- [Im Fluss und außerhalb des Flusses](/de/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow)
  - : Wie man ein Element aus dem Fluss nimmt und was das für das Layout Ihres Dokuments bedeutet.
- [Formatierungskontexte erklärt](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
  - : Eine Einführung in das Erstellen eines neuen Formatierungskontextes.
- [Fluss-Layout und Schreibrichtungen](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes)
  - : Wie Fluss-Layout funktioniert, wenn Sie eine andere Schreibrichtung verwenden, wie z.B. vertikalen Text.
- [Fluss-Layout und Überlauf](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_overflow)
  - : Verständnis und Verwaltung von Überläufen.
- [Einführung in das grundlegende CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - : Das Verständnis des Boxmodells ist ein grundlegendes CSS-Prinzip; dieser Leitfaden erklärt, wie es funktioniert.
- [Beherrschung der Randkollapsierung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - : Finden Sie heraus, warum Sie manchmal weniger Rand als erwartet haben, aufgrund der Randkollapsierung im normalen Fluss.
- [CSS z-index verstehen](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
  - : Absolute Positionierung, Flexbox und Grid führen dazu, dass der Stapel (relative Position der Elemente auf der z-Achse) über die `z-index`-Eigenschaft manipulierbar wird. Dieser Artikel erklärt, wie man sie verwaltet.

## Mehrspaltiges Layout

Mehrspaltiges Layout, oft als Multicol bezeichnet, nimmt Inhalt im normalen Fluss und teilt ihn in Spalten auf. Erfahren Sie, wie Sie diese Layoutmethode in den folgenden Leitfäden verwenden können.

- [Grundlegende Konzepte von Multicol](/de/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
  - : Ein Überblick über die Grundfunktionen von Multicol.
- [Styling von Spalten](/de/docs/Web/CSS/CSS_multicol_layout/Styling_columns)
  - : Es gibt nur begrenzte Styling-Möglichkeiten für Spalten; dieser Leitfaden erklärt, was Sie tun können.
- [Übergreifen und Ausbalancieren](/de/docs/Web/CSS/CSS_multicol_layout/Spanning_balancing_columns)
  - : Elemente über Spalten hinweg erstrecken und den Inhalt der Spalten ausbalancieren.
- [Überlauf in Multicol handhaben](/de/docs/Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout)
  - : Was passiert, wenn mehr Inhalt vorhanden ist, als Spaltenplatz verfügbar ist?
- [Inhaltsbrüche in Multicol](/de/docs/Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout)
  - : Umgang mit Inhaltsbrüchen, wenn der Inhalt in Spalten aufgeteilt wird.

## Flexbox

CSS Flexible Box Layout, allgemein als Flexbox bekannt, ist ein Layoutmodell, das für das Design von Benutzeroberflächen und das Layout von Elementen in einer Dimension optimiert ist. Im Flex-Layout-Modell können die Kinder eines Flex-Containers in jede Richtung angeordnet werden und ihre Größen "flexen", entweder um nicht genutzten Platz zu füllen oder um ein Überlaufen des Elternteils zu vermeiden.

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
  - : Ein Überblick über die Funktionen von Flexbox.
- [Beziehung von Flexbox zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
  - : Wie Flexbox sich zu anderen Layoutmethoden und anderen CSS-Spezifikationen verhält.
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
  - : Wie die Box-Ausrichtungseigenschaften in Flexbox arbeiten.
- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
  - : Erklärt die verschiedenen Möglichkeiten, die Reihenfolge und Richtung von Elementen zu ändern, und behandelt potentielle Probleme dabei.
- [Kontrolle der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
  - : Erklärt die Eigenschaften `flex-grow`, `flex-shrink` und `flex-basis`.
- [Beherrschung des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
  - : Wie man Flex-Container mit mehreren Linien erstellt und die Anzeige der Elemente entlang dieser Linien steuert.
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)
  - : Allgemeine Designmuster, die typische Flexbox-Anwendungsfälle darstellen.

## Raster-Layout

CSS Grid Layout führt ein zweidimensionales Rastersystem in CSS ein. Raster können verwendet werden, um Hauptbereiche der Seite oder kleine Benutzeroberflächenelemente zu layouten.

- [Grundlegende Konzepte des Raster-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
  - : Ein Überblick über die Funktionen des Raster-Layouts.
- [Beziehung des Raster-Layouts zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
  - : Wie sich Raster auf andere Methoden wie Ausrichtung, Größenzuordnung und Flexbox bezieht.
- [Layout mit zeilenbasierter Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
  - : Wie man Elemente anhand nummerierter Linien platziert.
- [Rastervorlagenbereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
  - : Wie man Elemente mithilfe der `grid-template`-Syntax platziert.
- [Layout mit benannten Rasterlinien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
  - : Wie man Linien benennt und Elemente anhand des Liniennamens anstatt der Nummer platziert.
- [Automatische Platzierung im CSS Raster-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
  - : Wie man den automatischen Platzierungsalgorithmus verwaltet und versteht, wie der Browser Elemente platziert.
- [Box-Ausrichtung im CSS Raster-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
  - : Wie man Elemente ausrichtet und Platz auf beiden Achsen im Raster verteilt.
- [CSS Raster, logische Werte und Schreibrichtungen](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
  - : Wie man flussrelative statt physikalischer Eigenschaften und Werte im Raster verwendet.
- [CSS Raster-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
  - : Einige Überlegungen zur Barrierefreiheit bei der Arbeit mit Raster-Layouts.
- [CSS Raster und progressive Verbesserung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_progressive_enhancement)
  - : Wie man sicherstellt, dass Ihre Seite in Browsern, die Raster nicht unterstützen, weiterhin gut funktioniert.
- [Realisierung gängiger Layouts mit CSS Raster](/de/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)
  - : Verwendung von Rastern, um einige gängige Layouts zu erstellen.
- [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
  - : Eine Erklärung des Subgrid-Werts, Teil von Grid Level 2.
- [Masonry Layout](/de/docs/Web/CSS/CSS_grid_layout/Masonry_layout)
  - : Eine Erklärung der Masonry-Layout-Funktion in Grid Level 3.

## Ausrichtung

- [Box-Ausrichtung im Block-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)
  - : Die Ausrichtungseigenschaften sind für Block- und Inline-Layout spezifiziert, obwohl es noch keine Browserunterstützung gibt.
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
  - : Die Ausrichtungseigenschaften erschienen zuerst bei Flexbox; dieser Leitfaden erklärt, wie sie funktionieren.
- [Box-Ausrichtung im Raster-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
  - : Wie man Elemente im Raster-Layout ausrichtet.
- [Box-Ausrichtung im mehrspaltigen Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
  - : Wie die Ausrichtung im Multicol funktionieren wird.
