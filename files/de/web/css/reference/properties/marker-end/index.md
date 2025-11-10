---
title: marker-end
slug: Web/CSS/Reference/Properties/marker-end
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`marker-end`** [CSS](/de/docs/Web/CSS) Eigenschaft verweist auf einen Marker, der am letzten Vertex des Pfades des Elements gezeichnet wird, also an seinem Endvertex. Der Marker muss mit einem SVG {{SVGElement('marker')}}-Element definiert worden sein und kann nur mit einem {{cssxref("url_value", "&lt;url&gt;")}}-Wert referenziert werden. Der Wert der CSS-Eigenschaft überschreibt alle Werte des `marker-end`-Attributs im SVG.

Bei vielen markierungsunterstützenden Formen sind die ersten und letzten Vertices derselbe Punkt: zum Beispiel die obere linke Ecke eines {{SVGElement('rect')}}. In solchen Formen werden, wenn sowohl der erste als auch der letzte Marker definiert sind, zwei Marker an diesem Punkt gezeichnet, auch wenn sie möglicherweise nicht in die gleiche Richtung zeigen.

> [!NOTE]
> Die `marker-end` Eigenschaft hat nur für Elemente eine Wirkung, die SVG-Marker verwenden können. Siehe {{SVGAttr("marker-end")}} für eine Liste.

## Syntax

```css
marker-end: none;
marker-end: url("markers.svg#arrow");

/* Global values */
marker-end: inherit;
marker-end: initial;
marker-end: revert;
marker-end: revert-layer;
marker-end: unset;
```

### Werte

- `none`
  - : Dies bedeutet, dass kein Marker am letzten Vertex des Pfades des Elements gezeichnet wird.

- `<marker-ref>`
  - : Ein {{cssxref("url_value", "&lt;url&gt;")}}, der auf einen Marker verweist, der durch ein SVG {{SVGElement('marker')}}-Element definiert ist und am letzten Vertex des Pfades des Elements gezeichnet werden soll. Wenn der URL-Verweis ungültig ist, wird kein Marker am letzten Vertex des Pfades gezeichnet.

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
      <path d="M 0 0 L 10 5 L 0 10 z" fill="red" />
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
  marker-end: url("#triangle");
}
```

{{EmbedLiveSample("Example", "200", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("marker-start")}}
- {{cssxref("marker-mid")}}
- {{cssxref("marker")}}
- SVG {{SVGAttr("marker-end")}} Attribut
