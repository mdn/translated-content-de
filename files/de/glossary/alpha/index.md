---
title: Alpha (Alpha-Kanal)
slug: Glossary/Alpha
l10n:
  sourceCommit: f7c186696980fee97e72261370d7b5a8c1cd9302
---

{{GlossarySidebar}}

Der **Alpha-Kanal** bestimmt die Deckkraft eines ({{CSSxRef("&lt;color&gt;")}}). Farben werden in digitaler Form als eine Sammlung von Zahlen dargestellt, wobei jede Zahl die Stärke oder Intensität einer bestimmten Farbkomponente repräsentiert. Jede dieser Komponenten wird als **Kanal** bezeichnet. In einer typischen Bilddatei beschreiben die Farbkanäle, wie viel Rot, Grün und Blau verwendet werden, um die endgültige Farbe zu erzeugen. Um eine Farbe darzustellen, durch die der Hintergrund teilweise zu sehen ist, wird der Farbe ein vierter Kanal hinzugefügt: der Alpha-Kanal.

Zum Beispiel ist die Farbe `#8921F2` (auch beschrieben als `rgb(137 33 242)` oder `hsl(270 89% 54)`) ein angenehmer Lilaton. Unten sehen Sie eine kleine Box in dieser Farbe in der oberen linken Ecke und eine Box in der _gleichen_ Farbe, aber mit einem Alpha-Kanal, der auf 50% (oder 0,5) Deckkraft eingestellt ist, `#8921F280`, wobei `80` das hexadezimale Äquivalent von 50% ist. Diese Farbe wird auch als `rgb(137 33 242 / 50%)` oder `hsl(270 89% 54 / 50%)` beschrieben. Die beiden Boxen sind über einem Absatz Text gezeichnet.

![Bild, das die Wirkung eines Alpha-Kanals auf eine Farbe zeigt.](alpha-channel-example.png)

Wie Sie sehen können, blockiert die Farbe ohne Alpha-Kanal den darunterliegenden Text vollständig, während die Box mit dem Alpha-Kanal den Text durch den lila Hintergrund sichtbar lässt.

## Siehe auch

- [CSS-Farben](/de/docs/Web/CSS/CSS_colors)
- [Einführung in CSS-Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types)
- [Alpha Compositing](https://en.wikipedia.org/wiki/Alpha_compositing) auf Wikipedia
- [RGBA-Farbmodell](https://en.wikipedia.org/wiki/RGBA_color_model) auf Wikipedia
- [Kanal (digitales Bild)](<https://en.wikipedia.org/wiki/Channel_(digital_image)>) auf Wikipedia
