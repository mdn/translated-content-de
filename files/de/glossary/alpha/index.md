---
title: Alpha (Alphakanal)
slug: Glossary/Alpha
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Der **Alphakanal** gibt die Opazität eines ({{CSSxRef("&lt;color&gt;")}}) an. Farben werden in digitaler Form als eine Sammlung von Zahlen dargestellt, wobei jede Zahl die Stärke oder Intensität eines bestimmten Farbanteils repräsentiert. Jeder dieser Anteile wird als **Kanal** bezeichnet. In einer typischen Bilddatei beschreiben die Farbkanäle, wie viel Rot, Grün und Blau zur Erstellung der endgültigen Farbe verwendet werden. Um eine Farbe darzustellen, durch die der Hintergrund in gewissem Maße sichtbar ist, wird der Farbe ein vierter Kanal hinzugefügt: der Alphakanal.

Zum Beispiel ist die Farbe `#8921F2` (auch beschrieben als `rgb(137 33 242)` oder `hsl(270 89% 54)`) eine schöne Schattierung von Lila. Unten sehen Sie ein kleines Kästchen mit dieser Farbe in der oberen linken Ecke und ein Kästchen mit der _gleichen_ Farbe, jedoch mit einem Alphakanal, der auf 50% (oder 0,5) Opazität gesetzt ist, `#8921F280`, wobei `80` das hexadezimale Äquivalent von 50% ist. Diese Farbe wird auch als `rgb(137 33 242 / 50%)` oder `hsl(270 89% 54 / 50%)` beschrieben. Die beiden Kästchen sind über einem Textabschnitt platziert.

![Bild zeigt die Wirkung eines Alphakanals auf eine Farbe.](alpha-channel-example.png)

Wie Sie sehen können, blockiert die Farbe ohne Alphakanal den Hintergrundtext vollständig, während das Kästchen mit dem Alphakanal den Text durch die lila Hintergrundfarbe hindurch sichtbar lässt.

## Siehe auch

- [CSS-Farben](/de/docs/Web/CSS/CSS_colors)
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Alpha Compositing](https://en.wikipedia.org/wiki/Alpha_compositing) auf Wikipedia
- [RGBA-Farbmodell](https://en.wikipedia.org/wiki/RGBA_color_model) auf Wikipedia
- [Kanal (Digitalbild)](<https://en.wikipedia.org/wiki/Channel_(digital_image)>) auf Wikipedia
