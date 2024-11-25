---
title: <animateTransform>
slug: Web/SVG/Element/animateTransform
l10n:
  sourceCommit: da99ca19ae62059f81dbee3f7b4919de784f3510
---

{{SVGRef}}

Das **`<animateTransform>`** [SVG](/de/docs/Web/SVG)-Element animiert ein Transformationsattribut auf seinem Zielelement und ermöglicht so Animationen, die Translation, Skalierung, Rotation und/oder Scherung steuern.

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

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGAnimateTransformElement`](/de/docs/Web/API/SVGAnimateTransformElement)-Schnittstelle.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
