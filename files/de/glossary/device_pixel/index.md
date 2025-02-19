---
title: Gerät-Pixel
slug: Glossary/Device_pixel
l10n:
  sourceCommit: f35733893f8c17dcbf8e9d5cf2551f6fb1cbecd5
---

{{GlossarySidebar}}

Ein **Gerät-Pixel** ist die kleinste physische Anzeigeeinheit, die in der Lage ist, eine volle Farbe unabhängig von ihrem Nachbarn darzustellen. Es ist die kleinste physische Einheit eines Displays (wie eines Monitors oder eines Mobiltelefonbildschirms), auch bekannt als _Hardware-Pixel_ oder _physisches Pixel_. Jedes Gerät-Pixel ist ein einzelner Punkt, der die Bildschirmausgabe zusammensetzt. Gerät-Pixel sind fest und skalieren nicht basierend auf dem Ansichtsfenster oder CSS.

Ein Gerät-Pixel ist dichteabhängig und variiert basierend auf der Display-Auflösung. Das _device-pixel-ratio_ ist das Verhältnis der Auflösung in physischen Gerät-Pixeln zur Auflösung in CSS-Pixeln für das Display. Es unterscheidet sich normalerweise von einem {{Glossary("CSS_pixel", "CSS-Pixel")}}, welches eine absolute Länge ist, die exakt 1/96 eines CSS-Zolls beträgt. Als Hi-DPI betrachtete Geräte haben mehr als ein Gerät-Pixel pro CSS-Pixel im gleichen physischen Bereich, während Geräte mit niedriger DPI weniger als ein 1-zu-1-Verhältnis haben.

## Siehe auch

- CSS {{cssxref("&lt;resolution&gt;")}} Datentyp
- CSS {{cssxref("@media/resolution", "resolution")}} @media Funktion
- CSS {{cssxref("image-resolution")}} Eigenschaft
- [`devicePixelRatio`](/de/docs/Web/API/DevicePixelRatio) API
