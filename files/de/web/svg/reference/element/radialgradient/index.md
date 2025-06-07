---
title: <radialGradient>
slug: Web/SVG/Reference/Element/radialGradient
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

Das **`<radialGradient>`** [SVG](/de/docs/Web/SVG)-Element ermöglicht es Autoren, radiale Verläufe zu definieren, die auf die Füllung oder den Strich grafischer Elemente angewendet werden können.

> [!NOTE]
> Verwechseln Sie es nicht mit dem CSS {{cssxref('gradient/radial-gradient', 'radial-gradient()')}}, da CSS-Verläufe nur auf HTML-Elemente angewendet werden können, während SVG-Verläufe nur auf SVG-Elemente angewendet werden können.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("cx")}}
  - : Dieses Attribut definiert die x-Koordinate des Endkreises des radialen Verlaufs.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `50%`; _Animierbar_: **ja**
- {{SVGAttr("cy")}}
  - : Dieses Attribut definiert die y-Koordinate des Endkreises des radialen Verlaufs.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `50%`; _Animierbar_: **ja**
- {{SVGAttr("fr")}}
  - : Dieses Attribut definiert den Radius des Startkreises des radialen Verlaufs. Der Verlauf wird so gezeichnet, dass der 0% {{SVGElement('stop','gradient stop')}} auf den Umfang des Startkreises abgebildet wird.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `0%`; _Animierbar_: **ja**
- {{SVGAttr("fx")}}
  - : Dieses Attribut definiert die x-Koordinate des Startkreises des radialen Verlaufs.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: Gleich wie `cx`; _Animierbar_: **ja**
- {{SVGAttr("fy")}}
  - : Dieses Attribut definiert die y-Koordinate des Startkreises des radialen Verlaufs.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: Gleich wie `cy`; _Animierbar_: **ja**
- {{SVGAttr("gradientUnits")}}
  - : Dieses Attribut definiert das Koordinatensystem für die Attribute `cx`, `cy`, `r`, `fx`, `fy`, `fr`.
    _Werttyp_: `userSpaceOnUse` | `objectBoundingBox`; _Standardwert_: `objectBoundingBox`; _Animierbar_: **ja**
- {{SVGAttr("gradientTransform")}}
  - : Dieses Attribut bietet eine zusätzliche [Transformation](/de/docs/Web/SVG/Reference/Attribute/transform) für das Gradient-Koordinatensystem.
    _Werttyp_: [**\<transform-list>**](/de/docs/Web/SVG/Guides/Content_type#transform-list); _Standardwert_: _Identitätstransformation_; _Animierbar_: **ja**
- {{SVGAttr("href")}}
  - : Dieses Attribut definiert einen Verweis auf ein anderes `<radialGradient>`-Element, das als Vorlage verwendet wird.
    _Werttyp_: [**\<URL>**](/de/docs/Web/SVG/Guides/Content_type#url); _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("r")}}
  - : Dieses Attribut definiert den Radius des Endkreises des radialen Verlaufs. Der Verlauf wird so gezeichnet, dass der 100% {{SVGElement('stop','gradient stop')}} auf den Umfang des Endkreises abgebildet wird.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `50%`; _Animierbar_: **ja**
- {{SVGAttr("spreadMethod")}}
  - : Dieses Attribut gibt an, wie der Verlauf sich verhält, wenn er innerhalb der Grenzen der Form, die den Verlauf enthält, beginnt oder endet.
    _Werttyp_: `pad` | `reflect` | `repeat`; _Standardwert_: `pad`; _Animierbar_: **ja**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Ein [\<IRI>](/de/docs/Web/SVG/Guides/Content_type#iri)-Verweis auf ein anderes `<radialGradient>`-Element, das als Vorlage verwendet wird.
    _Werttyp_: [**\<IRI>**](/de/docs/Web/SVG/Guides/Content_type#iri); _Standardwert_: keiner; _Animierbar_: **ja**

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGRadialGradientElement`](/de/docs/Web/API/SVGRadialGradientElement)-Schnittstelle.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
