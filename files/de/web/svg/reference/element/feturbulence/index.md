---
title: <feTurbulence>
slug: Web/SVG/Reference/Element/feTurbulence
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

Das **`<feTurbulence>`** [SVG](/de/docs/Web/SVG) Filter-Primitive erzeugt ein Bild mit der [Perlin-Turbulenzfunktion](https://en.wikipedia.org/wiki/Perlin_noise). Es ermöglicht die Synthese von künstlichen Texturen wie Wolken oder Marmor. Das resultierende Bild füllt die gesamte Filter-Primitive-Subregion aus.

Wie andere Filter-Primitives verarbeitet es Farbkomponenten standardmäßig im `linearRGB` {{Glossary("color_space", "Farbraum")}}. Sie können {{svgattr("color-interpolation-filters")}} verwenden, um stattdessen `sRGB` zu verwenden.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("baseFrequency")}}
- {{SVGAttr("numOctaves")}}
- {{SVGAttr("seed")}}
- {{SVGAttr("stitchTiles")}}
- {{SVGAttr("type")}}

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGFETurbulenceElement`](/de/docs/Web/API/SVGFETurbulenceElement) Schnittstelle.

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

- [SVG-Filter-Primitive-Attribute](/de/docs/Web/SVG/Reference/Attribute#filter_primitive_attributes), einschließlich {{SVGAttr('result')}}.
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
- {{SVGElement("feTile")}}
- [SVG-Leitfaden: Filtereffekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
