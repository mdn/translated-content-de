---
title: scroll-margin-block
slug: Web/CSS/scroll-margin-block
l10n:
  sourceCommit: 2b112aef57df0649462db5d9f47d782a7aa1f25c
---

{{CSSRef}}

Die `scroll-margin-block`-[Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) legt die Scroll-Margen eines Elements in der Block-Dimension fest.

{{EmbedInteractiveExample("pages/css/scroll-margin-block.html")}}

## Bestandteil-Eigenschaften

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
  - : Ein Versatz vom entsprechenden Rand des Scroll-Containers.

## Beschreibung

Die scroll-margin-Werte stellen Versätze dar, die den Scroll-Snap-Bereich definieren, der zum Einrasten dieser Box in den {{Glossary("Scroll_snap#snapport", "Snapport")}} verwendet wird. Der Scroll-Snap-Bereich wird bestimmt, indem die transformierte Rahmenbox genommen und ihre rechteckige Begrenzungsbox gefunden wird (achsenbündig im Koordinatenraum des Scroll-Containers), und dann die angegebenen Versätze hinzugefügt werden.

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
