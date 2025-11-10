---
title: <clipPath>
slug: Web/SVG/Reference/Element/clipPath
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`<clipPath>`** [SVG](/de/docs/Web/SVG) Element definiert einen Schnittpfad, der durch die {{SVGAttr("clip-path")}} Eigenschaft verwendet wird.

Ein Schnittpfad beschränkt den Bereich, auf den Farbe angewendet werden kann. Konzeptionell werden Teile der Zeichnung, die außerhalb des durch den Schnittpfad begrenzten Bereichs liegen, nicht gezeichnet.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("clipPathUnits")}}
  - : Definiert das Koordinatensystem für den Inhalt des `<clipPath>` Elements.
    _Wertetyp_: `userSpaceOnUse` | `objectBoundingBox`; _Standardwert_: `userSpaceOnUse`; _Animierbar_: **ja**

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGClipPathElement`](/de/docs/Web/API/SVGClipPathElement) Schnittstelle.

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

Ein Schnittpfad ist konzeptionell äquivalent zu einem benutzerdefinierten Ansichtsfenster für das referenzierende Element. Daher beeinflusst es das _Rendering_ eines Elements, jedoch nicht die _inhärente Geometrie_ des Elements. Der Begrenzungsrahmen eines beschnittenen Elements (d.h. eines Elements, das ein `<clipPath>` Element über eine {{SVGAttr("clip-path")}} Eigenschaft referenziert, oder ein Kind des referenzierenden Elements) muss gleich bleiben, als ob es nicht beschnitten wäre.

Standardmäßig werden {{cssxref("pointer-events")}} nicht auf beschnittene Bereiche verteilt. Zum Beispiel wird ein Kreis mit einem Radius von `10`, der auf einen Kreis mit einem Radius von `5` beschnitten ist, keine "Klick"-Ereignisse außerhalb des kleineren Radius empfangen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("mask")}}
- Die CSS-Eigenschaft {{cssxref("clip-path")}}
- [Einführung in CSS-Clipping](/de/docs/Web/CSS/Guides/Masking/Clipping)
- [CSS-Masking](/de/docs/Web/CSS/Guides/Masking/Clipping) Modul
