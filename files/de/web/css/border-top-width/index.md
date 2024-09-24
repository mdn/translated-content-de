---
title: border-top-width
slug: Web/CSS/border-top-width
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`border-top-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite des oberen Randes eines Elements fest.

{{EmbedInteractiveExample("pages/css/border-top-width.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
border-top-width: thin;
border-top-width: medium;
border-top-width: thick;

/* <length> Werte */
border-top-width: 10em;
border-top-width: 3vmax;
border-top-width: 6px;

/* Globale Schlüsselwörter */
border-top-width: inherit;
border-top-width: initial;
border-top-width: revert;
border-top-width: revert-layer;
border-top-width: unset;
```

### Werte

- `<line-width>`

  - : Definiert die Breite des Randes entweder als explizite nicht-negative {{cssxref("&lt;length&gt;")}} oder als Schlüsselwort. Wenn es ein Schlüsselwort ist, muss es einer der folgenden Werte sein:

    - `thin`
    - `medium`
    - `thick`

> [!NOTE]
> Da die Spezifikation die genaue Dicke, die durch jedes Schlüsselwort bezeichnet wird, nicht definiert, ist das präzise Ergebnis bei der Verwendung von einem dieser Schlüsselwörter implementationsspezifisch. Nichtsdestotrotz folgen sie immer dem Muster `thin ≤ medium ≤ thick`, und die Werte sind innerhalb eines einzigen Dokuments konstant.

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

- Die anderen CSS-Eigenschaften, die mit der Randbreite zu tun haben: {{Cssxref("border-left-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-bottom-width")}}, und {{Cssxref("border-width")}}.
- Die anderen CSS-Eigenschaften, die mit dem oberen Rand zu tun haben: {{Cssxref("border")}}, {{Cssxref("border-top")}}, {{Cssxref("border-top-style")}}, und {{Cssxref("border-top-color")}}.
