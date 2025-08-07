---
title: So machen Sie einen Kasten halbtransparent
short-title: Einen Kasten halbtransparent machen
slug: Learn_web_development/Howto/Solve_CSS_problems/Make_box_transparent
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

Dieser Leitfaden wird Ihnen helfen, die Methoden zu verstehen, mit denen Sie einen Kasten mit CSS halbtransparent machen können.

## Die Deckkraft des Kastens und des Inhalts ändern

Wenn Sie möchten, dass der Kasten und alle Inhalte im Kasten die Deckkraft ändern, ist die CSS-Eigenschaft {{cssxref("opacity")}} das richtige Werkzeug. Opazität ist das Gegenteil von Transparenz; daher ist `opacity: 1` vollständig undurchsichtig – Sie werden überhaupt nicht durch den Kasten sehen können.

Ein Wert von `0` würde den Kasten komplett transparent machen, und Werte dazwischen werden die Deckkraft ändern, wobei höhere Werte weniger Transparenz bieten.

## Nur die Deckkraft der Hintergrundfarbe ändern

In vielen Fällen möchten Sie nur die Hintergrundfarbe teilweise transparent machen, während der Text und andere Elemente vollständig undurchsichtig bleiben. Um dies zu erreichen, verwenden Sie einen [`<color>`](/de/docs/Web/CSS/color_value)-Wert, der einen Alphakanal hat, wie z.B. `rgb()`. Wie bei `opacity` macht ein Wert von `1` für den Alphakanal die Farbe vollständig undurchsichtig. Daher wird `background-color: rgb(0 0 0 / 50%);` die Hintergrundfarbe auf 50% Deckkraft setzen.

Versuchen Sie, die Werte für die Deckkraft und den Alphakanal in den folgenden Beispielen zu ändern, um mehr oder weniger vom Hintergrundbild hinter dem Kasten zu sehen.

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
  border: 5px solid black;
  border-radius: 0.5em;
  font-size: 140%;
  padding: 20px;
}
```

```css live-sample___opacity
.box1 {
  background-color: black;
  color: white;
  opacity: 0.5;
}

.box2 {
  background-color: rgb(0 0 0 / 0.5);
  color: white;
}
```

{{EmbedLiveSample("opacity", "", "280px")}}

> [!NOTE]
> Achten Sie darauf, dass Ihr Text genügend Kontrast mit dem Hintergrund behält, insbesondere wenn Sie ein Bild überlagern; andernfalls könnte der Inhalt schwer lesbar werden.

## Siehe auch

- [Farbe auf HTML-Elemente mit CSS anwenden.](/de/docs/Web/CSS/CSS_colors/Applying_color)
