---
title: marker-end
slug: Web/CSS/marker-end
l10n:
  sourceCommit: 6d311a5f07c97dbcd7bb9a6d49c2fe820a228659
---

{{CSSRef}}

Die **`marker-end`** [CSS](/de/docs/Web/CSS) Eigenschaft verweist auf einen Marker, der am letzten Eckpunkt des Pfads des Elements gezeichnet wird; das heißt, an seinem Endpunkt. Der Marker muss mit einem SVG {{SVGElement('marker')}} Element definiert worden sein und kann nur mit einem {cssxref("url_value", "&lt;url&gt;")}} Wert referenziert werden. Der Wert der CSS-Eigenschaft überschreibt alle Werte des `marker-end` Attributs im SVG.

Bei vielen Marker-unterstützenden Formen sind der erste und der letzte Eckpunkt derselbe Punkt: zum Beispiel die obere linke Ecke eines {{SVGElement('rect')}}. In solchen Formen, wenn sowohl der erste als auch der letzte Marker definiert sind, werden zwei Marker an diesem Punkt gezeichnet, obwohl sie möglicherweise nicht in dieselbe Richtung zeigen.

> [!NOTE]
> Die `marker-end` Eigenschaft hat nur einen Effekt für Elemente, die SVG-Marker verwenden können. Siehe {{SVGAttr("marker-end")}} für eine Liste.

## Syntax

```css
marker-end: none;
marker-end: url(markers.svg#arrow);

/* Global values */
marker-end: inherit;
marker-end: initial;
marker-end: revert;
marker-end: revert-layer;
marker-end: unset;
```

### Werte

- `none`

  - : Dies bedeutet, dass kein Marker am letzten Eckpunkt des Pfads des Elements gezeichnet wird.

- `<marker-ref>`

  - : Ein {{cssxref("url_value", "&lt;url&gt;")}}, der auf einen Marker verweist, der durch ein SVG {{SVGElement('marker')}} Element definiert ist, um am letzten Eckpunkt des Pfads des Elements gezeichnet zu werden. Wenn die URL-Referenz ungültig ist, wird kein Marker am letzten Eckpunkt des Pfads gezeichnet.

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
  marker-end: url(#triangle);
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
