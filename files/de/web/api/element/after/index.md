---
title: "Element: after() Methode"
short-title: after()
slug: Web/API/Element/after
l10n:
  sourceCommit: 8374946642c18a9cc4bf510de767011124e832a2
---

{{APIRef("DOM")}}

Die **`Element.after()`**-Methode fügt eine Menge von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen in die Kindliste des Elternteils des `Element` ein, direkt nach dem `Element`. Zeichenfolgen werden als gleichwertige [`Text`](/de/docs/Web/API/Text)-Knoten eingefügt.

## Syntax

```js-nolint
after(node1)
after(node1, node2)
after(node1, node2, /* …, */ nodeN)
```

### Parameter

- `node1`, …, `nodeN`
  - : Eine Menge von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen, die eingefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Knoten an der angegebenen Stelle in der Hierarchie nicht eingefügt werden kann.

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

### Einfügen eines Elements und von Text

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

- [`Element.before()`](/de/docs/Web/API/Element/before)
- [`Element.append()`](/de/docs/Web/API/Element/append)
- [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement)
- [`CharacterData.after()`](/de/docs/Web/API/CharacterData/after)
- [`DocumentType.after()`](/de/docs/Web/API/DocumentType/after)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`NodeList`](/de/docs/Web/API/NodeList)
