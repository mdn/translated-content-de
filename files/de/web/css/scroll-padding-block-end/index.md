---
title: scroll-padding-block-end
slug: Web/CSS/scroll-padding-block-end
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-padding-block-end` definiert Versätze für den Endrand in der Blockdimension des _optimalen Ansichtsbereichs_ des Scrollports: der Bereich, der als Zielbereich verwendet wird, um Dinge in die Sicht des Benutzers zu bringen. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die durch andere Inhalte verdeckt sind (wie fest positionierte Werkzeugleisten oder Seitenleisten), oder um mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

{{EmbedInteractiveExample("pages/css/scroll-padding-block-end.html")}}

## Syntax

```css
/* Keyword values */
scroll-padding-block-end: auto;

/* <length> values */
scroll-padding-block-end: 10px;
scroll-padding-block-end: 1em;
scroll-padding-block-end: 10%;

/* Global values */
scroll-padding-block-end: inherit;
scroll-padding-block-end: initial;
scroll-padding-block-end: revert;
scroll-padding-block-end: revert-layer;
scroll-padding-block-end: unset;
```

### Werte

- `<length-percentage>`
  - : Ein innerer Versatz vom Blockendrand des Scrollports, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Versatz wird vom Benutzeragenten bestimmt. Dies wird im Allgemeinen 0px sein, aber ein Benutzeragent kann etwas anderes tun, wenn ein nicht-null Wert angemessener ist.

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
