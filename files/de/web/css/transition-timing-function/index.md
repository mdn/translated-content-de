---
title: transition-timing-function
slug: Web/CSS/transition-timing-function
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`transition-timing-function`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Zwischenwerte für CSS-Eigenschaften berechnet werden, die von einem [Übergangseffekt](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) betroffen sind.

{{EmbedInteractiveExample("pages/css/transition-timing-function.html")}}

Im Wesentlichen können Sie damit eine Beschleunigungskurve festlegen, sodass die Geschwindigkeit des Übergangs während seiner Dauer variieren kann.

Diese Beschleunigungskurve wird durch eine {{cssxref("&lt;easing-function&gt;")}} für jede zu überführende Eigenschaft definiert.

Es können mehrere Easing-Funktionen angegeben werden; jede wird auf die entsprechende, durch die {{ cssxref("transition-property") }} definierte Eigenschaft angewendet, welche als `transition-property`-Liste fungiert. Wenn weniger Easing-Funktionen angegeben sind als in der `transition-property`-Liste, muss der Benutzeragent berechnen, welcher Wert durch Wiederholen der Werteliste verwendet wird, bis für jede Übergangseigenschaft ein Wert vorhanden ist. Sind mehr Easing-Funktionen vorhanden, wird die Liste auf die richtige Größe gekürzt. In beiden Fällen bleibt die CSS-Deklaration gültig.

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

  - : Jede {{cssxref("&lt;easing-function&gt;")}} repräsentiert die Easing-Funktion, die mit der entsprechenden Eigenschaft verknüpft wird, die in {{ cssxref("transition-property") }} definiert ist.

    Die Schlüsselwortwerte (zum Beispiel ease, linear, ease-in-out usw.) repräsentieren jeweils eine kubische Bézier-Kurve mit festen vier Punktwerten, wobei der Wert für die Funktion cubic-bezier() eine nicht vordefinierte Wertgebung ermöglicht. Die Step-Easing-Funktionen teilen die Eingabezeit in eine festgelegte Anzahl gleich langer Intervalle. Diese wird durch eine Anzahl von Schritten und eine Schrittposition definiert.

    - `ease`
      - : Entspricht `cubic-bezier(0.25, 0.1, 0.25, 1.0)`, dem Standardwert, mit zunehmender Geschwindigkeit in Richtung der Mitte des Übergangs und Verlangsamung am Ende.
    - `linear`
      - : Entspricht `cubic-bezier(0.0, 0.0, 1.0, 1.0)`, Übergänge mit gleichmäßiger Geschwindigkeit.
    - `ease-in`
      - : Entspricht `cubic-bezier(0.42, 0, 1.0, 1.0)`, beginnt langsam, die Übergangsgeschwindigkeit erhöht sich bis zum Abschluss.
    - `ease-out`
      - : Entspricht `cubic-bezier(0, 0, 0.58, 1.0)`, beginnt schnell zu übergehen, verlangsamt sich, während der Übergang fortschreitet.
    - `ease-in-out`
      - : Entspricht `cubic-bezier(0.42, 0, 0.58, 1.0)`, beginnt langsam, beschleunigt und verlangsamt sich dann wieder.
    - `cubic-bezier(p1, p2, p3, p4)`
      - : Eine vom Autor definierte kubische Bézier-Kurve, wobei die Werte p1 und p3 im Bereich von 0 bis 1 liegen müssen.
    - `steps(n, <jump-term>)`

      - : Zeigt den Übergang entlang _n Haltepunkten entlang des Übergangs, wobei jeder Stopp für_ gleiche Zeitlängen angezeigt wird. Wenn beispielsweise _n_ 5 ist, gibt es 5 Schritte. Ob der Übergang zwischenzeitig bei 0%, 20%, 40%, 60% und 80% hält, auf den 20%, 40%, 60%, 80% und 100%, oder 5 Haltepunkte zwischen 0% und 100% aufweist oder 5 Haltepunkte einschließlich der Marken 0% und 100% (auf 0%, 25%, 50%, 75% und 100%) je nach verwendetem Sprungbegriff:

        - `jump-start`
          - : Bezeichnet eine links-kontinuierliche Funktion, sodass der erste Sprung erfolgt, wenn der Übergang beginnt;
        - `jump-end`
          - : Bezeichnet eine rechts-kontinuierliche Funktion, sodass der letzte Sprung erfolgt, wenn die Animation endet;
        - `jump-none`
          - : Es gibt keinen Sprung an beiden Enden. Stattdessen wird sowohl bei der 0%-Marke als auch bei der 100%-Marke gehalten, jeweils für 1/n der Dauer
        - `jump-both`
          - : Beinhaltet Pausen sowohl bei der 0% als auch bei der 100%-Marke, was effektiv einen Schritt während der Übergangszeit hinzufügt.
        - `start`
          - : Gleicht `jump-start`.
        - `end`
          - : Gleicht `jump-end`.

    - `step-start`
      - : Entspricht `steps(1, jump-start)`
    - `step-end`
      - : Entspricht `steps(1, jump-end)`

## Barrierefreiheit

Einige Animationen können hilfreich sein, um Benutzern zu helfen, zu verstehen, welche Aktionen erwartet werden, um Beziehungen innerhalb der Benutzeroberfläche zu zeigen und Benutzer darüber zu informieren, welche Aktionen stattgefunden haben. Animationen können helfen, die kognitive Belastung zu reduzieren, Veränderungsblindheit zu verhindern und ein besseres Erinnerungsvermögen bei räumlichen Beziehungen zu schaffen. Einige Animationen können jedoch problematisch für Menschen mit kognitiven Bedenken wie Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS) sein, und bestimmte Arten von Bewegungen können ein Auslöser für vestibuläre Störungen, Epilepsie, Migräne und skotopische Empfindlichkeit sein.

Erwägen Sie, eine Möglichkeit zum Pausieren oder Deaktivieren von Animationen bereitzustellen sowie die [Abfrage für reduzierte Bewegung](/de/docs/Web/CSS/@media/prefers-reduced-motion) (oder den entsprechenden [Benutzeragent-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}) zu verwenden, um eine ergänzende Erfahrung für Benutzer zu schaffen, die eine Präferenz für weniger Animationen ausgedrückt haben.

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

- [Einsatz von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- [`<easing-function>`](/de/docs/Web/CSS/easing-function)
- {{cssxref('transition')}}
- {{cssxref('transition-property')}}
- {{cssxref('transition-duration')}}
- {{cssxref('transition-delay')}}
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
