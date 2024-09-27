---
title: "Document: replaceChildren() Methode"
short-title: replaceChildren()
slug: Web/API/Document/replaceChildren
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

Die **`Document.replaceChildren()`** Methode ersetzt die
bestehenden Kinder eines `Dokument` durch einen angegebenen neuen Satz von Kindern.

## Syntax

```js-nolint
replaceChildren(param1)
replaceChildren(param1, param2)
replaceChildren(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Ein Satz von [`Node`](/de/docs/Web/API/Node) Objekten oder Strings, um die bestehenden Kinder des `Documents` zu ersetzen. Wenn keine Ersetzungsobjekte angegeben sind, wird das `Document` von allen Kindknoten geleert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [Einschränkungen des Knotendiagramms](https://dom.spec.whatwg.org/#concept-node-tree) verletzt werden.

## Beispiele

### Ein Dokument leeren

`replaceChildren()` bietet eine sehr bequeme Möglichkeit, ein Dokument von allen seinen Kindern zu leeren. Sie rufen es ohne Argumente auf dem Dokument auf:

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
