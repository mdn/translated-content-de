---
title: "Element: customElementRegistry-Eigenschaft"
short-title: customElementRegistry
slug: Web/API/Element/customElementRegistry
l10n:
  sourceCommit: 57ea7eecce9dee3bd3a874ce184a48cf993c0699
---

{{APIRef("Web Components")}}

Die schreibgeschützte Eigenschaft **`customElementRegistry`** des [`Element`](/de/docs/Web/API/Element)-Interfaces gibt das diesem Element zugeordnete [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt zurück oder `null`, wenn keines festgelegt wurde.

Die `customElementRegistry` eines Elements wird festgelegt, wenn das Element erstellt wird (beispielsweise über [`Document.createElement()`](/de/docs/Web/API/Document/createElement) mit der Option `customElementRegistry` oder wenn es in einem Kontext mit einer bereichsbezogenen Registry geparst wird). Sobald sie auf ein `CustomElementRegistry`-Objekt festgelegt wurde, kann sie nicht mehr geändert werden. Die Registry bestimmt, welche Definitionen von [benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements) verwendet werden, wenn das Element [aktualisiert](/de/docs/Web/API/CustomElementRegistry/upgrade) wird.

## Wert

Ein [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt oder `null`.

## Beispiele

### Zugriff auf die Custom-Element-Registry eines Elements

Dieses Beispiel erstellt eine bereichsbezogene Registry, fügt sie an eine Shadow-Root an und liest dann die Eigenschaft `customElementRegistry` von einem Element innerhalb des Shadow Tree aus, um zu bestätigen, dass sie mit der bereichsbezogenen Registry übereinstimmt.

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

const el = shadow.querySelector("my-element");
console.log(el.customElementRegistry === myRegistry); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.customElementRegistry`](/de/docs/Web/API/Document/customElementRegistry)
- [`ShadowRoot.customElementRegistry`](/de/docs/Web/API/ShadowRoot/customElementRegistry)
- [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)
- [Bereichsbezogene Custom-Element-Registries](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) in [Benutzerdefinierte Elemente verwenden](/de/docs/Web/API/Web_components/Using_custom_elements)
