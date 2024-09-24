---
title: Alpha (Alphakanal)
slug: Glossary/Alpha
l10n:
  sourceCommit: f7c186696980fee97e72261370d7b5a8c1cd9302
---

{{GlossarySidebar}}

Der **Alphakanal** gibt die Deckkraft eines ({{CSSxRef("&lt;color&gt;")}}) an. Farben werden in digitaler Form als eine Sammlung von Zahlen dargestellt, wobei jede Zahl die Stärke oder Intensität einer bestimmten Farbkomponente repräsentiert. Jede dieser Komponenten wird als **Kanal** bezeichnet. In einer typischen Bilddatei beschreiben die Farbkanäle, wie viel Rot, Grün und Blau verwendet werden, um die endgültige Farbe zu erzeugen. Um eine Farbe darzustellen, durch die der Hintergrund teilweise sichtbar ist, wird der Farbe ein vierter Kanal hinzugefügt: der Alphakanal.

Zum Beispiel ist die Farbe `#8921F2` (auch beschrieben als `rgb(137 33 242)` oder `hsl(270 89% 54)`) ein schöner Lila-Ton. Unten sehen Sie in der oberen linken Ecke ein kleines Kästchen in dieser Farbe und ein Kästchen derselben Farbe, aber mit einem Alphakanal, der auf 50 % (oder 0,5) Deckkraft gesetzt ist, `#8921F280`, wobei `80` dem hexadezimalen Äquivalent von 50 % entspricht. Diese Farbe wird auch beschrieben als `rgb(137 33 242 / 50%)` oder `hsl(270 89% 54 / 50%)`. Die beiden Kästen sind über einem Absatz Text gezeichnet.

![Bild, das die Wirkung eines Alphakanals auf eine Farbe zeigt.](alpha-channel-example.png)

Wie Sie sehen können, blockiert die Farbe ohne Alphakanal den Hintergrundtext vollständig, während das Kästchen mit dem Alphakanal ihn durch die lila Hintergrundfarbe sichtbar lässt.

## Siehe auch

- [CSS-Farben](/de/docs/Web/CSS/CSS_colors)
- [Einführung in CSS-Werte und -Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types)
- [Alphacompositing](https://en.wikipedia.org/wiki/Alpha_compositing) auf Wikipedia
- [RGBA-Farbmodell](https://en.wikipedia.org/wiki/RGBA_color_model) auf Wikipedia
- [Kanal (digitales Bild)](<https://en.wikipedia.org/wiki/Channel_(digital_image)>) auf Wikipedia
