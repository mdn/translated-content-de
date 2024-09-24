---
title: scroll-margin-left
slug: Web/CSS/scroll-margin-left
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-margin-left` definiert den linken Rand des Scroll-Snap-Bereichs, der zum Einrasten dieses Elements in den Snapport verwendet wird. Der Scroll-Snap-Bereich wird bestimmt durch das Transformieren des Randrahmens, dessen rechteckige Begrenzungsbox (achsenparallel im Koordinatenraum des Scroll-Containers) ermittelt und dann die angegebenen Ränder hinzugefügt werden.

{{EmbedInteractiveExample("pages/css/scroll-margin-left.html")}}

## Syntax

```css
/* <length> Werte */
scroll-margin-left: 10px;
scroll-margin-left: 1em;

/* Globale Werte */
scroll-margin-left: inherit;
scroll-margin-left: initial;
scroll-margin-left: revert;
scroll-margin-left: revert-layer;
scroll-margin-left: unset;
```

### Werte

- {{CSSXref("&lt;length&gt;")}}
  - : Ein Randversatz vom linken Rand des Scroll-Containers.

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
