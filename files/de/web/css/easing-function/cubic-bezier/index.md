---
title: cubic-bezier()
slug: Web/CSS/easing-function/cubic-bezier
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`cubic-bezier()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) erstellt einen sanften Übergang unter Verwendung einer kubischen {{Glossary("Bezier_curve", "Bézier-Kurve")}}.
Als [`<easing-function>`](/de/docs/Web/CSS/easing-function) kann sie verwendet werden, um den Anfang und das Ende der {{Glossary("interpolation", "Interpolation")}} zu glätten.

## Syntax

```css
cubic-bezier(0.25, 0.1, 0.25, 1)
cubic-bezier(0.1, -0.6, 0.2, 0)
cubic-bezier(0, 0, 1, 1)
```

### Parameter

Die Funktion akzeptiert die folgenden vier Parameter, die die Koordinaten von zwei Kontrollpunkten repräsentieren:

- `<x1>`
  - : Eine {{cssxref("&lt;number&gt;")}}, die die x-Achsen-Koordinate des ersten Kontrollpunktes darstellt.
    Sie muss im Bereich `[0, 1]` liegen.
- `<y1>`
  - : Eine {{cssxref("&lt;number&gt;")}}, die die y-Achsen-Koordinate des ersten Kontrollpunktes darstellt.
- `<x2>`
  - : Eine {{cssxref("&lt;number&gt;")}}, die die x-Achsen-Koordinate des zweiten Kontrollpunktes darstellt.
    Sie muss im Bereich `[0, 1]` liegen.
- `<y2>`
  - : Eine {{cssxref("&lt;number&gt;")}}, die die y-Achsen-Koordinate des zweiten Kontrollpunktes darstellt.

## Beschreibung

Die kubischen Bézier-Funktionen, oft als "smooth" Easing-Funktionen bezeichnet, korrelieren einen Eingangsfortschritt mit einem Ausgangsfortschritt, beide ausgedrückt als {{cssxref("&lt;number&gt;")}}s, wobei `0.0` den Anfangszustand und `1.0` den Endzustand darstellt.
Wenn die kubische Bézier-Kurve ungültig ist, ignoriert CSS die gesamte Eigenschaft.

Eine kubische Bézier-Kurve wird durch vier Punkte definiert: P0, P1, P2 und P3. Die Punkte P0 und P3 repräsentieren den Anfang und das Ende der Kurve. In CSS ist der Anfangspunkt P0 fest auf `(0, 0)` und der Endpunkt P3 fest auf `(1, 1)`, während die Zwischenpunkte P1 und P2 durch die Funktionsparameter `(<x1>, <y1>)` und `(<x2>, <y2>)` definiert sind. Die x-Achse repräsentiert den Eingangsfortschritt und die y-Achse den Ausgangsfortschritt.

![Darstellung des Eingangsfortschritts zum Ausgangsfortschritt, zeigt eine S-förmige Linie, die von der Ursprungsposition zu (1, 1) verläuft, mit den Bézier-Kontrollpunkten P1(0.1, 0.6) und P2(0.7, 0.2).](cubic-bezier.svg)

Nicht alle kubischen Bézier-Kurven sind als Easing-Funktionen geeignet, da nicht alle [mathematische Funktionen](https://de.wikipedia.org/wiki/Funktion_%28Mathematik%29) sind; d.h. Kurven, die für eine gegebene x-Achsen-Koordinate null oder einen Wert haben. Mit P0 und P3 festgelegt, wie von CSS definiert, ist eine kubische Bézier-Kurve eine Funktion und deshalb gültig, wenn und nur wenn die x-Achsen-Koordinaten von P1 und P2 beide im Bereich `[0, 1]` liegen.

Kubische Bézier-Kurven mit der Ordinate von P1 oder P2 außerhalb des Bereichs `[0, 1]` können dazu führen, dass der Wert über den Endzustand hinausgeht und dann zurückkehrt. In Animationen erzeugt dies eine Art "Bounce"-Effekt.

![Darstellungen der Easing-Funktion cubic-bezier(0.3, 0.2, 0.2, 1.4), von denen eine den Ausgangsfortschritt zeigt, der ab einem bestimmten Eingangsfortschritt über 1 hinausgeht, die andere zeigt, wie der Ausgangsfortschritt 1 erreicht und dann dort bleibt.](cubic-bezier_out_of_range.svg)

Jedoch werden bei bestimmten Eigenschaften die Ausgaben begrenzt, wenn sie außerhalb eines zulässigen Bereichs liegen. Beispielsweise wird eine Farbkomponente größer als `255` oder kleiner als `0` in {{CSSXref("color_value/rgb", "rgb()")}} auf den nächstgelegenen erlaubten Wert beschränkt (`255` bzw. `0`). Einige `cubic-bezier()` Werte weisen diese Eigenschaft auf.

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Bounce-Effekt

In diesem Beispiel springt der rote Ball aus der Box, wenn er von seiner ursprünglichen Position übergeht. Dies liegt daran, dass einer der P2-Werte, `2.3`, über den Bereich `[0, 1]` hinausgeht.

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

Diese kubischen Bézier-Kurven sind gültig für die Verwendung in CSS:

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

Diese kubischen Bézier-Kurven-Definitionen sind ungültig:

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
- Modul [CSS Easing-Funktionen](/de/docs/Web/CSS/CSS_easing_functions)
- [cubic-bezier.com](https://cubic-bezier.com/) von Lea Verou
