---
title: "Element: before()-Methode"
short-title: before()
slug: Web/API/Element/before
l10n:
  sourceCommit: 8374946642c18a9cc4bf510de767011124e832a2
---

{{APIRef("DOM")}}

Die **`Element.before()`**-Methode fügt eine Reihe von {{domxref("Node")}}-Objekten oder Zeichenfolgen in die Kindliste des Elternteils dieses `Element` ein, direkt vor diesem `Element`. Zeichenfolgen werden als äquivalente {{domxref("Text")}}-Knoten eingefügt.

## Syntax

```js-nolint
before(param1)
before(param1, param2)
before(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Reihe von {{domxref("Node")}}-Objekten oder Zeichenfolgen, die eingefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Wird ausgelöst, wenn der Knoten an der angegebenen Stelle in der Hierarchie nicht eingefügt werden kann.

## Beispiele

### Einfügen eines Elements

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.before(span);

console.log(container.outerHTML);
// "<div><span></span><p></p></div>"
```

### Einfügen von Text

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);

p.before("Text");

console.log(container.outerHTML);
// "<div>Text<p></p></div>"
```

### Einfügen eines Elements und Text

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.before(span, "Text");

console.log(container.outerHTML);
// "<div><span></span>Text<p></p></div>"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.after()")}}
- {{domxref("Element.append()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("CharacterData.before()")}}
- {{domxref("DocumentType.before()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("NodeList")}}
