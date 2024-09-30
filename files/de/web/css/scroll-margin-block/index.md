---
title: scroll-margin-block
slug: Web/CSS/scroll-margin-block
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die `scroll-margin-block` [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) setzt die Scroll-Ränder eines Elements in der Blockdimension.

{{EmbedInteractiveExample("pages/css/scroll-margin-block.html")}}

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`scroll-margin-block-end`](/de/docs/Web/CSS/scroll-margin-block-end)
- [`scroll-margin-block-start`](/de/docs/Web/CSS/scroll-margin-block-start)

## Syntax

```css
/* <length> values */
scroll-margin-block: 10px;
scroll-margin-block: 1em 0.5em;

/* Global values */
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

Die Werte von scroll-margin stellen Abstände dar, die den Bereich definieren, der für das Scroll-Snap dieses Elements zur Snapport verwendet wird. Der Scroll-Snap-Bereich wird bestimmt, indem der transformierte Rahmenkasten genommen, dessen rechteckiger Begrenzungskasten (achsenorientiert im Koordinatenraum des Scroll-Containers) gefunden und dann die angegebenen Abstände hinzugefügt werden.

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
- [Gut kontrolliertes Scrollen mit CSS Scroll Snap](https://web.dev/articles/css-scroll-snap)
