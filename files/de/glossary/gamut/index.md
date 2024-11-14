---
title: Gamut
slug: Glossary/Gamut
l10n:
  sourceCommit: c7416fd067774fc2583944d10801b56672b56631
---

{{GlossarySidebar}}

Ein Farbumfang (**gamut**) ist eine Teilmenge von Farben und repräsentiert normalerweise die Farben, die ein Display oder ein Druckgerät darstellen kann.

Kein Display oder Drucker kann das gesamte Spektrum an Farben darstellen, die das menschliche Auge wahrnehmen kann. Der Geräte-_Gamut_ stellt den Satz dar, den es unterstützt.

Traditionell wurde in der Webentwicklung nur der _[sRGB](https://en.wikipedia.org/wiki/SRGB)_ (Standard Red-Green-Blue) Gamut verwendet, bei dem jede Farbe durch drei Bytes beschrieben wird, eines für jede Primärfarbe. Allerdings unterstützen "Wide-Color"-Monitore und professionelle Drucker einen größeren Farbumfang, der mit diesem Gamut nicht dargestellt werden kann.

Seit 2021 bieten Browser Funktionalitäten für andere Gamuts an, wie etwa _{{Glossary("Color_space#display-p3", "Display-P3")}}_, das in der Filmindustrie weit verbreitet ist, und _{{Glossary("Color_space#rec2020", "rec2020")}}_.

Entwickler können verschiedene Farbsätze für Geräte definieren, die größere Gamuts unterstützen, indem sie die [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) [Media-Feature](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwenden. Sie können Farben außerhalb des RGB-Gamuts mit spezifischen CSS-Funktionen wie [`lch()`](/de/docs/Web/CSS/color_value/lch) für das LCH-Zylinderkoordinatensystem oder [`lab()`](/de/docs/Web/CSS/color_value/lab) für das Lab-Koordinatensystem beschreiben.

## Siehe auch

- [_Gamut_](https://en.wikipedia.org/wiki/Gamut) auf _Wikipedia_.
