---
title: <feBlend>
slug: Web/SVG/Element/feBlend
l10n:
  sourceCommit: 332c4375206089fa38609d6d9e3fe2cd7a502f22
---

{{SVGRef}}

Das **`<feBlend>`**-[SVG](/de/docs/Web/SVG)-Filterprimitive kombiniert zwei Objekte miteinander, basierend auf einem bestimmten Mischmodus. Dies ist vergleichbar mit dem, was aus Bildbearbeitungssoftware beim Mischen zweier Ebenen bekannt ist. Der Modus wird durch das Attribut {{SVGAttr("mode")}} definiert.

Wie andere Filter-Primitiven verarbeitet es Farbkomponenten standardmäßig im `linearRGB`-{{Glossary("color_space", "Farbraum")}}. Sie können {{svgattr("color-interpolation-filters")}} verwenden, um stattdessen `sRGB` zu verwenden.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("in")}}
- {{SVGAttr("in2")}}
- {{SVGAttr("mode")}}

## DOM-Interface

Dieses Element implementiert das [`SVGFEBlendElement`](/de/docs/Web/API/SVGFEBlendElement)-Interface.

## Beispiel

### SVG

```html
<svg
  width="200"
  height="200"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="spotlight">
      <feFlood
        result="floodFill"
        x="0"
        y="0"
        width="100%"
        height="100%"
        flood-color="green"
        flood-opacity="1" />
      <feBlend in="SourceGraphic" in2="floodFill" mode="multiply" />
    </filter>
  </defs>

  <image
    href="mdn_logo_only_color.png"
    x="10%"
    y="10%"
    width="80%"
    height="80%"
    style="filter:url(#spotlight);" />
</svg>
```

### Ergebnis

{{EmbedLiveSample("Example", 200, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG-Filterprimitive-Attribute](/de/docs/Web/SVG/Attribute#filter_primitive_attributes)
- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG-Tutorial: Filtereffekte](/de/docs/Web/SVG/Tutorial/Filter_effects)
