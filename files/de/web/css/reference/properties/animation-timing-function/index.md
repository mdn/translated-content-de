---
title: "`animation-timing-function` CSS property"
short-title: animation-timing-function
slug: Web/CSS/Reference/Properties/animation-timing-function
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`animation-timing-function`** legt fest, wie eine Animation im Verlauf jedes Zyklus voranschreitet.

Häufig ist es praktisch, mit der Kurzschreibweise {{cssxref("animation")}} alle Animationseigenschaften auf einmal festzulegen.

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
  - : Die durch {{cssxref("animation-name")}} bestimmte Beschleunigungsfunktion für eine Animation.

    Die Schlüsselwörter ohne Stufen (`ease`, `linear`, `ease-in-out` usw.) stehen jeweils für kubische Bézierkurven mit vier festgelegten Punktwerten. Mit der Funktion `cubic-bezier()` lassen sich dagegen eigene Werte angeben. Die Beschleunigungsfunktion `steps()` unterteilt die Eingabezeit in eine angegebene Anzahl gleich langer Intervalle. Ihre Parameter umfassen die Anzahl der Schritte und eine Schrittposition.
    - `linear`
      - : Entspricht `cubic-bezier(0.0, 0.0, 1.0, 1.0)`; die Animation läuft mit gleichmäßiger Geschwindigkeit.
    - `ease`
      - : Entspricht `cubic-bezier(0.25, 0.1, 0.25, 1.0)` und ist der Standardwert. Die Geschwindigkeit nimmt bis zur Mitte der Animation zu und gegen Ende wieder ab.
    - `ease-in`
      - : Entspricht `cubic-bezier(0.42, 0, 1.0, 1.0)`; die Animation beginnt langsam, und die Geschwindigkeit des Übergangs der animierten Eigenschaft nimmt bis zum Ende zu.
    - `ease-out`
      - : Entspricht `cubic-bezier(0, 0, 0.58, 1.0)`; die Animation beginnt schnell und wird im weiteren Verlauf langsamer.
    - `ease-in-out`
      - : Entspricht `cubic-bezier(0.42, 0, 0.58, 1.0)`; der Übergang der animierten Eigenschaften beginnt langsam, wird schneller und verlangsamt sich dann wieder.

    - `cubic-bezier(<number [0,1]> , <number> , <number [0,1]> , <number>)`
      - : Eine benutzerdefinierte kubische Bézierkurve, bei der der erste und der dritte Wert zwischen 0 und 1 liegen müssen.

    - `linear(<number> <percentage>{1,2}, …)`
      - : Die Funktion interpoliert linear zwischen den angegebenen Stützpunkten der Beschleunigungsfunktion. Ein Stützpunkt besteht aus einem Ausgabefortschritt und einem Eingabeprozentwert. Der Eingabeprozentwert ist optional und wird abgeleitet, wenn er nicht angegeben wird. Fehlt ein Eingabeprozentwert, werden für den ersten und den letzten Stützpunkt `0%` beziehungsweise `100%` festgelegt. Die Prozentwerte der dazwischenliegenden Stützpunkte werden durch lineare Interpolation zwischen dem jeweils nächstgelegenen vorherigen und nachfolgenden Stützpunkt mit einem Prozentwert ermittelt.

    - `steps(<integer>, <step-position>)`
      - : Stellt einen Animationsdurchlauf mit _n_ Stufen dar, wobei jede Stufe gleich lange angezeigt wird. Wenn _n_ beispielsweise 5 ist, gibt es 5 Stufen. Von der verwendeten Schrittposition hängt ab, ob die Animation bei 0 %, 20 %, 40 %, 60 % und 80 % oder bei 20 %, 40 %, 60 %, 80 % und 100 % verweilt, ob sie zwischen 0 % und 100 % fünf Stufen durchläuft oder ob sie fünf Stufen einschließlich der Marken bei 0 % und 100 % durchläuft (bei 0 %, 25 %, 50 %, 75 % und 100 %):
        - `jump-start`
          - : Bezeichnet eine linksstetige Funktion, bei der der erste Sprung zu Beginn der Animation erfolgt.
        - `jump-end`
          - : Bezeichnet eine rechtsstetige Funktion, bei der der letzte Sprung am Ende der Animation erfolgt. Dies ist der Standardwert.
        - `jump-none`
          - : An keinem der beiden Enden erfolgt ein Sprung. Dadurch entfällt effektiv eine Stufe während des Animationsdurchlaufs. Stattdessen verweilt die Animation sowohl bei 0 % als auch bei 100 % jeweils für 1/n der Dauer.
        - `jump-both`
          - : Umfasst Pausen sowohl bei 0 % als auch bei 100 %. Dadurch kommt während des Animationsdurchlaufs effektiv eine Stufe hinzu.
        - `start`
          - : Entspricht `jump-start`.
        - `end`
          - : Entspricht `jump-end`.

    - `step-start`
      - : Entspricht `steps(1, jump-start)`.
    - `step-end`
      - : Entspricht `steps(1, jump-end)`.

> [!NOTE]
> Wenn Sie für eine `animation-*`-Eigenschaft mehrere durch Kommas getrennte Werte angeben, werden diese den Animationen in der Reihenfolge zugeordnet, in der die Werte von {{cssxref("animation-name")}} erscheinen. Was geschieht, wenn die Anzahl der Animationen und der Werte einer `animation-*`-Eigenschaft nicht übereinstimmt, erfahren Sie unter [Mehrere Werte für Animationseigenschaften festlegen](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

> [!NOTE]
> `animation-timing-function` hat beim Erstellen [scrollgesteuerter CSS-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) dieselbe Wirkung wie bei herkömmlichen zeitbasierten Animationen.

## Beschreibung

Beschleunigungsfunktionen können für einzelne Keyframes innerhalb einer {{cssxref("@keyframes")}}-Regel angegeben werden. Wenn für ein Keyframe keine **`animation-timing-function`** angegeben ist, wird für dieses Keyframe der entsprechende Wert von **`animation-timing-function`** des Elements verwendet, auf das die Animation angewendet wird.

Innerhalb eines Keyframes ist `animation-timing-function` ein für diese At-Regel spezifischer Deskriptor und nicht die gleichnamige Eigenschaft. Der zeitliche Verlauf selbst wird nicht animiert. Stattdessen wird die Beschleunigungsfunktion eines Keyframes für jede Eigenschaft einzeln angewendet: vom Keyframe, in dem sie angegeben ist, bis zum nächsten Keyframe, das diese Eigenschaft angibt, oder bis zum Ende der Animation, wenn kein weiteres Keyframe diese Eigenschaft angibt. Daher wird eine im Keyframe **`100%`** oder **`to`** angegebene **`animation-timing-function`** niemals verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Alle Beispiele in diesem Abschnitt animieren die Eigenschaften `width` und `background-color` mehrerer `<div>`-Elemente mit unterschiedlichen Werten für `animation-timing-function`. Die Breite wird von `0` bis `100%` und die Hintergrundfarbe von Limettengrün bis Magenta animiert.

### Beispiele für die Funktion `linear()`

Das Beispiel zeigt die Auswirkungen verschiedener Werte der Beschleunigungsfunktion `linear()`.

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

Die folgende Abbildung zeigt die Graphen aller in diesem Beispiel verwendeten Werte der Funktion `linear()`. Auf der x-Achse ist der Eingabefortschritt (die Zeit) und auf der y-Achse der Ausgabefortschritt dargestellt. Gemäß der Syntax reicht der Eingabefortschritt von 0 bis 100 % und der Ausgabefortschritt von 0 bis 1.

![Abbildung mit Graphen der Funktion „linear“](https://mdn.github.io/shared-assets/images/diagrams/css/animation-easing/linear-function-graphs.png)

Beachten Sie, dass sich der Ausgabefortschritt vorwärts oder rückwärts bewegen kann.

### Beispiele für kubische Bézierkurven

Das Beispiel zeigt die Auswirkungen verschiedener Beschleunigungsfunktionen mit Bézierkurven.

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

{{EmbedLiveSample("cubic-bézier_examples", 600, 250)}}

Die folgende Abbildung zeigt die Graphen aller in diesem Beispiel verwendeten Werte der kubischen Bézierfunktion. Der Eingabefortschritt (die Zeit) und der Ausgabefortschritt reichen jeweils von 0 bis 1.

![Abbildung mit Graphen der Funktion „cubic-bezier“](https://mdn.github.io/shared-assets/images/diagrams/css/animation-easing/cubic-bezier-function-graphs.png)

### Beispiele für Stufenfunktionen

Dieses Beispiel zeigt die Auswirkungen verschiedener Werte von Stufen-Beschleunigungsfunktionen.

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

Die folgende Abbildung zeigt die Graphen aller in diesem Beispiel verwendeten Werte der Funktion `step()`. Der Eingabefortschritt (die Zeit) und der Ausgabefortschritt reichen jeweils von 0 bis 1.

![Abbildung mit Graphen der Funktion „steps“](https://mdn.github.io/shared-assets/images/diagrams/css/animation-easing/step-function-graphs.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animations/Using)
- {{cssxref('easing-function')}}
- Modul [CSS-Beschleunigungsfunktionen](/de/docs/Web/CSS/Guides/Easing_functions)
- JavaScript-API [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
- [Werkzeug zum Erstellen kubischer Bézierkurven](https://cubic-bezier.com/)
- Weitere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}
