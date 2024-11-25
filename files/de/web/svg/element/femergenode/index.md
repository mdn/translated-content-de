---
title: <feMergeNode>
slug: Web/SVG/Element/feMergeNode
l10n:
  sourceCommit: da99ca19ae62059f81dbee3f7b4919de784f3510
---

{{SVGRef}}

Das **`<feMergeNode>`** [SVG](/de/docs/Web/SVG) nimmt das Ergebnis eines anderen Filters auf, um von seinem übergeordneten {{ SVGElement("feMerge") }} verarbeitet zu werden.

## Nutzungskontext

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

## DOM-Schnittstelle

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
- [SVG-Tutorial: Filtereffekte](/de/docs/Web/SVG/Tutorial/Filter_effects)
