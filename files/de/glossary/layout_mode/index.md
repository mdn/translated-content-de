---
title: Layout-Modus
slug: Glossary/Layout_mode
l10n:
  sourceCommit: 4e1bf706f08556292e02202486fae8b616cfc358
---

{{GlossarySidebar}}

Ein **Layout-Modus**, manchmal auch _Layout_ genannt, ist ein [CSS](/de/docs/Web/CSS)-Algorithmus, der die Position und Größe von Elementboxen basierend auf der Art und Weise bestimmt, wie sie mit ihren Geschwister- und Vorfahrenboxen interagieren.

Es gibt mehrere Layout-Modi:

- **[Flow-Layout oder normaler Fluss](/de/docs/Web/CSS/CSS_display/Flow_layout)**

  - : Alle Elemente sind Teil des normalen Flusses, bis Sie etwas tun, um sie daraus zu entfernen. Der normale Fluss umfasst:

    - **[Block-Layout](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)**
      - : Entworfen für das Layout von Boxen wie Absätzen.
    - **[Inline-Layout](/de/docs/Web/CSS/CSS_inline_layout)**
      - : Entworfen für das Layout von Inline-Elementen wie Text.

- **[Tabellen-Layout](/de/docs/Web/CSS/CSS_table)**
  - : Entworfen für das Layout von Tabellen.
- **Float-Layout**
  - : Entworfen, um ein Element dazu zu bringen, sich links oder rechts zu positionieren, während der restliche Inhalt im normalen Fluss darum herum fließt.
- **[Positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout)**
  - : Entworfen, um Elemente zu positionieren, ohne viel Interaktion mit anderen Elementen.
- **[Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout)**
  - : Entworfen, um Inhalte wie in einer Zeitung in Spalten anzuordnen.
- **[Flexibler Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)**
  - : Entworfen für das Layout komplexer Seiten, die sich reibungslos skalieren lassen.
- **[Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)**
  - : Entworfen für das Layout von Elementen relativ zu einem festen Raster.

> [!NOTE]
> Nicht alle [CSS-Eigenschaften](/de/docs/Web/CSS/Reference) gelten für alle _Layout-Modi_. Die meisten von ihnen gelten für ein oder zwei dieser Modi und haben keine Wirkung, wenn sie auf ein Element angewendet werden, das an einem anderen Layout-Modus teilnimmt.

## Siehe auch

- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
- [CSS-Anzeige](/de/docs/Web/CSS/CSS_display) Modul
