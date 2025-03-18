---
title: <clipPath>
slug: Web/SVG/Reference/Element/clipPath
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`<clipPath>`** [SVG](/de/docs/Web/SVG)-Element definiert einen Clipping-Pfad, der von der {{SVGAttr("clip-path")}}-Eigenschaft verwendet wird.

Ein Clipping-Pfad beschränkt den Bereich, auf den Farbe angewendet werden kann. Konzeptionell werden Teile der Zeichnung, die außerhalb des durch den Clipping-Pfad begrenzten Bereichs liegen, nicht gezeichnet.

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

Ein Clipping-Pfad ist konzeptionell gleichbedeutend mit einem benutzerdefinierten Viewport für das referenzierende Element. Daher beeinflusst er die _Darstellung_ eines Elements, nicht jedoch die _eigene Geometrie_ des Elements. Der Begrenzungsrahmen eines geclippten Elements (also eines Elements, das ein `<clipPath>`-Element über eine {{SVGAttr("clip-path")}}-Eigenschaft referenziert, oder eines Kindes des referenzierenden Elements) muss derselbe bleiben, als wäre es nicht geclippt.

Standardmäßig werden {{cssxref("pointer-events")}} nicht auf geclippte Bereiche geschickt. Zum Beispiel wird ein Kreis mit einem Radius von `10`, der auf einen Kreis mit einem Radius von `5` geclippt wurde, keine "Klick"-Ereignisse außerhalb des kleineren Radius empfangen.

## Attribute

- {{SVGAttr("clipPathUnits")}}
  - : Definiert das Koordinatensystem für den Inhalt des `<clipPath>`-Elements.
    _Wertetyp_: `userSpaceOnUse`|`objectBoundingBox`; _Standardwert_: `userSpaceOnUse`; _Animierbar_: **ja**

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Verwandte Themen

- Andere Clipping- und Maskierungs-SVG-Elemente: {{SVGElement("mask")}}
- Einige CSS-Eigenschaften: {{cssxref("clip-path")}}, {{cssxref("pointer-events")}}
