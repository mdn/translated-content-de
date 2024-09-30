---
title: transition-delay
slug: Web/CSS/transition-delay
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`transition-delay`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Dauer an, die gewartet werden soll, bevor der Übergangseffekt einer Eigenschaft startet, wenn sich deren Wert ändert.

{{EmbedInteractiveExample("pages/css/transition-delay.html")}}

Die Verzögerung kann null, positiv oder negativ sein:

- Ein Wert von `0s` (oder `0ms`) lässt den Übergangseffekt sofort beginnen.
- Ein positiver Wert veranlasst den Beginn des Übergangseffekts nach der angegebenen Zeit.
- Ein negativer Wert beginnt den Übergangseffekt sofort und bereits teilweise im Effekt. Mit anderen Worten: Der Effekt wird animiert, als ob er bereits für die angegebene Zeit lief.

Sie können mehrere Verzögerungen angeben, was nützlich ist, wenn mehrere Eigenschaften Übergänge durchlaufen. Jede Verzögerung wird auf die entsprechende Eigenschaft angewendet, wie durch die {{cssxref("transition-property")}} Eigenschaft angegeben, die als Master-Liste fungiert. Sind weniger Verzögerungen angegeben als in der Master-Liste, wird die Liste der Verzögerungswerte wiederholt, bis es genug sind. Gibt es mehr Verzögerungen, wird die Liste der Verzögerungswerte gekürzt, um der Anzahl der Eigenschaften zu entsprechen. In beiden Fällen bleibt die CSS-Deklaration gültig.

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
  - : Gibt die Zeitspanne an, die zwischen der Änderung eines Eigenschaftswertes und dem Start des Übergangseffekts gewartet wird.

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
