---
title: "-moz-orient"
slug: Web/CSS/-moz-orient
l10n:
  sourceCommit: 69f98c69898886886f3267a4fa5f450f32133ca1
---

{{CSSRef}}{{Non-standard_header}}

Die **`-moz-orient`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Ausrichtung des Elements fest, auf das sie angewendet wird.

## Syntax

Die `-moz-orient`-Eigenschaft wird als einer der Schlüsselwortwerte aus der unten stehenden Liste angegeben.

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

Nicht Teil eines Standards. Obwohl [eingereicht](https://lists.w3.org/Archives/Public/www-style/2014Jun/0396.html) bei der W3C, mit positiver anfänglicher Rückmeldung, ist diese Eigenschaft noch nicht Teil einer Spezifikation; derzeit ist dies eine Mozilla-spezifische Erweiterung (das heißt, `-moz-orient`).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("box-orient")}}
