---
title: <filter>
slug: Web/SVG/Reference/Element/filter
l10n:
  sourceCommit: 62476ac3c21417ad3a07e12c9f8eaf92cea8311d
---

Das **`<filter>`** [SVG](/de/docs/Web/SVG)-Element definiert einen benutzerdefinierten Filtereffekt, indem es atomare Filter-Primitives gruppiert. Es wird selbst nie gerendert, muss jedoch durch das Attribut {{SVGAttr("filter")}} auf SVG-Elementen oder die {{cssxref("filter")}} {{Glossary("CSS", "CSS")}}-Eigenschaft für SVG/HTML-Elemente verwendet werden.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("x")}}
- {{SVGAttr("y")}}
- {{SVGAttr("width")}}
- {{SVGAttr("height")}}
- {{SVGAttr("filterUnits")}}
- {{SVGAttr("primitiveUnits")}}
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}

> [!NOTE]
> Für `<filter>` haben die Attribute `x` und `y` standardmäßig den Wert `-10%`, und die Attribute `width` und `height` standardmäßig den Wert `120%`. Dies liegt daran, dass viele Filtereffekte, wie {{svgelement("feGaussianBlur")}}, über die Grenzen des gefilterten Elements hinausgehen. Die standardmäßige Größe stellt sicher, dass der Filtereffekt nicht abgeschnitten wird.

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGFilterElement`](/de/docs/Web/API/SVGFilterElement)-Schnittstelle.

## Beispiele

### Hinzufügen eines Weichzeichnungseffekts

#### SVG

```html
<svg width="230" height="120" xmlns="http://www.w3.org/2000/svg">
  <filter id="blurMe">
    <feGaussianBlur stdDeviation="5" />
  </filter>

  <circle cx="60" cy="60" r="50" fill="green" />

  <circle cx="170" cy="60" r="50" fill="green" filter="url(#blurMe)" />
</svg>
```

#### Ergebnis

{{EmbedLiveSample("Example",235,150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feDropShadow")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG-Tutorial: Filtereffekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
