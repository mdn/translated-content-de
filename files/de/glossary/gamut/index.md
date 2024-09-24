---
title: Gamut (Farbraum)
slug: Glossary/Gamut
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{GlossarySidebar}}

Ein **Gamut** ist ein Teilbereich von Farben, der üblicherweise die Farben darstellt, die ein Anzeigegerät oder ein Druckgerät darstellen kann.

Kein Anzeigegerät oder Drucker kann den gesamten Farbbereich darstellen, den das menschliche Auge wahrnehmen kann. Der Gerätegamut stellt das dar, was es unterstützt.

Traditionell wurde in der Webentwicklung nur der _[sRGB](https://en.wikipedia.org/wiki/SRGB)_-Farbraum (Standard Rot-Grün-Blau) verwendet, bei dem jede Farbe mit drei Bytes beschrieben wird, eines für jede Primärfarbe. "Wide-Color"-Monitore und professionelle Drucker unterstützen jedoch einen breiteren Farbbereich, der mit diesem Farbraum nicht dargestellt werden kann.

Seit 2021 bieten Browser Funktionen für andere Farbengamuts wie _[P3](https://en.wikipedia.org/wiki/DCI-P3)_, der in der Filmindustrie weit verbreitet ist, und _[rec2020](https://en.wikipedia.org/wiki/Rec._2020)_.

Entwickler können verschiedene Farbsets für Geräte definieren, die größere Gamuts unterstützen, indem sie das [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) [Medienmerkmal](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwenden. Sie können Farben außerhalb des RGB-Gamuts beschreiben, indem sie spezifische CSS-Funktionen wie [`lch()`](/de/docs/Web/CSS/color_value/lch) für das LCH-Zylinderkoordinatensystem oder [`lab()`](/de/docs/Web/CSS/color_value/lab) für das Lab-Koordinatensystem nutzen.

## Siehe auch

- [_Gamut_](https://en.wikipedia.org/wiki/Gamut) auf _Wikipedia_.
