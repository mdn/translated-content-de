---
title: "Element: removeAttributeNode()-Methode"
short-title: removeAttributeNode()
slug: Web/API/Element/removeAttributeNode
l10n:
  sourceCommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{ APIRef("DOM") }}

Die **`removeAttributeNode()`**-Methode des {{domxref("Element")}}-Interfaces entfernt den angegebenen {{domxref("Attr")}}-Knoten aus dem Element.

Wenn Sie den Attributknoten nicht vor dem Entfernen untersuchen müssen, können Sie stattdessen die {{domxref("Element.removeAttribute()")}}-Methode verwenden.

## Syntax

```js-nolint
removeAttributeNode(attributeNode)
```

### Parameter

- `attributeNode`
  - : Der Attributknoten, der aus dem Element entfernt werden soll.

### Rückgabewert

Der Attributknoten, der entfernt wurde.

### Ausnahmen

- `NotFoundError` {{DOMxRef("DOMException")}}
  - : Wird ausgelöst, wenn die Attributliste des Elements den Attributknoten nicht enthält.

## Beispiele

```js
// Gegeben: <div id="top" align="center" />
const d = document.getElementById("top");
const d_align = d.getAttributeNode("align");
d.removeAttributeNode(d_align);
// align ist nun entfernt: <div id="top" />
```

## Hinweise

Wenn das entfernte Attribut einen Standardwert hat, wird es sofort ersetzt. Das ersetzende
Attribut hat denselben Namespace-URI und lokalen Namen sowie gegebenenfalls das ursprüngliche Präfix.

Es gibt keine `removeAttributeNodeNS`-Methode; die
`removeAttributeNode`-Methode kann sowohl Attributen mit Namensraum als auch ohne Namensraum entfernen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.createAttribute()")}}
- {{domxref("Element.getAttributeNode()")}}
- {{domxref("Element.setAttributeNode()")}}
