---
title: -moz-orient
slug: Web/CSS/-moz-orient
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

Die **`-moz-orient`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Ausrichtung des Elements fest, auf das sie angewendet wird.

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

- `inline`
  - : Das Element wird in derselben Richtung wie die Achse des Textes gerendert: horizontal für horizontale Schreibmodi, vertikal für vertikale Schreibmodi.
- `block`
  - : Das Element wird orthogonal zur Achse des Textes gerendert: vertikal für horizontale Schreibmodi, horizontal für vertikale Schreibmodi.
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

Kein Teil eines Standards. Obwohl es dem [W3C eingereicht wurde](https://lists.w3.org/Archives/Public/www-style/2014Jun/0396.html) und anfangs positives Feedback erhalten hat, ist diese Eigenschaft noch kein Teil einer Spezifikation; derzeit handelt es sich um eine Mozilla-spezifische Erweiterung (also `-moz-orient`).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("box-orient")}}
