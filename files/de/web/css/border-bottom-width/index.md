---
title: border-bottom-width
slug: Web/CSS/border-bottom-width
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`border-bottom-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite des unteren Rahmens eines Elements fest.

{{EmbedInteractiveExample("pages/css/border-bottom-width.html")}}

## Syntax

```css
/* Schlüsselwort-Werte */
border-bottom-width: thin;
border-bottom-width: medium;
border-bottom-width: thick;

/* <Länge> Werte */
border-bottom-width: 10em;
border-bottom-width: 3vmax;
border-bottom-width: 6px;

/* Globale Schlüsselwörter */
border-bottom-width: inherit;
border-bottom-width: initial;
border-bottom-width: revert;
border-bottom-width: revert-layer;
border-bottom-width: unset;
```

### Werte

- `<line-width>`

  - : Definiert die Breite des Rahmens, entweder als explizite nichtnegative {{cssxref("&lt;length&gt;")}} oder als Schlüsselwort. Falls es ein Schlüsselwort ist, muss es einen der folgenden Werte annehmen:

    - `thin`
    - `medium`
    - `thick`

> [!NOTE]
> Da die Spezifikation die genaue Dicke, die durch jedes Schlüsselwort angegeben wird, nicht definiert, ist das genaue Ergebnis bei deren Verwendung implementierungsspezifisch. Nichtsdestotrotz folgen sie immer dem Muster `thin ≤ medium ≤ thick`, und die Werte sind innerhalb eines einzelnen Dokuments konstant.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich der Breiten des unteren Rahmens

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

- Die anderen rahmenbreitenbezogenen CSS-Eigenschaften: {{Cssxref("border-left-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-top-width")}}, und {{Cssxref("border-width")}}.
- Die anderen unterem Rahmen-bezogenen CSS-Eigenschaften: {{Cssxref("border")}}, {{Cssxref("border-bottom")}}, {{Cssxref("border-bottom-style")}}, und {{Cssxref("border-bottom-color")}}.
