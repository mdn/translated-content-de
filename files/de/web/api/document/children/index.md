---
title: "Document: children-Eigenschaft"
short-title: children
slug: Web/API/Document/children
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

Die schreibgeschützte **`children`**-Eigenschaft gibt eine Live-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle Kind-[`Elemente`](/de/docs/Web/API/Element) des aufgerufenen Dokuments enthält.

Für HTML-Dokumente ist dies normalerweise nur das Wurzel-`<html>`-Element.

Siehe [`Element.children`](/de/docs/Web/API/Element/children) für Kinder-Elemente von spezifischen HTML-Elementen innerhalb des Dokuments.

## Wert

Eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), die eine Live- und geordnete Sammlung von DOM-Elementen ist, welche die Kinder des aktuellen Dokuments sind. Sie können auf die einzelnen Kindknoten in der Sammlung zugreifen, indem Sie entweder die [`item()`](/de/docs/Web/API/HTMLCollection/item)-Methode auf der Sammlung verwenden oder die JavaScript-Array-Notation nutzen.

Wenn das Dokument keine Elementkinder hat, ist `children` eine leere Liste mit einer `length` von `0`.

## Beispiele

```js
document.children;
// HTMLCollection [<html>]
// Usually only contains the root <html> element, the document's only direct child
```

Siehe [`Element.children`](/de/docs/Web/API/Element/children) für Kinder-Elemente von spezifischen HTML-Elementen innerhalb des Dokuments.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.children`](/de/docs/Web/API/Element/children)
- [`Node.childNodes`](/de/docs/Web/API/Node/childNodes)
