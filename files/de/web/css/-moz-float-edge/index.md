---
title: "-moz-float-edge"
slug: Web/CSS/-moz-float-edge
l10n:
  sourceCommit: 4767ebffd07b627275ae9cac6863b153e3e6746d
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

Die nicht-standardisierte **`-moz-float-edge`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob die Eigenschaften Höhe und Breite des Elements die Dicke von Rand, Rahmen oder Auffüllung einschließen.

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
  - : Die Eigenschaften Höhe und Breite beinhalten den Inhalt, jedoch nicht die Auffüllung, den Rahmen oder den Rand.
- `margin-box`
  - : Die Eigenschaften Höhe und Breite beinhalten den Inhalt, die Auffüllung, den Rahmen und den Rand.

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

- [Firefox Bug 432891](https://bugzil.la/432891)
