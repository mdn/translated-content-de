---
title: initial-letter
slug: Web/CSS/initial-letter
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Die CSS-Eigenschaft `initial-letter` legt das Styling für hervorstehende, erhabene und versenkte Initialen fest.

## Syntax

```css
/* Keyword values */
initial-letter: normal;

/* Numeric values */
initial-letter: 1.5; /* Initial letter occupies 1.5 lines */
initial-letter: 3; /* Initial letter occupies 3 lines */
initial-letter: 3 2; /* Initial letter occupies 3 lines and
                           sinks 2 lines */

/* Global values */
initial-letter: inherit;
initial-letter: initial;
initial-letter: revert;
initial-letter: revert-layer;
initial-letter: unset;
```

Der Schlüsselwortwert `normal` oder eine `<number>`, optional gefolgt von einem `<integer>`.

### Werte

- `normal`
  - : Kein spezieller Initialbuchstaben-Effekt. Text verhält sich normal.
- `<number>`
  - : Definiert die Größe des Initialbuchstabens in Bezug darauf, wie viele Zeilen er einnimmt. Negative Werte sind nicht erlaubt.
- `<integer>`
  - : Definiert die Anzahl der Zeilen, die der Initialbuchstabe einnehmen soll, wenn seine Größe angegeben ist. Werte müssen größer als null sein. Wird dieser Wert weggelassen, wird er auf den nächsten positiven Ganzzahlwert der Größenangabe abgerundet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Initialbuchstabengröße einstellen

#### HTML

```html
<p class="normal">Initial letter is normal</p>
<p class="onefive">Initial letter occupies 1.5 lines</p>
<p class="three">Initial letter occupies 3 lines</p>
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

- [Drop Caps in CSS](https://www.oddbird.net/2017/01/03/initial-letter/)
