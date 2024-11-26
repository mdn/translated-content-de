---
title: CSS Farben
slug: Web/CSS/CSS_colors
l10n:
  sourceCommit: 31e158bf22cece84ba7de3de3551f2807fe587d0
---

{{CSSRef}}

Das **CSS Farben** Modul definiert Farben, Farbtypen, Farbüberblendung, Transparenz und wie Sie diese Farben und Effekte auf HTML-Inhalte anwenden können.

Obwohl dieses Modul nur zwei CSS-Eigenschaften hat, {{cssxref("color")}} und {{cssxref("opacity")}}, hängen über 20 CSS- und SVG-Eigenschaften, CSS-Bilder, At-Rules und @media Regeln von diesen beiden Eigenschaften ab.

### Farben in Aktion

Der Farbsyntax-Umwandler unten zeigt die Werte der aktuell ausgewählten Farbe in den CSS-Farbformaten [Rot-Grün-Blau](/de/docs/Web/CSS/color_value/rgb) (RGB), [hexadezimal](/de/docs/Web/CSS/hex-color) (HEX), [Farbton, Sättigung und Helligkeit](/de/docs/Web/CSS/color_value/hsl) (HSL) und [Farbton, Weißheit und Schwärze](/de/docs/Web/CSS/color_value/hwb) (HWB). Alle hier aufgeführten RGB-, HEX-, HSL- und HWB-Farbwerte repräsentieren, obwohl sie unterschiedlich geschrieben sind, denselben Farbwert.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

Die Auswahl einer Farbe über den [Farbauswähler](/de/docs/Web/HTML/Element/input/color) und die Auswahl einer Transparenz über den [Schieberegler](/de/docs/Web/HTML/Element/input/range) aktualisiert die RGB-, HEX-, HSL- und HWB-Werte. Wenn Sie einen neuen Farb- oder Transparenzwert wählen, wird die Farbe des Hintergrunds und des Schiebereglers über die CSS-Eigenschaften {{cssxref("background-color")}} und {{cssxref("accent-color")}} entsprechend aktualisiert.

Um den Code für diesen Farbsyntax-Umwandler zu sehen, [sehen Sie den Quellcode auf GitHub](https://github.com/mdn/css-examples/blob/main/modules/colors.html).

## Referenz

### Eigenschaften

- {{cssxref("color")}}
- {{cssxref("opacity")}}

### At-Rules und Deskriptoren

- {{cssxref("@color-profile")}}
  - [`components`](/de/docs/Web/CSS/@color-profile#descriptors) Deskriptor
  - [`rendering-intent`](/de/docs/Web/CSS/@color-profile#descriptors) Deskriptor
  - [`src`](/de/docs/Web/CSS/@color-profile#descriptors) Deskriptor

### Funktionen

- Farbfunktionen:
  - [`rgb()`](/de/docs/Web/CSS/color_value/rgb)
  - [`hsl()`](/de/docs/Web/CSS/color_value/hsl)
  - [`hwb()`](/de/docs/Web/CSS/color_value/hwb)
  - [`lab()`](/de/docs/Web/CSS/color_value/lab)
  - [`lch()`](/de/docs/Web/CSS/color_value/lch)
  - [`oklab()`](/de/docs/Web/CSS/color_value/oklab)
  - [`oklch()`](/de/docs/Web/CSS/color_value/oklch)
  - [`color()`](/de/docs/Web/CSS/color_value/color)
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

- {{Glossary("color_space", "Farbraum")}}
- [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword)
- {{Glossary("interpolation", "Interpolation")}}
- {{Glossary("RGB", "RGB")}}
- [`transparent`](/de/docs/Web/CSS/named-color#transparent)

### Schnittstellen

- `CSSColorProfileRule`

## Leitfäden

- [Farben auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color)
  - : Ein Leitfaden zur Anwendung von Farben auf verschiedene Arten von Inhalten, einschließlich aller CSS-Eigenschaften, die `<color>` als Wert akzeptieren.
- [CSS Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values)
  - : Ein Überblick über Farbräume und die verschiedenen `<color>` Funktionsnotationsmöglichkeiten in CSS.
- [Farben klug nutzen](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
  - : Farbtheorie und Ressourcen, einschließlich der Suche nach den richtigen Farben, um eine zugängliche Farbpalette, Kontrast und Farbdruck zu erstellen.
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
  - : Dieser Artikel erklärt relative CSS-Farbsyntax, zeigt die verschiedenen Optionen und illustriert einige Beispiele.
- [Verständnis von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance)
  - : Farbempfinden und die Verwendung von Farben mit Blick auf farbenblinde Benutzer, Benutzer mit eingeschränktem Sehvermögen und Nutzer mit vestibulären Störungen oder anderen neurologischen Erkrankungen.
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
  - : Erklärung der Kontrastanforderungen zwischen Hintergrund- und Vordergrundinhalten zur Sicherstellung der Lesbarkeit.

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
- SVG-Farben-Eigenschaften, die Teil anderer Spezifikationen sind:
  - [`fill`](/de/docs/Web/SVG/Attribute/fill)
  - [`flood-color`](/de/docs/Web/SVG/Attribute/flood-color)
  - [`lighting-color`](/de/docs/Web/SVG/Attribute/lighting-color)
  - [`stop-color`](/de/docs/Web/SVG/Attribute/stop-color)
  - [`stroke`](/de/docs/Web/SVG/Attribute/stroke)
- SVG-`color` Attribut
- {{Glossary("Color_wheel", "Farbrad")}} Glossarbegriff
- {{Glossary("Interpolation", "Interpolation")}} Glossarbegriff
- Die [`@font-palette-values`](/de/docs/Web/CSS/@font-palette-values) At-Rule [`override-colors`](/de/docs/Web/CSS/@font-palette-values/override-colors) Deskriptor
- Die [`@color-profile`](/de/docs/Web/CSS/@color-profile) At-Rule
- Das [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) @media Merkmal
- Das [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors) @media Merkmal

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das [CSS Farbkorrektur](/de/docs/Web/CSS/CSS_color_adjustment) Modul und die {{cssxref("print-color-adjust")}} Eigenschaft.
- Das [CSS-Bilder](/de/docs/Web/CSS/CSS_images) Modul, in dem CSS [`<gradient>`](/de/docs/Web/CSS/gradient) Bilder definiert sind.
- Die [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace) Schnittstelle
- Das SVG [`<feColorMatrix>`](/de/docs/Web/SVG/Element/feColorMatrix) Element
- [Canvas API: Stile und Farben anwenden](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#colors)
