---
title: marker-mid
slug: Web/CSS/marker-mid
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Die **`marker-mid`** [CSS](/de/docs/Web/CSS)-Eigenschaft verweist auf einen Marker, der an den mittleren Scheitelpunkten des Pfads des Elements gezeichnet wird; das heißt, an jedem seiner Scheitelpunkte zwischen den Start- und Endscheitelpunkten. Der Marker muss mithilfe eines SVG-{{SVGElement('marker')}}-Elements definiert worden sein und kann nur mit einem {{cssxref('url()')}}-Wert referenziert werden. Der Wert der CSS-Eigenschaft überschreibt alle Werte des `marker-mid`-Attributs im SVG.

Die Richtung, in die jeder Marker zeigt, wird als die Richtung definiert, die in der Mitte zwischen der Richtung am Ende des vorhergehenden Pfadsegments und der Richtung des Beginns des nachfolgenden Pfadsegments liegt. Dies kann als das Kreuzprodukt der Vektoren betrachtet werden, die durch die beiden Pfadrichtungen definiert sind.

> [!NOTE]
> Die `marker-mid`-Eigenschaft hat nur eine Wirkung auf Elemente, die SVG-Marker verwenden können. Siehe {{SVGAttr("marker-mid")}} für eine Liste.

## Syntax

```css
marker-mid: none;
marker-mid: url(markers.svg#arrow);

/* Globale Werte */
marker-mid: inherit;
marker-mid: initial;
marker-mid: revert;
marker-mid: revert-layer;
marker-mid: unset;
```

### Werte

- `none`

  - : Dies bedeutet, dass an jedem mittleren Scheitelpunkt des Pfads des Elements kein Marker gezeichnet wird.

- `<marker-ref>`

  - : Ein {{cssxref("url_value", "&lt;url&gt;")}}, der auf einen Marker verweist, der durch ein SVG-{{SVGElement('marker')}}-Element definiert wurde und an jedem mittleren Scheitelpunkt des Pfads des Elements gezeichnet werden soll. Wenn der URL-Verweis ungültig ist, wird an den mittleren Scheitelpunkten des Pfads kein Marker gezeichnet.

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

{{EmbedLiveSample("Beispiel", "200", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("marker-start")}}
- {{cssxref("marker-end")}}
- {{cssxref("marker")}}
- SVG-{{SVGAttr("marker-mid")}}-Attribut