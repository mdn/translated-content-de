---
title: "Dokument: createAttribute()-Methode"
short-title: createAttribute()
slug: Web/API/Document/createAttribute
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ ApiRef("DOM") }}

Die **`Document.createAttribute()`**-Methode erstellt einen neuen Attributknoten und gibt diesen zurück. Das erstellte Objekt ist ein Knoten, der das {{domxref("Attr")}}-Interface implementiert. Das DOM erzwingt nicht, welche Art von Attributen auf diese Weise zu einem bestimmten Element hinzugefügt werden können.

> [!NOTE]
> Der im Parameter angegebene String wird in Kleinbuchstaben umgewandelt.

## Syntax

```js-nolint
createAttribute(name)
```

### Parameter

- `name`
  - : Ein String, der den Namen des Attributs enthält.

### Rückgabewert

Ein {{domxref("Attr")}}-Knoten.

### Ausnahmen

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der [`name`](#name)-Wert kein gültiger [XML-Name](https://www.w3.org/TR/REC-xml/#dt-name) ist; zum Beispiel, wenn er mit einer Zahl, einem Bindestrich oder einem Punkt beginnt, oder Zeichen enthält, die keine alphanumerischen Zeichen, Unterstriche, Bindestriche oder Punkte sind.

## Beispiele

```js
const node = document.getElementById("div1");
const a = document.createAttribute("my_attrib");
a.value = "newVal";
node.setAttributeNode(a);
console.log(node.getAttribute("my_attrib")); // "newVal"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.createAttributeNS()")}}
- {{domxref("Document.createElement()")}}
- {{domxref("Element.setAttribute()")}}
- {{domxref("Element.setAttributeNode()")}}
