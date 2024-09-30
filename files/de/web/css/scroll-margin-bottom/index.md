---
title: scroll-margin-bottom
slug: Web/CSS/scroll-margin-bottom
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-margin-bottom` definiert den unteren Rand des Scroll-Snap-Bereichs, der verwendet wird, um dieses Element an den Snapport anzupassen. Der Scroll-Snap-Bereich wird bestimmt, indem der transformierte Begrenzungsrahmen genommen, dessen rechteckiger Umgebungsrahmen (achsenbündig im Koordinatenraum des Scroll-Containers) gefunden und anschließend die angegebenen Randbereiche hinzugefügt werden.

{{EmbedInteractiveExample("pages/css/scroll-margin-bottom.html")}}

## Syntax

```css
/* <length> values */
scroll-margin-bottom: 10px;
scroll-margin-bottom: 1em;

/* Global values */
scroll-margin-bottom: inherit;
scroll-margin-bottom: initial;
scroll-margin-bottom: revert;
scroll-margin-bottom: revert-layer;
scroll-margin-bottom: unset;
```

### Werte

- {{CSSXref("&lt;length&gt;")}}
  - : Ein Rand von der unteren Kante des Scroll-Containers.

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
