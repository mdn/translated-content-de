---
title: CSS-Farben
short-title: Colors
slug: Web/CSS/Guides/Colors
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS-Farben**-Modul definiert Farben, Farbtypen, Farbmischung, Transparenz und wie Sie diese Farben und Effekte auf HTML-Inhalte anwenden können.

Während dieses Modul nur zwei CSS-Eigenschaften hat, {{cssxref("color")}} und {{cssxref("opacity")}}, hängen über 20 CSS- und SVG-Eigenschaften, CSS-Bilder, at-rules und @media-Regeln von diesen beiden Eigenschaften ab.

## Farben im Einsatz

Der untenstehende Farbsyntax-Konverter zeigt die Werte der aktuell ausgewählten Farbe in [Rot-Grün-Blau](/de/docs/Web/CSS/Reference/Values/color_value/rgb) (RGB), [hexadezimal](/de/docs/Web/CSS/Reference/Values/hex-color) (HEX), [Farbton, Sättigung und Helligkeit](/de/docs/Web/CSS/Reference/Values/color_value/hsl) (HSL) und [Farbton, Weiße und Schwärze](/de/docs/Web/CSS/Reference/Values/color_value/hwb) (HWB) CSS-Farbformaten. Alle hier dargestellten RGB-, HEX-, HSL- und HWB-Farbwerte repräsentieren, obwohl sie unterschiedlich geschrieben sind, denselben Farbwert.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

Durch das Auswählen einer Farbe über den [Farbwähler](/de/docs/Web/HTML/Reference/Elements/input/color) und einer Transparenz über den [Schieberegler](/de/docs/Web/HTML/Reference/Elements/input/range) werden die RGB-, HEX-, HSL- und HWB-Werte aktualisiert. Wenn Sie einen neuen Farb- oder Transparenzwert wählen, werden die Hintergrundfarbe und der Schieberegler durch die CSS-Eigenschaften {{cssxref("background-color")}} und {{cssxref("accent-color")}} aktualisiert.

Um den Quellcode für diesen Farbsyntax-Konverter zu sehen, [sehen Sie sich den Quellcode auf GitHub an](https://github.com/mdn/css-examples/blob/main/modules/colors.html).

## Referenz

### Eigenschaften

- {{cssxref("color")}}
- {{cssxref("dynamic-range-limit")}}
- {{cssxref("opacity")}}

### At-Rules und Deskriptoren

Das CSS-Farben-Modul führt auch das At-rule {{cssxref("@color-profile")}} ein, zusammen mit seinen Deskriptoren `components`, `rendering-intent` und `src`. Derzeit unterstützt kein Browser diese Funktionen.

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

Die CSS-Farbmodule führen auch die Funktionen {{CSSXref("color_value/device-cmyk", "device-cmyk()")}}, `contrast-color()` und `hdr-color()` ein. Derzeit unterstützt kein Browser diese Funktionen.

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

Das CSS-Farben-Modul führt auch die Schnittstelle `CSSColorProfileRule` ein. Derzeit unterstützt kein Browser diese Funktionen.

## Leitfäden

- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/Guides/Colors/Applying_color)
  - : Ein Leitfaden zur Anwendung von CSS, um Farbe auf verschiedene Arten von Inhalten anzuwenden, einschließlich aller CSS-Eigenschaften, die `<color>` als Wert akzeptieren.
- [CSS-Farbwerte](/de/docs/Web/CSS/Guides/Colors/Color_values)
  - : Ein Überblick über Farbräume und die verschiedenen funktionalen `<color>`-Notationen, die in CSS verfügbar sind.
- [Farben weise verwenden](/de/docs/Web/CSS/Guides/Colors/Using_color_wisely)
  - : Farbtheorie und Ressourcen, einschließlich der Suche nach den richtigen Farben, um eine zugängliche Farbpalette, Kontrast und Farbdruck zu erstellen.
- [Relative Farben verwenden](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
  - : Dieser Artikel erklärt relative CSS-Farbsyntax, zeigt, was die verschiedenen Optionen sind, und betrachtet einige illustrative Beispiele.
- [Farbformat-Umwandler](/de/docs/Web/CSS/Guides/Colors/Color_format_converter)
  - : Ein Tool, das Ihnen erlaubt, eine Farbe einzugeben oder auszuwählen und ihren entsprechenden Wert in jedem CSS-[Farbformat](/de/docs/Web/CSS/Reference/Values/color_value) zu kopieren.
- [Farbe und Leuchtdichte verstehen](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance)
  - : Farbwahrnehmung und die Verwendung von Farben unter Berücksichtigung farbunempfindlicher (farbenblinder) Benutzer, Benutzer mit eingeschränkter Sehkraft und Benutzer mit vestibulären Störungen oder anderen neurologischen Störungen.
- [WCAG 1.4.1: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
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
  - [`fill`](/de/docs/Web/SVG/Reference/Attribute/fill)
  - [`flood-color`](/de/docs/Web/SVG/Reference/Attribute/flood-color)
  - [`lighting-color`](/de/docs/Web/SVG/Reference/Attribute/lighting-color)
  - [`stop-color`](/de/docs/Web/SVG/Reference/Attribute/stop-color)
  - [`stroke`](/de/docs/Web/SVG/Reference/Attribute/stroke)
- SVG [`color`](/de/docs/Web/SVG/Reference/Attribute/color)-Attribut
- {{Glossary("Color_wheel", "Farbkreis")}}-Glossarbegriff
- {{Glossary("Interpolation", "Interpolation")}}-Glossarbegriff
- Das At-rule [`@font-palette-values`](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values) Deskriptor [`override-colors`](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values/override-colors)
- Das At-rule [`@color-profile`](/de/docs/Web/CSS/Reference/At-rules/@color-profile)
- Das [`color-gamut`](/de/docs/Web/CSS/Reference/At-rules/@media/color-gamut) @media-Feature
- Das [`forced-colors`](/de/docs/Web/CSS/Reference/At-rules/@media/forced-colors) @media-Feature

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Modul zur CSS-Farbanpassung](/de/docs/Web/CSS/Guides/Color_adjustment) und die Eigenschaft {{cssxref("print-color-adjust")}}.
- [CSS-Bilder](/de/docs/Web/CSS/Guides/Images)-Modul, in dem CSS-`<gradient>`-Bilder definiert sind.
- Die [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace)-Schnittstelle
- Das SVG-Element [`<feColorMatrix>`](/de/docs/Web/SVG/Reference/Element/feColorMatrix)
- [Canvas API: Stile und Farben anwenden](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#colors)
