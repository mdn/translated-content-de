---
title: <feDiffuseLighting>
slug: Web/SVG/Element/feDiffuseLighting
l10n:
  sourceCommit: 3a1ef2abc8233835f0b0cc73afaf36e44edaf4a1
---

{{SVGRef}}

Das **`<feDiffuseLighting>`** [SVG](/de/docs/Web/SVG) Filterprimitive beleuchtet ein Bild, indem der Alpha-Kanal als Bump-Map verwendet wird. Das resultierende Bild, das ein undurchsichtiges RGBA-Bild ist, hängt von der Lichtfarbe, der Lichtposition und der Oberflächengeometrie der Eingabe-Bump-Map ab.

Die durch dieses Filterprimitive erzeugte Lichtkarte kann mithilfe des Multiplikationsterm des `arithmetic` Operators des {{SVGElement("feComposite")}} Filterprimitives mit einem Texturbild kombiniert werden. Mehrere Lichtquellen können simuliert werden, indem mehrere dieser Lichtkarten miteinander kombiniert werden, bevor sie auf das Texturbild angewendet werden.

## Nutzungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("in")}}
- {{SVGAttr("surfaceScale")}}
- {{SVGAttr("diffuseConstant")}}
- {{SVGAttr("kernelUnitLength")}}

## DOM-Schnittstelle

Dieses Element implementiert die {{domxref("SVGFEDiffuseLightingElement")}} Schnittstelle.

## Beispiel

Das folgende Beispiel zeigt die Wirkung des `<feDiffuseLighting>` Elements auf einen Kreis mit jeder verfügbaren Lichtquelle. Jedes Mal kommt das Licht aus der oberen linken Ecke.

```html
<svg width="440" height="140" xmlns="http://www.w3.org/2000/svg">
  <!-- Kein Licht wird angewendet -->
  <text text-anchor="middle" x="60" y="22">No Light</text>
  <circle cx="60" cy="80" r="50" fill="green" />

  <!-- die Lichtquelle ist ein fePointLight Element -->
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

  <!-- die Lichtquelle ist ein feDistantLight Element -->
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

  <!-- die Lichtquelle ist ein feSpotLight Element -->
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

- [SVG Filter-Primitive-Attribute](/de/docs/Web/SVG/Attribute#filter_primitive_attributes)
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
- [SVG-Tutorial: Filter-Effekte](/de/docs/Web/SVG/Tutorial/Filter_effects)
