---
title: <feGaussianBlur>
slug: Web/SVG/Element/feGaussianBlur
l10n:
  sourceCommit: 01b8471b84e1d157cbddbb3ffaf560a86b082070
---

{{SVGRef}}

Das **`<feGaussianBlur>`** [SVG](/de/docs/Web/SVG) Filter-Primitive verwischt das Eingabebild um den in {{SVGAttr("stdDeviation")}} angegebenen Betrag, der die Gauß-Kurve definiert.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("in")}}
- {{SVGAttr("stdDeviation")}}
- {{SVGAttr("edgeMode")}}

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGFEGaussianBlurElement`](/de/docs/Web/API/SVGFEGaussianBlurElement) Schnittstelle.

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

### Beispiel für einen Schlagschatten

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

- [SVG Filter-Primitive-Attribute](/de/docs/Web/SVG/Attribute#filters_attributes)
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
- [SVG-Tutorial: Filtereffekte](/de/docs/Web/SVG/Tutorial/Filter_effects)
