---
title: marker-start
slug: Web/CSS/marker-start
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`marker-start`** [CSS](/de/docs/Web/CSS) Eigenschaft verweist auf einen Marker, der am ersten Scheitelpunkt des Pfades des Elements gezeichnet wird; das heißt, an seinem Startpunkt. Der Marker muss mit einem SVG {{SVGElement('marker')}} Element definiert worden sein und kann nur mit einem {{cssxref("url_value", "&lt;url&gt;")}} Wert referenziert werden. Der Wert der CSS-Eigenschaft überschreibt alle Werte des `marker-start` Attributs im SVG.

Bei vielen markierungsunterstützenden Formen befinden sich der erste und letzte Scheitelpunkt an derselben Stelle: zum Beispiel die obere linke Ecke eines {{SVGElement('rect')}}. In solchen Formen werden, wenn sowohl der erste als auch der letzte Marker definiert sind, zwei Marker an diesem Punkt gezeichnet, obwohl sie möglicherweise nicht in die gleiche Richtung zeigen.

> [!NOTE]
> Die `marker-start` Eigenschaft wird nur für Elemente wirksam, die SVG-Markierungen nutzen können. Siehe {{SVGAttr("marker-start")}} für eine Liste.

## Syntax

```css
marker-start: none;
marker-start: url(markers.svg#arrow);

/* Global values */
marker-start: inherit;
marker-start: initial;
marker-start: revert;
marker-start: revert-layer;
marker-start: unset;
```

### Werte

- `none`

  - : Dies bedeutet, dass kein Marker am ersten Scheitelpunkt des Pfades des Elements gezeichnet wird.

- `<marker-ref>`
  - : Ein {{cssxref("url_value", "&lt;url&gt;")}}, das auf einen Marker verweist, der durch ein SVG {{SVGElement('marker')}} Element definiert ist und am ersten Scheitelpunkt des Pfades des Elements gezeichnet wird. Wenn der URL-Verweis ungültig ist, wird kein Marker am ersten Scheitelpunkt des Pfades gezeichnet.

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
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
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
    points="20,100 40,60 70,80 100,20" />
</svg>
```

```css
polyline#test {
  marker-start: url(#triangle);
}
```

{{EmbedLiveSample("Example", "200", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("marker-mid")}}
- {{cssxref("marker-end")}}
- {{cssxref("marker")}}
- SVG {{SVGAttr("marker-start")}} Attribut
