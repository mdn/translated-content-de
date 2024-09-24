---
title: "Element: append()-Methode"
short-title: append()
slug: Web/API/Element/append
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

Die **`Element.append()`**-Methode fügt eine Reihe von {{domxref("Node")}}-Objekten oder Zeichenketten nach dem letzten Kind des `Element` ein. Zeichenketten werden als äquivalente {{domxref("Text")}}-Knoten eingefügt.

Unterschiede zu {{domxref("Node.appendChild()")}}:

- `Element.append()` ermöglicht es Ihnen, auch Zeichenketten anzufügen, während `Node.appendChild()` nur {{domxref("Node")}}-Objekte akzeptiert.
- `Element.append()` hat keinen Rückgabewert, während
  `Node.appendChild()` das angefügte {{domxref("Node")}}-Objekt zurückgibt.
- `Element.append()` kann mehrere Knoten und Zeichenketten anfügen, während
  `Node.appendChild()` nur einen Knoten anfügen kann.

## Syntax

```js-nolint
append(param1)
append(param1, param2)
append(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Reihe von {{domxref("Node")}}-Objekten oder Zeichenketten, die eingefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Wird ausgelöst, wenn der Knoten an der angegebenen Stelle in der Hierarchie nicht eingefügt werden kann.

## Beispiele

### Anhängen eines Elements

```js
let div = document.createElement("div");
let p = document.createElement("p");
div.append(p);

console.log(div.childNodes); // NodeList [ <p> ]
```

### Anhängen von Text

```js
let div = document.createElement("div");
div.append("Some text");

console.log(div.textContent); // "Some text"
```

### Anhängen eines Elements und von Text

```js
let div = document.createElement("div");
let p = document.createElement("p");
div.append("Some text", p);

console.log(div.childNodes); // NodeList [ #text "Some text", <p> ]
```

### Die append-Methode ist nicht scopable

Die `append()`-Methode ist nicht in die `with`-Anweisung eingebunden. Weitere Informationen finden Sie unter {{jsxref("Symbol.unscopables")}}.

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

- {{domxref("Element.prepend()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Element.after()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("NodeList")}}
