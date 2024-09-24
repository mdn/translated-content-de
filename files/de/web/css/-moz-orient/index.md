---
title: "-moz-orient"
slug: Web/CSS/-moz-orient
l10n:
  sourceCommit: 69f98c69898886886f3267a4fa5f450f32133ca1
---

{{CSSRef}}{{Non-standard_header}}

Die **`-moz-orient`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Ausrichtung des Elements an, auf das sie angewendet wird.

## Syntax

Die `-moz-orient` Eigenschaft wird als eines der Schlüsselwortwerte angegeben, die aus der folgenden Liste ausgewählt werden.

### Werte

- `inline`
  - : Das Element wird in derselben Richtung wie die Achse des Textes dargestellt: horizontal für horizontale Schreibrichtungen, vertikal für vertikale Schreibrichtungen.
- `block`
  - : Das Element wird orthogonal zur Achse des Textes dargestellt: vertikal für horizontale Schreibrichtungen, horizontal für vertikale Schreibrichtungen.
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
<p>Das folgende Fortschrittsbarometer ist horizontal (Standard):</p>
<progress max="100" value="75"></progress>

<p>Das folgende Fortschrittsbarometer ist vertikal:</p>
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

Nicht Bestandteil eines Standards. Obwohl [eingereicht](https://lists.w3.org/Archives/Public/www-style/2014Jun/0396.html) an das W3C, mit positivem anfänglichem Feedback, ist diese Eigenschaft derzeit nicht Teil einer Spezifikation; momentan ist dies eine Mozilla-spezifische Erweiterung (das heißt, `-moz-orient`).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("box-orient")}}
