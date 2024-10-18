---
title: scroll-margin-top
slug: Web/CSS/scroll-margin-top
l10n:
  sourceCommit: 2b112aef57df0649462db5d9f47d782a7aa1f25c
---

{{CSSRef}}

Die Eigenschaft `scroll-margin-top` definiert den oberen Rand des Scroll-Snap-Bereichs, der verwendet wird, um dieses Element an den {{Glossary("Scroll_snap#snapport", "Snapport")}} anzuschnappen. Der Scroll-Snap-Bereich wird durch die Transformation des Rahmenkastens bestimmt, dann wird das rechteckige Begrenzungsfeld (achsenparallel im Koordinatenraum des Scroll-Containers) ermittelt, und schließlich werden die angegebenen Abstände hinzugefügt.

{{EmbedInteractiveExample("pages/css/scroll-margin-top.html")}}

## Syntax

```css
/* <length> values */
scroll-margin-top: 10px;
scroll-margin-top: 1em;

/* Global values */
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
