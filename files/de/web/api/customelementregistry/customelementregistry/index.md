---
title: "CustomElementRegistry: CustomElementRegistry() Konstruktor"
short-title: CustomElementRegistry()
slug: Web/API/CustomElementRegistry/CustomElementRegistry
l10n:
  sourceCommit: 9c4d4cb78a55340b46855e47aba76729a59e11ce
---

{{APIRef("Web Components")}}

Der **`CustomElementRegistry()`** Konstruktor erzeugt ein neues [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt für die eingeschränkte Nutzung.

Der Konstruktor wird speziell verwendet, um eingeschränkte Registrierungen zu erstellen, die [benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) auf einen bestimmten Bereich beschränken, wie z.B. ein Element oder ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).

> [!NOTE]
> Das globale `CustomElementRegistry`-Objekt, das mit einem [`Window`](/de/docs/Web/API/Window) verbunden ist, wird nicht mit diesem Konstruktor erstellt; es wird automatisch erstellt, wenn das Fenster eingerichtet wird und ist über die [`window.customElements`](/de/docs/Web/API/Window/customElements)-Eigenschaft zugänglich.

## Syntax

```js-nolint
new CustomElementRegistry()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt.

## Beschreibung

Wenn Sie ein `CustomElementRegistry` mit `new CustomElementRegistry()` konstruieren, wird das resultierende Register als _eingeschränkt_ betrachtet. Das bedeutet:

- Benutzerdefinierte Elementdefinitionen, die mit [`define()`](/de/docs/Web/API/CustomElementRegistry/define) hinzugefügt werden, sind nicht global verfügbar. Sie gelten nur für Knoten, die diesem Register zugeordnet wurden.
- Es unterstützt nicht die `extends`-Option in `define()` (zum Erstellen [angepasster eingebauter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_elements)). Der Versuch, `extends` mit einem eingeschränkten Register zu verwenden, löst einen `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) aus.

Um ein eingeschränktes Register mit einem DOM-Teilbaum zu verknüpfen, können Sie die Methode [`initialize()`](/de/docs/Web/API/CustomElementRegistry/initialize) verwenden, es an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) übergeben oder die `customElementRegistry`-Option der Methode [`Document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden.

## Beispiele

### Erstellen eines eingeschränkten benutzerdefinierten Elementregisters

Dieses Beispiel erstellt ein eingeschränktes Register, definiert ein benutzerdefiniertes Element darauf und übergibt das Register an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow). Wenn HTML, das `<my-element>` enthält, dem Shadow Root hinzugefügt wird, wird das Element mithilfe der Definition des eingeschränkten Registers aktualisiert.

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

console.log(shadow.querySelector("my-element").textContent);
// "Hello from scoped registry!"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)
- [`CustomElementRegistry.initialize()`](/de/docs/Web/API/CustomElementRegistry/initialize)
- [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define)
