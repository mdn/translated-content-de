---
title: border-right-width
slug: Web/CSS/border-right-width
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`border-right-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite des rechten Rands eines Elements fest.

{{EmbedInteractiveExample("pages/css/border-right-width.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
border-right-width: thin;
border-right-width: medium;
border-right-width: thick;

/* <length> Werte */
border-right-width: 10em;
border-right-width: 3vmax;
border-right-width: 6px;

/* Globale Schlüsselwörter */
border-right-width: inherit;
border-right-width: initial;
border-right-width: revert;
border-right-width: revert-layer;
border-right-width: unset;
```

### Werte

- `<line-width>`

  - : Definiert die Breite des Rands, entweder als explizite nicht-negative {{cssxref("&lt;length&gt;")}} oder ein Schlüsselwort. Wenn es sich um ein Schlüsselwort handelt, muss es einer der folgenden Werte sein:

    - `thin`
    - `medium`
    - `thick`

> [!NOTE]
> Da die Spezifikation die genaue Dicke, die von jedem Schlüsselwort angegeben wird, nicht definiert, ist das genaue Ergebnis bei Verwendung eines dieser Begriffe implementierungsspezifisch. Dennoch folgen sie immer dem Muster `thin ≤ medium ≤ thick`, und die Werte sind innerhalb eines Dokuments konstant.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich der Randbreiten

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

- Die anderen eigenschaftsbezogenen CSS-Eigenschaften zu Randbreiten: {{Cssxref("border-bottom-width")}}, {{Cssxref("border-left-width")}}, {{Cssxref("border-top-width")}}, und {{Cssxref("border-width")}}.
- Die anderen eigenschaftsbezogenen CSS-Eigenschaften zum rechten Rand: {{Cssxref("border")}}, {{Cssxref("border-right")}}, {{Cssxref("border-right-style")}}, und {{Cssxref("border-right-color")}}.
