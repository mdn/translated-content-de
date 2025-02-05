---
title: "-moz-orient"
slug: Web/CSS/-moz-orient
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{Non-standard_header}}

Die **`-moz-orient`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Ausrichtung des Elements fest, auf das sie angewendet wird.

## Syntax

Die `-moz-orient`-Eigenschaft wird als einer der Schlüsselwort-Werte aus der unten aufgeführten Liste angegeben.

### Werte

- `inline`
  - : Das Element wird in derselben Richtung wie die Textachse dargestellt: horizontal für horizontale Schreibmodi, vertikal für vertikale Schreibmodi.
- `block`
  - : Das Element wird orthogonal zur Textachse dargestellt: vertikal für horizontale Schreibmodi, horizontal für vertikale Schreibmodi.
- `horizontal`
  - : Das Element wird horizontal dargestellt.
- `vertical`
  - : Das Element wird vertikal dargestellt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

```plain
-moz-orient =
  inline | block | horizontal | vertical
```

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

Nicht Teil eines Standards. Obwohl die Eigenschaft [eingereicht wurde](https://lists.w3.org/Archives/Public/www-style/2014Jun/0396.html) und anfänglich positives Feedback erhalten hat, ist sie bisher nicht Teil einer Spezifikation; derzeit handelt es sich um eine Mozilla-spezifische Erweiterung (das heißt, `-moz-orient`).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("box-orient")}}
