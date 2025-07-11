---
title: Gerätepixel
slug: Glossary/Device_pixel
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **Gerätepixel** ist die kleinste physische Anzeigeeinheit, die in der Lage ist, eine volle Farbe unabhängig von ihren Nachbarn darzustellen. Es ist die kleinste physische Einheit eines Displays (wie ein Monitor oder Bildschirm eines Mobiltelefons) und auch bekannt als _Hardware-Pixel_ oder _physisches Pixel_. Jedes Gerätepixel ist ein einzelner Punkt, der die Ausgabe des Displays zusammensetzt. Gerätepixel sind fest und skalieren nicht basierend auf dem Viewport oder CSS.

Ein Gerätepixel ist dichteabhängig und variiert basierend auf der Bildschirmauflösung. Das _device-pixel-ratio_ ist das Verhältnis der Auflösung in physischen Gerätepixeln zur Auflösung in CSS-Pixeln für das Display. Es unterscheidet sich in der Regel von einem {{Glossary("CSS_pixel", "CSS-Pixel")}}, das eine absolute Länge ist, die genau 1/96 Zoll eines CSS-Zolls definiert. Geräte, die als Hi-DPI gelten, haben mehr als ein Gerätepixel pro CSS-Pixel im gleichen physischen Bereich, während Geräte mit niedriger DPI ein Verhältnis von weniger als 1 zu 1 haben.

## Siehe auch

- CSS {{cssxref("&lt;resolution&gt;")}} Datentyp
- CSS {{cssxref("@media/resolution", "resolution")}} @media-Feature
- CSS {{cssxref("image-resolution")}} Eigenschaft
- [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) API
