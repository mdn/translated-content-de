---
title: border-inline-end
slug: Web/CSS/Reference/Properties/border-inline-end
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`border-inline-end`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties), um die einzelnen logischen inline-end Border-Eigenschaften an einer einzigen Stelle im Stylesheet festzulegen.

{{InteractiveExample("CSS Demo: border-inline-end")}}

```css interactive-example-choice
border-inline-end: solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-end: dashed red;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-end: 1rem solid;
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
  background-color: #eeeeee;
  color: darkmagenta;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## Untergeordnete Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`border-inline-end-color`](/de/docs/Web/CSS/Reference/Properties/border-inline-end-color)
- [`border-inline-end-style`](/de/docs/Web/CSS/Reference/Properties/border-inline-end-style)
- [`border-inline-end-width`](/de/docs/Web/CSS/Reference/Properties/border-inline-end-width)

## Syntax

```css
border-inline-end: 1px;
border-inline-end: 2px dashed;
border-inline-end: medium dashed blue;

/* Global values */
border-inline-end: inherit;
border-inline-end: initial;
border-inline-end: revert;
border-inline-end: revert-layer;
border-inline-end: unset;
```

Der physische Rand, dem `border-inline-end` zugeordnet wird, hängt vom Schreibmodus, der Richtung und der Textausrichtung des Elements ab. Er entspricht der Eigenschaft {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} oder {{cssxref("border-left")}}, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

Verwandte Eigenschaften sind {{cssxref("border-block-start")}}, {{cssxref("border-block-end")}} und {{cssxref("border-inline-start")}}, die die anderen Ränder des Elements definieren.

### Werte

Der `border-inline-end` wird mit einem oder mehreren der folgenden Werte angegeben, in beliebiger Reihenfolge:

- `<'border-width'>`
  - : Die Breite des Rands. Siehe {{cssxref("border-width")}}.
- `<'border-style'>`
  - : Der Stil der Randlinie. Siehe {{cssxref("border-style")}}.
- {{CSSXref("&lt;color&gt;")}}
  - : Die Farbe des Rands.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-rl;
  border-inline-end: 5px dashed blue;
}
```

{{EmbedLiveSample("Examples", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft ordnet sich einer der physischen Rand-Eigenschaften zu: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
