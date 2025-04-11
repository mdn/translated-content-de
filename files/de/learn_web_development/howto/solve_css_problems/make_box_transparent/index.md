---
title: "Anleitung: Eine Box halbtransparent machen"
slug: Learn_web_development/Howto/Solve_CSS_problems/Make_box_transparent
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Dieser Leitfaden hilft Ihnen, die Methoden zu verstehen, mit denen Sie eine Box mithilfe von CSS halbtransparent machen können.

## Die Deckkraft der Box und des Inhalts ändern

Wenn Sie möchten, dass die Box und ihr gesamter Inhalt die Deckkraft ändern, ist die CSS-Eigenschaft {{cssxref("opacity")}} das Werkzeug der Wahl. Deckkraft ist das Gegenteil von Transparenz; daher ist `opacity: 1` vollständig undurchsichtig – Sie können die Box überhaupt nicht durchsehen.

Ein Wert von `0` würde die Box komplett transparent machen, und Werte dazwischen ändern die Deckkraft, wobei höhere Werte weniger Transparenz bedeuten.

## Nur die Deckkraft der Hintergrundfarbe ändern

In vielen Fällen möchten Sie nur, dass die Hintergrundfarbe selbst teilweise transparent ist, wobei der Text und andere Elemente vollständig undurchsichtig bleiben. Um dies zu erreichen, verwenden Sie einen [`<color>`](/de/docs/Web/CSS/color_value) Wert, der einen Alphakanal enthält, wie zum Beispiel `rgb()`. Wie bei `opacity` macht ein Wert von `1` für den Alphakanal die Farbe vollständig undurchsichtig. Daher setzt `background-color: rgb(0 0 0 / 50%);` die Hintergrundfarbe auf eine Deckkraft von 50%.

Versuchen Sie, die Werte für Deckkraft und Alphakanal in den untenstehenden Beispielen zu ändern, um mehr oder weniger des Hintergrundbildes hinter der Box zu sehen.

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
> Achten Sie darauf, dass Ihr Text genügend Kontrast zum Hintergrund behält in Fällen, in denen Sie ein Bild überlagern; andernfalls wird der Inhalt schwer lesbar.

## Siehe auch

- [Farben auf HTML-Elemente mit CSS anwenden.](/de/docs/Web/CSS/CSS_colors/Applying_color)
