---
title: transition-delay
slug: Web/CSS/transition-delay
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`transition-delay`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Dauer an, die gewartet werden soll, bevor der Übergangseffekt einer Eigenschaft beginnt, wenn sich ihr Wert ändert.

{{EmbedInteractiveExample("pages/css/transition-delay.html")}}

Die Verzögerung kann null, positiv oder negativ sein:

- Ein Wert von `0s` (oder `0ms`) beginnt den Übergangseffekt sofort.
- Ein positiver Wert verzögert den Beginn des Übergangseffekts um die angegebene Zeitspanne.
- Ein negativer Wert beginnt den Übergangseffekt sofort und teilweise während des Effekts. Mit anderen Worten, der Effekt wird animiert, als ob er bereits für die angegebene Zeitspanne gelaufen wäre.

Sie können mehrere Verzögerungen angeben, was nützlich ist, wenn mehrere Eigenschaften übergehen. Jede Verzögerung wird auf die entsprechende Eigenschaft angewendet, wie durch die {{cssxref("transition-property")}} Eigenschaft angegeben, die als Hauptliste fungiert. Wenn weniger Verzögerungen als in der Hauptliste angegeben sind, wird die Liste der Verzögerungswerte wiederholt, bis genügend vorhanden sind. Wenn mehr Verzögerungen vorhanden sind, wird die Liste der Verzögerungswerte gekürzt, um der Anzahl der Eigenschaften zu entsprechen. In beiden Fällen bleibt die CSS-Deklaration gültig.

## Syntax

```css
/* <time> Werte */
transition-delay: 3s;
transition-delay: 2s, 4ms;

/* Globale Werte */
transition-delay: inherit;
transition-delay: initial;
transition-delay: revert;
transition-delay: revert-layer;
transition-delay: unset;
```

### Werte

- {{cssxref("&lt;time&gt;")}}
  - : Gibt die Zeitspanne an, die gewartet werden soll, bevor ein Übergangseffekt beginnt, nachdem sich der Wert einer Eigenschaft geändert hat.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiel für unterschiedliche Verzögerungen

#### HTML

```html
<div class="box delay-1">0.5 Sekunden</div>

<div class="box delay-2">2 Sekunden</div>

<div class="box delay-3">4 Sekunden</div>

<button id="change">Ändern</button>
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
- {{domxref("TransitionEvent")}} API
