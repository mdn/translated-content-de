---
title: transition-duration
slug: Web/CSS/transition-duration
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`transition-duration`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Dauer fest, die eine Übergangsanimation zur Fertigstellung benötigt. Standardmäßig beträgt der Wert `0s`, was bedeutet, dass keine Animation stattfindet.

{{InteractiveExample("CSS Demo: transition-duration")}}

```css interactive-example-choice
transition-duration: 500ms;
transition-property: margin-right;
```

```css interactive-example-choice
transition-duration: 2s;
transition-property: background-color;
```

```css interactive-example-choice
transition-duration: 2s;
transition-property: margin-right, color;
```

```css interactive-example-choice
transition-duration: 3s, 1s;
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
  color: #000;
  padding: 1rem;
  border-radius: 0.5rem;
  font: 1em monospace;
  width: 100%;
  transition: margin-right 2s;
}

#default-example:hover > #example-element {
  background-color: #909;
  color: #fff;
  margin-right: 40%;
}
```

Es können mehrere Dauern angegeben werden; jede Dauer wird auf die entsprechende Eigenschaft angewendet, wie sie durch die {{ cssxref("transition-property") }}-Eigenschaft, die als Masterliste fungiert, spezifiziert ist. Ist die Anzahl der angegebenen Dauern geringer als in der Masterliste, wiederholt der User-Agent die Dauer-Liste. Ist die Anzahl der angegebenen Dauern größer als in der Masterliste, wird die Liste auf die richtige Größe gekürzt. In beiden Fällen bleibt die CSS-Deklaration gültig.

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
  - : Ist ein {{cssxref("&lt;time&gt;")}}, der die Zeitdauer angibt, die der Übergang vom alten zum neuen Wert einer Eigenschaft dauern sollte. Eine Zeit von `0s` bedeutet, dass keine Übergangsanimation stattfinden wird, d.h. der Wechsel zwischen den beiden Zuständen erfolgt augenblicklich. Ein negativer Wert für die Zeit macht die Deklaration ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiel, das unterschiedliche Dauern zeigt

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
