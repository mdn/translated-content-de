---
title: "DocumentType: after() Methode"
short-title: after()
slug: Web/API/DocumentType/after
l10n:
  sourceCommit: 8374946642c18a9cc4bf510de767011124e832a2
---

{{APIRef("DOM")}}

Die **`DocumentType.after()`** Methode fügt eine Reihe von
[`Node`](/de/docs/Web/API/Node)-Objekten oder Strings in die Kinderliste des
Elternteils von `DocumentType` ein, direkt nach dem `DocumentType`.
Strings werden als äquivalente [`Text`](/de/docs/Web/API/Text)-Knoten eingefügt.

## Syntax

```js-nolint
after(param1)
after(param1, param2)
after(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Strings, die eingefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Knoten an der angegebenen Stelle in der Hierarchie nicht eingefügt werden kann.

## Beispiele

```js
let docType = document.implementation.createDocumentType("html", "", "");
let myDoc = document.implementation.createDocument("", "", docType);

docType.after(document.createElement("html"));

myDoc.childNodes;
// NodeList [<!DOCTYPE html>, <html>]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DocumentType.before()`](/de/docs/Web/API/DocumentType/before)
- [`CharacterData.after()`](/de/docs/Web/API/CharacterData/after)
- [`Element.after()`](/de/docs/Web/API/Element/after)
