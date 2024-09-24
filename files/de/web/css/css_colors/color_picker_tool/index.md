---
title: Farbwahlwerkzeug
slug: Web/CSS/CSS_colors/Color_picker_tool
l10n:
  sourceCommit: 5f13cbe7517ce96deeb521d4c8e6923266a22913
---

{{CSSRef}}

Dieses Werkzeug ermöglicht es Ihnen, eine Farbe im sRGB-{{glossary("color space")}} auszuwählen und zwischen verschiedenen CSS-[Farbformaten](/de/docs/Web/CSS/color_value) zu konvertieren, um Ihnen das Verständnis der Syntax der folgenden sRGB-Farbnotationen zu erleichtern:

- {{cssxref("hex-color")}}, eine _hexadezimale Farbdarstellung_ einer [sRGB](/de/docs/Glossary/RGB)-Farbe, die ihre primären Farbkomponenten (rot, grün, blau) als hexadezimale Zahlen sowie ihre Transparenz enthält.
- {{CSSxRef("color_value/rgb", "rgb()")}}, die eine gegebene Farbe basierend auf ihren roten, grünen, blauen und alpha (Transparenz) Komponenten definiert.
- {{CSSxRef("color_value/hsl", "hsl()")}}, die eine gegebene Farbe basierend auf Farbton, Sättigung, Helligkeit und alpha (Transparenz) Komponenten definiert.
- {{CSSxRef("color_value/hwb", "hwb()")}}, die eine gegebene Farbe basierend auf Farbton, Weißanteil, Schwarzanteil und alpha (Transparenz) Komponenten definiert.
- {{CSSxRef("color_value/color", "color()")}}, die eine Farbe im gegebenen Farbraum definiert.

Wenn Sie eine Farbe auswählen, wird sie in vier Standard-CSS-Farbformaten angezeigt. Die Steuerung über den Alphakanal wird ebenfalls unterstützt.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

Die generierten Farbwerte können überall dort verwendet werden, wo der {{cssxref("color_value", "&lt;color&gt")}} Datentyp in CSS unterstützt wird.

## Siehe auch

- [Farbe mit CSS-Eigenschaften anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [CSS-Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values)
- [Farbe klug verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [Verständnis von Farbe und Luminanz](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance)
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
- [Baustein: Hintergründe und Rahmen mit CSS stylen](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
- [Barrierefreiheit lernen: Farbe und Farbkontrast](/de/docs/Learn/Accessibility/CSS_and_JavaScript#color_and_color_contrast)
