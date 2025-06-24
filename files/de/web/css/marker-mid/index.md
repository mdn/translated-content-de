---
title: marker-mid
slug: Web/CSS/marker-mid
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`marker-mid`**-[CSS](/de/docs/Web/CSS) Eigenschaft verweist auf einen Marker, der an den mittleren Scheitelpunkten des Pfades eines Elements gezeichnet wird; das heißt, an jedem seiner Scheitelpunkte zwischen den Start- und Endscheitelpunkten. Der Marker muss mit einem SVG-{{SVGElement('marker')}}-Element definiert worden sein und kann nur mit einem {{cssxref("url_value", "&lt;url&gt;")}}-Wert referenziert werden. Der Wert der CSS-Eigenschaft überschreibt alle Werte des `marker-mid`-Attributs im SVG.

Die Richtung, in die jeder Marker zeigt, ist definiert als die Richtung, die zwischen der Richtung am Ende des vorhergehenden Pfadsegments und der Richtung am Anfang des folgenden Pfadsegments liegt. Dies kann als Kreuzprodukt der durch die beiden Pfadrichtungen definierten Vektoren betrachtet werden.

> [!NOTE]
> Die `marker-mid`-Eigenschaft hat nur Auswirkungen auf Elemente, die SVG-Marker verwenden können. Siehe {{SVGAttr("marker-mid")}} für eine Liste.

## Syntax

```css
marker-mid: none;
marker-mid: url(markers.svg#arrow);

/* Global values */
marker-mid: inherit;
marker-mid: initial;
marker-mid: revert;
marker-mid: revert-layer;
marker-mid: unset;
```

### Werte

- `none`

  - : Dies bedeutet, dass kein Marker an jedem mittleren Scheitelpunkt des Pfades des Elements gezeichnet wird.

- `<marker-ref>`
  - : Ein {{cssxref("url_value", "&lt;url&gt;")}}, das auf einen Marker verweist, der durch ein SVG-{{SVGElement('marker')}}-Element definiert ist und an jedem mittleren Scheitelpunkt des Pfades des Elements gezeichnet wird. Wenn die URL-Referenz ungültig ist, wird kein Marker an den mittleren Scheitelpunkten des Pfades gezeichnet.

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
  marker-mid: url(#triangle);
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
- {{cssxref("marker")}}
- SVG {{SVGAttr("marker-mid")}} Attribut
