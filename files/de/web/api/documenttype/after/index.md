---
title: "DocumentType: after()-Methode"
short-title: after()
slug: Web/API/DocumentType/after
l10n:
  sourceCommit: 8374946642c18a9cc4bf510de767011124e832a2
---

{{APIRef("DOM")}}

Die **`DocumentType.after()`**-Methode fügt eine Menge von {{domxref("Node")}}-Objekten oder Zeichenketten in die Kinderliste des Elternteils des `DocumentType` ein, direkt nach dem `DocumentType`. Zeichenketten werden als äquivalente {{domxref("Text")}}-Knoten eingefügt.

## Syntax

```js-nolint
after(param1)
after(param1, param2)
after(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Menge von {{domxref("Node")}}-Objekten oder Zeichenketten, die eingefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
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

- {{domxref("DocumentType.before()")}}
- {{domxref("CharacterData.after()")}}
- {{domxref("Element.after()")}}
