---
title: <feFlood>
slug: Web/SVG/Reference/Element/feFlood
l10n:
  sourceCommit: 62476ac3c21417ad3a07e12c9f8eaf92cea8311d
---

Das **`<feFlood>`** [SVG](/de/docs/Web/SVG) Filter-Primitive füllt die Filtersubregion mit der durch {{SVGAttr("flood-color")}} und {{SVGAttr("flood-opacity")}} definierten Farbe und Deckkraft.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("flood-color")}}
- {{SVGAttr("flood-opacity")}}
- [Filter-Primitive Attribute](/de/docs/Web/SVG/Reference/Attribute#filter_primitive_attributes_presentation_attributes): {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}}, {{SVGAttr("result")}}

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGFEFloodElement`](/de/docs/Web/API/SVGFEFloodElement) Schnittstelle.

## Beispiel

### HTML

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <defs>
    <filter id="floodFilter" filterUnits="userSpaceOnUse">
      <feFlood
        x="50"
        y="50"
        width="100"
        height="100"
        flood-color="green"
        flood-opacity="0.5" />
    </filter>
  </defs>

  <use filter="url(#floodFilter)" />
</svg>
```

### Ergebnis

{{EmbedLiveSample("Example", 200, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG Filter-Primitive Attribute](/de/docs/Web/SVG/Reference/Attribute#filters_attributes)
- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG Tutorial: Filtereffekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
