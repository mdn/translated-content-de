---
title: "CustomElementRegistry: getName() Methode"
short-title: getName()
slug: Web/API/CustomElementRegistry/getName
l10n:
  sourceCommit: 730741c750cc299b85798f1adbaf7adbd6e2016d
---

{{APIRef("Web Components")}}

Die **`getName()`** Methode der [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Schnittstelle gibt den Namen eines zuvor definierten benutzerdefinierten Elements zurück.

## Syntax

```js-nolint
getName(constructor)
```

### Parameter

- `constructor`
  - : Konstruktor für das benutzerdefinierte Element.

### Rückgabewert

Der Name des zuvor definierten benutzerdefinierten Elements oder `null`, wenn es kein benutzerdefiniertes Element mit dem Konstruktor gibt.

## Beispiele

```js
class MyParagraph extends HTMLElement {
  constructor() {
    const template = document.getElementById("custom-paragraph");
    super() // returns element this scope
      .attachShadow({ mode: "open" }) // sets AND returns this.shadowRoot
      .append(document.importNode(template.content, true));
  }
}

customElements.define("my-paragraph", MyParagraph);

// Return a reference to the my-paragraph constructor
customElements.getName(MyParagraph) === "my-paragraph";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
