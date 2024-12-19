---
title: Anleitung zum Hinzufügen eines Schattens zu Text
slug: Learn_web_development/Howto/Solve_CSS_problems/Add_a_text_shadow
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie jedem Text auf Ihrer Seite einen Schatten hinzufügen können.

## Hinzufügen von Schatten zu Text

In unserem [Leitfaden zum Hinzufügen eines Schattens zu Boxen](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_shadow) erfahren Sie, wie Sie jedem Element auf Ihrer Seite einen Schatten hinzufügen können. Diese Technik fügt jedoch nur Schatten zu dem das Element umgebenden Rahmen hinzu. Um einen Schlagschatten zum Text innerhalb des Rahmens hinzuzufügen, benötigen Sie eine andere CSS-Eigenschaft — {{cssxref("text-shadow")}}.

Die `text-shadow`-Eigenschaft nimmt eine Anzahl von Werten an:

- Die Verschiebung auf der x-Achse
- Die Verschiebung auf der y-Achse
- Ein Weichzeichnungsradius
- Eine Farbe

Im folgenden Beispiel haben wir die Verschiebung auf der x-Achse auf 2px, die y-Achse auf 4px, den Weichzeichnungsradius auf 4px und die Farbe auf ein halbtransparentes Blau gesetzt. Experimentieren Sie mit den verschiedenen Werten, um zu sehen, wie sie den Schatten verändern.

```html live-sample___text-shadow
<div class="wrapper">
  <h1>Adding a shadow to text</h1>
</div>
```

```css live-sample___text-shadow
h1 {
  color: royalblue;
  text-shadow: 2px 4px 4px rgb(46 91 173 / 0.6);
}
```

{{EmbedLiveSample("text-shadow")}}

> [!NOTE]
> Es kann sehr einfach sein, Text mit Schattierungen schwer lesbar zu machen. Stellen Sie sicher, dass die von Ihnen gewählten Optionen Ihren Text weiterhin lesbar machen und genug [Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) für Besucher bieten, die Schwierigkeiten mit Texten bei niedrigem Kontrast haben.
