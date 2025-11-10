---
title: <feGaussianBlur>
slug: Web/SVG/Reference/Element/feGaussianBlur
l10n:
  sourceCommit: 62476ac3c21417ad3a07e12c9f8eaf92cea8311d
---

Das **`<feGaussianBlur>`** [SVG](/de/docs/Web/SVG)-Filter-Primitiv verwischt das Eingabebild um den in {{SVGAttr("stdDeviation")}} angegebenen Betrag, der die Glockenkurve definiert.

Wie andere Filter-Primitiven verarbeitet es standardmäßig Farbbestandteile im `linearRGB`-{{Glossary("color_space", "Farbraum")}}. Sie können {{svgattr("color-interpolation-filters")}} verwenden, um stattdessen `sRGB` zu nutzen.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("in")}}
- {{SVGAttr("stdDeviation")}}
- {{SVGAttr("edgeMode")}}
- [Filter-Primitiv-Attribute](/de/docs/Web/SVG/Reference/Attribute#filter_primitive_attributes_presentation_attributes): {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}}, {{SVGAttr("result")}}

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGFEGaussianBlurElement`](/de/docs/Web/API/SVGFEGaussianBlurElement)-Schnittstelle.

## Beispiel

### Einfaches Beispiel

#### SVG

```html
<svg
  width="230"
  height="120"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <filter id="blurMe">
    <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
  </filter>

  <circle cx="60" cy="60" r="50" fill="green" />

  <circle cx="170" cy="60" r="50" fill="green" filter="url(#blurMe)" />
</svg>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", "", "130")}}

### Drop-Shadow-Beispiel

#### SVG

```html
<svg
  width="120"
  height="120"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <filter id="dropShadow">
    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
    <feOffset dx="2" dy="4" />
    <feMerge>
      <feMergeNode />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>

  <circle cx="60" cy="60" r="50" fill="green" filter="url(#dropShadow)" />
</svg>
```

#### Ergebnis

{{EmbedLiveSample("Drop_shadow_example", "", "130")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG-Filter-Primitivattribute](/de/docs/Web/SVG/Reference/Attribute#filters_attributes)
- {{SVGElement("filter")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG-Anleitung: Filtereffekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
