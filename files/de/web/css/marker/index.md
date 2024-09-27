---
title: marker
slug: Web/CSS/marker
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{CSSRef}}

Die **`marker`** [CSS](/de/docs/Web/CSS)-Eigenschaft verweist auf einen Marker, der an den ersten, mittleren und letzten Scheitelpunkten des Pfads eines Elements gezeichnet wird; das heißt, an all seinen Scheitelpunkten. Der Marker muss mithilfe eines SVG-{{SVGElement('marker')}}-Elements definiert worden sein und kann nur mit einem {{cssxref('url()')}}-Wert referenziert werden. Der Wert der CSS-Eigenschaft überschreibt alle Werte der Attribute `marker-start`, `marker` und `marker-end` im SVG.

Bei vielen markerunterstützenden Formen befinden sich die ersten und letzten Scheitelpunkte an derselben Stelle: beispielsweise die obere linke Ecke eines {{SVGElement('rect')}}. Bei solchen Formen werden, wenn sowohl der erste als auch der letzte Marker definiert sind, zwei Marker an diesem Punkt gezeichnet, auch wenn sie möglicherweise nicht in dieselbe Richtung zeigen.

Für die mittleren Scheitelpunkte wird die Richtung, in die jeder Marker zeigt, als die Richtung definiert, die sich halbwegs zwischen der Richtung am Ende des vorhergehenden Pfadsegments und der Richtung am Anfang des folgenden Pfadsegments befindet. Dies kann als Kreuzprodukt der von den beiden Pfadrichtungen definierten Vektoren betrachtet werden.

> [!NOTE]
> Die `marker`-Eigenschaft hat nur Auswirkungen auf Elemente, die SVG-Marker verwenden können. Siehe {{SVGAttr("marker-start")}} für eine Liste.

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

  - : Dies bedeutet, dass an jedem Scheitelpunkt des Pfads des Elements kein Marker gezeichnet wird.

- `<marker-ref>`

  - : Ein {{cssxref("url_value", "&lt;url&gt;")}}, der auf einen Marker verweist, der durch ein SVG-{{SVGElement('marker')}}-Element definiert ist, um an jedem Scheitelpunkt des Pfads des Elements gezeichnet zu werden. Wenn die URL-Referenz ungültig ist, wird kein Marker an den Scheitelpunkten des Pfads gezeichnet.

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
- SVG {{SVGAttr("marker")}}-Attribut
