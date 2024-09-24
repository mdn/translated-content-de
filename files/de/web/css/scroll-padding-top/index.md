---
title: scroll-padding-top
slug: Web/CSS/scroll-padding-top
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

Die Eigenschaft **`scroll-padding-top`** definiert Offsets für den oberen Rand des _optimalen Ansichtsbereichs_ des Scrollports: den Bereich, der als Zielregion für die Platzierung von Ansichten für den Benutzer verwendet wird. Dadurch kann der Autor Bereiche des Scrollports ausschließen, die durch andere Inhalte (wie z.B. fest positionierte Werkzeugleisten oder Seitenleisten) verdeckt werden, oder es kann mehr Abstand zwischen einem Ziel-Element und den Rändern des Scrollports geschaffen werden.

{{EmbedInteractiveExample("pages/css/scroll-padding-top.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
scroll-padding-top: auto;

/* <length> Werte */
scroll-padding-top: 10px;
scroll-padding-top: 1em;
scroll-padding-top: 10%;

/* Globale Werte */
scroll-padding-top: inherit;
scroll-padding-top: initial;
scroll-padding-top: revert;
scroll-padding-top: revert-layer;
scroll-padding-top: unset;
```

### Werte

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein innerer Offset vom oberen Rand des Scrollports, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Offset wird vom Benutzeragenten bestimmt. Dies ist in der Regel 0px, aber ein Benutzeragent kann etwas anderes erkennen und tun, wenn ein Wert ungleich null angemessener ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
