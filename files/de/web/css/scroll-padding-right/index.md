---
title: scroll-padding-right
slug: Web/CSS/scroll-padding-right
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-padding-right` definiert Offsets für die rechte Seite des _optimalen Ansichtsbereichs_ des Scrollports: den Bereich, der als Zielregion für das Platzieren von Elementen in der Sicht des Nutzers verwendet wird. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die durch andere Inhalte (wie fest positionierte Werkzeugleisten oder Seitenleisten) verdeckt werden, oder um mehr Platz zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

{{EmbedInteractiveExample("pages/css/scroll-padding-right.html")}}

## Syntax

```css
/* Keyword values */
scroll-padding-right: auto;

/* <length> values */
scroll-padding-right: 10px;
scroll-padding-right: 1em;
scroll-padding-right: 10%;

/* Global values */
scroll-padding-right: inherit;
scroll-padding-right: initial;
scroll-padding-right: revert;
scroll-padding-right: revert-layer;
scroll-padding-right: unset;
```

### Werte

- `<length-percentage>`
  - : Ein innerer Versatz vom oberen Rand des Scrollports, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Versatz wird vom Benutzeragenten bestimmt. Dies ist im Allgemeinen 0px, aber ein Benutzeragent kann etwas anderes erkennen und tun, wenn ein nicht-null-Wert angemessener ist.

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
- [Kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
