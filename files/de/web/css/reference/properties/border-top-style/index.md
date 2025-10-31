---
title: border-top-style
slug: Web/CSS/Reference/Properties/border-top-style
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`border-top-style`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Linienstil des oberen {{CSSxRef("border")}} eines Elements fest.

{{InteractiveExample("CSS Demo: border-top-style")}}

```css interactive-example-choice
border-top-style: none;
```

```css interactive-example-choice
border-top-style: dotted;
```

```css interactive-example-choice
border-top-style: dashed;
```

```css interactive-example-choice
border-top-style: solid;
```

```css interactive-example-choice
border-top-style: groove;
```

```css interactive-example-choice
border-top-style: inset;
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
> Die Spezifikation definiert nicht, wie Grenzen mit unterschiedlichen Stilen an den Ecken verbunden werden.

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

Die `border-top-style` Eigenschaft wird als ein einziges {{cssxref("line-style")}} Schlüsselwort angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Festlegung von border-top-style

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

- Die anderen stilbezogenen Rand-Eigenschaften: {{CSSxRef("border-left-style")}}, {{CSSxRef("border-right-style")}}, {{CSSxRef("border-bottom-style")}}, und {{CSSxRef("border-style")}}.
- Die anderen mit dem oberen Rand zusammenhängenden Eigenschaften: {{CSSxRef("border-top")}}, {{CSSxRef("border-top-color")}}, und {{CSSxRef("border-top-width")}}.
