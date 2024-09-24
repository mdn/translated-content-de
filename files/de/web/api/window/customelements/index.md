---
title: "Window: Eigenschaft customElements"
short-title: customElements
slug: Web/API/Window/customElements
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

Die **`customElements`**-Eigenschaft des {{domxref("Window")}}-Interfaces ist eine schreibgeschützte Eigenschaft, die eine Referenz auf das {{domxref("CustomElementRegistry")}}-Objekt zurückgibt. Diese kann verwendet werden, um neue [benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) zu registrieren und Informationen über bereits registrierte benutzerdefinierte Elemente zu erhalten.

## Beispiele

Das häufigste Beispiel für die Verwendung dieser Eigenschaft ist der Zugriff auf die {{domxref("CustomElementRegistry.define()")}}-Methode, um ein neues benutzerdefiniertes Element zu definieren und zu registrieren, z.B.:

```js
let customElementRegistry = window.customElements;
customElementRegistry.define("my-custom-element", MyCustomElement);
```

In der Regel wird dies jedoch auf folgende Weise verkürzt:

```js
customElements.define(
  "element-details",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById(
        "element-details-template",
      ).content;
      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        template.cloneNode(true),
      );
    }
  },
);
```

Weitere Anwendungsbeispiele finden Sie in unserem [web-components-examples](https://github.com/mdn/web-components-examples/) Repository.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
