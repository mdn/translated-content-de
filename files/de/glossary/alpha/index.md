---
title: Alpha (Alphakanal)
slug: Glossary/Alpha
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{GlossarySidebar}}

Der **Alphakanal** gibt die Opazität eines ({{CSSxRef("&lt;color&gt;")}}) an. Farben werden in digitaler Form als eine Ansammlung von Zahlen dargestellt, die jeweils die Stärke oder Intensitätsstufe einer bestimmten Komponente der Farbe repräsentieren. Jede dieser Komponenten wird als **Kanal** bezeichnet. In einer typischen Bilddatei beschreiben die Farbkanäle, wie viel Rot, Grün und Blau verwendet werden, um die endgültige Farbe zu erzeugen. Um eine Farbe darzustellen, durch die der Hintergrund in gewissem Maße sichtbar ist, wird der Farbe ein vierter Kanal hinzugefügt: der Alphakanal.

Zum Beispiel ist die Farbe `#8921F2` (auch beschrieben als `rgb(137 33 242)` oder `hsl(270 89% 54)`) ein schöner Purpurton. Unten sehen Sie oben links ein kleines Kästchen in dieser Farbe und ein Kästchen in der _gleichen_ Farbe, jedoch mit einem Alphakanal, der auf 50% (oder 0.5) Opazität eingestellt ist, `#8921F280`, wobei `80` das hexadezimale Äquivalent von 50% ist. Diese Farbe wird auch als `rgb(137 33 242 / 50%)` oder `hsl(270 89% 54 / 50%)` beschrieben. Die beiden Kästchen sind über einem Absatz Text gezeichnet.

![Bild, das den Effekt eines Alphakanals auf eine Farbe zeigt.](alpha-channel-example.png)

Wie Sie sehen können, blockiert die Farbe ohne Alphakanal den Hintergrundtext vollständig, während das Kästchen mit dem Alphakanal den Text durch die purpurrote Hintergrundfarbe sichtbar lässt.

## Siehe auch

- [CSS-Farben](/de/docs/Web/CSS/CSS_colors)
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Formats/Image_types)
- [Alpha Compositing](https://en.wikipedia.org/wiki/Alpha_compositing) auf Wikipedia
- [RGBA-Farbmodell](https://en.wikipedia.org/wiki/RGBA_color_model) auf Wikipedia
- [Kanal (digitales Bild)](<https://en.wikipedia.org/wiki/Channel_(digital_image)>) auf Wikipedia
