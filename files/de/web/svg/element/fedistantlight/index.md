---
title: <feDistantLight>
slug: Web/SVG/Element/feDistantLight
l10n:
  sourceCommit: 332c4375206089fa38609d6d9e3fe2cd7a502f22
---

{{SVGRef}}

Das **`<feDistantLight>`** [SVG](/de/docs/Web/SVG)-Filterprimitive definiert eine entfernte Lichtquelle, die innerhalb eines Beleuchtungsfilterprimitives verwendet werden kann: {{SVGElement("feDiffuseLighting")}} oder {{SVGElement("feSpecularLighting")}}.

Wie andere Filterprimitive verarbeitet es Farbkomponenten standardmäßig im Farbraum `linearRGB`. Sie können {{svgattr("color-interpolation-filters")}} verwenden, um stattdessen `sRGB` zu nutzen.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("azimuth")}}
- {{SVGAttr("elevation")}}

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGFEDistantLightElement`](/de/docs/Web/API/SVGFEDistantLightElement)-Schnittstelle.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("fePointLight")}}
- {{SVGElement("feSpotLight")}}
- [SVG-Anleitung: Filtereffekte](/de/docs/Web/SVG/Tutorial/Filter_effects)
