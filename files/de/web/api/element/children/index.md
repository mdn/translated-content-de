---
title: "Element: children-Eigenschaft"
short-title: children
slug: Web/API/Element/children
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ APIRef("DOM") }}

Die schreibgeschützte **`children`**-Eigenschaft gibt eine live {{domxref("HTMLCollection")}} zurück, die alle Kind{{domxref("Element", "elemente")}} des Elements enthält, auf dem sie aufgerufen wurde.

`Element.children` umfasst nur Elementknoten. Um alle Kindknoten, einschließlich Nicht-Element-Knoten wie Text- und Kommentarknoten, zu erhalten, verwenden Sie {{domxref("Node.childNodes")}}.

## Wert

Eine {{ domxref("HTMLCollection") }}, die eine live, geordnete Sammlung der DOM-Elemente ist, die Kinder des `node` sind. Sie können auf die einzelnen Kindknoten in der Sammlung zugreifen, indem Sie entweder die {{domxref("HTMLCollection.item()", "item()")}}-Methode auf der Sammlung verwenden oder die JavaScript-Array-Notation.

Wenn das Element keine Kind-Elemente hat, dann ist `children` eine leere Liste mit einer `length` von `0`.

## Beispiele

```js
const myElement = document.getElementById("foo");
for (const child of myElement.children) {
  console.log(child.tagName);
}
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("Node.childNodes")}}
