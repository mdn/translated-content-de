---
title: CSS-Farben
slug: Web/CSS/CSS_colors
l10n:
  sourceCommit: 016ecd8ccaed866c4d8d995fb18379c6e48f3b50
---

Das **CSS-Farben**-Modul definiert Farben, Farbtypen, Farbverblendung, Transparenz und wie Sie diese Farben und Effekte auf HTML-Inhalte anwenden können.

Während dieses Modul nur zwei CSS-Eigenschaften hat, {{cssxref("color")}} und {{cssxref("opacity")}}, hängen über 20 CSS- und SVG-Eigenschaften, CSS-Bilder, At-Regeln und @media-Regeln von diesen beiden Eigenschaften ab.

## Farben in Aktion

Der untenstehende Farbsyntax-Konverter zeigt die Werte der aktuell ausgewählten Farbe in [rot-grün-blau](/de/docs/Web/CSS/color_value/rgb) (RGB), [hexadezimal](/de/docs/Web/CSS/hex-color) (HEX), [Farbton, Sättigung und Helligkeit](/de/docs/Web/CSS/color_value/hsl) (HSL) und [Farbton, Weiße und Schwarze](/de/docs/Web/CSS/color_value/hwb) (HWB) CSS-Farbformaten. Alle hier dargestellten RGB-, HEX-, HSL- und HWB-Farbwerte repräsentieren denselben Farbwert, auch wenn sie unterschiedlich geschrieben sind.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

Wenn Sie eine Farbe über den [Farbwähler](/de/docs/Web/HTML/Reference/Elements/input/color) und eine Transparenz über den [Schieberegler](/de/docs/Web/HTML/Reference/Elements/input/range) auswählen, werden die RGB-, HEX-, HSL- und HWB-Werte aktualisiert. Wenn Sie einen neuen Farb- oder Transparenzwert wählen, werden die Hintergrundfarbe und der Schieberegler über die CSS-Eigenschaften {{cssxref("background-color")}} und {{cssxref("accent-color")}} aktualisiert.

Um den Code für diesen Farbsyntax-Konverter zu sehen, [sehen Sie sich den Quellcode auf GitHub an](https://github.com/mdn/css-examples/blob/main/modules/colors.html).

## Referenz

### Eigenschaften

- {{cssxref("color")}}
- {{cssxref("dynamic-range-limit")}}
- {{cssxref("opacity")}}

### At-Regeln und Deskriptoren

Das CSS-Farben-Modul führt auch die {{cssxref("@color-profile")}} At-Regel ein, zusammen mit den Deskriptoren `components`, `rendering-intent` und `src`. Derzeit unterstützen keine Browser diese Funktionen.

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
- [`contrast-color()`](/de/docs/Web/CSS/color_value/contrast-color)
- {{CSSXref("color_value/light-dark", "light-dark()")}}
- {{cssxref("dynamic-range-limit-mix()")}}

Die CSS-Farbmodule führen auch die {{CSSXref("color_value/device-cmyk", "device-cmyk()")}}, `contrast-color()`, und `hdr-color()` Funktionen ein. Derzeit unterstützen keine Browser diese Funktionen.

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

- {{Glossary("Color_space", "Farbraum")}}
- [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword)
- {{Glossary("Interpolation", "Interpolation")}}
- {{Glossary("RGB", "RGB")}}
- [`transparent`](/de/docs/Web/CSS/named-color#transparent)

### Schnittstellen

Das CSS-Farben-Modul führt auch die `CSSColorProfileRule` Schnittstelle ein. Derzeit unterstützen keine Browser diese Funktion.

## Leitfäden

- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
  - : Ein Leitfaden zur Verwendung von CSS, um auf verschiedene Arten von Inhalten Farbe anzuwenden, einschließlich aller CSS-Eigenschaften, die `<color>` als Wert akzeptieren.
- [CSS-Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values)
  - : Ein Überblick über Farbräume und die verschiedenen `<color>` Funktionalnotationen, die in CSS verfügbar sind.
- [Farben weise verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
  - : Farbtheorie und Ressourcen, einschließlich der Suche nach den richtigen Farben, um eine zugängliche Farbpalette, Kontrast und farbiges Drucken zu erstellen.
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
  - : Dieser Artikel erklärt relative CSS-Farbsyntax, zeigt die verschiedenen Optionen und betrachtet einige illustrative Beispiele.
- [Farbformat-Konverter](/de/docs/Web/CSS/CSS_colors/Color_format_converter)
  - : Ein Werkzeug, mit dem Sie eine Farbe eingeben oder auswählen und ihren entsprechenden Wert in jedem CSS [Farbformat](/de/docs/Web/CSS/color_value) kopieren können.
- [Verständnis von Farbe und Luminanz](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
  - : Farbwahrnehmung und Verwendung von Farben mit farbunempfindlichen (farbenblinden) Benutzern, Benutzern mit eingeschränktem Sehvermögen und Benutzern mit vestibulären Störungen oder anderen neurologischen Störungen im Hinterkopf.
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

- [CSS Farbkorrektur](/de/docs/Web/CSS/CSS_color_adjustment) Modul und die {{cssxref("print-color-adjust")}} Eigenschaft.
- [CSS-Bilder](/de/docs/Web/CSS/CSS_images) Modul, wo CSS [`<gradient>`](/de/docs/Web/CSS/gradient) Bilder definiert werden.
- Die [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace) Schnittstelle
- Das SVG [`<feColorMatrix>`](/de/docs/Web/SVG/Reference/Element/feColorMatrix) Element
- [Canvas API: Anwendungsstile und -farben](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#colors)
