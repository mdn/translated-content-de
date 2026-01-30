---
title: <linearGradient>
slug: Web/SVG/Reference/Element/linearGradient
l10n:
  sourceCommit: 6aeb1ae589087f90e99bdeffd57c258ebfc81b29
---

Das **`<linearGradient>`** [SVG](/de/docs/Web/SVG) Element ermöglicht es Autoren, lineare Verläufe zu definieren, die auf andere SVG-Elemente angewendet werden können.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("gradientUnits")}}
  - : Dieses Attribut definiert das Koordinatensystem für die Attribute `x1`, `x2`, `y1`, `y2`.
    _Werttyp_: `userSpaceOnUse` | `objectBoundingBox`; _Standardwert_: `objectBoundingBox`; _Animierbar_: **ja**
- {{SVGAttr("gradientTransform")}}
  - : Dieses Attribut bietet eine zusätzliche [Transformation](/de/docs/Web/SVG/Reference/Attribute/transform) des Gradient-Koordinatensystems.
    _Werttyp_: [**\<transform-list>**](/de/docs/Web/SVG/Guides/Content_type#transform-list); _Standardwert_: _Identity-Transformation_; _Animierbar_: **ja**
- {{SVGAttr("href")}}
  - : Dieses Attribut definiert eine Referenz zu einem anderen `<linearGradient>` Element, das als Vorlage verwendet wird.
    _Werttyp_: [**\<URL>**](/de/docs/Web/SVG/Guides/Content_type#url); _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("spreadMethod")}}
  - : Dieses Attribut gibt an, wie sich der Verlauf verhält, wenn er innerhalb der Grenzen der das Gradient enthaltenden Form beginnt oder endet.
    _Werttyp_: `pad` | `reflect` | `repeat`; _Standardwert_: `pad`; _Animierbar_: **ja**
- {{SVGAttr("x1")}}
  - : Dieses Attribut definiert die x-Koordinate des Startpunkts des Vektorverlaufs, entlang dem der lineare Verlauf gezeichnet wird.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `0%`; _Animierbar_: **ja**
- {{SVGAttr("x2")}}
  - : Dieses Attribut definiert die x-Koordinate des Endpunkts des Vektorverlaufs, entlang dem der lineare Verlauf gezeichnet wird.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `100%`; _Animierbar_: **ja**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Eine [\<IRI>](/de/docs/Web/SVG/Guides/Content_type#iri) Referenz zu einem anderen `<linearGradient>` Element, das als Vorlage verwendet wird.
    _Werttyp_: [**\<IRI>**](/de/docs/Web/SVG/Guides/Content_type#iri); _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("y1")}}
  - : Dieses Attribut definiert die y-Koordinate des Startpunkts des Vektorverlaufs, entlang dem der lineare Verlauf gezeichnet wird.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `0%`; _Animierbar_: **ja**
- {{SVGAttr("y2")}}
  - : Dieses Attribut definiert die y-Koordinate des Endpunkts des Vektorverlaufs, entlang dem der lineare Verlauf gezeichnet wird.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `0%`; _Animierbar_: **ja**

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGLinearGradientElement`](/de/docs/Web/API/SVGLinearGradientElement) Schnittstelle.

## Beispiel

### Einfacher linearer Verlauf

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

{{EmbedLiveSample('Basic linear gradient', 150, '100%')}}

### Wiederholter geneigter Verlauf

In diesem Beispiel haben die beiden {{SVGElement("rect")}} Elemente unterschiedliche Seitenverhältnisse, aber der Winkel des Verlaufs ist derselbe.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 500 500"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient
      id="grad"
      x1="0"
      y1="0"
      x2="20"
      y2="20"
      spreadMethod="repeat"
      gradientUnits="userSpaceOnUse">
      <stop offset="50%" stop-color="red" />
      <stop offset="50%" stop-color="gold" />
    </linearGradient>
  </defs>
  <rect width="100%" height="25%" fill="url(#grad)" />
  <rect width="100%" height="65%" fill="url(#grad)" y="30%" />
</svg>
```

{{EmbedLiveSample('Repeating angled gradient', 500, '100%')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
