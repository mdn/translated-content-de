---
title: scroll-margin-top
slug: Web/CSS/scroll-margin-top
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-margin-top` definiert den oberen Rand des Scroll-Schnappbereichs, der verwendet wird, um diese Box an den Schnappbereich (snapport) anzupassen. Der Scroll-Schnappbereich wird bestimmt, indem die transformierte Rahmenbox (border box) genommen, deren rechteckige Begrenzungsbox im Koordinatenraum des Scroll-Containers gefunden und dann die angegebenen Erweiterungen hinzugefügt werden.

{{EmbedInteractiveExample("pages/css/scroll-margin-top.html")}}

## Syntax

```css
/* <length> Werte */
scroll-margin-top: 10px;
scroll-margin-top: 1em;

/* Globale Werte */
scroll-margin-top: inherit;
scroll-margin-top: initial;
scroll-margin-top: revert;
scroll-margin-top: revert-layer;
scroll-margin-top: unset;
```

### Werte

- {{CSSXref("&lt;length&gt;")}}
  - : Ein Abstand vom oberen Rand des Scroll-Containers.

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
