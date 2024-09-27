---
title: scroll-snap-align
slug: Web/CSS/scroll-snap-align
l10n:
  sourceCommit: 198a77df83a3eec14cb6e64fc6f797ddd3f8558e
---

{{CSSRef}}

Die `scroll-snap-align`-Eigenschaft legt die Schnapp-Position des Rahmens als Ausrichtung seines Schnapp-Bereichs (als Ausrichtungsobjekt) innerhalb des Schnapp-Ports seines Schnapp-Containers (als Ausrichtungs-Container) fest.

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

Für die `scroll-snap-align`-Eigenschaft können ein oder zwei Werte angegeben werden. Wenn ein Wert gesetzt wird, wird er sowohl auf die Block- als auch auf die Inline-Achse angewendet. Wenn zwei Werte gesetzt werden, steuert der erste Wert die Blockachse und der zweite Wert die Inline-Achse.

- `none`
  - : Der Rahmen definiert keine Schnapp-Position in dieser Achse.
- `start`
  - : Die Startausrichtung des Schnappbereichs dieses Rahmens ist innerhalb des Schnapp-Ports des Scroll-Containers eine Schnapp-Position in dieser Achse.
- `end`
  - : Die Endausrichtung des Schnappbereichs dieses Rahmens ist innerhalb des Schnapp-Ports des Scroll-Containers eine Schnapp-Position in dieser Achse.
- `center`
  - : Die Mittelausrichtung des Schnappbereichs dieses Rahmens ist innerhalb des Schnapp-Ports des Scroll-Containers eine Schnapp-Position in dieser Achse.

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
- [Well-controlled scrolling with CSS scroll snap](https://web.dev/articles/css-scroll-snap)
