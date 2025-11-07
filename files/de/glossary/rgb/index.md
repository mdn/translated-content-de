---
title: RGB
slug: Glossary/RGB
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

_Red-Green-Blue_ (**RGB**) ist ein Farbmodell, das Farben als Mischungen aus drei grundlegenden Komponenten (oder Kanälen) darstellt, nämlich: _Rot_, _Grün_ und _Blau_. Dieses Modell beschreibt eine Farbe mit einer Folge von drei Zahlen (normalerweise zwischen 0,0 und 1,0 oder zwischen 0 und 255). Jede Zahl repräsentiert die unterschiedlichen Intensitäten (oder Beiträge) der Primärfarben zur Bestimmung der endgültigen Farbe.

Ein RGB-Wert an sich hat keine Bedeutung. Es ist das Farbmodell, das definiert, wie die drei Komponenten innerhalb eines {{Glossary("color_space", "Farbraums")}} interagieren, um eine Farbe zu definieren. Grafisch wird eine Punkt in einem dreidimensionalen Gitter oder Würfel zur Darstellung einer Farbe verwendet. Jede Dimension (oder Achse) entspricht einem anderen Kanal. Das RGB-Farbmodell ist dann ein _kubisches_ oder _kartesisches_ Koordinatensystem des zugrunde liegenden Farbraums.

![Das RGB-Farbmodell als Würfel mit roten, blauen und grünen Achsen](rgb_color_cube.png)

Für das Web ist der zugrunde liegende Farbraum eines RGB-Werts _sRGB_ (Standard RGB), und jede RGB-Komponente ist eine Zahl zwischen 0 und 1.

Beachten Sie, dass `sRGB` einer von {{Glossary("Color_space#rgb_color_spaces", "mehreren RGB-Farbräumen")}} ist. Andere RGB-Farbräume, wie der _Adobe RGB_-Farbraum, können einen größeren {{Glossary("gamut", "Farbumfang")}} als der _sRGB_-Farbraum darstellen. Die Koordinaten in _sRGB_ und _Adobe RGB_ sind unterschiedlich.

Es gibt viele Möglichkeiten, die RGB-Komponenten einer Farbe zu beschreiben. In {{Glossary("CSS", "CSS")}} können sie auf verschiedene Weise dargestellt werden: in [hexadezimaler](/de/docs/Web/CSS/Reference/Values/hex-color) Notation als einzelne 24-Bit-Ganzzahl (zum Beispiel, `#add8e6` ist hellblau) oder in funktionaler Notation mit [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) mit drei Prozentwerten oder Zahlen im Bereich von `0` bis `255` (zum Beispiel, `rgb(46 139 87)` ist grün). CSS unterstützt auch die Farbräume `srgb`, `srgb-linear`, `a98-rgb` und `prophoto-rgb` für die [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color) Funktion.

RGB ist nicht das einzige Farbmodell, das den `sRGB` {{Glossary("color_space", "Farbraum")}} darstellen kann. Zylindrische Koordinatensysteme wie die [`HSL`](/de/docs/Web/CSS/Reference/Values/color_value/hsl) (_hue-saturation-lightness_) oder [`HWB`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) (_hue-whiteness-blackness_) Farbmodelle werden ebenfalls verwendet, um eine `sRGB`-Farbe im Web darzustellen.

## Siehe auch

- [CSS-Datentyp: `<color>`](/de/docs/Web/CSS/Reference/Values/color_value)
- [ColorAide: sRGB-Farbraum](https://facelessuser.github.io/coloraide/colors/srgb/)
- [RGB-Farbmodell](https://en.wikipedia.org/wiki/RGB_color_model) auf Wikipedia
- [sRGB-Farbraum](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
- [Adobe RGB-Farbraum](https://en.wikipedia.org/wiki/Adobe_RGB_color_space) auf Wikipedia
