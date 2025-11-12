---
title: CSS Farben
short-title: Colors
slug: Web/CSS/Guides/Colors
l10n:
  sourceCommit: f6567c8390527d643d9327ddc3e948c0deac142d
---

Das **CSS Farben**-Modul definiert Farben, Farbtypen, Farbvermischung, Opazität und wie Sie diese Farben und Effekte auf HTML-Inhalte anwenden können.

Obwohl dieses Modul nur zwei CSS-Eigenschaften, {{cssxref("color")}} und {{cssxref("opacity")}}, umfasst, hängen über 20 CSS- und SVG-Eigenschaften, CSS-Bilder, At-rules und @media-Regeln von diesen beiden Eigenschaften ab.

## Farben in Aktion

Der untenstehende Farbsyntax-Konverter zeigt die Werte der aktuell ausgewählten Farbe in [rot-grün-blau](/de/docs/Web/CSS/Reference/Values/color_value/rgb) (RGB), [hexadezimal](/de/docs/Web/CSS/Reference/Values/hex-color) (HEX), [Farbton, Sättigung und Helligkeit](/de/docs/Web/CSS/Reference/Values/color_value/hsl) (HSL) und [Farbton, Weißheitsgrad und Schwarzheitsgrad](/de/docs/Web/CSS/Reference/Values/color_value/hwb) (HWB) CSS-Farbformaten. Alle RGB-, HEX-, HSL- und HWB-Farbwerte hier, obwohl unterschiedlich geschrieben, repräsentieren denselben Farbwert.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

Das Auswählen einer Farbe über den [Farbwähler](/de/docs/Web/HTML/Reference/Elements/input/color) und einer Opazität über den [Slider](/de/docs/Web/HTML/Reference/Elements/input/range) aktualisiert die RGB-, HEX-, HSL- und HWB-Werte. Wenn Sie einen neuen Farb- oder Opazitätswert wählen, werden die Farbe des Hintergrunds und des Sliders über die CSS-Eigenschaften {{cssxref("background-color")}} und {{cssxref("accent-color")}} aktualisiert.

Um den Code für diesen Farbsyntax-Konverter zu sehen, [sehen Sie sich den Quellcode auf GitHub an](https://github.com/mdn/css-examples/blob/main/modules/colors.html).

## Referenz

### Eigenschaften

- {{cssxref("color")}}
- {{cssxref("dynamic-range-limit")}}
- {{cssxref("opacity")}}

### At-rules und Deskriptoren

Das CSS Farben-Modul führt auch die {{cssxref("@color-profile")}} At-rule ein, zusammen mit den Deskriptoren `components`, `rendering-intent` und `src`. Derzeit unterstützen keine Browser diese Funktionen.

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
- {{cssxref("dynamic-range-limit-mix()")}}

Die CSS Farbmodule führen auch die {{CSSXref("color_value/device-cmyk", "device-cmyk()")}}, `contrast-color()`, und `hdr-color()` Funktionen ein. Derzeit unterstützen keine Browser diese Funktionen.

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

Das CSS Farben-Modul führt auch die `CSSColorProfileRule` Schnittstelle ein. Derzeit unterstützen keine Browser diese Funktion.

## Leitfäden

- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/Guides/Colors/Applying_color)
  - : Ein Leitfaden zur Verwendung von CSS, um Farbe auf verschiedene Arten von Inhalten anzuwenden, einschließlich aller CSS-Eigenschaften, die `<color>` als Wert akzeptieren.
- [CSS Farbwerte](/de/docs/Web/CSS/Guides/Colors/Color_values)
  - : Ein Überblick über Farbräume und die verschiedenen `<color>` funktionellen Notationen, die in CSS verfügbar sind.
- [Farben weise verwenden](/de/docs/Web/CSS/Guides/Colors/Using_color_wisely)
  - : Farbtheorie und Ressourcen, einschließlich der richtigen Farben zu finden, um eine zugängliche Farbpalette, Kontrast und Farbdruck zu erstellen.
- [Relative Farben verwenden](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
  - : Dieser Artikel erklärt die relative CSS Farbsyntax, zeigt, welche Optionen es gibt und betrachtet einige anschauliche Beispiele.
- [Farbformat-Konverter](/de/docs/Web/CSS/Guides/Colors/Color_format_converter)
  - : Ein Tool, das Ihnen erlaubt, eine Farbe einzugeben oder auszuwählen und ihren entsprechenden Wert in jedem CSS [Farbformat](/de/docs/Web/CSS/Reference/Values/color_value) zu kopieren.
- [Farbe und Leuchtdichte verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
  - : Farbempfindung und die Verwendung von Farben unter Berücksichtigung von farbenblindem, sehbehindertem und nutzern mit vestibulären Störungen oder anderen neurologischen Störungen.
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
  - : Erläuterung der Anforderungen an den Kontrast zwischen Hintergrund- und Vordergrundinhalten zur Sicherstellung der Lesbarkeit.

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
- SVG Farbeigenschaften, die Teil anderer Spezifikationen sind:
  - [`fill`](/de/docs/Web/SVG/Reference/Attribute/fill)
  - [`flood-color`](/de/docs/Web/SVG/Reference/Attribute/flood-color)
  - [`lighting-color`](/de/docs/Web/SVG/Reference/Attribute/lighting-color)
  - [`stop-color`](/de/docs/Web/SVG/Reference/Attribute/stop-color)
  - [`stroke`](/de/docs/Web/SVG/Reference/Attribute/stroke)
- SVG [`color`](/de/docs/Web/SVG/Reference/Attribute/color) Attribut
- {{Glossary("Color_wheel", "Farbkreis")}} Glossarbegriff
- {{Glossary("Interpolation", "Interpolation")}} Glossarbegriff
- Die [`@font-palette-values`](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values) At-rule [`override-colors`](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values/override-colors) Deskriptor
- Die [`@color-profile`](/de/docs/Web/CSS/Reference/At-rules/@color-profile) At-rule
- Das [`color-gamut`](/de/docs/Web/CSS/Reference/At-rules/@media/color-gamut) @media Feature
- Das [`forced-colors`](/de/docs/Web/CSS/Reference/At-rules/@media/forced-colors) @media Feature

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Farbkorrektur](/de/docs/Web/CSS/Guides/Color_adjustment) Modul und die {{cssxref("print-color-adjust")}} Eigenschaft.
- [CSS Bilder](/de/docs/Web/CSS/Guides/Images) Modul, wo die CSS [`<gradient>`](/de/docs/Web/CSS/Reference/Values/gradient) Bilder definiert sind.
- Die [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace) Schnittstelle
- Das SVG [`<feColorMatrix>`](/de/docs/Web/SVG/Reference/Element/feColorMatrix) Element
- [Canvas API: Stile und Farben anwenden](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#colors)
