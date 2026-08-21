---
title: "`-moz-float-edge` CSS property"
short-title: -moz-float-edge
slug: Web/CSS/Reference/Properties/-moz-float-edge
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{Non-standard_header}}

Die nicht standardisierte **`-moz-float-edge`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert, ob die Höhe und Breite des Elements die Dicke von Rand, Rahmen oder Auffüllung einschließen.

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
  - : Die Höhe und Breite umfassen den Inhalt, jedoch nicht die Auffüllung, den Rahmen oder den Rand.
- `margin-box`
  - : Die Höhe und Breite umfassen den Inhalt, die Auffüllung, den Rahmen und den Rand.

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

- [Firefox Bug 432891](https://bugzil.la/432891)
