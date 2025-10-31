---
title: transition-delay
slug: Web/CSS/Reference/Properties/transition-delay
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`transition-delay`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Dauer an, die gewartet werden soll, bevor der Übergangseffekt einer Eigenschaft gestartet wird, wenn sich deren Wert ändert.

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
  background-color: #990099;
  color: white;
  margin-right: 40%;
}
```

Die Verzögerung kann null, positiv oder negativ sein:

- Ein Wert von `0s` (oder `0ms`) lässt den Übergangseffekt sofort beginnen.
- Ein positiver Wert verzögert den Beginn des Übergangseffekts um die angegebene Zeitdauer.
- Ein negativer Wert lässt den Übergangseffekt sofort beginnen und teilweise durchlaufen. Mit anderen Worten, der Effekt wird animiert, als ob er bereits um die angegebene Zeitdauer gelaufen wäre.

Es können mehrere Verzögerungen angegeben werden, was nützlich ist, wenn mehrere Eigenschaften übergehen sollen. Jede Verzögerung wird auf die entsprechende Eigenschaft angewendet, wie durch die {{cssxref("transition-property")}} Eigenschaft, die als Masterliste fungiert, spezifiziert. Wenn weniger Verzögerungen angegeben sind als in der Masterliste, wird die Liste der Verzögerungswerte wiederholt, bis genügend Werte vorhanden sind. Wenn es mehr Verzögerungen gibt, wird die Liste der Verzögerungswerte gekürzt, um der Anzahl der Eigenschaften zu entsprechen. In beiden Fällen bleibt die CSS-Deklaration gültig.

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
  - : Gibt die Zeitspanne an, die zwischen der Änderung eines Eigenschaftswerts und dem Beginn des Übergangseffekts gewartet werden soll.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiel, das verschiedene Verzögerungen zeigt

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

- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent) API
