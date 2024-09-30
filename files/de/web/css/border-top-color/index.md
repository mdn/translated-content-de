---
title: border-top-color
slug: Web/CSS/border-top-color
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`border-top-color`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt die Farbe des oberen [Rahmens](/de/docs/Web/CSS/border) eines Elements. Sie kann auch mit den Kurzschreibweisen {{cssxref("border-color")}} oder {{cssxref("border-top")}} gesetzt werden.

{{EmbedInteractiveExample("pages/css/border-top-color.html")}}

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

Die `border-top-color` Eigenschaft wird als Einzelwert angegeben.

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des oberen Rahmens.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein einfaches div mit einem Rahmen

#### HTML

```html
<div class="mybox">
  <p>
    This is a box with a border around it. Note which side of the box is
    <span class="redtext">red</span>.
  </p>
</div>
```

#### CSS

```css
.mybox {
  border: solid 0.3em gold;
  border-top-color: red;
  width: auto;
}

.redtext {
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

- Die Rahmen-bezogenen CSS-Kurzschreibweisen: {{cssxref("border")}}, {{cssxref("border-top")}}, und {{cssxref("border-color")}}.
- Die farbbezogenen CSS-Eigenschaften für die anderen Rahmen: {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, und {{cssxref("border-left-color")}}.
- Die anderen Rahmen-bezogenen CSS-Eigenschaften, die auf den gleichen Rahmen angewendet werden: {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}.
- Der Standard [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) Farbwert.
