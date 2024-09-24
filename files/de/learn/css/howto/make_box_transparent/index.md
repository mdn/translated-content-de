---
title: Wie man eine Box halbtransparent macht
slug: Learn/CSS/Howto/Make_box_transparent
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

Diese Anleitung hilft Ihnen zu verstehen, wie man eine Box mit CSS halbtransparent macht.

## Ändern Sie die Deckkraft der Box und des Inhalts

Wenn Sie möchten, dass die Box und der gesamte Inhalt der Box ihre Deckkraft ändern, ist die CSS-{{cssxref("opacity")}}-Eigenschaft das Werkzeug Ihrer Wahl. Deckkraft ist das Gegenteil von Transparenz; daher ist `opacity: 1` vollständig undurchsichtig – Sie werden die Box überhaupt nicht durchsichtig sehen.

Ein Wert von `0` würde die Box komplett transparent machen, und Werte dazwischen ändern die Deckkraft, wobei höhere Werte zu weniger Transparenz führen.

## Ändern der Deckkraft nur der Hintergrundfarbe

In vielen Fällen möchten Sie nur die Hintergrundfarbe teilweise transparent machen und den Text und andere Elemente vollständig undurchsichtig halten. Dazu verwenden Sie einen [`<color>`](/de/docs/Web/CSS/color_value)-Wert, der einen Alphakanal enthält, wie `rgb()`. Wie bei `opacity` macht ein Wert von `1` für den Alphakanal die Farbe vollständig undurchsichtig. Daher wird `background-color: rgb(0 0 0 / 50%);` die Hintergrundfarbe auf 50% Deckkraft setzen.

Versuchen Sie, die Deckkraft- und Alphakanalwerte in den untenstehenden Beispielen zu ändern, um mehr oder weniger vom Hintergrundbild hinter der Box zu sehen.

{{EmbedGHLiveSample("css-examples/howto/opacity.html", '100%', 770)}}

> [!NOTE]
> Achten Sie darauf, dass Ihr Text genügend Kontrast zum Hintergrund behält, wenn Sie ein Bild überlagern; sonst könnte der Inhalt schwer lesbar werden.

## Siehe auch

- [Anwenden von Farben auf HTML-Elemente mit CSS.](/de/docs/Web/CSS/CSS_colors/Applying_color)
