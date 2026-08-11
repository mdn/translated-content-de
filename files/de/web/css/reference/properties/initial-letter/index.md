---
title: "`initial-letter` CSS property"
short-title: initial-letter
slug: Web/CSS/Reference/Properties/initial-letter
l10n:
  sourceCommit: a5531a7b1fa30ab1de952ffff619a9830eb1c1a9
---

Die **`initial-letter`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größe und das Einsinken für herabgesetzte, erhöhte und versenkte Initialbuchstaben fest. Diese Eigenschaft gilt für {{cssxref("::first-letter")}} Pseudo-Elemente und Inline-Level Erste-Kind-Elemente von Block-Containern.

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

Diese Eigenschaft wird als `normal` oder eine `<number>`, optional gefolgt von einem `<integer>`, angegeben:

- `normal`
  - : Kein besonderer Initialbuchstaben-Effekt. Text verhält sich normal.
- `<number>`
  - : Definiert die Größe des Initialbuchstabens in Bezug darauf, wie viele Zeilen er einnimmt. Negative Werte sind nicht erlaubt.
- `<integer>`
  - : Definiert die Anzahl der Zeilen, die der Initialbuchstabe versinken sollte, wenn seine Größe angegeben ist. Die Werte müssen größer als Null sein. Wenn weggelassen, dupliziert es den Größenwert, abgerundet auf die nächste positive ganze Zahl.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Initialbuchstabengröße festlegen

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

### Einsinkwert festlegen

In diesem Beispiel sind alle Initialbuchstaben gleich groß, jedoch mit unterschiedlichen Einsinkwerten.

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
- [Drop Caps in CSS](https://www.oddbird.net/2017/01/03/initial-letter/) über Oddbird (2017)
