---
title: initial-letter
slug: Web/CSS/Reference/Properties/initial-letter
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`initial-letter`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größe und das Einsinken von fallenden, erhöhten und eingesunkenen Anfangsbuchstaben fest. Diese Eigenschaft gilt für {{cssxref("::first-letter")}} Pseudoelemente und für erste Inline-Kindelemente von Block-Containern.

## Syntax

```css
/* Keyword values */
initial-letter: normal;

/* One value */
initial-letter: 3; /* 3 lines tall, baseline at line 3 */
initial-letter: 1.5; /* 1.5 lines tall, baseline at line 2 */

/* Two values */
initial-letter: 3 2; /* 3 lines tall, baseline at line 2 (raised 1 line) */
initial-letter: 3 1; /* 3 lines tall, baseline unchanged (raised 2 lines) */

/* Global values */
initial-letter: inherit;
initial-letter: initial;
initial-letter: revert;
initial-letter: revert-layer;
initial-letter: unset;
```

### Werte

Der Schlüsselwortwert `normal` oder eine `<number>`, optional gefolgt von einem `<integer>`.

- `normal`
  - : Kein spezieller Initialbuchstaben-Effekt. Text verhält sich normal.
- `<number>`
  - : Definiert die Größe des Anfangsbuchstabens, in Bezug darauf, wie viele Zeilen er einnimmt. Negative Werte sind nicht erlaubt.
- `<integer>`
  - : Definiert die Anzahl der Zeilen, die der Anfangsbuchstabe einsinken soll, wenn seine Größe angegeben ist. Werte müssen größer als null sein. Wenn weggelassen, wird der Größenwert dupliziert und auf die nächste positive ganze Zahl abgerundet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Größe des Anfangsbuchstabens einstellen

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

p {
  outline: 1px dashed red;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_initial_letter_size', 250, 180)}}

### Einsinkwert einstellen

In diesem Beispiel haben alle Anfangsbuchstaben die gleiche Größe, jedoch unterschiedliche Einsinkwerte.

#### HTML

```html
<p class="four">Initial letter: Sink value = 4</p>
<p class="same">Initial letter: Sink value not declared (same as size)</p>
<p class="two">Initial letter: Sink value = 2</p>
<p class="one">Initial letter: Sink value = 1</p>
```

#### CSS

```css
.four::first-letter {
  -webkit-initial-letter: 3 4;
  initial-letter: 3 4;
}

.same::first-letter {
  -webkit-initial-letter: 3;
  initial-letter: 3;
}

.two::first-letter {
  -webkit-initial-letter: 3 2;
  initial-letter: 3 2;
}

.one::first-letter {
  -webkit-initial-letter: 3 1;
  initial-letter: 3 1;
}

p {
  outline: 1px dashed red;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_the_sink_value', 250, 240)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("::first-letter")}}
- {{cssxref(":first-child")}}
- [Drop caps in CSS](https://www.oddbird.net/2017/01/03/initial-letter/) via Oddbird (2017)
