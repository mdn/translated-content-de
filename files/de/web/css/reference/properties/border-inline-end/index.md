---
title: "`border-inline-end` CSS-Eigenschaft"
short-title: border-inline-end
slug: Web/CSS/Reference/Properties/border-inline-end
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`border-inline-end`** [CSS](/de/docs/Web/CSS) [Kurznotation](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)-Eigenschaft setzt die jeweiligen logischen inline-end Rand-Eigenschaftswerte an einer einzigen Stelle im Stylesheet.

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

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurznotation für die folgenden CSS-Eigenschaften:

- {{cssxref("border-inline-end-color")}}
- {{cssxref("border-inline-end-style")}}
- {{cssxref("border-inline-end-width")}}

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

Der physische Rand, auf den `border-inline-end` abgebildet wird, hängt vom Schreibmodus, der Richtung und der Textausrichtung des Elements ab. Er korrespondiert mit der {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} oder {{cssxref("border-left")}} Eigenschaft, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

Verwandte Eigenschaften sind {{cssxref("border-block-start")}}, {{cssxref("border-block-end")}}, und {{cssxref("border-inline-start")}}, die die anderen Ränder des Elements definieren.

### Werte

Die `border-inline-end` wird mit einem oder mehreren der folgenden, in beliebiger Reihenfolge, angegeben:

- {{cssxref("&lt;line-width&gt;")}}
  - : Die Breite des Randes. Siehe {{cssxref("border-width")}}.
- {{cssxref("&lt;line-style&gt;")}}
  - : Der Linienstil des Randes. Siehe {{cssxref("border-style")}}.
- {{CSSXref("&lt;color&gt;")}}
  - : Die Farbe des Randes.

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

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- Diese Eigenschaft wird einer der physischen Rand-Eigenschaften zugeordnet: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
