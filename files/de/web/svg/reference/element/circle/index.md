---
title: <circle>
slug: Web/SVG/Reference/Element/circle
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`<circle>`** [SVG](/de/docs/Web/SVG)-Element ist eine [SVG-Grundform](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_Shapes), die verwendet wird, um Kreise basierend auf einem Mittelpunkt und einem Radius zu zeichnen.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="50" />
</svg>
```

{{EmbedLiveSample('Example', 100, 100)}}

## Attribute

- {{SVGAttr("cx")}}
  - : Die x-Achsen-Koordinate des Mittelpunkts des Kreises.
    _Werttyp_: **[\<length>](/de/docs/Web/SVG/Guides/Content_type#length)**|**[\<percentage>](/de/docs/Web/SVG/Guides/Content_type#percentage)** ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("cy")}}
  - : Die y-Achsen-Koordinate des Mittelpunkts des Kreises.
    _Werttyp_: **[\<length>](/de/docs/Web/SVG/Guides/Content_type#length)**|**[\<percentage>](/de/docs/Web/SVG/Guides/Content_type#percentage)** ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("r")}}
  - : Der Radius des Kreises. Ein Wert kleiner oder gleich null deaktiviert die Darstellung des Kreises.
    _Werttyp_: **[\<length>](/de/docs/Web/SVG/Guides/Content_type#length)**|**[\<percentage>](/de/docs/Web/SVG/Guides/Content_type#percentage)** ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("pathLength")}}
  - : Die gesamte Länge des Umfangs des Kreises in Benutzereinheiten.
    _Werttyp_: [**\<number>**](/de/docs/Web/SVG/Guides/Content_type#number) ; _Standardwert_: _keiner_; _Animierbar_: **ja**

> [!NOTE]
> Ab SVG2 sind `cx`, `cy` und `r` _Geometrie-Eigenschaften_, was bedeutet, dass diese Attribute auch als CSS-Eigenschaften für dieses Element verwendet werden können.

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere SVG-Grundformen: **{{ SVGElement('ellipse') }}**, {{ SVGElement('line') }}, {{ SVGElement('polygon') }}, {{ SVGElement('polyline') }}, {{ SVGElement('rect') }}
