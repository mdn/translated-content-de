---
title: <stop>
slug: Web/SVG/Element/stop
l10n:
  sourceCommit: da99ca19ae62059f81dbee3f7b4919de784f3510
---

{{SVGRef}}

Das **`<stop>`** [SVG](/de/docs/Web/SVG)-Element definiert eine Farbe und ihre Position zur Verwendung in einem Farbverlauf. Dieses Element ist immer ein Kind eines {{SVGElement("linearGradient")}} oder {{SVGElement("radialGradient")}} Elements.

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
  - : Dieses Attribut definiert, wo der Farbverlaufstopp entlang des Verlaufvektors platziert wird.
    _Wertetyp_: [**\<number>**](/de/docs/Web/SVG/Content_type#number)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("stop-color")}}
  - : Dieses Attribut definiert die Farbe des Farbverlaufstopps. Es kann als CSS-Eigenschaft verwendet werden.
    _Wertetyp_: `currentcolor`|[**\<color>**](/de/docs/Web/SVG/Content_type#color)|[**\<icccolor>**](/de/docs/Web/SVG/Content_type#icccolor); _Standardwert_: `black`; _Animierbar_: **ja**
- {{SVGAttr("stop-opacity")}}
  - : Dieses Attribut definiert die Deckkraft des Farbverlaufstopps. Es kann als CSS-Eigenschaft verwendet werden.
    _Wertetyp_: [**\<opacity>**](/de/docs/Web/SVG/Content_type#opacity_value); _Standardwert_: `1`; _Animierbar_: **ja**

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
