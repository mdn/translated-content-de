---
title: <clipPath>
slug: Web/SVG/Element/clipPath
l10n:
  sourceCommit: 2f43f506240fa6c866cc3bc2d018364ae49421d9
---

{{SVGRef}}

Das **`<clipPath>`** [SVG](/de/docs/Web/SVG) Element definiert einen Beschneidungspfad, der von der {{SVGAttr("clip-path")}} Eigenschaft verwendet wird.

Ein Beschneidungspfad beschränkt den Bereich, auf den Farbe angewendet werden kann. Konzeptuell werden Teile der Zeichnung, die außerhalb des Bereichs liegen, der durch den Beschneidungspfad begrenzt ist, nicht gezeichnet.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100">
  <clipPath id="myClip">
    <!--
      Everything outside the circle will be
      clipped and therefore invisible.
    -->
    <circle cx="40" cy="35" r="35" />
  </clipPath>

  <!-- The original black heart, for reference -->
  <path
    id="heart"
    d="M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z" />

  <!--
    Only the portion of the red heart
    inside the clip circle is visible.
  -->
  <use clip-path="url(#myClip)" href="#heart" fill="red" />
</svg>
```

```css
/* With a touch of CSS for browsers who *
 * implemented the r Geometry Property. */

@keyframes openYourHeart {
  from {
    r: 0;
  }
  to {
    r: 60px;
  }
}

#myClip circle {
  animation: openYourHeart 15s infinite;
}
```

{{EmbedLiveSample('Example', 100, 100)}}

Ein Beschneidungspfad ist konzeptuell äquivalent zu einem benutzerdefinierten Viewport für das referenzierende Element. Daher beeinflusst er das _Rendering_ eines Elements, aber nicht die _eigene Geometrie_ des Elements. Der Begrenzungsrahmen eines beschnittenen Elements (das heißt, eines Elements, das ein `<clipPath>` Element über eine {{SVGAttr("clip-path")}} Eigenschaft referenziert, oder ein Kind des referenzierenden Elements) muss derselbe bleiben, als ob es nicht beschnitten wäre.

Standardmäßig werden keine {{cssxref("pointer-events")}} auf beschnittene Bereiche übertragen. Beispielsweise erhält ein Kreis mit einem Radius von `10`, der auf einen Kreis mit einem Radius von `5` zugeschnitten ist, keine "Klick"-Ereignisse außerhalb des kleineren Radius.

## Attribute

- {{SVGAttr("clipPathUnits")}}
  - : Definiert das Koordinatensystem für den Inhalt des `<clipPath>` Elements.
    _Wertetyp_: `userSpaceOnUse`|`objectBoundingBox` ; _Standardwert_: `userSpaceOnUse`; _Animierbar_: **ja**

## Nutzungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Verwandte Themen

- Weitere Beschneidungselemente und Maskierungselemente in SVG: {{SVGElement("mask")}}
- Einige CSS-Eigenschaften: {{cssxref("clip-path")}}, {{cssxref("pointer-events")}}
