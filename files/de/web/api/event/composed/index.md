---
title: "Event: composed-Eigenschaft"
short-title: composed
slug: Web/API/Event/composed
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("Shadow DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte **`composed`**-Eigenschaft der [`Event`](/de/docs/Web/API/Event)-Schnittstelle gibt einen booleschen Wert zurück, der anzeigt, ob das Ereignis über die Shadow-DOM-Grenze in das Standard-DOM propagiert wird oder nicht.

Alle von den Benutzerschnittstellenkomponenten ausgelösten UI-Ereignisse sind composed (click/touch/mouseover/copy/paste, usw.). Die meisten anderen Arten von Ereignissen sind nicht composed und geben daher `false` zurück. Zum Beispiel synthetische Ereignisse, die ohne ihre `composed`-Option auf `true` festgelegt wurden, gehören dazu.

Die Propagierung erfolgt nur, wenn auch die [`bubbles`](/de/docs/Web/API/Event/bubbles)-Eigenschaft `true` ist. Allerdings werden nur composed Ereignisse auch dann verarbeitet, wenn sie im `AT_TARGET`-Phase am Host sind. Sie können den Pfad bestimmen, dem das Ereignis durch den Shadow-Root bis zum DOM-Root folgt, indem Sie [`composedPath()`](/de/docs/Web/API/Event/composedPath) aufrufen.

## Wert

Ein boolescher Wert, der `true` ist, wenn das Ereignis vom Shadow DOM in das Standard-DOM übergeht, nachdem es den Shadow-Root erreicht hat. (Das heißt, der erste Knoten im Shadow DOM, in dem das Ereignis zu propagieren begann.)

Wenn dieser Wert `false` ist, wird der Shadow-Root der letzte Knoten sein, der das Ereignis erhält.

## Beispiele

In diesem [Beispiel](https://mdn.github.io/web-components-examples/composed-composed-path/) definieren wir zwei triviale benutzerdefinierte Elemente, `<open-shadow>` und `<closed-shadow>`, die beide den Inhalt ihres Textattributs nehmen und als Textinhalt eines `<p>` Elements in das Shadow DOM des Elements einfügen. Der einzige Unterschied zwischen beiden ist, dass ihre Shadow-Roots mit ihren Modi auf `open` bzw. `closed` eingestellt sind.

Die beiden Definitionen sehen folgendermaßen aus:

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

Dann fügen wir jeweils ein solches Element zu unserer Seite hinzu:

```html
<open-shadow text="I have an open shadow root"></open-shadow>
<closed-shadow text="I have a closed shadow root"></closed-shadow>
```

Dann fügen wir einen click Event-Listener auf das `<html>`-Element hinzu:

```js
document.querySelector("html").addEventListener("click", (e) => {
  console.log(e.composed);
  console.log(e.composedPath());
});
```

Wenn Sie auf das `<open-shadow>`-Element und dann auf das `<closed-shadow>`-Element klicken, werden Ihnen zwei Dinge auffallen.

1. Die `composed`-Eigenschaft gibt `true` zurück, weil das `click`-Ereignis immer in der Lage ist, über Schatten-Grenzen zu propagieren.
2. Ein Unterschied im Wert von `composedPath` für die beiden Elemente.

Der composed Path des `<open-shadow>`-Elements sieht so aus:

```plain
Array [ p, ShadowRoot, open-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]
```

Wohingegen der composed Path des `<closed-shadow>`-Elements wie folgt ist:

```plain
Array [ closed-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]
```

Im zweiten Fall propagieren die Event-Listener nur bis zu dem `<closed-shadow>`-Element selbst, aber nicht zu den Knoten innerhalb der Schatten-Grenze.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
