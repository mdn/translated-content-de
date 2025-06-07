---
title: <polygon>
slug: Web/SVG/Reference/Element/polygon
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

Das **`<polygon>`** [SVG](/de/docs/Web/SVG)-Element definiert eine geschlossene Form, die aus einer Reihe verbundener gerader Liniensegmente besteht. Der letzte Punkt ist mit dem ersten Punkt verbunden.

Für offene Formen siehe das {{SVGElement("polyline")}}-Element.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr('points')}}
  - : Dieses Attribut definiert die Liste der Punkte (Paare von `x,y`-Koordinaten) zum Zeichnen des Polygons.
    _Wertetyp_: [**\<number>**](/de/docs/Web/SVG/Guides/Content_type#number)+; _Standardwert_: `""`; _Animierbar_: **ja**
- {{SVGAttr("pathLength")}}
  - : Dieses Attribut ermöglicht es, die Gesamtlänge des Pfades in Benutzereinheiten anzugeben.
    _Wertetyp_: [**\<number>**](/de/docs/Web/SVG/Guides/Content_type#number); _Standardwert_: _keiner_; _Animierbar_: **ja**

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

- **Andere grundlegende SVG-Formen:**

  - {{ SVGElement('circle') }}
  - {{ SVGElement('ellipse') }}
  - {{ SVGElement('line') }}
  - {{ SVGElement('polyline') }}
  - {{ SVGElement('rect') }}
