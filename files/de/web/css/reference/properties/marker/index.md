---
title: marker
slug: Web/CSS/Reference/Properties/marker
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`marker`** [CSS](/de/docs/Web/CSS) Eigenschaft verweist auf einen Marker, der an den ersten, mittleren und letzten Eckpunkten des Pfads des Elements gezeichnet wird; das heißt, an allen Eckpunkten. Der Marker muss mit einem SVG-{{SVGElement('marker')}}-Element definiert worden sein und kann nur mit einem {{cssxref("url_value", "&lt;url&gt;")}}-Wert referenziert werden. Der Wert der CSS-Eigenschaft überschreibt alle Werte der `marker-start`, `marker` und `marker-end` Attribute im SVG.

Bei vielen Formen, die Marker unterstützen, befinden sich die ersten und letzten Eckpunkte an derselben Stelle: zum Beispiel die obere linke Ecke eines {{SVGElement('rect')}}. Bei solchen Formen, wenn sowohl die ersten als auch die letzten Marker definiert sind, werden zwei Marker an diesem Punkt gezeichnet, auch wenn sie möglicherweise nicht in die gleiche Richtung zeigen.

Für die mittleren Eckpunkte ist die Richtung, in die jeder Marker zeigt, definiert als die Richtung zur Hälfte zwischen der Richtung am Ende des vorhergehenden Pfadsegments und der Richtung am Anfang des folgenden Pfadsegments. Dies kann als das Kreuzprodukt der Vektoren betrachtet werden, die durch die beiden Pfadrichtungen definiert sind.

> [!NOTE]
> Die `marker` Eigenschaft hat nur eine Wirkung auf Elemente, die SVG-Marker verwenden können. Siehe {{SVGAttr("marker-start")}} für eine Liste.

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
  - : Dies bedeutet, dass an jedem Eckpunkt des Pfads des Elements kein Marker gezeichnet wird.

- `<marker-ref>`
  - : Ein {{cssxref("url_value", "&lt;url&gt;")}}, das auf einen Marker verweist, der durch ein SVG-{{SVGElement('marker')}}-Element definiert wird und an jedem Eckpunkt des Pfads des Elements gezeichnet wird. Wenn die URL-Referenz ungültig ist, wird an den Eckpunkten des Pfads kein Marker gezeichnet.

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
      <path d="M 0 0 L 10 5 L 0 10 z" fill="red" />
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

{{EmbedLiveSample("Example", "200", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("marker-start")}}
- {{cssxref("marker-end")}}
- SVG-{{SVGElement("marker")}}-Element
