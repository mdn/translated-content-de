---
title: "Element: customElementRegistry-Eigenschaft"
short-title: customElementRegistry
slug: Web/API/Element/customElementRegistry
l10n:
  sourceCommit: 9c4d4cb78a55340b46855e47aba76729a59e11ce
---

{{APIRef("Web Components")}}

Die **`customElementRegistry`**-Schreibgeschützte Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces gibt das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt zurück, das mit diesem Element verknüpft ist, oder `null`, wenn keines festgelegt wurde.

Ein `customElementRegistry` eines Elements wird beim Erstellen des Elements festgelegt (zum Beispiel über [`Document.createElement()`](/de/docs/Web/API/Document/createElement) mit der `customElementRegistry`-Option, oder wenn es in einem Kontext geparst wird, der ein scoped registry hat). Einmal auf ein `CustomElementRegistry`-Objekt gesetzt, kann es nicht mehr geändert werden. Das Registry bestimmt, welche [benutzerdefinierten Element-](/de/docs/Web/API/Web_components/Using_custom_elements) Definitionen verwendet werden, wenn das Element [aktualisiert](/de/docs/Web/API/CustomElementRegistry/upgrade) wird.

## Wert

Ein [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt oder `null`.

## Beispiele

### Zugriff auf das `customElementRegistry` eines Elements

Dieses Beispiel erstellt ein scoped registry, verbindet es mit einem Shadow-Root und liest dann die `customElementRegistry`-Eigenschaft von einem Element im Shadow-Baum, um zu bestätigen, dass es mit dem scoped registry übereinstimmt.

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
- [Verwendung von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements)
