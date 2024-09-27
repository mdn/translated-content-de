---
title: Anleitung zum Hinzufügen eines Schattens zu Text
slug: Learn/CSS/Howto/Add_a_text_shadow
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie einem Text auf Ihrer Seite einen Schatten hinzufügen können.

## Schatten zu Text hinzufügen

In unserem [Leitfaden zum Hinzufügen eines Schattens zu Boxen](/de/docs/Learn/CSS/Howto/Add_a_shadow) können Sie herausfinden, wie Sie einem Element auf Ihrer Seite einen Schatten hinzufügen. Diese Technik fügt jedoch nur Schatten zur umgebenden Box des Elements hinzu. Um dem Text innerhalb der Box einen Schatten hinzuzufügen, benötigen Sie eine andere CSS-Eigenschaft — {{cssxref("text-shadow")}}.

Die `text-shadow`-Eigenschaft nimmt eine Reihe von Werten an:

- Der Versatz auf der x-Achse
- Der Versatz auf der y-Achse
- Ein Unschärferadius
- Eine Farbe

Im folgenden Beispiel haben wir den Versatz auf der x-Achse auf 2px, den Versatz auf der y-Achse auf 4px, den Unschärferadius auf 4px und die Farbe auf ein halbtransparentes Blau gesetzt. Experimentieren Sie mit den verschiedenen Werten, um zu sehen, wie sie den Schatten verändern.

{{EmbedGHLiveSample("css-examples/howto/text-shadow.html", '100%', 500)}}

> [!NOTE]
> Es kann ziemlich einfach sein, den Text mit Schatten schwer lesbar zu machen. Stellen Sie sicher, dass die von Ihnen getroffenen Entscheidungen Ihren Text lesbar machen und genügend [Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) für Besucher bieten, die Schwierigkeiten mit kontrastarmem Text haben.
