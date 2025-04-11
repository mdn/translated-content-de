---
title: Anleitung zur Hinzufügung eines Schattens zu einem Element
slug: Learn_web_development/Howto/Solve_CSS_problems/Add_a_shadow
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

In diesem Leitfaden erfahren Sie, wie Sie einem beliebigen Kasten auf Ihrer Seite einen Schatten hinzufügen können.

## Hinzufügen von Kastenschatten

Schatten sind ein gängiges Designelement, das helfen kann, Elemente auf Ihrer Seite hervorzuheben. In CSS werden Schatten auf den Kästen von Elementen mit der {{cssxref("box-shadow")}}-Eigenschaft erzeugt (wenn Sie dem Text selbst einen Schatten hinzufügen möchten, benötigen Sie {{cssxref("text-shadow")}}).

Die `box-shadow`-Eigenschaft nimmt eine Reihe von Werten an:

- Den Versatz auf der x-Achse
- Den Versatz auf der y-Achse
- Einen Unschärferadius
- Einen Ausbreitungsradius
- Eine Farbe
- Das Schlüsselwort `inset`

Im folgenden Beispiel haben wir die X- und Y-Achsen auf 5px, die Unschärfe auf 10px und die Ausbreitung auf 2px gesetzt. Ich verwende als Farbe ein halbtransparentes Schwarz. Spielen Sie mit den verschiedenen Werten, um zu sehen, wie sie den Schatten verändern.

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
> Wir verwenden `inset` in diesem Beispiel nicht, das bedeutet, dass der Schatten standardmäßig ein Schlagschatten mit dem Kasten auf dem Schatten ist. Eingesetzte Schatten erscheinen innerhalb des Kastens, als ob der Inhalt in die Seite zurückgedrängt wäre.

## Siehe auch

- Der [Box Shadow Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator)
- [Lernen Sie CSS: Erweiterte Stileffekte](/de/docs/Learn_web_development/Core/Styling_basics/Advanced_styling_effects)
