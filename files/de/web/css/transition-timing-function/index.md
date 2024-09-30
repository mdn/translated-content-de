---
title: transition-timing-function
slug: Web/CSS/transition-timing-function
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{CSSRef}}

Die **`transition-timing-function`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie Zwischenwerte für von einem [Transitionseffekt](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) beeinflusste CSS-Eigenschaften berechnet werden.

{{EmbedInteractiveExample("pages/css/transition-timing-function.html")}}

Im Wesentlichen können Sie eine Beschleunigungskurve festlegen, damit die Geschwindigkeit der Transition über ihre Dauer variieren kann.

Diese Beschleunigungskurve wird mit einer {{cssxref("&lt;easing-function&gt;")}} für jede zu überführende Eigenschaft definiert.

Sie können mehrere `easing`-Funktionen angeben; jede wird auf die entsprechende Eigenschaft angewendet, wie sie durch die {{ cssxref("transition-property") }}-Eigenschaft angegeben ist, die als eine `transition-property`-Liste fungiert. Wenn weniger `easing`-Funktionen als in der `transition-property`-Liste angegeben werden, muss der Benutzeragent berechnen, welcher Wert verwendet wird, indem die Liste der Werte wiederholt wird, bis für jede Übergangseigenschaft einer vorhanden ist. Wenn mehr `easing`-Funktionen vorhanden sind, wird die Liste auf die richtige Größe gekürzt. In beiden Fällen bleibt die CSS-Deklaration gültig.

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

  - : Jede {{cssxref("&lt;easing-function&gt;")}} repräsentiert die `easing`-Funktion, die mit der entsprechenden Eigenschaft zu verknüpfen ist, um sie zu überführen, wie in {{ cssxref("transition-property") }} definiert.

    Die Schlüsselwortwerte, die keine `step`-Funktionen sind (ease, linear, ease-in-out usw.), stellen eine kubische Bézierkurve mit festen vier Punktwerten dar, wobei der `cubic-bezier()`-Funktionswert einen nicht vordefinierten Wert ermöglicht. Die `step`-Easing-Funktionen teilen die Eingabezeit in eine angegebene Anzahl von gleich langen Intervallen. Diese wird durch eine Anzahl von Schritten und eine `step`-Position definiert.

    - `ease`
      - : Entspricht `cubic-bezier(0.25, 0.1, 0.25, 1.0)`, dem Standardwert, der die Geschwindigkeit in der Mitte der Transition erhöht und am Ende wieder verlangsamt.
    - `linear`
      - : Entspricht `cubic-bezier(0.0, 0.0, 1.0, 1.0)`, Übergang mit gleichmäßiger Geschwindigkeit.
    - `ease-in`
      - : Entspricht `cubic-bezier(0.42, 0, 1.0, 1.0)`, beginnt langsam, die Übergangsgeschwindigkeit nimmt bis zur Vollendung zu.
    - `ease-out`
      - : Entspricht `cubic-bezier(0, 0, 0.58, 1.0)`, beginnt schnell zu übergehen und verlangsamt sich im weiteren Verlauf.
    - `ease-in-out`
      - : Entspricht `cubic-bezier(0.42, 0, 0.58, 1.0)`, beginnt langsam, zieht an, und verlangsamt sich dann wieder.
    - `cubic-bezier(p1, p2, p3, p4)`
      - : Eine vom Autor definierte kubische-Bézierkurve, wobei die Werte p1 und p3 im Bereich von 0 bis 1 liegen müssen.
    - `steps(n, <jumpterm>)`

      - : Zeigt den Übergang entlang von _n_ Unterbrechungen an, die jeweils für gleichlange Zeit dargestellt werden. Zum Beispiel, wenn _n_ 5 ist, gibt es 5 Schritte. Ob der Übergang vorübergehend an 0%, 20%, 40%, 60% und 80%, bei 20%, 40%, 60%, 80% und 100%, oder 5 Stopps zwischen 0% und 100% macht, oder 5 Stopps einschließlich der Marken 0% und 100% (an 0%, 25%, 50%, 75% und 100%) macht, hängt von dem verwendeten `jumpterm` ab:

        - `jump-start`
          - : Bezeichnet eine links-seitige kontinuierliche Funktion, sodass der erste Sprung beim Übergangsstart erfolgt;
        - `jump-end`
          - : Bezeichnet eine rechts-seitige kontinuierliche Funktion, sodass der letzte Sprung beim Ende der Animation erfolgt;
        - `jump-none`
          - : Es gibt keinen Sprung am Anfang oder Ende. Stattdessen wird am 0%-Marke und der 100%-Marke gehalten, jeweils für 1/n der Dauer.
        - `jump-both`
          - : Beinhaltet Pausen sowohl bei den Marken 0% als auch 100%, fügt effektiv einen Schritt während der Übergangszeit hinzu.
        - `start`
          - : Dasselbe wie `jump-start.`
        - `end`
          - : Dasselbe wie `jump-end.`

    - `step-start`
      - : Entspricht `steps(1, jump-start)`
    - `step-end`
      - : Entspricht `steps(1, jump-end)`

## Barrierefreiheit

Einige Animationen können hilfreich sein, um Benutzern zu zeigen, welche Aktionen erwartet werden, um Beziehungen innerhalb der Benutzeroberfläche zu verdeutlichen und um zu informieren, welche Aktionen stattgefunden haben. Animationen können helfen, die kognitive Belastung zu reduzieren, Veränderungsblindheit zu verhindern und ein besseres Erinnerungsvermögen für räumliche Beziehungen zu etablieren. Einige Animationen können jedoch problematisch für Menschen mit kognitiven Beeinträchtigungen wie Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS) sein, und bestimmte Arten von Bewegungen können ein Auslöser für vestibuläre Störungen, Epilepsie und Migräne sowie Hell-Dunkel-Sensitivität sein.

Überlegen Sie, eine Möglichkeit zum Anhalten oder Deaktivieren der Animation anzubieten, sowie die Verwendung der [Medienabfrage für reduzierte Bewegung](/de/docs/Web/CSS/@media/prefers-reduced-motion) (oder ein entsprechender [User Agent Client-Hinweis](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}), um eine komplementäre Erfahrung für Benutzer zu schaffen, die eine Präferenz für weniger Animation angegeben haben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Kubische-Bézier-Beispiele

```html hidden
<div class="parent">
  <div class="ease">ease</div>
  <div class="easein">ease-in</div>
  <div class="easeout">ease-out</div>
  <div class="easeinout">ease-in-out</div>
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
.easein {
  transition-timing-function: ease-in;
}
.easeout {
  transition-timing-function: ease-out;
}
.easeinout {
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

- [Using CSS transitions](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- [`<easing-function>`](/de/docs/Web/CSS/easing-function)
- {{cssxref('transition')}}
- {{cssxref('transition-property')}}
- {{cssxref('transition-duration')}}
- {{cssxref('transition-delay')}}
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
