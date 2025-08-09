---
title: transition-delay
slug: Web/CSS/transition-delay
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

Die **`transition-delay`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Dauer fest, die gewartet werden soll, bevor der Übergangseffekt einer Eigenschaft beginnt, wenn sich ihr Wert ändert.

{{InteractiveExample("CSS Demo: transition-delay")}}

```css interactive-example-choice
transition-delay: 250ms;
transition-property: margin-right;
```

```css interactive-example-choice
transition-delay: 1s;
transition-property: background-color;
```

```css interactive-example-choice
transition-delay: 1s;
transition-property: margin-right, color;
```

```css interactive-example-choice
transition-delay: 1s, 250ms;
transition-property: margin-right, color;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">Hover to see<br />the transition.</div>
</section>
```

```css interactive-example
#example-element {
  background-color: #e4f0f5;
  color: black;
  padding: 1rem;
  border-radius: 0.5rem;
  font: 1em monospace;
  width: 100%;
  transition: margin-right 2s;
}

#default-example:hover > #example-element {
  background-color: #909;
  color: white;
  margin-right: 40%;
}
```

Die Verzögerung kann null, positiv oder negativ sein:

- Ein Wert von `0s` (oder `0ms`) wird den Übergangseffekt sofort beginnen.
- Ein positiver Wert verzögert den Start des Übergangseffekts um die angegebene Zeitspanne.
- Ein negativer Wert beginnt den Übergangseffekt sofort und teils während des Effekts. Mit anderen Worten, der Effekt wird animiert, als ob er bereits für die angegebene Zeitdauer läuft.

Es ist möglich, mehrere Verzögerungen anzugeben, was nützlich ist, wenn mehrere Eigenschaften übergehen sollen. Jede Verzögerung wird auf die entsprechende Eigenschaft angewendet, wie durch die {{cssxref("transition-property")}} Eigenschaft angegeben, die als Masterliste dient. Wenn weniger Verzögerungen angegeben sind als in der Masterliste, wird die Liste der Verzögerungswerte wiederholt, bis ausreichend vorhanden sind. Wenn mehr Verzögerungen vorhanden sind, wird die Liste der Verzögerungswerte gekürzt, um zur Anzahl der Eigenschaften zu passen. In beiden Fällen bleibt die CSS-Deklaration gültig.

## Syntax

```css
/* <time> values */
transition-delay: 3s;
transition-delay: 2s, 4ms;

/* Global values */
transition-delay: inherit;
transition-delay: initial;
transition-delay: revert;
transition-delay: revert-layer;
transition-delay: unset;
```

### Werte

- {{cssxref("&lt;time&gt;")}}
  - : Bezeichnet die Zeitspanne, die zwischen der Änderung des Wertes einer Eigenschaft und dem Beginn des Übergangseffekts gewartet werden soll.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiel, das unterschiedliche Verzögerungen zeigt

#### HTML

```html
<div class="box delay-1">0.5 seconds</div>

<div class="box delay-2">2 seconds</div>

<div class="box delay-3">4 seconds</div>

<button id="change">Change</button>
```

#### CSS

```css
.box {
  margin: 20px;
  padding: 10px;
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: red;
  font-size: 18px;
  transition-property: background-color, font-size, transform, color;
  transition-timing-function: ease-in-out;
  transition-duration: 3s;
}

.transformed-state {
  transform: rotate(270deg);
  background-color: blue;
  color: yellow;
  font-size: 12px;
  transition-property: background-color, font-size, transform, color;
  transition-timing-function: ease-in-out;
  transition-duration: 3s;
}

.delay-1 {
  transition-delay: 0.5s;
}

.delay-2 {
  transition-delay: 2s;
}

.delay-3 {
  transition-delay: 4s;
}
```

#### JavaScript

```js
function change() {
  const elements = document.querySelectorAll("div.box");
  for (const element of elements) {
    element.classList.toggle("transformed-state");
  }
}

const changeButton = document.querySelector("#change");
changeButton.addEventListener("click", change);
```

#### Ergebnis

{{EmbedLiveSample("Example_showing_different_delays",275,200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Übergänge verwenden](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent) API
