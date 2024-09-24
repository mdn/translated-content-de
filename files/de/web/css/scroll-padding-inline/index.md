---
title: scroll-padding-inline
slug: Web/CSS/scroll-padding-inline
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die `scroll-padding-inline`-[Kurzform-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) legt das Scroll-Padding eines Elements in der Inline-Dimension fest.

{{EmbedInteractiveExample("pages/css/scroll-padding-inline.html")}}

Die Scroll-Padding-Eigenschaften definieren Abstände für den _optimalen Anzeigebereich_ des Scrollport: den Bereich, der als Zielregion dient, um Dinge im Sichtbereich des Benutzers zu platzieren. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die durch andere Inhalte (wie fest positionierte Werkzeugleisten oder Seitenleisten) verdeckt sind, oder zusätzlichen Freiraum zwischen einem Ziel-Element und den Rändern des Scrollports zu schaffen.

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`scroll-padding-inline-end`](/de/docs/Web/CSS/scroll-padding-inline-end)
- [`scroll-padding-inline-start`](/de/docs/Web/CSS/scroll-padding-inline-start)

## Syntax

```css
/* Schlüsselwort-Werte */
scroll-padding-inline: auto;

/* <length> Werte */
scroll-padding-inline: 10px;
scroll-padding-inline: 1em 0.5em;
scroll-padding-inline: 10%;

/* Globale Werte */
scroll-padding-inline: inherit;
scroll-padding-inline: initial;
scroll-padding-inline: revert;
scroll-padding-inline: revert-layer;
scroll-padding-inline: unset;
```

### Werte

- `<length-percentage>`
  - : Ein nach innen gerichteter Abstand von der entsprechenden Kante des Scrollports, als gültige Länge oder als Prozentsatz.
- `auto`
  - : Der Abstand wird durch den Benutzer-Agenten bestimmt. Dies wird in der Regel 0px sein, aber ein Benutzer-Agent kann auch etwas anderes erkennen und anwenden, wenn ein Wert ungleich null angemessener ist.

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
