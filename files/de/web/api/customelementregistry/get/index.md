---
title: "CustomElementRegistry: get() Methode"
short-title: get()
slug: Web/API/CustomElementRegistry/get
l10n:
  sourceCommit: 6f8924937f1c3fcaa2a7a9779741ff1af6e8e17f
---

{{APIRef("Web Components")}}

Die **`get()`**-Methode des
[`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Interfaces gibt den Konstruktor für ein zuvor definiertes benutzerdefiniertes Element zurück.

## Syntax

```js-nolint
get(name)
```

### Parameter

- `name`
  - : Der Name des benutzerdefinierten Elements.

### Rückgabewert

Der Konstruktor für das benannte benutzerdefinierte Element oder {{jsxref("undefined")}}, wenn kein benutzerdefiniertes Element mit diesem Namen definiert ist.

## Beispiele

```js
customElements.define(
  "my-paragraph",
  class extends HTMLElement {
    constructor() {
      let templateContent = document.getElementById("custom-paragraph").content;
      super() // returns element this scope
        .attachShadow({ mode: "open" }) // sets AND returns this.shadowRoot
        .append(templateContent.cloneNode(true));
    }
  },
);

// Return a reference to the my-paragraph constructor
let ctor = customElements.get("my-paragraph");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
