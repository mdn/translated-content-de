---
title: -moz-float-edge
slug: Web/CSS/-moz-float-edge
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}{{Deprecated_Header}}

Die nicht standardisierte **`-moz-float-edge`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, ob die Eigenschaften Höhe und Breite des Elements die Dicke des Randes, der Begrenzung oder der Auffüllung einschließen.

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
  - : Die Eigenschaften Höhe und Breite umfassen den Inhalt, nicht jedoch die Auffüllung, die Begrenzung oder den Rand.
- `margin-box`
  - : Die Eigenschaften Höhe und Breite umfassen den Inhalt, die Auffüllung, die Begrenzung und den Rand.

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
  margin: 0.5em auto 0.5em auto;
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
