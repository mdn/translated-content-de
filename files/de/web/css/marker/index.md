---
title: marker
slug: Web/CSS/marker
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Die **`marker`** [CSS](/de/docs/Web/CSS) Eigenschaft zeigt auf einen Marker, der auf den ersten, mittleren und letzten Vertices des Pfads des Elements gezeichnet wird; das heißt, an allen seinen Vertices. Der Marker muss mit einem SVG {{SVGElement('marker')}} Element definiert worden sein und kann nur mit einem {{cssxref("url_value", "&lt;url&gt;")}} Wert referenziert werden. Der Wert der CSS-Eigenschaft überschreibt alle Werte der Attribute `marker-start`, `marker` und `marker-end` im SVG.

Bei vielen Formen, die Marker unterstützen, befinden sich der erste und letzte Vertex an derselben Stelle: zum Beispiel die obere linke Ecke eines {{SVGElement('rect')}}. In solchen Formen werden, wenn sowohl der erste als auch der letzte Marker definiert sind, zwei Marker an dieser Stelle gezeichnet, obwohl sie möglicherweise nicht in dieselbe Richtung zeigen.

Für die mittleren Vertices wird die Richtung, in die jeder Marker zeigt, als die Richtung definiert, die genau zwischen der Richtung am Ende des vorhergehenden Pfadsegments und der Richtung des Anfangs des folgenden Pfadsegments liegt. Dies kann als das Kreuzprodukt der Vektoren betrachtet werden, die durch die beiden Pfadrichtungen definiert sind.

> [!NOTE]
> Die `marker` Eigenschaft hat nur Auswirkungen auf Elemente, die SVG-Marker verwenden können. Siehe {{SVGAttr("marker-start")}} für eine Liste.

## Syntax

```css
marker: none;
marker: url("markers.svg#arrow");

/* Global values */
marker: inherit;
marker: initial;
marker: revert;
marker: revert-layer;
marker: unset;
```

### Werte

- `none`
  - : Dies bedeutet, dass kein Marker an jedem Vertex des Pfads des Elements gezeichnet wird.

- `<marker-ref>`
  - : Ein {{cssxref("url_value", "&lt;url&gt;")}}, der sich auf einen Marker bezieht, der durch ein SVG {{SVGElement('marker')}} Element definiert ist und an jedem Vertex des Pfads des Elements gezeichnet werden soll. Wenn der URL-Verweis ungültig ist, wird kein Marker an den Vertices des Pfads gezeichnet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker
      id="triangle"
      viewBox="0 0 10 10"
      markerWidth="10"
      markerHeight="10"
      refX="1"
      refY="5"
      markerUnits="strokeWidth"
      orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#f00" />
    </marker>
  </defs>
  <polyline
    id="test"
    fill="none"
    stroke="black"
    points="20,100 40,60 70,80 100,20 130,10 150,10 170,20 170,100 120,100" />
</svg>
```

```css
polyline#test {
  marker: url("#triangle");
}
```

{{EmbedLiveSample("Beispiel", "200", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("marker-start")}}
- {{cssxref("marker-end")}}
- SVG {{SVGElement("marker")}} Element
