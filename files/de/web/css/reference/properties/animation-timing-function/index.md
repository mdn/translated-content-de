---
title: animation-timing-function
slug: Web/CSS/Reference/Properties/animation-timing-function
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`animation-timing-function`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie eine Animation während der Dauer jedes Zyklus fortschreitet.

{{InteractiveExample("CSS Demo: animation-timing-function")}}

```css interactive-example-choice
animation-timing-function: linear;
```

```css interactive-example-choice
animation-timing-function: ease-in-out;
```

```css interactive-example-choice
animation-timing-function: steps(5, end);
```

```css interactive-example-choice
animation-timing-function: cubic-bezier(0.1, -0.6, 0.2, 0);
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div class="animating" id="example-element"></div>
  <button id="play-pause">Play</button>
</section>
```

```css interactive-example
#example-element {
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-name: slide;
  animation-play-state: paused;
  background-color: #1766aa;
  border-radius: 50%;
  border: 5px solid #333333;
  color: white;
  height: 150px;
  margin: auto;
  margin-left: 0;
  width: 150px;
}

#example-element.running {
  animation-play-state: running;
}

#play-pause {
  font-size: 2rem;
}

@keyframes slide {
  from {
    background-color: orange;
    color: black;
    margin-left: 0;
  }
  to {
    background-color: orange;
    color: black;
    margin-left: 80%;
  }
}
```

```js interactive-example
const el = document.getElementById("example-element");
const button = document.getElementById("play-pause");

button.addEventListener("click", () => {
  if (el.classList.contains("running")) {
    el.classList.remove("running");
    button.textContent = "Play";
  } else {
    el.classList.add("running");
    button.textContent = "Pause";
  }
});
```

Es ist oft praktisch, die Kurzschreibweise {{cssxref("animation")}} zu verwenden, um alle Animationseigenschaften auf einmal festzulegen.

## Syntax

```css
/* Keyword values */
animation-timing-function: ease;
animation-timing-function: ease-in;
animation-timing-function: ease-out;
animation-timing-function: ease-in-out;
animation-timing-function: linear;
animation-timing-function: step-start;
animation-timing-function: step-end;

/* cubic-bezier() function values */
animation-timing-function: cubic-bezier(0.42, 0, 1, 1); /* ease-in */
animation-timing-function: cubic-bezier(0, 0, 0.58, 1); /* ease-out */
animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1); /* ease-in-out */

/* linear() function values */
animation-timing-function: linear(0, 0.25, 1);
animation-timing-function: linear(0 0%, 0.25 50%, 1 100%);
animation-timing-function: linear(0, 0.25 50% 75%, 1);
animation-timing-function: linear(0, 0.25 50%, 0.25 75%, 1);

/* steps() function values */
animation-timing-function: steps(4, jump-start);
animation-timing-function: steps(10, jump-end);
animation-timing-function: steps(20, jump-none);
animation-timing-function: steps(5, jump-both);
animation-timing-function: steps(6, start);
animation-timing-function: steps(8, end);

/* Multiple animations */
animation-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1, 0.1);

/* Global values */
animation-timing-function: inherit;
animation-timing-function: initial;
animation-timing-function: revert;
animation-timing-function: revert-layer;
animation-timing-function: unset;
```

### Werte

- {{cssxref("&lt;easing-function&gt;")}}

  - : Die zu einer bestimmten Animation gehörende Ease-Funktion, wie durch {{cssxref("animation-name")}} bestimmt.

    Die nicht-schrittweisen Schlüsselwortwerte (`ease`, `linear`, `ease-in-out`, etc.) repräsentieren jeweils kubische Bézier-Kurven mit festen Vier-Punkt-Werten, während der Wert `cubic-bezier()` die Angabe nicht vordefinierter Werte ermöglicht. Die `steps()` Ease-Funktion teilt die Eingabezeit in eine bestimmte Anzahl von gleich langen Intervallen. Ihre Parameter beinhalten eine Anzahl von Schritten und eine Schrittposition.

    - `linear`
      - : Entspricht `cubic-bezier(0.0, 0.0, 1.0, 1.0)`, animiert mit gleichmäßiger Geschwindigkeit.
    - `ease`
      - : Entspricht `cubic-bezier(0.25, 0.1, 0.25, 1.0)`, der Standardwert, die Geschwindigkeit nimmt bis zur Mitte der Animation zu und verlangsamt sich am Ende wieder.
    - `ease-in`
      - : Entspricht `cubic-bezier(0.42, 0, 1.0, 1.0)`, beginnt langsam, wobei die Geschwindigkeit des Übergangs der animierenden Eigenschaft bis zur Vollendung zunimmt.
    - `ease-out`
      - : Entspricht `cubic-bezier(0, 0, 0.58, 1.0)`, beginnt schnell, verlangsamt sich während die Animation fortschreitet.
    - `ease-in-out`

      - : Entspricht `cubic-bezier(0.42, 0, 0.58, 1.0)`, die animierten Eigenschaften wechseln langsam, beschleunigen und verlangsamen sich dann wieder.

    - `cubic-bezier(<number [0,1]> , <number> , <number [0,1]> , <number>)`

      - : Eine von Autoren definierte kubische Bézier-Kurve, wobei der erste und der dritte Wert im Bereich von 0 bis 1 liegen müssen.

    - `linear(<number> <percentage>{1,2}, …)`

      - : Die Funktion interpoliert linear zwischen den angegebenen Ease-Stoppunkten. Ein Stoppunkt ist ein Paar aus einem Ausgabefortschritt und einem Eingabeprozentsatz. Der Eingabeprozentsatz ist optional und wird abgeleitet, wenn er nicht angegeben ist. Wenn kein Eingabeprozentsatz angegeben wird, werden der erste und letzte Stoppunkt auf `0%` beziehungsweise `100%` gesetzt, und die mittleren Stoppunkte erhalten Prozentsätze, die durch lineare Interpolation zwischen den nächstgelegenen vorhergehenden und nächsten Punkten, die einen Prozentsatzwert haben, abgeleitet werden.

    - `steps(<integer>, <step-position>)`

      - : Zeigt eine Animationsiteration entlang _n_ Stops entlang des Übergangs mit jedem Stop für die gleiche Zeit an. Zum Beispiel, wenn _n_ gleich 5 ist, gibt es 5 Schritte. Ob die Animation kurzzeitig bei 0%, 20%, 40%, 60% und 80%, auf der 20%, 40%, 60%, 80% und 100% anhält oder 5 Stops zwischen den 0% und 100% macht oder 5 Stops inklusive der 0% und 100% Werte macht (bei den 0%, 25%, 50%, 75% und 100%), hängt davon ab, welche der folgenden Schrittpositionen verwendet wird:
        - `jump-start`
          - : Bezeichnet eine links-stetige Funktion, sodass der erste Sprung stattfindet, wenn die Animation beginnt.
        - `jump-end`
          - : Bezeichnet eine rechts-stetige Funktion, sodass der letzte Sprung stattfindet, wenn die Animation endet. Dies ist der Standard.
        - `jump-none`
          - : Es gibt keinen Sprung auf beiden Enden, was effektiv einen Schritt während der Interpolationsiteration entfernt. Stattdessen wird sowohl am Anfang bei 0% als auch am Ende bei 100% angehalten, jeweils für 1/n der Dauer.
        - `jump-both`
          - : Beinhaltet Pausen sowohl bei den 0% als auch 100%, wodurch effektiv ein Schritt während der Animationsiteration hinzugefügt wird.
        - `start`
          - : Entspricht `jump-start`.
        - `end`
          - : Entspricht `jump-end`.

    - `step-start`
      - : Entspricht `steps(1, jump-start)`
    - `step-end`
      - : Entspricht `steps(1, jump-end)`

> [!NOTE]
> Wenn Sie mehrere durch Kommas getrennte Werte bei einer `animation-*` Eigenschaft angeben, werden sie auf die Animationen in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Situationen, in denen die Anzahl der Animationen und `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Einstellen mehrerer Animations-Eigenschaftswerte](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

> [!NOTE] > `animation-timing-function` hat dieselbe Wirkung bei der Erstellung von [CSS scrollgesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) wie bei regulären zeitbasierten Animationen.

## Beschreibung

Easing-Funktionen können in einzelnen Keyframes in einer {{cssxref("@keyframes")}}-Regel angegeben werden. Wenn in einem Keyframe keine **`animation-timing-function`** angegeben ist, wird der entsprechende Wert von **`animation-timing-function`** des Elements verwendet, auf das die Animation angewendet wird.

Innerhalb eines Keyframe ist `animation-timing-function` ein regel-spezifischer Deskriptor, nicht die gleichnamige Eigenschaft. Das Timing wird nicht animiert. Stattdessen wird die Ease-Funktion eines Keyframes auf einer Eigenschaftsbasis von dem Keyframe, auf dem sie angegeben ist, bis zum nächsten Keyframe angewendet, der diese Eigenschaft spezifiziert, oder bis zum Ende der Animation, wenn kein nachfolgender Keyframe diese Eigenschaft spezifiziert. Daher wird eine auf dem **`100%`** oder **`to`** Keyframe angegebene **`animation-timing-function`** nie verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Alle Beispiele in diesem Abschnitt animieren die `width` und `background-color` Eigenschaften von mehreren `<div>` Elementen mit unterschiedlichen `animation-timing-function` Werten. Die Breite wird von `0` bis `100%` animiert und die Hintergrundfarbe wird von Lime nach Magenta animiert.

### Lineare Funktionsbeispiele

Das Beispiel demonstriert die Effekte von verschiedenen `linear()` Ease-Funktionswerten.

```html hidden
<div class="parent">
  <div class="linear">'linear' value</div>
  <div class="linear-fn1">linear(0, 0.5 50%, 1)</div>
  <div class="linear-fn2">linear(0, 0.25 75%, 1)</div>
  <div class="linear-fn3">linear(0, 0.75 25%, 1)</div>
  <div class="linear-fn4">linear(0, 0.5 25% 75%, 1)</div>
  <div class="linear-fn5">linear(0, 0.25 45%, 0.75 55%, 0.5 70%, 1)</div>
  <div class="linear-fn6">linear(0, 1.2 50%, 0.75 80%, 1)</div>
  <div class="linear-fn7">linear(0, 0.5 75%, 1 120%)</div>
</div>
<div class="x-axis"><span>25%</span><span>50%</span><span>75%</span></div>
<button>Play animation</button>
```

```js hidden
const btn = document.querySelector("button");
const divs = document.querySelectorAll(".parent > div[class]");

btn.addEventListener("click", () => {
  btn.setAttribute("disabled", "true");
  for (const div of divs) {
    div.classList.remove("animate");
    void div.offsetWidth;
    div.classList.add("animate");
  }
  setTimeout(() => {
    btn.removeAttribute("disabled");
  }, 11000);
});
```

```css hidden
.x-axis {
  display: flex;
  justify-content: space-evenly;
  width: 80vw;
  margin-left: 4px;
}

.parent {
  background: linear-gradient(
    to right,
    white 24.8%,
    grey 24.8%,
    grey 25.2%,
    white 25.2%,
    white 49.8%,
    grey 49.8%,
    grey 50.2%,
    white 50.2%,
    white 74.8%,
    grey 74.8%,
    grey 75.2%,
    white 75.2%
  );
  width: 80vw;
  font-family: monospace;
  font-weight: bold;
  border: 2px solid grey;
}

.animate {
  animation-name: changeme;
}

.parent > div[class] {
  animation-fill-mode: forwards;
  animation-duration: 10s;

  width: 0;
  margin-bottom: 4px;
  padding: 5px 0;
  box-sizing: border-box;
  text-wrap: nowrap;
  background-color: lime;
}

@keyframes changeme {
  0% {
    width: 0em;
  }
  100% {
    width: 100%;
    background-color: orange;
  }
}

.linear {
  animation-timing-function: linear;
}
.linear-fn1 {
  animation-timing-function: linear(0, 0.5 50%, 1);
}
.linear-fn2 {
  animation-timing-function: linear(0, 0.25 75%, 1);
}
.linear-fn3 {
  animation-timing-function: linear(0, 0.75 25%, 1);
}
.linear-fn4 {
  animation-timing-function: linear(0, 0.5 25% 75%, 1);
}
.linear-fn5 {
  animation-timing-function: linear(0, 0.25 45%, 0.75 55%, 0.5 70%, 1);
}
.linear-fn6 {
  animation-timing-function: linear(0, 1.2 50%, 0.75 80%, 1);
}
.linear-fn7 {
  animation-timing-function: linear(0, 0.5 75%, 1 120%);
}
```

{{EmbedLiveSample("Lineare Funktionsbeispiele", 600, 300)}}

Das folgende Bild zeigt Diagramme aller im Beispiel verwendeten `linear()` Funktionswerte. Fortschritt der Eingabe (Zeit) wird auf der x-Achse und Fortschritt der Ausgabe auf der y-Achse dargestellt. Gemäß der Syntax reicht der Fortschritt der Eingabe von 0 bis 100%, und der der Ausgabe reicht von 0 bis 1.

![Ein Bild, das 'linear' Funktionsgraphen zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/animation-easing/linear-function-graphs.png)

Beachten Sie, dass die Ausgabe vorwärts oder rückwärts gehen kann.

### Kubische Bézier-Beispiele

Das Beispiel demonstriert die Effekte von verschiedenen Bézierkurven-Ease-Funktionen.

```html hidden
<div class="parent">
  <div class="linear">linear</div>
  <div class="ease">ease</div>
  <div class="ease-in">ease-in</div>
  <div class="ease-out">ease-out</div>
  <div class="ease-in-out">ease-in-out</div>
  <div class="cb">cubic-bezier(.5, -0.5, 1, 1.5)</div>
</div>
<div class="x-axis"><span>50%</span></div>
<button>Play animation</button>
```

```js hidden
const btn = document.querySelector("button");
const divs = document.querySelectorAll(".parent > div[class]");

btn.addEventListener("click", () => {
  btn.setAttribute("disabled", "true");
  for (const div of divs) {
    div.classList.remove("animate");
    void div.offsetWidth;
    div.classList.add("animate");
  }
  setTimeout(() => {
    btn.removeAttribute("disabled");
  }, 11000);
});
```

```css hidden
.x-axis {
  display: flex;
  justify-content: space-evenly;
  width: 80vw;
  margin-left: 4px;
}

.parent {
  background: linear-gradient(
    to right,
    white 49.8%,
    grey 49.8%,
    grey 50.2%,
    white 50.2%
  );
  width: 80vw;
  font-family: monospace;
  font-weight: bold;
  border: 2px solid grey;
}

.animate {
  animation-name: changeme;
}

.parent > div[class] {
  animation-fill-mode: forwards;
  animation-duration: 10s;

  width: 0;
  margin-bottom: 4px;
  padding: 5px 0;
  box-sizing: border-box;
  text-wrap: nowrap;
  background-color: lime;
}

@keyframes changeme {
  0% {
    width: 0em;
  }
  100% {
    width: 100%;
    background-color: orange;
  }
}

.linear {
  animation-timing-function: linear;
}
.ease {
  animation-timing-function: ease;
}
.ease-in {
  animation-timing-function: ease-in;
}
.ease-out {
  animation-timing-function: ease-out;
}
.ease-in-out {
  animation-timing-function: ease-in-out;
}
.cb {
  animation-timing-function: cubic-bezier(0.5, -0.5, 1, 1.5);
}
```

{{EmbedLiveSample("Cubic-Bezier-Beispiele", 600, 250)}}

Das folgende Bild zeigt Diagramme aller im Beispiel verwendeten kubischen Bézier-Funktionswerte. Der Fortschritt der Eingabe (Zeit) reicht von 0 bis 1 und der Fortschritt der Ausgabe reicht von 0 bis 1.

![Ein Bild, das 'cubic-bezier' Funktionsgraphen zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/animation-easing/cubic-bezier-function-graphs.png)

### Schrittbeispiele

Dieses Beispiel demonstriert die Effekte verschiedener Schritt-Ease-Funktionswerte.

```html hidden
<div class="parent">
  <div class="linear">linear</div>
  <div class="start">steps(4, start)</div>
  <div class="jump-start">steps(4, jump-start)</div>
  <div class="end">steps(4, end)</div>
  <div class="jump-end">steps(4, jump-end)</div>
  <div class="jump-both">steps(4, jump-both)</div>
  <div class="jump-none">steps(4, jump-none)</div>
  <div class="step-start">step-start</div>
  <div class="step-end">step-end</div>
</div>
<div class="x-axis"><span>25%</span><span>50%</span><span>75%</span></div>
<button>Play animation</button>
```

```js hidden
const btn = document.querySelector("button");
const divs = document.querySelectorAll(".parent > div[class]");

btn.addEventListener("click", () => {
  btn.setAttribute("disabled", "true");
  for (const div of divs) {
    div.classList.remove("animate");
    void div.offsetWidth;
    div.classList.add("animate");
  }
  setTimeout(() => {
    btn.removeAttribute("disabled");
  }, 11000);
});
```

```css hidden
.x-axis {
  display: flex;
  justify-content: space-evenly;
  width: 80vw;
  margin-left: 4px;
}

.parent {
  background: linear-gradient(
    to right,
    white 24.8%,
    grey 24.8%,
    grey 25.2%,
    white 25.2%,
    white 49.8%,
    grey 49.8%,
    grey 50.2%,
    white 50.2%,
    white 74.8%,
    grey 74.8%,
    grey 75.2%,
    white 75.2%
  );
  width: 80vw;
  font-family: monospace;
  font-weight: bold;
  border: 2px solid grey;
}

.animate {
  animation-name: changeme;
}

.parent > div[class] {
  animation-fill-mode: forwards;
  animation-duration: 10s;

  width: 0;
  margin-bottom: 4px;
  padding: 5px 0;
  box-sizing: border-box;
  text-wrap: nowrap;
  background-color: lime;
}

@keyframes changeme {
  0% {
    width: 0em;
  }
  100% {
    width: 100%;
    background-color: orange;
  }
}
```

```css hidden
.linear {
  animation-timing-function: linear;
}

.start {
  animation-timing-function: steps(4, start);
}
.jump-start {
  animation-timing-function: steps(4, jump-start);
}
.end {
  animation-timing-function: steps(4, end);
}
.jump-end {
  animation-timing-function: steps(4, jump-end);
}
.jump-both {
  animation-timing-function: steps(4, jump-both);
}
.jump-none {
  animation-timing-function: steps(4, jump-none);
}
.step-start {
  animation-timing-function: step-start;
}
.step-end {
  animation-timing-function: step-end;
}
```

{{EmbedLiveSample("Schrittbeispiele", 600, 350)}}

Das folgende Bild zeigt Diagramme aller im Beispiel verwendeten `step()` Funktionswerte. Fortschritt der Eingabe (Zeit) und Ausgabe reichen von 0 bis 1.

![Ein Bild, das 'steps' Funktionsgraphen zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/animation-easing/step-function-graphs.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- {{cssxref('easing-function')}}
- [CSS-Easing-Funktionen](/de/docs/Web/CSS/Guides/Easing_functions) Modul
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
- [Kubische Bézier-Generierungstool](https://cubic-bezier.com/)
- Andere verwandte Animations-Eigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}
