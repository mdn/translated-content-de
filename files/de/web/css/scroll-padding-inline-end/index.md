---
title: scroll-padding-inline-end
slug: Web/CSS/scroll-padding-inline-end
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-padding-inline-end` definiert die Abstände für die Endkante in der Inline-Dimension des _optimalen Ansichtsbereichs_ des Scrollports: das Gebiet, das als Zielbereich zum Platzieren von Elementen im Blickfeld des Benutzers verwendet wird. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die durch andere Inhalte verdeckt werden (wie z.B. fest positionierte Werkzeugleisten oder Seitenleisten) oder mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

{{EmbedInteractiveExample("pages/css/scroll-padding-inline-end.html")}}

## Syntax

```css
/* Schlüsselwort-Werte */
scroll-padding-inline-end: auto;

/* <Längen>-Werte */
scroll-padding-inline-end: 10px;
scroll-padding-inline-end: 1em;
scroll-padding-inline-end: 10%;

/* Globale Werte */
scroll-padding-inline-end: inherit;
scroll-padding-inline-end: initial;
scroll-padding-inline-end: revert;
scroll-padding-inline-end: revert-layer;
scroll-padding-inline-end: unset;
```

### Werte

- `<length-percentage>`
  - : Ein Abstand zur Innenkante des Scrollports am Inline-Ende, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Abstand wird durch den User-Agent festgelegt. Dies ist im Allgemeinen 0px, aber ein User-Agent kann etwas anderes erkennen und ein nicht-null-Wert festlegen, falls dies angemessener ist.

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
- [Kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
