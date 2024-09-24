---
title: CSS-Layout
slug: Web/Guide/CSS/CSS_Layout
l10n:
  sourceCommit: 0d8e5e932d471180075f041b73c03289abdf6b3c
---

Es gibt eine Reihe von Methoden, die Sie verwenden können, um Ihre Webseiten und Anwendungen zu gestalten. MDN enthält eine Reihe von ausführlichen Anleitungen zu den verschiedenen Methoden, und diese Seite bietet einen Überblick über alle.

## Normaler Fluss, Block- und Inline-Layout

Wenn Sie kein Flex- oder Grid-Layout verwenden, wird Ihr Inhalt im normalen Fluss oder Block- und Inline-Layout angeordnet. Diese Anleitungen helfen Ihnen, die Funktionsweise dieser Layout-Methode zu verstehen.

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
  - : Eine Einführung in den normalen Fluss.
- [Im Fluss und außerhalb des Flusses](/de/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow)
  - : Wie man ein Element aus dem Fluss nimmt und was das für das Layout Ihres Dokuments bedeutet.
- [Formatierungs-Kontexte erklärt](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
  - : Eine Einführung in die Erstellung eines neuen Formatierungskontextes.
- [Fluss-Layout und Schreibmodi](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes)
  - : Wie das Fluss-Layout funktioniert, wenn Sie einen anderen Schreibmodus verwenden, wie z. B. vertikalen Text.
- [Fluss-Layout und Überlauf](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_overflow)
  - : Überlauf verstehen und verwalten.
- [Einführung in das grundlegende CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - : Das Box-Modell zu verstehen ist ein grundlegendes CSS-Konzept; diese Anleitung erklärt, wie es funktioniert.
- [Beherrschen des Randkollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - : Finden Sie heraus, warum Sie manchmal weniger Rand als erwartet haben, aufgrund von Randkollaps im normalen Fluss.
- [CSS z-index verstehen](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
  - : Absolute Positionierung, Flexbox und Grid führen dazu, dass der Stapel (die relative Position der Elemente auf der Z-Achse) über die `z-index`-Eigenschaft manipulierbar ist. Dieser Artikel erklärt, wie man ihn verwaltet.

## Mehrspaltenlayout

Das Mehrspaltenlayout, oft als Multicol bezeichnet, nimmt Inhalte im normalen Fluss und teilt sie in Spalten auf. Erfahren Sie, wie Sie diese Layout-Methode in den folgenden Anleitungen verwenden können.

- [Grundkonzepte von Multicol](/de/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
  - : Ein Überblick über die grundlegende Funktionalität von Multicol.
- [Spalten stylen](/de/docs/Web/CSS/CSS_multicol_layout/Styling_columns)
  - : Es gibt nur begrenzte Möglichkeiten, Spalten zu gestalten; diese Anleitung erklärt, was Sie tun können.
- [Spannen und Ausgleichen](/de/docs/Web/CSS/CSS_multicol_layout/Spanning_balancing_columns)
  - : Elemente über Spalten spannen und Inhalte der Spalten ausgleichen.
- [Überlauf im Multicol verwalten](/de/docs/Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout)
  - : Was passiert, wenn mehr Inhalt vorhanden ist als verfügbarer Spaltenplatz?
- [Inhaltsumbrüche im Multicol](/de/docs/Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout)
  - : Umgang mit Inhaltsumbrüchen, wenn Inhalts in Spalten aufgeteilt wird.

## Flexbox

CSS Flexible Box Layout, allgemein als Flexbox bekannt, ist ein Layoutmodell, das für die Gestaltung von Benutzeroberflächen optimiert ist und zur Anordnung von Elementen in einer Dimension dient. Im Flex-Layout-Modell können die Kinder eines Flex-Containers in jede Richtung angeordnet werden und ihre Größen "flexen", entweder um ungenutzten Raum zu füllen oder um zu vermeiden, dass der übergeordnete Container überläuft.

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
  - : Ein Überblick über die Eigenschaften von Flexbox.
- [Beziehung von Flexbox zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
  - : Wie Flexbox sich auf andere Layoutmethoden und andere CSS-Spezifikationen bezieht.
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
  - : Wie die Box-Ausrichtungseigenschaften mit Flexbox funktionieren.
- [Flex-Elemente anordnen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
  - : Erklärung der verschiedenen Möglichkeiten, die Reihenfolge und Richtung von Elementen zu ändern, und mögliche Probleme dabei.
- [Verhältnisse von Flex-Elementen entlang der Hauptachse kontrollieren](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
  - : Erklärung der Eigenschaften `flex-grow`, `flex-shrink` und `flex-basis`.
- [Beherrschen des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
  - : Wie man Flex-Container mit mehreren Zeilen erstellt und die Darstellung der Elemente entlang dieser Zeilen steuert.
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)
  - : Häufige Designmuster, die typische Flexbox-Anwendungsfälle sind.

## Grid-Layout

Das CSS Grid Layout führt ein zweidimensionales Rastersystem in CSS ein. Raster können verwendet werden, um wichtige Seitenbereiche oder kleine Benutzeroberflächenelemente zu gestalten.

- [Grundkonzepte von Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
  - : Ein Überblick über die Eigenschaften von Grid-Layout.
- [Beziehung von Grid-Layout zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
  - : Wie Grid sich auf andere Methoden wie Ausrichtung, Größenanpassung und Flexbox bezieht.
- [Layout mit zeilenbasierter Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
  - : Wie man Elemente anhand nummerierter Linien platziert.
- [Grid-Template-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
  - : Wie man Elemente mit der grid-template-Syntax platziert.
- [Layout mit benannten Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
  - : Wie man Linien benennt und Elemente nach Liniennamen statt Nummern platziert.
- [Automatische Platzierung im CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
  - : Wie man den Algorithmus zur automatischen Platzierung verwaltet und versteht, wie der Browser Elemente platziert.
- [Box-Ausrichtung im CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
  - : Wie man Elemente ausrichtet und Raum auf beiden Achsen im Raster verteilt.
- [CSS Grid, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
  - : Wie man flussrelativ statt physische Eigenschaften und Werte im Raster verwendet.
- [CSS Grid Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
  - : Einige Überlegungen zur Barrierefreiheit bei der Arbeit mit Grid-Layout.
- [CSS Grid und progressive Verbesserung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_progressive_enhancement)
  - : Wie man sicherstellt, dass Ihre Website auch in Browsern gut funktioniert, die Grid nicht unterstützen.
- [Häufige Layouts mit CSS Grid realisieren](/de/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)
  - : Verwendung von Grid zum Erstellen einiger gängiger Layouts.
- [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
  - : Eine Erklärung des Subgrid-Werts, Teil von Grid-Level 2.
- [Mauerwerks-Layout](/de/docs/Web/CSS/CSS_grid_layout/Masonry_layout)
  - : Eine Erklärung der Mauerwerks-Layout-Funktion in Grid-Level 3.

## Ausrichtung

- [Box-Ausrichtung im Block-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)
  - : Die Ausrichtungseigenschaften sind für Block- und Inline-Layout spezifiziert, obwohl es noch keine Browserunterstützung gibt.
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
  - : Die Ausrichtungseigenschaften erschienen zuerst mit Flexbox; diese Anleitung erklärt, wie sie funktionieren.
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
  - : Wie man Elemente im Grid-Layout ausrichtet.
- [Box-Ausrichtung im Mehrspaltenlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
  - : Wie die Ausrichtung im Multicol funktionieren wird.
