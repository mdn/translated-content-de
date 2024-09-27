---
title: "Event: composed-Eigenschaft"
short-title: composed
slug: Web/API/Event/composed
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("Shadow DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte **`composed`**-Eigenschaft des
[`Event`](/de/docs/Web/API/Event)-Interfaces gibt einen boolean-Wert zurück, der anzeigt, ob das Event die Schatten-DOM-Grenze überschreitet und in den Standard-DOM gelangt.

Alle vom UA gesendeten UI-Events sind `composed` (click/touch/mouseover/copy/paste, etc.). Die meisten anderen Arten von Events sind nicht `composed` und geben daher `false` zurück. Zum Beispiel betrifft dies synthetische Events, die ohne die Einstellung ihrer `composed`-Option auf `true` erstellt werden.

Die Weiterleitung erfolgt nur, wenn die [`bubbles`](/de/docs/Web/API/Event/bubbles)-Eigenschaft ebenfalls `true` ist. Jedoch werden nur die `composed`-Events, die abgefangen werden, beim Host behandelt, als wären sie in der `AT_TARGET`-Phase. Sie können den Pfad bestimmen, dem das Event durch das Schatten-Root zum DOM-Root folgt, indem Sie [`composedPath()`](/de/docs/Web/API/Event/composedPath) aufrufen.

## Wert

Ein boolean-Wert, der `true` ist, wenn das Event von der Schatten-DOM in den Standard-DOM übergeht, nachdem es das Schatten-Root erreicht hat. (Das heißt, der erste Knoten im Schatten-DOM, in dem das Event mit der Weiterleitung begann.)

Wenn dieser Wert `false` ist, wird das Schatten-Root der letzte Knoten sein, dem das Event angeboten wird.

## Beispiele

In diesem [Beispiel](https://mdn.github.io/web-components-examples/composed-composed-path/) definieren wir zwei triviale benutzerdefinierte Elemente, `<open-shadow>` und `<closed-shadow>`, die beide den Inhalt ihres Textattributs in das Schatten-DOM des Elements einfügen, und zwar als Textinhalt eines `<p>`-Elements. Der einzige Unterschied zwischen den beiden ist, dass ihre Schatten-Roots mit ihren Modi auf `open` bzw. `closed` gesetzt sind.

Die beiden Definitionen sehen so aus:

```js
customElements.define(
  "open-shadow",
  class extends HTMLElement {
    constructor() {
      super();

      const pElem = document.createElement("p");
      pElem.textContent = this.getAttribute("text");

      const shadowRoot = this.attachShadow({
        mode: "open",
      });

      shadowRoot.appendChild(pElem);
    }
  },
);

customElements.define(
  "closed-shadow",
  class extends HTMLElement {
    constructor() {
      super();

      const pElem = document.createElement("p");
      pElem.textContent = this.getAttribute("text");

      const shadowRoot = this.attachShadow({
        mode: "closed",
      });

      shadowRoot.appendChild(pElem);
    }
  },
);
```

Wir fügen dann jeweils ein Element auf unserer Seite ein:

```html
<open-shadow text="I have an open shadow root"></open-shadow>
<closed-shadow text="I have a closed shadow root"></closed-shadow>
```

Dann binden wir einen Klick-Event-Listener am `<html>`-Element ein:

```js
document.querySelector("html").addEventListener("click", (e) => {
  console.log(e.composed);
  console.log(e.composedPath());
});
```

Wenn Sie das `<open-shadow>`-Element und dann das `<closed-shadow>`-Element anklicken, bemerken Sie zwei Dinge.

1. Die `composed`-Eigenschaft gibt `true` zurück, weil das
   `click`-Event immer in der Lage ist, Schatten-Grenzen zu überschreiten.
2. Ein Unterschied im Wert von `composedPath` für die beiden
   Elemente.

Der `composedPath` des `<open-shadow>`-Elements ist:

```plain
Array [ p, ShadowRoot, open-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]
```

Während der `composedPath` des `<closed-shadow>`-Elements wie folgt ist:

```plain
Array [ closed-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]
```

Im zweiten Fall propagieren die Event-Listener nur bis zum `<closed-shadow>`-Element selbst, aber nicht zu den Knoten innerhalb der Schatten-Grenze.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
