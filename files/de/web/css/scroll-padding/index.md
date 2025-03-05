---
title: scroll-padding
slug: Web/CSS/scroll-padding
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`scroll-padding`** [Kurzschrift-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) setzt das Scroll-Padding auf allen Seiten eines Elements auf einmal, ähnlich wie die {{cssxref("padding")}} Eigenschaft das Padding auf einem Element definiert.

{{EmbedInteractiveExample("pages/css/scroll-padding.html")}}

Die `scroll-padding-*` Eigenschaften definieren Offsets für den _optimalen Betrachtungsbereich_ des Scrollports: den Bereich, der als Zielregion verwendet wird, um Dinge im Sichtfeld des Benutzers zu platzieren. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die durch andere Inhalte (wie fixierte Toolbars oder Seitenleisten) verdeckt sind, oder um mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

## Zusätzliche Eigenschaften

Diese Eigenschaft ist eine Kurzschrift für die folgenden CSS-Eigenschaften:

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
  - : Ein innerer Versatz vom entsprechenden Rand des Scrollports, in Form eines gültigen {{cssxref("&lt;length&gt;")}} oder eines {{cssxref("&lt;percentage&gt;")}}.
- `auto`
  - : Der Versatz wird vom Benutzeragenten bestimmt. Dies ist im Allgemeinen `0px`, aber der Benutzeragent kann etwas anderes feststellen und tun, wenn ein Wert ungleich null angemessener ist.

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
