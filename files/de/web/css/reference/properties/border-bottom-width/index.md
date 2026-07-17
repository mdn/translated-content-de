---
title: "`border-bottom-width` CSS property"
short-title: border-bottom-width
slug: Web/CSS/Reference/Properties/border-bottom-width
l10n:
  sourceCommit: 0c62b082755017d0773ecaaee7e74efd5e066d0b
---

Die **`border-bottom-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite des unteren Rands eines Elements fest.

{{InteractiveExample("CSS Demo: border-bottom-width")}}

```css interactive-example-choice
border-bottom-width: thick;
```

```css interactive-example-choice
border-bottom-width: 2em;
```

```css interactive-example-choice
border-bottom-width: 4px;
```

```css interactive-example-choice
border-bottom-width: 2ex;
```

```css interactive-example-choice
border-bottom-width: 0;
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
border-bottom-width: thin;
border-bottom-width: medium;
border-bottom-width: thick;

/* <length> values */
border-bottom-width: 10em;
border-bottom-width: 3vmax;
border-bottom-width: 6px;

/* Global keywords */
border-bottom-width: inherit;
border-bottom-width: initial;
border-bottom-width: revert;
border-bottom-width: revert-layer;
border-bottom-width: unset;
```

### Werte

- `<line-width>`
  - : Definiert die Breite des Rands entweder als explizite nicht-negative {{cssxref("&lt;length&gt;")}} oder als Schlüsselwort. Wenn es sich um ein Schlüsselwort handelt, muss es einen der folgenden Werte haben:
    - `thin`
      - Entspricht `1px`.
    - `medium`
      - Entspricht `3px`.
    - `thick`
      - Entspricht `5px`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich verschiedener Breiten von unteren Rändern

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
  border-bottom-width: thick;
}
div:nth-child(2) {
  border-bottom-width: 2em;
}
```

#### Ergebnis

{{EmbedLiveSample('Comparing_bottom_border_widths', '100%')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen auf Randbreiten bezogenen CSS-Eigenschaften: {{Cssxref("border-left-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-top-width")}}, und {{Cssxref("border-width")}}.
- Die anderen auf den unteren Rand bezogenen CSS-Eigenschaften: {{Cssxref("border")}}, {{Cssxref("border-bottom")}}, {{Cssxref("border-bottom-style")}}, und {{Cssxref("border-bottom-color")}}.
