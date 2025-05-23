---
title: "HTMLElement: draggable-Eigenschaft"
short-title: draggable
slug: Web/API/HTMLElement/draggable
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{APIRef("HTML Drag and Drop API")}}

Die **`draggable`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces liest und setzt einen {{jsxref("Boolean")}}-Wert, der angibt, ob das Element ziehbar ist.

Sie spiegelt den Wert des globalen HTML-Attributs [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable) wider.

## Wert

Ein {{jsxref("Boolean")}}-Wert, der `true` ist, wenn das Element ziehbar ist, andernfalls `false`.

## Beispiele

Das folgende Beispiel zeigt, wie die Fähigkeit eines Elements, per Skript gezogen zu werden, aktiviert oder deaktiviert werden kann:

```js
const draggableElement = document.querySelector(".draggable-element");
const notDraggableElement = document.querySelector(".not-draggable-element");

// enable the target element's ability to drag
draggableElement.draggable = true;

// disable the target element's ability to drag
notDraggableElement.draggable = false;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable) HTML-Attribut
- [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) Übersicht
