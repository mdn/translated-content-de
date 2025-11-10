---
title: <animateTransform>
slug: Web/SVG/Reference/Element/animateTransform
l10n:
  sourceCommit: 12222b32eec33a7411c6de8afc8408d9aa617dd2
---

Das **`<animateTransform>`** [SVG](/de/docs/Web/SVG)-Element animiert ein Transformationsattribut auf seinem Zielelement und ermöglicht es dadurch, Animationen für Translation, Skalierung, Drehung und/oder Verzerrung zu steuern.

## Verwendungskontext

{{svginfo}}

## Beispiel

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg">
  <polygon points="60,30 90,90 30,90">
    <animateTransform
      attributeName="transform"
      attributeType="XML"
      type="rotate"
      from="0 60 70"
      to="360 60 70"
      dur="10s"
      repeatCount="indefinite" />
  </polygon>
</svg>
```

{{ EmbedLiveSample('Example','120','120') }}

## Attribute

- {{ SVGAttr("by") }}
- {{ SVGAttr("from") }}
- {{ SVGAttr("to") }}
- {{ SVGAttr("type") }}

## DOM-Interface

Dieses Element implementiert das [`SVGAnimateTransformElement`](/de/docs/Web/API/SVGAnimateTransformElement)-Interface.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
