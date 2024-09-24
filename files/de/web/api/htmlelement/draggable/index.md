---
title: "HTMLElement: draggable-Eigenschaft"
short-title: draggable
slug: Web/API/HTMLElement/draggable
l10n:
  sourceCommit: 71790d0ff0ecd94a2d734f81d98a3317b61aa468
---

{{APIRef("HTML Drag and Drop API")}}

Die **`draggable`**-Eigenschaft der {{domxref("HTMLElement")}}-Schnittstelle ruft ein {{jsxref("Boolean")}}-Primitiv ab und setzt dieses, das angibt, ob das Element ziehbar ist.

Sie spiegelt den Wert des HTML-globalen Attributs [`draggable`](/de/docs/Web/HTML/Global_attributes/draggable) wider.

## Wert

Ein {{jsxref("Boolean")}}-Primitiv, das `true` ist, wenn das Element ziehbar ist, andernfalls `false`.

## Beispiele

Das folgende Beispiel zeigt, wie Sie die Fähigkeit des Elements, per Skript gezogen zu werden, aktivieren oder deaktivieren können:

```js
const draggableElement = document.querySelector(".draggable-element");
const notDraggableElement = document.querySelector(".not-draggable-element");

// Fähigkeit des Ziel-Elements, gezogen zu werden, aktivieren
if (!draggableElement.draggable) {
  draggableElement.draggable = true;
}

// Fähigkeit des Ziel-Elements, gezogen zu werden, deaktivieren
if (notDraggableElement.draggable) {
  notDraggableElement.draggable = false;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`draggable`](/de/docs/Web/HTML/Global_attributes#draggable) HTML-globales Attribut
- [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) Übersicht
