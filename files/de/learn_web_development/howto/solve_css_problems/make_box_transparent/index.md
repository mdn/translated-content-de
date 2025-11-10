---
title: Wie man eine Box halbtransparent macht
short-title: Eine Box halbtransparent machen
slug: Learn_web_development/Howto/Solve_CSS_problems/Make_box_transparent
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieser Leitfaden hilft Ihnen zu verstehen, wie Sie eine Box mithilfe von CSS halbtransparent machen können.

## Ändern der Deckkraft der Box und des Inhalts

Wenn Sie möchten, dass die Box und der gesamte Inhalt der Box die Deckkraft ändern, ist die CSS-Eigenschaft {{cssxref("opacity")}} das passende Werkzeug. Deckkraft ist das Gegenteil von Transparenz; daher ist `opacity: 1` vollständig undurchsichtig – Sie werden die Box überhaupt nicht durchsehen können.

Ein Wert von `0` würde die Box vollständig transparent machen, und Werte dazwischen ändern die Deckkraft, wobei höhere Werte weniger Transparenz ergeben.

## Ändern der Deckkraft nur der Hintergrundfarbe

In vielen Fällen möchten Sie nur die Hintergrundfarbe teilweise transparent machen und gleichzeitig den Text und andere Elemente vollständig undurchsichtig halten. Um dies zu erreichen, verwenden Sie einen [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Wert mit einem Alphakanal, wie `rgb()`. Wie bei `opacity` macht ein Wert von `1` für den Alphakanal die Farbe vollständig undurchsichtig. Daher setzt `background-color: rgb(0 0 0 / 50%);` die Hintergrundfarbe auf 50 % Deckkraft.

Versuchen Sie, die Werte für Deckkraft und Alphakanal in den untenstehenden Beispielen zu ändern, um mehr oder weniger von dem Hintergrundbild hinter der Box zu sehen.

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
> Achten Sie darauf, dass Ihr Text genügend Kontrast zum Hintergrund behält, insbesondere wenn Sie ein Bild überlagern; sonst könnte der Inhalt schwer lesbar werden.

## Siehe auch

- [Anwenden von Farben auf HTML-Elemente mit CSS.](/de/docs/Web/CSS/Guides/Colors/Applying_color)
