---
title: "Event: composedPath()-Methode"
short-title: composedPath()
slug: Web/API/Event/composedPath
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("Shadow DOM")}}{{AvailableInWorkers}}

Die **`composedPath()`**-Methode der [`Event`](/de/docs/Web/API/Event)-Schnittstelle gibt den Pfad des Ereignisses zurück, der ein Array der Objekte ist, auf denen Listener aufgerufen werden. Dies umfasst keine Knoten in Shadow-DOM-Bäumen, wenn die Schattenwurzel mit einem geschlossenen [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) erstellt wurde.

## Syntax

```js-nolint
const composed = Event.composedPath()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von [`EventTarget`](/de/docs/Web/API/EventTarget)-Objekten, die die Objekte repräsentieren, auf denen ein Ereignis-Listener aufgerufen wird.

## Beispiele

Im folgenden Beispiel, das Sie unter [https://mdn.github.io/web-components-examples/composed-composed-path/](https://mdn.github.io/web-components-examples/composed-composed-path/) ausprobieren können, definieren wir zwei triviale benutzerdefinierte Elemente, `<open-shadow>` und `<closed-shadow>`, die beide den Inhalt ihres Textattributs nehmen und ihn als Textinhalt eines `<p>`-Elements in das Shadow-DOM des Elements einfügen. Der einzige Unterschied zwischen den beiden besteht darin, dass ihre Shadow-Roots mit ihren Modi auf `open` und `closed` gesetzt sind.

```js
customElements.define(
  "open-shadow",
  class extends HTMLElement {
    constructor() {
      super();

      const pElem = document.createElement("p");
      pElem.textContent = this.getAttribute("text");

      const shadowRoot = this.attachShadow({ mode: "open" });
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

      const shadowRoot = this.attachShadow({ mode: "closed" });
      shadowRoot.appendChild(pElem);
    }
  },
);
```

Wir fügen dann jeweils eines dieser Elemente in unsere Seite ein:

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

Wenn Sie auf das `<open-shadow>`-Element und dann auf das `<closed-shadow>`-Element klicken, werden Sie zwei Dinge bemerken. Erstens gibt die `composed`-Eigenschaft `true` zurück, da das `click`-Ereignis immer über Schatten-Grenzen hinweg propagieren kann. Zweitens werden Sie einen Unterschied im Wert von `composedPath` für die beiden Elemente bemerken. Der `composedPath` des `<open-shadow>`-Elements ist folgender:

```plain
Array [ p, ShadowRoot, open-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]
```

Während der `composedPath` des `<closed-shadow>`-Elements folgendermaßen aussieht:

```plain
Array [ closed-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]
```

Im zweiten Fall propagieren die Ereignislistener nur bis zum `<closed-shadow>`-Element selbst, aber nicht zu den Knoten innerhalb der Schatten-Grenze.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
