---
title: border-inline
slug: Web/CSS/Reference/Properties/border-inline
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`border-inline`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties), um die einzelnen logischen Eigenschaften der Inline-Grenze an einer Stelle im Stylesheet festzulegen.

{{InteractiveExample("CSS Demo: border-inline")}}

```css interactive-example-choice
border-inline: solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline: dashed red;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline: 1rem solid;
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

Die physischen Grenzen, auf die `border-inline` verweist, hängen vom Schreibmodus, der Ausrichtung und der Textorientierung des Elements ab. Es entspricht den Eigenschaften {{cssxref("border-top")}} und {{cssxref("border-bottom")}} oder {{cssxref("border-right")}} und {{cssxref("border-left")}}, je nach den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

Die Grenzen in der anderen Dimension können mit {{cssxref("border-block")}} festgelegt werden, wodurch {{cssxref("border-block-start")}} und {{cssxref("border-block-end")}} gesetzt werden.

## Bestanteileigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`border-inline-color`](/de/docs/Web/CSS/Reference/Properties/border-inline-color)
- [`border-inline-style`](/de/docs/Web/CSS/Reference/Properties/border-inline-style)
- [`border-inline-width`](/de/docs/Web/CSS/Reference/Properties/border-inline-width)

## Syntax

```css
border-inline: 1px;
border-inline: 2px dotted;
border-inline: medium dashed blue;

/* Global values */
border-inline: inherit;
border-inline: initial;
border-inline: revert;
border-inline: revert-layer;
border-inline: unset;
```

### Werte

Die `border-inline` wird mit einem oder mehreren der folgenden Werte, in beliebiger Reihenfolge, angegeben:

- `<'border-width'>`
  - : Die Breite der Grenze. Siehe {{cssxref("border-width")}}.
- `<'border-style'>`
  - : Die Linienart der Grenze. Siehe {{cssxref("border-style")}}.
- {{CSSXref("&lt;color&gt;")}}
  - : Die Farbe der Grenze.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grenze mit vertikalem Text

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
  border-inline: 5px dashed blue;
}
```

#### Ergebnisse

{{EmbedLiveSample("Border_with_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft entspricht einer der physischen Eigenschaften der Grenze: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
