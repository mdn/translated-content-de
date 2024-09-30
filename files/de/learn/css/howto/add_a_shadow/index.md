---
title: "Anleitung: Wie man einem Element einen Schatten hinzufügt"
slug: Learn/CSS/Howto/Add_a_shadow
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie jedem Kasten auf Ihrer Seite einen Schatten hinzufügen können.

## Hinzufügen von Box-Schatten

Schatten sind ein häufiges Designelement, das dazu beiträgt, Elemente auf Ihrer Seite hervorzuheben. In CSS werden Schatten auf den Boxen von Elementen mit der {{cssxref("box-shadow")}}-Eigenschaft erstellt (wenn Sie dem Text selbst einen Schatten hinzufügen möchten, benötigen Sie {{cssxref("text-shadow")}}).

Die `box-shadow`-Eigenschaft nimmt mehrere Werte an:

- Den Versatz auf der x-Achse
- Den Versatz auf der y-Achse
- Einen Unschärferadius
- Einen Ausbreitungsradius
- Eine Farbe
- Das Schlüsselwort `inset`

Im folgenden Beispiel haben wir die X- und Y-Achsen auf 5px gesetzt, die Unschärfe auf 10px und die Ausbreitung auf 2px. Ich verwende ein halbtransparentes Schwarz als Farbe. Experimentieren Sie mit den verschiedenen Werten, um zu sehen, wie sie den Schatten verändern.

{{EmbedGHLiveSample("css-examples/howto/box-shadow-button.html", '100%', 500)}}

> [!NOTE]
> Wir verwenden in diesem Beispiel nicht `inset`, was bedeutet, dass der Schatten der standardmäßige Schlagschatten ist, wobei die Box auf dem Schatten liegt. Eingesetzte Schatten erscheinen innerhalb der Box, als ob der Inhalt in die Seite zurückgedrückt worden wäre.

## Siehe auch

- Der [Box Shadow Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator)
- [Learn CSS: Erweiterte Stileffekte.](/de/docs/Learn/CSS/Building_blocks/Advanced_styling_effects)
