---
title: "Element: children-Eigenschaft"
short-title: children
slug: Web/API/Element/children
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ APIRef("DOM") }}

Die schreibgeschützte **`children`**-Eigenschaft gibt eine aktuelle [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle Kind-[`Elemente`](/de/docs/Web/API/Element) des Elements enthält, auf dem sie aufgerufen wurde.

`Element.children` enthält nur Elementknoten. Um alle Kindknoten, einschließlich Nicht-Element-Knoten wie Text- und Kommentarknoten, zu erhalten, verwenden Sie [`Node.childNodes`](/de/docs/Web/API/Node/childNodes).

## Wert

Eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), die eine aktuelle, geordnete Sammlung der DOM-Elemente darstellt, die Kinder von `node` sind. Sie können auf die einzelnen Kindknoten in der Sammlung zugreifen, indem Sie entweder die [`item()`](/de/docs/Web/API/HTMLCollection/item)-Methode auf der Sammlung verwenden oder die JavaScript-Array-ähnliche Notation benutzen.

Wenn das Element keine Kind-Elemente hat, ist `children` eine leere Liste mit einer `length` von `0`.

## Beispiele

```js
const myElement = document.getElementById("foo");
for (const child of myElement.children) {
  console.log(child.tagName);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node.childNodes`](/de/docs/Web/API/Node/childNodes)
