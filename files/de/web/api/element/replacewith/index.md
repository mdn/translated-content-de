---
title: "Element: replaceWith()-Methode"
short-title: replaceWith()
slug: Web/API/Element/replaceWith
l10n:
  sourceCommit: 83abbf83add0cd101b13f747bf52da0ff4b51bf8
---

{{APIRef("DOM")}}

Die Methode **`replaceWith()`** der Schnittstelle [`Element`](/de/docs/Web/API/Element) ersetzt dieses `Element` in der Liste der Kindknoten seines Elternknotens durch eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen. Zeichenfolgen werden als entsprechende [`Text`](/de/docs/Web/API/Text)-Knoten eingefügt. Wenn [`parentNode`](/de/docs/Web/API/Node/parentNode) `null` ist, geschieht nichts.

## Syntax

```js-nolint
replaceWith(param1)
replaceWith(param1, param2)
replaceWith(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen, die eingefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Knoten nicht an der angegebenen Stelle in der Hierarchie eingefügt werden kann.

## Beispiele

### `replaceWith()` verwenden

```js
const div = document.createElement("div");
const p = document.createElement("p");
div.appendChild(p);
const span = document.createElement("span");

p.replaceWith(span);

console.log(div.outerHTML);
// "<div><span></span></div>"
```

### `replaceWith()` ist unscopable

Die Methode `replaceWith()` wird innerhalb einer `with`-Anweisung nicht in deren Gültigkeitsbereich aufgenommen. Weitere Informationen finden Sie unter {{jsxref("Symbol.unscopables")}}.

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
