---
title: "Element: append()-Methode"
short-title: append()
slug: Web/API/Element/append
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

Die **`Element.append()`**-Methode fügt eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen nach dem letzten Kind des `Element` ein. Zeichenfolgen werden als gleichwertige [`Text`](/de/docs/Web/API/Text)-Knoten eingefügt.

Unterschiede zur [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild):

- `Element.append()` ermöglicht es Ihnen, auch Zeichenfolgen hinzuzufügen, während `Node.appendChild()` nur [`Node`](/de/docs/Web/API/Node)-Objekte akzeptiert.
- `Element.append()` hat keinen Rückgabewert, während `Node.appendChild()` das angehängte [`Node`](/de/docs/Web/API/Node)-Objekt zurückgibt.
- `Element.append()` kann mehrere Knoten und Zeichenfolgen anhängen, während `Node.appendChild()` nur einen einzelnen Knoten anhängen kann.

## Syntax

```js-nolint
append(param1)
append(param1, param2)
append(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen, die eingefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der Knoten an der angegebenen Stelle in der Hierarchie nicht eingefügt werden kann.

## Beispiele

### Einfügen eines Elements

```js
let div = document.createElement("div");
let p = document.createElement("p");
div.append(p);

console.log(div.childNodes); // NodeList [ <p> ]
```

### Einfügen von Text

```js
let div = document.createElement("div");
div.append("Some text");

console.log(div.textContent); // "Some text"
```

### Einfügen eines Elements und von Text

```js
let div = document.createElement("div");
let p = document.createElement("p");
div.append("Some text", p);

console.log(div.childNodes); // NodeList [ #text "Some text", <p> ]
```

### Die append-Methode ist nicht einschließbar

Die `append()`-Methode wird im `with`-Statement nicht eingeschlossen. Siehe {{jsxref("Symbol.unscopables")}} für weitere Informationen.

```js
let div = document.createElement("div");

with (div) {
  append("foo");
}
// ReferenceError: append is not defined
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.prepend()`](/de/docs/Web/API/Element/prepend)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Element.after()`](/de/docs/Web/API/Element/after)
- [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement)
- [`NodeList`](/de/docs/Web/API/NodeList)
