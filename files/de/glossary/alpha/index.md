---
title: Alpha (Alphakanal)
slug: Glossary/Alpha
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **Alphakanal** gibt die Opazität eines ({{CSSxRef("&lt;color&gt;")}}) an. Farben werden in digitaler Form als Sammlung von Zahlen dargestellt, die jeweils die Stärke oder Intensität einer bestimmten Farbkomponente repräsentieren. Jede dieser Komponenten wird als **Kanal** bezeichnet. In einer typischen Bilddatei beschreiben die Farbkanäle, wie viel Rot, Grün und Blau verwendet werden, um die endgültige Farbe zu erzeugen. Um eine Farbe darzustellen, durch die der Hintergrund bis zu einem gewissen Grad sichtbar ist, wird der Farbe ein vierter Kanal hinzugefügt: der Alphakanal.

Zum Beispiel ist die Farbe `#8921F2` (auch beschrieben als `rgb(137 33 242)` oder `hsl(270 89% 54)`) ein schöner Lilaton. Unten sehen Sie ein kleines Kästchen in dieser Farbe in der oberen linken Ecke und ein Kästchen in der _gleichen_ Farbe, allerdings mit einem Alphakanal, der auf 50% (oder 0,5) Opazität gesetzt ist, `#8921F280`, wobei `80` das hexadezimale Äquivalent von 50% ist. Diese Farbe wird auch als `rgb(137 33 242 / 50%)` oder `hsl(270 89% 54 / 50%)` beschrieben. Die beiden Kästchen liegen auf einem Absatz Text.

![Bild, das die Wirkung eines Alphakanals auf eine Farbe zeigt.](alpha-channel-example.png)

Wie Sie sehen können, blockiert die Farbe ohne Alphakanal den Hintergrundtext vollständig, während das Kästchen mit dem Alphakanal den Text durch die lila Hintergrundfarbe sichtbar lässt.

## Siehe auch

- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors)
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [Anleitung zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Alpha-Compositing](https://en.wikipedia.org/wiki/Alpha_compositing) auf Wikipedia
- [RGBA-Farbmodell](https://en.wikipedia.org/wiki/RGBA_color_model) auf Wikipedia
- [Kanal (Digitalbild)](<https://en.wikipedia.org/wiki/Channel_(digital_image)>) auf Wikipedia
