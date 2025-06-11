---
title: Farb-Werkzeug
slug: Web/CSS/CSS_colors/Color_picker_tool
l10n:
  sourceCommit: 41cf05afdfff38fb460f7cae5b9523405c842ac6
---

{{CSSRef}}

Dieses Werkzeug ermöglicht es Ihnen, eine Farbe im sRGB-{{Glossary("color_space", "Farbraum")}} auszuwählen und sie zwischen verschiedenen CSS-[Farbformaten](/de/docs/Web/CSS/color_value) zu konvertieren. Dadurch können Sie die Syntax der folgenden sRGB-Farbnomenklaturen verstehen:

- {{cssxref("hex-color")}}, eine _hexadezimale Farbdarstellung_ einer {{Glossary("RGB", "sRGB")}}-Farbe unter Verwendung ihrer Primärfarbkomponenten (rot, grün, blau), die als hexadezimale Zahlen geschrieben werden, sowie deren Transparenz.
- {{CSSxRef("color_value/rgb", "rgb()")}}, welches eine gegebene Farbe anhand ihrer Rot-, Grün-, Blau- und Alpha- (Transparenz-) Komponenten definiert.
- {{CSSxRef("color_value/hsl", "hsl()")}}, welches eine gegebene Farbe anhand ihres Farbtons, ihrer Sättigung, ihrer Helligkeit und ihres Alpha (Transparenz)-Werts definiert.
- {{CSSxRef("color_value/hwb", "hwb()")}}, welches eine gegebene Farbe anhand ihres Farbtons, ihrer Weißheit, ihrer Schwärze und ihres Alpha (Transparenz)-Werts definiert.
- {{CSSxRef("color_value/color", "color()")}}, welches eine Farbe im gegebenen Farbraum definiert.

Wenn Sie eine Farbe auswählen, wird sie in vier Standard-CSS-Farbformaten angezeigt. Die Kontrolle über den Alphakanal wird ebenfalls unterstützt.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

Die generierten Farbwerte können überall dort verwendet werden, wo der {{cssxref("color_value", "&lt;color&gt;")}}-Datentyp in CSS unterstützt wird.

## Siehe auch

- [Farbanwendung mit CSS-Eigenschaften](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [CSS-Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values)
- [Farben weise verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [Relative Farben verwenden](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [Verstehen von Farbe und Luminanz](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [Lernen: Hintergründe und Rahmen mit CSS gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
- [Barrierefreiheit lernen: Farbe und Farbkontrast](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast)
