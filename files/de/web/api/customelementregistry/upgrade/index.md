---
title: "CustomElementRegistry: upgrade()-Methode"
short-title: upgrade()
slug: Web/API/CustomElementRegistry/upgrade
l10n:
  sourceCommit: 2e0b9415ed31484a4830e214eff9e06e408c7261
---

{{APIRef("Web Components")}}

Die **`upgrade()`**-Methode der
[`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Schnittstelle aktualisiert alle schattenbaumhaltigen benutzerdefinierten
Elemente in einem [`Node`](/de/docs/Web/API/Node)-Teilbaum, noch bevor sie mit dem Hauptdokument verbunden sind.

## Syntax

```js-nolint
upgrade(root)
```

### Parameter

- `root`
  - : Eine [`Node`](/de/docs/Web/API/Node)-Instanz mit schattenbaumhaltigen Nachfahrenelementen, die aktualisiert werden sollen. Wenn es keine Nachfahrenelemente gibt, die aktualisiert werden können, wird kein Fehler ausgelöst.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Wenn ein HTML-Element geparst oder erstellt wird, kann es einen Tagnamen verwenden, der einem [benutzerdefinierten Element](/de/docs/Web/API/Web_components/Using_custom_elements) entspricht (z. B. `<my-element>`). Wenn die Klasse des benutzerdefinierten Elements zum Zeitpunkt der Erstellung des Elements noch nicht bei der entsprechenden [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) registriert wurde, existiert das Element als undefiniertes, einfaches [`HTMLElement`](/de/docs/Web/API/HTMLElement). Es sieht aus und verhält sich wie jedes unbekannte Element — es verfügt über kein spezielles Verhalten, keine Lebenszyklus-Callbacks und keine benutzerdefinierten Prototypmethoden.

**Aktualisierung** ist der Prozess, ein solches Element rückwirkend zu einem vollwertigen benutzerdefinierten Element hochzustufen, sobald seine Definition verfügbar wird. Wenn ein Element aktualisiert wird:

1. Sein Prototyp wird gegen die Klasse des benutzerdefinierten Elements ausgetauscht, die mit [`define()`](/de/docs/Web/API/CustomElementRegistry/define) registriert wurde.
2. Sein [`connectedCallback()`](/de/docs/Web/API/Web_components/Using_custom_elements#custom_element_lifecycle_callbacks) sowie alle anderen zutreffenden [Lebenszyklus-Callbacks](/de/docs/Web/API/Web_components/Using_custom_elements#custom_element_lifecycle_callbacks) werden aufgerufen.
3. Wenn die Klasse [`observedAttributes`](/de/docs/Web/API/Web_components/Using_custom_elements#responding_to_attribute_changes) definiert, wird der [`attributeChangedCallback()`](/de/docs/Web/API/Web_components/Using_custom_elements#responding_to_attribute_changes) für jedes Attribut aufgerufen, das bereits einen Wert hat.

Normalerweise werden Elemente automatisch aktualisiert, wenn ihre Definition über `define()` registriert wird, jedoch nur, wenn sie bereits mit dem Dokument verbunden sind. Die `upgrade()`-Methode ist nützlich, wenn Sie Elemente aktualisieren müssen, die in einem getrennten DOM-Teilbaum existieren (zum Beispiel Elemente, die über [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt oder in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) geparst wurden), bevor sie in das Dokument eingefügt werden.

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
