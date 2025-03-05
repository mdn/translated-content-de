---
title: scroll-padding-inline
slug: Web/CSS/scroll-padding-inline
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die `scroll-padding-inline` [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) setzt den Scrollabstand eines Elements in der Inline-Dimension.

{{EmbedInteractiveExample("pages/css/scroll-padding-inline.html")}}

Die Scroll-Padding-Eigenschaften definieren Versätze für den _optimalen Anzeigebereich_ des Scrollports: der Bereich, der als Zielbereich zum Platzieren von Elementen im Sichtfeld des Benutzers verwendet wird. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die von anderem Inhalt (wie fest positionierten Werkzeugleisten oder Seitenleisten) verdeckt sind, oder mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

## Zusammengesetzte Eigenschaften

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
  - : Ein nach innen gerichteter Versatz vom entsprechenden Rand des Scrollports, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Versatz wird vom Benutzeragenten bestimmt. Dies wird im Allgemeinen 0px sein, aber ein Benutzeragent kann erkennen und etwas anderes tun, wenn ein Nicht-Null-Wert angemessener ist.

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
