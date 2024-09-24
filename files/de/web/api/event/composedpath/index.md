---
title: "Ereignis: composedPath()-Methode"
short-title: composedPath()
slug: Web/API/Event/composedPath
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("Shadow DOM")}}{{AvailableInWorkers}}

Die **`composedPath()`**-Methode des {{domxref("Event")}}
Interfaces gibt den Ereignispfad zurück, der ein Array der Objekte ist, auf denen Listener ausgelöst werden. Dies schließt keine Knoten in Schattenbäumen ein, wenn die Schattenwurzel mit ihrem {{domxref("ShadowRoot.mode")}} geschlossen erstellt wurde.

## Syntax

```js-nolint
const composed = Event.composedPath()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von {{domxref("EventTarget")}}-Objekten, die die Objekte darstellen, auf denen ein Ereignis-Listener ausgelöst wird.

## Beispiele

Im folgenden Beispiel, das Sie unter [https://mdn.github.io/web-components-examples/composed-composed-path/](https://mdn.github.io/web-components-examples/composed-composed-path/) ausprobieren können, definieren wir zwei triviale benutzerdefinierte
Elemente, `<open-shadow>` und `<closed-shadow>`, von denen beide den Inhalt ihres Textattributs nehmen und in das Schatten-DOM des Elements als Textinhalt eines `<p>`-Elements einfügen. Der einzige Unterschied
zwischen den beiden ist, dass ihre Schattenwurzeln mit ihren Modi auf
`open` und `closed` eingestellt angebracht sind.

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

Wir fügen dann von jedem Element eines auf unserer Seite ein:

```html
<open-shadow text="I have an open shadow root"></open-shadow>
<closed-shadow text="I have a closed shadow root"></closed-shadow>
```

Dann fügen Sie einen Klick-Ereignislistener auf dem `<html>`-Element ein:

```js
document.querySelector("html").addEventListener("click", (e) => {
  console.log(e.composed);
  console.log(e.composedPath());
});
```

Wenn Sie auf das `<open-shadow>`-Element und dann auf das
`<closed-shadow>`-Element klicken, werden Ihnen zwei Dinge auffallen. Erstens gibt die
`composed`-Eigenschaft `true` zurück, da das `click`
Ereignis immer in der Lage ist, über Schatten-Grenzen hinweg zu propagieren. Zweitens werden Sie einen
Unterschied im Wert von `composedPath` für die beiden Elemente bemerken. Der
`<open-shadow>`-Element-Pfad sieht so aus:

```plain
Array [ p, ShadowRoot, open-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]
```

Wohingegen der `<closed-shadow>`-Element-Pfad wie folgt aussieht:

```plain
Array [ closed-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]
```

Im zweiten Fall propagieren sich die Ereignis-Listener nur bis zum
`<closed-shadow>`-Element selbst, aber nicht zu den Knoten innerhalb der
Schatten-Grenze.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
