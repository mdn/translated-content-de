---
title: "Document: children-Eigenschaft"
short-title: children
slug: Web/API/Document/children
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

Die schreibgeschützte **`children`**-Eigenschaft gibt eine Live-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle Kind-[`Elemente`](/de/docs/Web/API/Element) des Dokuments enthält, auf das sie angewendet wurde.

Für HTML-Dokumente ist dies normalerweise nur das Wurzel-`<html>`-Element.

Siehe [`Element.children`](/de/docs/Web/API/Element/children) für Kindelemente spezifischer HTML-Elemente innerhalb des Dokuments.

## Wert

Eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), die eine Live-, geordnete Sammlung von DOM-Elementen ist, die Kinder des aktuellen Dokuments sind. Sie können auf die einzelnen Knoten in der Sammlung zugreifen, indem Sie entweder die Methode [`item()`](/de/docs/Web/API/HTMLCollection/item) auf der Sammlung verwenden oder JavaScript-Array-Notation verwenden.

Wenn das Dokument keine Element-Kinder hat, ist `children` eine leere Liste mit einer `length` von `0`.

## Beispiele

```js
document.children;
// HTMLCollection [<html>]
// Usually only contains the root <html> element, the document's only direct child
```

Siehe [`Element.children`](/de/docs/Web/API/Element/children) für Kindelemente spezifischer HTML-Elemente innerhalb des Dokuments.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.children`](/de/docs/Web/API/Element/children)
- [`Node.childNodes`](/de/docs/Web/API/Node/childNodes)
