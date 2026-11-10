---
title: So fügen Sie Text einen Schatten hinzu
short-title: Text einen Schatten hinzufügen
slug: Learn_web_development/Howto/Solve_CSS_problems/Add_a_text_shadow
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

In diesem Leitfaden erfahren Sie, wie Sie beliebigem Text auf Ihrer Seite einen Schatten hinzufügen.

## Textschatten hinzufügen

Unser [Leitfaden zum Hinzufügen eines Schattens zu Elementen](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_shadow) erklärt, wie Sie einem beliebigen Element auf Ihrer Seite einen Schatten hinzufügen. Diese Technik fügt jedoch nur dem umgebenden Rahmen des Elements einen Schatten hinzu. Um dem Text selbst einen Schlagschatten hinzuzufügen, benötigen Sie eine andere CSS-Eigenschaft: {{cssxref("text-shadow")}}.

Die Eigenschaft `text-shadow` akzeptiert mehrere Werte:

- Den Versatz auf der x-Achse
- Den Versatz auf der y-Achse
- Einen Unschärferadius
- Eine Farbe

Im folgenden Beispiel haben wir den Versatz auf der x-Achse auf `2px`, den Versatz auf der y-Achse auf `4px`, den Unschärferadius auf `4px` und die Farbe auf ein halbtransparentes Blau gesetzt. Probieren Sie verschiedene Werte aus, um zu sehen, wie sie den Schatteneffekt verändern.

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
> Wenn Sie Textschatten hinzufügen, kann der Text unbeabsichtigt schwer lesbar werden. Achten Sie bei der Auswahl der Werte auf ausreichenden [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast), damit Ihr Text lesbar bleibt.
