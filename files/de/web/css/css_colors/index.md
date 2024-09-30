---
title: CSS-Farben
slug: Web/CSS/CSS_colors
l10n:
  sourceCommit: 729754108952e0bac9fb6268fcdf24a63b3cbbf3
---

{{CSSRef}}

Das **CSS-Farben** Modul definiert Farben, Farbtypen, Farbmischung, Transparenz und wie Sie diese Farben und Effekte auf HTML-Inhalte anwenden können.

Obwohl dieses Modul nur zwei CSS-Eigenschaften hat, {{cssxref("color")}} und {{cssxref("opacity")}}, hängen über 20 CSS- und SVG-Eigenschaften, CSS-Bilder, At-Regeln und @media-Regeln von diesen zwei Eigenschaften ab.

### Farben in Aktion

Der Farbsyntax-Konverter unten zeigt die Werte der aktuell ausgewählten Farbe in [rot-grün-blau](/de/docs/Web/CSS/color_value/rgb) (RGB), [hexadezimal](/de/docs/Web/CSS/hex-color) (HEX), [Farbton, Sättigung und Helligkeit](/de/docs/Web/CSS/color_value/hsl) (HSL) und [Farbton, Weißgrad und Schwarzgrad](/de/docs/Web/CSS/color_value/hwb) (HWB) CSS-Farbformaten. Alle RGB-, HEX-, HSL- und HWB-Farbwerte hier repräsentieren, obwohl unterschiedlich geschrieben, denselben Farbwert.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

Die Auswahl einer Farbe über den [Farbwähler](/de/docs/Web/HTML/Element/input/color) und einer Transparenz über den [Schieberegler](/de/docs/Web/HTML/Element/input/range) aktualisiert die RGB-, HEX-, HSL- und HWB-Werte. Wenn Sie einen neuen Farb- oder Transparenzwert wählen, aktualisiert sich die Farbe des Hintergrunds und des Schiebereglers über die CSS-Eigenschaften {{cssxref("background-color")}} respektive {{cssxref("accent-color")}}.

Um den Code für diesen Farbsyntax-Konverter zu sehen, [sehen Sie den Quellcode auf GitHub](https://github.com/mdn/css-examples/blob/main/modules/colors.html).

## Referenz

### Eigenschaften

- {{cssxref("color")}}
- {{cssxref("opacity")}}

### At-Regeln und Deskriptoren

- {{cssxref("@color-profile")}}
  - [`components`](/de/docs/Web/CSS/@color-profile#descriptors) Deskriptor
  - [`rendering-intent`](/de/docs/Web/CSS/@color-profile#descriptors) Deskriptor
  - [`src`](/de/docs/Web/CSS/@color-profile#descriptors) Deskriptor

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
- [`color-contrast()`](/de/docs/Web/CSS/color_value/color-contrast) {{experimental_inline}}
- [`color-mix()`](/de/docs/Web/CSS/color_value/color-mix)
- [`device-cmyk()`](/de/docs/Web/CSS/color_value/device-cmyk)
- {{CSSXref("color_value/light-dark", "light-dark()")}}

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

- [Farbraum](/de/docs/Glossary/color_space)
- [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword)
- [Interpolation](/de/docs/Glossary/interpolation)
- [RGB](/de/docs/Glossary/RGB)
- [`transparent`](/de/docs/Web/CSS/named-color#transparent)

### Schnittstellen

- `CSSColorProfileRule`

## Leitfäden

- [Farbe auf HTML-Elemente anwenden mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
  - : Ein Leitfaden zur Verwendung von CSS, um Farbe auf verschiedene Arten von Inhalten anzuwenden, einschließlich aller CSS-Eigenschaften, die `<color>` als Wert akzeptieren.
- [CSS-Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values)
  - : Ein Überblick über Farbräume und die verschiedenen `<color>`-Funktionsnotationen, die in CSS verfügbar sind.
- [Farbe weise verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
  - : Farbtheorie und Ressourcen, einschließlich der Suche nach den richtigen Farben, um eine zugängliche Farbpalette, Kontrast und Farbdruck zu erstellen.
- [Relative Farben verwenden](/de/docs/Web/CSS/CSS_colors/Relative_colors)
  - : Dieser Artikel erklärt die relative CSS-Farbsyntax, zeigt die verschiedenen Optionen und einige illustrative Beispiele.
- [Verständnis von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance)
  - : Farbwahrnehmung und die Verwendung von Farben mit farbensensitiven (farbenblinden) Nutzern, Nutzern mit eingeschränktem Sehvermögen und Nutzern mit vestibulären Störungen oder anderen neurologischen Störungen.
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
  - : Erklärung der Kontrastanforderungen zwischen Hintergrund und Vordergrundinhalten, um die Lesbarkeit zu gewährleisten.

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
  - [`fill`](/de/docs/Web/SVG/Attribute/fill)
  - [`flood-color`](/de/docs/Web/SVG/Attribute/flood-color)
  - [`lighting-color`](/de/docs/Web/SVG/Attribute/lighting-color)
  - [`stop-color`](/de/docs/Web/SVG/Attribute/stop-color)
  - [`stroke`](/de/docs/Web/SVG/Attribute/stroke)
- SVG [`color`](/de/docs/Web/SVG/Attribute/color) Attribut
- [Farbkreis](/de/docs/Glossary/Color_wheel) Glossarbegriff
- [Interpolation](/de/docs/Glossary/Interpolation) Glossarbegriff
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
- Das SVG [`<feColorMatrix>`](/de/docs/Web/SVG/Element/feColorMatrix) Element
- [Canvas API: Stile und Farben anwenden](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#colors)
