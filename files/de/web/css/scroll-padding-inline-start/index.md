---
title: scroll-padding-inline-start
slug: Web/CSS/scroll-padding-inline-start
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-padding-inline-start` definiert Versätze für die Startkante in der Inline-Dimension des _optimalen Anzeigebereichs_ des Scrollports: der Bereich, der als Zielbereich für die Platzierung von Elementen im Sichtbereich des Benutzers verwendet wird. Dadurch kann der Autor Bereiche des Scrollports ausschließen, die durch andere Inhalte verdeckt sind (wie z. B. fest positionierte Werkzeugleisten oder Seitenleisten), oder mehr Abstand zwischen einem anvisierten Element und den Kanten des Scrollports schaffen.

{{EmbedInteractiveExample("pages/css/scroll-padding-inline-start.html")}}

## Syntax

```css
/* Keyword values */
scroll-padding-inline-start: auto;

/* <length> values */
scroll-padding-inline-start: 10px;
scroll-padding-inline-start: 1em;
scroll-padding-inline-start: 10%;

/* Global values */
scroll-padding-inline-start: inherit;
scroll-padding-inline-start: initial;
scroll-padding-inline-start: revert;
scroll-padding-inline-start: revert-layer;
scroll-padding-inline-start: unset;
```

### Werte

- `<length-percentage>`
  - : Ein innerer Versatz von der Inline-Startkante des Scrollports, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Versatz wird vom Benutzeragenten bestimmt. Dies wird im Allgemeinen 0px sein, aber ein Benutzeragent kann erkennen und etwas anderes tun, wenn ein von Null abweichender Wert angemessener ist.

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
