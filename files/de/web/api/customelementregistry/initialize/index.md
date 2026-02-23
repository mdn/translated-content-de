---
title: "CustomElementRegistry: initialize() Methode"
short-title: initialize()
slug: Web/API/CustomElementRegistry/initialize
l10n:
  sourceCommit: 9c4d4cb78a55340b46855e47aba76729a59e11ce
---

{{APIRef("Web Components")}}

Die **`initialize()`**-Methode des [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Interfaces assoziiert dieses Register mit einem DOM-Teilbaum. Dabei wird das [`customElementRegistry`](/de/docs/Web/API/Element/customElementRegistry) jedes inklusiven Nachkommens, der noch keines hat, gesetzt und es wird versucht, gefundene [Custom Elements](/de/docs/Web/API/Web_components/Using_custom_elements) zu aktualisieren.

## Syntax

```js-nolint
initialize(root)
```

### Parameter

- `root`
  - : Ein [`Node`](/de/docs/Web/API/Node)-Objekt (typischerweise ein [`Document`](/de/docs/Web/API/Document), [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) oder [`Element`](/de/docs/Web/API/Element)), dessen inklusive Nachkommen mit diesem Register assoziiert werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn dieses `CustomElementRegistry` nicht gescopet ist (d.h. nicht mit `new CustomElementRegistry()` erstellt wurde) und entweder `root` ein [`Document`](/de/docs/Web/API/Document)-Knoten ist oder `root`s Dokumentenknoten [`customElementRegistry`](/de/docs/Web/API/Document/customElementRegistry) nicht dieses `CustomElementRegistry` ist.

## Beschreibung

Wenn `initialize()` aufgerufen wird, durchläuft es die inklusiven Nachkommen von `root` in Baumreihenfolge. Für jedes Element (oder `Document`/`ShadowRoot` an der Wurzel), das ein `null` [`customElementRegistry`](/de/docs/Web/API/Element/customElementRegistry) hat, wird das Register auf dieses `CustomElementRegistry` gesetzt. Anschließend wird versucht, jedes Element [zu aktualisieren](/de/docs/Web/API/CustomElementRegistry/upgrade), dessen `customElementRegistry` mit diesem Register übereinstimmt.

Sobald das `customElementRegistry` eines Knotens auf ein `CustomElementRegistry`-Objekt gesetzt ist, kann es nicht mehr geändert werden. Das bedeutet, dass `initialize()` das Register nur für Knoten setzen kann, bei denen es noch `null` ist. Es wird jedoch trotzdem versucht, jedes Element [zu aktualisieren](/de/docs/Web/API/CustomElementRegistry/upgrade), dessen `customElementRegistry` bereits mit diesem Register übereinstimmt, nicht nur neu zugewiesene Elemente.

Knoten haben in mehreren Situationen ein `null`-Custom-Element-Register, einschließlich:

- Dokumente, die durch [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) erstellt wurden, deren Custom-Element-Register standardmäßig `null` ist. Elemente, die innerhalb solcher Dokumente erstellt wurden, haben ebenfalls `null` Register.
- Shadow Roots, die mit `customElementRegistry` auf `null` gesetzt über [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) erstellt wurden.
- Deklarative Shadow Roots, die aus einem {{HTMLElement("template")}}-Element mit dem `shadowrootcustomelementregistry`-Attribut erstellt wurden, das den HTML-Parser anweist, das Custom-Element-Register des Shadow Roots als `null` zu belassen.

## Beispiele

### Initialisierung eines Shadow Roots mit einem gescopten Register

In diesem Beispiel wird ein Shadow Root ohne ein Custom-Element-Register erstellt, HTML mit einem Custom-Element hinzugefügt und dann `initialize()` aufgerufen, um ein gescoptes Register zu assoziieren. Das `<my-element>`-Element wird aktualisiert, wenn `initialize()` das Register auf den Shadow Root und seine Nachkommen setzt.

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

// Create the shadow DOM structure without a registry
const shadow = host.attachShadow({
  mode: "open",
  customElementRegistry: null,
});
shadow.innerHTML = "<my-element></my-element>";

// Later, associate the scoped registry and upgrade custom elements
myRegistry.initialize(shadow);

console.log(shadow.querySelector("my-element").textContent);
// "Hello from scoped registry!"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Custom Elements](/de/docs/Web/API/Web_components/Using_custom_elements)
- [`CustomElementRegistry()`](/de/docs/Web/API/CustomElementRegistry/CustomElementRegistry) Konstruktor
- [`CustomElementRegistry.define()`](/de/docs/Web/API/CustomElementRegistry/define)
- [`CustomElementRegistry.upgrade()`](/de/docs/Web/API/CustomElementRegistry/upgrade)
