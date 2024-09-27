---
title: <feTile>
slug: Web/SVG/Element/feTile
l10n:
  sourceCommit: 3a1ef2abc8233835f0b0cc73afaf36e44edaf4a1
---

{{SVGRef}}

Das **`<feTile>`** [SVG](/de/docs/Web/SVG)-Filter-Primitive ermöglicht es, ein Zielrechteck mit einem wiederholten, gekachelten Muster eines Eingabebildes zu füllen. Der Effekt ist ähnlich dem eines {{SVGElement("pattern")}}.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("in")}}

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGFETileElement`](/de/docs/Web/API/SVGFETileElement)-Schnittstelle.

## Beispiel

### SVG

```html
<svg
  width="200"
  height="200"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>
    Tiling an MDN logo with the Mozilla mascot's head that is on the logo
  </title>
  <defs>
    <!-- Define the region of the filter to be the bounding box of the
         MDN logo being filtered. These parameters will create an output
         that covers the same region as the image. -->
    <filter id="tile" x="0" y="0" width="100%" height="100%">
      <!-- Create a tile from the central portion of the image from
           (50,50) to (150,150). This area is essentially the Mozilla
           mascot's head. -->
      <feTile in="SourceGraphic" x="50" y="50" width="100" height="100" />

      <!-- Without specifying a region, feTile defaults to the region
           of the filter. Without specifying an "in" parameter, the default
           is the result of the previous primitive. So this second feTile
           will tile the entire filter region with the mascot's head. -->
      <feTile />
    </filter>
  </defs>

  <!-- Use the MDN logo as input to the filter -->
  <image
    href="mdn_logo_only_color.png"
    x="10%"
    y="10%"
    width="80%"
    height="80%"
    style="filter:url(#tile);" />
</svg>
```

### Ergebnis

{{EmbedLiveSample("Example", 200, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
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
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTurbulence")}}
- [SVG-Anleitung: Filtereffekte](/de/docs/Web/SVG/Tutorial/Filter_effects)
