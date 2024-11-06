---
title: Anleitung zum Hinzufügen eines Schattens zu Text
slug: Learn/CSS/Howto/Add_a_text_shadow
l10n:
  sourceCommit: 40590706f9ab23242bcd8c8966cc683d7d5b18aa
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie jedem Text auf Ihrer Seite einen Schatten hinzufügen können.

## Hinzufügen von Schatten zu Text

In unserem [Leitfaden zum Hinzufügen eines Schattens zu Boxen](/de/docs/Learn/CSS/Howto/Add_a_shadow) erfahren Sie, wie Sie jedem Element auf Ihrer Seite einen Schatten hinzufügen. Diese Technik fügt jedoch nur Schatten zu der umgebenden Box des Elements hinzu. Um einen Schlagschatten zum Text innerhalb der Box hinzuzufügen, benötigen Sie eine andere CSS-Eigenschaft — {{cssxref("text-shadow")}}.

Die `text-shadow`-Eigenschaft nimmt eine Anzahl von Werten:

- Den Versatz auf der x-Achse
- Den Versatz auf der y-Achse
- Einen Weichzeichnungsradius
- Eine Farbe

Im folgenden Beispiel haben wir den Versatz der x-Achse auf 2px, den Versatz der y-Achse auf 4px, den Weichzeichnungsradius auf 4px und die Farbe auf ein halbtransparentes Blau gesetzt. Experimentieren Sie mit den verschiedenen Werten, um zu sehen, wie sie den Schatten verändern.

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
> Es kann sehr leicht passieren, dass Text durch Textschatten schwer lesbar wird. Stellen Sie sicher, dass die getroffenen Entscheidungen Ihren Text dennoch lesbar machen und genügend [Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) für Besucher bieten, die Schwierigkeiten mit kontrastarmem Text haben.
