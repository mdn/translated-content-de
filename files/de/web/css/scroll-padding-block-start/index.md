---
title: scroll-padding-block-start
slug: Web/CSS/scroll-padding-block-start
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-padding-block-start` definiert Versätze für den Startrand in der Blockdimension der _optimalen Anzeigeregion_ des Scrollports: die Region, die als Zielregion für die Platzierung von Elementen im Blickfeld des Benutzers verwendet wird. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die durch andere Inhalte (wie fest positionierte Werkzeugleisten oder Seitenleisten) verdeckt sind, oder mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

{{EmbedInteractiveExample("pages/css/scroll-padding-block-start.html")}}

## Syntax

```css
/* Keyword values */
scroll-padding-block-start: auto;

/* <length> values */
scroll-padding-block-start: 10px;
scroll-padding-block-start: 1em;
scroll-padding-block-start: 10%;

/* Global values */
scroll-padding-block-start: inherit;
scroll-padding-block-start: initial;
scroll-padding-block-start: revert;
scroll-padding-block-start: revert-layer;
scroll-padding-block-start: unset;
```

### Werte

- `<length-percentage>`
  - : Ein nach innen gerichteter Versatz vom Blockstartrand des Scrollports, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Versatz wird vom Benutzeragenten bestimmt. Dieser ist im Allgemeinen 0px, aber ein Benutzeragent kann erkennen und etwas anderes tun, wenn ein Wert ungleich Null angemessener ist.

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
