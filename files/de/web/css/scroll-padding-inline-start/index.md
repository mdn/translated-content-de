---
title: scroll-padding-inline-start
slug: Web/CSS/scroll-padding-inline-start
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-padding-inline-start` definiert Versätze für die Startkante in der Inlinerichtung der _optimalen Betrachtungsregion_ des Scrollports: die Region, die als Zielregion verwendet wird, um Dinge im Blickfeld des Benutzers zu platzieren. Dies ermöglicht es dem Autor, Bereiche des Scrollports, die durch andere Inhalte verdeckt sind (wie beispielsweise fest positionierte Werkzeugleisten oder Seitenleisten), auszuschließen oder mehr Abstand zwischen einem angezielten Element und den Rändern des Scrollports zu schaffen.

{{EmbedInteractiveExample("pages/css/scroll-padding-inline-start.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
scroll-padding-inline-start: auto;

/* <Längen>-Werte */
scroll-padding-inline-start: 10px;
scroll-padding-inline-start: 1em;
scroll-padding-inline-start: 10%;

/* Globale Werte */
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
  - : Der Versatz wird vom Benutzeragenten bestimmt. Im Allgemeinen wird dies 0px sein, aber ein Benutzeragent kann erkennen und etwas anderes tun, wenn ein nicht-null Wert angemessener ist.

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
