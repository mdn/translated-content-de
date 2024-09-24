---
title: "DocumentType: Methode before()"
short-title: before()
slug: Web/API/DocumentType/before
l10n:
  sourceCommit: 8374946642c18a9cc4bf510de767011124e832a2
---

{{APIRef("DOM")}}

Die Methode **`DocumentType.before()`** fügt eine Reihe von {{domxref("Node")}}-Objekten oder Zeichenfolgen in die Kinderliste des Elternteils des `DocumentType` ein, direkt vor dem `DocumentType`. Zeichenfolgen werden als gleichwertige {{domxref("Text")}}-Knoten eingefügt.

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

### Hinzufügen eines bedingten Kommentars

Kommentarknoten sind vor Doctype-Deklarationen gültig, jedoch nicht ratsam, da sie den Quirks-Modus in IE auslösen. Ein [bedingter Kommentar](https://en.wikipedia.org/wiki/Conditional_comment) funktioniert jedoch auch in IE:

```js
let docType = document.implementation.createDocumentType("html", "", "");
let myDoc = document.implementation.createDocument("", "", docType);

docType.before(
  document.createComment("<!--[if !IE]> conditional comment <![endif]-->"),
);

myDoc.childNodes;
// NodeList [<!--[if !IE]> conditional comment <![endif]-->, <!DOCTYPE html>]
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("DocumentType.after()")}}
- {{domxref("CharacterData.before()")}}
- {{domxref("Element.before()")}}
