---
title: marker
slug: Web/CSS/marker
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`marker`** [CSS](/de/docs/Web/CSS) Eigenschaft weist auf einen Marker hin, der an den ersten, mittleren und letzten Scheitelpunkten des Pfads des Elements gezeichnet wird; das heißt, an all seinen Eckpunkten. Der Marker muss mittels eines SVG-{{SVGElement('marker')}}-Elements definiert worden sein und kann nur mit einem {{cssxref("url_value", "&lt;url&gt;")}}-Wert referenziert werden. Der Wert der CSS-Eigenschaft überschreibt alle Werte der `marker-start`, `marker` und `marker-end` Attribute im SVG.

Bei vielen marker-unterstützenden Formen befinden sich der erste und der letzte Scheitelpunkt an derselben Stelle: zum Beispiel die obere linke Ecke eines {{SVGElement('rect')}}. Bei solchen Formen, wenn sowohl der erste als auch der letzte Marker definiert sind, werden an diesem Punkt zwei Marker gezeichnet, obwohl sie möglicherweise nicht in die gleiche Richtung zeigen.

Für die mittleren Scheitelpunkte wird die Richtung, in die jeder Marker zeigt, als die Richtung definiert, die mittig zwischen der Richtung am Ende des vorhergehenden Pfadsegments und der Richtung des Anfangs des folgenden Pfadsegments liegt. Dies kann als das Kreuzprodukt der durch die beiden Pfadrichtungen definierten Vektoren betrachtet werden.

> [!NOTE]
> Die `marker`-Eigenschaft wird nur bei Elementen Wirkung zeigen, die SVG-Marker verwenden können. Siehe {{SVGAttr("marker-start")}} für eine Liste.

## Syntax

```css
marker: none;
marker: url(markers.svg#arrow);

/* Global values */
marker: inherit;
marker: initial;
marker: revert;
marker: revert-layer;
marker: unset;
```

### Werte

- `none`

  - : Dies bedeutet, dass kein Marker an jedem Scheitelpunkt des Pfads des Elements gezeichnet wird.

- `<marker-ref>`
  - : Ein {{cssxref("url_value", "&lt;url&gt;")}}, der auf einen durch ein SVG-{{SVGElement('marker')}}-Element definierten Marker verweist, der an jedem Scheitelpunkt des Pfads des Elements gezeichnet wird. Wenn die URL-Referenz ungültig ist, wird kein Marker an den Scheitelpunkten des Pfads gezeichnet.

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
  marker: url(#triangle);
}
```

{{EmbedLiveSample("Example", "200", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("marker-start")}}
- {{cssxref("marker-end")}}
- SVG-{{SVGAttr("marker")}}-Attribut
