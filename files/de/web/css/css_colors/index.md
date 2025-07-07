---
title: CSS-Farben
slug: Web/CSS/CSS_colors
l10n:
  sourceCommit: 2d19a88d0cc560f031a07585bf57f005fec02670
---

{{CSSRef}}

Das **CSS-Farben**-Modul definiert Farben, Farbtypen, Farbmischung, Transparenz und wie Sie diese Farben und Effekte auf HTML-Inhalt anwenden können.

Obwohl dieses Modul nur zwei CSS-Eigenschaften hat, {{cssxref("color")}} und {{cssxref("opacity")}}, hängen über 20 CSS- und SVG-Eigenschaften, CSS-Bilder, Regeln und @media-Regeln von diesen beiden Eigenschaften ab.

### Farben in Aktion

Der unten stehende Farbsyntax-Konverter zeigt die Werte der momentan ausgewählten Farbe in den CSS-Farbformaten [rot-grün-blau](/de/docs/Web/CSS/color_value/rgb) (RGB), [hexadezimal](/de/docs/Web/CSS/hex-color) (HEX), [Farbton, Sättigung und Helligkeit](/de/docs/Web/CSS/color_value/hsl) (HSL) und [Farbton, Weißanteil und Schwarzanteil](/de/docs/Web/CSS/color_value/hwb) (HWB) an. Alle hier gezeigten RGB-, HEX-, HSL- und HWB-Farbwerte stellen, obwohl unterschiedlich geschrieben, den gleichen Farbwert dar.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

Das Auswählen einer Farbe über den [Farbwähler](/de/docs/Web/HTML/Reference/Elements/input/color) und eine Deckkraft über den [Schieberegler](/de/docs/Web/HTML/Reference/Elements/input/range) aktualisiert die RGB-, HEX-, HSL- und HWB-Werte. Wenn Sie einen neuen Farb- oder Deckkraftwert auswählen, werden der Hintergrund und der Schieberegler über die CSS-Eigenschaften {{cssxref("background-color")}} und {{cssxref("accent-color")}} aktualisiert.

Um den Code für diesen Farbsyntax-Konverter zu sehen, [sehen Sie den Quellcode auf GitHub](https://github.com/mdn/css-examples/blob/main/modules/colors.html).

## Referenz

### Eigenschaften

- {{cssxref("color")}}
- {{cssxref("opacity")}}

### At-Rules und Deskriptoren

> [!NOTE]
> Das CSS-Farbmodul führt die @-Regel {{cssxref("@color-profile")}} ein, zusammen mit den Deskriptoren `components`, `rendering-intent` und `src`. Diese Funktionen wurden noch in keinem Browser implementiert.

### Funktionen

- Farb-Funktionen:
  - [`rgb()`](/de/docs/Web/CSS/color_value/rgb)
  - [`hsl()`](/de/docs/Web/CSS/color_value/hsl)
  - [`hwb()`](/de/docs/Web/CSS/color_value/hwb)
  - [`lab()`](/de/docs/Web/CSS/color_value/lab)
  - [`lch()`](/de/docs/Web/CSS/color_value/lch)
  - [`oklab()`](/de/docs/Web/CSS/color_value/oklab)
  - [`oklch()`](/de/docs/Web/CSS/color_value/oklch)
  - [`color()`](/de/docs/Web/CSS/color_value/color)
- [`color-mix()`](/de/docs/Web/CSS/color_value/color-mix)
- [`contrast-color()`](/de/docs/Web/CSS/color_value/contrast-color)
- {{CSSXref("color_value/light-dark", "light-dark()")}}

> [!NOTE]
> Das CSS-Farbmodul führt die Funktionen {{CSSXref("color_value/device-cmyk", "device-cmyk()")}} und `contrast-color()` ein, die in keinem Browser implementiert wurden.

### Datentypen

- {{cssxref("&lt;color&gt;")}}
- [`<color-function>`](#funktionen)
- {{cssxref("hex-color")}}
- {{cssxref("named-color")}}
- {{cssxref("alpha-value")}}
- {{cssxref("hue")}}
- {{cssxref("system-color")}}
- [`<colorspace-params>`](/de/docs/Web/CSS/color_value/color#using_predefined_color_spaces_with_color)

### Glossarbegriffe und Schlüsselwörter

- {{Glossary("color_space", "Farbraum")}}
- [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword)
- {{Glossary("interpolation", "Interpolation")}}
- {{Glossary("RGB", "RGB")}}
- [`transparent`](/de/docs/Web/CSS/named-color#transparent)

### Schnittstellen

> [!NOTE]
> Das CSS-Farbmodul führt die `CSSColorProfileRule`-Schnittstelle ein, die in keinem Browser implementiert wurde.

## Leitfäden

- [Anwenden von Farben auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
  - : Ein Leitfaden zur Verwendung von CSS, um Farben auf verschiedene Arten von Inhalten anzuwenden, einschließlich aller CSS-Eigenschaften, die `<color>` als Wert akzeptieren.
- [CSS-Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values)
  - : Ein Überblick über Farbräume und die verschiedenen `<color>`-Funktionsnotationen, die in CSS verfügbar sind.
- [Farben weise verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
  - : Farbtheorie und Ressourcen, einschließlich der richtigen Farben, um eine zugängliche Farbpalette zu erstellen, Kontrast und Farbdrücke.
- [Relative Farben verwenden](/de/docs/Web/CSS/CSS_colors/Relative_colors)
  - : Dieser Artikel erklärt die relative CSS-Farbsyntax, zeigt, welche unterschiedlichen Optionen es gibt, und illustriert anhand einiger Beispiele.
- [Farbwähler-Tool](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
  - : Ein Tool, das es Ihnen ermöglicht, eine Farbe im sRGB-Farbraum zu wählen und sie in verschiedene CSS-Farbformate umwandelt, um Ihnen das Verständnis für die Syntax der unterschiedlichen Farbnotationen zu erleichtern.
- [Verstehen von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
  - : Farbempfindung und Verwendung von Farben unter Berücksichtigung von Personen mit Farbblindheit (Farbunempfindlichkeit), eingeschränkter Sehkraft und Personen mit vestibulären oder anderen neurologischen Störungen.
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
  - : Erklärung der Anforderungen an den Kontrast zwischen Hintergrund- und Vordergrundinhalten zur Sicherstellung der Lesbarkeit.

## Verwandte Konzepte

- CSS-Eigenschaften, die Teil anderer Spezifikationen sind:
  - {{cssxref("accent-color")}}
  - {{cssxref("background-color")}}
  - {{cssxref("background-image")}}
  - {{cssxref("border-color")}}
  - {{cssxref("box-shadow")}}
  - {{cssxref("caret-color")}}
  - {{cssxref("color")}}
  - {{cssxref("color-scheme")}}
  - {{cssxref("column-rule-color")}}
  - {{cssxref("outline-color")}}
  - {{cssxref("scrollbar-color")}}
  - {{cssxref("text-decoration-color")}}
  - {{cssxref("text-emphasis-color")}}
  - {{cssxref("text-shadow")}}
  - {{cssxref("-webkit-tap-highlight-color")}}
- SVG-Farbeigenschaften, die Teil anderer Spezifikationen sind:
  - [`fill`](/de/docs/Web/SVG/Reference/Attribute/fill)
  - [`flood-color`](/de/docs/Web/SVG/Reference/Attribute/flood-color)
  - [`lighting-color`](/de/docs/Web/SVG/Reference/Attribute/lighting-color)
  - [`stop-color`](/de/docs/Web/SVG/Reference/Attribute/stop-color)
  - [`stroke`](/de/docs/Web/SVG/Reference/Attribute/stroke)
- SVG-Attribut [`color`](/de/docs/Web/SVG/Reference/Attribute/color)
- {{Glossary("Color_wheel", "Farbkreis")}} Glossarbegriff
- {{Glossary("Interpolation", "Interpolation")}} Glossarbegriff
- Der [`@font-palette-values`](/de/docs/Web/CSS/@font-palette-values) At-Rule [`override-colors`](/de/docs/Web/CSS/@font-palette-values/override-colors) Deskriptor
- Der [`@color-profile`](/de/docs/Web/CSS/@color-profile) At-Rule
- Die [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) @media-Funktion
- Die [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors) @media-Funktion

## Spezifikationen

{{Specifications}}

## Siehe auch

- Modul [CSS-Farbanpassung](/de/docs/Web/CSS/CSS_color_adjustment) und die Eigenschaft {{cssxref("print-color-adjust")}}.
- Modul [CSS-Bilder](/de/docs/Web/CSS/CSS_images), in dem CSS-`<gradient>`-Bilder definiert sind.
- Die Schnittstelle [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace)
- Das SVG-Element [`<feColorMatrix>`](/de/docs/Web/SVG/Reference/Element/feColorMatrix)
- [Canvas API: Anwenden von Stil und Farben](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#colors)
