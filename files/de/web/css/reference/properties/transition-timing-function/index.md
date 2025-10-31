---
title: transition-timing-function
slug: Web/CSS/Reference/Properties/transition-timing-function
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`transition-timing-function`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Zwischenwerte für CSS-Eigenschaften berechnet werden, die von einem [Übergangseffekt](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) betroffen sind.

{{InteractiveExample("CSS Demo: transition-timing-function")}}

```css interactive-example-choice
transition-timing-function: linear;
```

```css interactive-example-choice
transition-timing-function: ease-in;
```

```css interactive-example-choice
transition-timing-function: steps(6, end);
```

```css interactive-example-choice
transition-timing-function: cubic-bezier(0.29, 1.01, 1, -0.68);
```

```html interactive-example
<section id="default-example">
  <div id="example-element">Hover to see<br />the transition.</div>
</section>
```

```css interactive-example
#example-element {
  background-color: #e4f0f5;
  color: black;
  padding: 1rem;
  border-radius: 0.5rem;
  font: 1em monospace;
  width: 100%;
  transition: margin-right 2s;
}

#default-example:hover > #example-element {
  background-color: #990099;
  color: white;
  margin-right: 40%;
}
```

Im Wesentlichen ermöglicht sie es Ihnen, eine Beschleunigungskurve festzulegen, sodass die Geschwindigkeit des Übergangs über seine Dauer variieren kann.

Diese Beschleunigungskurve wird durch eine {{cssxref("&lt;easing-function&gt;")}} für jede zu übergehende Eigenschaft definiert.

Sie können mehrere "easing"-Funktionen angeben; jede wird auf die entsprechende Eigenschaft angewendet, wie in der {{ cssxref("transition-property") }} Eigenschaft angegeben, die als `transition-property`-Liste fungiert. Wenn weniger "easing"-Funktionen angegeben sind als in der `transition-property`-Liste, muss der Benutzeragent berechnen, welcher Wert verwendet wird, indem die Werteliste so oft wiederholt wird, bis es für jede Übergangseigenschaft einen gibt. Wenn es mehr "easing"-Funktionen gibt, wird die Liste auf die richtige Größe abgeschnitten. In beiden Fällen bleibt die CSS-Deklaration gültig.

## Syntax

```css
/* Keyword values */
transition-timing-function: ease;
transition-timing-function: ease-in;
transition-timing-function: ease-out;
transition-timing-function: ease-in-out;
transition-timing-function: linear;
transition-timing-function: step-start;
transition-timing-function: step-end;

/* Function values */
transition-timing-function: steps(4, jump-end);
transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);

/* Steps Function keywords */
transition-timing-function: steps(4, jump-start);
transition-timing-function: steps(10, jump-end);
transition-timing-function: steps(20, jump-none);
transition-timing-function: steps(5, jump-both);
transition-timing-function: steps(6, start);
transition-timing-function: steps(8, end);

/* Multiple easing functions */
transition-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1, 0.1);

/* Global values */
transition-timing-function: inherit;
transition-timing-function: initial;
transition-timing-function: revert;
transition-timing-function: revert-layer;
transition-timing-function: unset;
```

### Werte

- `<easing-function>`
  - : Jede {{cssxref("&lt;easing-function&gt;")}} stellt die "easing"-Funktion dar, die mit der entsprechenden Eigenschaft verknüpft werden soll, um Übergänge zu definieren, wie in {{ cssxref("transition-property") }} beschrieben.

    Die nicht-stufenweisen Schlüsselwortwerte (ease, linear, ease-in-out, etc.) repräsentieren jeweils eine kubische Bézier-Kurve mit festen Vier-Punkt-Werten, wobei der `cubic-bezier()`-Funktionswert die Verwendung eines nicht vordefinierten Wertes ermöglicht. Die stufenweisen "easing"-Funktionen teilen die Eingabezeit in eine angegebene Anzahl gleich langer Intervalle. Sie wird durch eine Anzahl von Schritten und eine Stufenposition definiert.
    - `ease`
      - : Entspricht `cubic-bezier(0.25, 0.1, 0.25, 1.0)`, dem Standardwert, der in der Mitte des Übergangs an Geschwindigkeit zunimmt und am Ende wieder verlangsamt.
    - `linear`
      - : Entspricht `cubic-bezier(0.0, 0.0, 1.0, 1.0)`, Übergänge mit gleichmäßiger Geschwindigkeit.
    - `ease-in`
      - : Entspricht `cubic-bezier(0.42, 0, 1.0, 1.0)`, beginnt langsam, wobei die Übergangsgeschwindigkeit zunimmt, bis sie abgeschlossen ist.
    - `ease-out`
      - : Entspricht `cubic-bezier(0, 0, 0.58, 1.0)`, beginnt schnell zu wechseln und verlangsamt sich, während der Übergang fortschreitet.
    - `ease-in-out`
      - : Entspricht `cubic-bezier(0.42, 0, 0.58, 1.0)`, beginnt langsam zu wechseln, beschleunigt und verlangsamt sich dann wieder.
    - `cubic-bezier(p1, p2, p3, p4)`
      - : Eine vom Autor definierte kubische-Bézier-Kurve, wobei die p1- und p3-Werte im Bereich von 0 bis 1 liegen müssen.
    - `steps(n, <jump-term>)`
      - : Zeigt den Übergang über _n Haltepunkte entlang des Übergangs, wobei jeder Halt für_ gleich lange Zeit angezeigt wird. Zum Beispiel, wenn _n_ 5 ist, gibt es 5 Schritte. Ob der Übergang vorübergehend bei 0%, 20%, 40%, 60% und 80%, bei 20%, 40%, 60%, 80% und 100% hält, oder 5 Haltepunkte zwischen den 0% und 100% macht oder 5 Haltepunkte inklusive der 0% und 100% Marken (bei 0%, 25%, 50%, 75% und 100%) macht, hängt davon ab, welcher der folgenden Sprungbegriffe verwendet wird:
        - `jump-start`
          - : Bezeichnet eine linksstetige Funktion, sodass der erste Sprung erfolgt, wenn der Übergang beginnt;
        - `jump-end`
          - : Bezeichnet eine rechtsstetige Funktion, sodass der letzte Sprung erfolgt, wenn die Animation endet;
        - `jump-none`
          - : Es gibt keinen Sprung an beiden Enden. Stattdessen wird sowohl an der 0% Marke als auch an der 100% Marke jeweils für 1/n der Dauer gehalten.
        - `jump-both`
          - : Beinhaltet Pausen sowohl an der 0% Marke als auch an der 100% Marke und fügt effektiv während der Übergangszeit einen Schritt hinzu.
        - `start`
          - : Entspricht `jump-start`.
        - `end`
          - : Entspricht `jump-end`.

    - `step-start`
      - : Entspricht `steps(1, jump-start)`
    - `step-end`
      - : Entspricht `steps(1, jump-end)`

## Barrierefreiheit

Einige Animationen können hilfreich sein, um Benutzer zu führen und zu zeigen, welche Aktionen erwartet werden, um Beziehungen innerhalb der Benutzeroberfläche zu zeigen und Benutzer darüber zu informieren, welche Aktionen stattgefunden haben. Animationen können helfen, die kognitive Belastung zu reduzieren, das Phänomen der "Change Blindness" zu verhindern und ein besseres Erinnerungsvermögen für räumliche Beziehungen zu schaffen. Einige Animationen können jedoch problematisch für Menschen mit kognitiven Herausforderungen wie Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS) sein, und bestimmte Bewegungen können ein Auslöser für vestibuläre Störungen, Epilepsie sowie Migräne und Skotopische Empfindlichkeit sein.

Erwägen Sie, eine Mechanismus zum Pausieren oder Deaktivieren von Animationen bereitzustellen, sowie die Verwendung der [Reduced Motion Media Query](/de/docs/Web/CSS/@media/prefers-reduced-motion) (oder des gleichwertigen [User Agent Client Hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}), um ein ergänzendes Erlebnis für Benutzer zu schaffen, die eine Präferenz für weniger Animationen geäußert haben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiele für kubische Bezierkurven

```html hidden
<div class="parent">
  <div class="ease">ease</div>
  <div class="ease-in">ease-in</div>
  <div class="ease-out">ease-out</div>
  <div class="ease-in-out">ease-in-out</div>
  <div class="linear">linear</div>
  <div class="cb">cubic-bezier(0.2,-2,0.8,2)</div>
</div>
```

```css hidden
.parent {
}
.parent > div[class] {
  width: 12em;
  min-width: 12em;
  margin-bottom: 4px;
  background-color: black;
  border: 1px solid red;
  color: white;
  transition-property: all;
  transition-duration: 7s;
}
.parent > div.box1 {
  width: 90vw;
  min-width: 24em;
  background-color: magenta;
  color: yellow;
  border: 1px solid orange;
  transition-property: all;
  transition-duration: 2s;
}
```

```js hidden
function updateTransition() {
  const els = document.querySelectorAll(".parent > div[class]");
  for (const el of els) {
    el.classList.toggle("box1");
  }
}

const intervalID = setInterval(updateTransition, 10000);
```

```css
.ease {
  transition-timing-function: ease;
}
.ease-in {
  transition-timing-function: ease-in;
}
.ease-out {
  transition-timing-function: ease-out;
}
.ease-in-out {
  transition-timing-function: ease-in-out;
}
.linear {
  transition-timing-function: linear;
}
.cb {
  transition-timing-function: cubic-bezier(0.2, -2, 0.8, 2);
}
```

{{EmbedLiveSample("Cubic-Bezier_examples")}}

### Beispiele für Schritte

```html hidden
<div class="parent">
  <div class="jump-start">jump-start</div>
  <div class="jump-end">jump-end</div>
  <div class="jump-both">jump-both</div>
  <div class="jump-none">jump-none</div>
  <div class="step-start">step-start</div>
  <div class="step-end">step-end</div>
</div>
```

```css hidden
.parent {
}
.parent > div[class] {
  width: 12em;
  min-width: 12em;
  margin-bottom: 4px;
  background-color: black;
  border: 1px solid red;
  color: white;
  transition-property: all;
  transition-duration: 7s;
}
.parent > div.box1 {
  width: 90vw;
  min-width: 24em;
  background-color: magenta;
  color: yellow;
  border: 1px solid orange;
  transition-property: all;
  transition-duration: 2s;
}
```

```js hidden
function updateTransition() {
  const els = document.querySelectorAll(".parent > div[class]");
  for (const el of els) {
    el.classList.toggle("box1");
  }
}

const intervalID = setInterval(updateTransition, 10000);
```

```css
.jump-start {
  transition-timing-function: steps(5, jump-start);
}
.jump-end {
  transition-timing-function: steps(5, jump-end);
}
.jump-none {
  transition-timing-function: steps(5, jump-none);
}
.jump-both {
  transition-timing-function: steps(5, jump-both);
}
.step-start {
  transition-timing-function: step-start;
}
.step-end {
  transition-timing-function: step-end;
}
```

{{EmbedLiveSample("Step_examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- [`<easing-function>`](/de/docs/Web/CSS/easing-function)
- [CSS-Easing-Funktionen](/de/docs/Web/CSS/CSS_easing_functions) Modul
- {{cssxref('transition')}}
- {{cssxref('transition-property')}}
- {{cssxref('transition-duration')}}
- {{cssxref('transition-delay')}}
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
