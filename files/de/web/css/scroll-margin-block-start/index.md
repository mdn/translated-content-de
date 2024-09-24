---
title: scroll-margin-block-start
slug: Web/CSS/scroll-margin-block-start
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-margin-block-start` definiert den Abstand des Scroll-Schnappbereichs am Anfang der Blockdimension, der verwendet wird, um dieses Element an den Snapport zu schnappen. Der Scroll-Schnappbereich wird durch die Transformation der Border-Box, das Finden ihrer rechteckigen Begrenzungsbox (achsenparallel im Koordinatenraum des Scroll-Containers) und das Hinzufügen der angegebenen Ausmaße bestimmt.

{{EmbedInteractiveExample("pages/css/scroll-margin-block-start.html")}}

## Syntax

```css
/* <length> Werte */
scroll-margin-block-start: 10px;
scroll-margin-block-start: 1em;

/* Globale Werte */
scroll-margin-block-start: inherit;
scroll-margin-block-start: initial;
scroll-margin-block-start: revert;
scroll-margin-block-start: revert-layer;
scroll-margin-block-start: unset;
```

### Werte

- {{CSSXref("&lt;length&gt;")}}
  - : Ein Vorsprung vom Blockanfang des Scroll-Containers.

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
