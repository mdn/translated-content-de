---
title: Wie man einem Text einen Schatten hinzufügt
slug: Learn/CSS/Howto/Add_a_text_shadow
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie einem beliebigen Text auf Ihrer Seite einen Schatten hinzufügen können.

## Schatten zu Texten hinzufügen

In unserem [Leitfaden zum Hinzufügen eines Schattens zu Boxen](/de/docs/Learn/CSS/Howto/Add_a_shadow) erfahren Sie, wie Sie jedem Element auf Ihrer Seite einen Schatten hinzufügen können. Diese Technik fügt jedoch nur Schatten zur umgebenden Box des Elements hinzu. Um einen Schlagschatten zum Text innerhalb der Box hinzuzufügen, benötigen Sie eine andere CSS-Eigenschaft — {{cssxref("text-shadow")}}.

Die `text-shadow` Eigenschaft nimmt eine Anzahl von Werten an:

- Der Versatz auf der x-Achse
- Der Versatz auf der y-Achse
- Ein Unschärferadius
- Eine Farbe

Im folgenden Beispiel haben wir den Versatz auf der x-Achse auf 2px, den Versatz auf der y-Achse auf 4px, den Unschärferadius auf 4px und die Farbe auf ein halbtransparentes Blau gesetzt. Spielen Sie mit den verschiedenen Werten, um zu sehen, wie sie den Schatten verändern.

{{EmbedGHLiveSample("css-examples/howto/text-shadow.html", '100%', 500)}}

> [!NOTE]
> Es kann ziemlich einfach sein, Text durch Schattierungen schwer lesbar zu machen. Stellen Sie sicher, dass Ihre Wahl den Text noch lesbar macht und genügend [Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) für Besucher bietet, die Schwierigkeiten mit kontrastarmem Text haben.
