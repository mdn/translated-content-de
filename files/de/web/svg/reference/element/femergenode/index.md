---
title: <feMergeNode>
slug: Web/SVG/Reference/Element/feMergeNode
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

Das **`<feMergeNode>`** [SVG](/de/docs/Web/SVG) Element verarbeitet das Ergebnis eines anderen Filters, der von seinem übergeordneten {{ SVGElement("feMerge") }} Element verarbeitet wird.

## Verwendungskontext

{{svginfo}}

## Beispiel

```html
<svg
  width="200"
  height="200"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <filter id="feOffset" x="-40" y="-20" width="100" height="200">
    <feOffset in="SourceGraphic" dx="60" dy="60" />
    <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur2" />
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
    stroke="black"
    fill="green"
    filter="url(#feOffset)" />
  <rect x="40" y="40" width="100" height="100" stroke="black" fill="green" />
</svg>
```

### Ergebnis

{{EmbedLiveSample('Example', 200, 200)}}

## Attribute

- {{ SVGAttr("in") }}

## DOM Schnittstelle

Dieses Element implementiert das [`SVGFEMergeNodeElement`](/de/docs/Web/API/SVGFEMergeNodeElement) Interface.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ SVGElement("filter") }}
- {{ SVGElement("animate") }}
- {{ SVGElement("set") }}
- {{ SVGElement("feMerge") }}
- [SVG-Tutorial: Filtereffekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
