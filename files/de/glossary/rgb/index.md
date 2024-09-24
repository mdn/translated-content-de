---
title: RGB
slug: Glossary/RGB
l10n:
  sourceCommit: ceb303e16d56ac69c25ed2e72c258212714ab15a
---

{{GlossarySidebar}}

_Red-Green-Blue_ (**RGB**) ist ein Farbmodell, das Farben als Mischungen von drei grundlegenden Komponenten (oder Kanälen) darstellt, nämlich: _rot_, _grün_ und _blau_. Dieses Modell beschreibt eine Farbe mit einer Sequenz von drei Zahlen (typischerweise zwischen 0,0 und 1,0 oder zwischen 0 und 255). Jede Zahl repräsentiert die unterschiedlichen Intensitäten (oder Beiträge) der Primärfarben zur Bestimmung der endgültigen Farbe.

Ein RGB-Wert für sich hat keine Bedeutung. Es ist das Farbmodell, das definiert, wie die drei Komponenten innerhalb eines {{glossary("color space", "Farbraums")}} interagieren, um eine Farbe zu definieren. Grafisch stellt ein Punkt in einem dreidimensionalen Gitter oder Würfel eine Farbe dar. Jede Dimension (oder Achse) entspricht einem anderen Kanal. Das RGB-Farbmodell ist dann ein _kubisches_ oder _kartesisches_ Koordinatensystem des zugrunde liegenden Farbraums.

![Das RGB-Farbmodell als Würfel mit roten, blauen und grünen Achsen](rgb_color_cube.png)

Für das Web ist der zugrunde liegende Farbraum eines RGB-Wertes _sRGB_ (Standard RGB), und jede RGB-Komponente ist eine Zahl zwischen 0 und 1.

Beachten Sie, dass `sRGB` einer von [mehreren RGB-Farbräumen](/de/docs/Glossary/Color_space#rgb_color_spaces) ist. Andere RGB-Farbräume, wie der _Adobe RGB_-Farbraum, können einen größeren {{glossary("gamut", "Farbraumumfang")}} als der _sRGB_-Farbraum darstellen. Die Koordinaten in _sRGB_ und _Adobe RGB_ sind unterschiedlich.

Es gibt viele Möglichkeiten, die RGB-Komponenten einer Farbe zu beschreiben. In {{Glossary("CSS")}} können sie auf verschiedene Weise dargestellt werden: in [hexadezimaler](/de/docs/Web/CSS/hex-color) Notation als einzelne 24-Bit-Ganzzahl (zum Beispiel ist `#add8e6` hellblau) oder in funktionaler Notation unter Verwendung von [`rgb()`](/de/docs/Web/CSS/color_value/rgb) mit drei Prozentwerten oder Zahlen von `0` bis `255` (zum Beispiel ist `rgb(46 139 87)` grün). CSS unterstützt auch die Farbräume `srgb`, `srgb-linear`, `a98-rgb` und `prophoto-rgb` für die Funktion [`color()`](/de/docs/Web/CSS/color_value/color).

RGB ist nicht das einzige Farbmodell, das den `sRGB` {{glossary("color space", "Farbraum")}} darstellen kann. Zylindrische Koordinatensysteme wie die [`HSL`](/de/docs/Web/CSS/color_value/hsl) (_hue-saturation-lightness_) oder [`HWB`](/de/docs/Web/CSS/color_value/hwb) (_hue-whiteness-blackness_) Farbmodelle werden ebenfalls verwendet, um eine `sRGB`-Farbe im Web darzustellen.

## Siehe auch

- [CSS-Datentyp: `<color>`](/de/docs/Web/CSS/color_value)
- [ColorAide: sRGB-Farbraum](https://facelessuser.github.io/coloraide/colors/srgb/)
- [RGB-Farbmodell](https://en.wikipedia.org/wiki/RGB_color_model) auf Wikipedia
- [sRGB-Farbraum](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
- [Adobe RGB-Farbraum](https://en.wikipedia.org/wiki/Adobe_RGB_color_space) auf Wikipedia
