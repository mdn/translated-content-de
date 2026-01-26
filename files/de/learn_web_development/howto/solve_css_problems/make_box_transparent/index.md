---
title: Wie man eine Box halbtransparent macht
short-title: Eine Box halbtransparent machen
slug: Learn_web_development/Howto/Solve_CSS_problems/Make_box_transparent
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

Dieser Leitfaden hilft Ihnen, die Methoden zu verstehen, um mit CSS eine Box halbtransparent zu gestalten.

## Ändern der Opazität der Box und Inhalte

Wenn Sie die Opazität der Box und aller Inhalte darin ändern möchten, dann ist die CSS-Eigenschaft {{cssxref("opacity")}} das richtige Werkzeug. Opazität ist das Gegenteil von Transparenz; daher ist `opacity: 1` völlig undurchsichtig—Sie werden die Box überhaupt nicht durchsehen können.

Die Verwendung eines Wertes von `0` würde die Box völlig transparent machen, und Werte dazwischen ändern die Opazität, wobei höhere Werte weniger Transparenz bieten.

## Nur die Opazität der Hintergrundfarbe ändern

In vielen Fällen möchten Sie nur die Hintergrundfarbe teilweise transparent machen und den Text sowie andere Elemente völlig undurchsichtig lassen. Um dies zu erreichen, verwenden Sie einen {{cssxref("&lt;color&gt;")}}-Wert, der einen Alphakanal hat, wie `rgb()`. Wie bei `opacity` macht ein Wert von `1` für den Alphakanal die Farbe völlig undurchsichtig. Daher setzt `background-color: rgb(0 0 0 / 50%);` die Hintergrundfarbe auf 50% Opazität.

Versuchen Sie, die Opazitäts- und Alphakanal-Werte in den untenstehenden Beispielen zu ändern, um mehr oder weniger vom Hintergrundbild hinter der Box zu sehen.

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
> Achten Sie darauf, dass Ihr Text genügend Kontrast zum Hintergrund behält, insbesondere wenn Sie ein Bild überlagern; andernfalls könnte der Inhalt schwer lesbar werden.

## Siehe auch

- [Farbe auf HTML-Elemente anwenden mit CSS.](/de/docs/Web/CSS/Guides/Colors/Applying_color)
