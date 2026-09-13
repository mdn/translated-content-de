---
title: "`-moz-orient` CSS property"
short-title: -moz-orient
slug: Web/CSS/Reference/Properties/-moz-orient
l10n:
  sourceCommit: 22c0b3059ff71d769af670478cc41605581108d1
---

{{Non-standard_header}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`-moz-orient`** legt die Ausrichtung des Elements fest, auf das sie angewendet wird.

## Syntax

```css
-moz-orient: inline;

/* Global values */
-moz-orient: inherit;
-moz-orient: initial;
-moz-orient: revert;
-moz-orient: revert-layer;
-moz-orient: unset;
```

### Werte

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `inline`
  - : Das Element wird in derselben Richtung wie die Achse des Textes gerendert: horizontal für horizontale Schreibrichtungen, vertikal für vertikale Schreibrichtungen.
- `block`
  - : Das Element wird orthogonal zur Achse des Textes gerendert: vertikal für horizontale Schreibrichtungen, horizontal für vertikale Schreibrichtungen.
- `horizontal`
  - : Das Element wird horizontal gerendert.
- `vertical`
  - : Das Element wird vertikal gerendert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`-moz-orient = inline | block | horizontal | vertical`)}}

## Beispiele

### HTML

```html
<p>The following progress meter is horizontal (the default):</p>
<progress max="100" value="75"></progress>

<p>The following progress meter is vertical:</p>
<progress class="vert" max="100" value="75"></progress>
```

### CSS

```css
.vert {
  -moz-orient: vertical;
  width: 16px;
  height: 150px;
}
```

### Ergebnis

{{EmbedLiveSample("Examples","200","360")}}

## Spezifikationen

Nicht Teil eines Standards. Obwohl diese Eigenschaft mit [positivem anfänglichem Feedback](https://lists.w3.org/Archives/Public/www-style/2014Jun/0396.html) beim W3C eingereicht wurde, ist sie noch nicht Teil einer Spezifikation; derzeit handelt es sich um eine Mozilla-spezifische Erweiterung (das heißt `-moz-orient`).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("box-orient")}}
