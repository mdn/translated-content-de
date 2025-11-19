---
title: Layout-Modus
slug: Glossary/Layout_mode
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Ein **Layout-Modus**, manchmal auch _Layout_ genannt, ist ein [CSS](/de/docs/Web/CSS) Algorithmus, der die Position und Größe von Element-Boxen bestimmt, basierend darauf, wie sie mit ihren Nachbar- und Vorfahrenboxen interagieren.

Es gibt mehrere Layout-Modi:

- **[Fließlayout oder normaler Fluss](/de/docs/Web/CSS/Guides/Display/Flow_layout)**
  - : Alle Elemente sind Teil des normalen Flusses, bis Sie etwas tun, um sie daraus zu entfernen. Der normale Fluss umfasst:
    - **[Block-Layout](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout)**
      - : Konzipiert für das Layout von Boxen wie Absätze.
    - **[Inline-Layout](/de/docs/Web/CSS/Guides/Inline_layout)**
      - : Konzipiert für das Layout von Inline-Elementen wie Text.

- **[Tabellen-Layout](/de/docs/Web/CSS/Guides/Table)**
  - : Konzipiert für das Layout von Tabellen.
- **Float-Layout**
  - : Konzipiert, um ein Element dazu zu bringen, sich links oder rechts zu positionieren, während der restliche Inhalt im normalen Fluss darum herumfließt.
- **[Positioniertes Layout](/de/docs/Web/CSS/Guides/Positioned_layout)**
  - : Konzipiert für die Positionierung von Elementen ohne viel Interaktion mit anderen Elementen.
- **[Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout)**
  - : Konzipiert für die Anordnung von Inhalten in Spalten, wie in einer Zeitung.
- **[Flexibles Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout)**
  - : Konzipiert für das Layout komplexer Seiten, die sich fließend anpassen lassen.
- **[Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout)**
  - : Konzipiert für die Anordnung von Elementen relativ zu einem festen Raster.

> [!NOTE]
> Nicht alle [CSS-Eigenschaften](/de/docs/Web/CSS/Reference) gelten für alle _Layout-Modi_. Die meisten gelten für ein oder zwei von ihnen und haben keinen Effekt, wenn sie auf ein Element angewendet werden, das an einem anderen Layout-Modus teilnimmt.

## Siehe auch

- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- [CSS-Display](/de/docs/Web/CSS/Guides/Display) Modul
