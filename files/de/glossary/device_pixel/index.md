---
title: Gerätepixel
slug: Glossary/Device_pixel
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{GlossarySidebar}}

Ein **Gerätepixel** ist die kleinste physische Anzeigeneinheit, die in der Lage ist, eine vollständige Farbe unabhängig von ihrem Nachbar anzuzeigen. Es ist die kleinste physische Einheit eines Displays (wie etwa ein Monitor oder ein Handybildschirm), auch bekannt als _Hardware-Pixel_ oder _physisches Pixel_. Jedes Gerätepixel ist ein individueller Punkt, der die Ausgabe des Displays zusammensetzt. Gerätepixel sind fest und skalieren nicht basierend auf dem Viewport oder CSS.

Ein Gerätepixel ist dichteabhängig und variiert je nach Bildschirmauflösung. Das _Geräte-Pixel-Verhältnis_ (device-pixel-ratio) ist das Verhältnis der Auflösung in physischen Gerätepixeln zur Auflösung in CSS-Pixeln für das Display. Es unterscheidet sich normalerweise von einem {{Glossary("CSS_pixel", "CSS-Pixel")}}, das als absolute Länge definiert ist und genau 1/96 eines CSS-Zolls beträgt. Geräte, die als Hi-DPI betrachtet werden, haben mehr als ein Gerätepixel pro CSS-Pixel im gleichen physischen Bereich, während Geräte mit geringer DPI ein Verhältnis von weniger als 1 zu 1 haben.

## Siehe auch

- CSS {{cssxref("&lt;resolution&gt;")}} Datentyp
- CSS {{cssxref("@media/resolution", "resolution")}} @media-Funktion
- CSS {{cssxref("image-resolution")}} Eigenschaft
- [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) API
