---
title: "Dokument: Methode createAttribute()"
short-title: createAttribute()
slug: Web/API/Document/createAttribute
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{ ApiRef("DOM") }}

Die **`Document.createAttribute()`** Methode erstellt einen neuen Attributknoten und gibt diesen zurück. Das erstellte Objekt ist ein Knoten, der die [`Attr`](/de/docs/Web/API/Attr) Schnittstelle implementiert. Der DOM erzwingt nicht, welche Art von Attributen auf diese Weise zu einem bestimmten Element hinzugefügt werden können.

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

Ein [`Attr`](/de/docs/Web/API/Attr) Knoten.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`name`](#name) Wert kein gültiger [XML-Name](https://www.w3.org/TR/xml/#dt-name) ist; zum Beispiel, wenn er mit einer Zahl, einem Bindestrich oder Punkt beginnt oder Zeichen enthält, die keine alphanumerischen Zeichen, Unterstriche, Bindestriche oder Punkte sind.

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
