---
title: border-top-style
slug: Web/CSS/border-top-style
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`border-top-style`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Linienstil des oberen {{CSSxRef("border")}} eines Elements fest.

{{EmbedInteractiveExample("pages/css/border-top-style.html")}}

> [!NOTE]
> Die Spezifikation definiert nicht, wie Ränder unterschiedlicher Stile in den Ecken verbunden werden.

## Syntax

```css
/* Keyword values */
border-top-style: none;
border-top-style: hidden;
border-top-style: dotted;
border-top-style: dashed;
border-top-style: solid;
border-top-style: double;
border-top-style: groove;
border-top-style: ridge;
border-top-style: inset;
border-top-style: outset;

/* Global values */
border-top-style: inherit;
border-top-style: initial;
border-top-style: revert;
border-top-style: revert-layer;
border-top-style: unset;
```

Die Eigenschaft `border-top-style` wird als einzelner {{cssxref("line-style")}}-Schlüsselwortwert angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Festlegen von border-top-style

#### HTML

```html
<table>
  <tr>
    <td class="b1">none</td>
    <td class="b2">hidden</td>
    <td class="b3">dotted</td>
    <td class="b4">dashed</td>
  </tr>
  <tr>
    <td class="b5">solid</td>
    <td class="b6">double</td>
    <td class="b7">groove</td>
    <td class="b8">ridge</td>
  </tr>
  <tr>
    <td class="b9">inset</td>
    <td class="b10">outset</td>
  </tr>
</table>
```

#### CSS

```css
/* Define look of the table */
table {
  border-width: 2px;
  background-color: #52e385;
}
tr,
td {
  padding: 3px;
}

/* border-top-style example classes */
.b1 {
  border-top-style: none;
}
.b2 {
  border-top-style: hidden;
}
.b3 {
  border-top-style: dotted;
}
.b4 {
  border-top-style: dashed;
}
.b5 {
  border-top-style: solid;
}
.b6 {
  border-top-style: double;
}
.b7 {
  border-top-style: groove;
}
.b8 {
  border-top-style: ridge;
}
.b9 {
  border-top-style: inset;
}
.b10 {
  border-top-style: outset;
}
```

#### Ergebnis

{{EmbedLiveSample('Examples', 300, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen stilbezogenen Randeigenschaften: {{CSSxRef("border-left-style")}}, {{CSSxRef("border-right-style")}}, {{CSSxRef("border-bottom-style")}}, und {{CSSxRef("border-style")}}.
- Die anderen oberen Randeigenschaften: {{CSSxRef("border-top")}}, {{CSSxRef("border-top-color")}}, und {{CSSxRef("border-top-width")}}.
