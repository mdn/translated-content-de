---
title: "Document: Methode replaceChildren()"
short-title: replaceChildren()
slug: Web/API/Document/replaceChildren
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

Die **`Document.replaceChildren()`**-Methode ersetzt die vorhandenen Kinder eines `Document` mit einer spezifizierten neuen Menge von Kindern.

## Syntax

```js-nolint
replaceChildren(param1)
replaceChildren(param1, param2)
replaceChildren(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Gruppe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen, mit denen die vorhandenen Kinder des `Document` ersetzt werden. Wenn keine Ersetzungsobjekte angegeben werden, wird das `Document` von allen Kindknoten geleert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [Beschränkungen des Baumknotens](https://dom.spec.whatwg.org/#concept-node-tree) verletzt werden.

## Beispiele

### Ein Dokument leeren

`replaceChildren()` bietet einen sehr praktischen Mechanismus zum Leeren eines Dokuments von all seinen Kindern. Sie rufen es ohne Argument auf dem Dokument auf:

```js
document.replaceChildren();
document.children; // HTMLCollection []
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.prepend()`](/de/docs/Web/API/Document/prepend)
- [`Document.append()`](/de/docs/Web/API/Document/append)
