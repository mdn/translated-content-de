---
title: border-bottom-width
slug: Web/CSS/border-bottom-width
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`border-bottom-width`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Breite des unteren Rands eines Elements fest.

{{EmbedInteractiveExample("pages/css/border-bottom-width.html")}}

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

  - : Definiert die Breite des Rands, entweder als explizite nichtnegative {{cssxref("&lt;length&gt;")}} oder als Schlüsselwort. Wenn es sich um ein Schlüsselwort handelt, muss es einer der folgenden Werte sein:

    - `thin`
    - `medium`
    - `thick`

> [!NOTE]
> Da die Spezifikation die genaue Dicke, die durch jedes Schlüsselwort bezeichnet wird, nicht definiert, ist das genaue Ergebnis bei der Verwendung eines dieser Begriffe implementierungsspezifisch. Dennoch folgen sie immer dem Muster `thin ≤ medium ≤ thick`, und die Werte sind innerhalb eines Dokuments konstant.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich der Breiten des unteren Rands

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

- Die anderen CSS-Eigenschaften im Zusammenhang mit Randbreiten: {{Cssxref("border-left-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-top-width")}}, und {{Cssxref("border-width")}}.
- Die anderen CSS-Eigenschaften im Zusammenhang mit dem unteren Rand: {{Cssxref("border")}}, {{Cssxref("border-bottom")}}, {{Cssxref("border-bottom-style")}}, und {{Cssxref("border-bottom-color")}}.
