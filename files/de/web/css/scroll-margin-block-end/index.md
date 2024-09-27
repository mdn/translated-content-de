---
title: scroll-margin-block-end
slug: Web/CSS/scroll-margin-block-end
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-margin-block-end` definiert den Rand des Scroll-Snap-Bereichs am Ende der Blockdimension, der verwendet wird, um dieses Element an den Snapport zu schnappen. Der Scroll-Snap-Bereich wird bestimmt, indem der transformierte Rahmen des Elements genommen wird, seine rechteckige Begrenzungsbox (achsend ausgerichtet im Koordinatenraum des Scroll-Containers) gefunden wird und dann die angegebenen Aussetzungen hinzugefügt werden.

{{EmbedInteractiveExample("pages/css/scroll-margin-block-end.html")}}

## Syntax

```css
/* <length> values */
scroll-margin-block-end: 10px;
scroll-margin-block-end: 1em;

/* Global values */
scroll-margin-block-end: inherit;
scroll-margin-block-end: initial;
scroll-margin-block-end: revert;
scroll-margin-block-end: revert-layer;
scroll-margin-block-end: unset;
```

### Werte

- {{CSSXref("&lt;length&gt;")}}
  - : Ein Auszug von der Blockendkante des Scroll-Containers.

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
