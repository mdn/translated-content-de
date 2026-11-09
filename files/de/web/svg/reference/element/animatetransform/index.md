---
title: <animateTransform>
slug: Web/SVG/Reference/Element/animateTransform
l10n:
  sourceCommit: 0a6ff1e3b8887f979b66c34cefdb73f846041879
---

Das **`<animateTransform>`**-Element von [SVG](/de/docs/Web/SVG) animiert ein Transformationsattribut seines Zielelements. Dadurch können Animationen Verschiebungen, Skalierungen, Drehungen und/oder Scherungen steuern.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{ SVGAttr("by") }}
- {{ SVGAttr("from") }}
- {{ SVGAttr("to") }}
- {{ SVGAttr("type") }}

## DOM-Schnittstelle

Dieses Element implementiert die Schnittstelle [`SVGAnimateTransformElement`](/de/docs/Web/API/SVGAnimateTransformElement).

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
