---
title: "Element: Methode getAttributeNode()"
short-title: getAttributeNode()
slug: Web/API/Element/getAttributeNode
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("DOM") }}

Gibt das angegebene Attribut des angegebenen Elements als [`Attr`](/de/docs/Web/API/Attr)-Knoten zurück.

Diese Methode ist nützlich, wenn Sie die [Instanzeigenschaften](/de/docs/Web/API/Attr#instance_properties) des Attributs benötigen. Wenn Sie nur den Wert des Attributs benötigen, können Sie stattdessen die Methode [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) verwenden.

## Syntax

```js-nolint
getAttributeNode(attrName)
```

### Parameter

- `attrName`
  - : Ein Zeichenfolgenwert, der den Namen des Attributs enthält.

### Rückgabewert

Ein `Attr`-Knoten für das Attribut.

## Beispiele

```js
// html: <div id="top" />
let t = document.getElementById("top");
let idAttr = t.getAttributeNode("id");
alert(idAttr.value === "top");
```

## Hinweise

Wenn diese Methode auf ein HTML-Element in einem DOM, das als HTML-Dokument gekennzeichnet ist, aufgerufen wird, setzt `getAttributeNode` ihr Argument in Kleinbuchstaben, bevor es weitergeht.

Der `Attr`-Knoten erbt von `Node`, wird jedoch nicht als Teil des Dokumentbaums betrachtet. Allgemeine `Node`-Attribute wie [parentNode](/de/docs/Web/API/Node/parentNode), [previousSibling](/de/docs/Web/API/Node/previousSibling) und [nextSibling](/de/docs/Web/API/Node/nextSibling) sind für einen `Attr`-Knoten `null`. Sie können jedoch das Element abrufen, zu dem das Attribut gehört, mit der Eigenschaft `ownerElement`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.createAttribute()`](/de/docs/Web/API/Document/createAttribute)
- [`Element.setAttributeNode()`](/de/docs/Web/API/Element/setAttributeNode)
- [`Element.removeAttributeNode()`](/de/docs/Web/API/Element/removeAttributeNode)
