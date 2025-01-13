---
title: scroll-snap-align
slug: Web/CSS/scroll-snap-align
l10n:
  sourceCommit: 4c2bb5b17defb84cbeb79afe52e19043c3179fac
---

{{CSSRef}}

Die Eigenschaft `scroll-snap-align` legt die Schnapp-Position eines Kastens als Ausrichtung seines {{Glossary("Scroll_snap#snap_area", "Schnappbereichs")}} (als {{Glossary("alignment_subject", "Ausrichtungsgegenstand")}}) innerhalb des Schnapp-Ports des Schnapp-Containers (als {{Glossary("alignment_container", "Ausrichtungscontainer")}}) fest.

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

Für die Eigenschaft `scroll-snap-align` können ein oder zwei Werte angegeben werden. Wenn ein Wert festgelegt ist, wird er auf beide Achsen (Block- und Inline-Achse) angewendet. Wenn zwei Werte festgelegt sind, steuert der erste Wert die Block-Achse und der zweite Wert die Inline-Achse.

- `none`
  - : Der Kasten definiert keine Schnapp-Position in dieser Achse.
- `start`
  - : Die Startausrichtung des Schnappbereichs dieses Kastens innerhalb des {{Glossary("Scroll_snap#snapport", "Schnappports")}} des Scroll-Containers ist eine Schnapp-Position in dieser Achse.
- `end`
  - : Die Endausrichtung des Schnappbereichs dieses Kastens innerhalb des Schnappports des Scroll-Containers ist eine Schnapp-Position in dieser Achse.
- `center`
  - : Die Zentrums-Ausrichtung des Schnappbereichs dieses Kastens innerhalb des Schnappports des Scroll-Containers ist eine Schnapp-Position in dieser Achse.

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
