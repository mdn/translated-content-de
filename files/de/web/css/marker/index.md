---
title: marker
slug: Web/CSS/marker
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{CSSRef}}

Die **`marker`**-Eigenschaft [CSS](/de/docs/Web/CSS) verweist auf einen Marker, der auf den ersten, mittleren und letzten Ecken des Pfades des Elements gezeichnet wird; also an all seinen Ecken. Der Marker muss mit einem SVG-{{SVGElement('marker')}}-Element definiert worden sein und kann nur mit einem {{cssxref('url()')}}-Wert referenziert werden. Der Wert der CSS-Eigenschaft überschreibt alle Werte der `marker-start`, `marker` und `marker-end` Attribute im SVG.

Für viele Marker-unterstützende Formen sind die ersten und letzten Ecken an derselben Stelle: zum Beispiel die obere linke Ecke eines {{SVGElement('rect')}}. In solchen Formen, wenn sowohl der erste als auch der letzte Marker definiert sind, werden an diesem Punkt zwei Marker gezeichnet, obwohl sie möglicherweise nicht in dieselbe Richtung zeigen.

Für die mittleren Ecken wird die Richtung, in die jeder Marker zeigt, als die Richtung definiert, die auf halbem Weg zwischen der Richtung am Ende des vorhergehenden Pfadsegments und der Richtung des Anfangs des nachfolgenden Pfadsegments liegt. Dies kann als das Kreuzprodukt der Vektoren gedacht werden, die durch die beiden Pfadrichtungen definiert sind.

> [!NOTE]
> Die `marker`-Eigenschaft hat nur eine Wirkung für Elemente, die SVG-Marker verwenden können. Siehe {{SVGAttr("marker-start")}} für eine Liste.

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

  - : Das bedeutet, dass kein Marker an jedem Scheitelpunkt des Pfades des Elements gezeichnet wird.

- `<marker-ref>`

  - : Ein {{cssxref("url_value", "&lt;url&gt;")}}, der auf einen Marker verweist, der durch ein SVG-{{SVGElement('marker')}}-Element definiert wird und an jedem Scheitelpunkt des Pfades des Elements gezeichnet werden soll. Wenn der URL-Verweis ungültig ist, wird kein Marker an den Scheitelpunkten des Pfades gezeichnet.

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
