---
title: "DocumentType: before() Methode"
short-title: before()
slug: Web/API/DocumentType/before
l10n:
  sourceCommit: 09877330004e55244a9e8eee2ca04a750970f72d
---

{{APIRef("DOM")}}

Die **`DocumentType.before()`**-Methode fügt eine Reihe von
[`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen in die Kinderliste des
Elternteils des `DocumentType` ein, direkt vor dem `DocumentType`.
Zeichenfolgen werden als gleichwertige [`Text`](/de/docs/Web/API/Text)-Knoten eingefügt.

## Syntax

```js-nolint
before(param1)
before(param1, param2)
before(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen, die eingefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Knoten an der angegebenen Stelle in der Hierarchie nicht eingefügt werden kann.

## Beispiele

### Hinzufügen eines bedingten Kommentars

Kommentar-Knoten sind vor Doctype-Deklarationen zulässig, aber nicht ratsam,
da sie im IE den Quirks-Modus auslösen. Ein
[bedingter Kommentar](https://www.sitepoint.com/internet-explorer-conditional-comments/)
funktioniert jedoch auch für IE:

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
