---
title: CSS-Farben
slug: Web/CSS/CSS_colors
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das Modul **CSS-Farben** definiert Farben, Farbtypen, Farbmischung, Transparenz und wie Sie diese Farben und Effekte auf HTML-Inhalte anwenden können.

Obwohl dieses Modul nur zwei CSS-Eigenschaften hat, {{cssxref("color")}} und {{cssxref("opacity")}}, hängen über 20 CSS- und SVG-Eigenschaften, CSS-Bilder, At-Regeln und @media-Regeln von diesen beiden Eigenschaften ab.

### Farben in Aktion

Der unten stehende Farbsyntax-Konverter zeigt die Werte der derzeit ausgewählten Farbe im [Rot-Grün-Blau](/de/docs/Web/CSS/color_value/rgb) (RGB), [Hexadezimal](/de/docs/Web/CSS/hex-color) (HEX), [Farbton, Sättigung und Helligkeit](/de/docs/Web/CSS/color_value/hsl) (HSL) und [Farbton, Weißanteil und Schwarzanteil](/de/docs/Web/CSS/color_value/hwb) (HWB) CSS-Farbformat an. Alle hier gezeigten RGB-, HEX-, HSL- und HWB-Farbwerte stellen, obwohl unterschiedlich geschrieben, denselben Farbwert dar.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

Wenn Sie eine Farbe über den [Farbwähler](/de/docs/Web/HTML/Reference/Elements/input/color) und eine Transparenz über den [Schieberegler](/de/docs/Web/HTML/Reference/Elements/input/range) auswählen, werden die RGB-, HEX-, HSL- und HWB-Werte aktualisiert. Wenn Sie einen neuen Farb- oder Transparenzwert wählen, aktualisieren die CSS-Eigenschaften {{cssxref("background-color")}} bzw. {{cssxref("accent-color")}} die Farbe des Hintergrunds und des Schiebereglers.

Um den Code für diesen Farbsyntax-Konverter zu sehen, [sehen Sie den Quellcode auf GitHub an](https://github.com/mdn/css-examples/blob/main/modules/colors.html).

## Referenz

### Eigenschaften

- {{cssxref("color")}}
- {{cssxref("opacity")}}

### At-Regeln und Deskriptoren

> [!NOTE]
> Das CSS-Farbmodul führt die At-Regel {{cssxref("@color-profile")}} ein, zusammen mit den Deskriptoren `components`, `rendering-intent` und `src`. Diese Funktionen wurden bisher in keinem Browser implementiert.

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
> Das CSS-Farbmodul führt die Funktionen {{CSSXref("color_value/device-cmyk", "device-cmyk()")}} und `contrast-color()` ein, die bisher in keinem Browser implementiert wurden.

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

- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
  - : Ein Leitfaden zur Verwendung von CSS, um Farbe auf verschiedene Inhaltsarten anzuwenden, einschließlich aller CSS-Eigenschaften, die `<color>` als Wert akzeptieren.
- [CSS-Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values)
  - : Ein Überblick über Farbräume und die verschiedenen `<color>`-Funktionsnotationen, die in CSS verfügbar sind.
- [Farbe weise nutzen](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
  - : Farbtheorie und Ressourcen, einschließlich des Findens der richtigen Farben, um eine zugängliche Farbpalette, Kontrast und Farbdruck zu erstellen.
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
  - : Dieser Artikel erklärt die relative CSS-Farbsyntax, zeigt die verschiedenen Optionen und stellt einige illustrative Beispiele vor.
- [Farbwähler-Werkzeug](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
  - : Ein Werkzeug, das Sie eine Farbe im sRGB-Farbraum wählen lässt und diese zwischen verschiedenen CSS-Farbformaten umwandelt, um Ihnen das Verständnis der Syntax der verschiedenen Farbnotationen zu erleichtern.
- [Farbe und Leuchtdichte verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
  - : Farbempfindung und Verwendung von Farben mit farbenunempfindlichen (farbenblinden) Benutzern, Benutzern mit eingeschränktem Sehvermögen und Benutzern mit vestibulären oder anderen neurologischen Störungen.
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
  - : Erklärung der Kontrastanforderungen zwischen Hintergrund- und Vordergrundinhalten, um die Lesbarkeit sicherzustellen.

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
- SVG-Farbfunktionen, die Teil anderer Spezifikationen sind:
  - [`fill`](/de/docs/Web/SVG/Reference/Attribute/fill)
  - [`flood-color`](/de/docs/Web/SVG/Reference/Attribute/flood-color)
  - [`lighting-color`](/de/docs/Web/SVG/Reference/Attribute/lighting-color)
  - [`stop-color`](/de/docs/Web/SVG/Reference/Attribute/stop-color)
  - [`stroke`](/de/docs/Web/SVG/Reference/Attribute/stroke)
- SVG-Attribut [`color`](/de/docs/Web/SVG/Reference/Attribute/color)
- Glossarbegriff {{Glossary("Color_wheel", "Farbkreis")}}
- Glossarbegriff {{Glossary("Interpolation", "Interpolation")}}
- Die At-Regel [`@font-palette-values`](/de/docs/Web/CSS/@font-palette-values) `override-colors`-Deskriptor
- Die At-Regel [`@color-profile`](/de/docs/Web/CSS/@color-profile)
- Die @media-Funktion [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut)
- Die @media-Funktion [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Farbanpassung](/de/docs/Web/CSS/CSS_color_adjustment) Modul und die {{cssxref("print-color-adjust")}}-Eigenschaft.
- [CSS-Bilder](/de/docs/Web/CSS/CSS_images) Modul, in dem CSS-<gradient>-Bilder definiert sind.
- Die [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace) Schnittstelle
- Das SVG-Element [`<feColorMatrix>`](/de/docs/Web/SVG/Reference/Element/feColorMatrix)
- [Canvas API: Anwendung von Stilen und Farben](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#colors)
