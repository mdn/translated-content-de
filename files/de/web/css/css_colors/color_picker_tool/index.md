---
title: Color-Picker-Tool
slug: Web/CSS/CSS_colors/Color_picker_tool
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Dieses Tool ermöglicht es Ihnen, eine Farbe im sRGB-{{Glossary("color_space", "Farbraum")}} auszuwählen und diese zwischen verschiedenen CSS-[Farbformaten](/de/docs/Web/CSS/color_value) zu konvertieren. Es hilft Ihnen, die Syntax der folgenden sRGB-Farbnotationen zu verstehen:

- {{cssxref("hex-color")}}, eine _hexadezimale Farbdarstellung_ einer {{Glossary("RGB", "sRGB")}}-Farbe unter Verwendung ihrer Primärfarbkomponenten (Rot, Grün, Blau), die als hexadezimale Zahlen sowie ihrer Transparenz geschrieben sind.
- {{CSSxRef("color_value/rgb", "rgb()")}}, das eine gegebene Farbe entsprechend ihren Rot-, Grün-, Blau- und Alpha-(Transparenz-)Komponenten definiert.
- {{CSSxRef("color_value/hsl", "hsl()")}}, das eine gegebene Farbe entsprechend ihrem Farbton, ihrer Sättigung, ihrer Helligkeit und Alpha-(Transparenz-)Komponenten definiert.
- {{CSSxRef("color_value/hwb", "hwb()")}}, das eine gegebene Farbe entsprechend ihrem Farbton, Weiß- und Schwarzheitsgrad sowie Alpha-(Transparenz-)Komponenten definiert.
- {{CSSxRef("color_value/color", "color()")}}, das eine Farbe im angegebenen Farbraum definiert.

Wenn Sie eine Farbe auswählen, wird sie in vier standardmäßigen CSS-Farbformaten angezeigt. Die Kontrolle über den Alpha-Kanal wird ebenfalls unterstützt.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

Die generierten Farbwerte können überall dort verwendet werden, wo der {{cssxref("color_value", "&lt;color&gt")}}-Datentyp in CSS unterstützt wird.

## Siehe auch

- [Farbe mit CSS-Eigenschaften anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [CSS-Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values)
- [Farbe klug verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [Relative Farben verwenden](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [Verständnis von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [Lernen: Hintergründe und Rahmen mit CSS gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
- [Barrierefreiheit lernen: Farbe und Farbkontrast](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast)
