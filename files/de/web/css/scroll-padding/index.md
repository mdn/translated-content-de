---
title: scroll-padding
slug: Web/CSS/scroll-padding
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die **`scroll-padding`** [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) legt den Scroll-Abstand auf allen Seiten eines Elements gleichzeitig fest, ähnlich wie die {{cssxref("padding")}} Eigenschaft für den Innenabstand eines Elements.

{{EmbedInteractiveExample("pages/css/scroll-padding.html")}}

Die `scroll-padding-*` Eigenschaften definieren Offsets für den _optimalen Anzeigebereich_ des Scrollports: den Bereich, der als Zielregion für die Platzierung von Inhalten in der Ansicht des Benutzers verwendet wird. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die durch andere Inhalte (wie feste Toolbars oder Sidebars) verdeckt werden, oder mehr Platz zwischen einem anvisierten Element und den Rändern des Scrollports zu ermöglichen.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{CSSXref("scroll-padding-bottom")}}
- {{CSSXref("scroll-padding-left")}}
- {{CSSXref("scroll-padding-right")}}
- {{CSSXref("scroll-padding-top")}}

## Syntax

```css
/* Schlüsselwort-Werte */
scroll-padding: auto;

/* <length> Werte */
scroll-padding: 10px;
scroll-padding: 1em 0.5em 1em 1em;
scroll-padding: 10%;

/* Globale Werte */
scroll-padding: inherit;
scroll-padding: initial;
scroll-padding: revert;
scroll-padding: revert-layer;
scroll-padding: unset;
```

### Werte

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein innerer Versatz vom entsprechenden Rand des Scrollports als gültiges {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}.
- `auto`
  - : Der Versatz wird vom User Agent bestimmt. Dies ist in der Regel `0px`, aber der User Agent kann auch ein anderes, nicht-nullwertiges Ergebnis bereitstellen, wenn dies angemessener ist.

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
