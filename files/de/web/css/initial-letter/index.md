---
title: initial-letter
slug: Web/CSS/initial-letter
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Die CSS-Eigenschaft `initial-letter` legt das Styling für eingezogene, erhobene und versenkte Initialbuchstaben fest.

## Syntax

```css
/* Schlüsselwort-Werte */
initial-letter: normal;

/* Numerische Werte */
initial-letter: 1.5; /* Initialbuchstabe nimmt 1,5 Zeilen ein */
initial-letter: 3; /* Initialbuchstabe nimmt 3 Zeilen ein */
initial-letter: 3 2; /* Initialbuchstabe nimmt 3 Zeilen ein und
                           versinkt 2 Zeilen */

/* Globale Werte */
initial-letter: inherit;
initial-letter: initial;
initial-letter: revert;
initial-letter: revert-layer;
initial-letter: unset;
```

Der Schlüsselwortwert `normal`, oder eine `<number>`, optional gefolgt von einem `<integer>`.

### Werte

- `normal`
  - : Kein spezieller Initialbuchstabeneffekt. Text verhält sich normal.
- `<number>`
  - : Definiert die Größe des Initialbuchstabens in Bezug darauf, wie viele Zeilen er einnimmt. Negative Werte sind nicht erlaubt.
- `<integer>`
  - : Definiert die Anzahl der Zeilen, die der Initialbuchstabe sinken soll, wenn seine Größe angegeben ist. Werte müssen größer als null sein. Wird dieser Wert weggelassen, wird er auf den nächstkleineren positiven ganzzahligen Wert der Größe gerundet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Größe des Initialbuchstabens festlegen

#### HTML

```html
<p class="normal">Initialbuchstabe ist normal</p>
<p class="onefive">Initialbuchstabe nimmt 1,5 Zeilen ein</p>
<p class="three">Initialbuchstabe nimmt 3 Zeilen ein</p>
```

#### CSS

```css
.normal::first-letter {
  -webkit-initial-letter: normal;
  initial-letter: normal;
}

.onefive::first-letter {
  -webkit-initial-letter: 1.5;
  initial-letter: 1.5;
}

.three::first-letter {
  -webkit-initial-letter: 3;
  initial-letter: 3;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_initial_letter_size', 250, 180)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drop caps in CSS](https://www.oddbird.net/2017/01/03/initial-letter/)
