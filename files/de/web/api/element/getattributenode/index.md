---
title: "Element: getAttributeNode()-Methode"
short-title: getAttributeNode()
slug: Web/API/Element/getAttributeNode
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("DOM") }}

Gibt das angegebene Attribut des angegebenen Elements als {{domxref("Attr")}}-Knoten zurück.

Diese Methode ist nützlich, wenn Sie die [Instanzeigenschaften](/de/docs/Web/API/Attr#instance_properties) des Attributs benötigen. Wenn Sie nur den Wert des Attributs benötigen, können Sie stattdessen die {{domxref("Element.getAttribute()", "getAttribute()")}}-Methode verwenden.

## Syntax

```js-nolint
getAttributeNode(attrName)
```

### Parameter

- `attrName`
  - : Ein String, der den Namen des Attributs enthält.

### Rückgabewert

Ein `Attr`-Knoten für das Attribut.

## Beispiele

```js
// html: <div id="top" />
let t = document.getElementById("top");
let idAttr = t.getAttributeNode("id");
alert(idAttr.value === "top");
```

## Anmerkungen

Wenn die Methode auf ein HTML-Element in einem als HTML-Dokument markierten DOM aufgerufen wird, wird das Argument von `getAttributeNode` vor der Weiterverarbeitung in Kleinbuchstaben umgewandelt.

Der `Attr`-Knoten erbt von `Node`, gilt jedoch nicht als Teil des Dokumentenbaums. Gemeinsame `Node`-Attribute wie [parentNode](/de/docs/Web/API/Node/parentNode), [previousSibling](/de/docs/Web/API/Node/previousSibling) und [nextSibling](/de/docs/Web/API/Node/nextSibling) sind für einen `Attr`-Knoten `null`. Sie können jedoch das Element, zu dem das Attribut gehört, mit der `ownerElement`-Eigenschaft ermitteln.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.createAttribute()")}}
- {{domxref("Element.setAttributeNode()")}}
- {{domxref("Element.removeAttributeNode()")}}
