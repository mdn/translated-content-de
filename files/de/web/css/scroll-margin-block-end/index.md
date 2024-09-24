---
title: scroll-margin-block-end
slug: Web/CSS/scroll-margin-block-end
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-margin-block-end` definiert den Rand des Scroll-Schnappbereichs am Ende der Block-Dimension, der für das Einrasten dieses Box-Elements in den Snapport verwendet wird. Der Scroll-Schnappbereich wird bestimmt, indem die transformierte Rahmenbox genommen, ihr rechteckiger Begrenzungsrahmen (achsenparallel im Koordinatenraum des Scroll-Containers) gefunden und dann die angegebenen Ausdehnungen hinzugefügt werden.

{{EmbedInteractiveExample("pages/css/scroll-margin-block-end.html")}}

## Syntax

```css
/* <length> Werte */
scroll-margin-block-end: 10px;
scroll-margin-block-end: 1em;

/* Globale Werte */
scroll-margin-block-end: inherit;
scroll-margin-block-end: initial;
scroll-margin-block-end: revert;
scroll-margin-block-end: revert-layer;
scroll-margin-block-end: unset;
```

### Werte

- {{CSSXref("&lt;length&gt;")}}
  - : Ein Ausstand von der Block-Endkante des Scroll-Containers.

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
