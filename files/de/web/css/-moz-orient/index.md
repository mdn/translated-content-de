---
title: -moz-orient
slug: Web/CSS/-moz-orient
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{CSSRef}}{{Non-standard_header}}

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
  - : Das Element wird in der gleichen Richtung wie die Achse des Textes gerendert: horizontal für horizontale Schreibrichtungen, vertikal für vertikale Schreibrichtungen.
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

Teil keiner Norm. Obwohl es [eingereicht](https://lists.w3.org/Archives/Public/www-style/2014Jun/0396.html) bei der W3C wurde und positives anfängliches Feedback erhielt, ist diese Eigenschaft noch nicht Teil einer Spezifikation; derzeit ist dies eine Mozilla-spezifische Erweiterung (d.h. `-moz-orient`).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("box-orient")}}
