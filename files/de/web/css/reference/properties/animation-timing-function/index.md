---
title: animation-timing-function
slug: Web/CSS/Reference/Properties/animation-timing-function
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`animation-timing-function`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie eine Animation während der Dauer jedes Zyklus fortschreitet.

Es ist oft praktisch, die Kurzschreibweise {{cssxref("animation")}} zu verwenden, um alle Animationseigenschaften auf einmal festzulegen.

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

- {{cssxref("easing-function")}}
  - : Die Easing-Funktion, die einer bestimmten Animation entspricht, wie durch {{cssxref("animation-name")}} bestimmt.

    Die nicht von Schritten abgeleiteten Schlüsselwortwerte (`ease`, `linear`, `ease-in-out`, etc.) repräsentieren jeweils kubische Bézier-Kurven mit festgelegten Vier-Punkt-Werten, während der `cubic-bezier()` Funktionswert die Angabe nicht vordefinierter Werte ermöglicht. Die `steps()` Easing-Funktion teilt die Eingabezeit in eine festgelegte Anzahl gleichlanger Intervalle. Ihre Parameter umfassen eine Anzahl von Schritten und eine Schrittposition.
    - `linear`
      - : Entspricht `cubic-bezier(0.0, 0.0, 1.0, 1.0)`, animiert mit gleichmäßiger Geschwindigkeit.
    - `ease`
      - : Entspricht `cubic-bezier(0.25, 0.1, 0.25, 1.0)`, der Standardwert, beschleunigt in der Mitte der Animation und verlangsamt sich am Ende wieder.
    - `ease-in`
      - : Entspricht `cubic-bezier(0.42, 0, 1.0, 1.0)`, beginnt langsam, wobei die Geschwindigkeit des Übergangs der animierenden Eigenschaft zunimmt, bis vollständig abgeschlossen.
    - `ease-out`
      - : Entspricht `cubic-bezier(0, 0, 0.58, 1.0)`, beginnt schnell und verlangsamt sich, während die Animation fortschreitet.
    - `ease-in-out`
      - : Entspricht `cubic-bezier(0.42, 0, 0.58, 1.0)`, wobei die animierenden Eigenschaften langsam übergehen, beschleunigen und dann wieder verlangsamen.

    - `cubic-bezier(<number [0,1]> , <number> , <number [0,1]> , <number>)`
      - : Eine vom Autor definierte kubische Bézier-Kurve, bei der der erste und dritte Wert im Bereich von 0 bis 1 liegen müssen.

    - `linear(<number> <percentage>{1,2}, …)`
      - : Die Funktion interpoliert linear zwischen den angegebenen Easing-Stoppunkten. Ein Stoppunkt ist ein Paar aus einem Ausgabefortschritt und einem Eingabeprozentsatz. Der Eingabeprozentsatz ist optional und wird abgeleitet, wenn nicht angegeben. Wenn kein Eingabeprozentsatz angegeben wird, werden die ersten und letzten Stoppunkte auf `0%` und `100%` gesetzt und die Stoppunkte in der Mitte erhalten Prozentsätze, die durch lineare Interpolation zwischen den nächstgelegenen vorherigen und nächsten Punkten, die einen Prozentsatzwert haben, abgeleitet werden.

    - `steps(<integer>, <step-position>)`
      - : Zeigt eine Animationsiteration entlang _n_ Stopps entlang des Übergangs an, wobei jeder Stopp für gleich lange Zeiten angezeigt wird. Zum Beispiel, wenn _n_ 5 ist, gibt es 5 Schritte. Ob die Animation vorübergehend bei 0%, 20%, 40%, 60% und 80%, bei 20%, 40%, 60%, 80% und 100% hält, oder 5 Stopps zwischen den 0% und 100% der Animation macht, oder 5 Stopps inklusive der 0%- und 100%-Markierungen (bei 0%, 25%, 50%, 75% und 100%) einlegt, hängt davon ab, welche der folgenden Schrittpositionen verwendet wird:
        - `jump-start`
          - : Bezeichnet eine linksseitig kontinuierliche Funktion, sodass der erste Sprung bei Beginn der Animation erfolgt.
        - `jump-end`
          - : Bezeichnet eine rechtseitig kontinuierliche Funktion, sodass der letzte Sprung am Ende der Animation erfolgt. Dies ist der Standard.
        - `jump-none`
          - : Es gibt keinen Sprung an beiden Enden, was während der Interpolation effektiv einen Schritt entfernt. Stattdessen hält es sowohl bei der 0%-Marke als auch bei der 100%-Marke, jeweils für 1/n der Dauer.
        - `jump-both`
          - : Beinhaltet Pausen sowohl bei der 0%- als auch der 100%-Marke, was effektiv einen Schritt während der Animationsiteration hinzufügt.
        - `start`
          - : Gleich wie `jump-start`.
        - `end`
          - : Gleich wie `jump-end`.

    - `step-start`
      - : Entspricht `steps(1, jump-start)`
    - `step-end`
      - : Entspricht `steps(1, jump-end)`

> [!NOTE]
> Wenn Sie mehrere durch Kommas getrennte Werte für eine `animation-*`-Eigenschaft angeben, werden sie in der Reihenfolge auf die Animationen angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Situationen, in denen die Anzahl der Animationen und `animation-*`-Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animationseigenschaftswerte](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

> [!NOTE]
> `animation-timing-function` hat die gleiche Wirkung bei der Erstellung von [CSS scroll-driven animations](/de/docs/Web/CSS/Guides/Scroll-driven_animations) wie bei regulären zeitbasierten Animationen.

## Beschreibung

Easing-Funktionen können auf individuellen Keyframes in einer {{cssxref("@keyframes")}} Regel angegeben werden. Wenn auf einem Keyframe keine **`animation-timing-function`** angegeben ist, wird der entsprechende Wert der **`animation-timing-function`** des Elements verwendet, auf das die Animation angewendet wird.

Innerhalb eines Keyframes ist `animation-timing-function` ein at-rule-spezifischer Deskriptor, nicht die Eigenschaft gleichen Namens. Das Timing wird nicht animiert. Vielmehr wird eine Easing-Funktion eines Keyframes auf Basis der Eigenschaft von Keyframe zu Keyframe angewendet, auf der sie angegeben ist, bis zum nächsten Keyframe, der diese Eigenschaft angibt, oder bis zum Ende der Animation, wenn kein nachfolgender Keyframe diese Eigenschaft angibt. Somit wird eine auf dem **`100%`** oder **`to`** Keyframe angegebene **`animation-timing-function`** niemals verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Alle Beispiele in diesem Abschnitt animieren die `width`- und `background-color`-Eigenschaften mehrerer `<div>` Elemente mit unterschiedlichen `animation-timing-function` Werten. Die Breite wird von `0` auf `100%` animiert, und die Hintergrundfarbe wird von Lime auf Magenta animiert.

### Beispiele für lineare Funktionen

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

{{EmbedLiveSample("Beispiele für lineare Funktionen", 600, 300)}}

Das folgende Bild zeigt Graphen aller `linear()` Funktionswerte, die in diesem Beispiel verwendet werden. Eingabefortschritt (Zeit) wird auf der x-Achse und Ausgabefortschritt auf der y-Achse dargestellt. Entsprechend der Syntax reicht der Eingabefortschritt von 0 bis 100%, und der Ausgabefortschritt reicht von 0 bis 1.

![Ein Bild, das 'linear' Funktionsgraphen zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/animation-easing/linear-function-graphs.png)

Beachten Sie, dass der Ausgabewert vorwärts oder rückwärts gehen kann.

### Cubic-Bézier Beispiele

Das Beispiel zeigt die Effekte verschiedener Bézier-Kurven-Easing-Funktionen.

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

{{EmbedLiveSample("Cubic-Bézier-Beispiele", 600, 250)}}

Das folgende Bild zeigt Graphen aller kubischen Bézier-Funktionswerte, die in diesem Beispiel verwendet werden. Der Eingabefortschritt (Zeit) reicht von 0 bis 1 und der Ausgabefortschritt reicht von 0 bis 1.

![Ein Bild, das 'cubic-bezier' Funktionsgraphen zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/animation-easing/cubic-bezier-function-graphs.png)

### Schrittbeispiele

Dieses Beispiel zeigt die Effekte mehrerer Schritt-Easing-Funktionswerte.

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

Das folgende Bild zeigt Graphen aller `step()` Funktionswerte, die in diesem Beispiel verwendet werden. Der Eingabefortschritt (Zeit) und der Ausgabefortschritt reichen von 0 bis 1.

![Bild das 'steps' Funktionsgraphen zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/animation-easing/step-function-graphs.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- {{cssxref('easing-function')}}
- Modul [CSS easing functions](/de/docs/Web/CSS/Guides/Easing_functions)
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
- [Werkzeug zur Erzeugung kubischer Bézier-Kurven](https://cubic-bezier.com/)
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}
