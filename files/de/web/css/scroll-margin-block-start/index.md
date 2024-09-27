---
title: scroll-margin-block-start
slug: Web/CSS/scroll-margin-block-start
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die `scroll-margin-block-start`-Eigenschaft definiert den Rand des Scroll-Snap-Bereichs am Anfang der Block-Dimension, der verwendet wird, um dieses Element an den Snapport zu schnappen. Der Scroll-Snap-Bereich wird bestimmt, indem der transformierte Rahmenkasten genommen, dessen rechteckiger Begrenzungskasten (achsenbündig im Koordinatenraum des Scroll-Containers) gefunden und dann die angegebenen Überstände hinzugefügt werden.

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
  - : Ein Überstand von der Blockanfangskante des Scroll-Containers.

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
