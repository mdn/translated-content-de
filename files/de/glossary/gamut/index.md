---
title: Gamut
slug: Glossary/Gamut
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein Farb**gamut** ist eine Teilmenge von Farben, die normalerweise die Farben repräsentiert, die ein Anzeigegerät oder ein Drucker darstellen kann.

Kein Anzeigegerät oder Drucker kann das gesamte Spektrum von Farben darstellen, die das menschliche Auge wahrnehmen kann. Der Geräte*Gamut* repräsentiert die Menge, die es unterstützt.

Traditionell wurde in der Webentwicklung nur der _[sRGB](https://en.wikipedia.org/wiki/SRGB)_ (Standard Red-Green-Blue) Gamut verwendet, bei dem jede Farbe mit drei Bytes beschrieben wird, eins für jede Primärfarbe. "Wide-Color" Monitore und professionelle Drucker unterstützen jedoch eine breitere Palette von Farben, die mit diesem Gamut nicht dargestellt werden können.

Seit 2021 haben Browser begonnen, Funktionalitäten für andere Gamuts bereitzustellen, wie etwa _{{Glossary("Color_space#display-p3", "Display-P3")}}_, das in der Filmindustrie weit verbreitet ist, und _{{Glossary("Color_space#rec2020", "rec2020")}}_.

Entwickler können für Geräte, die größere Gamuts unterstützen, verschiedene Farbsets definieren, indem sie die [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) [Media-Feature](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwenden. Sie können Farben außerhalb des RGB-Gamuts mit speziellen CSS-Funktionen beschreiben, wie zum Beispiel [`lch()`](/de/docs/Web/CSS/color_value/lch) für das LCH-Zylindrische-Koordinatensystem oder [`lab()`](/de/docs/Web/CSS/color_value/lab) für das Lab-Koordinatensystem.

## Siehe auch

- [_Gamut_](https://en.wikipedia.org/wiki/Gamut) auf _Wikipedia_.
