---
title: border-right-color
slug: Web/CSS/border-right-color
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`border-right-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe des rechten [Rahmens](/de/docs/Web/CSS/border) eines Elements fest. Sie kann auch mit den zusammengesetzten CSS-Eigenschaften {{cssxref("border-color")}} oder {{cssxref("border-right")}} festgelegt werden.

{{InteractiveExample("CSS Demo: border-right-color")}}

```css interactive-example-choice
border-right-color: red;
```

```css interactive-example-choice
border-right-color: #32a1ce;
```

```css interactive-example-choice
border-right-color: rgb(170, 50, 220, 0.6);
```

```css interactive-example-choice
border-right-color: hsl(60, 90%, 50%, 0.8);
```

```css interactive-example-choice
border-right-color: transparent;
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
  background-color: #eee;
  color: #000;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## Syntax

```css
/* <color> values */
border-right-color: red;
border-right-color: #ffbb00;
border-right-color: rgb(255 0 0);
border-right-color: hsl(100deg 50% 25% / 75%);
border-right-color: currentcolor;
border-right-color: transparent;

/* Global values */
border-right-color: inherit;
border-right-color: initial;
border-right-color: revert;
border-right-color: revert-layer;
border-right-color: unset;
```

Die `border-right-color` Eigenschaft wird als Einzelwert angegeben.

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des rechten Rahmens.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein einfaches div mit einem Rahmen

#### HTML

```html
<div class="my-box">
  <p>
    This is a box with a border around it. Note which side of the box is
    <span class="red-text">red</span>.
  </p>
</div>
```

#### CSS

```css
.my-box {
  border: solid 0.3em gold;
  border-right-color: red;
  width: auto;
}

.red-text {
  color: red;
}
```

#### Ergebnis

{{EmbedLiveSample('A_simple_div_with_a_border')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Border-bezogenen CSS-Kurzschreibweisen: {{cssxref("border")}}, {{cssxref("border-right")}} und {{cssxref("border-color")}}.
- Die Farb-bezogenen CSS-Eigenschaften für die anderen Rahmen: {{cssxref("border-left-color")}}, {{cssxref("border-bottom-color")}} und {{cssxref("border-top-color")}}.
- Die anderen Border-bezogenen CSS-Eigenschaften, die auf denselben Rahmen angewendet werden: {{cssxref("border-right-style")}} und {{cssxref("border-right-width")}}.
- Der Standard-Color-Wert [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword).
