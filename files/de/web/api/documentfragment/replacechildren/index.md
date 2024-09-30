---
title: "DocumentFragment: replaceChildren()-Methode"
short-title: replaceChildren()
slug: Web/API/DocumentFragment/replaceChildren
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

Die **`DocumentFragment.replaceChildren()`**-Methode ersetzt die vorhandenen Kinder eines `DocumentFragment` durch einen festgelegten neuen Satz von Kindern. Diese können Zeichenketten oder [`Node`](/de/docs/Web/API/Node)-Objekte sein.

## Syntax

```js-nolint
replaceChildren(param1)
replaceChildren(param1, param2)
replaceChildren(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenketten, mit denen die vorhandenen Kinder des `DocumentFragment` ersetzt werden sollen. Wenn keine Ersetzungsobjekte angegeben sind, wird das `DocumentFragment` von allen Kindknoten geleert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [Einschränkungen des Knotensbaums](https://dom.spec.whatwg.org/#concept-node-tree) verletzt werden.

## Beispiele

### Ein Dokument-Fragment leeren

`replaceChildren()` bietet eine sehr praktische Möglichkeit, ein Dokument-Fragment von all seinen Kindern zu leeren. Sie rufen es für das Dokument-Fragment ohne Angabe von Argumenten auf:

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
