---
title: <rect>
slug: Web/SVG/Reference/Element/rect
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

Das **`<rect>`** [SVG](/de/docs/Web/SVG)-Element ist eine [grundlegende SVG-Form](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes), die Rechtecke zeichnet, definiert durch ihre Position, Breite und Höhe. Die Ecken der Rechtecke können abgerundet sein.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("x")}}
  - : Die x-Koordinate des Rechtecks.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Die y-Koordinate des Rechtecks.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("width")}}
  - : Die Breite des Rechtecks.
    _Wertetyp_: `auto` | [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage); _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("height")}}
  - : Die Höhe des Rechtecks.
    _Wertetyp_: `auto` | [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage); _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("rx")}}
  - : Der horizontale Eckradius des Rechtecks. Standardmäßig `ry`, falls angegeben.
    _Wertetyp_: `auto` | [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage); _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("ry")}}
  - : Der vertikale Eckradius des Rechtecks. Standardmäßig `rx`, falls angegeben.
    _Wertetyp_: `auto` | [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage); _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("pathLength")}}
  - : Die Gesamtlänge des Rechteckumfangs in Benutzereinheiten.
    _Wertetyp_: [**\<number>**](/de/docs/Web/SVG/Guides/Content_type#number); _Standardwert_: _none_; _Animierbar_: **ja**

> [!NOTE]
> Ab SVG2 sind `x`, `y`, `width`, `height`, `rx` und `ry` _Geometrie-Eigenschaften_, was bedeutet, dass diese Attribute auch als CSS-Eigenschaften für dieses Element verwendet werden können.

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGRectElement`](/de/docs/Web/API/SVGRectElement)-Schnittstelle.

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
  <!-- Regular rectangle -->
  <rect width="100" height="100" />

  <!-- Rounded corner rectangle -->
  <rect x="120" width="100" height="100" rx="15" />
</svg>
```

{{EmbedLiveSample('Example', 100, '100%')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG-Präsentationsattribute](/de/docs/Web/SVG/Reference/Attribute#presentation_attributes) einschließlich {{SVGAttr("fill")}} und {{SVGAttr("stroke")}}
- Andere grundlegende SVG-Figuren: {{SVGElement('circle')}}, {{ SVGElement('ellipse') }}, {{ SVGElement('line') }}, **{{ SVGElement('polygon') }}**, {{ SVGElement('polyline') }}
