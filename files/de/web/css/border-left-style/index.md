---
title: border-left-style
slug: Web/CSS/border-left-style
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`border-left-style`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Linienstil des linken {{cssxref("border")}} eines Elements fest.

{{EmbedInteractiveExample("pages/css/border-left-style.html")}}

> [!NOTE]
> Die Spezifikation definiert nicht, wie Grenzen unterschiedlichen Stils in den Ecken verbunden werden.

## Syntax

```css
/* Schlüsselwortwerte */
border-left-style: none;
border-left-style: hidden;
border-left-style: dotted;
border-left-style: dashed;
border-left-style: solid;
border-left-style: double;
border-left-style: groove;
border-left-style: ridge;
border-left-style: inset;
border-left-style: outset;

/* Globale Werte */
border-left-style: inherit;
border-left-style: initial;
border-left-style: revert;
border-left-style: revert-layer;
border-left-style: unset;
```

Die `border-left-style` Eigenschaft wird als ein einzelnes {{cssxref("line-style")}} Schlüsselwort angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von border-left-style

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
/* Definiere das Aussehen der Tabelle */
table {
  border-width: 2px;
  background-color: #52e385;
}
tr,
td {
  padding: 3px;
}

/* border-left-style Beispielklassen */
.b1 {
  border-left-style: none;
}
.b2 {
  border-left-style: hidden;
}
.b3 {
  border-left-style: dotted;
}
.b4 {
  border-left-style: dashed;
}
.b5 {
  border-left-style: solid;
}
.b6 {
  border-left-style: double;
}
.b7 {
  border-left-style: groove;
}
.b8 {
  border-left-style: ridge;
}
.b9 {
  border-left-style: inset;
}
.b10 {
  border-left-style: outset;
}
```

#### Ergebnis

{{ EmbedLiveSample('Examples', 300, 200) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen stilbezogenen Rand-Eigenschaften: {{Cssxref("border-bottom-style")}}, {{Cssxref("border-right-style")}}, {{Cssxref("border-top-style")}}, und {{Cssxref("border-style")}}.
- Die anderen linken Rand-Eigenschaften: {{Cssxref("border-left")}}, {{Cssxref("border-left-color")}}, und {{Cssxref("border-left-width")}}.