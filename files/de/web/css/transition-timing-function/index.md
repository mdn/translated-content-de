---
title: transition-timing-function
slug: Web/CSS/transition-timing-function
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
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

Dies ermöglicht es Ihnen im Wesentlichen, eine Beschleunigungskurve festzulegen, sodass die Geschwindigkeit des Übergangs über seine Dauer variieren kann.

Diese Beschleunigungskurve wird durch eine {{cssxref("&lt;easing-function&gt;")}} für jede Eigenschaft definiert, die überführt werden soll.

Sie können mehrere Easing-Funktionen angeben; jede wird auf die entsprechende Eigenschaft angewendet, wie durch die {{ cssxref("transition-property") }} Eigenschaft spezifiziert, die als `transition-property`-Liste fungiert. Wenn weniger Easing-Funktionen angegeben sind als in der `transition-property`-Liste, muss der Benutzeragent berechnen, welcher Wert verwendet wird, indem die Liste der Werte so lange wiederholt wird, bis für jede Übergangseigenschaft einer vorhanden ist. Wenn es mehr Easing-Funktionen gibt, wird die Liste auf die richtige Größe gekürzt. In beiden Fällen bleibt die CSS-Deklaration gültig.

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
  - : Jede {{cssxref("&lt;easing-function&gt;")}} stellt die Easing-Funktion dar, die mit der entsprechenden zu überführenden Eigenschaft verknüpft werden soll, wie in {{ cssxref("transition-property") }} definiert.

    Die Nicht-Step-Keyword-Werte (ease, linear, ease-in-out, etc.) repräsentieren jeweils eine kubische Bézierkurve mit festen vier Punktwerten, wobei der `cubic-bezier()` Funktionswert einen nicht vordefinierten Wert ermöglicht. Die Step-Easing-Funktionen teilen die Eingabezeit in eine bestimmte Anzahl von Intervallen gleicher Länge. Sie wird durch eine Anzahl von Schritten und eine Stufenposition definiert.
    - `ease`
      - : Entspricht `cubic-bezier(0.25, 0.1, 0.25, 1.0)`, dem Standardwert, beschleunigt in der Mitte des Übergangs und verlangsamt sich wieder am Ende.
    - `linear`
      - : Entspricht `cubic-bezier(0.0, 0.0, 1.0, 1.0)`, Übergänge mit gleichmäßiger Geschwindigkeit.
    - `ease-in`
      - : Entspricht `cubic-bezier(0.42, 0, 1.0, 1.0)`, beginnt langsam und die Übergangsgeschwindigkeit erhöht sich bis zum Abschluss.
    - `ease-out`
      - : Entspricht `cubic-bezier(0, 0, 0.58, 1.0)`, beginnt schnell und verlangsamt sich, während der Übergang fortschreitet.
    - `ease-in-out`
      - : Entspricht `cubic-bezier(0.42, 0, 0.58, 1.0)`, beginnt langsam, beschleunigt und verlangsamt sich dann wieder.
    - `cubic-bezier(p1, p2, p3, p4)`
      - : Eine vom Autor definierte kubische Bézierkurve, wobei die Werte p1 und p3 im Bereich von 0 bis 1 liegen müssen.
    - `steps(n, <jump-term>)`
      - : Zeigt den Übergang entlang von _n Stops, die gleiche Längen haben, an. Wenn \_n_ zum Beispiel 5 ist, gibt es 5 Schritte. Ob der Übergang vorübergehend bei 0 %, 20 %, 40 %, 60 % und 80 %, bei 20 %, 40 %, 60 %, 80 % und 100 % anhält oder 5 Stopps zwischen 0 % und 100 % macht, oder 5 Stopps einschließlich der 0 %- und 100 %-Marke (bei 0 %, 25 %, 50 %, 75 % und 100 %) hängt davon ab, welcher der folgenden Sprungbegriffe verwendet wird:
        - `jump-start`
          - : Bezeichnet eine linksstetige Funktion, sodass der erste Sprung erfolgt, wenn der Übergang beginnt;
        - `jump-end`
          - : Bezeichnet eine rechtsstetige Funktion, sodass der letzte Sprung erfolgt, wenn die Animation endet;
        - `jump-none`
          - : Es gibt keinen Sprung an einem der Enden. Stattdessen hält er sowohl bei der 0 %-Marke als auch bei der 100 %-Marke, jeweils für 1/n der Dauer.
        - `jump-both`
          - : Beinhaltet Pausen sowohl bei den 0 %- als auch den 100 %-Markierungen und fügt effektiv einen Schritt während der Übergangszeit hinzu.
        - `start`
          - : Gleichbedeutend mit `jump-start`.
        - `end`
          - : Gleichbedeutend mit `jump-end`.

    - `step-start`
      - : Entspricht `steps(1, jump-start)`
    - `step-end`
      - : Entspricht `steps(1, jump-end)`

## Barrierefreiheit

Einige Animationen können hilfreich sein, um Benutzer zu führen und zu verdeutlichen, welche Aktionen erwartet werden, um Beziehungen innerhalb der Benutzeroberfläche zu zeigen und um Benutzern mitzuteilen, welche Aktionen stattgefunden haben. Animationen können helfen, die kognitive Belastung zu reduzieren, Veränderungsblindheit zu verhindern und ein besseres Erinnerungsvermögen in räumlichen Beziehungen zu schaffen. Einige Animationen können jedoch für Personen mit kognitiven Beeinträchtigungen wie Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS) problematisch sein und bestimmte Arten von Bewegungen können ein Auslöser für Vestibularsyndrome, Epilepsie und Migräne sowie skotopische Empfindlichkeit sein.

Überlegen Sie, eine Möglichkeit zum Anhalten oder Deaktivieren von Animationen anzubieten, sowie die [Reduced Motion Media Query](/de/docs/Web/CSS/@media/prefers-reduced-motion) (oder einen äquivalenten [User Agent Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}) zu verwenden, um eine komplementäre Erfahrung für Benutzer zu schaffen, die eine Präferenz für weniger Animationen ausgedrückt haben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Cubic-Bezier Beispiele

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

### Step Beispiele

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
- {{cssxref('transition')}}
- {{cssxref('transition-property')}}
- {{cssxref('transition-duration')}}
- {{cssxref('transition-delay')}}
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
