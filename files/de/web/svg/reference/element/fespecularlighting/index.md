---
title: <feSpecularLighting>
slug: Web/SVG/Reference/Element/feSpecularLighting
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Die **`<feSpecularLighting>`** [SVG](/de/docs/Web/SVG) Filterprimitive beleuchtet eine Quellgrafik unter Verwendung des Alphakanals als Bump-Map. Das resultierende Bild ist ein RGBA-Bild basierend auf der Lichtfarbe. Die Beleuchtungsberechnung folgt der standardmäßigen spekulären Komponente des [Phong-Beleuchtungsmodells](https://en.wikipedia.org/wiki/Phong_reflection_model). Das resultierende Bild hängt von der Lichtfarbe, der Lichtposition und der Oberflächengeometrie der Eingabebump-Map ab. Das Ergebnis der Beleuchtungsberechnung wird hinzugefügt. Die Filterprimitive geht davon aus, dass der Betrachter in der z-Richtung im Unendlichen ist.

Diese Filterprimitive erzeugt ein Bild, das den spekulären Reflexionsteil der Beleuchtungsberechnung enthält. Eine solche Karte soll mit einer Textur unter Verwendung des `add` Terms der arithmetischen {{SVGElement("feComposite")}}-Methode kombiniert werden. Mehrere Lichtquellen können simuliert werden, indem mehrere dieser Lichtkarten hinzugefügt werden, bevor sie auf das Texturbild angewendet werden.

Wie andere Filterprimitiven behandelt es Farbkomponenten standardmäßig im `linearRGB` {{Glossary("color_space", "Farbraum")}}. Sie können {{svgattr("color-interpolation-filters")}} verwenden, um stattdessen `sRGB` zu nutzen.

## Nutzungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("in")}}
- {{SVGAttr("surfaceScale")}}
- {{SVGAttr("specularConstant")}}
- {{SVGAttr("specularExponent")}}
- {{SVGAttr("kernelUnitLength")}}

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
  <circle cx="110" cy="110" r="100" style="filter:url(#filter)" />
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
- [SVG-Anleitung: Filtereffekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
