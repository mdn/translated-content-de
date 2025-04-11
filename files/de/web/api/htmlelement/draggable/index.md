---
title: "HTMLElement: draggable-Eigenschaft"
short-title: draggable
slug: Web/API/HTMLElement/draggable
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML Drag and Drop API")}}

Die **`draggable`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces erhält und setzt einen {{jsxref("Boolean")}}-Wert, der angibt, ob das Element verschiebbar ist.

Sie spiegelt den Wert des globalen HTML-Attributs [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable) wider.

## Wert

Ein {{jsxref("Boolean")}}-Wert, der `true` ist, wenn das Element verschiebbar ist, andernfalls `false`.

## Beispiele

Das folgende Beispiel zeigt, wie man die Fähigkeit eines Elements, per Skript gezogen zu werden, aktiviert oder deaktiviert:

```js
const draggableElement = document.querySelector(".draggable-element");
const notDraggableElement = document.querySelector(".not-draggable-element");

// enable the target element's ability to drag
if (!draggableElement.draggable) {
  draggableElement.draggable = true;
}

// disable the target element's ability to drag
if (notDraggableElement.draggable) {
  notDraggableElement.draggable = false;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das globale HTML-Attribut [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)
- Überblick über die [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API)
