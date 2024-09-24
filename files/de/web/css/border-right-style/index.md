---
title: border-right-style
slug: Web/CSS/border-right-style
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`border-right-style`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Linienstil des rechten {{cssxref("border")}} eines Elements fest.

{{EmbedInteractiveExample("pages/css/border-right-style.html")}}

> [!NOTE]
> Die Spezifikation definiert nicht, wie Ecken verbunden werden, wenn die Begrenzungen unterschiedliche Stile haben.

## Syntax

```css
/* Schlüsselwort-Werte */
border-right-style: none;
border-right-style: hidden;
border-right-style: dotted;
border-right-style: dashed;
border-right-style: solid;
border-right-style: double;
border-right-style: groove;
border-right-style: ridge;
border-right-style: inset;
border-right-style: outset;

/* Globale Werte */
border-right-style: inherit;
border-right-style: initial;
border-right-style: revert;
border-right-style: revert-layer;
border-right-style: unset;
```

Die `border-right-style` Eigenschaft wird als einzelnes {{cssxref("line-style")}} Schlüsselwort angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Randstile

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
/* Erscheinungsbild der Tabelle definieren */
table {
  border-width: 2px;
  background-color: #52e385;
}
tr,
td {
  padding: 3px;
}

/* border-right-style Beispielklassen */
.b1 {
  border-right-style: none;
}
.b2 {
  border-right-style: hidden;
}
.b3 {
  border-right-style: dotted;
}
.b4 {
  border-right-style: dashed;
}
.b5 {
  border-right-style: solid;
}
.b6 {
  border-right-style: double;
}
.b7 {
  border-right-style: groove;
}
.b8 {
  border-right-style: ridge;
}
.b9 {
  border-right-style: inset;
}
.b10 {
  border-right-style: outset;
}
```

#### Ergebnis

{{ EmbedLiveSample('Border_styles') }}

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Die anderen stilbezogenen Rand-Eigenschaften: {{Cssxref("border-bottom-style")}}, {{Cssxref("border-left-style")}}, {{Cssxref("border-top-style")}}, und {{Cssxref("border-style")}}.
- Die anderen rechte Rand-Eigenschaften: {{Cssxref("border-right")}}, {{Cssxref("border-right-color")}}, und {{Cssxref("border-right-width")}}.
