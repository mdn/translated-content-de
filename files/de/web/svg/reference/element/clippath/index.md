---
title: <clipPath>
slug: Web/SVG/Reference/Element/clipPath
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

Das **`<clipPath>`** [SVG](/de/docs/Web/SVG)-Element definiert einen Clipping-Pfad, der durch das {{SVGAttr("clip-path")}}-Attribut verwendet wird.

Ein Clipping-Pfad beschränkt das Gebiet, auf das Farbe angewendet werden kann. Teile der Zeichnung, die außerhalb des vom Clipping-Pfad begrenzten Bereichs liegen, werden konzeptionell nicht gezeichnet.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("clipPathUnits")}}
  - : Definiert das Koordinatensystem für den Inhalt des `<clipPath>`-Elements.
    _Wertetyp_: `userSpaceOnUse` | `objectBoundingBox`; _Standardwert_: `userSpaceOnUse`; _Animierbar_: **ja**

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGClipPathElement`](/de/docs/Web/API/SVGClipPathElement)-Schnittstelle.

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

Ein Clipping-Pfad ist konzeptionell gleichbedeutend mit einem benutzerdefinierten Ansichtsfenster für das referenzierende Element. Daher beeinflusst es das _Rendering_ eines Elements, aber nicht die _inhärente Geometrie_ des Elements. Der Begrenzungsrahmen eines geklippten Elements (d.h. ein Element, das auf ein `<clipPath>`-Element über das {{SVGAttr("clip-path")}}-Attribut verweist, oder ein Kind des referenzierenden Elements) muss gleich bleiben, als ob es nicht geklippt wäre.

Standardmäßig werden {{cssxref("pointer-events")}} nicht auf geklippte Bereiche gesendet. Zum Beispiel wird ein Kreis mit einem Radius von `10`, der auf einen Kreis mit einem Radius von `5` geklippt ist, keine "Klick"-Ereignisse außerhalb des kleineren Radius erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Verwandte Themen

- {{SVGElement("mask")}}
- CSS {{cssxref("clip-path")}}-Eigenschaft
- [Einführung in das CSS-Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking/Clipping) Modul
