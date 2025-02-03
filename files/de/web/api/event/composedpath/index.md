---
title: "Event: composedPath() Methode"
short-title: composedPath()
slug: Web/API/Event/composedPath
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Shadow DOM")}}{{AvailableInWorkers}}

Die **`composedPath()`** Methode des [`Event`](/de/docs/Web/API/Event)
Interfaces gibt den Pfad des Ereignisses zurück. Dieser Pfad ist ein Array der Objekte, auf denen Listener
aufgerufen werden. Dies schließt keine Knoten in Schattenbäumen ein, wenn die Schattenwurzel mit ihrem [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) als geschlossen erstellt wurde.

## Syntax

```js-nolint
composedPath()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von [`EventTarget`](/de/docs/Web/API/EventTarget) Objekten, die die Objekte darstellen, auf denen ein
Ereignis-Listener aufgerufen wird.

## Beispiele

Im folgenden Beispiel, das Sie unter [https://mdn.github.io/web-components-examples/composed-composed-path/](https://mdn.github.io/web-components-examples/composed-composed-path/) ausprobieren können, definieren wir zwei einfache benutzerdefinierte
Elemente, `<open-shadow>` und `<closed-shadow>`. Beide
nehmen den Inhalt ihres Textattributs und fügen ihn als Textinhalt eines `<p>` Elements in das Schatten-DOM des Elements ein. Der einzige Unterschied
zwischen den beiden ist, dass ihre Schattenwurzeln mit ihren Modi `open` bzw. `closed` angefügt werden.

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

Wir fügen dann jeweils eines der Elemente in unsere Seite ein:

```html
<open-shadow text="I have an open shadow root"></open-shadow>
<closed-shadow text="I have a closed shadow root"></closed-shadow>
```

Dann fügen wir einen Klick-Ereignis-Listener auf dem `<html>` Element hinzu:

```js
document.querySelector("html").addEventListener("click", (e) => {
  console.log(e.composed);
  console.log(e.composedPath());
});
```

Wenn Sie auf das `<open-shadow>` Element und dann auf das
`<closed-shadow>` Element klicken, werden Ihnen zwei Dinge auffallen. Erstens gibt die `composed` Eigenschaft `true` zurück, da das `click`
Ereignis immer in der Lage ist, über Schatten-Grenzen hinweg zu propagieren. Zweitens werden Sie einen
Unterschied im Wert von `composedPath` für die beiden Elemente bemerken. Der
`<open-shadow>` Elementpfad sieht so aus:

```plain
Array [ p, ShadowRoot, open-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]
```

Wohingegen der `<closed-shadow>` Elementpfad wie folgt aussieht:

```plain
Array [ closed-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]
```

Im zweiten Fall propagieren sich die Ereignis-Listener nur bis zum
`<closed-shadow>` Element selbst, aber nicht zu den Knoten innerhalb der
Schatten-Grenze.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
