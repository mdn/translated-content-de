---
title: "CustomElementRegistry: CustomElementRegistry() Konstruktor"
short-title: CustomElementRegistry()
slug: Web/API/CustomElementRegistry/CustomElementRegistry
l10n:
  sourceCommit: 8a74d8feac267c1ddc37a4a8bc61e9aa8db75b12
---

{{APIRef("Web Components")}}

Der **`CustomElementRegistry()`** Konstruktor erzeugt ein neues [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) Objekt für den umschlossenen Gebrauch.

Der Konstruktor wird speziell verwendet, um Bereiche einzuschränken, in denen [benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) auf einen bestimmten Bereich, wie ein Element oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), definiert werden.

> [!NOTE]
> Das globale `CustomElementRegistry` Objekt, das einem [`Window`](/de/docs/Web/API/Window) zugeordnet ist, wird nicht mit diesem Konstruktor erstellt; es wird automatisch erstellt, wenn das Fenster eingerichtet wird, und ist über die [`window.customElements`](/de/docs/Web/API/Window/customElements) Eigenschaft zugänglich.

## Syntax

```js-nolint
new CustomElementRegistry()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) Objekt.

## Beschreibung

Wenn Sie ein `CustomElementRegistry` mit `new CustomElementRegistry()` konstruieren, wird das resultierende Verzeichnis als _bereichsbezogen_ betrachtet. Das bedeutet:

- Benutzerdefinierte Elementdefinitionen, die mit [`define()`](/de/docs/Web/API/CustomElementRegistry/define) hinzugefügt werden, sind nicht global verfügbar. Sie gelten nur für Knoten, die mit diesem Verzeichnis verknüpft wurden.
- Es unterstützt nicht die `extends` Option in `define()` (für die Erstellung von [angepassten eingebauten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element)). Der Versuch, `extends` mit einem bereichsbezogenen Verzeichnis zu verwenden, löst einen `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) aus.

Um ein bereichsbezogenes Verzeichnis mit einem DOM-Unterbaum zu verknüpfen, können Sie die [`initialize()`](/de/docs/Web/API/CustomElementRegistry/initialize) Methode verwenden, es an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) übergeben oder die `customElementRegistry` Option der Methode [`Document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden.

## Beispiele

### Erstellen eines bereichsbezogenen benutzerdefinierten Elementverzeichnisses

Dieses Beispiel erstellt ein bereichsbezogenes Verzeichnis, definiert ein benutzerdefiniertes Element darauf und übergibt das Verzeichnis an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow). Wenn HTML, das `<my-element>` enthält, dem Shadow Root hinzugefügt wird, wird das Element mit der Definition des bereichsbezogenen Verzeichnisses aktualisiert.

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
