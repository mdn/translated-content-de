---
title: <feFlood>
slug: Web/SVG/Reference/Element/feFlood
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`<feFlood>`**-[SVG](/de/docs/Web/SVG)-Filterprimitiv füllt die Filtersubregion mit der durch {{SVGAttr("flood-color")}} und {{SVGAttr("flood-opacity")}} definierten Farbe und Deckkraft.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("flood-color")}}
- {{SVGAttr("flood-opacity")}}

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGFEFloodElement`](/de/docs/Web/API/SVGFEFloodElement)-Schnittstelle.

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

  <use style="filter: url(#floodFilter);" />
</svg>
```

### Ergebnis

{{EmbedLiveSample("Example", 200, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG-Filterprimitivattribute](/de/docs/Web/SVG/Reference/Attribute#filters_attributes)
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
- [SVG-Leitfaden: Filtereffekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
