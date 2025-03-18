---
title: <linearGradient>
slug: Web/SVG/Reference/Element/linearGradient
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`<linearGradient>`** [SVG](/de/docs/Web/SVG)-Element ermöglicht es Autoren, lineare Gradienten zu definieren, die auf andere SVG-Elemente angewendet werden können.

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
    _Wertetyp_: `userSpaceOnUse`|`objectBoundingBox` ; _Standardwert_: `objectBoundingBox`; _Animierbar_: **ja**
- {{SVGAttr("gradientTransform")}}
  - : Dieses Attribut bietet eine zusätzliche [Transformation](/de/docs/Web/SVG/Reference/Attribute/transform) für das Gradient-Koordinatensystem.
    _Wertetyp_: [**\<transform-list>**](/de/docs/Web/SVG/Guides/Content_type#transform-list) ; _Standardwert_: _Identitätstransformation_; _Animierbar_: **ja**
- {{SVGAttr("href")}}
  - : Dieses Attribut definiert eine Referenz zu einem anderen `<linearGradient>`-Element, das als Vorlage verwendet wird.
    _Wertetyp_: [**\<URL>**](/de/docs/Web/SVG/Guides/Content_type#url) ; _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("spreadMethod")}}
  - : Dieses Attribut gibt an, wie sich der Gradient verhält, wenn er innerhalb der Begrenzungen der Form beginnt oder endet, die den Gradient enthält.
    _Wertetyp_: `pad`|`reflect`|`repeat` ; _Standardwert_: `pad`; _Animierbar_: **ja**
- {{SVGAttr("x1")}}
  - : Dieses Attribut definiert die x-Koordinate des Startpunkts des Vektorgradienten, entlang dem der lineare Gradient gezeichnet wird.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `0%`; _Animierbar_: **ja**
- {{SVGAttr("x2")}}
  - : Dieses Attribut definiert die x-Koordinate des Endpunkts des Vektorgradienten, entlang dem der lineare Gradient gezeichnet wird.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `100%`; _Animierbar_: **ja**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Eine [\<IRI>](/de/docs/Web/SVG/Guides/Content_type#iri)-Referenz zu einem anderen `<linearGradient>`-Element, das als Vorlage verwendet wird.
    _Wertetyp_: [**\<IRI>**](/de/docs/Web/SVG/Guides/Content_type#iri) ; _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("y1")}}
  - : Dieses Attribut definiert die y-Koordinate des Startpunkts des Vektorgradienten, entlang dem der lineare Gradient gezeichnet wird.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `0%`; _Animierbar_: **ja**
- {{SVGAttr("y2")}}
  - : Dieses Attribut definiert die y-Koordinate des Endpunkts des Vektorgradienten, entlang dem der lineare Gradient gezeichnet wird.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `0%`; _Animierbar_: **ja**

## Nutzungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
