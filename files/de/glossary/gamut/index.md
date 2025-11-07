---
title: Gamut
slug: Glossary/Gamut
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Ein **Gamut** von Farben ist eine Teilmenge von Farben, die üblicherweise die Farben darstellt, die ein Bildschirm- oder Druckgerät darstellen kann.

Kein Bildschirm oder Drucker kann das gesamte Farbspektrum darstellen, das das menschliche Auge wahrnehmen kann. Der _Gamut_ des Geräts repräsentiert die Menge, die es unterstützt.

Traditionell wurde in der Webentwicklung nur der _[sRGB](https://en.wikipedia.org/wiki/SRGB)_ (Standard Red-Green-Blue) Gamut verwendet, bei dem jede Farbe mit drei Bytes beschrieben wird, eines für jede Primärfarbe. Allerdings unterstützen "Wide-Color"-Monitore und professionelle Drucker einen größeren Farbraum, der mit diesem Gamut nicht dargestellt werden kann.

Seit 2021 haben Browser begonnen, Funktionalitäten für andere Gamuts bereitzustellen, wie z. B. _{{Glossary("Color_space#display-p3", "Display-P3")}}_, der in der Filmindustrie weit verbreitet ist, und _{{Glossary("Color_space#rec2020", "rec2020")}}_.

Entwickler können verschiedene Farbsets für Geräte definieren, die größere Gamuts unterstützen, indem sie die [`color-gamut`](/de/docs/Web/CSS/Reference/At-rules/@media/color-gamut) [Medienfunktion](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwenden. Sie können Farben außerhalb des RGB-Gamuts mit spezifischen CSS-Funktionen wie [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch) für das LCH-Zylinderkoordinatensystem oder [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab) für das Lab-Koordinatensystem beschreiben.

## Siehe auch

- [_Gamut_](https://en.wikipedia.org/wiki/Gamut) auf _Wikipedia_.
