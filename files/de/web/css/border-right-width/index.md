---
title: border-right-width
slug: Web/CSS/border-right-width
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`border-right-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite des rechten Rahmens eines Elements fest.

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
  color: #000;
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
  - : Definiert die Breite des Rahmens, entweder als explizite nicht-negative {{cssxref("&lt;length&gt;")}} oder als Schlüsselwort. Wenn es ein Schlüsselwort ist, muss es einer der folgenden Werte sein:
    - `thin`
    - `medium`
    - `thick`

> [!NOTE]
> Da die Spezifikation die genaue Stärke, die durch jedes Schlüsselwort angegeben wird, nicht definiert, ist das genaue Ergebnis bei der Verwendung eines dieser Begriffe implementierungsspezifisch. Nichtsdestotrotz folgen sie immer dem Muster `thin ≤ medium ≤ thick`, und die Werte sind innerhalb eines Dokuments konstant.

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

- Die anderen Rahmenbreite-bezogenen CSS-Eigenschaften: {{Cssxref("border-bottom-width")}}, {{Cssxref("border-left-width")}}, {{Cssxref("border-top-width")}}, und {{Cssxref("border-width")}}.
- Die anderen rechten Rahmen-bezogenen CSS-Eigenschaften: {{Cssxref("border")}}, {{Cssxref("border-right")}}, {{Cssxref("border-right-style")}}, und {{Cssxref("border-right-color")}}.
