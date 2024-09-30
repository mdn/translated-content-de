---
title: <feMerge>
slug: Web/SVG/Element/feMerge
l10n:
  sourceCommit: 3a1ef2abc8233835f0b0cc73afaf36e44edaf4a1
---

{{SVGRef}}

Das **`<feMerge>`** SVG-Element erlaubt es, Filtereffekte gleichzeitig statt sequenziell anzuwenden. Dies wird erreicht, indem andere Filter ihr Ergebnis über das Attribut {{ SVGAttr("result") }} speichern und dann in einem Kindelement {{ SVGElement("feMergeNode") }} darauf zugreifen.

## Verwendungskontext

{{svginfo}}

## Beispiel

### SVG

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <filter id="feOffset" x="-40" y="-20" width="100" height="200">
    <feOffset in="SourceGraphic" dx="60" dy="60" />
    <feGaussianBlur stdDeviation="5" result="blur2" />
    <feMerge>
      <feMergeNode in="blur2" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>

  <rect
    x="40"
    y="40"
    width="100"
    height="100"
    style="stroke: #000000; fill: green; filter: url(#feOffset);" />
</svg>
```

### Ergebnis

{{EmbedLiveSample('Example', 200, 200)}}

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGFEMergeElement`](/de/docs/Web/API/SVGFEMergeElement) Schnittstelle.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG Filterprimitive Attribute](/de/docs/Web/SVG/Attribute#filters_attributes)
- Attribut {{SVGAttr("flood-color")}}
- Attribut {{SVGAttr("flood-opacity")}}
- {{SVGElement("filter")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMergeNode")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG Tutorial: Filtereffekte](/de/docs/Web/SVG/Tutorial/Filter_effects)
