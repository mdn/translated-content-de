---
title: <polygon>
slug: Web/SVG/Element/polygon
l10n:
  sourceCommit: 2f43f506240fa6c866cc3bc2d018364ae49421d9
---

{{SVGRef}}

Das **`<polygon>`**-Element definiert eine geschlossene Form, die aus einer Reihe von verbundenen geraden Liniensegmenten besteht. Der letzte Punkt ist mit dem ersten Punkt verbunden.

Für offene Formen siehe das {{SVGElement("polyline")}}-Element.

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

## Attribute

- {{SVGAttr('points')}}
  - : Dieses Attribut definiert die Liste der Punkte (Paare von `x,y` absoluten Koordinaten), die erforderlich sind, um das Polygon zu zeichnen.
    _Werttyp_: [**\<number>**](/de/docs/Web/SVG/Content_type#number)+ ; _Standardwert_: `""`; _Animierbar_: **ja**
- {{SVGAttr("pathLength")}}
  - : Dieses Attribut erlaubt es, die Gesamtlänge des Pfades in Benutzereinheiten anzugeben.
    _Werttyp_: [**\<number>**](/de/docs/Web/SVG/Content_type#number) ; _Standardwert_: _none_; _Animierbar_: **ja**

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG Präsentations-Attribute](/de/docs/Web/SVG/Attribute#presentation_attributes) einschließlich {{SVGAttr("fill")}} und {{SVGAttr("stroke")}}

- **Weitere grundlegende SVG-Formen:**

  - {{ SVGElement('circle') }}
  - {{ SVGElement('ellipse') }}
  - {{ SVGElement('line') }}
  - {{ SVGElement('polyline') }}
  - {{ SVGElement('rect') }}
