---
title: CSS Layout
slug: Web/Guide/CSS/CSS_Layout
l10n:
  sourceCommit: 0d8e5e932d471180075f041b73c03289abdf6b3c
---

Es gibt eine Reihe von Methoden, die Sie verwenden können, um Ihre Webseiten und Anwendungen zu gestalten. MDN enthält mehrere detaillierte Leitfäden zu den verschiedenen Methoden, und diese Seite bietet einen Überblick über alle.

## Normaler Fluss, Block- und Inline-Layout

Wenn Sie kein Flex- oder Grid-Layout verwenden, wird Ihr Inhalt im normalen Fluss oder Block- und Inline-Layout angeordnet. Diese Leitfäden helfen Ihnen zu verstehen, wie diese Layoutmethode funktioniert.

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
  - : Eine Einführung in den normalen Fluss.
- [Im Fluss und aus dem Fluss](/de/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow)
  - : Wie man ein Element aus dem Fluss nimmt und was das für das Layout Ihres Dokuments bedeutet.
- [Formatierungskontexte erklärt](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
  - : Eine Einführung in die Erstellung eines neuen Formatierungskontextes.
- [Flusslayout und Schreibmodi](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes)
  - : Wie das Flusslayout funktioniert, wenn Sie einen anderen Schreibmodus verwenden, z.B. vertikalen Text.
- [Flusslayout und Überlauf (overflow)](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_overflow)
  - : Überlauf verstehen und verwalten.
- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - : Das Boxmodell zu verstehen ist eine grundlegende CSS-Kenntnis; dieser Leitfaden erklärt, wie es funktioniert.
- [Beherrschen der Randüberlappung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - : Erfahren Sie, warum Sie manchmal weniger Rand haben, als Sie erwarten, aufgrund der Randüberlappung im normalen Fluss.
- [CSS z-index verstehen](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
  - : Absolutes Positionieren, Flexbox und Grid ermöglichen die Manipulation des Stapels (relative Positionierung der Elemente auf der Z-Achse) über die `z-index`-Eigenschaft. Dieser Artikel erklärt, wie man es verwaltet.

## Mehrspaltenlayout

Mehrspaltenlayout, oft als Multicol bezeichnet, nimmt Inhalt im normalen Fluss und teilt ihn in Spalten auf. Erfahren Sie, wie Sie diese Layoutmethode in den folgenden Leitfäden verwenden können.

- [Grundkonzepte von Multicol](/de/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
  - : Ein Überblick über die grundlegende Funktionalität von Multicol.
- [Spalten stylen](/de/docs/Web/CSS/CSS_multicol_layout/Styling_columns)
  - : Es gibt nur begrenzte Styling-Möglichkeiten für Spalten; dieser Leitfaden erklärt, was Sie tun können.
- [Spannen und Ausgleichen](/de/docs/Web/CSS/CSS_multicol_layout/Spanning_balancing_columns)
  - : Elemente über Spalten hinweg spannen und den Inhalt der Spalten ausgleichen.
- [Umgang mit Überlauf in Multicol](/de/docs/Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout)
  - : Was passiert, wenn mehr Inhalt vorhanden ist als Spaltenraum verfügbar?
- [Inhaltsumbrüche in Multicol](/de/docs/Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout)
  - : Umgang mit Inhaltsumbrüchen, wenn der Inhalt in Spalten aufgeteilt wird.

## Flexbox

CSS Flexible Box Layout, allgemein bekannt als Flexbox, ist ein Layoutmodell, das für das Design von Benutzeroberflächen und die Anordnung von Elementen in einer Dimension optimiert ist. Im Flexlayoutmodell können die Kinder eines Flexcontainers in jede Richtung angeordnet werden und ihre Größen "flexen", entweder um ungenutzten Raum zu füllen oder um das Überlaufen des Elternteils zu vermeiden.

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
  - : Ein Überblick über die Eigenschaften von Flexbox.
- [Beziehung von Flexbox zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
  - : Wie Flexbox mit anderen Layoutmethoden und anderen CSS-Spezifikationen zusammenhängt.
- [Ausrichtung von Elementen in einem Flexcontainer](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
  - : Wie die Eigenschaften der Box-Ausrichtung mit Flexbox funktionieren.
- [Reihenfolge der Flexelemente ändern](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
  - : Erklärung der verschiedenen Möglichkeiten, die Reihenfolge und Richtung von Elementen zu ändern, und Darstellung der potenziellen Probleme bei der Umsetzung.
- [Steuerung der Verhältnisse von Flexelementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
  - : Erklärung der Eigenschaften `flex-grow`, `flex-shrink` und `flex-basis`.
- [Beherrschen des Umbruchs von Flexelementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
  - : Wie man Flexcontainer mit mehreren Zeilen erstellt und die Darstellung der Elemente entlang dieser Zeilen kontrolliert.
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)
  - : Gewöhnliche Designmuster, die typische Anwendungsfälle von Flexbox sind.

## Gridlayout

CSS Grid Layout führt ein zweidimensionales Rastersystem in CSS ein. Rastersysteme können verwendet werden, um sowohl große Seitenbereiche als auch kleine Benutzeroberflächenelemente zu gestalten.

- [Grundkonzepte des Gridlayouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
  - : Ein Überblick über die Eigenschaften des Gridlayouts.
- [Beziehung von Gridlayout zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
  - : Wie Grid mit anderen Methoden wie Ausrichtung, Größenanpassung und Flexbox zusammenhängt.
- [Layout mittels linienbasierter Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
  - : Wie man Elemente mit nummerierten Linien platziert.
- [Grid-Template-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
  - : Wie man Elemente mit der Syntax des grid-templates platziert.
- [Layout mithilfe benannter Gridlinien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
  - : Wie man Linien benennt und Elemente nach Liniennamen statt nach Nummer platziert.
- [Automatische Platzierung im CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
  - : Wie man den Algorithmus zur automatischen Platzierung verwaltet und versteht, wie der Browser Elemente platziert.
- [Box-Ausrichtung im CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
  - : Wie man Elemente ausrichtet und den Raum auf beiden Achsen im Raster verteilt.
- [CSS Grid, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
  - : Wie man Fluss relativ, statt physische Eigenschaften und Werte mit dem Raster verwendet.
- [CSS Grid Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
  - : Einige Überlegungen zur Barrierefreiheit bei der Arbeit mit Gridlayout.
- [CSS Grid und progressive Verbesserung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_progressive_enhancement)
  - : Wie man sicherstellt, dass Ihre Website auch in Browsern, die Grid nicht unterstützen, gut funktioniert.
- [Umsetzung häufiger Layouts mit CSS Grid](/de/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)
  - : Verwendung von Grid zum Erstellen einiger häufiger Layouts.
- [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
  - : Eine Erklärung des Werts Subgrid, der Teil von Grid Level 2 ist.
- [Masonry-Layout](/de/docs/Web/CSS/CSS_grid_layout/Masonry_layout)
  - : Eine Erklärung der Masonry-Layout-Funktion in Grid Level 3.

## Ausrichtung

- [Box-Ausrichtung im Blocklayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)
  - : Die Ausrichtungseigenschaften sind für Block- und Inline-Layout spezifiziert, jedoch gibt es bisher keine Unterstützung in Browsern.
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
  - : Die Ausrichtungseigenschaften traten erstmals mit Flexbox auf; dieser Leitfaden erklärt, wie sie funktionieren.
- [Box-Ausrichtung im Gridlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
  - : Wie man Elemente im Gridlayout ausrichtet.
- [Box-Ausrichtung im Mehrspaltenlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
  - : Wie die Ausrichtung im Multicol funktionieren wird.
