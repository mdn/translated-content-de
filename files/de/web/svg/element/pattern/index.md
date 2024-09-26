---
title: <pattern>
slug: Web/SVG/Element/pattern
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{SVGRef}}

Das **`<pattern>`**-Element definiert ein Grafikobjekt, das in wiederholten x- und y-Koordinatenintervallen („gekachelt“) gezeichnet werden kann, um einen Bereich abzudecken.

Das `<pattern>` wird durch die Attribute {{SVGAttr("fill")}} und/oder {{SVGAttr("stroke")}} auf anderen [Grafikelementen](/de/docs/Web/SVG/Tutorial/Basic_Shapes) referenziert, um diese Elemente mit dem referenzierten Muster zu füllen oder zu zeichnen.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 230 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="star" viewBox="0,0,10,10" width="10%" height="10%">
      <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
    </pattern>
  </defs>

  <circle cx="50" cy="50" r="50" fill="url(#star)" />
  <circle
    cx="180"
    cy="50"
    r="40"
    fill="none"
    stroke-width="20"
    stroke="url(#star)" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Attribute

- {{SVGAttr("height")}}
  - : Dieses Attribut bestimmt die Höhe der Musterkachel.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("href")}}
  - : Dieses Attribut referenziert ein Vorlage-Muster, das Standardwerte für die `<pattern>`-Attribute bereitstellt.
    _Werttyp_: [**\<URL>**](/de/docs/Web/SVG/Content_type#url); _Standardwert_: _keiner_; _Animierbar_: **ja**
- {{SVGAttr("patternContentUnits")}}
  - : Dieses Attribut definiert das Koordinatensystem für den Inhalt des {{SVGElement("pattern")}}.
    _Werttyp_: `userSpaceOnUse`|`objectBoundingBox`; _Standardwert_: `userSpaceOnUse`; _Animierbar_: **ja**

    > [!NOTE]
    > Dieses Attribut hat keine Wirkung, wenn ein `viewBox`-Attribut auf dem `<pattern>`-Element angegeben ist.

- {{SVGAttr("patternTransform")}}
  - : Dieses Attribut enthält die Definition einer optionalen zusätzlichen Transformation vom Musterskoordinatensystem auf das Zielkoordinatensystem.
    _Werttyp_: **[\<transform-list>](/de/docs/Web/SVG/Content_type#transform-list)**; _Standardwert_: _keiner_; _Animierbar_: **ja**
- {{SVGAttr("patternUnits")}}
  - : Dieses Attribut definiert das Koordinatensystem für die Attribute `x`, `y`, `width` und `height`.
    _Werttyp_: `userSpaceOnUse`|`objectBoundingBox`; _Standardwert_: `objectBoundingBox`; _Animierbar_: **ja**
- {{SVGAttr("preserveAspectRatio")}}
  - : Dieses Attribut definiert, wie das SVG-Fragment verzerrt werden muss, wenn es in einem Container mit einem anderen {{glossary("Seitenverhältnis")}} eingebettet ist.
    _Werttyp_: (`none`| `xMinYMin`| `xMidYMin`| `xMaxYMin`| `xMinYMid`| `xMidYMid`| `xMaxYMid`| `xMinYMax`| `xMidYMax`| `xMaxYMax`) (`meet`|`slice`)? ; _Standardwert_: `xMidYMid meet`; _Animierbar_: **ja**
- {{SVGAttr("viewBox")}}
  - : Dieses Attribut definiert die Grenzen des SVG-Viewports für das Musterfragment.
    _Werttyp_: **[\<list-of-numbers>](/de/docs/Web/SVG/Content_type#list-of-ts)** ; _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("width")}}
  - : Dieses Attribut bestimmt die Breite der Musterkachel.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("x")}}
  - : Dieses Attribut bestimmt die x-Koordinatenverschiebung der Musterkachel.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Dieses Attribut referenziert ein Vorlage-Muster, das Standardwerte für die `<pattern>`-Attribute bereitstellt.
    _Werttyp_: [**\<URL>**](/de/docs/Web/SVG/Content_type#url); _Standardwert_: _keiner_; _Animierbar_: **ja**

    > [!NOTE]
    > Für Browser, die `href` implementieren, gilt: Wenn sowohl `href` als auch `xlink:href` gesetzt sind, wird `xlink:href` ignoriert und nur `href` verwendet.

- {{SVGAttr("y")}}
  - : Dieses Attribut bestimmt die y-Koordinatenverschiebung der Musterkachel.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage) ; _Standardwert_: `0`; _Animierbar_: **ja**

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}