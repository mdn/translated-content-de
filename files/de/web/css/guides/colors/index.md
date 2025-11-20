---
title: CSS-Farben
short-title: Colors
slug: Web/CSS/Guides/Colors
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

Das **CSS-Farben**-Modul definiert Farben, Farbtypen, Farbmischung, Transparenz und wie Sie diese Farben und Effekte auf HTML-Inhalte anwenden können.

Obwohl dieses Modul nur zwei CSS-Eigenschaften, {{cssxref("color")}} und {{cssxref("opacity")}}, hat, hängen über 20 CSS- und SVG-Eigenschaften, CSS-Bilder, At-Regeln und @media-Regeln von diesen beiden Eigenschaften ab.

## Farben in Aktion

Der untenstehende Konverter für Farbsyntax zeigt die Werte der aktuell ausgewählten Farbe in [Rot-Grün-Blau](/de/docs/Web/CSS/Reference/Values/color_value/rgb) (RGB), [Hexadezimal](/de/docs/Web/CSS/Reference/Values/hex-color) (HEX), [Farbton, Sättigung und Helligkeit](/de/docs/Web/CSS/Reference/Values/color_value/hsl) (HSL) und [Farbton, Weißheit und Schwärze](/de/docs/Web/CSS/Reference/Values/color_value/hwb) (HWB)-CSS-Farbformaten. Alle hier gezeigten RGB-, HEX-, HSL- und HWB-Farbwerte repräsentieren, obwohl unterschiedlich geschrieben, denselben Farbwert.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

Das Auswählen einer Farbe über den [Farbwähler](/de/docs/Web/HTML/Reference/Elements/input/color) und einer Transparenz über den [Schieberegler](/de/docs/Web/HTML/Reference/Elements/input/range) aktualisiert die RGB-, HEX-, HSL- und HWB-Werte. Wenn Sie einen neuen Farb- oder Transparenzwert wählen, wird die Farbe des Hintergrunds und des Schiebereglers über die CSS-Eigenschaften {{cssxref("background-color")}} bzw. {{cssxref("accent-color")}} aktualisiert.

Um den Code für diesen Farbsyntaxkonverter zu sehen, [sehen Sie sich den Quellcode auf GitHub an](https://github.com/mdn/css-examples/blob/main/modules/colors.html).

## Referenz

### Eigenschaften

- {{cssxref("color")}}
- {{cssxref("opacity")}}

### At-Regeln und Deskriptoren

Das CSS-Farben-Modul führt auch die {{cssxref("@color-profile")}} At-Regel ein, zusammen mit ihren `components`, `rendering-intent` und `src` Deskriptoren. Derzeit unterstützt kein Browser diese Funktionen.

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

Die CSS-Farben-Module führen auch die {{CSSXref("color_value/device-cmyk", "device-cmyk()")}} Funktion ein. Derzeit unterstützt kein Browser diese Funktion.

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

Das CSS-Farben-Modul führt auch die `CSSColorProfileRule`-Schnittstelle ein. Derzeit unterstützt kein Browser diese Funktion.

## Leitfäden

- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/Guides/Colors/Applying_color)
  - : Ein Leitfaden zur Verwendung von CSS, um Farbe auf verschiedene Inhaltstypen anzuwenden, einschließlich aller CSS-Eigenschaften, die `<color>` als Wert akzeptieren.
- [CSS-Farbwerte](/de/docs/Web/CSS/Guides/Colors/Color_values)
  - : Ein Überblick über Farbräume und die verschiedenen `<color>` Funktionsnotationen, die in CSS verfügbar sind.
- [Farbe weise verwenden](/de/docs/Web/CSS/Guides/Colors/Using_color_wisely)
  - : Farbtheorie und Ressourcen, einschließlich der richtigen Farben zu finden, um eine zugängliche Farbpalette, Kontrast und Farbdruck zu erstellen.
- [Verwendung relativer Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
  - : Dieser Artikel erklärt die relative CSS-Farbsystematik, zeigt die verschiedenen Möglichkeiten und präsentiert einige illustrative Beispiele.
- [Verständnis von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
  - : Farbempfindung und der Einsatz von Farben in Bezug auf farbenblinde (farbinsensitive) Nutzer, Nutzer mit eingeschränktem Sehvermögen und Nutzer mit vestibulären Störungen oder anderen neurologischen Störungen.
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
  - : Erklärung der Kontrastanforderungen zwischen Hintergrund- und Vordergrundinhalten, um die Lesbarkeit sicherzustellen.
- [CSS-Wertserialisierung](/de/docs/Web/API/CSS_Object_Model/CSS_value_serialization)
  - : Wie [CSSOM APIs](/de/docs/Web/API/CSS_Object_Model) Farbe und andere Werte in standardisierte Zeichenfolgen darstellt.

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
- {{Glossary("Color_wheel", "Farbkreis")}} Glossarbegriff
- {{Glossary("Interpolation", "Interpolation")}} Glossarbegriff
- Die [`@font-palette-values`](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values) At-Regel und der [`override-colors`](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values/override-colors) Deskriptor
- Die [`@color-profile`](/de/docs/Web/CSS/Reference/At-rules/@color-profile) At-Regel
- Die [`color-gamut`](/de/docs/Web/CSS/Reference/At-rules/@media/color-gamut) @media-Funktion
- Die [`forced-colors`](/de/docs/Web/CSS/Reference/At-rules/@media/forced-colors) @media-Funktion

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Farbkorrektur](/de/docs/Web/CSS/Guides/Color_adjustment) Modul und {{cssxref("print-color-adjust")}}
- [`<gradient>`](/de/docs/Web/CSS/Reference/Values/gradient) definiert im [CSS-Bilder](/de/docs/Web/CSS/Guides/Images) Modul
- Die [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace) Schnittstelle
- [`<feColorMatrix>`](/de/docs/Web/SVG/Reference/Element/feColorMatrix) SVG-Element
- [Canvas API: Anwendung von Stilen und Farben](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#colors)
- Werkzeuge:
  - [Farbformat-Konverter](/de/docs/Web/CSS/Guides/Colors/Color_format_converter)
  - [Farbmischer](/de/docs/Web/CSS/Guides/Colors/Color_mixer)
