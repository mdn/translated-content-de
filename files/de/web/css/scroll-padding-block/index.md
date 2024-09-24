---
title: scroll-padding-block
slug: Web/CSS/scroll-padding-block
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Kurzschreibweiseigenschaft `scroll-padding-block` legt das Scroll-Padding eines Elements in der Blockdimension fest.

{{EmbedInteractiveExample("pages/css/scroll-padding-block.html")}}

Die Scroll-Padding-Eigenschaften definieren Versätze für den _optimalen Ansichtsbereich_ des Scrollports: der Bereich, der als Zielregion für die Platzierung von Elementen im Sichtfeld des Benutzers verwendet wird. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die durch andere Inhalte verdeckt werden (wie zum Beispiel fest positionierte Werkzeugleisten oder Seitenleisten) oder mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`scroll-padding-block-end`](/de/docs/Web/CSS/scroll-padding-block-end)
- [`scroll-padding-block-start`](/de/docs/Web/CSS/scroll-padding-block-start)

## Syntax

```css
/* Keyword-Werte */
scroll-padding-block: auto;

/* <length>-Werte */
scroll-padding-block: 10px;
scroll-padding-block: 1em 0.5em;
scroll-padding-block: 10%;

/* Globale Werte */
scroll-padding-block: inherit;
scroll-padding-block: initial;
scroll-padding-block: revert;
scroll-padding-block: revert-layer;
scroll-padding-block: unset;
```

### Werte

- `<length-percentage>`
  - : Ein nach innen gerichteter Versatz vom entsprechenden Rand des Scrollports, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Versatz wird vom Benutzeragenten bestimmt. Dies ist in der Regel 0px, aber ein Benutzeragent kann auch etwas anderes erkennen und ausführen, wenn ein anderer Wert als 0px angemessener ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS Scroll Snap](https://web.dev/articles/css-scroll-snap)
