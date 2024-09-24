---
title: "Element: after()-Methode"
short-title: after()
slug: Web/API/Element/after
l10n:
  sourceCommit: 8374946642c18a9cc4bf510de767011124e832a2
---

{{APIRef("DOM")}}

Die **`Element.after()`**-Methode fügt eine Reihe von
{{domxref("Node")}}-Objekten oder Zeichenfolgen in die Kinderliste des
übergeordneten Elements des `Element` ein, unmittelbar nach dem `Element`.
Zeichenfolgen werden als äquivalente {{domxref("Text")}}-Knoten eingefügt.

## Syntax

```js-nolint
after(node1)
after(node1, node2)
after(node1, node2, /* …, */ nodeN)
```

### Parameter

- `node1`, …, `nodeN`
  - : Eine Reihe von {{domxref("Node")}}-Objekten oder Zeichenfolgen, die eingefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Wird ausgelöst, wenn der Knoten nicht an der angegebenen Stelle in der Hierarchie eingefügt werden kann.

## Beispiele

### Einfügen eines Elements

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.after(span);

console.log(container.outerHTML);
// "<div><p></p><span></span></div>"
```

### Einfügen von Text

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);

p.after("Text");

console.log(container.outerHTML);
// "<div><p></p>Text</div>"
```

### Einfügen eines Elements und Text

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.after(span, "Text");

console.log(container.outerHTML);
// "<div><p></p><span></span>Text</div>"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.before()")}}
- {{domxref("Element.append()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("CharacterData.after()")}}
- {{domxref("DocumentType.after()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("NodeList")}}
