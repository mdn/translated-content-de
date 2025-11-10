---
title: <polygon>
slug: Web/SVG/Reference/Element/polygon
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das **`<polygon>`** [SVG](/de/docs/Web/SVG)-Element definiert eine geschlossene Form, die aus einer Reihe von verbundenen geraden Liniensegmenten besteht. Der letzte Punkt ist mit dem ersten Punkt verbunden.

Für offene Formen siehe das {{SVGElement("polyline")}}-Element.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr('points')}}
  - : Dieses Attribut definiert die Liste der Punkte (Paare von `x,y` absoluten Koordinaten), die erforderlich sind, um das Polygon zu zeichnen.
    _Wertetyp_: [**\<number>**](/de/docs/Web/SVG/Guides/Content_type#number)+; _Standardwert_: `""`; _Animierbar_: **ja**
- {{SVGAttr("pathLength")}}
  - : Dieses Attribut ermöglicht es, die Gesamtlänge für den Pfad in Benutzereinheiten anzugeben.
    _Wertetyp_: [**\<number>**](/de/docs/Web/SVG/Guides/Content_type#number); _Standardwert_: _none_; _Animierbar_: **ja**

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGPolygonElement`](/de/docs/Web/API/SVGPolygonElement)-Schnittstelle.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Example of a polygon with the default fill -->
  <polygon points="0,100 50,25 50,75 100,0" />

  <!-- Example of the same polygon shape with stroke and no fill -->
  <polygon points="100,100 150,25 150,75 200,0" fill="none" stroke="black" />
</svg>
```

{{EmbedLiveSample('Example', 100, 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG-Präsentationsattribute](/de/docs/Web/SVG/Reference/Attribute#presentation_attributes) einschließlich {{SVGAttr("fill")}} und {{SVGAttr("stroke")}}

- **Andere SVG-Basisformen:**
  - {{ SVGElement('circle') }}
  - {{ SVGElement('ellipse') }}
  - {{ SVGElement('line') }}
  - {{ SVGElement('polyline') }}
  - {{ SVGElement('rect') }}
