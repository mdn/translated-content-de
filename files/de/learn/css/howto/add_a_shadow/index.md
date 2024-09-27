---
title: Anleitung zum Hinzufügen eines Schattens zu einem Element
slug: Learn/CSS/Howto/Add_a_shadow
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie einem beliebigen Kasten auf Ihrer Seite einen Schatten hinzufügen können.

## Hinzufügen von Kastenschatten

Schatten sind ein häufiges Designelement, das dabei helfen kann, dass Elemente auf Ihrer Seite auffallen. In CSS werden Schatten auf den Kästen von Elementen mit der {{cssxref("box-shadow")}}-Eigenschaft erzeugt (wenn Sie dem Text selbst einen Schatten hinzufügen möchten, benötigen Sie {{cssxref("text-shadow")}}).

Die `box-shadow`-Eigenschaft benötigt eine Reihe von Werten:

- Den Versatz auf der x-Achse
- Den Versatz auf der y-Achse
- Einen Unschärferadius
- Einen Ausbreitungsradius
- Eine Farbe
- Das Schlüsselwort `inset`

Im untenstehenden Beispiel haben wir die X- und Y-Achsen auf 5px, die Unschärfe auf 10px und die Ausbreitung auf 2px gesetzt. Ich verwende ein halbtransparentes Schwarz als meine Farbe. Experimentieren Sie mit den verschiedenen Werten, um zu sehen, wie sie den Schatten verändern.

{{EmbedGHLiveSample("css-examples/howto/box-shadow-button.html", '100%', 500)}}

> [!NOTE]
> Wir verwenden in diesem Beispiel nicht `inset`, das bedeutet, dass der Schatten der Standardabstandsschatten ist, bei dem der Kasten oben auf dem Schatten liegt. Eingesetzte Schatten erscheinen innerhalb des Kastens, als ob der Inhalt in die Seite zurückgedrängt würde.

## Siehe auch

- Der [Box Shadow Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator)
- [CSS lernen: Erweiterte stilistische Effekte.](/de/docs/Learn/CSS/Building_blocks/Advanced_styling_effects)
