---
title: border-left-style
slug: Web/CSS/Reference/Properties/border-left-style
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

Die **`border-left-style`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Linienstil des linken {{cssxref("border")}} eines Elements fest.

> [!NOTE]
> Die Spezifikation definiert nicht, wie sich Begrenzungen unterschiedlicher Stile an den Ecken verbinden.

{{InteractiveExample("CSS Demo: border-left-style")}}

```css interactive-example-choice
border-left-style: none;
```

```css interactive-example-choice
border-left-style: dotted;
```

```css interactive-example-choice
border-left-style: dashed;
```

```css interactive-example-choice
border-left-style: solid;
```

```css interactive-example-choice
border-left-style: groove;
```

```css interactive-example-choice
border-left-style: inset;
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

## Syntax

```css
/* Keyword values */
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

/* Global values */
border-left-style: inherit;
border-left-style: initial;
border-left-style: revert;
border-left-style: revert-layer;
border-left-style: unset;
```

Die `border-left-style` Eigenschaft wird als einzelnes {{cssxref("line-style")}} Schlüsselwortwert angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von border-left-style

#### HTML

```html
<table>
  <tbody>
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
  </tbody>
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

/* border-left-style example classes */
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

- Die anderen stilbezogenen Rahmen-Eigenschaften: {{Cssxref("border-bottom-style")}}, {{Cssxref("border-right-style")}}, {{Cssxref("border-top-style")}}, und {{Cssxref("border-style")}}.
- Die anderen linke Rand-bezogenen Eigenschaften: {{Cssxref("border-left")}}, {{Cssxref("border-left-color")}}, und {{Cssxref("border-left-width")}}.
