---
title: <stop>
slug: Web/SVG/Element/stop
l10n:
  sourceCommit: fe1beab414730a2d9ae8a3824af9297ac9bd9410
---

{{SVGRef}}

Das **`<stop>`** [SVG](/de/docs/Web/SVG)-Element definiert eine Farbe und deren Position zur Verwendung in einem Verlaufsfeld. Dieses Element ist immer ein Kind eines {{SVGElement("linearGradient")}}- oder {{SVGElement("radialGradient")}}-Elements.

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

- {{SVGAttr("offset")}}
  - : Dieses Attribut definiert, wo der Verlaufsstopp entlang des Verlaufsvektors platziert wird.
    _Werttyp_: [**\<number>**](/de/docs/Web/SVG/Content_type#number)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("stop-color")}}
  - : Dieses Attribut definiert die Farbe des Verlaufsstopps. Es kann als CSS-Eigenschaft verwendet werden.
    _Werttyp_: [**\<color>**](/de/docs/Web/SVG/Content_type#color); _Standardwert_: `black`; _Animierbar_: **ja**
- {{SVGAttr("stop-opacity")}}
  - : Dieses Attribut definiert die Deckkraft des Verlaufsstopps. Es kann als CSS-Eigenschaft verwendet werden.
    _Werttyp_: [**\<opacity-value>**](/de/docs/Web/SVG/Content_type#opacity_value); _Standardwert_: `1`; _Animierbar_: **ja**

## Nutzungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
