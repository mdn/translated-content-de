---
title: "`transition-timing-function` CSS property"
short-title: transition-timing-function
slug: Web/CSS/Reference/Properties/transition-timing-function
l10n:
  sourceCommit: 5d20ba73fde9de229a91dbdabe3be20966e95a65
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`transition-timing-function`** legt fest, wie Zwischenwerte für CSS-Eigenschaften berechnet werden, auf die sich ein [Übergangseffekt](/de/docs/Web/CSS/Guides/Transitions/Using) auswirkt.

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

Damit können Sie eine Beschleunigungskurve festlegen, sodass sich die Geschwindigkeit des Übergangs über dessen Dauer verändert.

Diese Beschleunigungskurve wird durch jeweils eine {{cssxref("easing-function")}} für jede Eigenschaft definiert, die einen Übergang durchläuft.

Sie können mehrere Easing-Funktionen angeben. Jede wird auf die entsprechende Eigenschaft angewendet, wie sie durch die Eigenschaft {{ cssxref("transition-property") }} festgelegt ist, die als `transition-property`-Liste dient. Sind weniger Easing-Funktionen als Einträge in der `transition-property`-Liste angegeben, muss der User Agent die Werteliste wiederholen, bis für jede Übergangseigenschaft ein Wert vorhanden ist. Sind mehr Easing-Funktionen angegeben, wird die Liste auf die passende Länge gekürzt. In beiden Fällen bleibt die CSS-Deklaration gültig.

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
  - : Jede {{cssxref("easing-function")}} stellt die Easing-Funktion dar, die der entsprechenden Eigenschaft mit Übergang zugeordnet wird, wie in {{ cssxref("transition-property") }} definiert.

    Die Schlüsselwortwerte ohne Schritte (ease, linear, ease-in-out usw.) stehen jeweils für eine kubische Bézierkurve mit vier festen Punktwerten. Mit dem Funktionswert cubic-bezier() lässt sich eine nicht vordefinierte Kurve angeben. Die schrittweisen Easing-Funktionen teilen die Eingabezeit in eine festgelegte Anzahl gleich langer Intervalle auf. Sie werden durch eine Anzahl von Schritten und eine Schrittposition definiert.
    - `ease`
      - : Entspricht `cubic-bezier(0.25, 0.1, 0.25, 1.0)` und ist der Standardwert. Die Geschwindigkeit nimmt bis zur Mitte des Übergangs zu und verlangsamt sich zum Ende hin wieder.
    - `linear`
      - : Entspricht `cubic-bezier(0.0, 0.0, 1.0, 1.0)`; der Übergang verläuft mit gleichmäßiger Geschwindigkeit.
    - `ease-in`
      - : Entspricht `cubic-bezier(0.42, 0, 1.0, 1.0)`; der Übergang beginnt langsam und wird bis zum Ende schneller.
    - `ease-out`
      - : Entspricht `cubic-bezier(0, 0, 0.58, 1.0)`; der Übergang beginnt schnell und wird im weiteren Verlauf langsamer.
    - `ease-in-out`
      - : Entspricht `cubic-bezier(0.42, 0, 0.58, 1.0)`; der Übergang beginnt langsam, wird schneller und verlangsamt sich anschließend wieder.
    - `cubic-bezier(p1, p2, p3, p4)`
      - : Eine selbst definierte kubische Bézierkurve, bei der die Werte p1 und p3 im Bereich von 0 bis 1 liegen müssen.
    - `steps(n, <jump-term>)`
      - : Stellt den Übergang in _n_ Schritten dar, die jeweils gleich lange angezeigt werden. Wenn _n_ beispielsweise 5 ist, gibt es 5 Schritte. Welches der folgenden Schlüsselwörter für die Sprungposition verwendet wird, bestimmt, ob der Übergang vorübergehend bei 0 %, 20 %, 40 %, 60 % und 80 % oder bei 20 %, 40 %, 60 %, 80 % und 100 % verweilt, ob er zwischen 0 % und 100 % fünf Schritte macht oder ob er fünf Schritte einschließlich der Marken bei 0 % und 100 % umfasst (bei 0 %, 25 %, 50 %, 75 % und 100 %):
        - `jump-start`
          - : Bezeichnet eine linksseitig stetige Funktion, bei der der erste Sprung zu Beginn des Übergangs erfolgt.
        - `jump-end`
          - : Bezeichnet eine rechtsseitig stetige Funktion, bei der der letzte Sprung am Ende der Animation erfolgt.
        - `jump-none`
          - : An keinem der beiden Enden erfolgt ein Sprung. Stattdessen wird sowohl bei 0 % als auch bei 100 % jeweils für 1/n der Dauer verweilt.
        - `jump-both`
          - : Umfasst Pausen sowohl bei 0 % als auch bei 100 % und fügt damit innerhalb der Übergangsdauer praktisch einen Schritt hinzu.
        - `start`
          - : Entspricht `jump-start`.
        - `end`
          - : Entspricht `jump-end`.

    - `step-start`
      - : Entspricht `steps(1, jump-start)`.
    - `step-end`
      - : Entspricht `steps(1, jump-end)`.

## Barrierefreiheit

Manche Animationen können hilfreich sein: Sie zeigen Nutzenden, welche Aktionen erwartet werden, verdeutlichen Zusammenhänge innerhalb der Benutzeroberfläche und machen auf erfolgte Aktionen aufmerksam. Animationen können die kognitive Belastung verringern, verhindern, dass Änderungen übersehen werden, und dabei helfen, sich räumliche Beziehungen besser einzuprägen. Manche Animationen können jedoch für Menschen mit kognitiven Beeinträchtigungen wie einer Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS) problematisch sein. Bestimmte Arten von Bewegung können außerdem Beschwerden bei vestibulären Störungen, Epilepsie, Migräne und skotopischer Lichtempfindlichkeit auslösen.

Erwägen Sie, eine Möglichkeit zum Pausieren oder Deaktivieren von Animationen bereitzustellen. Verwenden Sie außerdem die [Media Query für reduzierte Bewegung](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) (oder den entsprechenden [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}), um Nutzenden, die weniger Animationen bevorzugen, eine passende Alternative zu bieten.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiele für kubische Bézierkurven

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

- [CSS-Übergänge verwenden](/de/docs/Web/CSS/Guides/Transitions/Using)
- {{cssxref("easing-function")}}
- Modul [CSS-Easing-Funktionen](/de/docs/Web/CSS/Guides/Easing_functions)
- {{cssxref('transition')}}
- {{cssxref('transition-property')}}
- {{cssxref('transition-duration')}}
- {{cssxref('transition-delay')}}
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
