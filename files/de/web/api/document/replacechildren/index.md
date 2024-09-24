---
title: "Document: Methode replaceChildren()"
short-title: replaceChildren()
slug: Web/API/Document/replaceChildren
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

Die **`Document.replaceChildren()`**-Methode ersetzt die
vorhandenen Kinder eines `Document` durch eine angegebene neue Menge von Kindern.

## Syntax

```js-nolint
replaceChildren(param1)
replaceChildren(param1, param2)
replaceChildren(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Reihe von {{domxref("Node")}}-Objekten oder Strings, mit denen die
    vorhandenen Kinder des `Document` ersetzt werden. Wenn keine Ersetzungsobjekte angegeben sind, wird das `Document` von allen Kindknoten geleert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Wird ausgelöst, wenn die [Einschränkungen des Knotenbaums](https://dom.spec.whatwg.org/#concept-node-tree) verletzt werden.

## Beispiele

### Ein Dokument leeren

`replaceChildren()` bietet einen sehr praktischen Mechanismus, um ein Dokument von all seinen Kindern zu leeren. Es wird auf das Dokument ohne angegebenes Argument aufgerufen:

```js
document.replaceChildren();
document.children; // HTMLCollection []
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.prepend()")}}
- {{domxref("Document.append()")}}
