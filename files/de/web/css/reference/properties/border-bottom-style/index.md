---
title: border-bottom-style
slug: Web/CSS/Reference/Properties/border-bottom-style
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`border-bottom-style`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Linienstil des unteren {{cssxref("border")}} eines Elements fest.

{{InteractiveExample("CSS Demo: border-bottom-style")}}

```css interactive-example-choice
border-bottom-style: none;
```

```css interactive-example-choice
border-bottom-style: dotted;
```

```css interactive-example-choice
border-bottom-style: dashed;
```

```css interactive-example-choice
border-bottom-style: solid;
```

```css interactive-example-choice
border-bottom-style: groove;
```

```css interactive-example-choice
border-bottom-style: inset;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eeeeee;
  color: black;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}

body {
  background-color: white;
}
```

> [!NOTE]
> Die Spezifikation definiert nicht, wie sich Rahmen unterschiedlicher Stile in den Ecken verbinden.

## Syntax

```css
/* Keyword values */
border-bottom-style: none;
border-bottom-style: hidden;
border-bottom-style: dotted;
border-bottom-style: dashed;
border-bottom-style: solid;
border-bottom-style: double;
border-bottom-style: groove;
border-bottom-style: ridge;
border-bottom-style: inset;
border-bottom-style: outset;

/* Global values */
border-bottom-style: inherit;
border-bottom-style: initial;
border-bottom-style: revert;
border-bottom-style: revert-layer;
border-bottom-style: unset;
```

Die `border-bottom-style`-Eigenschaft wird als ein einzelnes {{cssxref("line-style")}}-Schlüsselwort angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Demonstrieren aller Rahmenstile

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
  border-width: 3px;
  background-color: #52e385;
}
tr,
td {
  padding: 3px;
}

/* border-bottom-style example classes */
.b1 {
  border-bottom-style: none;
}
.b2 {
  border-bottom-style: hidden;
}
.b3 {
  border-bottom-style: dotted;
}
.b4 {
  border-bottom-style: dashed;
}
.b5 {
  border-bottom-style: solid;
}
.b6 {
  border-bottom-style: double;
}
.b7 {
  border-bottom-style: groove;
}
.b8 {
  border-bottom-style: ridge;
}
.b9 {
  border-bottom-style: inset;
}
.b10 {
  border-bottom-style: outset;
}
```

#### Ergebnis

{{ EmbedLiveSample('Demonstrating_all_border_styles', 300, 200) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen stilbezogenen Rahmen-Eigenschaften: {{ Cssxref("border-left-style") }}, {{ Cssxref("border-right-style") }}, {{ Cssxref("border-top-style") }} und {{ Cssxref("border-style") }}.
- Die anderen eigenschaftenbezogenen Rahmen-Eigenschaften: {{ Cssxref("border-bottom") }}, {{ Cssxref("border-bottom-color") }} und {{ Cssxref("border-bottom-width") }}.
