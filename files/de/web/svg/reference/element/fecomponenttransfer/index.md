---
title: <feComponentTransfer>
slug: Web/SVG/Reference/Element/feComponentTransfer
l10n:
  sourceCommit: 62476ac3c21417ad3a07e12c9f8eaf92cea8311d
---

Das **`<feComponentTransfer>`** [SVG](/de/docs/Web/SVG) Filter-Primitive führt eine farbkomponentenweise Neuzuordnung der Daten für jedes Pixel durch. Es ermöglicht Operationen wie Helligkeitsanpassung, Kontrastanpassung, Farbbalance oder Schwellenwertbildung.

Die Berechnungen werden an nicht-vormultiplizierten Farbwerten durchgeführt. Die Farben werden verändert, indem jeder Kanal (R, G, B und A) auf das Ergebnis der Kinder {{SVGElement("feFuncR")}}, {{SVGElement("feFuncB")}}, {{SVGElement("feFuncG")}} und {{SVGElement("feFuncA")}} geändert wird. Wenn mehr als eines derselben Elements bereitgestellt wird, wird das zuletzt angegebene verwendet, und wenn kein Element bereitgestellt wird, um einen der Kanäle zu modifizieren, ist der Effekt derselbe, als ob eine Identitätstransformation für diesen Kanal gegeben worden wäre.

Wie andere Filter-Primitives verarbeitet es Farbbestandteile standardmäßig im `linearRGB` {{Glossary("color_space", "Farbraum")}}. Sie können {{svgattr("color-interpolation-filters")}} verwenden, um stattdessen `sRGB` zu verwenden.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("in")}}
- [Filterprimitive-Attribute](/de/docs/Web/SVG/Reference/Attribute#filter_primitive_attributes_presentation_attributes): {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}}, {{SVGAttr("result")}}

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGFEComponentTransferElement`](/de/docs/Web/API/SVGFEComponentTransferElement) Schnittstelle.

## Beispiel

### SVG

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300">
  <defs>
    <linearGradient
      id="rainbow"
      gradientUnits="userSpaceOnUse"
      x1="0"
      y1="0"
      x2="100%"
      y2="0">
      <stop offset="0" stop-color="red"></stop>
      <stop offset="0.2" stop-color="yellow"></stop>
      <stop offset="0.4" stop-color="lime"></stop>
      <stop offset="0.6" stop-color="cyan"></stop>
      <stop offset="0.8" stop-color="blue"></stop>
      <stop offset="1" stop-color="purple"></stop>
    </linearGradient>
    <filter id="identity" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="identity"></feFuncR>
        <feFuncG type="identity"></feFuncG>
        <feFuncB type="identity"></feFuncB>
        <feFuncA type="identity"></feFuncA>
      </feComponentTransfer>
    </filter>
    <filter id="table" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="table" tableValues="0 0 1 1"></feFuncR>
        <feFuncG type="table" tableValues="1 1 0 0"></feFuncG>
        <feFuncB type="table" tableValues="0 1 1 0"></feFuncB>
      </feComponentTransfer>
    </filter>
    <filter id="discrete" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="discrete" tableValues="0 0 1 1"></feFuncR>
        <feFuncG type="discrete" tableValues="1 1 0 0"></feFuncG>
        <feFuncB type="discrete" tableValues="0 1 1 0"></feFuncB>
      </feComponentTransfer>
    </filter>
    <filter id="linear" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="linear" slope="0.5" intercept="0"></feFuncR>
        <feFuncG type="linear" slope="0.5" intercept="0.25"></feFuncG>
        <feFuncB type="linear" slope="0.5" intercept="0.5"></feFuncB>
      </feComponentTransfer>
    </filter>
    <filter id="gamma" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="gamma" amplitude="4" exponent="7" offset="0"></feFuncR>
        <feFuncG type="gamma" amplitude="4" exponent="4" offset="0"></feFuncG>
        <feFuncB type="gamma" amplitude="4" exponent="1" offset="0"></feFuncB>
      </feComponentTransfer>
    </filter>
  </defs>
  <g font-weight="bold">
    <text x="0" y="20">Default</text>
    <rect x="0" y="30" width="100%" height="20"></rect>
    <text x="0" y="70">Identity</text>
    <rect x="0" y="80" width="100%" height="20" filter="url(#identity)"></rect>
    <text x="0" y="120">Table lookup</text>
    <rect x="0" y="130" width="100%" height="20" filter="url(#table)"></rect>
    <text x="0" y="170">Discrete table lookup</text>
    <rect x="0" y="180" width="100%" height="20" filter="url(#discrete)"></rect>
    <text x="0" y="220">Linear function</text>
    <rect x="0" y="230" width="100%" height="20" filter="url(#linear)"></rect>
    <text x="0" y="270">Gamma function</text>
    <rect x="0" y="280" width="100%" height="20" filter="url(#gamma)"></rect>
  </g>
</svg>
```

### CSS

```css
rect {
  fill: url("#rainbow");
}
```

### Ergebnis

{{EmbedLiveSample("Example", "100%", 340)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG-Filterprimitive-Attribute](/de/docs/Web/SVG/Reference/Attribute#filter_primitive_attributes_presentation_attributes)
- {{SVGElement("filter")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feFuncA")}}
- {{SVGElement("feFuncB")}}
- {{SVGElement("feFuncG")}}
- {{SVGElement("feFuncR")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG Tutorial: Filtereffekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
