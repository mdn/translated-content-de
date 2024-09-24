---
title: border-right-color
slug: Web/CSS/border-right-color
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`border-right-color`**-[CSS](/de/docs/Web/CSS)-Eigenschaft setzt die Farbe des rechten [Rahmens](/de/docs/Web/CSS/border) eines Elements. Sie kann auch mit den verkürzten CSS-Eigenschaften {{cssxref("border-color")}} oder {{cssxref("border-right")}} festgelegt werden.

{{EmbedInteractiveExample("pages/css/border-right-color.html")}}

## Syntax

```css
/* <color> Werte */
border-right-color: red;
border-right-color: #ffbb00;
border-right-color: rgb(255 0 0);
border-right-color: hsl(100deg 50% 25% / 75%);
border-right-color: currentcolor;
border-right-color: transparent;

/* Globale Werte */
border-right-color: inherit;
border-right-color: initial;
border-right-color: revert;
border-right-color: revert-layer;
border-right-color: unset;
```

Die Eigenschaft `border-right-color` wird als Einzelwert angegeben.

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
<div class="mybox">
  <p>
    Dies ist ein Kasten mit einem Rahmen darum. Beachten Sie, welche Seite des Kastens
    <span class="redtext">rot</span> ist.
  </p>
</div>
```

#### CSS

```css
.mybox {
  border: solid 0.3em gold;
  border-right-color: red;
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

- Die rahmenbezogenen CSS-Kurzform-Eigenschaften: {{cssxref("border")}}, {{cssxref("border-right")}}, und {{cssxref("border-color")}}.
- Die farbbezogenen CSS-Eigenschaften für die anderen Rahmen: {{cssxref("border-left-color")}}, {{cssxref("border-bottom-color")}}, und {{cssxref("border-top-color")}}.
- Die anderen rahmenbezogenen CSS-Eigenschaften, die auf denselben Rahmen angewendet werden: {{cssxref("border-right-style")}} und {{cssxref("border-right-width")}}.
- Der Standardwert [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword).
