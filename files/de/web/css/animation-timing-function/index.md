---
title: animation-timing-function
slug: Web/CSS/animation-timing-function
l10n:
  sourceCommit: 11b0f82fbdcc820866d8df218169d83a58b4f7e9
---

{{CSSRef}}

Die **`animation-timing-function`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie eine Animation während der Dauer jedes Zyklus fortschreitet.

{{EmbedInteractiveExample("pages/css/animation-timing-function.html")}}

Es ist oft praktisch, die Kurzschreibweiseigenschaft {{cssxref("animation")}} zu verwenden, um alle Animationseigenschaften auf einmal festzulegen.

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

  - : Die Easing-Funktion, die einer bestimmten Animation gemäß der Definition durch {{cssxref("animation-name")}} entspricht.

    Die Schlüsselwort-Werte ohne Schritte (`ease`, `linear`, `ease-in-out`, usw.) repräsentieren jeweils kubische Bézier-Kurven mit festen Vier-Punkt-Werten, während der `cubic-bezier()` Funktionswert nicht vordefinierte Werte spezifizieren lässt. Die `steps()` Easing-Funktion teilt die Eingabezeit in eine angegebene Anzahl von gleich langen Intervallen. Zu ihren Parametern gehören eine Anzahl von Schritten und eine Schrittdarstellung.

    - `linear`
      - : Entspricht `cubic-bezier(0.0, 0.0, 1.0, 1.0)`, animiert mit gleichmäßiger Geschwindigkeit.
    - `ease`
      - : Entspricht `cubic-bezier(0.25, 0.1, 0.25, 1.0)`, der Standardwert, erhöht die Geschwindigkeit in Richtung der Mitte der Animation und verlangsamt sich gegen Ende wieder.
    - `ease-in`
      - : Entspricht `cubic-bezier(0.42, 0, 1.0, 1.0)`, beginnt langsam, die Geschwindigkeit der Übergänge der animierenden Eigenschaft nimmt zu, bis die Animation abgeschlossen ist.
    - `ease-out`
      - : Entspricht `cubic-bezier(0, 0, 0.58, 1.0)`, beginnt schnell, verlangsamt sich im Laufe der Animation.
    - `ease-in-out`

      - : Entspricht `cubic-bezier(0.42, 0, 0.58, 1.0)`, wobei die animierenden Eigenschaften langsam übergehen, schneller werden und dann wieder langsamer.

    - `cubic-bezier(<number [0,1]> , <number> , <number [0,1]> , <number>)`

      - : Eine vom Autor definierte kubische Bézier-Kurve, wobei der erste und der dritte Wert im Bereich von 0 bis 1 liegen müssen.

    - `linear(<number> <percentage>{1,2}, …)`

      - : Die Funktion interpoliert linear zwischen den angegebenen Easing-Stoppunkten. Ein Stoppunkt ist ein Paar aus einem Ausgabe-Fortschritt und einem Eingabe-Prozentsatz. Der Eingabe-Prozentsatz ist optional und wird abgeleitet, wenn er nicht angegeben ist. Wenn kein Eingabe-Prozentsatz angegeben wird, werden die ersten und letzten Stoppunkte auf `0%` und `100%` gesetzt, und die Stoppunkte in der Mitte erhalten Prozentsätze, die linear zwischen den am nächsten liegenden vorherigen und nächsten Punkten interpoliert werden, die einen Prozentsatzwert haben.

    - `steps(<integer>, <step-position>)`

      - : Zeigt eine Animationsiteration entlang _n_ Stopps entlang der Transition an und zeigt jeden Stopp für gleich lange Zeitspannen an. Beispielsweise, wenn _n_ 5 ist, gibt es 5 Schritte. Ob die Animation vorübergehend bei 0 %, 20 %, 40 %, 60 % und 80 %, bei 20 %, 40 %, 60 %, 80 % und 100 % anhält oder 5 Stopps zwischen 0 % und 100 % entlang der Animation macht, oder 5 Stopps einschließlich der 0 % und 100 % Marken macht (bei 0 %, 25 %, 50 %, 75 % und 100 %), hängt davon ab, welche der folgenden Schrittdarstellungen verwendet wird:

        - `jump-start`
          - : Bezeichnet eine linksseitig kontinuierliche Funktion, sodass der erste Sprung beim Start der Animation passiert.
        - `jump-end`
          - : Bezeichnet eine rechtsseitig kontinuierliche Funktion, sodass der letzte Sprung beim Ende der Animation passiert. Dies ist der Standard.
        - `jump-none`
          - : Es gibt keinen Sprung an beiden Enden, was effektiv einen Schritt während der Interpolation-Iteration entfernt. Stattdessen hält es sowohl bei der 0 %-Marke als auch bei der 100 %-Marke, jeweils für 1/n der Dauer.
        - `jump-both`
          - : Beinhaltet Pausen bei der 0 %- und 100 %-Marke und fügt damit effektiv einen Schritt während der Animationsiteration hinzu.
        - `start`
          - : Wie `jump-start`.
        - `end`
          - : Wie `jump-end`.

    - `step-start`
      - : Entspricht `steps(1, jump-start)`
    - `step-end`
      - : Entspricht `steps(1, jump-end)`

> [!NOTE]
> Wenn Sie mehrere durch Kommata getrennte Werte für eine `animation-*` Eigenschaft angeben, werden sie in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Situationen, in denen die Anzahl der Animationen und `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animationswerte](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

> **Hinweis:** `animation-timing-function` hat denselben Effekt bei der Erstellung von [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) wie bei regulären zeitgesteuerten Animationen.

## Beschreibung

Easing-Funktionen können auf einzelne Keyframes in einer [@keyframes](/de/docs/Web/CSS/@keyframes) Regel angewendet werden. Wenn keine **`animation-timing-function`** in einem Keyframe angegeben wird, wird der entsprechende Wert von **`animation-timing-function`** von dem Element, auf welches die Animation angewendet wird, für diesen Keyframe verwendet.

Innerhalb eines Keyframes ist `animation-timing-function` ein At-Rule-spezifischer Deskriptor, nicht die gleichnamige Eigenschaft. Das Timing wird nicht animiert. Stattdessen wird die Easing-Funktion eines Keyframes auf Eigenschaftsbasis von dem Keyframe, auf dem sie spezifiziert ist, bis zum nächsten Keyframe angewandt, der diese Eigenschaft spezifiziert, oder bis zum Ende der Animation, wenn es keinen nachfolgenden Keyframe gibt, der diese Eigenschaft spezifiziert. Daher wird eine **`animation-timing-function`**, die im **`100%`** oder **`to`** Keyframe angegeben ist, niemals verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Alle Beispiele in diesem Abschnitt animieren die `width` und `background-color` Eigenschaften mehrerer `<div>` Elemente mit verschiedenen `animation-timing-function` Werten. Die Breite wird von `0` auf `100%` animiert und die Hintergrundfarbe wechselt von Lime zu Magenta.

### Lineare Funktionsbeispiele

Das Beispiel demonstriert die Effekte verschiedener `linear()` Easing-Funktionswerte.

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

Das folgende Bild zeigt Graphen aller `linear()` Funktionswerte, die in diesem Beispiel verwendet werden. Der Eingabefortschritt (Zeit) wird auf der x-Achse und der Ausgabefortschritt auf der y-Achse dargestellt. Gemäß der Syntax reicht der Eingabefortschritt von 0 bis 100%, und der Ausgabefortschritt reicht von 0 bis 1.

![Ein Bild, das 'linear' Funktionsgraphen zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/animation-easing/linear-function-graphs.png)

Beachten Sie, dass der Output vorwärts oder rückwärts gehen kann.

### Bézierkurvenbeispiele

Das Beispiel demonstriert die Effekte verschiedener Bézierkurven Easing-Funktionen.

```html hidden
<div class="parent">
  <div class="linear">linear</div>
  <div class="ease">ease</div>
  <div class="easein">ease-in</div>
  <div class="easeout">ease-out</div>
  <div class="easeinout">ease-in-out</div>
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
.easein {
  animation-timing-function: ease-in;
}
.easeout {
  animation-timing-function: ease-out;
}
.easeinout {
  animation-timing-function: ease-in-out;
}
.cb {
  animation-timing-function: cubic-bezier(0.5, -0.5, 1, 1.5);
}
```

{{EmbedLiveSample("Cubic-Bezier_examples", 600, 250)}}

Das folgende Bild zeigt Graphen aller verwendeten kubischen Bézier-Funktionswerte in diesem Beispiel. Der Eingabefortschritt (Zeit) reicht von 0 bis 1 und der Ausgabefortschritt reicht von 0 bis 1.

![Ein Bild, das 'cubic-bezier' Funktionsgraphen zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/animation-easing/cubic-bezier-function-graphs.png)

### Schrittbeispiele

Dieses Beispiel demonstriert die Effekte verschiedener Schritt Easing-Funktionswerte.

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

Das folgende Bild zeigt Graphen aller `step()` Funktionswerte, die in diesem Beispiel verwendet werden. Der Eingabefortschritt (Zeit) und Ausgabefortschritt reichen von 0 bis 1.

![Bild zeigt 'steps' Funktionsgraphen](https://mdn.github.io/shared-assets/images/diagrams/css/animation-easing/step-function-graphs.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- {{cssxref('easing-function')}}
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
- [Kubic-Bézier-Generierungstool](https://cubic-bezier.com)
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}
