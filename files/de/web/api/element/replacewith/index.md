---
title: "Element: Methode replaceWith()"
short-title: replaceWith()
slug: Web/API/Element/replaceWith
l10n:
  sourceCommit: 8374946642c18a9cc4bf510de767011124e832a2
---

{{APIRef("DOM")}}

Die **`Element.replaceWith()`**-Methode ersetzt dieses
`Element` in der Kindliste seines übergeordneten Elements durch eine Reihe von
[`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen. Zeichenfolgen werden als äquivalente [`Text`](/de/docs/Web/API/Text)-Knoten eingefügt.

## Syntax

```js-nolint
replaceWith(param1)
replaceWith(param1, param2)
replaceWith(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen, die ersetzt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
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

### `replaceWith()` ist unscopeable

Die `replaceWith()`-Methode ist nicht im `with`-Statement eingeschlossen. Siehe {{jsxref("Symbol.unscopables")}} für weitere Informationen.

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

- [`Node.replaceChild()`](/de/docs/Web/API/Node/replaceChild)
- [`NodeList`](/de/docs/Web/API/NodeList)
- [`CharacterData.replaceWith()`](/de/docs/Web/API/CharacterData/replaceWith)
- [`DocumentType.replaceWith()`](/de/docs/Web/API/DocumentType/replaceWith)
