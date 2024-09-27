---
title: border-top-width
slug: Web/CSS/border-top-width
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`border-top-width`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt die Breite des oberen Rahmens eines Elements fest.

{{EmbedInteractiveExample("pages/css/border-top-width.html")}}

## Syntax

```css
/* Keyword values */
border-top-width: thin;
border-top-width: medium;
border-top-width: thick;

/* <length> values */
border-top-width: 10em;
border-top-width: 3vmax;
border-top-width: 6px;

/* Global keywords */
border-top-width: inherit;
border-top-width: initial;
border-top-width: revert;
border-top-width: revert-layer;
border-top-width: unset;
```

### Werte

- `<line-width>`

  - : Definiert die Breite des Rahmens entweder als explizite nichtnegative {{cssxref("&lt;length&gt;")}} oder als Schlüsselwort. Wenn es sich um ein Schlüsselwort handelt, muss es einer der folgenden Werte sein:

    - `thin`
    - `medium`
    - `thick`

> [!NOTE]
> Da die Spezifikation die genaue Dicke, die durch jedes Schlüsselwort angegeben wird, nicht definiert, ist das genaue Ergebnis bei Verwendung eines dieser Werte implementationsspezifisch. Dennoch folgen sie immer dem Muster `thin ≤ medium ≤ thick`, und die Werte sind innerhalb eines einzelnen Dokuments konstant.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### HTML

```html
<div>Element 1</div>
<div>Element 2</div>
```

### CSS

```css
div {
  border: 1px solid red;
  margin: 1em 0;
}

div:nth-child(1) {
  border-top-width: thick;
}
div:nth-child(2) {
  border-top-width: 2em;
}
```

### Ergebnis

{{EmbedLiveSample('Examples', '100%')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen CSS-Eigenschaften im Zusammenhang mit der Rahmenbreite: {{Cssxref("border-left-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-bottom-width")}}, und {{Cssxref("border-width")}}.
- Die anderen CSS-Eigenschaften im Zusammenhang mit dem oberen Rahmen: {{Cssxref("border")}}, {{Cssxref("border-top")}}, {{Cssxref("border-top-style")}}, und {{Cssxref("border-top-color")}}.
