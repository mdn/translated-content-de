---
title: <stop>
slug: Web/SVG/Reference/Element/stop
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

Das **`<stop>`** [SVG](/de/docs/Web/SVG)-Element definiert eine Farbe und deren Position zur Verwendung in einem Farbverlauf. Dieses Element ist immer ein Kind eines {{SVGElement("linearGradient")}} oder {{SVGElement("radialGradient")}} Elements.

## Nutzungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("offset")}}
  - : Dieses Attribut definiert, wo der Farbverlauf-Stopp entlang des Farbverlaufs vektors platziert wird.
    _Wertetyp_: [**\<number>**](/de/docs/Web/SVG/Guides/Content_type#number) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("stop-color")}}
  - : Dieses Attribut definiert die Farbe des Farbverlauf-Stopps. Es kann als CSS-Eigenschaft verwendet werden.
    _Wertetyp_: [**\<color>**](/de/docs/Web/SVG/Guides/Content_type#color); _Standardwert_: `black`; _Animierbar_: **ja**
- {{SVGAttr("stop-opacity")}}
  - : Dieses Attribut definiert die Deckkraft des Farbverlauf-Stopps. Es kann als CSS-Eigenschaft verwendet werden.
    _Wertetyp_: [**\<opacity-value>**](/de/docs/Web/SVG/Guides/Content_type#opacity_value); _Standardwert_: `1`; _Animierbar_: **ja**

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGStopElement`](/de/docs/Web/API/SVGStopElement)-Schnittstelle.

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
