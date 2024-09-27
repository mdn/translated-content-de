---
title: <clipPath>
slug: Web/SVG/Element/clipPath
l10n:
  sourceCommit: 2f43f506240fa6c866cc3bc2d018364ae49421d9
---

{{SVGRef}}

Das **`<clipPath>`** [SVG](/de/docs/Web/SVG) Element definiert einen Clipping-Pfad, der von der {{SVGAttr("clip-path")}} Eigenschaft verwendet wird.

Ein Clipping-Pfad beschränkt den Bereich, auf den Farbe aufgetragen werden kann. Konzeptionell werden Teile der Zeichnung, die außerhalb des durch den Clipping-Pfad begrenzten Bereichs liegen, nicht gezeichnet.

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

Ein Clipping-Pfad ist konzeptionell äquivalent zu einem benutzerdefinierten Viewport für das referenzierende Element. Daher beeinflusst es die _Darstellung_ eines Elements, aber nicht die _eigentliche Geometrie_ des Elements. Die Begrenzungsbox eines beschnittenen Elements (das bedeutet, ein Element, das auf ein `<clipPath>` Element über eine {{SVGAttr("clip-path")}} Eigenschaft verweist, oder ein Kind des referenzierenden Elements) muss gleich bleiben, als ob es nicht beschnitten wäre.

Standardmäßig werden {{cssxref("pointer-events")}} in beschnittenen Bereichen nicht gesendet. Zum Beispiel empfängt ein Kreis mit einem Radius von `10`, der auf einen Kreis mit einem Radius von `5` beschnitten ist, außerhalb des kleineren Radius keine "Klick" Ereignisse.

## Attribute

- {{SVGAttr("clipPathUnits")}}
  - : Definiert das Koordinatensystem für den Inhalt des `<clipPath>` Elements.
    _Wertetyp_: `userSpaceOnUse`|`objectBoundingBox`; _Standardwert_: `userSpaceOnUse`; _Animierbar_: **ja**

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Verwandt

- Andere Clipping- und Masking-SVG-Elemente: {{SVGElement("mask")}}
- Einige CSS-Eigenschaften: {{cssxref("clip-path")}}, {{cssxref("pointer-events")}}
