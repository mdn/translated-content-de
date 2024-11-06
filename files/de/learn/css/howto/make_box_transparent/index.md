---
title: Anleitung zur Erstellung eines halbtransparenten Kastens
slug: Learn/CSS/Howto/Make_box_transparent
l10n:
  sourceCommit: 40590706f9ab23242bcd8c8966cc683d7d5b18aa
---

{{LearnSidebar}}

Dieser Leitfaden hilft Ihnen, die Methoden zu verstehen, wie man mit CSS einen Kasten halbtransparent macht.

## Ändern der Opazität des Kastens und Inhalts

Wenn Sie möchten, dass der Kasten und alle Inhalte des Kastens die Opazität ändern, dann ist die CSS-Eigenschaft {{cssxref("opacity")}} das Werkzeug, das Sie benötigen. Opazität ist das Gegenteil von Transparenz; daher ist `opacity: 1` vollständig undurchsichtig—Sie werden überhaupt nicht durch den Kasten sehen.

Ein Wert von `0` würde den Kasten vollständig transparent machen, und Werte dazwischen ändern die Opazität, wobei höhere Werte weniger Transparenz bedeuten.

## Ändern der Opazität nur der Hintergrundfarbe

In vielen Fällen möchten Sie nur die Hintergrundfarbe teilweise transparent machen und den Text sowie andere Elemente vollständig undurchsichtig lassen. Um dies zu erreichen, verwenden Sie einen [`<color>`](/de/docs/Web/CSS/color_value) Wert mit einem Alpha-Kanal, wie z.B. `rgb()`. Wie bei `opacity` macht ein Wert von `1` für den Alpha-Kanal die Farbe vollständig undurchsichtig. Daher wird `background-color: rgb(0 0 0 / 50%);` die Hintergrundfarbe auf 50% Opazität setzen.

Versuchen Sie, die Opazität und die Alpha-Kanal-Werte in den untenstehenden Beispielen zu ändern, um mehr oder weniger vom Hintergrundbild hinter dem Kasten zu sehen.

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
> Achten Sie darauf, dass Ihr Text genügend Kontrast zum Hintergrund behält, wenn Sie ein Bild überlagern; andernfalls kann der Inhalt schwer lesbar werden.

## Siehe auch

- [Farbe auf HTML-Elemente mit CSS anwenden.](/de/docs/Web/CSS/CSS_colors/Applying_color)
