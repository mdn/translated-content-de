---
title: <g>
slug: Web/SVG/Element/g
l10n:
  sourceCommit: 2f43f506240fa6c866cc3bc2d018364ae49421d9
---

{{SVGRef}}

Das **`<g>`** [SVG](/de/docs/Web/SVG)-Element ist ein Container, der verwendet wird, um andere SVG-Elemente zu gruppieren.

Transformationen, die auf das `<g>`-Element angewendet werden, werden auf seine Kindelemente übertragen, und seine Attribute werden von seinen Kindern geerbt. Es kann auch mehrere Elemente gruppieren, die später mit dem {{SVGElement("use")}}-Element referenziert werden können.

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

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
