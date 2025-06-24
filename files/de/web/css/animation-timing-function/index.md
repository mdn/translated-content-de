---
title: animation-timing-function
slug: Web/CSS/animation-timing-function
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{CSSRef}}

Die CSS-Eigenschaft **`animation-timing-function`** legt fest, wie eine Animation im Verlauf jedes Zyklus voranschreitet.

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
  border: 5px solid #333;
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
"use strict";

window.addEventListener("load", () => {
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

  - : Die der Animation entsprechende easing-Funktion, wie durch {{cssxref("animation-name")}} bestimmt.

    Die nicht-Schritte-Schlüsselwortwerte (`ease`, `linear`, `ease-in-out` usw.) stellen jeweils kubische Bézier-Kurven mit festen Vier-Punkt-Werten dar, während der Wert `cubic-bezier()` nicht vordefinierte Werte zulässt. Die `steps()` easing-Funktion unterteilt die Eingabezeit in eine bestimmte Anzahl gleichlanger Intervalle. Zu ihren Parametern gehören eine Anzahl von Schritten und eine Schritte-Position.

    - `linear`
      - : Entspricht `cubic-bezier(0.0, 0.0, 1.0, 1.0)`, animiert mit gleichmäßiger Geschwindigkeit.
    - `ease`
      - : Entspricht `cubic-bezier(0.25, 0.1, 0.25, 1.0)`, der Standardwert, beschleunigt in der Mitte der Animation und verlangsamt am Ende.
    - `ease-in`
      - : Entspricht `cubic-bezier(0.42, 0, 1.0, 1.0)`, beginnt langsam und die Übergangsgeschwindigkeit der animierten Eigenschaft nimmt bis zur Vollendung zu.
    - `ease-out`
      - : Entspricht `cubic-bezier(0, 0, 0.58, 1.0)`, beginnt schnell und verlangsamt sich, während die Animation fortschreitet.
    - `ease-in-out`

      - : Entspricht `cubic-bezier(0.42, 0, 0.58, 1.0)`, wobei die animierten Eigenschaften langsam übergehen, beschleunigen und dann wieder verlangsamen.

    - `cubic-bezier(<number [0,1]> , <number> , <number [0,1]> , <number>)`

      - : Eine vom Autor definierte kubische Bézier-Kurve, wobei der erste und der dritte Wert im Bereich von 0 bis 1 liegen müssen.

    - `linear(<number> <percentage>{1,2}, …)`

      - : Die Funktion interpoliert linear zwischen den bereitgestellten easing-Stoppunkten. Ein Stoppunkt ist ein Paar aus einem Ausgabefortschritt und einem Eingabeprozentsatz. Der Eingabeprozentsatz ist optional und wird abgeleitet, wenn nicht angegeben. Wenn kein Eingabeprozentsatz angegeben ist, werden die ersten und letzten Stoppunkte auf `0%` und `100%` gesetzt, und die Stoppunkte in der Mitte erhalten Prozentsatzwerte, die durch lineare Interpolation zwischen den nächstgelegenen vorherigen und nächsten Punkten, die einen Prozentsatzwert haben, bestimmt werden.

    - `steps(<integer>, <step-position>)`

      - : Zeigt eine Animationsiteration entlang _n_ Stopps während des Übergangs an, wobei jeder Stopp für gleich lange Zeit angezeigt wird. Wenn beispielsweise _n_ 5 ist, gibt es 5 Schritte. Ob die Animation vorübergehend bei 0%, 20%, 40%, 60% und 80%, auf 20%, 40%, 60%, 80% und 100%, oder in 5 Stopps zwischen 0% und 100% anhält oder 5 Stopps einschließlich der 0%- und 100%-Markierung setzt (auf 0%, 25%, 50%, 75% und 100%), hängt davon ab, welche der folgenden Schritte-Positionen verwendet wird:
        - `jump-start`
          - : Bezeichnet eine linksstetige Funktion, sodass der erste Sprung erfolgt, wenn die Animation beginnt.
        - `jump-end`
          - : Bezeichnet eine rechtsstetige Funktion, sodass der letzte Sprung erfolgt, wenn die Animation endet. Dies ist der Standardwert.
        - `jump-none`
          - : Es gibt keinen Sprung an beiden Enden, wodurch effektiv ein Schritt während der Interpolationsiteration entfernt wird. Stattdessen verweilt es sowohl bei der 0%-Marke als auch bei der 100%-Marke, jeweils für 1/n der Dauer.
        - `jump-both`
          - : Umfasst Pausen sowohl bei der 0%- als auch bei der 100%-Marke und fügt effektiv einen Schritt während der Animationsiteration hinzu.
        - `start`
          - : Entspricht `jump-start`.
        - `end`
          - : Entspricht `jump-end`.

    - `step-start`
      - : Entspricht `steps(1, jump-start)`
    - `step-end`
      - : Entspricht `steps(1, jump-end)`

> [!NOTE]
> Wenn Sie mehrere kommagetrennte Werte bei einer `animation-*` Eigenschaft angeben, werden diese in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Situationen, in denen die Anzahl der Animationen und die `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Setting multiple animation property values](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

> [!NOTE] > `animation-timing-function` hat denselben Effekt bei der Erstellung von [CSS scroll-driven animations](/de/docs/Web/CSS/CSS_scroll-driven_animations) wie bei regulären zeitbasierten Animationen.

## Beschreibung

Easing-Funktionen können in einzelnen Keyframes in einer {{cssxref("@keyframes")}} Regel spezifiziert werden. Wenn in einem Keyframe keine **`animation-timing-function`** angegeben ist, wird der entsprechende Wert von **`animation-timing-function`** des Elements verwendet, auf das die Animation angewendet wird.

Innerhalb eines Keyframes ist `animation-timing-function` ein at-rule-spezifischer Deskriptor, nicht die gleichnamige Eigenschaft. Das Timing wird nicht animiert. Vielmehr wird eine easing-Funktion eines Keyframes für jede Eigenschaft vom angegebenen Keyframe bis zum nächsten Keyframe, der diese Eigenschaft spezifiziert, oder bis zum Ende der Animation angewendet, wenn kein nachfolgender Keyframe diese Eigenschaft spezifiziert. Daher wird eine auf dem **`100%`**- oder **`to`**-Keyframe spezifizierte **`animation-timing-function`** niemals verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Alle Beispiele in diesem Abschnitt animieren die Eigenschaften `width` und `background-color` mehrerer `<div>`-Elemente mit verschiedenen `animation-timing-function`-Werten. Die Breite wird von `0` bis `100%` animiert und die Hintergrundfarbe von Lime zu Magenta.

### Beispiele für lineare Funktionen

Das Beispiel zeigt die Effekte verschiedener `linear()` easing-Funktionswerte.

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

{{EmbedLiveSample("Linear function examples", 600, 300)}}

Das folgende Bild zeigt Diagramme aller in diesem Beispiel verwendeten `linear()`-Funktionswerte. Die Eingabefortschritte (Zeit) sind auf der x-Achse und die Ausgabefortschritte auf der y-Achse aufgetragen. Entsprechend der Syntax reicht der Eingabefortschritt von 0 bis 100% und der Ausgabefortschritt von 0 bis 1.

![Ein Bild, das 'linear' Funktionsgrafen zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/animation-easing/linear-function-graphs.png)

Beachten Sie, dass der Ausgabeprozess vorwärts oder rückwärts gehen kann.

### Bézier-Kurven-Beispiele

Das Beispiel zeigt die Effekte verschiedener Bézier-Kurven-easing-Funktionen.

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

{{EmbedLiveSample("Cubic-Bezier_examples", 600, 250)}}

Das folgende Bild zeigt Diagramme aller in diesem Beispiel verwendeten kubischen Bézier-Funktionswerte. Die Eingabefortschritte (Zeit) reichen von 0 bis 1 und die Ausgabefortschritte reichen von 0 bis 1.

![Ein Bild, das 'cubic-bezier' Funktionsgrafen zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/animation-easing/cubic-bezier-function-graphs.png)

### Step-Beispiele

Dieses Beispiel zeigt die Effekte mehrerer Step-easing-Funktionswerte.

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

{{EmbedLiveSample("Step_examples", 600, 350)}}

Das folgende Bild zeigt Diagramme aller in diesem Beispiel verwendeten `step()`-Funktionswerte. Die Eingabefortschritte (Zeit) und Ausgabefortschritte reichen von 0 bis 1.

![Ein Bild, das 'steps' Funktionsgrafen zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/animation-easing/step-function-graphs.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using CSS animations](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- {{cssxref('easing-function')}}
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
- [Cubic Bézier-Generator Werkzeug](https://cubic-bezier.com/)
- Andere damit verbundene Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}
