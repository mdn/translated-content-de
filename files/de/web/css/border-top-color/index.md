---
title: border-top-color
slug: Web/CSS/border-top-color
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`border-top-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe des oberen [Rahmens](/de/docs/Web/CSS/border) eines Elements fest. Sie kann auch mit den abkürzenden CSS-Eigenschaften {{cssxref("border-color")}} oder {{cssxref("border-top")}} gesetzt werden.

{{InteractiveExample("CSS Demo: border-top-color")}}

```css interactive-example-choice
border-top-color: red;
```

```css interactive-example-choice
border-top-color: #32a1ce;
```

```css interactive-example-choice
border-top-color: rgb(170 50 220 / 0.6);
```

```css interactive-example-choice
border-top-color: hsl(60 90% 50% / 0.8);
```

```css interactive-example-choice
border-top-color: transparent;
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
border-top-color: red;
border-top-color: #ffbb00;
border-top-color: rgb(255 0 0);
border-top-color: hsl(100deg 50% 25% / 75%);
border-top-color: currentcolor;
border-top-color: transparent;

/* Global values */
border-top-color: inherit;
border-top-color: initial;
border-top-color: revert;
border-top-color: revert-layer;
border-top-color: unset;
```

Die `border-top-color` Eigenschaft wird als einzelner Wert angegeben.

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des oberen Rahmens.

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
  border-top-color: red;
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

- Die den Rahmen betreffenden CSS-Abkürzungseigenschaften: {{cssxref("border")}}, {{cssxref("border-top")}}, und {{cssxref("border-color")}}.
- Die den anderen Rahmen betreffende Farbeigenschaften: {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, und {{cssxref("border-left-color")}}.
- Die anderen den Rahmen betreffenden CSS-Eigenschaften, die auf denselben Rahmen angewendet werden: {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}.
- Der Standardwert [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword).
