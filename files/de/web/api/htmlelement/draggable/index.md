---
title: "HTMLElement: draggable-Eigenschaft"
short-title: draggable
slug: Web/API/HTMLElement/draggable
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{APIRef("HTML Drag and Drop API")}}

Die **`draggable`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces ruft einen {{jsxref("Boolean")}}-Wert ab oder setzt ihn, der angibt, ob das Element ziehbar ist.

Sie spiegelt den Wert des globalen HTML-Attributs [`draggable`](/de/docs/Web/HTML/Global_attributes/draggable) wider.

## Wert

Ein {{jsxref("Boolean")}}-Wert, der `true` ist, wenn das Element ziehbar ist, andernfalls `false`.

## Beispiele

Das folgende Beispiel zeigt, wie die Fähigkeit eines Elements, gezogen zu werden, mittels Skript aktiviert oder deaktiviert werden kann:

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

- [`draggable`](/de/docs/Web/HTML/Global_attributes/draggable) globales HTML-Attribut
- [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) Übersicht
