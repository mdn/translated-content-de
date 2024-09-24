---
title: <rect>
slug: Web/SVG/Element/rect
l10n:
  sourceCommit: 2e5fc06de139c56873a20ec4bc3bf5600ea3cbef
---

{{SVGRef}}

Das **`<rect>`**-Element ist eine [grundlegende SVG-Form](/de/docs/Web/SVG/Tutorial/Basic_Shapes), die Rechtecke zeichnet, definiert durch ihre Position, Breite und Höhe. Die Ecken der Rechtecke können abgerundet sein.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Einfaches Rechteck -->
  <rect width="100" height="100" />

  <!-- Rechteck mit abgerundeten Ecken -->
  <rect x="120" width="100" height="100" rx="15" />
</svg>
```

{{EmbedLiveSample('Example', 100, '100%')}}

## Attribute

- {{SVGAttr("x")}}
  - : Die x-Koordinate des Rechtecks.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Die y-Koordinate des Rechtecks.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("width")}}
  - : Die Breite des Rechtecks.
    _Wertetyp_: `auto`|[**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage) ; _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("height")}}
  - : Die Höhe des Rechtecks.
    _Wertetyp_: `auto`|[**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage) ; _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("rx")}}
  - : Der horizontale Eckenradius des Rechtecks. Standardmäßig `ry`, falls angegeben.
    _Wertetyp_: `auto`|[**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage) ; _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("ry")}}
  - : Der vertikale Eckenradius des Rechtecks. Standardmäßig `rx`, falls angegeben.
    _Wertetyp_: `auto`|[**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage) ; _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("pathLength")}}
  - : Die Gesamtlänge des Rechteckumfangs, in Benutzereinheiten.
    _Wertetyp_: [**\<number>**](/de/docs/Web/SVG/Content_type#number) ; _Standardwert_: _none_; _Animierbar_: **ja**

> [!NOTE]
> Ab SVG2 sind `x`, `y`, `width`, `height`, `rx` und `ry` _Geometrie-Eigenschaften_, was bedeutet, dass diese Attribute auch als CSS-Eigenschaften für dieses Element verwendet werden können.

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG-Präsentationsattribute](/de/docs/Web/SVG/Attribute#presentation_attributes) einschließlich {{SVGAttr("fill")}} und {{SVGAttr("stroke")}}
- Andere grundlegende SVG-Formen: {{SVGElement('circle')}}, {{SVGElement('ellipse')}}, {{SVGElement('line')}}, **{{SVGElement('polygon')}},** {{SVGElement('polyline')}}
