---
title: scroll-padding-left
slug: Web/CSS/scroll-padding-left
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-padding-left` definiert Versätze für die linke Seite des _optimalen Sichtbereichs_ des Scrollports: der Bereich, der als Zielregion verwendet wird, um Elemente in das Sichtfeld des Nutzers zu bringen. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die von anderem Inhalt verdeckt werden (wie z.B. fest positionierte Werkzeugleisten oder Seitenleisten), oder mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

{{EmbedInteractiveExample("pages/css/scroll-padding-left.html")}}

## Syntax

```css
/* Keyword values */
scroll-padding-left: auto;

/* <length> values */
scroll-padding-left: 10px;
scroll-padding-left: 1em;
scroll-padding-left: 10%;

/* Global values */
scroll-padding-left: inherit;
scroll-padding-left: initial;
scroll-padding-left: revert;
scroll-padding-left: revert-layer;
scroll-padding-left: unset;
```

### Werte

- `<length-percentage>`
  - : Ein innerer Versatz von der linken Kante des Scrollports, angegeben als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Versatz wird vom User-Agent bestimmt. Dies wird im Allgemeinen 0px sein, aber ein User-Agent kann erkennen und etwas anderes tun, wenn ein von null abweichender Wert angemessener ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Kontrolliertes Scrollen mit CSS Scroll Snap](https://web.dev/articles/css-scroll-snap)
