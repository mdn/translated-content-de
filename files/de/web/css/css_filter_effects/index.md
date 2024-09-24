---
title: CSS-Filtereffekte
slug: Web/CSS/CSS_filter_effects
l10n:
  sourceCommit: e1b6d7d2d02a07f7e86268c81678713fad4d9a5d
---

{{CSSRef}}

Die Eigenschaften im **CSS-Filtereffekte** Modul ermöglichen es Ihnen, eine Methode zu definieren, die die Darstellung eines Elements vor der Anzeige im Dokument verarbeitet. Beispiele für solche Effekte sind das Weichzeichnen und das Ändern der Farbintensität eines Elements.

### Filtereffekte in Aktion

Spielen Sie mit den verschiedenen Schiebereglern, um Filtereffekte auf das folgende Bild anzuwenden:

{{EmbedGHLiveSample("css-examples/modules/filters.html", '100%', 420)}}

Um den Code für dieses Filtereffekte-Beispiel zu sehen, [sehen Sie den Quellcode auf GitHub an](https://github.com/mdn/css-examples/blob/main/modules/filters.html).

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

- [Verwendung von CSS-Filtereffekten](/de/docs/Web/CSS/CSS_filter_effects/Using_filter_effects)
  - : Überblick über die Konzepte rund um CSS-Filtereffekte, einschließlich Eigenschaften, Filterfunktionen und SVG-Filter, mit einer Erklärung der Filterwerte, Quellordnung und Wertinteraktionen.

## Verwandte Konzepte

- {{CSSxRef("&lt;image&gt;")}} Datentyp
- {{cssxref("&lt;filter-function&gt;")}} Datentyp

- {{cssxref("background-image")}} CSS-Eigenschaft
- {{cssxref("background-blend-mode")}} CSS-Eigenschaft
- {{cssxref("mix-blend-mode")}} CSS-Eigenschaft

- {{glossary("interpolation")}} Glossarbegriff

- [`color-interpolation-filters`](/de/docs/Web/SVG/Attribute/color-interpolation-filters) SVG-Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften im [CSS Compositing und Blending](/de/docs/Web/CSS/CSS_compositing_and_blending) Modul ermöglichen das Mischen von Hintergrundebenen eines Elements und das Mischen eines Elements mit seinem Container
- Das SVG-{{SVGElement("filter")}} Element und die SVG-Filterprimitive: {{SVGElement("feSpotLight")}}, {{SVGElement("feBlend")}}, {{SVGElement("feColorMatrix")}}, {{SVGElement("feComponentTransfer")}}, {{SVGElement("feComposite")}}, {{SVGElement("feConvolveMatrix")}}, {{SVGElement("feDiffuseLighting")}}, {{SVGElement("feDisplacementMap")}}, {{SVGElement("feDropShadow")}}, {{SVGElement("feFlood")}}, {{SVGElement("feGaussianBlur")}}, {{SVGElement("feImage")}}, {{SVGElement("feMerge")}}, {{SVGElement("feMorphology")}}, {{SVGElement("feOffset")}}, {{SVGElement("feSpecularLighting")}}, {{SVGElement("feTile")}}, {{SVGElement("feTurbulence")}}
