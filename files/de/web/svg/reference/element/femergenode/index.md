---
title: <feMergeNode>
slug: Web/SVG/Reference/Element/feMergeNode
l10n:
  sourceCommit: 62476ac3c21417ad3a07e12c9f8eaf92cea8311d
---

Der **`<feMergeNode>`** [SVG](/de/docs/Web/SVG) bezieht das Ergebnis eines anderen Filters, um von seinem übergeordneten Element {{ SVGElement("feMerge") }} verarbeitet zu werden.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("in")}}

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGFEMergeNodeElement`](/de/docs/Web/API/SVGFEMergeNodeElement)-Schnittstelle.

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
