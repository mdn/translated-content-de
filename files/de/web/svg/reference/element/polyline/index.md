---
title: <polyline>
slug: Web/SVG/Reference/Element/polyline
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`<polyline>`** [SVG](/de/docs/Web/SVG)-Element ist eine grundlegende SVG-Form, die gerade Linien verbindet und mehrere Punkte miteinander verknüpft. Typischerweise wird ein `polyline` verwendet, um offene Formen zu erstellen, da der letzte Punkt nicht mit dem ersten Punkt verbunden werden muss. Für geschlossene Formen siehe das {{SVGElement("polygon")}}-Element.

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
  <!-- Example of a polyline with the default fill -->
  <polyline points="0,100 50,25 50,75 100,0" />

  <!-- Example of the same polyline shape with stroke and no fill -->
  <polyline points="100,100 150,25 150,75 200,0" fill="none" stroke="black" />
</svg>
```

{{EmbedLiveSample('Example', 100, 100)}}

## Attribute

- {{SVGAttr('points')}}
  - : Dieses Attribut definiert die Liste der Punkte (Paare von x,y absoluten Koordinaten), die erforderlich sind, um das Polyline zu zeichnen.
    _Wertetyp_: [**\<number>**](/de/docs/Web/SVG/Guides/Content_type#number)+ ; _Standardwert_: `""`; _Animierbar_: **ja**
- {{SVGAttr("pathLength")}}
  - : Dieses Attribut ermöglicht es, die Gesamtlänge des Pfades in Benutzereinheiten zu bestimmen.
    _Wertetyp_: [**\<number>**](/de/docs/Web/SVG/Guides/Content_type#number) ; _Standardwert_: _none_; _Animierbar_: **ja**

## Verwendungszweck

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG-Präsentationsattribute](/de/docs/Web/SVG/Reference/Attribute#presentation_attributes), einschließlich {{SVGAttr("fill")}} und {{SVGAttr("stroke")}}
- Weitere grundlegende SVG-Formen: {{ SVGElement('circle') }}, {{ SVGElement('ellipse') }}, **{{ SVGElement('line') }}**, **{{ SVGElement('polygon') }}**, {{ SVGElement('rect') }}
