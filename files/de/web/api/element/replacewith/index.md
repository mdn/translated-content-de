---
title: "Element: replaceWith()-Methode"
short-title: replaceWith()
slug: Web/API/Element/replaceWith
l10n:
  sourceCommit: 8374946642c18a9cc4bf510de767011124e832a2
---

{{APIRef("DOM")}}

Die **`Element.replaceWith()`**-Methode ersetzt dieses
`Element` in der Kinderliste seines Elternteils mit einer Menge von
[`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen. Zeichenfolgen werden als entsprechende [`Text`](/de/docs/Web/API/Text)-Knoten eingefügt.

## Syntax

```js-nolint
replaceWith(param1)
replaceWith(param1, param2)
replaceWith(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Menge von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen zum Ersetzen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der Knoten an der angegebenen Stelle in der Hierarchie nicht eingefügt werden kann.

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

### `replaceWith()` ist unscoopable

Die `replaceWith()`-Methode wird nicht in die `with`
Anweisung eingeschlossen. Weitere Informationen finden Sie unter {{jsxref("Symbol.unscopables")}}.

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
