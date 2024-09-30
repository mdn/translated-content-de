---
title: Wie man eine Box halbtransparent macht
slug: Learn/CSS/Howto/Make_box_transparent
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

Dieser Leitfaden hilft Ihnen zu verstehen, wie man eine Box mithilfe von CSS halbtransparent macht.

## Ändern der Deckkraft der Box und des Inhalts

Wenn Sie möchten, dass die Box und ihr gesamter Inhalt die Deckkraft ändern, ist die CSS-Eigenschaft {{cssxref("opacity")}} das richtige Werkzeug. Deckkraft ist das Gegenteil von Transparenz; daher ist `opacity: 1` vollständig undurchsichtig — Sie können die Box überhaupt nicht durchsehen.

Ein Wert von `0` würde die Box vollständig transparent machen, und Werte dazwischen ändern die Deckkraft, wobei höhere Werte weniger Transparenz bedeuten.

## Ändern der Deckkraft nur der Hintergrundfarbe

In vielen Fällen werden Sie nur die Hintergrundfarbe teilweise transparent machen wollen, während der Text und andere Elemente komplett undurchsichtig bleiben. Um dies zu erreichen, verwenden Sie einen [`<color>`](/de/docs/Web/CSS/color_value) Wert, der einen Alpha-Kanal hat, wie z.B. `rgb()`. Wie bei `opacity` macht ein Wert von `1` für den Alpha-Kanal die Farbe vollständig undurchsichtig. Daher wird `background-color: rgb(0 0 0 / 50%);` die Hintergrundfarbe auf 50% Deckkraft setzen.

Versuchen Sie, die Deckkraft- und Alpha-Kanalwerte in den folgenden Beispielen zu ändern, um mehr oder weniger vom Hintergrundbild hinter der Box zu sehen.

{{EmbedGHLiveSample("css-examples/howto/opacity.html", '100%', 770)}}

> [!NOTE]
> Achten Sie darauf, dass Ihr Text genügend Kontrast zum Hintergrund behält, wenn Sie ein Bild überlagern; andernfalls könnte der Inhalt schwer lesbar werden.

## Siehe auch

- [Anwenden von Farbe auf HTML-Elemente mit CSS.](/de/docs/Web/CSS/CSS_colors/Applying_color)
