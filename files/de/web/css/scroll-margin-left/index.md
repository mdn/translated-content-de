---
title: scroll-margin-left
slug: Web/CSS/scroll-margin-left
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-margin-left` definiert den linken Rand des Scroll-Snap-Bereichs, der verwendet wird, um diese Box an den Snapport anzudocken. Der Scroll-Snap-Bereich wird durch das Transformieren des `border`-Rahmens bestimmt. Es wird das Rechteck (axisausgerichtet im Koordinatensystem des Scroll-Containers) ermittelt und dann der angegebene Versatz hinzugefügt.

{{EmbedInteractiveExample("pages/css/scroll-margin-left.html")}}

## Syntax

```css
/* <length> values */
scroll-margin-left: 10px;
scroll-margin-left: 1em;

/* Global values */
scroll-margin-left: inherit;
scroll-margin-left: initial;
scroll-margin-left: revert;
scroll-margin-left: revert-layer;
scroll-margin-left: unset;
```

### Werte

- {{CSSXref("&lt;length&gt;")}}
  - : Ein Versatz vom linken Rand des Scroll-Containers.

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
