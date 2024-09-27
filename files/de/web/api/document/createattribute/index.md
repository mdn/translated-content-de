---
title: "Document: createAttribute()-Methode"
short-title: createAttribute()
slug: Web/API/Document/createAttribute
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ ApiRef("DOM") }}

Die **`Document.createAttribute()`**-Methode erstellt einen neuen Attributknoten und gibt diesen zurück. Das erstellte Objekt ist ein Knoten, der das [`Attr`](/de/docs/Web/API/Attr)-Interface implementiert. Das DOM erzwingt nicht, welche Art von Attributen einem bestimmten Element auf diese Weise hinzugefügt werden können.

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

Ein [`Attr`](/de/docs/Web/API/Attr)-Knoten.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Wert von [`name`](#name) kein gültiger [XML-Name](https://www.w3.org/TR/REC-xml/#dt-name) ist; zum Beispiel, wenn er mit einer Zahl, einem Bindestrich oder einem Punkt beginnt oder Zeichen enthält, die keine alphanumerischen Zeichen, Unterstriche, Bindestriche oder Punkte sind.

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

- [`Document.createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS)
- [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
- [`Element.setAttributeNode()`](/de/docs/Web/API/Element/setAttributeNode)
