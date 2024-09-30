---
title: scroll-margin-right
slug: Web/CSS/scroll-margin-right
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-margin-right` definiert den rechten Rand des Scroll-Snap-Bereichs, der verwendet wird, um dieses Feld an den Snapport zu schnappen. Der Scroll-Snap-Bereich wird ermittelt, indem der transformierte Rahmenkasten (border box) genommen, sein rechteckiger Begrenzungskasten (achsenparallel im Koordinatenraum des Scroll-Containers) gefunden und dann die angegebenen Aufsätze hinzugefügt werden.

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
  - : Ein Aufsatz vom rechten Rand des Scroll-Containers.

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
