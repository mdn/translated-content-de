---
title: CSS Farben
short-title: Colors
slug: Web/CSS/Guides/Colors
l10n:
  sourceCommit: 93b85a5bc2b4589d93185263fd2c14381c36f821
---

Das **CSS Farben** Modul definiert Farben, Farbtypen, Farbüberblendung, Transparenz und wie Sie diese Farben und Effekte auf HTML-Inhalte anwenden können.

Obwohl dieses Modul nur zwei CSS Eigenschaften, {{cssxref("color")}} und {{cssxref("opacity")}}, umfasst, hängen über 20 CSS- und SVG-Eigenschaften, CSS-Bilder, At-Regeln und @media-Regeln von diesen beiden Eigenschaften ab.

## Farben in Aktion

Der Farbsyntax-Konverter unten zeigt die Werte der aktuell ausgewählten Farbe in den CSS-Farbformaten [Rot-Grün-Blau](/de/docs/Web/CSS/Reference/Values/color_value/rgb) (RGB), [hexadezimal](/de/docs/Web/CSS/Reference/Values/hex-color) (HEX), [Tonwert, Sättigung und Helligkeit](/de/docs/Web/CSS/Reference/Values/color_value/hsl) (HSL) und [Tonwert, Weißanteil und Schwarzanteil](/de/docs/Web/CSS/Reference/Values/color_value/hwb) (HWB). Alle hier gezeigten RGB-, HEX-, HSL- und HWB-Farbwerte repräsentieren, obwohl sie unterschiedlich geschrieben sind, denselben Farbwert.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

Das Auswählen einer Farbe über den [Farbwähler](/de/docs/Web/HTML/Reference/Elements/input/color) und eines Transparenzwertes über den [Schieberegler](/de/docs/Web/HTML/Reference/Elements/input/range) aktualisiert die RGB-, HEX-, HSL- und HWB-Werte. Wenn Sie einen neuen Farb- oder Transparenzwert wählen, wird die Farbe des Hintergrunds und des Schiebereglers über die CSS-Eigenschaften {{cssxref("background-color")}} und {{cssxref("accent-color")}} aktualisiert.

Um den Code für diesen Farbsyntax-Konverter zu sehen, [sehen Sie sich den Quellcode auf GitHub an](https://github.com/mdn/css-examples/blob/main/modules/colors.html).

## Referenz

### Eigenschaften

- {{cssxref("color")}}
- {{cssxref("opacity")}}

### At-Regeln und Deskriptoren

Das CSS Farben Modul führt auch die {{cssxref("@color-profile")}} At-Regel ein, zusammen mit den Deskriptoren `components`, `rendering-intent` und `src`. Derzeit unterstützen keine Browser diese Funktionen.

### Funktionen

- Farb-Funktionen:
  - [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb)
  - [`hsl()`](/de/docs/Web/CSS/Reference/Values/color_value/hsl)
  - [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb)
  - [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab)
  - [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch)
  - [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab)
  - [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch)
  - [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color)
- [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix)
- [`contrast-color()`](/de/docs/Web/CSS/Reference/Values/color_value/contrast-color)
- {{CSSXref("color_value/light-dark", "light-dark()")}}

Das CSS Farben Modul führt auch die {{CSSXref("color_value/device-cmyk", "device-cmyk()")}} Funktion ein. Derzeit unterstützen keine Browser diese Funktion.

### Datentypen

- {{cssxref("&lt;color&gt;")}}
- [`<color-function>`](#funktionen)
- {{cssxref("hex-color")}}
- {{cssxref("named-color")}}
- {{cssxref("alpha-value")}}
- {{cssxref("hue")}}
- {{cssxref("system-color")}}
- [`<colorspace-params>`](/de/docs/Web/CSS/Reference/Values/color_value/color#using_predefined_color_spaces_with_color)

### Glossarbegriffe und Schlüsselwörter

- {{Glossary("Color_space", "Farbraum")}}
- [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword)
- {{Glossary("Interpolation", "Interpolation")}}
- {{Glossary("RGB", "RGB")}}
- [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent)

### Schnittstellen

Das CSS Farben Modul führt auch die `CSSColorProfileRule` Schnittstelle ein. Derzeit unterstützen keine Browser diese Funktion.

## Leitfäden

- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/Guides/Colors/Applying_color)
  - : Ein Leitfaden zur Verwendung von CSS, um Farbe auf verschiedene Inhaltstypen anzuwenden, einschließlich aller CSS-Eigenschaften, die `<color>` als Wert akzeptieren.
- [CSS Farbwerte](/de/docs/Web/CSS/Guides/Colors/Color_values)
  - : Ein Überblick über Farbräume und die verschiedenen `<color>` Funktionsnotationen, die in CSS verfügbar sind.
- [Farbe klug nutzen](/de/docs/Web/CSS/Guides/Colors/Using_color_wisely)
  - : Farbtheorie und Ressourcen, einschließlich Auswahl der richtigen Farben zur Erstellung einer barrierefreien Farbpalette, Kontrast und Farbdruck.
- [Relative Farben verwenden](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
  - : Dieser Artikel erklärt die relative CSS Farbsyntax, zeigt die verschiedenen Optionen und stellt einige illustrative Beispiele vor.
- [Verständnis von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
  - : Farbwahrnehmung und der Einsatz von Farben mit Farbinsensitiven (farbenblinde) Nutzern, Nutzern mit eingeschränkter Sicht sowie Nutzern mit vestibulären Störungen oder anderen neurologischen Störungen im Blick.
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
  - : Erläuterung der Kontrastanforderungen zwischen Hintergrund- und Vordergrund-Inhalten, um die Lesbarkeit zu gewährleisten.

## Verwandte Konzepte

- CSS Eigenschaften, die Teil anderer Spezifikationen sind:
  - {{cssxref("accent-color")}}
  - {{cssxref("background-color")}}
  - {{cssxref("background-image")}}
  - {{cssxref("border-color")}}
  - {{cssxref("box-shadow")}}
  - {{cssxref("caret-color")}}
  - {{cssxref("color")}}
  - {{cssxref("color-scheme")}}
  - {{cssxref("column-rule-color")}}
  - {{cssxref("dynamic-range-limit")}}
  - {{cssxref("outline-color")}}
  - {{cssxref("scrollbar-color")}}
  - {{cssxref("text-decoration-color")}}
  - {{cssxref("text-emphasis-color")}}
  - {{cssxref("text-shadow")}}
  - {{cssxref("-webkit-tap-highlight-color")}}
- {{cssxref("dynamic-range-limit-mix()")}} Funktion
- SVG Farbeigenschaften, die Teil anderer Spezifikationen sind:
  - [`fill`](/de/docs/Web/SVG/Reference/Attribute/fill)
  - [`flood-color`](/de/docs/Web/SVG/Reference/Attribute/flood-color)
  - [`lighting-color`](/de/docs/Web/SVG/Reference/Attribute/lighting-color)
  - [`stop-color`](/de/docs/Web/SVG/Reference/Attribute/stop-color)
  - [`stroke`](/de/docs/Web/SVG/Reference/Attribute/stroke)
- SVG [`color`](/de/docs/Web/SVG/Reference/Attribute/color) Attribut
- {{Glossary("Color_wheel", "Farbkreis")}} Glossarbegriff
- {{Glossary("Interpolation", "Interpolation")}} Glossarbegriff
- Die [`@font-palette-values`](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values) At-Regel [`override-colors`](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values/override-colors) Deskriptor
- Die [`@color-profile`](/de/docs/Web/CSS/Reference/At-rules/@color-profile) At-Regel
- Die [`color-gamut`](/de/docs/Web/CSS/Reference/At-rules/@media/color-gamut) @media Funktion
- Die [`forced-colors`](/de/docs/Web/CSS/Reference/At-rules/@media/forced-colors) @media Funktion

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Farb Anpassung](/de/docs/Web/CSS/Guides/Color_adjustment) Modul und die {{cssxref("print-color-adjust")}} Eigenschaft.
- [CSS Bilder](/de/docs/Web/CSS/Guides/Images) Modul, wo CSS [`<gradient>`](/de/docs/Web/CSS/Reference/Values/gradient) Bilder definiert sind.
- Die [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace) Schnittstelle
- Das SVG [`<feColorMatrix>`](/de/docs/Web/SVG/Reference/Element/feColorMatrix) Element
- [Canvas API: Stile und Farben anwenden](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#colors)
- [Farbformatkonverter](/de/docs/Web/CSS/Guides/Colors/Color_format_converter)
- [Farbmischer](/de/docs/Web/CSS/Guides/Colors/Color_mixer)
