---
title: -moz-orient
slug: Web/CSS/Reference/Properties/-moz-orient
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Non-standard_header}}

Die **`-moz-orient`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Ausrichtung des Elements an, auf welches sie angewendet wird.

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
  - : Das Element wird in derselben Richtung wie die Achse des Textes dargestellt: horizontal für horizontale Schreibmodi, vertikal für vertikale Schreibmodi.
- `block`
  - : Das Element wird orthogonal zur Achse des Textes dargestellt: vertikal für horizontale Schreibmodi, horizontal für vertikale Schreibmodi.
- `horizontal`
  - : Das Element wird horizontal dargestellt.
- `vertical`
  - : Das Element wird vertikal dargestellt.

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

Nicht Teil eines Standards. Obwohl es dem [W3C vorgelegt](https://lists.w3.org/Archives/Public/www-style/2014Jun/0396.html) wurde und positives Erstfeedback erhalten hat, ist diese Eigenschaft noch nicht Teil einer Spezifikation; aktuell ist dies eine Mozilla-spezifische Erweiterung (also `-moz-orient`).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("box-orient")}}
