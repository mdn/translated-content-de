---
title: RGB
slug: Glossary/RGB
l10n:
  sourceCommit: ceb303e16d56ac69c25ed2e72c258212714ab15a
---

{{GlossarySidebar}}

_Red-Green-Blue_ (**RGB**) ist ein Farbmodell, das Farben als Mischungen von drei zugrundeliegenden Komponenten (oder Kanälen) darstellt, nämlich: _rot_, _grün_ und _blau_. Dieses Modell beschreibt eine Farbe mit einer Sequenz von drei Zahlen (typischerweise zwischen 0,0 und 1,0 oder zwischen 0 und 255). Jede Zahl repräsentiert die verschiedenen Intensitäten (oder Beiträge) der Primärfarben, die zur Bestimmung der endgültigen Farbe beitragen.

Ein RGB-Wert für sich genommen hat keine Bedeutung. Es ist das Farbmodell, das definiert, wie die drei Komponenten innerhalb eines [Farbraums](/de/docs/Glossary/color_space) interagieren, um eine Farbe zu definieren. Grafisch stellt ein Punkt in einem dreidimensionalen Gitter oder Würfel eine Farbe dar. Jede Dimension (oder Achse) entspricht einem anderen Kanal. Das RGB-Farbmodell ist damit ein _kubisches_ oder _kartesisches_ Koordinatensystem des zugrundeliegenden Farbraums.

![Das RGB-Farbmodell als Würfel mit roten, blauen und grünen Achsen](rgb_color_cube.png)

Für das Web ist der zugrunde liegende Farbraum für einen RGB-Wert _sRGB_ (Standard RGB), und jede RGB-Komponente ist eine Zahl zwischen 0 und 1.

Beachten Sie, dass `sRGB` einer von [mehreren RGB-Farbräumen](/de/docs/Glossary/Color_space#rgb_color_spaces) ist. Andere RGB-Farbräume, wie der _Adobe RGB_ Farbraum, können einen breiteren [Farbumfang](/de/docs/Glossary/gamut) darstellen als der _sRGB_ Farbraum. Die Koordinaten in _sRGB_ und _Adobe RGB_ sind unterschiedlich.

Es gibt viele Möglichkeiten, die RGB-Komponenten einer Farbe zu beschreiben. In [CSS](/de/docs/Glossary/CSS) können sie auf verschiedene Weise dargestellt werden: in [hexadezimaler](/de/docs/Web/CSS/hex-color) Notation als eine einzelne 24-Bit-Zahl (zum Beispiel, `#add8e6` ist hellblau) oder in funktionaler Notation durch die Verwendung von [`rgb()`](/de/docs/Web/CSS/color_value/rgb) mit drei Prozentwerten oder Zahlen im Bereich von `0` bis `255` (zum Beispiel, `rgb(46 139 87)` ist grün). CSS unterstützt auch die Farbräume `srgb`, `srgb-linear`, `a98-rgb` und `prophoto-rgb` für die [`color()`](/de/docs/Web/CSS/color_value/color)-Funktion.

RGB ist nicht das einzige Farbmodell, das den `sRGB`-[Farbraum](/de/docs/Glossary/color_space) darstellen kann. Zylindrische Koordinatensysteme wie die [`HSL`](/de/docs/Web/CSS/color_value/hsl) (_hue-saturation-lightness_) oder [`HWB`](/de/docs/Web/CSS/color_value/hwb) (_hue-whiteness-blackness_) Farbmodelle werden ebenfalls verwendet, um eine `sRGB`-Farbe im Web darzustellen.

## Siehe auch

- [CSS-Datentyp: `<color>`](/de/docs/Web/CSS/color_value)
- [ColorAide: sRGB-Farbraum](https://facelessuser.github.io/coloraide/colors/srgb/)
- [RGB-Farbmodell](https://en.wikipedia.org/wiki/RGB_color_model) auf Wikipedia
- [sRGB-Farbraum](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
- [Adobe RGB Farbraum](https://en.wikipedia.org/wiki/Adobe_RGB_color_space) auf Wikipedia
