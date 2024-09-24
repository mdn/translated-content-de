---
title: "Element: Methode replaceWith()"
short-title: replaceWith()
slug: Web/API/Element/replaceWith
l10n:
  sourceCommit: 8374946642c18a9cc4bf510de767011124e832a2
---

{{APIRef("DOM")}}

Die Methode **`Element.replaceWith()`** ersetzt dieses `Element` in der Kindliste seines Elternteils durch eine Reihe von {{domxref("Node")}}-Objekten oder Strings. Strings werden als gleichwertige {{domxref("Text")}}-Knoten eingefügt.

## Syntax

```js-nolint
replaceWith(param1)
replaceWith(param1, param2)
replaceWith(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Reihe von {{domxref("Node")}}-Objekten oder Strings, die ersetzt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Wird ausgelöst, wenn der Knoten an der angegebenen Stelle in der Hierarchie nicht eingefügt werden kann.

## Beispiele

### Verwendung von `replaceWith()`

```js
const div = document.createElement("div");
const p = document.createElement("p");
div.appendChild(p);
const span = document.createElement("span");

p.replaceWith(span);

console.log(div.outerHTML);
// "<div><span></span></div>"
```

### `replaceWith()` ist nicht skopierbar

Die Methode `replaceWith()` ist nicht im `with`-Statement skopiert. Siehe {{jsxref("Symbol.unscopables")}} für weitere Informationen.

```js
with (node) {
  replaceWith("foo");
}
// ReferenceError: replaceWith is not defined
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Node.replaceChild()")}}
- {{domxref("NodeList")}}
- {{domxref("CharacterData.replaceWith()")}}
- {{domxref("DocumentType.replaceWith()")}}
