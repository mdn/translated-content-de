---
title: Anleitung zum Erstellen einer halbtransparenten Box
slug: Learn/CSS/Howto/Make_box_transparent
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

Dieser Leitfaden hilft Ihnen, die verschiedenen Möglichkeiten zu verstehen, um eine Box mithilfe von CSS halbtransparent zu machen.

## Ändern der Opazität der Box und des Inhalts

Wenn Sie möchten, dass die Box und der gesamte Inhalt der Box die Opazität ändern, dann ist die CSS-Eigenschaft {{cssxref("opacity")}} das richtige Werkzeug. Opazität ist das Gegenteil von Transparenz; daher ist `opacity: 1` vollständig undurchsichtig—Sie werden die Box überhaupt nicht durchsehen können.

Ein Wert von `0` würde die Box völlig transparent machen, und Werte dazwischen ändern die Opazität, wobei höhere Werte weniger Transparenz bedeuten.

## Ändern der Opazität nur der Hintergrundfarbe

In vielen Fällen möchten Sie nur die Hintergrundfarbe selbst teilweise transparent machen und den Text und andere Elemente vollständig undurchsichtig lassen. Um dies zu erreichen, verwenden Sie einen [`<color>`](/de/docs/Web/CSS/color_value) Wert, der einen Alpha-Kanal hat, wie `rgb()`. Wie bei `opacity` macht ein Wert von `1` für den Alpha-Kanal die Farbe vollständig undurchsichtig. Daher setzt `background-color: rgb(0 0 0 / 50%);` die Hintergrundfarbe auf 50% Opazität.

Probieren Sie aus, die Opazitäts- und Alpha-Kanal-Werte in den folgenden Beispielen zu ändern, um mehr oder weniger von dem Hintergrundbild hinter der Box zu sehen.

{{EmbedGHLiveSample("css-examples/howto/opacity.html", '100%', 770)}}

> [!NOTE]
> Achten Sie darauf, dass Ihr Text genügend Kontrast zum Hintergrund behält, wenn Sie ein Bild überlagern; andernfalls könnten Sie den Inhalt schwer lesbar machen.

## Siehe auch

- [Anwenden von Farben auf HTML-Elemente mit CSS.](/de/docs/Web/CSS/CSS_colors/Applying_color)
