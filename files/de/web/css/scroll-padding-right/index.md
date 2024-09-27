---
title: scroll-padding-right
slug: Web/CSS/scroll-padding-right
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-padding-right` definiert Offsets für die rechte Seite des _optimalen Ansichtsbereichs_ des Scrollport: der Bereich, der als Zielregion verwendet wird, um Elemente in den Blick des Benutzers zu platzieren. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die von anderen Inhalten verdeckt sind (wie fest positionierte Werkzeugleisten oder Seitenleisten) oder um mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

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
  - : Ein Offset nach innen von der oberen Kante des Scrollports, als gültige Länge oder Prozentangabe.
- `auto`
  - : Das Offset wird vom Benutzeragenten bestimmt. Dies wird im Allgemeinen 0px sein, allerdings kann ein Benutzeragent etwas anderes erkennen und anwenden, wenn ein Wert ungleich null angemessener ist.

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
