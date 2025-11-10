---
title: -moz-float-edge
slug: Web/CSS/Reference/Properties/-moz-float-edge
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Non-standard_header}}{{Deprecated_Header}}

Die nicht standardisierte **`-moz-float-edge`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, ob die Höhe und Breite eines Elements die Dicke von Margin, Border oder Padding einschließen.

## Syntax

```css
/* Keyword values */
-moz-float-edge: content-box;
-moz-float-edge: margin-box;

/* Global values */
-moz-float-edge: inherit;
-moz-float-edge: initial;
-moz-float-edge: unset;
```

### Werte

- `content-box`
  - : Die Eigenschaften Höhe und Breite umfassen den Inhalt, aber nicht das Padding, die Border oder den Margin.
- `margin-box`
  - : Die Eigenschaften Höhe und Breite umfassen den Inhalt, das Padding, die Border und den Margin.

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

Gehört zu keinem Standard.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Firefox Bug 432891](https://bugzil.la/432891)
