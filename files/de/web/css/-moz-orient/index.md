---
title: -moz-orient
slug: Web/CSS/-moz-orient
l10n:
  sourceCommit: 0d43b58f31f30e5dbafd9c117a467e389cc8b176
---

{{CSSRef}}{{Non-standard_header}}

Die **`-moz-orient`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die Ausrichtung des Elements, auf welches sie angewendet wird.

## Syntax

Die `-moz-orient` Eigenschaft wird als eines der Schlüsselwortwerte aus der unten stehenden Liste angegeben.

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

Nicht Teil eines Standards. Obwohl bei der W3C [eingereicht](https://lists.w3.org/Archives/Public/www-style/2014Jun/0396.html) und mit positivem anfänglichem Feedback, ist diese Eigenschaft noch nicht Teil einer Spezifikation; derzeit handelt es sich um eine Mozilla-spezifische Erweiterung (also `-moz-orient`).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("box-orient")}}
