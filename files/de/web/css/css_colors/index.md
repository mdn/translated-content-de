---
title: CSS-Farben
slug: Web/CSS/CSS_colors
l10n:
  sourceCommit: 6cd62fb4482a2d6927cebd0223bf8d0386095340
---

Das **CSS-Farben**-Modul definiert Farben, Farbtypen, Farbüberblendungen, Transparenz und wie Sie diese Farben und Effekte auf HTML-Inhalte anwenden können.

Auch wenn dieses Modul nur zwei CSS-Eigenschaften hat, {{cssxref("color")}} und {{cssxref("opacity")}}, hängen über 20 CSS- und SVG-Eigenschaften, CSS-Bilder, At-Regeln und @media-Regeln von diesen beiden Eigenschaften ab.

## Farben in Aktion

Der unten stehende Farbsyntax-Konverter zeigt die Werte der aktuell ausgewählten Farbe in [rot-grün-blau](/de/docs/Web/CSS/color_value/rgb) (RGB), [hexadezimal](/de/docs/Web/CSS/hex-color) (HEX), [Farbton, Sättigung und Helligkeit](/de/docs/Web/CSS/color_value/hsl) (HSL) und [Farbton, Weiß- und Schwarzanteil](/de/docs/Web/CSS/color_value/hwb) (HWB) CSS-Farbformaten. Alle hier dargestellten RGB-, HEX-, HSL- und HWB-Farbwerte repräsentieren, obwohl sie unterschiedlich geschrieben sind, denselben Farbwert.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

Die Auswahl einer Farbe über den [Farbwähler](/de/docs/Web/HTML/Reference/Elements/input/color) und einer Transparenz über den [Schieberegler](/de/docs/Web/HTML/Reference/Elements/input/range) aktualisiert die RGB-, HEX-, HSL- und HWB-Werte. Wenn Sie einen neuen Farb- oder Transparenzwert wählen, aktualisieren sich die Hintergrundfarbe und der Schieberegler über die CSS-Eigenschaften {{cssxref("background-color")}} und {{cssxref("accent-color")}}.

Um den Code für diesen Farbsyntax-Konverter zu sehen, [sehen Sie sich den Quellcode auf GitHub an](https://github.com/mdn/css-examples/blob/main/modules/colors.html).

## Referenz

### Eigenschaften

- {{cssxref("color")}}
- {{cssxref("opacity")}}

### At-Regeln und Deskriptoren

Das CSS-Farben-Modul führt auch die {{cssxref("@color-profile")}} At-Regel ein, zusammen mit deren `components`, `rendering-intent` und `src` Deskriptoren. Derzeit unterstützen keine Browser diese Funktionen.

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

Das CSS-Farbmodul führt auch die {{CSSXref("color_value/device-cmyk", "device-cmyk()")}} und `contrast-color()` Funktionen ein. Derzeit unterstützen keine Browser diese Funktionen.

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
- [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword)
- {{Glossary("interpolation", "Interpolation")}}
- {{Glossary("RGB", "RGB")}}
- [`transparent`](/de/docs/Web/CSS/named-color#transparent)

### Schnittstellen

Das CSS-Farbmodul führt auch die `CSSColorProfileRule` Schnittstelle ein. Derzeit unterstützen keine Browser diese Funktion.

## Leitfäden

- [Anwenden von Farben auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
  - : Ein Leitfaden zur Verwendung von CSS, um Farbe auf eine Vielzahl von Inhalten anzuwenden, einschließlich aller CSS-Eigenschaften, die `<color>` als Wert akzeptieren.
- [CSS-Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values)
  - : Ein Überblick über Farbräume und die verschiedenen `<color>` funktionalen Notationen, die in CSS verfügbar sind.
- [Farben klug verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
  - : Farbtheorie und Ressourcen, einschließlich der richtigen Farbwahl, um eine zugängliche Farbpalette, Kontrast und Farbdruck zu erstellen.
- [Relative Farben verwenden](/de/docs/Web/CSS/CSS_colors/Relative_colors)
  - : Dieser Artikel erklärt relative CSS-Farbsyntax, zeigt, welche verschiedenen Optionen es gibt, und betrachtet einige illustrative Beispiele.
- [Farbwähler-Tool](/de/docs/Web/CSS/CSS_colors/Color_picker_tool)
  - : Ein Tool, das es Ihnen ermöglicht, eine Farbe im sRGB-Farbraum auszuwählen und sie zwischen verschiedenen CSS-Farbformaten zu konvertieren, um das Verständnis der Syntax der verschiedenen Farbnotationen zu erleichtern.
- [Verstehen von Farben und Leuchtkraft](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
  - : Farbwahrnehmung und die Verwendung von Farben mit Blick auf farbenblinde Benutzer, Benutzer mit eingeschränktem Sehvermögen und Benutzer mit vestibulären Störungen oder anderen neurologischen Störungen.
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
  - : Erklärung der Kontrastanforderungen zwischen Hintergrund und Vordergrundinhalt, um die Lesbarkeit zu gewährleisten.

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
- SVG [`color`](/de/docs/Web/SVG/Reference/Attribute/color) Attribut
- {{Glossary("Color_wheel", "Farbkreis")}} Glossarbegriff
- {{Glossary("Interpolation", "Interpolation")}} Glossarbegriff
- Die [`@font-palette-values`](/de/docs/Web/CSS/@font-palette-values) At-Regel [`override-colors`](/de/docs/Web/CSS/@font-palette-values/override-colors) Deskriptor
- Die [`@color-profile`](/de/docs/Web/CSS/@color-profile) At-Regel
- Die [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) @media-Funktion
- Die [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors) @media-Funktion

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Farbanpassung](/de/docs/Web/CSS/CSS_color_adjustment) Modul und die {{cssxref("print-color-adjust")}} Eigenschaft.
- [CSS-Bilder](/de/docs/Web/CSS/CSS_images) Modul, in dem CSS [`<gradient>`](/de/docs/Web/CSS/gradient) Bilder definiert sind.
- Die [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace) Schnittstelle
- Das SVG [`<feColorMatrix>`](/de/docs/Web/SVG/Reference/Element/feColorMatrix) Element
- [Canvas API: Anwenden von Stilen und Farben](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#colors)
