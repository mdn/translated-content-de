---
title: border-bottom-color
slug: Web/CSS/border-bottom-color
l10n:
  sourceCommit: b17ca921175c0a92d21c6c4effbc7fa3dc348a8e
---

{{CSSRef}}

Die **`border-bottom-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe des unteren [Rahmens](/de/docs/Web/CSS/border) eines Elements fest. Sie kann auch mit den Kurzschreibweise CSS-Eigenschaften {{cssxref("border-color")}} oder {{cssxref("border-bottom")}} festgelegt werden.

{{InteractiveExample("CSS Demo: border-bottom-color")}}

```css interactive-example-choice
border-bottom-color: red;
```

```css interactive-example-choice
border-bottom-color: #32a1ce;
```

```css interactive-example-choice
border-bottom-color: rgb(170, 50, 220, 0.6);
```

```css interactive-example-choice
border-bottom-color: hsl(60, 90%, 50%, 0.8);
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

Die `border-bottom-color` Eigenschaft wird als Einzelwert angegeben.

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des unteren Rahmens.

## Offizielle Definition

{{CSSInfo}}

## Offizieller Syntax

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

- Die Rahmen-bezogenen CSS-Kurzschreibweise-Eigenschaften: {{Cssxref("border")}}, {{Cssxref("border-bottom")}}, und {{Cssxref("border-color")}}.
- Die Farb-bezogenen CSS-Eigenschaften für die anderen Rahmen: {{Cssxref("border-right-color")}}, {{Cssxref("border-top-color")}}, und {{Cssxref("border-left-color")}}.
- Die anderen Rahmen-bezogenen CSS-Eigenschaften, die auf denselben Rahmen angewendet werden: {{cssxref("border-bottom-style")}} und {{cssxref("border-bottom-width")}}.
- Der Standardwert [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) für Farben.
