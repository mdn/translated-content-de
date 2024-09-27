---
title: scroll-padding
slug: Web/CSS/scroll-padding
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Die **`scroll-padding`** [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) setzt die Scroll-Padding auf allen Seiten eines Elements gleichzeitig, ähnlich wie die {{cssxref("padding")}}-Eigenschaft das Padding eines Elements bestimmt.

{{EmbedInteractiveExample("pages/css/scroll-padding.html")}}

Die `scroll-padding-*`-Eigenschaften definieren Offsets für den _optimalen Anzeigebereich_ des Scrollports: den Bereich, der als Zielregion für die Platzierung von Inhalten im Blickfeld des Benutzers verwendet wird. Dies ermöglicht es dem Autor, Bereiche des Scrollports auszuschließen, die durch andere Inhalte (wie fest positionierte Werkzeugleisten oder Seitenleisten) verdeckt sind, oder mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

## Entsprechende Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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
  - : Ein innerer Offset vom entsprechenden Rand des Scrollports, als gültige {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}.
- `auto`
  - : Das Offset wird vom Benutzeragenten bestimmt. Dies ist normalerweise `0px`, aber der Benutzeragent kann etwas anderes erkennen und tun, wenn ein Wert ungleich null angemessener ist.

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
