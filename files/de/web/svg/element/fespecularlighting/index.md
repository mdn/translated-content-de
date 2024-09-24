---
title: <feSpecularLighting>
slug: Web/SVG/Element/feSpecularLighting
l10n:
  sourceCommit: 3a1ef2abc8233835f0b0cc73afaf36e44edaf4a1
---

{{SVGRef}}

Das **`<feSpecularLighting>`** [SVG](/de/docs/Web/SVG) Filter-Primitive beleuchtet eine Quellgrafik, indem es den Alphakanal als Bump-Map verwendet. Das resultierende Bild ist ein RGBA-Bild basierend auf der Lichtfarbe. Die Beleuchtungsberechnung folgt der standardmäßigen spekulären Komponente des [Phong-Beleuchtungsmodells](https://en.wikipedia.org/wiki/Phong_reflection_model). Das resultierende Bild hängt von der Lichtfarbe, der Lichtposition und der Oberflächengeometrie der Eingabe-Bump-Map ab. Das Ergebnis der Beleuchtungsberechnung wird hinzugefügt. Das Filter-Primitive nimmt an, dass der Betrachter in der Z-Richtung im Unendlichen ist.

Dieses Filter-Primitive produziert ein Bild, das den spekulären Reflektionsteil der Beleuchtungsberechnung enthält. Eine solche Karte soll mit einer Textur unter Verwendung des `add` Terms der arithmetischen Methode von {{SVGElement("feComposite")}} kombiniert werden. Mehrere Lichtquellen können simuliert werden, indem mehrere dieser Lichtkarten hinzugefügt werden, bevor sie auf das Texturbild angewendet werden.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("in")}}
- {{SVGAttr("surfaceScale")}}
- {{SVGAttr("specularConstant")}}
- {{SVGAttr("specularExponent")}}
- {{SVGAttr("kernelUnitLength")}}

## DOM-Schnittstelle

Dieses Element implementiert die {{domxref("SVGFESpecularLightingElement")}} Schnittstelle.

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
- [SVG-Tutorial: Filtereffekte](/de/docs/Web/SVG/Tutorial/Filter_effects)
