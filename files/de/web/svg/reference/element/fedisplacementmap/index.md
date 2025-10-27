---
title: <feDisplacementMap>
slug: Web/SVG/Reference/Element/feDisplacementMap
l10n:
  sourceCommit: 6722199b4d63fad3c33db1146af380fc98b6c202
---

Der **`<feDisplacementMap>`** [SVG](/de/docs/Web/SVG) Filter-Primitive verwendet die Pixelwerte aus dem Bild von {{SVGAttr("in2")}}, um das Bild von {{SVGAttr("in")}} räumlich zu verschieben.

Die Formel für die Transformation sieht wie folgt aus:

`P'(x,y) ← P(x + scale * (XC(x,y) - 0.5), y + scale * (YC(x,y) - 0.5))`

wobei `P(x,y)` das Eingabebild {{SVGAttr("in")}} und `P'(x,y)` das Ziel ist. `XC(x,y)` und `YC(x,y)` sind die Komponentenwerte des Kanals, der durch {{SVGAttr("xChannelSelector")}} und {{SVGAttr("yChannelSelector")}} festgelegt wird.

Wie andere Filter-Primitive behandelt es Farbkomponenten standardmäßig im Farbraum `linearRGB`. Sie können {{svgattr("color-interpolation-filters")}} verwenden, um stattdessen `sRGB` zu verwenden.

## Verwendungskontext

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

  <circle cx="100" cy="100" r="100" filter="url(#displacementFilter)" />
</svg>
```

{{EmbedLiveSample('Example', 220, 220)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG-Filter-Primitive-Attribute](/de/docs/Web/SVG/Reference/Attribute#filter_primitive_attributes_presentation_attributes)
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
- [SVG-Anleitung: Filtereffekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
