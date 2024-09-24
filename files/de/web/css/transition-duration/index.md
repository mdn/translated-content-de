---
title: transition-duration
slug: Web/CSS/transition-duration
l10n:
  sourceCommit: 1608a85abb1d05dadc63f27c93fc3e4b7e630db0
---

{{CSSRef}}

Die **`transition-duration`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Dauer fest, die eine Übergangsanimation benötigt, um abgeschlossen zu sein. Standardmäßig ist der Wert `0s`, was bedeutet, dass keine Animation stattfinden wird.

{{EmbedInteractiveExample("pages/css/transition-duration.html")}}

Sie können mehrere Dauern angeben; jede Dauer wird auf die entsprechende Eigenschaft angewendet, wie sie von der {{ cssxref("transition-property") }} Eigenschaft spezifiziert ist, die als Hauptliste fungiert. Wenn die Anzahl der angegebenen Dauern geringer ist als in der Hauptliste, wiederholt der Benutzeragent die Dauerliste. Wenn die Anzahl der angegebenen Dauern größer ist als in der Hauptliste, wird die Liste auf die richtige Größe gekürzt. In beiden Fällen bleibt die CSS-Deklaration gültig.

## Syntax

```css
/* <time> Werte */
transition-duration: 6s;
transition-duration: 120ms;
transition-duration: 1s, 15s;
transition-duration: 10s, 30s, 230ms;

/* Globale Werte */
transition-duration: inherit;
transition-duration: initial;
transition-duration: revert;
transition-duration: revert-layer;
transition-duration: unset;
```

### Werte

- `<time>`
  - : Ist ein {{cssxref("&lt;time&gt;")}}, das die Zeitspanne bezeichnet, die der Übergang vom alten zum neuen Wert einer Eigenschaft dauern soll. Eine Zeit von `0s` zeigt an, dass kein Übergang stattfinden wird, das heißt der Wechsel zwischen den beiden Zuständen erfolgt sofort. Ein negativer Wert für die Zeit macht die Deklaration ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiel für unterschiedliche Dauern

#### HTML

```html
<div class="box duration-1">0.5 Sekunden</div>

<div class="box duration-2">2 Sekunden</div>

<div class="box duration-3">4 Sekunden</div>

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
}

.transformed-state {
  transform: rotate(270deg);
  background-color: blue;
  color: yellow;
  font-size: 12px;
  transition-property: background-color, font-size, transform, color;
  transition-timing-function: ease-in-out;
}

.duration-1 {
  transition-duration: 0.5s;
}

.duration-2 {
  transition-duration: 2s;
}

.duration-3 {
  transition-duration: 4s;
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

{{EmbedLiveSample("Example_showing_different_durations",275,200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- {{cssxref('transition')}}
- {{cssxref('transition-property')}}
- {{cssxref('transition-timing-function')}}
- {{cssxref('transition-delay')}}
- {{domxref("TransitionEvent")}}
