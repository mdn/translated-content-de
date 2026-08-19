---
title: "Element: getAttributeNode() Methode"
short-title: getAttributeNode()
slug: Web/API/Element/getAttributeNode
l10n:
  sourceCommit: f22f67069495dc37e550e354913d4ca984f5a4b0
---

{{APIRef("DOM")}}

Die **`getAttributeNode()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle gibt das angegebene Attribut des angegebenen Elements als ein [`Attr`](/de/docs/Web/API/Attr) Knoten zurück. Sie gibt `null` zurück, wenn das Element kein Attribut mit dem angegebenen Namen hat.

Diese Methode ist nützlich, wenn Sie die [Instanzeigenschaften](/de/docs/Web/API/Attr#instance_properties) des Attributs benötigen. Wenn Sie nur den Wert des Attributs benötigen, können Sie stattdessen die [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) Methode verwenden.

## Syntax

```js-nolint
getAttributeNode(attrName)
```

### Parameter

- `attrName`
  - : Ein String, der den Namen des Attributs angibt. Wenn es auf ein HTML-Element in einem als HTML-Dokument gekennzeichneten DOM aufgerufen wird, wird der Name in Kleinbuchstaben normalisiert.

### Rückgabewert

Ein `Attr` Knoten für das Attribut oder `null`, wenn das Element kein Attribut mit dem angegebenen Namen hat.

> [!NOTE]
> Der `Attr` Knoten erbt von `Node`, wird aber nicht als Teil des Dokumentbaums betrachtet. Allgemeine `Node` Eigenschaften wie [`parentNode`](/de/docs/Web/API/Node/parentNode), [`previousSibling`](/de/docs/Web/API/Node/previousSibling) und [`nextSibling`](/de/docs/Web/API/Node/nextSibling) sind für einen `Attr` Knoten `null`. Sie können jedoch das Element, zu dem das Attribut gehört, mit der [`ownerElement`](/de/docs/Web/API/Attr/ownerElement) Eigenschaft erhalten.

## Beispiele

```js
// html: <div id="top" />
const t = document.getElementById("top");
const idAttr = t.getAttributeNode("id");
console.log(idAttr.value); // "top"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.createAttribute()`](/de/docs/Web/API/Document/createAttribute)
- [`Element.setAttributeNode()`](/de/docs/Web/API/Element/setAttributeNode)
- [`Element.removeAttributeNode()`](/de/docs/Web/API/Element/removeAttributeNode)
