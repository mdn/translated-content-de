---
title: scroll-snap-align
slug: Web/CSS/scroll-snap-align
l10n:
  sourceCommit: 198a77df83a3eec14cb6e64fc6f797ddd3f8558e
---

{{CSSRef}}

Die Eigenschaft `scroll-snap-align` gibt die Snap-Position der Box als Ausrichtung ihres Snap-Bereichs (als Ausrichtungsobjekt) innerhalb des Snap-Ports ihres Snap-Containers (als Ausrichtungscontainer) an.

{{EmbedInteractiveExample("pages/css/scroll-snap-align.html")}}

## Syntax

```css
/* Single keyword value */
scroll-snap-align: none;
scroll-snap-align: center;
scroll-snap-align: start;
scroll-snap-align: end;

/* Two keyword values */
scroll-snap-align: start end;
scroll-snap-align: end center;
scroll-snap-align: center start;

/* Global values */
scroll-snap-align: inherit;
scroll-snap-align: initial;
scroll-snap-align: revert;
scroll-snap-align: revert-layer;
scroll-snap-align: unset;
```

### Werte

Für die Eigenschaft `scroll-snap-align` können ein oder zwei Werte angegeben werden. Wenn ein Wert festgelegt ist, wird er sowohl auf die Block- als auch auf die Inline-Achse angewendet. Wenn zwei Werte festgelegt sind, steuert der erste Wert die Blockachse und der zweite Wert die Inline-Achse.

- `none`
  - : Die Box definiert keine Snap-Position in dieser Achse.
- `start`
  - : Die Anfangsausrichtung des Scroll-Snap-Bereichs dieser Box innerhalb des Snapports des Scroll-Containers ist eine Snap-Position in dieser Achse.
- `end`
  - : Die Endausrichtung des Scroll-Snap-Bereichs dieser Box innerhalb des Snapports des Scroll-Containers ist eine Snap-Position in dieser Achse.
- `center`
  - : Die Mittelausrichtung des Scroll-Snap-Bereichs dieser Box innerhalb des Snapports des Scroll-Containers ist eine Snap-Position in dieser Achse.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
