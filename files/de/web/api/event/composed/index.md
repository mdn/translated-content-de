---
title: "Ereignis: composed-Eigenschaft"
short-title: composed
slug: Web/API/Event/composed
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("Shadow DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte **`composed`**-Eigenschaft des
{{domxref("Event")}}-Interfaces gibt einen booleschen Wert zurück, der angibt, ob das Ereignis die Grenze des Shadow DOMs überschreiten und in das Standard-DOM gelangen wird.

Alle vom User Agent ausgelösten UI-Ereignisse sind composed (Klick/Berührung/Mausüber/Copy/Paste, etc.). Die meisten anderen Arten von Ereignissen sind nicht composed und geben daher `false` zurück. Dies schließt z.B. synthetische Ereignisse ein, die ohne ihre `composed`-Option auf `true` gesetzt erstellt wurden.

Eine Propagation erfolgt nur, wenn die {{domxref("Event.bubbles", "bubbles")}}-Eigenschaft ebenfalls `true` ist. Beim Capturing werden jedoch auch composed-Ereignisse am Host behandelt, als ob sie sich in der `AT_TARGET`-Phase befänden. Sie können den Pfad, den das Ereignis von der Shadow-Wurzel bis zur DOM-Wurzel nimmt, durch Aufrufen von {{domxref("Event.composedPath", "composedPath()")}} bestimmen.

## Wert

Ein boolescher Wert, der `true` ist, wenn das Ereignis vom Shadow DOM in das Standard-DOM übergeht, nachdem es die Shadow-Wurzel erreicht hat. (Das heißt, der erste Knoten im Shadow DOM, in dem das Ereignis zu propagieren begann.)

Wenn dieser Wert `false` ist, wird die Shadow-Wurzel der letzte Knoten sein, dem das Ereignis angeboten wird.

## Beispiele

In diesem [Beispiel](https://mdn.github.io/web-components-examples/composed-composed-path/) definieren wir zwei einfache benutzerdefinierte Elemente, `<open-shadow>` und `<closed-shadow>`, die beide den Inhalt ihres Textattributs nehmen und ihn als Textinhalt eines `<p>`-Elements in das Shadow DOM des Elements einfügen. Der einzige Unterschied zwischen den beiden ist, dass ihre Shadow-Wurzeln mit ihren Modi `open` und `closed` angehängt werden.

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

Wir fügen dann jeweils ein Element in unsere Seite ein:

```html
<open-shadow text="I have an open shadow root"></open-shadow>
<closed-shadow text="I have a closed shadow root"></closed-shadow>
```

Dann fügen wir einen Klick-Ereignislistener auf dem `<html>`-Element hinzu:

```js
document.querySelector("html").addEventListener("click", (e) => {
  console.log(e.composed);
  console.log(e.composedPath());
});
```

Wenn Sie auf das `<open-shadow>`-Element und dann auf das `<closed-shadow>`-Element klicken, werden Sie zwei Dinge bemerken.

1. Die `composed`-Eigenschaft gibt `true` zurück, weil das `click`-Ereignis immer in der Lage ist, Shadow-Grenzen zu überschreiten.
2. Ein Unterschied im Wert von `composedPath` für die beiden Elemente.

Der composed-Pfad des `<open-shadow>`-Elements ist dieser:

```plain
Array [ p, ShadowRoot, open-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]
```

Im Gegensatz dazu ist der composed-Pfad des `<closed-shadow>`-Elements wie folgt:

```plain
Array [ closed-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]
```

Im zweiten Fall propagieren die Ereignislistener nur bis zum `<closed-shadow>`-Element selbst, aber nicht zu den Knoten innerhalb der Shadow-Grenze.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
