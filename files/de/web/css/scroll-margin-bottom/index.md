---
title: scroll-margin-bottom
slug: Web/CSS/scroll-margin-bottom
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-margin-bottom` definiert den unteren Rand des Scroll-Snap-Bereichs, der verwendet wird, um dieses Element an den Snapport zu schnappen. Der Scroll-Snap-Bereich wird bestimmt, indem der transformierte Rahmenkasten genommen, seine rechteckige Begrenzungsbox (achsenausgerichtet im Koordinatenraum des Scroll-Containers) ermittelt und dann die angegebenen Ränder hinzugefügt werden.

{{EmbedInteractiveExample("pages/css/scroll-margin-bottom.html")}}

## Syntax

```css
/* <length> Werte */
scroll-margin-bottom: 10px;
scroll-margin-bottom: 1em;

/* Globale Werte */
scroll-margin-bottom: inherit;
scroll-margin-bottom: initial;
scroll-margin-bottom: revert;
scroll-margin-bottom: revert-layer;
scroll-margin-bottom: unset;
```

### Werte

- {{CSSXref("&lt;length&gt;")}}
  - : Ein Rand vom unteren Rand des Scroll-Containers.

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