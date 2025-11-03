---
title: border-right-style
slug: Web/CSS/Reference/Properties/border-right-style
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

Die **`border-right-style`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Linienstil des rechten {{cssxref("border")}} eines Elements fest.

{{InteractiveExample("CSS Demo: border-right-style")}}

```css interactive-example-choice
border-right-style: none;
```

```css interactive-example-choice
border-right-style: dotted;
```

```css interactive-example-choice
border-right-style: dashed;
```

```css interactive-example-choice
border-right-style: solid;
```

```css interactive-example-choice
border-right-style: groove;
```

```css interactive-example-choice
border-right-style: inset;
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
> Die Spezifikation definiert nicht, wie Ränder mit unterschiedlichen Stilen in den Ecken verbunden werden.

## Syntax

```css
/* Keyword values */
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

/* Global values */
border-right-style: inherit;
border-right-style: initial;
border-right-style: revert;
border-right-style: revert-layer;
border-right-style: unset;
```

Die Eigenschaft `border-right-style` wird als ein einzelner {{cssxref("line-style")}}-Schlüsselwortwert angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Randstile

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

/* border-right-style example classes */
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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen stilbezogenen Rand-Eigenschaften: {{Cssxref("border-bottom-style")}}, {{Cssxref("border-left-style")}}, {{Cssxref("border-top-style")}}, und {{Cssxref("border-style")}}.
- Die anderen rechtsbündigen Rand-Eigenschaften: {{Cssxref("border-right")}}, {{Cssxref("border-right-color")}}, und {{Cssxref("border-right-width")}}.
