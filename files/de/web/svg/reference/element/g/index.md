---
title: <g>
slug: Web/SVG/Reference/Element/g
l10n:
  sourceCommit: 156a28c0e9cac5adf880520f5fb43d7b3d5186e7
---

Das **`<g>`**-Element [SVG](/de/docs/Web/SVG) ist ein Container, der verwendet wird, um andere SVG-Elemente zu gruppieren.

Transformationen, die auf das `<g>`-Element angewendet werden, werden an seinen Kindelementen durchgeführt, und die meisten seiner Präsentationsattribute werden von seinen Kindern geerbt. Es kann auch mehrere Elemente gruppieren, um später mit dem {{SVGElement("use")}}-Element darauf zu verweisen.

## Verwendungskontext

{{svginfo}}

## Attribute

Dieses Element enthält nur globale Attribute.

Die meisten der [Präsentationsattribute](/de/docs/Web/SVG/Reference/Attribute#presentation_attributes), die auf das Element angewendet werden, werden von seinen Kindern geerbt.
Jedoch sind geometrische Attribute nur als Präsentationsattribute für ihre vorgesehenen Elemente gültig — sie haben keine Wirkung auf ein `<g>`-Element und werden nicht an seine Kinder weitergegeben.

Zu diesen nicht vererbten Attributen gehören:

- {{SVGAttr("cx")}}, {{SVGAttr("cy")}}, {{SVGAttr("r")}}: {{SVGElement("circle")}}, {{SVGElement("ellipse")}}
- {{SVGAttr("rx")}}, {{SVGAttr("ry")}}: {{SVGElement("ellipse")}}, {{SVGElement("rect")}}
- {{SVGAttr("d")}}: {{SVGElement("path")}}
- {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}}: {{SVGElement("foreignObject")}}, {{SVGElement("image")}}, {{SVGElement("rect")}}, {{SVGElement("svg")}}, {{SVGElement("symbol")}}, {{SVGElement("use")}}

Nicht-Präsentationsattribute, selbst diejenigen, die auf `<g>` gültig sind (wie {{SVGAttr("id")}} oder {{SVGAttr("class")}}), werden ebenfalls nicht vererbt.

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGGElement`](/de/docs/Web/API/SVGGElement) Schnittstelle.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Using g to inherit presentation attributes -->
  <g fill="white" stroke="green" stroke-width="5">
    <circle cx="40" cy="40" r="25" />
    <circle cx="60" cy="60" r="25" />
  </g>
</svg>
```

{{EmbedLiveSample('Example', 100, '100%')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
