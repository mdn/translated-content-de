---
title: "Window: customElements-Eigenschaft"
short-title: customElements
slug: Web/API/Window/customElements
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

Die schreibgeschützte **`customElements`**-Eigenschaft der [`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt eine Referenz auf das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt zurück, das verwendet werden kann, um neue [benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) zu registrieren und Informationen über bereits registrierte benutzerdefinierte Elemente zu erhalten.

## Beispiele

Das häufigste Beispiel, das man für die Nutzung dieser Eigenschaft sieht, ist der Zugriff auf die [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define)-Methode, um ein neues benutzerdefiniertes Element zu definieren und zu registrieren, z. B.:

```js
let customElementRegistry = window.customElements;
customElementRegistry.define("my-custom-element", MyCustomElement);
```

Üblicherweise wird es jedoch auf etwas wie das Folgende verkürzt:

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

Siehe unser [web-components-examples](https://github.com/mdn/web-components-examples/) Repository für weitere Verwendungsbeispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
