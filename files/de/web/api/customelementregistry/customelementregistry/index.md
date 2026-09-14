---
title: "CustomElementRegistry: CustomElementRegistry()-Konstruktor"
short-title: CustomElementRegistry()
slug: Web/API/CustomElementRegistry/CustomElementRegistry
l10n:
  sourceCommit: 57ea7eecce9dee3bd3a874ce184a48cf993c0699
---

{{APIRef("Web Components")}}

Der **`CustomElementRegistry()`**-Konstruktor erstellt ein neues [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt zur bereichsbezogenen Verwendung.

Der Konstruktor wird speziell zum Erstellen [bereichsbezogener Registrierungen benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) verwendet, die Definitionen von [benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements) auf einen bestimmten Bereich beschränken, beispielsweise ein Element oder einen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).

> [!NOTE]
> Das globale `CustomElementRegistry`-Objekt, das einem [`Window`](/de/docs/Web/API/Window) zugeordnet ist, wird nicht mit diesem Konstruktor erstellt; es wird beim Einrichten des Fensters automatisch erstellt und ist über die Eigenschaft [`window.customElements`](/de/docs/Web/API/Window/customElements) zugänglich.

## Syntax

```js-nolint
new CustomElementRegistry()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt.

## Beschreibung

Wenn Sie eine `CustomElementRegistry` mit `new CustomElementRegistry()` erstellen, wird die resultierende Registrierung als _bereichsbezogen_ betrachtet. Das bedeutet:

- Definitionen benutzerdefinierter Elemente, die mit [`define()`](/de/docs/Web/API/CustomElementRegistry/define) hinzugefügt werden, sind nicht global verfügbar. Sie gelten nur für Knoten, die dieser Registrierung zugeordnet wurden.
- Sie unterstützt die Option `extends` in `define()` nicht (zum Erstellen [angepasster integrierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element)). Der Versuch, `extends` mit einer bereichsbezogenen Registrierung zu verwenden, löst eine `NotSupportedError`-[`DOMException`](/de/docs/Web/API/DOMException) aus.

Um eine bereichsbezogene Registrierung mit einem DOM-Teilbaum zu verknüpfen, können Sie die Methode [`initialize()`](/de/docs/Web/API/CustomElementRegistry/initialize) verwenden, sie an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) übergeben oder die Option `customElementRegistry` der Methode [`Document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden.

## Beispiele

### Erstellen einer bereichsbezogenen Registrierung benutzerdefinierter Elemente

Dieses Beispiel erstellt eine bereichsbezogene Registrierung, definiert darin ein benutzerdefiniertes Element und übergibt die Registrierung an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow). Wenn HTML mit `<my-element>` zum Shadow Root hinzugefügt wird, wird das Element mithilfe der Definition der bereichsbezogenen Registrierung aktualisiert.

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

- [Bereichsbezogene Registrierungen benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) in [Verwenden benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)
- [`CustomElementRegistry.initialize()`](/de/docs/Web/API/CustomElementRegistry/initialize)
- [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define)
