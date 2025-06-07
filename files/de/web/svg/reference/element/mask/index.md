---
title: <mask>
slug: Web/SVG/Reference/Element/mask
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

Das **`<mask>`** [SVG](/de/docs/Web/SVG)-Element definiert eine Maske für die Zusammensetzung des aktuellen Objekts mit dem Hintergrund. Eine Maske wird mit der {{SVGAttr("mask")}}-Eigenschaft und der CSS {{cssxref("mask-image")}}-Eigenschaft verwendet/referenziert.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("height")}}
  - : Dieses Attribut definiert die Höhe des Maskierungsbereichs.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `120%`; _Animierbar_: **ja**
- {{SVGAttr("mask-type")}}
  - : Dieses Attribut definiert den Maskenmodus für den Inhalt des `<mask>`.
    _Wertetyp_: `alpha` | `luminance`; _Standardwert_: `luminance`; _Animierbar_: **ja**
- {{SVGAttr("maskContentUnits")}}
  - : Dieses Attribut definiert das Koordinatensystem für den Inhalt des `<mask>`.
    _Wertetyp_: `userSpaceOnUse` | `objectBoundingBox`; _Standardwert_: `userSpaceOnUse`; _Animierbar_: **ja**
- {{SVGAttr("maskUnits")}}
  - : Dieses Attribut definiert das Koordinatensystem für die Attribute {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}} und {{SVGAttr("height")}} auf dem `<mask>`.
    _Wertetyp_: `userSpaceOnUse` | `objectBoundingBox`; _Standardwert_: `objectBoundingBox`; _Animierbar_: **ja**
- {{SVGAttr("x")}}
  - : Dieses Attribut definiert die x-Achsen-Koordinate der oberen linken Ecke des Maskierungsbereichs.
    _Wertetyp_: [**\<coordinate>**](/de/docs/Web/SVG/Guides/Content_type#coordinate); _Standardwert_: `-10%`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Dieses Attribut definiert die y-Achsen-Koordinate der oberen linken Ecke des Maskierungsbereichs.
    _Wertetyp_: [**\<coordinate>**](/de/docs/Web/SVG/Guides/Content_type#coordinate); _Standardwert_: `-10%`; _Animierbar_: **ja**
- {{SVGAttr("width")}}
  - : Dieses Attribut definiert die Breite des Maskierungsbereichs.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `120%`; _Animierbar_: **ja**

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGMaskElement`](/de/docs/Web/API/SVGMaskElement)-Schnittstelle.

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
  <mask id="myMask" mask-type="luminance">
    <!-- Everything under a white pixel will be visible -->
    <rect x="0" y="0" width="100" height="100" fill="white" />

    <!-- Everything under a black pixel will be invisible -->
    <path
      d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z"
      fill="black" />
  </mask>

  <polygon points="-10,110 110,110 110,-10" fill="orange" />

  <!-- with this mask applied, we "punch" a heart shape hole into the circle -->
  <circle cx="50" cy="50" r="50" fill="purple" mask="url(#myMask)" />
</svg>
```

{{EmbedLiveSample('Example', 100, 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("mask-type")}}-Eigenschaft
- Andere SVG-Elemente für Ausschnitte und Maskierungen: {{SVGElement("clipPath")}}
- CSS-Eigenschaften für Ausschnitte und Maskierungen: {{cssxref("mask")}}, {{cssxref("mask-image")}}, {{cssxref("mask-mode")}}, {{cssxref("mask-repeat")}}, {{cssxref("mask-position")}}, {{cssxref("mask-clip")}}, {{cssxref("mask-origin")}}, {{cssxref("mask-composite")}}, {{cssxref("mask-size")}}
