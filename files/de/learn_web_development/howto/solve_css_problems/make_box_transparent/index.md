---
title: "Anleitung: Eine Box halbtransparent machen"
short-title: Eine Box halbtransparent machen
slug: Learn_web_development/Howto/Solve_CSS_problems/Make_box_transparent
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

Dieser Leitfaden hilft Ihnen zu verstehen, wie Sie eine Box mithilfe von CSS halbtransparent machen können.

## Die Opazität der Box und des Inhalts ändern

Wenn Sie möchten, dass die Box und alle Inhalte der Box ihre Opazität ändern, dann ist die CSS-{{cssxref("opacity")}}-Eigenschaft das geeignete Werkzeug. Opazität ist das Gegenteil von Transparenz; daher ist `opacity: 1` vollständig opak — Sie werden überhaupt nicht durch die Box hindurchsehen.

Ein Wert von `0` würde die Box vollständig transparent machen, und Werte dazwischen ändern die Opazität, wobei höhere Werte weniger Transparenz bieten.

## Nur die Opazität der Hintergrundfarbe ändern

In vielen Fällen möchten Sie möglicherweise nur die Hintergrundfarbe teilweise transparent machen und den Text und andere Elemente vollständig opak halten. Um dies zu erreichen, verwenden Sie einen [`<color>`](/de/docs/Web/CSS/color_value)-Wert mit einem Alphakanal, wie `rgb()`. Wie auch bei `opacity` macht ein Wert von `1` für den Alphakanal die Farbe vollständig opak. Daher setzt `background-color: rgb(0 0 0 / 50%);` die Hintergrundfarbe auf 50% Opazität.

Versuchen Sie, die Opazitäts- und Alphakanalwerte in den untenstehenden Beispielen zu ändern, um mehr oder weniger vom Hintergrundbild hinter der Box zu sehen.

```html live-sample___opacity
<div class="wrapper">
  <div class="box box1">This box uses opacity</div>
  <div class="box box2">
    This box has a background color with an alpha channel
  </div>
</div>
```

```css hidden live-sample___opacity
body {
  font-family: sans-serif;
}

.wrapper {
  height: 200px;
  display: flex;
  gap: 20px;
  background-image: url("https://mdn.github.io/shared-assets/images/examples/balloon.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px;
}

.box {
  flex: 1;
  border: 5px solid #000;
  border-radius: 0.5em;
  font-size: 140%;
  padding: 20px;
}
```

```css live-sample___opacity
.box1 {
  background-color: #000;
  color: #fff;
  opacity: 0.5;
}

.box2 {
  background-color: rgb(0 0 0 / 0.5);
  color: #fff;
}
```

{{EmbedLiveSample("opacity", "", "280px")}}

> [!NOTE]
> Achten Sie darauf, dass Ihr Text ausreichend Kontrast zum Hintergrund hat, wenn Sie ein Bild überlagern; andernfalls könnte der Inhalt schwer lesbar werden.

## Siehe auch

- [Farben auf HTML-Elemente mit CSS anwenden.](/de/docs/Web/CSS/CSS_colors/Applying_color)
