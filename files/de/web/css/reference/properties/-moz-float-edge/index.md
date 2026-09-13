---
title: "`-moz-float-edge` CSS property"
short-title: -moz-float-edge
slug: Web/CSS/Reference/Properties/-moz-float-edge
l10n:
  sourceCommit: 22c0b3059ff71d769af670478cc41605581108d1
---

{{Non-standard_header}}

Die nicht standardisierte [CSS](/de/docs/Web/CSS)-Eigenschaft **`-moz-float-edge`** legt fest, ob die Höhen- und Breiteneigenschaften des Elements die Stärke von margin, border oder padding einschließen.

## Syntax

```css
/* Keyword values */
-moz-float-edge: content-box;
-moz-float-edge: margin-box;

/* Global values */
-moz-float-edge: inherit;
-moz-float-edge: initial;
-moz-float-edge: revert;
-moz-float-edge: revert-layer;
-moz-float-edge: unset;
```

### Werte

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `content-box`
  - : Die Höhen- und Breiteneigenschaften schließen den Inhalt ein, aber nicht padding, border oder margin.
- `margin-box`
  - : Die Höhen- und Breiteneigenschaften schließen Inhalt, padding, border und margin ein.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`-moz-float-edge = content-box | margin-box`)}}

## Beispiele

### HTML

```html
<div class="box">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
```

### CSS

```css
.box {
  display: block;
  height: 5px;
  margin: 0.5em auto;
  color: gray;
  -moz-float-edge: margin-box;
  box-sizing: border-box;
}
```

### Ergebnis

{{ EmbedLiveSample('Examples') }}

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Firefox-Bug 432891](https://bugzil.la/432891)
