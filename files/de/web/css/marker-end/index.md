---
title: marker-end
slug: Web/CSS/marker-end
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

Die **`marker-end`** [CSS](/de/docs/Web/CSS)-Eigenschaft verweist auf einen Marker, der am letzten Scheitelpunkt des Pfades des Elements gezeichnet wird, also an seinem Endscheitelpunkt. Der Marker muss mit einem SVG-{{SVGElement('marker')}}-Element definiert worden sein und kann nur mit einem {{cssxref("url_value", "&lt;url&gt;")}}-Wert referenziert werden. Der Wert der CSS-Eigenschaft überschreibt alle Werte des `marker-end`-Attributs im SVG.

Für viele Formen, die Marker unterstützen, sind der erste und der letzte Scheitelpunkt derselbe Punkt: Zum Beispiel die obere linke Ecke eines {{SVGElement('rect')}}. Bei solchen Formen werden, wenn sowohl der erste als auch der letzte Marker definiert sind, zwei Marker an diesem Punkt gezeichnet, obwohl sie möglicherweise nicht in dieselbe Richtung zeigen.

> [!NOTE]
> Die `marker-end`-Eigenschaft hat nur eine Wirkung für Elemente, die SVG-Marker verwenden können. Siehe {{SVGAttr("marker-end")}} für eine Liste.

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
  - : Dies bedeutet, dass kein Marker am letzten Scheitelpunkt des Pfades des Elements gezeichnet wird.

- `<marker-ref>`
  - : Ein {{cssxref("url_value", "&lt;url&gt;")}}, der auf einen Marker verweist, der durch ein SVG-{{SVGElement('marker')}}-Element definiert ist und am letzten Scheitelpunkt des Pfades des Elements gezeichnet werden soll. Wenn die URL-Verweisung ungültig ist, wird kein Marker am letzten Scheitelpunkt des Pfades gezeichnet.

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
- SVG-{{SVGAttr("marker-end")}}-Attribut
