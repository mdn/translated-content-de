---
title: scroll-padding-right
slug: Web/CSS/scroll-padding-right
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-padding-right` definiert Versätze für die rechte Seite des _optimalen Betrachtungsbereichs_ des Scrollports: den Bereich, der als Zielregion verwendet wird, um Elemente in das Sichtfeld des Benutzers zu bringen. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die durch andere Inhalte verdeckt werden (wie fest positionierte Werkzeugleisten oder Seitenleisten), oder mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

{{EmbedInteractiveExample("pages/css/scroll-padding-right.html")}}

## Syntax

```css
/* Schlüsselwort-Werte */
scroll-padding-right: auto;

/* <length> Werte */
scroll-padding-right: 10px;
scroll-padding-right: 1em;
scroll-padding-right: 10%;

/* Globale Werte */
scroll-padding-right: inherit;
scroll-padding-right: initial;
scroll-padding-right: revert;
scroll-padding-right: revert-layer;
scroll-padding-right: unset;
```

### Werte

- `<length-percentage>`
  - : Ein nach innen gerichteter Versatz von der oberen Kante des Scrollports in einer gültigen Länge oder in Prozent.
- `auto`
  - : Der Versatz wird vom Benutzeragenten bestimmt. Dies wird im Allgemeinen 0px sein, aber ein Benutzeragent kann etwas anderes erkennen und tun, wenn ein von null verschiedener Wert angemessener ist.

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
