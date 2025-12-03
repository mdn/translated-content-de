---
title: "CustomElementRegistry: get() Methode"
short-title: get()
slug: Web/API/CustomElementRegistry/get
l10n:
  sourceCommit: 730741c750cc299b85798f1adbaf7adbd6e2016d
---

{{APIRef("Web Components")}}

Die **`get()`**-Methode des [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Interfaces gibt den Konstruktor für ein zuvor definiertes benutzerdefiniertes Element zurück.

## Syntax

```js-nolint
get(name)
```

### Parameter

- `name`
  - : Der Name des benutzerdefinierten Elements.

### Rückgabewert

Der Konstruktor für das benannte benutzerdefinierte Element, oder {{jsxref("undefined")}}, wenn kein benutzerdefiniertes Element mit diesem Namen definiert ist.

## Beispiele

```js
customElements.define(
  "my-paragraph",
  class extends HTMLElement {
    constructor() {
      const template = document.getElementById("custom-paragraph");
      super() // returns element this scope
        .attachShadow({ mode: "open" }) // sets AND returns this.shadowRoot
        .append(document.importNode(template.content, true));
    }
  },
);

// Return a reference to the my-paragraph constructor
const ctor = customElements.get("my-paragraph");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
