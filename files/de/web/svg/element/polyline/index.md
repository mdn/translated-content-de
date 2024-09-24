---
title: <polyline>
slug: Web/SVG/Element/polyline
l10n:
  sourceCommit: 2f43f506240fa6c866cc3bc2d018364ae49421d9
---

{{SVGRef}}

Das **`<polyline>`** [SVG](/de/docs/Web/SVG)-Element ist eine SVG-Grundform, die gerade Linien verbindet, die mehrere Punkte miteinander verbinden. Typischerweise wird ein `polyline` verwendet, um offene Formen zu erstellen, da der letzte Punkt nicht mit dem ersten Punkt verbunden sein muss. Für geschlossene Formen siehe das {{SVGElement("polygon")}} Element.

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
  <!-- Beispiel einer Polyline mit der Standardfüllung -->
  <polyline points="0,100 50,25 50,75 100,0" />

  <!-- Beispiel der gleichen Polygonlinie mit Linienzug und ohne Füllung -->
  <polyline points="100,100 150,25 150,75 200,0" fill="none" stroke="black" />
</svg>
```

{{EmbedLiveSample('Example', 100, 100)}}

## Attribute

- {{SVGAttr('points')}}
  - : Dieses Attribut definiert die Liste von Punkten (Paare von x,y-Koordinaten), die erforderlich sind, um die Polyline zu zeichnen.
    _Werttyp_: [**\<number>**](/de/docs/Web/SVG/Content_type#number)+ ; _Standardwert_: `""`; _Animierbar_: **ja**
- {{SVGAttr("pathLength")}}
  - : Dieses Attribut ermöglicht es, die Gesamtlänge des Pfades in Benutzereinheiten anzugeben.
    _Werttyp_: [**\<number>**](/de/docs/Web/SVG/Content_type#number) ; _Standardwert_: _keiner_; _Animierbar_: **ja**

## Nutzungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [SVG-Präsentationsattribute](/de/docs/Web/SVG/Attribute#presentation_attributes), einschließlich {{SVGAttr("fill")}} und {{SVGAttr("stroke")}}
- Andere SVG-Grundformen: {{ SVGElement('circle') }}, {{ SVGElement('ellipse') }}, **{{ SVGElement('line') }}**, **{{ SVGElement('polygon') }}**, {{ SVGElement('rect') }}
