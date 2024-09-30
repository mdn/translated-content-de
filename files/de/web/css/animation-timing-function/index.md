---
title: animation-timing-function
slug: Web/CSS/animation-timing-function
l10n:
  sourceCommit: 11b0f82fbdcc820866d8df218169d83a58b4f7e9
---

{{CSSRef}}

Die **`animation-timing-function`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, wie eine Animation im Laufe der Dauer jedes Zyklus voranschreitet.

{{EmbedInteractiveExample("pages/css/animation-timing-function.html")}}

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

  - : Die Easing-Funktion, die einer gegebenen Animation entspricht, wie durch {{cssxref("animation-name")}} bestimmt.

    Die Schlüsselwortwerte, die keine Schritte sind (`ease`, `linear`, `ease-in-out`, etc.), stellen jeweils kubische Bézier-Kurven mit festen Vier-Punkt-Werten dar, während der `cubic-bezier()`-Funktionswert die Angabe nicht vordefinierter Werte ermöglicht. Die `steps()`-Easing-Funktion unterteilt die Eingabezeit in eine bestimmte Anzahl gleicher Intervalle. Ihre Parameter umfassen eine Anzahl von Schritten und eine Schrittposition.

    - `linear`
      - : Entspricht `cubic-bezier(0.0, 0.0, 1.0, 1.0)`, animiert mit gleichmäßiger Geschwindigkeit.
    - `ease`
      - : Entspricht `cubic-bezier(0.25, 0.1, 0.25, 1.0)`, der Standardwert, erhöht die Geschwindigkeit bis zur Mitte der Animation und verlangsamt sich gegen Ende wieder.
    - `ease-in`
      - : Entspricht `cubic-bezier(0.42, 0, 1.0, 1.0)`, beginnt langsam, wobei die Geschwindigkeit der Übergangseigenschaft der Animation bis zum Abschluss zunimmt.
    - `ease-out`
      - : Entspricht `cubic-bezier(0, 0, 0.58, 1.0)`, beginnt schnell und verlangsamt sich, während die Animation fortschreitet.
    - `ease-in-out`

      - : Entspricht `cubic-bezier(0.42, 0, 0.58, 1.0)`, wobei die animierten Eigenschaften langsam übergehen, beschleunigen und dann wieder langsamer werden.

    - `cubic-bezier(<number [0,1]>, <number>, <number [0,1]>, <number>)`

      - : Eine vom Autor definierte kubische-Bézier-Kurve, wobei die ersten und dritten Werte im Bereich von 0 bis 1 liegen müssen.

    - `linear(<number> <percentage>{1,2}, …)`

      - : Die Funktion interpoliert linear zwischen den angegebenen Easing-Stopppunkten. Ein Stoppunkt ist ein Paar aus einem Ausgangsfortschritt und einem Eingabeprozentsatz. Der Eingabeprozentsatz ist optional und wird, wenn nicht angegeben, abgeleitet. Wird kein Eingabeprozentsatz angegeben, werden die ersten und letzten Stopppunkte auf `0%` und `100%` gesetzt, und die Stopppunkte in der Mitte erhalten Prozentwerte, die durch lineare Interpolation zwischen den nächstgelegenen vorherigen und nächsten Punkten mit einem Prozentwert abgeleitet werden.

    - `steps(<integer>, <step-position>)`

      - : Zeigt eine Animationsiteration entlang _n_ Stopps entlang der Übergänge an, wobei jeder Stopp für gleiche Zeitdauern angezeigt wird. Zum Beispiel, wenn _n_ 5 ist, gibt es 5 Schritte. Ob die Animation vorübergehend bei 0%, 20%, 40%, 60% und 80% hält, bei 20%, 40%, 60%, 80% und 100%, oder 5 Stopps zwischen 0% und 100% macht, oder 5 Stopps einschließlich der Marken 0% und 100% (bei 0%, 25%, 50%, 75% und 100%) macht, hängt davon ab, welche der folgenden Schrittpositionen verwendet wird:

        - `jump-start`
          - : Bezeichnet eine links-stetige Funktion, sodass der erste Sprung erfolgt, wenn die Animation beginnt.
        - `jump-end`
          - : Bezeichnet eine rechts-stetige Funktion, sodass der letzte Sprung erfolgt, wenn die Animation endet. Dies ist der Standard.
        - `jump-none`
          - : Es gibt keinen Sprung an beiden Enden, wodurch effektiv ein Schritt während der Interpolationsiteration entfernt wird. Stattdessen hält es sowohl bei der Marke 0% als auch bei der Marke 100% jeweils für 1/n der Dauer.
        - `jump-both`
          - : Beinhaltet Pausen sowohl bei der Marke 0% als auch bei der Marke 100%, wodurch effektiv ein Schritt während der Animationsiteration hinzugefügt wird.
        - `start`
          - : Entspricht `jump-start`.
        - `end`
          - : Entspricht `jump-end`.

    - `step-start`
      - : Entspricht `steps(1, jump-start)`
    - `step-end`
      - : Entspricht `steps(1, jump-end)`

> [!NOTE]
> Wenn Sie mehrere durch Kommas getrennte Werte in einer `animation-*`-Eigenschaft angeben, werden sie in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}-Namen erscheinen. Für Fälle, in denen die Anzahl der Animationen und die `animation-*`-Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animationswerteigenschaften](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

> **Hinweis:** `animation-timing-function` hat den gleichen Effekt bei der Erstellung von [CSS scroll-gesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) wie bei regulären zeitbasierten Animationen.

## Beschreibung

Easing-Funktionen können in einzelnen Keyframes innerhalb einer [@keyframes](/de/docs/Web/CSS/@keyframes)-Regel angegeben werden. Wenn in einem Keyframe keine **`animation-timing-function`** angegeben ist, wird der entsprechende Wert der **`animation-timing-function`** des Elements verwendet, auf das die Animation angewendet wird, um diesen Keyframe zu gestalten.

Innerhalb eines Keyframes ist `animation-timing-function` ein Attribut-spezifischer Deskriptor, nicht die gleichnamige Eigenschaft. Das Timing wird nicht animiert. Vielmehr wird eine Keyframe-Easing-Funktion auf einer Eigenschaft-für-Eigenschaft-Basis vom spezifizierten Keyframe an bis zum nächsten Keyframe angewendet, der diese Eigenschaft spezifiziert, oder bis zum Ende der Animation, wenn es keinen nachfolgenden Keyframe gibt, der diese Eigenschaft spezifiziert. Daher wird eine **`animation-timing-function`**, die im **`100%`**- oder **`to`**-Keyframe angegeben ist, niemals verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Alle Beispiele in diesem Abschnitt animieren die Eigenschaften `width` und `background-color` mehrerer `<div>`-Elemente mit unterschiedlichen `animation-timing-function`-Werten. Die Breite wird von `0` auf `100%` animiert und die Hintergrundfarbe von Grün auf Magenta.

### Beispiele für lineare Funktionen

Das Beispiel zeigt die Effekte verschiedener `linear()`-Easing-Funktionswerte.

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

Das folgende Bild zeigt Diagramme aller im Beispiel verwendeten `linear()`-Funktionswerte. Der Eingabefortschritt (Zeit) ist auf der x-Achse und der Ausgabefortschritt auf der y-Achse abgebildet. Gemäß der Syntax reicht der Eingabefortschritt von 0 bis 100% und der Ausgang von 0 bis 1.

![Ein Bild zeigt 'linear'-Funktionsgraphen](https://mdn.github.io/shared-assets/images/diagrams/css/animation-easing/linear-function-graphs.png)

Beachten Sie, dass der Ausgang vorwärts oder rückwärts gehen kann.

### Beispiele für kubische Bézier-Kurven

Das Beispiel zeigt die Effekte verschiedener Bézier-Kurven-Easing-Funktionen.

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

Das folgende Bild zeigt Diagramme aller im Beispiel verwendeten kubischen Bézier-Funktionswerte. Der Eingabefortschritt (Zeit) reicht von 0 bis 1 und der Ausgangsfortschritt reicht von 0 bis 1.

![Ein Bild zeigt 'cubic-bezier'-Funktionsgraphen](https://mdn.github.io/shared-assets/images/diagrams/css/animation-easing/cubic-bezier-function-graphs.png)

### Schritt-Beispiele

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

{{EmbedLiveSample("Step_examples", 600, 350)}}

Das folgende Bild zeigt Diagramme aller im Beispiel verwendeten `step()`-Funktionswerte. Der Eingabefortschritt (Zeit) und der Ausgabefortschritt reichen von 0 bis 1.

![Bild zeigt 'steps'-Funktionsgraphen](https://mdn.github.io/shared-assets/images/diagrams/css/animation-easing/step-function-graphs.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- {{cssxref('easing-function')}}
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
- [Werkzeug zur Generierung von kubischen Bézier-Kurven](https://cubic-bezier.com)
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}
