---
title: <feImage>
slug: Web/SVG/Element/feImage
l10n:
  sourceCommit: 3a1ef2abc8233835f0b0cc73afaf36e44edaf4a1
---

{{SVGRef}}

Das **`<feImage>`** [SVG](/de/docs/Web/SVG) Filter-Primitive ruft Bilddaten aus einer externen Quelle ab und stellt die Pixeldaten als Ausgabe bereit (d. h., wenn die externe Quelle ein SVG-Bild ist, wird es gerastert.)

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("crossorigin")}}
- {{SVGAttr("preserveAspectRatio")}}
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGFEImageElement`](/de/docs/Web/API/SVGFEImageElement) Schnittstelle.

## Beispiel

### SVG

```html
<svg
  viewBox="0 0 200 200"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="200"
  height="200">
  <defs>
    <filter id="image">
      <feImage href="mdn_logo_only_color.png" />
    </filter>
  </defs>

  <rect x="10%" y="10%" width="80%" height="80%" style="filter:url(#image);" />
</svg>
```

### Ergebnis

{{EmbedLiveSample("Example", 200, 210)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG Filter-Primitive-Attribute](/de/docs/Web/SVG/Attribute#filters_attributes)
- {{SVGAttr("flood-color")}} Attribut
- {{SVGAttr("flood-opacity")}} Attribut
- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("set")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG Tutorial: Filtereffekte](/de/docs/Web/SVG/Tutorial/Filter_effects)
