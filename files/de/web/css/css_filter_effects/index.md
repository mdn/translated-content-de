---
title: CSS-Filtereffekte
slug: Web/CSS/CSS_filter_effects
l10n:
  sourceCommit: e1b6d7d2d02a07f7e86268c81678713fad4d9a5d
---

{{CSSRef}}

Die Eigenschaften im **CSS-Filtereffekte**-Modul erlauben es Ihnen, eine Möglichkeit zur Verarbeitung der Darstellung eines Elements zu definieren, bevor das Element im Dokument angezeigt wird. Beispiele für solche Effekte sind das Weichzeichnen und das Ändern der Farbintensität eines Elements.

### Filtereffekte in Aktion

Nutzen Sie die verschiedenen Schieberegler, um Filtereffekte auf das Bild unten anzuwenden:

{{EmbedGHLiveSample("css-examples/modules/filters.html", '100%', 420)}}

Um den Code für dieses Filtereffektbeispiel zu sehen, [sehen Sie den Quellcode auf GitHub an](https://github.com/mdn/css-examples/blob/main/modules/filters.html).

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

## Leitfäden

- [Verwenden von CSS-Filtereffekten](/de/docs/Web/CSS/CSS_filter_effects/Using_filter_effects)
  - : Überblick über die Konzepte rund um CSS-Filtereffekte, einschließlich Eigenschaften, Filterfunktionen und SVG-Filter, mit einer Erklärung der Filterwerte, Quellreihenfolge und Wertinteraktionen.

## Verwandte Konzepte

- {{CSSxRef("&lt;image&gt;")}} Datentyp
- {{cssxref("&lt;filter-function&gt;")}} Datentyp

- {{cssxref("background-image")}} CSS-Eigenschaft
- {{cssxref("background-blend-mode")}} CSS-Eigenschaft
- {{cssxref("mix-blend-mode")}} CSS-Eigenschaft

- [Interpolierung](/de/docs/Glossary/interpolation) Glossarbegriff

- [`color-interpolation-filters`](/de/docs/Web/SVG/Attribute/color-interpolation-filters) SVG-Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften im Modul [CSS Compositing und Blending](/de/docs/Web/CSS/CSS_compositing_and_blending) ermöglichen das Überblenden von Hintergrundebenen eines Elements und das Überblenden eines Elements mit seinem Container
- Das SVG-{{SVGElement("filter")}}-Element und die SVG-Filterprimitive: {{SVGElement("feSpotLight")}}, {{SVGElement("feBlend")}}, {{SVGElement("feColorMatrix")}}, {{SVGElement("feComponentTransfer")}}, {{SVGElement("feComposite")}}, {{SVGElement("feConvolveMatrix")}}, {{SVGElement("feDiffuseLighting")}}, {{SVGElement("feDisplacementMap")}}, {{SVGElement("feDropShadow")}}, {{SVGElement("feFlood")}}, {{SVGElement("feGaussianBlur")}}, {{SVGElement("feImage")}}, {{SVGElement("feMerge")}}, {{SVGElement("feMorphology")}}, {{SVGElement("feOffset")}}, {{SVGElement("feSpecularLighting")}}, {{SVGElement("feTile")}}, {{SVGElement("feTurbulence")}}
