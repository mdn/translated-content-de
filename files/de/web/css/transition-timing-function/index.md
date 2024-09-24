---
title: transition-timing-function
slug: Web/CSS/transition-timing-function
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{CSSRef}}

Die **`transition-timing-function`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Zwischenwerte für CSS-Eigenschaften berechnet werden, die von einem [Übergangseffekt](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) betroffen sind.

{{EmbedInteractiveExample("pages/css/transition-timing-function.html")}}

Im Wesentlichen können Sie damit eine Beschleunigungskurve festlegen, sodass die Geschwindigkeit des Übergangs über seine Dauer variieren kann.

Diese Beschleunigungskurve wird für jede zu überführende Eigenschaft mithilfe einer {{cssxref("&lt;easing-function&gt;")}} definiert.

Sie können mehrere Easing-Funktionen angeben; jede wird auf die entsprechende Eigenschaft angewendet, wie sie durch die {{ cssxref("transition-property") }} Eigenschaft festgelegt ist, welche als `transition-property` Liste fungiert. Wenn weniger Easing-Funktionen als im `transition-property` Liste angegeben sind, muss der Benutzeragent berechnen, welcher Wert verwendet wird, indem die Liste der Werte wiederholt wird, bis es für jede Übergangseigenschaft einen Wert gibt. Wenn mehr Easing-Funktionen vorhanden sind, wird die Liste auf die richtige Größe gekürzt. In beiden Fällen bleibt die CSS-Deklaration gültig.

## Syntax

```css
/* Schlüsselwort-Werte */
transition-timing-function: ease;
transition-timing-function: ease-in;
transition-timing-function: ease-out;
transition-timing-function: ease-in-out;
transition-timing-function: linear;
transition-timing-function: step-start;
transition-timing-function: step-end;

/* Funktionswerte */
transition-timing-function: steps(4, jump-end);
transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);

/* Schritte Funktions-Schlüsselwörter */
transition-timing-function: steps(4, jump-start);
transition-timing-function: steps(10, jump-end);
transition-timing-function: steps(20, jump-none);
transition-timing-function: steps(5, jump-both);
transition-timing-function: steps(6, start);
transition-timing-function: steps(8, end);

/* Mehrere Easing-Funktionen */
transition-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1, 0.1);

/* Globale Werte */
transition-timing-function: inherit;
transition-timing-function: initial;
transition-timing-function: revert;
transition-timing-function: revert-layer;
transition-timing-function: unset;
```

### Werte

- `<easing-function>`

  - : Jede {{cssxref("&lt;easing-function&gt;")}} stellt die Easing-Funktion dar, die mit der entsprechenden zu überführenden Eigenschaft verknüpft werden soll, wie in {{ cssxref("transition-property") }} definiert.

    Die Nicht-Schritte-Schlüsselwort-Werte (ease, linear, ease-in-out, etc.) repräsentieren jeweils eine kubische Bézierkurve mit festgelegten vier Punktwerten, wobei der `cubic-bezier()` Funktionenwert einen nicht vordefinierten Wert ermöglicht. Die Schritt-Easing-Funktionen unterteilen die Eingabezeit in eine angegebene Anzahl gleich langer Intervalle. Sie wird durch eine Anzahl von Schritten und einer Sprungposition definiert.

    - `ease`
      - : Entspricht `cubic-bezier(0.25, 0.1, 0.25, 1.0)`, der Standardwert, erhöht die Geschwindigkeit bis zur Mitte des Übergangs und verlangsamt sich dann bis zum Ende.
    - `linear`
      - : Entspricht `cubic-bezier(0.0, 0.0, 1.0, 1.0)`, Übergänge mit gleichmäßiger Geschwindigkeit.
    - `ease-in`
      - : Entspricht `cubic-bezier(0.42, 0, 1.0, 1.0)`, beginnt langsam und beschleunigt, bis der Übergang abgeschlossen ist.
    - `ease-out`
      - : Entspricht `cubic-bezier(0, 0, 0.58, 1.0)`, beginnt schnell und verlangsamt sich während des Übergangs.
    - `ease-in-out`
      - : Entspricht `cubic-bezier(0.42, 0, 0.58, 1.0)`, beginnt langsam, beschleunigt und verlangsamt sich dann wieder.
    - `cubic-bezier(p1, p2, p3, p4)`
      - : Eine vom Autor definierte kubische Bézierkurve, wobei die Werte von p1 und p3 im Bereich von 0 bis 1 liegen müssen.
    - `steps(n, <jumpterm>)`

      - : Zeigt den Übergang entlang _n Stopps entlang des Übergangs an, wobei jeder Stopp für_ gleiche Zeitlängen angezeigt wird. Zum Beispiel, wenn _n_ 5 ist, gibt es 5 Schritte. Ob der Übergang vorübergehend bei 0%, 20%, 40%, 60% und 80%, bei 20%, 40%, 60%, 80% und 100% hält oder 5 Stopps zwischen den 0% und 100% entlang des Übergangs macht oder 5 Stopps, einschließlich der 0% und 100%-Marken (bei 0%, 25%, 50%, 75% und 100%), hängt davon ab, welcher der folgenden Sprungbegriffe verwendet wird:

        - `jump-start`
          - : Bezeichnet eine linksstetige Funktion, sodass der erste Sprung erfolgt, wenn der Übergang beginnt;
        - `jump-end`
          - : Bezeichnet eine rechtsstetige Funktion, sodass der letzte Sprung erfolgt, wenn die Animation endet;
        - `jump-none`
          - : Es gibt keinen Sprung an einem der Enden. Stattdessen wird jeweils an der 0%-Marke und der 100%-Marke gehalten, jeweils für 1/n der Dauer
        - `jump-both`
          - : Enthält Pausen sowohl an der 0%- als auch an der 100%-Marke und fügt während der Übergangszeit effektiv einen weiteren Schritt hinzu.
        - `start`
          - : Gleiche wie `jump-start.`
        - `end`
          - : Gleiche wie `jump-end.`

    - `step-start`
      - : Entspricht `steps(1, jump-start)`
    - `step-end`
      - : Entspricht `steps(1, jump-end)`

## Barrierefreiheit

Einige Animationen können nützlich sein, um den Nutzern zu verdeutlichen, welche Aktionen erwartet werden, um Beziehungen innerhalb der Benutzeroberfläche zu zeigen und um die Benutzer darüber zu informieren, welche Aktionen ausgeführt wurden. Animationen können helfen, die kognitive Belastung zu reduzieren, Veränderungsblindheit zu verhindern und ein besseres räumliches Erinnerungsvermögen zu schaffen. Einige Animationen können jedoch problematisch für Menschen mit kognitiven Bedenken wie Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS) sein. Bestimmte Arten von Bewegungen können für Vestibulärstörungen, Epilepsie sowie Migräne und Skylight-Empfindlichkeit ein Auslöser sein.

Erwägen Sie, eine Möglichkeit zum Pausieren oder Deaktivieren der Animation anzubieten, sowie die Verwendung der [Reduced Motion Media Query](/de/docs/Web/CSS/@media/prefers-reduced-motion) (oder eines entsprechenden [User Agent Client Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}), um eine komplementäre Erfahrung für Nutzer zu schaffen, die eine Vorliebe für weniger Animation geäußert haben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Cubic-Bezier Beispiele

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

- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- [`<easing-function>`](/de/docs/Web/CSS/easing-function)
- {{cssxref('transition')}}
- {{cssxref('transition-property')}}
- {{cssxref('transition-duration')}}
- {{cssxref('transition-delay')}}
- {{domxref("TransitionEvent")}}
