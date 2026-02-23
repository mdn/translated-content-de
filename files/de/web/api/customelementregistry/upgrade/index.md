---
title: "CustomElementRegistry: upgrade() Methode"
short-title: upgrade()
slug: Web/API/CustomElementRegistry/upgrade
l10n:
  sourceCommit: 9c4d4cb78a55340b46855e47aba76729a59e11ce
---

{{APIRef("Web Components")}}

Die **`upgrade()`** Methode der [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Schnittstelle aktualisiert alle schattenhaltigen benutzerdefinierten Elemente in einem [`Node`](/de/docs/Web/API/Node)-Unterbaum, selbst bevor sie mit dem Hauptdokument verbunden sind.

## Syntax

```js-nolint
upgrade(root)
```

### Parameter

- `root`
  - : Eine [`Node`](/de/docs/Web/API/Node)-Instanz mit schattenhaltigen Nachfahr-Elementen, die aktualisiert werden sollen. Wenn es keine nachrüstbaren Nachfahr-Elemente gibt, wird kein Fehler geworfen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Wenn ein HTML-Element geparst oder erstellt wird, kann es einen Tag-Namen verwenden, der einem [benutzerdefinierten Element](/de/docs/Web/API/Web_components/Using_custom_elements) entspricht (z. B. `<my-element>`). Wenn die Klasse des benutzerdefinierten Elements noch nicht mit der entsprechenden [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) registriert wurde, existiert das Element als ein undefiniertes, einfaches [`HTMLElement`](/de/docs/Web/API/HTMLElement). Es sieht aus und verhält sich wie jedes unbekannte Element — es hat kein spezielles Verhalten, keine Lebenszyklus-Callbacks oder benutzerdefinierten Prototyp-Methoden.

**Upgraden** ist der Prozess des nachträglichen Hochstufens eines solchen Elements zu einem vollwertigen benutzerdefinierten Element, sobald seine Definition verfügbar wird. Wenn ein Element aktualisiert wird:

1. Sein Prototyp wird auf die registrierte benutzerdefinierte Elementklasse umgestellt, die mit [`define()`](/de/docs/Web/API/CustomElementRegistry/define) registriert wurde.
2. Sein [`connectedCallback()`](/de/docs/Web/API/HTMLElement/connectedCallback) und alle anderen anwendbaren [Lebenszyklus-Callbacks](/de/docs/Web/API/Web_components/Using_custom_elements#custom_element_lifecycle_callbacks) werden aufgerufen.
3. Wenn die Klasse [`observedAttributes`](/de/docs/Web/API/HTMLElement/observedAttributes) definiert, wird für jedes Attribut, das bereits einen Wert hat, der [`attributeChangedCallback()`](/de/docs/Web/API/HTMLElement/attributeChangedCallback) aufgerufen.

Normalerweise werden Elemente automatisch aufgerüstet, wenn ihre Definition über `define()` registriert wird, aber nur, wenn sie bereits mit dem Dokument verbunden sind. Die `upgrade()`-Methode ist nützlich, wenn Sie Elemente aktualisieren müssen, die in einem getrennten DOM-Unterbaum existieren (z. B. Elemente, die über [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt oder in einen [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) geparst wurden), bevor sie in das Dokument eingefügt werden.

## Beispiele

Übernommen aus der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/custom-elements.html#dom-customelementregistry-upgrade):

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
