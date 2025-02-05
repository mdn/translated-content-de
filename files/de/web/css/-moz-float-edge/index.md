---
title: "-moz-float-edge"
slug: Web/CSS/-moz-float-edge
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

Die nicht standardisierte **`-moz-float-edge`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, ob die Eigenschaften Höhe und Breite des Elements die Dicke von `margin`, `border` oder `padding` einschließen.

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
  - : Die Eigenschaften Höhe und Breite umfassen den Inhalt, aber nicht das `padding`, den `border` oder den `margin`.
- `margin-box`
  - : Die Eigenschaften Höhe und Breite umfassen den Inhalt sowie `padding`, `border` und `margin`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

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

- [Firefox-Bug 432891](https://bugzil.la/432891)
