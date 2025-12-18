---
title: Gamut
slug: Glossary/Gamut
l10n:
  sourceCommit: 5ba55a6939c0aaf988fc4d34ad7e51c52373a2a6
---

Ein Farbumfang (engl. **gamut**) ist eine Teilmenge von Farben, die gewöhnlich die Farben repräsentiert, welche ein Display oder ein Druckgerät darstellen kann.

Kein Display oder Drucker kann den gesamten Farbbereich darstellen, den das menschliche Auge wahrnehmen kann. Der Geräte-_Gamut_ repräsentiert die Menge, die es unterstützt.

Traditionell war in der Webentwicklung der einzige verwendete Farbumfang _[sRGB](https://en.wikipedia.org/wiki/SRGB)_ (Standard Red-Green-Blue), bei dem jede Farbe mit drei Bytes beschrieben wird, eines für jede Primärfarbe. Jedoch unterstützen "Wide Color"-Monitore und professionelle Drucker einen größeren Farbbereich, der mit diesem Gamut nicht darstellbar ist.

Seit 2021 bieten Browser Funktionen für andere Farbumfänge, wie _{{Glossary("Color_space#display-p3", "Display-P3")}}_, das weit in der Filmindustrie genutzt wird, und _{{Glossary("Color_space#rec2020", "rec2020")}}_.

Entwickler können verschiedene Farbsets für Geräte definieren, die größere Farbumfänge unterstützen, indem sie die {{cssxref("@media/color-gamut")}} [Media Feature](/de/docs/Web/CSS/Guides/Media_queries/Using) verwenden. Sie können Farben außerhalb des RGB-Gamuts mit spezifischen CSS-Funktionen beschreiben, wie zum Beispiel {{cssxref("color_value/lch")}} für das LCH-Zylinderkoordinatensystem oder {{cssxref("color_value/lab")}} für das Lab-Koordinatensystem.

## Siehe auch

- [_Gamut_](https://en.wikipedia.org/wiki/Gamut) auf _Wikipedia_.
