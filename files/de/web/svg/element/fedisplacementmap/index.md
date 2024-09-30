---
title: <feDisplacementMap>
slug: Web/SVG/Element/feDisplacementMap
l10n:
  sourceCommit: 3a1ef2abc8233835f0b0cc73afaf36e44edaf4a1
---

{{SVGRef}}

Der **`<feDisplacementMap>`** [SVG](/de/docs/Web/SVG) Filterprimitive verwendet die Pixelwerte des Bildes von {{SVGAttr("in2")}}, um das Bild von {{SVGAttr("in")}} räumlich zu verschieben.

Die Formel für die Transformation sieht so aus:

`P'(x,y) ← P(x + scale * (XC(x,y) - 0.5), y + scale * (YC(x,y) - 0.5))`

wobei `P(x,y)` das Eingabebild, {{SVGAttr("in")}}, ist und `P'(x,y)` das Zielbild. `XC(x,y)` und `YC(x,y)` sind die Komponentenwerte des Kanals, der durch {{SVGAttr("xChannelSelector")}} und {{SVGAttr("yChannelSelector")}} angegeben wird.

## Verwendungszusammenhang

{{svginfo}}

## Attribute

- {{SVGAttr("in")}}
- {{SVGAttr("in2")}}
- {{SVGAttr("scale")}}
- {{SVGAttr("xChannelSelector")}}
- {{SVGAttr("yChannelSelector")}}

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGFEDisplacementMapElement`](/de/docs/Web/API/SVGFEDisplacementMapElement) Schnittstelle.

## Beispiel

```html
<svg
  width="200"
  height="200"
  viewBox="0 0 220 220"
  xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feTurbulence
      type="turbulence"
      baseFrequency="0.05"
      numOctaves="2"
      result="turbulence" />
    <feDisplacementMap
      in2="turbulence"
      in="SourceGraphic"
      scale="50"
      xChannelSelector="R"
      yChannelSelector="G" />
  </filter>

  <circle cx="100" cy="100" r="100" style="filter: url(#displacementFilter)" />
</svg>
```

{{EmbedLiveSample('Example', 220, 220)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG-Filterprimitive-Attribute](/de/docs/Web/SVG/Attribute#filter_primitive_attributes)
- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG-Tutorial: Filter-Effekte](/de/docs/Web/SVG/Tutorial/Filter_effects)
