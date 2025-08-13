---
title: border-inline-start
slug: Web/CSS/border-inline-start
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

Die **`border-inline-start`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine [Abkürzungseigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) zum Setzen der individuellen logischen inline-start Rand Eigenschaftswerte an einer Stelle im Stylesheet.

{{InteractiveExample("CSS Demo: border-inline-start")}}

```css interactive-example-choice
border-inline-start: solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-start: dashed red;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-start: 1rem solid;
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

Diese Eigenschaft ist eine Abkürzung für die folgenden CSS-Eigenschaften:

- [`border-inline-start-color`](/de/docs/Web/CSS/border-inline-start-color)
- [`border-inline-start-style`](/de/docs/Web/CSS/border-inline-start-style)
- [`border-inline-start-width`](/de/docs/Web/CSS/border-inline-start-width)

## Syntax

```css
border-inline-start: 1px;
border-inline-start: 2px dotted;
border-inline-start: medium dashed green;

/* Global values */
border-inline-start: inherit;
border-inline-start: initial;
border-inline-start: revert;
border-inline-start: revert-layer;
border-inline-start: unset;
```

Der physische Rand, dem `border-inline-start` zugeordnet ist, hängt vom Schreibrichtung, der Richtung und der Textausrichtung des Elements ab. Es entspricht der Eigenschaft {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, oder {{cssxref("border-left")}}, abhängig von den für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}} definierten Werten.

Verwandte Eigenschaften sind {{cssxref("border-block-start")}}, {{cssxref("border-block-end")}}, und {{cssxref("border-inline-end")}}, die die anderen Ränder des Elements definieren.

### Werte

Das `border-inline-start` wird mit einem oder mehreren der folgenden Werte in beliebiger Reihenfolge angegeben:

- `<'border-width'>`
  - : Die Breite des Randes. Siehe {{cssxref("border-width")}}.
- `<'border-style'>`
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
  border-inline-start: 5px dashed blue;
}
```

{{EmbedLiveSample("Examples", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft wird einer der physischen Rand-Eigenschaften zugeordnet: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
