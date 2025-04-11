---
title: CSS Farben
slug: Web/CSS/CSS_colors
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Das **CSS-Farben**-Modul definiert Farben, Farbtypen, Farbmischung, Opazität und wie Sie diese Farben und Effekte auf HTML-Inhalte anwenden können.

Obwohl dieses Modul nur zwei CSS-Eigenschaften, {{cssxref("color")}} und {{cssxref("opacity")}}, besitzt, hängen über 20 CSS- und SVG-Eigenschaften, CSS-Bilder, at-rules und @media-Regeln von diesen beiden Eigenschaften ab.

### Farben in Aktion

Der untenstehende Farbsyntax-Konverter zeigt die Werte der aktuell ausgewählten Farbe in [rot-grün-blau](/de/docs/Web/CSS/color_value/rgb) (RGB), [hexadezimal](/de/docs/Web/CSS/hex-color) (HEX), [Farbton, Sättigung und Helligkeit](/de/docs/Web/CSS/color_value/hsl) (HSL) und [Farbton, Weißton und Schwarzton](/de/docs/Web/CSS/color_value/hwb) (HWB) CSS-Farbformaten. Alle RGB, HEX, HSL und HWB Farbwerte hier repräsentieren, obwohl unterschiedlich geschrieben, denselben Farbwert.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

Die Auswahl einer Farbe über den [Farbwähler](/de/docs/Web/HTML/Reference/Elements/input/color) und einer Opazität über den [Schieberegler](/de/docs/Web/HTML/Reference/Elements/input/range) aktualisiert die RGB-, HEX-, HSL- und HWB-Werte. Wenn Sie einen neuen Farb- oder Opazitätswert auswählen, aktualisieren sich die Farbe des Hintergrunds und der Schieberegler über die CSS-Eigenschaften {{cssxref("background-color")}} und {{cssxref("accent-color")}}, jeweils.

Um den Code für diesen Farbsyntax-Konverter zu sehen, [sehen Sie den Quellcode auf GitHub an](https://github.com/mdn/css-examples/blob/main/modules/colors.html).

## Referenz

### Eigenschaften

- {{cssxref("color")}}
- {{cssxref("opacity")}}

### At-rules und Deskriptoren

> [!NOTE]
> Das CSS-Farben-Modul führt die {{cssxref("@color-profile")}} at-rule ein, zusammen mit ihren `components`, `rendering-intent` und `src` Deskriptoren. Diese Funktionen wurden noch in keinem Browser implementiert.

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
- {{CSSXref("color_value/light-dark", "light-dark()")}}

> [!NOTE]
> Das CSS-Farben-Modul führt die {{CSSXref("color_value/device-cmyk", "device-cmyk()")}} und `contrast-color()` Funktionen ein, die noch in keinem Browser implementiert wurden.

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
> Das CSS-Farben-Modul führt die `CSSColorProfileRule` Schnittstelle ein, die in keinem Browser implementiert wurde.

## Leitfäden

- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color)
  - : Ein Leitfaden zur Verwendung von CSS, um Farbe für verschiedene Arten von Inhalten anzuwenden, einschließlich aller CSS-Eigenschaften, die `<color>` als Wert akzeptieren.
- [CSS Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values)
  - : Ein Überblick über Farbräume und die verschiedenen `<color>` Funktionalnotationen, die in CSS verfügbar sind.
- [Farbe weise verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
  - : Farbtheorie und Ressourcen, einschließlich der richtigen Farben zu finden, um eine zugängliche Farbpalette zu erstellen, Kontrast und Drucken in Farbe.
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
  - : Dieser Artikel erklärt relative CSS-Farbsyntax, zeigt, welche verschiedenen Optionen es gibt, und betrachtet einige illustrative Beispiele.
- [Verstehen von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
  - : Farbempfindung und die Verwendung von Farben mit farbunempfindlichen (farbenblinden) Benutzern, Benutzern mit eingeschränktem Sehvermögen und Benutzern mit vestibulären oder anderen neurologischen Störungen im Blick.
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
  - : Erklärung der Kontrastanforderungen zwischen Hintergrund- und Vordergrundinhalten, um Lesbarkeit sicherzustellen.

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
  - [`fill`](/de/docs/Web/SVG/Reference/Attribute/fill)
  - [`flood-color`](/de/docs/Web/SVG/Reference/Attribute/flood-color)
  - [`lighting-color`](/de/docs/Web/SVG/Reference/Attribute/lighting-color)
  - [`stop-color`](/de/docs/Web/SVG/Reference/Attribute/stop-color)
  - [`stroke`](/de/docs/Web/SVG/Reference/Attribute/stroke)
- SVG [`color`](/de/docs/Web/SVG/Reference/Attribute/color) Attribut
- {{Glossary("Color_wheel", "Farbkreis")}} Glossarbegriff
- {{Glossary("Interpolation", "Interpolation")}} Glossarbegriff
- Die [`@font-palette-values`](/de/docs/Web/CSS/@font-palette-values) at-rule [`override-colors`](/de/docs/Web/CSS/@font-palette-values/override-colors) Beschreibungszeiger
- Die [`@color-profile`](/de/docs/Web/CSS/@color-profile) at-rule
- Die [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) @media Funktion
- Die [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors) @media Funktion

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Farbkorrektur](/de/docs/Web/CSS/CSS_color_adjustment) Modul und die {{cssxref("print-color-adjust")}} Eigenschaft.
- [CSS Bilder](/de/docs/Web/CSS/CSS_images) Modul, wo CSS [`<gradient>`](/de/docs/Web/CSS/gradient) Bilder definiert sind.
- Die [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace) Schnittstelle
- Das SVG [`<feColorMatrix>`](/de/docs/Web/SVG/Reference/Element/feColorMatrix) Element
- [Canvas API: Anwendung von Stilen und Farben](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#colors)
