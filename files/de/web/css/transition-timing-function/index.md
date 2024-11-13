---
title: transition-timing-function
slug: Web/CSS/transition-timing-function
l10n:
  sourceCommit: 2c49a844f820f191f98b13130e0075bbeed530f3
---

{{CSSRef}}

Die **`transition-timing-function`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie Zwischenwerte für CSS-Eigenschaften berechnet werden, die von einem [Übergangseffekt](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) beeinflusst werden.

{{EmbedInteractiveExample("pages/css/transition-timing-function.html")}}

Im Wesentlichen können Sie damit eine Beschleunigungskurve festlegen, sodass die Geschwindigkeit des Übergangs über seine Dauer variieren kann.

Diese Beschleunigungskurve wird durch eine {{cssxref("&lt;easing-function&gt;")}} für jede zu übergehende Eigenschaft definiert.

Sie können mehrere Easing-Funktionen angeben; jede wird auf die entsprechende Eigenschaft angewendet, wie durch die Eigenschaft {{ cssxref("transition-property") }} festgelegt, die als `transition-property`-Liste fungiert. Wenn weniger Easing-Funktionen angegeben sind als in der `transition-property`-Liste, muss der Benutzeragent berechnen, welcher Wert verwendet wird, indem die Liste der Werte so oft wiederholt wird, bis es für jede Übergangseigenschaft einen gibt. Wenn es mehr Easing-Funktionen gibt, wird die Liste auf die richtige Größe gekürzt. In beiden Fällen bleibt die CSS-Deklaration gültig.

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

  - : Jede {{cssxref("&lt;easing-function&gt;")}} stellt die Easing-Funktion dar, die mit der entsprechenden Eigenschaft, die übergangen werden soll, verknüpft wird, wie in {{ cssxref("transition-property") }} definiert.

    Die Nicht-Schritt-Schlüsselwortwerte (ease, linear, ease-in-out, etc.) stellen jeweils eine kubische Bézier-Kurve mit festen vier Punktwerten dar, wobei der Wert `cubic-bezier()` eine nicht vordefinierte Wertsetzung ermöglicht. Die Schritt-Easing-Funktionen teilen die Eingabezeit in eine angegebene Anzahl von Intervallen gleicher Länge. Sie wird durch eine Anzahl von Schritten und eine Schrittposition definiert.

    - `ease`
      - : Entspricht `cubic-bezier(0.25, 0.1, 0.25, 1.0)`, dem Standardwert, steigert die Geschwindigkeit in der Mitte des Übergangs, verlangsamt sich am Ende.
    - `linear`
      - : Entspricht `cubic-bezier(0.0, 0.0, 1.0, 1.0)`, Übergänge mit gleichmäßiger Geschwindigkeit.
    - `ease-in`
      - : Entspricht `cubic-bezier(0.42, 0, 1.0, 1.0)`, beginnt langsam, mit zunehmender Übergangsgeschwindigkeit bis zum Abschluss.
    - `ease-out`
      - : Entspricht `cubic-bezier(0, 0, 0.58, 1.0)`, beginnt schnell zu übergehen, verlangsamt sich mit fortschreitendem Übergang.
    - `ease-in-out`
      - : Entspricht `cubic-bezier(0.42, 0, 0.58, 1.0)`, beginnt langsam zu übergehen, beschleunigt sich, und verlangsamt sich dann erneut.
    - `cubic-bezier(p1, p2, p3, p4)`
      - : Eine benutzerdefinierte kubische Bézier-Kurve, wobei die Werte p1 und p3 im Bereich von 0 bis 1 liegen müssen.
    - `steps(n, <jump-term>)`

      - : Zeigt den Übergang entlang _n Stopps entlang des Übergangs an, wobei jeder Stopp für_ gleiche Zeitlängen angezeigt wird. Wenn _n_ beispielsweise 5 ist, gibt es 5 Schritte. Ob der Übergang vorübergehend bei 0%, 20%, 40%, 60% und 80% stoppt, bei 20%, 40%, 60%, 80% und 100% oder 5 Stopps zwischen 0% und 100% gemacht werden, oder 5 Stopps inklusive der 0%- und 100%-Marken (bei 0%, 25%, 50%, 75% und 100%), hängt davon ab, welcher der folgenden Sprungbegriffe verwendet wird:

        - `jump-start`
          - : Bezeichnet eine linkskontinuierliche Funktion, sodass der erste Sprung beim Beginn des Übergangs erfolgt;
        - `jump-end`
          - : Bezeichnet eine rechtskontinuierliche Funktion, sodass der letzte Sprung erfolgt, wenn die Animation endet;
        - `jump-none`
          - : Es gibt keinen Sprung an einem der Enden. Stattdessen wird an beiden der 0%-Marke und der 100%-Marke gehalten, jeweils für 1/n der Dauer
        - `jump-both`
          - : Enthält Pausen sowohl bei den 0%- als auch bei den 100%-Marken und fügt effektiv einen Schritt während der Übergangszeit hinzu.
        - `start`
          - : Wie `jump-start`.
        - `end`
          - : Wie `jump-end`.

    - `step-start`
      - : Entspricht `steps(1, jump-start)`
    - `step-end`
      - : Entspricht `steps(1, jump-end)`

## Zugänglichkeit

Einige Animationen können nützlich sein, um Nutzern zu helfen, zu verstehen, welche Aktionen erwartet werden, um Beziehungen innerhalb der Benutzeroberfläche zu zeigen und um Nutzer darüber zu informieren, welche Aktionen stattgefunden haben. Animationen können helfen, kognitive Belastung zu verringern, Veränderungsblindheit zu verhindern und ein besseres Erinnerungsvermögen an räumliche Beziehungen zu etablieren. Einige Animationen können jedoch für Menschen mit kognitiven Problemen wie Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS) problematisch sein, und bestimmte Arten von Bewegungen können bei Vestibularsstörungen, Epilepsie und Migräne sowie scotopischer Empfindlichkeit ein Auslöser sein.

Überlegen Sie, einen Mechanismus zum Anhalten oder Deaktivieren der Animation anzubieten, sowie die Verwendung der [Reduced Motion Media Query](/de/docs/Web/CSS/@media/prefers-reduced-motion) (oder eines gleichwertigen [User Agent Client Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}) zu implementieren, um ein komplementäres Erlebnis für Benutzer zu schaffen, die eine Präferenz für weniger Animationen ausgedrückt haben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Cubic-Bezier-Beispiele

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

### Step-Beispiele

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
