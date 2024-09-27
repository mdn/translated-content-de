---
title: scroll-padding-inline-end
slug: Web/CSS/scroll-padding-inline-end
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-padding-inline-end` definiert Versätze für den Endrand in der Inline-Dimension des _optimalen Ansichtsbereichs_ des Scrollports: der Bereich, der als Zielregion für die Platzierung von Elementen im Sichtbereich des Benutzers verwendet wird. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die durch andere Inhalte (wie fest positionierte Symbolleisten oder Seitenleisten) verdeckt werden, oder mehr Raum zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

{{EmbedInteractiveExample("pages/css/scroll-padding-inline-end.html")}}

## Syntax

```css
/* Keyword values */
scroll-padding-inline-end: auto;

/* <length> values */
scroll-padding-inline-end: 10px;
scroll-padding-inline-end: 1em;
scroll-padding-inline-end: 10%;

/* Global values */
scroll-padding-inline-end: inherit;
scroll-padding-inline-end: initial;
scroll-padding-inline-end: revert;
scroll-padding-inline-end: revert-layer;
scroll-padding-inline-end: unset;
```

### Werte

- `<length-percentage>`
  - : Ein innerer Versatz vom Inline-Endrand des Scrollports, als gültige Länge oder Prozentangabe.
- `auto`
  - : Der Versatz wird durch den Benutzeragenten bestimmt. Dies ist in der Regel 0px, aber ein Benutzeragent kann erkennen und etwas anderes tun, wenn ein Wert ungleich null angemessener ist.

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
- [Gut gesteuertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
