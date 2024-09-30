---
title: "Element: prepend() Methode"
short-title: prepend()
slug: Web/API/Element/prepend
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

Die **`Element.prepend()`**-Methode fügt eine Gruppe von
[`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen vor dem ersten Kind
des [`Element`](/de/docs/Web/API/Element) ein. Zeichenfolgen werden als
äquivalente [`Text`](/de/docs/Web/API/Text)-Knoten eingefügt.

## Syntax

```js-nolint
prepend(param1)
prepend(param1, param2)
prepend(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Gruppe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen, die eingefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der Knoten nicht an der angegebenen Stelle in der Hierarchie eingefügt werden kann.

## Beispiele

### Ein Element voranstellen

```js
let div = document.createElement("div");
let p = document.createElement("p");
let span = document.createElement("span");
div.append(p);
div.prepend(span);

console.log(div.childNodes); // NodeList [ <span>, <p> ]
```

### Text voranstellen

```js
let div = document.createElement("div");
div.append("Some text");
div.prepend("Headline: ");

console.log(div.textContent); // "Headline: Some text"
```

### Ein Element und Text voranstellen

```js
let div = document.createElement("div");
let p = document.createElement("p");
div.prepend("Some text", p);

console.log(div.childNodes); // NodeList [ #text "Some text", <p> ]
```

### Die prepend-Methode ist nicht einfügbar

Die `prepend()`-Methode ist nicht in die `with`-Anweisung eingefügt.
Weitere Informationen finden Sie unter {{jsxref("Symbol.unscopables")}}.

```js
let div = document.createElement("div");

with (div) {
  prepend("foo");
}
// ReferenceError: prepend is not defined
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.append()`](/de/docs/Web/API/Element/append)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
- [`Element.before()`](/de/docs/Web/API/Element/before)
- [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement)
- [`NodeList`](/de/docs/Web/API/NodeList)
