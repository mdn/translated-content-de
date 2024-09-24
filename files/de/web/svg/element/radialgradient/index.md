---
title: <radialGradient>
slug: Web/SVG/Element/radialGradient
l10n:
  sourceCommit: 2e5fc06de139c56873a20ec4bc3bf5600ea3cbef
---

{{SVGRef}}

Das **`<radialGradient>`**-Element ermöglicht es Autoren, radiale Verläufe zu definieren, die auf die Füllung oder den Umriss von grafischen Elementen angewendet werden können.

> [!NOTE]
> Verwechseln Sie dies nicht mit CSS {{cssxref('gradient/radial-gradient', 'radial-gradient()')}}, da CSS-Verläufe nur auf HTML-Elemente angewendet werden können, während SVG-Verläufe nur auf SVG-Elemente anwendbar sind.

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
    <radialGradient id="myGradient">
      <stop offset="10%" stop-color="gold" />
      <stop offset="95%" stop-color="red" />
    </radialGradient>
  </defs>

  <!-- using my radial gradient -->
  <circle cx="5" cy="5" r="4" fill="url('#myGradient')" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Attribute

- {{SVGAttr("cx")}}
  - : Dieses Attribut definiert die x-Koordinate des Endkreises des radialen Verlaufs.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length) ; _Standardwert_: `50%`; _Animierbar_: **ja**
- {{SVGAttr("cy")}}
  - : Dieses Attribut definiert die y-Koordinate des Endkreises des radialen Verlaufs.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length) ; _Standardwert_: `50%`; _Animierbar_: **ja**
- {{SVGAttr("fr")}}
  - : Dieses Attribut definiert den Radius des Startkreises des radialen Verlaufs. Der Verlauf wird so gezeichnet, dass der 0% {{SVGElement('stop','gradient stop')}} dem Umfang des Startkreises zugeordnet wird.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length) ; _Standardwert_: `0%`; _Animierbar_: **ja**
- {{SVGAttr("fx")}}
  - : Dieses Attribut definiert die x-Koordinate des Startkreises des radialen Verlaufs.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length) ; _Standardwert_: Gleich wie `cx`; _Animierbar_: **ja**
- {{SVGAttr("fy")}}
  - : Dieses Attribut definiert die y-Koordinate des Startkreises des radialen Verlaufs.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length) ; _Standardwert_: Gleich wie `cy`; _Animierbar_: **ja**
- {{SVGAttr("gradientUnits")}}
  - : Dieses Attribut definiert das Koordinatensystem für die Attribute `cx`, `cy`, `r`, `fx`, `fy`, `fr`.
    _Wertetyp_: `userSpaceOnUse`|`objectBoundingBox` ; _Standardwert_: `objectBoundingBox`; _Animierbar_: **ja**
- {{SVGAttr("gradientTransform")}}
  - : Dieses Attribut bietet eine zusätzliche [Transformation](/de/docs/Web/SVG/Attribute/transform) des Gradientenkoordinatensystems.
    _Wertetyp_: **[\<transform-list>](/de/docs/Web/SVG/Content_type#transform-list)** ; _Standardwert_: _identity transform_; _Animierbar_: **ja**
- {{SVGAttr("href")}}
  - : Dieses Attribut definiert einen Verweis auf ein anderes `<radialGradient>`-Element, das als Vorlage verwendet wird.
    _Wertetyp_: [**\<URL>**](/de/docs/Web/SVG/Content_type#url) ; _Standardwert_: none; _Animierbar_: **ja**
- {{SVGAttr("r")}}
  - : Dieses Attribut definiert den Radius des Endkreises des radialen Verlaufs. Der Verlauf wird so gezeichnet, dass der 100% {{SVGElement('stop','gradient stop')}} dem Umfang des Endkreises zugeordnet wird.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length) ; _Standardwert_: `50%`; _Animierbar_: **ja**
- {{SVGAttr("spreadMethod")}}
  - : Dieses Attribut gibt an, wie der Verlauf sich verhält, wenn er innerhalb der Grenzen der Form, die den Verlauf enthält, beginnt oder endet.
    _Wertetyp_: `pad`|`reflect`|`repeat` ; _Standardwert_: `pad`; _Animierbar_: **ja**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Ein [\<IRI>](/de/docs/Web/SVG/Content_type#iri) Verweis auf ein anderes `<radialGradient>`-Element, das als Vorlage verwendet wird.
    _Wertetyp_: [**\<IRI>**](/de/docs/Web/SVG/Content_type#iri) ; _Standardwert_: none; _Animierbar_: **ja**

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
