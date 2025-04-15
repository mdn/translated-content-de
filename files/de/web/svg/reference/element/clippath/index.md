---
title: <clipPath>
slug: Web/SVG/Reference/Element/clipPath
l10n:
  sourceCommit: 34c204f8f6c3f7ac60ebb23fca9798680aee9956
---

Das **`<clipPath>`** [SVG](/de/docs/Web/SVG)-Element definiert einen Beschneidungspfad, der von der {{SVGAttr("clip-path")}}-Eigenschaft verwendet wird.

Ein Beschneidungspfad begrenzt den Bereich, auf den Farbe angewendet werden kann. Konzeptionell werden Teile der Zeichnung, die außerhalb des durch den Beschneidungspfad begrenzten Bereichs liegen, nicht gezeichnet.

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

Ein Beschneidungspfad ist konzeptionell äquivalent zu einem benutzerdefinierten Ansichtsfenster für das referenzierte Element. Somit beeinflusst es die _Renderung_ eines Elements, aber nicht die _eigene Geometrie_ des Elements. Die Begrenzungsbox eines beschnittenen Elements (das heißt, ein Element, das auf ein `<clipPath>`-Element über eine {{SVGAttr("clip-path")}}-Eigenschaft verweist oder ein Kind des referenzierenden Elements) muss gleich bleiben, als wäre es nicht beschnitten.

Standardmäßig werden {{cssxref("pointer-events")}} in beschnittenen Regionen nicht abgefangen. Beispielsweise wird ein Kreis mit einem Radius von `10`, der auf einen Kreis mit einem Radius von `5` beschnitten ist, keine "Klick"-Ereignisse außerhalb des kleineren Radius erhalten.

## Attribute

- {{SVGAttr("clipPathUnits")}}
  - : Definiert das Koordinatensystem für den Inhalt des `<clipPath>`-Elements.
    _Werttyp_: `userSpaceOnUse` | `objectBoundingBox`; _Standardwert_: `userSpaceOnUse`; _Animierbar_: **ja**

## Nutzungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Verwandtes

- Andere Beschneidungs- und Maskierungs-SVG-Elemente: {{SVGElement("mask")}}
- Einige CSS-Eigenschaften: {{cssxref("clip-path")}}, {{cssxref("pointer-events")}}
