---
title: CSS-Farben
slug: Web/CSS/CSS_colors
l10n:
  sourceCommit: 30a5a8d5c29feab27ec268c272a945702282994e
---

{{CSSRef}}

Das Modul **CSS-Farben** definiert Farben, Farbtypen, Farbüberblendungen, Transparenz und wie Sie diese Farben und Effekte auf HTML-Inhalte anwenden können.

Obwohl dieses Modul nur zwei CSS-Eigenschaften hat, {{cssxref("color")}} und {{cssxref("opacity")}}, hängen mehr als 20 CSS- und SVG-Eigenschaften, CSS-Bilder, At-Regeln und @media-Regeln von diesen beiden Eigenschaften ab.

### Farben in Aktion

Der unten stehende Farbsyntax-Converter zeigt die Werte der aktuell ausgewählten Farbe in den CSS-Farbformaten [Rot-Grün-Blau](/de/docs/Web/CSS/color_value/rgb) (RGB), [hexadezimal](/de/docs/Web/CSS/hex-color) (HEX), [Farbton, Sättigung und Helligkeit](/de/docs/Web/CSS/color_value/hsl) (HSL) und [Farbton, Weiße und Schwarze](/de/docs/Web/CSS/color_value/hwb) (HWB). Alle RGB-, HEX-, HSL- und HWB-Farbwerte hier, obwohl unterschiedlich geschrieben, repräsentieren denselben Farbwert.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

Die Auswahl einer Farbe über den [Farbwähler](/de/docs/Web/HTML/Element/input/color) und einer Transparenz über den [Schieberegler](/de/docs/Web/HTML/Element/input/range) aktualisiert die RGB-, HEX-, HSL- und HWB-Werte. Wenn Sie einen neuen Farb- oder Transparenzwert auswählen, wird die Farbe des Hintergrunds und des Schiebereglers über die CSS-Eigenschaften {{cssxref("background-color")}} und {{cssxref("accent-color")}} entsprechend aktualisiert.

Um den Code für diesen Farbsyntax-Converter zu sehen, [sehen Sie sich den Quellcode auf GitHub an](https://github.com/mdn/css-examples/blob/main/modules/colors.html).

## Referenz

### Eigenschaften

- {{cssxref("color")}}
- {{cssxref("opacity")}}

### At-Regeln und Deskriptoren

> [!NOTE]
> Das CSS-Farbmodul führt die @-Regel {{cssxref("@color-profile")}}, sowie deren Deskriptoren `components`, `rendering-intent` und `src` ein. Diese Merkmale wurden noch in keinem Browser implementiert.

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
> Das CSS-Farbmodul führt die Funktionen {{CSSXref("color_value/device-cmyk", "device-cmyk()")}} und `contrast-color()` ein, die noch in keinem Browser implementiert wurden.

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
- {{Glossary("interpolation", "Interpolierung")}}
- {{Glossary("RGB", "RGB")}}
- [`transparent`](/de/docs/Web/CSS/named-color#transparent)

### Schnittstellen

> [!NOTE]
> Das CSS-Farbmodul führt die `CSSColorProfileRule` Schnittstelle ein, die noch in keinem Browser implementiert wurde.

## Leitfäden

- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color)
  - : Ein Leitfaden zur Verwendung von CSS, um Farbe auf verschiedene Arten von Inhalten anzuwenden, einschließlich aller CSS-Eigenschaften, die `<color>` als Wert akzeptieren.
- [CSS-Farbwerte](/de/docs/Web/CSS/CSS_colors/Color_values)
  - : Ein Überblick über Farbräume und die verschiedenen `<color>` funktionalen Notationen, die in CSS verfügbar sind.
- [Farbe weise verwenden](/de/docs/Web/CSS/CSS_colors/Using_color_wisely)
  - : Farbtheorie und Ressourcen, einschließlich der Suche nach den richtigen Farben, um eine zugängliche Farbpalette, Kontraste und farbdruckfähige Farben zu erstellen.
- [Verwendung von relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
  - : Dieser Artikel erklärt relative CSS-Farbsyntax, zeigt die verschiedenen Optionen und betrachtet einige illustrative Beispiele.
- [Verständnis von Farbe und Leuchtdichte](/de/docs/Web/Accessibility/Understanding_Colors_and_Luminance)
  - : Farbwahrnehmung und die Verwendung von Farben unter Berücksichtigung von farbinsensiblen (farbenblinden) Nutzern, Nutzern mit eingeschränkter Sicht und Nutzern mit vestibulären Störungen oder anderen neurologischen Störungen.
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
- SVG-Farbeneigenschaften, die Teil anderer Spezifikationen sind:
  - [`fill`](/de/docs/Web/SVG/Attribute/fill)
  - [`flood-color`](/de/docs/Web/SVG/Attribute/flood-color)
  - [`lighting-color`](/de/docs/Web/SVG/Attribute/lighting-color)
  - [`stop-color`](/de/docs/Web/SVG/Attribute/stop-color)
  - [`stroke`](/de/docs/Web/SVG/Attribute/stroke)
- SVG [`color`](/de/docs/Web/SVG/Attribute/color) Attribut
- {{Glossary("Color_wheel", "Farbkreis")}} Glossarbegriff
- {{Glossary("Interpolation", "Interpolierung")}} Glossarbegriff
- Die [`@font-palette-values`](/de/docs/Web/CSS/@font-palette-values) At-Regel [`override-colors`](/de/docs/Web/CSS/@font-palette-values/override-colors) Deskriptor
- Die [`@color-profile`](/de/docs/Web/CSS/@color-profile) At-Regel
- Die [`color-gamut`](/de/docs/Web/CSS/@media/color-gamut) @media Funktion
- Die [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors) @media Funktion

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das Modul [CSS-Farbanpassung](/de/docs/Web/CSS/CSS_color_adjustment) und die {{cssxref("print-color-adjust")}} Eigenschaft.
- Das Modul [CSS-Bilder](/de/docs/Web/CSS/CSS_images), welches die Definition der CSS [`<gradient>`](/de/docs/Web/CSS/gradient) Bilder enthält.
- Die [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace) Schnittstelle
- Das SVG [`<feColorMatrix>`](/de/docs/Web/SVG/Element/feColorMatrix) Element
- [Canvas API: Anwenden von Stilen und Farben](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#colors)
