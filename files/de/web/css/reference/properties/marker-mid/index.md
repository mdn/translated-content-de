---
title: "`marker-mid` CSS property"
short-title: marker-mid
slug: Web/CSS/Reference/Properties/marker-mid
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`marker-mid`** [CSS](/de/docs/Web/CSS)-Eigenschaft verweist auf ein Markierungselement, das an den mittleren Scheitelpunkten des Pfads eines Elements gezeichnet wird. Das heißt, an jedem seiner Scheitelpunkte zwischen Anfang und Ende. Die Markierung muss mit einem SVG-{{SVGElement('marker')}}-Element definiert worden sein und kann nur mit einem {{cssxref("url_value", "&lt;url&gt;")}}-Wert referenziert werden. Der Wert der CSS-Eigenschaft überschreibt alle Werte des `marker-mid`-Attributs im SVG.

Die Richtung, in die jede Markierung zeigt, ist definiert als die Richtung genau zwischen der Richtung am Ende des vorhergehenden Pfadsegments und der Richtung am Anfang des nachfolgenden Pfadsegments. Das kann als das Kreuzprodukt der durch die beiden Pfadrichtungen definierten Vektoren betrachtet werden.

> [!NOTE]
> Die `marker-mid`-Eigenschaft hat nur Auswirkungen auf Elemente, die SVG-Markierungen verwenden können. Siehe {{SVGAttr("marker-mid")}} für eine Liste.

## Syntax

```css
marker-mid: none;
marker-mid: url("markers.svg#arrow");

/* Global values */
marker-mid: inherit;
marker-mid: initial;
marker-mid: revert;
marker-mid: revert-layer;
marker-mid: unset;
```

### Werte

- `none`
  - : Dies bedeutet, dass keine Markierung an den mittleren Scheitelpunkten des Pfads des Elements gezeichnet wird.

- `<marker-ref>`
  - : Ein {{cssxref("url_value", "&lt;url&gt;")}}, der auf eine durch ein SVG-{{SVGElement('marker')}}-Element definierte Markierung verweist, die an jedem mittleren Scheitelpunkt des Pfads des Elements gezeichnet wird. Wenn die URL-Referenz ungültig ist, wird keine Markierung an den mittleren Scheitelpunkten des Pfads gezeichnet.

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
  marker-mid: url("#triangle");
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
- SVG-Attribut {{SVGAttr("marker-mid")}}
