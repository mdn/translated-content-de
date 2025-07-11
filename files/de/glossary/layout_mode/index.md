---
title: Layout-Modus
slug: Glossary/Layout_mode
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **Layout-Modus**, manchmal auch _Layout_ genannt, ist ein [CSS](/de/docs/Web/CSS)-Algorithmus, der die Position und Größe von Element-Boxen bestimmt, basierend auf der Art und Weise, wie sie mit ihren Nachbar- und Vorfahren-Boxen interagieren.

Es gibt mehrere Layout-Modi:

- **[Flusslayout oder normaler Fluss](/de/docs/Web/CSS/CSS_display/Flow_layout)**
  - : Alle Elemente sind Teil des normalen Flusses, bis Sie etwas tun, um sie daraus zu entfernen. Der normale Fluss umfasst:
    - **[Blocklayout](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)**
      - : Konzipiert für das Layout von Boxen wie Absätzen.
    - **[Inline-Layout](/de/docs/Web/CSS/CSS_inline_layout)**
      - : Konzipiert für das Layout von Inline-Elementen wie Text.

- **[Tabellenlayout](/de/docs/Web/CSS/CSS_table)**
  - : Konzipiert für das Layout von Tabellen.
- **Float-Layout**
  - : Konzipiert, um ein Element links oder rechts zu positionieren, während der restliche Inhalt im normalen Fluss darum herum fließt.
- **[Positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout)**
  - : Konzipiert für die Positionierung von Elementen ohne viel Interaktion mit anderen Elementen.
- **[Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout)**
  - : Konzipiert für das Layout von Inhalten in Spalten wie in einer Zeitung.
- **[Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)**
  - : Konzipiert für das Layout von komplexen Seiten, die glatt skaliert werden können.
- **[Raster-Layout](/de/docs/Web/CSS/CSS_grid_layout)**
  - : Konzipiert für das Layout von Elementen relativ zu einem festen Raster.

> [!NOTE]
> Nicht alle [CSS-Eigenschaften](/de/docs/Web/CSS/Reference) gelten für alle _Layout-Modi_. Die meisten gelten für einen oder zwei von ihnen und haben keine Auswirkung, wenn sie auf ein Element angewendet werden, das an einem anderen Layout-Modus teilnimmt.

## Siehe auch

- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
- [CSS Display](/de/docs/Web/CSS/CSS_display)-Modul
