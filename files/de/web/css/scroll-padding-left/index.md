---
title: scroll-padding-left
slug: Web/CSS/scroll-padding-left
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die `scroll-padding-left`-Eigenschaft definiert Versätze für die linke Seite des optimalen Anzeigebereichs des Scrollports: den Bereich, der als Zielregion zum Platzieren von Elementen im Sichtfeld des Benutzers verwendet wird. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die durch andere Inhalte (wie feststehende Werkzeugleisten oder Seitenleisten) verdeckt werden, oder mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

{{EmbedInteractiveExample("pages/css/scroll-padding-left.html")}}

## Syntax

```css
/* Keyword values */
scroll-padding-left: auto;

/* <length> values */
scroll-padding-left: 10px;
scroll-padding-left: 1em;
scroll-padding-left: 10%;

/* Global values */
scroll-padding-left: inherit;
scroll-padding-left: initial;
scroll-padding-left: revert;
scroll-padding-left: revert-layer;
scroll-padding-left: unset;
```

### Werte

- `<length-percentage>`
  - : Ein nach innen gerichteter Versatz von der linken Kante des Scrollports, als gültige Länge oder Prozentangabe.
- `auto`
  - : Der Versatz wird durch den Benutzeragenten bestimmt. Dies ist im Allgemeinen 0px, aber ein Benutzeragent ist in der Lage zu erkennen und etwas anderes zu tun, wenn ein ungleich Null-Wert angemessener ist.

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
