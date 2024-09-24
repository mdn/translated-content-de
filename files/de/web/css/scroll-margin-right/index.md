---
title: scroll-margin-right
slug: Web/CSS/scroll-margin-right
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-margin-right` definiert den rechten Rand des Scroll-Snap-Bereichs, der verwendet wird, um dieses Element an den Snapport anzudocken. Der Scroll-Snap-Bereich wird bestimmt, indem das transformierte Rahmenfeld genommen, dessen rechteckige Umrandung (achsenausgerichtet im Koordinatenraum des Scrollcontainers) gefunden wird, und dann die angegebenen Außenabstände hinzugefügt werden.

{{EmbedInteractiveExample("pages/css/scroll-margin-right.html")}}

## Syntax

```css
/* <length> Werte */
scroll-margin-right: 10px;
scroll-margin-right: 1em;

/* Globale Werte */
scroll-margin-right: inherit;
scroll-margin-right: initial;
scroll-margin-right: revert;
scroll-margin-right: revert-layer;
scroll-margin-right: unset;
```

### Werte

- {{CSSXref("&lt;length&gt;")}}
  - : Ein Außenabstand vom rechten Rand des Scrollcontainers.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS Scroll Snap](https://web.dev/articles/css-scroll-snap)
