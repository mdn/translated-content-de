---
title: <linearGradient>
slug: Web/SVG/Reference/Element/linearGradient
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

Das **`<linearGradient>`** [SVG](/de/docs/Web/SVG)-Element ermöglicht es Autoren, lineare Verläufe zu definieren, die auf andere SVG-Elemente angewendet werden können.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("gradientUnits")}}
  - : Dieses Attribut definiert das Koordinatensystem für die Attribute `x1`, `x2`, `y1`, `y2`.
    _Werttyp_: `userSpaceOnUse` | `objectBoundingBox`; _Standardwert_: `objectBoundingBox`; _Animierbar_: **ja**
- {{SVGAttr("gradientTransform")}}
  - : Dieses Attribut bietet zusätzliche [Transformation](/de/docs/Web/SVG/Reference/Attribute/transform) für das Gradientenkoordinatensystem.
    _Werttyp_: [**\<transform-list>**](/de/docs/Web/SVG/Guides/Content_type#transform-list); _Standardwert_: _Identitätstransformation_; _Animierbar_: **ja**
- {{SVGAttr("href")}}
  - : Dieses Attribut definiert einen Verweis auf ein anderes `<linearGradient>`-Element, das als Vorlage verwendet wird.
    _Werttyp_: [**\<URL>**](/de/docs/Web/SVG/Guides/Content_type#url); _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("spreadMethod")}}
  - : Dieses Attribut gibt an, wie sich der Verlauf verhält, wenn er innerhalb der Grenzen der Form, die den Verlauf enthält, beginnt oder endet.
    _Werttyp_: `pad` | `reflect` | `repeat`; _Standardwert_: `pad`; _Animierbar_: **ja**
- {{SVGAttr("x1")}}
  - : Dieses Attribut definiert die x-Koordinate des Startpunkts des Vektorverlaufs, entlang dessen der lineare Verlauf gezeichnet wird.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `0%`; _Animierbar_: **ja**
- {{SVGAttr("x2")}}
  - : Dieses Attribut definiert die x-Koordinate des Endpunkts des Vektorverlaufs, entlang dessen der lineare Verlauf gezeichnet wird.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `100%`; _Animierbar_: **ja**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Ein [\<IRI>](/de/docs/Web/SVG/Guides/Content_type#iri)-Verweis auf ein anderes `<linearGradient>`-Element, das als Vorlage verwendet wird.
    _Werttyp_: [**\<IRI>**](/de/docs/Web/SVG/Guides/Content_type#iri); _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("y1")}}
  - : Dieses Attribut definiert die y-Koordinate des Startpunkts des Vektorverlaufs, entlang dessen der lineare Verlauf gezeichnet wird.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `0%`; _Animierbar_: **ja**
- {{SVGAttr("y2")}}
  - : Dieses Attribut definiert die y-Koordinate des Endpunkts des Vektorverlaufs, entlang dessen der lineare Verlauf gezeichnet wird.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `0%`; _Animierbar_: **ja**

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGLinearGradientElement`](/de/docs/Web/API/SVGLinearGradientElement)-Schnittstelle.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
