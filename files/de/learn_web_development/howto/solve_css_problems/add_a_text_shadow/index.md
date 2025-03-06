---
title: So fügen Sie einem Text einen Schatten hinzu
slug: Learn_web_development/Howto/Solve_CSS_problems/Add_a_text_shadow
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie einem beliebigen Text auf Ihrer Seite einen Schatten hinzufügen können.

## Schatten zu Text hinzufügen

In unserem [Leitfaden zum Hinzufügen eines Schattens zu Boxen](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_shadow) können Sie herausfinden, wie Sie einem beliebigen Element auf Ihrer Seite einen Schatten hinzufügen. Diese Technik fügt jedoch nur Schatten zum umgebenden Kasten des Elements hinzu. Um einen Schlagschatten für den Text innerhalb des Kastens hinzuzufügen, benötigen Sie eine andere CSS-Eigenschaft — {{cssxref("text-shadow")}}.

Die Eigenschaft `text-shadow` nimmt eine Anzahl von Werten an:

- Die Verschiebung auf der x-Achse
- Die Verschiebung auf der y-Achse
- Ein Weichzeichnungsradius
- Eine Farbe

Im untenstehenden Beispiel haben wir die x-Achsen-Verschiebung auf 2px, die y-Achsen-Verschiebung auf 4px, den Weichzeichnungsradius auf 4px und die Farbe auf ein halbtransparentes Blau gesetzt. Experimentieren Sie mit den verschiedenen Werten, um zu sehen, wie sie den Schatten verändern.

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
> Es kann ziemlich einfach sein, Text mit Schattierungen schwer lesbar zu machen. Stellen Sie sicher, dass Ihre Entscheidungen den Text weiterhin lesbar machen und genügend [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) für Besucher bieten, die Probleme mit Texten mit geringem Kontrast haben.
