---
title: border-block
slug: Web/CSS/Reference/Properties/border-block
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`border-block`**-Eigenschaft von [CSS](/de/docs/Web/CSS) ist eine [Shorthand-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) zum Setzen der einzelnen logischen Blockrand-Eigenschaften an einer einzigen Stelle im Stylesheet.

{{InteractiveExample("CSS Demo: border-block")}}

```css interactive-example-choice
border-block: solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block: dashed red;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block: 1rem solid;
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

`border-block` kann verwendet werden, um die Werte für eine oder mehrere der Eigenschaften {{cssxref("border-block-width")}}, {{cssxref("border-block-style")}} und {{cssxref("border-block-color")}} zu setzen, und die Start- und Endwerte in der Blockdimension gleichzeitig zu definieren. Die physischen Ränder, auf die sie abgebildet werden, hängen von der Schreibrichtung, der Richtung und der Textausrichtung des Elements ab. Sie entspricht den Eigenschaften {{cssxref("border-top")}} und {{cssxref("border-bottom")}} oder {{cssxref("border-right")}}, und {{cssxref("border-left")}} abhängig von den für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definierten Werten.

Die Ränder in der anderen Dimension können mit {{cssxref("border-inline")}}, welches {{cssxref("border-inline-start")}} und {{cssxref("border-inline-end")}} setzt, festgelegt werden.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`border-block-color`](/de/docs/Web/CSS/Reference/Properties/border-block-color)
- [`border-block-style`](/de/docs/Web/CSS/Reference/Properties/border-block-style)
- [`border-block-width`](/de/docs/Web/CSS/Reference/Properties/border-block-width)

## Syntax

```css
border-block: 1px;
border-block: 2px dotted;
border-block: medium dashed blue;

/* Global values */
border-block: inherit;
border-block: initial;
border-block: revert;
border-block: revert-layer;
border-block: unset;
```

### Werte

`border-block` wird mit einem oder mehreren der folgenden in beliebiger Reihenfolge angegeben:

- `<'border-width'>`
  - : Die Breite des Rahmens. Siehe {{cssxref("border-width")}}.
- `<'border-style'>`
  - : Der Linienstil des Rahmens. Siehe {{cssxref("border-style")}}.
- {{CSSXref("&lt;color&gt;")}}
  - : Die Farbe des Rahmens.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Rahmen mit vertikalem Text

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
  writing-mode: vertical-rl;
  border-block: 5px dashed blue;
}
```

#### Ergebnisse

{{EmbedLiveSample("Border_with_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- Diese Eigenschaft wird einer der physischen Rand-Eigenschaften zugeordnet: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
