---
title: So fügen Sie einem Element einen Schatten hinzu
short-title: Einem Element einen Schatten hinzufügen
slug: Learn_web_development/Howto/Solve_CSS_problems/Add_a_shadow
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

In diesem Leitfaden erfahren Sie, wie Sie einem beliebigen Kasten auf Ihrer Seite einen Schatten hinzufügen können.

## Hinzufügen von Kastenschatten

Schatten sind ein gängiges Designelement, das dazu beitragen kann, dass Elemente auf Ihrer Seite hervorstechen. In CSS werden Schatten auf den Kästen von Elementen mit der {{cssxref("box-shadow")}}-Eigenschaft erstellt (wenn Sie dem Text selbst einen Schatten hinzufügen möchten, verwenden Sie {{cssxref("text-shadow")}}).

Die `box-shadow`-Eigenschaft nimmt eine Reihe von Werten an:

- Die Verschiebung auf der x-Achse
- Die Verschiebung auf der y-Achse
- Ein Unschärferadius
- Ein Ausbreitungsradius
- Eine Farbe
- Das `inset`-Schlüsselwort

Im Beispiel unten haben wir die X- und Y-Achse auf 5px gesetzt, die Unschärfe auf 10px und die Ausbreitung auf 2px. Ich verwende eine halbtransparente schwarze Farbe. Experimentieren Sie mit den verschiedenen Werten, um zu sehen, wie sie den Schatten verändern.

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
> In diesem Beispiel verwenden wir `inset` nicht, was bedeutet, dass der Schatten der Standard-Abfall-Schatten ist und die Box über dem Schatten liegt. Eingefügte Schatten erscheinen innerhalb der Box, als ob der Inhalt in die Seite gedrückt wäre.

## Siehe auch

- Der [Box-Schatten-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator)
- [CSS lernen: Erweiterte Stil-Effekte](/de/docs/Learn_web_development/Core/Styling_basics/Advanced_styling_effects)
