---
title: <stop>
slug: Web/SVG/Reference/Element/stop
l10n:
  sourceCommit: 34c204f8f6c3f7ac60ebb23fca9798680aee9956
---

Das **`<stop>`** [SVG](/de/docs/Web/SVG)-Element definiert eine Farbe und ihre Position zur Verwendung in einem Farbverlauf. Dieses Element ist immer ein Kind eines {{SVGElement("linearGradient")}}- oder {{SVGElement("radialGradient")}}-Elements.

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
  - : Dieses Attribut definiert, wo der Farbverlaufsstop entlang des Farbverlaufsvektors platziert wird.
    _Werttyp_: [**\<number>**](/de/docs/Web/SVG/Guides/Content_type#number) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("stop-color")}}
  - : Dieses Attribut definiert die Farbe des Farbverlaufsstops. Es kann als CSS-Eigenschaft verwendet werden.
    _Werttyp_: [**\<color>**](/de/docs/Web/SVG/Guides/Content_type#color); _Standardwert_: `black`; _Animierbar_: **ja**
- {{SVGAttr("stop-opacity")}}
  - : Dieses Attribut definiert die Deckkraft des Farbverlaufsstops. Es kann als CSS-Eigenschaft verwendet werden.
    _Werttyp_: [**\<opacity-value>**](/de/docs/Web/SVG/Guides/Content_type#opacity_value); _Standardwert_: `1`; _Animierbar_: **ja**

## Nutzungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
