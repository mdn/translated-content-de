---
title: scroll-padding-block
slug: Web/CSS/scroll-padding-block
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die `scroll-padding-block`-[Kurzformeigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) setzt den Scroll-Abstand eines Elements in der Block-Dimension.

{{EmbedInteractiveExample("pages/css/scroll-padding-block.html")}}

Die Scroll-Abstandseigenschaften definieren Versätze für den _optimalen Sichtbereich_ des Scrollport: der Bereich, der als Zielregion für das Platzieren von Elementen im Sichtbereich des Benutzers verwendet wird. Dies ermöglicht es dem Autor, Bereiche des Scrollport auszuschließen, die von anderem Inhalt verdeckt werden (wie z.B. fixierte Werkzeugleisten oder Seitenleisten), oder mehr Freiraum zwischen einem anvisierten Element und den Kanten des Scrollport zu schaffen.

## Bestandteile der Eigenschaft

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`scroll-padding-block-end`](/de/docs/Web/CSS/scroll-padding-block-end)
- [`scroll-padding-block-start`](/de/docs/Web/CSS/scroll-padding-block-start)

## Syntax

```css
/* Keyword values */
scroll-padding-block: auto;

/* <length> values */
scroll-padding-block: 10px;
scroll-padding-block: 1em 0.5em;
scroll-padding-block: 10%;

/* Global values */
scroll-padding-block: inherit;
scroll-padding-block: initial;
scroll-padding-block: revert;
scroll-padding-block: revert-layer;
scroll-padding-block: unset;
```

### Werte

- `<length-percentage>`
  - : Ein innerer Versatz von der entsprechenden Kante des Scrollport, als gültige Länge oder Prozentsatz.
- `auto`
  - : Der Versatz wird durch den Benutzeragenten bestimmt. In der Regel wird dies 0px sein, ein Benutzeragent kann jedoch erkennen und etwas anderes tun, wenn ein von Null verschiedener Wert angemessener ist.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut kontrolliertes Scrollen mit CSS-Scroll-Snap](https://web.dev/articles/css-scroll-snap)
