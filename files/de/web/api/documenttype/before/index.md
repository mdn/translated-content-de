---
title: "DocumentType: before()-Methode"
short-title: before()
slug: Web/API/DocumentType/before
l10n:
  sourceCommit: 83abbf83add0cd101b13f747bf52da0ff4b51bf8
---

{{APIRef("DOM")}}

Die **`before()`**-Methode der [`DocumentType`](/de/docs/Web/API/DocumentType)-Schnittstelle fügt eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen in die Liste der Kindknoten des übergeordneten Knotens dieses `DocumentType` ein, unmittelbar vor diesem `DocumentType`. Zeichenfolgen werden als entsprechende [`Text`](/de/docs/Web/API/Text)-Knoten eingefügt. Wenn [`parentNode`](/de/docs/Web/API/Node/parentNode) `null` ist, geschieht nichts.

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
  - : Wird ausgelöst, wenn der Knoten nicht an der angegebenen Stelle in der Hierarchie eingefügt werden kann.

## Beispiele

### Einen bedingten Kommentar hinzufügen

Kommentarknoten sind vor Doctype-Deklarationen zulässig, aber nicht empfehlenswert, da sie im Internet Explorer den Quirks-Modus auslösen. Ein [bedingter Kommentar](https://www.sitepoint.com/internet-explorer-conditional-comments/) funktioniert allerdings auch im Internet Explorer:

```js
const docType = document.implementation.createDocumentType("html", "", "");
const myDoc = document.implementation.createDocument("", "", docType);

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
