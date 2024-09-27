---
title: scroll-padding-block
slug: Web/CSS/scroll-padding-block
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die `scroll-padding-block`-[Kurzform-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) setzt das Scroll-Padding eines Elements in der Block-Dimension.

{{EmbedInteractiveExample("pages/css/scroll-padding-block.html")}}

Die `scroll-padding`-Eigenschaften definieren Abstände für den _optimalen Anzeigebereich_ des Scrollports: der Bereich, der als Zielbereich für das Platzieren von Inhalten im Sichtfeld des Benutzers verwendet wird. Dadurch kann der Autor Bereiche des Scrollports ausschließen, die von anderen Inhalten (wie beispielsweise fixierten Werkzeug- oder Seitenleisten) verdeckt werden, oder mehr Freiraum zwischen einem anvisierten Element und den Rändern des Scrollports schaffen.

## Bestandteile

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
  - : Ein nach innen gerichteter Abstand vom entsprechenden Rand des Scrollports, als gültige Länge oder Prozentwert.
- `auto`
  - : Der Abstand wird vom Benutzer-Agent bestimmt. Dies ist in der Regel 0px, jedoch kann ein Benutzer-Agent auch einen anderen Wert festlegen, wenn dieser angemessener ist.

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
