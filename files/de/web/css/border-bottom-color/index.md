---
title: border-bottom-color
slug: Web/CSS/border-bottom-color
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`border-bottom-color`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Farbe des unteren [Rahmens](/de/docs/Web/CSS/border) eines Elements fest. Sie kann auch mit den abgekürzten CSS-Eigenschaften {{cssxref("border-color")}} oder {{cssxref("border-bottom")}} gesetzt werden.

{{InteractiveExample("CSS Demo: border-bottom-color")}}

```css interactive-example-choice
border-bottom-color: red;
```

```css interactive-example-choice
border-bottom-color: #32a1ce;
```

```css interactive-example-choice
border-bottom-color: rgb(170 50 220 / 0.6);
```

```css interactive-example-choice
border-bottom-color: hsl(60 90% 50% / 0.8);
```

```css interactive-example-choice
border-bottom-color: transparent;
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
border-bottom-color: red;
border-bottom-color: #ffbb00;
border-bottom-color: rgb(255 0 0);
border-bottom-color: hsl(100deg 50% 25% / 75%);
border-bottom-color: currentcolor;
border-bottom-color: transparent;

/* Global values */
border-bottom-color: inherit;
border-bottom-color: initial;
border-bottom-color: revert;
border-bottom-color: revert-layer;
border-bottom-color: unset;
```

Die Eigenschaft `border-bottom-color` wird als ein einzelner Wert spezifiziert.

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des unteren Rahmens.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein div mit einem Rahmen

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
  border-bottom-color: red;
  width: auto;
}

.red-text {
  color: red;
}
```

#### Ergebnis

{{EmbedLiveSample('A_div_with_a_border')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Rahmen-bezogenen CSS-Abkürzungseigenschaften: {{Cssxref("border")}}, {{Cssxref("border-bottom")}}, und {{Cssxref("border-color")}}.
- Die Farb-bezogenen CSS-Eigenschaften für die anderen Rahmen: {{Cssxref("border-right-color")}}, {{Cssxref("border-top-color")}}, und {{Cssxref("border-left-color")}}.
- Die anderen Rahmen-bezogenen CSS-Eigenschaften, die auf denselben Rahmen angewendet werden: {{cssxref("border-bottom-style")}} und {{cssxref("border-bottom-width")}}.
- Der Standard-Color-Wert [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword).
