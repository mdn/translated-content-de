---
title: <feImage>
slug: Web/SVG/Reference/Element/feImage
l10n:
  sourceCommit: 1ea9b498e0af377455459fbbe33164091fb75f61
---

Das **`<feImage>`** [SVG](/de/docs/Web/SVG)-Filterprimitive bezieht Bilddaten aus einer externen Quelle und liefert die Pixeldaten als Ausgabe (das bedeutet, wenn die externe Quelle ein SVG-Bild ist, wird es gerastert).

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("crossorigin")}}
- {{SVGAttr("fetchpriority")}} {{experimental_inline}} {{non-standard_inline}}
- {{SVGAttr("preserveAspectRatio")}}
- {{SVGAttr("href")}}
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
- [Filter-Primitiv-Attribute](/de/docs/Web/SVG/Reference/Attribute#filter_primitive_attributes_presentation_attributes): {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}}, {{SVGAttr("result")}}

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

  <rect x="10%" y="10%" width="80%" height="80%" filter="url(#image)" />
</svg>
```

### Ergebnis

{{EmbedLiveSample("Example", 200, 210)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG-Filterprimitive-Attribute](/de/docs/Web/SVG/Reference/Attribute#filters_attributes)
- {{SVGAttr("flood-color")}}-Attribut
- {{SVGAttr("flood-opacity")}}-Attribut
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
- {{SVGAttr("fetchpriority")}}-Attribut
- [SVG-Tutorial: Filtereffekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
