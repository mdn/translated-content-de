---
title: CSS-Farben
slug: Web/CSS/CSS_colors
l10n:
  sourceCommit: c148812e0874220770cab62c16f33f48ceb98e99
---

Das **CSS-Farben**-Modul definiert Farben, Farbtypen, Farbmischung, Transparenz und wie Sie diese Farben und Effekte auf HTML-Inhalte anwenden können.

Obwohl dieses Modul nur zwei CSS-Eigenschaften umfasst, {{cssxref("color")}} und {{cssxref("opacity")}}, hängen über 20 CSS- und SVG-Eigenschaften, CSS-Bilder, At-Regeln und @media-Regeln von diesen beiden Eigenschaften ab.

## Farben in Aktion

Der untenstehende Farbsyntax-Konverter zeigt die Werte der aktuell ausgewählten Farbe in den CSS-Farbformaten [rot-grün-blau](/de/docs/Web/CSS/color_value/rgb) (RGB), [hexadezimal](/de/docs/Web/CSS/hex-color) (HEX), [Farbton, Sättigung und Helligkeit](/de/docs/Web/CSS/color_value/hsl) (HSL) und [Farbton, Weißheit und Schwärze](/de/docs/Web/CSS/color_value/hwb) (HWB). Alle hier dargestellten RGB-, HEX-, HSL- und HWB-Farbwerte stellen, obwohl unterschiedlich geschrieben, denselben Farbwert dar.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

Die Auswahl einer Farbe über den [Farbwähler](/de/docs/Web/HTML/Reference/Elements/input/color) und einer Transparenz über den [Schieberegler](/de/docs/Web/HTML/Reference/Elements/input/range) aktualisiert die RGB-, HEX-, HSL- und HWB-Werte. Wenn Sie einen neuen Farb- oder Transparenzwert wählen, aktualisiert sich die Farbe des Hintergrunds und des Schiebereglers über die CSS-Eigenschaften {{cssxref("background-color")}} und {{cssxref("accent-color")}}.

Um den Code für diesen Farbsyntax-Konverter zu sehen, [sehen Sie sich den Quellcode auf GitHub an](https://github.com/mdn/css-examples/blob/main/modules/colors.html).

## Referenz

### Eigenschaften

- {{cssxref("color")}}
- {{cssxref("opacity")}}

### At-Regeln und Deskriptoren

Das CSS-Farbenmodul führt auch die {{cssxref("@color-profile")}}-At-Regel ein, zusammen mit den Deskriptoren `components`, `rendering-intent` und `src`. Derzeit unterstützen keine Browser diese Funktionen.

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

Das CSS-Farbenmodul führt auch die Funktionen {{CSSXref("color_value/device-cmyk", "device-cmyk()")}} und `contrast-color()` ein. Derzeit unterstützen keine Browser diese Funktionen.

### Datentypen

- {{cssxref("&lt;color&gt;")}}
- [`<color-function>`](#funktionen)
- {{cssxref("hex-color")}}
- {{cssxref("named-color")}}
- {{cssxref("alpha-value")}}
- {{cssxref("hue")}}
- {{cssxref("system-color")}}
- [`<colorspace-params>`](/de/docs/Web/CSS/color_value/color#using_predefined_color_spaces_with_color)

### Glossareinträge und Schlüsselwörter

- {{Glossary("color_space", "Farbraum")}}
- [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword)
- {{Glossary("interpolation", "Interpolation")}}
- {{Glossary("RGB", "RGB")}}
- [`transparent`](/de/docs/Web/CSS/named-color#transparent)

### Schnittstellen

Das CSS-Farben-Modul führt auch die `CSSColorProfileRule`-Schnittstelle ein. Derzeit unterstützen keine Browser diese Funktion.

## Leitfaden

- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
  - : Ein Leitfaden zur Nutzung von CSS, um Farbe auf verschiedene Arten von Inhalten anzuwenden, einschließlich aller CSS-Eigenschaften, die `<color>` als Wert akzeptieren.
- [CSS-Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values)
  - : Ein Überblick über Farbräume und die verschiedenen `<color>` Funktionalnotationen, die in CSS verfügbar sind.
- [Farben klug verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
  - : Farbtheorie und Ressourcen, einschließlich der Suche nach den richtigen Farben, um eine zugängliche Farbpalette, Kontrast und das Drucken in Farbe zu erstellen.
- [Relative Farben verwenden](/de/docs/Web/CSS/CSS_colors/Relative_colors)
  - : Dieser Artikel erklärt die relative CSS-Farbsyntax, zeigt die verschiedenen Optionen und veranschaulicht sie mit einigen Beispielen.
- [Farbwähler](/de/docs/Web/CSS/CSS_colors/Color_picker)
  - : Ein Tool, das es Ihnen ermöglicht, eine Farbe im sRGB-Farbraum auszuwählen und zwischen verschiedenen CSS-Farbformaten zu konvertieren, um das Verständnis der verschiedenen Farbsyntax zu fördern.
- [Farbe und Leuchtdichte verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
  - : Farbempfindung und die Verwendung von Farben mit farbunempfindlichen (farbenblinden) Benutzern, Benutzern mit eingeschränkter Sehkraft und Benutzern mit vestibulären oder anderen neurologischen Störungen im Hinterkopf.
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
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
- SVG-Farbeigenschaften, die Teil anderer Spezifikationen sind:
  - [`fill`](/de/docs/Web/SVG/Reference/Attribute/fill)
  - [`flood-color`](/de/docs/Web/SVG/Reference/Attribute/flood-color)
  - [`lighting-color`](/de/docs/Web/SVG/Reference/Attribute/lighting-color)
  - [`stop-color`](/de/docs/Web/SVG/Reference/Attribute/stop-color)
  - [`stroke`](/de/docs/Web/SVG/Reference/Attribute/stroke)
- SVG [`color`](/de/docs/Web/SVG/Reference/Attribute/color)-Attribut
- {{Glossary("Color_wheel", "Farbkreis")}} Glossarbegriff
- {{Glossary("Interpolation", "Interpolation")}} Glossarbegriff
- Die [`@font-palette-values`](/de/docs/Web/CSS/@font-palette-values) At-Regel [`override-colors`](/de/docs/Web/CSS/@font-palette-values/override-colors) Deskriptor
- Die [`@color-profile`](/de/docs/Web/CSS/@color-profile) At-Regel
- Die [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) @media-Funktion
- Die [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors) @media-Funktion

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Farbabstimmung](/de/docs/Web/CSS/CSS_color_adjustment) Modul und die {{cssxref("print-color-adjust")}} Eigenschaft.
- [CSS-Bilder](/de/docs/Web/CSS/CSS_images) Modul, welches die CSS [`<gradient>`](/de/docs/Web/CSS/gradient) Bilder definiert.
- Die [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace) Schnittstelle
- Das SVG [`<feColorMatrix>`](/de/docs/Web/SVG/Reference/Element/feColorMatrix) Element
- [Canvas-API: Anwenden von Stilen und Farben](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#colors)
