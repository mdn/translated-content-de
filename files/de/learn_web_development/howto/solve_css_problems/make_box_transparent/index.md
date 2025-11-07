---
title: Anleitung, wie man eine Box halbtransparent macht
short-title: Eine Box halbtransparent machen
slug: Learn_web_development/Howto/Solve_CSS_problems/Make_box_transparent
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Dieser Leitfaden hilft Ihnen zu verstehen, wie Sie eine Box mithilfe von CSS halbtransparent machen können.

## Ändern der Deckkraft der Box und ihres Inhalts

Wenn Sie möchten, dass die Box und ihr gesamter Inhalt ihre Deckkraft ändern, dann ist die CSS-Eigenschaft {{cssxref("opacity")}} das richtige Werkzeug. Deckkraft ist das Gegenteil von Transparenz; daher ist `opacity: 1` vollständig undurchsichtig – Sie werden überhaupt nicht durch die Box hindurchsehen können.

Ein Wert von `0` würde die Box vollständig transparent machen, und Werte dazwischen verändern die Deckkraft. Höhere Werte bringen weniger Transparenz.

## Änderung der Deckkraft nur der Hintergrundfarbe

In vielen Fällen möchten Sie nur die Hintergrundfarbe teilweise transparent machen und den Text sowie andere Elemente vollständig undurchsichtig belassen. Um dies zu erreichen, verwenden Sie einen [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Wert, der einen Alphakanal hat, wie `rgb()`. Wie bei `opacity` macht ein Wert von `1` für den Alphakanal die Farbe vollständig undurchsichtig. Daher setzt `background-color: rgb(0 0 0 / 50%);` die Hintergrundfarbe auf 50% Deckkraft.

Versuchen Sie, die Werte für die Deckkraft und den Alphakanal in den folgenden Beispielen zu ändern, um mehr oder weniger vom Hintergrundbild hinter der Box zu sehen.

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
> Achten Sie darauf, dass Ihr Text genug Kontrast zum Hintergrund hat, wenn Sie ein Bild überlagern; sonst könnten Sie den Inhalt schwer lesbar machen.

## Siehe auch

- [Farbauftragung auf HTML-Elemente mit CSS.](/de/docs/Web/CSS/CSS_colors/Applying_color)
