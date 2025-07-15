---
title: animation-timing-function
slug: Web/CSS/animation-timing-function
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`animation-timing-function`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie eine Animation über die Dauer jedes Zyklus fortschreitet.

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

Es ist oft praktisch, die Kurzform-Eigenschaft {{cssxref("animation")}} zu verwenden, um alle Animations-Eigenschaften auf einmal festzulegen.

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
  - : Die Easing-Funktion, die einer bestimmten Animation zugeordnet wird, wie durch {{cssxref("animation-name")}} bestimmt.

    Die Nicht-Step-Schlüsselwortwerte (`ease`, `linear`, `ease-in-out`, etc.) repräsentieren jeweils kubische Bézier-Kurven mit festen Vier-Punkt-Werten, während der Wert der `cubic-bezier()` Funktion nicht vordefinierte Werte zulässt. Die `steps()` Easing-Funktion unterteilt die Eingabezeit in eine angegebene Anzahl von gleich langen Intervallen. Ihre Parameter beinhalten eine Anzahl von Schritten und eine Schrittposition.
    - `linear`
      - : Entspricht `cubic-bezier(0.0, 0.0, 1.0, 1.0)`, animiert mit gleichmäßiger Geschwindigkeit.
    - `ease`
      - : Entspricht `cubic-bezier(0.25, 0.1, 0.25, 1.0)`, der Standardwert, erhöht die Geschwindigkeit in Richtung Mitte der Animation und verlangsamt sich am Ende.
    - `ease-in`
      - : Entspricht `cubic-bezier(0.42, 0, 1.0, 1.0)`, beginnt langsam, wobei die Geschwindigkeit des Übergangs der animierenden Eigenschaft bis zum Abschluss zunimmt.
    - `ease-out`
      - : Entspricht `cubic-bezier(0, 0, 0.58, 1.0)`, beginnt schnell und verlangsamt sich, während die Animation fortschreitet.
    - `ease-in-out`
      - : Entspricht `cubic-bezier(0.42, 0, 0.58, 1.0)`, wobei die animierenden Eigenschaften langsam übergehen, schneller werden und dann wieder langsamer werden.

    - `cubic-bezier(<number [0,1]>, <number>, <number [0,1]>, <number>)`
      - : Eine vom Autor definierte kubische Bézier-Kurve, wobei die ersten und dritten Werte im Bereich von 0 bis 1 liegen müssen.

    - `linear(<number> <percentage>{1,2}, …)`
      - : Die Funktion interpoliert linear zwischen den angegebenen Easing-Stoppunkten. Ein Stoppunkt ist ein Paar aus einem Ausgabeprozess und einem Eingabewert in Prozent. Der Eingabeprozentsatz ist optional und wird abgeleitet, wenn er nicht angegeben ist. Wenn kein Eingabeprozentsatz angegeben ist, werden die ersten und letzten Stoppunkte auf `0%` und `100%` gesetzt, und die Stoppunkte in der Mitte erhalten Prozentsatzwerte, die durch lineare Interpolation zwischen den nächstgelegenen vorherigen und nächsten Punkten, die einen Prozentsatzwert haben, abgeleitet werden.

    - `steps(<integer>, <step-position>)`
      - : Zeigt eine Animationsiteration über _n_ Stufen entlang des Übergangs, wobei jede Stufe für gleich lange Zeit angezeigt wird. Zum Beispiel, wenn _n_ 5 ist, gibt es 5 Schritte. Ob die Animation vorübergehend bei 0%, 20%, 40%, 60% und 80%, bei 20%, 40%, 60%, 80% und 100% hält oder 5 Stopps zwischen 0% und 100% macht oder 5 Stopps einschließlich der Marken 0% und 100% macht (bei 0%, 25%, 50%, 75%, und 100%), hängt davon ab, welche der folgenden Schrittpositionen verwendet wird:
        - `jump-start`
          - : Bezeichnet eine links-seitige Funktion, sodass der erste Sprung erfolgt, wenn die Animation beginnt.
        - `jump-end`
          - : Bezeichnet eine rechts-seitige Funktion, sodass der letzte Sprung erfolgt, wenn die Animation endet. Dies ist der Standard.
        - `jump-none`
          - : Es gibt keinen Sprung an einem der Enden, was effektiv einen Schritt während der Interpolationsiteration entfernt. Stattdessen hält es sowohl bei der Marke 0% als auch bei der Marke 100%, jeweils für 1/n der Dauer.
        - `jump-both`
          - : Beinhaltet Pausen sowohl bei den Marken 0% als auch 100%, was effektiv einen Schritt während der Animationsiteration hinzufügt.
        - `start`
          - : Entspricht `jump-start`.
        - `end`
          - : Entspricht `jump-end`.

    - `step-start`
      - : Entspricht `steps(1, jump-start)`
    - `step-end`
      - : Entspricht `steps(1, jump-end)`

> [!NOTE]
> Wenn Sie mehrere durch Kommas getrennte Werte auf einer `animation-*` Eigenschaft angeben, werden sie in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Situationen, in denen die Anzahl der Animationen und `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Mehrere Animations-Eigenschaftswerte festlegen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

> [!NOTE]
> `animation-timing-function` hat denselben Effekt bei der Erstellung von [CSS Scroll-gesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) wie bei regulären zeitbasierten Animationen.

## Beschreibung

Easing-Funktionen können für einzelne Keyframes in einer {{cssxref("@keyframes")}} Regel angegeben werden. Wenn kein **`animation-timing-function`** für ein Keyframe angegeben wird, wird der entsprechende Wert von **`animation-timing-function`** des Elements, auf das die Animation angewendet wird, für dieses Keyframe verwendet.

Innerhalb eines Keyframes ist `animation-timing-function` ein at-rule-spezifischer Deskriptor, nicht die gleichnamige Eigenschaft. Das Timing wird nicht animiert. Vielmehr wird die Easing-Funktion eines Keyframes für jede Eigenschaft von dem Keyframe, auf dem sie spezifiziert ist, bis zum nächsten Keyframe, der diese Eigenschaft spezifiziert, oder bis zum Ende der Animation angewendet, wenn kein nachfolgendes Keyframe diese Eigenschaft spezifiziert. Daher wird eine auf dem **`100%`** oder **`to`** Keyframe spezifizierte **`animation-timing-function`** niemals verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Alle Beispiele in diesem Abschnitt animieren die `width` und `background-color` Eigenschaften mehrerer `<div>` Elemente mit verschiedenen `animation-timing-function` Werten. Die Breite wird von `0` auf `100%` und die Hintergrundfarbe von Lime auf Magenta animiert.

### Lineare Funktionsbeispiele

Das Beispiel zeigt die Effekte verschiedener `linear()` Easing-Funktionswerte.

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

Das folgende Bild zeigt Graphen aller `linear()` Funktionswerte, die in diesem Beispiel verwendet werden. Der Eingabeprozess (Zeit) wird auf der x-Achse und der Ausgabeprozess auf der y-Achse dargestellt. Laut der Syntax reicht der Eingabeprozess von 0 bis 100% und der Ausgabeprozess von 0 bis 1.

![Ein Bild, das Graphen der 'linear' Funktion zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/animation-easing/linear-function-graphs.png)

Beachten Sie, dass die Ausgabe vorwärts oder rückwärts gehen kann.

### Kubische Bézier-Beispiele

Das Beispiel zeigt die Effekte verschiedener Bézier-Kurve Easing-Funktionen.

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

Das folgende Bild zeigt Graphen aller kubischen Bézier-Funktionswerte, die in diesem Beispiel verwendet werden. Der Eingabeprozess (Zeit) reicht von 0 bis 1 und der Ausgabeprozess reicht von 0 bis 1.

![Ein Bild, das Graphen der 'cubic-bezier' Funktion zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/animation-easing/cubic-bezier-function-graphs.png)

### Schritt-Beispiele

Dieses Beispiel zeigt die Effekte mehrerer Schritt Easing-Funktionswerte.

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

Das folgende Bild zeigt Graphen aller `step()` Funktionswerte, die in diesem Beispiel verwendet werden. Der Eingabeprozess (Zeit) und der Ausgabeprozess reichen von 0 bis 1.

![Bild, das Graphen der 'steps' Funktion zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/animation-easing/step-function-graphs.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- {{cssxref('easing-function')}}
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
- [Werkzeug zur Generierung von kubischen Bézierkurven](https://cubic-bezier.com/)
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}
