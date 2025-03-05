---
title: <animateTransform>
slug: Web/SVG/Element/animateTransform
l10n:
  sourceCommit: 8f131f122c32f6c04ad071b77d91e3deee00f2f6
---

{{SVGRef}}

Das **`<animateTransform>`** [SVG](/de/docs/Web/SVG) Element animiert ein Transformationsattribut auf seinem Zielelement, wodurch Animationen die Steuerung von Übersetzung, Skalierung, Rotation und/oder Schrägstellung ermöglichen.

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

Dieses Element implementiert die [`SVGAnimateTransformElement`](/de/docs/Web/API/SVGAnimateTransformElement) Schnittstelle.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("discard")}}
