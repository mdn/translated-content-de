---
title: Alpha (Alpha-Kanal)
slug: Glossary/Alpha
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

Der **Alpha-Kanal** bestimmt die Opazität eines {{CSSxRef("&lt;color&gt;")}}. Farben werden digital als eine Sammlung von Zahlen dargestellt, wobei jede Zahl die Stärke oder Intensität einer bestimmten Komponente der Farbe repräsentiert. Jede dieser Komponenten wird als **Kanal** bezeichnet. In einer typischen Bilddatei beschreiben die Farbkanäle, wie viel Rot, Grün und Blau verwendet werden, um die endgültige Farbe zu erzeugen. Um eine Farbe darzustellen, durch die der Hintergrund teilweise sichtbar ist, wird der Farbe ein vierter Kanal hinzugefügt: der Alpha-Kanal.

Zum Beispiel ist die Farbe `#8921F2` (auch beschrieben als `rgb(137 33 242)` oder `hsl(270 89% 54)`) ein schöner Lilaton. Unten sehen Sie ein kleines Kästchen in dieser Farbe in der oberen linken Ecke und ein Kästchen in der _gleichen_ Farbe, jedoch mit einem Alpha-Kanal, der auf 50% (oder 0,5) Opazität eingestellt ist, `#8921F280`, wobei `80` das hexadezimale Äquivalent von 50% ist. Diese Farbe wird auch beschrieben als `rgb(137 33 242 / 50%)` oder `hsl(270 89% 54 / 50%)`. Die beiden Kästchen sind über einem Absatz Text gezeichnet.

![Bild zeigt die Wirkung eines Alpha-Kanals auf eine Farbe.](alpha-channel-example.png)

Wie Sie sehen können, blockiert die Farbe ohne Alpha-Kanal komplett den Hintergrundtext, während das Kästchen mit dem Alpha-Kanal ihn durch die lila Hintergrundfarbe sichtbar lässt.

## Siehe auch

- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors)
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Alpha Compositing](https://en.wikipedia.org/wiki/Alpha_compositing) auf Wikipedia
- [RGBA-Farbmodell](https://en.wikipedia.org/wiki/RGBA_color_model) auf Wikipedia
- [Kanal (digitales Bild)](<https://en.wikipedia.org/wiki/Channel_(digital_image)>) auf Wikipedia
