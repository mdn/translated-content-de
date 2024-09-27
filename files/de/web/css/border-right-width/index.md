---
title: border-right-width
slug: Web/CSS/border-right-width
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`border-right-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite des rechten Rahmens eines Elements fest.

{{EmbedInteractiveExample("pages/css/border-right-width.html")}}

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

  - : Definiert die Breite des Rahmens, entweder als explizite, nicht negative {{cssxref("&lt;length&gt;")}} oder als Schlüsselwort. Wenn es ein Schlüsselwort ist, muss es einen der folgenden Werte annehmen:

    - `thin`
    - `medium`
    - `thick`

> [!NOTE]
> Da die Spezifikation nicht die genaue Dicke für jedes Schlüsselwort definiert, ist das genaue Ergebnis bei der Verwendung eines dieser Werte implementierungsspezifisch. Sie folgen jedoch immer dem Muster `thin ≤ medium ≤ thick`, und die Werte sind innerhalb eines Dokuments konstant.

## Formale Definition

{{CSSInfo}}

## Formaler Syntax

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

- Die anderen CSS-Eigenschaften, die sich auf die Rahmenbreite beziehen: {{Cssxref("border-bottom-width")}}, {{Cssxref("border-left-width")}}, {{Cssxref("border-top-width")}}, und {{Cssxref("border-width")}}.
- Die anderen CSS-Eigenschaften, die sich auf den rechten Rahmen beziehen: {{Cssxref("border")}}, {{Cssxref("border-right")}}, {{Cssxref("border-right-style")}}, und {{Cssxref("border-right-color")}}.
