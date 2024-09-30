---
title: Alpha (Alpha-Kanal)
slug: Glossary/Alpha
l10n:
  sourceCommit: f7c186696980fee97e72261370d7b5a8c1cd9302
---

{{GlossarySidebar}}

Der **Alpha-Kanal** bestimmt die Opazität eines ({{CSSxRef("&lt;color&gt;")}}). Farben werden in digitaler Form als Sammlung von Zahlen dargestellt, wobei jede Zahl die Stärke oder Intensität einer bestimmten Farbkomponente repräsentiert. Jede dieser Komponenten wird als **Kanal** bezeichnet. In einer typischen Bilddatei beschreiben die Farbigkeitskanäle, wie viel Rot, Grün und Blau verwendet werden, um die endgültige Farbe zu erzeugen. Um eine Farbe darzustellen, durch die der Hintergrund teilweise sichtbar ist, wird der Farbe ein vierter Kanal hinzugefügt: der Alpha-Kanal.

Zum Beispiel ist die Farbe `#8921F2` (auch beschrieben als `rgb(137 33 242)` oder `hsl(270 89% 54)`) ein schöner Lilaton. Unten sehen Sie ein kleines Kästchen dieser Farbe in der oberen linken Ecke und ein Kästchen derselben Farbe, aber mit einem Alpha-Kanal, der auf 50% (oder 0,5) Opazität gesetzt ist, `#8921F280`, wobei `80` die hexadezimale Entsprechung von 50% ist. Diese Farbe wird auch beschrieben als `rgb(137 33 242 / 50%)` oder `hsl(270 89% 54 / 50%)`. Die beiden Kästchen sind auf einem Textabsatz gezeichnet.

![Bild zeigt den Effekt eines Alpha-Kanals auf eine Farbe.](alpha-channel-example.png)

Wie Sie sehen können, blockiert die Farbe ohne Alpha-Kanal den Hintergrundtext vollständig, während das Kästchen mit dem Alpha-Kanal es ermöglicht, den Text durch die lila Hintergrundfarbe zu sehen.

## Siehe auch

- [CSS-Farben](/de/docs/Web/CSS/CSS_colors)
- [Einführung zu CSS-Werten und -Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types)
- [Alpha-Komposita] auf Wikipedia(https://en.wikipedia.org/wiki/Alpha_compositing)
- [RGBA-Farbmodell](https://en.wikipedia.org/wiki/RGBA_color_model) auf Wikipedia
- [Kanal (digitales Bild)](<https://en.wikipedia.org/wiki/Channel_(digital_image)>) auf Wikipedia
