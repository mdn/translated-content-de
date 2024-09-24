---
title: scroll-snap-align
slug: Web/CSS/scroll-snap-align
l10n:
  sourceCommit: 198a77df83a3eec14cb6e64fc6f797ddd3f8558e
---

{{CSSRef}}

Die Eigenschaft `scroll-snap-align` gibt die Fangausrichtung des Elements als Ausrichtung seines Fangbereichs (als Objekt der Ausrichtung) innerhalb des Fangports seines Fangcontainers (als Container der Ausrichtung) an.

{{EmbedInteractiveExample("pages/css/scroll-snap-align.html")}}

## Syntax

```css
/* Ein einzelner Schlüsselwortwert */
scroll-snap-align: none;
scroll-snap-align: center;
scroll-snap-align: start;
scroll-snap-align: end;

/* Zwei Schlüsselwortwerte */
scroll-snap-align: start end;
scroll-snap-align: end center;
scroll-snap-align: center start;

/* Globale Werte */
scroll-snap-align: inherit;
scroll-snap-align: initial;
scroll-snap-align: revert;
scroll-snap-align: revert-layer;
scroll-snap-align: unset;
```

### Werte

Für die Eigenschaft `scroll-snap-align` können ein oder zwei Werte angegeben werden. Wenn ein Wert gesetzt ist, wird er auf beide Achsen, die Block- und Inline-Achse, angewendet. Wenn zwei Werte gesetzt werden, kontrolliert der erste Wert die Blockachse und der zweite Wert die Inline-Achse.

- `none`
  - : Das Element definiert keine Fangausrichtung in dieser Achse.
- `start`
  - : Die Startausrichtung des Fangbereichs dieses Elements innerhalb des Fangports des Scrollcontainers ist eine Fangausrichtung in dieser Achse.
- `end`
  - : Die Endausrichtung des Fangbereichs dieses Elements innerhalb des Fangports des Scrollcontainers ist eine Fangausrichtung in dieser Achse.
- `center`
  - : Die Mittelausrichtung des Fangbereichs dieses Elements innerhalb des Fangports des Scrollcontainers ist eine Fangausrichtung in dieser Achse.

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
