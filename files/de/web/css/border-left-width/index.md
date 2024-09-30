---
title: border-left-width
slug: Web/CSS/border-left-width
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`border-left-width`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Breite des linken Rahmens eines Elements fest.

{{EmbedInteractiveExample("pages/css/border-left-width.html")}}

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

  - : Definiert die Breite des Rahmens, entweder als explizite nicht-negative {{cssxref("&lt;length&gt;")}} oder als Schlüsselwort. Wenn es ein Schlüsselwort ist, muss es einen der folgenden Werte haben:

    - `thin`
    - `medium`
    - `thick`

> [!NOTE]
> Da die Spezifikation die exakte Dicke, die von jedem Schlüsselwort bezeichnet wird, nicht definiert, ist das genaue Ergebnis bei der Verwendung eines dieser Werte implementierungsspezifisch. Nichtsdestotrotz folgen sie immer dem Muster `thin ≤ medium ≤ thick`, und die Werte sind innerhalb eines einzelnen Dokuments konstant.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich der Rahmenbreiten

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

- Die anderen CSS-Eigenschaften, die sich auf die Rahmenbreite beziehen: {{Cssxref("border-top-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-bottom-width")}}, und {{Cssxref("border-width")}}.
- Die anderen CSS-Eigenschaften, die sich auf den linken Rahmen beziehen: {{Cssxref("border")}}, {{Cssxref("border-left")}}, {{Cssxref("border-left-style")}}, und {{Cssxref("border-left-color")}}.
