---
title: scroll-padding-inline-end
slug: Web/CSS/scroll-padding-inline-end
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-padding-inline-end` definiert Versätze für das Endsegment in der Inline-Dimension der _optimalen Anzeigeregion_ des Scrollports: die Region, die als Zielregion für das Platzieren von Elementen im Sichtbereich des Nutzers dient. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die durch andere Inhalte verdeckt werden (wie fest positionierte Werkzeugleisten oder Seitenleisten), oder mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

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
  - : Ein innerer Versatz vom Inline-Endrand des Scrollports, als eine gültige Länge oder ein Prozentsatz.
- `auto`
  - : Der Versatz wird durch den User-Agent bestimmt. Dies wird im Allgemeinen 0px sein, aber ein User-Agent kann auch etwas anderes erkennen und tun, wenn ein anderer Wert passender ist.

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
