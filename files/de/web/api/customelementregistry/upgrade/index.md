---
title: "CustomElementRegistry: upgrade()-Methode"
short-title: upgrade()
slug: Web/API/CustomElementRegistry/upgrade
l10n:
  sourceCommit: 7ee6c3f8c59705c68ea12086ca2bb90336dab34b
---

{{APIRef("Web Components")}}

Die **`upgrade()`**-Methode der Schnittstelle [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) aktualisiert alle benutzerdefinierten Elemente mit Shadow DOM in einem Teilbaum eines [`Node`](/de/docs/Web/API/Node), auch bevor sie mit dem Hauptdokument verbunden sind.

## Syntax

```js-nolint
upgrade(root)
```

### Parameter

- `root`
  - : Eine [`Node`](/de/docs/Web/API/Node)-Instanz mit untergeordneten Elementen mit Shadow DOM, die aktualisiert werden sollen. Wenn keine untergeordneten Elemente aktualisiert werden können, wird kein Fehler ausgelöst.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Wenn ein HTML-Element geparst oder erstellt wird, kann es einen Tag-Namen verwenden, der einem [benutzerdefinierten Element](/de/docs/Web/API/Web_components/Using_custom_elements) entspricht (z. B. `<my-element>`). Wenn die Klasse des benutzerdefinierten Elements zum Zeitpunkt der Erstellung noch nicht in der entsprechenden [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) registriert ist, liegt das Element als undefiniertes, einfaches [`HTMLElement`](/de/docs/Web/API/HTMLElement) vor. Es sieht aus und verhält sich wie jedes unbekannte Element – ohne besonderes Verhalten, Lifecycle-Callbacks oder benutzerdefinierte Prototypmethoden.

Bei der **Aktualisierung** wird ein solches Element nachträglich zu einem vollwertigen benutzerdefinierten Element, sobald seine Definition verfügbar ist. Wenn ein Element aktualisiert wird:

1. Sein Konstruktor wird aufgerufen. Darin weist der Aufruf von `super()` dem Element den Prototyp der mit [`define()`](/de/docs/Web/API/CustomElementRegistry/define) registrierten Klasse des benutzerdefinierten Elements zu.
2. Wenn die Klasse [`observedAttributes`](/de/docs/Web/API/Web_components/Using_custom_elements#responding_to_attribute_changes) definiert, wird [`attributeChangedCallback()`](/de/docs/Web/API/Web_components/Using_custom_elements#responding_to_attribute_changes) für jedes Attribut aufgerufen, das bereits einen Wert hat.
3. Wenn das Element bereits verbunden ist, wird sein [`connectedCallback()`](/de/docs/Web/API/Web_components/Using_custom_elements#custom_element_lifecycle_callbacks) aufgerufen.
4. Die Callbacks `formAssociatedCallback()` und/oder `formDisabledCallback()` werden aufgerufen, wenn die jeweiligen Bedingungen erfüllt sind.

Normalerweise werden Elemente automatisch aktualisiert, wenn ihre Definition mit `define()` registriert wird – allerdings nur, wenn sie bereits mit dem Dokument verbunden sind. Die Methode `upgrade()` ist nützlich, wenn Sie Elemente in einem nicht verbundenen DOM-Teilbaum aktualisieren müssen (beispielsweise Elemente, die mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt oder in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) geparst wurden), bevor sie in das Dokument eingefügt werden.

## Beispiele

Aus der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/custom-elements.html#dom-customelementregistry-upgrade):

```js
const el = document.createElement("spider-man");

class SpiderMan extends HTMLElement {}
customElements.define("spider-man", SpiderMan);

console.assert(!(el instanceof SpiderMan)); // not yet upgraded

customElements.upgrade(el);
console.assert(el instanceof SpiderMan); // upgraded!
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
