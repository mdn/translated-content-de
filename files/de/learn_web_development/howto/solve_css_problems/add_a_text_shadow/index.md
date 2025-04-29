---
title: Anleitung zur Hinzufügung eines Schattens zu Text
short-title: Hinzufügen eines Schattens zu Text
slug: Learn_web_development/Howto/Solve_CSS_problems/Add_a_text_shadow
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

In diesem Leitfaden erfahren Sie, wie Sie jedem Text auf Ihrer Seite einen Schatten hinzufügen können.

## Hinzufügen von Schatten zu Text

In unserem [Leitfaden zum Hinzufügen eines Schattens zu Boxen](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_shadow) erfahren Sie, wie Sie jedem Element auf Ihrer Seite einen Schatten hinzufügen können. Diese Technik fügt jedoch nur dem Umgebungsrahmen des Elements Schatten hinzu. Um einen Schlagschatten zum Text innerhalb des Rahmens hinzuzufügen, benötigen Sie eine andere CSS-Eigenschaft — {{cssxref("text-shadow")}}.

Die `text-shadow`-Eigenschaft nimmt eine Reihe von Werten:

- Den Versatz auf der x-Achse
- Den Versatz auf der y-Achse
- Einen Unschärferadius
- Eine Farbe

Im Beispiel unten haben wir den Versatz auf der x-Achse auf 2px, den Versatz auf der y-Achse auf 4px, den Unschärferadius auf 4px und die Farbe auf ein halbtransparentes Blau gesetzt. Spielen Sie mit den verschiedenen Werten, um zu sehen, wie sie den Schatten verändern.

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
> Es kann ziemlich einfach sein, Text mit Textschatten schwer lesbar zu machen. Stellen Sie sicher, dass Ihre Entscheidungen den Text weiterhin lesbar machen und einen ausreichenden [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) für Besucher bieten, die Schwierigkeiten mit kontrastarmem Text haben.
