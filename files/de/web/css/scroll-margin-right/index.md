---
title: scroll-margin-right
slug: Web/CSS/scroll-margin-right
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-margin-right` definiert den rechten Rand des Scroll-Snap-Bereichs, der verwendet wird, um diesen Kasten am Snapport einrasten zu lassen. Der Scroll-Snap-Bereich wird bestimmt, indem der transformierte Rahmenkasten genommen wird, seine rechteckige Begrenzungsbox (achsenparallel im Koordinatenbereich des Scrollcontainers) ermittelt wird und anschließend die angegebenen Abstände hinzugefügt werden.

{{EmbedInteractiveExample("pages/css/scroll-margin-right.html")}}

## Syntax

```css
/* <length> values */
scroll-margin-right: 10px;
scroll-margin-right: 1em;

/* Global values */
scroll-margin-right: inherit;
scroll-margin-right: initial;
scroll-margin-right: revert;
scroll-margin-right: revert-layer;
scroll-margin-right: unset;
```

### Werte

- {{CSSXref("&lt;length&gt;")}}
  - : Ein Abstand vom rechten Rand des Scrollcontainers.

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
