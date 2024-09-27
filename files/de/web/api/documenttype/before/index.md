---
title: "DocumentType: before() Methode"
short-title: before()
slug: Web/API/DocumentType/before
l10n:
  sourceCommit: 8374946642c18a9cc4bf510de767011124e832a2
---

{{APIRef("DOM")}}

Die **`DocumentType.before()`** Methode fügt eine Menge von
[`Node`](/de/docs/Web/API/Node) Objekten oder Zeichenfolgen in die Kinderliste des
Elternteils des `DocumentType` ein, direkt vor dem `DocumentType`.
Zeichenfolgen werden als gleichwertige [`Text`](/de/docs/Web/API/Text) Knoten eingefügt.

## Syntax

```js-nolint
before(param1)
before(param1, param2)
before(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Menge von [`Node`](/de/docs/Web/API/Node) Objekten oder Zeichenfolgen, die eingefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Knoten an der angegebenen Stelle in der Hierarchie nicht eingefügt werden kann.

## Beispiele

### Hinzufügen eines bedingten Kommentars

Kommentarknoten sind vor Doctyp-Deklarationen gültig, aber nicht ratsam,
da sie den Quirks-Modus in IE auslösen. Ein
[bedingter Kommentar](https://en.wikipedia.org/wiki/Conditional_comment)
funktioniert allerdings auch in IE:

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DocumentType.after()`](/de/docs/Web/API/DocumentType/after)
- [`CharacterData.before()`](/de/docs/Web/API/CharacterData/before)
- [`Element.before()`](/de/docs/Web/API/Element/before)
