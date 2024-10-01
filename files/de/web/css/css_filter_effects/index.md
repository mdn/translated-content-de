---
title: CSS-Filtereffekte
slug: Web/CSS/CSS_filter_effects
l10n:
  sourceCommit: e1b6d7d2d02a07f7e86268c81678713fad4d9a5d
---

{{CSSRef}}

Die Eigenschaften im Modul **CSS-Filtereffekte** ermöglichen es Ihnen, eine Art der Verarbeitung der Darstellung eines Elements zu definieren, bevor das Element im Dokument angezeigt wird. Beispiele für solche Effekte sind das Weichzeichnen oder das Ändern der Farbintensität eines Elements.

### Filtereffekte in Aktion

Experimentieren Sie mit den verschiedenen Schiebereglern, um Filtereffekte auf das untenstehende Bild anzuwenden:

{{EmbedGHLiveSample("css-examples/modules/filters.html", '100%', 420)}}

Um den Code für dieses Filtereffekt-Beispiel zu sehen, [sehen Sie sich den Quellcode auf GitHub an](https://github.com/mdn/css-examples/blob/main/modules/filters.html).

### Eigenschaften

- {{cssxref("backdrop-filter")}}
- {{cssxref("filter")}}

### Funktionen

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}

## Leitfaden

- [Verwendung von CSS-Filtereffekten](/de/docs/Web/CSS/CSS_filter_effects/Using_filter_effects)
  - : Überblick über die Konzepte rund um CSS-Filtereffekte, einschließlich Eigenschaften, Filterfunktionen und SVG-Filter, mit einer Erklärung der Filterwerte, Quellreihenfolge und Wertinteraktionen.

## Verwandte Konzepte

- {{CSSxRef("&lt;image&gt;")}} Datentyp
- {{cssxref("&lt;filter-function&gt;")}} Datentyp

- {{cssxref("background-image")}} CSS-Eigenschaft
- {{cssxref("background-blend-mode")}} CSS-Eigenschaft
- {{cssxref("mix-blend-mode")}} CSS-Eigenschaft

- {{Glossary("interpolation", "Interpolation")}} Glossarbegriff

- [`color-interpolation-filters`](/de/docs/Web/SVG/Attribute/color-interpolation-filters) SVG-Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften im Modul [CSS compositing and blending](/de/docs/Web/CSS/CSS_compositing_and_blending) ermöglichen das Mischen der Hintergrundebenen eines Elements miteinander und das Mischen eines Elements mit seinem Container.
- Das SVG-Element {{SVGElement("filter")}} und die SVG-Filterprimitive: {{SVGElement("feSpotLight")}}, {{SVGElement("feBlend")}}, {{SVGElement("feColorMatrix")}}, {{SVGElement("feComponentTransfer")}}, {{SVGElement("feComposite")}}, {{SVGElement("feConvolveMatrix")}}, {{SVGElement("feDiffuseLighting")}}, {{SVGElement("feDisplacementMap")}}, {{SVGElement("feDropShadow")}}, {{SVGElement("feFlood")}}, {{SVGElement("feGaussianBlur")}}, {{SVGElement("feImage")}}, {{SVGElement("feMerge")}}, {{SVGElement("feMorphology")}}, {{SVGElement("feOffset")}}, {{SVGElement("feSpecularLighting")}}, {{SVGElement("feTile")}}, {{SVGElement("feTurbulence")}}
