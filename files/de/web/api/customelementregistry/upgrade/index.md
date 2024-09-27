---
title: "CustomElementRegistry: `upgrade()`-Methode"
short-title: upgrade()
slug: Web/API/CustomElementRegistry/upgrade
l10n:
  sourceCommit: 55fe0ef0be11c6d18012d18b355d46f9df60c4db
---

{{APIRef("Web Components")}}

Die **`upgrade()`**-Methode des [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Interfaces aktualisiert alle Schatten enthaltenden benutzerdefinierten Elemente in einem [`Node`](/de/docs/Web/API/Node)-Unterbaum, noch bevor sie mit dem Hauptdokument verbunden sind.

## Syntax

```js-nolint
upgrade(root)
```

### Parameter

- `root`
  - : Eine [`Node`](/de/docs/Web/API/Node)-Instanz mit schattenhaltigen Nachfahr-Elementen, die aktualisiert werden sollen. Wenn keine Nachfahr-Elemente vorhanden sind, die aktualisiert werden können, wird kein Fehler ausgelöst.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Entnommen aus der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/custom-elements.html#dom-customelementregistry-upgrade):

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
