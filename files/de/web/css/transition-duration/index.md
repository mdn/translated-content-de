---
title: transition-duration
slug: Web/CSS/transition-duration
l10n:
  sourceCommit: 1608a85abb1d05dadc63f27c93fc3e4b7e630db0
---

{{CSSRef}}

Die **`transition-duration`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Dauer fest, die eine Übergangsanimation benötigt, um abgeschlossen zu werden. Standardmäßig beträgt der Wert `0s`, was bedeutet, dass keine Animation erfolgt.

{{EmbedInteractiveExample("pages/css/transition-duration.html")}}

Sie können mehrere Dauern angeben; jede Dauer wird auf die entsprechende Eigenschaft angewendet, wie sie durch die {{ cssxref("transition-property") }} Eigenschaft spezifiziert wurde, die als Masterliste fungiert. Wenn die Anzahl der angegebenen Dauern geringer ist als in der Masterliste, wiederholt der User-Agent die Liste der Dauern. Wenn die Anzahl der angegebenen Dauern größer ist als in der Masterliste, wird die Liste auf die richtige Größe gekürzt. In beiden Fällen bleibt die CSS-Deklaration gültig.

## Syntax

```css
/* <time> values */
transition-duration: 6s;
transition-duration: 120ms;
transition-duration: 1s, 15s;
transition-duration: 10s, 30s, 230ms;

/* Global values */
transition-duration: inherit;
transition-duration: initial;
transition-duration: revert;
transition-duration: revert-layer;
transition-duration: unset;
```

### Werte

- `<time>`
  - : Ist ein {{cssxref("&lt;time&gt;")}}, das die Zeitdauer angibt, die der Übergang vom alten Wert einer Eigenschaft zum neuen Wert benötigt. Eine Zeitdauer von `0s` zeigt an, dass kein Übergang stattfindet, also der Wechsel zwischen den zwei Zuständen sofort erfolgt. Ein negativer Wert für die Zeit macht die Deklaration ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiel mit unterschiedlichen Dauern

#### HTML

```html
<div class="box duration-1">0.5 seconds</div>

<div class="box duration-2">2 seconds</div>

<div class="box duration-3">4 seconds</div>

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
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
