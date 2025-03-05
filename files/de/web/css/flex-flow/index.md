---
title: flex-flow
slug: Web/CSS/flex-flow
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`flex-flow`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) spezifiziert die Richtung eines Flex-Containers sowie sein Umbruchverhalten.

{{EmbedInteractiveExample("pages/css/flex-flow.html")}}

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`flex-direction`](/de/docs/Web/CSS/flex-direction)
- [`flex-wrap`](/de/docs/Web/CSS/flex-wrap)

## Syntax

```css
/* flex-flow: <'flex-direction'> */
flex-flow: row;
flex-flow: row-reverse;
flex-flow: column;
flex-flow: column-reverse;

/* flex-flow: <'flex-wrap'> */
flex-flow: nowrap;
flex-flow: wrap;
flex-flow: wrap-reverse;

/* flex-flow: <'flex-direction'> and <'flex-wrap'> */
flex-flow: row nowrap;
flex-flow: column wrap;
flex-flow: column-reverse wrap-reverse;

/* Global values */
flex-flow: inherit;
flex-flow: initial;
flex-flow: revert;
flex-flow: revert-layer;
flex-flow: unset;
```

### Werte

Siehe {{cssxref("flex-direction")}} und {{cssxref("flex-wrap")}} für Details zu den Werten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen von column-reverse und wrap

In diesem Beispiel ist die Hauptachse die Blockrichtung mit einem umgekehrten Hauptanfang und Hauptende. Die Flex-Elemente dürfen umbrochen werden und neue Zeilen erstellen, wenn nötig.

```css
element {
  flex-flow: column-reverse wrap;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Reihenfolge von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
