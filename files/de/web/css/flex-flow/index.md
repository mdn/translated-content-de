---
title: flex-flow
slug: Web/CSS/flex-flow
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`flex-flow`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt die Richtung eines Flex-Containers sowie dessen Umbruchverhalten fest.

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

## Bestandteileigenschaften

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

### Einstellung von column-reverse und wrap

In diesem Beispiel ist die Hauptachse die Blockrichtung mit einem umgekehrten main-start und main-end. Die Flex-Elemente dürfen umbrochen werden und bei Bedarf neue Zeilen erstellen.

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

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Reihenfolge von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
