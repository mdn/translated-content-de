---
title: Gamut
slug: Glossary/Gamut
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{GlossarySidebar}}

Ein Farb**gamut** ist eine Teilmenge von Farben, die normalerweise die Farben repräsentiert, die ein Display oder ein Druckgerät darstellen kann.

Kein Display oder Drucker kann das gesamte Farbspektrum darstellen, das das menschliche Auge wahrnehmen kann. Der Geräte-_Gamut_ stellt die Menge dar, die es unterstützt.

Traditionell wurde in der Webentwicklung nur der _[sRGB](https://en.wikipedia.org/wiki/SRGB)_ (Standard Red-Green-Blue) Gamut verwendet, bei dem jede Farbe mit drei Bytes beschrieben wird, eines für jede Primärfarbe. "Breitfarbige" Monitore und professionelle Drucker unterstützen jedoch einen größeren Farbbereich, der mit diesem Gamut nicht dargestellt werden kann.

Seit 2021 bieten Browser Funktionen für andere Gamuts an, wie _[P3](https://en.wikipedia.org/wiki/DCI-P3)_, das häufig in der Filmindustrie verwendet wird, und _[rec2020](https://en.wikipedia.org/wiki/Rec._2020)_.

Entwickler können unterschiedliche Farbsätze für Geräte definieren, die größere Gamuts unterstützen, indem sie das [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) [Media-Feature](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwenden. Sie können Farben außerhalb des RGB-Gamuts mithilfe spezifischer CSS-Funktionen wie [`lch()`](/de/docs/Web/CSS/color_value/lch) für das LCH-Zylinderkoordinatensystem oder [`lab()`](/de/docs/Web/CSS/color_value/lab) für das Lab-Koordinatensystem beschreiben.

## Siehe auch

- [_Gamut_](https://en.wikipedia.org/wiki/Gamut) auf _Wikipedia_.
