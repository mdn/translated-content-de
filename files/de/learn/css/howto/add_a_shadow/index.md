---
title: Wie man einem Element einen Schatten hinzufügt
slug: Learn/CSS/Howto/Add_a_shadow
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie jedem Kasten auf Ihrer Seite einen Schatten hinzufügen können.

## Hinzufügen von Kastenschatten

Schatten sind ein häufiges Designelement, das Elemente auf Ihrer Seite hervorheben kann. In CSS werden Schatten auf den Kästen von Elementen mit der {{cssxref("box-shadow")}}-Eigenschaft erstellt (wenn Sie einen Schatten dem Text selbst hinzufügen möchten, benötigen Sie {{cssxref("text-shadow")}}).

Die `box-shadow`-Eigenschaft nimmt eine Reihe von Werten an:

- Der Versatz auf der x-Achse
- Der Versatz auf der y-Achse
- Ein Unschärferadius
- Ein Ausweitungsradius
- Eine Farbe
- Das `inset`-Schlüsselwort

Im folgenden Beispiel haben wir die X- und Y-Achsen auf 5px gesetzt, die Unschärfe auf 10px und die Ausweitung auf 2px. Ich verwende eine halbtransparente Farbe als Schwarz. Experimentieren Sie mit den verschiedenen Werten, um zu sehen, wie sie den Schatten verändern.

{{EmbedGHLiveSample("css-examples/howto/box-shadow-button.html", '100%', 500)}}

> [!NOTE]
> Wir verwenden in diesem Beispiel nicht `inset`, was bedeutet, dass der Schatten der standardmäßige Schlagschatten ist, bei dem der Kasten auf dem Schatten liegt. Eingelassene Schatten erscheinen innerhalb des Kastens, als ob der Inhalt in die Seite gedrückt worden wäre.

## Siehe auch

- Der [Kastenschatten-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator)
- [Lernen Sie CSS: Fortgeschrittene Stileffekte.](/de/docs/Learn/CSS/Building_blocks/Advanced_styling_effects)
