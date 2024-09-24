---
title: "EditContext: attachedElements()-Methode"
short-title: attachedElements()
slug: Web/API/EditContext/attachedElements
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`attachedElements()`**-Methode des {{domxref("EditContext")}}-Interfaces gibt ein {{jsxref("Array")}} zurück, das nur ein Element enthält. Dieses Element ist das mit dem `EditContext`-Objekt verknüpfte Element.

## Syntax

```js-nolint
attachedElements()
```

### Rückgabewert

Ein {{jsxref("Array")}}, das ein {{domxref("HTMLElement")}}-Objekt enthält.

Es kann nur ein Element mit einer `EditContext`-Instanz verknüpft sein, daher wird das zurückgegebene Array immer ein Element enthalten. Falls die API in Zukunft erweitert wird, um mehrere verknüpfte Elemente zu unterstützen, wird der Rückgabewert ein Array mit mehreren Elementen sein.

## Beispiele

### Das mit einer `EditContext`-Instanz verknüpfte Element abrufen

Dieses Beispiel zeigt, wie die `attachedElements`-Methode verwendet wird, um das mit einer `EditContext`-Instanz verknüpfte Element zu erhalten.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;

const attachedElements = editContext.attachedElements();
console.log(attachedElements[0] === canvas); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{DOMxRef("EditContext")}}-Interface, zu dem es gehört.
