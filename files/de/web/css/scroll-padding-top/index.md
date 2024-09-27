---
title: scroll-padding-top
slug: Web/CSS/scroll-padding-top
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

Die **`scroll-padding-top`** Eigenschaft definiert Abstände für die Oberseite des _optimalen Ansichtsbereichs_ des Scrollports: der Bereich, der als Zielregion für die Platzierung von Elementen im Sichtbereich des Nutzers dient. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die durch andere Inhalte (wie fest positionierte Werkzeugleisten oder Seitenleisten) verdeckt sind, oder einen größeren Abstand zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

{{EmbedInteractiveExample("pages/css/scroll-padding-top.html")}}

## Syntax

```css
/* Keyword values */
scroll-padding-top: auto;

/* <length> values */
scroll-padding-top: 10px;
scroll-padding-top: 1em;
scroll-padding-top: 10%;

/* Global values */
scroll-padding-top: inherit;
scroll-padding-top: initial;
scroll-padding-top: revert;
scroll-padding-top: revert-layer;
scroll-padding-top: unset;
```

### Werte

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein nach innen gerichteter Abstand von der oberen Kante des Scrollports, als gültige Länge oder Prozentwert.
- `auto`
  - : Der Abstand wird vom Benutzeragenten bestimmt. Dies ist in der Regel 0px, aber ein Benutzeragent kann erkennen und etwas anderes tun, wenn ein Wert ungleich null angemessener ist.

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
- [Präzises Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
