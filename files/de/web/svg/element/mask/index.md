---
title: <mask>
slug: Web/SVG/Element/mask
l10n:
  sourceCommit: 2f43f506240fa6c866cc3bc2d018364ae49421d9
---

{{SVGRef}}

Das **`<mask>`**-Element definiert eine Alphamaske für das Zusammensetzen des aktuellen Objekts im Hintergrund. Eine Maske wird mit der {{SVGAttr("mask")}}-Eigenschaft verwendet/referenziert.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 120 120">
  <rect x="-10" y="-10" width="120" height="120" fill="blue" />
  <mask id="myMask">
    <!-- Alles unter einem weißen Pixel wird sichtbar sein -->
    <rect x="0" y="0" width="100" height="100" fill="white" />

    <!-- Alles unter einem schwarzen Pixel wird unsichtbar sein -->
    <path
      d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z"
      fill="black" />
  </mask>

  <polygon points="-10,110 110,110 110,-10" fill="orange" />

  <!-- Mit dieser Maske angewendet, stanzen wir eine Herzform in den Kreis -->
  <circle cx="50" cy="50" r="50" fill="purple" mask="url(#myMask)" />
</svg>
```

{{EmbedLiveSample('Example', 100, 100)}}

## Attribute

- {{SVGAttr("height")}}
  - : Dieses Attribut definiert die Höhe des Maskierungsbereichs.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length) ; _Standardwert_: `120%`; _Animierbar_: **ja**
- {{SVGAttr("maskContentUnits")}}
  - : Dieses Attribut definiert das Koordinatensystem für den Inhalt des `<mask>`.
    _Wertetyp_: `userSpaceOnUse`|`objectBoundingBox` ; _Standardwert_: `userSpaceOnUse`; _Animierbar_: **ja**
- {{SVGAttr("maskUnits")}}
  - : Dieses Attribut definiert das Koordinatensystem für die Attribute {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}} und {{SVGAttr("height")}} auf der `<mask>`.
    _Wertetyp_: `userSpaceOnUse`|`objectBoundingBox` ; _Standardwert_: `objectBoundingBox`; _Animierbar_: **ja**
- {{SVGAttr("x")}}
  - : Dieses Attribut definiert die x-Achsen-Koordinate der oberen linken Ecke des Maskierungsbereichs.
    _Wertetyp_: [**\<coordinate>**](/de/docs/Web/SVG/Content_type#coordinate) ; _Standardwert_: `-10%`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Dieses Attribut definiert die y-Achsen-Koordinate der oberen linken Ecke des Maskierungsbereichs.
    _Wertetyp_: [**\<coordinate>**](/de/docs/Web/SVG/Content_type#coordinate) ; _Standardwert_: `-10%`; _Animierbar_: **ja**
- {{SVGAttr("width")}}
  - : Dieses Attribut definiert die Breite des Maskierungsbereichs.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length) ; _Standardwert_: `120%`; _Animierbar_: **ja**

## Nutzungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere Schnitt- und Maskierungselemente von SVG: {{SVGElement("clipPath")}}
- Schnitt- und Maskierungseigenschaften in CSS: {{cssxref("mask")}}, {{cssxref("mask-image")}}, {{cssxref("mask-mode")}}, {{cssxref("mask-repeat")}}, {{cssxref("mask-position")}}, {{cssxref("mask-clip")}}, {{cssxref("mask-origin")}}, {{cssxref("mask-composite")}}, {{cssxref("mask-size")}}, {{cssxref("pointer-events")}}
