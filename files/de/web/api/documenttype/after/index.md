---
title: "DocumentType: after()-Methode"
short-title: after()
slug: Web/API/DocumentType/after
l10n:
  sourceCommit: 83abbf83add0cd101b13f747bf52da0ff4b51bf8
---

{{APIRef("DOM")}}

Die **`after()`**-Methode der [`DocumentType`](/de/docs/Web/API/DocumentType)-Schnittstelle fügt eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen in die Liste der Kindknoten des übergeordneten Knotens von `DocumentType` ein, unmittelbar nach `DocumentType`. Zeichenfolgen werden als entsprechende [`Text`](/de/docs/Web/API/Text)-Knoten eingefügt. Ist [`parentNode`](/de/docs/Web/API/Node/parentNode) `null`, geschieht nichts.

## Syntax

```js-nolint
after(param1)
after(param1, param2)
after(param1, param2, /* …, */ paramN)
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

```js
const docType = document.implementation.createDocumentType("html", "", "");
const myDoc = document.implementation.createDocument("", "", docType);

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
