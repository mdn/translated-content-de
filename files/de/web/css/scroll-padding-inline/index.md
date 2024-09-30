---
title: scroll-padding-inline
slug: Web/CSS/scroll-padding-inline
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die `scroll-padding-inline` [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) legt das Scroll-Padding eines Elements in der Inlines-Richtung fest.

{{EmbedInteractiveExample("pages/css/scroll-padding-inline.html")}}

Die Scroll-Padding-Eigenschaften definieren Offsets für den _optimalen Anzeigebereich_ des Scrollports: der Bereich, der als Zielregion für die Platzierung von Elementen im Sichtfeld des Nutzers verwendet wird. Damit kann der Autor Bereiche des Scrollports ausschließen, die von anderen Inhalten (wie fest positionierten Werkzeugleisten oder Seitenleisten) verdeckt werden, oder mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports schaffen.

## Einzelne Eigenschaften

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
  - : Ein innerer Offset von der entsprechenden Kante des Scrollports, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Offset wird durch den Benutzer-Agent bestimmt. Dies wird im Allgemeinen 0px sein, aber ein Benutzer-Agent kann erkennen und etwas anderes tun, wenn ein nicht nuller Wert angemessener ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS Scroll Snap](https://web.dev/articles/css-scroll-snap)
