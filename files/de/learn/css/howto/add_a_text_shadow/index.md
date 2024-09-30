---
title: Anleitung zur Hinzufügung eines Schattens zu Text
slug: Learn/CSS/Howto/Add_a_text_shadow
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie jedem Text auf Ihrer Seite einen Schatten hinzufügen können.

## Hinzufügen von Schatten zu Text

In unserem [Leitfaden zum Hinzufügen eines Schattens zu Boxen](/de/docs/Learn/CSS/Howto/Add_a_shadow) erfahren Sie, wie Sie jedem Element auf Ihrer Seite einen Schatten hinzufügen können. Diese Technik fügt jedoch nur Schatten zum umgebenden Kasten des Elements hinzu. Um einen Schlagschatten zu dem Text im Kasten hinzuzufügen, benötigen Sie eine andere CSS-Eigenschaft — {{cssxref("text-shadow")}}.

Die `text-shadow`-Eigenschaft nimmt mehrere Werte an:

- Den Versatz auf der x-Achse
- Den Versatz auf der y-Achse
- Einen Weichzeichnungsradius
- Eine Farbe

Im folgenden Beispiel haben wir den Versatz auf der x-Achse auf 2px, den Versatz auf der y-Achse auf 4px, den Weichzeichnungsradius auf 4px und die Farbe auf ein halbtransparentes Blau gesetzt. Experimentieren Sie mit den verschiedenen Werten, um zu sehen, wie sie den Schatten verändern.

{{EmbedGHLiveSample("css-examples/howto/text-shadow.html", '100%', 500)}}

> [!NOTE]
> Es kann sehr einfach sein, durch Textschatten den Text schwer lesbar zu machen. Stellen Sie sicher, dass Ihre Entscheidungen den Text weiterhin lesbar machen und genügend [Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) für Besucher bieten, die Schwierigkeiten mit niedrigem Kontrast haben.
