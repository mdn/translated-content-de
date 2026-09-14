---
title: "ShadowRoot: customElementRegistry-Eigenschaft"
short-title: customElementRegistry
slug: Web/API/ShadowRoot/customElementRegistry
l10n:
  sourceCommit: 57ea7eecce9dee3bd3a874ce184a48cf993c0699
---

{{APIRef("Web Components")}}

Die schreibgeschützte Eigenschaft **`customElementRegistry`** der Schnittstelle [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) gibt das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt zurück, das diesem Shadow Root zugeordnet ist, oder `null`, wenn keines festgelegt wurde.

Die `customElementRegistry` eines Shadow Root bestimmt, welche Definitionen von [benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements) zum Upgraden von Elementen innerhalb dieses Shadow Tree verwendet werden. Sie kann beim Erstellen des Shadow Root über die Option `customElementRegistry` von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) oder später mit [`CustomElementRegistry.initialize()`](/de/docs/Web/API/CustomElementRegistry/initialize) festgelegt werden. Sobald sie auf ein `CustomElementRegistry`-Objekt gesetzt wurde, kann sie nicht mehr geändert werden.

Diese Eigenschaft ist auch für [`Document`](/de/docs/Web/API/Document)-Objekte unter demselben Eigenschaftsnamen [`customElementRegistry`](/de/docs/Web/API/Document/customElementRegistry) verfügbar.

## Wert

Ein [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt oder `null`.

## Beispiele

### Festlegen einer bereichsspezifischen Registry für einen Shadow Root

Dieses Beispiel erstellt eine bereichsspezifische Registry mit einer benutzerdefinierten Elementdefinition und übergibt sie an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow). Die Eigenschaft `customElementRegistry` des resultierenden Shadow Root spiegelt die bereichsspezifische Registry wider.

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
- [`CustomElementRegistry()`](/de/docs/Web/API/CustomElementRegistry/CustomElementRegistry)-Konstruktor
- [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow)
- [Bereichsspezifische Registries für benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) in [Verwenden benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)
- [Verwenden von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
