---
title: marker
slug: Web/CSS/marker
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

{{CSSRef}}

Die **`marker`** [CSS](/de/docs/Web/CSS) Eigenschaft verweist auf einen Marker, der an den ersten, mittleren und letzten Scheitelpunkten des Pfads eines Elements gezeichnet wird; also an all seinen Scheitelpunkten. Der Marker muss mit einem SVG {{SVGElement('marker')}}-Element definiert worden sein und kann nur mit einem {{cssxref("url_value", "&lt;url&gt;")}} Wert referenziert werden. Der Wert der CSS-Eigenschaft überschreibt alle Werte der `marker-start`, `marker`, und `marker-end` Attribute im SVG.

Für viele Formen, die Marker unterstützen, befinden sich die ersten und letzten Scheitelpunkte an derselben Stelle: beispielsweise die obere linke Ecke eines {{SVGElement('rect')}}. In solchen Formen, wenn sowohl der erste als auch der letzte Marker definiert sind, werden an diesem Punkt zwei Marker gezeichnet, obwohl sie möglicherweise nicht in dieselbe Richtung zeigen.

Für die mittleren Scheitelpunkte ist die Richtung, in die jeder Marker zeigt, als die Richtung definiert, die genau zwischen der Richtung am Ende des vorhergehenden Pfadsegments und der Richtung des Beginns des folgenden Pfadsegments liegt. Dies kann als das Kreuzprodukt der Vektoren gedacht werden, die durch die beiden Pfadrichtungen definiert sind.

> [!NOTE]
> Die `marker` Eigenschaft wird nur für Elemente eine Wirkung haben, die SVG-Marker verwenden können. Siehe {{SVGAttr("marker-start")}} für eine Liste.

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
  - : Dies bedeutet, dass an jedem Scheitelpunkt des Pfades des Elements kein Marker gezeichnet wird.

- `<marker-ref>`
  - : Ein {{cssxref("url_value", "&lt;url&gt;")}} der auf einen Marker verweist, der durch ein SVG {{SVGElement('marker')}}-Element definiert ist und an jedem Scheitelpunkt des Pfades des Elements gezeichnet wird. Wenn die URL-Referenz ungültig ist, wird kein Marker an den Scheitelpunkten des Pfades gezeichnet.

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
- SVG {{SVGElement("marker")}}-Element
