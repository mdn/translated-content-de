---
title: <marker>
slug: Web/SVG/Reference/Element/marker
l10n:
  sourceCommit: 34c204f8f6c3f7ac60ebb23fca9798680aee9956
---

Das **`<marker>`** [SVG](/de/docs/Web/SVG)-Element definiert eine Grafik, die zum Zeichnen von Pfeilspitzen oder Polymarkern auf einem angegebenen {{SVGElement("path")}}, {{SVGElement("line")}}, {{SVGElement("polyline")}} oder {{SVGElement("polygon")}}-Element verwendet wird.

Marker können an Formen mithilfe der Eigenschaften {{SVGAttr("marker-start")}}, {{SVGAttr("marker-mid")}} und {{SVGAttr("marker-end")}} angebracht werden.

## Beispiele

### Zeichnen von Pfeilspitzen

Das folgende Beispiel zeigt, wie man eine Pfeilspitze auf einer Linie und auf einem gekrümmten Pfad zeichnet. Für den gekrümmten Pfad wird an jedem Punkt ein Pfeilspitze mit einem {{SVGAttr("marker-mid")}} Marker gezeichnet.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- A marker to be used as an arrowhead -->
    <marker
      id="arrow"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>

  <!-- A line with a marker -->
  <line
    x1="10"
    y1="10"
    x2="90"
    y2="90"
    stroke="black"
    marker-end="url(#arrow)" />

  <!-- A curved path with markers -->
  <path
    d="M 110 10
       C 120 20, 130 20, 140 10
       C 150 0, 160 0, 170 10
       C 180 20, 190 20, 200 10"
    stroke="black"
    fill="none"
    marker-start="url(#arrow)"
    marker-mid="url(#arrow)"
    marker-end="url(#arrow)" />
</svg>
```

{{EmbedLiveSample('Drawing_arrowheads', 200, 200)}}

### Zeichnen von Polymarkern

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Arrowhead marker definition -->
    <marker
      id="arrow"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>

    <!-- Dot marker definition -->
    <marker
      id="dot"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      markerWidth="5"
      markerHeight="5">
      <circle cx="5" cy="5" r="5" fill="red" />
    </marker>
  </defs>

  <!-- Coordinate axes with an arrowhead in both directions -->
  <polyline
    points="10,10 10,90 90,90"
    fill="none"
    stroke="black"
    marker-start="url(#arrow)"
    marker-end="url(#arrow)" />

  <!-- Data line with polymarkers -->
  <polyline
    points="15,80 29,50 43,60 57,30 71,40 85,15"
    fill="none"
    stroke="grey"
    marker-start="url(#dot)"
    marker-mid="url(#dot)"
    marker-end="url(#dot)" />
</svg>
```

{{EmbedLiveSample('Drawing_polymarkers', 200, 200)}}

### Verwendung von Kontextfüllung und -kontur

Das folgende Beispiel zeigt, wie Sie die Werte `context-fill` und `context-stroke` verwenden können, um einem Marker dieselbe Füllung und Kontur wie der Form zu geben, an die er angehängt ist.

```html
<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
  <marker
    id="circle"
    markerWidth="6"
    markerHeight="6"
    refX="3"
    refY="3"
    markerUnits="strokeWidth">
    <circle cx="3" cy="3" r="2" stroke="context-stroke" fill="context-fill" />
  </marker>

  <style>
    path {
      marker: url(#circle);
    }
  </style>

  <path d="M 10,10 30,10 h 10" stroke="black" />
  <path d="M 10,20 30,20 h 10" stroke="blue" fill="red" />
  <path d="M 10,30 30,30 h 10" stroke="red" fill="none" />
  <path d="M 10,40 30,40 h 10" stroke="gray" fill="blue" stroke-width="1.5" />
</svg>
```

```css hidden
html,
body,
svg {
  height: 100%;
}
```

{{EmbedLiveSample('Using_context_fill_and_stroke', 200, 200)}}

## Attribute

- {{SVGAttr("markerHeight")}}
  - : Dieses Attribut definiert die Höhe des Markierungsansichtsfensters.
    _Werttyp_: **[\<length>](/de/docs/Web/SVG/Guides/Content_type#length)**; _Standardwert_: `3`; _Animierbar_: **ja**
- {{SVGAttr("markerUnits")}}
  - : Dieses Attribut definiert das Koordinatensystem für die Attribute `markerWidth`, `markerHeight` und den Inhalt des `<marker>`.
    _Werttyp_: `userSpaceOnUse` | `strokeWidth`; _Standardwert_: `strokeWidth`; _Animierbar_: **ja**
- {{SVGAttr("markerWidth")}}
  - : Dieses Attribut definiert die Breite des Markierungsansichtsfensters.
    _Werttyp_: **[\<length>](/de/docs/Web/SVG/Guides/Content_type#length)**; _Standardwert_: `3`; _Animierbar_: **ja**
- {{SVGAttr("orient")}}
  - : Dieses Attribut definiert die Ausrichtung des Markers relativ zu der Form, an die er angehängt ist.
    _Werttyp_: `auto` | `auto-start-reverse` | **[\<angle>](/de/docs/Web/SVG/Guides/Content_type#angle)**; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("preserveAspectRatio")}}
  - : Dieses Attribut definiert, wie das SVG-Fragment verformt werden muss, wenn es in einem Container mit einem anderen {{Glossary("aspect_ratio", "Seitenverhältnis")}} eingebettet wird.
    _Werttyp_: (`none` | `xMinYMin` | `xMidYMin` | `xMaxYMin` | `xMinYMid` | `xMidYMid` | `xMaxYMid` | `xMinYMax` | `xMidYMax` | `xMaxYMax`) (`meet` | `slice`)?; _Standardwert_: `xMidYMid meet`; _Animierbar_: **ja**
- {{SVGAttr("refX")}}
  - : Dieses Attribut definiert die x-Koordinate für den Referenzpunkt des Markers.
    _Werttyp_: `left` | `center` | `right` | **[\<coordinate>](/de/docs/Web/SVG/Guides/Content_type#coordinate)**; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("refY")}}
  - : Dieses Attribut definiert die y-Koordinate für den Referenzpunkt des Markers.
    _Werttyp_: `top` | `center` | `bottom` | **[\<coordinate>](/de/docs/Web/SVG/Guides/Content_type#coordinate)**; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("viewBox")}}
  - : Dieses Attribut definiert die Begrenzung des SVG-Ansichtsfensters für das aktuelle SVG-Fragment.
    _Werttyp_: **[\<list-of-numbers>](/de/docs/Web/SVG/Guides/Content_type#list-of-ts)**; _Standardwert_: keine; _Animierbar_: **ja**

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Markereigenschaften: {{SVGAttr("marker-start")}}, {{SVGAttr("marker-mid")}}, und {{SVGAttr("marker-end")}}
