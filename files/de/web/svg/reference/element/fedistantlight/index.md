---
title: <feDistantLight>
slug: Web/SVG/Reference/Element/feDistantLight
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`<feDistantLight>`** [SVG](/de/docs/Web/SVG) Filter-Primitive definiert eine entfernte Lichtquelle, die innerhalb eines Beleuchtungs-Filter-Primitives verwendet werden kann: {{SVGElement("feDiffuseLighting")}} oder {{SVGElement("feSpecularLighting")}}.

Wie andere Filter-Primitives verarbeitet es Farbkomponenten standardmäßig im `linearRGB` {{Glossary("color_space", "Farbraum")}}. Sie können {{svgattr("color-interpolation-filters")}} verwenden, um stattdessen `sRGB` zu verwenden.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("azimuth")}}
- {{SVGAttr("elevation")}}

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGFEDistantLightElement`](/de/docs/Web/API/SVGFEDistantLightElement) Schnittstelle.

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
- [SVG-Tutorial: Filtereffekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
