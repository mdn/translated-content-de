---
title: <feImage>
slug: Web/SVG/Reference/Element/feImage
l10n:
  sourceCommit: 68e3afd00cb531f3536ed9343aaa0f9e06e6ef94
---

Das **`<feImage>`**-[SVG](/de/docs/Web/SVG)-Filter-Primitive holt Bilddaten aus einer externen Quelle und liefert die Pixeldaten als Ausgabe (das bedeutet, wenn die externe Quelle ein SVG-Bild ist, wird es gerastert.)

## Nutzungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("crossorigin")}}
- {{SVGAttr("fetchpriority")}} {{experimental_inline}}
- {{SVGAttr("preserveAspectRatio")}}
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGFEImageElement`](/de/docs/Web/API/SVGFEImageElement)-Schnittstelle.

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

- [SVG-Filter-Primitive-Attribute](/de/docs/Web/SVG/Reference/Attribute#filters_attributes)
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
- {{SVGAttr("fetchpriority")}} Attribut
- [SVG-Tutorial: Filtereffekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
