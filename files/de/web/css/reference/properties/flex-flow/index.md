---
title: flex-flow
slug: Web/CSS/Reference/Properties/flex-flow
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`flex-flow`** [CSS](/de/docs/Web/CSS) [Shorthand-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt die Richtung eines Flex-Containers sowie dessen Umbruchsverhalten fest.

{{InteractiveExample("CSS Demo: flex-flow")}}

```css interactive-example-choice
flex-flow: row wrap;
```

```css interactive-example-choice
flex-flow: row-reverse nowrap;
```

```css interactive-example-choice
flex-flow: column wrap-reverse;
```

```css interactive-example-choice
flex-flow: column wrap;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>Item One</div>
    <div>Item Two</div>
    <div>Item Three</div>
    <div>Item Four</div>
    <div>Item Five</div>
    <div>Item Six</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  width: 80%;
  max-height: 300px;
  display: flex;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  width: 60px;
  margin: 10px;
}
```

## Bestandeigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("flex-direction")}}
- {{cssxref("flex-wrap")}}

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

### Einstellung von column-reverse und wrap

In diesem Beispiel ist die Hauptachse die Blockrichtung mit einem umgekehrten main-start und main-end. Die Flex-Elemente dürfen umbrochen werden, wodurch bei Bedarf neue Zeilen entstehen.

```css
.container {
  flex-flow: column-reverse wrap;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Sortierung von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
