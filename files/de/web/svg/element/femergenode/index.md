---
title: <feMergeNode>
slug: Web/SVG/Element/feMergeNode
l10n:
  sourceCommit: 3a1ef2abc8233835f0b0cc73afaf36e44edaf4a1
---

{{SVGRef}}

Das `feMergeNode`-Element nimmt das Ergebnis eines anderen Filters, um von seinem übergeordneten {{ SVGElement("feMerge") }}-Element verarbeitet zu werden.

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
    style="stroke: #000000; fill: green; filter: url(#feOffset);" />
  <rect
    x="40"
    y="40"
    width="100"
    height="100"
    style="stroke: #000000; fill: green;" />
</svg>
```

### Ergebnis

{{EmbedLiveSample('Example', 200, 200)}}

## Attribute

- {{ SVGAttr("in") }}

## DOM Schnittstelle

Dieses Element implementiert die [`SVGFEMergeNodeElement`](/de/docs/Web/API/SVGFEMergeNodeElement) Schnittstelle.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ SVGElement("filter") }}
- {{ SVGElement("animate") }}
- {{ SVGElement("set") }}
- {{ SVGElement("feMerge") }}
- [SVG Tutorial: Filter-Effekte](/de/docs/Web/SVG/Tutorial/Filter_effects)
