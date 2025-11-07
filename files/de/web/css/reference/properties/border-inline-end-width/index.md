---
title: border-inline-end-width
slug: Web/CSS/Reference/Properties/border-inline-end-width
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`border-inline-end-width`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Breite des logischen Inline-End-Randes eines Elements, die in Abhängigkeit vom Schreibmodus, der Richtung und der Textausrichtung des Elements auf eine physische Randbreite abgebildet wird. Sie entspricht der {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, oder {{cssxref("border-left-width")}} Eigenschaft, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}}.

{{InteractiveExample("CSS Demo: border-inline-end-width")}}

```css interactive-example-choice
border-inline-end-width: thick;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-end-width: thick;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-end-width: 4px;
writing-mode: horizontal-tb;
direction: rtl;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: palegreen;
  color: black;
  border: 0 solid crimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## Syntax

```css
/* <'border-width'> values */
border-inline-end-width: 2px;
border-inline-end-width: thick;

/* Global values */
border-inline-end-width: inherit;
border-inline-end-width: initial;
border-inline-end-width: revert;
border-inline-end-width: revert-layer;
border-inline-end-width: unset;
```

Verwandte Eigenschaften sind {{cssxref("border-block-start-width")}}, {{cssxref("border-block-end-width")}}, und {{cssxref("border-inline-start-width")}}, die die anderen Randbreiten des Elements definieren.

### Werte

- `<'border-width'>`
  - : Die Breite des Randes. Siehe {{ cssxref("border-width") }}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einen Rahmen mit vertikalem Text anwenden

#### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  border: 1px solid blue;
  border-inline-end-width: 5px;
}
```

#### Ergebnisse

{{EmbedLiveSample("Applying_a_border_with_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- Diese Eigenschaft wird auf eine der physischen Randeigenschaften abgebildet: {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, und {{cssxref("border-left-width")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
