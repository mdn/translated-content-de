---
title: Alpha (Alpha-Kanal)
slug: Glossary/Alpha
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{GlossarySidebar}}

Der **Alpha-Kanal** bestimmt die Opazität eines ({{CSSxRef("&lt;color&gt;")}}). Farben werden digital als Sammlung von Zahlen dargestellt, wobei jede Zahl die Stärke oder Intensität einer bestimmten Farbkomponente repräsentiert. Jede dieser Komponenten wird als **Kanal** bezeichnet. In einer typischen Bilddatei beschreiben die Farbkanäle, wie viel Rot, Grün und Blau verwendet werden, um die endgültige Farbe zu bilden. Um eine Farbe darzustellen, durch die der Hintergrund teilweise sichtbar ist, wird der Farbe ein vierter Kanal hinzugefügt: der Alpha-Kanal.

Zum Beispiel ist die Farbe `#8921F2` (auch als `rgb(137 33 242)` oder `hsl(270 89% 54)` beschrieben) ein schöner Violettton. Unten sehen Sie eine kleine Box dieser Farbe in der oberen linken Ecke und eine Box derselben Farbe, aber mit einem Alpha-Kanal, der auf 50 % (oder 0,5) Opazität gesetzt ist, `#8921F280`, wobei `80` das hexadezimale Äquivalent von 50 % ist. Diese Farbe wird auch als `rgb(137 33 242 / 50%)` oder `hsl(270 89% 54 / 50%)` beschrieben. Die beiden Boxen sind über einem Absatz Text gezeichnet.

![Bild, das die Wirkung eines Alpha-Kanals auf eine Farbe zeigt.](alpha-channel-example.png)

Wie Sie sehen können, blockiert die Farbe ohne Alpha-Kanal den Hintergrundtext vollständig, während die Box mit dem Alpha-Kanal es ermöglicht, den Text durch die violette Hintergrundfarbe sichtbar zu lassen.

## Siehe auch

- [CSS-Farben](/de/docs/Web/CSS/CSS_colors)
- [Erlernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Alpha-Kompositing](https://en.wikipedia.org/wiki/Alpha_compositing) auf Wikipedia
- [RGBA-Farbmodell](https://en.wikipedia.org/wiki/RGBA_color_model) auf Wikipedia
- [Kanal (digitales Bild)](<https://en.wikipedia.org/wiki/Channel_(digital_image)>) auf Wikipedia
