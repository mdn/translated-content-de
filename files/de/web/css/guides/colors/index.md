---
title: CSS-Farben
short-title: Colors
slug: Web/CSS/Guides/Colors
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Das **CSS Colors** Modul definiert Farben, Farbtypen, Farbvermischung, Deckkraft und wie Sie diese Farben und Effekte auf HTML-Inhalte anwenden können.

Obwohl dieses Modul nur zwei CSS-Eigenschaften, {{cssxref("color")}} und {{cssxref("opacity")}}, hat, basieren über 20 CSS- und SVG-Eigenschaften, CSS-Bilder, At-Rules und @media-Regeln auf diesen beiden Eigenschaften.

## Farben in Aktion

Der unten stehende Farbsyntax-Konverter zeigt die Werte der aktuell ausgewählten Farbe in [rot-grün-blau](/de/docs/Web/CSS/Reference/Values/color_value/rgb) (RGB), [hexadezimal](/de/docs/Web/CSS/Reference/Values/hex-color) (HEX), [Farbton, Sättigung und Helligkeit](/de/docs/Web/CSS/Reference/Values/color_value/hsl) (HSL) und [Farbton, Weißheit und Schwärze](/de/docs/Web/CSS/Reference/Values/color_value/hwb) (HWB) CSS-Farbformaten. Alle RGB-, HEX-, HSL- und HWB-Farbwerte hier stellen, obwohl unterschiedlich geschrieben, denselben Farbwert dar.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

Die Auswahl einer Farbe über den [Farbwähler](/de/docs/Web/HTML/Reference/Elements/input/color) und einer Deckkraft über den [Schieberegler](/de/docs/Web/HTML/Reference/Elements/input/range) aktualisiert die RGB-, HEX-, HSL- und HWB-Werte. Wenn Sie einen neuen Farb- oder Deckkraftwert auswählen, aktualisieren sich die Hintergrundfarbe und der Schieberegler über die CSS-Eigenschaften {{cssxref("background-color")}} und {{cssxref("accent-color")}}, jeweils.

Um den Code für diesen Farbsyntax-Konverter zu sehen, [sehen Sie sich den Quellcode auf GitHub an](https://github.com/mdn/css-examples/blob/main/modules/colors.html).

## Referenz

### Eigenschaften

- {{cssxref("color")}}
- {{cssxref("opacity")}}

### At-Rules und Deskriptoren

Das CSS Colors Modul führt auch die {{cssxref("@color-profile")}} At-Rule ein, zusammen mit deren `components`, `rendering-intent` und `src` Deskriptoren. Derzeit unterstützen keine Browser diese Funktionen.

### Funktionen

- Farbfunktionen:
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

Das CSS-Farbmodul führt auch die {{CSSXref("color_value/device-cmyk", "device-cmyk()")}} Funktion ein. Derzeit unterstützen keine Browser diese Funktion.

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

Das CSS-Farbmodul führt auch die `CSSColorProfileRule` Schnittstelle ein. Derzeit unterstützen keine Browser diese Funktion.

## Leitfäden

- [Farbe auf HTML-Elemente anwenden mit CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color)
  - : Ein Leitfaden zur Verwendung von CSS, um Farbe auf verschiedene Arten von Inhalten anzuwenden, einschließlich aller CSS-Eigenschaften, die `<color>` als Wert akzeptieren.
- [CSS-Farbwerte](/de/docs/Web/CSS/Guides/Colors/Color_values)
  - : Ein Überblick über Farbräume und die verschiedenen `<color>` Funktionalnotationen, die in CSS verfügbar sind.
- [Farbe klug einsetzen](/de/docs/Web/CSS/Guides/Colors/Using_color_wisely)
  - : Farbtheorie und Ressourcen, einschließlich der Suche nach den richtigen Farben, um eine zugängliche Farbpalette, Kontrast und Farbdrucke zu erstellen.
- [Relative Farben verwenden](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
  - : Dieser Artikel erklärt relative CSS-Farbsyntax, zeigt die verschiedenen Optionen und einige illustrative Beispiele.
- [Farbe und Luminanz verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
  - : Farbempfindung und der Einsatz von Farben für farbenblind empfindliche Nutzer, Nutzer mit eingeschränktem Sehvermögen und Nutzer mit vestibulären Störungen oder anderen neurologischen Störungen.
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
  - : Erklärung der Kontrastanforderungen zwischen Hintergrund- und Vordergrundinhalten, um Lesbarkeit zu gewährleisten.
- [CSS-Wertserialisierung](/de/docs/Web/API/CSS_Object_Model/CSS_value_serialization)
  - : Wie [CSSOM-APIs](/de/docs/Web/API/CSS_Object_Model) Farbe und andere Werte in standardisierte String-Repräsentationen serialisieren.

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
  - {{cssxref("dynamic-range-limit")}}
  - {{cssxref("outline-color")}}
  - {{cssxref("scrollbar-color")}}
  - {{cssxref("text-decoration-color")}}
  - {{cssxref("text-emphasis-color")}}
  - {{cssxref("text-shadow")}}
  - {{cssxref("-webkit-tap-highlight-color")}}
- {{cssxref("dynamic-range-limit-mix()")}} Funktion
- SVG-Farbeigenschaften, die Teil anderer Spezifikationen sind:
  - [`fill`](/de/docs/Web/SVG/Reference/Attribute/fill)
  - [`flood-color`](/de/docs/Web/SVG/Reference/Attribute/flood-color)
  - [`lighting-color`](/de/docs/Web/SVG/Reference/Attribute/lighting-color)
  - [`stop-color`](/de/docs/Web/SVG/Reference/Attribute/stop-color)
  - [`stroke`](/de/docs/Web/SVG/Reference/Attribute/stroke)
- SVG [`color`](/de/docs/Web/SVG/Reference/Attribute/color) Attribut
- {{Glossary("Color_wheel", "Farbrad")}} Glossarbegriff
- {{Glossary("Interpolation", "Interpolation")}} Glossarbegriff
- Die [`@font-palette-values`](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values) At-Rule [`override-colors`](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values/override-colors) Deskriptor
- Die [`@color-profile`](/de/docs/Web/CSS/Reference/At-rules/@color-profile) At-Rule
- Die [`color-gamut`](/de/docs/Web/CSS/Reference/At-rules/@media/color-gamut) @media Funktion
- Die [`forced-colors`](/de/docs/Web/CSS/Reference/At-rules/@media/forced-colors) @media Funktion

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Farbkorrektur](/de/docs/Web/CSS/Guides/Color_adjustment) Modul und die {{cssxref("print-color-adjust")}} Eigenschaft.
- [CSS Bilder](/de/docs/Web/CSS/Guides/Images) Modul, in welchem CSS [`<gradient>`](/de/docs/Web/CSS/Reference/Values/gradient) Bilder definiert sind.
- Die [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace) Schnittstelle
- Das SVG [`<feColorMatrix>`](/de/docs/Web/SVG/Reference/Element/feColorMatrix) Element
- [Canvas API: Anwenden von Stilen und Farben](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#colors)
- [Farbformat-Konverter](/de/docs/Web/CSS/Guides/Colors/Color_format_converter)
- [Farbmischer](/de/docs/Web/CSS/Guides/Colors/Color_mixer)
