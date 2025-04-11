---
title: Anleitung zum Hinzufügen eines Schattens zu Text
slug: Learn_web_development/Howto/Solve_CSS_problems/Add_a_text_shadow
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

In diesem Leitfaden erfahren Sie, wie Sie jedem Text auf Ihrer Seite einen Schatten hinzufügen.

## Hinzufügen von Schatten zu Text

In unserem [Leitfaden zum Hinzufügen eines Schattens zu Boxen](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_shadow) erfahren Sie, wie Sie einem beliebigen Element auf Ihrer Seite einen Schatten hinzufügen können. Diese Technik fügt jedoch nur Schatten zum umgebenden Rahmen des Elements hinzu. Um einen Schlagschatten zum Text innerhalb der Box hinzuzufügen, benötigen Sie eine andere CSS-Eigenschaft — {{cssxref("text-shadow")}}.

Die `text-shadow`-Eigenschaft nimmt eine Reihe von Werten an:

- Den Versatz auf der x-Achse
- Den Versatz auf der y-Achse
- Einen Unschärferadius
- Eine Farbe

Im folgenden Beispiel haben wir den x-Achsen-Versatz auf 2px, den y-Achsen-Versatz auf 4px, den Unschärferadius auf 4px und die Farbe auf ein halbtransparentes Blau gesetzt. Spielen Sie mit den verschiedenen Werten, um zu sehen, wie sie den Schatten verändern.

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
> Es kann ziemlich leicht passieren, dass Text durch Schattierungen schwer lesbar wird. Stellen Sie sicher, dass Ihre Entscheidungen den Text weiterhin lesbar machen und genug [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) für Besucher bieten, die Schwierigkeiten mit Texten bei geringem Kontrast haben.
