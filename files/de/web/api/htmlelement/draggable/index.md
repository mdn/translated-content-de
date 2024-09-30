---
title: "HTMLElement: draggable-Eigenschaft"
short-title: draggable
slug: Web/API/HTMLElement/draggable
l10n:
  sourceCommit: 71790d0ff0ecd94a2d734f81d98a3317b61aa468
---

{{APIRef("HTML Drag and Drop API")}}

Die **`draggable`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces liest und setzt ein {{jsxref("Boolean")}}-Primitiv, das angibt, ob das Element ziehbar ist.

Sie spiegelt den Wert des globalen HTML-Attributs [`draggable`](/de/docs/Web/HTML/Global_attributes/draggable) wider.

## Wert

Ein {{jsxref("Boolean")}}-Primitiv, das `true` ist, wenn das Element ziehbar ist, andernfalls `false`.

## Beispiele

Das folgende Beispiel zeigt, wie die Fähigkeit des Elements, per Skript gezogen zu werden, aktiviert oder deaktiviert werden kann:

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

- Globales HTML-Attribut [`draggable`](/de/docs/Web/HTML/Global_attributes#draggable)
- Überblick über die [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API)
