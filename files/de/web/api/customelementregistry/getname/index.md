---
title: "CustomElementRegistry: Methode getName()"
short-title: getName()
slug: Web/API/CustomElementRegistry/getName
l10n:
  sourceCommit: 6f8924937f1c3fcaa2a7a9779741ff1af6e8e17f
---

{{APIRef("Web Components")}}

Die **`getName()`** Methode der
{{domxref("CustomElementRegistry")}} Schnittstelle gibt den Namen eines zuvor definierten benutzerdefinierten Elements zurück.

## Syntax

```js-nolint
getName(constructor)
```

### Parameter

- `constructor`
  - : Konstruktor für das benutzerdefinierte Element.

### Rückgabewert

Der Name des zuvor definierten benutzerdefinierten Elements oder `null`, wenn kein benutzerdefiniertes Element mit dem Konstruktor definiert wurde.

## Beispiele

```js
class MyParagraph extends HTMLElement {
  constructor() {
    let templateContent = document.getElementById("custom-paragraph").content;
    super() // returns element this scope
      .attachShadow({ mode: "open" }) // sets AND returns this.shadowRoot
      .append(templateContent.cloneNode(true));
  }
}

customElements.define("my-paragraph", MyParagraph);

// Returns a reference to the my-paragraph constructor
customElements.getName(MyParagraph) === "my-paragraph";
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
