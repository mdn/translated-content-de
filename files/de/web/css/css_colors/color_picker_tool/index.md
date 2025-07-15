---
title: Werkzeug zur Farbauswahl
slug: Web/CSS/CSS_colors/Color_picker_tool
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Dieses Werkzeug ermöglicht es Ihnen, eine Farbe im sRGB-{{Glossary("color_space", "Farbraum")}} auszuwählen und diese zwischen verschiedenen CSS-[Farbformaten](/de/docs/Web/CSS/color_value) zu konvertieren. Es hilft Ihnen, die Syntax der folgenden sRGB-Farbnotationen zu verstehen:

- {{cssxref("hex-color")}}, eine _hexadezimale Farbgebung_ einer {{Glossary("RGB", "sRGB")}}-Farbe, die ihre Hauptfarbkomponenten (Rot, Grün, Blau) als hexadezimale Zahlen sowie ihre Transparenz verwendet.
- {{CSSxRef("color_value/rgb", "rgb()")}}, welche eine bestimmte Farbe gemäß ihren Rot-, Grün-, Blau- und Alpha- (Transparenz-) Komponenten definiert.
- {{CSSxRef("color_value/hsl", "hsl()")}}, welche eine bestimmte Farbe gemäß ihren Farbton-, Sättigungs-, Helligkeits- und Alpha- (Transparenz-) Komponenten definiert.
- {{CSSxRef("color_value/hwb", "hwb()")}}, welche eine bestimmte Farbe gemäß ihren Farbton-, Weißheits-, Schwarzheits- und Alpha- (Transparenz-) Komponenten definiert.
- {{CSSxRef("color_value/color", "color()")}}, welche eine Farbe im angegebenen Farbraum definiert.

Wenn Sie eine Farbe auswählen, wird diese in vier Standard-CSS-Farbformaten angezeigt. Die Kontrolle über den Alphakanal wird ebenfalls unterstützt.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

Die generierten Farbwerte können überall dort verwendet werden, wo der {{cssxref("color_value", "&lt;color&gt;")}}-Datentyp in CSS unterstützt wird.

## Siehe auch

- [Farbe mit CSS-Eigenschaften anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [CSS-Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values)
- [Farbe weise nutzen](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [Relative Farben verwenden](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [Verständnis von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [Lernen: Hintergrund und Rahmen mit CSS gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
- [Barrierefreiheit lernen: Farbe und Farbkontrast](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast)
