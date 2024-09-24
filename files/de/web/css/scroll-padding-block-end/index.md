---
title: scroll-padding-block-end
slug: Web/CSS/scroll-padding-block-end
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-padding-block-end` definiert Versätze für die Endkante in der Blockdimension des _optimalen Sichtbereichs_ des Scrollports: der Bereich, der als Zielregion verwendet wird, um Dinge im Sichtfeld des Benutzers zu platzieren. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die durch andere Inhalte verdeckt werden (wie Toolbar oder Seitenleiste mit fester Position) oder um mehr Abstand zwischen einem Ziel-Element und den Rändern des Scrollports zu schaffen.

{{EmbedInteractiveExample("pages/css/scroll-padding-block-end.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
scroll-padding-block-end: auto;

/* <length> Werte */
scroll-padding-block-end: 10px;
scroll-padding-block-end: 1em;
scroll-padding-block-end: 10%;

/* Globale Werte */
scroll-padding-block-end: inherit;
scroll-padding-block-end: initial;
scroll-padding-block-end: revert;
scroll-padding-block-end: revert-layer;
scroll-padding-block-end: unset;
```

### Werte

- `<length-percentage>`
  - : Ein innerer Versatz von der Blockendkante des Scrollports, als gültige Länge oder Prozentwert.
- `auto`
  - : Der Versatz wird vom User-Agent festgelegt. Dies ist im Allgemeinen 0px, aber ein User-Agent kann etwas anderes erkennen und verwenden, wenn ein Wert ungleich null angemessener ist.

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
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
