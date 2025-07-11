---
title: RGB
slug: Glossary/RGB
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

_Red-Green-Blue_ (**RGB**) ist ein Farbmodell, das Farben als Mischungen von drei grundlegenden Komponenten (oder Kanälen) darstellt: _rot_, _grün_ und _blau_. Dieses Modell beschreibt eine Farbe mit einer Folge von drei Zahlen (typischerweise zwischen 0,0 und 1,0 oder zwischen 0 und 255). Jede Zahl repräsentiert die unterschiedlichen Intensitäten (oder Beiträge) der Primärfarben zur Bestimmung der endgültigen Farbe.

Ein RGB-Wert hat für sich genommen keine Bedeutung. Es ist das Farbmodell, das definiert, wie die drei Komponenten innerhalb eines {{Glossary("color_space", "Farbraums")}} interagieren, um eine Farbe zu definieren. Grafisch stellt ein Punkt in einem dreidimensionalen Gitter oder Würfel eine Farbe dar. Jede Dimension (oder Achse) entspricht einem anderen Kanal. Das RGB-Farbmodell ist somit ein _kubisches_ oder _karthesisches_ Koordinatensystem des zugrundeliegenden Farbraums.

![Das RGB-Farbmodell als Würfel mit roten, blauen und grünen Achsen](rgb_color_cube.png)

Für das Web ist der zugrunde liegende Farbraum für einen RGB-Wert _sRGB_ (Standard RGB), und jede RGB-Komponente ist eine Zahl zwischen 0 und 1.

Beachten Sie, dass `sRGB` einer von {{Glossary("Color_space#rgb_color_spaces", "mehreren RGB-Farbräumen")}} ist. Andere RGB-Farbräume, wie der _Adobe RGB_-Farbraum, können einen breiteren {{Glossary("gamut", "Farbumfang")}} darstellen als der _sRGB_-Farbraum. Die Koordinaten in _sRGB_ und _Adobe RGB_ sind unterschiedlich.

Es gibt viele Möglichkeiten, die RGB-Komponenten einer Farbe zu beschreiben. In {{Glossary("CSS", "CSS")}} können sie auf verschiedene Arten dargestellt werden: in [hexadezimaler](/de/docs/Web/CSS/hex-color) Notation als einzelne 24-Bit-Ganzzahl (zum Beispiel ist `#add8e6` hellblau) oder in funktionaler Notation mit [`rgb()`](/de/docs/Web/CSS/color_value/rgb) mit drei Prozentwerten oder Zahlen im Bereich von `0` bis `255` (zum Beispiel ist `rgb(46 139 87)` grün). CSS unterstützt auch die Farbräume `srgb`, `srgb-linear`, `a98-rgb` und `prophoto-rgb` für die [`color()`](/de/docs/Web/CSS/color_value/color) Funktion.

RGB ist nicht das einzige Farbmodell, das den `sRGB` {{Glossary("color_space", "Farbraum")}} darstellen kann. Zylindrische Koordinatensysteme wie die [`HSL`](/de/docs/Web/CSS/color_value/hsl) (_hue-saturation-lightness_) oder [`HWB`](/de/docs/Web/CSS/color_value/hwb) (_hue-whiteness-blackness_) Farbmodelle werden ebenfalls verwendet, um eine `sRGB`-Farbe im Web darzustellen.

## Siehe auch

- [CSS-Datentyp: `<color>`](/de/docs/Web/CSS/color_value)
- [ColorAide: sRGB-Farbraum](https://facelessuser.github.io/coloraide/colors/srgb/)
- [RGB-Farbmodell](https://en.wikipedia.org/wiki/RGB_color_model) auf Wikipedia
- [sRGB-Farbraum](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
- [Adobe RGB-Farbraum](https://en.wikipedia.org/wiki/Adobe_RGB_color_space) auf Wikipedia
