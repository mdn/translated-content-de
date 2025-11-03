---
title: "Element: removeAttributeNode() Methode"
short-title: removeAttributeNode()
slug: Web/API/Element/removeAttributeNode
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{ APIRef("DOM") }}

Die **`removeAttributeNode()`**-Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle entfernt den angegebenen [`Attr`](/de/docs/Web/API/Attr) Knoten aus dem Element.

Falls Sie den Attributknoten nicht inspizieren müssen, bevor Sie ihn entfernen, können Sie stattdessen die [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute) Methode verwenden.

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

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Attributliste des Elements den Attributknoten nicht enthält.

## Beispiele

```js
// Given: <div id="foo" lang="en-US" />
const d = document.getElementById("foo");
const dLang = d.getAttributeNode("lang");
d.removeAttributeNode(dLang);
// lang is now removed: <div id="foo" />
```

## Hinweise

Wenn das entfernte Attribut einen Standardwert hat, wird es sofort ersetzt. Das ersetzende Attribut hat den gleichen Namespace-URI und lokalen Namen sowie das ursprüngliche Präfix, falls zutreffend.

Es gibt keine `removeAttributeNodeNS`-Methode; die
`removeAttributeNode`-Methode kann sowohl namenraumbezogene als auch nicht-namenraumbezogene Attribute entfernen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.createAttribute()`](/de/docs/Web/API/Document/createAttribute)
- [`Element.getAttributeNode()`](/de/docs/Web/API/Element/getAttributeNode)
- [`Element.setAttributeNode()`](/de/docs/Web/API/Element/setAttributeNode)
