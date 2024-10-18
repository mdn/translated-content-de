---
title: scroll-margin-block-end
slug: Web/CSS/scroll-margin-block-end
l10n:
  sourceCommit: 2b112aef57df0649462db5d9f47d782a7aa1f25c
---

{{CSSRef}}

Die Eigenschaft `scroll-margin-block-end` definiert den Rand des "scroll snap"-Bereichs am Ende der Block-Dimension, der verwendet wird, um dieses Element an den {{Glossary("Scroll_snap#snapport", "snapport")}} zu schnappen. Der "scroll snap"-Bereich wird durch das Transformieren der Randbox bestimmt, indem dessen rechteckige Begrenzungsbox (achsenparallel im Koordinatenraum des Scroll-Containers) gefunden wird und dann die angegebenen Ränder hinzugefügt werden.

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
  - : Ein Vorsprung von der Blockendkante des Scroll-Containers.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS Scroll Snap](https://web.dev/articles/css-scroll-snap)
