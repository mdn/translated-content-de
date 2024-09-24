---
title: scroll-padding-left
slug: Web/CSS/scroll-padding-left
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-padding-left` definiert Versätze für die linke Seite des _optimalen Anzeigebereichs_ des Scrollportals: der Bereich, der als Zielregion verwendet wird, um Dinge im Blickfeld des Benutzers zu platzieren. Dies ermöglicht dem Autor, Bereiche des Scrollportals auszuschließen, die durch andere Inhalte verdeckt werden (wie z.B. fest positionierte Werkzeugleisten oder Seitenleisten) oder mehr Freiraum zwischen einem anvisierten Element und den Rändern des Scrollportals zu schaffen.

{{EmbedInteractiveExample("pages/css/scroll-padding-left.html")}}

## Syntax

```css
/* Schlüsselwort-Werte */
scroll-padding-left: auto;

/* <Längenwerte> */
scroll-padding-left: 10px;
scroll-padding-left: 1em;
scroll-padding-left: 10%;

/* Globale Werte */
scroll-padding-left: inherit;
scroll-padding-left: initial;
scroll-padding-left: revert;
scroll-padding-left: revert-layer;
scroll-padding-left: unset;
```

### Werte

- `<length-percentage>`
  - : Ein interner Versatz von der linken Kante des Scrollportals, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Versatz wird durch den Benutzeragenten bestimmt. Dies wird allgemein 0px sein, aber ein Benutzeragent kann erkennen und etwas anderes tun, wenn ein Nicht-Null-Wert geeigneter ist.

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
