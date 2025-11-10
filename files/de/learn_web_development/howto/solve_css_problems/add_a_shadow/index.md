---
title: Anleitung zum Hinzufügen eines Schattens zu einem Element
short-title: Einen Schatten zu einem Element hinzufügen
slug: Learn_web_development/Howto/Solve_CSS_problems/Add_a_shadow
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

In diesem Leitfaden erfahren Sie, wie Sie jedem Kasten auf Ihrer Seite einen Schatten hinzufügen können.

## Hinzufügen von Box-Schatten

Schatten sind ein häufiges Designelement, das dazu beitragen kann, Elemente auf Ihrer Seite hervorzuheben. In CSS werden Schatten auf den Kästen von Elementen mithilfe der {{cssxref("box-shadow")}}-Eigenschaft erstellt (wenn Sie einen Schatten zum Text selbst hinzufügen möchten, benötigen Sie {{cssxref("text-shadow")}}).

Die `box-shadow`-Eigenschaft nimmt eine Reihe von Werten an:

- Den Versatz auf der x-Achse
- Den Versatz auf der y-Achse
- Einen Unschärferadius
- Einen Ausbreitungsradius
- Eine Farbe
- Das `inset`-Schlüsselwort

Im folgenden Beispiel haben wir die X- und Y-Achsen auf 5px, die Unschärfe auf 10px und die Ausbreitung auf 2px gesetzt. Ich verwende ein halbtransparentes Schwarz als Farbe. Experimentieren Sie mit den verschiedenen Werten, um zu sehen, wie sie den Schatten verändern.

```html live-sample___box-shadow-button
<div class="wrapper">
  <button class="shadow">box-shadow</button>
</div>
```

```css hidden live-sample___box-shadow-button
.wrapper {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  padding: 5px 10px;
  border: 0;
  border-radius: 5px;
  font-weight: bold;
  font-size: 140%;
  background-color: #db1f48;
  color: white;
}
```

```css live-sample___box-shadow-button
.shadow {
  box-shadow: 5px 5px 10px 2px rgb(0 0 0 / 0.8);
}
```

{{EmbedLiveSample("box-shadow-button")}}

> [!NOTE]
> In diesem Beispiel verwenden wir `inset` nicht, was bedeutet, dass der Schatten der Standardabwurfschatten ist, wobei der Kasten über dem Schatten liegt. Eingesetzte Schatten erscheinen innerhalb des Kastens, als ob der Inhalt in die Seite zurückgedrückt würde.

## Siehe auch

- Der [Box-Schatten-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator)
- [Learn CSS: Fortgeschrittene Stileffekte](/de/docs/Learn_web_development/Core/Styling_basics/Advanced_styling_effects)
