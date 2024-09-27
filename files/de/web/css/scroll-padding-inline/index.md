---
title: scroll-padding-inline
slug: Web/CSS/scroll-padding-inline
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die `scroll-padding-inline` [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) setzt das Scroll-Padding eines Elements in der Inline-Dimension.

{{EmbedInteractiveExample("pages/css/scroll-padding-inline.html")}}

Die Scroll-Padding-Eigenschaften definieren Versätze für den _optimalen Betrachtungsbereich_ des Scrollports: den Bereich, der als Zielregion verwendet wird, um Elemente im Sichtbereich des Benutzers zu platzieren. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die von anderem Inhalt verdeckt werden (wie fest positionierte Werkzeugleisten oder Seitenleisten) oder mehr Platz zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

## Bestandeigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`scroll-padding-inline-end`](/de/docs/Web/CSS/scroll-padding-inline-end)
- [`scroll-padding-inline-start`](/de/docs/Web/CSS/scroll-padding-inline-start)

## Syntax

```css
/* Keyword values */
scroll-padding-inline: auto;

/* <length> values */
scroll-padding-inline: 10px;
scroll-padding-inline: 1em 0.5em;
scroll-padding-inline: 10%;

/* Global values */
scroll-padding-inline: inherit;
scroll-padding-inline: initial;
scroll-padding-inline: revert;
scroll-padding-inline: revert-layer;
scroll-padding-inline: unset;
```

### Werte

- `<length-percentage>`
  - : Ein innerer Versatz vom entsprechenden Rand des Scrollports, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Versatz wird vom User-Agent bestimmt. Dies wird in der Regel 0px sein, aber ein User-Agent kann etwas anderes erkennen und tun, wenn ein nicht-nullwertiger Wert angemessener ist.

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
