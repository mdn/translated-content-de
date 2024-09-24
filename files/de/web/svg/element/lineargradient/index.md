---
title: <linearGradient>
slug: Web/SVG/Element/linearGradient
l10n:
  sourceCommit: 2f43f506240fa6c866cc3bc2d018364ae49421d9
---

{{SVGRef}}

Das **`<linearGradient>`** Element ermöglicht es Autoren, lineare Farbverläufe zu definieren, die auf andere SVG-Elemente angewendet werden können.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 10 10"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="myGradient" gradientTransform="rotate(90)">
      <stop offset="5%" stop-color="gold" />
      <stop offset="95%" stop-color="red" />
    </linearGradient>
  </defs>

  <!-- using my linear gradient -->
  <circle cx="5" cy="5" r="4" fill="url('#myGradient')" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Attribute

- {{SVGAttr("gradientUnits")}}
  - : Dieses Attribut definiert das Koordinatensystem für die Attribute `x1`, `x2`, `y1`, `y2`
    _Werttyp_: `userSpaceOnUse`|`objectBoundingBox` ; _Standardwert_: `objectBoundingBox`; _Animierbar_: **ja**
- {{SVGAttr("gradientTransform")}}
  - : Dieses Attribut bietet zusätzliche [Transformation](/de/docs/Web/SVG/Attribute/transform) für das Koordinatensystem des Gradienten.
    _Werttyp_: **[\<transform-list>](/de/docs/Web/SVG/Content_type#transform-list)** ; _Standardwert_: _identity transform_; _Animierbar_: **ja**
- {{SVGAttr("href")}}
  - : Dieses Attribut definiert eine Referenz zu einem anderen `<linearGradient>`-Element, das als Vorlage verwendet wird.
    _Werttyp_: [**\<URL>**](/de/docs/Web/SVG/Content_type#url) ; _Standardwert_: none; _Animierbar_: **ja**
- {{SVGAttr("spreadMethod")}}
  - : Dieses Attribut gibt an, wie der Farbverlauf sich verhält, wenn er innerhalb der Grenzen der Form, die den Farbverlauf enthält, beginnt oder endet.
    _Werttyp_: `pad`|`reflect`|`repeat` ; _Standardwert_: `pad`; _Animierbar_: **ja**
- {{SVGAttr("x1")}}
  - : Dieses Attribut definiert die x-Koordinate des Startpunkts des Vektorverlaufs, entlang dessen der lineare Farbverlauf gezeichnet wird.
    _Werttyp_: {{cssxref("length-percentage")}} | {{cssxref("number")}}; _Standardwert_: `0%`; _Animierbar_: **ja**
- {{SVGAttr("x2")}}
  - : Dieses Attribut definiert die x-Koordinate des Endpunkts des Vektorverlaufs, entlang dessen der lineare Farbverlauf gezeichnet wird.
    _Werttyp_: {{cssxref("length-percentage")}} | {{cssxref("number")}}; _Standardwert_: `100%`; _Animierbar_: **ja**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Ein [\<IRI>](/de/docs/Web/SVG/Content_type#iri) Verweis auf ein anderes `<linearGradient>`-Element, das als Vorlage verwendet wird.
    _Werttyp_: [**\<IRI>**](/de/docs/Web/SVG/Content_type#iri) ; _Standardwert_: none; _Animierbar_: **ja**
- {{SVGAttr("y1")}}
  - : Dieses Attribut definiert die y-Koordinate des Startpunkts des Vektorverlaufs, entlang dessen der lineare Farbverlauf gezeichnet wird.
    _Werttyp_: {{cssxref("length-percentage")}} | {{cssxref("number")}}; _Standardwert_: `0%`; _Animierbar_: **ja**
- {{SVGAttr("y2")}}
  - : Dieses Attribut definiert die y-Koordinate des Endpunkts des Vektorverlaufs, entlang dessen der lineare Farbverlauf gezeichnet wird.
    _Werttyp_: {{cssxref("length-percentage")}} | {{cssxref("number")}}; _Standardwert_: `0%`; _Animierbar_: **ja**

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
