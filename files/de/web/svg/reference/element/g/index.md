---
title: <g>
slug: Web/SVG/Reference/Element/g
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

Das **`<g>`** [SVG](/de/docs/Web/SVG)-Element ist ein Container, der verwendet wird, um andere SVG-Elemente zu gruppieren.

Transformationen, die auf das `<g>`-Element angewendet werden, werden auf seine Kind-Elemente ausgeführt, und seine Attribute werden von seinen Kindern geerbt. Es kann auch mehrere Elemente gruppieren, um später mit dem {{SVGElement("use")}}-Element referenziert zu werden.

## Verwendungskontext

{{svginfo}}

## Attribute

Dieses Element enthält nur globale Attribute.

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGGElement`](/de/docs/Web/API/SVGGElement)-Schnittstelle.

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
