---
title: "DocumentFragment: Methode replaceChildren()"
short-title: replaceChildren()
slug: Web/API/DocumentFragment/replaceChildren
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

Die **`DocumentFragment.replaceChildren()`** Methode ersetzt die
vorhandenen Kinder eines `DocumentFragment` mit einem angegebenen neuen Satz von Kindern. Diese
können Zeichenfolgen oder {{domxref("Node")}} Objekte sein.

## Syntax

```js-nolint
replaceChildren(param1)
replaceChildren(param1, param2)
replaceChildren(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Ein Satz von {{domxref("Node")}} Objekten oder Zeichenfolgen, mit denen die
    vorhandenen Kinder des `DocumentFragment` ersetzt werden. Wenn keine Ersetzungsobjekte angegeben sind,
    wird das `DocumentFragment` von allen untergeordneten Knoten geleert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Ausgelöst, wenn die [Einschränkungen des Knotenbaums](https://dom.spec.whatwg.org/#concept-node-tree) verletzt werden.

## Beispiele

### Leeren eines Dokumentfragments

`replaceChildren()` bietet einen sehr praktischen Mechanismus, um ein Dokumentfragment von all seinen Kindern zu leeren. Sie rufen es auf dem Dokumentfragment ohne angegebenes Argument auf:

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

- {{domxref("DocumentFragment.prepend()")}}
- {{domxref("DocumentFragment.append()")}}
