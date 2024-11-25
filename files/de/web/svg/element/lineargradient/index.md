---
title: <linearGradient>
slug: Web/SVG/Element/linearGradient
l10n:
  sourceCommit: fceea994be5c930065bb1f2b45bee9ac38de491c
---

{{SVGRef}}

Das **`<linearGradient>`**-Element von [SVG](/de/docs/Web/SVG) ermöglicht es Autoren, lineare Gradienten zu definieren, die auf andere SVG-Elemente angewendet werden.

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
  - : Dieses Attribut definiert das Koordinatensystem für die Attribute `x1`, `x2`, `y1`, `y2`.
    _Werttyp_: `userSpaceOnUse`|`objectBoundingBox` ; _Standardwert_: `objectBoundingBox`; _Animierbar_: **ja**
- {{SVGAttr("gradientTransform")}}
  - : Dieses Attribut bietet eine zusätzliche [Transformation](/de/docs/Web/SVG/Attribute/transform) für das Koordinatensystem des Gradienten.
    _Werttyp_: [**\<transform-list>**](/de/docs/Web/SVG/Content_type#transform-list) ; _Standardwert_: _identische Transformation_; _Animierbar_: **ja**
- {{SVGAttr("href")}}
  - : Dieses Attribut definiert eine Referenz zu einem anderen `<linearGradient>`-Element, das als Vorlage verwendet wird.
    _Werttyp_: [**\<URL>**](/de/docs/Web/SVG/Content_type#url) ; _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("spreadMethod")}}
  - : Dieses Attribut gibt an, wie sich der Gradient verhält, wenn er innerhalb der Grenzen der Form, die den Gradient enthält, beginnt oder endet.
    _Werttyp_: `pad`|`reflect`|`repeat` ; _Standardwert_: `pad`; _Animierbar_: **ja**
- {{SVGAttr("x1")}}
  - : Dieses Attribut definiert die x-Koordinate des Startpunkts des Vektorgradienten, entlang welchem der lineare Gradient gezeichnet wird.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length); _Standardwert_: `0%`; _Animierbar_: **ja**
- {{SVGAttr("x2")}}
  - : Dieses Attribut definiert die x-Koordinate des Endpunkts des Vektorgradienten, entlang welchem der lineare Gradient gezeichnet wird.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length); _Standardwert_: `100%`; _Animierbar_: **ja**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Eine [\<IRI>](/de/docs/Web/SVG/Content_type#iri)-Referenz zu einem anderen `<linearGradient>`-Element, das als Vorlage verwendet wird.
    _Werttyp_: [**\<IRI>**](/de/docs/Web/SVG/Content_type#iri) ; _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("y1")}}
  - : Dieses Attribut definiert die y-Koordinate des Startpunkts des Vektorgradienten, entlang welchem der lineare Gradient gezeichnet wird.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length); _Standardwert_: `0%`; _Animierbar_: **ja**
- {{SVGAttr("y2")}}
  - : Dieses Attribut definiert die y-Koordinate des Endpunkts des Vektorgradienten, entlang welchem der lineare Gradient gezeichnet wird.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length); _Standardwert_: `0%`; _Animierbar_: **ja**

## Nutzungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
