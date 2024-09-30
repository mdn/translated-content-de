---
title: scroll-padding
slug: Web/CSS/scroll-padding
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die **`scroll-padding`** [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) legt das Scroll-Padding auf allen Seiten eines Elements gleichzeitig fest, ähnlich wie die {{cssxref("padding")}}-Eigenschaft das Padding eines Elements beeinflusst.

{{EmbedInteractiveExample("pages/css/scroll-padding.html")}}

Die `scroll-padding-*` Eigenschaften definieren Versätze für den _optimalen Ansichtsbereich_ des Scrollbereichs: den Bereich, der als Zielregion verwendet wird, um Dinge in die Sicht des Benutzers zu bringen. Dies ermöglicht es dem Autor, Bereiche des Scrollbereichs auszuschließen, die durch andere Inhalte (wie fest positionierte Werkzeugleisten oder Seitenleisten) verdeckt werden, oder zusätzlichen Abstand zwischen einem Ziel-Element und den Rändern des Scrollbereichs zu schaffen.

## Bestandteile der Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{CSSXref("scroll-padding-bottom")}}
- {{CSSXref("scroll-padding-left")}}
- {{CSSXref("scroll-padding-right")}}
- {{CSSXref("scroll-padding-top")}}

## Syntax

```css
/* Keyword values */
scroll-padding: auto;

/* <length> values */
scroll-padding: 10px;
scroll-padding: 1em 0.5em 1em 1em;
scroll-padding: 10%;

/* Global values */
scroll-padding: inherit;
scroll-padding: initial;
scroll-padding: revert;
scroll-padding: revert-layer;
scroll-padding: unset;
```

### Werte

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein Innenabstand vom entsprechenden Rand des Scrollbereichs, entweder als gültige {{cssxref("&lt;length&gt;")}} oder als {{cssxref("&lt;percentage&gt;")}}.
- `auto`
  - : Der Versatz wird durch den User-Agent bestimmt. Dies ist im Allgemeinen `0px`, aber der User-Agent kann auch eine andere Entscheidung treffen, wenn ein anderer Wert angemessener ist.

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
- [Gut gesteuertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
