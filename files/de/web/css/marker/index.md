---
title: Marker
slug: Web/CSS/marker
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Die **`marker`** [CSS](/de/docs/Web/CSS) Eigenschaft verweist auf einen Marker, der an den ersten, mittleren und letzten Scheitelpunkten des Pfades des Elements gezeichnet wird; das heißt, an allen seinen Scheitelpunkten. Der Marker muss mit einem SVG {{SVGElement('marker')}} Element definiert worden sein und kann nur mit einem {{cssxref('url()')}} Wert referenziert werden. Der Wert der CSS-Eigenschaft überschreibt alle Werte der `marker-start`, `marker` und `marker-end` Attribute im SVG.

Bei vielen Marker-unterstützenden Formen befinden sich die ersten und letzten Scheitelpunkte an der gleichen Stelle: zum Beispiel die obere linke Ecke eines {{SVGElement('rect')}}. In solchen Formen, wenn sowohl die ersten als auch die letzten Marker definiert sind, werden zwei Marker an diesem Punkt gezeichnet, obwohl sie möglicherweise nicht in die gleiche Richtung zeigen.

Für die mittleren Scheitelpunkte ist die Richtung, in die jeder Marker zeigt, als die Richtung definiert, die in der Mitte zwischen der Richtung am Ende des vorhergehenden Pfadsegments und der Richtung am Anfang des folgenden Pfadsegments liegt. Dies kann als das Kreuzprodukt der durch die beiden Pfadrichtungen definierten Vektoren betrachtet werden.

> [!NOTE]
> Die `marker` Eigenschaft hat nur eine Wirkung für Elemente, die SVG-Marker verwenden können. Siehe {{SVGAttr("marker-start")}} für eine Liste.

## Syntax

```css
marker: none;
marker: url(markers.svg#arrow);

/* Globale Werte */
marker: inherit;
marker: initial;
marker: revert;
marker: revert-layer;
marker: unset;
```

### Werte

- `none`

  - : Dies bedeutet, dass kein Marker an jedem Scheitelpunkt des Elementpfades gezeichnet wird.

- `<marker-ref>`

  - : Ein {{cssxref("url_value", "&lt;url&gt;")}}, der auf einen durch ein SVG {{SVGElement('marker')}} Element definierten Marker verweist, der an jedem Scheitelpunkt des Elementpfades gezeichnet werden soll. Wenn die URL-Referenz ungültig ist, wird kein Marker an den Scheitelpunkten des Pfades gezeichnet.

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
- SVG {{SVGAttr("marker")}} Attribut
