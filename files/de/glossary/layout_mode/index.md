---
title: Layout-Modus
slug: Glossary/Layout_mode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{GlossarySidebar}}

Ein **Layout-Modus**, manchmal auch _Layout_ genannt, ist ein [CSS](/de/docs/Web/CSS)-Algorithmus, der die Position und Größe von Element-Boxen bestimmt, basierend darauf, wie sie mit ihren Geschwister- und Vorfahren-Boxen interagieren.

Es gibt mehrere Layout-Modi:

- **[Flow-Layout oder normaler Fluss](/de/docs/Web/CSS/CSS_display/Flow_layout)**

  - : Alle Elemente sind Teil des normalen Flusses, bis Sie etwas tun, um sie daraus zu entfernen. Der normale Fluss umfasst:
    - **[Block-Layout](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)**
      - : Entwickelt für das Layout von Boxen wie Absätze.
    - **[Inline-Layout](/de/docs/Web/CSS/CSS_inline_layout)**
      - : Entwickelt für das Layout von Inline-Elementen wie Text.

- **[Tabellen-Layout](/de/docs/Web/CSS/CSS_table)**
  - : Entwickelt für das Layout von Tabellen.
- **Float-Layout**
  - : Entwickelt, um ein Element links oder rechts zu positionieren, während der restliche Inhalt im normalen Fluss darum herumfließt.
- **[Positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout)**
  - : Entwickelt für die Positionierung von Elementen mit wenig Interaktion mit anderen Elementen.
- **[Mehrspaltiges Layout](/de/docs/Web/CSS/CSS_multicol_layout)**
  - : Entwickelt für das Layout von Inhalten in Spalten wie in einer Zeitung.
- **[Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)**
  - : Entwickelt für das Layout komplexer Seiten, die sich reibungslos skalieren lassen.
- **[Raster-Layout](/de/docs/Web/CSS/CSS_grid_layout)**
  - : Entwickelt für das Layout von Elementen relativ zu einem festen Raster.

> [!NOTE]
> Nicht alle [CSS-Eigenschaften](/de/docs/Web/CSS/Reference) gelten für alle _Layout-Modi_. Die meisten von ihnen gelten für einen oder zwei dieser Modi und haben keine Wirkung, wenn sie auf ein Element angewendet werden, das in einem anderen Layout-Modus teilnimmt.

## Siehe auch

- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
- [CSS Display](/de/docs/Web/CSS/CSS_display)-Modul
