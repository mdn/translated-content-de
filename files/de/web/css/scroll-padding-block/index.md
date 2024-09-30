---
title: scroll-padding-block
slug: Web/CSS/scroll-padding-block
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die `scroll-padding-block` [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) setzt das Scroll-Padding eines Elements in der Block-Dimension.

{{EmbedInteractiveExample("pages/css/scroll-padding-block.html")}}

Die `scroll-padding` Eigenschaften definieren Offsets für den _optimalen Ansichtsbereich_ des Scrollports: den Bereich, der als Zielregion dient, um Elemente für den Benutzer sichtbar zu machen. Dies ermöglicht es dem Autor, Regionen des Scrollports auszuschließen, die durch andere Inhalte verdeckt sind (wie z. B. fest positionierte Symbolleisten oder Seitenleisten) oder mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

## Einzelbestandteile

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`scroll-padding-block-end`](/de/docs/Web/CSS/scroll-padding-block-end)
- [`scroll-padding-block-start`](/de/docs/Web/CSS/scroll-padding-block-start)

## Syntax

```css
/* Keyword values */
scroll-padding-block: auto;

/* <length> values */
scroll-padding-block: 10px;
scroll-padding-block: 1em 0.5em;
scroll-padding-block: 10%;

/* Global values */
scroll-padding-block: inherit;
scroll-padding-block: initial;
scroll-padding-block: revert;
scroll-padding-block: revert-layer;
scroll-padding-block: unset;
```

### Werte

- `<length-percentage>`
  - : Ein nach innen gerichtetes Offset vom entsprechenden Rand des Scrollports, als gültige Länge oder Prozentangabe.
- `auto`
  - : Das Offset wird vom Benutzeragenten bestimmt. Dies wird im Allgemeinen 0px sein, aber ein Benutzeragent kann erkennen und etwas anderes tun, wenn ein anderer Wert angemessener ist.

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
