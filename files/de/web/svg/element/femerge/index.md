---
title: <feMerge>
slug: Web/SVG/Element/feMerge
l10n:
  sourceCommit: 332c4375206089fa38609d6d9e3fe2cd7a502f22
---

{{SVGRef}}

Das **`<feMerge>`** [SVG](/de/docs/Web/SVG)-Element ermöglicht es, Filtereffekte gleichzeitig anstelle von sequenziell anzuwenden. Dies wird erreicht, indem andere Filter ihre Ausgabe über das {{ SVGAttr("result") }}-Attribut speichern und diese anschließend in einem {{ SVGElement("feMergeNode") }}-Kind abgerufen wird.

Wie andere Filter-Primitiven verarbeitet es Farbkomponenten standardmäßig im `linearRGB`-{{Glossary("color_space", "Farbraum")}}. Sie können {{svgattr("color-interpolation-filters")}} verwenden, um `sRGB` zu nutzen.

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

Dieses Element implementiert die [`SVGFEMergeElement`](/de/docs/Web/API/SVGFEMergeElement)-Schnittstelle.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG Attribut für Filterprimitive](/de/docs/Web/SVG/Attribute#filters_attributes)
- {{SVGAttr("flood-color")}}-Attribut
- {{SVGAttr("flood-opacity")}}-Attribut
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
- [SVG-Anleitung: Filtereffekte](/de/docs/Web/SVG/Tutorial/Filter_effects)
