---
title: "CustomElementRegistry: upgrade()-Methode"
short-title: upgrade()
slug: Web/API/CustomElementRegistry/upgrade
l10n:
  sourceCommit: 55fe0ef0be11c6d18012d18b355d46f9df60c4db
---

{{APIRef("Web Components")}}

Die **`upgrade()`**-Methode der [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Schnittstelle aktualisiert alle Schatten-inhaltigen benutzerdefinierten Elemente in einem [`Node`](/de/docs/Web/API/Node)-Teilbaum, selbst bevor sie mit dem Hauptdokument verbunden sind.

## Syntax

```js-nolint
upgrade(root)
```

### Parameter

- `root`
  - : Eine [`Node`](/de/docs/Web/API/Node)-Instanz mit nachfolgenden Schatten-inhaltigen Elementen, die aktualisiert werden sollen. Wenn es keine nachfolgenden Elemente gibt, die aktualisiert werden können, wird kein Fehler ausgelöst.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Entnommen aus der [HTML Spezifikation](https://html.spec.whatwg.org/multipage/custom-elements.html#dom-customelementregistry-upgrade):

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
