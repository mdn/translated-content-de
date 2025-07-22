---
title: Wie man einem Text einen Schatten hinzufügt
short-title: Textschatten hinzufügen
slug: Learn_web_development/Howto/Solve_CSS_problems/Add_a_text_shadow
l10n:
  sourceCommit: a862f7714755b140b150bd2c724589f6f95a19a2
---

In diesem Leitfaden erfahren Sie, wie Sie jedem Text auf Ihrer Seite einen Schatten hinzufügen können.

## Schatten zu Text hinzufügen

Unser [Leitfaden zum Hinzufügen eines Schattens zu Boxen](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_shadow) erklärt, wie Sie einem beliebigen Element auf Ihrer Seite einen Schatten hinzufügen können. Diese Technik fügt jedoch nur Schatten zum umgebenden Rahmen des Elements hinzu. Um einen Schlagschatten direkt dem Text hinzuzufügen, benötigen Sie eine andere CSS-Eigenschaft: {{cssxref("text-shadow")}}.

Die Eigenschaft `text-shadow` nimmt mehrere Werte an:

- Der Versatz auf der x-Achse
- Der Versatz auf der y-Achse
- Ein Unschärferadius
- Eine Farbe

Im folgenden Beispiel haben wir den x-Achsen-Versatz auf `2px`, den y-Achsen-Versatz auf `4px`, den Unschärferadius auf `4px` und die Farbe auf ein halbtransparentes Blau gesetzt. Experimentieren Sie mit den verschiedenen Werten, um zu sehen, wie sie den Schatteneffekt verändern.

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

{{EmbedLiveSample("Text_shadow")}}

> [!NOTE]
> Beim Hinzufügen von Textschatten kann es möglicherweise passieren, dass der Text schwer lesbar wird. Achten Sie darauf, dass Ihre Auswahl einen ausreichenden [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) bietet, um die Lesbarkeit des Textes zu gewährleisten.
