---
title: <feSpecularLighting>
slug: Web/SVG/Reference/Element/feSpecularLighting
l10n:
  sourceCommit: 62476ac3c21417ad3a07e12c9f8eaf92cea8311d
---

Das **`<feSpecularLighting>`** [SVG](/de/docs/Web/SVG) Filter-Primitive beleuchtet eine Quellgrafik, indem der Alphakanal als Bump-Map verwendet wird. Das resultierende Bild ist ein RGBA-Bild basierend auf der Lichtfarbe. Die Lichtberechnung folgt der Standard-Glanzlichtkomponente des [Phong-Beleuchtungsmodells](https://en.wikipedia.org/wiki/Phong_reflection_model). Das resultierende Bild hängt von der Lichtfarbe, der Lichtposition und der Oberflächengeometrie der Eingangs-Bump-Map ab. Das Ergebnis der Lichtberechnung wird hinzugefügt. Das Filter-Primitive nimmt an, dass der Betrachter in der z-Richtung im Unendlichen ist.

Dieses Filter-Primitive erzeugt ein Bild, das den spekularen Reflexionsteil der Lichtberechnung enthält. Eine solche Karte soll mit einer Textur unter Verwendung des `add`-Begriffs der arithmetischen Methode {{SVGElement("feComposite")}} kombiniert werden. Mehrere Lichtquellen können simuliert werden, indem mehrere dieser Lichtkarten hinzugefügt werden, bevor sie auf das Texturbild angewendet werden.

Wie andere Filter-Primitives verarbeitet es Farbkomponenten standardmäßig im `linearRGB` {{Glossary("color_space", "Farbraum")}}. Sie können {{svgattr("color-interpolation-filters")}} verwenden, um stattdessen `sRGB` zu verwenden.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("in")}}
- {{SVGAttr("surfaceScale")}}
- {{SVGAttr("specularConstant")}}
- {{SVGAttr("specularExponent")}}
- {{SVGAttr("kernelUnitLength")}}
- [Filter-Primitive-Attribute](/de/docs/Web/SVG/Reference/Attribute#filter_primitive_attributes_presentation_attributes): {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}}, {{SVGAttr("result")}}

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGFESpecularLightingElement`](/de/docs/Web/API/SVGFESpecularLightingElement) Schnittstelle.

## Beispiel

```html
<svg
  height="200"
  width="200"
  viewBox="0 0 220 220"
  xmlns="http://www.w3.org/2000/svg">
  <filter id="filter">
    <feSpecularLighting
      result="specOut"
      specularExponent="20"
      lighting-color="#bbbbbb">
      <fePointLight x="50" y="75" z="200" />
    </feSpecularLighting>
    <feComposite
      in="SourceGraphic"
      in2="specOut"
      operator="arithmetic"
      k1="0"
      k2="1"
      k3="1"
      k4="0" />
  </filter>
  <circle cx="110" cy="110" r="100" filter="url(#filter)" />
</svg>
```

### Ergebnis

{{EmbedLiveSample("Example", 220, 220)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("filter")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feDistantLight")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("fePointLight")}}
- {{SVGElement("feSpotLight")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG Tutorial: Filtereffekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
