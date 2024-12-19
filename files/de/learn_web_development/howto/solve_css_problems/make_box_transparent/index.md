---
title: "Anleitung: Wie man eine Box halbtransparent macht"
slug: Learn_web_development/Howto/Solve_CSS_problems/Make_box_transparent
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Dieser Leitfaden hilft Ihnen, die Methoden zu verstehen, wie man mit CSS eine Box halbtransparent macht.

## Ändern der Opazität der Box und des Inhalts

Wenn Sie möchten, dass die Box und alle ihre Inhalte die Opazität ändern, dann ist die CSS-Eigenschaft {{cssxref("opacity")}} das richtige Werkzeug. Opazität ist das Gegenteil von Transparenz; daher ist `opacity: 1` vollständig opak—Sie werden die Box überhaupt nicht durchsehen können.

Bei Verwendung eines Wertes von `0` wird die Box vollständig transparent, und Werte zwischen den beiden ändern die Opazität, wobei höhere Werte weniger Transparenz bedeuten.

## Nur die Opazität der Hintergrundfarbe ändern

In vielen Fällen möchten Sie nur die Hintergrundfarbe teilweise transparent machen und den Text und andere Elemente vollständig opak lassen. Um dies zu erreichen, verwenden Sie einen [`<color>`](/de/docs/Web/CSS/color_value)-Wert, der einen Alpha-Kanal hat, wie zum Beispiel `rgb()`. Wie bei `opacity` macht ein Wert von `1` für den Alpha-Kanal die Farbe vollständig opak. Daher setzt `background-color: rgb(0 0 0 / 50%);` die Hintergrundfarbe auf 50% Opazität.

Versuchen Sie, die Opazitäts- und Alpha-Kanalwerte in den untenstehenden Beispielen zu ändern, um mehr oder weniger von dem Hintergrundbild hinter der Box zu sehen.

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
> Achten Sie darauf, dass Ihr Text genügend Kontrast zum Hintergrund beibehält, insbesondere wenn Sie ein Bild überlagern; andernfalls können Sie den Inhalt schwer lesbar machen.

## Siehe auch

- [Anwenden von Farbe auf HTML-Elemente mit CSS.](/de/docs/Web/CSS/CSS_colors/Applying_color)
