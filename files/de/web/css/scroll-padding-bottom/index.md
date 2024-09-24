---
title: scroll-padding-bottom
slug: Web/CSS/scroll-padding-bottom
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-padding-bottom` definiert Offsets für den unteren Rand des _optimalen Anzeigebereichs_ des Scrollports: den Bereich, der als Zielregion verwendet wird, um Elemente im Sichtbereich des Benutzers zu platzieren. Dies erlaubt es dem Autor, Bereiche des Scrollports auszuschließen, die durch andere Inhalte (wie fest positionierte Werkzeugleisten oder Seitenleisten) verdeckt sind, oder um mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

{{EmbedInteractiveExample("pages/css/scroll-padding-bottom.html")}}

## Syntax

```css
/* Schlüsselwort-Werte */
scroll-padding-bottom: auto;

/* <length>-Werte */
scroll-padding-bottom: 10px;
scroll-padding-bottom: 1em;
scroll-padding-bottom: 10%;

/* Globale Werte */
scroll-padding-bottom: inherit;
scroll-padding-bottom: initial;
scroll-padding-bottom: revert;
scroll-padding-bottom: revert-layer;
scroll-padding-bottom: unset;
```

### Werte

- `<length-percentage>`
  - : Ein nach innen gerichtetes Offset vom unteren Rand des Scrollports, als gültige Länge oder Prozentsatz.
- `auto`
  - : Das Offset wird vom Benutzeragenten bestimmt. Dies ist im Allgemeinen 0px, aber ein Benutzeragent kann erkennen und etwas anderes tun, wenn ein nicht-null Wert angemessener ist.

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
- [Well-controlled scrolling with CSS scroll snap](https://web.dev/articles/css-scroll-snap)
