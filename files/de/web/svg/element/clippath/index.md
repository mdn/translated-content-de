---
title: <clipPath>
slug: Web/SVG/Element/clipPath
l10n:
  sourceCommit: 2f43f506240fa6c866cc3bc2d018364ae49421d9
---

{{SVGRef}}

Das **`<clipPath>`** [SVG](/de/docs/Web/SVG)-Element definiert einen Clipping-Pfad, der von der {{SVGAttr("clip-path")}}-Eigenschaft verwendet wird.

Ein Clipping-Pfad beschränkt den Bereich, auf den Farbe angewendet werden kann. Konzeptionell werden Teile der Zeichnung, die außerhalb des Bereichs liegen, der vom Clipping-Pfad begrenzt wird, nicht gezeichnet.

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
      Alles außerhalb des Kreises wird
      abgeschnitten und daher unsichtbar.
    -->
    <circle cx="40" cy="35" r="35" />
  </clipPath>

  <!-- Das ursprüngliche schwarze Herz zur Referenz -->
  <path
    id="heart"
    d="M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z" />

  <!--
    Nur der Teil des roten Herzens
    innerhalb des Clip-Kreises ist sichtbar.
  -->
  <use clip-path="url(#myClip)" href="#heart" fill="red" />
</svg>
```

```css
/* Mit einem Hauch von CSS für Browser, die *
 * die r-Geometry-Eigenschaft implementiert haben. */

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

{{EmbedLiveSample('Beispiel', 100, 100)}}

Ein Clipping-Pfad ist konzeptionell gleichbedeutend mit einem benutzerdefinierten Ansichtsfenster für das referenzierende Element. Daher beeinflusst er das _Rendering_ eines Elements, aber nicht die _inhärente Geometrie_ des Elements. Die Begrenzungsbox eines beschnittenen Elements (d. h. eines Elements, das ein `<clipPath>`-Element über eine {{SVGAttr("clip-path")}}-Eigenschaft referenziert, oder eines Kindes des referenzierenden Elements) muss gleich bleiben, als ob es nicht beschnitten wäre.

Standardmäßig werden {{cssxref("pointer-events")}} nicht in beschnittenen Bereichen ausgelöst. Zum Beispiel wird ein Kreis mit einem Radius von `10`, der zu einem Kreis mit einem Radius von `5` beschnitten wird, keine "Klick"-Ereignisse außerhalb des kleineren Radius erhalten.

## Attribute

- {{SVGAttr("clipPathUnits")}}
  - : Definiert das Koordinatensystem für den Inhalt des `<clipPath>`-Elements.
    _Wertetyp_: `userSpaceOnUse`|`objectBoundingBox`; _Standardwert_: `userSpaceOnUse`; _Animierbar_: **ja**

## Einsatzkontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Verwandte Themen

- Andere Clipping- und Maskierungselemente in SVG: {{SVGElement("mask")}}
- Einige CSS-Eigenschaften: {{cssxref("clip-path")}}, {{cssxref("pointer-events")}}
