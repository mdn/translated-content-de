---
title: transition-timing-function
slug: Web/CSS/Reference/Properties/transition-timing-function
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`transition-timing-function`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Zwischenwerte für CSS-Eigenschaften berechnet werden, die von einem [Übergangseffekt](/de/docs/Web/CSS/Guides/Transitions/Using) betroffen sind.

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

Im Wesentlichen können Sie damit eine Beschleunigungskurve festlegen, sodass die Geschwindigkeit des Übergangs über seine Dauer variieren kann.

Diese Beschleunigungskurve wird unter Verwendung einer {{cssxref("easing-function")}} für jede zu übertragende Eigenschaft definiert.

Sie können mehrere `easing functions` festlegen; jede wird auf die entsprechende Eigenschaft angewendet, wie in der {{cssxref("transition-property")}} Eigenschaft angegeben, die als `transition-property`-Liste fungiert. Wenn weniger `easing functions` angegeben werden als in der `transition-property`-Liste, muss der Benutzeragent berechnen, welcher Wert verwendet wird, indem die Liste der Werte wiederholt wird, bis für jede Übergangseigenschaft ein Wert vorhanden ist. Wenn es mehr `easing functions` gibt, wird die Liste auf die richtige Größe gekürzt. In beiden Fällen bleibt die CSS-Deklaration gültig.

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
  - : Jede {{cssxref("easing-function")}} stellt die `easing function` dar, die mit der entsprechenden Eigenschaft zu verknüpfen ist, die übergangen werden soll, wie in {{cssxref("transition-property")}} definiert.

    Die Nicht-Schritt-Schlüsselwortwerte (ease, linear, ease-in-out usw.) stellen jeweils eine kubische Bézier-Kurve mit festen vier Punktwerten dar, wobei der `cubic-bezier()` Funktionswert einen nicht vordefinierten Wert zulässt. Die Schritt-`easing functions` teilen die Eingabezeit in eine angegebene Anzahl von Intervallen, die gleich lang sind. Es wird durch eine Anzahl von Schritten und eine Schrittposition definiert.
    - `ease`
      - : Entspricht `cubic-bezier(0.25, 0.1, 0.25, 1.0)`, dem Standardwert, der in der Mitte des Übergangs an Geschwindigkeit zunimmt und am Ende wieder langsamer wird.
    - `linear`
      - : Entspricht `cubic-bezier(0.0, 0.0, 1.0, 1.0)`, Übergänge mit gleichmäßiger Geschwindigkeit.
    - `ease-in`
      - : Entspricht `cubic-bezier(0.42, 0, 1.0, 1.0)`, beginnt langsam und die Übergangsgeschwindigkeit nimmt zu, bis sie vollständig ist.
    - `ease-out`
      - : Entspricht `cubic-bezier(0, 0, 0.58, 1.0)`, beginnt schnell zu übergehen und wird langsamer, während der Übergang fortschreitet.
    - `ease-in-out`
      - : Entspricht `cubic-bezier(0.42, 0, 0.58, 1.0)`, beginnt langsam zu übergehen, beschleunigt und wird dann wieder langsamer.
    - `cubic-bezier(p1, p2, p3, p4)`
      - : Eine vom Autor definierte kubische Bézier-Kurve, bei der die Werte p1 und p3 im Bereich von 0 bis 1 liegen müssen.
    - `steps(n, <jump-term>)`
      - : Zeigt den Übergang entlang von _n_ Haltestellen während des Übergangs an, wobei jede Haltestelle für* gleiche Zeitspannen angezeigt wird. Zum Beispiel, wenn \_n* 5 ist, gibt es 5 Schritte. Ob der Übergang vorübergehend bei 0%, 20%, 40%, 60% und 80%, bei 20%, 40%, 60%, 80% und 100% hält, 5 Haltestellen zwischen 0% und 100% entlang des Übergangs macht oder 5 Haltestellen einschließlich der 0% und 100% Marken (bei 0%, 25%, 50%, 75% und 100%) hängt davon ab, welcher der folgenden Sprungbegriffe verwendet wird:
        - `jump-start`
          - : Bezeichnet eine links-kontinuierliche Funktion, sodass der erste Sprung passiert, wenn der Übergang beginnt;
        - `jump-end`
          - : Bezeichnet eine rechts-kontinuierliche Funktion, sodass der letzte Sprung passiert, wenn die Animation endet;
        - `jump-none`
          - : Es gibt keinen Sprung an beiden Enden. Stattdessen wird sowohl bei der 0%-Marke als auch bei der 100%-Marke gehalten, jeweils für 1/n der Dauer.
        - `jump-both`
          - : Beinhaltet Pausen sowohl bei der 0% als auch bei der 100% Marke, fügt effektiv einen Schritt zur Übergangszeit hinzu.
        - `start`
          - : Das Gleiche wie `jump-start`.
        - `end`
          - : Das Gleiche wie `jump-end`.

    - `step-start`
      - : Entspricht `steps(1, jump-start)`
    - `step-end`
      - : Entspricht `steps(1, jump-end)`

## Barrierefreiheit

Einige Animationen können hilfreich sein, um Benutzern zu zeigen, welche Aktionen erwartet werden, Beziehungen innerhalb der Benutzeroberfläche anzuzeigen und Benutzern mitzuteilen, welche Aktionen durchgeführt wurden. Animationen können helfen, die kognitive Belastung zu verringern, Veränderungsblindheit zu verhindern und ein besseres räumliches Gedächtnis zu schaffen. Jedoch können einige Animationen für Menschen mit kognitiven Bedenken wie Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS) problematisch sein und bestimmte Arten von Bewegungen können ein Auslöser für vestibuläre Störungen, Epilepsie, Migräne und skotopische Empfindlichkeit sein.

Ziehen Sie in Betracht, eine Möglichkeit zum Anhalten oder Deaktivieren von Animationen bereitzustellen, sowie die Verwendung der [Reduced Motion Media Query](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) (oder des gleichwertigen [User-Agent-Client-Hinweises](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}), um ein ergänzendes Erlebnis für Benutzer zu schaffen, die eine Vorliebe für weniger Animationen geäußert haben.

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

### Schritt-Beispiele

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

- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions/Using)
- {{cssxref("easing-function")}}
- [CSS easing functions](/de/docs/Web/CSS/Guides/Easing_functions) Modul
- {{cssxref('transition')}}
- {{cssxref('transition-property')}}
- {{cssxref('transition-duration')}}
- {{cssxref('transition-delay')}}
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
