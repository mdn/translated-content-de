---
title: "`cubic-bezier()` CSS-Funktion"
short-title: cubic-bezier()
slug: Web/CSS/Reference/Values/easing-function/cubic-bezier
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`cubic-bezier()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erstellt einen sanften Übergang mithilfe einer kubischen {{Glossary("Bezier_curve", "Bézier-Kurve")}}.
Als {{cssxref("easing-function")}} kann sie verwendet werden, um den Anfang und das Ende der {{Glossary("interpolation", "Interpolation")}} abzumildern.

## Syntax

```css
cubic-bezier(0.25, 0.1, 0.25, 1)
cubic-bezier(0.1, -0.6, 0.2, 0)
cubic-bezier(0, 0, 1, 1)
```

### Parameter

Die Funktion akzeptiert die folgenden vier Parameter, die die Koordinaten von zwei Kontrollpunkten darstellen:

- `<x1>`
  - : Eine {{cssxref("&lt;number&gt;")}}, die die x-Achsen-Koordinate des ersten Kontrollpunkts darstellt.
    Sie muss im Bereich `[0, 1]` liegen.
- `<y1>`
  - : Eine {{cssxref("&lt;number&gt;")}}, die die y-Achsen-Koordinate des ersten Kontrollpunkts darstellt.
- `<x2>`
  - : Eine {{cssxref("&lt;number&gt;")}}, die die x-Achsen-Koordinate des zweiten Kontrollpunkts darstellt.
    Sie muss im Bereich `[0, 1]` liegen.
- `<y2>`
  - : Eine {{cssxref("&lt;number&gt;")}}, die die y-Achsen-Koordinate des zweiten Kontrollpunkts darstellt.

## Beschreibung

Die kubischen Bézier-Funktionen, oft als "geschmeidige" Easing-Funktionen bezeichnet, korrelieren einen Eingabe-Fortschritt mit einem Ausgabe-Fortschritt, beide ausgedrückt als {{cssxref("&lt;number&gt;")}}, wobei `0.0` den Anfangszustand und `1.0` den Endzustand repräsentiert.
Wenn die kubische Bézier-Kurve ungültig ist, ignoriert CSS die gesamte Eigenschaft.

Eine kubische Bézier-Kurve wird durch vier Punkte definiert: P0, P1, P2 und P3. Die Punkte P0 und P3 repräsentieren den Anfang und das Ende der Kurve. In CSS ist der Startpunkt P0 fest auf `(0, 0)` und der Endpunkt P3 auf `(1, 1)` gesetzt, während die Zwischenpunkte P1 und P2 durch die Funktionsparameter `(<x1>, <y1>)` und `(<x2>, <y2>)` definiert werden. Die x-Achse repräsentiert den Eingabe-Fortschritt und die y-Achse den Ausgabe-Fortschritt.

![Grafik des Eingabe-Fortschritts zum Ausgabe-Fortschritt, die eine S-förmige Linie zeigt, die sich von der Ursprungspunkt bis (1, 1) mit den Bézier-Kontrollpunkten P1(0.1, 0.6) und P2(0.7, 0.2) krümmt.](cubic-bezier.svg)

Nicht alle kubischen Bézier-Kurven sind geeignet als Easing-Funktionen, da nicht alle [mathematische Funktionen](https://en.wikipedia.org/wiki/Function_%28mathematics%29) sind; d.h. Kurven, die für eine gegebene x-Achsen-Koordinate keinen oder einen Wert haben. Mit P0 und P3 fest definiert durch CSS, ist eine kubische Bézier-Kurve eine Funktion und gültig, wenn die x-Achsen-Koordinaten von P1 und P2 beide im Bereich [0, 1] liegen.

Kubische Bézier-Kurven mit der Ordinate von P1 oder P2 außerhalb des `[0, 1]`-Bereichs können dazu führen, dass der Wert weiter als der Endzustand geht und dann wieder zurückkommt. In Animationen erzeugt dies eine Art "Sprung"-Effekt.

![Grafiken der Easing-Funktion cubic-bezier(0.3, 0.2, 0.2, 1.4), von denen eine zeigt, dass der Ausgabe-Fortschritt über 1 ansteigt, beginnend bei einem bestimmten Eingabe-Fortschritt, die andere zeigt, dass der Ausgabe-Fortschritt 1 erreicht und dann dort bleibt.](cubic-bezier_out_of_range.svg)

Allerdings werden bestimmte Eigenschaften den Ausgabewert einschränken, wenn er außerhalb eines zulässigen Bereichs liegt. Beispielsweise wird eine Farbkomponente größer als `255` oder kleiner als `0` in {{CSSXref("color_value/rgb", "rgb()")}} auf den nächstgelegenen zulässigen Wert beschnitten (`255` bzw. `0`). Einige `cubic-bezier()`-Werte zeigen diese Eigenschaft.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Sprung-Effekt

In diesem Beispiel springt der rote Ball aus der Box, wenn er von seiner ursprünglichen Position übergegangen wird. Dies liegt daran, dass einer der P2-Werte, `2.3`, außerhalb des `[0, 1]`-Bereichs liegt.

```html hidden
<div tabindex="0">
  <span></span>
</div>
```

```css hidden
div {
  margin: 8px auto;
  padding: 8px;
  width: 256px;
  border-radius: 40px;
  background-color: wheat;
}

span {
  display: block;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: tomato;
}

div:hover span,
div:focus span {
  translate: 192px 0;
}
```

```css
span {
  transition: translate 0.3s cubic-bezier(0.3, 0.8, 0.3, 2.3);
}
```

{{EmbedLiveSample("Bouncing effect")}}

### Verwendung der Funktion cubic-bezier()

Diese kubischen Bézier-Kurven sind zur Verwendung in CSS gültig:

```css example-good
/* The canonical Bézier curve with four <number> in the [0,1] range */
cubic-bezier(0.1, 0.7, 1.0, 0.1)

/* Using <integer> is valid because any <integer> is also a <number> */
cubic-bezier(0, 0, 1, 1)

/* Negative values for ordinates are valid, leading to bouncing effects */
cubic-bezier(0.1, -0.6, 0.2, 0)

/* Values greater than 1.0 for ordinates are also valid */
cubic-bezier(0, 1.1, 0.8, 4)
```

Diese Definitionen kubischer Bézier-Kurven sind ungültig:

```css example-bad
/* Parameters must be numbers */
cubic-bezier(0.1, red, 1.0, green)

/* X coordinates must be in the [0, 1] range */
cubic-bezier(2.45, 0.6, 4, 0.1)

/* There must be exactly four parameters */
cubic-bezier(0.3, 2.1)

/* X coordinates must be in the [0, 1] range */
cubic-bezier(-1.9, 0.3, -0.2, 2.1)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere Easing-Funktionen: {{cssxref("easing-function/linear", "linear()")}} und {{cssxref("easing-function/steps", "steps()")}}
- [CSS Easing-Funktionen](/de/docs/Web/CSS/Guides/Easing_functions) Modul
- [cubic-bezier.com](https://cubic-bezier.com/) von Lea Verou
