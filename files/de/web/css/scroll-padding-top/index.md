---
title: scroll-padding-top
slug: Web/CSS/scroll-padding-top
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

Die **`scroll-padding-top`**-Eigenschaft definiert Versätze für den oberen Rand des _optimalen Anzeigebereichs_ des Scrollports: der Bereich, der als Zielregion für das Platzieren von Elementen im Sichtbereich des Benutzers dient. Dadurch kann der Autor Regionen des Scrollports ausschließen, die durch andere Inhalte (wie fix positionierte Werkzeugleisten oder Seitenleisten) verdeckt werden, oder mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports schaffen.

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
  - : Ein nach innen gerichteter Versatz vom oberen Rand des Scrollports, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Versatz wird durch den User Agent bestimmt. Dies ist in der Regel 0px, aber ein User Agent kann erkennen und etwas anderes tun, wenn ein ungleich Null-Wert angemessener ist.

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
