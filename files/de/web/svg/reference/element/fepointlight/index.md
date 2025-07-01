---
title: <fePointLight>
slug: Web/SVG/Reference/Element/fePointLight
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

Das **`<fePointLight>`** [SVG](/de/docs/Web/SVG) Filterprimitiv definiert eine Lichtquelle, die es ermöglicht, einen Punktlichteffekt zu erzeugen. Es kann innerhalb eines Lichtfilterprimitivs verwendet werden: {{SVGElement("feDiffuseLighting")}} oder {{SVGElement("feSpecularLighting")}}.

Wie andere Filterprimitive verarbeitet es Farbkomponenten standardmäßig im `linearRGB` {{Glossary("color_space", "Farbraum")}}. Sie können {{svgattr("color-interpolation-filters")}} verwenden, um stattdessen `sRGB` zu nutzen.

## Nutzungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("x")}}
- {{SVGAttr("y")}}
- {{SVGAttr("z")}}

## DOM-Interface

Dieses Element implementiert das [`SVGFEPointLightElement`](/de/docs/Web/API/SVGFEPointLightElement) Interface.

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
      <feSpecularLighting
        result="spotlight"
        specularConstant="1.5"
        specularExponent="80"
        lighting-color="#FFF">
        <fePointLight x="50" y="50" z="220" />
      </feSpecularLighting>
      <feComposite
        in="SourceGraphic"
        in2="spotlight"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0" />
    </filter>
  </defs>

  <image
    href="mdn_logo_only_color.png"
    x="10%"
    y="10%"
    width="80%"
    height="80%"
    filter="url(#spotlight)" />
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
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feDistantLight")}}
- {{SVGElement("feSpotLight")}}
- [SVG-Tutorial: Filtereffekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
