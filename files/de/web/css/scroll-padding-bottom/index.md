---
title: scroll-padding-bottom
slug: Web/CSS/scroll-padding-bottom
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die Eigenschaft `scroll-padding-bottom` definiert Offsets für den unteren Bereich der _optimalen Ansichtsregion_ des Scrollports: die Region, die als Zielregion für das Platzieren von Elementen im Sichtbereich des Benutzers verwendet wird. Dies ermöglicht es dem Autor, Regionen des Scrollports auszuschließen, die durch andere Inhalte verdeckt sind (z. B. fest positionierte Symbolleisten oder Seitenleisten) oder mehr Raum zwischen einem gezielten Element und den Rändern des Scrollports zu schaffen.

{{EmbedInteractiveExample("pages/css/scroll-padding-bottom.html")}}

## Syntax

```css
/* Keyword values */
scroll-padding-bottom: auto;

/* <length> values */
scroll-padding-bottom: 10px;
scroll-padding-bottom: 1em;
scroll-padding-bottom: 10%;

/* Global values */
scroll-padding-bottom: inherit;
scroll-padding-bottom: initial;
scroll-padding-bottom: revert;
scroll-padding-bottom: revert-layer;
scroll-padding-bottom: unset;
```

### Werte

- `<length-percentage>`
  - : Ein nach innen gerichteter Versatz vom unteren Rand des Scrollports, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Versatz wird durch den Benutzeragenten bestimmt. Dies ist in der Regel 0px, aber ein Benutzeragent kann erkennen und etwas anderes tun, wenn ein Wert ungleich null angemessener ist.

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
