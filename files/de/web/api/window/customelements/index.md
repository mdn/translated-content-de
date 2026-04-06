---
title: "Window: customElements-Eigenschaft"
short-title: customElements
slug: Web/API/Window/customElements
l10n:
  sourceCommit: 26c6aca187b3718498886f9fba6c1cc4f4833b5d
---

{{APIRef("Web Components")}}

Die **`customElements`** Eigenschaft des schreibgeschützten [`Window`](/de/docs/Web/API/Window) Interfaces gibt eine Referenz auf das globale [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) Objekt zurück, welches benutzt werden kann, um neue [benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) zu registrieren und Informationen über bereits registrierte benutzerdefinierte Elemente zu erhalten.

Das globale Register wird standardmäßig für die Registrierung von benutzerdefinierten Elementen verwendet, aber ein Shadow Root kann wählen, ein [bereichsspezifisches benutzerdefiniertes Elementregister](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) zu verwenden, um potenzielle Konflikte bei definierten Elementnamen zu vermeiden.

## Wert

Ein [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry).

## Beispiele

### Grundlegende Nutzung

Das häufigste Beispiel, das Sie für die Verwendung dieser Eigenschaft sehen werden, ist der Zugriff auf die Methode [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define), um ein neues benutzerdefiniertes Element zu definieren und zu registrieren.

Zum Beispiel:

```js
let customElementRegistry = window.customElements;
customElementRegistry.define("my-custom-element", MyCustomElement);
```

Beachten Sie, dass die benutzerdefinierte Elementklasse häufig direkt innerhalb des `define()`-Aufrufs definiert wird, wie gezeigt:

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

Siehe unser [web-components-examples](https://github.com/mdn/web-components-examples/) Repo für weitere Nutzungsbeispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
