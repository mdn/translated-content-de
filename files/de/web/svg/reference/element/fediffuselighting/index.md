---
title: <feDiffuseLighting>
slug: Web/SVG/Reference/Element/feDiffuseLighting
l10n:
  sourceCommit: 62476ac3c21417ad3a07e12c9f8eaf92cea8311d
---

Das **`<feDiffuseLighting>`** [SVG](/de/docs/Web/SVG) Filter-Primitive beleuchtet ein Bild unter Verwendung des Alpha-Kanals als Reliefkarte. Das resultierende Bild ist ein undurchsichtiges RGBA-Bild und hängt von der Lichtfarbe, der Lichtposition und der Oberflächengeometrie der Eingangs-Reliefkarte ab.

Die von diesem Filter-Primitive erzeugte Lichtkarte kann mit einem Texturbild unter Verwendung des Multiplikationsterms des `arithmetic` Operators des {{SVGElement("feComposite")}} Filter-Primitives kombiniert werden. Mehrere Lichtquellen können simuliert werden, indem mehrere dieser Lichtkarten zusammengefügt werden, bevor sie auf das Texturbild angewendet werden.

Wie andere Filter-Primitives behandelt es standardmäßig Farbkomponenten im `linearRGB` {{Glossary("color_space", "Farbraum")}}. Sie können {{svgattr("color-interpolation-filters")}} verwenden, um stattdessen `sRGB` zu nutzen.

## Anwendungsbereich

{{svginfo}}

## Attribute

- {{SVGAttr("in")}}
- {{SVGAttr("surfaceScale")}}
- {{SVGAttr("diffuseConstant")}}
- {{SVGAttr("kernelUnitLength")}}
- [Filter-Primitive-Attribute](/de/docs/Web/SVG/Reference/Attribute#filter_primitive_attributes_presentation_attributes): {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}}, {{SVGAttr("result")}}

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGFEDiffuseLightingElement`](/de/docs/Web/API/SVGFEDiffuseLightingElement) Schnittstelle.

## Beispiel

Das folgende Beispiel zeigt den Effekt des `<feDiffuseLighting>` Elements auf einen Kreis mit jeder verfügbaren Lichtquelle. Jedes Mal kommt das Licht aus der oberen linken Ecke.

```html
<svg width="440" height="140" xmlns="http://www.w3.org/2000/svg">
  <!-- No light is applied -->
  <text text-anchor="middle" x="60" y="22">No Light</text>
  <circle cx="60" cy="80" r="50" fill="green" />

  <!-- the light source is a fePointLight element -->
  <text text-anchor="middle" x="170" y="22">fePointLight</text>
  <filter id="lightMe1">
    <feDiffuseLighting in="SourceGraphic" result="light" lighting-color="white">
      <fePointLight x="150" y="60" z="20" />
    </feDiffuseLighting>

    <feComposite
      in="SourceGraphic"
      in2="light"
      operator="arithmetic"
      k1="1"
      k2="0"
      k3="0"
      k4="0" />
  </filter>

  <circle cx="170" cy="80" r="50" fill="green" filter="url(#lightMe1)" />

  <!-- the light source is a feDistantLight element -->
  <text text-anchor="middle" x="280" y="22">feDistantLight</text>
  <filter id="lightMe2">
    <feDiffuseLighting in="SourceGraphic" result="light" lighting-color="white">
      <feDistantLight azimuth="240" elevation="20" />
    </feDiffuseLighting>

    <feComposite
      in="SourceGraphic"
      in2="light"
      operator="arithmetic"
      k1="1"
      k2="0"
      k3="0"
      k4="0" />
  </filter>

  <circle cx="280" cy="80" r="50" fill="green" filter="url(#lightMe2)" />

  <!-- the light source is a feSpotLight source -->
  <text text-anchor="middle" x="390" y="22">feSpotLight</text>
  <filter id="lightMe3">
    <feDiffuseLighting in="SourceGraphic" result="light" lighting-color="white">
      <feSpotLight
        x="360"
        y="5"
        z="30"
        limitingConeAngle="20"
        pointsAtX="390"
        pointsAtY="80"
        pointsAtZ="0" />
    </feDiffuseLighting>

    <feComposite
      in="SourceGraphic"
      in2="light"
      operator="arithmetic"
      k1="1"
      k2="0"
      k3="0"
      k4="0" />
  </filter>

  <circle cx="390" cy="80" r="50" fill="green" filter="url(#lightMe3)" />
</svg>
```

Erwartete Darstellung:

![Erwartete Darstellung für das Beispiel](fediffuselighting.png)

Live-Darstellung:

{{EmbedLiveSample("Example", 470, 170)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG-Filter-Primitiv-Attribute](/de/docs/Web/SVG/Reference/Attribute#filter_primitive_attributes_presentation_attributes)
- {{SVGElement("filter")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feDistantLight")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("fePointLight")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feSpotLight")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG Lehrgang: Filtereffekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
