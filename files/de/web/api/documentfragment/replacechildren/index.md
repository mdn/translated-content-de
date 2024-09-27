---
title: "DocumentFragment: replaceChildren() Methode"
short-title: replaceChildren()
slug: Web/API/DocumentFragment/replaceChildren
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

Die **`DocumentFragment.replaceChildren()`**-Methode ersetzt die
vorhandenen Kinder eines `DocumentFragment` mit einem angegebenen neuen Satz von Kindern. Diese können entweder Zeichenfolgen oder [`Node`](/de/docs/Web/API/Node)-Objekte sein.

## Syntax

```js-nolint
replaceChildren(param1)
replaceChildren(param1, param2)
replaceChildren(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Ein Satz von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen, die die bestehenden Kinder des `DocumentFragment` ersetzen. Wenn keine Ersetzungsobjekte angegeben sind, wird das `DocumentFragment` von allen Kindknoten geleert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die [Einschränkungen des Knoteninhaltsbaums](https://dom.spec.whatwg.org/#concept-node-tree) verletzt werden.

## Beispiele

### Leeren eines Document Fragments

`replaceChildren()` bietet einen sehr bequemen Mechanismus zum Leeren eines Document Fragments von allen seinen Kindern. Sie rufen die Methode auf dem Document Fragment auf, ohne ein Argument anzugeben:

```js
let fragment = new DocumentFragment();
let div = document.createElement("div");
let p = document.createElement("p");
fragment.append(p);
fragment.prepend(div);

fragment.children; // HTMLCollection [<div>, <p>]

fragment.replaceChildren();

fragment.children; // HTMLCollection []
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DocumentFragment.prepend()`](/de/docs/Web/API/DocumentFragment/prepend)
- [`DocumentFragment.append()`](/de/docs/Web/API/DocumentFragment/append)
