---
title: "Element: removeAttributeNode()-Methode"
short-title: removeAttributeNode()
slug: Web/API/Element/removeAttributeNode
l10n:
  sourceCommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{ APIRef("DOM") }}

Die **`removeAttributeNode()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces entfernt den angegebenen [`Attr`](/de/docs/Web/API/Attr)-Knoten aus dem Element.

Wenn Sie den Attributknoten nicht inspizieren müssen, bevor Sie ihn entfernen, können Sie stattdessen die [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)-Methode verwenden.

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
// Given: <div id="top" align="center" />
const d = document.getElementById("top");
const d_align = d.getAttributeNode("align");
d.removeAttributeNode(d_align);
// align is now removed: <div id="top" />
```

## Hinweise

Wenn das entfernte Attribut einen Standardwert hat, wird es sofort ersetzt. Das ersetzende
Attribut hat denselben Namespace-URI und denselben lokalen Namen, sowie das ursprüngliche Präfix,
wenn es zutrifft.

Es gibt keine `removeAttributeNodeNS`-Methode; die
`removeAttributeNode`-Methode kann sowohl Attribute mit Namensraum als auch solche ohne Namensraum entfernen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.createAttribute()`](/de/docs/Web/API/Document/createAttribute)
- [`Element.getAttributeNode()`](/de/docs/Web/API/Element/getAttributeNode)
- [`Element.setAttributeNode()`](/de/docs/Web/API/Element/setAttributeNode)
