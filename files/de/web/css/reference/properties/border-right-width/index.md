---
title: border-right-width
slug: Web/CSS/Reference/Properties/border-right-width
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`border-right-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite des rechten Rands eines Elements fest.

{{InteractiveExample("CSS Demo: border-right-width")}}

```css interactive-example-choice
border-right-width: thick;
```

```css interactive-example-choice
border-right-width: 2em;
```

```css interactive-example-choice
border-right-width: 4px;
```

```css interactive-example-choice
border-right-width: 2ex;
```

```css interactive-example-choice
border-right-width: 0;
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
border-right-width: thin;
border-right-width: medium;
border-right-width: thick;

/* <length> values */
border-right-width: 10em;
border-right-width: 3vmax;
border-right-width: 6px;

/* Global keywords */
border-right-width: inherit;
border-right-width: initial;
border-right-width: revert;
border-right-width: revert-layer;
border-right-width: unset;
```

### Werte

- `<line-width>`
  - : Definiert die Breite des Randes, entweder als explizite nicht-negative {{cssxref("&lt;length&gt;")}} oder als Schlüsselwort. Wenn es sich um ein Schlüsselwort handelt, muss es einer der folgenden Werte sein:
    - `thin`
    - `medium`
    - `thick`

> [!NOTE]
> Da die Spezifikation die genaue Dicke, die durch jedes Schlüsselwort angegeben wird, nicht definiert, ist das genaue Ergebnis bei der Verwendung von einem dieser Begriffe implementierungsspezifisch. Dennoch folgen sie immer dem Muster `thin ≤ medium ≤ thick`, und die Werte sind innerhalb eines Dokuments konstant.

## Offizielle Definition

{{CSSInfo}}

## Offizielle Syntax

{{csssyntax}}

## Beispiele

### Vergleich von Randbreiten

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
  border-right-width: thick;
}
div:nth-child(2) {
  border-right-width: 2em;
}
```

#### Ergebnis

{{EmbedLiveSample('Comparing_border_widths', '100%')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen CSS-Eigenschaften, die sich auf die Randbreite beziehen: {{Cssxref("border-bottom-width")}}, {{Cssxref("border-left-width")}}, {{Cssxref("border-top-width")}}, und {{Cssxref("border-width")}}.
- Die anderen CSS-Eigenschaften, die sich auf den rechten Rand beziehen: {{Cssxref("border")}}, {{Cssxref("border-right")}}, {{Cssxref("border-right-style")}}, und {{Cssxref("border-right-color")}}.
