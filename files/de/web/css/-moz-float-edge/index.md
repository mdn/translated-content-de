---
title: -moz-float-edge
slug: Web/CSS/-moz-float-edge
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

{{Non-standard_header}}{{Deprecated_Header}}

Die nicht standardisierte **`-moz-float-edge`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, ob die `height`- und `width`-Eigenschaften des Elements die Dicke von `margin`, `border` oder `padding` einschließen.

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
  - : Die `height`- und `width`-Eigenschaften beinhalten den Inhalt, jedoch nicht das `padding`, den `border` oder den `margin`.
- `margin-box`
  - : Die `height`- und `width`-Eigenschaften beinhalten den Inhalt, `padding`, `border` und `margin`.

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

- [Firefox-Fehler 432891](https://bugzil.la/432891)
