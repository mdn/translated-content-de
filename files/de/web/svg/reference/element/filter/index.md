---
title: <filter>
slug: Web/SVG/Reference/Element/filter
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das **`<filter>`**-Element von [SVG](/de/docs/Web/SVG) definiert einen benutzerdefinierten Filtereffekt, indem es einzelne Filterprimitiven gruppiert. Es wird selbst nie gerendert, sondern muss über das Attribut {{SVGAttr("filter")}} für SVG-Elemente oder über die {{Glossary("CSS", "CSS")}}-Eigenschaft {{cssxref("filter")}} für SVG- und HTML-Elemente verwendet werden.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("x")}}
- {{SVGAttr("y")}}
- {{SVGAttr("width")}}
- {{SVGAttr("height")}}
- {{SVGAttr("filterUnits")}}
- {{SVGAttr("primitiveUnits")}}
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}

> [!NOTE]
> Bei `<filter>` haben die Attribute `x` und `y` standardmäßig den Wert `-10%`, die Attribute `width` und `height` den Wert `120%`. Der Grund dafür ist, dass viele Filtereffekte, etwa {{svgelement("feGaussianBlur")}}, über die Grenzen des gefilterten Elements hinausreichen. Die Standardgröße stellt sicher, dass der Filtereffekt nicht abgeschnitten wird.

## DOM-Schnittstelle

Dieses Element implementiert die Schnittstelle [`SVGFilterElement`](/de/docs/Web/API/SVGFilterElement).

## Beispiele

### Einen Weichzeichnungseffekt hinzufügen

#### SVG

```html
<svg width="230" height="120" xmlns="http://www.w3.org/2000/svg">
  <filter id="blurMe">
    <feGaussianBlur stdDeviation="5" />
  </filter>

  <circle cx="60" cy="60" r="50" fill="green" />

  <circle cx="170" cy="60" r="50" fill="green" filter="url(#blurMe)" />
</svg>
```

#### Ergebnis

{{EmbedLiveSample("adding_a_blur_effect",235,150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feDropShadow")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG-Tutorial: Filtereffekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
