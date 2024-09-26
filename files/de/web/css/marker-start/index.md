---
title: marker-start
slug: Web/CSS/marker-start
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Die **`marker-start`** [CSS](/de/docs/Web/CSS) Eigenschaft verweist auf einen Marker, der am ersten Eckpunkt des Pfades des Elements gezeichnet wird; das heißt, an seinem Startpunkt. Der Marker muss mit einem SVG {{SVGElement('marker')}} Element definiert worden sein und kann nur mit einem {{cssxref('url()')}} Wert referenziert werden. Der Wert der CSS-Eigenschaft überschreibt alle Werte des `marker-start` Attributs im SVG.

Bei vielen Formen, die Marker unterstützen, befinden sich der erste und letzte Eckpunkt an derselben Stelle: zum Beispiel die obere linke Ecke eines {{SVGElement('rect')}}. In solchen Formen, wenn sowohl der erste als auch der letzte Marker definiert sind, werden zwei Marker an diesem Punkt gezeichnet, obwohl sie möglicherweise nicht in dieselbe Richtung zeigen.

> [!NOTE]
> Die `marker-start` Eigenschaft hat nur Auswirkungen auf Elemente, die SVG-Marker verwenden können. Siehe {{SVGAttr("marker-start")}} für eine Liste.

## Syntax

```css
marker-start: none;
marker-start: url(markers.svg#arrow);

/* Globale Werte */
marker-start: inherit;
marker-start: initial;
marker-start: revert;
marker-start: revert-layer;
marker-start: unset;
```

### Werte

- `none`

  - : Dies bedeutet, dass kein Marker am ersten Eckpunkt des Pfades des Elements gezeichnet wird.

- `<marker-ref>`

  - : Eine {{cssxref("url_value", "&lt;url&gt;")}}, die auf einen durch ein SVG {{SVGElement('marker')}} Element definierten Marker verweist, der am ersten Eckpunkt des Pfades des Elements gezeichnet werden soll. Wenn der URL-Verweis ungültig ist, wird kein Marker am ersten Eckpunkt des Pfades gezeichnet.

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