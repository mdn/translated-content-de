---
title: "Anleitung: Wie man einem Element einen Schatten hinzufügt"
short-title: Einen Schatten zu einem Element hinzufügen
slug: Learn_web_development/Howto/Solve_CSS_problems/Add_a_shadow
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

In diesem Leitfaden erfahren Sie, wie Sie einem beliebigen Kasten auf Ihrer Seite einen Schatten hinzufügen können.

## Hinzufügen von Kastenschatten

Schatten sind ein häufiges Designelement, das dabei helfen kann, Elemente auf Ihrer Seite hervorzuheben. In CSS werden Schatten um die Kästen von Elementen mit der Eigenschaft {{cssxref("box-shadow")}} erstellt (wenn Sie dem Text selbst einen Schatten hinzufügen möchten, benötigen Sie {{cssxref("text-shadow")}}).

Die `box-shadow`-Eigenschaft nimmt eine Anzahl von Werten an:

- Der Versatz auf der x-Achse
- Der Versatz auf der y-Achse
- Ein Unschärferadius
- Ein Ausdehnungsradius
- Eine Farbe
- Das Schlüsselwort `inset`

Im folgenden Beispiel haben wir die X- und Y-Achsen auf 5px, die Unschärfe auf 10px und die Ausdehnung auf 2px gesetzt. Ich verwende ein halbtransparentes Schwarz als meine Farbe. Experimentieren Sie mit den verschiedenen Werten, um zu sehen, wie sie den Schatten verändern.

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
  color: #fff;
}
```

```css live-sample___box-shadow-button
.shadow {
  box-shadow: 5px 5px 10px 2px rgb(0 0 0 / 0.8);
}
```

{{EmbedLiveSample("box-shadow-button")}}

> [!NOTE]
> Wir verwenden in diesem Beispiel nicht `inset`, was bedeutet, dass der Schatten der standardmäßige Drop-Shadow ist, bei dem der Kasten über dem Schatten liegt. Inset-Schatten erscheinen innerhalb des Kastens, als ob der Inhalt in die Seite zurückgedrückt wurde.

## Siehe auch

- Der [Kastenschatten-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator)
- [CSS lernen: Fortgeschrittene Stileffekte](/de/docs/Learn_web_development/Core/Styling_basics/Advanced_styling_effects)
