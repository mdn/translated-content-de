---
title: "Fenster: customElements-Eigenschaft"
short-title: customElements
slug: Web/API/Window/customElements
l10n:
  sourceCommit: 730741c750cc299b85798f1adbaf7adbd6e2016d
---

{{APIRef("Web Components")}}

Die **`customElements`** schreibgeschützte Eigenschaft der [`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt eine Referenz auf das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt zurück, das verwendet werden kann, um neue [benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) zu registrieren und Informationen über bereits registrierte benutzerdefinierte Elemente zu erhalten.

## Beispiele

Das häufigste Beispiel, das Sie für die Verwendung dieser Eigenschaft sehen werden, ist der Zugriff auf die [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define)-Methode, um ein neues benutzerdefiniertes Element zu definieren und zu registrieren, z.B.:

```js
let customElementRegistry = window.customElements;
customElementRegistry.define("my-custom-element", MyCustomElement);
```

In der Regel wird dies jedoch wie folgt verkürzt:

```js
customElements.define(
  "element-details",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById("element-details-template");
      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        document.importNode(template.content, true),
      );
    }
  },
);
```

Weitere Anwendungsbeispiele finden Sie in unserem [web-components-examples](https://github.com/mdn/web-components-examples/) Repository.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
