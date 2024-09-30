---
title: scroll-margin-block-start
slug: Web/CSS/scroll-margin-block-start
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-margin-block-start` definiert den Rand des Scroll-Schnappbereichs am Beginn der Blockdimension, der zum Einrasten dieser Box an den Schnappbereich verwendet wird. Der Scroll-Schnappbereich wird bestimmt, indem der transformierte Rahmen der Box genommen wird, seine rechteckige Begrenzungsbox (achsenbündig im Koordinatenraum des Scroll-Containers) gefunden wird und dann die angegebenen Vorlagen hinzugefügt werden.

{{EmbedInteractiveExample("pages/css/scroll-margin-block-start.html")}}

## Syntax

```css
/* <length> values */
scroll-margin-block-start: 10px;
scroll-margin-block-start: 1em;

/* Global values */
scroll-margin-block-start: inherit;
scroll-margin-block-start: initial;
scroll-margin-block-start: revert;
scroll-margin-block-start: revert-layer;
scroll-margin-block-start: unset;
```

### Werte

- {{CSSXref("&lt;length&gt;")}}
  - : Ein Vorlauf von der Blockanfangskante des Scroll-Containers.

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
