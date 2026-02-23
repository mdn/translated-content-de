---
title: "ShadowRoot: Eigenschaft customElementRegistry"
short-title: customElementRegistry
slug: Web/API/ShadowRoot/customElementRegistry
l10n:
  sourceCommit: 9c4d4cb78a55340b46855e47aba76729a59e11ce
---

{{APIRef("Web Components")}}

Die **`customElementRegistry`**-Eigenschaft des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Interfaces gibt das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt zurück, das diesem Shadow Root zugeordnet ist, oder `null`, falls keines gesetzt wurde.

Die `customElementRegistry` eines Shadow Roots bestimmt, welche [Custom-Element](/de/docs/Web/API/Web_components/Using_custom_elements)-Definitionen verwendet werden, um Elemente innerhalb dieses Shadow Trees zu aktualisieren. Sie kann gesetzt werden, wenn der Shadow Root über die `customElementRegistry`-Option von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) erstellt wird, oder später durch Nutzung von [`CustomElementRegistry.initialize()`](/de/docs/Web/API/CustomElementRegistry/initialize). Sobald sie auf ein `CustomElementRegistry`-Objekt gesetzt ist, kann sie nicht mehr geändert werden.

Diese Eigenschaft ist auch auf [`Document`](/de/docs/Web/API/Document)-Objekten unter demselben Eigenschaftsnamen [`customElementRegistry`](/de/docs/Web/API/Document/customElementRegistry) verfügbar.

## Wert

Ein [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt oder `null`.

## Beispiele

### Einrichten eines Scoped-Registers auf einem Shadow Root

Dieses Beispiel erstellt ein Scoped-Register mit einer benutzerdefinierten Elementdefinition und übergibt es an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow). Die `customElementRegistry`-Eigenschaft auf dem resultierenden Shadow Root spiegelt das Scoped-Register wider.

```js
const myRegistry = new CustomElementRegistry();
myRegistry.define(
  "my-element",
  class extends HTMLElement {
    connectedCallback() {
      this.textContent = "Hello from scoped registry!";
    }
  },
);

const host = document.createElement("div");
document.body.appendChild(host);

const shadow = host.attachShadow({
  mode: "open",
  customElementRegistry: myRegistry,
});

shadow.innerHTML = "<my-element></my-element>";

console.log(shadow.customElementRegistry === myRegistry); // true
console.log(shadow.querySelector("my-element").textContent);
// "Hello from scoped registry!"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.customElementRegistry`](/de/docs/Web/API/Document/customElementRegistry)
- [`Element.customElementRegistry`](/de/docs/Web/API/Element/customElementRegistry)
- [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)
- [`CustomElementRegistry()`](/de/docs/Web/API/CustomElementRegistry/CustomElementRegistry) Konstruktor
- [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow)
- [Using custom elements](/de/docs/Web/API/Web_components/Using_custom_elements)
- [Using shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
