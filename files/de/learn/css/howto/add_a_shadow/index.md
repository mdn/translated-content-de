---
title: Anleitung zum Hinzufügen eines Schattens zu einem Element
slug: Learn/CSS/Howto/Add_a_shadow
l10n:
  sourceCommit: 40590706f9ab23242bcd8c8966cc683d7d5b18aa
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie jedem Kasten auf Ihrer Seite einen Schatten hinzufügen können.

## Hinzufügen von Kastenschatten

Schatten sind ein häufiges Gestaltungselement, das Elementen dabei helfen kann, auf Ihrer Seite hervorzutreten. In CSS werden Schatten auf den Kästen von Elementen mit der {{cssxref("box-shadow")}}-Eigenschaft erstellt (wenn Sie einen Schatten zum Text selbst hinzufügen möchten, benötigen Sie {{cssxref("text-shadow")}}).

Die `box-shadow`-Eigenschaft erfordert mehrere Werte:

- Die Versetzung auf der x-Achse
- Die Versetzung auf der y-Achse
- Ein Unschärferadius
- Ein Ausbreitungsradius
- Eine Farbe
- Das Schlüsselwort `inset`

Im folgenden Beispiel haben wir die X- und Y-Achsen auf 5px, die Unschärfe auf 10px und die Ausbreitung auf 2px gesetzt. Ich verwende einen halbtransparenten Schwarzton als Farbe. Experimentieren Sie mit den verschiedenen Werten, um zu sehen, wie sie den Schatten verändern.

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
> In diesem Beispiel verwenden wir `inset` nicht, das bedeutet, dass der Schatten der standardmäßige Schlagschatten ist, wobei der Kasten oben auf dem Schatten liegt. Eingefügte Schatten erscheinen innerhalb des Kastens, als ob der Inhalt in die Seite zurückgedrückt würde.

## Siehe auch

- Der [Box-Schatten-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator)
- [Lernen Sie CSS: Erweiterte Gestaltungseffekte.](/de/docs/Learn/CSS/Building_blocks/Advanced_styling_effects)
