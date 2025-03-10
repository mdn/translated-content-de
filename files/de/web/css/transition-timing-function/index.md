---
title: transition-timing-function
slug: Web/CSS/transition-timing-function
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

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

Dies ermöglicht es Ihnen im Wesentlichen, eine Beschleunigungskurve festzulegen, sodass sich die Geschwindigkeit des Übergangs über dessen Dauer ändern kann.

Diese Beschleunigungskurve wird unter Verwendung einer {{cssxref("&lt;easing-function&gt;")}} für jede zu überführende Eigenschaft definiert.

Sie können mehrere Easing-Funktionen angeben; jede wird auf die entsprechende Eigenschaft angewendet, wie durch die Eigenschaft {{ cssxref("transition-property") }} angegeben, die als `transition-property`-Liste fungiert. Wenn weniger Easing-Funktionen angegeben werden, als in der `transition-property`-Liste vorhanden sind, muss der Benutzeragent berechnen, welcher Wert verwendet wird, indem die Liste der Werte wiederholt wird, bis für jede Übergangseigenschaft ein Wert vorhanden ist. Wenn es mehr Easing-Funktionen gibt, wird die Liste auf die richtige Größe gekürzt. In beiden Fällen bleibt die CSS-Deklaration gültig.

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

  - : Jede {{cssxref("&lt;easing-function&gt;")}} repräsentiert die Easing-Funktion, die mit der entsprechenden Übergangseigenschaft verknüpft werden soll, wie in {{ cssxref("transition-property") }} definiert.

    Die nicht-schrittbezogenen Schlüsselwortwerte (ease, linear, ease-in-out, etc.) repräsentieren jeweils eine kubische Bézier-Kurve mit festgelegten vier Punktwerten, wobei der Wert der Funktion `cubic-bezier()` eine nicht vordefinierte Wert Festlegung ermöglicht. Die Schritt-Easing-Funktionen teilen die Eingabezeit in eine bestimmte Anzahl gleichlanger Intervalle. Sie wird durch eine Anzahl von Schritten und eine Schrittabfolge definiert.

    - `ease`
      - : Entspricht `cubic-bezier(0.25, 0.1, 0.25, 1.0)`, dem Standardwert, nimmt die Geschwindigkeit in der Mitte des Übergangs zu und wird am Ende wieder langsamer.
    - `linear`
      - : Entspricht `cubic-bezier(0.0, 0.0, 1.0, 1.0)`, Übergänge mit gleichmäßiger Geschwindigkeit.
    - `ease-in`
      - : Entspricht `cubic-bezier(0.42, 0, 1.0, 1.0)`, beginnt langsam, wobei die Übergangsgeschwindigkeit zunimmt, bis der Übergang abgeschlossen ist.
    - `ease-out`
      - : Entspricht `cubic-bezier(0, 0, 0.58, 1.0)`, beginnt schnell und verlangsamt sich, während der Übergang fortschreitet.
    - `ease-in-out`
      - : Entspricht `cubic-bezier(0.42, 0, 0.58, 1.0)`, beginnt langsam, beschleunigt und verlangsamt sich dann erneut.
    - `cubic-bezier(p1, p2, p3, p4)`
      - : Eine vom Autor definierte kubische Bézier-Kurve, wobei die Werte p1 und p3 im Bereich von 0 bis 1 liegen müssen.
    - `steps(n, <jump-term>)`

      - : Zeigt den Übergang über _n Haltepunkte entlang des Übergangs, wobei jeder Haltepunkt für_ gleich lange Zeiträume angezeigt wird. Zum Beispiel, wenn _n_ 5 ist, gibt es 5 Schritte. Ob der Übergang vorübergehend bei 0 %, 20 %, 40 %, 60 % und 80 %, bei 20 %, 40 %, 60 %, 80 % und 100 % anhält, 5 Haltepunkte zwischen 0 % und 100 % macht oder 5 Haltepunkte einschließlich der 0 %- und 100 %-Marken (bei 0 %, 25 %, 50 %, 75 % und 100 %) macht, hängt davon ab, welcher der folgenden Sprungbegriffe verwendet wird:

        - `jump-start`
          - : Bezeichnet eine linksseitig kontinuierliche Funktion, sodass der erste Sprung auftritt, wenn der Übergang beginnt;
        - `jump-end`
          - : Bezeichnet eine rechtsseitig kontinuierliche Funktion, sodass der letzte Sprung auftritt, wenn die Animation endet;
        - `jump-none`
          - : Es gibt keinen Sprung an den Enden. Stattdessen wird sowohl bei der 0%-Marke als auch bei der 100%-Marke jeweils für 1/n der Dauer gehalten.
        - `jump-both`
          - : Beinhaltet Pausen bei den 0% und 100%-Marken und fügt effektiv einen Schritt während der Übergangszeit hinzu.
        - `start`
          - : Dasselbe wie `jump-start`.
        - `end`
          - : Dasselbe wie `jump-end`.

    - `step-start`
      - : Entspricht `steps(1, jump-start)`
    - `step-end`
      - : Entspricht `steps(1, jump-end)`

## Barrierefreiheit

Einige Animationen könnten hilfreich sein, um Benutzern zu zeigen, welche Aktionen erwartet werden, Beziehungen innerhalb der Benutzeroberfläche zu verdeutlichen und darüber zu informieren, welche Aktionen durchgeführt wurden. Animationen können helfen, die kognitive Belastung zu verringern, Änderungseffekte zu verhindern und das Erinnern räumlicher Beziehungen zu verbessern. Allerdings können einige Animationen für Menschen mit kognitiven Beeinträchtigungen wie Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS) problematisch sein, und bestimmte Arten von Bewegungen können ein Auslöser für Vestibuläre Störungen, Epilepsie, Migräne und skotopische Empfindlichkeit sein.

Erwägen Sie, einen Mechanismus zum Anhalten oder Deaktivieren von Animationen bereitzustellen, sowie die Verwendung der [Abfrage nach reduzierter Bewegung](/de/docs/Web/CSS/@media/prefers-reduced-motion) (oder eines entsprechenden [User Agent client hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}), um eine ergänzende Erfahrung für Benutzer zu schaffen, die eine Präferenz für weniger Animationen ausgedrückt haben.

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
  for (let i = 0; i < els.length; i++) {
    els[i].classList.toggle("box1");
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

### Stufenbeispiele

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
  for (let i = 0; i < els.length; i++) {
    els[i].classList.toggle("box1");
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
