---
title: "Dokument: children-Eigenschaft"
short-title: children
slug: Web/API/Document/children
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

Die schreibgeschützte **`children`**-Eigenschaft gibt eine Live-{{domxref("HTMLCollection")}} zurück, die alle Kind-{{domxref("Element", "Elemente")}} des Dokuments, auf dem sie aufgerufen wurde, enthält.

Für HTML-Dokumente ist dies in der Regel nur das Wurzel-`<html>`-Element.

Siehe {{domxref("Element.children")}} für Kindelemente spezifischer HTML-Elemente innerhalb des Dokuments.

## Wert

Eine {{ domxref("HTMLCollection") }}, die eine Live- und geordnete Sammlung der DOM-Elemente ist, die Kinder des aktuellen Dokuments sind. Sie können auf die einzelnen Knoten in der Sammlung entweder mit der Methode {{domxref("HTMLCollection.item()", "item()")}} auf die Sammlung oder durch die Verwendung der JavaScript-Array-Notation zugreifen.

Wenn das Dokument keine Kindelemente hat, ist `children` eine leere Liste mit einer `length` von `0`.

## Beispiele

```js
document.children;
// HTMLCollection [<html>]
// Enthält in der Regel nur das Wurzel-<html>-Element, das einzige direkte Kind des Dokuments
```

Siehe {{domxref("Element.children")}} für Kindelemente spezifischer HTML-Elemente innerhalb des Dokuments.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.children")}}
- {{domxref("Node.childNodes")}}
