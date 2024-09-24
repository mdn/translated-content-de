---
title: scroll-margin-block
slug: Web/CSS/scroll-margin-block
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die `scroll-margin-block` [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) legt die Scroll-Margen eines Elements in der Block-Dimension fest.

{{EmbedInteractiveExample("pages/css/scroll-margin-block.html")}}

## Bestandteile der Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`scroll-margin-block-end`](/de/docs/Web/CSS/scroll-margin-block-end)
- [`scroll-margin-block-start`](/de/docs/Web/CSS/scroll-margin-block-start)

## Syntax

```css
/* <length> Werte */
scroll-margin-block: 10px;
scroll-margin-block: 1em 0.5em;

/* Globale Werte */
scroll-margin-block: inherit;
scroll-margin-block: initial;
scroll-margin-block: revert;
scroll-margin-block: revert-layer;
scroll-margin-block: unset;
```

### Werte

- {{CSSXref("&lt;length&gt;")}}
  - : Ein Abstand vom entsprechenden Rand des Scroll-Containers.

## Beschreibung

Die scroll-margin-Werte stellen Abstände dar, die den Scroll-Snap-Bereich definieren, der verwendet wird, um diese Box an den Snapport zu schnappen. Der Scroll-Snap-Bereich wird bestimmt, indem der transformierte Border-Box ermittelt, seine rechteckige Begrenzungsbox (achsenweise im Koordinatenraum des Scroll-Containers ausgerichtet) gefunden und dann die angegebenen Abstände hinzugefügt werden.

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
