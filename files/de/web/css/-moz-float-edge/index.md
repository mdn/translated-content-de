---
title: "-moz-float-edge"
slug: Web/CSS/-moz-float-edge
l10n:
  sourceCommit: 4767ebffd07b627275ae9cac6863b153e3e6746d
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

Die nicht standardisierte **`-moz-float-edge`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, ob die `height` und `width` Eigenschaften des Elements die Dicke von `margin`, `border` oder `padding` einschließen.

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
  - : Die `height` und `width` Eigenschaften schließen den Inhalt ein, jedoch nicht das `padding`, den `border` oder den `margin`.
- `margin-box`
  - : Die `height` und `width` Eigenschaften schließen den Inhalt, das `padding`, den `border` und den `margin` ein.

## Formale Definition

{{CSSInfo}}

## Formaler Syntax

```plain
-moz-float-edge =
  content-box | margin-box
```

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
