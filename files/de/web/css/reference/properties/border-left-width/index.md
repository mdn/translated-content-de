---
title: border-left-width
slug: Web/CSS/Reference/Properties/border-left-width
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`border-left-width`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Breite des linken Rahmens eines Elements fest.

{{InteractiveExample("CSS Demo: border-left-width")}}

```css interactive-example-choice
border-left-width: thick;
```

```css interactive-example-choice
border-left-width: 2em;
```

```css interactive-example-choice
border-left-width: 4px;
```

```css interactive-example-choice
border-left-width: 2ex;
```

```css interactive-example-choice
border-left-width: 0;
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
  background-color: palegreen;
  color: black;
  border: 0 solid crimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## Syntax

```css
/* Keyword values */
border-left-width: thin;
border-left-width: medium;
border-left-width: thick;

/* <length> values */
border-left-width: 10em;
border-left-width: 3vmax;
border-left-width: 6px;

/* Global keywords */
border-left-width: inherit;
border-left-width: initial;
border-left-width: revert;
border-left-width: revert-layer;
border-left-width: unset;
```

### Werte

- `<line-width>`
  - : Definiert die Breite des Rahmens, entweder als expliziter nicht-negativer {{cssxref("&lt;length&gt;")}} oder als Schlüsselwort. Wenn es ein Schlüsselwort ist, muss es einer der folgenden Werte sein:
    - `thin`
    - `medium`
    - `thick`

> [!NOTE]
> Da die Spezifikation die genaue Dicke, die durch jedes Schlüsselwort angegeben wird, nicht definiert, ist das genaue Ergebnis bei der Verwendung von einem von ihnen implementierungsspezifisch. Sie folgen jedoch immer dem Muster `thin ≤ medium ≤ thick`, und die Werte sind innerhalb eines Dokuments konstant.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von Rahmenbreiten

#### HTML

```html
<div>Element 1</div>
<div>Element 2</div>
```

#### CSS

```css
div {
  border: 1px solid red;
  margin: 1em 0;
}

div:nth-child(1) {
  border-left-width: thick;
}
div:nth-child(2) {
  border-left-width: 2em;
}
```

#### Ergebnis

{{EmbedLiveSample('Comparing_border_widths', '100%')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen CSS-Eigenschaften, die sich auf die Rahmenbreite beziehen: {{Cssxref("border-top-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-bottom-width")}} und {{Cssxref("border-width")}}.
- Die anderen CSS-Eigenschaften, die sich auf den linken Rahmen beziehen: {{Cssxref("border")}}, {{Cssxref("border-left")}}, {{Cssxref("border-left-style")}} und {{Cssxref("border-left-color")}}.
