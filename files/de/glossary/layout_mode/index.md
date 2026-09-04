---
title: Layout-Modus
slug: Glossary/Layout_mode
l10n:
  sourceCommit: c26d4cc8e9b10c504587531c49fa82b7b646be18
---

Ein **Layout-Modus**, manchmal auch _Layout_ genannt, ist ein [CSS](/de/docs/Web/CSS)-Algorithmus, der die Position und Größe von Element-Boxen bestimmt, basierend darauf, wie sie mit ihren Geschwister- und Vorfahren-Boxen interagieren.

Es gibt verschiedene Layout-Modi:

- **[Fluss-Layout oder normaler Fluss](/de/docs/Web/CSS/Guides/Display/Flow_layout)**
  - : Alle Elemente sind Teil des normalen Flusses, bis etwas unternommen wird, um sie daraus zu entfernen. Der normale Fluss umfasst:
    - **[Block-Layout](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout)**
      - : Entwickelt für das Layout von Boxen wie Absätze.
    - **[Inline-Layout](/de/docs/Web/CSS/Guides/Inline_layout)**
      - : Entwickelt für das Layout von Inline-Elementen wie Text.

- **[Tabellen-Layout](/de/docs/Web/CSS/Guides/Table)**
  - : Entwickelt für das Layout von Tabellen.
- **Float-Layout**
  - : Entwickelt, um ein Element so zu positionieren, dass es sich links oder rechts ausrichtet, während der restliche Inhalt im normalen Fluss darum herumfließt.
- **[Positioniertes Layout](/de/docs/Web/CSS/Guides/Positioned_layout)**
  - : Entwickelt für die Positionierung von Elementen ohne viel Interaktion mit anderen Elementen.
- **[Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout)**
  - : Entwickelt, um Inhalt in Spalten wie in einer Zeitung zu layouten.
- **[Flexibles Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout)**
  - : Entwickelt für das Layout komplexer Seiten, die sich reibungslos skalieren lassen.
- **[Raster-Layout](/de/docs/Web/CSS/Guides/Grid_layout)**
  - : Entwickelt für das Layout von Elementen in Bezug auf ein festgelegtes Raster.

> [!NOTE]
> Nicht alle [CSS-Eigenschaften](/de/docs/Web/CSS/Reference) gelten für alle _Layout-Modi_. Die meisten von ihnen gelten für einen oder zwei dieser Modi und haben keine Wirkung, wenn sie auf einem Element gesetzt werden, das an einem anderen Layout-Modus teilnimmt.

## Siehe auch

- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- [CSS Display](/de/docs/Web/CSS/Guides/Display) Modul
