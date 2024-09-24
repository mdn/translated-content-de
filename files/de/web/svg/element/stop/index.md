---
title: <stop>
slug: Web/SVG/Element/stop
l10n:
  sourceCommit: 2f43f506240fa6c866cc3bc2d018364ae49421d9
---

{{SVGRef}}

Das SVG-Element **`<stop>`** definiert eine Farbe und ihre Position zur Verwendung in einem Farbverlauf. Dieses Element ist immer ein untergeordnetes Element von entweder einem {{SVGElement("linearGradient")}}- oder einem {{SVGElement("radialGradient")}}-Element.

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

  <!-- Verwendung meines linearen Farbverlaufs -->
  <circle cx="5" cy="5" r="4" fill="url('#myGradient')" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Attribute

- {{SVGAttr("offset")}}
  - : Dieses Attribut definiert, wo der Farbverlaufstopp entlang des Farbverlaufsvektors platziert wird.
    _Werttyp_: [**\<number>**](/de/docs/Web/SVG/Content_type#number)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("stop-color")}}
  - : Dieses Attribut definiert die Farbe des Farbverlaufstopps. Es kann als CSS-Eigenschaft verwendet werden.
    _Werttyp_: `currentcolor`|[**\<color>**](/de/docs/Web/SVG/Content_type#color)|[**\<icccolor>**](/de/docs/Web/SVG/Content_type#icccolor); _Standardwert_: `black`; _Animierbar_: **ja**
- {{SVGAttr("stop-opacity")}}
  - : Dieses Attribut definiert die Deckkraft des Farbverlaufstopps. Es kann als CSS-Eigenschaft verwendet werden.
    _Werttyp_: [**\<opacity>**](/de/docs/Web/SVG/Content_type#opacity_value); _Standardwert_: `1`; _Animierbar_: **ja**

## Anwendungszusammenhang

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
