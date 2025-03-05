---
title: scroll-margin-block
slug: Web/CSS/scroll-margin-block
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die CSS-Eigenschaft `scroll-margin-block` als [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) setzt die Scrollabstände eines Elements in der Block-Dimension.

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

Die Werte von `scroll-margin` stellen Abstände dar, die den Scroll-Snap-Bereich definieren, der verwendet wird, um dieses Element an den {{Glossary("Scroll_snap#snapport", "Snapport")}} zu schnappen. Der Scroll-Snap-Bereich wird ermittelt, indem das transformierte Border-Box genommen wird, seine rechteckige Begrenzungsbox (achsenbündig im Koordinatenraum des Scroll-Containers) gefunden wird und dann die angegebenen Abstände hinzugefügt werden.

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
