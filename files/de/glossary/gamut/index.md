---
title: Gamut
slug: Glossary/Gamut
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Ein Farb**gamut** ist eine Untermenge von Farben, die normalerweise die Farben repräsentiert, die ein Display oder ein Druckgerät darstellen kann.

Kein Display oder Drucker kann das gesamte Spektrum von Farben darstellen, die das menschliche Auge wahrnehmen kann. Der _Gamut_ eines Geräts repräsentiert den von ihm unterstützten Bereich.

Traditionell wurde in der Webentwicklung nur der _[sRGB](https://en.wikipedia.org/wiki/SRGB)_ (Standard Rot-Grün-Blau) Gamut verwendet, bei dem jede Farbe mit drei Bytes beschrieben wird, jeweils eines für jede Primärfarbe. "Wide-Color"-Monitore und professionelle Drucker unterstützen jedoch einen größeren Farbbereich, der mit diesem Gamut nicht dargestellt werden kann.

Seit 2021 bieten Browser Funktionalitäten für andere Gamuts an, wie _{{Glossary("Color_space#display-p3", "Display-P3")}}_, der häufig in der Filmindustrie verwendet wird, und _{{Glossary("Color_space#rec2020", "rec2020")}}_.

Entwickler können verschiedene Farbsets für Geräte definieren, die größere Gamuts unterstützen, indem sie das [`color-gamut`](/de/docs/Web/CSS/Reference/At-rules/@media/color-gamut) [Media-Feature](/de/docs/Web/CSS/Guides/Media_queries/Using) verwenden. Sie können Farben außerhalb des RGB-Gamuts mithilfe spezifischer CSS-Funktionen wie [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch) für das LCH Zylinderkoordinatensystem oder [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab) für das Lab-Koordinatensystem beschreiben.

## Siehe auch

- [_Gamut_](https://en.wikipedia.org/wiki/Gamut) auf _Wikipedia_.
