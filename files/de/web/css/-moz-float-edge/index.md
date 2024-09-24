---
title: "-moz-float-edge"
slug: Web/CSS/-moz-float-edge
l10n:
  sourceCommit: 4767ebffd07b627275ae9cac6863b153e3e6746d
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

Die nicht-standardisierte **`-moz-float-edge`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert, ob die Höhe und Breite des Elements den Rand, die Grenze oder die Polsterung einschließen.

## Syntax

```css
/* Schlüsselwortwerte */
-moz-float-edge: content-box;
-moz-float-edge: margin-box;

/* Globale Werte */
-moz-float-edge: inherit;
-moz-float-edge: initial;
-moz-float-edge: unset;
```

### Werte

- `content-box`
  - : Die Höhe und Breite schließen nur den Inhalt ein, nicht jedoch die Polsterung, Grenze oder den Rand.
- `margin-box`
  - : Die Höhe und Breite schließen den Inhalt, die Polsterung, die Grenze und den Rand ein.

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

Nicht Teil irgendeines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Firefox-Fehler 432891](https://bugzil.la/432891)
